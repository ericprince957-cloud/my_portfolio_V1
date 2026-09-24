import { useState, useRef, useEffect, type ReactNode } from "react";

/**
 * ============================================================
 * IMAGE WITH FALLBACK
 * ============================================================
 * Displays an image from URL with a professional fallback
 * if the URL is empty or fails to load.
 * ============================================================
 */
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
  fallbackClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackText = "PE",
  className = "",
  fallbackClassName = "",
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-surface-lighter border border-border ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-primary font-mono font-bold text-lg">{fallbackText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      loading="lazy"
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

/**
 * ============================================================
 * SCROLL REVEAL
 * ============================================================
 * Reveals content when it scrolls into view.
 * ============================================================
 */
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * ============================================================
 * SECTION HEADING
 * ============================================================
 */
interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ badge, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-primary border border-primary/30 rounded-full mb-4 bg-primary/5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
      {description && (
        <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}

/**
 * ============================================================
 * STATUS INDICATOR
 * ============================================================
 */
interface StatusIndicatorProps {
  label: string;
  message: string;
}

export function StatusIndicator({ label, message }: StatusIndicatorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 hover:border-primary/50 transition-colors text-sm cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Developer status"
      >
        <span className="status-dot" />
        <span className="text-text-muted">{label}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-3 rounded-lg glass-card text-sm text-text-muted w-64 z-50 animate-fade-in">
          {message}
        </div>
      )}
    </div>
  );
}

/**
 * ============================================================
 * CODE DECORATION
 * ============================================================
 * Subtle developer-themed code snippet for visual decoration.
 * ============================================================
 */
export function CodeDecoration() {
  return (
    <div className="code-block text-text-dim hidden md:block" aria-hidden="true">
      <span className="text-primary">const</span>{" "}
      <span className="text-accent">developer</span> = {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-text-muted">name</span>:{" "}
      <span className="text-green-400">"Prince Eric"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-text-muted">role</span>:{" "}
      <span className="text-green-400">"Web Developer"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-text-muted">focus</span>:{" "}
      <span className="text-green-400">"Building"</span>
      <br />
      {"}"};
    </div>
  );
}
