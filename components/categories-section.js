import { Card, CardContent } from '@/components/ui/card'

const categories = [
  {
    name: 'Cowboy',
    image: '/boot-cowboy.jpg',
  },
  {
    name: 'Work',
    image: '/boot-work.jpg',
  },
  {
    name: 'Heritage',
    image: '/boot-heritage.jpg',
  },
  {
    name: 'Hiking',
    image: '/boot-hiking.jpg',
  },
  {
    name: 'Dress',
    image: '/boot-dress.jpg',
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-muted px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Featured Categories</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From classic workwear to refined dress boots, find the perfect pair for every occasion
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-border bg-card transition-transform hover:scale-[1.02]"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.name} boots category`}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
