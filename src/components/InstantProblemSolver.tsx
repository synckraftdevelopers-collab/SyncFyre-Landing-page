import React, { useState } from 'react';
import { Zap, CheckCircle2, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';
import { BusinessTypeId } from '../types';

interface InstantProblemSolverProps {
  onOpenDemoModal: () => void;
  onSelectPersona?: (id: BusinessTypeId) => void;
}

const THREE_SECOND_SCENARIOS = [
  {
    id: 'payment',
    title: 'Failed Payment Recovery',
    category: 'Billing & Dunning',
    time: '3 Seconds',
    problem: 'Client card fails on recurring renewal at midnight',
    solution: 'Auto-sends smart WhatsApp payment link with 1-tap Apple Pay/Google Pay',
    impact: '94% Recovery Rate in 24 hrs',
    icon: DollarSign,
    demoAction: 'Simulate Auto-Recovery Trigger',
    previewText: 'Smart Dunning fired • WhatsApp link opened by member • $120 Invoice auto-settled via Apple Pay!'
  },
  {
    id: 'door',
    title: 'Unpaid Member Turnstile Access',
    category: 'Access Hardware',
    time: '0.24 Seconds',
    problem: 'Member with overdue bill tries to tap QR code at 6:00 AM entrance turnstile',
    solution: 'Turnstile denies gate, screen shows instant pay prompt, unlocks upon 1-tap settlement',
    impact: 'Zero Revenue Leakage',
    icon: Clock,
    demoAction: 'Simulate Door Block & Settle',
    previewText: 'Turnstile 01 locked • Instant SMS sent • Payment received • Turnstile unlocked in 240ms!'
  },
  {
    id: 'waitlist',
    title: 'Last-Minute Class Cancellation',
    category: 'Scheduling & WhatsApp',
    time: '3 Seconds',
    problem: 'Bookings drop out last minute, leaving empty seats in peak hours',
    solution: 'AI WhatsApp bot auto-pings waitlist & fills seat instantly',
    impact: '100% Class Utilization',
    icon: Users,
    demoAction: 'Simulate AI Waitlist Auto-Fill',
    previewText: 'Spinning Class Full • AI Bot auto-booked Waitlist #1 (Vikram K.) via WhatsApp!'
  }
];

export const InstantProblemSolver: React.FC<InstantProblemSolverProps> = ({ onOpenDemoModal }) => {
  const [activeScenarioId, setActiveScenarioId] = useState('payment');
  const [simulatingAction, setSimulatingAction] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(false);

  const currentScenario = THREE_SECOND_SCENARIOS.find(s => s.id === activeScenarioId) || THREE_SECOND_SCENARIOS[0];

  const handleSimulateAction = () => {
    setSimulatingAction(true);
    setActionSuccess(false);
    setTimeout(() => {
      setSimulatingAction(false);
      setActionSuccess(true);
      setTimeout(() => setActionSuccess(false), 3500);
    }, 600);
  };

  return (
    <section id="problem-solver" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/70 relative overflow-hidden">
      {/* Background ambient crystal lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#e14024]/8 via-amber-400/5 to-sky-400/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10" style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-[#e14024] text-xs sm:text-sm font-semibold border border-rose-200/80 shadow-[0_2px_10px_rgba(225,64,36,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#e14024] animate-pulse" />
            <span className="uppercase font-bold tracking-wider text-xs">Real-Time Autonomous Problem Resolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
            The 3-Second Instant Problem Solver
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            See how SyncFyre replaces manual staff headaches with instant automated triggers that eliminate friction in under 3 seconds.
          </p>
        </div>

        {/* Interactive Scenario Card - Crystal Clear Glassmorphic Container */}
        <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] p-4 sm:p-7 transition-all">
          {/* 3 Scenario Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {THREE_SECOND_SCENARIOS.map((scen) => {
              const isActive = activeScenarioId === scen.id;
              const IconComp = scen.icon;
              return (
                <button
                  key={scen.id}
                  onClick={() => {
                    setActiveScenarioId(scen.id);
                    setActionSuccess(false);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 relative overflow-hidden select-none ${
                    isActive
                      ? 'bg-white/95 border-[#e14024]/50 shadow-[0_8px_30px_rgba(225,64,36,0.08),inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-[#e14024]/20 scale-[1.01]'
                      : 'bg-white/40 hover:bg-white/80 border-slate-200/70 hover:border-slate-300 text-slate-700 backdrop-blur-md hover:shadow-sm'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e14024] to-transparent" />
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-[#fef2f1] text-[#e14024] border border-[#fee5e2]' : 'bg-slate-100/80 text-slate-500'}`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">{scen.category}</span>
                    </div>
                    <span className="text-xs font-bold bg-gradient-to-r from-[#e14024] to-[#f05c42] text-white px-3 py-1 rounded-full shadow-xs tracking-wide">
                      {scen.time}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">{scen.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 line-clamp-2 leading-relaxed font-normal">{scen.problem}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Display Panel - Pure Crystal Clear Glassmorphic Console */}
          <div className="mt-5 sm:mt-6 p-5 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,1)] space-y-6 relative overflow-hidden transition-all">
            {/* Subtle internal crystal prismatic reflections */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-sky-200/25 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-rose-200/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase text-rose-700 bg-rose-100/70 px-3 py-1 rounded-md border border-rose-200 tracking-wider shadow-xs backdrop-blur-sm">
                    Friction Point
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-700 tracking-wide">
                    {currentScenario.problem}
                  </span>
                </div>
                <div className="flex items-start sm:items-center gap-2.5 pt-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-base sm:text-lg font-bold text-emerald-800">
                    SyncFyre 3-Sec Fix: <span className="text-slate-900 font-semibold">{currentScenario.solution}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleSimulateAction}
                  disabled={simulatingAction}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e14024] to-[#ea580c] hover:from-[#c83218] hover:to-[#d94e08] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(225,64,36,0.25)] hover:shadow-[0_6px_24px_rgba(225,64,36,0.35)] cursor-pointer flex items-center justify-center gap-2 active:scale-95 border border-white/30 select-none"
                >
                  {simulatingAction ? (
                    <span className="animate-spin text-sm">⚡</span>
                  ) : (
                    <Zap className="w-4.5 h-4.5 fill-white" />
                  )}
                  <span>{currentScenario.demoAction}</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Action Log / Drawer */}
            {(simulatingAction || actionSuccess) && (
              <div className={`p-4 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 flex items-center gap-3 backdrop-blur-md relative z-10 ${
                actionSuccess 
                  ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300 shadow-[0_4px_16px_rgba(16,185,129,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]' 
                  : 'bg-white/80 text-slate-800 border border-slate-200/90 shadow-sm'
              }`}>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span className="truncate font-semibold">
                  {simulatingAction ? '⚡ Running SyncFyre Autonomous Resolution Engine...' : currentScenario.previewText}
                </span>
              </div>
            )}

            {/* Impact Metric & Booking CTA */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs relative z-10">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <span>Verified Business Impact:</span>
                <span className="text-emerald-700 font-bold font-mono text-xs sm:text-sm">{currentScenario.impact}</span>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="text-xs text-slate-700 hover:text-slate-950 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>Experience full automated workflow in a live demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#e14024] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
