import { Card, CardContent } from '@/components/ui/card'
import { ShieldCheck, UserCheck, Scale } from 'lucide-react'

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: 'Anti-Scam Protection',
    description: 'Advanced verification systems and fraud detection keep both buyers and sellers safe from bad actors.',
  },
  {
    icon: UserCheck,
    title: 'Identity Verification',
    description:
      'Multi-step verification process ensures every user is authentic and accountable for their transactions.',
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    description: 'Fair, transparent dispute support with dedicated team members to resolve issues quickly and fairly.',
  },
]

export function TrustSafetySection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Trust & Safety First</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Your security is our priority. Every transaction is protected by our comprehensive safety measures.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="border-border bg-card">
                <CardContent className="flex flex-col items-start p-8">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-accent/10">
                    <IconComponent className="size-7 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
