import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Terms of Business | CL Global Media",
  description: "Terms governing services supplied by CL GLOBAL MEDIA LLC to business clients.",
}

const termsSections = [
  {
    title: "1. Parties and application",
    paragraphs: [
      "1.1 These Terms apply to all services supplied by CL GLOBAL MEDIA LLC, a New Mexico limited liability company, Entity No. 7521073 (\"we\", \"us\"), to any business client (\"you\").",
      "1.2 These Terms apply to the exclusion of any terms you seek to impose. We do not contract with consumers.",
    ],
  },
  {
    title: "2. Definitions",
    paragraphs: [
      "2.1 \"Campaign\" means the advertising or sponsorship activity described in a Proposal. \"Proposal\" means our written quotation or insertion order. \"Media Owner\" means any third party that owns or controls advertising inventory or sponsorship rights. \"Media Costs\" means sums payable to Media Owners. \"Fees\" means our charges for planning, buying, coordination and management.",
    ],
  },
  {
    title: "3. Our role",
    paragraphs: [
      "3.1 We plan, negotiate and book Campaigns on your behalf with Media Owners. We do not own advertising sites unless a Proposal expressly says so.",
      "3.2 Each booking is subject to availability and to the Media Owner's own terms, which we will make available on request. Where a Media Owner's terms conflict with these Terms in relation to that inventory, the Media Owner's terms prevail.",
    ],
  },
  {
    title: "4. Proposals and orders",
    paragraphs: [
      "4.1 A Proposal is valid for [14] days. A contract is formed when you accept a Proposal in writing.",
      "4.2 Changes to an accepted Campaign must be agreed in writing and may change the Fees and Media Costs.",
    ],
  },
  {
    title: "5. Your obligations",
    paragraphs: [
      "5.1 You will supply artwork and materials by the deadlines in the Proposal and ensure they comply with all applicable law and advertising codes in each market (including, in the UK, the CAP Code) and with Media Owner content rules.",
      "5.2 You warrant that you own or are licensed to use all materials you supply and will indemnify us against claims arising from them.",
      "5.3 Media Owners may reject or remove content. We are not liable for any such decision.",
    ],
  },
  {
    title: "6. Fees and payment",
    paragraphs: [
      "6.1 Fees and Media Costs are stated in the Proposal in [USD / GBP / EUR] and are exclusive of any applicable taxes.",
      "6.2 Unless the Proposal states otherwise, Media Costs are payable in full [before the booking is confirmed] and Fees are payable within [30] days of invoice.",
      "6.3 Payment must be made by bank transfer from an account in your own business name to the account shown on our invoice. We do not accept cash or third-party payments.",
      "6.4 We may charge interest on overdue sums at [RATE]% per year above [REFERENCE RATE] and suspend services until payment is made.",
    ],
  },
  {
    title: "7. Cancellation",
    paragraphs: [
      "7.1 Cancellation after acceptance is subject to the Media Owner's cancellation terms. You will pay any cancellation charges imposed by the Media Owner and our Fees for work already done.",
    ],
  },
  {
    title: "8. Intellectual property",
    paragraphs: [
      "8.1 You retain ownership of your materials. You grant us a licence to use them to deliver the Campaign.",
      "8.2 CL GLOBAL MEDIA is a brand used by us under licence. Nothing in these Terms grants you any right in it.",
    ],
  },
  {
    title: "9. Confidentiality and data protection",
    paragraphs: [
      "9.1 Each party will keep the other's confidential information confidential and use it only to perform the contract.",
      "9.2 Each party will comply with data protection law applicable to it, including where relevant the UK GDPR, the EU GDPR and applicable US state law. Our Privacy Policy applies to personal data we process.",
    ],
  },
  {
    title: "10. Compliance",
    paragraphs: [
      "10.1 Each party will comply with applicable anti-bribery, anti-money laundering and sanctions laws. We will not provide services to, or accept payment from, any person subject to sanctions, and may suspend or terminate immediately if we reasonably believe this clause has been breached.",
    ],
  },
  {
    title: "11. Liability",
    paragraphs: [
      "11.1 Nothing limits liability for fraud, or for death or personal injury caused by negligence, or any liability that cannot be limited by law.",
      "11.2 We are not liable for loss of profit, revenue, goodwill or any indirect or consequential loss, or for any act or omission of a Media Owner.",
      "11.3 Our total liability under each contract is limited to the Fees paid for the relevant Campaign.",
      "11.4 Where a Media Owner fails to display a Campaign as booked, your remedy is limited to the make-good or credit we obtain from that Media Owner, which we will pass on to you.",
    ],
  },
  {
    title: "12. Termination",
    paragraphs: [
      "12.1 Either party may terminate on written notice if the other commits a material breach not remedied within [14] days of notice, or becomes insolvent.",
    ],
  },
  {
    title: "13. Force majeure",
    paragraphs: [
      "13.1 Neither party is liable for delay or failure caused by events beyond its reasonable control.",
    ],
  },
  {
    title: "14. General",
    paragraphs: [
      "14.1 These Terms and the Proposal are the entire agreement. Variations must be in writing.",
      "14.2 Neither party may assign without the other's written consent, not to be unreasonably withheld.",
      "14.3 These Terms are governed by the law of the State of New Mexico, and the courts of the State of New Mexico have exclusive jurisdiction.",
    ],
  },
]

export default function TermsOfBusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Business clients only</p>
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Terms of Business</h1>
            <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">Draft for review by a lawyer qualified in the chosen governing law before use. This is drafting assistance, not legal advice.</p>
            <div className="mt-8 flex flex-col gap-10 text-base leading-relaxed text-muted-foreground">
              {termsSections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-4 text-2xl font-semibold text-primary">{section.title}</h2>
                  <div className="flex flex-col gap-3">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">15. Contact</h2>
                <div className="flex flex-col gap-3">
                  <p>CL GLOBAL MEDIA LLC, a New Mexico limited liability company, Entity No. 7521073.</p>
                  <p>Mailing address (correspondence only): 99 Wall Street, New York, NY 10005, USA.</p>
                  <p>Operating address: 1875 Mission Street, Suites 103-106, San Francisco, CA 94103, USA.</p>
                  <p><a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a></p>
                  <p>Last updated: [DATE OF PUBLICATION].</p>
                </div>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
