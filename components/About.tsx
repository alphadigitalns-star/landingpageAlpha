import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-emerald-600 rounded-3xl transform rotate-3 blur-sm opacity-30"></div>
            <div className="relative h-96 w-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex items-center justify-center group">
              {/* Abstract Digital Representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800"></div>
              <div className="grid grid-cols-6 gap-2 opacity-20 transform -rotate-12 scale-150">
                {Array(24).fill(0).map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-emerald-500 rounded-lg"></div>
                ))}
              </div>
              <span className="relative z-10 text-slate-500 font-bold text-xl uppercase tracking-widest border-2 border-slate-500 p-4 rounded">
                Escritório Alpha
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nós transformamos negócios tradicionais em <span className="text-emerald-500">Máquinas Digitais</span>.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              A Alpha Digital não é apenas uma agência de software. Somos especialistas em processos. Entendemos que tecnologia sem estratégia é apenas custo.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Nossa missão é retirar o dono da operação manual e colocá-lo no estratégico, garantindo que nenhum lead seja perdido e que cada centavo seja rastreado.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-px bg-slate-800 flex-1"></div>
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Desde 2023</span>
              <div className="h-px bg-slate-800 flex-1"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;