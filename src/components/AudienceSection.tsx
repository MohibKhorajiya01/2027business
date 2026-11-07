import React from 'react';
import { AUDIENCE_CARDS } from '../data/blueprintData';
import { UserCheck, Briefcase, GraduationCap, Building, Globe, Laptop } from 'lucide-react';

const audienceIcons: Record<string, React.ElementType> = {
  "01": Briefcase,
  "02": GraduationCap,
  "03": Building,
  "04": Globe,
  "05": Laptop
};

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F2] border-b border-[#123C2E]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
            Target Audience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal mb-5">
            Built for People Exploring Their Next Business Opportunity
          </h2>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            Whether you are researching your first business or exploring a new industry, this guide helps you organize your research and shortlist opportunities.
          </p>
        </div>

        {/* 5 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AUDIENCE_CARDS.map((aud, idx) => {
            const Icon = audienceIcons[aud.number] || UserCheck;
            const isFullSpan = idx === 4;

            return (
              <div
                key={aud.id}
                className={`p-7 bg-[#F7F3E9] rounded-2xl border border-[#123C2E]/12 hover:border-[#123C2E]/35 transition-all duration-200 flex flex-col justify-between shadow-2xs ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#8C6D37]">
                      PROMPT 0{idx + 1}
                    </span>
                    <Icon className="w-5 h-5 text-[#123C2E]/70" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0B281F] mb-1">
                    {aud.role}
                  </h3>
                  <p className="text-xs text-[#8C6D37] font-semibold tracking-tight mb-3">
                    {aud.headline}
                  </p>
                  <p className="text-xs text-[#171717]/75 leading-relaxed">
                    {aud.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#123C2E]/10 text-[11px] text-[#123C2E] font-medium">
                  Includes tailored capital bands & scorecards
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="max-w-3xl mx-auto p-5 bg-[#F7F3E9] border border-[#123C2E]/15 rounded-2xl text-center shadow-2xs">
          <p className="text-xs sm:text-sm text-[#0B281F] font-serif italic">
            "Whether you have ₹50,000 in personal savings or ₹50 lakh in capital reserves, the Blueprint helps you match your resource constraints with realistic commercial business models."
          </p>
        </div>

      </div>
    </section>
  );
};
