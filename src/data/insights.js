/**
 * ============================================================================
 * INSIGHTS / ARTICLE CONTENT
 * ============================================================================
 *
 * HOW TO ADD A NEW ARTICLE
 * ------------------------
 * Copy the TEMPLATE block at the bottom of this file, paste it as a new entry
 * at the TOP of the `insights` array (newest first), and fill it in.
 *
 * REQUIRED FIELDS
 *   slug             URL segment. Lowercase, hyphenated, no spaces.
 *                    Becomes /insights/your-slug — do not change it after
 *                    publishing, or you will break existing links.
 *   title            Article headline. Aim for 50-65 characters.
 *   excerpt          1-2 sentence summary. Shown on the index page.
 *   category         Must match one of CATEGORIES below.
 *   date             ISO format: "2026-03-14". Controls sort order.
 *   readingTime      Estimated minutes, e.g. 6.
 *   metaTitle        SEO title. Include the target keyword. ~60 chars.
 *   metaDescription  SEO description. ~150-160 chars.
 *   body             Array of content blocks — see BLOCK TYPES below.
 *
 * OPTIONAL FIELDS
 *   featured         true to pin to the top of the index page.
 *   relatedServices  Array of service slugs from src/data/services.js
 *   relatedSectors   Array of sector slugs from src/data/sectors.js
 *   tags             Array of short keyword strings.
 *
 * BLOCK TYPES for `body`
 *   { type: "p",       text: "Paragraph text." }
 *   { type: "h2",      text: "Main section heading" }
 *   { type: "h3",      text: "Sub-heading" }
 *   { type: "ul",      items: ["First point", "Second point"] }
 *   { type: "ol",      items: ["Step one", "Step two"] }
 *   { type: "quote",   text: "A pulled-out statement for emphasis." }
 *   { type: "callout", text: "Highlighted practical tip or warning." }
 *
 * WRITING NOTES
 *   - Lead with the practical point. Contractors skim.
 *   - Specificity is the differentiator. Name the actual cost item, contract
 *     clause, or failure mode rather than talking generally.
 *   - Never name a client or reproduce commercially sensitive figures.
 *   - Two or three genuinely useful articles beat ten thin ones.
 * ============================================================================
 */

export const CATEGORIES = [
  "Estimating",
  "Bid Strategy",
  "Tendering Process",
  "Commercial Risk",
  "Sector Insight",
];

