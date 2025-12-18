import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Headache Relief Boise | Migraine & Tension Headache Treatment | (208) 505-9352',
  description: 'Natural headache and migraine relief in Boise. Chiropractic treatment for tension headaches, migraines, and chronic head pain. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/neck-pain/headache-relief' },
}

export default function HeadacheReliefPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Headache Relief in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Natural treatment for tension headaches, migraines, and chronic head pain.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Tired of Reaching for the Pain Pills?</h2>
            <p>If you're dealing with frequent headaches, you know how much they can disrupt your life. Maybe you wake up with them, or they come on during the afternoon, or stress triggers them. Whatever the pattern, constantly taking medication isn't a real solution—it just masks the problem.</p>

            <h2>Types of Headaches We Treat</h2>
            <p>Not all headaches are the same, and treatment depends on what type you're dealing with:</p>

            <h3>Tension Headaches</h3>
            <p>These are the most common type. They feel like a tight band around your head and often come from stress, poor posture, or muscle tension in your neck and shoulders. If you sit at a desk all day or carry stress in your shoulders, you're probably familiar with these.</p>

            <h3>Cervicogenic Headaches</h3>
            <p>These headaches actually start in your neck. Problems with the joints or muscles in your upper neck can refer pain to your head. They often feel like they start at the base of your skull and move forward.</p>

            <h3>Migraines</h3>
            <p>Migraines are more intense—often one-sided, throbbing pain that can come with nausea, light sensitivity, and visual disturbances. While we can't cure migraines, chiropractic care can help reduce their frequency and severity for many people.</p>

            <h2>How Chiropractic Care Helps</h2>
            <p>A lot of headaches are related to problems in your neck and upper back. When the joints in your neck aren't moving properly, it can cause muscle tension and nerve irritation that leads to head pain. We work on restoring proper movement and reducing tension in those areas.</p>

            <p>For many of our Boise patients, addressing their neck and posture issues significantly reduces how often they get headaches—or eliminates them completely.</p>

            <h2>What to Expect</h2>
            <p>We'll start by figuring out what type of headaches you're having and what might be triggering them. Then we'll create a treatment plan that usually includes adjustments to your neck and upper back, along with exercises and lifestyle recommendations.</p>

            <p>Some people notice fewer headaches after just a few visits. For chronic headache sufferers, it might take a bit longer to see significant improvement, but most people do see real results.</p>

            <h2>Beyond Adjustments</h2>
            <p>We'll also talk about things like your workspace setup, stress management, sleep habits, and hydration. Often, headaches have multiple contributing factors, so addressing all of them gives you the best chance of staying headache-free.</p>

            <h2>Ready for Relief?</h2>
            <p>If you're tired of dealing with frequent headaches and want to find the root cause instead of just covering up the symptoms, we can help. We've helped countless people in Boise, Meridian, Eagle, and throughout the Treasure Valley reduce or eliminate their headaches naturally.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Find Natural Headache Relief</h2>
          <p className="text-gray-200 mb-6">Schedule your consultation today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
