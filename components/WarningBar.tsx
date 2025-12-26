import React from 'react';

const WarningBar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white text-xs md:text-sm py-2 px-4 text-center font-bold flex items-center justify-center gap-2 tracking-wide uppercase shadow-lg z-50 relative animate-pulse">
      <span>⚠️ Pare de perder vendas por demora no atendimento.</span>
    </div>
  );
};

export default WarningBar;