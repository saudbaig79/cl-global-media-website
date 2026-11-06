"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="City skyline" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 size-2 animate-float rounded-full bg-[#d4af37]/30" />
        <div className="absolute right-1/4 top-1/3 size-3 animate-float rounded-full bg-[#d4af37]/20 delay-300" />
        <div className="absolute bottom-1/3 left-1/3 size-2 animate-float rounded-full bg-[#d4af37]/40 delay-500" />
        <div className="absolute right-1/3 top-2/3 size-1.5 animate-float rounded-full bg-[#d4af37]/30 delay-700" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 animate-fade-in-up text-5xl font-bold leading-tight tracking-tight text-white delay-100 md:text-7xl lg:text-8xl"><span className="text-[#d4af37]">CL</span> Global Media</h1>
        <h2 className="mb-8 animate-fade-in-up text-2xl font-semibold leading-tight text-white delay-150 md:text-4xl lg:text-5xl">Outdoor Media &amp; <span className="gradient-text font-sans">Corporate Sponsorship</span></h2>
        <p className="mx-auto mb-10 max-w-3xl animate-fade-in-up text-lg leading-relaxed text-white/70 delay-200 md:text-xl">CL GLOBAL MEDIA LLC plans and buys outdoor, transport, airport, retail, and digital out-of-home advertising on behalf of business clients through third-party media owners.</p>
        <div className="flex animate-fade-in-up flex-col items-center justify-center gap-4 delay-300 sm:flex-row">
          <Link href="/services" className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#b8982f] hover:shadow-xl hover:shadow-[#d4af37]/20">Explore Our Services<ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" /></Link>
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"><Play aria-hidden="true" size={18} className="text-[#d4af37]" />Get in Touch</Link>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#d4af37]/30 pt-2"><div className="h-3 w-1.5 rounded-full bg-[#d4af37]/50" /></div></div>
    </section>
  )
}