export const insights = [
  {
    slug: "go-no-go-framework-for-contractors",
    title: "How to Decide Whether to Bid: A Practical Go/No-Go Framework",
    excerpt:
      "Most contractors bid too much work and win too little of it. A structured go/no-go process costs an hour and routinely saves weeks of wasted tender effort.",
    category: "Bid Strategy",
    date: "2026-03-18",
    readingTime: 7,
    featured: true,
    tags: ["go/no-go", "bid strategy", "tender management"],
    relatedServices: ["go-no-go-feasibility", "bid-review", "full-tender-management"],
    metaTitle: "Go / No-Go Decision Framework for Construction Tenders | Estimere",
    metaDescription:
      "A practical bid/no-bid framework for UK contractors. Score opportunities against seven weighted criteria and stop wasting tender effort on unwinnable work.",
    body: [
      {
        type: "p",
        text: "Ask most contractors what their tender win rate is and you will get a rough figure. Ask what it costs them to produce a bid, and the answer is usually vaguer. Put the two together and the picture is often uncomfortable: a significant proportion of estimating capacity is being spent on opportunities that were never realistically winnable.",
      },
      {
        type: "p",
        text: "The problem is rarely a lack of judgement. Experienced commercial people usually know, on some level, when a bid is a long shot. The problem is that there is no structured moment at which that judgement gets recorded, challenged, and acted on — so the default is to bid, because declining feels like giving up turnover.",
      },
      { type: "h2", text: "Why the default to bid is expensive" },
      {
        type: "p",
        text: "A full tender on a mid-sized scheme consumes senior time across estimating, commercial, operations and often design. That resource is finite. Every bid you pursue is a bid you cannot pursue properly elsewhere, and a stretched bid team produces weaker submissions across the whole pipeline — not just on the marginal opportunity.",
      },
      {
        type: "quote",
        text: "Bidding everything is not an aggressive growth strategy. It is a way of guaranteeing that no bid gets the attention it needed.",
      },
      { type: "h2", text: "Seven criteria worth scoring" },
      {
        type: "p",
        text: "A workable framework does not need to be complicated. Seven criteria, weighted according to what actually matters to your business, will separate the genuine opportunities from the ones you are pursuing out of habit.",
      },
      { type: "h3", text: "1. Client relationship" },
      {
        type: "p",
        text: "Have you worked for this client before, and did it end well? Is this a genuinely open competition, or is there an incumbent with a relationship you are unlikely to displace? Be honest about whether you are being invited to make up the numbers.",
      },
      { type: "h3", text: "2. Competitive field" },
      {
        type: "p",
        text: "How many bidders, and who are they? A six-way tender against contractors with lower overheads is a different proposition to a three-way against peers. If you do not know who else is bidding, that is itself useful information about your position.",
      },
      { type: "h3", text: "3. Capability fit" },
      {
        type: "p",
        text: "Have you delivered this type and scale of work before? Can you evidence it in a quality submission? Genuine capability gaps show up in evaluation scoring even when the price is competitive.",
      },
      { type: "h3", text: "4. Capacity and programme" },
      {
        type: "p",
        text: "Can you resource delivery if you win, on the programme the client requires? Winning work you cannot staff is worse than not bidding it.",
      },
      { type: "h3", text: "5. Margin potential" },
      {
        type: "p",
        text: "What margin is realistically achievable here, given the competition and the contract form? Some work is only winnable at a margin that does not justify the delivery risk.",
      },
      { type: "h3", text: "6. Risk profile" },
      {
        type: "p",
        text: "Contract form, ground risk, design responsibility, liquidated damages, payment terms. Where the contract transfers substantial risk without a mechanism to price it, that should weigh heavily against bidding.",
      },
      { type: "h3", text: "7. Strategic value" },
      {
        type: "p",
        text: "Does winning this open a framework, a sector, or a client relationship worth more than the job itself? This is the criterion that legitimately justifies bidding at thin margin — but it should be a deliberate decision, not a retrospective justification.",
      },
      { type: "h2", text: "Making it work in practice" },
      {
        type: "ol",
        items: [
          "Weight the criteria to your business. A contractor with spare capacity should weight capacity lightly; one that is fully committed should weight it heavily.",
          "Score before the estimating work starts, not after. Once a team has spent two weeks on a bid, the sunk cost makes an objective decision almost impossible.",
          "Require a written justification for any bid that scores poorly but is being pursued anyway. Sometimes there is a good reason. Writing it down tests whether there is.",
          "Review the scores against outcomes quarterly. Over time this calibrates your framework against what actually wins.",
        ],
      },
      {
        type: "callout",
        text: "The most valuable output of a go/no-go process is not the bids you decline — it is the additional attention available for the ones you pursue. Declining two marginal opportunities to bid the third properly is usually the higher-return decision.",
      },
      { type: "h2", text: "The uncomfortable part" },
      {
        type: "p",
        text: "A functioning go/no-go process will tell you to decline work, and that will feel wrong the first few times — particularly when the pipeline looks thin. But a declined bid costs you nothing beyond the opportunity. A pursued bid costs real money whether you win it or not, and a won bid at the wrong price costs considerably more than that.",
      },
    ],
  },
  {
    slug: "what-a-tender-programme-should-look-like",
    title: "What a Tender Programme Should Actually Look Like",
    excerpt:
      "Most bids fail on process, not price. Working backwards from the submission date, with the adjudication fixed first, is what separates a considered bid from a rushed one.",
    category: "Tendering Process",
    date: "2026-02-24",
    readingTime: 6,
    tags: ["tender programme", "bid management", "adjudication"],
    relatedServices: ["full-tender-management", "cost-estimating", "bid-writing"],
    metaTitle: "How to Build a Tender Programme | Construction Bid Management | Estimere",
    metaDescription:
      "A practical guide to building a tender programme that works backwards from submission — enquiry deadlines, adjudication dates and the buffer most bids skip.",
    body: [
      {
        type: "p",
        text: "Ask why a bid went out weaker than intended and the answer is almost never that the estimator could not price the work. It is that the subcontractor quotations arrived two days before submission, the quality responses were written overnight, and the adjudication happened in a rushed conversation rather than against a considered cost position.",
      },
      {
        type: "p",
        text: "That is a programme failure, and it is entirely avoidable. A tender is a project with a fixed end date, dependencies, and a critical path — and it should be programmed like one.",
      },
      { type: "h2", text: "Work backwards, not forwards" },
      {
        type: "p",
        text: "The instinct on receiving an ITT is to start at the beginning: read the documents, start measuring, get enquiries out. That produces a programme where the finish date is whatever happens to be left over.",
      },
      {
        type: "p",
        text: "Instead, fix the submission deadline and work backwards, setting each milestone by what must be complete before the next can start.",
      },
      {
        type: "quote",
        text: "If the adjudication date is not fixed before the enquiries go out, the adjudication will happen whenever the last quotation arrives.",
      },
      { type: "h2", text: "The milestones that matter" },
      { type: "h3", text: "Submission — day zero" },
      {
        type: "p",
        text: "Note the actual deadline, including the time of day and the portal being used. Portal uploads fail, and they fail most often close to a deadline when the system is busiest.",
      },
      { type: "h3", text: "Submission buffer — 1 to 2 days before" },
      {
        type: "p",
        text: "The single most commonly omitted item. Everything should be complete and assembled at least a day before the deadline. This buffer absorbs the portal problem, the late correction, the document that will not convert to PDF.",
      },
      { type: "h3", text: "Adjudication — 3 to 5 days before" },
      {
        type: "p",
        text: "The commercial decision needs to happen against a complete cost position, with time to act on the outcome. An adjudication the day before submission is not a decision; it is a rubber stamp.",
      },
      { type: "h3", text: "Estimate complete — 5 to 7 days before" },
      {
        type: "p",
        text: "All quotations received, analysed and incorporated. Risk register complete. Qualifications drafted.",
      },
      { type: "h3", text: "Quality submission complete — 5 to 7 days before" },
      {
        type: "p",
        text: "Written in parallel with the estimate, not after it. Quality responses drafted at the end are visibly rushed, and evaluators score them accordingly.",
      },
      { type: "h3", text: "Subcontractor quotations returned — 10 to 14 days before" },
      {
        type: "p",
        text: "This is the milestone that determines whether the rest of the programme holds. It requires chasing, and someone needs to own it.",
      },
      { type: "h3", text: "Enquiries issued — as early as possible" },
      {
        type: "p",
        text: "Ideally within the first two or three days of receiving the ITT. Every day of delay here compresses everything downstream.",
      },
      { type: "h3", text: "Clarification deadline — note it immediately" },
      {
        type: "p",
        text: "Tender queries usually close well before submission. Missing that date means carrying an ambiguity you could have resolved, and pricing risk you did not need to take.",
      },
      { type: "h2", text: "Where the programme usually breaks" },
      {
        type: "ul",
        items: [
          "Enquiries issued late because the take-off was not complete enough to define package scope",
          "No named owner for chasing quotation returns, so it happens intermittently",
          "Quality responses treated as a separate workstream that starts after pricing finishes",
          "No buffer, so any single problem in the final week becomes a submission risk",
          "Adjudication scheduled around availability rather than fixed at the start",
        ],
      },
      {
        type: "callout",
        text: "If a tender programme genuinely does not fit — if the deadline does not allow time to price the work properly — that is itself a go/no-go input. A bid submitted without adequate time is a priced risk, whether or not anyone has acknowledged it.",
      },
      { type: "h2", text: "It takes an hour" },
      {
        type: "p",
        text: "Building a tender programme is not a significant overhead. It is an hour at the start of a bid that determines whether the remaining three weeks are used well. On a bid worth pursuing at all, that is the highest-return hour available.",
      },
    ],
  },
];

