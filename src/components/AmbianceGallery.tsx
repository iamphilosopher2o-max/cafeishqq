import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: 'Ambiance' | 'Coffee' | 'Food';
  span?: string;
}

const EDITORIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Cozy Seating Nook',
    subtitle: 'Warm amber glow, dark timber booths & vintage bookshelves',
    image: '/src/assets/images/cafe_cozy_ambiance_seating_1792994247689.jpg',
    tag: 'Ambiance',
    span: 'lg:col-span-8 lg:row-span-2',
  },
  {
    id: 'g2',
    title: 'Handcrafted Latte Art',
    subtitle: 'Freshly extracted Arabica espresso with silky velvety microfoam',
    image: '/src/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
    tag: 'Coffee',
    span: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 'g3',
    title: 'Gourmet Meal & Drink Combo',
    subtitle: 'Brioche burger, crispy fries, and iced refresher',
    image: '/src/assets/images/cafe_combos_meal_1793194204702.jpg',
    tag: 'Food',
    span: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 'g4',
    title: 'Golden Panini Toastie',
    subtitle: 'Three-cheese pull with fresh mint mayo and herbs',
    image: '/assets/aistudio/61d7a797-bcb2-45a7-82e3-ec766cb5fb7b_77ce31a7.png',
    tag: 'Food',
    span: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 'g5',
    title: 'Hand-Stretched Margherita',
    subtitle: 'Slow-simmered tomato sauce, melted mozzarella & fresh basil',
    image: '/src/assets/images/pizza_margherita_cafe_1793094238848.jpg',
    tag: 'Food',
    span: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 'g6',
    title: 'Main Hall Evening Atmosphere',
    subtitle: 'Where conversations and warm laughter unfold in Kanpur',
    image: '/src/assets/images/hero_cafeishqq_interior_1792994244346.jpg',
    tag: 'Ambiance',
    span: 'lg:col-span-4 lg:row-span-1',
  },
];

export const AmbianceGallery: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const tags = ['All', 'Ambiance', 'Coffee', 'Food'];

  const filtered = selectedTag === 'All'
    ? EDITORIAL_GALLERY_ITEMS
    : EDITORIAL_GALLERY_ITEMS.filter((img) => img.tag === selectedTag);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filtered.length) % filtered.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filtered.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1B120F] text-[#F6F0E6] relative border-t border-[#C6A16B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C6A16B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B]">
              EDITORIAL SHOWCASE
            </span>
            <span className="w-6 h-[1px] bg-[#C6A16B]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0E6] tracking-tight mb-4">
            Moments at Cafeishqq
          </h2>
          <p className="text-base text-[#EDE2D0]/80 leading-relaxed font-normal">
            Step into our warm haven in {CAFE_CONFIG.city}. From glowing pendant lights to comforting plates, explore our café's distinctive atmosphere.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#C6A16B] text-[#1B120F] font-semibold shadow-xs'
                  : 'bg-[#2B1D18] text-[#EDE2D0]/80 hover:text-white border border-[#C6A16B]/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {filtered.map((item, index) => {
            const isFeatured = item.id === 'g1' && selectedTag === 'All';
            const colClass = isFeatured ? 'lg:col-span-8' : 'lg:col-span-4';

            return (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className={`group relative rounded-xl overflow-hidden bg-[#2B1D18] border border-[#C6A16B]/30 cursor-pointer shadow-md hover:shadow-xl hover:border-[#C6A16B] transition-all duration-300 flex flex-col ${colClass}`}
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className={`w-full overflow-hidden relative ${isFeatured ? 'h-72 sm:h-96 lg:h-[460px]' : 'h-64 sm:h-72'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  {/* Measured Scrim for Permanent Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B120F] via-[#1B120F]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B120F] bg-[#C6A16B] px-2.5 py-0.5 rounded shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/40 text-[#F6F0E6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C6A16B]" />
                  </div>

                  {/* Caption Text - Always Legible */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F6F0E6] group-hover:text-[#C6A16B] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#EDE2D0]/80 mt-1 line-clamp-1 font-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-[#EDE2D0]/50 flex items-center justify-center gap-2">
          <Camera className="w-3.5 h-3.5 text-[#C6A16B]" />
          <span>Authentic photography captured inside {CAFE_CONFIG.brandName}, {CAFE_CONFIG.city}.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filtered[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[activeImageIndex].image}
              alt={filtered[activeImageIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-white/15"
            />
            <div className="text-center mt-4 text-[#F6F0E6]">
              <span className="text-[11px] uppercase tracking-widest text-[#C6A16B] font-semibold">
                {filtered[activeImageIndex].tag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {filtered[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE2D0]/80 mt-1 max-w-md mx-auto">
                {filtered[activeImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
