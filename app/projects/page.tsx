import type { Metadata } from "next";
import ProjectsBrowser from "@/components/ProjectsBrowser";

export const metadata: Metadata = {
  title: "Projects — Our Work",
  description:
    "Selected work from Vector Codes: business websites, e-commerce stores, student platforms and digital products — with live links and honest project statuses.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Portfolio
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our <span className="text-gold">Work</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Client projects, internal products and platforms in development — clearly labelled.
            Every live link points to a real, working website.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <ProjectsBrowser />
      </div>
    </>
  );
}
