import React, { useState } from 'react';
import { 
  Check, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  Lock, 
  Smartphone, 
  Activity, 
  FileText, 
  Shield, 
  Star, 
  ChevronDown, 
  Building2, 
  HelpCircle,
  Flame,
  CheckCircle2,
  Headphones,
  GraduationCap,
  RefreshCw,
  SlidersHorizontal,
  UserCheck,
  Clock,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingSectionProps {
  onOpenDemoModal: () => void;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice?: number;
  monthlyDisplayPrice?: string;
  yearlyTotal?: number;
  yearlyDisplayPrice?: string;
  yearlyMonthlyEquivalent?: string;
  savingCaption?: string;
  isCustomPricing?: boolean;
  customPricingTitle?: string;
  customPricingSubtitle?: string;
  buttonText: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for new gyms and fitness studios.',
    monthlyPrice: 1499,
    monthlyDisplayPrice: '₹1,499',
    yearlyTotal: 14390,
    yearlyDisplayPrice: '₹14,390',
    yearlyMonthlyEquivalent: '₹1,199',
    savingCaption: 'Save ₹3,598 annually',
    buttonText: 'Start Free Trial',
    features: [
      'Up to 500 Members',
      'Member Management',
      'Membership Plans',
      'QR / Barcode Attendance',
      'Billing & Receipts',
      'Staff Management',
      'WhatsApp Reminders',
      'Reports Dashboard',
      'Email Support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Perfect for growing gyms.',
    monthlyPrice: 3999,
    monthlyDisplayPrice: '₹3,999',
    yearlyTotal: 38390,
    yearlyDisplayPrice: '₹38,390',
    yearlyMonthlyEquivalent: '₹3,199',
    savingCaption: 'Save ₹9,598 annually',
    buttonText: 'Start Free Trial',
    highlighted: true,
    badge: 'MOST POPULAR',
    features: [
      'Everything in Starter',
      'Unlimited Members',
      'Lead CRM',
      'Trainer Management',
      'Workout Plans',
      'Diet Plans',
      'Payment Tracking',
      'Member Mobile App',
      'WhatsApp Automation',
      'Advanced Analytics',
      'Priority Support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Built for gym chains, franchises and multi-location centers.',
    isCustomPricing: true,
    customPricingTitle: 'Custom Pricing',
    customPricingSubtitle: 'Tailored for gym chains & multi-branch franchises',
    savingCaption: 'Multi-branch volume discount',
    buttonText: 'Contact Sales',
    features: [
      'Everything in Professional',
      'Unlimited Branches',
      'Central Master Dashboard',
      'Franchise Management',
      'Advanced Role Permissions',
      'White Label Custom App',
      'API Integrations',
      'AI Insights & SLA',
      'Dedicated Account Manager',
      '24/7 VIP Phone Support',
    ],
  },
];

const INCLUDED_FEATURES = [
  { icon: ShieldCheck, label: 'Secure Cloud Hosting' },
  { icon: Database, label: 'Daily Automatic Backups' },
  { icon: Sparkles, label: 'Unlimited Updates' },
  { icon: Lock, label: 'SSL Security' },
  { icon: Smartphone, label: 'Mobile Friendly' },
  { icon: Activity, label: '99.9% Uptime' },
  { icon: FileText, label: 'GST Invoice' },
  { icon: Shield, label: 'Data Encryption' },
];

const TRUST_LOGOS = [
  { name: 'Gold\'s Gym', location: '12+ Branches' },
  { name: 'Cult.fit Network', location: 'Partner Studio' },
  { name: 'Snap Fitness', location: 'Verified System' },
  { name: 'AnyTime Fitness', location: '24/7 Access' },
  { name: 'Nitros Performance', location: '5 Centers' },
  { name: 'Apex Health Club', location: '3 Centers' },
];

const FAQ_ITEMS = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes! You can upgrade, downgrade, or switch between monthly and annual billing at any time directly from your admin settings. Any prorated balance will automatically be adjusted.',
  },
  {
    question: 'Do you charge setup fees?',
    answer: 'No, there are zero setup fees or hidden onboarding charges. Every plan comes with free account setup, staff training, and 1-day data migration from your previous software.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There are no lock-in contracts or cancellation penalties. You can cancel with a single click at any time before your next billing cycle.',
  },
  {
    question: 'Do you provide data migration?',
    answer: 'Yes! Our migration specialists import your existing members, active subscriptions, payment history, and attendance records from Mindbody, Zen Planner, Excel, or CSV files within 24 hours.',
  },
  {
    question: 'Do you support multiple branches?',
    answer: 'Yes, our Enterprise plan is specifically built for gym chains and multi-location franchises, offering a master central dashboard and location-specific staff permissions.',
  },
  {
    question: 'Is training included?',
    answer: 'Yes, every plan includes free 1-on-1 live video training sessions for your receptionists, trainers, and managers, alongside 24/7 video learning guides.',
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemoModal }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e14024]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#e14024]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 md:space-y-28">
        
        {/* SECTION TITLE & HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-bold tracking-wide uppercase shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#e14024] fill-[#e14024]/20" />
            <span>TRANSPARENT VALUE-BASED PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Pricing that grows with your gym.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            Whether you're opening your first fitness studio or managing multiple branches, choose the plan that fits your business today—and upgrade anytime.
          </p>

          {/* BILLING TOGGLE SWITCH */}
          <div className="pt-6 flex items-center justify-center">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-1.5 shadow-sm inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  !isAnnual 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white shadow-md shadow-[#e14024]/25' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Yearly</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wider uppercase transition-colors ${
                  isAnnual ? 'bg-white/20 text-white border border-white/30' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 PILLARS OF ONBOARDING & SUPPORT GUARANTEE */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>THE SYNCFYRE ONBOARDING & SUPPORT GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Flexible Plans with Dedicated Support, Guided Training, & Smooth Data Migration
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We handle the heavy lifting so your staff can focus on delivering exceptional service from Day 1.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {/* Pillar 1: Flexible Plans */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fef2f1] text-[#e14024] border border-[#fee5e2] flex items-center justify-center">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">1. Flexible Plans</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose monthly or annual billing. Upgrade or adjust user seats anytime with zero lock-in contracts or penalty fees.
              </p>
              <div className="text-[11px] font-bold text-[#e14024] flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Lock-in Contracts</span>
              </div>
            </div>

            {/* Pillar 2: Dedicated Support */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">2. Dedicated Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct WhatsApp line & dedicated account manager for 1-on-1 assistance with sub-5-minute SLA response times.
              </p>
              <div className="text-[11px] font-bold text-blue-600 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sub-5 Min SLA WhatsApp Response</span>
              </div>
            </div>

            {/* Pillar 3: Guided Training */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">3. Guided Training</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live 1-on-1 video onboarding for your receptionists, trainers, & managers, complete with step-by-step video playbooks.
              </p>
              <div className="text-[11px] font-bold text-purple-600 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Live Staff Video Playbooks</span>
              </div>
            </div>

            {/* Pillar 4: Smooth Data Migration */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">4. Smooth Data Migration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We import all member profiles, active packages, attendance logs, and billing history from Mindbody, Zenoti, or Excel in 24 hours.
              </p>
              <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>24-Hour Zero-Downtime Transfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PLANS.map((plan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-[24px] transition-all duration-300 flex flex-col justify-between relative ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#e14024] shadow-2xl shadow-[#e14024]/15 ring-4 ring-[#e14024]/10 lg:-translate-y-3 z-10 p-7 sm:p-9'
                    : 'bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-slate-300 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1.5 p-7 sm:p-8'
                }`}
              >
                {/* Highlight Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg shadow-[#e14024]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white/90" />
                    <span>{plan.badge || 'MOST POPULAR'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-extrabold text-slate-900">{plan.name}</h3>
                    {isHighlighted && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-[#fef2f1] text-[#e14024] border border-[#fee5e2]">
                        Best Value
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    {plan.isCustomPricing ? (
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                          {plan.customPricingTitle || 'Custom Pricing'}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1 font-sans">
                          {plan.customPricingSubtitle || 'Tailored for gym chains & multi-branch franchises'}
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="font-extrabold text-[#e14024] bg-[#fef2f1] px-2.5 py-1 rounded border border-[#fee5e2] text-[11px]">
                            {plan.savingCaption}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1.5">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={isAnnual ? 'yearly' : 'monthly'}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
                            >
                              {isAnnual ? plan.yearlyDisplayPrice : plan.monthlyDisplayPrice}
                            </motion.span>
                          </AnimatePresence>
                          <span className="text-xs sm:text-sm font-medium text-slate-500">
                            {isAnnual ? '/ year' : '/ month'}
                          </span>
                        </div>

                        {/* Breakdown caption */}
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-medium">
                            {isAnnual ? `(${plan.yearlyMonthlyEquivalent} / month billed annually)` : 'Billed monthly'}
                          </span>
                          {isAnnual && (
                            <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                              {plan.savingCaption}
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-1">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${isHighlighted ? 'bg-[#fef2f1] text-[#e14024]' : 'bg-emerald-100 text-emerald-600'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-slate-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-8 mt-8 border-t border-slate-100">
                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 text-white shadow-lg shadow-[#e14024]/25 ring-2 ring-[#e14024]/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* BELOW THE CARDS: PREMIUM COMPARISON STRIP ("EVERY PLAN INCLUDES") */}
        <div className="bg-white rounded-[24px] p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Every plan includes
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Enterprise-grade infrastructure, automatic cloud updates, and complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {INCLUDED_FEATURES.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#fef2f1] text-[#e14024] border border-[#fee5e2] shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRUST SECTION */}
        <div className="text-center space-y-8 py-4 border-y border-slate-200/80">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-mono font-extrabold text-slate-900 text-sm">4.9/5 Customer Satisfaction</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Trusted by gyms across India.
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80">
            {TRUST_LOGOS.map((logo, lIdx) => (
              <div key={lIdx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-800 font-sans">{logo.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({logo.location})</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-[#e14024]" />
              <span>CLEAR ANSWERS TO YOUR QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</span>
                    <div className={`p-1.5 rounded-lg bg-slate-100 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#fef2f1] text-[#e14024]' : 'text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* FINAL PREMIUM CTA SECTION */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-14 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden text-center space-y-8">
          {/* Decorative Glowing Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e14024]/15 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f15236]/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e14024]/10 border border-[#e14024]/30 text-[#f15236] text-xs font-bold font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e14024]" />
              <span>14-DAY RISK-FREE TRIAL</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ready to simplify your gym operations?
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Start your free trial today and see why SyncFyre helps gyms save time, improve member retention, and grow faster.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 shadow-xl shadow-[#e14024]/30 transition-all flex items-center justify-center gap-2 cursor-pointer ring-2 ring-[#e14024]/30"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <span>Book a Demo</span>
            </button>
          </div>

          <div className="relative z-10 text-xs text-slate-400 font-mono flex items-center justify-center gap-6 pt-2">
            <span>✓ No credit card required</span>
            <span>✓ Instant setup</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
