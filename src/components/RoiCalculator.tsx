import React, { useState } from 'react';
import { Calculator, IndianRupee, Clock, TrendingUp, ArrowRight, ShieldCheck, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal: () => void;
}

interface ModernSliderProps {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (val: number) => void;
  accentColor?: 'brand' | 'amber' | 'cyan';
}

const ModernSlider: React.FC<ModernSliderProps> = ({
  id,
  min,
  max,
  step,
  value,
  onChange,
  accentColor = 'brand'
}) => {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  const getGradientClass = () => {
    switch (accentColor) {
      case 'amber':
        return 'from-amber-500 via-orange-500 to-amber-600';
      case 'cyan':
        return 'from-sky-500 via-cyan-500 to-blue-600';
      case 'brand':
      default:
        return 'from-[#e14024] via-rose-500 to-[#c83218]';
    }
  };

  const getThumbBorder = () => {
    switch (accentColor) {
      case 'amber':
        return 'border-amber-500 text-amber-600';
      case 'cyan':
        return 'border-sky-500 text-sky-600';
      case 'brand':
      default:
        return 'border-[#e14024] text-[#e14024]';
    }
  };

  return (
    <div className="relative w-full py-2 select-none group">
      {/* Outer Track Container */}
      <div className="relative w-full h-3 rounded-full bg-slate-200/90 border border-slate-300/80 shadow-inner overflow-hidden flex items-center">
        {/* Active Fill Bar */}
        <div 
          className={`h-full bg-gradient-to-r ${getGradientClass()} relative transition-all duration-75 shadow-xs`}
          style={{ width: `${percentage}%` }}
        >
          {/* Subtle Shimmer Overlay */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>

      {/* Floating Modern Thumb */}
      <div 
        className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 ${getThumbBorder()} shadow-md flex items-center justify-center transition-all duration-75 z-10 group-hover:scale-110 cursor-grab active:cursor-grabbing`}
        style={{ left: `calc(12px + (${percentage} / 100) * (100% - 24px))` }}
      >
        <div className="w-2 h-2 rounded-full bg-current" />
      </div>

      {/* Native Range Input for Touch/Accessibility */}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 focus:outline-none"
      />
    </div>
  );
};

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const [memberCount, setMemberCount] = useState<number>(350);
  const [monthlyFee, setMonthlyFee] = useState<number>(2500); // INR 2,500/mo avg in India
  const [failedPaymentPercent, setFailedPaymentPercent] = useState<number>(8); // UPI / AutoPay bounce %
  const [spreadsheetHours, setSpreadsheetHours] = useState<number>(14);

  // Calculations in INR
  const grossMonthlyRevenue = memberCount * monthlyFee;
  const grossAnnualRevenue = grossMonthlyRevenue * 12;

  // SyncFyre dunning recovers ~92% of failed UPI AutoPay & payment bounce in India
  const monthlyFailedInr = grossMonthlyRevenue * (failedPaymentPercent / 100);
  const annualFailedInr = monthlyFailedInr * 12;
  const annualRecoveredInr = Math.round(annualFailedInr * 0.92);

  // Time saved: SyncFyre automates ~85% of WhatsApp followups & admin work
  const annualHoursSaved = Math.round(spreadsheetHours * 52 * 0.85);

  // Estimated annual cost of SyncFyre Pro in India (₹2,499/mo * 12 = ₹29,988)
  const syncFyreCostInr = 29988;
  const roiMultiplier = Math.max(1, Math.round(annualRecoveredInr / syncFyreCostInr));

  return (
    <section id="roi-calculator" className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-200/30 via-emerald-200/20 to-sky-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-extrabold shadow-sm uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>REVENUE LEAKAGE & ROI CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Calculate How Much Unclaimed Revenue Your Front-Desk Loses Every Month
          </h2>

          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            See how SyncFyre's automated WhatsApp retries, UPI AutoPay recovery, and instant cloud sync eliminate payment delinquency & spreadsheet burnout.
          </p>
        </div>

        {/* Modern Calculator Container */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Sliders Controls Area (Left 7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Active Clients / Members */}
              <div className="space-y-3 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center">
                  <label htmlFor="member-count-slider" className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                    Active Members / Clients
                  </label>
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-[#e14024] font-black font-mono text-base sm:text-lg shadow-2xs">
                    {memberCount.toLocaleString('en-IN')} Clients
                  </span>
                </div>
                
                <ModernSlider
                  id="member-count-slider"
                  min={50}
                  max={2500}
                  step={25}
                  value={memberCount}
                  onChange={setMemberCount}
                  accentColor="brand"
                />

                <div className="flex justify-between text-[11px] font-extrabold text-slate-400 font-mono">
                  <span>50</span>
                  <span>1,250</span>
                  <span>2,500+</span>
                </div>
              </div>

              {/* Slider 2: Average Monthly Ticket Fee */}
              <div className="space-y-3 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center">
                  <label htmlFor="monthly-fee-slider" className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                    Avg Monthly Fee / Ticket (INR)
                  </label>
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-[#e14024] font-black font-mono text-base sm:text-lg shadow-2xs">
                    ₹{monthlyFee.toLocaleString('en-IN')} / mo
                  </span>
                </div>

                <ModernSlider
                  id="monthly-fee-slider"
                  min={500}
                  max={15000}
                  step={250}
                  value={monthlyFee}
                  onChange={setMonthlyFee}
                  accentColor="brand"
                />

                <div className="flex justify-between text-[11px] font-extrabold text-slate-400 font-mono">
                  <span>₹500</span>
                  <span>₹7,500</span>
                  <span>₹15,000+</span>
                </div>
              </div>

              {/* Slider 3: UPI / Card Payment Bounce Rate */}
              <div className="space-y-3 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center">
                  <label htmlFor="failed-payment-slider" className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                    AutoPay / Card Bounce & Delay Rate
                  </label>
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-amber-600 font-black font-mono text-base sm:text-lg shadow-2xs">
                    {failedPaymentPercent}% Bounced
                  </span>
                </div>

                <ModernSlider
                  id="failed-payment-slider"
                  min={2}
                  max={25}
                  step={1}
                  value={failedPaymentPercent}
                  onChange={setFailedPaymentPercent}
                  accentColor="amber"
                />

                <div className="flex justify-between text-[11px] font-extrabold text-slate-400 font-mono">
                  <span>2% (Optimal)</span>
                  <span>12% (Average)</span>
                  <span>25% (High Delinquency)</span>
                </div>
              </div>

              {/* Slider 4: Weekly Manual Admin Hours */}
              <div className="space-y-3 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center">
                  <label htmlFor="spreadsheet-hours-slider" className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                    Weekly Manual Admin & WhatsApp Hours
                  </label>
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-sky-600 font-black font-mono text-base sm:text-lg shadow-2xs">
                    {spreadsheetHours} hrs / week
                  </span>
                </div>

                <ModernSlider
                  id="spreadsheet-hours-slider"
                  min={2}
                  max={35}
                  step={1}
                  value={spreadsheetHours}
                  onChange={setSpreadsheetHours}
                  accentColor="cyan"
                />

                <div className="flex justify-between text-[11px] font-extrabold text-slate-400 font-mono">
                  <span>2 hrs</span>
                  <span>18 hrs</span>
                  <span>35+ hrs</span>
                </div>
              </div>

            </div>

            {/* Results Live Impact Card (Right 5 Columns) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block font-mono">
                    ANNUAL REVENUE IMPACT
                  </span>
                  <div className="text-lg font-black text-white">Estimated Annual Gains</div>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-500/30 text-xs sm:text-sm flex items-center gap-1 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{roiMultiplier}x ROI</span>
                </div>
              </div>

              {/* Recovered INR Big Metric */}
              <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/80 space-y-1.5 relative">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <IndianRupee className="w-4 h-4 text-emerald-400" />
                  <span>Annual Leakage Recovered</span>
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                  +₹{annualRecoveredInr.toLocaleString('en-IN')}
                </div>

                <div className="text-[11px] text-slate-400 font-medium">
                  Auto-retried via SyncFyre WhatsApp UPI smart payment links
                </div>
              </div>

              {/* Hours Saved Metric */}
              <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/80 space-y-1.5">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Admin Work Reclaimed</span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-sky-300 font-mono tracking-tight">
                  {annualHoursSaved} Hours / Year
                </div>

                <div className="text-[11px] text-slate-400 font-medium">
                  Equivalent to saving ~{Math.round(annualHoursSaved / 40)} full working weeks
                </div>
              </div>

              {/* Feature Highlights Checklist */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated WhatsApp Payment Reminders</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second Turnstile Gate Lock Integration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Manual Excel Entry Required</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#e14024] hover:bg-[#c83218] transition-all shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Your Recovered Revenue Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


