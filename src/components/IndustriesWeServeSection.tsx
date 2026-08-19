import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Star, Calendar, Clock, Users, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface IndustriesWeServeSectionProps {
  onOpenDemoModal: () => void;
}

export interface IndustryTile {
  id: string;
  title: string;
  category: 'beauty' | 'wellness' | 'specialty' | 'medical' | 'fitness';
  image: string;
  tagline: string;
  popularFeatures: string[];
  avgBookingIncrease: string;
  badgeText: string;
}

export const INDUSTRY_TILES: IndustryTile[] = [
  {
    id: 'gym',
    title: 'Gym & Fitness Club',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tagline: 'Turnstile RFID Access, Personal Trainer Scheduling & Auto-Debit Dues',
    popularFeatures: ['RFID Turnstile Integration', 'Trainer Commission Tracking', 'Workout Attendance App'],
    avgBookingIncrease: '+52% Member Retention',
    badgeText: 'Gyms & Clubs'
  },
  {
    id: 'wellness-centre',
    title: 'Wellness Centre',
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Ayurveda, Cryotherapy, Hydrotherapy & Custom Wellness Packages',
    popularFeatures: ['Holistic Intake Forms', 'Therapist Shift Rosters', 'Package Passports'],
    avgBookingIncrease: '+48% Multi-Session Packages',
    badgeText: 'Wellness & Healing'
  },
  {
    id: 'rehab-centre',
    title: 'Rehab & Physio Centre',
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Physiotherapist Appointments, Session Progress Logs & Insurance Invoicing',
    popularFeatures: ['Patient Assessment Charts', 'Multi-Session Rehab Plans', 'Insurance Claim Records'],
    avgBookingIncrease: '+65% On-Time Appointments',
    badgeText: 'Rehab & Physio'
  },
  {
    id: 'beauty-clinic',
    title: 'Beauty Clinic',
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tagline: 'Aesthetic Practitioner Booking, Treatment Notes & Before/After Records',
    popularFeatures: ['HIPAA-Safe Records', 'Treatment Series Billing', 'Botox / Laser Tracking'],
    avgBookingIncrease: '+55% Higher Basket Size',
    badgeText: 'Aesthetic Clinic'
  },
  {
    id: 'tattoo',
    title: 'Tattoo Studio',
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
    tagline: 'Artist Portfolios, Consultation Deposits & Digital Consent Forms',
    popularFeatures: ['Digital Liability Waiver', 'Hourly Rate Calculator', 'Deposit Auto-Collect'],
    avgBookingIncrease: '99% No-Show Reduction',
    badgeText: 'Tattoo & Ink'
  },
  {
    id: 'salon',
    title: 'Salon',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    tagline: 'Stylist Rosters, Chair Rentals & WhatsApp Appointment Reminders',
    popularFeatures: ['Multi-Stylist Calendar', 'Service Add-ons', 'Auto-SMS / WhatsApp Reminders'],
    avgBookingIncrease: '+42% Repeat Clients',
    badgeText: 'Hair & Salon'
  },
  {
    id: 'spa',
    title: 'Spa',
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tagline: 'Therapist Scheduling, Room Allocation & Deposit Payments',
    popularFeatures: ['Room & Bed Locking', 'Package Subscriptions', 'Aromatherapy Add-ons'],
    avgBookingIncrease: '+38% Package Sales',
    badgeText: 'Luxury Spa'
  },
  {
    id: 'barbershop',
    title: 'Barbershop',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Walk-In Queue TV Displays, Chair Selection & Instant UPI Checkouts',
    popularFeatures: ['Queue Live Status', 'Barber Tip Distribution', 'Subscription Trim Passes'],
    avgBookingIncrease: '3x Faster Walk-Ins',
    badgeText: 'Barber & Grooming'
  },
  {
    id: 'pet-salon',
    title: 'Pet Salon',
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    tagline: 'Pet Profile Records, Breed-Based Time Slots & Vaccination Badges',
    popularFeatures: ['Pet Behavior Tags', 'Groomer Station Allocation', 'Vaccination Reminders'],
    avgBookingIncrease: '+45% Monthly Pet Passes',
    badgeText: 'Pet Care'
  },
  {
    id: 'nail-salon',
    title: 'Nail Salon',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    tagline: 'Nail Tech Station Management, Custom Art Upgrades & Loyalty Wallets',
    popularFeatures: ['Nail Art Time Buffers', 'Color Choice Notes', 'Gift Card Sales Engine'],
    avgBookingIncrease: '+50% Digital Gift Cards',
    badgeText: 'Nail Art'
  },
  {
    id: 'skin-clinic',
    title: 'Skin Clinic',
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Dermatology Consultation Slotting, Prescription Notes & Follow-up AI',
    popularFeatures: ['Derm Consult Intake', 'Skincare Product POS', 'Auto Follow-Up SMS'],
    avgBookingIncrease: '+60% Repeat Treatments',
    badgeText: 'Skin & Dermatology'
  },
  {
    id: 'pilates-yoga',
    title: 'Pilates & Yoga Studio',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Mat & Reformer Spot Booking, Class Packs & Instructor Commissions',
    popularFeatures: ['Visual Reformer Map', 'Recurring Class Passes', 'Waitlist Auto-Fill'],
    avgBookingIncrease: '100% Class Occupancy',
    badgeText: 'Yoga & Pilates'
  }
];

