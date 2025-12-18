import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'When Should You See a Chiropractor? | Boise Chiropractors',
  description: 'Not sure if your condition needs chiropractic care? Here\'s when to see a chiropractor—and when to consider other options first.',
  alternates: {
    canonical: 'https://boise-chiropractors.com/blogs/when-to-see-chiropractor',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/when-to-see-chiropractor.webp"
          alt="When to See a Chiropractor in Boise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            When Should You See a Chiropractor?
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Knowing when chiropractic care makes sense can save you time and money.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got back pain. Your neck's been stiff for days. Your friend swears by her chiropractor, but you're wondering if chiropractic care is actually right for what's bothering you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Chiropractic care helps with specific conditions. It's not a cure-all, but for certain types of pain and movement problems, it works really well.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's how to know if seeing a chiropractor in Boise makes sense for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Musculoskeletal Pain Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">When Chiropractic Care Makes Sense</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Chiropractors specialize in musculoskeletal problems—issues with your bones, joints, muscles, and connective tissues. If your pain involves movement, posture, or alignment, chiropractic care often helps.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Back pain that's mechanical.</strong> This means pain that changes with position or movement. It gets worse when you sit too long or lift something awkwardly. It might improve when you stretch or move around. That's the type of back pain chiropractors treat effectively.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Neck pain from poor posture or strain.</strong> Hours hunched over your computer create neck tension. Sleeping wrong leaves you unable to turn your head. These respond well to adjustments and soft tissue work.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Headaches that start in your neck.</strong> Not all headaches come from your spine, but tension headaches and some migraines do. If your headaches seem connected to neck tightness or posture, chiropractic care might help.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Joint problems that limit movement.</strong> Your shoulder won't lift all the way. Your hip feels stiff. You can't twist as far as you used to. Chiropractors work on joint mobility throughout your body, not just your spine.
            </p>
          </div>
        </div>
      </section>

      {/* Sports Injuries Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Sports and Activity-Related Problems</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Athletes use chiropractic care regularly because it addresses the wear and tear from training. You don't have to be a professional athlete to benefit—weekend warriors and recreational players get help for similar issues.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sprains, strains, and overuse injuries often respond to chiropractic treatment. Runners dealing with hip or knee problems. Golfers with lower back issues. Tennis players with shoulder pain. These conditions involve both joint mechanics and soft tissue problems, which chiropractors are trained to address.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If you've been sidelined by an injury and traditional rest isn't enough, chiropractic care helps get you moving again. Many Boise chiropractors specialize in sports injuries and work alongside physical therapists to create comprehensive treatment plans.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The key is timing. Don't wait until a minor issue becomes chronic. Early intervention with sports-related pain usually means faster recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Work-Related Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Work-Related Pain and Ergonomic Issues</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your job affects your body. Desk workers get neck and shoulder problems from prolonged sitting. Manual laborers develop back issues from repetitive lifting. Drivers deal with hip and lower back tightness.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Chiropractic care addresses both the immediate pain and the underlying mechanical problems causing it. During your first visit, a good chiropractor in Boise asks about your work setup and daily activities. They're looking for patterns that contribute to your pain.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Treatment typically includes adjustments to restore proper movement, but also advice on ergonomics and exercises you can do at work. You're not just getting adjusted—you're learning how to prevent the problem from recurring.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              If you're dealing with a workers' compensation claim, many chiropractors in the Treasure Valley work with these cases. They understand the documentation requirements and coordinate with your employer's insurance.
            </p>
          </div>
        </div>
      </section>

      {/* When NOT to See Section - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When to Consider Other Care First</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Chiropractic care isn't the right answer for every type of pain. Here's when you should see your medical doctor instead:
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Severe pain that doesn't change with movement.</strong> Pain that's constant regardless of position might indicate something beyond a mechanical problem. Get it checked medically first.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Pain accompanied by fever, unexplained weight loss, or night sweats.</strong> These symptoms suggest medical conditions that need evaluation before any manual therapy.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Numbness, tingling, or weakness that's getting worse.</strong> While chiropractors can help some nerve-related issues, progressive neurological symptoms need medical assessment to rule out serious problems.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Pain following significant trauma.</strong> After a car accident or serious fall, get checked medically before seeing a chiropractor. You need to rule out fractures or internal injuries first.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              Good chiropractors in Boise will tell you when your condition is outside their scope. They'll refer you to appropriate medical care. If a chiropractor doesn't ask about red flag symptoms or seems dismissive of your concerns, find someone else.
            </p>
          </div>
        </div>
      </section>

      {/* Preventive Care Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Chiropractic Care for Prevention</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You don't have to wait until you're in pain to see a chiropractor. Many people use chiropractic care preventively to maintain mobility and catch small problems before they become big ones.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Think of it like maintaining your car. Regular adjustments keep your joints moving well and your muscles balanced. This approach appeals to people who are active and want to stay that way.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Preventive chiropractic care typically means monthly or quarterly visits when you're feeling good. The frequency depends on your activity level, age, and history of problems. Someone training for a marathon might benefit from more frequent care than someone with a desk job and no history of injuries.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Insurance coverage for preventive care varies. Some plans cover wellness visits, others only cover symptomatic treatment. Ask about costs upfront if you're interested in this approach.
            </p>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">How Long Should You Wait Before Seeking Care?</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For minor aches and pains, waiting a few days to see if they resolve on their own makes sense. Most people experience occasional discomfort that goes away without treatment.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But if your pain persists beyond a week, gets progressively worse, or significantly limits your activities, that's when to see someone. The longer mechanical problems go untreated, the more compensatory patterns develop. Your body adjusts to the pain, creating new issues.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              After an acute injury—you twist your back lifting something, you wake up unable to turn your neck—seeing a chiropractor within the first few days can prevent the problem from becoming chronic. Early intervention often means fewer visits overall.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Don't wait until the pain is unbearable. By that point, it takes longer to improve. Most chiropractors in the Treasure Valley offer same-day or next-day appointments for acute problems.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              See a chiropractor when you've got mechanical pain—issues with movement, joints, or posture. Chiropractic care works well for back pain, neck problems, headaches, and sports injuries that involve musculoskeletal function.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Don't wait until minor problems become chronic. Early treatment usually means faster improvement and fewer visits. But also know when to see your medical doctor first—severe pain, neurological symptoms, or pain from significant trauma needs medical evaluation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The right time to see a chiropractor is when mechanical pain is affecting your daily life and simple rest isn't solving it. Trust your instincts about your body.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not Sure If Chiropractic Care Is Right for You?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Call us. We'll discuss your condition and let you know if we can help—or point you toward the right provider if we can't.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Serving Boise, Meridian, Nampa & the Treasure Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-[#0b7fb6] transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
