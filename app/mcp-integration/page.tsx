import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Zap, Network, Play, Settings, BookOpen } from "lucide-react"

export const metadata = {
  title: "Learning & Experiments | Sumaiya Serazy",
  description: "Personal projects, learning experiments, and technical explorations",
}

export default function MCPIntegrationPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Learning & Experiments</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                Personal projects, technical experiments, and continuous learning in cybersecurity and technology.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Continuous Learning Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As a cybersecurity professional, I believe in continuous learning and experimentation. 
                This section showcases my personal projects, technical explorations, and learning experiences 
                that contribute to my professional growth.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background border-primary/20">
                <CardHeader>
                  <Code className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Portfolio Development</CardTitle>
                  <CardDescription>
                    Building this portfolio website using Next.js, React, and modern web technologies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learning full-stack development while creating a professional portfolio to showcase my cybersecurity expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20">
                <CardHeader>
                  <Play className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Security Tools Practice</CardTitle>
                  <CardDescription>
                    Hands-on practice with SIEM, IDS/IPS, and endpoint protection tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Gaining practical experience with security monitoring tools through lab environments and training platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20">
                <CardHeader>
                  <Network className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Network Security Labs</CardTitle>
                  <CardDescription>
                    Experimenting with firewall configurations, VPN setup, and network segmentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Building practical skills in network security through virtual lab environments and simulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Incident Response Training</CardTitle>
                  <CardDescription>
                    Practicing incident response procedures and containment strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developing skills in threat identification, triage, and response through simulated scenarios.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20">
                <CardHeader>
                  <Settings className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Vulnerability Assessment</CardTitle>
                  <CardDescription>
                    Learning vulnerability scanning, assessment, and remediation processes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Gaining experience in identifying, prioritizing, and addressing security vulnerabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Certification Studies</CardTitle>
                  <CardDescription>
                    Pursuing cybersecurity certifications and continuous professional development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Actively studying for industry certifications while completing Master of IT in Cyber Security.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-purple-50/30 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Learning Philosophy</h3>
              <p className="text-muted-foreground">
                I believe that hands-on practice and continuous learning are essential in cybersecurity. 
                Through personal projects, lab environments, and real-world experience, I continuously develop 
                my skills in threat detection, incident response, and security management. This portfolio itself 
                is a testament to my commitment to learning new technologies and applying them in practical contexts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

