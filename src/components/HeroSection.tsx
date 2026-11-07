import React from 'react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';
import { productImages } from '../assets/images';
import { ArrowRight, ShieldCheck, CheckCircle2, Eye, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenPreview?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPreview }) => {
  const handlePurchase = (loc: string) => {
    trackInitiateCheckout(loc);
  };

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-20 md:pb-24 bg-[#F7F3E9] border-b border-[#123C2E]/10 overflow-hidden">
      
      {/* Subtle Background Glow & Grid Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#123C2E]/5 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Tagline */}
        <div className="text-center mb-3.5 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#123C2E]/5 border border-[#123C2E]/15 text-[#123C2E] text-[11px] sm:text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#123C2E] animate-pulse"></span>
            <span>2027 EDITION · INDIA FOCUS · 75 OPPORTUNITIES</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
          
          {/* Left Side: Headline & Direct Conversion Card */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.14] text-[#0B281F] font-normal tracking-tight mb-4">
              75 Business Opportunities. <br />
              <span className="italic font-normal text-[#123C2E]">One Blueprint</span> to Explore Your Next Move.
            </h1>

            <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed max-w-lg mb-6">
              Explore 75 future-focused business opportunities across emerging industries in India. Understand capital bands, setup requirements, revenue models, and operational risks in one practical guide.
            </p>

            {/* Concise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-[#0B281F] font-medium mb-6 w-full max-w-lg">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-[#FAF8F2] p-2.5 rounded-lg border border-[#123C2E]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E] shrink-0" />
                <span>75 Opportunities</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-[#FAF8F2] p-2.5 rounded-lg border border-[#123C2E]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E] shrink-0" />
                <span>India Market Focus</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-[#FAF8F2] p-2.5 rounded-lg border border-[#123C2E]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C2E] shrink-0" />
                <span>Setup & Revenue</span>
              </div>
            </div>

            {/* Direct Purchase Card Block */}
            <div className="w-full max-w-lg bg-[#FAF8F2] p-5 sm:p-6 rounded-2xl border border-[#123C2E]/15 shadow-md">
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[#123C2E]/10">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#8C6D37] uppercase block">
                    Special Launch Price
                  </span>
                  <div className="flex items-baseline gap-2.5 mt-0.5">
                    <span className="text-xs sm:text-sm text-[#171717]/60 line-through decoration-[#171717]/80 decoration-1 font-medium">
                      ₹{PRICE_ORIGINAL.toLocaleString('en-IN')}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#123C2E] font-serif">
                      ₹{PRICE_CURRENT}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#123C2E] bg-[#123C2E]/10 px-2 py-0.5 rounded-md">
                      87% OFF
                    </span>
                  </div>
                </div>

                <div className="text-right text-[11px] text-[#171717]/60">
                  <span className="font-semibold text-[#0B281F] block">Digital PDF</span>
                  <span>Instant Access</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePurchase('Hero Main Card CTA')}
                  className="flex-1 py-3 px-5 bg-[#123C2E] hover:bg-[#0B281F] text-[#FAF8F2] text-sm sm:text-base font-bold text-center rounded-xl shadow-md hover:shadow-lg transition-colors duration-200 flex items-center justify-center gap-2 group border border-[#B89B63]/40"
                >
                  <span>BUY NOW — ₹149</span>
                  <ArrowRight className="w-4 h-4 text-[#B89B63] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#inside"
                  className="py-3 px-4 bg-transparent hover:bg-[#123C2E]/5 text-[#0B281F] text-xs sm:text-sm font-semibold text-center rounded-xl border border-[#123C2E]/25 transition-colors flex items-center justify-center"
                >
                  EXPLORE WHAT'S INSIDE
                </a>
              </div>

              {/* Delivery Reassurance */}
              <div className="mt-3.5 pt-3 border-t border-[#123C2E]/5 flex items-center justify-between text-[11px] text-[#171717]/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#123C2E]" />
                  Secure checkout via SuperProfile
                </span>
                <span>Immediate delivery after payment</span>
              </div>
            </div>

          </div>

          {/* Right Side: Prominent Hero Book Mockup Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* The Main Showcase Card - Balanced medium size for mobile (not too large, not too small) */}
            <div className="relative w-full max-w-[300px] xs:max-w-[315px] sm:max-w-md bg-[#FAF8F2] p-3.5 sm:p-5 rounded-2xl border-2 border-[#123C2E]/20 shadow-xl sm:shadow-2xl">
              
              {/* Badge */}
              <div className="absolute -top-3 left-5 sm:left-6 bg-[#123C2E] text-[#FAF8F2] py-0.5 px-2.5 sm:py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-[#B89B63]/60 shadow-md">
                75 OPPORTUNITIES
              </div>

              {/* Book Image - 100% Fully Visible Cover with Zero Cropping & No Shaking */}
              <div className="relative rounded-xl overflow-hidden bg-[#FAF8F2] flex items-center justify-center border border-[#123C2E]/15 shadow-sm">
                <img
                  src={productImages.bookIndiaFocus}
                  alt="2027 Business Opportunity Blueprint Official Cover with Investment Ladder"
                  width={1086}
                  height={1448}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-contain block select-none"
                />
              </div>

              {/* Card Bottom: Prominent Price in Proper Font & Clean Full View Button */}
              <div className="mt-3 sm:mt-3.5 p-2.5 sm:p-3 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-nowrap">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#8C6D37] uppercase whitespace-nowrap">
                      Launch Price
                    </span>
                    <span className="text-[9px] font-bold text-[#123C2E] bg-[#123C2E]/10 px-1.5 py-0.5 rounded whitespace-nowrap shrink-0">
                      87% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xs sm:text-sm text-[#171717]/60 line-through decoration-[#171717]/80 font-medium whitespace-nowrap">
                      ₹1,200
                    </span>
                    <span className="text-xl sm:text-2xl font-serif font-extrabold text-[#123C2E] whitespace-nowrap">
                      ₹149
                    </span>
                  </div>
                </div>

                {onOpenPreview && (
                  <button
                    onClick={onOpenPreview}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#123C2E] hover:underline cursor-pointer bg-white px-2 sm:px-2.5 py-1.5 rounded-lg border border-[#123C2E]/15 shadow-2xs hover:bg-[#FAF8F2] transition-colors shrink-0 whitespace-nowrap"
                    title="View High Resolution"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#123C2E]" />
                    <span>Full View</span>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile quick CTA - Clean BUY NOW without price */}
            <div className="mt-3 sm:hidden w-full max-w-[300px] xs:max-w-[315px]">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchase('Hero Mobile Quick CTA')}
                className="w-full py-2.5 px-4 bg-[#123C2E] hover:bg-[#0B281F] text-[#FAF8F2] text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all border border-[#B89B63]/40 tracking-wide"
              >
                <span>BUY NOW</span>
                <ArrowRight className="w-4 h-4 text-[#B89B63]" />
              </a>
              <p className="text-[10px] text-center text-[#171717]/65 mt-1 font-medium">
                Instant PDF Download · 75 Opportunities
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
