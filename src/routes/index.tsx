import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/portrait-placeholder.jpg";
import projectInventory from "@/assets/project-inventory.jpg";
import projectScraper from "@/assets/project-scraper.jpg";
import projectIncubator from "@/assets/project-incubator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Ahmad — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer building admin dashboards, backend APIs and data pipelines with React, Node.js, GraphQL and AWS.",
      },
      { property: "og:title", content: "Muhammad Ahmad — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer building admin dashboards, backend APIs and data pipelines with React, Node.js, GraphQL and AWS.",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "muhammadahmad3537@gmail.com";
const GITHUB = "https://github.com/ahmad6186";
const LINKEDIN = "https://www.linkedin.com/in/mahmadev";

const projects = [
  {
    no: "01",
    image: projectInventory,
    title: "714 Inventory & Ticket Ops",
    blurb:
      "Admin dashboard features — detail views, tagging, status tracking and bulk actions — plus purchase and sales order data wired into a statistics dashboard.",
    tags: ["React", "GraphQL", "AWS"],
  },
  {
    no: "02",
    image: projectScraper,
    title: "Ticket Scraper",
    blurb:
      "Backend APIs for retrieving and filtering ticket marketplace data, with a redesigned schema and tuned queries for faster, more reliable retrieval.",
    tags: ["Node.js", "DynamoDB", "GraphQL"],
  },
  {
    no: "03",
    image: projectIncubator,
    title: "Smart Infant Incubator",
    blurb:
      "Web dashboard for a low-cost smart neonatal incubator: live vitals, historical reports, alerts, camera feed and role-based access for admins, doctors and parents.",
    tags: ["React", "Firebase", "Flask"],
  },
];

const experience = [
  {
    role: "Full Stack Intern",
    company: "HydraSoft — Remote, USA",
    period: "Oct 2025 — Mar 2026",
    points: [
      "Shipped admin dashboard features on a 10-person team for an inventory management and ticket operations platform.",
      "Integrated purchase and sales order data into a statistics dashboard, giving users reporting they didn't have before.",
      "Built backend APIs and data pipelines for ticket marketplace data on a 6-person team.",
    ],
  },
];

const skills = [
  { label: "Frontend", items: "React, JavaScript, HTML5, CSS, Tailwind CSS, Material UI" },
  { label: "Backend", items: "Node.js, GraphQL, REST API, Flask, Python" },
  { label: "Database", items: "MySQL, Amazon DynamoDB, Firebase Firestore" },
  { label: "Cloud & Auth", items: "AWS, Firebase Authentication" },
];

function Index() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased selection:bg-brand/20">
      <header className="fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            Muhammad Ahmad<span className="text-brand">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink/60">
            <a href="#work" className="hover:text-ink transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-ink transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="text-sm font-medium border border-ink/15 rounded-full px-4 py-1.5 hover:bg-ink hover:text-paper transition-colors"
          >
            Let's talk
          </a>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <section className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 rise">
              <div className="w-12 h-12 rounded-full border border-ink/15 bg-ink/[0.02] flex items-center justify-center text-xs font-display font-semibold text-ink/60">
                MA
              </div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
                <span className="w-2 h-2 rounded-full bg-brand soft-pulse" />
                Open to full-stack roles
              </div>
            </div>
            <h1 className="font-display font-semibold tracking-[-0.02em] leading-[0.95] text-[clamp(2.25rem,7vw,4.5rem)]">
              <span className="block rise">Full-stack work,</span>
              <span className="block rise" style={{ animationDelay: ".08s" }}>
                from schema
              </span>
              <span className="block rise text-brand" style={{ animationDelay: ".16s" }}>
                to last pixel.
              </span>
            </h1>
            <p
              className="mt-6 max-w-md text-base text-ink/65 leading-relaxed rise"
              style={{ animationDelay: ".26s" }}
            >
              Muhammad Ahmad is a Computer Engineering graduate and full-stack developer who has
              shipped production dashboards, backend APIs and data pipelines with React, Node.js,
              GraphQL and AWS.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center gap-3 rise"
              style={{ animationDelay: ".34s" }}
            >
              <a
                href="#work"
                className="bg-ink text-paper rounded-full px-5 py-2.5 text-sm font-medium hover:-translate-y-0.5 transition-transform"
              >
                See selected work
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors px-1"
              >
                Email me ↗
              </a>
              <a
                href="/Muhammad_Ahmad_CV_temp.pdf"
                download
                className="text-sm font-medium border border-ink/15 rounded-full px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
              >
                Download CV
              </a>
            </div>
            <div
              className="mt-10 flex gap-8 text-sm text-ink/50 rise"
              style={{ animationDelay: ".42s" }}
            >
              <div>
                <span className="font-display text-2xl text-ink block">3</span> projects shipped
              </div>
              <div>
                <span className="font-display text-2xl text-ink block">2</span> dev teams
              </div>
              <div>
                <span className="font-display text-2xl text-ink block">6</span> mo. production work
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 fadein" style={{ animationDelay: ".2s" }}>
            <img
              src={portrait}
              alt="Soft folded paper composition in neutral light"
              width={1024}
              height={1280}
              className="w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] object-cover rounded-2xl outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </section>

        <section id="work" className="mt-28">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-2xl font-medium tracking-tight">Selected work</h2>
            <span className="text-sm text-ink/40">
              {String(visibleProjects.length).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {visibleProjects.map((p, i) => (
              <Reveal key={p.no} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-ink/10 p-5 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-brand text-xs font-medium font-display mb-6">{p.no}</div>
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover rounded-xl outline-1 -outline-offset-1 outline-black/5 mb-5"
                  />
                  <h3 className="font-display text-lg font-medium">{p.title}</h3>
                  <p className="text-sm text-ink/55 mt-1 leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-ink/50">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-ink/10 rounded-full px-2.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((s) => !s)}
                className="text-sm font-medium border border-ink/15 rounded-full px-6 py-2.5 hover:bg-ink hover:text-paper transition-colors"
              >
                {showAllProjects ? "Show less" : "Show all projects"}
              </button>
            </div>
          )}
        </section>

        <section id="about" className="mt-28 grid lg:grid-cols-2 gap-10 border-t border-ink/10 pt-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
              A developer who thinks in systems — and sweats the last pixel.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-ink/65 leading-relaxed">
              <p>
                I build across the stack — database schema, APIs, and the interfaces on top. Most of
                that experience comes from working inside 6 to 10 person teams, picking up unfamiliar
                codebases quickly and shipping features end users actually notice.
              </p>
              {experience.map((e) => (
                <div key={e.role} className="border-t border-ink/10 pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg text-ink">{e.role}</h3>
                    <span className="text-sm text-ink/45">{e.period}</span>
                  </div>
                  <p className="text-sm text-ink/50 mt-1">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-brand" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="border-t border-ink/10 pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg text-ink">BSc Computer Engineering</h3>
                  <span className="text-sm text-ink/45">Dec 2022 — Jun 2026</span>
                </div>
                <p className="text-sm text-ink/50 mt-1">
                  University of Engineering and Technology, Lahore
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 border-t border-ink/10 pt-6">
                {skills.map((s) => (
                  <div key={s.label}>
                    <p className="text-xs uppercase tracking-[0.15em] text-ink/40">{s.label}</p>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer id="contact" className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-6">
            Have a project in mind
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="font-display text-[clamp(1.5rem,5vw,3.75rem)] leading-none tracking-tight hover:text-brand transition-colors break-all"
          >
            {EMAIL}
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-ink/50">
            <span>Muhammad Ahmad — Lahore, PK · +92-331-6939044</span>
            <div className="flex gap-6">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink transition-colors"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
