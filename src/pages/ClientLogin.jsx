import { Link } from "react-router-dom";
import BlueprintSVG from "@/components/BlueprintSVG";

export default function ClientLogin() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D1F3C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="blueprint-grid-dark"
    >
      {/* Background blueprint — blurred/faded to tease Phase 2 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.12,
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      >
        <BlueprintSVG className="w-[700px] h-[700px]" />
      </div>

      {/* Teaser content */}
      <div
        className="relative z-10 text-center px-6"
        style={{ maxWidth: "560px" }}
      >
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(232,130,12,0.4)",
            padding: "6px 16px",
            marginBottom: "32px",
            fontFamily: "Courier New, monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(232,130,12,0.75)",
            textTransform: "uppercase",
          }}
        >
          Phase 2 · Coming Soon
        </div>

        <h1
          style={{
            color: "#F5F4F2",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "20px",
          }}
        >
          CLIENT PORTAL
          <br />
          <span style={{ color: "#E8820C" }}>LAUNCHING SOON.</span>
        </h1>

        <p
          style={{
            color: "rgba(245,244,242,0.55)",
            fontSize: "17px",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}
        >
          The Estimere client portal will provide secure, real-time access to your bid-status dashboard, tender programme, and capacity calendar.
        </p>

        {/* Feature teasers */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-12"
          style={{ border: "1px solid rgba(42,74,127,0.3)", backgroundColor: "rgba(42,74,127,0.3)" }}
        >
          {[
            { label: "Bid Status Dashboard", sub: "Live tender tracking" },
            { label: "Capacity Calendar", sub: "Book time in advance" },
            { label: "Document Library", sub: "Secure file access" },
          ].map((feat) => (
            <div
              key={feat.label}
              style={{ backgroundColor: "rgba(13,31,60,0.8)", padding: "20px 16px" }}
            >
              <div style={{ color: "#E8820C", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>{feat.label}</div>
              <div style={{ color: "rgba(245,244,242,0.4)", fontSize: "12px", fontFamily: "monospace", letterSpacing: "0.06em" }}>{feat.sub}</div>
            </div>
          ))}
        </div>

        <Link
          to="/"
          style={{
            display: "inline-block",
            color: "rgba(245,244,242,0.55)",
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1px solid rgba(245,244,242,0.2)",
            paddingBottom: "2px",
            transition: "color 0.2s",
          }}
          className="hover:text-white"
        >
          ← Back to Main Site
        </Link>

        <div className="ref-label mt-8">REF: EST-PORTAL-PH2</div>
      </div>
    </div>
  );
}