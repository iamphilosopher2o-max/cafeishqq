import React, { useState } from 'react';
import { Coffee, ArrowUp, Instagram, Facebook, MapPin } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B120F] text-[#F6F0E6] border-t border-[#C6A16B]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#C6A16B]/20 flex items-center justify-center border border-[#C6A16B]/40">
                <Coffee className="w-4 h-4 text-[#C6A16B]" />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F6F0E6]">
                {CAFE_CONFIG.brandName.split(' ')[0]} <span className="font-normal text-[#C6A16B] text-lg">Café</span>
              </span>
            </div>

            <p className="font-serif italic text-[#C6A16B] text-base">
              "{CAFE_CONFIG.tagline}"
            </p>

            <p className="text-xs text-[#EDE2D0]/75 leading-relaxed max-w-sm">
              Your cozy corner in {CAFE_CONFIG.city}, {CAFE_CONFIG.state}. Serving comforting fast food, freshly pulled coffee, handcrafted cold beverages, and moments worth lingering for.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2B1D18] border border-[#C6A16B]/30 flex items-center justify-center text-[#EDE2D0] hover:text-[#C6A16B] hover:border-[#C6A16B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_CONFIG.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2B1D18] border border-[#C6A16B]/30 flex items-center justify-center text-[#EDE2D0] hover:text-[#C6A16B] hover:border-[#C6A16B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CAFE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2B1D18] border border-[#C6A16B]/30 flex items-center justify-center text-[#EDE2D0] hover:text-[#C6A16B] hover:border-[#C6A16B] transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE2D0]/80">
              <li>
                <a href="#home" className="hover:text-[#C6A16B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C6A16B] transition-colors">
                  Full Café Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C6A16B] transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A16B] transition-colors">
                  Ambiance & Moments
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#C6A16B] transition-colors">
                  Table Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C6A16B] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay in touch */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B]">
              THE SLOW SIPS DISPATCH
            </h4>
            <p className="text-xs text-[#EDE2D0]/70 leading-relaxed">
              Subscribe to hear about seasonal brews, weekly specials, and acoustic evenings at {CAFE_CONFIG.brandName}.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#2B1D18] border border-[#C6A16B]/40 rounded-lg text-xs text-[#C6A16B]">
                ✓ Thank you for subscribing. See you at the café!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-md text-xs text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#C6A16B] hover:bg-[#b58f57] text-[#1B120F] text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#EDE2D0]/50">
              {CAFE_CONFIG.city}, {CAFE_CONFIG.state} · {CAFE_CONFIG.timings.days}: {CAFE_CONFIG.timings.hours}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE2D0]/50">
          <div>
            © {new Date().getFullYear()} {CAFE_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>{CAFE_CONFIG.city}, {CAFE_CONFIG.state}, {CAFE_CONFIG.country}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#EDE2D0]/80 hover:text-[#C6A16B] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
