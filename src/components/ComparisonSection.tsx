import React, { useState } from 'react';
import { COMPARISON_MATRIX } from '../data/mockData';
import { ComparisonItem } from '../types';
import { 
  Check, X, ShieldAlert, Zap, Flame, ArrowRight, Search, 
  SlidersHorizontal, CheckCircle2, XCircle, Sparkles, Building2, 
  CreditCard, Smartphone, KeyRound, Clock, DollarSign, ChevronRight,
  Info, RefreshCw, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ComparisonSectionProps {
  onOpenDemoModal: () => void;
}

type ViewMode = 'matrix' | 'syncfyre_only' | 'competitor_risks';
type CategoryFilter = 'all' | 'payments' | 'ai_whatsapp' | 'hardware' | 'multi_outlet' | 'operations' | 'migration';
type CompetitorFocus = 'all' | 'excel' | 'mindbody' | 'generic_pos';

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenDemoModal }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('matrix');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [competitorFocus, setCompetitorFocus] = useState<CompetitorFocus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(COMPARISON_MATRIX[0]?.id || 'cmp-1');

  // Filter matrix items based on active state
  const filteredMatrix = COMPARISON_MATRIX.filter((item) => {
    // Category filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    // Search filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchFeature = item.feature.toLowerCase().includes(q);
      const matchSyncFyre = typeof item.syncFyre === 'string' && item.syncFyre.toLowerCase().includes(q);
      const matchCompetitors = item.competitorsCompared?.toLowerCase().includes(q) || false;
      if (!matchFeature && !matchSyncFyre && !matchCompetitors) {
        return false;
      }
    }
    return true;
  });

  const selectedItem = COMPARISON_MATRIX.find(i => i.id === selectedFeatureId) || COMPARISON_MATRIX[0];

  const categoriesList: { id: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Capabilities', icon: SlidersHorizontal },
    { id: 'payments', label: 'POS & UPI Payments', icon: CreditCard },
    { id: 'ai_whatsapp', label: 'AI & WhatsApp', icon: Sparkles },
    { id: 'hardware', label: 'IoT & Turnstiles', icon: KeyRound },
    { id: 'multi_outlet', label: 'Multi-Branch & GST', icon: Building2 },
    { id: 'operations', label: 'Core Operations', icon: Zap },
    { id: 'migration', label: '24-Hour Migration', icon: Clock },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Accent Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#e14024]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-extrabold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#e14024]" />
            <span>INTERACTIVE FEATURE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            The Old Way vs The SyncFyre Way
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Stop forcing your modern business onto clunky spreadsheets or overpriced US legacy software. Toggle view modes and compare capabilities instantly.
          </p>
        </div>

        {/* High-Impact Visual Before / After Split Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* OLD WAY CARD */}
          <div className="bg-rose-50/60 border-2 border-rose-200 rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-rose-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-rose-600 text-white font-extrabold text-xs tracking-wider">BEFORE</span>
                <h3 className="text-xl font-extrabold text-rose-950">Legacy Software & Excel Chaos</h3>
              </div>
              <ShieldAlert className="w-6 h-6 text-rose-600" />
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-rose-100 shadow-2xs">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-950 block font-bold">15% Monthly Revenue Leaks</strong>
                  Uncollected fees, bounced UPI debits, and manual paper registers.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-rose-100 shadow-2xs">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-950 block font-bold">12-Minute Front-Desk Queues</strong>
                  Manual typing of client names & paper entry logs at peak hours.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-rose-100 shadow-2xs">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-950 block font-bold">Hidden 15% SMS & USD Add-on Fees</strong>
                  Separate charges for WhatsApp reminders, door access software, and POS.
                </div>
              </li>
            </ul>
          </div>

          {/* SYNCFYRE WAY CARD */}
          <div className="bg-emerald-50/60 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden shadow-lg">
            <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white font-extrabold text-xs tracking-wider">AFTER</span>
                <h3 className="text-xl font-extrabold text-emerald-950">SyncFyre Unified OS</h3>
              </div>
              <Flame className="w-6 h-6 text-[#e14024] fill-[#e14024]" />
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3 bg-white/90 p-3.5 rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block font-bold">94% Automated UPI Payment Recovery</strong>
                  WhatsApp dunning links with 1-click Razorpay UPI & auto-retry logic.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/90 p-3.5 rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block font-bold">&lt;200ms Turnstile & Door Access</strong>
                  Scan Apple/Google Wallet QR code directly on hardware turnstiles.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/90 p-3.5 rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block font-bold">Flat Subscription • Zero Hidden Add-ons</strong>
                  WhatsApp Cloud API, AI Copilot, Mobile Apps, POS, and Turnstiles included.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Matrix Controls Bar */}
        <div className="mt-14 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            
            {/* View Mode Toggle Buttons */}
            <div>
              <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                1. Select Comparison Mode
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setViewMode('matrix')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                    viewMode === 'matrix'
                      ? 'bg-[#e14024] text-white shadow-md shadow-[#e14024]/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Full Side-by-Side Matrix</span>
                </button>

                <button
                  onClick={() => setViewMode('syncfyre_only')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                    viewMode === 'syncfyre_only'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SyncFyre Highlights (100% Native Checks)</span>
                </button>

                <button
                  onClick={() => setViewMode('competitor_risks')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                    viewMode === 'competitor_risks'
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <XCircle className="w-4 h-4" />
                  <span>Competitor Risk & Leakage Audit</span>
                </button>
              </div>
            </div>

            {/* Target Competitor Filter */}
            <div>
              <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                2. Target Competitor Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {(['all', 'excel', 'mindbody', 'generic_pos'] as CompetitorFocus[]).map((f) => {
                  const labels: Record<CompetitorFocus, string> = {
                    all: 'All Alternatives',
                    excel: 'Excel / Spreadsheets',
                    mindbody: 'Legacy US Software (Mindbody, Zenoti)',
                    generic_pos: 'Generic POS (Square, Fresha)',
                  };
                  return (
                    <button
                      key={f}
                      onClick={() => setCompetitorFocus(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all border cursor-pointer ${
                        competitorFocus === f
                          ? 'bg-white text-slate-900 border-white'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      {labels[f]}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Category Filter Pills & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
              {categoriesList.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#e14024] text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search capabilities (e.g. UPI, WhatsApp)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:border-[#e14024]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Live Capability Scorecard Bar */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-2 rounded-xl bg-slate-900/60 border border-emerald-500/30 flex items-center justify-between px-4">
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold text-emerald-400 tracking-wider">SyncFyre OS Score</div>
                <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Native ({filteredMatrix.length}/{filteredMatrix.length})</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">
                PRO-LEVEL
              </span>
            </div>

            <div className="p-2 rounded-xl bg-slate-900/60 border border-rose-500/30 flex items-center justify-between px-4">
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold text-rose-400 tracking-wider">Spreadsheets Score</div>
                <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>0% Automation</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950 px-2.5 py-1 rounded-md border border-rose-800">
                HIGH RISK
              </span>
            </div>

            <div className="p-2 rounded-xl bg-slate-900/60 border border-amber-500/30 flex items-center justify-between px-4">
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold text-amber-400 tracking-wider">US Legacy Software</div>
                <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>12% India Fit</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-800">
                $350+/MO + ADD-ONS
              </span>
            </div>
          </div>

        </div>

        {/* Dynamic Display Area Based on View Mode */}
        {viewMode === 'matrix' && (
          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm md:text-base">
              
              <thead className="bg-slate-900 text-white text-xs sm:text-sm border-b border-slate-800 font-extrabold">
                <tr>
                  <th className="py-4 px-6 w-2/5 font-extrabold text-white">Platform Capability</th>
                  <th className="py-4 px-6 w-2/5 bg-[#e14024] text-white font-extrabold border-x border-[#c83218] shadow-inner">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 fill-white" />
                      <span>SyncFyre OS (Unified Platform)</span>
                    </div>
                  </th>
                  {(competitorFocus === 'all' || competitorFocus === 'excel') && (
                    <th className="py-4 px-6 font-semibold text-slate-300">Excel / Spreadsheets</th>
                  )}
                  {(competitorFocus === 'all' || competitorFocus === 'mindbody' || competitorFocus === 'generic_pos') && (
                    <th className="py-4 px-6 font-semibold text-slate-300">Legacy US Software / POS</th>
                  )}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {filteredMatrix.map((item) => {
                  const isSelected = selectedFeatureId === item.id;
                  return (
                    <tr 
                      key={item.id} 
                      onClick={() => setSelectedFeatureId(item.id || 'cmp-1')}
                      className={`transition-all cursor-pointer ${
                        isSelected ? 'bg-slate-100/90 ring-2 ring-inset ring-[#e14024]/40' : 'hover:bg-slate-50'
                      }`}
                    >
                      {/* Capability Name & Badge */}
                      <td className="py-4 px-6 font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-900 font-extrabold">{item.feature}</span>
                          {item.roiImpactMetric && (
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold">
                              {item.roiImpactMetric}
                            </span>
                          )}
                        </div>
                        {item.competitorsCompared && (
                          <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                            Compared against: {item.competitorsCompared}
                          </div>
                        )}
                      </td>

                      {/* SyncFyre Column with Checkmark */}
                      <td className="py-4 px-6 bg-[#fef2f1]/80 border-x border-[#fee5e2] font-semibold text-emerald-950">
                        <div className="flex items-start gap-2">
                          <span className="p-1 rounded-full bg-emerald-600 text-white shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <div className="text-xs sm:text-sm">
                            <span className="font-extrabold text-emerald-900 block">✓ Included (100% Native)</span>
                            <span className="text-slate-700 font-medium">{item.syncFyre}</span>
                          </div>
                        </div>
                      </td>

                      {/* Excel / Spreadsheets Column with Cross-Out */}
                      {(competitorFocus === 'all' || competitorFocus === 'excel') && (
                        <td className="py-4 px-6 text-slate-500 bg-rose-50/20">
                          <div className="flex items-start gap-2 text-rose-700">
                            <span className="p-1 rounded-full bg-rose-100 text-rose-600 shrink-0 mt-0.5">
                              <X className="w-3.5 h-3.5 stroke-[3]" />
                            </span>
                            <div className="text-xs sm:text-sm">
                              <span className="font-bold text-rose-800 line-through block">✕ Missing / Manual</span>
                              <span className="text-slate-600">{item.spreadsheets}</span>
                            </div>
                          </div>
                        </td>
                      )}

                      {/* Legacy US Software Column with Cross-Out */}
                      {(competitorFocus === 'all' || competitorFocus === 'mindbody' || competitorFocus === 'generic_pos') && (
                        <td className="py-4 px-6 text-slate-500 bg-rose-50/10">
                          <div className="flex items-start gap-2 text-amber-800">
                            <span className="p-1 rounded-full bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                              <X className="w-3.5 h-3.5 stroke-[3]" />
                            </span>
                            <div className="text-xs sm:text-sm">
                              <span className="font-bold text-amber-900 block">✕ Paid Add-On / USD Fee</span>
                              <span className="text-slate-600">{item.legacySoftware}</span>
                            </div>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        )}

        {/* SyncFyre Only Mode (Green Checkmark Cards Focus) */}
        {viewMode === 'syncfyre_only' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatrix.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedFeatureId(item.id || 'cmp-1')}
                className="bg-emerald-50/70 border-2 border-emerald-200 rounded-3xl p-6 space-y-4 hover:shadow-xl transition-all cursor-pointer relative"
              >
                <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>100% Native Standard</span>
                  </span>
                  {item.roiImpactMetric && (
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                      {item.roiImpactMetric}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">{item.feature}</h3>

                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  {item.syncFyre}
                </p>

                {item.valuePropDescription && (
                  <p className="text-xs text-slate-600 border-t border-emerald-200/60 pt-3">
                    {item.valuePropDescription}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Competitor Risk Mode (Red Cross-outs Focus) */}
        {viewMode === 'competitor_risks' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatrix.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedFeatureId(item.id || 'cmp-1')}
                className="bg-rose-50/70 border-2 border-rose-200 rounded-3xl p-6 space-y-4 hover:shadow-xl transition-all cursor-pointer relative"
              >
                <div className="flex items-center justify-between border-b border-rose-200/80 pb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-extrabold">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Legacy Limitation & Penalty</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-md">
                    REVENUE LEAK
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">{item.feature}</h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/90 border border-rose-200 text-rose-950 font-medium">
                    <strong className="text-rose-700 block font-bold mb-0.5">Excel / Spreadsheets:</strong>
                    <span className="line-through">{item.spreadsheets}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/90 border border-rose-200 text-rose-950 font-medium">
                    <strong className="text-amber-800 block font-bold mb-0.5">Mindbody / Zenoti / US POS:</strong>
                    <span className="line-through">{item.legacySoftware}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Feature Spotlight Callout Box */}
        {selectedItem && (
          <div className="mt-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e14024]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SYNCFYRE VALUE SPOTLIGHT • {selectedItem.roiImpactMetric || '100% NATIVE'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedItem.valuePropTitle || selectedItem.feature}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedItem.valuePropDescription || selectedItem.syncFyre}
                </p>

                <div className="pt-1 flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Included in All SyncFyre Plans</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Zap className="w-4 h-4 text-[#e14024]" />
                    <span>24-Hour Instant Onboarding</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-center items-end">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 transition-all shadow-lg shadow-[#e14024]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Experience {selectedItem.feature}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenDemoModal}
            className="px-8 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>Migrate Your Business to SyncFyre in 24 Hours</span>
            <ArrowRight className="w-5 h-5 text-[#e14024]" />
          </button>
        </div>

      </div>
    </section>
  );
};
