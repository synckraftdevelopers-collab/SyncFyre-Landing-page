import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Sparkles, CheckCircle2, Search, Filter, 
  ArrowRight, ExternalLink, Award, Star, Users, Zap, MapPin, Globe, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TrustedBrandsSectionProps {
  onOpenDemoModal: () => void;
}

export interface EnterpriseBrand {
  id: string;
  name: string;
  subtitle?: string;
  category: 'Theme Parks & Resorts' | 'Hospitality & Dining' | 'Automotive & Retail' | 'Beauty & Fashion' | 'Food & Beverage' | 'Government & Enterprise';
  useCase: string;
  outletsPowered: string;
  logoType: 'wonderla' | 'heineken' | 'bridgestone' | 'itc' | 'tajsats' | 'irctc' | 'cremica' | 'hok' | 'bonkers' | 'handful' | 'grihasthee' | 'almostgods' | 'becafe' | 'custom';
  accentColor: string;
  imageUrl?: string;
}

export const ENTERPRISE_BRANDS: EnterpriseBrand[] = [
  // Row 1
  {
    id: 'wonderla',
    name: 'Wonderla',
    subtitle: 'Parks and Resorts',
    category: 'Theme Parks & Resorts',
    useCase: '24/7 Turnstile Gate Entry & QR Pass Ticketing',
    outletsPowered: '4 Large Resorts & Parks',
    logoType: 'wonderla',
    accentColor: '#1d4ed8',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DLAm--8wHAJ_l3qdfY7ti6dhSKsjrQ5Y'
  },
  {
    id: 'heineken',
    name: 'Heineken',
    subtitle: 'Global Beverage Leader',
    category: 'Food & Beverage',
    useCase: 'Venue POS Integration & Multi-Outlet Stock Tracking',
    outletsPowered: '2,500+ Distribution Outlets',
    logoType: 'heineken',
    accentColor: '#15803d',
    imageUrl: 'https://lh3.googleusercontent.com/d/1goZCarEUh4Fi577X6tQ7gev_h2Pm4-h7'
  },
  {
    id: 'bridgestone',
    name: 'Bridgestone',
    subtitle: 'Automotive & Retail',
    category: 'Automotive & Retail',
    useCase: 'Franchise POS Billing & Warranty Passbook OS',
    outletsPowered: '850+ Service Centers',
    logoType: 'bridgestone',
    accentColor: '#dc2626',
    imageUrl: 'https://lh3.googleusercontent.com/d/1pLVGy_oTCMepVvCEQS6yeCYmv2s2eQtQ'
  },
  {
    id: 'itc',
    name: 'ITC Limited',
    subtitle: 'Hospitality & FMCG',
    category: 'Hospitality & Dining',
    useCase: 'Hotel Wellness Spa & Gym Membership OS',
    outletsPowered: '120+ Luxury Hotel Spas',
    logoType: 'itc',
    accentColor: '#1e3a8a',
    imageUrl: 'https://lh3.googleusercontent.com/d/1tDdiYX1SSa4KeMFyQpbuU-7v1nUEE-SD'
  },
  {
    id: 'tajsats',
    name: 'Taj SATS',
    subtitle: 'Air Catering & Hospitality',
    category: 'Hospitality & Dining',
    useCase: 'VIP Lounge Gate Access & Member Billing',
    outletsPowered: '18 Major Airport Lounges',
    logoType: 'tajsats',
    accentColor: '#831843',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Qlttb5iozoxpm_By_55o7IEB6YSISwJn'
  },
  {
    id: 'irctc',
    name: 'IRCTC',
    subtitle: 'Indian Railway Catering & Tourism',
    category: 'Government & Enterprise',
    useCase: 'High-Volume Executive Lounge Access & QR Validation',
    outletsPowered: '45 Railway Lounges',
    logoType: 'irctc',
    accentColor: '#1e40af',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UTauj4uJkxB2p3ISgjNcsbKmpLAoMiqz'
  },
  {
    id: 'cremica',
    name: 'CREMICA',
    subtitle: 'Mrs. Bector\'s Food Specialities',
    category: 'Food & Beverage',
    useCase: 'Retail Counter POS & Franchise ERP Sync',
    outletsPowered: '1,200+ Retail Counters',
    logoType: 'cremica',
    accentColor: '#0369a1',
    imageUrl: 'https://lh3.googleusercontent.com/d/1qakjkknBMXhPsV5BQt6N8cR1zE9nIB9s'
  },

  // Row 2
  {
    id: 'hok',
    name: 'HOK makeup®',
    subtitle: 'Beauty & Cosmetics',
    category: 'Beauty & Fashion',
    useCase: 'Beauty Salon Kiosk & Customer Loyalty Wallet',
    outletsPowered: '65 Studio Stores',
    logoType: 'hok',
    accentColor: '#000000',
    imageUrl: 'https://lh3.googleusercontent.com/d/1jdCM5ygE2wsj4Ny4BY0FBMQmhRSWDLKT'
  },
  {
    id: 'bonkers',
    name: 'BONKERS CORNER',
    subtitle: 'Streetwear & Apparel',
    category: 'Beauty & Fashion',
    useCase: 'Flagship Retail Store POS & Member Rewards',
    outletsPowered: '24 Experience Stores',
    logoType: 'bonkers',
    accentColor: '#0f172a',
    imageUrl: 'https://lh3.googleusercontent.com/d/1-aekb992F7h62clRhDi41ozk9mwKcuB0'
  },
  {
    id: 'handful',
    name: 'Handful of Health',
    subtitle: 'Organic & Wellness Retail',
    category: 'Beauty & Fashion',
    useCase: 'Wellness Store POS & Subscription Auto-Pay',
    outletsPowered: '40 Wellness Stores',
    logoType: 'handful',
    accentColor: '#15803d',
    imageUrl: 'https://lh3.googleusercontent.com/d/1rFju-4vnU92D04AcQZf_ln7vT16b29RK'
  },
  {
    id: 'grihasthee',
    name: 'GRIHASTHEE',
    subtitle: 'Humare Apke Ghar Ki',
    category: 'Automotive & Retail',
    useCase: 'Supermarket Counter Billing & Membership QR',
    outletsPowered: '80 Supermarket Outlets',
    logoType: 'grihasthee',
    accentColor: '#451a03',
    imageUrl: 'https://lh3.googleusercontent.com/d/1uEyU4Ql9cryR-4SC56X3ZDKMuAnXDZ3Y'
  },
  {
    id: 'almostgods',
    name: 'ALMOST GODS',
    subtitle: 'Luxury Fashion & Lifestyle',
    category: 'Beauty & Fashion',
    useCase: 'VIP Member Access & Private Salon Booking',
    outletsPowered: '12 Flagship Boutiques',
    logoType: 'almostgods',
    accentColor: '#18181b',
    imageUrl: 'https://lh3.googleusercontent.com/d/1viPw1ibIbfH6Dv6GibHZiAnkE8kbHgPY'
  },
  {
    id: 'becafe',
    name: 'BeCafé',
    subtitle: 'Gourmet Coffee & Lounges',
    category: 'Hospitality & Dining',
    useCase: 'Café Loyalty Club & WhatsApp Order-Ahead',
    outletsPowered: '95 Café Locations',
    logoType: 'becafe',
    accentColor: '#166534',
    imageUrl: 'https://lh3.googleusercontent.com/d/1nenxRtMFCErrToVNK2pXbJyt585KMnFR'
  }
];

