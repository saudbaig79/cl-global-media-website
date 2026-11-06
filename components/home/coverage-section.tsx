"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const markets = [
  {
    name: "United States",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop",
    alt: "City skyline in the United States",
    description: "Outdoor media planning and corporate sponsorship for business clients in the United States, arranged through third-party media owners.",
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop",
    alt: "Urban street in the United Kingdom",
    description: "Outdoor, transport, airport, retail, and digital out-of-home advertising planned through third-party media owners.",
  },
]

export function CoverageSection() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Markets served</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our <span className="gradient-text">Markets</span></h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2">
          {markets.map((market, index) => (
            <AnimatedSection key={market.name} animation={index === 0 ? "fade-left" : "fade-right"}>
              <article className="group relative h-full overflow-hidden rounded-2xl gold-border hover-lift">
                <div className="relative aspect-[4/3]">
                  <Image src={market.image} alt={market.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="mb-4 inline-block rounded-full bg-[#d4af37]/20 px-3 py-1 text-xs font-medium text-[#d4af37]">Market served</span>
                  <h3 className="mb-4 font-sans text-2xl font-bold text-white md:text-3xl">{market.name}</h3>
                  <p className="mb-6 leading-relaxed text-white/70">{market.description}</p>
                  <Link href="/services" className="group/link inline-flex items-center gap-2 font-medium text-[#d4af37] transition-colors hover:text-[#f4e4a6]">Learn more<ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover/link:translate-x-1" /></Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
