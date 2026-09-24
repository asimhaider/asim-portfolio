/**
 * Product case studies.
 *
 * Content rule: nothing here claims real-world results. Outcomes are framed as
 * "Potential KPI" or "Expected impact", and research items are labelled as
 * assumptions / hypotheses to validate.
 *
 * TODO(Asim): add live demo / GitHub URLs where available, and adjust any
 * feature or detail that doesn't match what you actually built.
 */

export type Priority = "Must" | "Should" | "Could";
export type Visual = "dashboard" | "funnel" | "exchange" | "workflow";

export interface Persona {
  name: string;
  description: string;
}

export interface Item {
  title: string;
  description: string;
}

export interface Requirement {
  id: string;
  requirement: string;
  priority: Priority;
}

export interface Kpi {
  stage: string;
  name: string;
  why: string;
}

export interface ExtraSection {
  id: string;
  title: string;
  intro?: string;
  items: Item[];
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
  tagline: string;
  summary: string;
  focus: string[];
  visual: Visual;
  links?: { demo?: string; github?: string };
  tech?: string[];

  problem: string;
  context: string;
  targetUsers: Persona[];
  painPoints: string[];
  assumptions: string[];
  solution: { summary: string; features: Item[] };
  requirements: Requirement[];
  prioritization: { method: string; rationale: string; now: string[]; next: string[]; later: string[] };
  journey: { title: string; description: string }[];
  metrics: { northStar: { name: string; why: string }; kpis: Kpi[] };
  technical: string[];
  impact: string[];
  learnings: string[];
  /** Case-specific sections (e.g. risk model, AARRR, business model). Rendered after the solution. */
  extras?: ExtraSection[];
}

