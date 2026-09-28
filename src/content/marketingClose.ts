export type MarketingClosePage =
  | "about"
  | "investment-focus"
  | "approach"
  | "leadership"
  | "perspectives";

/** Shared closing band copy (matches Our Approach). Titles vary by page. */
export const marketingCloseShared = {
  eyebrow: "Let's build together",
  body: "We welcome conversations with founders working on practical payment and settlement solutions.",
  cta: {
    label: "Start a conversation",
    href: "/contact",
  },
} as const;

const marketingCloseTitles: Record<MarketingClosePage, string> = {
  about: "Tell us what you're building.",
  "investment-focus": "Building a more open financial future.",
  approach: "Backing founders building a more open financial future.",
  leadership: "Partnership built on clarity and long-term thinking.",
  perspectives: "Ideas for a more open financial future.",
};

const marketingCloseTitleIds: Record<MarketingClosePage, string> = {
  about: "about-close-title",
  "investment-focus": "focus-close-title",
  approach: "approach-close-title",
  leadership: "leadership-close-title",
  perspectives: "perspectives-close-title",
};

export function marketingCloseFor(page: MarketingClosePage) {
  return {
    ...marketingCloseShared,
    title: marketingCloseTitles[page],
    titleId: marketingCloseTitleIds[page],
  };
}
