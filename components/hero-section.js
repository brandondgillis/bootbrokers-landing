'use client'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 text-primary-foreground md:min-h-[100vh]">
      <div className="absolute inset-0">
        <img src="/hero-boot.jpg" alt="" className="h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,90,43,0.15),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="mb-8">
          <h1 className="font-mono text-xl font-bold tracking-wider md:text-2xl">BOOTBROKERS</h1>
        </div>

        <h2 className="mb-6 text-balance font-sans text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          The Premium Marketplace for <span className="text-accent">Men&apos;s Boots</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-white/95 md:text-xl lg:text-2xl">
          Buy and sell quality boots with confidence. Lower fees, verified listings, and a community that values
          craftsmanship.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="w-full text-base font-semibold sm:w-auto"
            onClick={scrollToWaitlist}
          >
            Join the Waitlist
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-primary-foreground/30 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            onClick={scrollToHowItWorks}
          >
            How It Works
          </Button>
        </div>

        <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-widest text-white/90">Launching 2026</p>
        </div>
      </div>
    </section>
  )
}
