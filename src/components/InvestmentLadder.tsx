import React, { useState } from 'react';
import { INVESTMENT_BANDS, ALL_OPPORTUNITIES } from '../data/blueprintData';
import { AlertCircle, ChevronRight, CheckCircle2, TrendingUp, Compass } from 'lucide-react';

export const InvestmentLadder: React.FC = () => {
  const [selectedBandId, setSelectedBandId] = useState<string>('low');

  const selectedBand = INVESTMENT_BANDS.find((b) => b.id === selectedBandId) || INVESTMENT_BANDS[0];
  const matchingOpportunities = ALL_OPPORTUNITIES.filter(
    (o) => o.capitalBand.toLowerCase() === selectedBand.level.toLowerCase()
  );

  return (
    <section id="capital-ladder" className="py-20 md:py-28 bg-[#F7F3E9] border-b border-[#123C2E]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            Capital-Planning Hierarchy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal mb-5">
            Explore Opportunities Across Different Capital Levels
          </h2>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            Not every business requires the same level of investment. The Blueprint explains broad capital-planning bands and helps readers distinguish between a low-capital entry route and a full-scale business setup.
          </p>
        </div>

        {/* Horizontal Investment Ladder Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {INVESTMENT_BANDS.map((band) => {
            const isActive = band.id === selectedBandId;
            return (
              <button
                key={band.id}
                onClick={() => setSelectedBandId(band.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#123C2E] text-[#FAF8F2] border-[#B89B63] shadow-md -translate-y-0.5'
                    : 'bg-[#FAF8F2] text-[#171717] border-[#123C2E]/15 hover:border-[#123C2E]/40'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase block mb-1 font-bold ${
                      isActive ? 'text-[#B89B63]' : 'text-[#8C6D37]'
                    }`}
                  >
                    BAND: {band.level}
                  </span>
                  <div
                    className={`text-sm sm:text-base font-bold font-serif leading-tight ${
                      isActive ? 'text-[#FAF8F2]' : 'text-[#0B281F]'
                    }`}
                  >
                    {band.range}
                  </div>
                </div>
                <div
                  className={`text-[11px] mt-3 pt-2 border-t flex items-center justify-between ${
                    isActive
                      ? 'border-[#FAF8F2]/15 text-[#FAF8F2]/70'
                      : 'border-[#123C2E]/10 text-[#171717]/60'
                  }`}
                >
                  <span>Select band</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#B89B63]' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Band Detailed Breakdown Card */}
        <div className="bg-[#FAF8F2] p-6 sm:p-10 rounded-2xl border border-[#123C2E]/15 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#123C2E]/12 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-[#8C6D37] tracking-wider uppercase">
                  Level: {selectedBand.level}
                </span>
                <span className="text-xs text-[#123C2E]/30">|</span>
                <span className="text-sm font-semibold text-[#123C2E]">
                  Planning Range: {selectedBand.range}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B281F]">
                {selectedBand.title}
              </h3>
            </div>

            <div className="bg-[#F7F3E9] px-4 py-2.5 rounded-xl border border-[#123C2E]/10 text-xs text-[#171717]/80">
              <span className="font-semibold text-[#0B281F] block text-[10px] uppercase tracking-wider mb-0.5">
                Ideal Profile:
              </span>
              <span>{selectedBand.idealFor}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B281F] mb-1.5">
                  Capital Planning Perspective
                </h4>
                <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
                  {selectedBand.description}
                </p>
              </div>

              <div className="p-3.5 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10">
                <span className="text-[11px] font-semibold text-[#8C6D37] block uppercase tracking-wide mb-1">
                  Risk & Runway Reality:
                </span>
                <p className="text-xs text-[#171717]/80">{selectedBand.riskProfile}</p>
                <div className="mt-2 text-[11px] text-[#123C2E] font-medium">
                  Typical gestation: {selectedBand.typicalTimeline}
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B281F] mb-3">
                Selected Opportunities in This Capital Band
              </h4>
              <div className="space-y-2">
                {selectedBand.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10 flex items-center justify-between text-xs text-[#0B281F] font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E] shrink-0" />
                      {ex}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C6D37]">In Blueprint</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Important Statutory & Planning Note */}
        <div className="p-5 bg-[#FAF8F2] rounded-xl border-l-4 border-l-[#123C2E] border border-[#123C2E]/15 flex items-start gap-4 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#123C2E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed">
            <span className="font-bold text-[#0B281F] block mb-1">Important Capital Planning Note:</span>
            "These are broad indicative planning ranges, not guaranteed project costs. Actual investment depends on location, equipment, land, licenses, working capital, financing and project scale. Verify current vendor quotations before investing."
          </div>
        </div>

      </div>
    </section>
  );
};
