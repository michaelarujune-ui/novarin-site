export type FocusImage = {
  src: string;
  alt: string;
  objectPosition: string;
  width: number;
  height: number;
};

/** Decorative photographs. They are not pictures of Novarin offices or staff. */
export const investmentFocusImages: {
  hero?: FocusImage;
  context?: FocusImage;
} = {
  hero: {
    src: "/images/04-investment-focus-hero.jpg",
    alt: "Earth at night, seen from orbit, with city lights along the curve.",
    objectPosition: "center 68%",
    width: 1024,
    height: 678,
  },
  context: {
    src: "/images/05-investment-focus-context.jpg",
    alt: "A suspension bridge over the water at dusk.",
    objectPosition: "center 36%",
    width: 1024,
    height: 682,
  },
};

export const investmentFocusMeta = {
  title: "Investment Focus | Novarin Capital",
  description:
    "Explore Novarin Capital's investment focus across blockchain infrastructure, stablecoins, tokenization, DeFi, AI-linked networks and digital ownership.",
};

export const investmentFocusHero = {
  eyebrow: "Investment focus",
  lines: ["A broad view of crypto.", "A disciplined view of opportunity."],
  emphasis: "",
  summary:
    "Our focus covers the infrastructure, financial systems and applications of the crypto economy. We assess companies selectively, with attention to customer demand, technical design, commercial economics and the responsibilities behind the product.",
  aside: ["People", "Infrastructure", "Markets", "Real impact"],
};

export const focusAreas = {
  eyebrow: "Our focus areas",
  title: "Six connected areas of focus.",
  supporting:
    "These are overlapping areas of interest, not separate funds or lists of current holdings. Each company is assessed in its own context.",
};

export const investmentApproach = {
  eyebrow: "Our investment approach",
  titleLines: ["Different sectors.", "A common investment discipline."],
  body: "Across these themes, we return to the same questions: who needs the product, what makes it work, how the business earns revenue and which assumptions could change the outcome. The relevant evidence varies by sector, but the need for clear reasoning does not.",
  overlay: ["Real solutions", "for a more", "connected", "economy."],
  cta: {
    label: "Our approach",
    href: "/approach",
  },
};
