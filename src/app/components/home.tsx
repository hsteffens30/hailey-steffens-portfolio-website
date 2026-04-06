import React from "react";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Video,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  logoSrc?: string;
  logoScale?: number;
};

type SpeakingItem = {
  title: string;
  event: string;
  date: string;
  icon: LucideIcon;
  type: string;
  href: string;
  thumbnailSrc?: string;
};

export function Home() {
  const sectionContainer = "mx-auto w-full max-w-5xl px-6";
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2", color: "#111111" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className={`relative ${sectionContainer}`}>
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-1000"
            style={{ backgroundColor: "#FF6F61", animation: "blob 7s infinite" }}
          />
          <style>{`@keyframes blob {0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(30px,-50px) scale(1.1);}66%{transform:translate(-20px,20px) scale(0.9);}}@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}`}</style>

          <div className="relative z-10">
            <h1 className="mb-6 max-w-4xl" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: "1.15", fontWeight: 400 }}>
              Making hard problems feel simple.
            </h1>
            <p className="mb-10 text-xl max-w-2xl" style={{ fontFamily: "Inter, sans-serif", opacity: 0.8, lineHeight: "1.7" }}>
              I am a curious, user‑obsessed Product Manager who loves solving real problems that make people’s lives better.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="group px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#FF6F61", color: "#FAF7F2", fontFamily: "Inter, sans-serif", fontSize: "1.125rem", fontWeight: 600, boxShadow: "0 10px 30px rgba(255, 111, 97, 0.3)" }}
                onClick={() => scrollToSection("contact")}
              >
                <span className="flex items-center gap-2">Get in touch <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
              </button>
              <button type="button" className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: "white", color: "#111111", fontFamily: "Inter, sans-serif", fontSize: "1.125rem", fontWeight: 600, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }} onClick={() => scrollToSection("experience")}>
                View my work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className={sectionContainer}>
          <div className="space-y-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm mb-6" style={{ backgroundColor: "rgba(255, 111, 97, 0.15)", color: "#FF6F61", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>About</span>
              <h2 className="mb-8" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, maxWidth: "32rem" }}>Hi! I'm Hailey.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed" style={{ fontFamily: "Inter, sans-serif", opacity: 0.8 }}>
              <div className="space-y-4">
                <p>I've always been passionate about how things work and the way people think.</p>
                <p>That curiosity and a love for problem-solving led me to product work where I get to figure out the "why" behind user pains and transform them into thoughtful, intuitive experiences.</p>
              </div>
              <div className="space-y-4">
                <p>My CS background helps me work closely with engineering while staying grounded in what users actually need.</p>
                <p>Outside of work I’m usually skiing, traveling somewhere new, or picking up a new creative project. Always happiest when I’m learning something new.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience (same as original) */}
      <section id="experience" className="scroll-mt-6 py-24">
        <div className={sectionContainer}>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm mb-6" style={{ backgroundColor: "rgba(255, 111, 97, 0.15)", color: "#FF6F61", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Experience</span>
            <h2 className="mb-3" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>Where I've been</h2>
          </div>

          <div className="space-y-4">
            {([
              { role: "Technical Program Manager Intern", company: "Microsoft", logoSrc: "/logos/Microsoft.png", logoScale: 0.88, period: "Jun 2025 - Sep 2025", description: "Owned Power BI feature spec, leading user discovery with 300+ users. Delivered full vision, requirementments, and roadmap 3+ weeks early while aligning engineer, design, and leadership." },
              { role: "Program Manager Intern", company: "Korry Electronics", logoSrc: "/logos/Korry.png", period: "Jun 2023 - Sep 2023", description: "Drove 7 cross-functional initatives across engineering, manufacturing, and leadership using Agile practices. Drove customer-informed feature decisions." },
              { role: "Software Engineer Intern", company: "Korry Electronics", logoSrc: "/logos/Korry.png", period: "Jun 2024 - Sep 2024", description: "Built a C++ application that unblocked recurring microcontroller testing workflow. Drove adoption through clear technical documentation." },
              { role: "Research Assistant", company: "Western Washington University", logoSrc: "/logos/wwu.png", period: "Mar 2025 - Present", description: "Designed UX for privacy awareness tool and ran user studies to measure effectiveness." },
            ] as ExperienceItem[]).map((job, index) => (
              <div key={index} className="group p-8 rounded-2xl cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]" style={{ backgroundColor: "white" }}>
                <div className="mb-3 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-black/[0.06]" style={{ backgroundColor: "#FAF7F2" }} aria-hidden>
                      {job.logoSrc ? <img src={job.logoSrc} alt="" className="h-full w-full object-contain p-[0.4rem]" style={job.logoScale != null ? { transform: `scale(${job.logoScale})` } : undefined} loading="lazy" /> : <span className="font-semibold leading-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#FF6F61" }}>{job.company.trim().charAt(0).toUpperCase()}</span>}
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "1.375rem", fontWeight: 700 }}>{job.role}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#FF6F61", fontWeight: 600, fontSize: "1.0625rem" }}>{job.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm" style={{ fontFamily: "Inter, sans-serif", opacity: 0.6 }}>{job.period}</span>
                </div>
                <p className="leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif", opacity: 0.8 }}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-24">
        <div className={sectionContainer}>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm mb-6" style={{ backgroundColor: "rgba(255, 111, 97, 0.15)", color: "#FF6F61", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Speaking</span>
            <h2 className="mb-3" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>Talks & presentations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {([
              { title: "The Race to Modernize the Home: The Evolution of the Smart Speaker", event: "WWU Honors Capstone Presentation", date: "March 2025", icon: Video, type: "Recording", href: "https://youtu.be/xhMa8hTkkOo", thumbnailSrc: "/presentations/Capstone Presentation.jpg" },
              { title: "Coming Soon for DAX: User Defined Functions", event: "DWF Power BI User Group", date: "September 2025", icon: Video, type: "Recording", href: "https://youtu.be/uobJaYqA2AA?si=7mFsw7MfWfGm9s33", thumbnailSrc: "/presentations/DAXpres.jpg" },
            ] as SpeakingItem[]).map((talk, index) => (
              <a key={index} href={talk.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${talk.title} (${talk.type}) in a new tab`} className="group block overflow-hidden rounded-2xl no-underline transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2" style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)", color: "#111111" }}>
                <div className="relative aspect-video w-full overflow-hidden bg-[#FAF7F2]">
                  {talk.thumbnailSrc ? <img src={talk.thumbnailSrc} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" /> : <div className="flex h-full w-full items-center justify-center"><talk.icon className="h-14 w-14" style={{ color: "#FF6F61", opacity: 0.45 }} /></div>}
                  <span className="absolute bottom-3 right-3 rounded-full px-3 py-1 text-xs shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#FF6F61" }}>{talk.type}</span>
                </div>
                <div className="p-8">
                  <h3 className="mb-2" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "1.25rem", fontWeight: 700 }}>{talk.title}</h3>
                  <p className="mb-1" style={{ fontFamily: "Inter, sans-serif", opacity: 0.8 }}>{talk.event}</p>
                  <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", opacity: 0.5 }}>{talk.date}</p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"><span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "#FF6F61" }}>View</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "#FF6F61" }} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-24">
        <div className={sectionContainer}>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm mb-6" style={{ backgroundColor: "rgba(255, 111, 97, 0.15)", color: "#FF6F61", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Research</span>
            <h2 className="mb-3" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>Published work</h2>
          </div>
          <div className="group p-10 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01]" style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)" }}>
            <h3 className="mb-4" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "1.5rem", fontWeight: 700 }}>The Race to Modernize the Home: The Evolution of the Smart Speaker</h3>
            <p className="mb-6 text-lg leading-relaxed" style={{ fontFamily: "Inter, sans-serif", opacity: 0.8 }}>Analyzing how Amazon, Google, and Apple shared the smart-speaker market from 2014-2026 through early product decisions, ecosystem strategy, and long-term trade-offs. Paper highlights how coherence and trust ultimately outlast speed, breadth, and first-mover advantage in platform products.</p>
            <span className="inline-flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif", color: "#FF6F61", fontWeight: 600 }} aria-disabled="true">
              <span className="border-b-2 border-transparent transition-all">Publishing April 2026</span>
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-6 py-32">
        <div className={sectionContainer}>
          <div className="relative p-16 md:p-20 rounded-3xl text-center overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full" style={{ backgroundColor: "rgba(250, 247, 242, 0.2)", animation: "float 6s ease-in-out infinite" }} />
            <div className="relative z-10">
              <h2 className="mb-6" style={{ fontFamily: "Libre Baskerville, serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, color: "#111111" }}>Let's get in touch</h2>
              <p className="mb-10 text-xl max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "#111111", opacity: 0.8 }}>I'd love to chat! I'm always open to meeting new people, trading ideas, or talking through interesting problems.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="hsteffens30@gmail.com" className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: "#111111", color: "#FAF7F2", fontFamily: "Inter, sans-serif", fontSize: "1.125rem", fontWeight: 600, boxShadow: "0 4px 20px rgba(17, 17, 17, 0.2)" }}><span className="flex items-center gap-2"><Mail className="w-5 h-5" />Email me</span></a>
                <a href="https://www.linkedin.com/in/hailey-steffens/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: "#111111", color: "#FAF7F2", fontFamily: "Inter, sans-serif", fontSize: "1.125rem", fontWeight: 600, boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}><span className="flex items-center gap-2"><Linkedin className="w-5 h-5" />LinkedIn</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16" style={{ borderColor: "rgba(17, 17, 17, 0.08)", opacity: 0.5 }}>
        <div className={`${sectionContainer} text-center`}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}>© 2026 — Designed & built with care</p>
        </div>
      </footer>
    </div>
  );
}
