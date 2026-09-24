import { useState, type FormEvent } from "react";
import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { Send, Github, Mail, Linkedin, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { contact, social } = portfolioConfig;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    /**
     * ============================================================
     * FORM SUBMISSION
     * ============================================================
     * 
     * To connect a form backend service:
     * 
     * 1. FORMSPREE:
     *    - Sign up at https://formspree.io
     *    - Create a form and get your form ID
     *    - Set contact.formEndpoint in config/index.ts to:
     *      "https://formspree.io/f/YOUR_FORM_ID"
     * 
     * 2. EMAILJS:
     *    - Sign up at https://emailjs.com
     *    - Configure your service, template, and public key
     *    - Replace the fetch call below with EmailJS send
     * 
     * 3. CUSTOM BACKEND:
     *    - Set contact.formEndpoint to your API URL
     *    - Ensure your backend handles POST requests with the form data
     * 
     * IMPORTANT: Never put secret keys in this file.
     * Use environment variables for sensitive configuration.
     * ============================================================
     */

    try {
      if (contact.formEndpoint) {
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Submission failed");
      }

      // Simulate success for demo (remove when backend is connected)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Contact"
            title={contact.heading}
            description={contact.description}
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-surface-lighter border ${
                    errors.name ? "border-red-400/50" : "border-border"
                  } text-text placeholder-text-dim focus:border-primary/50 focus:outline-none transition-colors`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-surface-lighter border ${
                    errors.email ? "border-red-400/50" : "border-border"
                  } text-text placeholder-text-dim focus:border-primary/50 focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-surface-lighter border ${
                    errors.subject ? "border-red-400/50" : "border-border"
                  } text-text placeholder-text-dim focus:border-primary/50 focus:outline-none transition-colors`}
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-surface-lighter border ${
                    errors.message ? "border-red-400/50" : "border-border"
                  } text-text placeholder-text-dim focus:border-primary/50 focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Start a Conversation
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-400/10 border border-green-400/30 text-green-400 text-sm animate-fade-in">
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-400/10 border border-red-400/30 text-red-400 text-sm animate-fade-in">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or reach out directly.
                </div>
              )}
              {!contact.formEndpoint && status === "idle" && (
                <p className="text-xs text-text-dim text-center">
                  Form backend not configured. Connect Formspree, EmailJS, or a custom backend to enable submissions.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-surface/40">
                <h3 className="text-lg font-semibold text-text mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-surface-lighter border border-border flex items-center justify-center">
                        <Github size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">GitHub</p>
                        <p className="text-xs text-text-dim">View my code</p>
                      </div>
                    </a>
                  )}
                  {social.email && (
                    <a
                      href={`mailto:${social.email}`}
                      className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-surface-lighter border border-border flex items-center justify-center">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">Email</p>
                        <p className="text-xs text-text-dim">Send a message</p>
                      </div>
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-surface-lighter border border-border flex items-center justify-center">
                        <Linkedin size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">LinkedIn</p>
                        <p className="text-xs text-text-dim">Professional profile</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Quick info */}
              <div className="p-6 rounded-xl border border-border bg-surface/40">
                <h3 className="text-sm font-semibold text-text mb-3">Based in</h3>
                <p className="text-text-muted text-sm">{portfolioConfig.location}</p>
                <p className="text-text-dim text-xs mt-2">Available for remote work and collaboration</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
