import { Shield, AlertTriangle, FileCode, Lock, Server, Users, Network, Database, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { FEATURED_PROJECTS } from "@/data/featured-projects"

// Map icon strings to Lucide components
const iconMap = {
  AlertTriangle: AlertTriangle,
  Shield: Shield,
  FileCode: FileCode,
  Lock: Lock,
  Server: Server,
  Users: Users,
  Network: Network,
  Database: Database
}

const weekProjects = [
  {
    week: 1,
    title: "Portfolio Foundation",
    description: "Established the foundational structure for the digital portfolio, including Next.js setup, routing, and basic component architecture. Implemented dark mode theming and responsive design patterns.",
    icon: "Shield" as const
  },
  {
    week: 2,
    title: "Access Strategy",
    description: "Prototyped authentication and role concepts, then deliberately scoped them out so the public portfolio stays frictionless.",
    icon: "Lock" as const
  },
  {
    week: 3,
    title: "Content Modeling",
    description: "Replaced database dependencies with curated TypeScript data sources for blog posts, featured projects, and MCP highlights.",
    icon: "Database" as const
  },
  {
    week: 4,
    title: "Blog System",
    description: "Developed a complete blog system with dynamic routing, markdown support, and admin interface for creating and managing blog posts. Added SEO optimization and metadata handling.",
    icon: "FileCode" as const
  },
  {
    week: 5,
    title: "Project Management",
    description: "Built reusable cards and data structures that keep the project narrative editable without needing an admin dashboard.",
    icon: "Server" as const
  },
  {
    week: 6,
    title: "MCP Integration",
    description: "Integrated Model Context Protocol (MCP) for connecting to external tools and servers. Implemented MCP client for roll-dice, person-app, and digital-twin server interactions.",
    icon: "Network" as const
  },
  {
    week: 7,
    title: "Security Dashboard",
    description: "Built a comprehensive security dashboard with threat modeling, WAF monitoring, rate limiting, and security logging. Implemented real-time security metrics and alerting.",
    icon: "AlertTriangle" as const
  },
  {
    week: 8,
    title: "Professional Branding",
    description: "Established professional branding guidelines including color palette, typography system, and design consistency rules. Created documentation for maintaining brand standards.",
    icon: "Shield" as const
  }
]

const repositories = [
  {
    name: "my-digital-portfolio",
    description: "Digital portfolio website showcasing cybersecurity projects and features",
    url: "https://github.com/sumaiyaserazy/my-digital-portfolio",
  },
  {
    name: "rolldice-mcpserver",
    description: "MCP server with beautiful web interface for dice rolling functionality. Built with Next.js and MCP Handler",
    url: "https://github.com/sumaiyaserazy/rolldice-mcpserver",
  },
  {
    name: "mcp-auth-demo",
    description: "Production-ready MCP server with OAuth 2.1 authentication using Next.js 15 and Google OAuth",
    url: "https://github.com/sumaiyaserazy/mcp-auth-demo",
  },
  {
    name: "Builder-s-Toolkit",
    description: "Builder's Toolkit - Development tools and utilities",
    url: "https://github.com/sumaiyaserazy/Builder-s-Toolkit",
  },
]

export const metadata = {
  title: "Projects | Sumaiya Serazy",
  description: "Week 1-8 project summaries, cybersecurity projects, and GitHub repositories",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Projects</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                Comprehensive cybersecurity solutions and development journey from Week 1-8.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      </section>

      {/* Week 1-8 Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Development Journey</h2>
            <p className="text-muted-foreground">
              A comprehensive overview of the portfolio development from Week 1 through Week 8.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {weekProjects.map((project) => (
              <ProjectCard
                key={project.week}
                title={project.title}
                description={project.description}
                week={project.week}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A rotating mix of security programs and MCP experiments I&apos;m currently building with clients.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => {
              const IconComponent = iconMap[project.icon]

              return (
                <Card key={project.id} className="bg-background border-primary/20">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {project.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* GitHub Repositories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">GitHub Repositories</h2>
            <p className="text-muted-foreground">
              Explore my open-source projects and contributions on GitHub.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo, index) => (
              <Card key={index} className="bg-background border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="h-6 w-6 text-primary" />
                    <CardTitle>{repo.name}</CardTitle>
                  </div>
                  <CardDescription>{repo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
