"use client"

import { AnimatedSection } from "@/components/ui/animated-section"

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div aria-hidden="true" className="absolute left-0 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 size-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up"><span className="mb-6 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Our Services</span></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100}><h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">Planning outdoor media and <span className="gradient-text">corporate sponsorship</span></h2></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={200}>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/60">
            CL GLOBAL MEDIA LLC is a corporate sponsorship and outdoor media agency that plans and buys outdoor, transport, airport, retail, and digital out-of-home advertising on behalf of business clients through third-party media owners.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
