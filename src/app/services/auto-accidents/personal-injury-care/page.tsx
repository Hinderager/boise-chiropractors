import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personal Injury Chiropractic Care Boise | Documentation | (208) 505-9352',
  description: 'Comprehensive personal injury chiropractic care in Boise. Full documentation for claims, expert treatment, insurance coordination. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/auto-accidents/personal-injury-care' },
}

export default function PersonalInjuryCarePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Personal Injury Chiropractic Care</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Comprehensive care and documentation for personal injury cases in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>More Than Just Treatment</h2>
            <p>If you've been injured in a car accident or other incident that wasn't your fault, you need more than just pain relief. You need proper documentation, consistent treatment, and a clear record of your injuries and recovery. That's where we come in.</p>

            <h2>What Makes Personal Injury Cases Different</h2>
            <p>Personal injury cases require detailed documentation and often involve insurance claims or legal proceedings. We understand what's needed and make sure everything is properly recorded from your very first visit.</p>

            <h2>Complete Documentation</h2>
            <p>We provide thorough documentation including:</p>
            <ul>
              <li>Initial injury assessment and diagnosis</li>
              <li>Treatment plans and progress notes</li>
              <li>Detailed records of all appointments and procedures</li>
              <li>Objective measurements of your condition and improvement</li>
              <li>Reports for attorneys and insurance companies</li>
              <li>Expert testimony if needed</li>
            </ul>

            <h2>Working With Your Attorney</h2>
            <p>If you have an attorney handling your case, we'll work directly with them to provide all necessary documentation and reports. We've worked with many personal injury attorneys in the Boise area and understand what they need to build a strong case.</p>

            <h2>Insurance Coordination</h2>
            <p>Dealing with insurance companies can be frustrating. We'll help navigate the process, whether it's your auto insurance, the other driver's insurance, or a third-party claim. We'll provide itemized billing and detailed reports to support your claim.</p>

            <h2>No Upfront Costs</h2>
            <p>In many personal injury cases, you don't pay anything upfront. We can often work on a lien basis, meaning payment comes from your settlement. This means you can get the care you need right away without worrying about how to pay for it.</p>

            <h2>Comprehensive Treatment</h2>
            <p>While documentation is important, our primary focus is helping you recover. We provide the same high-quality chiropractic care we offer all our patients, tailored to your specific injuries and needs.</p>

            <h2>Common Personal Injury Cases We Handle</h2>
            <ul>
              <li>Car and motorcycle accidents</li>
              <li>Rear-end collisions</li>
              <li>T-bone impacts</li>
              <li>Slip and fall injuries</li>
              <li>Workplace accidents</li>
              <li>Sports-related injuries</li>
            </ul>

            <h2>Protecting Your Rights</h2>
            <p>Getting proper medical care immediately after an injury is crucial for your health and your legal case. Gaps in treatment or delayed care can weaken your claim. We'll make sure you get consistent, documented care from start to finish.</p>

            <h2>What to Do After an Injury</h2>
            <ol>
              <li>Seek medical evaluation immediately (even if you feel okay)</li>
              <li>Document everything related to the incident</li>
              <li>Follow your treatment plan consistently</li>
              <li>Keep all appointments</li>
              <li>Communicate openly with us about your symptoms</li>
            </ol>

            <h2>Experience That Matters</h2>
            <p>We've handled hundreds of personal injury cases in the Boise area. We know what insurance companies look for, what attorneys need, and most importantly, how to help you recover as completely as possible.</p>

            <h2>Serving Boise's Personal Injury Victims</h2>
            <p>If you've been injured in Boise, Meridian, Eagle, Nampa, or anywhere in the Treasure Valley, we're here to help. Call us right away to schedule your evaluation.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Proper Care and Documentation</h2>
          <p className="text-gray-200 mb-6">Call today for your personal injury evaluation.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
