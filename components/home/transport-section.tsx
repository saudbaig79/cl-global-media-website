"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

const transportOptions = [
  { title: "Bus", description: "Bus advertising placements arranged through operators and their media partners.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920&auto=format&fit=crop" },
  { title: "Rail Digital", description: "Digital rail placements, subject to media-owner inventory and availability.", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1920&auto=format&fit=crop" },
  { title: "TfL Rail Estate", description: "Tube, Tram, and Overground placements booked through appointed media partners.", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1920&auto=format&fit=crop" },
  { title: "Metro", description: "Metro advertising opportunities arranged with third-party media owners.", image: "/images/metro-advertising.png" },
  { title: "Tram", description: "Tram advertising placements arranged through operators and their media partners.", image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1920&auto=format&fit=crop" },
]

export function TransportSection() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Transit advertising</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Explore <span className="gradient-text">Transport</span></h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transportOptions.map((option, index) => (
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
