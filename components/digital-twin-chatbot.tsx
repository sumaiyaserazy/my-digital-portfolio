"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Network, Send, Loader2, Bot, User } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function DigitalTwinChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm Sumaiya Serazy, a Cyber Security Specialist. I'm here to help you learn about my expertise, experience, projects, and how to get in touch. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const generateResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    // Greeting - varied responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("good morning") || lowerMessage.includes("good afternoon") || lowerMessage.includes("good evening")) {
      const greetings = [
        "Hello! I'm Sumaiya Serazy, a Cyber Security Specialist based in Hobart, Tasmania. I'm passionate about threat detection, incident response, and helping organizations strengthen their security posture. How can I help you today?",
        "Hi there! Great to meet you. I'm Sumaiya, and I specialize in cybersecurity. I'd love to share more about my work and experience. What would you like to know?",
        "Hey! Thanks for reaching out. I'm Sumaiya Serazy, and I'm here to help you learn about cybersecurity, my projects, or how we can connect. What interests you?",
        "Hello! I'm Sumaiya, a Cyber Security Specialist. I'm always excited to discuss cybersecurity, share my experience, or help with any questions you might have. What can I help with?"
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }

    // How are you / how's it going
    if (lowerMessage.includes("how are you") || lowerMessage.includes("how's it going") || lowerMessage.includes("how do you do") || lowerMessage.includes("what's up")) {
      return "I'm doing great, thank you for asking! I'm always excited to discuss cybersecurity and connect with people interested in the field. How can I help you today? Are you interested in learning about my work, or do you have questions about cybersecurity?"
    }

    // Nice to meet you
    if (lowerMessage.includes("nice to meet") || lowerMessage.includes("pleasure") || lowerMessage.includes("glad to meet")) {
      return "Nice to meet you too! I'm excited to chat. Feel free to ask me anything about my cybersecurity expertise, projects, experience, or how we can connect. What would you like to know?"
    }

    // About me / who am I
    if (lowerMessage.includes("about") || lowerMessage.includes("who are you") || lowerMessage.includes("tell me about yourself")) {
      return "I'm Sumaiya Serazy, a proactive and analytical Cyber Security Specialist. I specialize in threat detection, incident response, and vulnerability management. I'm skilled in leveraging SIEM solutions, IDS/IPS platforms, and endpoint protection tools to monitor, analyze, and mitigate security risks.\n\nI have a strong understanding of network security protocols, firewalls, and access control mechanisms, with the ability to secure both on-premises and cloud environments. My approach is characterized by attention to detail, critical thinking, and a strong drive for continuous professional growth.\n\nI'm committed to supporting SOC operations by ensuring real-time threat visibility, maintaining compliance with industry standards such as ISO 27001, NIST, and GDPR, and strengthening overall organizational security posture."
    }

    // Education
    if (lowerMessage.includes("education") || lowerMessage.includes("degree") || lowerMessage.includes("qualification") || lowerMessage.includes("study") || lowerMessage.includes("university") || lowerMessage.includes("college")) {
      return "I hold a Master of Information Technology – Cyber Security from Asia Pacific International College (APIC) in Brisbane, which I'm completing from 2023 to 2025. This advanced degree focuses on cybersecurity principles, threat detection, and security management.\n\nPrior to that, I earned a Bachelor of Business Administration – Marketing from the University of Liberal Arts Bangladesh (ULAB) from 2018 to 2022. This foundation in business administration provides me with a strong understanding of organizational dynamics and stakeholder communication, which is invaluable in cybersecurity work."
    }

    // Experience / work history
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job") || lowerMessage.includes("career") || lowerMessage.includes("employment")) {
      return "I'm currently working as an Intern at Ausbiz Consulting (Employability Advantage) since August 2025, where I'm gaining hands-on experience in cybersecurity consulting.\n\nI also work as Night Audit / Front Office at Sage Hotels since January 2024, where I conduct nightly financial audits ensuring accuracy and security of records, manage sensitive information while maintaining compliance with hotel security policies, and provide troubleshooting support for property management systems.\n\nPreviously, I worked as a Fundraising / Sales Promoter at World Vision Australia (Jan 2023 – Jan 2025), where I used data-driven insights to analyze donor engagement and maintained confidential donor information aligned with privacy standards.\n\nI've also held positions as a Sales Consultant at Living Unlimited Pty (Feb 2023 – Apr 2023) and as a Business / Research Executive at Dnet in Bangladesh (Jan 2021 – Jan 2022), where I conducted socio-economic data collection and analysis, and collaborated on ICT-related projects."
    }

    // Skills / expertise
    if (lowerMessage.includes("skill") || lowerMessage.includes("expertise") || lowerMessage.includes("capability") || lowerMessage.includes("what can you do") || lowerMessage.includes("specialization")) {
      return "My core cybersecurity expertise includes:\n\n🔒 Security Monitoring & SIEM:\n• SIEM tools for log collection\n• Event correlation\n• Real-time threat analysis\n• SOC operations support\n\n🛡️ Incident Response & Detection:\n• Threat identification & triage\n• Containment strategies\n• IDS/IPS platforms\n• Log analysis & intrusion detection\n\n🔐 Vulnerability Management:\n• Vulnerability identification & assessment\n• Risk prioritization\n• Remediation support\n• Patch cycle management\n\n🌐 Network & Endpoint Security:\n• Firewall configuration & monitoring\n• Endpoint protection tools\n• VPN & network segmentation\n• Access control mechanisms\n\n☁️ Cloud & Infrastructure Security:\n• Cloud security principles\n• Hybrid environment security\n• On-premises security\n\n📋 Governance & Compliance:\n• ISO 27001\n• NIST Framework\n• GDPR Compliance\n• Threat reports & documentation"
    }

    // Projects
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work on")) {
      return "I've worked on several cybersecurity projects and engagements:\n\n🚨 Threat Intelligence Briefings:\nWeekly executive-ready summaries that pair attack surface telemetry with remediation priorities, including automated snapshots of exposed assets and business impact translation.\n\n🛡️ Arcjet WAF Rollout:\nDeploying Arcjet policies and runbooks that engineering teams can own after hand-off, including abuse scenario modeling and policy staging.\n\n🖥️ Secure MCP Lab:\nA curated MCP test bench highlighting three servers, including roll-dice server stress tests, digital twin persona walk-throughs, and OAuth 2.1 auth patterns.\n\n💻 Developer Guardrails:\nLiving documentation plus component snippets that make safe defaults the easy option, including lintable security snippets and feature threat model templates.\n\n👥 Stakeholder Workshops:\nFacilitated sessions to align legal, product, and ops on practical security posture targets with persona-based agendas and evidence-backed recommendations.\n\n📊 Visibility Pipeline:\nCentralized logging narrative that keeps noise low while surfacing signals leadership cares about, with signal taxonomy and cost-control levers."
    }

    // Contact information
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("reach") || lowerMessage.includes("location") || lowerMessage.includes("address")) {
      return "You can reach me through:\n\n📧 Email: sumaiya.serazy10@gmail.com\n📱 Phone: 0452667053\n📍 Location: Hobart, TAS 7000, Australia\n\n🔗 LinkedIn: linkedin.com/in/sumaiya-serazy-921947222\n\nFeel free to reach out if you'd like to discuss cybersecurity opportunities, collaborations, or have any questions. I'm always open to connecting with fellow professionals in the field!"
    }

    // LinkedIn
    if (lowerMessage.includes("linkedin") || lowerMessage.includes("social") || lowerMessage.includes("connect")) {
      return "You can connect with me on LinkedIn at:\n\n🔗 linkedin.com/in/sumaiya-serazy-921947222\n\nI'd love to connect professionally and stay updated on cybersecurity trends together. Let's build our network and share insights!"
    }

    // Languages
    if (lowerMessage.includes("language") || lowerMessage.includes("speak") || lowerMessage.includes("bengali") || lowerMessage.includes("english")) {
      return "I'm multilingual:\n\n• English: Full Professional Proficiency\n• Bengali: Native\n\nBeing bilingual helps me communicate effectively with diverse teams and stakeholders in global cybersecurity environments."
    }

    // Compliance / standards
    if (lowerMessage.includes("compliance") || lowerMessage.includes("iso") || lowerMessage.includes("nist") || lowerMessage.includes("gdpr") || lowerMessage.includes("standard")) {
      return "I have experience working with various compliance frameworks and standards:\n\n📋 ISO 27001: Information Security Management\n📋 NIST Framework: Cybersecurity Framework\n📋 GDPR: General Data Protection Regulation\n\nI'm committed to ensuring organizations maintain compliance with these industry standards while strengthening their overall security posture. I excel at conducting log analysis, identifying potential intrusions, and supporting containment strategies to minimize business impact while maintaining regulatory compliance."
    }

    // SIEM / monitoring
    if (lowerMessage.includes("siem") || lowerMessage.includes("monitoring") || lowerMessage.includes("log") || lowerMessage.includes("soc")) {
      return "Security Monitoring & SIEM is one of my core specializations. I'm skilled in:\n\n• SIEM tools for log collection and aggregation\n• Event correlation and pattern analysis\n• Real-time threat analysis and alerting\n• SOC operations support and coordination\n• Log analysis to identify potential intrusions\n• Maintaining real-time threat visibility\n\nI help organizations build effective security monitoring capabilities that provide actionable insights while keeping alert fatigue low."
    }

    // Incident response
    if (lowerMessage.includes("incident") || lowerMessage.includes("response") || lowerMessage.includes("threat") || lowerMessage.includes("detection")) {
      return "Incident Response is a key area of my expertise. I specialize in:\n\n🚨 Threat Identification & Triage:\nQuickly identifying and categorizing security threats to prioritize response efforts.\n\n🛡️ Containment Strategies:\nDeveloping and executing containment plans to minimize business impact.\n\n📊 IDS/IPS Platforms:\nLeveraging intrusion detection and prevention systems to monitor and protect networks.\n\n🔍 Log Analysis & Intrusion Detection:\nAnalyzing logs to identify potential intrusions and security events.\n\n⚡ Recovery Processes:\nSupporting recovery efforts to restore normal operations after security incidents.\n\nI excel at conducting thorough log analysis, identifying potential intrusions, and supporting containment strategies that minimize business impact."
    }

    // Vulnerability management
    if (lowerMessage.includes("vulnerability") || lowerMessage.includes("vuln") || lowerMessage.includes("patch") || lowerMessage.includes("remediation")) {
      return "Vulnerability Management is a critical part of my work. I focus on:\n\n🔍 Vulnerability Identification & Assessment:\nSystematically identifying security vulnerabilities across systems and applications.\n\n📊 Risk Prioritization:\nAssessing and prioritizing vulnerabilities based on risk, business impact, and exploitability.\n\n🔧 Remediation Support:\nWorking with teams to develop and implement remediation plans.\n\n🔄 Patch Cycle Management:\nManaging patch cycles to ensure timely application of security updates.\n\nI help organizations build effective vulnerability management programs that balance security needs with operational requirements."
    }

    // Digital twin status / system metrics
    if (lowerMessage.includes("status") || lowerMessage.includes("system") || lowerMessage.includes("metrics") || lowerMessage.includes("health")) {
      try {
        const response = await fetch("/api/mcp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tool: "digital-twin",
            input: "contact-twin",
          }),
        })

        const data = await response.json()
        if (response.ok && data.result) {
          const metrics = data.result.metrics
          return `Current digital twin system status: **${data.result.status.toUpperCase()}**\n\n📊 Real-time Metrics:\n• CPU Usage: ${metrics.cpu.toFixed(1)}%\n• Memory Usage: ${metrics.memory.toFixed(1)}%\n• Network Activity: ${metrics.network.toFixed(1)}%\n\nAll systems are operational and monitoring is active! This digital twin helps me stay connected and provide real-time information about my cybersecurity work.`
        }
      } catch (error) {
        console.error("Error fetching digital twin data:", error)
      }
    }

    // Achievements / accomplishments
    if (lowerMessage.includes("achievement") || lowerMessage.includes("accomplishment") || lowerMessage.includes("success") || lowerMessage.includes("certification")) {
      return "Some of my key achievements and ongoing work:\n\n🎓 Currently completing Master of IT – Cyber Security at APIC\n📚 Strong foundation in business administration from ULAB\n💼 Gaining practical experience through internships and professional roles\n🔒 Building expertise in SIEM, incident response, and vulnerability management\n🌐 Working with compliance frameworks: ISO 27001, NIST, GDPR\n🌍 Multilingual capabilities (English & Bengali) for global collaboration\n\nI'm continuously learning and growing in the cybersecurity field, committed to supporting organizations in strengthening their security posture."
    }

    // Help
    if (lowerMessage.includes("help") || lowerMessage.includes("what can you") || lowerMessage.includes("options") || lowerMessage.includes("what can i ask")) {
      return "I can help you learn about:\n\n• My background and experience\n• Education and qualifications\n• Cybersecurity skills and expertise\n• Projects and work engagements\n• Contact information\n• Compliance and standards knowledge\n• SIEM and security monitoring\n• Incident response capabilities\n• Vulnerability management\n• Languages I speak\n• Digital twin system status\n• Career goals and interests\n• Why I chose cybersecurity\n• My location in Hobart\n\nWhat would you like to know more about?"
    }

    // Why cybersecurity / motivation
    if (lowerMessage.includes("why") && (lowerMessage.includes("cybersecurity") || lowerMessage.includes("security") || lowerMessage.includes("choose") || lowerMessage.includes("interested"))) {
      return "I chose cybersecurity because I'm passionate about protecting organizations and individuals from digital threats. The field combines my analytical mindset with the opportunity to make a real impact. I love the challenge of staying ahead of evolving threats and helping organizations build robust security postures.\n\nWhat draws me most is the constant learning - cybersecurity is always evolving, and I enjoy the challenge of keeping up with new threats, technologies, and best practices. Plus, there's something deeply satisfying about preventing attacks and minimizing business impact."
    }

    // Career goals / future plans
    if (lowerMessage.includes("goal") || lowerMessage.includes("future") || lowerMessage.includes("plan") || lowerMessage.includes("aspiration") || lowerMessage.includes("dream")) {
      return "My career goals are focused on becoming a leading expert in cybersecurity operations and incident response. I'm currently completing my Master's degree and gaining hands-on experience through internships.\n\nIn the future, I'd love to:\n\n🎯 Lead security operations teams\n🎯 Help organizations build world-class SOC capabilities\n🎯 Contribute to cybersecurity research and best practices\n🎯 Mentor others entering the field\n🎯 Work on cutting-edge security technologies\n\nI'm committed to continuous learning and staying at the forefront of cybersecurity innovation. What are your career interests?"
    }

    // Hobart / Tasmania / location
    if (lowerMessage.includes("hobart") || lowerMessage.includes("tasmania") || lowerMessage.includes("tas") || lowerMessage.includes("where do you live") || lowerMessage.includes("location")) {
      return "I'm based in Hobart, Tasmania - it's a beautiful city! I love living here. Hobart has a growing tech community, and it's a great place to focus on my studies and cybersecurity work.\n\nWhile I'm here, I'm completing my Master's degree and working on various cybersecurity projects. The peaceful environment actually helps me stay focused on my work. Have you been to Tasmania, or are you interested in the tech scene here?"
    }

    // Interests / hobbies / outside work
    if (lowerMessage.includes("hobby") || lowerMessage.includes("interest") || lowerMessage.includes("what do you like") || lowerMessage.includes("outside work") || lowerMessage.includes("free time")) {
      return "When I'm not working on cybersecurity, I enjoy staying active and learning new things. I'm passionate about continuous learning - whether it's cybersecurity, technology trends, or personal development.\n\nI also value connecting with the cybersecurity community, attending webinars, and staying updated on industry trends. Being multilingual (English and Bengali), I enjoy connecting with diverse communities and learning about different cultures.\n\nWhat about you? What are your interests?"
    }

    // Thank you / appreciation
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks") || lowerMessage.includes("appreciate")) {
      return "You're very welcome! I'm always happy to help. If you have any more questions about cybersecurity, my experience, or would like to connect, feel free to ask. Is there anything else you'd like to know?"
    }

    // Goodbye / farewell
    if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye") || lowerMessage.includes("see you") || lowerMessage.includes("farewell") || lowerMessage.includes("later")) {
      return "It was great chatting with you! Feel free to reach out anytime if you have more questions. You can also connect with me on LinkedIn or email me at sumaiya.serazy10@gmail.com. Take care and stay secure! 🔒"
    }

    // Questions about cybersecurity field
    if (lowerMessage.includes("cybersecurity field") || lowerMessage.includes("security industry") || lowerMessage.includes("cyber industry") || lowerMessage.includes("field of security")) {
      return "The cybersecurity field is incredibly dynamic and exciting! It's constantly evolving with new threats, technologies, and challenges. What I love most is that it's a field where you can truly make a difference - protecting organizations, data, and people from cyber threats.\n\nThe industry offers diverse career paths: from SOC operations and incident response to penetration testing, security architecture, compliance, and more. There's always something new to learn, which keeps it engaging.\n\nAre you interested in entering the cybersecurity field, or are you already working in tech?"
    }

    // Advice / tips
    if (lowerMessage.includes("advice") || lowerMessage.includes("tip") || lowerMessage.includes("recommendation") || lowerMessage.includes("suggest")) {
      return "Based on my experience, here's some advice I'd share:\n\n💡 **Continuous Learning**: Cybersecurity is always evolving - stay curious and keep learning. Follow industry news, take courses, and practice hands-on.\n\n💡 **Build Practical Skills**: Theory is important, but hands-on experience with tools like SIEM, IDS/IPS, and security platforms is crucial.\n\n💡 **Network**: Connect with other professionals in the field. Join communities, attend events, and learn from others.\n\n💡 **Start with Fundamentals**: Understanding networking, operating systems, and basic security principles is essential.\n\n💡 **Get Certified**: Consider certifications like Security+, CEH, or others relevant to your interests.\n\nWhat specific area of cybersecurity are you interested in?"
    }

    // What are you working on / current work
    if (lowerMessage.includes("what are you working on") || lowerMessage.includes("current work") || lowerMessage.includes("what do you do") || lowerMessage.includes("current project")) {
      return "Currently, I'm working on several exciting things:\n\n🔹 Completing my Master of IT – Cyber Security at APIC\n🔹 Interning at Ausbiz Consulting, gaining hands-on cybersecurity consulting experience\n🔹 Working on various cybersecurity projects including threat intelligence briefings, WAF rollouts, and security visibility pipelines\n🔹 Building my expertise in SIEM, incident response, and vulnerability management\n\nI'm always learning and taking on new challenges. What kind of work are you interested in?"
    }

    // Favorite / best part
    if (lowerMessage.includes("favorite") || lowerMessage.includes("favourite") || lowerMessage.includes("best part") || lowerMessage.includes("enjoy most") || lowerMessage.includes("love about")) {
      return "What I love most about cybersecurity is the problem-solving aspect. Every day brings new challenges - analyzing threats, investigating incidents, and finding ways to protect systems. It's like being a digital detective!\n\nI also really enjoy the collaborative nature of the work - working with teams to build security solutions and helping organizations strengthen their defenses. Plus, knowing that my work helps protect people and businesses is incredibly rewarding.\n\nWhat aspects of your work or interests do you enjoy most?"
    }

    // Challenges / difficulties
    if (lowerMessage.includes("challenge") || lowerMessage.includes("difficult") || lowerMessage.includes("hard") || lowerMessage.includes("struggle")) {
      return "Cybersecurity definitely has its challenges! Some of the main ones I've encountered:\n\n⚡ **Keeping Up**: The threat landscape evolves constantly - new attack vectors, vulnerabilities, and technologies emerge regularly.\n\n⚡ **Alert Fatigue**: In SOC operations, managing high volumes of alerts while identifying real threats can be challenging.\n\n⚡ **Balancing Security & Usability**: Finding the right balance between strong security and user experience is always a consideration.\n\n⚡ **Communication**: Translating technical security concepts for non-technical stakeholders requires clear communication skills.\n\nBut these challenges are also what make the field exciting - there's always something new to learn and solve! Have you faced similar challenges in your work?"
    }

    // Yes / no responses
    if (lowerMessage === "yes" || lowerMessage === "yeah" || lowerMessage === "yep" || lowerMessage === "sure" || lowerMessage === "ok" || lowerMessage === "okay") {
      return "Great! What would you like to know more about? Feel free to ask me anything about my experience, skills, projects, or cybersecurity in general."
    }

    if (lowerMessage === "no" || lowerMessage === "nope" || lowerMessage === "nah") {
      return "No problem! Is there something else you'd like to ask? I'm here to help with any questions about cybersecurity, my work, or how we can connect."
    }

    // Default response - more conversational
    const defaultResponses = [
      "That's an interesting question! I'd be happy to help. You can ask me about my cybersecurity expertise, education, work experience, projects, contact information, or anything else you'd like to know. What interests you most?",
      "I'm here to help! Feel free to ask me about my background, skills, projects, or how we can connect. You could try asking:\n\n• 'Tell me about your experience'\n• 'What are your skills?'\n• 'What projects have you worked on?'\n• 'How can I contact you?'\n• 'Why did you choose cybersecurity?'\n\nWhat would you like to know?",
      "Great question! I can share information about my cybersecurity work, education, experience, projects, and more. What specific topic interests you? Feel free to ask anything - I'm an open book!"
    ]
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await generateResponse(userMessage.content)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, assistantMessage])
        setLoading(false)
      }, 500) // Small delay for better UX
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try again or contact Sumaiya directly.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      setLoading(false)
      toast.error("Failed to generate response")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="bg-background border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Network className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle>Sumaiya Serazy</CardTitle>
            <CardDescription>Chat with me - Your Cyber Security Specialist</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col h-[500px]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about my experience, skills, projects, or contact info..."
                disabled={loading}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                size="icon"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

