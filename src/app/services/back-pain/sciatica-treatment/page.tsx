import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sciatica Treatment Boise | Leg Pain Relief | Chiropractor | (208) 505-9352',
  description: 'Effective sciatica treatment in Boise. Get relief from shooting leg pain, numbness, and tingling. Expert chiropractic care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/back-pain/sciatica-treatment' },
}

export default function SciaticaTreatmentPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sciatica Treatment in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Find relief from shooting leg pain and sciatic nerve discomfort.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Is Sciatica?</h2>
            <p>Sciatica is pain that radiates along the path of your sciatic nerve—from your lower back, through your hips and buttocks, and down your leg. Most people describe it as a shooting, burning, or electric shock-like pain. Sometimes it comes with numbness, tingling, or weakness in the leg.</p>

            <h2>Why Does It Happen?</h2>
            <p>Usually, sciatica happens when something irritates or compresses the sciatic nerve. Common causes include:</p>
            <ul>
              <li>Herniated or bulging disc pressing on the nerve</li>
              <li>Spinal stenosis (narrowing of the spinal canal)</li>
              <li>Piriformis syndrome (tight muscle irritating the nerve)</li>
              <li>Degenerative disc disease</li>
              <li>Spondylolisthesis (vertebra slipping out of place)</li>
              <li>Pregnancy putting pressure on the nerve</li>
            </ul>

            <h2>How We Diagnose It</h2>
            <p>We'll start with a thorough exam to figure out what's causing your sciatic pain. This includes testing your reflexes, strength, and sensation. We'll also look at how your spine is moving and check for areas of tension or misalignment.</p>

            <h2>Treatment That Works</h2>
            <p>Our approach to sciatica focuses on reducing pressure on the nerve and restoring proper function to your spine. This usually includes spinal adjustments to improve alignment and joint movement, along with specific exercises and stretches.</p>

            <p>Many of our Boise patients get significant relief within a few weeks. Some feel better after the first visit. It depends on what's causing your sciatica and how long you've had it.</p>

            <h2>What You Can Do at Home</h2>
            <p>We'll give you specific exercises and stretches to do between visits. Things like avoiding prolonged sitting, using ice or heat appropriately, and staying gently active can all help. We'll walk you through everything.</p>

            <h2>When to Seek Care</h2>
            <p>If you're experiencing shooting pain down your leg, numbness, tingling, or weakness, don't wait. Sciatica doesn't usually go away on its own, and the longer you wait, the harder it can be to treat. The good news is that chiropractic care can be very effective for most cases of sciatica.</p>

            <h2>Helping Boise Stay Active</h2>
            <p>We've helped countless people in Boise, Meridian, Eagle, and throughout the valley get back to their normal lives without sciatic pain. Whether you're dealing with a recent injury or chronic pain, we're here to help you feel better.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Stop Suffering from Sciatica</h2>
          <p className="text-gray-200 mb-6">Call today to start your treatment.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
