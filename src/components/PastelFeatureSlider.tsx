import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Receipt, Package, Megaphone, 
  BarChart3, ShieldCheck, Building, Sparkles, ArrowRight,
  Printer, Cloud, Gift, HardDrive, DoorOpen, Store
} from 'lucide-react';
import { motion } from 'motion/react';

interface PastelFeatureSliderProps {
  onOpenDemoModal: () => void;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  bgClass: string;
  borderClass: string;
  titleColor: string;
  badgeBg: string;
  badgeText: string;
  badgeContent: string;
  iconType: 'billing' | 'inventory' | 'crm' | 'dashboard' | 'gate' | 'franchise';
  highlightText?: string;
}

export const PASTEL_CARDS: FeatureCardItem[] = [
  {
    id: 'billing',
    title: 'Billing',
    description: "Rapidly generate bills for your customers and process faster checkouts with SyncFyre's super-integrated billing software.",
    bgClass: 'bg-[#fffbeb]',
    borderClass: 'border-[#fde68a]',
    titleColor: 'text-[#d97706]',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    badgeContent: '1.4s Express POS',
    iconType: 'billing',
    highlightText: 'Split Payments • Dynamic UPI • GST Invoices'
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: "SyncFyre's enhanced Inventory Management Software helps you stay ahead of all your in-transit and current stock with auto cloud sync and adaptive features.",
    bgClass: 'bg-[#f0f9ff]',
    borderClass: 'border-[#bae6fd]',
    titleColor: 'text-[#0284c7]',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800',
    badgeContent: 'Auto Cloud Sync',
    iconType: 'inventory',
    highlightText: 'Low Stock Alerts • Supplier POs • Batch Tracking'
  },
  {
    id: 'crm',
    title: 'CRM & Loyalty',
    description: 'Transform your walk-in customers into regulars with exciting rewards, loyalty discounts, vouchers, offers, giveaways, etc.',
    bgClass: 'bg-[#f0fdf4]',
    borderClass: 'border-[#bbf7d0]',
    titleColor: 'text-[#16a34a]',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    badgeContent: 'WhatsApp Automation',
    iconType: 'crm',
    highlightText: 'Cashback Wallets • Birthday Offers • Win-Back AI'
  },
  {
    id: 'dashboard',
    title: 'Reporting & Cloud Dashboard',
    description: "SyncFyre gives you a gateway to an all-adaptive Cloud Dashboard facilitating secure business operations without occupying your device's storage.",
    bgClass: 'bg-[#fff1f2]',
    borderClass: 'border-[#fecdd3]',
    titleColor: 'text-[#e11d48]',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    badgeContent: 'Real-Time Insights',
    iconType: 'dashboard',
    highlightText: 'Zero Local Disk Use • Live Multi-Outlet Analytics'
  },
  {
    id: 'gate',
    title: 'Turnstile & QR Access',
    description: 'Enable touchless high-speed QR ticket scanning at turnstile gates and membership doors with sub-second cloud authorization.',
    bgClass: 'bg-[#faf5ff]',
    borderClass: 'border-[#e9d5ff]',
    titleColor: 'text-[#9333ea]',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    badgeContent: 'Gate Hardware OS',
    iconType: 'gate',
    highlightText: '< 200ms Scan • Offline Local Fallback • Anti-Passback'
  },
  {
    id: 'franchise',
    title: 'Franchise & Multi-Outlet HQ',
    description: 'Centralized HQ command center to manage pricing, stock transfers, staff permissions, and cross-branch customer roaming across all locations.',
    bgClass: 'bg-[#fff7ed]',
    borderClass: 'border-[#fed7aa]',
    titleColor: 'text-[#ea580c]',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
    badgeContent: 'Multi-Location HQ',
    iconType: 'franchise',
    highlightText: 'Role Permissions • Stock Roaming • Single Sign-On'
  }
];

