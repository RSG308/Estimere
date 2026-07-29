import { HardHat, Cable, Wrench, Building2 } from "lucide-react";

/**
 * Sector landing pages — the core SEO surface for the specialism.
 * Each page targets a distinct search intent and demonstrates domain depth
 * through the pricing-challenges section rather than generic capability claims.
 */
export const sectors = [
  {
    ref: "SEC-001",
    slug: "civils-groundworks",
    icon: HardHat,
    name: "Civils & Groundworks",
    tagline: "Where the risk is in the ground, not the drawing.",
    metaTitle: "Civils & Groundworks Estimating Services | UK Contractors | Estimere",
    metaDescription:
      "Specialist civils and groundworks estimating for UK contractors. Earthworks, drainage, structures, S278 and S38 highways works priced from first principles.",
    intro: [
      "Civils pricing is unforgiving because so much of the cost sits in things the drawings do not show. Ground conditions, disposal classification, temporary works, and the sequencing constraints imposed by existing infrastructure routinely account for more variance than the permanent works themselves.",
      "We price civils and groundworks packages from first principles, with the assumptions stated explicitly — so the risk position is visible at adjudication rather than discovered on site.",
    ],
    packages: [
      "Bulk and detailed earthworks, cut and fill",
      "Foul, surface water and highway drainage",
      "Reinforced concrete structures and substructures",
      "Piling, retaining walls and ground improvement",
      "Highways works, S278 and S38 agreements",
      "Hard and soft landscaping, external works",
      "Temporary works and enabling works",
    ],
    challenges: [
      {
        title: "Muck-away and disposal classification",
        desc: "The difference between inert, non-hazardous and hazardous classification can move a disposal figure by a multiple. We price against the actual site investigation data and flag where classification risk sits.",
      },
      {
        title: "Unforeseen ground conditions",
        desc: "Where the contract transfers ground risk, that transfer needs pricing rather than accepting. We quantify the exposure and set it out as a qualification instead of burying it in a rate.",
      },
      {
        title: "Temporary works",
        desc: "Frequently under-priced because it is not measured in the bill. Excavation support, haul roads, crane bases and access platforms are costed explicitly.",
      },
      {
        title: "Statutory undertaker interfaces",
        desc: "Diversions, disconnections and third-party approvals carry programme risk that rarely appears in the tender documents but reliably appears on site.",
      },
    ],
    services: ["cost-estimating", "full-tender-management", "go-no-go-feasibility"],
    faqs: [
      {
        q: "Do you price NEC4 target cost contracts?",
        a: "Yes. NEC4 Options C and E require a different approach to Option A — the pain/gain mechanism changes how risk and preliminaries should be positioned, and we price accordingly.",
      },
      {
        q: "Can you work from a bill of quantities or do you need drawings?",
        a: "Either. Where a BoQ exists we price against it and flag discrepancies against the drawings. Where there is no BoQ, we produce the take-off ourselves.",
      },
      {
        q: "Do you attend site?",
        a: "Where it materially affects the price, yes. On civils work, access constraints and existing conditions are often better understood from a visit than from the tender pack.",
      },
    ],
  },
  {
    ref: "SEC-002",
    slug: "utilities-infrastructure",
    icon: Cable,
    name: "Utilities & Infrastructure",
    tagline: "Framework rates, regulated clients, and the cost of getting it wrong.",
    metaTitle: "Utilities & Infrastructure Estimating | Water, Power & Telecoms | Estimere",
    metaDescription:
      "Estimating and bid support for UK utilities contractors — water, power, HV, gas and telecoms. Framework pricing, streetworks and reinstatement costed properly.",
    intro: [
      "Utilities work sits under regulated clients with established frameworks, standard rate schedules, and procurement processes that reward contractors who understand them. Pricing into that environment is a different discipline to open-market tendering.",
      "We work across water, power, gas and telecoms — including the streetworks, permitting and reinstatement costs that are consistently underestimated and consistently erode margin.",
    ],
    packages: [
      "Water and wastewater mains, pipelines and networks",
      "HV and LV cabling, substations and network reinforcement",
      "EV charging and power infrastructure",
      "Gas mains replacement and connections",
      "Telecoms and fibre network deployment",
      "Pumping stations and process mechanical works",
      "Streetworks, excavation and reinstatement",
    ],
    challenges: [
      {
        title: "Framework rate schedules vs. actual cost",
        desc: "Fixed schedules of rates rarely map cleanly onto how work is delivered. We test where the schedule works in your favour and where it exposes you before you commit to it.",
      },
      {
        title: "Streetworks, permits and reinstatement",
        desc: "NRSWA permit costs, lane rental, overrun charges and permanent reinstatement obligations frequently sit outside the priced scope but firmly inside your cost.",
      },
      {
        title: "Outages, isolations and access windows",
        desc: "Working to network availability windows changes productivity assumptions fundamentally. Pricing to normal working rates on outage-constrained work is a common and expensive error.",
      },
      {
        title: "Traffic management",
        desc: "Often disproportionate to the works value on short-duration jobs. Priced as a discrete item rather than absorbed into rates.",
      },
    ],
    services: ["cost-estimating", "pqq-sq-support", "full-tender-management"],
    faqs: [
      {
        q: "Do you have experience with regulated water frameworks?",
        a: "Yes. Framework procurement in the water sector has its own conventions around rate schedules, quality weighting and long-term partnering expectations, which differ significantly from one-off tenders.",
      },
      {
        q: "Can you support framework PQQ and pre-qualification stages?",
        a: "Yes — and it is often the highest-value point to engage. Framework gateways unlock multi-year turnover, so the return on getting the submission right is disproportionate.",
      },
      {
        q: "Do you price both civils and mechanical elements on utilities schemes?",
        a: "Yes. Most utilities work spans both, which is precisely where estimators who only cover one discipline tend to leave gaps in the scope.",
      },
    ],
  },
  {
    ref: "SEC-003",
    slug: "meph-building-services",
    icon: Wrench,
    name: "MEPH & Building Services",
    tagline: "Where the specification and the price have to actually agree.",
    metaTitle: "MEPH & Building Services Estimating | Mechanical, Electrical & Public Health | Estimere",
    metaDescription:
      "MEPH estimating and bid writing for UK building services contractors. Mechanical, electrical, public health and HVAC packages priced against specification.",
    intro: [
      "Building services pricing turns on specification interpretation. The gap between a prescriptive specification and a performance specification changes who carries design risk, what compliance costs, and how much of the commissioning burden sits with the subcontractor.",
      "We price mechanical, electrical, public health and HVAC packages with that boundary made explicit — including the items that habitually fall between the main contractor's scope and yours.",
    ],
    packages: [
      "Mechanical services, heating and cooling systems",
      "Electrical installation, distribution and containment",
      "Public health and above-ground drainage",
      "HVAC, ventilation and air conditioning",
      "BMS, controls and building automation",
      "Sprinklers, fire detection and life safety systems",
      "Commissioning, testing and handover",
    ],
    challenges: [
      {
        title: "Prescriptive vs. performance specification",
        desc: "A performance specification transfers design responsibility. That carries professional indemnity implications and design cost that must be priced, not absorbed.",
      },
      {
        title: "Builders work in connection",
        desc: "The classic scope gap. Whether BWIC sits with you or the main contractor should be resolved at tender stage, in writing, rather than argued during delivery.",
      },
      {
        title: "Commissioning, witnessing and O&M",
        desc: "Routinely under-resourced. Witnessed commissioning, client training, O&M manuals and as-built information are real costs at the end of a job when margin is already thin.",
      },
      {
        title: "Plant lead times and price volatility",
        desc: "Long-lead plant priced at tender and ordered months later carries genuine exposure. We recommend fixing validity periods or qualifying the position explicitly.",
      },
    ],
    services: ["cost-estimating", "bid-writing", "bid-review"],
    faqs: [
      {
        q: "Do you price from a schedule of rates or full take-off?",
        a: "Full take-off where the information supports it. On MEPH packages, containment, distribution and terminal units priced from measured quantities produce a far more defensible position than rate-per-square-metre approaches.",
      },
      {
        q: "Can you assess a performance specification?",
        a: "We identify where design responsibility and compliance risk sits and price accordingly. Where detailed design input is required, we would work alongside your design consultant.",
      },
      {
        q: "Do you support subcontract tenders to principal contractors?",
        a: "Yes — this is a large part of the MEPH work we do. Understanding how the principal contractor is assessing your submission materially changes how it should be presented.",
      },
    ],
  },
  {
    ref: "SEC-004",
    slug: "principal-contractor",
    icon: Building2,
    name: "Principal Contractor Works",
    tagline: "Whole-scheme pricing, where the gaps between packages cost the most.",
    metaTitle: "Principal Contractor Estimating & Tender Support | Main Contractors | Estimere",
    metaDescription:
      "Whole-scheme estimating and tender management for UK principal contractors. Preliminaries, package procurement, risk and two-stage tendering.",
    intro: [
      "Pricing as principal contractor is fundamentally a different exercise to pricing a package. The commercial risk sits less in the individual trades and more in preliminaries, the interfaces between packages, and the scope nobody has claimed.",
      "We work from the whole-scheme perspective — building preliminaries properly, testing package coverage for gaps, and setting out a risk position that survives contact with the contract.",
    ],
    packages: [
      "Full scheme estimating and cost planning",
      "Preliminaries build-up and site establishment",
      "Package procurement strategy and enquiry management",
      "Two-stage tendering and PCSA support",
      "Design and build risk assessment",
      "Risk register and contingency quantification",
      "Adjudication packs and settlement support",
    ],
    challenges: [
      {
        title: "Preliminaries build-up",
        desc: "Prelims are frequently applied as a percentage rather than built from the programme. On a long-duration or logistically constrained scheme that approach is where margin quietly disappears.",
      },
      {
        title: "Package coverage gaps",
        desc: "Every subcontract quotation has an exclusions list. Reconciling those across all packages is how you find the scope that nobody has priced — before the client does.",
      },
      {
        title: "Design responsibility under D&B",
        desc: "Employer's Requirements and Contractor's Proposals rarely align perfectly. The divergences carry cost and need identifying at tender rather than post-contract.",
      },
      {
        title: "Inflation and fluctuation",
        desc: "On multi-year schemes, whether the contract is fixed price or allows fluctuation changes the pricing approach entirely — and the exposure if it is fixed.",
      },
    ],
    services: ["full-tender-management", "cost-estimating", "post-tender-support"],
    faqs: [
      {
        q: "Do you work on two-stage tenders and PCSAs?",
        a: "Yes. Two-stage procurement shifts the commercial exercise toward open-book cost planning and package procurement, which needs a different approach to a single-stage lump sum bid.",
      },
      {
        q: "Can you manage the package procurement process?",
        a: "Yes — issuing enquiries, managing returns, and producing like-for-like comparisons across the supply chain. This is typically where the majority of tender effort sits.",
      },
      {
        q: "Do you prepare adjudication packs?",
        a: "Yes. We present the cost position, risk register and qualifications so your commercial decision on margin is made against a clear picture. The final number remains yours.",
      },
    ],
  },
];

export function getSectorBySlug(slug) {
  return sectors.find((s) => s.slug === slug);
}
