import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, ChevronDown, Menu, X, Play, 
  BookOpen, Calculator, RefreshCw, Cpu, Award, 
  FileCode, Layers, Zap, Sparkles, Map, Database, ArrowRight,
  LogIn
} from 'lucide-react';
import { SyncFyreLogo } from './SyncFyreLogo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenDemoModal: () => void;
  onJumpToPlayground: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenDemoModal, 
  onJumpToPlayground 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close resources dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLoginRedirect = () => {
    setMobileMenuOpen(false);
    window.location.href = 'https://syncfyre.com/';
  };

  const handleLinkClick = (pageId: string, sectionId?: string) => {
    setResourcesOpen(false);
    setMobileMenuOpen(false);
    
    if (pageId === 'home' && sectionId) {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    onNavigate(pageId);
  };

  const resourceTools = [
    {
      icon: Layers,
      title: '30+ Industry Blueprints',
      desc: 'Technical architecture, DB schemas & workflows for 30+ service verticals.',
      action: () => handleLinkClick('solutions'),
      badge: 'Blueprints',
      badgeColor: 'bg-rose-50 text-[#e14024] border-rose-200'
    },
    {
      icon: Play,
      title: 'OS Playground & Kiosk',
      desc: 'Test real-time door turnstiles, self-service check-in, and POS simulator.',
      action: () => handleLinkClick('playground'),
      badge: 'Interactive',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: Calculator,
      title: 'ROI & Revenue Calculator',
      desc: 'Calculate recovered leakages, WhatsApp upsell margins, and staff hours saved.',
      action: () => handleLinkClick('calculator'),
      badge: 'Calculator',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: Zap,
      title: '3-Sec Problem Solver',
      desc: 'Simulate automated resolutions for member lockouts and ghost bookings.',
      action: () => handleLinkClick('home', 'problem-solver'),
      badge: 'Simulator',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  const resourceGuides = [
    {
      icon: RefreshCw,
      title: '24-Hour Migration Guides',
      desc: 'Zero-downtime migration from Mindbody, Practo, Zenoti, or Excel.',
      action: () => handleLinkClick('pricing'),
      badge: 'Zero-Downtime',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: Award,
      title: 'Global Leader Benchmark',
      desc: 'Side-by-side comparison matrix vs Mindbody, Toast, and Zenoti.',
      action: () => handleLinkClick('benchmark'),
      badge: 'Benchmark',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      icon: FileCode,
      title: 'Core OS Modules & Features',
      desc: 'Full breakdown of WhatsApp dunning, POS sync, and attendance engine.',
      action: () => handleLinkClick('features'),
      badge: 'Architecture',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      icon: Map,
      title: 'Complete Sitemap & Directory',
      desc: 'Comprehensive index of all 30+ vertical solutions and technical specs.',
      action: () => handleLinkClick('sitemap'),
      badge: 'Index',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200'
    }
  ];

  return (
    <header 
      id="syncfyre-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5 sm:py-3 shadow-xs' 
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/50 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center group py-0.5 cursor-pointer border-0 bg-transparent text-left"
          >
            <SyncFyreLogo height="h-10 sm:h-12 md:h-14" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#e14024] bg-[#fef2f1] font-bold shadow-2xs'
                  : 'hover:text-slate-950 hover:bg-slate-100/80 text-slate-700'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('home', 'industries-we-serve')}
              className="px-3.5 py-2 rounded-xl transition-all cursor-pointer hover:text-slate-950 hover:bg-slate-100/80 text-slate-700"
            >
              Industries
            </button>

            <button
              onClick={() => handleLinkClick('pricing')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                currentPage === 'pricing'
                  ? 'text-[#e14024] bg-[#fef2f1] font-bold shadow-2xs'
                  : 'hover:text-slate-950 hover:bg-slate-100/80 text-slate-700'
              }`}
            >
              Pricing (INR)
            </button>

            {/* Resources Dropdown Tab */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 select-none ${
                  resourcesOpen
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
                aria-expanded={resourcesOpen}
              >
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180 text-orange-400' : 'text-slate-400'}`} />
              </button>

              {/* Mega-Menu Panel */}
              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] p-5.5 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,1)] z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="grid grid-cols-2 gap-6">
                    
                    {/* Left Column: Interactive Tools */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#e14024]" />
                        <span>Interactive Tools</span>
                      </div>
                      <div className="space-y-1">
                        {resourceTools.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={item.action}
                              className="w-full p-2.5 rounded-2xl text-left transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200/80 group cursor-pointer space-y-1 block"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#e14024] group-hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#e14024] transition-colors">
                                    {item.title}
                                  </span>
                                </div>
                                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 font-normal leading-relaxed pl-8">
                                {item.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: Guides & Benchmarks */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-500" />
                        <span>Guides & Architecture</span>
                      </div>
                      <div className="space-y-1">
                        {resourceGuides.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={item.action}
                              className="w-full p-2.5 rounded-2xl text-left transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200/80 group cursor-pointer space-y-1 block"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <span className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                                    {item.title}
                                  </span>
                                </div>
                                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 font-normal leading-relaxed pl-8">
                                {item.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Bottom Banner */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs px-2 text-slate-600">
                    <span className="flex items-center gap-1.5 font-medium text-xs">
                      <Sparkles className="w-4 h-4 text-[#e14024]" />
                      Need a custom vertical migration or IoT driver?
                    </span>
                    <button
                      onClick={() => {
                        setResourcesOpen(false);
                        onOpenDemoModal();
                      }}
                      className="text-xs sm:text-sm font-bold text-[#e14024] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Talk to Engineer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button 
              onClick={handleLoginRedirect}
              className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-100/90 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer select-none"
            >
              <LogIn className="w-4.5 h-4.5 text-slate-500" />
              <span>Log in</span>
            </button>

            <button 
              onClick={onOpenDemoModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#e14024] via-[#ea580c] to-[#c83218] hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(225,64,36,0.25)] active:scale-95 cursor-pointer border border-rose-400/20 select-none"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Book Demo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left py-2.5 px-3 rounded-xl transition-all hover:bg-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('home', 'industries-we-serve')}
              className="text-left py-2.5 px-3 rounded-xl transition-all hover:bg-slate-100"
            >
              Industries We Serve
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-left py-2.5 px-3 rounded-xl transition-all hover:bg-slate-100"
            >
              Pricing (INR)
            </button>
            
            {/* Mobile Resources Sub-list */}
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <div className="px-3 py-1 text-[11px] font-bold uppercase text-slate-400">Resources & Tools</div>
              <button
                onClick={() => handleLinkClick('solutions')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#e14024]" />
                  <span>30+ Industry Blueprints</span>
                </span>
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-rose-50 text-[#e14024] border border-rose-200">
                  Engines
                </span>
              </button>
              <button
                onClick={() => handleLinkClick('playground')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 text-[#e14024]" />
                <span>OS Playground & Door Kiosk</span>
              </button>
              <button
                onClick={() => handleLinkClick('calculator')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <Calculator className="w-3.5 h-3.5 text-blue-600" />
                <span>ROI & Revenue Calculator</span>
              </button>
              <button
                onClick={() => handleLinkClick('features')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <FileCode className="w-3.5 h-3.5 text-indigo-600" />
                <span>Core OS Modules & Features</span>
              </button>
              <button
                onClick={() => handleLinkClick('benchmark')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <Award className="w-3.5 h-3.5 text-purple-600" />
                <span>Global Leader Benchmark Matrix</span>
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                <span>24-Hour Migration Guides</span>
              </button>
              <button
                onClick={() => handleLinkClick('sitemap')}
                className="w-full text-left py-2 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <Map className="w-3.5 h-3.5 text-slate-600" />
                <span>Complete Sitemap & Directory</span>
              </button>
            </div>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={handleLoginRedirect}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-slate-600" />
              <span>Log in to Portal</span>
            </button>
            <button 
              onClick={() => { onOpenDemoModal(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#e14024] to-[#ea580c] text-center shadow-md shadow-[#e14024]/20 cursor-pointer"
            >
              Book Live Demo & Setup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};



