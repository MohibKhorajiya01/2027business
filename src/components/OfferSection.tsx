import React from 'react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';
import { productImages } from '../assets/images';
import { ArrowRight, ShieldCheck, Check, Sparkles, FileText, Download } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const handlePurchase = () => {
    trackInitiateCheckout('Major Offer Section CTA');
  };

  return (
    <section className="py-20 md:py-28 bg-[#123C2E] text-[#FAF8F2] relative overflow-hidden border-b border-[#B89B63]/30">
      {/* Background Architectural Subtle Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#FAF8F2_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#0B281F] rounded-3xl border border-[#B89B63]/40 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Book Mockup Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#B89B63]/20 via-transparent to-[#FAF8F2]/10 rounded-2xl blur-lg"></div>
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#B89B63]/50 shadow-2xl bg-[#0B281F]">
                  <img
                    src={productImages.bookHandHeld}
                    alt="Authentic 2027 Business Opportunity Blueprint held in sunlit hand"
                    width={1086}
                    height={1448}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block select-none"
                  />
                  
                  <div className="p-3 bg-[#0B281F]/90 border-t border-[#B89B63]/30 flex items-center justify-between text-xs">
                    <span className="font-mono text-[#B89B63] text-[11px] font-bold">75 OPPORTUNITIES</span>
                    <span className="text-[#FAF8F2]/80 text-[11px]">INSTANT DIGITAL PDF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Offer Breakdown & Purchase Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B89B63] uppercase mb-3">
                <span>DIGITAL PDF</span>
                <span>·</span>
                <span>INSTANT ACCESS</span>
                <span>·</span>
                <span>INDIA FOCUS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif leading-[1.15] text-[#FAF8F2] font-normal mb-5">
                Your Next Business Opportunity Starts with Better Research.
              </h2>

              <p className="text-sm sm:text-base text-[#FAF8F2]/80 leading-relaxed mb-6">
                Get full immediate access to the 2027 Business Opportunity Blueprint. Compare 75 structured business models across emerging sectors, examine realistic capital requirements, review revenue models, and utilize 13 decision worksheets.
              </p>

              {/* What's Included Bullets */}
              <div className="space-y-2.5 mb-8 w-full">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF8F2]/90">
                  <Check className="w-4 h-4 text-[#B89B63] shrink-0" />
                  <span><strong>75 Full Chapter Opportunity Breakdowns</strong> with unit economics & risks</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF8F2]/90">
                  <Check className="w-4 h-4 text-[#B89B63] shrink-0" />
                  <span><strong>5 Capital Bands</strong> ranging from low-capital ₹50,000 to ₹10 Crore+ infrastructure</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF8F2]/90">
                  <Check className="w-4 h-4 text-[#B89B63] shrink-0" />
                  <span><strong>13 Decision Frameworks & Worksheets</strong> including Break-Even & 30-Day Action Plan</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF8F2]/90">
                  <Check className="w-4 h-4 text-[#B89B63] shrink-0" />
                  <span><strong>Instant Digital PDF Access</strong> readable on mobile, tablet, or desktop</span>
                </div>
              </div>

              {/* Price & Primary CTA */}
              <div className="w-full bg-[#123C2E]/60 p-6 rounded-2xl border border-[#B89B63]/30 mb-5">
                <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#FAF8F2]/10">
                  <div>
                    <span className="text-[11px] text-[#B89B63] uppercase tracking-wider block font-bold">
                      Special Launch Price
                    </span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-sm text-[#FAF8F2]/60 line-through decoration-[#FAF8F2]/80 font-medium">
                        ₹{PRICE_ORIGINAL.toLocaleString('en-IN')}
                      </span>
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF8F2]">
                        ₹{PRICE_CURRENT}
                      </span>
                      <span className="text-xs bg-[#B89B63] text-[#0B281F] font-bold px-2.5 py-0.5 rounded-md">
                        87% OFF
                      </span>
                    </div>
                  </div>

                  <div className="text-right text-[11px] text-[#FAF8F2]/70">
                    <span className="block font-semibold text-[#FAF8F2]">One-time payment</span>
                    <span>No hidden fees or subscriptions</span>
                  </div>
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePurchase}
                  className="w-full py-3.5 px-6 bg-[#B89B63] hover:bg-[#c9aa6e] text-[#0B281F] text-base font-bold rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all duration-200 group"
                >
                  <span>BUY NOW — ₹149</span>
                  <ArrowRight className="w-5 h-5 text-[#0B281F] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Secure Delivery Statement */}
              <p className="text-xs text-[#FAF8F2]/65 leading-relaxed">
                Make your purchase through our secure SuperProfile checkout. Your digital product will be delivered according to the checkout's delivery process after successful payment.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
