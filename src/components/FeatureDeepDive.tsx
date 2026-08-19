import React, { useState } from 'react';
import { 
  Users, CreditCard, Calendar, Lock, Sparkles, Building2, 
  CheckCircle2, ChevronRight, Shield, Zap, ArrowRight, Laptop,
  Receipt, Award, MessageSquare, Package
} from 'lucide-react';

interface FeatureDeepDiveProps {
  onOpenDemoModal: () => void;
}

export const FeatureDeepDive: React.FC<FeatureDeepDiveProps> = ({ onOpenDemoModal }) => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      id: 'billing',
      title: '1-Click POS Billing & UPI Checkout',
      icon: Receipt,
      badge: 'INSTANT 1.4s BILLING',
      headline: 'Process Invoices, GST & Razorpay UPI Payments in Seconds',
      description: 'SyncFyre delivers a lightning-fast POS billing counter with GST tax compliance, split payments, package deductions, and thermal receipt printing.',
      bullets: [
        'Razorpay & PhonePe dynamic UPI QR code generation',
        'Automatic GST invoice calculation (CGST + SGST or IGST)',
        'Package, gift voucher & wallet credit auto-redemption',
        'Instant WhatsApp PDF invoice receipt delivery to clients',
      ],
      metric: '1.4 Seconds',
      metricLabel: 'Average POS checkout time per customer',
      previewType: 'billing',
    },
    {
      id: 'scheduling',
      title: '24/7 Smart Appointment Calendar',
      icon: Calendar,
      badge: '24/7 ONLINE BOOKING',
      headline: 'Multi-Staff Slot Booking with WhatsApp Confirmation',
      description: 'Let clients book appointments 24/7 through your custom mobile app, website, or WhatsApp AI bot. Smart waitlists fill cancellations automatically.',
      bullets: [
        'Multi-stylist & multi-chair visual timeline calendar',
        'Automated WhatsApp appointment reminders to eliminate no-shows',
        'Smart waitlist auto-promotes next client on cancellation',
        '1-tap class pack & session credit deductions',
      ],
      metric: '98.4%',
      metricLabel: 'Slot fill rate with zero scheduling overlaps',
      previewType: 'scheduling',
    },
    {
      id: 'staff_commissions',
      title: 'Staff, Stylist & Commission Engine',
      icon: Award,
      badge: 'AUTOMATED PAYROLL',
      headline: 'Track Attendance, Service Commissions & Tips Effortlessly',
      description: 'Automatically compute tier-based service & retail commissions for every stylist, trainer, or therapist with 1-click Razorpay UPI payouts.',
      bullets: [
        'Custom commission rules per service category or staff tier',
        'Staff mobile app for daily earnings & schedule tracking',
        'Biometric & QR shift attendance clock-in log',
        'Direct UPI tip payout & performance leaderboards',
      ],
      metric: '100% Accuracy',
      metricLabel: 'Automated staff commission calculation',
      previewType: 'commissions',
    },
    {
      id: 'whatsapp_reviews',
      title: 'WhatsApp Marketing & 5-Star Google Reviews',
      icon: MessageSquare,
      badge: '4.2X GOOGLE REVIEWS',
      headline: 'Turn Happy Clients into 5-Star Google Business Reviews',
      description: 'Automatically trigger post-service feedback requests on WhatsApp. Direct 5-star ratings straight to Google Reviews to rank #1 locally.',
      bullets: [
        'Post-treatment WhatsApp feedback link automation',
        'Google Review generator routes 5-star ratings directly to Google',
        'Inactive client win-back campaigns with dynamic discount vouchers',
        'Automated birthday & anniversary celebratory offers',
      ],
      metric: '4.2x Boost',
      metricLabel: 'In positive Google Business 5-Star reviews',
      previewType: 'whatsapp',
    },
    {
      id: 'ai_retention',
      title: 'Predictive AI Client Retention Engine',
      icon: Sparkles,
      badge: 'AI CO-PILOT',
      headline: 'Identify At-Risk Clients Before They Churn',
      description: 'SyncFyre AI monitors appointment interval decay, missed visits, and package expiry to send automated WhatsApp re-engagement offers.',
      bullets: [
        'Predictive Churn Risk Scorecard for every client profile',
        'Automated WhatsApp conversations to re-engage lapsed clients',
        'AI treatment milestone celebrations (e.g. 10th visit reward)',
        'Smart referral prompts triggered after 5-star feedback',
      ],
      metric: '+42%',
      metricLabel: 'Client lifetime value extension',
      previewType: 'ai',
    },
    {
      id: 'franchise',
      title: 'Franchise & Multi-Outlet HQ Command Center',
      icon: Building2,
      badge: 'MULTI-OUTLET OS',
      headline: 'Central Control for 1 to 100+ Branches',
      description: 'Manage multi-location outlets with role-based branch permissions, cross-branch membership roaming, and consolidated revenue reports.',
      bullets: [
        'Single sign-on executive HQ dashboard',
        'Centralized service catalog, pricing & discount controls',
        'Cross-branch customer roaming with synchronized wallet balance',
        'Real-time comparative outlet revenue & staff performance analytics',
      ],
      metric: '100% Sync',
      metricLabel: 'Unified database across all branch locations',
      previewType: 'franchise',
    },
  ];

  const currentFeature = features[activeFeatureIndex];

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-bold">
            <Laptop className="w-3.5 h-3.5 text-[#e14024]" />
            <span>CORE PLATFORM MODULES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            The Complete Business & Service Operating System
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Every module is engineered to eliminate admin friction, maximize client retention, and deliver Dingg-grade speed to your operations.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = activeFeatureIndex === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveFeatureIndex(idx)}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#e14024] border-2 border-[#e14024] shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#e14024]' : 'text-slate-400'}`} />
                <span>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Spotlight Showcase */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Feature Description (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef2f1] text-[#e14024] text-xs font-bold border border-[#fee5e2]">
                <span>{currentFeature.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {currentFeature.headline}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentFeature.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentFeature.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 transition-all shadow-md shadow-[#e14024]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore {currentFeature.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Feature Visual Card (Right) */}
            <div className="lg:col-span-6 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="text-slate-500 font-medium">module_view / {currentFeature.id}</span>
                <span className="text-emerald-700 font-bold">STATUS: OPTIMIZED</span>
              </div>

              {/* Dynamic Mockup Card based on previewType */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#fef2f1] border border-[#fee5e2] flex items-center justify-center text-[#e14024] font-bold">
                      {React.createElement(currentFeature.icon, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{currentFeature.title}</div>
                      <div className="text-xs text-slate-500">SyncFyre High-Performance Module</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs text-slate-500 font-medium">Key Performance Output:</div>
                  <div className="text-3xl font-extrabold text-[#e14024]">{currentFeature.metric}</div>
                  <div className="text-xs text-slate-700">{currentFeature.metricLabel}</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
