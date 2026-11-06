"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const highlights = [
  "Outdoor, transport, airport, retail, and digital out-of-home advertising",
  "Corporate sponsorship opportunities",
  "Planning and buying through third-party media owners",
  "Business clients in the United States and United Kingdom",
]

export function AboutPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#d4af37]/5 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop" alt="Outdoor media planning workspace" fill className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fade-right">
          <span className="mb-6 inline-block rounded-full bg-[#d4af37]/10 px-4 py-1.5 text-sm font-medium text-[#d4af37]">About Us</span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-white md:text-4xl">Corporate sponsorship and <span className="gradient-text">outdoor media</span></h2>
          <p className="mb-6 leading-relaxed text-white/60">CL GLOBAL MEDIA LLC plans and buys outdoor, transport, airport, retail, and digital out-of-home advertising on behalf of business clients through third-party media owners. The company also sources and arranges corporate sponsorship opportunities.</p>
          <ul className="mb-8 flex flex-col gap-4">
            {highlights.map((item) => <li key={item} className="flex items-start gap-3 text-white/80"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#d4af37]" />{item}</li>)}
          </ul>
          <Link href="/about" className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#b8982f]">Learn More About Us<ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" /></Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
