import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1B120F]/95 backdrop-blur-md shadow-md border-b border-[#C6A16B]/20 py-3.5'
            : 'bg-gradient-to-b from-[#1B120F]/90 via-[#1B120F]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark with minimal coffee cup symbol */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 text-[#F6F0E6] hover:text-[#C6A16B] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span className="w-8 h-8 rounded-full bg-[#C6A16B]/20 flex items-center justify-center border border-[#C6A16B]/40 group-hover:bg-[#C6A16B]/30 transition-all">
                <Coffee className="w-4 h-4 text-[#C6A16B]" />
              </span>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F6F0E6]">
                Cafeishqq <span className="font-normal text-[#C6A16B] text-lg">Café</span>
              </span>
            </a>

            {/* Zone 2: 4-5 concise single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#EDE2D0]/90">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-[#C6A16B] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C6A16B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Cart / Order Tray Trigger */}
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-full text-[#EDE2D0] hover:text-[#C6A16B] hover:bg-[#2B1D18] transition-colors"
                title="View Order Tray"
                aria-label="View Order Tray"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C6A16B] text-[#1B120F] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center font-mono">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('#menu')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#1B120F] bg-[#C6A16B] hover:bg-[#b58f57] rounded-md transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap shrink-0"
              >
                Explore Menu
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-[#EDE2D0] hover:text-[#C6A16B] hover:bg-[#2B1D18] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#1B120F]/95 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col space-y-5">
            <div className="text-xs uppercase tracking-widest text-[#C6A16B] font-semibold pb-2 border-b border-[#C6A16B]/20">
              {CAFE_CONFIG.city}, {CAFE_CONFIG.state}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xl font-serif text-[#F6F0E6] hover:text-[#C6A16B] transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#C6A16B]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#menu');
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#1B120F] bg-[#C6A16B] hover:bg-[#b58f57] rounded-md transition-colors"
            >
              Explore Full Menu
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#EDE2D0] border border-[#C6A16B]/40 rounded-md hover:bg-[#2B1D18] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#C6A16B]" />
              Order Tray ({cartCount})
            </button>
          </div>
        </div>
      )}
    </>
  );
};
