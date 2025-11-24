import { SecurityDashboardCard } from "@/components/security-dashboard-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, Activity, FileText, Lock, Network } from "lucide-react"

export const metadata = {
  title: "Security Expertise | Sumaiya Serazy",
  description: "My experience with security tools, technologies, and frameworks",
}

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Security Expertise</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                My experience with security tools, technologies, and frameworks in cybersecurity.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 space-y-12">
          {/* Security Knowledge Areas */}
          <Card className="bg-background border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Security Knowledge Areas</CardTitle>
              </div>
              <CardDescription>Areas of expertise and understanding in cybersecurity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      Threat Detection & Analysis
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Experience with SIEM tools for log collection, event correlation, and real-time threat analysis. Skilled in identifying potential intrusions and suspicious activities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Network className="h-5 w-5 text-red-500" />
                      Network Security
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Understanding of network security protocols, firewalls, VPNs, and network segmentation. Experience with IDS/IPS platforms to detect and block suspicious traffic.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Lock className="h-5 w-5 text-blue-500" />
                      Incident Response
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Knowledge of identification, triage, containment, eradication, recovery, and reporting processes. Experience supporting containment strategies to minimize business impact.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-500" />
                      Compliance & Governance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Understanding of ISO 27001, NIST, and GDPR frameworks and their relevance in SOC operations. Strong skills in preparing threat reports and documenting incidents.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Tools & Technologies */}
          <div className="grid gap-6 md:grid-cols-2">
            <SecurityDashboardCard
              title="SIEM Solutions"
              description="Security Information and Event Management"
              icon={<Shield className="h-8 w-8 text-primary" />}
              metrics={[
                {
                  name: "Experience Level",
                  status: "active",
                  value: "Practical",
                  description: "Log collection & event correlation"
                },
                {
                  name: "Key Skills",
                  status: "active",
                  value: "Real-time Analysis",
                  description: "Threat detection & monitoring"
                },
                {
                  name: "Application",
                  status: "active",
                  value: "SOC Operations",
                  description: "Supporting security operations"
                }
              ]}
            />

            <SecurityDashboardCard
              title="IDS/IPS Platforms"
              description="Intrusion Detection & Prevention Systems"
              icon={<Network className="h-8 w-8 text-primary" />}
              metrics={[
                {
                  name: "Familiarity",
                  status: "active",
                  value: "Familiar",
                  description: "Detection & blocking capabilities"
                },
                {
                  name: "Focus Area",
                  status: "active",
                  value: "Traffic Analysis",
                  description: "Suspicious traffic identification"
                },
                {
                  name: "Implementation",
                  status: "active",
                  value: "Network Security",
                  description: "Endpoint protection tools"
                }
              ]}
            />

            <SecurityDashboardCard
              title="Vulnerability Management"
              description="Identifying and managing security vulnerabilities"
              icon={<Activity className="h-8 w-8 text-primary" />}
              metrics={[
                {
                  name: "Process Knowledge",
                  status: "active",
                  value: "Complete",
                  description: "Identify, assess, prioritize"
                },
                {
                  name: "Remediation",
                  status: "active",
                  value: "Support Role",
                  description: "Remediation & patch cycles"
                },
                {
                  name: "Risk Assessment",
                  status: "active",
                  value: "Prioritization",
                  description: "Business impact analysis"
                }
              ]}
            />

            <SecurityDashboardCard
              title="Compliance Frameworks"
              description="Governance, risk, and compliance knowledge"
              icon={<FileText className="h-8 w-8 text-primary" />}
              metrics={[
                {
                  name: "ISO 27001",
                  status: "active",
                  value: "Understanding",
                  description: "Information security management"
                },
                {
                  name: "NIST Framework",
                  status: "active",
                  value: "Knowledge",
                  description: "Cybersecurity framework"
                },
                {
                  name: "GDPR",
                  status: "active",
                  value: "Awareness",
                  description: "Data protection regulation"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

