import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Shared chrome for the interactive tools. Keeps the disclaimer consistent —
 * every tool output is a decision aid, not advice or a quotation.
 */
export default function ToolLayout({ eyebrow, refCode, title, intro, children, disclaimer }) {
  return (
    <div>
      <section
        className="blueprint-grid-dark py-20"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 mb-8"
            style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}
          >
            <ArrowLeft size={14} /> All Tools
          </Link>

          <div className="eyebrow mb-3">{eyebrow}</div>
          <div className="ref-label mb-6">REF: {refCode}</div>
          <h1
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              maxWidth: "780px",
            }}
          >
            {title}
          </h1>
          {intro && (
            <p
              style={{
                color: "rgba(245,244,242,0.68)",
                fontSize: "17px",
                lineHeight: 1.75,
                maxWidth: "660px",
                marginTop: "18px",
              }}
            >
              {intro}
            </p>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "#E8820C",
          }}
        />
      </section>

      <section className="py-16" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          <ScrollReveal>{children}</ScrollReveal>

          {disclaimer && (
            <div
              style={{
                border: "1px solid #D6D3CD",
                borderLeft: "4px solid #2A4A7F",
                backgroundColor: "#FFFFFF",
                padding: "22px",
                marginTop: "40px",
              }}
            >
              <div className="flex items-start gap-3">
                <Info size={17} color="#2A4A7F" strokeWidth={2.2} style={{ marginTop: "2px", flexShrink: 0 }} />
                <p style={{ color: "#1A1A1A", opacity: 0.7, fontSize: "14px", lineHeight: 1.7 }}>
                  {disclaimer}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#0D1F3C" }}>
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8 text-center">
          <h2
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(24px, 2.8vw, 34px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              maxWidth: "640px",
              margin: "0 auto 18px",
            }}
          >
            Want a second opinion on the real thing?
          </h2>
          <p
            style={{
              color: "rgba(245,244,242,0.7)",
              fontSize: "16px",
              maxWidth: "540px",
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Tools are a starting point. A conversation about your actual tender is more useful.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-transform hover:translate-x-1"
            style={{ backgroundColor: "#E8820C", color: "#0D1F3C", fontSize: "16px" }}
          >
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

/** Consistent field wrapper for tool inputs. */
export function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <label
        style={{
          display: "block",
          color: "#0D1F3C",
          fontWeight: 700,
          fontSize: "14px",
          marginBottom: hint ? "4px" : "10px",
        }}
      >
        {label}
      </label>
      {hint && (
        <p style={{ color: "rgba(26,26,26,0.55)", fontSize: "13px", marginBottom: "10px", lineHeight: 1.5 }}>
          {hint}
        </p>
      )}
      {children}
    </div>
  );
}

/** Segmented button group — used instead of native selects for clarity on mobile. */
export function OptionGroup({ options, value, onChange, columns = 2 }) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            style={{
              padding: "13px 14px",
              fontSize: "14px",
              fontWeight: active ? 700 : 500,
              textAlign: "left",
              border: `1px solid ${active ? "#E8820C" : "#D6D3CD"}`,
              backgroundColor: active ? "rgba(232,130,12,0.1)" : "#FFFFFF",
              color: active ? "#0D1F3C" : "rgba(26,26,26,0.7)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {opt.label}
            {opt.sub && (
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 400,
                  opacity: 0.6,
                  marginTop: "3px",
                }}
              >
                {opt.sub}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ToolCard({ children, dark = false }) {
  return (
    <div
      style={{
        border: dark ? "none" : "1px solid #D6D3CD",
        backgroundColor: dark ? "#0D1F3C" : "#FFFFFF",
        padding: "32px",
      }}
    >
      {children}
    </div>
  );
}
