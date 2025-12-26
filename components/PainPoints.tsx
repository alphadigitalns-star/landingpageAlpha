import React from 'react';
import { XCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const problems = [
    "Clientes esperando horas por uma resposta.",
    "Financeiro anotado em caderno ou planilhas confusas.",
    "Perda de controle sobre quem pagou ou não.",
    "Vendedores desmotivados fazendo trabalho repetitivo."
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O que está impedindo sua empresa de crescer?
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-900/50 transition-all hover:bg-slate-900 group"
            >
              <div className="shrink-0">
                <XCircle className="w-8 h-8 text-red-500 fill-red-950/50" />
              </div>
              <p className="text-lg md:text-xl text-slate-300 font-medium group-hover:text-white transition-colors">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;