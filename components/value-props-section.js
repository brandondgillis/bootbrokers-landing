import { Card, CardContent } from '@/components/ui/card'
import { DollarSign, Shield, Star } from 'lucide-react'

const valueProps = [
  {
    icon: DollarSign,
    title: 'Lowest Fees',
    description: 'Keep more of your money with transparent, competitive seller fees that respect your business.',
  },
  {
    icon: Shield,
    title: 'Safer Deals',
    description:
      'Verified buyers and sellers, secure payments, and comprehensive buyer protection on every transaction.',
  },
  {
    icon: Star,
    title: 'Better Listings',
    description:
      'Premium listing tools help you showcase your boots properly with detailed specs and high-quality images.',
  },
]

export function ValuePropsSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon
            return (
              <Card key={index} className="border-border bg-card">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="size-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{prop.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
