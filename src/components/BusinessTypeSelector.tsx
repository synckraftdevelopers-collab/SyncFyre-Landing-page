import React from 'react';
import { BusinessTypeId } from '../types';
import { BUSINESS_TYPES } from '../data/mockData';
import { Check, ArrowRight, Quote, ShieldCheck, Flame } from 'lucide-react';

interface BusinessTypeSelectorProps {
  selectedPersona: BusinessTypeId;
  onSelectPersona: (id: BusinessTypeId) => void;
  onOpenDemoModal: () => void;
}

export const BusinessTypeSelector: React.FC<BusinessTypeSelectorProps> = ({
  selectedPersona,
  onSelectPersona,
  onOpenDemoModal,
}) => {
  const currentProfile = BUSINESS_TYPES.find((b) => b.id === selectedPersona) || BUSINESS_TYPES[0];

  return (
    <section 
      id="solutions" 
      className="py-12 sm:py-16 bg-slate-50/60 text-slate-900 border-t border-slate-200/60 relative"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Lean & Minimalist */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#e14024]" />
            <span>Vertical Workflows</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Tailored Workflows for Gyms, Salons, Clinics & Spas
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            SyncFyre seamlessly adapts scheduling, commission structures, and hardware turnstiles to your exact business model.
          </p>
        </div>

        {/* Persona Selector Buttons - Compact Minimalist Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {BUSINESS_TYPES.map((type) => {
            const isActive = selectedPersona === type.id;
            return (
              <button
                key={type.id}
                onClick={() => onSelectPersona(type.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs scale-100 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80'
                }`}
              >
                {type.name}
              </button>
            );
          })}
        </div>

        {/* Selected Persona Spotlight Showcase Card - Compact & Clean */}
        <div className="mt-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-[#e14024] text-xs font-semibold border border-rose-100">
                <span>{currentProfile.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                {currentProfile.headline}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {currentProfile.description}
              </p>

              {/* Sample Automated Workflow pill - Compact */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                <div className="text-xs text-[#e14024] font-bold uppercase tracking-wider">
                  Automated Workflow:
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  {currentProfile.sampleWorkflow}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs flex items-center gap-2 cursor-pointer select-none active:scale-95 border border-slate-800"
                >
                  <span>Explore {currentProfile.name} Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#e14024]" />
                </button>
              </div>
            </div>

            {/* Right Side: Key Metric & Customer Quote - Compact */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 space-y-4 relative">
              <Quote className="w-6 h-6 text-slate-300 absolute top-4 right-4" />

              {/* Highlight Metric Box */}
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {currentProfile.keyMetric}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {currentProfile.metricLabel}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "{currentProfile.testimonialQuote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-200/60">
                <img
                  src={currentProfile.avatarUrl}
                  alt={currentProfile.author}
                  className="w-8 h-8 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-900">{currentProfile.author}</div>
                  <div className="text-[10px] text-slate-500">{currentProfile.authorRole}, {currentProfile.gymName}</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
