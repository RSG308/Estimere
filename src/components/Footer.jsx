import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D1F3C", borderTop: "1px solid rgba(42,74,127,0.4)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "#E8820C" }}>
                <span style={{ color: "#0D1F3C", fontWeight: 900, fontSize: "14px" }}>FE</span>
              </div>
              <div>
                <span style={{ color: "#F5F4F2", fontWeight: 800, fontSize: "15px" }}>FOUNDRY </span>
                <span style={{ color: "#E8820C", fontWeight: 800, fontSize: "15px" }}>ESTIMATING</span>
              </div>
            </div>
            <p style={{ color: "rgba(245,244,242,0.55)", fontSize: "14px", lineHeight: 1.8 }}>
              Independent construction estimating and bid-writing consultancy. Serving SME through Tier 1/2 principal contractors across the UK.
            </p>
            <div className="mt-6 ref-label">REF: FE-SITE-001</div>
          </div>

          {/* Navigation */}
          <div>
            <div className="eyebrow mb-5">Navigation</div>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Pricing", path: "/pricing" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{ color: "rgba(245,244,242,0.6)", fontSize: "14px", transition: "color 0.15s" }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="eyebrow mb-5">Services</div>
            <ul className="space-y-3">
              {[
                "Cost Estimating",
                "Bid Writing",
                "Full Tender Management",
                "PQQ / SQ Support",
                "Bid Review",
                "Post-Tender Support",
                "Social Value & Carbon",
                "Knowledge Transfer",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    style={{ color: "rgba(245,244,242,0.6)", fontSize: "14px", transition: "color 0.15s" }}
                    className="hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow mb-5">Contact</div>
            <ul className="space-y-4">
              <li>
                <div style={{ color: "rgba(245,244,242,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Email</div>
                <a
                  href="mailto:hello@estimere.co.uk"
                  style={{ color: "rgba(245,244,242,0.75)", fontSize: "14px" }}
                  className="hover:text-white transition-colors"
                >
                  {/* [PLACEHOLDER: replace with real email] */}
                  hello@estimere.co.uk
                </a>
              </li>
              <li>
                <div style={{ color: "rgba(245,244,242,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Coverage</div>
                <span style={{ color: "rgba(245,244,242,0.75)", fontSize: "14px" }}>UK-wide, Remote-first</span>
              </li>
              <li>
                <div style={{ color: "rgba(245,244,242,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Portal</div>
                <Link to="/login" style={{ color: "rgba(232,130,12,0.7)", fontSize: "14px" }} className="hover:text-amber-400 transition-colors">
                  Client Login (Phase 2)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(214,211,205,0.1)" }}
        >
          <p style={{ color: "rgba(245,244,242,0.35)", fontSize: "12px" }}>
            © {new Date().getFullYear()} Estimere. All rights reserved. {/* [PLACEHOLDER: update business name] */}
          </p>
          <p style={{ color: "rgba(245,244,242,0.25)", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.08em" }}>
            Professional Indemnity Insured · UK Registered
          </p>
        </div>
      </div>
    </footer>
  );
}