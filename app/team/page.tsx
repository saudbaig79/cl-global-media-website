import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/team-hero"
import { TeamMembers } from "@/components/team/team-members"

export const metadata: Metadata = {
  title: "Leadership | CL Global Media",
  description: "Meet Tristan A. Marsh, Chief Executive Officer of CL GLOBAL MEDIA LLC.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TeamHero />
      <TeamMembers />
      <Footer />
    </main>
  )
}
