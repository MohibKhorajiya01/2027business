import React from 'react';
import { PRACTICAL_FRAMEWORKS } from '../data/blueprintData';
import { productImages } from '../assets/images';
import { FileSpreadsheet, CheckSquare, Calculator, Compass } from 'lucide-react';

interface FrameworksSectionProps {
  onOpenScorecard?: () => void;
}

export const FrameworksSection: React.FC<FrameworksSectionProps> = ({ onOpenScorecard }) => {
  return (
    <section id="worksheets" className="py-20 md:py-28 bg-[#FAF8F2] border-b border-[#123C2E]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            Practical Toolkits & Checklists
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal mb-5">
            Plan Before You Invest
          </h2>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            Beyond individual business chapters, the Blueprint provides practical operational frameworks, due diligence checklists, and decision models to pressure-test any opportunity before committing capital.
          </p>
        </div>

        {/* Two-Column Grid: Worksheets List & Book Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* Left Column: Visual Preview of Original Blueprint */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#F7F3E9] p-6 rounded-2xl border border-[#123C2E]/15 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase text-[#8C6D37] font-bold">
                  Strategic Horizon 2027
                </span>
                <span className="text-xs text-[#123C2E] font-medium">Original Edition Mockup</span>
              </div>

              <div
                onClick={onOpenScorecard}
                className="relative rounded-xl overflow-hidden border border-[#123C2E]/20 shadow-md cursor-pointer bg-[#FAF8F2]"
              >
                <img
                  src={productImages.bookSkyward}
                  alt="2027 Business Opportunity Blueprint held skyward representing growth and expansion"
                  width={1086}
                  height={1448}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain block select-none"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-[#123C2E]/10 text-center">
                <p className="text-xs text-[#171717]/70 italic font-serif">
                  "Market Samjho · Investment Samjho · Opportunity Pakdo"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 13 Practical Frameworks List */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PRACTICAL_FRAMEWORKS.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10 hover:border-[#123C2E]/30 transition-colors flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#8C6D37] mb-1">
                      <span>0{idx + 1}</span>
                      <span className="font-semibold text-[#123C2E]">{tool.badge}</span>
                    </div>
                    <h4 className="text-xs font-bold text-[#0B281F] mb-1">
                      {tool.title}
                    </h4>
                    <p className="text-[11px] text-[#171717]/70 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-2 text-[10px] text-[#8C6D37] font-medium">
                    {tool.pageRef}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
