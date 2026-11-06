"use client"

import { MapPin, Building, Monitor, Users } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const serviceFacts = [
  { icon: MapPin, title: "Outdoor media", description: "Planning and buying roadside and other outdoor advertising placements through third-party media owners.", color: "from-amber-500/20 to-yellow-500/20" },
  { icon: Monitor, title: "Media formats", description: "Outdoor, transport, airport, retail, and digital out-of-home advertising formats.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Building, title: "Corporate sponsorship", description: "Sourcing and arranging sponsorship opportunities through third-party media owners and rights holders.", color: "from-green-500/20 to-emerald-500/20" },
  { icon: Users, title: "Markets served", description: "Business clients in the United States and the United Kingdom.", color: "from-teal-500/20 to-green-500/20" },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Company overview</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our <span className="gradient-text">Business</span></h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceFacts.map((item, index) => (
            <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
              <article className="group text-center">
                <div className={`mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}><item.icon aria-hidden="true" className="size-10 text-[#d4af37]" /></div>
                <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
