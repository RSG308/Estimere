import { base44 } from "@/api/base44Client";

/**
 * Transactional email.
 *
 * Two rules applied throughout:
 *  - Plain text, no marketing framing. These are operational notifications.
 *  - The acknowledgement to an enquirer never restates their message back to
 *    them, because enquiry content may be commercially sensitive and email is
 *    not a secure channel.
 */

// [PLACEHOLDER: replace with the real inbox before go-live]
export const NOTIFICATION_INBOX = "hello@estimere.co.uk";
const FROM_NAME = "Estimere";

function fmtDateTime(d = new Date()) {
  return d.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Internal notification when a website enquiry is submitted.
 */
export async function sendEnquiryNotification(enquiry) {
  const lines = [
    "New website enquiry.",
    "",
    `Name:      ${enquiry.name || "-"}`,
    `Company:   ${enquiry.company || "-"}`,
    `Email:     ${enquiry.email || "-"}`,
    `Phone:     ${enquiry.phone || "-"}`,
    `Sector:    ${enquiry.project_type || "-"}`,
    `Received:  ${fmtDateTime()}`,
    "",
    "Message",
    "-------",
    enquiry.message || "-",
    "",
    "---",
    "Manage enquiries: /admin",
  ];

  return base44.integrations.Core.SendEmail({
    to: NOTIFICATION_INBOX,
    from_name: FROM_NAME,
    subject: `Enquiry — ${enquiry.company || enquiry.name || "Website"}`,
    body: lines.join("\n"),
  });
}

/**
 * Acknowledgement to the person who submitted the enquiry.
 * Deliberately short, and sets a response expectation rather than selling.
 */
export async function sendEnquiryAcknowledgement(enquiry) {
  const firstName = (enquiry.name || "").trim().split(/\s+/)[0] || "there";

  const lines = [
    `${firstName},`,
    "",
    "Thanks for getting in touch. Your enquiry has come through and I'll come back to you within one working day.",
    "",
    "If it's time-critical — a tender deadline inside the next week — reply to this email and say so, and I'll prioritise it.",
    "",
    "One note: please don't send full tender documentation or pricing information by email until we have a confidentiality agreement in place. I'll sort that out when we speak.",
    "",
    "Ross Grant", // [PLACEHOLDER: confirm signature name and title]
    "Estimere",
    NOTIFICATION_INBOX,
  ];

  return base44.integrations.Core.SendEmail({
    to: enquiry.email,
    from_name: FROM_NAME,
    subject: "Your enquiry — Estimere",
    body: lines.join("\n"),
  });
}

/**
 * Internal notification when someone runs an ITT Health Check.
 * These are high-intent — someone with a live tender in front of them.
 */
export async function sendIttCheckNotification({ email, company, documentName, inputMethod }) {
  const lines = [
    "ITT Health Check run.",
    "",
    `Email:     ${email || "-"}`,
    `Company:   ${company || "-"}`,
    `Document:  ${documentName || "-"}`,
    `Method:    ${inputMethod === "upload" ? "File upload" : "Pasted text"}`,
    `Run:       ${fmtDateTime()}`,
    "",
    "The document and the analysis output are not stored.",
    "",
    "---",
    "Manage enquiries: /admin",
  ];

  return base44.integrations.Core.SendEmail({
    to: NOTIFICATION_INBOX,
    from_name: FROM_NAME,
    subject: `ITT Health Check — ${company || email}`,
    body: lines.join("\n"),
  });
}

/**
 * Fire-and-forget wrapper. Email failure must never block a form submission
 * that has already written successfully to the database.
 */
export async function trySend(fn, ...args) {
  try {
    await fn(...args);
    return true;
  } catch (err) {
    console.error("Email send failed:", err);
    return false;
  }
}
