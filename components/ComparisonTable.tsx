import React from 'react';
import { X, Check } from 'lucide-react';
import Logo from './Logo';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      name: 'Instalação "Zero Código"',
      competitor: 'Te entrega um software complexo e manda você se virar com tutoriais.',
      alpha: 'Nós configuramos tudo. Você só recebe o login e senha.'
    },
    {
      name: 'Atendimento 24h Real',
      competitor: 'Funcionário dorme, almoça e fica doente.',
      alpha: 'O Agente Junior trabalha domingos e feriados sem parar.'
    },
    {
      name: 'Foco em Lucro Líquido',
      competitor: 'Foca em "Likes", "Alcance" e métricas de vaidade.',
      alpha: 'Foca em fluxo de caixa, quem pagou e dinheiro no bolso (AlphaFlow).'
    },
    {
      name: 'Custo Operacional',
      competitor: 'Salário + Encargos + VT + VR (R$ 3k+ por mês).',
      alpha: 'Uma fração do custo de um funcionário júnior.'
    },
    {
      name: 'Engenharia de Prompt',
      competitor: 'Respostas robóticas e frias ("Digite 1 para...").',
      alpha: 'IA treinada para parecer humana, usar gírias e persuadir.'
    },
    {
      name: 'Implementação Relâmpago',
      competitor: 'Processos de consultoria que levam 30 a 60 dias.',
      alpha: 'Sistema rodando e vendendo em 7 a 14 dias.'
    },
    {
      name: 'Ecossistema Único',
      competitor: 'Você precisa contratar o CRM, o Zap, o Financeiro separados.',
      alpha: 'Tudo integrado. O robô vende e o sistema cobra.'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Por que contratar a <span className="text-emerald-500">Alpha</span>?
          </h2>
          <p className="text-slate-400 font-sans">Comparativo direto com o mercado tradicional</p>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 mb-6 px-6 items-center">
          <div className="col-span-4 text-sm uppercase tracking-widest font-bold font-display text-slate-500">Critério</div>
          <div className="col-span-4 text-center text-sm uppercase tracking-widest font-bold font-display text-slate-500">Concorrência</div>
          <div className="col-span-4 flex justify-center">
            <div className="scale-75 origin-center">
              <Logo className="h-8" textClassName="text-xl" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-all hover:bg-slate-900/60"
            >
              {/* Feature Name */}
              <div className="col-span-1 md:col-span-4">
                <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 md:hidden"></div>
                  {feature.name}
                </h3>
              </div>

              {/* Competitor Box */}
              <div className="col-span-1 md:col-span-4 bg-red-950/10 rounded-xl p-4 md:text-center border border-red-900/20 group-hover:opacity-50 transition-opacity">
                <div className="flex items-center md:justify-center gap-2 text-red-200/70 text-sm font-sans">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{feature.competitor}</span>
                </div>
              </div>

              {/* Alpha Box */}
              <div className="col-span-1 md:col-span-4 bg-emerald-950/20 rounded-xl p-4 md:text-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <div className="flex items-center md:justify-center gap-2 text-emerald-100 text-sm font-medium font-sans">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature.alpha}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;