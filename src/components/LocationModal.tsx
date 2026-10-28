import React from 'react';
import { X, MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#1B120F] text-[#F6F0E6] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#C6A16B]/40 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#2B1D18] border-b border-[#C6A16B]/25 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C6A16B] block">
              DIRECTIONS & VISITING
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#F6F0E6]">Find {CAFE_CONFIG.brandName}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#EDE2D0] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#C6A16B]/15 border border-[#C6A16B]/30 text-[#C6A16B] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-[#F6F0E6] mb-0.5">Address</strong>
              <p className="text-xs text-[#EDE2D0]/80 leading-relaxed">
                {CAFE_CONFIG.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#C6A16B]/15 border border-[#C6A16B]/30 text-[#C6A16B] shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-[#F6F0E6] mb-0.5">Hours</strong>
              <p className="text-xs text-[#EDE2D0]/80 leading-relaxed">
                {CAFE_CONFIG.timings.days}: {CAFE_CONFIG.timings.hours}<br />
                Kitchen service closes at {CAFE_CONFIG.timings.kitchenCloses}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#C6A16B]/15 border border-[#C6A16B]/30 text-[#C6A16B] shrink-0 mt-0.5">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-[#F6F0E6] mb-0.5">Call Café Directly</strong>
              <p className="text-xs text-[#EDE2D0]/80">
                {CAFE_CONFIG.phone} (Counter & Reservation Desk)
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={CAFE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#C6A16B] hover:bg-[#b58f57] text-[#1B120F] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Navigate on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-xs text-[#EDE2D0]/70 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
