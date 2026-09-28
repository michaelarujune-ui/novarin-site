export type ApproachImage = {
  src: string;
  alt: string;
  objectPosition: string;
  width: number;
  height: number;
};

/** Decorative photograph. It is not a picture of a Novarin office. */
export const approachImages: {
  hero?: ApproachImage;
} = {
  hero: {
    src: "/images/06-our-approach-hero.jpg",
    alt: "A glass-lined interior corridor with pendant lights.",
    objectPosition: "58% center",
    width: 1024,
    height: 678,
  },
};

export const approachMeta = {
  title: "Our Approach | Novarin Capital",
  description:
    "A practical framework for assessing customers, technical design, economics and operating responsibilities across early-stage crypto businesses.",
};

export const approachHero = {
  eyebrow: "Our approach",
  titleLead: "Long-term thinking",
  titleTail: "for",
  emphasis: "real-world progress.",
  summary:
    "Our approach combines independent research, practical judgment and a long-term view of companies building across crypto. We aim to understand the business as it operates today and the assumptions behind its next stage of development.",
  aside: ["People", "Perspective", "Partnership", "Progress"],
};

export const approachPhilosophy = {
  eyebrow: "Our investment philosophy",
  titleLines: ["Practical capital.", "Constructive partners."],
  body: "We begin with the customer and work through the product, its economics and its operating responsibilities. A clear investment view should explain both what is attractive and what remains uncertain. We value founders who can discuss those uncertainties directly and show how their thinking changes with evidence.",
  rows: [
    {
      id: "perspective",
      title: "Long-term perspective",
      body: "We look for enduring customer value, not short-term trends.",
      icon: "leaf" as const,
    },
    {
      id: "partnership",
      title: "Founder partnership",
      body: "We value honest dialogue, aligned expectations and founder autonomy.",
      icon: "people" as const,
    },
    {
      id: "discipline",
      title: "Disciplined approach",
      body: "We consider commercial fundamentals alongside operational realities.",
      icon: "layers" as const,
    },
  ],
};

export const approachValues = {
  eyebrow: "Our values",
  title: "Integrity. Clarity. Impact.",
  supporting:
    "These principles shape the way we aim to evaluate opportunities and work with founders.",
  cards: [
    {
      id: "integrity",
      title: "Integrity",
      body: "We value fairness, transparency and consistency.",
      icon: "shield" as const,
    },
    {
      id: "clarity",
      title: "Clarity",
      body: "We aim to make expectations, decisions and responsibilities clear.",
      icon: "target" as const,
    },
    {
      id: "impact",
      title: "Impact",
      body: "We look for useful products and infrastructure with clear customer value.",
      icon: "bars" as const,
    },
  ],
};

export const approachProcess = {
  id: "investment-process",
  eyebrow: "Our investment process",
  title: "From insight to partnership.",
  body: "A structured path from an initial conversation to a potential investment and an agreed working relationship.",
  showLabel: "Learn about our process",
  hideLabel: "Hide process details",
  steps: [
    {
      id: "source",
      number: "01",
      title: "Source",
      body: "Understand the customer, the problem and the company's current stage.",
      detail:
        "An initial introduction should explain who uses the product, what needs to improve and what has been built or tested. We distinguish an idea, a working prototype, a pilot and an operating business so that the discussion starts from the evidence actually available.",
      discussionOutput:
        "A clear description of the opportunity, its stage and the main questions for further review.",
    },
    {
      id: "evaluate",
      number: "02",
      title: "Evaluate",
      body: "Examine adoption, technical design, economics and material dependencies.",
      detail:
        "Review can include product evidence, customer behavior, architecture, security, revenue quality and operating requirements. Where a token is involved, we also consider its function, incentives and governance. The depth of review should fit the company and the investment under discussion, without treating every early business as if it had the same history or resources.",
      discussionOutput:
        "An assessment of the investment case, material uncertainties and the work needed to resolve them.",
    },
    {
      id: "partner",
      number: "03",
      title: "Partner",
      body: "Establish mutual fit, clear terms and realistic expectations.",
      detail:
        "When discussions progress, the working relationship needs to be explicit: the proposed investment, decision rights, reporting expectations and any agreed support priorities. An introduction is not an investment commitment; any transaction remains subject to its own review, approvals and documentation.",
      discussionOutput:
        "An agreed scope for a potential investment and working relationship, not an automatic offer of funding.",
    },
    {
      id: "grow",
      number: "04",
      title: "Grow",
      body: "Revisit agreed priorities as the business develops.",
      detail:
        "A company's needs may change as it improves its product, adds customers or considers another market. A useful investment relationship makes room to review those priorities and the evidence behind them. Any additional support or future investment should be discussed on its own merits rather than assumed.",
      discussionOutput:
        "Clear next priorities and an honest view of progress, constraints and further decisions.",
    },
  ],
  decisionQuestions: {
    title: "Questions behind the decision.",
    items: [
      {
        label: "Customer evidence",
        body: "Who has the problem, who uses the product and who pays? What has been observed rather than assumed?",
      },
      {
        label: "Distribution",
        body: "How does the company reach appropriate customers, and what is involved in moving from a conversation to repeat use?",
      },
      {
        label: "Technical design",
        body: "Which components are essential, what can the team explain and maintain, and what remains outside its control?",
      },
      {
        label: "Business economics",
        body: "Where does revenue accrue, what does delivery cost and how do incentives or concentration affect the model?",
      },
      {
        label: "Operating dependencies",
        body: "Which providers, permissions, assets and counterparties matter to continued operation, and what alternatives exist?",
      },
      {
        label: "Execution",
        body: "Which decisions belong to the team, what work comes next and what resources are required to carry it out?",
      },
    ],
  },
  supportDiscussions: {
    title: "Define where a partner can be useful.",
    intro: "Support should start with the company's priorities and a realistic discussion of what can be contributed. Potential areas for discussion include:",
    items: [
      {
        label: "Commercial focus",
        body: "Clarifying customer segments, evaluating pilot opportunities and considering relevant introductions where an appropriate relationship exists.",
      },
      {
        label: "Operating priorities",
        body: "Discussing provider dependencies, reporting needs and the issues that may require specialized technical, financial or legal input.",
      },
      {
        label: "Organization",
        body: "Identifying the responsibilities, hiring priorities and external capabilities needed for the next stage.",
      },
      {
        label: "Financing preparation",
        body: "Organizing the company's narrative, available evidence and next funding requirements without guaranteeing a future financing outcome.",
      },
    ],
    closing:
      "Any support is agreed for the specific relationship. It does not imply guaranteed customers, regulatory approvals, specialist services or follow-on funding.",
  },
};
