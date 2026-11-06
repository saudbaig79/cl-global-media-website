"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

const roadsideOptions = [
  { title: "Classic Billboards", description: "Planning and buying billboard placements through third-party media owners.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop" },
  { title: "Premium Digital Sites", description: "Digital roadside placements in London arranged through appointed media partners.", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop" },
  { title: "Street-Level Digital Displays", description: "Digital out-of-home placements, subject to media-owner inventory and availability.", image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1920&auto=format&fit=crop" },
  { title: "Small-Format Outdoor", description: "Planning for smaller-format outdoor placements in locations offered by media owners.", image: "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=1920&auto=format&fit=crop" },
  { title: "Retail-Adjacent Formats", description: "Retail-adjacent formats in high-footfall locations, booked through third-party media owners.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop" },
  { title: "Kiosks", description: "Kiosk placements sourced through media-owner partners, subject to availability.", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1920&auto=format&fit=crop" },
]

export function RoadsideSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Outdoor solutions</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Explore <span className="gradient-text">Outdoor Media</span></h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadsideOptions.map((option, index) => (
            <AnimatedSection key={option.title} animation="scale" delay={index * 80}>
              <article className="group relative overflow-hidden rounded-2xl hover-lift">
                <div className="relative aspect-[4/3]"><Image src={option.image} alt={option.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity group-hover:opacity-90" /></div>
                <div className="absolute bottom-0 left-0 right-0 p-6"><h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#d4af37]">{option.title}</h3><p className="text-sm leading-relaxed text-white/65">{option.description}</p></div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
