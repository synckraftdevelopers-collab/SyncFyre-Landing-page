import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const row1 = TESTIMONIALS.slice(0, 6);
  const row2 = TESTIMONIALS.slice(6, 12);

  const renderCard = (t: Testimonial, keyPrefix: string) => (
    <div 
      key={`${keyPrefix}-${t.id}`}
      className="w-[320px] sm:w-[370px] shrink-0 bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3.5 relative select-none"
    >
      <Quote className="w-5 h-5 text-slate-300 absolute top-4 right-4 pointer-events-none" />

      {/* Top Meta: Stars & Verified Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
          <CheckCircle2 className="w-2.5 h-2.5" />
          <span>Verified Owner</span>
        </span>
      </div>

      {/* Quote text */}
      <p className="text-xs text-slate-700 italic leading-relaxed font-normal line-clamp-3">
        "{t.quote}"
      </p>

      {/* Verified Metrics Chips */}
      <div className="grid grid-cols-3 gap-1.5 py-2 border-y border-slate-200/70 text-center bg-white/60 rounded-lg px-1">
        {t.stats.map((s, sIdx) => (
          <div key={sIdx} className="space-y-0.5">
            <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">{s.value}</div>
            <div className="text-[9px] text-slate-500 font-medium truncate">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Author info */}
      <div className="flex items-center gap-2.5 pt-0.5">
        <img 
          src={t.avatar} 
          alt={t.author} 
          className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0" 
        />
        <div className="min-w-0">
          <div className="text-xs font-semibold text-slate-900 truncate">{t.author}</div>
          <div className="text-[10px] text-slate-500 truncate">{t.role}, {t.gym}</div>
          <div className="text-[9px] text-slate-400 font-normal truncate">{t.location}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="testimonials" 
      className="py-14 sm:py-20 bg-white text-slate-900 border-t border-slate-200/70 relative overflow-hidden"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Verified Customer Stories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-slate-900 leading-tight">
            Trusted by 2,400+ Multi-Location Owners
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
            See how fitness, wellness, clinic, and workshop leaders reclaimed admin hours and accelerated recurring revenue with automated front-desk workflows.
          </p>
        </div>
      </div>

      {/* Dual Row Marquee Container with Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden group-marquee space-y-4">
        
        {/* Left and Right Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />

        {/* Row 1: Leftward Infinite Marquee Motion */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] will-change-transform">
            {row1.map((t) => renderCard(t, 'r1-a'))}
            {row1.map((t) => renderCard(t, 'r1-b'))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Marquee Motion */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused] will-change-transform">
            {row2.map((t) => renderCard(t, 'r2-a'))}
            {row2.map((t) => renderCard(t, 'r2-b'))}
          </div>
        </div>

      </div>

      {/* Bottom Hint */}
      <div className="mt-6 text-center">
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">
          Hover over any review card to pause scroll
        </span>
      </div>

    </section>
  );
};
