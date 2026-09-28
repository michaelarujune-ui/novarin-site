export const hero = {
  id: "the-firm",
  eyebrow: "Crypto · Digital assets · Emerging technology",
  titleLead: "Backing the builders",
  titleEmphasis: "more open digital economy.",
  titleTail: "",
  summary:
    "Novarin Capital focuses on early-stage companies across blockchain infrastructure, digital finance and next-generation applications. We look for products with a clear purpose, credible economics and a reason for customers to keep using them.",
  primaryCta: {
    label: "Introduce your company",
    href: "/contact",
  },
  secondaryCta: {
    label: "Our approach",
    href: "/approach",
  },
  asideLines: ["Payments", "People", "Opportunity"],
  horizonLines: ["A more open", "digital economy"],
};

export const investmentFocus = {
  id: "investment-focus",
  eyebrow: "Our investment perspective",
  title: "A broad perspective. A focused investment discipline.",
  introduction:
    "Our focus spans the systems that make crypto possible, the financial activity those systems support and the applications built around them. Each opportunity is considered on its own merits, not simply because it belongs to a growing category.",
  supporting:
    "From core infrastructure to financial systems and applications, our focus is on businesses built for practical use and durable economics.",
  cta: {
    label: "Explore our investment focus",
    href: "/investment-focus",
  },
  cards: [
    {
      id: "infrastructure-networks",
      title: "Infrastructure & Networks",
      description: "The foundations of crypto: protocols, scaling, security, data and decentralized resources.",
      detail:
        "We consider the infrastructure developers and businesses depend on to build and operate products. Our questions start with the workload being served, the reliability required and the reason a customer would choose this system over an alternative.",
      relevantAreas: "Blockchain infrastructure and security; AI-linked and decentralized networks.",
      icon: "layers" as const,
    },
    {
      id: "financial-systems-markets",
      title: "Financial Systems & Markets",
      description:
        "Stablecoins, payments, tokenization and DeFi connecting digital assets with practical financial activity.",
      detail:
        "We examine the complete service around a financial transaction: customer access, asset handling, conversion, settlement and ongoing administration. Useful technology must be considered alongside incentives, dependencies and clearly defined responsibilities.",
      relevantAreas: "Stablecoins and payments; tokenization and onchain markets; DeFi and financial infrastructure.",
      icon: "coins" as const,
    },
    {
      id: "ownership-applications",
      title: "Ownership & Applications",
      description: "Products that make digital ownership, identity and participation useful to people and businesses.",
      detail:
        "We look for a recognizable customer need and a repeatable reason to use the product. The investment question is not only what the technology makes possible, but how a business reaches users, retains them and earns sustainable revenue.",
      relevantAreas: "Digital ownership and consumer networks; applications across the wider ecosystem.",
      icon: "people" as const,
    },
  ],
};

export const principles = {
  id: "our-approach",
  eyebrow: "A clearer, more connected economy",
  title: "Practical capital. Clear investment questions.",
  pillars: [
    {
      id: "people",
      title: "People",
      description: "Who understands the customer, owns the important decisions and can build the next stage of the business?",
      icon: "people" as const,
    },
    {
      id: "markets",
      title: "Markets",
      description: "What need exists, which alternatives are available and why would adoption continue beyond an initial trial?",
      icon: "globe" as const,
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      description: "How does the product work, what does it depend on and what happens when an important component fails?",
      icon: "layers" as const,
    },
    {
      id: "opportunity",
      title: "Opportunity",
      description: "Can the company turn a useful product into a durable business with sound economics and a credible path to growth?",
      icon: "leaf" as const,
    },
  ],
};

export const contact = {
  id: "contact",
  title: "Tell us what you’re building.",
  description:
    "Tell us about your company, the problem you are solving and your next priority.",
  privacyNote:
    "Please do not include identity documents, bank credentials, private keys, seed phrases or confidential customer data.",
  previewNotice: "Preview only — submissions are not enabled.",
  submitLabel: "Submit",
  fields: {
    fullName: { label: "Full name", maxLength: 120 },
    email: { label: "Email", maxLength: 254 },
    company: { label: "Company or project", maxLength: 160 },
    website: { label: "Website", maxLength: 200 },
    building: { label: "What are you building?", maxLength: 2000 },
  },
};
