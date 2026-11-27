import type { Metadata } from "next";
import ProjectsBrowser from "@/components/ProjectsBrowser";
import Link from "next/link";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Web Design & Development Portfolio | Vector Codes",
  description:
    "Explore client websites, e-commerce projects and digital platforms built by Vector Codes for businesses and organisations.",
};

const currentSystems = [
  {
    name: "Ugoo Uzoho & Company",
    type: "Client website & administration",
    status: "Client delivery",
    description:
      "A professional digital presence for the law firm, alongside a dedicated admin workspace being configured for visitor analytics, click insights, image and quote management, and account settings.",
  },
  {
    name: "Vector Control",
    type: "Internal business operations platform",
    status: "In development",
    description:
      "A central control environment designed to organise multiple businesses in one dashboard, with separate workspaces for Vector Codes and Vectors Realty.",
  },
  {
    name: "Vectors Realty",
    type: "Real estate business workspace",
    status: "In development",
    description:
      "A dedicated real estate workspace within Vector Control, intended to support property operations and business growth without creating a disconnected second dashboard.",
  },
];

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
            Client projects, internal products and business systems in
            development — clearly labelled. We distinguish delivered work
            from ongoing builds.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
              Current Company Work
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Client delivery and systems we are building
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-subtle">
              Our work now includes client-facing websites as well as internal
              tools that help us operate and grow multiple business lines.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {currentSystems.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <article className="card h-full rounded-xl p-6">
                  <span className="inline-flex rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-medium text-gold">
                    {item.status}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gold/80">
                    {item.type}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-subtle">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <section className="mb-12" aria-labelledby="featured-case-studies">
          <h2 id="featured-case-studies" className="text-xl font-bold text-white">Selected client case studies</h2>
          <p className="mt-2 text-sm text-subtle">Explore examples of websites and digital platforms delivered for clients.</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((project) => project.category === "Client Project" && project.caseStudy).map((project) => (
              <li key={project.slug} className="card rounded-lg p-4">
                <Link href={"/projects/" + project.slug} className="text-sm font-semibold text-white hover:text-gold">{project.name} <span aria-hidden="true">→</span></Link>
                <p className="mt-1 text-xs text-subtle">{project.type}</p>
              </li>
            ))}
          </ul>
        </section>
        <ProjectsBrowser />
      </div>
    </>
  );
}
