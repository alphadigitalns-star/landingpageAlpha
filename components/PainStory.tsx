import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const PainStory: React.FC = () => {
  const [ticket, setTicket] = useState('');
  const [lostClients, setLostClients] = useState('');

  const ticketValue = Number(ticket);
  const lostClientsValue = Number(lostClients);

  const weeklyLoss = ticketValue * lostClientsValue;
  const annualLoss = weeklyLoss * 48; // 4 weeks * 12 months = 48 weeks approximation for business year logic

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section className="py-24 relative border-b border-slate-900 bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            O Ciclo da Falência Invisível
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8 text-lg text-slate-300 leading-relaxed font-sans">
            <p>
              <strong className="text-white block mb-2 text-xl font-display">07:00 da manhã.</strong> 
              Seu celular já está cheio de notificações. Clientes perguntando preço, pedindo suporte, reclamando.
            </p>
            <p>
              Você tenta responder um por um, mas o telefone toca. É um fornecedor. Enquanto você resolve, <strong className="text-red-400 bg-red-950/30 px-1 rounded">três clientes ficam no vácuo no WhatsApp.</strong>
            </p>
            <p>
              <strong className="text-white block mb-2 text-xl font-display">16:00 da tarde.</strong> 
              Você finalmente responde aquele lead quente. A resposta dele?
              <span className="block mt-3 p-4 bg-slate-900/50 border-l-4 border-red-500 italic text-slate-400 text-base rounded-r-lg">
                "Obrigado, já fechei com outra empresa que me respondeu na hora."
              </span>
            </p>
            <p>
              No final do dia, seu financeiro está anotado em um caderno ou numa planilha que você esquece de atualizar. Você não sabe se teve lucro ou prejuízo. Você apenas <strong className="text-white">sobreviveu</strong> a mais um dia.
            </p>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-3xl"></div>
             <div className="relative glass-card bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-red-500/10 p-3 rounded-xl"><Calculator className="w-6 h-6 text-red-500" /></div>
                   <h3 className="text-xl font-bold font-display text-white">Calculadora Mental</h3>
                </div>
                
                <p className="text-xs text-slate-400 italic mb-6">*some seu prejuizo estimado*</p>
                
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-slate-400 text-sm border-b border-slate-800 pb-3">
                    <span className="font-sans">Ticket Médio:</span>
                    <div className="flex items-center gap-1 bg-slate-950/50 px-3 py-1 rounded border border-slate-800 focus-within:border-emerald-500 transition-colors">
                      <span className="text-slate-500 font-mono">R$</span>
                      <input 
                        type="number" 
                        value={ticket}
                        placeholder="0"
                        onChange={(e) => setTicket(e.target.value)}
                        className="bg-transparent text-white font-mono font-bold text-right w-20 outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-slate-700"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 text-sm border-b border-slate-800 pb-3">
                    <span className="font-sans">Vendas perdidas/semana (demora):</span>
                    <div className="flex items-center gap-1 bg-slate-950/50 px-3 py-1 rounded border border-slate-800 focus-within:border-red-500 transition-colors">
                      <input 
                        type="number" 
                        value={lostClients}
                        placeholder="0"
                        onChange={(e) => setLostClients(e.target.value)}
                        className="bg-transparent text-red-400 font-mono font-bold text-right w-12 outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-red-900/50"
                      />
                      <span className="text-red-400 font-mono font-bold">Clientes</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 text-sm border-b border-slate-800 pb-3">
                    <span className="font-sans">Prejuízo Semanal:</span>
                    <span className="text-red-400 font-mono font-bold">- {formatCurrency(weeklyLoss)}</span>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl text-center">
                  <p className="text-red-400 text-xs uppercase font-bold tracking-widest mb-2 font-display">Prejuízo Anual Estimado</p>
                  <p className="text-3xl md:text-5xl font-black font-display text-red-500 tracking-tight">{formatCurrency(annualLoss)}</p>
                  <p className="text-xs text-red-400/60 mt-2 font-medium">Dinheiro rasgado.</p>
                </div>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PainStory;