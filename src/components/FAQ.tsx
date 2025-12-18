'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does a chiropractic adjustment cost?', answer: 'Initial visits including exam and adjustment typically run $75-150. Follow-up adjustments usually cost $40-75. Many insurance plans cover chiropractic care. We\'ll verify your benefits and explain costs upfront—no surprises.' },
  { question: 'Does chiropractic treatment hurt?', answer: 'Most people feel immediate relief after an adjustment. You might hear popping sounds—that\'s just gas releasing from joints, totally normal. Some patients feel mild soreness afterward, similar to post-workout muscle fatigue, but it passes quickly.' },
  { question: 'How many visits will I need?', answer: 'It depends on your condition. Acute issues like a thrown-out back might need just a few visits. Chronic problems take longer. After your exam, we\'ll give you a realistic treatment plan. We\'re not about endless appointments—our goal is getting you better.' },
  { question: 'Do you take insurance?', answer: 'Yes. We work with most major insurance plans including auto accident and workers\' compensation cases. We\'ll verify your coverage and handle the paperwork. Self-pay options available too.' },
  { question: 'Can you help with headaches and migraines?', answer: 'Absolutely. Many headaches come from neck tension and spinal misalignment. We\'ve helped countless patients reduce or eliminate chronic headaches and migraines through targeted adjustments and lifestyle recommendations.' },
  { question: 'Is chiropractic safe?', answer: 'Yes, when performed by licensed professionals. Serious complications are extremely rare. We do a thorough exam first and adjust our techniques based on your specific needs. Chiropractic care is one of the safest, most effective treatments for back and neck pain.' },
  { question: 'Can I see a chiropractor after a car accident?', answer: 'Definitely. We specialize in auto accident injuries like whiplash. Even if you don\'t feel pain immediately after an accident, get checked. We work with insurance companies and attorneys to document injuries and create treatment plans.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
