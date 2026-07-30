import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import BlueprintSVG from "@/components/BlueprintSVG";
import {
  HardHat, FileText, Calculator, Shield, Zap, Users, ChevronRight, Award, Clock, Globe
} from "lucide-react";

const services = [
  { icon: Calculator, label: "Cost Estimating", desc: "First-principles pricing, subcontractor enquiry management, and detailed rate builds.", ref: "SVC-001" },
  { icon: FileText, label: "Bid Writing", desc: "Method statements, executive summaries, and quality submissions written against the evaluation criteria.", ref: "SVC-002" },
  { icon: Shield, label: "Full Tender Management", desc: "End-to-end estimate, write, and submit — full service from invitation to handover.", ref: "SVC-003" },
  { icon: Zap, label: "Rapid Go / No-Go Costing", desc: "Fast, high-level feasibility costing before committing to a full bid programme.", ref: "SVC-004" },
  { icon: HardHat, label: "PQQ / SQ Support", desc: "Pre-qualification and selection questionnaire submissions to get you to the next stage.", ref: "SVC-005" },
  { icon: Users, label: "Knowledge Transfer", desc: "Mentoring and upskilling for in-house junior estimators and bid coordinators.", ref: "SVC-006" },
];

const trustStats = [
  { value: "10+", label: "Years In-House Experience", ref: "T-001" },
  { value: "4", label: "Sectors Covered", ref: "T-002" },
  { value: "£m", label: "Value Tendered", ref: "T-003" },
  { value: "PI", label: "Professionally Insured", ref: "T-004" },
];

