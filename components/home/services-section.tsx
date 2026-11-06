"use client"

import { Plane, Monitor, ShoppingBag, MapPin, Bus, Building } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const services = [
  { icon: MapPin, title: "Roadside Advertising", description: "Planning and buying roadside outdoor media placements through third-party media owners." },
  { icon: Bus, title: "Transport Advertising", description: "Bus, rail, metro, and tram placements arranged through operators and their appointed media partners." },
  { icon: ShoppingBag, title: "Retail Advertising", description: "Retail and in-store advertising placements sourced through third-party media owners." },
  { icon: Plane, title: "Airport Advertising", description: "Airport advertising opportunities planned and booked through media-owner partners." },
  { icon: Monitor, title: "Digital Out-of-Home", description: "Digital outdoor advertising placements, subject to media-owner inventory and availability." },
  { icon: Building, title: "Corporate Sponsorship", description: "Sourcing and arranging sponsorship opportunities for business clients through third-party media owners and rights holders." },
]

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">What We Offer</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our <span className="gradient-text">Services</span></h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="scale" delay={index * 100}>
              <article className="group h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 transition-all duration-500 hover-lift hover:border-[#d4af37]/30">
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-[#d4af37]/10 transition-colors group-hover:bg-[#d4af37]/20"><service.icon aria-hidden="true" className="size-7 text-[#d4af37]" /></div>
                <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                <p className="leading-relaxed text-white/60">{service.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
