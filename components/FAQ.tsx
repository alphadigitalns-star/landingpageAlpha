import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const items = [
    {
      q: 'É um robô de "Digite 1"?',
      a: 'Não! Esqueça aqueles menus frustrantes de bancos. Usamos IA Generativa que entende linguagem natural, gírias e áudio. Seu cliente vai achar que está falando com um humano super eficiente.'
    },
    {
      q: 'A IA fala besteira?',
      a: 'Não. Utilizamos "Guardrails" (barreiras de segurança) rigorosas. A IA só responde com base nos dados da sua empresa. Se ela não souber a resposta, ela transfere para um humano imediatamente.'
    },
    {
      q: 'Substitui minha equipe?',
      a: 'Não, ela potencializa. A IA faz o trabalho chato de qualificar e filtrar curiosos 24h por dia. Sua equipe recebe apenas os leads prontos para comprar.'
    },
    {
      q: 'Preciso trocar de número?',
      a: 'Não. A tecnologia funciona espelhada no seu WhatsApp atual via QR Code. Você mantém seu número, seus contatos e todo o histórico de conversas.'
    },
    {
      q: 'É difícil de usar?',
      a: 'Zero dificuldade. Nossa equipe técnica faz toda a configuração ("Zero Code" para você). Você só precisa acessar o painel para ver os resultados.'
    },
    {
      q: 'Tem fidelidade?',
      a: 'Sim, contrato mínimo de 6 meses. Acreditamos em parcerias de longo prazo para garantir a maturação da IA e a consolidação dos resultados financeiros da sua empresa.'
    },
    {
      q: 'Serve pro meu nicho?',
      a: 'Se você atende clientes pelo WhatsApp, serve. Clínicas, imobiliárias, e-commerces, prestadores de serviço e infoprodutores são nossos principais clientes.'
    },
    {
      q: 'Tempo de setup?',
      a: '7 a 14 dias corridos. É o tempo necessário para nossa equipe estudar seu negócio, calibrar a IA e realizar os testes de segurança antes do lançamento.'
    },
    {
      q: 'Segurança de dados?',
      a: 'Total. Utilizamos criptografia de ponta a ponta (nível bancário). Seus dados financeiros e a base de clientes são mantidos em sigilo absoluto.'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2 block font-display">Tire suas dúvidas</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
            {items.map((item, idx) => (
                <details key={idx} className="group bg-slate-900 rounded-xl border border-slate-800 open:border-emerald-500/50 hover:border-slate-700 transition-all duration-300">
                    <summary className="flex items-center justify-between cursor-pointer p-6 list-none outline-none">
                        <span className="text-lg font-bold font-display text-slate-200 group-open:text-emerald-400 transition-colors">{item.q}</span>
                        <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 group-open:text-emerald-500 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4 animate-fade-in-up font-sans">
                        {item.a}
                    </div>
                </details>
            ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;