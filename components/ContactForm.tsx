"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const projectTypes = [
  "Business Website",
  "E-commerce Store",
  "Custom Web Application",
  "Portal / Dashboard",
  "Website Redesign",
  "Website Maintenance",
  "Other",
];

const budgets = [
  "₦30,000 – ₦80,000",
  "₦80,000 – ₦150,000",
  "₦150,000 – ₦300,000",
  "₦300,000+",
  "Not sure yet",
];

const WHATSAPP_NUMBER = "2347084547988";

const inputCls =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-subtle/50 transition-colors focus:border-gold/60 focus:outline-none";
const labelCls = "mb-1.5 block text-xs font-medium text-subtle";
const errorCls = "mt-1 text-xs text-red-400";

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  description: string;
}

const initialForm: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  whatsapp: "",
  projectType: "",
  budget: "",
  description: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate(): boolean {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.whatsapp.trim()) {
      errs.whatsapp = "Please enter your WhatsApp number.";
    } else if (form.whatsapp.replace(/\D/g, "").length < 10) {
      errs.whatsapp = "Please enter a valid phone number.";
    }
    if (!form.projectType) errs.projectType = "Please select a project type.";
    if (!form.description.trim()) {
      errs.description = "Please describe your project.";
    } else if (form.description.trim().length < 20) {
      errs.description = "Please give a little more detail (at least 20 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // Simulated processing, then hand off to WhatsApp with a prefilled message.
    await new Promise((r) => setTimeout(r, 1200));

    const lines = [
      "New Project Inquiry — Vector Codes",
      "",
      "Name: " + form.fullName,
      "Business: " + (form.businessName || "—"),
      "Email: " + form.email,
      "WhatsApp: " + form.whatsapp,
      "Project type: " + form.projectType,
      "Budget: " + (form.budget || "Not specified"),
      "",
      "Project description:",
      form.description,
    ];
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="card rounded-xl p-8 text-center" role="status">
        <CheckCircle2 size={32} className="mx-auto text-gold" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-white">Almost there!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-subtle">
          WhatsApp should have opened with your project details prefilled — press send and we'll
          get back to you, usually within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
          }}
          className="ghost-btn mt-6 rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card rounded-xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelCls}>Full name *</label>
          <input id="fullName" type="text" value={form.fullName} onChange={update("fullName")} className={inputCls} placeholder="Your name" autoComplete="name" />
          {errors.fullName && <p className={errorCls}>{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="businessName" className={labelCls}>Business name</label>
          <input id="businessName" type="text" value={form.businessName} onChange={update("businessName")} className={inputCls} placeholder="Your business (optional)" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email address *</label>
          <input id="email" type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="you@company.com" autoComplete="email" />
          {errors.email && <p className={errorCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelCls}>WhatsApp number *</label>
          <input id="whatsapp" type="tel" value={form.whatsapp} onChange={update("whatsapp")} className={inputCls} placeholder="080..." autoComplete="tel" />
          {errors.whatsapp && <p className={errorCls}>{errors.whatsapp}</p>}
        </div>
        <div>
          <label htmlFor="projectType" className={labelCls}>Project type *</label>
          <select id="projectType" value={form.projectType} onChange={update("projectType")} className={inputCls}>
            <option value="">Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && <p className={errorCls}>{errors.projectType}</p>}
        </div>
        <div>
          <label htmlFor="budget" className={labelCls}>Estimated budget</label>
          <select id="budget" value={form.budget} onChange={update("budget")} className={inputCls}>
            <option value="">Select a range (optional)</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelCls}>Project description *</label>
          <textarea id="description" value={form.description} onChange={update("description")} rows={5} className={inputCls} placeholder="Tell us about your project — what you need, what problems you want to solve, and any timeline you have in mind." />
          {errors.description && <p className={errorCls}>{errors.description}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="gold-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Preparing your message…
          </>
        ) : (
          <>
            Submit Inquiry <ArrowRight size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-subtle">
        Submitting opens WhatsApp with your details prefilled — you just press send.
      </p>
    </form>
  );
}
