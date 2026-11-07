import React from 'react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handlePurchase = () => {
    trackInitiateCheckout('Final CTA Section');
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7F3E9] relative border-b border-[#123C2E]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF8F2] rounded-3xl border-2 border-[#123C2E]/20 p-8 sm:p-12 md:p-14 paper-shadow text-center relative overflow-hidden">
          
          {/* Subtle gold accent border line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#123C2E] via-[#B89B63] to-[#123C2E]"></div>

          <div className="max-w-2xl mx-auto">
            {/* Eyebrow */}
            <span className="text-xs font-mono font-bold tracking-widest text-[#8C6D37] uppercase block mb-3">
              Start Your Evaluation Today
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B281F] font-normal leading-[1.15] mb-5">
              75 Opportunities. <br />
              <span className="italic">One Place to Start Your Research.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed mb-6 max-w-xl mx-auto">
              Explore business models, understand investment considerations, compare opportunities and plan your next steps.
            </p>

            {/* Quick Benefits Pill Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs text-[#0B281F] font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F7F3E9] rounded-full border border-[#123C2E]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E]" />
                75 Complete Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F7F3E9] rounded-full border border-[#123C2E]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E]" />
                ₹50k to ₹15L Capital Bands
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F7F3E9] rounded-full border border-[#123C2E]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E]" />
                Instant PDF Download
              </span>
            </div>

            {/* Price Area */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-sm text-[#171717]/60 line-through decoration-[#171717]/80 font-medium">
                ₹{PRICE_ORIGINAL.toLocaleString('en-IN')}
              </span>
              <span className="text-4xl sm:text-5xl font-serif font-extrabold text-[#123C2E]">
                ₹{PRICE_CURRENT}
              </span>
              <span className="text-xs font-bold text-[#8C6D37] bg-[#B89B63]/15 px-3 py-1 rounded-full border border-[#B89B63]/30">
                Special Launch Price
              </span>
            </div>

            {/* Purchase CTA */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePurchase}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 bg-[#123C2E] hover:bg-[#0B281F] text-[#FAF8F2] text-sm sm:text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-[#B89B63]/40 group"
            >
              <span>BUY NOW — ₹149</span>
              <ArrowRight className="w-5 h-5 text-[#B89B63] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Delivery Reassurance */}
            <p className="text-xs text-[#171717]/60 mt-4">
              Digital PDF | Instant Access After Successful Payment
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
