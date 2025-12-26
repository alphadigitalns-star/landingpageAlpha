import React from 'react';
import WarningBar from './components/WarningBar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PainStory from './components/PainStory';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import ComparisonTable from './components/ComparisonTable';
import TheChoice from './components/TheChoice';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-500 selection:text-white">
      <WarningBar />
      <main>
        <Hero />
        <Marquee />
        <PainStory />
        <Solution />
        <HowItWorks />
        <ComparisonTable />
        <TheChoice />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;