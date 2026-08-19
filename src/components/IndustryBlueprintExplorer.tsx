import React, { useState } from 'react';
import { 
  Building, Dumbbell, Scissors, Sparkles, Paintbrush, Flame, Activity, 
  Heart, GraduationCap, Wrench, Shirt, Smartphone, Camera, Printer, 
  Search, CheckCircle2, ChevronRight, Layers, Database, Cpu, Shield, 
  BarChart3, Code2, Zap, ArrowRight, Check, AlertCircle, Copy, IndianRupee
} from 'lucide-react';
import { ALL_VERTICAL_BLUEPRINTS, VERTICAL_CATEGORIES } from '../data/verticalsData';
import { BusinessTypeId, VerticalCategory, VerticalIndustryBlueprint } from '../types';

interface Props {
  selectedVerticalId: BusinessTypeId;
  onSelectVertical: (id: BusinessTypeId) => void;
  onOpenDemoModal: () => void;
}

export const IndustryBlueprintExplorer: React.FC<Props> = ({
  selectedVerticalId,
  onSelectVertical,
  onOpenDemoModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<VerticalCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [blueprintTab, setBlueprintTab] = useState<'overview' | 'modules' | 'ai_automation' | 'tech_db' | 'pricing_matrix'>('overview');
  const [copiedApi, setCopiedApi] = useState(false);

  const currentBlueprint: VerticalIndustryBlueprint = ALL_VERTICAL_BLUEPRINTS[selectedVerticalId] || ALL_VERTICAL_BLUEPRINTS.gym_club;

  // Filtered list of blueprints
  const allBlueprintsList = Object.values(ALL_VERTICAL_BLUEPRINTS);
  const filteredBlueprints = allBlueprintsList.filter(bp => {
    const matchesCategory = activeCategory === 'all' || bp.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      bp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      bp.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Shirt': return <Shirt className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Camera': return <Camera className="w-5 h-5" />;
      case 'Printer': return <Printer className="w-5 h-5" />;
      default: return <Building className="w-5 h-5" />;
    }
  };

  const copyApiSample = () => {
    setCopiedApi(true);
    setTimeout(() => setCopiedApi(false), 2000);
  };

  return (
    <section id="vertical-blueprints" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e14024]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10" style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-rose-200/80 text-[#e14024] text-xs font-bold tracking-wider uppercase shadow-[0_2px_10px_rgba(225,64,36,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
            <Layers className="w-3.5 h-3.5" />
            <span>30+ Multi-Vertical SaaS Industry Engines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Industry Product Blueprints & Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            One powerful core backend driving 30+ specialized vertical engines. Every industry features bespoke workflows, automated AI copilots, role permissions, and validated schemas.
          </p>
        </div>

        {/* Category Filters & Search Bar - Crystal Glassmorphic Dock */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white/90 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3.5 justify-between">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1.5 md:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer select-none ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-[0_4px_16px_rgba(15,23,42,0.25)] border border-slate-800 scale-[1.02]'
                    : 'bg-white/70 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
                }`}
              >
                {activeCategory === 'all' && <span className="w-1.5 h-1.5 rounded-full bg-[#e14024]" />}
                All 30+ Verticals
              </button>
              {VERTICAL_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-[0_4px_16px_rgba(15,23,42,0.25)] border border-slate-800 scale-[1.02]'
                      : 'bg-white/70 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search vertical (e.g. Garage, Salon, Gym)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white/80 text-xs sm:text-sm text-slate-900 placeholder-slate-400 rounded-xl sm:rounded-full pl-9 pr-4 py-2 border border-slate-200/90 focus:outline-none focus:border-[#e14024] focus:ring-2 focus:ring-[#e14024]/10 transition-all shadow-2xs"
              />
            </div>

          </div>

          {/* Horizontal Grid Selector for All Matching Verticals */}
          <div className="pt-3 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 max-h-52 overflow-y-auto pr-1">
            {filteredBlueprints.map(bp => {
              const isSelected = bp.id === selectedVerticalId;
              return (
                <button
                  key={bp.id}
                  onClick={() => onSelectVertical(bp.id)}
                  className={`p-2.5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer relative overflow-hidden select-none ${
                    isSelected
                      ? 'bg-white border-[#e14024]/70 text-slate-900 shadow-[0_4px_20px_rgba(225,64,36,0.12),inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-[#e14024]/30 scale-[1.02]'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:shadow-2xs'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-gradient-to-br from-[#e14024] to-[#ea580c] text-white shadow-xs' : 'bg-slate-100/90 text-slate-600'}`}>
                    {getIcon(bp.iconName)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate text-slate-900">{bp.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">{bp.categoryLabel}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Vertical Full Blueprint Container */}
        <div className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,1)]">
          
          {/* Blueprint Header - Minimalist, Crystal Interactive & Refined Typography */}
          <div 
            className="p-5 sm:p-7 border-b border-slate-200/60 bg-gradient-to-r from-white/90 via-slate-50/50 to-white/90 backdrop-blur-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            <div className="flex items-center gap-4">
              {/* Minimalist Interactive Emblem with Subtle Crystal Border */}
              <div className="w-12 h-12 rounded-2xl bg-white text-slate-900 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 hover:border-slate-300">
                <div className="text-[#e14024]">
                  {getIcon(currentBlueprint.iconName)}
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-[-0.02em]">
                    {currentBlueprint.name}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-600 bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/80 px-2.5 py-0.5 rounded-full tracking-wide transition-colors cursor-default">
                    {currentBlueprint.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-normal tracking-normal line-clamp-1">
                  {currentBlueprint.tagline}
                </p>
              </div>
            </div>

            {/* Out-of-the-box clean interactive action button */}
            <button
              onClick={onOpenDemoModal}
              className="group relative w-full sm:w-auto overflow-hidden bg-slate-900 hover:bg-slate-950 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.15)] hover:shadow-[0_6px_20px_rgba(225,64,36,0.25)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-slate-700/60 select-none shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e14024] shadow-[0_0_6px_#e14024]" />
              <span className="tracking-wide">Explore Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

          {/* 3-Second Instant Visual App Mockup Banner for this vertical */}
          <div className="p-4 sm:p-6 bg-slate-950 text-white border-b border-slate-800/90 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-[#e14024]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  Live {currentBlueprint.name} Screen Engine
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Mobile App • Door Kiosk • POS Sync</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs relative z-10">
              
              {/* Customer Mobile App Preview */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-2">
                <div className="flex items-center justify-between text-slate-400 font-bold text-[11px]">
                  <span>Member Mobile App</span>
                  <span className="text-emerald-400 font-mono">v3.4 Live</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-white text-xs">{currentBlueprint.mobileApps.customerApp[0] || '1-Tap Booking & Check-in'}</div>
                  <div className="text-[10px] text-slate-400">Razorpay AutoPay Active • QR Access Ready</div>
                </div>
              </div>

              {/* Staff Portal Preview */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-2">
                <div className="flex items-center justify-between text-slate-400 font-bold text-[11px]">
                  <span>Specialist / Staff Kiosk</span>
                  <span className="text-blue-400 font-mono font-bold">Connected</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-white text-xs">{currentBlueprint.mobileApps.staffApp[0] || 'Attendance & Session Tracker'}</div>
                  <div className="text-[10px] text-slate-400">Live Queue: 12 Active Members Today</div>
                </div>
              </div>

              {/* Owner HQ Dashboard Preview */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-2">
                <div className="flex items-center justify-between text-slate-400 font-bold text-[11px]">
                  <span>Owner Command Center</span>
                  <span className="text-[#e14024] font-mono font-bold">HQ Online</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-white text-xs">{currentBlueprint.mobileApps.ownerApp[0] || 'Real-time Revenue & Attendance Analytics'}</div>
                  <div className="text-[10px] text-slate-400">Automated WhatsApp Dunning Active</div>
                </div>
              </div>

            </div>
          </div>

          {/* Blueprint Sub-Navigation Tabs */}
          <div className="border-b border-slate-200/80 bg-white/60 backdrop-blur-md px-4 sm:px-8 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: '1. Market & Pain Points', icon: Layers },
              { id: 'modules', label: '2. Workflows & Modules', icon: Zap },
              { id: 'ai_automation', label: '3. AI Automations', icon: Cpu },
              { id: 'tech_db', label: '4. DB & API Schema', icon: Code2 },
              { id: 'pricing_matrix', label: '5. INR Pricing & Competitors', icon: IndianRupee },
            ].map(tab => {
              const TabIcon = tab.icon;
              const isActive = blueprintTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setBlueprintTab(tab.id as any)}
                  className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer select-none ${
                    isActive
                      ? 'border-[#e14024] text-[#e14024] bg-rose-50/60'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Blueprint Tab Content */}
          <div className="p-6 sm:p-8">
            
            {/* TAB 1: OVERVIEW & PAIN POINTS */}
            {blueprintTab === 'overview' && (
              <div className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Ideal Customers */}
                  <div className="bg-white/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#e14024]">
                      <Building className="w-4 h-4" />
                      Target Ideal Customers
                    </div>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div>
                        <span className="font-bold text-slate-900">Single Outlet:</span> {currentBlueprint.idealCustomers.singleOutlet}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Growing Chain:</span> {currentBlueprint.idealCustomers.growingChain}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Franchise Enterprise:</span> {currentBlueprint.idealCustomers.franchiseEnterprise}
                      </div>
                    </div>
                  </div>

                  {/* Existing Competitors Displaced */}
                  <div className="bg-white/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-amber-600">
                      <AlertCircle className="w-4 h-4" />
                      Competitors Displaced
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentBlueprint.competitors.map((comp, idx) => (
                        <span key={idx} className="text-xs bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs font-medium">
                          {comp}
                        </span>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-500 pt-1">
                      Digital Maturity: <span className="font-bold text-slate-900">{currentBlueprint.digitalMaturity}</span>
                    </div>
                  </div>

                  {/* Impact Metric */}
                  <div className="bg-white/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Benchmark Impact</div>
                    <div className="py-2">
                      <div className="text-3xl font-extrabold text-emerald-600">{currentBlueprint.keyMetric}</div>
                      <div className="text-xs text-slate-600 mt-1">{currentBlueprint.metricLabel}</div>
                    </div>
                    <div className="text-[11px] text-slate-500 italic">" {currentBlueprint.testimonial.quote.slice(0, 80)}... "</div>
                  </div>
                </div>

                {/* Critical Pain Points vs SyncFyre Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Industry Pain Points */}
                  <div className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-5 space-y-3">
                    <h4 className="text-sm font-bold text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      Top Industry Operational Pain Points
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {currentBlueprint.painPoints.map((pain, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI & Automation Opportunities */}
                  <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-5 space-y-3">
                    <h4 className="text-sm font-bold text-emerald-800 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      SyncFyre AI & Automation Solutions
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {currentBlueprint.aiOpportunities.map((opp, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            )}

            {/* TAB 2: SPECIALIZED MODULES */}
            {blueprintTab === 'modules' && (
              <div className="space-y-8">
                
                {/* Core Modules List */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#e14024]" />
                    Standard Shared Core Modules Enabled
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {currentBlueprint.coreModules.map((mod, mIdx) => (
                      <div key={mIdx} className="bg-white border border-slate-200/90 p-3 rounded-2xl text-center shadow-2xs">
                        <Check className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                        <span className="text-xs font-bold text-slate-800">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry-Specific Specialized Custom Modules */}
                <div>
                  <h4 className="text-sm font-bold text-[#e14024] mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Specialized Workflows Built Exclusively for {currentBlueprint.name}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentBlueprint.specializedIndustryModules.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                        <div className="text-base font-bold text-slate-900">{spec.title}</div>
                        <p className="text-xs text-slate-600 font-normal">{spec.description}</p>
                        
                        <div className="pt-2">
                          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Workflow Fields & Controls:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {spec.fieldsOrWorkflow.map((fld, fIdx) => (
                              <span key={fIdx} className="text-xs bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
                                {fld}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Role Dashboards & Apps */}
                <div className="bg-white/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Role-Based Dashboards & Mobile Apps Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/90 space-y-1.5">
                      <div className="font-bold text-[#e14024] text-xs">Customer App / Web Portal</div>
                      <ul className="space-y-1 text-slate-600">
                        {currentBlueprint.mobileApps.customerApp.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/90 space-y-1.5">
                      <div className="font-bold text-blue-600 text-xs">Staff / Specialist App</div>
                      <ul className="space-y-1 text-slate-600">
                        {currentBlueprint.mobileApps.staffApp.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/90 space-y-1.5">
                      <div className="font-bold text-emerald-700 text-xs">Owner / HQ App</div>
                      <ul className="space-y-1 text-slate-600">
                        {currentBlueprint.mobileApps.ownerApp.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: AI FEATURES & AUTOMATION ENGINE */}
            {blueprintTab === 'ai_automation' && (
              <div className="space-y-8">
                
                {/* AI Copilot Capabilities */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#e14024]" />
                    AI Copilot Capabilities (Powered by Gemini 3.6 Flash)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentBlueprint.aiFeatures.map((ai, aIdx) => (
                      <div key={aIdx} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">{ai.name}</span>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                            {ai.impact}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-normal">{ai.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Automated Workflows Engine */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    Multi-Step Automated Workflows
                  </h4>
                  <div className="space-y-4">
                    {currentBlueprint.automationEngine.map((auto, autoIdx) => (
                      <div key={autoIdx} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                            Trigger: <span className="text-slate-900 font-bold">{auto.trigger}</span>
                          </div>
                          <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            Recovered Value: {auto.recoveredValueInr}
                          </div>
                        </div>

                        {/* Workflow Visual Chain */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
                          {auto.workflowSteps.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <div className="bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 whitespace-nowrap">
                                {step}
                              </div>
                              {sIdx < auto.workflowSteps.length - 1 && (
                                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: DATABASE & REST API SCHEMA */}
            {blueprintTab === 'tech_db' && (
              <div className="space-y-8">
                
                {/* Tech Stack Summary */}
                <div className="bg-white/80 p-5 rounded-2xl border border-slate-200/90 shadow-2xs grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Backend Framework</div>
                    <div className="text-sm font-bold text-slate-900 mt-1">Laravel 12 / PHP 8.4</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Database Architecture</div>
                    <div className="text-sm font-bold text-slate-900 mt-1">PostgreSQL Multi-Tenant</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Real-Time & Queues</div>
                    <div className="text-sm font-bold text-slate-900 mt-1">Redis + Livewire</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Payments & WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900 mt-1">Razorpay UPI + Meta Cloud</div>
                  </div>
                </div>

                {/* Database Tables Schema */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    Specialized Database Tables Schema (Filament / Migration)
                  </h4>
                  <div className="space-y-3">
                    {currentBlueprint.databaseSchema.map((db, dbIdx) => (
                      <div key={dbIdx} className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 text-white font-mono text-xs shadow-inner">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="font-bold text-amber-300">TABLE `{db.tableName}`</span>
                          <span className="text-slate-400 font-sans text-[11px]">{db.purpose}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px]">
                          {db.keyColumns.map((col, cIdx) => (
                            <span key={cIdx} className="bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                              {col}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* REST API Endpoints Sample */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-emerald-600" />
                      REST API Endpoints Specification
                    </h4>
                    <button
                      onClick={copyApiSample}
                      className="text-xs bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer font-semibold shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copiedApi ? 'Copied JSON!' : 'Copy API Spec'}
                    </button>
                  </div>

                  <div className="space-y-2">
                    {currentBlueprint.apiEndpoints.map((api, aIdx) => (
                      <div key={aIdx} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-white flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] ${
                            api.method === 'GET' ? 'bg-blue-900/80 text-blue-300 border border-blue-700' : 'bg-emerald-900/80 text-emerald-300 border border-emerald-700'
                          }`}>
                            {api.method}
                          </span>
                          <span className="text-slate-200">{api.path}</span>
                        </div>
                        <span className="text-slate-400 font-sans text-xs hidden sm:inline">{api.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 5: PRICING & COMPETITOR MATRIX */}
            {blueprintTab === 'pricing_matrix' && (
              <div className="space-y-8">
                
                {/* Indian Pricing Plans for this Vertical */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Recommended Monthly Pricing in INR for {currentBlueprint.name}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/90 text-center space-y-2 shadow-2xs">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Starter Box</div>
                      <div className="text-2xl font-extrabold text-slate-900">₹{currentBlueprint.pricingInr.starterInrMonthly.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500">/mo</span></div>
                      <div className="text-[11px] text-slate-500">Single outlet, basic POS & WhatsApp</div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/90 text-center space-y-2 shadow-2xs">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Growth Pack</div>
                      <div className="text-2xl font-extrabold text-slate-900">₹{currentBlueprint.pricingInr.growthInrMonthly.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500">/mo</span></div>
                      <div className="text-[11px] text-slate-500">Adds AI Copilot & WhatsApp AutoPay</div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border-2 border-[#e14024] text-center space-y-2 relative shadow-md">
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#e14024] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">Most Popular</span>
                      <div className="text-xs font-bold text-[#e14024] uppercase tracking-wider">Pro OS</div>
                      <div className="text-2xl font-extrabold text-slate-900">₹{currentBlueprint.pricingInr.proInrMonthly.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500">/mo</span></div>
                      <div className="text-[11px] text-slate-500">All specialized modules + hardware IoT</div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/90 text-center space-y-2 shadow-2xs">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Enterprise</div>
                      <div className="text-2xl font-extrabold text-slate-900">₹{currentBlueprint.pricingInr.enterpriseInrMonthly.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500">/mo</span></div>
                      <div className="text-[11px] text-slate-500">Multi-branch franchise HQ dashboard</div>
                    </div>

                  </div>
                </div>

                {/* Competitive Matrix vs Legacy Competitors */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">
                    SyncFyre vs Displaced Competitors ({currentBlueprint.competitors.join(', ')})
                  </h4>
                  
                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-between shadow-2xs">
                      <span className="font-bold text-slate-700">Feature Integration:</span>
                      <span className="text-emerald-700 font-bold">All-In-One Unified OS (No Third-Party Middleware Add-ons)</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-between shadow-2xs">
                      <span className="font-bold text-slate-700">India Payment Gateway:</span>
                      <span className="text-emerald-700 font-bold">Native Razorpay UPI AutoPay + 1-Click WhatsApp Pay Links</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-between shadow-2xs">
                      <span className="font-bold text-slate-700">Hardware Access Control:</span>
                      <span className="text-emerald-700 font-bold">Direct Hardware IoT API (Turnstiles, ALPR Gates, Barcode Printers)</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-between shadow-2xs">
                      <span className="font-bold text-slate-700">Implementation Speed:</span>
                      <span className="text-emerald-700 font-bold">24-Hour Automated Excel/Mindbody/Practo Data Migration</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Callout Bar */}
          <div className="p-6 sm:p-7 bg-slate-950 text-white border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-white">Ready to deploy SyncFyre for {currentBlueprint.name}?</div>
              <div className="text-xs text-slate-300 font-normal">Get your tailored vertical database schema, WhatsApp API keys, and staff apps configured in 24 hours.</div>
            </div>
            <button
              onClick={onOpenDemoModal}
              className="bg-gradient-to-r from-[#e14024] to-[#ea580c] hover:from-[#c8351c] hover:to-[#d94e08] text-white font-bold text-xs px-6 py-3 rounded-xl sm:rounded-full transition-all duration-200 shadow-lg shadow-[#e14024]/25 shrink-0 cursor-pointer border border-rose-400/20 active:scale-95"
            >
              Request 24-Hour Migration
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
