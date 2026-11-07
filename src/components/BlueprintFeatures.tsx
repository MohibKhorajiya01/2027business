import React from 'react';
import { CHAPTER_COMPONENTS } from '../data/blueprintData';
import { productImages } from '../assets/images';
import { CheckCircle2, ShieldAlert, FileText, ChevronRight } from 'lucide-react';

interface BlueprintFeaturesProps {
  onOpenSampleChapter?: () => void;
}

export const BlueprintFeatures: React.FC<BlueprintFeaturesProps> = ({ onOpenSampleChapter }) => {
  return (
    <section id="framework" className="py-20 md:py-28 bg-[#FAF8F2] border-b border-[#123C2E]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            Structured Analysis Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal mb-5">
            More Than Just Business Ideas
          </h2>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            Each business chapter is structured to help you understand how the business works, what it takes to start, where revenue comes from and what risks to evaluate.
          </p>
        </div>

        {/* Two-Column Framework Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Interactive 12-Step Chapter Framework */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F3E9] p-6 sm:p-8 rounded-2xl border border-[#123C2E]/15 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#123C2E]/10">
                <span className="text-xs font-bold tracking-wider text-[#0B281F] uppercase">
                  Standardized 12-Part Chapter Blueprint
                </span>
                <span className="text-[11px] font-mono text-[#8C6D37]">
                  Consistent across all 75 opportunities
                </span>
              </div>

              {/* 12-part list in responsive dual-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CHAPTER_COMPONENTS.map((comp) => (
                  <div
                    key={comp.step}
                    className="p-3.5 bg-[#FAF8F2] rounded-xl border border-[#123C2E]/8 hover:border-[#123C2E]/30 transition-colors shadow-2xs"
                  >
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-[#8C6D37]">
                        {comp.step}
                      </span>
                      <h4 className="text-xs font-bold text-[#0B281F] tracking-tight">
                        {comp.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#171717]/70 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup Preview */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#F7F3E9] p-6 rounded-2xl border border-[#123C2E]/15 shadow-sm">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C6D37] block mb-2">
                Authentic Edition Preview
              </span>
              <h3 className="text-lg font-serif font-bold text-[#0B281F] mb-3">
                Full Detailed Edition · India Focus
              </h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed mb-4">
                Structured into investment planning ranges (₹50,000, ₹5,00,000, ₹15,00,000+), setup frameworks, and operational risks.
              </p>

              {/* Sample Page Image Container - Uncropped & Steady */}
              <div
                onClick={onOpenSampleChapter}
                className="relative rounded-xl overflow-hidden border border-[#123C2E]/20 shadow-md cursor-pointer bg-[#FAF8F2]"
              >
                <img
                  src={productImages.bookWarmSunlight}
                  alt="Reading 2027 Business Opportunity Blueprint in warm sunlight"
                  width={1086}
                  height={1448}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain block select-none"
                />
              </div>
            </div>

            {/* Educational Disclaimer Banner */}
            <div className="p-4 bg-[#FAF8F2] rounded-xl border-l-4 border-l-[#8C6D37] border border-[#123C2E]/10 flex items-start gap-3 shadow-2xs">
              <ShieldAlert className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#171717]/75 leading-relaxed">
                <span className="font-semibold text-[#0B281F]">Responsible Disclaimer:</span> This guide does not claim that every business has guaranteed or identical financial results. All figures are illustrative models for evaluation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
