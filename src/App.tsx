import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBrandsSection } from './components/TrustedBrandsSection';
import { InstantProblemSolver } from './components/InstantProblemSolver';
import { IndustryBlueprintExplorer } from './components/IndustryBlueprintExplorer';
import { OsPlayground } from './components/OsPlayground';
import { BusinessTypeSelector } from './components/BusinessTypeSelector';
import { IndustriesWeServeSection } from './components/IndustriesWeServeSection';
import { RoiCalculator } from './components/RoiCalculator';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { PastelFeatureSlider } from './components/PastelFeatureSlider';
import { GlobalLeaderBenchmark } from './components/GlobalLeaderBenchmark';
import { ComparisonSection } from './components/ComparisonSection';
import { AiGymAssistant } from './components/AiGymAssistant';
import { PricingSection } from './components/PricingSection';
import { OnboardingGuaranteeSection } from './components/OnboardingGuaranteeSection';
import { Testimonials } from './components/Testimonials';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';
import { SitemapPage } from './components/SitemapPage';
import { BusinessTypeId } from './types';
import { ArrowLeft, Sparkles, Map } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<BusinessTypeId>('gym_club');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'playground', 'features', 'solutions', 'benchmark', 'calculator', 'pricing', 'case-studies', 'sitemap'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPlayground = () => {
    handleNavigate('playground');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#e14024] selection:text-white antialiased">
      
      {/* Top Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onJumpToPlayground={scrollToPlayground}
      />

      <main>
        
        {/* Render Page Based on Active Route */}
        {currentPage === 'home' && (
          <>
            <Hero 
              onOpenDemoModal={() => setDemoModalOpen(true)}
              onJumpToPlayground={scrollToPlayground}
              selectedPersona={selectedPersona}
              onSelectPersona={setSelectedPersona}
            />

            <TrustedBrandsSection 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <InstantProblemSolver 
              onOpenDemoModal={() => setDemoModalOpen(true)}
              onSelectPersona={setSelectedPersona}
            />

            <BusinessTypeSelector 
              selectedPersona={selectedPersona}
              onSelectPersona={setSelectedPersona}
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <IndustriesWeServeSection 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <PastelFeatureSlider 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <AiGymAssistant 
              selectedPersona={selectedPersona}
            />

            <Testimonials />
          </>
        )}

        {/* Dedicated OS Playground Page */}
        {currentPage === 'playground' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Main Overview</span>
              </button>
              <div className="text-xs font-mono font-bold text-[#e14024] bg-[#fef2f1] px-3 py-1 rounded-full border border-[#fee5e2]">
                Interactive OS Command Center Mode
              </div>
            </div>

            <OsPlayground 
              selectedVerticalId={selectedPersona}
              onSelectVertical={setSelectedPersona}
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Features Page */}
        {currentPage === 'features' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs font-mono font-bold text-slate-700 bg-slate-200 px-3 py-1 rounded-full">
                Core OS Modules View
              </div>
            </div>

            <FeatureDeepDive 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <ComparisonSection 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Solutions / Verticals Page */}
        {currentPage === 'solutions' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                30+ Vertical SaaS Blueprints
              </div>
            </div>

            <IndustryBlueprintExplorer 
              selectedVerticalId={selectedPersona}
              onSelectVertical={setSelectedPersona}
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <BusinessTypeSelector 
              selectedPersona={selectedPersona}
              onSelectPersona={setSelectedPersona}
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Benchmark & Comparison Page */}
        {currentPage === 'benchmark' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                US Leaders Competitive Benchmark
              </div>
            </div>

            <GlobalLeaderBenchmark 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <ComparisonSection 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          </div>
        )}

        {/* Dedicated ROI Calculator Page */}
        {currentPage === 'calculator' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Revenue & Leakage ROI Calculator
              </div>
            </div>

            <RoiCalculator 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Pricing Page */}
        {currentPage === 'pricing' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Plans, Support & Onboarding Guarantee
              </div>
            </div>

            <OnboardingGuaranteeSection 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />

            <PricingSection 
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Case Studies Page */}
        {currentPage === 'case-studies' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
              <button 
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-[#e14024] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs font-mono font-bold text-slate-900 bg-slate-200 px-3 py-1 rounded-full">
                Customer Case Studies & Verified Reviews
              </div>
            </div>

            <Testimonials />
          </div>
        )}

        {/* Dedicated Visual Sitemap Page */}
        {currentPage === 'sitemap' && (
          <SitemapPage 
            onNavigate={handleNavigate}
            onOpenDemoModal={() => setDemoModalOpen(true)}
          />
        )}

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onJumpToPlayground={scrollToPlayground}
      />

      {/* Interactive Demo Request & Data Migration Modal */}
      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

    </div>
  );
}
