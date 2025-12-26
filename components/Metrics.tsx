import React from 'react';

const Metrics: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          <div className="p-4">
            <div className="text-5xl md:text-6xl font-black text-emerald-500 mb-2">3s</div>
            <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Tempo médio de resposta</p>
          </div>

          <div className="p-4">
            <div className="text-5xl md:text-6xl font-black text-emerald-500 mb-2">+40%</div>
            <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Aumento em conversão</p>
          </div>

          <div className="p-4">
            <div className="text-5xl md:text-6xl font-black text-emerald-500 mb-2">24h/7d</div>
            <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Disponibilidade total</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;