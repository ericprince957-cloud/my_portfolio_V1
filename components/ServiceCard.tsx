import type { Service } from "@/data/services";
import Reveal from "@/components/Reveal";

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <Reveal className="h-full" delay={Math.min(index * 0.06, 0.3)}>
      <div className="card h-full rounded-xl p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
          <Icon size={18} />
        </span>
        <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-subtle">{service.short}</p>
      </div>
    </Reveal>
  );
}
