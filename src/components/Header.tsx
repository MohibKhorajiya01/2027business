import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';
import { ArrowUpRight, Menu, X, BookOpen, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenPolicies?: (policy: 'terms' | 'refund' | 'privacy' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPolicies }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePurchaseClick = (location: string) => {
    trackInitiateCheckout(location);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#123C2E]/10 py-3 shadow-xs'
          : 'bg-[#F7F3E9] py-4 md:py-5 border-b border-[#123C2E]/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-9 bg-[#123C2E] rounded-md flex items-center justify-center text-[#B89B63] font-serif font-bold text-sm shadow-xs border border-[#B89B63]/40 group-hover:border-[#B89B63] transition-colors">
            27
          </div>
          <div className="flex flex-col">
            <span className="font-brand text-xs sm:text-sm font-semibold tracking-wider text-[#0B281F] uppercase">
              Business Opportunity
            </span>
            <span className="text-[10px] sm:text-xs text-[#8C6D37] tracking-widest uppercase font-medium">
              2027 Blueprint · India Edition
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#171717]/80">
          <a
            href="#inside"
            className="hover:text-[#123C2E] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#123C2E] after:transition-all"
          >
            75 Opportunities
          </a>
          <a
            href="#framework"
            className="hover:text-[#123C2E] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#123C2E] after:transition-all"
          >
            What You Learn
          </a>
          <a
            href="#capital-ladder"
            className="hover:text-[#123C2E] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#123C2E] after:transition-all"
          >
            Capital Bands
          </a>
          <a
            href="#worksheets"
            className="hover:text-[#123C2E] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#123C2E] after:transition-all"
          >
            Decision Worksheets
          </a>
          <a
            href="#faq"
            className="hover:text-[#123C2E] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#123C2E] after:transition-all"
          >
            FAQ
          </a>
        </nav>

        {/* CTA & Pricing Area */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex flex-col items-end text-right">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#171717]/60 line-through decoration-[#171717]/80 font-medium">₹{PRICE_ORIGINAL.toLocaleString('en-IN')}</span>
              <span className="text-sm font-bold text-[#123C2E]">₹{PRICE_CURRENT}</span>
            </div>
            <span className="text-[10px] text-[#8C6D37] font-medium tracking-tight">Instant Digital PDF</span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handlePurchaseClick('Header Nav Button')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#123C2E] hover:bg-[#0B281F] text-[#FAF8F2] text-xs sm:text-sm font-bold rounded-lg shadow-xs hover:shadow-md transition-all duration-200 border border-[#B89B63]/30"
          >
            <span>Buy Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89B63]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0B281F] hover:bg-[#123C2E]/10 rounded-lg transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F2] border-b border-[#123C2E]/15 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#171717]">
            <a
              href="#inside"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#123C2E]/10 flex items-center justify-between"
            >
              <span>75 Business Opportunities</span>
              <span className="text-xs text-[#8C6D37]">6 Sectors</span>
            </a>
            <a
              href="#framework"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#123C2E]/10"
            >
              What You Will Learn
            </a>
            <a
              href="#capital-ladder"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#123C2E]/10 flex items-center justify-between"
            >
              <span>Investment Capital Bands</span>
              <span className="text-xs text-[#123C2E]">₹50K to ₹10Cr+</span>
            </a>
            <a
              href="#worksheets"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#123C2E]/10"
            >
              13 Decision Worksheets
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#123C2E]/10"
            >
              Frequently Asked Questions
            </a>

            <div className="pt-3 flex flex-col gap-3">
              <div className="flex items-center justify-between bg-[#123C2E]/5 p-3 rounded-lg border border-[#123C2E]/10">
                <span className="text-xs text-[#171717]/70">Launch Price</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs line-through decoration-[#171717]/80 text-[#171717]/60 font-medium">₹{PRICE_ORIGINAL}</span>
                  <span className="text-base font-bold text-[#123C2E]">₹{PRICE_CURRENT}</span>
                </div>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handlePurchaseClick('Mobile Header Drawer Button');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 bg-[#123C2E] text-[#FAF8F2] font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md"
              >
                <span>BUY NOW — ₹149</span>
                <ArrowUpRight className="w-4 h-4 text-[#B89B63]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
