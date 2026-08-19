import React, { useState } from 'react';
import { 
  SlidersHorizontal, Headphones, GraduationCap, RefreshCw, 
  ShieldCheck, CheckCircle2, Clock, MessageSquare, Video, 
  FileSpreadsheet, Database, ArrowRight, Sparkles, Award, 
  PhoneCall, Zap, UserCheck, Lock, Play, HelpCircle, ChevronRight,
  Shield, Check, AlertCircle, RefreshCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OnboardingGuaranteeSectionProps {
  onOpenDemoModal: () => void;
}

type PillarId = 'flexible_plans' | 'dedicated_support' | 'guided_training' | 'data_migration';

export const OnboardingGuaranteeSection: React.FC<OnboardingGuaranteeSectionProps> = ({ onOpenDemoModal }) => {
  const [activePillar, setActivePillar] = useState<PillarId>('data_migration');
  const [selectedCurrentSoftware, setSelectedCurrentSoftware] = useState<string>('mindbody');

  const pillars = [
    {
      id: 'flexible_plans' as PillarId,
      title: 'Flexible Plans',
      subtitle: 'Zero Lock-in Contracts & Transparent Scaling',
      icon: SlidersHorizontal,
      badge: 'NO LOCK-IN',
      color: 'bg-[#e14024]',
      lightBg: 'bg-[#fef2f1]',
      borderColor: 'border-[#fee5e2]',
      textColor: 'text-[#e14024]',
      keyMetrics: [
        { label: 'Contract Obligation', value: '0 Days' },
        { label: 'Hidden Add-on Fees', value: '₹0 / $0' },
        { label: 'Billing Flexibility', value: 'Monthly / Annual' },
      ],
      features: [
        'Pay monthly or annually with instant 20% discount on yearly tiers.',
        'Upgrade, downgrade, or adjust staff user seats in 1-click from HQ panel.',
        'Renovation & Seasonal Pause: Suspend account active billing during facility upgrades.',
        'Zero per-SMS or per-WhatsApp charges — native Cloud API included in flat pricing.',
      ]
    },
    {
      id: 'dedicated_support' as PillarId,
      title: 'Dedicated Support',
      subtitle: 'Sub-5 Minute SLA Response via VIP WhatsApp',
      icon: Headphones,
      badge: '5-MIN SLA',
      color: 'bg-blue-600',
      lightBg: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      keyMetrics: [
        { label: 'Avg WhatsApp Response', value: '< 4.8 Mins' },
        { label: 'Customer Satisfaction', value: '99.4%' },
        { label: 'Assigned Specialist', value: '1-on-1 Named' },
      ],
      features: [
        'Direct 1-on-1 WhatsApp chat group with your assigned SyncFyre Account Engineer.',
        'Priority phone hotline for peak weekend reception & door turnstile emergencies.',
        'Proactive health checks: Our team monitors payment bounce rates & alerts you.',
        'Multi-lingual support available in English, Hindi, Hinglish, & regional languages.',
      ]
    },
    {
      id: 'guided_training' as PillarId,
      title: 'Guided Training',
      subtitle: 'Staff Certification & Role-Based Video Playbooks',
      icon: GraduationCap,
      badge: 'STAFF READY',
      color: 'bg-purple-600',
      lightBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      keyMetrics: [
        { label: 'Live Training Hours', value: 'Unlimited' },
        { label: 'Staff Prep Time', value: '30 Mins' },
        { label: 'Role Playbooks', value: 'Front-Desk, Trainers, HQ' },
      ],
      features: [
        'Live 1-on-1 Zoom/Google Meet video sessions tailored for reception, trainers, & managers.',
        'Interactive dummy sandbox environment to let staff practice check-ins with zero risk.',
        'Byte-sized 2-minute video playbooks for instant front-desk onboarding of new hires.',
        'SyncFyre Staff Mastery Certification badges issued upon passing quick 5-min checks.',
      ]
    },
    {
      id: 'data_migration' as PillarId,
      title: 'Smooth Data Migration',
      subtitle: '24-Hour Zero-Downtime Data Transfer Guarantee',
      icon: RefreshCw,
      badge: '24-HR GUARANTEE',
      color: 'bg-emerald-600',
      lightBg: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      keyMetrics: [
        { label: 'Transfer Downtime', value: '0 Seconds' },
        { label: 'Data Accuracy Rate', value: '100% Guaranteed' },
        { label: 'Profiles Migrated', value: '1.4M+ Records' },
      ],
      features: [
        'White-glove migration team handles all CSV/Excel/Database exports from Mindbody, Zenoti, etc.',
        'Complete transfer of client profiles, active membership packages, class credits, & debt balances.',
        'Zero lost revenue: Historical billing dates and recurring UPI mandates re-mapped seamlessly.',
        'Double-verification check with your manager before flipping the live switch.',
      ]
    }
  ];

  const currentPillar = pillars.find(p => p.id === activePillar) || pillars[0];

  const softwareMigrationSpecs: Record<string, { name: string; estTime: string; autoImportItems: string[]; riskMitigation: string }> = {
    mindbody: {
      name: 'Mindbody Online',
      estTime: '12 - 18 Hours',
      autoImportItems: ['Client Master Profiles & Photos', 'Active Auto-pay Contracts', 'Unused Class Packs & Expiry Dates', 'Trainer Schedules & Historical Logs', 'Outstanding Customer Debts'],
      riskMitigation: '100% preservation of recurring credit card/UPI tokens without asking clients to re-enter details.'
    },
    zenoti: {
      name: 'Zenoti Spa & Salon OS',
      estTime: '14 - 20 Hours',
      autoImportItems: ['Guest Service Histories & Formula Notes', 'Gift Cards & Prepaid Wallet Balances', 'Stylist Commission Tiers & Payroll Data', 'Inventory Stock Master & Barcodes', 'Multi-Outlet Membership Credits'],
      riskMitigation: 'Seamless cross-branch credit mapping preserving all customer loyalty wallet balances.'
    },
    spreadsheets: {
      name: 'Excel / Google Sheets / Paper Registers',
      estTime: '6 - 12 Hours',
      autoImportItems: ['Member Names & WhatsApp Phone Numbers', 'Package Expiry Dates & Remaining Visits', 'Payment Dues & Outstanding Balances', 'Locker Numbers & Hardware Badges'],
      riskMitigation: 'Automated AI data cleanup corrects duplicate entries and broken phone numbers instantly.'
    },
    generic_pos: {
      name: 'Generic POS (Square, Petpooja, Fresha, Local POS)',
      estTime: '12 - 24 Hours',
      autoImportItems: ['Customer Contact Masters', 'Item Master Catalogs & Price Lists', 'Historical Sales Invoices & GST Registers', 'Staff Clock-in Logs'],
      riskMitigation: 'Direct CSV mapping script imports all past transaction history into SyncFyre analytics.'
    }
  };

  const selectedSoftwareSpec = softwareMigrationSpecs[selectedCurrentSoftware] || softwareMigrationSpecs['mindbody'];

  const migrationSteps = [
    {
      hour: 'Hour 0',
      title: 'Secure Data Export',
      desc: 'Our migration team collects your existing database files or spreadsheet backups under strict NDA.'
    },
    {
      hour: 'Hour 4',
      title: 'AI Cleaning & Mapping',
      desc: 'SyncFyre algorithms scrub duplicates, fix invalid phone numbers, and map membership credits.'
    },
    {
      hour: 'Hour 12',
      title: 'Sandbox Audit & Staff Training',
      desc: 'You review your imported records in a private sandbox while staff completes 30-min video walkthroughs.'
    },
    {
      hour: 'Hour 24',
      title: '1-Click Go-Live & Turnstile Sync',
      desc: 'Your SyncFyre OS flips live with zero facility downtime. Door turnstiles & WhatsApp AI activate.'
    }
  ];

  return (
    <section id="onboarding-guarantee" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e14024]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-200 uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ZERO-STRESS TRANSITION GUARANTEE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Flexible Plans with Dedicated Support, Guided Training, & Smooth Data Migration
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Switching business software shouldn't feel scary. We eliminate customer anxiety with white-glove data transfer, live staff coaching, and a sub-5 minute SLA WhatsApp support team.
          </p>
        </div>

        {/* 4 Pillars Interactive Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activePillar === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all border cursor-pointer relative overflow-hidden flex flex-col justify-between space-y-3 ${
                  isActive 
                    ? 'bg-white border-[#e14024] shadow-xl ring-2 ring-[#e14024]/30 scale-[1.02]' 
                    : 'bg-white/90 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#e14024]/10 rounded-bl-full pointer-events-none" />
                )}

                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? p.color : 'bg-slate-100 text-slate-600'}`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-700'}`} />
                  </div>

                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${isActive ? 'bg-slate-900 text-white font-mono' : 'bg-slate-100 text-slate-600'}`}>
                    {p.badge}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base font-black ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                    {p.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#e14024] pt-1">
                  <span>Explore Pillar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Spotlight Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8"
          >
            {/* Header of Active Pillar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${currentPillar.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <currentPillar.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-extrabold text-[#e14024] bg-[#fef2f1] px-2.5 py-0.5 rounded-md border border-[#fee5e2]">
                      PILLAR GUARANTEE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{currentPillar.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm font-medium mt-1">{currentPillar.subtitle}</p>
                </div>
              </div>

              {/* Key Pillar Metrics */}
              <div className="grid grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                {currentPillar.keyMetrics.map((m, idx) => (
                  <div key={idx} className="text-center px-2">
                    <div className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider">{m.label}</div>
                    <div className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Body: Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPillar.features.map((feat, idx) => (
                <div key={idx} className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                    {feat}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Interactive Data Migration Calculator & Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>INTERACTIVE MIGRATION AUDITOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                How SyncFyre Migrates Your Existing Software in 24 Hours
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Select your current platform to see what our white-glove engineering team imports automatically.
              </p>
            </div>

            {/* Software Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(softwareMigrationSpecs).map((key) => {
                const isSelected = selectedCurrentSoftware === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCurrentSoftware(key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#e14024] text-white border-[#e14024] shadow-md scale-102'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {softwareMigrationSpecs[key].name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Migration Spec Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-4 bg-slate-50/80 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-500">Migrating From: <strong className="text-slate-900 font-black">{selectedSoftwareSpec.name}</strong></span>
                <span className="text-xs font-mono font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Est. Completion: {selectedSoftwareSpec.estTime}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Automated Import Coverage (100% Preserved)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSoftwareSpec.autoImportItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200 font-semibold shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs text-emerald-900 bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 flex items-start gap-2.5 font-medium">
                <Shield className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block font-black">Zero Revenue Risk Guarantee:</strong>
                  {selectedSoftwareSpec.riskMitigation}
                </div>
              </div>
            </div>

            {/* 24-Hour Timeline Visual */}
            <div className="lg:col-span-5 space-y-3 bg-slate-50/80 p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>24-Hour Go-Live Roadmap</span>
                <Clock className="w-4 h-4 text-[#e14024]" />
              </div>

              <div className="space-y-3.5 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                {migrationSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-3 pl-2">
                    <div className="w-7 h-7 rounded-full bg-[#e14024] text-white font-mono text-[10px] font-extrabold flex items-center justify-center shrink-0 z-10 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-900">{step.title}</span>
                        <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">{step.hour}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium leading-snug mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Onboarding Peace of Mind Banner CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-slate-700">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm border border-amber-400/30">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>READY TO MIGRATE WITHOUT STRESS?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Let Our Onboarding Engineers Handle Your Transition Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium">
              Schedule a free 15-minute consultation. We review your current data, prepare a custom migration blueprint, and give you an exact 24-hour go-live target.
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <button
              onClick={onOpenDemoModal}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-[#e14024] hover:bg-[#c83218] text-white font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Schedule Free Onboarding Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
