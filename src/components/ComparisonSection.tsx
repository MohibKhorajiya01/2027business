import React from 'react';
import { XCircle, CheckCircle, ShieldAlert } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F3E9] border-b border-[#123C2E]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            Research Value Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal mb-5">
            Why Explore 75 Opportunities in One Guide?
          </h2>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            See how a unified research blueprint compares to browsing random internet forums and fragmented articles.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Card 1: Without a Structured Guide */}
          <div className="bg-[#FAF8F2] p-7 sm:p-8 rounded-2xl border border-red-900/10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-800 uppercase tracking-wider mb-2">
              <XCircle className="w-4 h-4 text-red-700" />
              <span>Without a Structured Guide</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#171717] mb-6 pb-4 border-b border-[#123C2E]/10">
              Fragmented & Ambiguous Research
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-[#171717]/75">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span><strong className="text-[#0B281F]">Scattered information:</strong> Hours spent jumping between random YouTube videos, blogs, and marketing webinars.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span><strong className="text-[#0B281F]">Difficult comparisons:</strong> No uniform benchmark to compare an agricultural unit against a solar or micro-SaaS venture.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span><strong className="text-[#0B281F]">Unclear investment assumptions:</strong> Ambiguity between minimal bootstrap budget and full-scale factory setup capital.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span><strong className="text-[#0B281F]">Missing business cost considerations:</strong> Working capital lockup, credit cycles, and statutory licenses are often ignored.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span><strong className="text-[#0B281F]">Harder to organize research:</strong> Difficult to shortlist opportunities with your co-founders or family without structured data.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: With This Blueprint */}
          <div className="bg-[#FAF8F2] p-7 sm:p-8 rounded-2xl border-2 border-[#123C2E] shadow-md relative">
            <div className="absolute -top-3 right-6 bg-[#123C2E] text-[#FAF8F2] px-3 py-0.5 text-[10px] font-bold tracking-wider uppercase border border-[#B89B63] rounded-full shadow-xs">
              RECOMMENDED
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#123C2E] uppercase tracking-wider mb-2">
              <CheckCircle className="w-4 h-4 text-[#123C2E]" />
              <span>With the 2027 Blueprint</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0B281F] mb-6 pb-4 border-b border-[#123C2E]/10">
              One Unified Strategic Framework
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-[#0B281F]">
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">75 opportunities in one place:</strong> Curated future-focused sectors for India across 6 high-growth domains.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">Structured business explanations:</strong> Standardized 12-component breakdown for every single business.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">Investment planning perspectives:</strong> Clear capital bands from ₹50,000 to ₹10 Crore+ with risk expectations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">Revenue model concepts:</strong> Transparent unit economics, gross margins, and operational cash-flow factors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">Risk and complexity considerations:</strong> Realistic regulatory traps, failure modes, and mitigation advice.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">Worksheets and scorecards:</strong> 13 decision frameworks and master 75-opportunity comparison matrix.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#123C2E] font-bold mt-0.5">✓</span>
                <span><strong className="text-[#0B281F]">Initial action direction:</strong> Clear 30-day and 90-day step-by-step roadmap to start validation.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Research Boundary Note */}
        <div className="max-w-3xl mx-auto p-4 bg-[#FAF8F2] border border-[#123C2E]/10 rounded-xl flex items-center justify-center gap-3 text-center shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-[#8C6D37] shrink-0" />
          <p className="text-xs text-[#171717]/70">
            <span className="font-semibold text-[#0B281F]">Professional Boundary:</span> This guide is designed to structure and accelerate your research; it does not replace custom professional financial, legal, or market feasibility studies.
          </p>
        </div>

      </div>
    </section>
  );
};
