import React, { useState } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStrip } from './components/BrandStrip';
import { MenuSection } from './components/MenuSection';
import { ItemModal } from './components/ItemModal';
import { OrderTrayDrawer } from './components/OrderTrayDrawer';
import { AboutSection } from './components/AboutSection';
import { AmbianceGallery } from './components/AmbianceGallery';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { LocationModal } from './components/LocationModal';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  // Quick lookup for items currently in cart
  const cartItemIds = cart.reduce((acc, curr) => {
    acc[curr.item.id] = curr.quantity;
    return acc;
  }, {} as Record<string, number>);

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleAddToCart = (item: MenuItem, qty: number = 1, instructions?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.item.id === item.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + qty,
          specialInstructions: instructions || next[existingIndex].specialInstructions,
        };
        return next;
      }
      return [...prev, { item, quantity: qty, specialInstructions: instructions }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E6] text-[#2B1D18]">
      {/* Sticky Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => scrollToSection('reservation')}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Full-width Hero */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onFindCafe={() => setIsLocationModalOpen(true)}
        />

        {/* Signature Brand Strip */}
        <BrandStrip />

        {/* Categorized Menu Section */}
        <MenuSection
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onSelectItem={(item) => setSelectedItem(item)}
          cartItemIds={cartItemIds}
        />

        {/* Brand Story & Philosophy */}
        <AboutSection
          onExploreMenu={() => scrollToSection('menu')}
          onOpenReservation={() => scrollToSection('reservation')}
        />

        {/* Ambiance & Moments Gallery */}
        <AmbianceGallery />

        {/* Experience Highlights */}
        <ExperienceHighlights />

        {/* Table Reservation Module */}
        <ReservationSection />

        {/* Guest Reviews & Testimonials */}
        <ReviewsSection />

        {/* Verified Location, Timings & Contact */}
        <LocationContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Slide-out Order Tray / Cart */}
      <OrderTrayDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Item Detail & Customization Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Find Our Café / Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}
