import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Mail } from 'lucide-react';

export type PolicyType = 'terms' | 'refund' | 'privacy' | 'about' | 'support' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B281F]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF8F2] max-w-2xl w-full p-6 sm:p-8 rounded-2xl border border-[#123C2E]/20 shadow-2xl relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200 text-[#171717]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#171717]/50 hover:text-[#0B281F] rounded-full transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D37] mb-2 uppercase">
              <FileText className="w-4 h-4 text-[#123C2E]" />
              <span>Legal Documentation</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0B281F] mb-4">
              Terms & Conditions
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              <p>
                <strong>1. Product Delivery:</strong> The "2027 Business Opportunity Blueprint" is an informational digital research guide delivered in downloadable PDF format immediately following confirmed payment on SuperProfile.
              </p>
              <p>
                <strong>2. Informational Purpose:</strong> The contents, case studies, financial models, and indicative ranges contained in the Blueprint are for educational and exploratory market research purposes only. Nothing in this document constitutes legal, tax, or investment advice.
              </p>
              <p>
                <strong>3. Intellectual Property:</strong> All text, tables, frameworks, and editorial compilations are protected by intellectual property laws. Redistribution, resale, or unauthorized public sharing of the digital document is strictly prohibited.
              </p>
              <p>
                <strong>4. Independent Verification:</strong> Prospective entrepreneurs are advised to verify statutory requirements, local zoning, and vendor pricing through licensed professionals before executing capital commitments.
              </p>
            </div>
          </div>
        )}

        {type === 'refund' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D37] mb-2 uppercase">
              <RefreshCw className="w-4 h-4 text-[#123C2E]" />
              <span>Purchase Policies</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0B281F] mb-4">
              Digital Product Delivery & Refund Policy
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              <p>
                <strong>Instant Digital Delivery:</strong> Due to the immediate delivery nature of downloadable digital files (PDF format), all sales are processed securely via SuperProfile.
              </p>
              <p>
                <strong>Delivery Confirmation:</strong> Upon successful checkout completion, SuperProfile grants immediate access to your downloadable file and sends a copy to the email address provided during checkout.
              </p>
              <p>
                <strong>Support & Inquiries:</strong> If you experience any technical download difficulty or file access issues, please contact our support desk directly at <strong className="text-[#123C2E]">hello.fenmark@gmail.com</strong> with your SuperProfile payment reference ID.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D37] mb-2 uppercase">
              <ShieldCheck className="w-4 h-4 text-[#123C2E]" />
              <span>Data Protection</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0B281F] mb-4">
              Privacy Policy
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              <p>
                <strong>Data Minimization:</strong> This website does not directly store your credit card or banking details. All transaction information is processed securely through SuperProfile's payment infrastructure.
              </p>
              <p>
                <strong>Analytics:</strong> Standard privacy-compliant analytics (such as page view counts and referrers) are collected to improve site usability and user experience.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> We do not sell, rent, or lease customer contact information to third parties.
              </p>
            </div>
          </div>
        )}

        {type === 'about' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D37] mb-2 uppercase">
              <FileText className="w-4 h-4 text-[#123C2E]" />
              <span>About the Publication</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0B281F] mb-4">
              About the 2027 Business Opportunity Blueprint
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              <p>
                The <strong>2027 Business Opportunity Blueprint</strong> is a dedicated business intelligence publication curating 75 forward-looking commercial opportunities across India's emerging economic landscape.
              </p>
              <p>
                Focused on energy transition, land logistics, modern agriculture, global export channels, micro-software, and precision industrial sectors, the publication helps aspiring founders and expanding business owners filter opportunities systematically using consistent capital bands, operational scorecards, and revenue frameworks.
              </p>
            </div>
          </div>
        )}

        {type === 'support' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D37] mb-2 uppercase">
              <Mail className="w-4 h-4 text-[#123C2E]" />
              <span>Customer Assistance</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0B281F] mb-4">
              Contact & Order Support
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              <p>
                Need assistance with your digital order or have questions about the Blueprint?
              </p>
              <div className="p-4 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#0B281F] font-semibold">
                  <Mail className="w-4 h-4 text-[#123C2E]" />
                  <span>Email Support: hello.fenmark@gmail.com</span>
                </div>
                <p className="text-xs text-[#171717]/70">
                  Please quote your order or transaction ID for priority assistance.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#123C2E]/10 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#123C2E] text-[#FAF8F2] text-xs font-semibold rounded-xl hover:bg-[#0B281F] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
