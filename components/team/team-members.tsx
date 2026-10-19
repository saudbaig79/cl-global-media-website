"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

const ceo = { name: "Tristan Marsh", role: "General Manager", bio: "Leads CL GLOBAL MEDIA LLC and is responsible for company direction, client engagement, and the coordination of its media and advertising services.", initials: "TM" }
const leadershipTeam = [
  { name: "Michael Matthews", role: "Head of Personnel", bio: "Responsible for personnel planning, team coordination, and supporting the company's working culture.", initials: "MM" },
  { name: "Miles Parker", role: "Head of Sales", bio: "Responsible for sales activity, prospective client communication, and the commercial development of advertising opportunities.", initials: "MP" },
  { name: "Robin Barker", role: "Head of Customer Service", bio: "Responsible for client communication and coordination throughout campaign planning and delivery.", initials: "RB" },
  { name: "Saud Baig", role: "Head of Design", bio: "Responsible for design direction and the coordination of creative requirements across advertising formats.", initials: "SB" },
]

export function TeamMembers() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Leadership accountability</p><h2 className="text-balance text-3xl font-semibold md:text-5xl">The people responsible for the company&apos;s direction and delivery.</h2></AnimatedSection>
        <AnimatedSection animation="fade-up" className="mb-px bg-foreground p-8 text-background md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center"><div className="relative size-28 shrink-0"><Image src="/images/logo.png" alt="CL Global Media" fill className="object-contain" priority /></div><div><p className="text-sm uppercase tracking-[0.2em] text-background/60">{ceo.role}</p><h3 className="mt-2 text-3xl font-semibold">{ceo.name}</h3><p className="mt-4 max-w-2xl leading-relaxed text-background/70">{ceo.bio}</p></div></div>
        </AnimatedSection>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((member, index) => <AnimatedSection key={member.name} animation="fade-up" delay={index * 100} className="flex min-h-72 flex-col bg-card p-7"><div className="flex size-14 items-center justify-center rounded-full border border-primary text-sm font-semibold text-primary">{member.initials}</div><h3 className="mt-12 text-xl font-semibold">{member.name}</h3><p className="mt-1 text-sm text-primary">{member.role}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p></AnimatedSection>)}
        </div>
      </div>
    </section>
  )
}
