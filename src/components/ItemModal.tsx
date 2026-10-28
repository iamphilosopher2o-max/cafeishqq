import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Plus, Minus, ShoppingBag, Clock } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, qty: number, instructions?: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity, instructions);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#F6F0E6] text-[#2B1D18] rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#C6A16B]/30 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-[#1B120F]/60 text-white hover:bg-[#1B120F] transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        {item.image ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#2B1D18]/10">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B120F]/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-[#EDE2D0] flex items-center gap-2">
              <span className="capitalize">{item.category.replace('-', ' ')}</span>
              {item.prepTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C6A16B]" />
                    {item.prepTime}
                  </span>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="p-6 bg-[#2B1D18] text-[#F6F0E6] border-b border-[#C6A16B]/20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-1">
              {item.category.replace('-', ' ')}
            </span>
            <h3 className="font-serif text-2xl font-bold">{item.name}</h3>
          </div>
        )}

        <div className="p-6">
          {item.image && (
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="font-serif text-2xl font-bold text-[#1B120F]">{item.name}</h3>
              {typeof item.price === 'number' && (
                <span className="font-mono text-xl font-bold text-[#1B120F] tabular-nums">
                  ₹{item.price}
                </span>
              )}
            </div>
          )}

          {item.description && (
            <p className="text-sm text-[#2B1D18]/80 leading-relaxed mb-6">
              {item.description}
            </p>
          )}

          {/* Notes / customization input */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B1D18]/70 mb-1.5">
              Special preparation notes (Optional)
            </label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g., Less spicy, extra hot milk, no onions..."
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#EDE2D0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
            />
          </div>

          {/* Quantity and CTA */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#EDE2D0]">
            <div className="flex items-center border border-[#EDE2D0] rounded-md bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-[#EDE2D0]/40 text-[#2B1D18] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 font-mono font-semibold text-sm tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-[#EDE2D0]/40 text-[#2B1D18] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 py-3 px-4 bg-[#C6A16B] hover:bg-[#b58f57] text-[#1B120F] font-semibold text-xs tracking-wider uppercase rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>
                {typeof item.price === 'number'
                  ? `Add to Tray · ₹${item.price * quantity}`
                  : 'Add to Order Tray'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
