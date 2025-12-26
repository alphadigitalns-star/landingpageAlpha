import React from 'react';
import { Bot } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/5500000000000";

  return (
    <footer className="bg-slate-950 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-5 w-full md:w-auto text-lg md:text-xl font-bold font-display text-slate-950 bg-emerald-500 rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
          >
            <Bot className="mr-3 w-7 h-7" />
            FALAR COM A INTELIGÊNCIA ARTIFICIAL AGORA
          </a>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col items-center">
          <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <Logo className="h-10" textClassName="text-2xl" />
          </div>
          <p className="text-slate-500 text-sm font-sans">© 2025 Alpha Digital. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;