/**
 * ============================================================================
 * TEMPLATE — copy this block, paste it at the TOP of the array above, fill in.
 * ============================================================================
 *
 * {
 *   slug: "your-article-slug",
 *   title: "Your Article Title",
 *   excerpt: "One or two sentences summarising the article for the index page.",
 *   category: "Estimating",            // must match one of CATEGORIES
 *   date: "2026-04-01",
 *   readingTime: 5,
 *   featured: false,
 *   tags: ["keyword", "keyword"],
 *   relatedServices: ["cost-estimating"],
 *   relatedSectors: ["civils-groundworks"],
 *   metaTitle: "SEO Title With Target Keyword | Estimere",
 *   metaDescription: "SEO description, roughly 150-160 characters.",
 *   body: [
 *     { type: "p", text: "Opening paragraph." },
 *     { type: "h2", text: "First section" },
 *     { type: "p", text: "Body text." },
 *     { type: "ul", items: ["Point one", "Point two"] },
 *     { type: "quote", text: "A pulled-out statement." },
 *     { type: "callout", text: "A practical tip or warning." },
 *   ],
 * },
 *
 * ============================================================================
 */

export function getInsightBySlug(slug) {
  return insights.find((i) => i.slug === slug);
}

/** Newest first. */
export function getSortedInsights() {
  return [...insights].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function formatInsightDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
