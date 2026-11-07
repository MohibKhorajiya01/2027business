import React from 'react';
import { Layers, HelpCircle, AlertCircle, Compass, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F2] border-b border-[#123C2E]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            The Research Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.2] text-[#0B281F] font-normal mb-5">
            Finding a Business Idea Is Easy. <br />
            <span className="italic">Choosing the Right Opportunity Is Hard.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            Random business ideas are everywhere. But understanding the investment, market, setup requirements, revenue model and risks behind an opportunity is what helps you evaluate it properly.
          </p>
        </div>

        {/* 3 Problem Points with Clean Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Problem 01 */}
          <div className="bg-[#F7F3E9] p-7 sm:p-8 rounded-2xl border border-[#123C2E]/10 flex flex-col justify-between hover:border-[#123C2E]/30 transition-all duration-200 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-light text-[#8C6D37]">
                  01
                </span>
                <Layers className="w-5 h-5 text-[#123C2E]/60" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#0B281F] mb-3">
                Too Many Ideas
              </h3>
              <p className="text-sm text-[#171717]/75 leading-relaxed">
                Finding hundreds of ideas online without a structured way to compare them. You end up with bookmarked YouTube videos, scattered articles, and analysis paralysis.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#123C2E]/10 text-xs font-medium text-[#123C2E]">
              Missing: Consistent comparison metrics
            </div>
          </div>

          {/* Problem 02 */}
          <div className="bg-[#F7F3E9] p-7 sm:p-8 rounded-2xl border border-[#123C2E]/10 flex flex-col justify-between hover:border-[#123C2E]/30 transition-all duration-200 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-light text-[#8C6D37]">
                  02
                </span>
                <HelpCircle className="w-5 h-5 text-[#123C2E]/60" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#0B281F] mb-3">
                Unclear Investment
              </h3>
              <p className="text-sm text-[#171717]/75 leading-relaxed">
                Not knowing the difference between a low-capital entry route and a full-scale business setup. Most guides blur whether you need ₹50,000 or ₹50 lakh to get off the ground.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#123C2E]/10 text-xs font-medium text-[#123C2E]">
              Missing: Real capex vs opex planning
            </div>
          </div>

          {/* Problem 03 */}
          <div className="bg-[#F7F3E9] p-7 sm:p-8 rounded-2xl border border-[#123C2E]/10 flex flex-col justify-between hover:border-[#123C2E]/30 transition-all duration-200 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-light text-[#8C6D37]">
                  03
                </span>
                <AlertCircle className="w-5 h-5 text-[#123C2E]/60" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#0B281F] mb-3">
                Missing Business Clarity
              </h3>
              <p className="text-sm text-[#171717]/75 leading-relaxed">
                Not understanding customers, revenue models, operating costs, risks and first steps. Surface-level advice rarely explains how cash actually moves through the business.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#123C2E]/10 text-xs font-medium text-[#123C2E]">
              Missing: 90-day operational roadmap
            </div>
          </div>

        </div>

        {/* Transition Statement Banner */}
        <div className="max-w-4xl mx-auto bg-[#123C2E] text-[#FAF8F2] p-8 md:p-10 rounded-2xl border border-[#B89B63]/40 shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B63]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <span className="text-[11px] font-semibold tracking-widest text-[#B89B63] uppercase block mb-3">
            The Purpose of This Research Guide
          </span>
          <p className="text-lg sm:text-xl md:text-2xl font-serif leading-snug mb-6 text-[#FAF8F2]">
            "That's exactly why the 2027 Business Opportunity Blueprint brings 75 opportunities together in one structured guide."
          </p>

          <a
            href="#inside"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FAF8F2] hover:text-[#B89B63] transition-colors border-b border-[#B89B63] pb-1"
          >
            <span>Explore the 6 major industry sectors covered</span>
            <ArrowRight className="w-4 h-4 text-[#B89B63]" />
          </a>
        </div>

      </div>
    </section>
  );
};
