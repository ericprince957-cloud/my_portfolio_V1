import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="card rounded-xl p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
        <Icon size={18} />
      </span>
      <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-subtle">{service.short}</p>
    </div>
  );
}
