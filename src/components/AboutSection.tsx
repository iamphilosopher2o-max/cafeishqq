import React from 'react';
import { Coffee, Heart, Users } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

interface AboutSectionProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreMenu, onOpenReservation }) => {
  return (
    <section id="about" className="py-24 bg-[#1B120F] text-[#F6F0E6] relative overflow-hidden">
      {/* Decorative ambient subtle circle */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-[#C6A16B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Cozy Corner Seating) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C6A16B]/30 shadow-2xl group">
              <img
                src="/src/assets/images/cafe_cozy_ambiance_seating_1792994247689.jpg"
                alt="Cozy reading corner booth at Cafeishqq Café"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-cover filter brightness-[0.92] group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B120F]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#C6A16B] font-semibold block mb-1">
                  {CAFE_CONFIG.city.toUpperCase()}, {CAFE_CONFIG.state.toUpperCase()}
                </span>
                <p className="font-serif italic text-[#F6F0E6] text-lg">
                  "A sanctuary crafted for unhurried conversations and slow sips."
                </p>
              </div>
            </div>

            {/* Subtle vintage stamp */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#2B1D18] border border-[#C6A16B]/40 rounded-xl p-4 shadow-xl text-center">
              <p className="font-serif text-sm font-bold text-[#C6A16B]">Sip Slow.</p>
              <p className="font-serif italic text-xs text-[#EDE2D0]">Stay Awhile.</p>
            </div>
          </div>

          {/* Text & Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-3">
              OUR STORY & PHILOSOPHY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0E6] tracking-tight leading-tight mb-6">
              A Warm Sanctuary in the Heart of {CAFE_CONFIG.city}
            </h2>

            <p className="text-base text-[#EDE2D0]/90 leading-relaxed mb-6 font-normal">
              In a fast-paced world, we built <strong className="text-[#C6A16B] font-semibold">{CAFE_CONFIG.brandName}</strong> as a welcoming pause. Inspired by classic boutique cafés and warm hospitality, our space is designed for moments that matter.
            </p>

            <p className="text-sm text-[#EDE2D0]/75 leading-relaxed mb-8">
              Whether you are a university scholar diving into study sessions over an artisanal cappuccino, friends catching up over loaded burgers and crispy fries, or a couple enjoying a peaceful evening under soft amber pendant lights, Cafeishqq is your cozy neighborhood home.
            </p>

            {/* 3 Pillars of Cafeishqq */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#C6A16B]/15 flex items-center justify-center border border-[#C6A16B]/30 mb-2">
                  <Coffee className="w-4 h-4 text-[#C6A16B]" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#F6F0E6]">Artisanal Brews</h4>
                <p className="text-xs text-[#EDE2D0]/65 leading-relaxed">
                  Carefully pulled espresso shots and soothing coolers.
                </p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#C6A16B]/15 flex items-center justify-center border border-[#C6A16B]/30 mb-2">
                  <Heart className="w-4 h-4 text-[#C6A16B]" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#F6F0E6]">Fresh Comfort</h4>
                <p className="text-xs text-[#EDE2D0]/65 leading-relaxed">
                  Golden toasties, brioche burgers, and hearty snacks.
                </p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#C6A16B]/15 flex items-center justify-center border border-[#C6A16B]/30 mb-2">
                  <Users className="w-4 h-4 text-[#C6A16B]" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#F6F0E6]">Cozy Gathering</h4>
                <p className="text-xs text-[#EDE2D0]/65 leading-relaxed">
                  Spacious nooks, warm lighting, and soulful ambient music.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#1B120F] bg-[#C6A16B] hover:bg-[#b58f57] rounded-md transition-colors cursor-pointer shadow-sm hover:shadow"
              >
                Browse Menu
              </button>
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F6F0E6] bg-transparent hover:bg-white/5 border border-[#C6A16B]/40 rounded-md transition-colors cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
