import React, { useState } from 'react';
import { 
  Map, Layers, Globe, Zap, ArrowRight, Search, CheckCircle2, 
  ChevronRight, Building2, Calendar, Receipt, Award, MessageSquare, 
  Sparkles, ShieldCheck, DollarSign, Users, ExternalLink, Code2, FileText,
  Smartphone, Laptop, KeyRound, HelpCircle, FileCode, Check
} from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (pageId: string) => void;
  onOpenDemoModal: () => void;
}

interface RouteGroup {
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  items: {
    title: string;
    path: string;
    pageId: string;
    sectionId?: string;
    description: string;
    tag?: string;
  }[];
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate, onOpenDemoModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [xmlCopied, setXmlCopied] = useState(false);
  const [showXmlView, setShowXmlView] = useState(false);

  const SITE_STRUCTURE: RouteGroup[] = [
    {
      category: 'Primary Platform Pages',
      description: 'Main navigation views and functional landing pages across SyncFyre OS',
      icon: Layers,
      badge: 'MAIN ROUTES',
      items: [
        {
          title: 'Home Page',
          path: '/#home',
          pageId: 'home',
          description: 'Platform overview, real-time platform metrics, and core value propositions.',
          tag: 'Core'
        },
        {
          title: 'OS Playground Simulator',
          path: '/#playground',
          pageId: 'playground',
          description: 'Interactive live kiosk demo, POS counter, IoT door turnstile & WhatsApp AI simulator.',
          tag: 'Interactive'
        },
        {
          title: 'Core Platform Features',
          path: '/#features',
          pageId: 'features',
          description: 'Detailed showcase of 6 main operating modules including POS, scheduling, & commissions.',
          tag: 'Modules'
        },
        {
          title: 'Pastel Interactive Feature Slider',
          path: '/#features',
          pageId: 'features',
          description: 'Horizontal drag/scroll pastel card carousel featuring Billing, Inventory, CRM, Cloud Dashboard, and Gate Control.',
          tag: 'Carousel'
        },
        {
          title: 'Trusted Enterprise Brands Showcase',
          path: '/#trusted-brands',
          pageId: 'home',
          description: 'Client logo showcase featuring Wonderla, Heineken, Bridgestone, ITC, Taj SATS, IRCTC, Cremica, and leading brands.',
          tag: 'Enterprise'
        },
        {
          title: 'Industries We Serve (Booking Software)',
          path: '/#industries-we-serve',
          pageId: 'home',
          description: 'High-resolution booking software cards for Salons, Spas, Tattoo Studios, Beauty Clinics, Barbershops, Pet Salons, Nail Salons, & Skin Clinics.',
          tag: 'Industries'
        },
        {
          title: 'Multi-Vertical SaaS Solutions',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Architectural blueprints & specs tailored for 30+ service vertical industries.',
          tag: '30+ Verticals'
        },
        {
          title: 'Global US Leaders Benchmark',
          path: '/#benchmark',
          pageId: 'benchmark',
          description: 'Competitive comparison with Mindbody, Zenoti, Boulevard, GlossGenius, and Vagaro.',
          tag: 'Comparison'
        },
        {
          title: 'ROI & Savings Calculator',
          path: '/#calculator',
          pageId: 'calculator',
          description: 'Interactive calculator estimating revenue leakages, auto-dunning gains & payback period.',
          tag: 'Financial'
        },
        {
          title: 'Onboarding & Migration Guarantee',
          path: '/#onboarding-guarantee',
          pageId: 'pricing',
          description: 'Interactive breakdown of 4 pillars: Flexible Plans, Dedicated Support, Guided Training, & 24-Hr Migration.',
          tag: 'Guarantee'
        },
        {
          title: 'Pricing & Tiers',
          path: '/#pricing',
          pageId: 'pricing',
          description: 'Transparent monthly/annual tiers, seat controls, and zero hidden add-on fees.',
          tag: 'Plans'
        },
        {
          title: 'Case Studies & Testimonials',
          path: '/#case-studies',
          pageId: 'case-studies',
          description: 'Real business results, owner reviews, and verified growth metrics.',
          tag: 'Social Proof'
        },
        {
          title: 'Interactive Visual Sitemap',
          path: '/#sitemap',
          pageId: 'sitemap',
          description: 'Hierarchical index of all application pages, features, and technical endpoints.',
          tag: 'Index'
        },
      ]
    },
    {
      category: 'Core Operating System Modules',
      description: 'Specialized functional software modules integrated into the unified dashboard',
      icon: Zap,
      badge: 'MODULES',
      items: [
        {
          title: '1-Click POS Billing & UPI Checkout',
          path: '/#features',
          pageId: 'features',
          sectionId: 'features',
          description: 'Sub-1.4s invoice processing, Razorpay QR generation, GST calculations & thermal print.',
          tag: 'Billing'
        },
        {
          title: '24/7 Smart Appointment Calendar',
          path: '/#features',
          pageId: 'features',
          description: 'Multi-staff timeline, automated waitlists, and class session credit deductions.',
          tag: 'Scheduling'
        },
        {
          title: 'Staff, Stylist & Commission Engine',
          path: '/#features',
          pageId: 'features',
          description: 'Tier-based commission calculations, biometric clock-in, and 1-click Razorpay payouts.',
          tag: 'Payroll'
        },
        {
          title: 'WhatsApp Marketing & 5-Star Reviews',
          path: '/#features',
          pageId: 'features',
          description: 'Post-service WhatsApp feedback routing 5-star ratings directly to Google Business.',
          tag: 'Marketing'
        },
        {
          title: 'Predictive AI Client Retention Engine',
          path: '/#features',
          pageId: 'features',
          description: 'Gemini AI monitors interval decay and triggers automated re-engagement WhatsApp offers.',
          tag: 'AI Retention'
        },
        {
          title: 'Franchise & Multi-Outlet HQ Command',
          path: '/#features',
          pageId: 'features',
          description: 'Multi-location SSO dashboard with cross-branch customer roaming and consolidated reports.',
          tag: 'Franchise'
        },
      ]
    },
    {
      category: '30+ Industry Vertical Blueprints',
      description: 'Specialized SaaS workflows pre-configured for diverse service industries',
      icon: Building2,
      badge: 'VERTICALS',
      items: [
        {
          title: 'Gyms & Commercial Fitness Clubs',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Turnstile access control, recurring membership UPI AutoPay, & trainer commission rosters.',
          tag: 'Fitness'
        },
        {
          title: 'CrossFit & Functional Fitness Rigs',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Class capacity limits, workout whiteboard logs, and session pack auto-deductions.',
          tag: 'Studio'
        },
        {
          title: 'Salons, Spas & Aesthetic MedSpas',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Stylist booth rentals, service duration padding, chemical dye logs, and tip payouts.',
          tag: 'Beauty'
        },
        {
          title: 'Yoga, Reformer Pilates & Martial Arts',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Mat allocation grids, belt grading progression, and recurring drop-in passes.',
          tag: 'Wellness'
        },
        {
          title: 'Dental, Eye & Healthcare Clinics',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Interactive tooth chart diagrams, prescription templates, and EMR patient records.',
          tag: 'Medical'
        },
        {
          title: 'Auto Garage, Detailing & Bike Studios',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Job card creation, vehicle inspection photos, parts inventory, and ALPR gate entry.',
          tag: 'Automotive'
        },
        {
          title: 'Dry Cleaning & Laundry Express',
          path: '/#solutions',
          pageId: 'solutions',
          description: 'Garment tag barcode printing, pickup/delivery route tracking, and weight billing.',
          tag: 'Services'
        },
      ]
    },
    {
      category: 'Integrations & Technical Architecture',
      description: 'Hardware APIs, payment gateways, and accounting synchronization',
      icon: Code2,
      badge: 'API & TECH',
      items: [
        {
          title: 'Razorpay UPI AutoPay & Payment Gateway',
          path: '/#calculator',
          pageId: 'calculator',
          description: 'Native integration supporting auto-debits, dynamic QR generation, and UPI mandate management.',
          tag: 'Payments'
        },
        {
          title: 'WhatsApp Cloud API & Gemini AI Co-Pilot',
          path: '/#sitemap',
          pageId: 'sitemap',
          description: 'Automated 24/7 conversational booking receptionist and WhatsApp dunning links.',
          tag: 'Messaging'
        },
        {
          title: 'Turnstile & ALPR IoT Hardware APIs',
          path: '/#playground',
          pageId: 'playground',
          description: 'Sub-200ms door turnstile unlocking via Apple/Google Wallet digital passes.',
          tag: 'IoT Hardware'
        },
        {
          title: 'Tally & Busy Accounting GST Sync',
          path: '/#pricing',
          pageId: 'pricing',
          description: 'Automated GST invoice export, tax return filings, and ledger synchronization.',
          tag: 'Accounting'
        },
      ]
    }
  ];

  const filteredStructure = SITE_STRUCTURE.map(group => {
    const matchingItems = group.items.filter(item => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tag?.toLowerCase().includes(q) ||
        item.path.toLowerCase().includes(q)
      );
    });
    return { ...group, items: matchingItems };
  }).filter(group => group.items.length > 0);

  const totalPagesCount = SITE_STRUCTURE.reduce((acc, g) => acc + g.items.length, 0);

  const generateXmlSitemap = () => {
    const domain = "https://syncfyre.com";
    const date = new Date().toISOString().split('T')[0];
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    SITE_STRUCTURE.forEach(group => {
      group.items.forEach(item => {
        xml += `  <url>\n`;
        xml += `    <loc>${domain}${item.path}</loc>\n`;
        xml += `    <lastmod>${date}</lastmod>\n`;
        xml += `    <changefreq>daily</changefreq>\n`;
        xml += `    <priority>${item.pageId === 'home' ? '1.0' : '0.8'}</priority>\n`;
        xml += `  </url>\n`;
      });
    });
    
    xml += `</urlset>`;
    return xml;
  };

  const copyXmlToClipboard = () => {
    const xml = generateXmlSitemap();
    navigator.clipboard.writeText(xml);
    setXmlCopied(true);
    setTimeout(() => setXmlCopied(false), 2500);
  };

  return (
    <div className="pt-24 pb-24 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e14024]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e14024]/20 border border-[#e14024]/40 text-[#f15236] text-xs font-extrabold uppercase tracking-wider">
              <Map className="w-3.5 h-3.5" />
              <span>SYNCFYRE ARCHITECTURE DIRECTORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Application Sitemap & Navigation Index
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the complete hierarchy of pages, core operating system modules, 30+ vertical industry solutions, and technical API endpoints available across the SyncFyre platform.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-mono">
                ✓ {totalPagesCount} Indexed Routes
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                Protocol: HTTPS / SPA Client Route
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#f15236] font-mono">
                Updated Real-Time
              </span>
            </div>
          </div>
        </div>

        {/* Toolbar: Search & XML View Toggle */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search sitemap routes, features, or APIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:border-[#e14024]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setShowXmlView(!showXmlView)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border flex items-center gap-2 cursor-pointer ${
                showXmlView 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <FileCode className="w-4 h-4 text-[#e14024]" />
              <span>{showXmlView ? 'Hide XML Schema' : 'View XML Sitemap'}</span>
            </button>

            <button
              onClick={copyXmlToClipboard}
              className="px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#e14024] hover:bg-[#c83218] text-white transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              {xmlCopied ? <Check className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <span>{xmlCopied ? 'Copied XML!' : 'Copy sitemap.xml'}</span>
            </button>
          </div>

        </div>

        {/* XML Schema Preview Box */}
        {showXmlView && (
          <div className="bg-slate-950 text-slate-200 p-6 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner space-y-3">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">sitemap.xml (Standard Search Engine Protocol)</span>
              <span>{totalPagesCount} URLs</span>
            </div>
            <pre className="text-emerald-300 leading-relaxed max-h-80 overflow-y-auto">
              {generateXmlSitemap()}
            </pre>
          </div>
        )}

        {/* Directory Route Groups Grid */}
        <div className="space-y-10">
          {filteredStructure.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6">
                
                {/* Group Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#fef2f1] text-[#e14024] border border-[#fee5e2] flex items-center justify-center">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900">{group.category}</h2>
                      <p className="text-xs text-slate-500">{group.description}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold border border-slate-200">
                    {group.badge} ({group.items.length})
                  </span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      onClick={() => onNavigate(item.pageId)}
                      className="group bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 hover:border-[#e14024]/40 p-5 rounded-2xl transition-all cursor-pointer relative flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-extrabold text-[#e14024] bg-[#fef2f1] px-2.5 py-0.5 rounded-md border border-[#fee5e2]">
                            {item.path}
                          </span>
                          {item.tag && (
                            <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#e14024] transition-colors flex items-center gap-1.5">
                          <span>{item.title}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#e14024]" />
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-extrabold text-slate-500 group-hover:text-[#e14024]">
                        <span>Open Page View</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need Custom SaaS API Integration or Enterprise Deployment?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            SyncFyre provides developer REST APIs, Webhook endpoints, and custom IoT turnstile integration for multi-outlet fitness and service chains.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-6 py-3 rounded-xl bg-[#e14024] hover:bg-[#c83218] text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Developer & Architecture Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
