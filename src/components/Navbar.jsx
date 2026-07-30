import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Sectors", path: "/sectors" },
  { label: "Tools", path: "/tools" },
  { label: "Pricing", path: "/pricing" },
  { label: "Insights", path: "/insights" },
  { label: "About", path: "/about" },
];

// [PLACEHOLDER] Case Studies is intentionally omitted from navigation while its
// content is unpopulated. Restore { label: "Case Studies", path: "/case-studies" }
// once real anonymised projects are in place. The route still works directly.

/** Highlights parent nav item on nested routes, e.g. /services/bid-writing -> Services */
function isActive(pathname, path) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#0D1F3C",
        borderBottom: scrolled ? "1px solid rgba(42,74,127,0.5)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ backgroundColor: "#E8820C" }}
            >
              <span style={{ color: "#0D1F3C", fontWeight: 900, fontSize: "14px", letterSpacing: "-0.04em" }}>E</span>
            </div>
            <div>
              <span style={{ color: "#F5F4F2", fontWeight: 800, fontSize: "15px", letterSpacing: "-0.01em", lineHeight: 1 }}>
                ESTIM
              </span>
              <span style={{ color: "#E8820C", fontWeight: 800, fontSize: "15px", letterSpacing: "-0.01em", lineHeight: 1 }}>
                ERE
              </span>
              <div style={{ color: "rgba(245,244,242,0.35)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>
                Estimating &amp; Tendering
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(location.pathname, link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-200 group"
                  style={{
                    color: active ? "#E8820C" : "rgba(245,244,242,0.75)",
                    fontSize: "13px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-full transition-transform duration-200 origin-left"
                    style={{
                      backgroundColor: "#E8820C",
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-px w-full transition-transform duration-200 origin-left group-hover:scale-x-100"
                    style={{
                      backgroundColor: "#E8820C",
                      transform: "scaleX(0)",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="btn-ghost" style={{ fontSize: "12px", padding: "10px 20px" }}>
              Client Login
            </Link>
            <Link to="/contact" className="btn-amber" style={{ fontSize: "12px", padding: "10px 24px" }}>
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#F5F4F2" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#0D1F3C", borderColor: "rgba(42,74,127,0.4)" }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-semibold uppercase tracking-widest transition-colors duration-150"
                style={{
                  color: isActive(location.pathname, link.path) ? "#E8820C" : "rgba(245,244,242,0.8)",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(214,211,205,0.08)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link to="/login" className="btn-ghost text-center">Client Login</Link>
              <Link to="/contact" className="btn-amber text-center">Get in Touch</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}