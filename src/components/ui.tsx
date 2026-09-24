import { useState, useRef, useEffect, type ReactNode } from "react";

/**
 * Image with fallback - shows initials if image fails to load
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
        className={`flex items-center justify-center bg-slate-800 border border-slate-700 ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-indigo-400 font-mono font-bold text-lg">{fallbackText}</span>
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
 * Scroll reveal animation
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
 * Section heading component
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
        <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-400/30 rounded-full mb-4 bg-indigo-400/5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">{title}</h2>
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}

/**
 * Status indicator with popup
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
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/80 hover:border-indigo-400/50 transition-colors text-sm cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Developer status"
      >
        <span className="status-dot" />
        <span className="text-slate-400">{label}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-3 rounded-lg glass-card text-sm text-slate-400 w-64 z-50 animate-fade-in">
          {message}
        </div>
      )}
    </div>
  );
}

/**
 * Code decoration element
 */
export function CodeDecoration() {
  return (
    <div className="code-block text-slate-500 hidden md:block" aria-hidden="true">
      <span className="text-indigo-400">const</span>{" "}
      <span className="text-cyan-400">developer</span> = {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-slate-400">name</span>:{" "}
      <span className="text-green-400">"Vector"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-slate-400">brand</span>:{" "}
      <span className="text-green-400">"Vector Codes"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-slate-400">role</span>:{" "}
      <span className="text-green-400">"Web Developer"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-slate-400">focus</span>:{" "}
      <span className="text-green-400">"Building"</span>
      <br />
      {"}"};
    </div>
  );
}
