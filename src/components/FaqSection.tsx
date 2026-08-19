import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-[#e14024]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to Know
          </h2>

          <p className="text-slate-600 text-base">
            Have questions about data migration, door hardware API, or billing? We've got answers.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQ (e.g. Mindbody migration, turnstiles)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#e14024] shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left text-sm font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#e14024] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
