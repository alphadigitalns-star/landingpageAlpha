import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Raio-X de Lucratividade',
      mainText: 'Antes de automatizar, precisamos estancar a sangria. A maioria das empresas não sabe, mas está perdendo dinheiro em gargalos invisíveis no atendimento. Nós fazemos uma auditoria completa no seu processo atual para encontrar exatamente onde o lucro está escapando.',
      points: [
        'Auditoria de Conversas: Analisamos seu histórico do WhatsApp para identificar por que os clientes param de responder.',
        'Mapeamento de Gargalos: Descobrimos se o problema é preço, demora no atendimento ou falha no follow-up.',
        'Definição de Perfil: Calibramos a IA para atender exatamente como o seu melhor vendedor faria.'
      ]
    },
    {
      num: '02',
      title: 'Implementação "Hands-Free" (7-14 Dias)',
      mainText: 'Você não precisa aprender programação nem configurar nada. Nossa equipe técnica entra em cena para instalar o "cérebro" da sua empresa. Configuramos o Agente Junior com engenharia de prompts avançada e preparamos o Sistema AlphaFlow para receber seus dados.',
      points: [
        'Engenharia de Prompt: Criamos a personalidade do robô (com gírias, tempo de resposta humano e técnicas de persuasão).',
        'Migração de Dados: Organizamos sua carteira de clientes dentro do sistema AlphaFlow.',
        'Testes de Estresse: Simulamos milhares de cenários para garantir que o robô nunca trave ou fale besteira.'
      ]
    },
    {
      num: '03',
      title: 'Go Live & Escala Automática',
      mainText: 'Entre o 7º e 14º dia, viramos a chave. Seu sistema passa a operar 24 horas por dia, 7 dias por semana. Você deixa de ser um "operador de WhatsApp" escravo das notificações e passa a ser um Gestor que apenas monitora o painel financeiro vendo o dinheiro entrar.',
      points: [
        'Atendimento 24h: Seu negócio passa a vender enquanto você dorme ou viaja.',
        'Dashboard em Tempo Real: Tenha controle total de quem pagou e quem deve em uma única tela.',
        'Suporte Prioritário: Nossa equipe monitora sua IA para garantir conversão máxima.'
      ]
    },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2 block font-display">O Processo</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Como Funciona</h2>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical connection line for desktop */}
          <div className="hidden md:block absolute left-[3.25rem] top-8 bottom-8 w-1 bg-slate-800/50 rounded-full"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-12 group">
              
              {/* Number Bubble */}
              <div className="flex-shrink-0 z-10">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500">
                  <span className="text-3xl md:text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 group-hover:from-emerald-400 group-hover:to-emerald-700 transition-all duration-500">
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-grow glass-card p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold font-display text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-sans">
                  {step.mainText}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4 font-display">O que entregamos:</h4>
                  {step.points.map((point, idx) => {
                    const [title, desc] = point.split(':');
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-slate-400 text-sm md:text-base font-sans">
                          <strong className="text-slate-200">{title}:</strong>{desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;