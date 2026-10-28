import React from 'react';
import { TESTIMONIALS } from '../data/menuData';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F6F0E6] text-[#2B1D18] border-t border-[#EDE2D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-2">
            COMMUNITY & LOVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B120F] tracking-tight mb-4">
            Words from Our Guests
          </h2>
          <p className="text-base text-[#2B1D18]/80 leading-relaxed">
            What the Kanpur community says about our coffee, comfort food, and unhurried hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-xl border border-[#EDE2D0] flex flex-col justify-between shadow-xs hover:border-[#C6A16B]/50 transition-colors"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C6A16B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A16B]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#EDE2D0]" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#2B1D18]/85 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Unboxed Metadata */}
              <div className="pt-4 border-t border-[#EDE2D0]">
                <div className="font-serif font-bold text-base text-[#1B120F]">
                  {review.author}
                </div>
                <div className="text-xs text-[#2B1D18]/60 mt-0.5">
                  <span>{review.role}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#2B1D18]/50 mt-2 font-mono">
                  <span>Favorite: {review.favoriteItem}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
