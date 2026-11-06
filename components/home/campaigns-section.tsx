"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const serviceOptions = [
  { title: "Corporate Sponsorship", description: "Sourcing and arranging sponsorship opportunities for business clients through third-party media owners and rights holders.", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1920&auto=format&fit=crop" },
  { title: "Outdoor Media Planning", description: "Planning and buying outdoor media placements through third-party media owners in the United States and United Kingdom.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" },
  { title: "Digital Out-of-Home", description: "Digital outdoor advertising opportunities subject to media-owner terms, inventory, and availability.", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop" },
]

export function CampaignsSection() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Services</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Campaign <span className="gradient-text">Solutions</span></h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {serviceOptions.map((service, index) => (
            <AnimatedSection key={service.title} animation="fade-up" delay={index * 150}>
              <article className="group h-full">
                <div className="relative mb-6 overflow-hidden rounded-2xl"><div className="relative aspect-[4/3]"><Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /></div></div>
                <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-[#d4af37]">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/60">{service.description}</p>
                <Link href="/services" className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#d4af37] transition-colors hover:text-[#f4e4a6]">Learn more<ArrowRight aria-hidden="true" size={14} className="transition-transform group-hover/link:translate-x-1" /></Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
