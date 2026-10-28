import React, { useState } from 'react';
import { TableReservation } from '../types';
import { Calendar, Users, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<TableReservation>({
    name: '',
    phone: '',
    email: '',
    guests: 2,
    date: '',
    time: '18:00',
    seatingPreference: 'cozy-corner',
    specialNotes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ref = `CQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <section id="reservation" className="py-24 bg-[#2B1D18] text-[#F6F0E6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-2">
            TABLE RESERVATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F6F0E6] mb-3">
            Reserve Your Cozy Spot
          </h2>
          <p className="text-sm text-[#EDE2D0]/80 leading-relaxed">
            Planning a study session, intimate coffee date, or small celebration? Let us hold a cozy table for you in {CAFE_CONFIG.city}.
          </p>
        </div>

        <div className="bg-[#1B120F] rounded-2xl border border-[#C6A16B]/30 p-6 sm:p-10 shadow-2xl">
          {bookingConfirmed ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#C6A16B]/20 text-[#C6A16B] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#C6A16B]/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-1">
                RESERVATION RECEIVED
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F6F0E6] mb-2">
                We Look Forward to Welcoming You, {formData.name}!
              </h3>
              <p className="text-sm text-[#EDE2D0]/80 max-w-md mx-auto mb-6">
                Your reservation reference is <strong className="text-[#C6A16B] font-mono">{bookingRef}</strong>. We have noted your preference for the <span className="capitalize">{formData.seatingPreference.replace('-', ' ')}</span>.
              </p>
              <div className="inline-flex items-center gap-4 text-xs text-[#EDE2D0]/70 bg-white/5 py-2.5 px-6 rounded-lg border border-white/10 mb-6">
                <span>Party of {formData.guests}</span>
                <span>·</span>
                <span>{formData.date || 'Today'} at {formData.time}</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      guests: 2,
                      date: '',
                      time: '18:00',
                      seatingPreference: 'cozy-corner',
                      specialNotes: '',
                    });
                  }}
                  className="text-xs text-[#C6A16B] underline hover:text-[#dfcaa5]"
                >
                  Make another reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aryan Gupta"
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] focus:outline-none focus:border-[#C6A16B]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, '10+'].map((num) => (
                      <option key={num.toString()} value={num}>
                        {num} {Number(num) === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] focus:outline-none focus:border-[#C6A16B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] focus:outline-none focus:border-[#C6A16B]"
                  >
                    <option value="11:30">11:30 AM</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="15:30">03:30 PM (Afternoon Coffee)</option>
                    <option value="17:00">05:00 PM (Evening)</option>
                    <option value="18:30">06:30 PM</option>
                    <option value="20:00">08:00 PM (Dinner & Bites)</option>
                    <option value="21:30">09:30 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seatingPreference: e.target.value as TableReservation['seatingPreference'],
                      })
                    }
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] focus:outline-none focus:border-[#C6A16B]"
                  >
                    <option value="cozy-corner">Cozy Reading Nook & Booth</option>
                    <option value="window-seat">Street Window View</option>
                    <option value="main-hall">Main Ambient Lounge</option>
                    <option value="outdoor-patio">Patio / Verandah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE2D0]/80 mb-2">
                    Special Occasion or Note
                  </label>
                  <input
                    type="text"
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="e.g. Birthday celebration, study group, quiet corner"
                    className="w-full px-4 py-2.5 bg-[#2B1D18] border border-[#C6A16B]/30 rounded-lg text-sm text-[#F6F0E6] placeholder-white/30 focus:outline-none focus:border-[#C6A16B]"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#EDE2D0]/70 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
                  <span>No reservation fee · We hold reserved tables for 15 minutes.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#1B120F] bg-[#C6A16B] hover:bg-[#b58f57] rounded-md transition-all shadow-md hover:shadow-lg"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
