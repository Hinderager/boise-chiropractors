import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Options & Insurance | Boise Chiropractors',
  description: 'Flexible payment options and insurance information. We work with most major insurance plans. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/resources/payment-options' },
}

export default function PaymentOptionsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Payment Options & Insurance</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>We Make Chiropractic Care Affordable</h2>
            <p>Quality healthcare shouldn't break the bank. We offer multiple payment options to ensure you get the care you need.</p>

            <h3>Insurance Coverage</h3>
            <p>We work with most major insurance providers, including:</p>
            <ul>
              <li>Blue Cross Blue Shield</li>
              <li>Regence</li>
              <li>Aetna</li>
              <li>Cigna</li>
              <li>United Healthcare</li>
              <li>Medicare</li>
              <li>And many others</li>
            </ul>
            <p>Not sure if we accept your insurance? Give us a call and we'll verify your benefits for you.</p>

            <h3>Auto Accident & Personal Injury</h3>
            <p>If you've been in an auto accident, your treatment may be covered by your auto insurance policy. We'll work directly with your insurance company and provide all necessary documentation.</p>

            <h3>Cash & Self-Pay Options</h3>
            <p>Don't have insurance? No problem. We offer competitive cash rates for all services. Ask about our wellness packages for regular maintenance care.</p>

            <h3>Payment Methods Accepted</h3>
            <ul>
              <li>Cash</li>
              <li>Credit & Debit Cards</li>
              <li>HSA & FSA Cards</li>
              <li>CareCredit Healthcare Financing</li>
            </ul>

            <h3>Questions About Coverage?</h3>
            <p>Our front desk team is happy to answer any questions about insurance coverage, payment options, or costs. We'll always provide a clear estimate before beginning treatment.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call to Verify Your Insurance</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
