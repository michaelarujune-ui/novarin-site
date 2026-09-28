export type AboutImage = {
  src: string;
  alt: string;
  objectPosition: string;
  width: number;
  height: number;
};

/** Decorative photographs. They are not pictures of Novarin offices or staff. */
export const aboutImages: {
  hero?: AboutImage;
  context?: AboutImage;
} = {
  hero: {
    src: "/images/02-the-firm-hero.jpg",
    alt: "Glass building exteriors, seen from below.",
    objectPosition: "center 28%",
    width: 1024,
    height: 768,
  },
  context: {
    src: "/images/03-the-firm-context.jpg",
    alt: "An empty interior with tall windows and wood panels.",
    objectPosition: "32% center",
    width: 1024,
    height: 682,
  },
};

export const aboutMeta = {
  title: "The Firm | Novarin Capital",
  description:
    "Novarin Capital is an early-stage investment firm focused on companies across the crypto ecosystem, from infrastructure and digital finance to practical applications.",
};

export const aboutHero = {
  eyebrow: "The Firm",
  titleLines: ["A broad perspective.", "A disciplined investment focus."],
  summary:
    "We look for practical applications where technical progress supports clear utility, thoughtful design and credible paths to adoption.",
  aside: ["Real solutions", "Real economies"],
};

export const aboutPurpose = {
  eyebrow: "Our purpose",
  titleLines: ["Useful innovation.", "Businesses built to endure."],
  body: "We are interested in the point where technical possibility becomes a useful product and a credible business. That means examining what a company enables, who depends on it and how its model can develop beyond early enthusiasm.",
  mission: {
    title: "Our Mission",
    body: "To back founders building useful products and resilient infrastructure across crypto. We seek opportunities where technical progress can support a clear customer need and a durable business model.",
  },
  vision: {
    title: "Our Vision",
    body: "To be a thoughtful, long-term investment partner to founders shaping a more open digital economy. Our ambition spans the underlying infrastructure and the applications that make it relevant to everyday activity.",
  },
  overview:
    "Novarin Capital is an early-stage investment firm focused on companies across the crypto ecosystem. Our perspective brings together foundational technology, digital financial systems and practical applications through a disciplined assessment of customers, economics and operating risk.",
};

export const aboutInvestmentCriteria = {
  eyebrow: "Investment criteria",
  title: "Where we focus our attention.",
  rows: [
    {
      label: "Stage",
      detail: "Early-stage companies.",
    },
    {
      label: "Sectors",
      detail:
        "Blockchain infrastructure, digital financial systems, and applications across the crypto ecosystem, assessed selectively by company.",
    },
  ],
};

export const aboutPrinciples = {
  eyebrow: "Our principles",
  titleLines: ["A disciplined approach.", "A constructive partnership."],
  supporting:
    "We evaluate each opportunity on its own merits, with attention to how the business works and how it may endure.",
  items: [
    {
      id: "independent-thinking",
      title: "Independent thinking",
      body: "We evaluate the underlying company and technology rather than relying on the popularity of a market narrative. A familiar label is a starting point for questions, not a conclusion.",
      icon: "leaf" as const,
    },
    {
      id: "technical-understanding",
      title: "Technical understanding",
      body: "We examine how a system works, what it depends on and where its limitations lie. We value clear explanations of architecture, security and operating trade-offs.",
      icon: "layers" as const,
    },
    {
      id: "disciplined-judgment",
      title: "Disciplined judgment",
      body: "We consider customer evidence, economics, incentives and material risks together. Promising adoption does not remove the need to understand costs and responsibilities.",
      icon: "globe" as const,
    },
    {
      id: "long-term-alignment",
      title: "Long-term alignment",
      body: "We value candid dialogue, clear expectations and constructive relationships with founders. A useful partnership leaves room for independent judgment and changing evidence.",
      icon: "people" as const,
    },
  ],
};

export const aboutContext = {
  eyebrow: "Breadth with selectivity",
  title: "Connected themes. Individual investment decisions.",
  paragraphs: [
    "Our interests cover blockchain infrastructure, stablecoins, tokenization, decentralized finance, AI-linked networks and digital ownership. The boundaries are not rigid: one company may provide infrastructure used across several sectors, while another may solve a narrow problem for a specific customer group.",
    "A broad remit does not mean investing indiscriminately. We evaluate the particular business, the role of its technology and the conditions required for sustained use. We also ask which risks the company controls directly and which remain with external providers, protocols or market conditions.",
    "Our early-stage focus shapes the evidence we look for. A prototype, a pilot and an operating business may support different conclusions; the aim is to understand what has actually been demonstrated and what still needs to be tested.",
  ],
  overlay: "Connecting global value with local realities",
  cta: {
    label: "Explore our investment focus",
    href: "/investment-focus",
  },
};
