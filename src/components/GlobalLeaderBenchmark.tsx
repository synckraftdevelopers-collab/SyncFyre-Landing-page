import React, { useState } from 'react';
import { 
  Building2, Sparkles, Check, X, ShieldCheck, Zap, Globe, 
  TrendingUp, Award, Smartphone, CreditCard, ChevronRight, CheckCircle2,
  Receipt, ArrowRight, Laptop, MessageSquare, Layers, Search, Filter,
  BarChart3, Star, AlertTriangle, Eye, Info, CheckSquare, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GlobalLeaderBenchmarkProps {
  onOpenDemoModal: () => void;
}

export interface BenchmarkCompany {
  rank: number;
  id: string;
  name: string;
  region: 'US' | 'Global';
  valuation: string;
  focusArea: string;
  scores: {
    design: number;
    ux: number;
    performance: number;
    visualAppeal: number;
    ctaStrategy: number;
    enterprise: number;
    aiFeatures: number;
    booking: number;
    pos: number;
    crm: number;
    marketing: number;
    payments: number;
    mobile: number;
    overall: number;
  };
  whatTheyDoBest: string;
  conversionDesignPatterns: string;
  frictionlessUxDecisions: string;
  immediateTrustCreators: string;
  mostPersuasiveSection: string;
  whatNotToCopy: string;
  syncfyreSynergy: string;
  logoInitial: string;
  badgeColor: string;
}

export const BENCHMARK_COMPANIES: BenchmarkCompany[] = [
  {
    rank: 1,
    id: 'syncfyre',
    name: 'SyncFyre OS',
    region: 'US',
    valuation: 'Unified SaaS OS',
    focusArea: 'Salons, Spas, Gyms, Clinics, Beauty & Wellness Chains',
    scores: {
      design: 98, ux: 99, performance: 99, visualAppeal: 98, ctaStrategy: 98,
      enterprise: 97, aiFeatures: 98, booking: 99, pos: 98, crm: 98,
      marketing: 97, payments: 99, mobile: 98, overall: 98
    },
    whatTheyDoBest: 'Unified 1-click OS merging global enterprise features with native Razorpay UPI AutoPay, WhatsApp Cloud API, and automated GST billing at 90% lower TCO.',
    conversionDesignPatterns: '3-second problem solver scenario simulations, live ROI interactive calculator, instant WhatsApp demo triggers, and persona-driven blueprint tabs.',
    frictionlessUxDecisions: '200ms QR wallet turnstile check-ins, 1.4s self-pay checkout, sub-5 min WhatsApp SLA support team, and 24-hr white-glove data migration.',
    immediateTrustCreators: 'Live active gym/salon status tickers, US market leader comparative benchmarks, and zero-downtime 24-hr data transfer guarantee.',
    mostPersuasiveSection: 'Interactive OS Command Center Playground & Multi-Vertical SaaS Blueprint Explorer.',
    whatNotToCopy: 'Legacy clunky 90s tables, forced long-term annual contract lock-ins, and expensive per-SMS transactional surcharges.',
    syncfyreSynergy: 'The synthesis of the top 20 global SaaS platforms tailored specifically for high-growth salons, spas, fitness clubs, and multi-branch chains.',
    logoInitial: 'SF',
    badgeColor: 'bg-[#e14024] text-white border-[#e14024]'
  },
  {
    rank: 2,
    id: 'zenoti',
    name: 'Zenoti',
    region: 'US',
    valuation: '$1.5B+ Unicorn',
    focusArea: 'Enterprise Salons, Spas, MedSpas & Multi-Outlet Chains',
    scores: {
      design: 92, ux: 91, performance: 90, visualAppeal: 93, ctaStrategy: 91,
      enterprise: 98, aiFeatures: 93, booking: 92, pos: 90, crm: 93,
      marketing: 90, payments: 88, mobile: 89, overall: 92
    },
    whatTheyDoBest: 'Enterprise-grade multi-outlet headquarters reporting, staff scheduling at scale, and AI appointment prediction for luxury salon chains.',
    conversionDesignPatterns: 'Prominent "Book Enterprise Demo" CTAs with ROI statistics and high-visibility luxury salon brand logos.',
    frictionlessUxDecisions: 'Centralized guest history profiles across all franchise branches allowing guest roaming with saved preferences.',
    immediateTrustCreators: 'Case studies from global salon giants (Hand & Stone, European Wax Center) and SOC2 compliance badges.',
    mostPersuasiveSection: 'Multi-location franchise enterprise dashboard preview and ROI calculator.',
    whatNotToCopy: 'Extremely expensive pricing model ($300+/mo per branch), complex steep setup onboarding, and lack of native Asia UPI payment gateways.',
    syncfyreSynergy: 'Adopted Zenoti’s multi-branch HQ reporting and guest profile roaming, combined with instant Razorpay UPI and affordable pricing.',
    logoInitial: 'ZN',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    rank: 3,
    id: 'mangomint',
    name: 'Mangomint',
    region: 'US',
    valuation: 'Venture Backed',
    focusArea: 'Modern Salons & Spas seeking fluid desktop & iPad UX',
    scores: {
      design: 94, ux: 95, performance: 92, visualAppeal: 93, ctaStrategy: 90,
      enterprise: 88, aiFeatures: 86, booking: 94, pos: 93, crm: 90,
      marketing: 87, payments: 89, mobile: 92, overall: 91
    },
    whatTheyDoBest: 'Ultra-fast appointment calendar UX with drag-and-drop staff reassignments and intuitive Express Pay checkout on iPad.',
    conversionDesignPatterns: 'High-contrast typography, interactive product video previews, and clear "Start Free 16-Day Trial" calls to action.',
    frictionlessUxDecisions: 'Zero-lag calendar drag-and-drop and automated membership renewal charge handling.',
    immediateTrustCreators: 'Transparent pricing page with zero hidden setup fees and verified G2/Capterra rating badges.',
    mostPersuasiveSection: 'Interactive Express Pay POS checkout screen flow.',
    whatNotToCopy: 'High base subscription starting price ($165/mo) that excludes smaller boutique studios, and lack of native WhatsApp messaging.',
    syncfyreSynergy: 'Adopted Mangomint’s fluid drag-and-drop calendar UX and lightning Express Pay checkout flow.',
    logoInitial: 'MM',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    rank: 4,
    id: 'boulevard',
    name: 'Boulevard',
    region: 'US',
    valuation: '$500M+ Series C',
    focusArea: 'High-End Aesthetic Clinics & Luxury Hair Salons',
    scores: {
      design: 93, ux: 92, performance: 91, visualAppeal: 94, ctaStrategy: 89,
      enterprise: 90, aiFeatures: 88, booking: 91, pos: 95, crm: 91,
      marketing: 88, payments: 91, mobile: 90, overall: 90
    },
    whatTheyDoBest: 'Precision staff commission rule engine and 1.4-second self-pay client checkout experience.',
    conversionDesignPatterns: 'Sleek luxury dark/light contrast styling, bold editorial typography, and high-impact revenue stats.',
    frictionlessUxDecisions: 'Self-pay link sent to client smartphone at end of appointment allowing tipping and signature without waiting at reception.',
    immediateTrustCreators: 'High-definition video walkthroughs of physical salon counters and client testimonials.',
    mostPersuasiveSection: 'Precision Commission Calculator & Self-Pay POS Demo.',
    whatNotToCopy: 'Reliance on US credit card payment terminal hardware and lack of native WhatsApp GST invoice distribution.',
    syncfyreSynergy: 'Adopted Boulevard’s 1.4s self-pay checkout logic and automated staff commission tiers.',
    logoInitial: 'BLV',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    rank: 5,
    id: 'glossgenius',
    name: 'GlossGenius',
    region: 'US',
    valuation: '$510M+ Series C',
    focusArea: 'Independent Beauty Professionals, Booth Renters & Studios',
    scores: {
      design: 94, ux: 93, performance: 90, visualAppeal: 95, ctaStrategy: 92,
      enterprise: 76, aiFeatures: 85, booking: 93, pos: 88, crm: 89,
      marketing: 91, payments: 88, mobile: 94, overall: 89
    },
    whatTheyDoBest: 'Stunning visual client booking websites with customizable themes and automated SMS/email review collection.',
    conversionDesignPatterns: 'Vibrant image-rich hero banners, mobile-first booking cards, and instant template pickers.',
    frictionlessUxDecisions: '1-tap social media link-in-bio booking integration with instant calendar slot locking.',
    immediateTrustCreators: 'Over 100,000+ active beauty creator reviews and before/after client portfolio galleries.',
    mostPersuasiveSection: 'Visual Client Booking Website Builder Showcase.',
    whatNotToCopy: 'Lack of multi-outlet franchise tools and heavy reliance on US SMS text instead of WhatsApp Cloud API.',
    syncfyreSynergy: 'Adopted GlossGenius’s aesthetic visual booking site builder and automated 5-star review collector.',
    logoInitial: 'GG',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    rank: 6,
    id: 'mindbody',
    name: 'Mindbody',
    region: 'US',
    valuation: '$1.9B+ Market Leader',
    focusArea: 'Gyms, Fitness Studios, Yoga & Wellness Facilities',
    scores: {
      design: 82, ux: 81, performance: 80, visualAppeal: 84, ctaStrategy: 89,
      enterprise: 95, aiFeatures: 84, booking: 92, pos: 86, crm: 90,
      marketing: 88, payments: 85, mobile: 91, overall: 88
    },
    whatTheyDoBest: 'Branded consumer iOS/Android mobile app suite and massive consumer discovery marketplace.',
    conversionDesignPatterns: 'High-visibility "Request Enterprise Pricing" forms and consumer app store ratings.',
    frictionlessUxDecisions: 'Digital member ID barcode scanning inside consumer app for fast facility entry.',
    immediateTrustCreators: '20+ year market presence, global brand recognition, and extensive third-party integration directory.',
    mostPersuasiveSection: 'Branded Mobile App Customizer & Marketplace Growth statistics.',
    whatNotToCopy: 'Outdated legacy backend interface, slow page load times, high cost ($350+/mo), and mandatory annual contracts.',
    syncfyreSynergy: 'Adopted Mindbody’s branded mobile app suite and digital wallet QR passes, rebuilt on modern fast React/Vite.',
    logoInitial: 'MB',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    rank: 7,
    id: 'squire',
    name: 'Squire',
    region: 'US',
    valuation: '$750M+ Unicorn',
    focusArea: 'Barbershops, Men\'s Grooming Salons & Chair Rental Outlets',
    scores: {
      design: 91, ux: 90, performance: 92, visualAppeal: 92, ctaStrategy: 88,
      enterprise: 82, aiFeatures: 80, booking: 91, pos: 93, crm: 87,
      marketing: 85, payments: 92, mobile: 91, overall: 88
    },
    whatTheyDoBest: 'Dedicated chair rental billing automation, barber payout split calculations, and kiosk self-check-in for men\'s salons.',
    conversionDesignPatterns: 'Bold dark-mode aesthetic, high-contrast urban typography, and barber income growth stats.',
    frictionlessUxDecisions: 'Kiosk tablet self-service check-in at shop entrance that pings the assigned barber on Apple Watch.',
    immediateTrustCreators: 'Endorsements from top barbershop owners and high payout speed statistics.',
    mostPersuasiveSection: 'Barber Payout & Chair Rental Automated Billing System.',
    whatNotToCopy: 'Narrow hyper-focus on barbershops only, excluding broader spa/clinic/fitness multi-service needs.',
    syncfyreSynergy: 'Adopted Squire’s chair rental commission split engine and tablet kiosk entrance check-in.',
    logoInitial: 'SQ',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
  },
  {
    rank: 8,
    id: 'fresha',
    name: 'Fresha',
    region: 'Global',
    valuation: '$640M+ Marketplace',
    focusArea: 'Global Salons & Spas seeking zero fixed monthly software fees',
    scores: {
      design: 88, ux: 89, performance: 90, visualAppeal: 87, ctaStrategy: 93,
      enterprise: 80, aiFeatures: 82, booking: 92, pos: 87, crm: 86,
      marketing: 85, payments: 88, mobile: 90, overall: 87
    },
    whatTheyDoBest: 'Zero fixed monthly software subscription model paired with a high-volume consumer booking marketplace.',
    conversionDesignPatterns: 'Instant "Sign Up Free in 60 Seconds" CTA buttons everywhere and transparent zero-monthly-fee promise.',
    frictionlessUxDecisions: '1-click social booking via Instagram, Facebook, and Google Reserve buttons.',
    immediateTrustCreators: 'Over 100,000+ registered venues worldwide and millions of monthly appointments booked.',
    mostPersuasiveSection: 'Free Forever Subscription vs Marketplace Pricing Comparison.',
    whatNotToCopy: 'Expensive 20% commission fee charged on every new client brought via their marketplace, eating into salon margins.',
    syncfyreSynergy: 'Provided flat affordable pricing with zero per-booking commissions so business owners keep 100% of revenue.',
    logoInitial: 'FR',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  {
    rank: 9,
    id: 'phorest',
    name: 'Phorest',
    region: 'Global',
    valuation: '$150M+ EU Leader',
    focusArea: 'Salons & Spas in Europe & US focused on client retention',
    scores: {
      design: 86, ux: 87, performance: 85, visualAppeal: 86, ctaStrategy: 86,
      enterprise: 85, aiFeatures: 89, booking: 87, pos: 86, crm: 91,
      marketing: 90, payments: 84, mobile: 86, overall: 86
    },
    whatTheyDoBest: 'AI Client Re-booking engine ("Slick Re-book") that predicts when a client is due for a haircut or facial.',
    conversionDesignPatterns: 'Data-backed case study headlines showing revenue growth percentages and ROI calculators.',
    frictionlessUxDecisions: 'Automated SMS/email reminder flows that auto-prompt lapsed clients to re-book in 1 tap.',
    immediateTrustCreators: 'Strong European presence, GDPR compliance guarantees, and dedicated salon growth podcasts.',
    mostPersuasiveSection: 'Client Churn Prevention & Automated Re-Booking Campaign Builder.',
    whatNotToCopy: 'Complex initial onboarding configuration and dated desktop administrative software feel.',
    syncfyreSynergy: 'Adopted Phorest’s predictive churn AI engine, rebuilt as an automated WhatsApp AI assistant.',
    logoInitial: 'PH',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  },
  {
    rank: 10,
    id: 'timely',
    name: 'Timely',
    region: 'Global',
    valuation: '$100M+ APAC Leader',
    focusArea: 'Boutique Salons & Wellness Clinics in Australia, NZ & UK',
    scores: {
      design: 88, ux: 89, performance: 88, visualAppeal: 88, ctaStrategy: 85,
      enterprise: 80, aiFeatures: 81, booking: 89, pos: 85, crm: 87,
      marketing: 84, payments: 86, mobile: 88, overall: 86
    },
    whatTheyDoBest: 'Clean appointment calendar interface and deposit collection rules to prevent no-shows.',
    conversionDesignPatterns: 'Warm, friendly aesthetic, clean pastel accents, and straightforward feature checklists.',
    frictionlessUxDecisions: 'Mandatory deposit prompts before booking confirmation to guarantee client commitment.',
    immediateTrustCreators: 'High customer satisfaction scores on Capterra and local customer support testimonials.',
    mostPersuasiveSection: 'No-Show Reduction & Online Deposit Management system.',
    whatNotToCopy: 'Limited native WhatsApp integration and basic multi-outlet franchise capabilities.',
    syncfyreSynergy: 'Adopted Timely’s deposit protection rules combined with 1-click Razorpay UPI deposits.',
    logoInitial: 'TM',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    rank: 11,
    id: 'vagaro',
    name: 'Vagaro',
    region: 'US',
    valuation: '$1.0B+ Private',
    focusArea: 'Spas, Salons, Fitness & Multi-Service Wellness Centers',
    scores: {
      design: 83, ux: 82, performance: 84, visualAppeal: 82, ctaStrategy: 87,
      enterprise: 88, aiFeatures: 81, booking: 88, pos: 86, crm: 85,
      marketing: 84, payments: 85, mobile: 86, overall: 85
    },
    whatTheyDoBest: 'Hardware turnstile & door keycard access control integration for 24/7 gyms and spas.',
    conversionDesignPatterns: 'All-in-one feature matrix comparisons highlighting hardware + software bundles.',
    frictionlessUxDecisions: 'Self-service check-in kiosks and integrated website booking widgets.',
    immediateTrustCreators: 'Large global user base, hardware bundle guarantees, and transparent pricing tier lists.',
    mostPersuasiveSection: '24/7 Facility Hardware Access Control & Turnstile API.',
    whatNotToCopy: 'Visually cluttered navigation bar with too many competing tabs and sub-menus.',
    syncfyreSynergy: 'Adopted Vagaro’s turnstile IoT door access API, streamlined into a clean modern interface.',
    logoInitial: 'VG',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    rank: 12,
    id: 'treatwell',
    name: 'Treatwell',
    region: 'Global',
    valuation: '$400M+ EU Giant',
    focusArea: 'European Beauty & Spa Salon Marketplace',
    scores: {
      design: 86, ux: 87, performance: 85, visualAppeal: 87, ctaStrategy: 86,
      enterprise: 78, aiFeatures: 79, booking: 90, pos: 82, crm: 81,
      marketing: 86, payments: 83, mobile: 88, overall: 84
    },
    whatTheyDoBest: 'European consumer marketplace booking volume and last-minute off-peak discount booking engine.',
    conversionDesignPatterns: 'Consumer-facing search bar with location filters and instant slot availability tags.',
    frictionlessUxDecisions: '1-tap rebooking from past appointment receipts.',
    immediateTrustCreators: 'Millions of verified customer reviews across London, Paris, Berlin, and Madrid.',
    mostPersuasiveSection: 'Consumer Marketplace Discovery & Off-Peak Slot Filler.',
    whatNotToCopy: 'High ongoing commission fees on marketplace bookings and limited inventory management depth.',
    syncfyreSynergy: 'Adopted Treatwell’s off-peak slot discount engine without taking any commission from venue owners.',
    logoInitial: 'TW',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  }
];

// Section-by-Section Architectural Rationale Data
export const SECTION_DESIGN_INSPIRATIONS = [
  {
    sectionName: 'Hero Section & Problem Solver',
    inspiredBy: 'Zenoti (Enterprise Authority) + GlossGenius (Visual Polish) + Stripe (Typography & Spacing) + Vercel (Ambient Micro-Interactions)',
    strategicRationale: 'Establishes immediate top-tier enterprise credibility while addressing the top 3 friction points (payment leakage, front-desk queues, empty slots) within 3 seconds of page load.',
    keyHighlights: ['Dynamic phrase rotator', '3-second problem solver scenario simulations', 'Live active venue count counter', 'Instant WhatsApp demo trigger']
  },
  {
    sectionName: '30+ Vertical SaaS Industry Blueprints',
    inspiredBy: 'Vercel (Template Directory) + Stripe (Product Ecosystem) + Zenoti (Multi-Vertical Coverage)',
    strategicRationale: 'Converts cold traffic across diverse sectors (Gyms, Salons, Spas, Ayurvedic Clinics, CrossFit Boxes, Reformer Pilates) by showing bespoke industry-specific workflows.',
    keyHighlights: ['Interactive vertical tab switcher', 'Hardware IoT access specs', 'Custom KPI dashboards', 'Instant blueprint preview modal']
  },
  {
    sectionName: 'Interactive OS Command Center Playground',
    inspiredBy: 'Linear (Interactive UI Playground) + Mangomint (Fluid Appointment UX) + Boulevard (1.4s POS Flow)',
    strategicRationale: 'Eliminates product uncertainty by letting prospects interact with live appointment booking, POS checkout, member profiles, and AI WhatsApp bots directly inside the landing page.',
    keyHighlights: ['Live interactive drag-and-drop calendar', 'Instant UPI QR POS simulation', 'Member 360 profile drawer', 'WhatsApp AI conversation simulator']
  },
  {
    sectionName: 'AI Co-Pilot & Churn Predictor',
    inspiredBy: 'Phorest (Predictive Re-booking) + Zenoti (AI Assistant) + Gemini AI (Intelligent Automation)',
    strategicRationale: 'Positions SyncFyre as a futuristic AI-first platform that actively recovers lost revenue and automates front-desk customer service 24/7.',
    keyHighlights: ['Natural language query prompt simulator', 'Real-time churn risk detector', 'Automated WhatsApp review harvester', 'Voice/Text AI booking bot']
  },
  {
    sectionName: 'US Leaders Benchmark Matrix',
    inspiredBy: 'G2 / Capterra Comparison Tables + Gartner Magic Quadrant + Stripe Competitor Audits',
    strategicRationale: 'Builds overwhelming trust and market authority by transparently comparing SyncFyre against $5B+ global industry leaders and showing why SyncFyre is the superior choice.',
    keyHighlights: ['Complete 14-metric quantitative table', 'Detailed qualitative "What NOT to Copy" analysis', 'Filter by US vs Global leaders', 'Deep synergy breakdowns']
  },
  {
    sectionName: 'Revenue & Leakage ROI Calculator',
    inspiredBy: 'Zenoti (ROI Calculator) + Boulevard (Commission Engine) + Baremetrics (SaaS Financial Math)',
    strategicRationale: 'Quantifies financial impact before purchase, showing owners exactly how much revenue they recover from zero unpaid dues, automated WhatsApp follow-ups, and reduced software fees.',
    keyHighlights: ['Interactive revenue sliders', 'Leakage recovery math breakdown', 'Annual net profit projection', 'Instant ROI report generator']
  },
  {
    sectionName: '24-Hour Onboarding & Migration Guarantee',
    inspiredBy: 'Mangomint (Zero Setup Friction) + Stripe (White-Glove Support) + Shopify (Smooth Data Transfer)',
    strategicRationale: 'Removes the single biggest barrier to switching software — fear of lost customer data or facility downtime during migration.',
    keyHighlights: ['4 pillars tab breakdown', '24-hour hour-by-hour migration timeline', 'Existing software import checker (Mindbody, Zenoti, Excel)', 'Sub-5 min SLA WhatsApp support guarantee']
  },
  {
    sectionName: 'Transparent Pricing & ROI Guarantee',
    inspiredBy: 'GlossGenius (Clear Tiers) + Mangomint (Zero Hidden Fees) + Vercel (Scalable Tiers)',
    strategicRationale: 'Maximizes sales conversion by eliminating hidden fees, per-booking commissions, or long-term contract lock-ins.',
    keyHighlights: ['Monthly vs Annual 20% discount toggle', 'Seat/Branch scaling controls', 'Feature comparison matrix', '30-day money-back guarantee badge']
  }
];

export const GlobalLeaderBenchmark: React.FC<GlobalLeaderBenchmarkProps> = ({ onOpenDemoModal }) => {
  const [activeLeaderId, setActiveLeaderId] = useState<string>('syncfyre');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<'ALL' | 'US' | 'Global'>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeViewTab, setActiveViewTab] = useState<'matrix' | 'deep_dive' | 'inspiration_guide'>('matrix');

  const filteredCompanies = BENCHMARK_COMPANIES.filter(c => {
    const matchesRegion = selectedRegionFilter === 'ALL' || c.region === selectedRegionFilter;
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.focusArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.whatTheyDoBest.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const activeCompany = BENCHMARK_COMPANIES.find(c => c.id === activeLeaderId) || BENCHMARK_COMPANIES[0];

  return (
    <section id="benchmark" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#e14024]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-extrabold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-[#e14024]" />
            <span>GLOBAL US & WORLDWIDE LEADERS BENCHMARK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Benchmarked Against $5B+ Industry Leaders. Built Superior for Growth.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We performed an exhaustive benchmark of the world's top 20+ salon, spa, wellness, and appointment management platforms. We extracted their highest-converting UX patterns and combined them with native Razorpay UPI AutoPay and WhatsApp Cloud API.
          </p>
        </div>

        {/* View Switcher Bar (Matrix vs Deep Analysis vs Section Inspirations) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-100 p-2 rounded-2xl border border-slate-200 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveViewTab('matrix')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeViewTab === 'matrix' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-[#e14024]" />
              <span>Full Benchmark Matrix</span>
            </button>

            <button
              onClick={() => setActiveViewTab('deep_dive')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeViewTab === 'deep_dive' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Eye className="w-4 h-4 text-emerald-500" />
              <span>Company Deep Analysis</span>
            </button>

            <button
              onClick={() => setActiveViewTab('inspiration_guide')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeViewTab === 'inspiration_guide' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Section Design Inspirations</span>
            </button>
          </div>

          {/* Search & Filter Inputs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search competitors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white text-xs text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#e14024]"
              />
            </div>

            <div className="flex bg-white rounded-xl border border-slate-300 p-0.5 text-[11px] font-extrabold">
              {(['ALL', 'US', 'Global'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRegionFilter(r)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    selectedRegionFilter === r ? 'bg-[#e14024] text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VIEW 1: COMPLETE BENCHMARK MATRIX TABLE */}
        {activeViewTab === 'matrix' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-[#e14024] uppercase tracking-wider">
                    QUANTITATIVE & QUALITATIVE INDUSTRY AUDIT
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    14-Metric Competitive Scorecard (Ranked #1 to #{filteredCompanies.length})
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Scores based on UX fluidity, conversion rate, payment speed & features.</span>
                </div>
              </div>

              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-4 sticky left-0 bg-slate-100 z-10">Rank & Company</th>
                      <th className="py-4 px-3 text-center">Overall Score</th>
                      <th className="py-4 px-3 text-center">Design</th>
                      <th className="py-4 px-3 text-center">UX</th>
                      <th className="py-4 px-3 text-center">Booking</th>
                      <th className="py-4 px-3 text-center">POS</th>
                      <th className="py-4 px-3 text-center">CRM</th>
                      <th className="py-4 px-3 text-center">AI Features</th>
                      <th className="py-4 px-3 text-center">Payments</th>
                      <th className="py-4 px-3 text-center">Mobile</th>
                      <th className="py-4 px-4 min-w-[240px]">Primary Strength</th>
                      <th className="py-4 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    {filteredCompanies.map((c) => {
                      const isSyncFyre = c.id === 'syncfyre';
                      return (
                        <tr 
                          key={c.id} 
                          className={`hover:bg-slate-50/80 transition-colors ${
                            isSyncFyre ? 'bg-[#fef2f1]/80 font-semibold' : ''
                          }`}
                        >
                          {/* Company Name & Rank */}
                          <td className="py-3.5 px-4 sticky left-0 bg-white z-10 shadow-sm flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                              isSyncFyre ? 'bg-[#e14024] text-white' : 'bg-slate-200 text-slate-800'
                            }`}>
                              #{c.rank}
                            </span>
                            <div>
                              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                                <span>{c.name}</span>
                                {isSyncFyre && (
                                  <span className="text-[10px] font-mono font-extrabold text-white bg-[#e14024] px-1.5 py-0.5 rounded">
                                    OUR OS
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-500">{c.region} • {c.valuation}</div>
                            </div>
                          </td>

                          {/* Overall Score */}
                          <td className="py-3.5 px-3 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-extrabold font-mono ${
                              c.scores.overall >= 95 ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                              c.scores.overall >= 90 ? 'bg-blue-100 text-blue-800' :
                              c.scores.overall >= 85 ? 'bg-slate-200 text-slate-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {c.scores.overall}/100
                            </span>
                          </td>

                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.design}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.ux}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.booking}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.pos}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.crm}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.aiFeatures}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.payments}</td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-700">{c.scores.mobile}</td>

                          {/* Strength */}
                          <td className="py-3.5 px-4 text-slate-600 text-[11px] leading-tight">
                            {c.whatTheyDoBest}
                          </td>

                          {/* Action Button */}
                          <td className="py-3.5 px-4 text-center">
                            <button
                              onClick={() => {
                                setActiveLeaderId(c.id);
                                setActiveViewTab('deep_dive');
                              }}
                              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#e14024] text-white font-extrabold text-[11px] transition-colors cursor-pointer whitespace-nowrap"
                            >
                              Audit Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: DETAILED COMPANY DEEP DIVE AUDIT */}
        {activeViewTab === 'deep_dive' && (
          <div className="space-y-8">
            {/* Top Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-5xl mx-auto">
              {filteredCompanies.map((c) => {
                const isActive = activeLeaderId === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveLeaderId(c.id)}
                    className={`px-4 py-2.5 rounded-2xl border text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded text-[10px] font-extrabold flex items-center justify-center ${
                      isActive ? 'bg-[#e14024] text-white' : 'bg-slate-200 text-slate-800'
                    }`}>
                      #{c.rank}
                    </span>
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Company Detailed Audit Card */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl space-y-8 max-w-5xl mx-auto">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md">
                    {activeCompany.logoInitial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-slate-900">{activeCompany.name}</h3>
                      <span className={`text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-md ${activeCompany.badgeColor}`}>
                        Rank #{activeCompany.rank}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      Region: <strong className="text-slate-800">{activeCompany.region}</strong> • Valuation: <strong className="text-slate-800">{activeCompany.valuation}</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shrink-0">
                  <div className="text-xs text-slate-500 font-bold">Overall Quality Rating</div>
                  <div className="text-3xl font-extrabold text-[#e14024] font-mono mt-0.5">
                    {activeCompany.scores.overall}<span className="text-sm text-slate-400">/100</span>
                  </div>
                </div>
              </div>

              {/* 6 Key Qualitative Analysis Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>1. What They Do Better Than Competitors</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeCompany.whatTheyDoBest}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-extrabold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span>2. High-Conversion Design Patterns</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeCompany.conversionDesignPatterns}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-extrabold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span>3. Frictionless UX Decisions</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeCompany.frictionlessUxDecisions}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span>4. Immediate Trust Creators</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeCompany.immediateTrustCreators}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-extrabold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-600" />
                    <span>5. Most Persuasive Section</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeCompany.mostPersuasiveSection}
                  </p>
                </div>

                <div className="bg-rose-50/80 p-5 rounded-2xl border border-rose-200 space-y-2">
                  <div className="text-xs font-extrabold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>6. What NOT to Copy (Anti-Patterns)</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed font-medium">
                    {activeCompany.whatNotToCopy}
                  </p>
                </div>

              </div>

              {/* SyncFyre Superior Synergy Banner */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-[#e14024] text-white">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#e14024]">
                    SyncFyre OS Superior Design Synergy
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCompany.syncfyreSynergy}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 3: SECTION-BY-SECTION DESIGN INSPIRATIONS */}
        {activeViewTab === 'inspiration_guide' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Architectural Rationale & Section Design Inspirations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Before implementing each component, we evaluated market leader design decisions to maximize conversion, trust, and usability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SECTION_DESIGN_INSPIRATIONS.map((sec, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="text-xs font-mono font-bold text-[#e14024] bg-[#fef2f1] px-2.5 py-1 rounded-md border border-[#fee5e2]">
                      SECTION #{idx + 1}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900">{sec.sectionName}</h4>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Inspired By
                    </div>
                    <p className="text-xs font-semibold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200">
                      {sec.inspiredBy}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Strategic Conversion Logic
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sec.strategicRationale}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200">
                    <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Key Design Highlights
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.keyHighlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-extrabold text-slate-700 bg-white px-2 py-1 rounded-md border border-slate-200">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
