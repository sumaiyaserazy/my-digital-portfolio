import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Contact | Sumaiya Serazy",
  description: "Get in touch with Sumaiya Serazy - Cyber Security Specialist",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Get In Touch</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                Let&apos;s connect and discuss cybersecurity opportunities, collaborations, or questions.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-background border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Send me an email</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:sumaiya.serazy10@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  sumaiya.serazy10@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call or text me</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:0452667053" 
                  className="text-primary hover:underline font-medium"
                >
                  0452667053
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Location</CardTitle>
                <CardDescription>Based in</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">Hobart, TAS 7000</p>
                <p className="text-sm text-muted-foreground">Australia</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-background border-primary/20">
              <CardHeader>
                <CardTitle>Connect on LinkedIn</CardTitle>
                <CardDescription>
                  Let&apos;s connect professionally and stay updated on cybersecurity trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href="https://linkedin.com/in/sumaiya-serazy-921947222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

