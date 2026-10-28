import React from 'react';
import { Wifi, BookOpen, Clock, Music, Sparkles } from 'lucide-react';

export const ExperienceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Wifi,
      title: 'Work & Study Friendly',
      description: 'High-speed reliable Wi-Fi, accessible charging sockets at cozy corner tables, and a distraction-free daytime atmosphere.',
    },
    {
      icon: BookOpen,
      title: 'Curated Reading Corner',
      description: 'Pick a classic or contemporary book from our café shelf, settle into cushioned booth seats, and lose track of time.',
    },
    {
      icon: Clock,
      title: 'No Rushing, Ever',
      description: 'True to our tagline "Sip Slow. Stay Awhile." We take pride in creating an unhurried sanctuary in Kanpur.',
    },
    {
      icon: Music,
      title: 'Acoustic & Low-Fi Beats',
      description: 'Gentle background music curated at conversational volume, making every discussion pleasant and warm.',
    },
  ];

  return (
    <section className="py-20 bg-[#F6F0E6] text-[#2B1D18] border-t border-[#EDE2D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A16B] block mb-2">
            DESIGNED FOR COMFORT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B120F] tracking-tight mb-4">
            Why Guests Love Spending Time Here
          </h2>
          <p className="text-sm sm:text-base text-[#2B1D18]/75 leading-relaxed">
            Every corner of Cafeishqq is tailored to make you feel at ease from the moment you step through our doors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-[#EDE2D0] hover:border-[#C6A16B]/50 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#2B1D18] text-[#C6A16B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B120F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#2B1D18]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
