export type FocusSectorCard = {
  id: string;
  icon: "shield" | "coins" | "layers" | "bars" | "globe" | "people";
  title: string;
  description: string;
  overview: string;
  businessTypes: string;
  commercialQuestions: string;
  questionsWeAsk: string[];
  keyDependencies: string;
  anchorAliases?: string[];
};

export const focusSectorCards: FocusSectorCard[] = [
  {
    id: "blockchain-infrastructure-security",
    icon: "shield",
    title: "Blockchain Infrastructure & Security",
    description: "The protocols, tools and safeguards that support digital-asset networks.",
    overview:
      "We consider the systems developers and businesses use to build, connect and operate blockchain products. The starting point is a practical requirement: executing transactions, accessing reliable data, protecting assets or making development less complex. We then examine the architecture, the alternatives and the work needed to maintain the service. A technically impressive product needs a reason to be adopted and a credible way to support its customers over time.",
    businessTypes:
      "Core blockchain and Bitcoin infrastructure; scaling and interoperability; developer tools; wallets and custody technology; data services; security monitoring; privacy and compliance tooling.",
    commercialQuestions:
      "Who pays for the capability, and on what basis? We examine subscription, usage-based, licensing and enterprise models in relation to delivery costs, customer concentration and retention.",
    questionsWeAsk: [
      "Which recurring developer or business problem is being solved?",
      "What advantage remains after comparing reliability, integration effort and total cost?",
      "Which security assumptions and external dependencies need to remain valid?",
    ],
    keyDependencies:
      "Areas for review include key management, privileged access, upgrades, network changes and concentration in external providers. We look for a clear explanation of both normal operation and recovery when something goes wrong.",
    anchorAliases: ["payment-infrastructure", "local-settlement"],
  },
  {
    id: "stablecoins-payments",
    icon: "coins",
    title: "Stablecoins & Payments",
    description: "Tools connecting digital value with payment, treasury and local settlement needs.",
    overview:
      "We look at the complete journey from a payer's instruction to funds being available to the intended recipient. Stablecoins may be part of that journey, but the surrounding product also needs onboarding, conversion, reconciliation and support. We examine which customer is being served, what the current alternatives cost and where the proposed service changes the experience. The investment case should explain the whole operating model rather than relying on the speed of one transfer.",
    businessTypes:
      "Stablecoin infrastructure; merchant acceptance; business payments; cross-border collection and payout services; treasury tools; settlement orchestration and reconciliation.",
    commercialQuestions:
      "We distinguish payment value from revenue and examine processing charges, conversion costs, provider fees, support costs and liquidity requirements. Pricing should be assessed for the actual customer and route, not as one unexplained blended figure.",
    questionsWeAsk: [
      "Who receives, holds, converts and ultimately pays out the funds?",
      "What makes the service useful enough for a customer to use repeatedly?",
      "How are delayed, rejected or mismatched payments resolved?",
    ],
    keyDependencies:
      "Review includes banking and payout partners, asset custody, liquidity, issuer exposure and operational responsibilities. Where permissions or legal duties are involved, the relevant activity and jurisdiction need qualified review.",
    anchorAliases: ["stablecoin-payments"],
  },
  {
    id: "tokenization-onchain-markets",
    icon: "layers",
    title: "Tokenization & Onchain Markets",
    description: "Infrastructure for representing assets and administering ownership in digital markets.",
    overview:
      "We consider products that connect a digital record with an identifiable asset, right or administrative process. The evaluation begins with what is represented and how that relationship is maintained outside the software. Issuance is only one part of the lifecycle; servicing, reporting, transfer conditions and any redemption process also matter. We look for a concrete improvement for issuers, investors or service providers, rather than treating a digital representation as sufficient evidence of demand or liquidity.",
    businessTypes:
      "Asset issuance and administration tools; ownership records; reporting; transfer controls; servicing; collateral workflows and market connectivity.",
    commercialQuestions:
      "Potential models include issuance, administration, servicing, software and transaction fees. We examine who pays, the ongoing obligations and the cost of maintaining accurate records and external relationships.",
    questionsWeAsk: [
      "What asset or right is represented, and how is that connection established?",
      "Who is responsible for servicing, reporting, transfer conditions and disputes?",
      "Which customer workflow improves, and what demonstrates demand for it?",
    ],
    keyDependencies:
      "Areas for review include underlying asset information, custody, servicing counterparties, transfer restrictions and any claim of redemption or liquidity. Do not equate a token record with legal certainty or a ready market.",
    anchorAliases: [],
  },
  {
    id: "defi-financial-infrastructure",
    icon: "bars",
    title: "DeFi & Financial Infrastructure",
    description: "Systems for trading, lending, liquidity and other digital financial activity.",
    overview:
      "We evaluate the financial function a product performs and the incentives that keep it operating. That involves understanding its users, counterparties, asset flows and rules for participation. A company's commercial position should be distinguished from the activity of a protocol, and temporary rewards should be examined separately from repeat demand. We are interested in a clearly explained service, a defensible business model and a realistic account of how the system behaves under pressure.",
    businessTypes:
      "Trading infrastructure; decentralized exchanges; lending and collateral systems; liquidity tools; portfolio and risk software; institutional access infrastructure.",
    commercialQuestions:
      "We examine fee generation, the entity entitled to revenue, delivery costs and incentive spending. Protocol activity or token ownership must not be presented as company revenue without establishing the actual relationship.",
    questionsWeAsk: [
      "Which participants use the service, and why would they continue without temporary rewards?",
      "Where does revenue accrue, and what are the economics of serving those users?",
      "What happens when liquidity, collateral values or external price inputs deteriorate?",
    ],
    keyDependencies:
      "Review includes smart-contract controls, governance, collateral, liquidity concentration and external price information. A model should explain adverse conditions, not only normal activity.",
    anchorAliases: [],
  },
  {
    id: "ai-crypto-decentralized-networks",
    icon: "globe",
    title: "AI × Crypto & Decentralized Networks",
    description: "Intelligent software, verifiable coordination and distributed resources with a practical purpose.",
    overview:
      "We begin with a workload or coordination problem rather than a combination of technology labels. The question is whether intelligent software, a shared digital record or distributed physical resources makes the proposed service more useful. We examine how work is requested, performed, checked and paid for, and which participants bear the costs. A convincing model needs demand for the service itself, alongside a credible account of resource quality and network participation.",
    businessTypes:
      "Agent infrastructure; machine payments; decentralized compute, storage, connectivity and data services; coordination tools for distributed physical infrastructure.",
    commercialQuestions:
      "We examine usage and service revenue alongside hardware costs, capacity utilization, contributor payments and verification costs. Incentives should be distinguished from customer spending on a useful workload.",
    questionsWeAsk: [
      "Why are these technologies needed together rather than through a simpler architecture?",
      "How are resource quality, completed work and permissions verified?",
      "Who owns the customer relationship, and what supports reliable service delivery?",
    ],
    keyDependencies:
      "Areas for review include resource availability, hardware economics, workload verification, data rights and concentration in demand. Avoid assuming that a large contributor network automatically creates a sustainable business.",
    anchorAliases: [],
  },
  {
    id: "digital-ownership-consumer-networks",
    icon: "people",
    title: "Digital Ownership & Consumer Networks",
    description: "Applications that make ownership, identity and participation meaningful to users.",
    overview:
      "We look for products whose appeal can be explained through a customer experience, not only through an asset price. The review starts with what users do, why they return and how ownership or participation improves that experience. Distribution, onboarding and support matter alongside the underlying technology. We consider the relationship between the product, its users and any incentives, with an emphasis on whether useful activity can continue when promotional rewards change.",
    businessTypes:
      "Consumer applications; games; identity products; creator tools; social experiences; digital collectibles and community platforms.",
    commercialQuestions:
      "We examine subscriptions, software fees, purchases and marketplace models in relation to acquisition costs, retention and incentive spending. User activity and speculative trading are assessed separately.",
    questionsWeAsk: [
      "What do users gain beyond the possibility of an asset increasing in value?",
      "Which behavior indicates repeat value rather than a short promotional visit?",
      "How does the product reach its audience and protect the quality of that experience?",
    ],
    keyDependencies:
      "Review includes platform access, user permissions, content rights, incentive dependence and changes in user behavior. Relevant safety and privacy responsibilities need to be understood for the actual audience.",
    anchorAliases: ["focused-financial-products"],
  },
];
