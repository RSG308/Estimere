import ScrollReveal from "@/components/ScrollReveal";

/**
 * Shared layout for legal / policy pages (Privacy, Cookies, Terms).
 * Keeps the engineering-drawing design language consistent with the rest of the site.
 */
export default function LegalLayout({ eyebrow, refCode, title, lastUpdated, children }) {
  return (
    <div>
      {/* Header */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">{eyebrow}</div>
          <div className="ref-label mb-8">REF: {refCode}</div>
          <h1
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 900,
              maxWidth: "760px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          {lastUpdated && (
            <p
              style={{
                color: "rgba(245,244,242,0.5)",
                fontSize: "13px",
                fontFamily: "monospace",
                letterSpacing: "0.08em",
                marginTop: "20px",
              }}
            >
              LAST UPDATED: {lastUpdated}
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

      {/* Body */}
      <section className="py-20" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="legal-prose">{children}</div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

/** Section heading used within legal pages. */
export function LegalSection({ number, title, children }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div className="flex items-baseline gap-3" style={{ marginBottom: "14px" }}>
        <span
          style={{
            color: "#E8820C",
            fontFamily: "monospace",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          {number}
        </span>
        <h2
          style={{
            color: "#0D1F3C",
            fontWeight: 800,
            fontSize: "22px",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          color: "#1A1A1A",
          opacity: 0.75,
          fontSize: "16px",
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Highlighted note block — used for "seek your own advice" style callouts. */
export function LegalNote({ children }) {
  return (
    <div
      style={{
        border: "1px solid #D6D3CD",
        borderLeft: "4px solid #E8820C",
        backgroundColor: "#ffffff",
        padding: "24px",
        marginBottom: "48px",
        color: "#1A1A1A",
        opacity: 0.8,
        fontSize: "15px",
        lineHeight: 1.75,
      }}
    >
      {children}
    </div>
  );
}
