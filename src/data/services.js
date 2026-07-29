import {
  Calculator, FileText, Layers, Shield, Search, Zap, MessageSquare, Leaf, GraduationCap
} from "lucide-react";

/**
 * Single source of truth for all service content.
 * Feeds both the /services index and the /services/:slug detail pages.
 */
export const services = [
  {
    ref: "SVC-001",
    slug: "pqq-sq-support",
    icon: Shield,
    title: "Pre-Qualification & PQQ / SQ Support",
    sector: "All Sectors",
    short: "Getting past the gateway.",
    desc: "Many tenders are lost before a price is ever submitted — at the pre-qualification or selection questionnaire stage. We prepare rigorous, well-evidenced PQQ and SQ responses that present your organisation credibly and maximise your score at each gateway.",
    deliverables: [
      "PQQ / SQ response writing and editing",
      "Company capability and track record narratives",
      "Financial standing and insurance documentation review",
      "Health & safety questionnaire support",
      "Subcontractor and supply chain statements",
    ],
    metaTitle: "PQQ & SQ Support for Construction Contractors | Estimere",
    metaDescription:
      "Expert pre-qualification and selection questionnaire support for UK construction contractors. Maximise your PQQ score and get through to ITT stage.",
    intro: [
      "Pre-qualification is where most contractors quietly lose work. A PQQ or selection questionnaire is a scored gateway, and a response that reads as competent but generic will sit below a competitor whose answers are specific, evidenced, and mapped directly to the published criteria.",
      "We treat the PQQ as a scoring exercise rather than a form-filling one. That means reading the weightings first, understanding what the evaluator is actually looking for against each question, and building the response around evidence you can substantiate — rather than assertions that sound good but score nothing.",
    ],
    whoFor: [
      "Contractors approaching a framework or DPS gateway for the first time",
      "Businesses that have been repeatedly unsuccessful at PQQ stage without clear feedback",
      "Teams with the capability but not the internal writing resource to evidence it",
    ],
    process: [
      { step: "01", title: "Criteria review", desc: "We map the scoring matrix and weightings before writing a word, so effort goes where the marks are." },
      { step: "02", title: "Evidence gathering", desc: "We work with you to identify the projects, accreditations, policies and data that substantiate each answer." },
      { step: "03", title: "Drafting and review", desc: "Full response drafted, then reviewed against the criteria as an evaluator would score it." },
      { step: "04", title: "Submission support", desc: "Portal upload support, document control, and final compliance check before the deadline." },
    ],
    faqs: [
      { q: "How far in advance should we engage you?", a: "Ideally two to three weeks before the deadline. PQQs often require evidence — accreditations, financial statements, case study sign-off — that takes time to gather from within your own business." },
      { q: "Can you help if we've already started the response?", a: "Yes. We can review and strengthen a partially completed submission, which is often faster and more cost-effective than starting again." },
      { q: "Do you write the health & safety sections?", a: "Yes, working from your existing policies and systems. We present what you already do in the format and language the evaluator is scoring against." },
    ],
    related: ["bid-writing", "full-tender-management", "bid-review"],
  },
  {
    ref: "SVC-002",
    slug: "cost-estimating",
    icon: Calculator,
    title: "Cost Estimating",
    sector: "Civils · Utilities · MEPH · Principal Contractor",
    short: "First-principles accuracy. Every time.",
    desc: "We build estimates from the ground up — no rule-of-thumb shortcuts. From detailed take-off through to subcontractor and supplier enquiry management, rate builds, and final summary sheets, every figure is traceable and defensible at adjudication.",
    deliverables: [
      "Detailed quantity take-off from drawings and specifications",
      "First-principles rate builds (labour, plant, materials)",
      "Subcontractor and supplier enquiry management",
      "Domestic sub-contractor comparison and analysis",
      "Risk and contingency quantification",
      "Estimate summary and cost plan production",
    ],
    metaTitle: "Construction Cost Estimating Services | Civils, Utilities & MEPH | Estimere",
    metaDescription:
      "First-principles construction cost estimating for UK contractors. Detailed take-off, rate builds and subcontractor enquiry management across civils, utilities and MEPH.",
    intro: [
      "An estimate is only as good as the reasoning behind it. We build from first principles — labour, plant, materials, and productivity assumptions stated explicitly — so that every rate can be interrogated, defended at adjudication, and reused as a benchmark on the next bid.",
      "That matters most on the work we specialise in. Civils, utilities and MEPH packages carry risk that composite rates tend to hide: ground conditions, access constraints, permit and isolation requirements, commissioning sequences. Pricing these properly requires having done it before, not looking it up.",
    ],
    whoFor: [
      "Contractors without in-house estimating capacity for a specific bid",
      "Businesses whose estimator is at capacity during a peak tender period",
      "Principal contractors needing specialist input on a civils, utilities or MEPH package",
    ],
    process: [
      { step: "01", title: "Document review", desc: "Drawings, specifications, and contract documents reviewed to establish scope, exclusions and risk." },
      { step: "02", title: "Take-off and enquiries", desc: "Detailed measurement, and enquiries issued to your supply chain with a clear scope schedule." },
      { step: "03", title: "Rate build and analysis", desc: "First-principles rates constructed; returned quotations compared on a like-for-like basis." },
      { step: "04", title: "Summary and handover", desc: "Estimate summary, risk register, and qualification schedule delivered ready for adjudication." },
    ],
    faqs: [
      { q: "Which software do you work in?", a: "We work in Excel-based estimating models by default, and can work within your existing system or templates where you have one. Take-off is typically carried out in Bluebeam." },
      { q: "Do you manage the subcontractor enquiry process?", a: "Yes — issuing enquiries, chasing returns, and producing a like-for-like comparison. This is usually the most time-consuming part of a bid and the most valuable to hand over." },
      { q: "Will the estimate be auditable?", a: "Yes. Every rate is built from stated assumptions rather than composite figures, so the logic can be followed and challenged at adjudication." },
    ],
    related: ["full-tender-management", "go-no-go-feasibility", "bid-review"],
  },
  {
    ref: "SVC-003",
    slug: "bid-writing",
    icon: FileText,
    title: "Bid Writing",
    sector: "All Sectors",
    short: "Words that win work.",
    desc: "A technically accurate price is only half the battle. We write quality, technical, and method submissions that communicate your approach clearly, score well against evaluation criteria, and differentiate your bid from the competition.",
    deliverables: [
      "Method statements (construction, programme, logistics)",
      "Executive summaries and commercial overviews",
      "Quality, H&S, and environment submissions",
      "Technical response writing against ITT questions",
      "Tender interview and presentation support",
    ],
    metaTitle: "Construction Bid Writing Services | Method Statements & ITT Responses | Estimere",
    metaDescription:
      "Professional bid writing for UK construction contractors. Method statements, executive summaries and technical ITT responses written to score against evaluation criteria.",
    intro: [
      "Quality submissions are frequently worth 40% or more of the total score, yet they are often written last, by whoever has capacity, in the days before submission. That is where marks are lost — not because the contractor lacks capability, but because the response never demonstrates it against the criteria being scored.",
      "We write bids that are technically credible because they are grounded in how the work is actually built and priced. A method statement written by someone who has estimated the package reads differently to one assembled from a template — and evaluators can tell.",
    ],
    whoFor: [
      "Contractors whose pricing is competitive but whose quality scores lag",
      "Businesses bidding public sector or framework work with formal evaluation criteria",
      "Teams needing senior writing resource for a strategically important submission",
    ],
    process: [
      { step: "01", title: "Question and criteria mapping", desc: "Every question mapped to its weighting, word count, and what the evaluator is actually scoring." },
      { step: "02", title: "Content planning", desc: "Response structure agreed, and the technical inputs we need from your team identified up front." },
      { step: "03", title: "Drafting", desc: "Full responses written, with your project-specific evidence and differentiators built in." },
      { step: "04", title: "Review and refinement", desc: "Scored against the criteria as an evaluator would, then refined and finalised for submission." },
    ],
    faqs: [
      { q: "Do you use AI to write our bid?", a: "No. Submissions are written by a senior estimator and bid writer. We use technology for research, document analysis, and quality assurance — never to generate the submission itself. Generic AI-written content scores badly and carries real risk." },
      { q: "How much input do you need from our team?", a: "Less than you would expect on technical content, because we understand the work. We do need your project-specific evidence, resource information, and sign-off on commitments made in the response." },
      { q: "Can you support the tender interview?", a: "Yes — preparation, likely question briefing, and presentation material support." },
    ],
    related: ["pqq-sq-support", "full-tender-management", "social-value-carbon"],
  },
  {
    ref: "SVC-004",
    slug: "full-tender-management",
    icon: Layers,
    title: "Full Tender Management",
    sector: "All Sectors",
    short: "End-to-end. Start to submit.",
    desc: "For organisations without in-house estimating resource — or for strategic bids that need dedicated senior attention — we manage the entire tender cycle from invitation through to final submission and adjudication.",
    deliverables: [
      "Tender programme and milestone management",
      "Document control and query management (RFIs)",
      "End-to-end estimate production",
      "Quality and technical submission writing",
      "Pre-submission review and QA",
      "Adjudication support and final submission",
    ],
    metaTitle: "Full Tender Management for Construction Contractors | Estimere",
    metaDescription:
      "End-to-end tender management for UK contractors — programme, estimate, quality submission and final delivery. Senior resource without a permanent hire.",
    intro: [
      "Running a tender well is a project in its own right, with its own programme, dependencies and critical path. Most bids that go wrong do so because that programme was never set — enquiries went out late, returns arrived after the adjudication date, and the quality submission was written under pressure at the end.",
      "Full tender management means we own that process. You retain the commercial decisions; we handle everything that gets you to a considered, complete, on-time submission.",
    ],
    whoFor: [
      "SME and regional contractors with no in-house estimating function",
      "Businesses pursuing a strategically significant bid that warrants dedicated resource",
      "Contractors whose internal team is fully committed elsewhere",
    ],
    process: [
      { step: "01", title: "Tender programme", desc: "Working-back programme set from the submission date, with milestones for enquiries, returns and adjudication." },
      { step: "02", title: "Estimate production", desc: "Full take-off, enquiry management, and first-principles pricing." },
      { step: "03", title: "Quality submission", desc: "Technical and quality responses written in parallel with the estimate, not after it." },
      { step: "04", title: "Adjudication and submission", desc: "Adjudication pack prepared for your commercial decision, then final assembly and submission." },
    ],
    faqs: [
      { q: "Who makes the final commercial decision?", a: "You do, always. We prepare the adjudication pack — cost position, risk register, qualifications, and recommendations — but the margin and final number are your decision." },
      { q: "Do you work with our existing supply chain?", a: "Yes. We use your established supply chain relationships and can supplement them where a package needs additional coverage." },
      { q: "How many tenders can you run at once?", a: "Capacity is deliberately limited so that each bid gets senior attention. Early engagement is the best way to secure availability." },
    ],
    related: ["cost-estimating", "bid-writing", "post-tender-support"],
  },
  {
    ref: "SVC-005",
    slug: "bid-review",
    icon: Search,
    title: "Bid Review / Second Opinion",
    sector: "All Sectors",
    short: "QA before you submit.",
    desc: "An independent review of an already-prepared bid before it leaves the building. We check pricing logic, identify gaps, assess risk exposure, and review quality responses against evaluation criteria — giving you confidence or catching issues while there's still time to act.",
    deliverables: [
      "Commercial and pricing logic review",
      "Risk and qualification schedule audit",
      "Quality submission scoring assessment",
      "Clarification and assumption review",
      "Written findings report with recommended actions",
    ],
    metaTitle: "Independent Bid Review & Second Opinion | Construction Tenders | Estimere",
    metaDescription:
      "Independent pre-submission bid review for UK contractors. Pricing logic, risk exposure and quality scoring checked before your tender goes out.",
    intro: [
      "The people closest to a bid are the least able to see what is missing from it. An independent review before submission is the cheapest risk management available on a tender — a few hundred pounds against a pricing error that could cost six figures in delivery.",
      "This is also the most straightforward way to work with us for the first time. It is a defined piece of work, delivered quickly, on a bid you have already prepared — with no commitment beyond it.",
    ],
    whoFor: [
      "Contractors submitting a high-value or high-risk bid",
      "Businesses wanting an experienced second opinion before adjudication",
      "Teams new to a sector or contract form and wanting reassurance",
    ],
    process: [
      { step: "01", title: "Document handover", desc: "You provide the estimate, quality responses, and tender documents under confidentiality." },
      { step: "02", title: "Commercial review", desc: "Pricing logic, coverage, risk allowances and qualifications interrogated for gaps and exposure." },
      { step: "03", title: "Quality review", desc: "Written responses scored against the published evaluation criteria as an evaluator would." },
      { step: "04", title: "Findings report", desc: "Written report with prioritised, actionable recommendations while there is still time to act." },
    ],
    faqs: [
      { q: "How quickly can a review be turned around?", a: "Typically two to three working days, depending on bid size. Faster turnarounds can be accommodated and are subject to an urgency premium." },
      { q: "Will you tell us what number to submit?", a: "No — the commercial decision is yours. We identify risk, gaps and exposure so that decision is better informed." },
      { q: "Is our pricing kept confidential?", a: "Absolutely. Reviews are carried out under confidentiality, and we operate a conflict-of-interest policy so we will not review your bid if we are engaged on a competing one." },
    ],
    related: ["cost-estimating", "go-no-go-feasibility", "full-tender-management"],
  },
  {
    ref: "SVC-006",
    slug: "go-no-go-feasibility",
    icon: Zap,
    title: "Rapid Go / No-Go Feasibility Costing",
    sector: "All Sectors",
    short: "Is it worth bidding? Know fast.",
    desc: "Before committing a team to a full tender programme, get a fast, high-level cost sense-check. We rapidly assess drawings, specifications, and any available data to produce an order-of-magnitude cost position — helping you make an informed go/no-go decision.",
    deliverables: [
      "High-level order-of-magnitude cost estimate",
      "Key risk and uncertainty identification",
      "Preliminary programme assessment",
      "Written summary and recommendation",
    ],
    metaTitle: "Rapid Go / No-Go Feasibility Costing for Tenders | Estimere",
    metaDescription:
      "Fast order-of-magnitude cost assessment before committing to a full tender. Make informed bid / no-bid decisions in 24 to 48 hours.",
    intro: [
      "The most expensive bids are the ones you were never going to win. A full tender consumes weeks of senior time, and contractors routinely commit that resource before establishing whether the opportunity is genuinely winnable or commercially viable.",
      "A rapid feasibility assessment gives you an order-of-magnitude cost position and a clear view of the principal risks within 24 to 48 hours — enough to make the bid / no-bid decision properly, before the cost of bidding has been incurred.",
    ],
    whoFor: [
      "Contractors with more opportunities than bidding capacity",
      "Businesses considering an unfamiliar sector, client or contract form",
      "Teams needing a fast commercial sense-check before committing resource",
    ],
    process: [
      { step: "01", title: "Rapid document scan", desc: "Available drawings, specifications and tender information reviewed for scope and scale." },
      { step: "02", title: "Order-of-magnitude costing", desc: "High-level cost position built using benchmark data and experience of comparable schemes." },
      { step: "03", title: "Risk identification", desc: "Principal commercial, technical and programme risks flagged." },
      { step: "04", title: "Written recommendation", desc: "Short, decision-focused summary delivered within 24 to 48 hours." },
    ],
    faqs: [
      { q: "How accurate is an order-of-magnitude estimate?", a: "It is a decision-support figure, not a tender price. It is intended to tell you whether the opportunity is viable and worth pursuing — not what to submit." },
      { q: "What information do you need?", a: "Whatever exists. Even limited drawings and a specification are usually enough for a meaningful high-level position." },
      { q: "What if the answer is no-go?", a: "Then it has done its job. Declining a bid you were unlikely to win, at a fraction of the cost of pursuing it, is a good outcome." },
    ],
    related: ["cost-estimating", "bid-review", "full-tender-management"],
  },
  {
    ref: "SVC-007",
    slug: "post-tender-support",
    icon: MessageSquare,
    title: "Post-Tender Support",
    sector: "All Sectors",
    short: "After submission. Before contract.",
    desc: "The period between submission and award is critical and often under-resourced. We support with clarification responses, commercial negotiation preparation, adjudication assistance, and mobilisation cost reviews.",
    deliverables: [
      "Tender clarification and BAFO response preparation",
      "Commercial negotiation briefing support",
      "Adjudication cost and risk review",
      "Contract review and mobilisation cost assessment",
    ],
    metaTitle: "Post-Tender Support & Clarification Responses | Estimere",
    metaDescription:
      "Support between tender submission and contract award — clarifications, BAFO responses, negotiation preparation and mobilisation cost review.",
    intro: [
      "Submission is not the end of the tender. Clarification requests, best-and-final-offer rounds, and pre-contract negotiation all carry commercial consequence, and they typically arrive when the bid team has already moved on to the next opportunity.",
      "We stay engaged through that period, so responses are consistent with the submitted position and the commercial exposure you carry into contract is properly understood before you sign.",
    ],
    whoFor: [
      "Contractors in a BAFO or negotiated stage on a significant bid",
      "Businesses needing commercial support ahead of pre-contract negotiation",
      "Teams wanting mobilisation costs reviewed before contract execution",
    ],
    process: [
      { step: "01", title: "Clarification handling", desc: "Responses prepared consistently with the submitted estimate and qualifications." },
      { step: "02", title: "BAFO support", desc: "Where a best-and-final-offer is requested, we identify where value can be found without eroding delivery margin." },
      { step: "03", title: "Negotiation briefing", desc: "Commercial position, risk exposure and defensible boundaries briefed ahead of negotiation." },
      { step: "04", title: "Pre-contract review", desc: "Contract terms and mobilisation costs reviewed before execution." },
    ],
    faqs: [
      { q: "Can you support if you didn't produce the original bid?", a: "Yes, though we will need time to understand the submitted position properly before responding on your behalf." },
      { q: "Do you provide legal advice on contract terms?", a: "No. We review commercial and cost implications. Legal review of contract terms should be carried out by a solicitor." },
      { q: "How is this priced?", a: "Usually on a day-rate basis, as the volume of clarification activity is difficult to predict in advance." },
    ],
    related: ["full-tender-management", "cost-estimating", "bid-review"],
  },
  {
    ref: "SVC-008",
    slug: "social-value-carbon",
    icon: Leaf,
    title: "Social Value & Carbon / Embodied-Carbon Costing",
    sector: "All Sectors",
    short: "Measuring what matters more than ever.",
    desc: "Social value and carbon commitments are increasingly scored criteria in UK public sector tenders. We help quantify, evidence, and present social value commitments and support embodied-carbon costing within your estimate and quality submission.",
    deliverables: [
      "Social value framework response and quantification",
      "Embodied carbon baseline costing (EPDs, material schedules)",
      "Carbon reduction narrative writing",
      "TOMS / Themes, Outcomes, Measures support",
    ],
    metaTitle: "Social Value & Embodied Carbon Costing for Tenders | Estimere",
    metaDescription:
      "Social value and embodied carbon support for UK construction tenders. TOMS quantification, carbon baselines and evidenced commitments that score.",
    intro: [
      "Social value now carries meaningful weight in UK public sector procurement, and carbon is following the same path. Both are scored, both require evidence, and both are frequently answered with generic commitments that score poorly and create delivery obligations nobody has costed.",
      "We treat these as commercial items. Commitments are quantified, costed into the estimate, and written so they are credible and deliverable — rather than promised at bid stage and discovered as a liability later.",
    ],
    whoFor: [
      "Contractors bidding public sector or framework work with social value weightings",
      "Businesses being asked for embodied carbon data for the first time",
      "Teams that have made social value commitments without costing them",
    ],
    process: [
      { step: "01", title: "Framework review", desc: "The applicable social value framework and its measures reviewed against the opportunity." },
      { step: "02", title: "Commitment scoping", desc: "Deliverable commitments identified with you — what you can genuinely achieve on this project." },
      { step: "03", title: "Quantification and costing", desc: "Commitments quantified and priced into the estimate so the obligation is understood." },
      { step: "04", title: "Narrative writing", desc: "Response written with evidence and measurement methodology, not generic aspiration." },
    ],
    faqs: [
      { q: "What is TOMS?", a: "The Themes, Outcomes and Measures framework — the most widely used method of quantifying social value in UK public procurement. Many authorities use it or a variant to score commitments." },
      { q: "Can you calculate embodied carbon?", a: "We support baseline embodied carbon costing using material schedules and EPD data. For formal life-cycle assessment we would work alongside a specialist consultant." },
      { q: "Why cost social value into the estimate?", a: "Because the commitments are contractual once awarded. Pricing them at bid stage prevents them becoming an uncosted delivery liability." },
    ],
    related: ["bid-writing", "cost-estimating", "pqq-sq-support"],
  },
  {
    ref: "SVC-009",
    slug: "mentoring-knowledge-transfer",
    icon: GraduationCap,
    title: "Knowledge Transfer & Mentoring",
    sector: "All Sectors",
    short: "Building your team's capability.",
    desc: "For clients who want to develop their in-house estimating function, we offer structured mentoring and knowledge-transfer programmes for junior estimators and bid coordinators — working alongside your team on live bids to build capability from the inside.",
    deliverables: [
      "One-to-one mentoring for junior estimators",
      "Live bid shadowing and structured review sessions",
      "Estimating process and template development",
      "Rate library and benchmark database setup",
      "Bid programme and document control training",
    ],
    metaTitle: "Estimating Mentoring & Knowledge Transfer for Contractors | Estimere",
    metaDescription:
      "Structured mentoring for junior estimators and bid teams. Build in-house estimating capability through live bid shadowing, process development and training.",
    intro: [
      "Estimating is learned by doing it alongside someone experienced, and that route has narrowed considerably as contractors have reduced in-house commercial teams. Many businesses now have capable junior staff with no one senior to learn from.",
      "This service exists for clients who would rather build capability than keep buying it. We work alongside your team on live bids, developing process and judgement in the context of real work rather than in a training room.",
    ],
    whoFor: [
      "Contractors building an in-house estimating function",
      "Businesses with capable junior estimators and no senior mentor",
      "Teams wanting to formalise estimating process and templates",
    ],
    process: [
      { step: "01", title: "Capability assessment", desc: "Current process, templates and team capability reviewed to identify the real gaps." },
      { step: "02", title: "Programme design", desc: "Structured programme agreed around live bids rather than abstract training exercises." },
      { step: "03", title: "Live bid mentoring", desc: "Working alongside your team on real tenders, with structured review at each stage." },
      { step: "04", title: "Process embedding", desc: "Templates, rate libraries and document control established so capability persists after we step back." },
    ],
    faqs: [
      { q: "How is this delivered?", a: "Usually a blend of remote sessions and working alongside your team on live bids, with site or office attendance where it adds value." },
      { q: "How long does a programme run?", a: "Typically three to six months. Capability develops through bid cycles, and meaningful progress requires seeing several through end to end." },
      { q: "Can this be combined with other services?", a: "Yes — frequently. Many clients engage us on tender delivery while their team develops alongside, then reduce the delivery element over time." },
    ],
    related: ["cost-estimating", "full-tender-management", "bid-writing"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
