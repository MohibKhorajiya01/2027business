import React from 'react';
import { CHECKOUT_URL, PRICE_CURRENT } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';
import { PolicyType } from './PolicyModal';
import { ArrowUpRight, Mail, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-[#0B281F] text-[#FAF8F2] pt-16 pb-24 md:pb-16 border-t border-[#B89B63]/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F2]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-10 bg-[#123C2E] rounded-md flex items-center justify-center text-[#B89B63] font-serif font-bold text-sm border border-[#B89B63]/50">
                27
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-sm font-semibold tracking-wider text-[#FAF8F2] uppercase">
                  Business Opportunity Blueprint
                </span>
                <span className="text-[10px] text-[#B89B63] tracking-widest uppercase font-mono">
                  2027 Edition · India Focus
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FAF8F2]/70 leading-relaxed max-w-sm mb-4">
              A structured business research publication detailing 75 commercial opportunities across emerging Indian sectors with standardized investment planning ranges, operational setups, and risk scorecards.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#B89B63]">
              <Mail className="w-3.5 h-3.5" />
              <span>Support: hello.fenmark@gmail.com</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B89B63] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F2]/80">
              <li>
                <a href="#inside" className="hover:text-[#B89B63] transition-colors">
                  75 Opportunities Directory
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-[#B89B63] transition-colors">
                  What You Will Learn
                </a>
              </li>
              <li>
                <a href="#capital-ladder" className="hover:text-[#B89B63] transition-colors">
                  Capital Planning Bands
                </a>
              </li>
              <li>
                <a href="#worksheets" className="hover:text-[#B89B63] transition-colors">
                  13 Decision Worksheets
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B89B63] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Policies & Institutional Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B89B63] mb-4">
              Policies & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F2]/80 mb-6">
              <li>
                <button
                  onClick={() => onOpenPolicy('about')}
                  className="hover:text-[#B89B63] transition-colors text-left"
                >
                  About the Product
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#B89B63] transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('refund')}
                  className="hover:text-[#B89B63] transition-colors text-left"
                >
                  Refund Policy & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#B89B63] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('support')}
                  className="hover:text-[#B89B63] transition-colors text-left"
                >
                  Contact / Support
                </button>
              </li>
            </ul>

            {/* Direct Checkout Quick Button */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('Footer Instant Checkout')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#123C2E] hover:bg-[#184f3c] text-xs font-semibold text-[#FAF8F2] rounded-xl border border-[#B89B63]/40 transition-colors shadow-xs"
            >
              <span>Instant Checkout via SuperProfile (₹{PRICE_CURRENT})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B89B63]" />
            </a>
          </div>

        </div>

        {/* Mandatory Educational & Financial Disclaimer */}
        <div className="pt-8 pb-6 border-b border-[#FAF8F2]/10">
          <div className="flex items-start gap-3 bg-[#123C2E]/40 p-4 rounded-xl border border-[#B89B63]/20">
            <ShieldAlert className="w-4 h-4 text-[#B89B63] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#FAF8F2]/75 leading-relaxed">
              <strong>Mandatory Disclaimer:</strong> This Blueprint is intended for educational and informational purposes only. Investment ranges and financial examples are indicative and should not be treated as guaranteed costs, returns or profits. Actual results depend on market conditions, execution, location, capital, competition and other factors. Verify relevant information and obtain professional advice before making business or investment decisions.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF8F2]/50 gap-3">
          <div>
            © {new Date().getFullYear()} 2027 Business Opportunity Blueprint. All rights reserved.
          </div>
          <div>
            Official Checkout Partner: SuperProfile
          </div>
        </div>

      </div>
    </footer>
  );
};
