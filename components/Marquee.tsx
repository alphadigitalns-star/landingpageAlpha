import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "ATENDIMENTO 24H",
    "GESTÃO FINANCEIRA",
    "ZERO ERRO HUMANO",
    "LUCRO PREVISÍVEL"
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden flex relative z-20">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-30"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-30"></div>
      
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center min-w-full">
        {/* Render multiple times to ensure seamless loop */}
        {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12 shrink-0">
             <span className="text-slate-500 font-bold font-display tracking-[0.2em] uppercase text-sm md:text-base flex items-center gap-12">
               {item} <span className="text-emerald-500 text-xs">●</span>
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;