const clientTiers = [
  { tier: "SME", label: "Small & Medium Contractors", desc: "Regional specialists who need tender-quality estimating without the overhead of a full-time senior estimator." },
  { tier: "T2", label: "Tier 2 Contractors", desc: "Growing regional and national contractors tendering for larger frameworks and principal contractor packages." },
  { tier: "T1", label: "Tier 1 Principals", desc: "Major contractors requiring surge capacity, specialist sector knowledge, or second-opinion QA on key bids." },
  { tier: "ALL", label: "Any Sector, Any Scale", desc: "Civils, utilities, MEPH, and principal contractor works — four sectors, priced from first principles." },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden blueprint-grid-dark"
        style={{ backgroundColor: "#0D1F3C", minHeight: "92vh", display: "flex", alignItems: "center" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left — copy */}
            <div>
              <div className="eyebrow mb-6">Independent Estimating Consultancy · UK-Wide</div>
              <div className="ref-label mb-8">REF: EST-HOME-001</div>
              <h1
                className="animate-fade-up"
                style={{
                  color: "#F5F4F2",
                  fontSize: "clamp(44px, 6vw, 80px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                  marginBottom: "28px",
                }}
              >
                ESTIMATING
                <br />
                AND BIDS,
                <br />
                <span style={{ color: "#E8820C" }}>PRICED PROPERLY.</span>
              </h1>
              <p
                className="animate-fade-up"
                style={{
                  color: "rgba(245,244,242,0.75)",
                  fontSize: "18px",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  marginBottom: "40px",
                  animationDelay: "0.1s",
                  opacity: 0,
                  animation: "fadeUp 0.7s ease 0.15s forwards",
                }}
              >
                Senior estimating and bid writing for UK contractors — civils, utilities, MEPH and principal contractor works. Remote-first, with site visits where they affect the price.
              </p>
              <div className="flex flex-wrap gap-4" style={{ animation: "fadeUp 0.7s ease 0.3s forwards", opacity: 0 }}>
                <Link to="/contact" className="btn-amber">Start an Enquiry</Link>
                <Link to="/services" className="btn-ghost">View Services</Link>
              </div>

              {/* Divider */}
              <div className="mt-16 flex items-center gap-4">
                <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(42,74,127,0.5)" }} />
                <span className="ref-label">SITE VISITS AVAILABLE · REMOTE-FIRST</span>
                <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(42,74,127,0.5)" }} />
              </div>
            </div>

            {/* Right — blueprint SVG */}
            <div className="hidden lg:flex items-center justify-center">
              <BlueprintSVG className="w-full max-w-[420px] opacity-80" />
            </div>
          </div>
        </div>

        {/* Amber bottom accent */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", backgroundColor: "#E8820C" }} />
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-3">Who We Work With</div>
            <div className="ref-label mb-8">REF: EST-HOME-002</div>
            <h2 style={{ color: "#0D1F3C", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, marginBottom: "16px" }}>
              Built for UK Construction.
              <br />
              <span style={{ color: "#2A4A7F" }}>From SME to Tier 1.</span>
            </h2>
            <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "18px", lineHeight: 1.75, maxWidth: "640px", marginBottom: "64px" }}>
              Whether you're a growing regional contractor or a Tier 1 principal, the challenge is the same: submitting quality tenders without carrying the permanent overhead of a full estimating function.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: "1px solid #D6D3CD", backgroundColor: "#D6D3CD" }}>
            {clientTiers.map((item, i) => (
              <ScrollReveal key={item.tier} delay={i * 80}>
                <div className="h-full p-8" style={{ backgroundColor: "#F5F4F2" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#0D1F3C",
                      color: "#E8820C",
                      fontWeight: 900,
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      padding: "4px 10px",
                      marginBottom: "16px",
                      fontFamily: "monospace",
                    }}
                  >
                    {item.tier}
                  </div>
                  <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "18px", marginBottom: "10px" }}>{item.label}</h3>
                  <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "15px", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ──────────────────────────────────────── */}
      <section className="py-20 blueprint-grid-dark" style={{ backgroundColor: "#0D1F3C" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: "1px solid rgba(42,74,127,0.3)", backgroundColor: "rgba(42,74,127,0.3)" }}>
            {trustStats.map((stat, i) => (
              <ScrollReveal key={stat.ref} delay={i * 80}>
                <div className="p-10 text-center" style={{ backgroundColor: "#0D1F3C" }}>
                  <div style={{ color: "#E8820C", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "rgba(245,244,242,0.65)", fontSize: "13px", marginTop: "10px", letterSpacing: "0.04em" }}>
                    {stat.label}
                  </div>
                  <div className="ref-label mt-3">{stat.ref}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p style={{ color: "rgba(245,244,242,0.35)", fontSize: "12px", marginTop: "16px", fontFamily: "monospace", letterSpacing: "0.08em" }}>
              * Professional indemnity insured · Remote-first · Site visits available where required
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES SNAPSHOT ────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-3">Core Services</div>
            <div className="ref-label mb-8">REF: EST-HOME-003</div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <h2 style={{ color: "#0D1F3C", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900 }}>
                What We Deliver.
              </h2>
              <Link
                to="/services"
                className="flex items-center gap-2 font-semibold transition-colors duration-150"
                style={{ color: "#2A4A7F", fontSize: "14px", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                Full Service Ledger <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={svc.ref} delay={i * 60}>
                  <div
                    className="service-card p-8"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #D6D3CD",
                      height: "100%",
                    }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(13,31,60,0.06)",
                          border: "1px solid rgba(13,31,60,0.08)",
                        }}
                      >
                        <Icon size={20} style={{ color: "#2A4A7F" }} />
                      </div>
                      <div className="ref-label">{svc.ref}</div>
                    </div>
                    <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "18px", marginBottom: "10px" }}>{svc.label}</h3>
                    <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "15px", lineHeight: 1.7 }}>{svc.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#2A4A7F" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="eyebrow mb-4" style={{ color: "rgba(232,130,12,0.9)" }}>Ready to Discuss Your Tender?</div>
            <h2 style={{ color: "#F5F4F2", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, marginBottom: "16px" }}>
              Let's Talk About Your Next Bid.
            </h2>
            <p style={{ color: "rgba(245,244,242,0.7)", fontSize: "18px", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 40px" }}>
              No obligation. One conversation to understand your project, timeline, and what support would make the difference.
            </p>
            <Link to="/contact" className="btn-amber">Get in Touch</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}