import React from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-90 transition-opacity">
            <Logo className="h-9" textClassName="text-2xl" />
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 text-sm font-bold text-slate-300 border border-slate-700 rounded-full hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300 uppercase tracking-wide">
              Área do Cliente
            </button>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white p-2">
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;