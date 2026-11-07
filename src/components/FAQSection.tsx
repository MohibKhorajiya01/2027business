import React, { useState } from 'react';
import { FAQ_LIST } from '../data/blueprintData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // First item open by default for immediate engagement
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F2] border-b border-[#123C2E]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#171717]/75 leading-relaxed">
            Everything you need to know about the product format, access, and content.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-[#F7F3E9] rounded-xl border border-[#123C2E]/12 overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F2]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#0B281F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg border border-[#123C2E]/20 flex items-center justify-center shrink-0 text-[#123C2E] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#123C2E] text-[#FAF8F2]' : 'bg-[#FAF8F2]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#171717]/80 leading-relaxed border-t border-[#123C2E]/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
