export type FeaturedProject = {
  id: number
  title: string
  description: string
  icon: "AlertTriangle" | "Shield" | "FileCode" | "Lock" | "Server" | "Users" | "Network" | "Database"
  items: string[]
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 1,
    title: "Threat Intelligence Briefings",
    description: "Weekly executive-ready summaries that pair attack surface telemetry with remediation priorities.",
    icon: "AlertTriangle",
    items: [
      "Automated snapshot of exposed assets",
      "Business impact translation",
      "Remediation owner matrix",
      "KRI trendlines included"
    ]
  },
  {
    id: 2,
    title: "Arcjet WAF Rollout",
    description: "Deploying Arcjet policies and runbooks that the engineering team can own after hand-off.",
    icon: "Shield",
    items: [
      "Abuse scenario modeling",
      "Policy staging + alerting",
      "Dashboards embedded in Notion",
      "Handoff workshop recording"
    ]
  },
  {
    id: 3,
    title: "Secure MCP Lab",
    description: "A curated MCP test bench that highlights three servers and explains when to apply each.",
    icon: "Server",
    items: [
      "Roll-dice server stress tests",
      "Digital twin persona walk-through",
      "OAuth 2.1 auth patterns",
      "Tool safety checklist"
    ]
  },
  {
    id: 4,
    title: "Developer Guardrails",
    description: "Living documentation plus component snippets that make safe defaults the easy option.",
    icon: "FileCode",
    items: [
      "Lintable security snippets",
      "Feature threat model template",
      "Incident simulation prompts",
      "Launch-readiness checklist"
    ]
  },
  {
    id: 5,
    title: "Stakeholder Workshops",
    description: "Facilitated sessions to align legal, product, and ops on practical security posture targets.",
    icon: "Users",
    items: [
      "Persona-based agendas",
      "Evidence-backed recommendations",
      "Next-step owners + due dates",
      "Workshop replay + notes"
    ]
  },
  {
    id: 6,
    title: "Visibility Pipeline",
    description: "Centralized logging narrative that keeps noise low while surfacing signals leadership cares about.",
    icon: "Database",
    items: [
      "Signal taxonomy + tuning",
      "Cost-control levers",
      "Incident-ready saved views",
      "24h storyboard summaries"
    ]
  }
]


