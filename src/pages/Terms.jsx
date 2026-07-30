import LegalLayout, { LegalSection, LegalNote } from "@/components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="Legal"
      refCode="EST-LEG-002"
      title="Terms of Use"
      lastUpdated="[PLACEHOLDER: DD MONTH YYYY]"
    >
      <LegalNote>
        <strong>[PLACEHOLDER — REVIEW REQUIRED]</strong> These terms govern use of this website only.
        They are <em>not</em> your engagement terms for client work — that is a separate contract and
        should be drafted or reviewed by a solicitor, particularly the liability cap, which needs to
        align with your professional indemnity cover.
      </LegalNote>

      <LegalSection number="1.0" title="About these terms">
        <p>
          These terms govern your use of the Estimere website. By using the site you accept them. If
          you do not accept them, please do not use the site.
        </p>
        <p style={{ marginTop: "12px" }}>
          The site is operated by [PLACEHOLDER: Registered Ltd name], company number [PLACEHOLDER],
          registered in England and Wales.
        </p>
      </LegalSection>

      <LegalSection number="2.0" title="Information on this site is not advice">
        <p>
          Content on this website — including service descriptions, indicative fee structures,
          guidance articles, and any calculators or interactive tools — is provided for general
          information only.
        </p>
        <p style={{ marginTop: "12px" }}>
          It does not constitute professional estimating, commercial, contractual, or legal advice,
          and must not be relied upon as the basis for a tender submission, pricing decision, or
          bid/no-bid decision. Formal advice is provided only under a written engagement agreement.
        </p>
      </LegalSection>

      <LegalSection number="3.0" title="Indicative pricing">
        <p>
          Any fee ranges, rate bands, or calculator outputs shown on this site are indicative only.
          They do not constitute a quotation or an offer capable of acceptance.
        </p>
        <p style={{ marginTop: "12px" }}>
          A binding fee is provided in writing following a discussion of project scope, programme,
          complexity, and required deliverables.
        </p>
      </LegalSection>

      <LegalSection number="4.0" title="Interactive tools and calculators">
        <p>
          Where this site provides tools such as fee estimators, bid/no-bid scoring aids, or
          programme planners, their outputs are generated from the inputs you provide and generalised
          assumptions. They are decision-support aids, not substitutes for professional judgement.
        </p>
        <p style={{ marginTop: "12px" }}>
          We accept no liability for decisions taken solely on the basis of a tool output.
        </p>
      </LegalSection>

      <LegalSection number="5.0" title="Enquiries and confidentiality">
        <p>
          Submitting an enquiry does not create a contractual relationship or a duty of care. It also
          does not, by itself, place us under an obligation to accept the work.
        </p>
        <p style={{ marginTop: "12px" }}>
          We treat commercially sensitive information shared through enquiries as confidential.
          However, please do not send full tender documentation or pricing data through the website
          form until a confidentiality agreement is in place.
        </p>
      </LegalSection>

      <LegalSection number="6.0" title="Conflicts of interest">
        <p>
          We operate a conflict-of-interest policy. We will not knowingly act for more than one party
          bidding the same opportunity. Where a potential conflict is identified, we will decline the
          engagement or, where appropriate, disclose it and seek written agreement from all affected
          parties before proceeding.
        </p>
      </LegalSection>

      <LegalSection number="7.0" title="Intellectual property">
        <p>
          The content, design, and materials on this site are owned by us or our licensors. You may
          view and print pages for your own business use. You may not reproduce, republish, or
          commercially exploit the content without our written permission.
        </p>
      </LegalSection>

      <LegalSection number="8.0" title="Limitation of liability">
        <p>
          Nothing in these terms excludes or limits liability for death or personal injury caused by
          negligence, for fraud or fraudulent misrepresentation, or for any other liability that
          cannot lawfully be excluded.
        </p>
        <p style={{ marginTop: "12px" }}>
          Subject to that, we accept no liability for any loss or damage arising from use of, or
          reliance on, this website or its content. Liability in respect of engaged professional
          services is governed separately by the engagement agreement and is subject to the cap
          stated there.
        </p>
      </LegalSection>

      <LegalSection number="9.0" title="Governing law">
        <p>
          These terms are governed by the laws of England and Wales, and the courts of England and
          Wales have exclusive jurisdiction.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
