import LegalLayout, { LegalSection, LegalNote } from "@/components/LegalLayout";

export default function Cookies() {
  return (
    <LegalLayout
      eyebrow="Legal"
      refCode="EST-LEG-003"
      title="Cookie Policy"
      lastUpdated="[PLACEHOLDER: DD MONTH YYYY]"
    >
      <LegalNote>
        <strong>[PLACEHOLDER — VERIFY BEFORE PUBLISHING]</strong> This policy must reflect the
        cookies actually set by the live site. Once analytics are enabled, confirm exactly which
        cookies are set and update the table below. Under PECR, non-essential cookies (including
        analytics) require consent before they are set — so a consent banner is needed if analytics
        are switched on.
      </LegalNote>

      <LegalSection number="1.0" title="What cookies are">
        <p>
          Cookies are small text files placed on your device when you visit a website. They are used
          to make sites work, to remember preferences, and to gather information about how a site is
          used.
        </p>
      </LegalSection>

      <LegalSection number="2.0" title="Cookies used on this site">
        <p>This site uses the following categories:</p>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "17px", marginBottom: "8px" }}>
            Strictly necessary
          </h3>
          <p>
            Required for the site to function — for example, maintaining your session when logged
            into the client portal, and security features. These do not require consent, as the site
            cannot operate without them.
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "17px", marginBottom: "8px" }}>
            Analytics
          </h3>
          <p>
            [PLACEHOLDER: describe analytics provider once enabled.] Used to understand how visitors
            find and use the site so we can improve it. These are only set where you have given
            consent, and can be declined without affecting site functionality.
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "17px", marginBottom: "8px" }}>
            Marketing
          </h3>
          <p>
            We do not currently use marketing or advertising cookies. If this changes, this policy
            will be updated and consent will be sought.
          </p>
        </div>
      </LegalSection>

      <LegalSection number="3.0" title="Managing cookies">
        <p>
          You can control cookies through your browser settings — including blocking or deleting
          them. Note that blocking strictly necessary cookies may prevent parts of the site,
          particularly the client portal, from working correctly.
        </p>
        <p style={{ marginTop: "12px" }}>
          Guidance for common browsers is available in each browser's help documentation.
        </p>
      </LegalSection>

      <LegalSection number="4.0" title="More information">
        <p>
          For how we handle personal data more generally, see our{" "}
          <a href="/privacy" style={{ color: "#2A4A7F", fontWeight: 600 }}>
            Privacy Policy
          </a>
          . For questions about cookies, contact{" "}
          <a href="mailto:hello@estimere.co.uk" style={{ color: "#2A4A7F" }}>
            hello@estimere.co.uk
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
