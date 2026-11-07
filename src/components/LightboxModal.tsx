import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/blueprintData';
import { trackInitiateCheckout } from '../utils/analytics';

export interface ModalImage {
  image: string;
  title: string;
  subtitle: string;
  tag?: string;
}

interface LightboxModalProps {
  item: ModalImage | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B281F]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 bg-[#FAF8F2]/10 hover:bg-[#FAF8F2]/20 text-[#FAF8F2] rounded-full transition-colors cursor-pointer"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-[#FAF8F2]/10 hover:bg-[#FAF8F2]/20 text-[#FAF8F2] rounded-full transition-colors items-center justify-center cursor-pointer"
          aria-label="Previous image"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-[#FAF8F2]/10 hover:bg-[#FAF8F2]/20 text-[#FAF8F2] rounded-full transition-colors items-center justify-center cursor-pointer"
          aria-label="Next image"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Box */}
      <div className="max-w-4xl w-full bg-[#FAF8F2] rounded-2xl overflow-hidden shadow-2xl border border-[#B89B63]/40 flex flex-col max-h-[92vh]">
        <div className="relative overflow-hidden bg-[#0B281F] flex items-center justify-center flex-1 min-h-[300px] max-h-[70vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-4 sm:p-5 bg-[#FAF8F2] border-t border-[#123C2E]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase bg-[#123C2E]/10 text-[#123C2E] px-2.5 py-1 rounded-md font-bold">
                {item.tag}
              </span>
              <span className="text-xs text-[#8C6D37] font-semibold">
                2027 Business Opportunity Blueprint
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B281F]">
              {item.title}
            </h3>
            <p className="text-xs text-[#171717]/70 mt-0.5">
              {item.subtitle}
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout('Lightbox Modal CTA')}
            className="px-5 py-2.5 bg-[#123C2E] hover:bg-[#0B281F] text-[#FAF8F2] text-xs font-bold rounded-xl transition-colors shrink-0 text-center shadow-xs"
          >
            BUY NOW — ₹149
          </a>
        </div>
      </div>

    </div>
  );
};
