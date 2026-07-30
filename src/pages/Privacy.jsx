import LegalLayout, { LegalSection, LegalNote } from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      refCode="EST-LEG-001"
      title="Privacy Policy"
      lastUpdated="[PLACEHOLDER: DD MONTH YYYY]"
    >
      <LegalNote>
        <strong>[PLACEHOLDER — REVIEW REQUIRED]</strong> This policy is a working template drafted to
        cover the data this website actually collects. Before publishing, replace all bracketed
        placeholders with your registered company details and have it reviewed by a solicitor or
        data-protection adviser. It is not legal advice.
      </LegalNote>

      <LegalSection number="1.0" title="Who we are">
        <p>
          Estimere ("we", "us", "our") is an independent construction estimating and bid-writing
          consultancy operating in the United Kingdom.
        </p>
        <p style={{ marginTop: "12px" }}>
          <strong>Registered company name:</strong> [PLACEHOLDER: Registered Ltd name]
          <br />
          <strong>Company number:</strong> [PLACEHOLDER: Companies House number]
          <br />
          <strong>Registered address:</strong> [PLACEHOLDER: registered office address]
          <br />
          <strong>Contact:</strong>{" "}
          <a href="mailto:hello@estimere.co.uk" style={{ color: "#2A4A7F" }}>
            hello@estimere.co.uk
          </a>
        </p>
        <p style={{ marginTop: "12px" }}>
          We are the data controller for personal data collected through this website.
        </p>
      </LegalSection>

      <LegalSection number="2.0" title="What data we collect">
        <p>When you submit an enquiry through this website, we collect:</p>
        <ul style={{ marginTop: "12px", paddingLeft: "20px", listStyleType: "disc" }}>
          <li>Your name</li>
          <li>Your company name</li>
          <li>Your email address</li>
          <li>Your telephone number</li>
          <li>The project type or sector you have indicated</li>
          <li>The content of your message</li>
          <li>The date and time of submission</li>
        </ul>
        <p style={{ marginTop: "12px" }}>
          We may also collect limited technical information such as your IP address and browser type
          through standard website analytics.
        </p>
      </LegalSection>

      <LegalSection number="3.0" title="Why we collect it, and our lawful basis">
        <p>
          We process your enquiry data on the basis of <strong>legitimate interests</strong> — namely
          responding to a business enquiry you have chosen to send us, and communicating with you
          about the services you have asked about.
        </p>
        <p style={{ marginTop: "12px" }}>
          If we go on to work together, we will process your data on the basis of{" "}
          <strong>performance of a contract</strong>. Where we are required to retain records for tax
          or accounting purposes, we do so on the basis of <strong>legal obligation</strong>.
        </p>
        <p style={{ marginTop: "12px" }}>
          We do not use your enquiry data for unsolicited marketing without your consent.
        </p>
      </LegalSection>

      <LegalSection number="4.0" title="Confidentiality of commercial information">
        <p>
          We recognise that enquiries relating to live tenders may contain commercially sensitive
          information. Any project details, pricing information, or tender documentation shared with
          us is treated as confidential and is not disclosed to third parties.
        </p>
        <p style={{ marginTop: "12px" }}>
          Where we are engaged on a project, confidentiality obligations are set out formally in our
          engagement agreement. We also operate a conflict-of-interest policy governing situations
          where more than one party may be bidding the same opportunity.
        </p>
      </LegalSection>

      <LegalSection number="5.0" title="Who we share data with">
        <p>
          We do not sell your data. We share it only with service providers who help us operate the
          business, including:
        </p>
        <ul style={{ marginTop: "12px", paddingLeft: "20px", listStyleType: "disc" }}>
          <li>Our website and application hosting provider</li>
          <li>Our email provider</li>
          <li>[PLACEHOLDER: accounting software provider, if client data is held there]</li>
          <li>Our accountant, where required for invoicing and statutory records</li>
        </ul>
        <p style={{ marginTop: "12px" }}>
          Where a provider processes data outside the UK, we ensure appropriate safeguards are in
          place.
        </p>
      </LegalSection>

      <LegalSection number="6.0" title="How long we keep it">
        <p>
          Enquiries that do not lead to an engagement are retained for{" "}
          <strong>[PLACEHOLDER: e.g. 24 months]</strong> and then deleted.
        </p>
        <p style={{ marginTop: "12px" }}>
          Records relating to client engagements are retained for a minimum of six years following
          the end of the engagement, reflecting statutory record-keeping requirements and the
          limitation period for professional negligence claims.
        </p>
      </LegalSection>

      <LegalSection number="7.0" title="Your rights">
        <p>Under UK GDPR you have the right to:</p>
        <ul style={{ marginTop: "12px", paddingLeft: "20px", listStyleType: "disc" }}>
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request erasure of your data, where we have no overriding obligation to retain it</li>
          <li>Object to processing based on legitimate interests</li>
          <li>Request restriction of processing</li>
          <li>Request transfer of your data to another provider</li>
        </ul>
        <p style={{ marginTop: "12px" }}>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:hello@estimere.co.uk" style={{ color: "#2A4A7F" }}>
            hello@estimere.co.uk
          </a>
          . We will respond within one month.
        </p>
      </LegalSection>

      <LegalSection number="8.0" title="Complaints">
        <p>
          If you are unhappy with how we have handled your data, please contact us first so we can
          try to resolve it. You also have the right to complain to the Information Commissioner's
          Office (ICO), the UK supervisory authority, at{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2A4A7F" }}
          >
            ico.org.uk
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="9.0" title="Changes to this policy">
        <p>
          We may update this policy from time to time. The version published on this page is the
          current one, and the date it was last revised is shown at the top.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
