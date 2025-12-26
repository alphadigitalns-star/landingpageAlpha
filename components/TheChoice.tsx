import React from 'react';
import { X, Check } from 'lucide-react';

const TheChoice: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white text-center mb-12">
          Você tem duas opções agora:
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Option 1: Red */}
          <div className="bg-red-950/20 border border-red-900/50 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-red-950/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center mb-6">
              <X className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-4">Ignorar e continuar perdendo</h3>
            <p className="text-red-200/60 text-sm leading-relaxed font-sans">
              Continue respondendo clientes manualmente, perdendo vendas para concorrentes rápidos e sem saber seu lucro real no fim do mês.
            </p>
          </div>

          {/* Option 2: Green */}
          <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden transform md:scale-105 shadow-2xl shadow-emerald-900/20">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl font-display">RECOMENDADO</div>
            <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-4">Automatizar e Blindar</h3>
            <p className="text-emerald-200/60 text-sm leading-relaxed font-sans">
              Instale a inteligência artificial, atenda todos os clientes instantaneamente e tenha previsibilidade de caixa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheChoice;