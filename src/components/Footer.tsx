import React from 'react';
import { ShieldCheck, ArrowRight, Github, Twitter, Linkedin, Map } from 'lucide-react';
import { SyncFyreLogo } from './SyncFyreLogo';

interface FooterProps {
  onNavigate: (pageId: string) => void;
  onOpenDemoModal: () => void;
  onJumpToPlayground: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemoModal, onJumpToPlayground }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm sm:text-base border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="inline-block">
              <SyncFyreLogo
                height="h-9 sm:h-10 md:h-11"
                asset="footer"
                shellClassName="rounded-2xl bg-white px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.28)] ring-1 ring-white/90"
              />
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-sm sm:text-base">
              The operating system for modern gyms, CrossFit boxes, boutique studios, and fitness franchise chains.
            </p>

            <div className="flex items-center gap-2 pt-1 text-emerald-400 font-medium text-xs sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Operational • 99.99% Uptime SLA</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">Product OS</div>
            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Home</button></li>
              <li><button onClick={() => onNavigate('playground')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">OS Playground</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Core OS Features</button></li>
              <li><button onClick={() => onNavigate('benchmark')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">US Benchmark</button></li>
              <li><button onClick={() => onNavigate('calculator')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">ROI Calculator</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Pricing & Plans</button></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">Fitness Solutions</div>
            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Gyms & Commercial Health Clubs</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">CrossFit Boxes & Functional Rig</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Yoga & Reformer Pilates Studios</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Boutique Boxing & HIIT</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-[#e14024] transition-colors cursor-pointer text-left">Franchise & Multi-Location Chains</button></li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">Get Started Today</div>
            <p className="text-slate-400 text-sm sm:text-base">Replace spreadsheets and legacy software in 24 hours.</p>
            <button
              onClick={onOpenDemoModal}
              className="w-full py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e14024]/20 cursor-pointer"
            >
              <span>Book Gym Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('sitemap')}
                className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Map className="w-4 h-4 text-[#e14024]" />
                <span>View Complete Sitemap Index</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div>
            <div>© 2026 Syncfyre. All rights reserved.</div>
            <div>Powered by Synckraft Technologies Pvt. Ltd.</div>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('sitemap')} className="hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer">
              <Map className="w-3.5 h-3.5 text-[#e14024]" />
              <span>Sitemap</span>
            </button>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

