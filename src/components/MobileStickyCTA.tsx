import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';
import { productImages } from '../assets/images';
import { ArrowUpRight, Zap } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F2]/95 backdrop-blur-md border-t border-[#123C2E]/20 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        {/* Book thumbnail + Pricing */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-11 rounded-lg overflow-hidden border border-[#123C2E]/20 shrink-0 bg-[#0B281F]">
            <img
              src={productImages.bookIndiaFocus}
              alt="2027 Blueprint"
              width={36}
              height={44}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] text-[#171717]/60 line-through decoration-[#171717]/80 font-medium">
                ₹{PRICE_ORIGINAL}
              </span>
              <span className="text-base font-bold text-[#123C2E]">
                ₹{PRICE_CURRENT}
              </span>
            </div>
            <span className="text-[10px] text-[#8C6D37] font-semibold tracking-tight">
              75 Opportunities PDF
            </span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout('Mobile Sticky Bottom Bar')}
          className="flex-1 max-w-[190px] py-2.5 px-3 bg-[#123C2E] hover:bg-[#0B281F] text-[#FAF8F2] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md border border-[#B89B63]/40"
        >
          <span>BUY NOW — ₹149</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B89B63]" />
        </a>
      </div>
    </div>
  );
};
