import Link from "next/link"
import { Shield, AlertTriangle, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sumaiya Serazy | Cyber Security Specialist",
  description: "Proactive and analytical Cyber Security Specialist with strong capabilities in threat detection, incident response, and vulnerability management.",
  keywords: ["cybersecurity", "SIEM", "threat detection", "incident response", "vulnerability management", "SOC operations"],
  openGraph: {
    title: "Sumaiya Serazy | Cyber Security Specialist",
    description: "Proactive and analytical Cyber Security Specialist with strong capabilities in threat detection, incident response, and vulnerability management.",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl text-white animate-slide-up">
                Sumaiya Serazy
              </h1>
              <p className="text-xl md:text-2xl text-white/95 font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Cyber Security Specialist
              </p>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Proactive and analytical professional specializing in threat detection, incident response, and vulnerability management. Skilled in SIEM solutions, IDS/IPS platforms, and endpoint protection tools.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:scale-105 backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white/50">
                  Contact Me
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:scale-105 backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white/50">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      </section>

      {/* Key Skills Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Expertise</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Core areas of cybersecurity specialization
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl items-center gap-6 lg:grid-cols-3 lg:gap-8">
            <Card className="bg-background border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Security Monitoring & SIEM</CardTitle>
                <CardDescription>
                  Log collection, event correlation, and real-time threat analysis
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Incident Response</CardTitle>
                <CardDescription>
                  Threat identification, triage, containment, and recovery processes
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                  <FileCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Vulnerability Management</CardTitle>
                <CardDescription>
                  Assessment, prioritization, and remediation of security vulnerabilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-16 md:py-24 bg-purple-50/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore My Work</h2>
          </div>
          <div className="mx-auto grid max-w-3xl items-center gap-6 lg:grid-cols-3 lg:gap-8">
            <Link href="/projects" className="group">
              <Card className="bg-background border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full group-hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                    <FileCode className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">Projects</CardTitle>
                  <CardDescription>View my cybersecurity projects and work</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/about" className="group">
              <Card className="bg-background border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full group-hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">About</CardTitle>
                  <CardDescription>Learn more about my background</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/security" className="group">
              <Card className="bg-background border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full group-hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">Security</CardTitle>
                  <CardDescription>Explore my security expertise</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
