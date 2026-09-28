import { productStages as productStageOptions } from "../../shared/contact/schema";
import type { InquiryType } from "../types/contact";

export const contactImages = {
  hero: {
    src: "/images/09-contact-hero.jpg",
    alt: "",
    objectPosition: "center top",
    width: 1024,
    height: 576,
  },
};

export const contactMeta = {
  title: "Contact | Novarin Capital",
  description:
    "Contact Novarin Capital about an early-stage crypto business, a potential collaboration or a general inquiry.",
};

export const contactHero = {
  eyebrow: "Get in touch",
  titleLead: "A good conversation.",
  emphasis: "A good beginning.",
  summary:
    "Tell us about your company, the problem you are solving and where your work fits within the crypto ecosystem.",
  aside: ["Founders", "Partners", "Questions"],
};

export const contactIntro = {
  eyebrow: "Contact Novarin",
  title: "Tell us what you're building.",
  summary: "Choose the purpose of your inquiry, then share a brief introduction.",
};

export const contactGuidance = {
  mobileSummary: "What to include in your introduction",
  title: "Start with what matters.",
  body: "A few clear details help frame the conversation.",
  steps: [
    {
      number: "01",
      title: "The customer",
      body: "Who do you serve, and what do they need?",
    },
    {
      number: "02",
      title: "The solution",
      body: "What are you building, and why does this approach matter?",
    },
    {
      number: "03",
      title: "The next priority",
      body: "What have you learned, and what comes next?",
    },
  ],
  safetyTitle: "Share an introduction, not confidential records.",
  safetyBody:
    "Please do not include identity documents, bank credentials, private keys, seed phrases or confidential customer data.",
};

export const inquiryTypes: { value: InquiryType; label: string; help: string }[] = [
  {
    value: "founder",
    label: "Founder inquiry",
    help: "For founders building in crypto, blockchain infrastructure, digital finance or emerging applications.",
  },
  {
    value: "partnership",
    label: "Partnership",
    help: "For organizations exploring a potential working relationship.",
  },
  {
    value: "general",
    label: "General question",
    help: "For other questions about Novarin Capital.",
  },
];

export const productStages = [...productStageOptions];

export const contactFaq = {
  eyebrow: "Before you reach out",
  title: "A few useful details.",
  body: "Keep the first conversation focused on your business and the problem you are solving.",
  items: [
    {
      question: "Do you only consider payment businesses?",
      answer:
        "No. Payments are one part of our focus. Our interests also include blockchain infrastructure, security, tokenization, DeFi, AI-linked networks and digital ownership applications.",
    },
    {
      question: "Does a company need its own token?",
      answer:
        "A token is not a prerequisite. We consider whether the proposed technology and business model serve a clear purpose. Where a token is involved, its role and incentives need to be explained alongside the product.",
    },
    {
      question: "Do I need a finished product?",
      answer:
        "You may introduce an idea, prototype or operating business. Describe what has been built or tested and which assumptions remain open. The evidence considered should reflect the company's stage.",
    },
    {
      question: "What should a first introduction include?",
      answer:
        "Start with the customer, the problem, your product and your next priority. Include the markets you serve and a brief description of how the business expects to earn revenue. A concise, non-confidential summary is enough to begin.",
    },
    {
      question: "Can I share a pitch deck or confidential materials?",
      answer:
        "Where the inquiry form is available, you may include a link to a non-confidential deck. Do not send identity documents, account credentials, private keys or confidential customer records through a general inquiry. Sensitive material requires a separately agreed process.",
    },
    {
      question: "Does an introduction mean Novarin will invest?",
      answer:
        "No. An inquiry begins a conversation; it is not a funding commitment or a guarantee of review. Any potential investment would require its own assessment, approvals, agreed terms and documentation.",
    },
  ],
};

export const contactUnavailable = {
  title: "Online inquiries are not available yet.",
  fallback: "Please check back when contact details are published.",
};

/** Delivery stays off until an owner confirms routing, privacy handling, and a real Privacy Notice. */
export const inquiryDeliveryEnabled = false;

export const contactFormCopy = {
  founderMessagePlaceholder:
    "Describe your customer, product, business model and next priority.",
};

export const privacyNoticeHref: string | undefined = undefined;
