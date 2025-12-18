import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maintenance Chiropractic Care Boise | Stay Pain-Free | (208) 505-9352',
  description: 'Regular maintenance chiropractic care in Boise. Stay pain-free, maintain mobility, and feel your best. Ongoing wellness care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/wellness-care/maintenance-care' },
}

export default function MaintenanceCarePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Maintenance Chiropractic Care</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Keep feeling great with regular chiropractic maintenance.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>You Got Better—Now Stay Better</h2>
            <p>Maybe you came to us with back pain, neck stiffness, or some other problem. And after a few weeks of treatment, you felt great again. That's awesome. But here's the thing: the stresses that caused your problem in the first place haven't gone away. Your job is still demanding, you're still sitting at a desk, you're still doing the activities that put stress on your body.</p>

            <p>Maintenance care is about keeping you feeling good for the long haul.</p>

            <h2>What Is Maintenance Care?</h2>
            <p>Once you've resolved your initial problem, maintenance care involves regular adjustments—usually monthly or every few weeks—to keep everything functioning properly. It's like changing your car's oil or going to the dentist for cleanings. You're maintaining your health instead of just fixing problems as they come up.</p>

            <h2>Why It Works</h2>
            <p>Regular adjustments help keep your spine aligned, your joints moving properly, and your nervous system functioning optimally. This means your body can handle the daily stresses better, and small problems don't turn into big ones. Most of our maintenance patients rarely experience the pain and issues that brought them in originally.</p>

            <h2>Who Needs Maintenance Care?</h2>
            <p>It's especially valuable if you:</p>
            <ul>
              <li>Have a history of recurring back or neck pain</li>
              <li>Have a physically demanding job</li>
              <li>Sit for long periods</li>
              <li>Are very active or athletic</li>
              <li>Have a condition like scoliosis or arthritis</li>
              <li>Simply want to maintain optimal health</li>
            </ul>

            <h2>How Often Should You Come?</h2>
            <p>It varies. Some people do well with monthly visits, others need adjustments every couple of weeks. We'll help you figure out what frequency works best for your body and lifestyle. The key is finding the right balance—often enough to maintain your progress, but not more than necessary.</p>

            <h2>The Benefits Add Up</h2>
            <p>Our maintenance patients consistently report:</p>
            <ul>
              <li>Staying pain-free or with minimal discomfort</li>
              <li>Better energy and less fatigue</li>
              <li>Improved sleep quality</li>
              <li>Fewer sick days</li>
              <li>Better ability to handle physical demands</li>
              <li>Enhanced athletic performance</li>
              <li>Overall sense of wellness</li>
            </ul>

            <h2>It's an Investment in Yourself</h2>
            <p>Yes, regular chiropractic care costs money. But so does missing work because your back went out. So does being limited in what you can do. So do emergency visits when a small problem becomes a big one. Most people find that maintenance care is actually the most cost-effective approach in the long run.</p>

            <h2>Listening to Your Body</h2>
            <p>Even with maintenance care, you'll have times when your body needs more attention—after a long trip, a stressful period, or an unusually demanding week. That's normal. The difference is that these flare-ups are usually minor and resolve quickly because your body is already in good shape.</p>

            <h2>Your Maintenance Plan</h2>
            <p>We'll work with you to create a maintenance schedule that fits your needs and your life. If your situation changes—new job, new fitness routine, whatever—we'll adjust your plan accordingly. It's flexible and personalized to you.</p>

            <h2>Long-Term Health in Boise</h2>
            <p>We have patients who've been coming in for maintenance care for years. They stay active, avoid the chronic pain that used to limit them, and just feel better overall. That's what we want for everyone who comes through our doors.</p>

            <h2>Ready to Commit to Your Health?</h2>
            <p>If you're ready to stop the cycle of pain, treatment, relief, and then pain again—if you want to actually stay healthy instead of just getting fixed when things break—maintenance care might be right for you. Let's talk about creating a plan that keeps you feeling your best.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Maintenance Plan</h2>
          <p className="text-gray-200 mb-6">Schedule your regular care appointments today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
