import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, MessageSquare, Printer, CheckCircle } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

interface OrderTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderTrayDrawer: React.FC<OrderTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const hasPricedItems = items.some((i) => typeof i.item.price === 'number');
  const subtotal = items.reduce(
    (acc, curr) => acc + (typeof curr.item.price === 'number' ? curr.item.price * curr.quantity : 0),
    0
  );
  const gst = hasPricedItems ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + gst;

  const handleSendWhatsApp = () => {
    const orderLines = items
      .map(
        (i) =>
          `• ${i.quantity}x ${i.item.name}${
            typeof i.item.price === 'number' ? ` (₹${i.item.price * i.quantity})` : ''
          }${i.specialInstructions ? ` [Note: ${i.specialInstructions}]` : ''}`
      )
      .join('\n');

    const pricingSummary = hasPricedItems
      ? `\nSubtotal: ₹${subtotal}\nGST (5%): ₹${gst}\nEstimated Total: ₹${total}`
      : '\n(Price inquiry upon counter order)';

    const message = `Hello ${CAFE_CONFIG.brandName} (${CAFE_CONFIG.city})! ☕
I would like to place a ${
      orderType === 'dine-in'
        ? `Dine-In order (Table: ${tableNumber || 'Walking in'})`
        : 'Takeaway order'
    } for ${customerName || 'Guest'}:

${orderLines}
${pricingSummary}

"${CAFE_CONFIG.tagline}"`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
    setOrderPlaced(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-md bg-[#F6F0E6] text-[#2B1D18] h-full flex flex-col shadow-2xl border-l border-[#C6A16B]/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#2B1D18] text-[#F6F0E6] flex items-center justify-between border-b border-[#C6A16B]/30">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C6A16B] block">
              YOUR VISIT
            </span>
            <h3 className="font-serif text-xl font-bold">Café Order Tray</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#EDE2D0] transition-colors"
            aria-label="Close tray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Confirmation Banner if placed */}
        {orderPlaced && (
          <div className="bg-[#2B1D18] text-[#F6F0E6] p-4 border-b border-[#C6A16B] flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#C6A16B] shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-[#C6A16B] block">Order Prepared for WhatsApp</span>
              Thank you! Our barista and kitchen team will greet you with your order.
            </div>
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#2B1D18]/70 py-12">
              <span className="text-4xl mb-3">☕</span>
              <p className="font-serif text-lg text-[#1B120F] font-bold">Your tray is empty</p>
              <p className="text-xs max-w-xs mt-1 text-[#2B1D18]/60">
                Explore our menu and add your favorite coffee, burgers, or toasties to get started.
              </p>
            </div>
          ) : (
            <>
              {/* Dining Mode Picker */}
              <div className="bg-white p-3 rounded-lg border border-[#EDE2D0]">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#2B1D18]/70 block mb-2">
                  Order Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-1.5 text-xs font-medium rounded transition-colors ${
                      orderType === 'dine-in'
                        ? 'bg-[#2B1D18] text-[#F6F0E6]'
                        : 'bg-[#F6F0E6] text-[#2B1D18] hover:bg-[#EDE2D0]'
                    }`}
                  >
                    Dine-In
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-1.5 text-xs font-medium rounded transition-colors ${
                      orderType === 'takeaway'
                        ? 'bg-[#2B1D18] text-[#F6F0E6]'
                        : 'bg-[#F6F0E6] text-[#2B1D18] hover:bg-[#EDE2D0]'
                    }`}
                  >
                    Takeaway / Pick-Up
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {orderType === 'dine-in' && (
                    <input
                      type="text"
                      placeholder="Table No. (if seated)"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="px-2.5 py-1.5 text-xs bg-[#F6F0E6] border border-[#EDE2D0] rounded focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                    />
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className={`px-2.5 py-1.5 text-xs bg-[#F6F0E6] border border-[#EDE2D0] rounded focus:outline-none focus:ring-1 focus:ring-[#C6A16B] ${
                      orderType === 'takeaway' ? 'col-span-2' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Item Cards */}
              <div className="space-y-3">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="bg-white p-3.5 rounded-lg border border-[#EDE2D0] flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#1B120F] truncate">
                        {cartItem.item.name}
                      </h4>
                      {typeof cartItem.item.price === 'number' ? (
                        <p className="text-xs text-[#2B1D18]/60 font-mono tabular-nums">
                          ₹{cartItem.item.price} each
                        </p>
                      ) : (
                        <p className="text-[11px] text-[#C6A16B] font-mono">
                          Price on counter
                        </p>
                      )}
                      {cartItem.specialInstructions && (
                        <p className="text-[11px] text-[#C6A16B] italic truncate mt-0.5">
                          Note: {cartItem.specialInstructions}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center border border-[#EDE2D0] rounded bg-[#F6F0E6]">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                          className="p-1 hover:bg-[#EDE2D0] text-[#2B1D18] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                          className="p-1 hover:bg-[#EDE2D0] text-[#2B1D18] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {typeof cartItem.item.price === 'number' ? (
                        <span className="text-xs font-mono font-bold text-[#1B120F] tabular-nums w-12 text-right">
                          ₹{cartItem.item.price * cartItem.quantity}
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#2B1D18]/50 w-12 text-right">
                          —
                        </span>
                      )}

                      <button
                        onClick={() => onRemoveItem(cartItem.item.id)}
                        className="text-[#2B1D18]/40 hover:text-red-700 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#2B1D18]/60 hover:text-red-700 transition-colors"
                >
                  Clear tray
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & Actions */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-[#EDE2D0] space-y-3">
            {hasPricedItems ? (
              <div className="space-y-1.5 text-xs text-[#2B1D18]/80 font-mono">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#2B1D18]/60">
                  <span>GST (5%)</span>
                  <span className="tabular-nums">₹{gst}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1B120F] pt-2 border-t border-[#EDE2D0]">
                  <span className="font-serif">Grand Total</span>
                  <span className="tabular-nums font-mono text-[#1B120F]">₹{total}</span>
                </div>
              </div>
            ) : (
              <div className="py-2 text-xs text-[#2B1D18]/70 border-b border-[#EDE2D0]">
                <span className="font-serif font-bold text-sm text-[#1B120F] block">
                  Items Selected ({items.length})
                </span>
                Prices will be confirmed directly at the café counter upon arrival.
              </div>
            )}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 bg-[#2B1D18] hover:bg-[#1B120F] text-[#F6F0E6] text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
              >
                <MessageSquare className="w-4 h-4 text-[#C6A16B]" />
                <span>Order via WhatsApp</span>
              </button>

              <button
                onClick={handlePrint}
                className="w-full py-2 bg-[#F6F0E6] hover:bg-[#EDE2D0] text-[#2B1D18] text-xs font-semibold uppercase tracking-wider rounded-md border border-[#EDE2D0] transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>Print / Save Receipt</span>
              </button>
            </div>
            
            <p className="text-[10px] text-center text-[#2B1D18]/50">
              Payment is settled directly at the café counter or table in Kanpur.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