// Custom vector illustration components matching video aesthetic
const AnimatedVectorIllustration: React.FC<{ iconType: FeatureCardItem['iconType'] }> = ({ iconType }) => {
  switch (iconType) {
    case 'billing':
      return (
        <div className="relative w-full h-28 bg-white/70 backdrop-blur-xs rounded-2xl border border-amber-200/80 p-3 flex flex-col items-center justify-between overflow-hidden group/icon">
          <div className="w-full flex items-center justify-between text-amber-900/60 text-[10px] font-mono font-bold">
            <span>POS #4092</span>
            <span className="flex items-center gap-1 text-emerald-600 font-extrabold">● PAID</span>
          </div>

          <div className="relative w-20 h-14 bg-amber-50 rounded-lg border border-amber-300 flex items-center justify-center shadow-xs">
            {/* Thermal Printer Header */}
            <div className="absolute top-0 inset-x-0 h-2 bg-slate-800 rounded-t-lg flex items-center justify-center">
              <div className="w-6 h-0.5 bg-emerald-400 rounded-full" />
            </div>

            {/* Receipt Paper Rolling Out */}
            <div className="w-14 bg-white border border-amber-200 rounded-b shadow-md p-1.5 space-y-1 transform group-hover/icon:translate-y-2 transition-transform duration-300">
              <div className="w-full h-1 bg-amber-200 rounded-full" />
              <div className="w-3/4 h-1 bg-amber-100 rounded-full" />
              <div className="w-1/2 h-1 bg-emerald-300 rounded-full" />
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-extrabold text-amber-800 font-mono">
            ₹1,250.00 • Razorpay UPI
          </div>
        </div>
      );

    case 'inventory':
      return (
        <div className="relative w-full h-28 bg-white/70 backdrop-blur-xs rounded-2xl border border-sky-200/80 p-3 flex flex-col items-center justify-between overflow-hidden group/icon">
          <div className="w-full flex items-center justify-between text-sky-900/60 text-[10px] font-mono font-bold">
            <span>STOCK SYNC</span>
            <span className="text-sky-600 font-extrabold">100% IN SYNC</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Box 1 */}
            <div className="w-9 h-9 bg-sky-100 rounded-lg border border-sky-300 flex items-center justify-center text-sky-700 font-black text-xs shadow-xs transform group-hover/icon:-translate-y-1 transition-transform">
              📦
            </div>
            {/* Sync Arrows */}
            <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-[10px] font-bold animate-spin [animation-duration:8s]">
              ↻
            </div>
            {/* Box 2 */}
            <div className="w-9 h-9 bg-sky-200 rounded-lg border border-sky-400 flex items-center justify-center text-sky-800 font-black text-xs shadow-xs transform group-hover/icon:translate-y-1 transition-transform">
              🏷️
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-extrabold text-sky-800 font-mono">
            Auto Reorder Threshold Met
          </div>
        </div>
      );

    case 'crm':
      return (
        <div className="relative w-full h-28 bg-white/70 backdrop-blur-xs rounded-2xl border border-emerald-200/80 p-3 flex flex-col items-center justify-between overflow-hidden group/icon">
          <div className="w-full flex items-center justify-between text-emerald-900/60 text-[10px] font-mono font-bold">
            <span>REWARDS ENGINE</span>
            <span className="text-emerald-600 font-extrabold">★ 500 PTS</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-md transform group-hover/icon:scale-110 transition-transform">
              <Megaphone className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left">
              <div className="text-xs font-black text-emerald-900">VIP Cash Pass</div>
              <div className="text-[10px] text-emerald-700 font-semibold">10% OFF Next Visit</div>
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-extrabold text-emerald-800 font-mono">
            Sent via WhatsApp Bot
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className="relative w-full h-28 bg-white/70 backdrop-blur-xs rounded-2xl border border-rose-200/80 p-3 flex flex-col items-center justify-between overflow-hidden group/icon">
          <div className="w-full flex items-center justify-between text-rose-900/60 text-[10px] font-mono font-bold">
            <span>CLOUD VAULT</span>
            <span className="text-rose-600 font-extrabold">LIVE METRICS</span>
          </div>

          <div className="w-full flex items-end justify-center gap-1.5 h-10 px-2">
            <div className="w-4 bg-rose-200 rounded-t h-4 group-hover/icon:h-6 transition-all duration-300" />
            <div className="w-4 bg-rose-300 rounded-t h-7 group-hover/icon:h-9 transition-all duration-300" />
            <div className="w-4 bg-rose-500 rounded-t h-9 group-hover/icon:h-10 transition-all duration-300" />
            <div className="w-4 bg-rose-400 rounded-t h-6 group-hover/icon:h-8 transition-all duration-300" />
            <div className="w-4 bg-rose-600 rounded-t h-10 group-hover/icon:h-7 transition-all duration-300" />
          </div>

          <div className="w-full text-center text-[11px] font-extrabold text-rose-800 font-mono">
            +38% Revenue vs Last Month
          </div>
        </div>
      );

    case 'gate':
      return (
        <div className="relative w-full h-28 bg-white/70 backdrop-blur-xs rounded-2xl border border-purple-200/80 p-3 flex flex-col items-center justify-between overflow-hidden group/icon">
          <div className="w-full flex items-center justify-between text-purple-900/60 text-[10px] font-mono font-bold">
            <span>GATE CONTROL</span>
            <span className="text-purple-600 font-extrabold">UNLOCKED</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
              QR
            </div>
            <div className="h-0.5 w-6 bg-purple-400 border-dashed border-b border-purple-600" />
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-md transform group-hover/icon:rotate-45 transition-transform">
              ✓
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-extrabold text-purple-800 font-mono">
            Turnstile Gate #1 Cleared
          </div>
        </div>
      );

    case 'franchise':
      return (
        <div className="relative w-full h-28 bg-white/70 backdrop-blur-xs rounded-2xl border border-orange-200/80 p-3 flex flex-col items-center justify-between overflow-hidden group/icon">
          <div className="w-full flex items-center justify-between text-orange-900/60 text-[10px] font-mono font-bold">
            <span>HQ COMMAND</span>
            <span className="text-orange-600 font-extrabold">12 BRANCHES</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xs font-black shadow-md">
              HQ
            </div>
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-orange-200 text-orange-900 rounded flex items-center justify-center text-[10px] font-bold">B1</div>
              <div className="w-6 h-6 bg-orange-200 text-orange-900 rounded flex items-center justify-center text-[10px] font-bold">B2</div>
              <div className="w-6 h-6 bg-orange-200 text-orange-900 rounded flex items-center justify-center text-[10px] font-bold">B3</div>
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-extrabold text-orange-800 font-mono">
            Unified Customer Roaming
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const PastelFeatureSlider: React.FC<PastelFeatureSliderProps> = ({ onOpenDemoModal }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scrollByOffset = (offset: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  // Drag handlers for smooth natural mouse scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed factor
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section 
      className="py-14 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200/70"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e14024]" />
              <span>Modular Operating System</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.025em] leading-tight">
              All-in-One Engine Engineered for High-Speed Front-Desk Operations
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
              Explore SyncFyre's core modular applications engineered with pastel clarity, instant offline-sync, and automated engagement.
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByOffset(-340)}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95 border border-slate-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByOffset(340)}
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95 border border-slate-800"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Pastel Card Carousel */}
        <div className="relative">
          {/* Subtle Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-4 overflow-x-auto pb-5 pt-1 scrollbar-none snap-x snap-mandatory ${
              isMouseDown ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PASTEL_CARDS.map((card) => (
              <div
                key={card.id}
                className={`w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl p-5 border ${card.bgClass} ${card.borderClass} shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md ${card.badgeBg} ${card.badgeText} border border-black/5`}>
                    {card.badgeContent}
                  </span>

                  <div className="w-6 h-6 rounded-full bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
                    <ArrowRight className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className={`text-lg sm:text-xl font-bold tracking-[-0.015em] leading-snug ${card.titleColor}`}>
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-xs leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Animated Vector Illustration */}
                <div className="pt-1">
                  <AnimatedVectorIllustration iconType={card.iconType} />
                </div>

                {/* Bottom Highlight Footer */}
                {card.highlightText && (
                  <div className="pt-2 border-t border-black/5 text-[10px] font-medium text-slate-500 flex items-center justify-between">
                    <span>{card.highlightText}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Bar & Drag Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-full sm:w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-slate-900 rounded-full transition-all duration-150"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>
            <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
              Drag or Scroll Cards
            </span>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer select-none active:scale-95 border border-slate-800"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e14024]" />
            <span>Interactive Feature Walkthrough</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};
