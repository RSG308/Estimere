import { useState } from "react";
import { base44 } from "@/api/base44Client";

const PROJECT_TYPES = [
  "Civils & Earthworks",
  "Utilities & Infrastructure",
  "MEPH (Mechanical, Electrical, Plumbing, HVAC)",
  "Principal Contractor Works",
  "Highways & Transport",
  "Rail",
  "Water & Wastewater",
  "Mixed / Multi-Sector",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await base44.entities.Enquiry.create({
        ...form,
        submitted_date: new Date().toISOString(),
        status: "new",
      });
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", project_type: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#F5F4F2",
    border: "1px solid #D6D3CD",
    borderRadius: 0,
    fontSize: "16px",
    color: "#1A1A1A",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "Inter, sans-serif",
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#2A4A7F",
    marginBottom: "6px",
  };

  if (status === "success") {
    return (
      <div
        className="text-center py-16 px-8"
        style={{ border: "1px solid rgba(232,130,12,0.3)", backgroundColor: "rgba(232,130,12,0.04)" }}
      >
        <div style={{ color: "#E8820C", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>
          Enquiry Received
        </div>
        <h3 style={{ color: "#0D1F3C", fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>
          Thank you — we'll be in touch shortly.
        </h3>
        <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "16px", lineHeight: 1.7 }}>
          Your enquiry has been logged. Expect a response within one working day.
        </p>
        <div className="mt-6 ref-label">REF: ENQ-{Date.now().toString().slice(-6)}</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#2A4A7F")}
            onBlur={(e) => (e.target.style.borderColor = "#D6D3CD")}
          />
        </div>
        <div>
          <label style={labelStyle}>Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#2A4A7F")}
            onBlur={(e) => (e.target.style.borderColor = "#D6D3CD")}
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.co.uk"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#2A4A7F")}
            onBlur={(e) => (e.target.style.borderColor = "#D6D3CD")}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+44 (0)..."
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#2A4A7F")}
            onBlur={(e) => (e.target.style.borderColor = "#D6D3CD")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Project Type / Sector</label>
        <select
          name="project_type"
          value={form.project_type}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => (e.target.style.borderColor = "#2A4A7F")}
          onBlur={(e) => (e.target.style.borderColor = "#D6D3CD")}
        >
          <option value="">Select a sector...</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your project, tender timeline, and what support you need..."
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.target.style.borderColor = "#2A4A7F")}
          onBlur={(e) => (e.target.style.borderColor = "#D6D3CD")}
        />
      </div>

      {status === "error" && (
        <p style={{ color: "#cc2200", fontSize: "14px", border: "1px solid #cc2200", padding: "10px 16px" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-amber"
          style={{ opacity: status === "submitting" ? 0.6 : 1, cursor: status === "submitting" ? "not-allowed" : "pointer" }}
        >
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
        </button>
        <p style={{ color: "#1A1A1A", opacity: 0.5, fontSize: "13px" }}>
          We respond within one working day.
        </p>
      </div>
    </form>
  );
}