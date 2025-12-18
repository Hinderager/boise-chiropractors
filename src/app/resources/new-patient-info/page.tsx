import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New Patient Information | What to Expect | Boise Chiropractors',
  description: 'New to chiropractic care? Learn what to expect at your first visit, what to bring, and how we can help. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/resources/new-patient-info' },
}

export default function NewPatientInfoPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">New Patient Information</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Welcome to Our Practice</h2>
            <p>We're excited to help you on your journey to better health. Here's what to expect when you visit us for the first time.</p>

            <h3>What to Bring</h3>
            <ul>
              <li>Insurance card (if using insurance)</li>
              <li>Photo ID</li>
              <li>List of current medications</li>
              <li>Any relevant medical records or imaging (X-rays, MRIs)</li>
              <li>Accident report (if applicable)</li>
            </ul>

            <h3>Your First Visit</h3>
            <p>Plan to spend about 45-60 minutes at your first appointment. Here's what happens:</p>
            
            <h4>1. Health History & Consultation (15-20 minutes)</h4>
            <p>We'll talk about your current health concerns, medical history, and goals for treatment. This is your time to ask questions and help us understand what brought you in.</p>

            <h4>2. Physical Examination (15-20 minutes)</h4>
            <p>We'll perform a thorough examination including posture analysis, range of motion tests, and orthopedic assessments. If needed, we can take X-rays in our office.</p>

            <h4>3. Treatment Plan Discussion (10 minutes)</h4>
            <p>Based on our findings, we'll explain what's causing your pain and recommend a treatment plan. We'll go over the expected timeline and answer all your questions.</p>

            <h4>4. First Adjustment (10-15 minutes)</h4>
            <p>If appropriate, we'll provide your first adjustment the same day. Many patients feel relief immediately.</p>

            <h3>What to Wear</h3>
            <p>Wear comfortable, loose-fitting clothing. You won't need to change into a gown. Avoid wearing jewelry that might get in the way.</p>

            <h3>After Your Visit</h3>
            <p>You might feel immediate relief, or you might feel slightly sore (like after a workout). This is normal and typically resolves within 24 hours. Drink plenty of water and avoid strenuous activity for the rest of the day.</p>

            <h3>Questions Before Your Visit?</h3>
            <p>Call us anytime. We're here to help and happy to answer any questions that will make your first visit more comfortable.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Schedule Your First Visit</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