export const caseStudies: CaseStudy[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "shadow-ai-governance-dashboard",
    number: "01",
    title: "AI Governance Dashboard — Shadow AI",
    category: "B2B SaaS · AI Governance · Security & Compliance",
    status: "Product concept + working prototype",
    tagline: "Giving organisations visibility and control over the AI tools employees already use.",
    summary:
      "Employees are adopting AI tools faster than IT and compliance teams can review them. I defined the problem, mapped the stakeholders, wrote the requirements and built a working prototype of a dashboard that makes unapproved AI usage visible and governable.",
    focus: ["Problem definition", "Personas", "Requirements", "Dashboard design", "Governance workflow", "KPIs"],
    visual: "dashboard",
    links: {
      // demo: "https://...",
      // github: "https://github.com/...",
    },

    problem:
      "Employees use AI assistants, browser extensions and AI features inside SaaS products without IT or security approval — often called “Shadow AI”. Organisations can't see which tools are in use, what data is being shared with them, or who is accountable. Blocking everything pushes usage further underground; allowing everything creates data-protection and compliance risk.",
    context:
      "Generative AI tools became widely available almost overnight, and many are free, browser-based and easy to sign up for. At the same time, regulation such as the GDPR and the EU AI Act raises the bar for how organisations handle data and AI systems. Governance teams need a way to move from “we don't know” to informed, documented decisions — without slowing everyone down.",
    targetUsers: [
      { name: "Security / CISO", description: "Needs an organisation-wide view of AI-related risk and where to act first." },
      { name: "IT Administrator", description: "Discovers tools, reviews requests and approves or restricts them day to day." },
      { name: "Compliance / Data Protection Officer", description: "Needs documented decisions and evidence for audits and regulators." },
      { name: "Department Manager", description: "Wants the team to stay productive with AI tools that are safe to use." },
      { name: "Employee", description: "Wants to know which tools are allowed and how to request a new one." },
    ],
    painPoints: [
      "No central inventory of which AI tools are being used, by whom, and how often.",
      "No consistent way to assess the risk of a new AI tool (data handling, vendor, hosting location).",
      "Approval decisions happen in emails and chats and are hard to audit later.",
      "Employees don't know the policy, so they either avoid useful tools or use them quietly.",
      "Leadership gets anecdotes instead of a clear picture of exposure.",
    ],
    assumptions: [
      "Hypothesis: most Shadow AI usage is well-intentioned productivity-seeking, not malicious — so the product should guide behaviour, not only block it.",
      "Hypothesis: visibility is the first bottleneck. Teams can't prioritise risk until they can see which tools exist.",
      "Assumption: a simple, explainable risk score is more useful to non-specialist admins than a complex model nobody trusts.",
      "Assumption: giving employees an official request path reduces unapproved usage over time.",
      "To validate: interviews with IT / security staff and a review of existing SaaS-management and CASB tools.",
    ],
    solution: {
      summary:
        "A governance dashboard that discovers AI tools in use, scores their risk, and routes each one through a lightweight review workflow — so every tool ends up with a clear, documented decision.",
      features: [
        { title: "AI tool discovery & inventory", description: "A central list of detected AI tools with usage by department, first-seen date and current status." },
        { title: "Risk scoring", description: "A transparent score based on factors such as data sensitivity, vendor data policy, hosting region and access scope." },
        { title: "Risk overview dashboard", description: "Headline view of unreviewed tools, high-risk tools and trends over time, for security and leadership." },
        { title: "Governance workflow", description: "Request → review → approve / restrict / block, with an owner and a rationale recorded for every decision." },
        { title: "Policy & approved-tools catalogue", description: "A place employees can check what's allowed and request something new." },
        { title: "Audit trail & reporting", description: "Exportable history of decisions to support compliance reviews." },
      ],
    },
    extras: [
      {
        id: "risks",
        title: "Shadow AI risk model",
        intro: "I broke the problem down into the risk categories the dashboard needs to make visible:",
        items: [
          { title: "Data leakage", description: "Confidential or personal data pasted into tools that may store or train on it." },
          { title: "Compliance exposure", description: "Processing that conflicts with GDPR obligations or internal AI policies." },
          { title: "Unvetted vendors", description: "Tools with unclear ownership, security practices or hosting location." },
          { title: "Quality & IP risk", description: "Unreviewed AI output entering customer-facing work or code." },
          { title: "Cost sprawl", description: "Duplicate paid subscriptions across teams for similar tools." },
        ],
      },
    ],
    requirements: [
      { id: "FR-01", requirement: "Admins can view an inventory of detected AI tools with status, department and usage level.", priority: "Must" },
      { id: "FR-02", requirement: "Each tool shows a risk score with the factors that produced it.", priority: "Must" },
      { id: "FR-03", requirement: "Admins can approve, restrict or block a tool and must record a reason.", priority: "Must" },
      { id: "FR-04", requirement: "Dashboard highlights unreviewed and high-risk tools first.", priority: "Must" },
      { id: "FR-05", requirement: "Employees can request a new AI tool through a simple form.", priority: "Should" },
      { id: "FR-06", requirement: "All decisions are stored in an exportable audit log.", priority: "Should" },
      { id: "FR-07", requirement: "Role-based access for admins, reviewers and read-only leadership.", priority: "Should" },
      { id: "FR-08", requirement: "Notifications when a new high-risk tool is detected.", priority: "Could" },
    ],
    prioritization: {
      method: "MoSCoW, guided by the question “what do governance teams need before they can act at all?”",
      rationale:
        "You can't govern what you can't see, so discovery, the inventory and the risk view came first. The decision workflow followed, because visibility without a way to act just creates anxiety. Employee-facing features and automation came later — valuable, but dependent on the first two being in place.",
      now: ["Tool inventory", "Risk score with explanation", "Risk overview dashboard", "Approve / restrict / block decisions"],
      next: ["Employee request form", "Audit log export", "Role-based access"],
      later: ["Real-time alerts", "Identity-provider & proxy integrations", "Policy templates (e.g. EU AI Act)"],
    },
    journey: [
      { title: "Open dashboard", description: "Security lead sees 12 unreviewed tools and 3 flagged as high risk (sample data)." },
      { title: "Inspect a tool", description: "Opens the tool detail: who uses it, which departments, and why it scored high." },
      { title: "Assign review", description: "Assigns the review to an IT admin with a due date." },
      { title: "Decide", description: "Admin approves with restrictions and records the reasoning." },
      { title: "Communicate", description: "Tool appears in the approved catalogue with usage guidance for employees." },
      { title: "Track", description: "Leadership follows the trend of unreviewed and high-risk tools over time." },
    ],
    metrics: {
      northStar: {
        name: "Share of AI tool usage on reviewed & approved tools",
        why: "Captures the actual goal: people keep using AI, but through tools the organisation has consciously approved.",
      },
      kpis: [
        { stage: "Visibility", name: "Number of unreviewed AI tools", why: "Should trend down as the governance process matures." },
        { stage: "Efficiency", name: "Median time from detection to decision", why: "Shows whether governance is keeping pace with adoption." },
        { stage: "Risk", name: "% of high-risk tools with a documented decision", why: "The most important subset to close first." },
        { stage: "Adoption", name: "Tool requests submitted via the official form", why: "Signals employees are using the sanctioned path." },
        { stage: "Engagement", name: "Weekly active admins / reviewers", why: "Indicates whether the dashboard is part of a real workflow." },
      ],
    },
    technical: [
      "Discovery data sources for a production version: SSO / identity-provider logs, network or proxy logs, browser extensions and expense data — each with different coverage and privacy trade-offs.",
      "Privacy by design: track which tools are used and by which team, not the content of prompts.",
      "Rule-based, explainable risk scoring first; the factors and weights should be visible and adjustable by admins.",
      "Role-based access control, since the dashboard itself contains sensitive organisational data.",
      "The prototype focuses on the dashboard and decision workflow using sample data; integrations are out of scope for this stage.",
    ],
    impact: [
      "Expected impact: governance teams move from unknown exposure to a documented inventory with clear owners.",
      "Expected impact: faster, more consistent decisions on new AI tools.",
      "Expected impact: employees get a clear path to safe tools instead of workarounds.",
    ],
    learnings: [
      "In B2B products the buyer, the daily user and the affected employee are often different people — requirements have to balance all three.",
      "Explaining a score matters as much as calculating it. Admins need to justify decisions to others.",
      "Scoping a prototype around one core workflow made it much easier to show the value of the concept.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "grocery-shopping-app",
    number: "02",
    title: "Grocery Shopping App",
    category: "B2C · E-commerce · Retention & Conversion",
    status: "Product case study",
    tagline: "Making the weekly grocery shop faster to plan, easier to complete and worth coming back to.",
    summary:
      "Grocery shopping is frequent, repetitive and time-sensitive — an ideal case for thinking about activation, conversion and retention. I approached my grocery app as a product problem: who shops, where they drop off, and which features give them a reason to return every week.",
    focus: ["User problem", "User journey", "Prioritisation", "AARRR", "Retention", "Conversion"],
    visual: "funnel",
    links: {},

    problem:
      "Buying groceries online should save time, but many shoppers find it slower than it should be: they rebuild the same basket every week, struggle to find items, lose track of the total, and abandon the cart when delivery details or costs are unclear at the end.",
    context:
      "Grocery is a high-frequency category. Unlike most e-commerce, the goal is not a single purchase but a habit — a customer who orders once a week is far more valuable than one who orders once. That makes retention and repeat-purchase friction the core product questions, not just the first conversion.",
    targetUsers: [
      { name: "Busy professional", description: "Short on time; wants to reorder the usual items in a few taps." },
      { name: "Family planner", description: "Plans a larger weekly shop and cares about the total and delivery slots." },
      { name: "Budget-conscious student", description: "Compares prices and watches the basket total closely." },
    ],
    painPoints: [
      "Rebuilding the same basket every week is tedious.",
      "Search and categories don't match how people think about their shopping list.",
      "The running total and delivery costs aren't clear until late in checkout.",
      "Limited or unclear delivery slots cause drop-off at the final step.",
      "Nothing in the experience gives a reason to come back next week.",
    ],
    assumptions: [
      "Hypothesis: the largest drop-off happens between cart and completed order, driven by surprise costs and slot availability.",
      "Hypothesis: “reorder last basket” is the single strongest retention lever for repeat shoppers.",
      "Assumption: most weekly baskets overlap heavily with the previous one.",
      "To validate: funnel analysis on event data, plus short interviews or surveys with regular online grocery shoppers.",
    ],
    solution: {
      summary:
        "A grocery app designed around the repeat shop: quick reorder, a list-first flow, a transparent basket and a short, predictable checkout.",
      features: [
        { title: "Smart shopping list", description: "Build a list first, then turn it into a basket — mirroring how people already plan." },
        { title: "Quick reorder", description: "Repeat a previous basket and adjust quantities, instead of starting from zero." },
        { title: "Search & categories", description: "Fast search and aisle-style categories so items are found in seconds." },
        { title: "Transparent basket", description: "Running total, delivery fee and minimum order visible at all times." },
        { title: "Delivery slot selection", description: "Show available slots early so there are no surprises at checkout." },
        { title: "Order tracking", description: "Clear status after purchase to build trust for the next order." },
      ],
    },
    extras: [
      {
        id: "aarrr",
        title: "AARRR framework",
        intro: "I mapped the product to the pirate-metrics funnel to decide where each feature should move the needle:",
        items: [
          { title: "Acquisition", description: "Install / sign-up conversion from landing page and store listing. Potential KPI: visit → sign-up rate." },
          { title: "Activation", description: "First order completed. Potential KPI: % of new users placing an order within 7 days; time to first order." },
          { title: "Retention", description: "Second and repeat orders. Potential KPI: 30-day repeat purchase rate; weekly ordering customers." },
          { title: "Revenue", description: "Basket value and order frequency. Potential KPI: average order value (AOV); orders per customer per month." },
          { title: "Referral", description: "Customers inviting friends or family. Potential KPI: referral invites sent and redeemed." },
        ],
      },
      {
        id: "improvements",
        title: "Product improvement opportunities",
        items: [
          { title: "Reorder reminders", description: "Nudge users around their usual ordering day, based on their own history." },
          { title: "Substitution preferences", description: "Let customers choose what happens when an item is out of stock." },
          { title: "Saved lists", description: "Multiple lists (weekly shop, party, household) to support different occasions." },
          { title: "Checkout experiments", description: "A/B test showing delivery fees earlier and measure the effect on cart completion." },
        ],
      },
    ],
    requirements: [
      { id: "FR-01", requirement: "Users can search and browse products by category.", priority: "Must" },
      { id: "FR-02", requirement: "Users can add items to a basket and see a running total including delivery fee.", priority: "Must" },
      { id: "FR-03", requirement: "Users can choose a delivery slot and complete checkout.", priority: "Must" },
      { id: "FR-04", requirement: "Users can view past orders and reorder them in one step.", priority: "Should" },
      { id: "FR-05", requirement: "Users can create and save shopping lists.", priority: "Should" },
      { id: "FR-06", requirement: "Users can track the status of an active order.", priority: "Should" },
      { id: "FR-07", requirement: "Users receive reminders based on their usual order day.", priority: "Could" },
    ],
    prioritization: {
      method: "MoSCoW combined with impact vs. effort, organised by funnel stage.",
      rationale:
        "A retention feature has no value if people can't complete their first order, so the core purchase path came first. Reorder and saved lists were next because they target the highest-value behaviour in grocery: the repeat weekly shop. Personalised reminders depend on order history, so they naturally come later.",
      now: ["Search & categories", "Basket with transparent total", "Delivery slot + checkout"],
      next: ["Quick reorder", "Saved shopping lists", "Order tracking"],
      later: ["Reorder reminders", "Substitution preferences", "Referral programme"],
    },
    journey: [
      { title: "Open app", description: "Returning user lands on “Your usual basket”." },
      { title: "Build basket", description: "Reorders last week's items, removes two, searches for one new item." },
      { title: "Review total", description: "Sees subtotal, delivery fee and minimum order status in the basket." },
      { title: "Pick a slot", description: "Chooses an available delivery slot shown earlier in the flow." },
      { title: "Pay", description: "Completes a short checkout with saved details." },
      { title: "Track & return", description: "Tracks delivery; gets a gentle reminder before next week's usual order day." },
    ],
    metrics: {
      northStar: {
        name: "Weekly ordering customers",
        why: "Grocery value comes from habit. This captures both conversion and retention in a single number.",
      },
      kpis: [
        { stage: "Activation", name: "First-order conversion within 7 days of sign-up", why: "Shows whether new users reach the first moment of value." },
        { stage: "Conversion", name: "Cart-to-order completion rate", why: "Isolates the checkout step where drop-off is expected to be highest." },
        { stage: "Retention", name: "D30 repeat purchase rate", why: "Tells us whether the product is becoming a habit." },
        { stage: "Engagement", name: "% of orders started via reorder or saved list", why: "Measures adoption of the features built for repeat shopping." },
        { stage: "Revenue", name: "Average order value (AOV)", why: "Guards against improvements that raise orders but shrink baskets." },
      ],
    },
    technical: [
      "Product and price data need a reliable single source of truth so the basket total is always correct.",
      "Delivery slots depend on real capacity, so slot availability must be fetched live, not cached for long.",
      "Event tracking (view item, add to cart, start checkout, order placed) must be defined up front to measure the funnel.",
      "Reorder must handle products that are out of stock or have changed price since the last order.",
    ],
    impact: [
      "Expected impact: less time to build a basket for returning customers.",
      "Expected impact: fewer abandoned carts once costs and delivery slots are visible earlier.",
      "Expected impact: higher repeat purchase rate driven by reorder and saved lists.",
    ],
    learnings: [
      "Framing features by funnel stage made prioritisation discussions much more concrete.",
      "The same feature can help one metric and hurt another — pairing metrics (orders + AOV) avoids optimising blindly.",
      "Defining analytics events early is a product task, not just an engineering one.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "mybooksexchange",
    number: "03",
    title: "MyBooksExchange",
    category: "Community Marketplace · Full-stack web app",
    status: "Built product",
    tagline: "A simple way for readers to discover, exchange and manage books.",
    summary:
      "Readers collect books they've finished while paying full price for the next one. MyBooksExchange lets people list books they own, discover what others offer and request an exchange. I designed and built it end to end — the product decisions came first, the stack followed.",
    focus: ["Target users", "User flows", "Product decisions", "Architecture", "KPIs", "Roadmap"],
    visual: "exchange",
    tech: ["React", "React Router", "Context API", "Node.js", "Express", "MongoDB", "JWT"],
    links: {},

    problem:
      "Readers have shelves of books they won't read again, and buying new books regularly is expensive. Existing options — second-hand marketplaces, local groups, asking friends — are either transactional, scattered or hard to search. There is no simple place focused on swapping books with other readers.",
    context:
      "Book exchange is a two-sided product: it only works if there are enough books listed and enough people looking for them. That makes listing friction and trust between users the two most important product questions from day one.",
    targetUsers: [
      { name: "Students", description: "Need specific books on a budget and often have finished ones to pass on." },
      { name: "Casual readers", description: "Want a steady supply of new reads without buying every book." },
      { name: "Book clubs & communities", description: "Circulate titles within a group of people with similar interests." },
    ],
    painPoints: [
      "Finished books take up space and have little resale value.",
      "Finding a specific second-hand title means searching several places.",
      "Arranging a swap with a stranger feels uncertain without a clear process.",
      "Keeping track of which books you've offered or requested is messy.",
    ],
    assumptions: [
      "Hypothesis: people are more willing to exchange than sell, because it feels like community rather than commerce.",
      "Hypothesis: if listing a book takes more than a minute, supply will stay too low for the product to work.",
      "Assumption: a clear request → accept / decline flow creates enough trust for a first version.",
    ],
    solution: {
      summary:
        "A web app where users sign up, list books they own, browse and search available books, and send exchange requests that the owner can accept or decline.",
      features: [
        { title: "Accounts & authentication", description: "Secure sign-up and log-in so each user has their own library and requests." },
        { title: "List a book", description: "A short form to add a book so supply can grow with minimal effort." },
        { title: "Browse & discover", description: "Browse and search available books from other users." },
        { title: "Exchange requests", description: "Request a book; the owner accepts or declines, and both see the status." },
        { title: "My library", description: "Manage your listed books and track incoming and outgoing requests." },
      ],
    },
    extras: [
      {
        id: "architecture",
        title: "Technical architecture",
        intro: "The stack supports the product, not the other way round:",
        items: [
          { title: "Frontend — React + React Router", description: "A single-page app with distinct routes for browsing, book details, my library and requests." },
          { title: "State — Context API", description: "Handles auth state and shared data. Chosen over Redux because the app's shared state is small." },
          { title: "API — Node.js + Express", description: "A REST API for users, books and exchange requests, keeping business rules on the server." },
          { title: "Data — MongoDB", description: "Flexible document model for book listings and request states." },
          { title: "Auth — JWT", description: "Token-based authentication protecting user-specific routes and actions." },
        ],
      },
      {
        id: "decisions",
        title: "Key product decisions",
        items: [
          { title: "Exchange, not sell", description: "Kept the product focused on swapping, which keeps the experience simple and avoids payments in v1." },
          { title: "Request / accept flow", description: "Owners stay in control of their books, which builds trust without needing a review system yet." },
          { title: "Low-friction listing", description: "Kept the listing form short to protect the supply side of the marketplace." },
          { title: "Right-sized tech choices", description: "Context API over Redux and a single REST API — enough for the scope, easy to extend." },
        ],
      },
    ],
    requirements: [
      { id: "FR-01", requirement: "Users can register, log in and log out securely.", priority: "Must" },
      { id: "FR-02", requirement: "Logged-in users can list, edit and remove their books.", priority: "Must" },
      { id: "FR-03", requirement: "Users can browse and search books listed by others.", priority: "Must" },
      { id: "FR-04", requirement: "Users can send an exchange request for a book.", priority: "Must" },
      { id: "FR-05", requirement: "Book owners can accept or decline requests; both sides see the status.", priority: "Must" },
      { id: "FR-06", requirement: "Users can filter books by genre or condition.", priority: "Should" },
      { id: "FR-07", requirement: "Users can message each other to arrange the exchange.", priority: "Could" },
    ],
    prioritization: {
      method: "MoSCoW focused on the minimum loop that makes a two-sided marketplace work.",
      rationale:
        "The core loop is list → discover → request → accept. Everything needed for that loop was a Must; anything that improves it but isn't required for one successful exchange moved to Should or Could.",
      now: ["Authentication", "List & manage books", "Browse & search", "Request / accept flow"],
      next: ["Filters (genre, condition)", "Wishlists", "Email notifications"],
      later: ["In-app messaging", "Ratings & trust signals", "Location-based matching"],
    },
    journey: [
      { title: "Sign up", description: "A reader creates an account." },
      { title: "List books", description: "Adds two books they've finished." },
      { title: "Discover", description: "Browses and finds a title they want." },
      { title: "Request", description: "Sends an exchange request to the owner." },
      { title: "Accept", description: "The owner accepts; both see the updated status." },
      { title: "Exchange", description: "They arrange the swap and the books change hands." },
    ],
    metrics: {
      northStar: {
        name: "Completed exchanges per month",
        why: "The only moment where both sides of the marketplace receive value.",
      },
      kpis: [
        { stage: "Activation", name: "% of new users who list at least one book", why: "Supply is the constraint for a two-sided product." },
        { stage: "Activation", name: "Time to first listing", why: "Tests the hypothesis that listing must be quick." },
        { stage: "Engagement", name: "Exchange requests per active user", why: "Shows real demand for listed books." },
        { stage: "Marketplace health", name: "Request acceptance rate", why: "Low rates signal trust or availability problems." },
        { stage: "Retention", name: "Users making a second exchange within 60 days", why: "Indicates the product is becoming a habit." },
      ],
    },
    technical: [
      "JWT-protected routes ensure only owners can edit their listings or respond to requests.",
      "Request status is a small state machine (pending → accepted / declined) enforced on the server.",
      "MongoDB's document model makes it easy to add fields like genre or condition later.",
      "Search will need indexing as the number of listings grows.",
    ],
    impact: [
      "Expected impact: readers can pass on finished books and get new ones without buying.",
      "Expected impact: one place to track what you've listed and requested.",
    ],
    learnings: [
      "Building the product end to end showed me how small requirement decisions ripple through the data model and API.",
      "Two-sided products need a clear plan for the supply side from the start.",
      "Choosing simpler tools (Context API over Redux) was a product decision about scope, not just a technical one.",
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "voxelis-3d",
    number: "04",
    title: "Voxelis 3D",
    category: "Product & Service Business · 3D Printing",
    status: "Business platform",
    tagline: "Turning a manual 3D-printing service into a clear product and quote workflow.",
    summary:
      "Voxelis 3D is a 3D-printing product and business platform. I looked at it from both sides: what customers need to go from an idea to a printed part, and what the business needs to quote, produce and deliver reliably.",
    focus: ["Customer journey", "Quote workflow", "Catalogue", "Business model", "Operations", "Opportunities"],
    visual: "workflow",
    // TODO(Asim): add the tech stack you used, if you want it shown.
    links: {},

    problem:
      "People and small businesses often need a custom part, prototype or personalised object, but don't own a 3D printer or know which material and settings to use. Getting a price usually means back-and-forth messages, and it is unclear how long it will take or what the result will be.",
    context:
      "3D printing sits between a product business and a service business. Some customers want ready-made items from a catalogue; others need something custom. Each has a different journey, different pricing logic and different operational demands — the platform has to support both without becoming confusing.",
    targetUsers: [
      { name: "Hobbyists & makers", description: "Have a design file but no printer, or need a material they can't print at home." },
      { name: "Small businesses & startups", description: "Need prototypes, replacement parts or small production runs." },
      { name: "Gift & personalisation buyers", description: "Want a ready-made or lightly customised item from a catalogue." },
    ],
    painPoints: [
      "Unclear pricing — customers don't know what a print will cost until someone replies.",
      "Uncertainty about materials, size limits and whether a file is printable.",
      "No visibility into order status or lead time once a request is sent.",
      "Choosing between catalogue items and custom work isn't obvious.",
    ],
    assumptions: [
      "Hypothesis: a structured quote request (file, material, quantity, deadline) reduces back-and-forth and speeds up quoting.",
      "Hypothesis: a catalogue of ready-made products brings in customers who later return for custom work.",
      "Assumption: customers value transparent lead times as much as price.",
    ],
    solution: {
      summary:
        "A platform with two clear paths — buy from the catalogue or request a custom print — both ending in a transparent order status.",
      features: [
        { title: "Product catalogue", description: "Ready-made printed products with clear photos, materials and prices." },
        { title: "Custom print request", description: "Upload a file or describe an idea, pick material and quantity, add a deadline." },
        { title: "Quote workflow", description: "Structured requests are reviewed, priced and sent back for approval." },
        { title: "Order status", description: "Customers see where their order is: quoted, approved, printing, shipped." },
      ],
    },
    extras: [
      {
        id: "quote-workflow",
        title: "Custom 3D-printing workflow",
        items: [
          { title: "1 · Request", description: "Customer uploads a file or describes the part, chooses material, quantity and deadline." },
          { title: "2 · Review", description: "The business checks printability, size and material fit." },
          { title: "3 · Quote", description: "Price and lead time are calculated and sent to the customer." },
          { title: "4 · Approve", description: "Customer accepts the quote and pays." },
          { title: "5 · Produce", description: "The job is queued, printed and quality-checked." },
          { title: "6 · Deliver", description: "The part is shipped or collected; the order is closed." },
        ],
      },
      {
        id: "business-model",
        title: "Business model considerations",
        items: [
          { title: "Pricing inputs", description: "Material used, print time, complexity, post-processing and quantity." },
          { title: "Catalogue vs. custom", description: "Catalogue products are repeatable and easy to price; custom work is higher-value but needs more effort per order." },
          { title: "Minimum order & setup costs", description: "Small custom jobs need a minimum price to cover review and setup time." },
          { title: "B2C vs. B2B", description: "Businesses may order more often and in higher volumes, but expect invoices and reliable lead times." },
        ],
      },
      {
        id: "operations",
        title: "Operational considerations",
        items: [
          { title: "Printer capacity", description: "Lead times depend on the print queue; promises must reflect real capacity." },
          { title: "Failed prints", description: "Failures cost material and time, which needs to be reflected in pricing and scheduling." },
          { title: "Material inventory", description: "Offering a material means keeping it in stock." },
          { title: "File validation", description: "Many files need fixes before printing — a hidden cost worth making visible." },
        ],
      },
      {
        id: "opportunities",
        title: "Future product opportunities",
        items: [
          { title: "Instant price estimate", description: "Automated estimates based on file volume and material, with manual review for edge cases." },
          { title: "Business accounts", description: "Saved files, reorders and invoicing for repeat B2B customers." },
          { title: "Design service", description: "Offer modelling help for customers who have an idea but no file." },
        ],
      },
    ],
    requirements: [
      { id: "FR-01", requirement: "Customers can browse catalogue products with material and price information.", priority: "Must" },
      { id: "FR-02", requirement: "Customers can submit a custom print request with file, material, quantity and deadline.", priority: "Must" },
      { id: "FR-03", requirement: "The business can review a request and send a quote with price and lead time.", priority: "Must" },
      { id: "FR-04", requirement: "Customers can see the status of their request or order.", priority: "Should" },
      { id: "FR-05", requirement: "Customers can reorder a previous custom print.", priority: "Could" },
      { id: "FR-06", requirement: "An automatic price estimate is shown before the request is submitted.", priority: "Could" },
    ],
    prioritization: {
      method: "MoSCoW weighed against operational effort for a small business.",
      rationale:
        "The structured quote request came first because it removes the most manual back-and-forth. The catalogue gives customers an easy entry point. Automated pricing is attractive but risky to get wrong, so it waits until there's enough real order data to calibrate it.",
      now: ["Catalogue", "Custom request form", "Manual quote workflow"],
      next: ["Order status tracking", "Customer accounts & order history"],
      later: ["Instant price estimates", "Business accounts", "Design service"],
    },
    journey: [
      { title: "Arrive", description: "Customer lands on the site with a part they need printed." },
      { title: "Choose path", description: "Picks “Custom print” rather than a catalogue item." },
      { title: "Request", description: "Uploads a file, picks a material and a deadline." },
      { title: "Receive quote", description: "Gets a price and lead time." },
      { title: "Approve", description: "Accepts and pays; the job enters the queue." },
      { title: "Receive", description: "Follows the status until the part is delivered." },
    ],
    metrics: {
      northStar: {
        name: "Completed paid orders per month (catalogue + custom)",
        why: "Combines both revenue paths into one measure of the business working.",
      },
      kpis: [
        { stage: "Conversion", name: "Quote request → accepted quote rate", why: "Shows whether pricing and lead times meet customer expectations." },
        { stage: "Efficiency", name: "Median time to send a quote", why: "Speed of response is part of the product." },
        { stage: "Conversion", name: "Catalogue visit → purchase rate", why: "Measures the self-serve path." },
        { stage: "Revenue", name: "Average order value", why: "Separates many small orders from fewer larger ones." },
        { stage: "Operations", name: "Print failure / reprint rate", why: "Hidden cost that directly affects margin and lead times." },
      ],
    },
    technical: [
      "File uploads need size and format validation (e.g. STL) before a request can be submitted.",
      "Order status is a state machine shared by the customer view and internal operations.",
      "Pricing logic should live in one place so catalogue and custom quotes stay consistent.",
    ],
    impact: [
      "Expected impact: fewer messages needed to turn a request into a quote.",
      "Expected impact: clearer expectations on price and lead time, leading to more accepted quotes.",
      "Expected impact: a catalogue that brings in customers who later return for custom work.",
    ],
    learnings: [
      "In a product-plus-service business, operations are part of the user experience.",
      "Automating something (like pricing) too early can create more problems than it solves.",
      "Looking at the same platform through customer and business lenses produced very different priorities.",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