// Helper renderer to render authentic brand logos matching the image
const RenderBrandLogo: React.FC<{ brand?: EnterpriseBrand; logoType: EnterpriseBrand['logoType'] }> = ({ brand, logoType }) => {
  const [imgError, setImgError] = useState(false);

  if (brand?.imageUrl && !imgError) {
    return (
      <div className="flex items-center justify-center w-full h-full max-h-24 max-w-[240px] px-0.5 py-0.5 select-none">
        <img
          src={brand.imageUrl}
          alt={brand.name}
          className="max-h-20 sm:max-h-[82px] md:max-h-[86px] max-w-[210px] sm:max-w-[230px] w-auto h-auto object-contain rounded-md filter drop-shadow-sm transition-transform duration-200 group-hover/card:scale-105"
          referrerPolicy="no-referrer"
          onError={() => {
            // Try thumbnail URL if lh3 fails
            if (brand.imageUrl?.includes('lh3.googleusercontent.com/d/')) {
              const fileId = brand.imageUrl.split('/d/')[1];
              const fallback = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
              if (brand.imageUrl !== fallback) {
                brand.imageUrl = fallback;
                setImgError(false);
                return;
              }
            }
            setImgError(true);
          }}
        />
      </div>
    );
  }
  switch (logoType) {
    case 'wonderla':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full border-2 border-amber-500 border-dashed flex items-center justify-center bg-amber-100 text-amber-700 text-[10px] font-black">
              🎡
            </div>
            <span className="text-lg font-black tracking-tight text-blue-900 font-sans uppercase">
              WONDER<span className="text-amber-500">LA</span>
            </span>
          </div>
          <span className="text-[8px] font-extrabold uppercase tracking-widest text-blue-800 -mt-0.5">
            PARKS AND RESORTS
          </span>
        </div>
      );

    case 'heineken':
      return (
        <div className="flex items-center justify-center gap-1.5 select-none">
          <span className="text-red-600 text-base font-black">★</span>
          <span className="text-xl font-black text-emerald-600 tracking-tight font-serif italic">
            Heineken
          </span>
        </div>
      );

    case 'bridgestone':
      return (
        <div className="flex items-center justify-center gap-1.5 select-none">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-red-600 transform -rotate-12" />
          <span className="text-lg font-black italic tracking-tighter text-slate-900 font-sans uppercase">
            BRIDGESTONE
          </span>
        </div>
      );

    case 'itc':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <div className="w-7 h-7 border-2 border-blue-900 relative flex items-center justify-center rotate-45 mb-0.5">
            <span className="text-[9px] font-black text-blue-900 -rotate-45 font-mono">ITC</span>
          </div>
          <span className="text-[9px] font-extrabold tracking-widest text-blue-950 uppercase">
            ITC Limited
          </span>
        </div>
      );

    case 'tajsats':
      return (
        <div className="flex items-center justify-center gap-2 select-none">
          <span className="text-xs font-black tracking-widest text-amber-800 uppercase font-serif">
            TAJ
          </span>
          <div className="w-6 h-6 rounded-full bg-rose-900 text-white text-[9px] font-extrabold flex items-center justify-center font-sans lowercase">
            sats
          </div>
        </div>
      );

    case 'irctc':
      return (
        <div className="flex items-center justify-center gap-1.5 select-none">
          <div className="w-5 h-5 rounded-full border-2 border-blue-900 flex items-center justify-center text-[8px] font-black text-blue-900">
            Ri
          </div>
          <span className="text-lg font-black tracking-widest text-blue-950 font-sans uppercase">
            IRCTC
          </span>
        </div>
      );

    case 'cremica':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-red-600 px-3 py-0.5 rounded-full text-white text-center shadow-xs">
            <span className="text-[7px] font-bold block text-slate-100 uppercase tracking-tighter">MRS. BECTOR'S</span>
            <span className="text-xs font-black tracking-wider uppercase font-sans">CREMICA</span>
          </div>
        </div>
      );

    case 'hok':
      return (
        <div className="flex items-center justify-center gap-0.5 select-none">
          <span className="text-xl font-black text-slate-950 tracking-tighter uppercase font-sans">
            HOK
          </span>
          <span className="text-sm font-semibold italic text-slate-800 font-serif">
            makeup®
          </span>
        </div>
      );

    case 'bonkers':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <span className="text-base font-black text-slate-950 tracking-tight uppercase font-sans leading-none">
            BONKERS
          </span>
          <span className="text-sm font-black text-slate-950 tracking-tight uppercase font-sans leading-none">
            CORNER
          </span>
        </div>
      );

    case 'handful':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-black">
            <span>🌿</span>
            <span className="text-amber-500">✨</span>
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-tight font-serif italic">
            Handful of Health
          </span>
        </div>
      );

    case 'grihasthee':
      return (
        <div className="bg-[#451a03] text-amber-100 px-3 py-1 rounded-md text-center select-none">
          <div className="flex items-center justify-center gap-1 text-[11px] font-black tracking-wide font-serif">
            <span>🛒</span>
            <span className="uppercase">GRIHASTHEE</span>
          </div>
          <span className="text-[7px] block font-mono text-amber-200/80 -mt-0.5 uppercase tracking-tighter">
            HUMARE APKE GHAR KI
          </span>
        </div>
      );

    case 'almostgods':
      return (
        <div className="flex items-center justify-center select-none">
          <span className="text-base font-black text-slate-950 tracking-widest font-serif uppercase">
            ALMOST GODS
          </span>
        </div>
      );

    case 'becafe':
      return (
        <div className="flex items-center justify-center select-none">
          <div className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500 shadow-xs">
            <span className="text-[10px]">☕</span>
            <span className="text-xs font-extrabold tracking-tight font-serif italic">BeCafé</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const TrustedBrandsSection: React.FC<TrustedBrandsSectionProps> = ({ onOpenDemoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeBrandModal, setActiveBrandModal] = useState<EnterpriseBrand | null>(null);

  const categories = [
    'ALL',
    'Theme Parks & Resorts',
    'Hospitality & Dining',
    'Automotive & Retail',
    'Beauty & Fashion',
    'Food & Beverage',
    'Government & Enterprise'
  ];

  const filteredBrands = ENTERPRISE_BRANDS.filter(b => {
    if (selectedCategory === 'ALL') return true;
    return b.category === selectedCategory;
  });

  return (
    <section 
      id="trusted-brands" 
      className="py-14 sm:py-20 bg-gradient-to-r from-sky-50/70 via-amber-50/40 to-orange-50/50 relative overflow-hidden border-y border-slate-200/70"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200/90 shadow-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#e14024]" />
            <span>Trusted by Industry Leaders & Enterprise Brands</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Powering Front-Desk Operations & Turnstile Access for Premier Brands
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            From theme parks and luxury hotel lounges to high-volume retail chains and boutique salons — SyncFyre OS handles high-speed POS billing, gate security, and instant WhatsApp member engagement.
          </p>
        </div>

        {/* Category Filter Pills & Marquee Indicator */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto p-2 rounded-2xl sm:rounded-full bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none whitespace-nowrap ${
                    isSelected
                      ? 'bg-slate-900 text-white font-bold shadow-xs border border-slate-800 backdrop-blur-md scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-950 bg-white/30 hover:bg-white/80 border border-white/50 hover:border-white/90 backdrop-blur-sm active:scale-95'
                  }`}
                  style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
                >
                  <span className="flex items-center gap-1.5">
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#e14024]" />
                    )}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Live Ticker — Hover to Pause • Click Logo for Case Study</span>
          </div>
        </div>

        {/* Dual Opposing Direction Marquee Rows */}
        {(() => {
          const row1Brands = filteredBrands.filter((_, idx) => idx % 2 === 0);
          const row2Brands = filteredBrands.filter((_, idx) => idx % 2 !== 0);

          const row1 = selectedCategory === 'ALL' 
            ? ENTERPRISE_BRANDS.slice(0, 7)
            : (row1Brands.length > 0 ? row1Brands : filteredBrands);

          const row2 = selectedCategory === 'ALL' 
            ? ENTERPRISE_BRANDS.slice(7)
            : (row2Brands.length > 0 ? row2Brands : filteredBrands);

          const repeatCount = 4;
          const marqueeRow1 = Array(repeatCount).fill(row1).flat();
          const marqueeRow2 = Array(repeatCount).fill(row2).flat();

          return (
            <div className="group-marquee relative overflow-hidden py-3 space-y-4">
              {/* Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-sky-50 via-sky-50/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent z-20 pointer-events-none" />

              {/* Row 1: Moving RIGHT */}
              <div className="flex w-max gap-3.5 sm:gap-4 animate-marquee-right">
                {marqueeRow1.map((brand, index) => (
                  <div
                    key={`row1-${brand.id}-${index}`}
                    onClick={() => setActiveBrandModal(brand)}
                    className="w-48 sm:w-56 md:w-60 shrink-0 bg-white rounded-2xl border border-slate-200/90 hover:border-[#e14024]/50 shadow-xs hover:shadow-md transition-all duration-300 p-2.5 sm:p-3 min-h-[102px] flex flex-col items-center justify-center relative cursor-pointer overflow-hidden group/card"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e14024]/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <RenderBrandLogo brand={brand} logoType={brand.logoType} />
                    <div className="absolute bottom-1 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1 text-[9px] font-mono font-bold text-[#e14024]">
                      <span>Details</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Moving LEFT */}
              <div className="flex w-max gap-3.5 sm:gap-4 animate-marquee-left">
                {marqueeRow2.map((brand, index) => (
                  <div
                    key={`row2-${brand.id}-${index}`}
                    onClick={() => setActiveBrandModal(brand)}
                    className="w-48 sm:w-56 md:w-60 shrink-0 bg-white rounded-2xl border border-slate-200/90 hover:border-[#e14024]/50 shadow-xs hover:shadow-md transition-all duration-300 p-2.5 sm:p-3 min-h-[102px] flex flex-col items-center justify-center relative cursor-pointer overflow-hidden group/card"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e14024]/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <RenderBrandLogo brand={brand} logoType={brand.logoType} />
                    <div className="absolute bottom-1 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1 text-[9px] font-mono font-bold text-[#e14024]">
                      <span>Details</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}


        {/* Trust Badges Strip */}
        <div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200"
          style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
        >
          <div className="p-2 space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">1,400+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">Enterprise Locations</div>
          </div>

          <div className="p-2 space-y-1 pt-4 lg:pt-2">
            <div className="text-2xl sm:text-3xl font-bold text-[#e14024] tracking-tight">12.4M+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">Annual Pass Validations</div>
          </div>

          <div className="p-2 space-y-1 pt-4 lg:pt-2">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">99.99%</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">Gate Access Uptime</div>
          </div>

          <div className="p-2 space-y-1 pt-4 lg:pt-2">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">&lt; 200ms</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold tracking-wide">QR Gate Unlock Speed</div>
          </div>
        </div>

        {/* Quick CTA Prompt */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-extrabold text-slate-800 hover:text-[#e14024] transition-colors cursor-pointer bg-white px-6 py-3 rounded-xl border border-slate-300 hover:border-[#e14024] shadow-xs"
          >
            <Sparkles className="w-4.5 h-4.5 text-[#e14024]" />
            <span>Explore Custom Enterprise Solutions for Your Outlets</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>

      {/* Interactive Brand Detail Modal */}
      <AnimatePresence>
        {activeBrandModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-6 relative overflow-hidden"
            >
              <button
                onClick={() => setActiveBrandModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-center min-w-[120px]">
                  <RenderBrandLogo brand={activeBrandModal} logoType={activeBrandModal.logoType} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#e14024] bg-[#fef2f1] px-2 py-0.5 rounded border border-[#fee5e2] inline-block mb-1">
                    {activeBrandModal.category}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{activeBrandModal.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{activeBrandModal.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-extrabold text-slate-400 uppercase tracking-wider block">SyncFyre OS Deployment:</span>
                  <span className="font-extrabold text-slate-900 block text-sm">{activeBrandModal.useCase}</span>
                </div>

                <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-800 font-bold">
                  <span>Outlets / Facilities Powered:</span>
                  <span className="font-mono text-sm">{activeBrandModal.outletsPowered}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setActiveBrandModal(null);
                    onOpenDemoModal();
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#e14024] hover:bg-[#c83218] text-white font-extrabold text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Enterprise Demo Like {activeBrandModal.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
