import { useState, type FormEvent } from "react";
import { portfolioConfig, images } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { Send, Github, Mail, Linkedin, Loader2, CheckCircle, AlertCircle, MessageCircle, Phone } from "lucide-react";

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }
type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { contact, social, contactInfo } = portfolioConfig;
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message should be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      if (contact.formEndpoint) {
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Submission failed");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Build dynamic WhatsApp message based on form data
  const buildWhatsAppMessage = () => {
    const base = `Hi Vector, I saw your portfolio and I'd like to discuss a project with you.`;
    if (formData.name || formData.subject || formData.message) {
      const parts = [base, ""];
      if (formData.name) parts.push(`My name is ${formData.name}.`);
      if (formData.subject) parts.push(`Regarding: ${formData.subject}`);
      if (formData.message) parts.push(`Details: ${formData.message}`);
      return encodeURIComponent(parts.join("\n\n"));
    }
    return encodeURIComponent(base);
  };

  // Build dynamic email link based on form data
  const buildEmailLink = () => {
    const subject = formData.subject || "Project Inquiry";
    const body = formData.message
      ? `Hi Vector,\n\nI came across your portfolio and I'd like to discuss a project with you.\n\nProject: ${formData.subject}\n\n${formData.message}\n\nLooking forward to hearing from you.`
      : `Hi Vector,\n\nI came across your portfolio and I'd like to discuss a project with you.\n\nLooking forward to hearing from you.`;
    return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" aria-hidden="true" />
      {images.contact && (
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <img src={images.contact} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="Contact" title={contact.heading} description={contact.description} />
        </ScrollReveal>
        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-100 mb-1.5">Name <span className="text-red-400">*</span></label>
                <input id="name" type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${errors.name ? "border-red-400/50" : "border-slate-700"} text-slate-100 placeholder-slate-500 focus:border-indigo-400/50 focus:outline-none transition-colors`} placeholder="Your name" aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-100 mb-1.5">Email <span className="text-red-400">*</span></label>
                <input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${errors.email ? "border-red-400/50" : "border-slate-700"} text-slate-100 placeholder-slate-500 focus:border-indigo-400/50 focus:outline-none transition-colors`} placeholder="your@email.com" aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-100 mb-1.5">Subject <span className="text-red-400">*</span></label>
                <input id="subject" type="text" value={formData.subject} onChange={(e) => handleChange("subject", e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${errors.subject ? "border-red-400/50" : "border-slate-700"} text-slate-100 placeholder-slate-500 focus:border-indigo-400/50 focus:outline-none transition-colors`} placeholder="What's this about?" aria-invalid={!!errors.subject} />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-100 mb-1.5">Message <span className="text-red-400">*</span></label>
                <textarea id="message" rows={5} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${errors.message ? "border-red-400/50" : "border-slate-700"} text-slate-100 placeholder-slate-500 focus:border-indigo-400/50 focus:outline-none transition-colors resize-none`} placeholder="Tell me about your project..." aria-invalid={!!errors.message} />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer">
                {status === "loading" ? (<><Loader2 size={16} className="animate-spin" /> Sending...</>) : (<><Send size={16} /> Start a Conversation</>)}
              </button>
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-400/10 border border-green-400/30 text-green-400 text-sm animate-fade-in">
                  <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-400/10 border border-red-400/30 text-red-400 text-sm animate-fade-in">
                  <AlertCircle size={16} /> Something went wrong. Please try again or reach out directly.
                </div>
              )}
              {!contact.formEndpoint && status === "idle" && (
                <p className="text-xs text-slate-500 text-center">💡 Tip: Use the quick contact buttons on the right for instant replies.</p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact Info + Quick Actions */}
          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="space-y-4">
              {/* Quick Contact Buttons */}
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/40">
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Quick Contact</h3>
                <p className="text-sm text-slate-400 mb-4">Reach out instantly through your preferred channel. Messages are pre-filled for you.</p>
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/2347084547988?text=${buildWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={18} className="text-green-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-100 group-hover:text-green-400 transition-colors">WhatsApp</p>
                      <p className="text-xs text-slate-500 truncate">{contactInfo.whatsapp}</p>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a
                    href={`https://t.me/Vectorcodes?text=Hi%20Vector%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                      <Send size={18} className="text-sky-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-100 group-hover:text-sky-400 transition-colors">Telegram</p>
                      <p className="text-xs text-slate-500 truncate">@{contactInfo.telegram}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={buildEmailLink()}
                    className="flex items-center gap-3 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-100 group-hover:text-indigo-400 transition-colors">Email</p>
                      <p className="text-xs text-slate-500 truncate">{contactInfo.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/40">
                <h3 className="text-sm font-semibold text-slate-100 mb-4">Find Me Online</h3>
                <div className="space-y-3">
                  <a href={social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-slate-100 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center"><Github size={16} /></div>
                    <div><p className="text-sm font-medium text-slate-100">GitHub</p><p className="text-xs text-slate-500">View my code</p></div>
                  </a>
                  <a href={`https://t.me/${contactInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center"><Send size={14} /></div>
                    <div><p className="text-sm font-medium text-slate-100">Telegram</p><p className="text-xs text-slate-500">@{contactInfo.telegram}</p></div>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center"><Mail size={16} /></div>
                    <div><p className="text-sm font-medium text-slate-100">Email</p><p className="text-xs text-slate-500">{contactInfo.email}</p></div>
                  </a>
                  <a href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center"><Phone size={16} /></div>
                    <div><p className="text-sm font-medium text-slate-100">WhatsApp</p><p className="text-xs text-slate-500">{contactInfo.whatsapp}</p></div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/40">
                <h3 className="text-sm font-semibold text-slate-100 mb-3">Based in</h3>
                <p className="text-slate-400 text-sm">{portfolioConfig.location}</p>
                <p className="text-slate-500 text-xs mt-2">Available for remote work worldwide</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
