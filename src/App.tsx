import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BusinessTypeId } from './types';
import { ArrowLeft } from 'lucide-react';

const Hero = lazy(() => import('./components/Hero').then((module) => ({ default: module.Hero })));
const TrustedBrandsSection = lazy(() =>
  import('./components/TrustedBrandsSection').then((module) => ({ default: module.TrustedBrandsSection }))
);
const InstantProblemSolver = lazy(() =>
  import('./components/InstantProblemSolver').then((module) => ({ default: module.InstantProblemSolver }))
);
const IndustryBlueprintExplorer = lazy(() =>
  import('./components/IndustryBlueprintExplorer').then((module) => ({ default: module.IndustryBlueprintExplorer }))
);
const OsPlayground = lazy(() =>
  import('./components/OsPlayground').then((module) => ({ default: module.OsPlayground }))
);
const BusinessTypeSelector = lazy(() =>
  import('./components/BusinessTypeSelector').then((module) => ({ default: module.BusinessTypeSelector }))
);
const IndustriesWeServeSection = lazy(() =>
  import('./components/IndustriesWeServeSection').then((module) => ({ default: module.IndustriesWeServeSection }))
);
const RoiCalculator = lazy(() =>
  import('./components/RoiCalculator').then((module) => ({ default: module.RoiCalculator }))
);
const FeatureDeepDive = lazy(() =>
  import('./components/FeatureDeepDive').then((module) => ({ default: module.FeatureDeepDive }))
);
const PastelFeatureSlider = lazy(() =>
  import('./components/PastelFeatureSlider').then((module) => ({ default: module.PastelFeatureSlider }))
);
const GlobalLeaderBenchmark = lazy(() =>
  import('./components/GlobalLeaderBenchmark').then((module) => ({ default: module.GlobalLeaderBenchmark }))
);
const ComparisonSection = lazy(() =>
  import('./components/ComparisonSection').then((module) => ({ default: module.ComparisonSection }))
);
const AiGymAssistant = lazy(() =>
  import('./components/AiGymAssistant').then((module) => ({ default: module.AiGymAssistant }))
);
const PricingSection = lazy(() =>
  import('./components/PricingSection').then((module) => ({ default: module.PricingSection }))
);
const OnboardingGuaranteeSection = lazy(() =>
  import('./components/OnboardingGuaranteeSection').then((module) => ({ default: module.OnboardingGuaranteeSection }))
);
const Testimonials = lazy(() =>
  import('./components/Testimonials').then((module) => ({ default: module.Testimonials }))
);
const DemoModal = lazy(() =>
  import('./components/DemoModal').then((module) => ({ default: module.DemoModal }))
);
const SitemapPage = lazy(() =>
  import('./components/SitemapPage').then((module) => ({ default: module.SitemapPage }))
);

function SectionFallback() {
  return (
    <div className="mx-auto flex min-h-[240px] max-w-7xl items-center justify-center px-4 py-16">
      <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-[0.3em] text-slate-500">
        Loading section...
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<BusinessTypeId>('gym_club');

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
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onJumpToPlayground={scrollToPlayground}
      />

      <main>
        <Suspense fallback={<SectionFallback />}>
          {currentPage === 'home' && (
            <>
              <Hero
                onOpenDemoModal={() => setDemoModalOpen(true)}
                onJumpToPlayground={scrollToPlayground}
                selectedPersona={selectedPersona}
                onSelectPersona={setSelectedPersona}
              />

              <TrustedBrandsSection onOpenDemoModal={() => setDemoModalOpen(true)} />

              <InstantProblemSolver
                onOpenDemoModal={() => setDemoModalOpen(true)}
                onSelectPersona={setSelectedPersona}
              />

              <BusinessTypeSelector
                selectedPersona={selectedPersona}
                onSelectPersona={setSelectedPersona}
                onOpenDemoModal={() => setDemoModalOpen(true)}
              />

              <IndustriesWeServeSection onOpenDemoModal={() => setDemoModalOpen(true)} />

              <PastelFeatureSlider onOpenDemoModal={() => setDemoModalOpen(true)} />

              <AiGymAssistant selectedPersona={selectedPersona} />

              <Testimonials />
            </>
          )}

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

              <FeatureDeepDive onOpenDemoModal={() => setDemoModalOpen(true)} />

              <ComparisonSection onOpenDemoModal={() => setDemoModalOpen(true)} />
            </div>
          )}

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

              <GlobalLeaderBenchmark onOpenDemoModal={() => setDemoModalOpen(true)} />

              <ComparisonSection onOpenDemoModal={() => setDemoModalOpen(true)} />
            </div>
          )}

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

              <RoiCalculator onOpenDemoModal={() => setDemoModalOpen(true)} />
            </div>
          )}

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

              <OnboardingGuaranteeSection onOpenDemoModal={() => setDemoModalOpen(true)} />

              <PricingSection onOpenDemoModal={() => setDemoModalOpen(true)} />
            </div>
          )}

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

          {currentPage === 'sitemap' && (
            <SitemapPage
              onNavigate={handleNavigate}
              onOpenDemoModal={() => setDemoModalOpen(true)}
            />
          )}
        </Suspense>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onJumpToPlayground={scrollToPlayground}
      />

      <Suspense fallback={null}>
        <DemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
        />
      </Suspense>
    </div>
  );
}
