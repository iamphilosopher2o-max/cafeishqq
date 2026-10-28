import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

interface HeroProps {
  onExploreMenu: () => void;
  onFindCafe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onFindCafe }) => {
  return (
    <section id="home" className="relative min-h-[94vh] flex items-center justify-center bg-[#1B120F] overflow-hidden pt-20">
      {/* Background Wide Café Photograph with Measured Scrim for WCAG AA readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_cafeishqq_interior_1792994244346.jpg"
          alt="Cafeishqq Café warm interior atmosphere in Kanpur"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.04] scale-101"
        />
        {/* Measured Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120F] via-[#1B120F]/65 to-[#1B120F]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(27,18,15,0.7)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B120F]/75 border border-[#C6A16B]/40 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#F6F0E6]">
            YOUR COZY CORNER IN {CAFE_CONFIG.city.toUpperCase()}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#F6F0E6] tracking-tight leading-[1.12] mb-6 drop-shadow-md text-balance">
          A Little Escape<br />
          <span className="text-[#C6A16B] italic font-normal">From the Everyday.</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#EDE2D0]/95 leading-relaxed mb-8 drop-shadow font-normal text-balance">
          Good food, comforting coffee, and moments worth slowing down for.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1B120F] bg-[#C6A16B] hover:bg-[#b58f57] active:scale-95 rounded-md transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Our Menu</span>
            <ArrowDown className="w-4 h-4 text-[#1B120F] group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onFindCafe}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F6F0E6] bg-[#2B1D18]/85 hover:bg-[#2B1D18] hover:text-[#C6A16B] border border-[#C6A16B]/40 active:scale-95 rounded-md backdrop-blur-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C6A16B]" />
            <span>Find Our Café</span>
          </button>
        </div>

        {/* Exact Tagline Display */}
        <div className="pt-4 border-t border-[#C6A16B]/20 max-w-xs mx-auto">
          <p className="font-serif italic text-[#C6A16B] text-lg tracking-wide">
            "{CAFE_CONFIG.tagline}"
          </p>
          <span className="text-[11px] uppercase tracking-widest text-[#EDE2D0]/60 mt-1 block">
            {CAFE_CONFIG.city}, {CAFE_CONFIG.state}
          </span>
        </div>
      </div>
    </section>
  );
};
