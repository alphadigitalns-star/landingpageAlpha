import React from 'react';
import { Bot, BarChart2, Rocket } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2 block font-display">A Vantagem Injusta</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            O Ecossistema <span className="text-emerald-500">Alpha</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-sans">
            Não é mágica. É tecnologia de ponta aplicada para eliminar o erro humano.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
            <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
              <Bot className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-4">Agente Junior (IA)</h3>
            <p className="text-slate-400 leading-relaxed font-sans">
              Atende, qualifica e agenda reuniões enquanto você dorme.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
            <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
              <BarChart2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-4">Sistema AlphaFlow</h3>
            <p className="text-slate-400 leading-relaxed font-sans">
              Controle total do seu fluxo de caixa e contratos em uma tela.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
            <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
              <Rocket className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-4">Estratégia de Vendas</h3>
            <p className="text-slate-400 leading-relaxed font-sans">
              Implementação completa em 7 a 14 dias.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;