import React from 'react';

export const BrandStrip: React.FC = () => {
  const items = [
    'FRESHLY PREPARED',
    'COFFEE & CONVERSATIONS',
    'QUICK BITES',
    'GOOD TIMES',
  ];

  return (
    <div className="relative z-20 bg-[#2B1D18] border-y border-[#C6A16B]/30 py-4.5 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-10 text-center">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#F6F0E6] uppercase">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="text-[#C6A16B] text-xs select-none" aria-hidden="true">
                ♦
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
