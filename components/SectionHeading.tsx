import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ badge, title, description, align = "center" }: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal>
      <div className={"max-w-2xl " + alignCls}>
        {badge && (
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-gold uppercase">
            {badge}
          </span>
        )}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-subtle">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
