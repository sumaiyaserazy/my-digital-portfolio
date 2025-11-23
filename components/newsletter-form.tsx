"use client"

import { FormEvent, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get("email") || "").trim()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: "Subscribed",
        description: "You&apos;ll get one practical security update per month.",
      })
      formRef.current?.reset()
      setIsSubmitting(false)
    }, 400)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input type="text" name="name" placeholder="Your name (optional)" className="bg-background" />
        <div className="flex space-x-2">
          <Input type="email" name="email" placeholder="Your email address" required className="bg-background" />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
