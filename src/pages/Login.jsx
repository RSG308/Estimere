import { Link } from "react-router-dom";
import BlueprintHero from "@/components/BlueprintHero";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0D1F3C" }}
    >
      {/* Blurred background grid — teases Phase 2 dashboard */}
      <div
        className="absolute inset-0 blueprint-grid-dark opacity-60"
        style={{ filter: "blur(0px)" }}
      />

      {/* Faint dashboard preview lines */}
      <div className="absolute inset-0 opacity-10" style={{ pointerEvents: "none" }}>
        <BlueprintHero className="absolute -right-20 -bottom-20 w-[600px] opacity-30" />
        <div className="absolute top-12 left-8 right-8 h-8" style={{ border: "1px solid rgba(42,74,127,0.3)", background: "rgba(42,74,127,0.1)" }} />
        <div className="absolute top-28 left-8 w-48 h-4" style={{ background: "rgba(42,74,127,0.15)" }} />
        <div className="absolute top-40 left-8 right-8 grid grid-cols-4 gap-3" style={{ height: "80px" }}>
          {[0,1,2,3].map(i => <div key={i} style={{ background: "rgba(42,74,127,0.1)", border: "1px solid rgba(42,74,127,0.2)" }} />)}
        </div>
      </div>

      {/* Glass card */}
      <div
        className="relative z-10 w-full max-w-md mx-4 p-10 text-center"
        style={{
          background: "rgba(13,31,60,0.92)",
          border: "1px solid rgba(42,74,127,0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: "2px solid #E8820C", borderLeft: "2px solid #E8820C" }} />
        <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: "2px solid #E8820C", borderRight: "2px solid #E8820C" }} />
        <div className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(42,74,127,0.6)", borderLeft: "2px solid rgba(42,74,127,0.6)" }} />
        <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(42,74,127,0.6)", borderRight: "2px solid rgba(42,74,127,0.6)" }} />

        <div className="ref-label mb-4">REF: PORTAL-PHASE2</div>

        {/* FE logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "#E8820C" }}>
            <span style={{ color: "#0D1F3C", fontWeight: 900, fontSize: "14px" }}>FE</span>
          </div>
          <span style={{ color: "#F5F4F2", fontWeight: 800, fontSize: "14px" }}>FOUNDRY</span>
          <span style={{ color: "#E8820C", fontWeight: 800, fontSize: "14px" }}>ESTIMATING</span>
        </div>

        <div
          className="inline-block px-3 py-1 mb-6"
          style={{ background: "rgba(232,130,12,0.15)", border: "1px solid rgba(232,130,12,0.4)", fontSize: "11px", fontWeight: 700, color: "#E8820C", letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          Coming Soon
        </div>

        <h1 style={{ color: "#F5F4F2", fontSize: "28px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "12px" }}>
          Client Portal
        </h1>

        <p style={{ color: "rgba(245,244,242,0.55)", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>
          The client portal — including bid-status tracking, capacity calendar, and document access — is launching in Phase 2.
        </p>

        <div
          className="p-4 mb-8 text-left"
          style={{ border: "1px solid rgba(42,74,127,0.4)", background: "rgba(42,74,127,0.1)" }}
        >
          <div className="eyebrow mb-3">Phase 2 Features</div>
          {["Bid-status dashboard", "Tender pipeline tracking", "Capacity calendar", "Document & submission access", "Direct messaging"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-1" style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}>
              <div style={{ width: "4px", height: "4px", background: "#E8820C", flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>

        <Link to="/contact" className="btn-amber block text-center w-full">
          Register Your Interest →
        </Link>

        <Link
          to="/"
          className="block mt-4"
          style={{ color: "rgba(245,244,242,0.4)", fontSize: "13px", textDecoration: "none" }}
          onMouseEnter={e => (e.target.style.color = "rgba(245,244,242,0.8)")}
          onMouseLeave={e => (e.target.style.color = "rgba(245,244,242,0.4)")}
        >
          ← Back to main site
        </Link>
      </div>
    </div>
  );
}