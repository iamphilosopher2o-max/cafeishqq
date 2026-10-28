import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

export const LocationContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#1B120F] text-[#F6F0E6] relative border-t border-[#C6A16B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-2">
            VISIT & CONNECT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F0E6] mb-4">
            Find Us in {CAFE_CONFIG.city}
          </h2>
          <p className="text-base text-[#EDE2D0]/80 leading-relaxed font-normal">
            Drop by for freshly brewed coffee, comforting quick bites, or reach out for inquiries and table arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Café Info & Verified Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2B1D18] p-7 rounded-2xl border border-[#C6A16B]/30 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-[#F6F0E6] mb-4">
                {CAFE_CONFIG.brandName}
              </h3>

              <div className="space-y-4 text-sm text-[#EDE2D0]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C6A16B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F6F0E6] font-medium">Location</strong>
                    <span>{CAFE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C6A16B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F6F0E6] font-medium">Opening Hours</strong>
                    <span>{CAFE_CONFIG.timings.days}: {CAFE_CONFIG.timings.hours}</span>
                    <span className="block text-xs text-[#EDE2D0]/60 mt-0.5">
                      (Kitchen orders close at {CAFE_CONFIG.timings.kitchenCloses})
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C6A16B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F6F0E6] font-medium">Direct Line</strong>
                    <a href={`tel:${CAFE_CONFIG.phone}`} className="hover:text-[#C6A16B] transition-colors">
                      {CAFE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C6A16B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F6F0E6] font-medium">Email</strong>
                    <a href={`mailto:${CAFE_CONFIG.email}`} className="hover:text-[#C6A16B] transition-colors">
                      {CAFE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Google Maps & Direct WhatsApp */}
              <div className="mt-6 pt-5 border-t border-[#C6A16B]/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CAFE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#C6A16B] hover:bg-[#b58f57] text-[#1B120F] text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={`https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Cafeishqq Café! I would like to inquire about...')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#1B120F] hover:bg-black text-[#F6F0E6] border border-[#C6A16B]/40 text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-[#C6A16B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick directions tip card */}
            <div className="bg-[#2B1D18]/60 p-5 rounded-xl border border-white/5 text-xs text-[#EDE2D0]/70 leading-relaxed">
              <strong className="text-[#C6A16B] block mb-1 font-semibold uppercase tracking-wider">
                Parking & Accessibility
              </strong>
              Ample parking available. Easily accessible from Civil Lines and Swaroop Nagar hubs with welcoming indoor and outdoor dining corners.
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-[#2B1D18] p-7 sm:p-9 rounded-2xl border border-[#C6A16B]/30 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-1">
                GET IN TOUCH
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F6F0E6] mb-2">
                Send Us a Note
              </h3>
              <p className="text-xs text-[#EDE2D0]/75 mb-6">
                Have a question about our menu, feedback on your visit, or want to arrange a celebration?
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center bg-[#1B120F] rounded-xl p-6 border border-[#C6A16B]/30">
                  <CheckCircle2 className="w-10 h-10 text-[#C6A16B] mx-auto mb-3" />
                  <h4 className="font-serif text-xl font-bold text-[#F6F0E6] mb-1">Message Received!</h4>
                  <p className="text-xs text-[#EDE2D0]/80 max-w-sm mx-auto mb-4">
                    Thank you, {name}. Our café team in {CAFE_CONFIG.city} will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs text-[#C6A16B] underline hover:text-[#dfcaa5] cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sanya Verma"
                        className="w-full px-3.5 py-2.5 bg-[#1B120F] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 bg-[#1B120F] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sanya@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#1B120F] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-3.5 py-2.5 bg-[#1B120F] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 bg-[#C6A16B] hover:bg-[#b58f57] text-[#1B120F] text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
