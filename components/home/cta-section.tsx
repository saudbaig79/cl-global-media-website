"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0"><Image src="/images/hero-billboard.jpg" alt="Outdoor billboard placement" fill className="object-cover opacity-30" /><div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" /></div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="mb-6 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">Business enquiries</span>
          <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-white md:text-5xl">Discuss your next <span className="gradient-text">campaign</span></h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">Contact CL GLOBAL MEDIA LLC to discuss outdoor media planning, advertising placements, or corporate sponsorship opportunities. Placements are arranged through third-party media owners.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#b8982f]">Contact Us<ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10">View Our Services</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
