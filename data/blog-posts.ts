export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  readTime?: string
  createdAt: string
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "modern-security-operations",
    title: "Building a Modern Security Operations Practice",
    excerpt: "How I design lightweight SOC processes for security-conscious startups without slowing down shipping cadence.",
    coverImage: "/modern-soc-overview.png",
    author: "Mostafa Elshafie",
    readTime: "7 min read",
    createdAt: "2024-10-01T00:00:00.000Z",
    content: `
      <p>A modern security operations practice should feel collaborative—not bureaucratic. I start by mapping the products and internal tooling that actually power the business, then plot realistic threat models tied to those assets.</p>
      <p>From there, we can layer pragmatic controls: lightweight runbooks, notification hygiene, and simple dashboards that highlight drift. Every chart or alert must tell a story a product manager can understand.</p>
      <p>This article breaks down the playbooks I deploy for smaller teams, including SOC cadences, log enrichment, and Arcjet-based protection tiers.</p>
    `
  },
  {
    id: 2,
    slug: "mcp-workflows",
    title: "Shipping Secure MCP Workflows",
    excerpt: "A field guide to testing MCP servers locally, designing safe tools, and documenting flows for stakeholders.",
    coverImage: "/network-security-dashboard.png",
    author: "Mostafa Elshafie",
    readTime: "5 min read",
    createdAt: "2024-09-18T00:00:00.000Z",
    content: `
      <p>The Model Context Protocol unlocks powerful automations, but each tool is effectively remote code execution. My approach is to treat MCP integrations like production APIs: every call is scoped, logged, and reviewed.</p>
      <p>In this breakdown I walk through the workflows I demo in the portfolio—how requests are staged, what artefacts we save, and how I explain the value to non-technical audiences.</p>
    `
  },
  {
    id: 3,
    slug: "incident-simulations",
    title: "Incident Simulations Clients Remember",
    excerpt: "Turning tabletop exercises into living documentation that keeps exec teams aligned on response strategy.",
    coverImage: "/digital-security-breach.png",
    author: "Mostafa Elshafie",
    readTime: "6 min read",
    createdAt: "2024-08-12T00:00:00.000Z",
    content: `
      <p>Good incident simulations are memorable. I design scenarios around customer journeys, inject metrics pulled from real telemetry, and end each session with a backlog that product and ops partners actually own.</p>
      <p>The article covers my template for running 90-minute exercises, including the prompts I use to keep executives engaged and the follow-up materials that turn the session into a roadmap.</p>
    `
  },
  {
    id: 4,
    slug: "security-design-language",
    title: "Designing a Security-Focused Brand System",
    excerpt: "How the CyberShield identity keeps technical depth while feeling approachable for stakeholders.",
    coverImage: "/digital-fortress.png",
    author: "Mostafa Elshafie",
    readTime: "4 min read",
    createdAt: "2024-07-25T00:00:00.000Z",
    content: `
      <p>I wanted the CyberShield brand to communicate calm confidence: gradients inspired by SOC dashboards, typographic rhythm geared for case studies, and iconography that nods to Lucide's clarity.</p>
      <p>This post dives into the component library decisions, accessibility checks, and how I translate the system into presentation decks and executive briefs.</p>
    `
  }
]


