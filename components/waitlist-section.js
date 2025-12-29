'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Waitlist submission:', email)
    setSubmitted(true)
    setEmail('')

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="waitlist" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border border-border bg-card p-8 text-center shadow-lg md:p-12">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Join the Waitlist</h2>
          <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
            Be the first to know when BootBrokers launches in 2026. Get early access and exclusive founding member
            benefits.
          </p>

          {submitted ? (
            <div className="rounded-lg bg-primary/10 p-6 text-primary">
              <p className="font-semibold">Thanks for joining! We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-base font-semibold">
                Join Waitlist
              </Button>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
