import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preventive Chiropractic Care Boise | Stay Healthy | (208) 505-9352',
  description: 'Preventive chiropractic care in Boise. Stay healthy, prevent injuries, and maintain wellness. Proactive health care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/wellness-care/preventive-care' },
}

export default function PreventiveCarePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Preventive Chiropractic Care in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Stay healthy and prevent problems before they start.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Don't Wait Until Something Hurts</h2>
            <p>Most people think about going to a chiropractor only when they're in pain. But what if you could prevent that pain from happening in the first place? That's what preventive chiropractic care is all about—keeping your body functioning well so problems don't develop.</p>

            <h2>Why Preventive Care Matters</h2>
            <p>Your body is constantly dealing with stress—physical stress from work and daily activities, postural stress from sitting, and the general wear and tear of life. Over time, these stresses create small problems that gradually get worse until they finally cause pain. By addressing issues early, you can avoid bigger problems down the road.</p>

            <h2>What Preventive Care Looks Like</h2>
            <p>Regular preventive visits usually involve:</p>
            <ul>
              <li>Assessment of your spine and movement patterns</li>
              <li>Adjustments to maintain proper alignment</li>
              <li>Identification of early warning signs</li>
              <li>Guidance on posture and ergonomics</li>
              <li>Exercises to maintain strength and flexibility</li>
              <li>Lifestyle recommendations for overall wellness</li>
            </ul>

            <h2>Who Benefits From Preventive Care?</h2>
            <p>Just about everyone can benefit, but it's especially valuable if you:</p>
            <ul>
              <li>Sit at a desk all day</li>
              <li>Have a physically demanding job</li>
              <li>Want to stay active as you age</li>
              <li>Have a history of back or neck problems</li>
              <li>Are an athlete or very active</li>
              <li>Want to avoid future pain and injuries</li>
            </ul>

            <h2>Beyond Pain Relief</h2>
            <p>Preventive care isn't just about avoiding pain. People who get regular chiropractic care often report better energy, improved sleep, fewer headaches, better athletic performance, and an overall sense of wellness. When your body is functioning optimally, everything just works better.</p>

            <h2>How Often Should You Come In?</h2>
            <p>It depends on your lifestyle, work demands, and health goals. Some people come monthly, others every few weeks. We'll help you figure out what makes sense for your situation. The key is consistency—regular care provides ongoing benefits.</p>

            <h2>Is It Worth It?</h2>
            <p>Think about it this way: you maintain your car with regular oil changes to prevent bigger problems. You go to the dentist twice a year even when your teeth don't hurt. Preventive chiropractic care is the same concept—investing a little time and money now to avoid bigger issues later.</p>

            <h2>Real Prevention in Action</h2>
            <p>We've seen countless Boise patients avoid major problems through consistent preventive care. People who used to deal with regular back pain flare-ups stay pain-free. Athletes stay healthier and perform better. Office workers avoid the chronic neck and shoulder tension that used to plague them.</p>

            <h2>Getting Started</h2>
            <p>If you're ready to be proactive about your health instead of reactive, give us a call. We'll assess your current condition, identify any areas that need attention, and create a preventive care plan that works for your life.</p>

            <h2>Wellness-Focused Care in Boise</h2>
            <p>We're here to help people throughout Boise, Meridian, Eagle, and the Treasure Valley stay healthy and active for life. Preventive care is an investment in your long-term health and quality of life.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Preventive Care Plan</h2>
          <p className="text-gray-200 mb-6">Schedule your wellness evaluation today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