export const IndustriesWeServeSection: React.FC<IndustriesWeServeSectionProps> = ({ onOpenDemoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustryModal, setSelectedIndustryModal] = useState<IndustryTile | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Businesses' },
    { id: 'fitness', label: 'Gyms & Fitness' },
    { id: 'wellness', label: 'Wellness & Rehab' },
    { id: 'beauty', label: 'Salons & Barber' },
    { id: 'medical', label: 'Beauty & Skin Clinics' },
    { id: 'specialty', label: 'Tattoo & Specialty' }
  ];

  const filteredTiles = INDUSTRY_TILES.filter(tile => {
    if (selectedCategory === 'all') return true;
    return tile.category === selectedCategory;
  });

  return (
    <section 
      id="industries-we-serve" 
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden border-b border-slate-200/70"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* Background Decorative Graphic Dots */}
      <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none hidden sm:block">
        <div className="grid grid-cols-4 gap-3">
          {Array(16).fill(0).map((_, i) => (
            <div key={i} className="w-2.5 h-6 rounded-full bg-amber-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header - Lean, Minimalist & High Contrast */}
        <div className="max-w-2xl space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e14024]" />
            <span>Industries We Serve</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-[-0.025em] leading-tight">
            Booking & Operations Software for Every Business Type
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
            Select your industry to explore tailored front-desk workflows, turnstile integrations, and commission engines.
          </p>
        </div>

        {/* Category Filter Tabs - Minimalist Pill Styling */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs scale-100 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 8-Tile Image Grid with Refined Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredTiles.map((tile) => (
              <motion.div
                key={tile.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedIndustryModal(tile)}
                className="group relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80"
              >
                {/* Background Unsplash Photo */}
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                />

                {/* Gradient Scrim Overlay for high-contrast legible text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/15 group-hover:from-slate-950/95 transition-all duration-300" />

                {/* Badge Top Left */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-semibold tracking-wide shadow-xs border border-white/40">
                    {tile.badgeText}
                  </span>
                </div>

                {/* Title Overlay in Center */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] drop-shadow-sm group-hover:scale-102 transition-transform duration-300">
                    {tile.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-200 font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1.5 line-clamp-2 max-w-xs leading-relaxed">
                    {tile.tagline}
                  </p>
                </div>

                {/* Bottom CTA bar on hover */}
                <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/25">
                  <span className="text-[10px] font-mono text-emerald-300 font-semibold">{tile.avgBookingIncrease}</span>
                  <div className="flex items-center gap-1 text-white text-[11px] font-semibold">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Callout & Free Trial Banner - Vibrant Standout Aesthetic */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#181126] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-indigo-500/30">
          
          {/* Standout Glowing Ambient Color Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#e14024]/25 via-amber-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-indigo-600/25 to-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,64,36,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl">
              
              {/* Standout Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-purple-500/20 border border-orange-500/40 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                <span>Custom Industry Deployments</span>
              </div>

              {/* High-Impact Headline with Radiant Gradient Text */}
              <h3 className="text-xl sm:text-3xl font-bold tracking-[-0.025em] leading-tight text-white">
                Don't see your specific industry?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-[#ff6b4a] font-extrabold">
                  We configure custom workflows in 10 minutes.
                </span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                SyncFyre's modular workflow engine lets you customize appointment slots, tiered staff commissions, hardware turnstiles, and automated WhatsApp dunning for any specialty business.
              </p>

              {/* Quick Feature Checklist with Standout Accent Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full text-[11px] font-medium shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Zero Code Setup
                </span>
                <span className="inline-flex items-center gap-1.5 text-sky-300 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full text-[11px] font-medium shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                  Free 24h Data Migration
                </span>
                <span className="inline-flex items-center gap-1.5 text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full text-[11px] font-medium shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  Dedicated Account Engineer
                </span>
              </div>
            </div>

            {/* Standout Action CTA Area */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenDemoModal}
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-[#e14024] via-[#f15236] to-amber-500 hover:from-[#d0351b] hover:via-[#e14024] hover:to-amber-600 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(225,64,36,0.35)] hover:shadow-[0_6px_28px_rgba(225,64,36,0.5)] flex items-center justify-center gap-2 cursor-pointer border border-orange-300/30 active:scale-95 select-none"
              >
                <span className="tracking-wide">Launch Custom Instance</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[10px] text-slate-400 text-center lg:text-right font-medium tracking-wide flex items-center justify-center lg:justify-end gap-1">
                <span className="text-amber-400">⚡</span>
                <span>Live Setup in &lt; 2 Minutes • No Credit Card Required</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal for Selected Industry */}
      <AnimatePresence>
        {selectedIndustryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-6 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedIndustryModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="relative h-40 rounded-2xl overflow-hidden -mx-2 -mt-2">
                <img
                  src={selectedIndustryModal.image}
                  alt={selectedIndustryModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/30 mb-1 inline-block">
                    {selectedIndustryModal.badgeText}
                  </span>
                  <h3 className="text-2xl font-black">{selectedIndustryModal.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {selectedIndustryModal.tagline}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    Included Workflows:
                  </div>
                  <div className="space-y-1.5">
                    {selectedIndustryModal.popularFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-900 text-xs font-extrabold flex items-center justify-between">
                  <span>Proven Performance Metric:</span>
                  <span className="font-mono text-emerald-700">{selectedIndustryModal.avgBookingIncrease}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedIndustryModal(null);
                    onOpenDemoModal();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-[#e14024] hover:bg-[#c83218] text-white font-extrabold text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Free Trial for {selectedIndustryModal.title}</span>
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
