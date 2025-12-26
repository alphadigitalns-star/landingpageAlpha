import React from 'react';
import { ArrowRight, AlertOctagon } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5537999798872"; 

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-950/80">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Urgent Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest animate-fade-in-up font-display">
          <AlertOctagon className="w-3 h-3" />
          Pare de perder dinheiro agora
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight mb-8 leading-[1.1] max-w-5xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Você está <span className="text-red-500 underline decoration-red-900/50 decoration-4 underline-offset-4">PAGANDO</span> para trabalhar e nem percebeu.
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium animate-fade-in-up font-sans" style={{animationDelay: '0.2s'}}>
          Enquanto você lê isso, seu concorrente com automação acabou de fechar o cliente que te chamou há 30 minutos.
        </p>

        {/* Giant CTA Button */}
        <div className="w-full flex justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-6 text-lg md:text-xl font-bold font-display text-white bg-red-600 rounded-xl overflow-hidden transition-all hover:bg-red-500 hover:scale-[1.02] animate-pulse-fast shadow-[0_0_40px_rgba(220,38,38,0.4)] ring-4 ring-red-500/20"
          >
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] hover:animate-[shine_1.5s_infinite]"></div>
            <span className="relative flex items-center gap-3 uppercase tracking-wider">
              QUERO PARAR DE PERDER DINHEIRO <ArrowRight className="w-6 h-6" />
            </span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;