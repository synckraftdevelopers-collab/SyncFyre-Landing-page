import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, Bot, Zap, RefreshCw, MessageSquare } from 'lucide-react';
import { BusinessTypeId } from '../types';

interface AiGymAssistantProps {
  selectedPersona: BusinessTypeId;
}

export const AiGymAssistant: React.FC<AiGymAssistantProps> = ({ selectedPersona }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [aiSource, setAiSource] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const presetPrompts = [
    'Generate an automated re-engagement SMS for members who haven’t visited in 14 days.',
    'Create a 4-week HIIT class schedule with coach rotation & capacity caps.',
    'Draft a failed payment recovery email & text sequence for declined credit cards.',
    'Provide 5 data-backed strategies to reduce member churn by 30% this quarter.',
  ];

  const handleGenerate = async (customPrompt?: string) => {
    const textToSubmit = customPrompt || prompt;
    if (!textToSubmit.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSubmit,
          businessType: selectedPersona,
        }),
      });

      const data = await res.json();
      if (data.response) {
        setResponse(data.response);
        setAiSource(data.aiSource || 'SyncFyre AI Engine');
      } else {
        setResponse('Failed to generate response. Please try again.');
      }
    } catch (err) {
      setResponse('SyncFyre AI is ready! Attach GEMINI_API_KEY in Secrets for live Gemini API streaming responses.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      className="py-14 sm:py-20 bg-slate-50/70 text-slate-900 border-t border-slate-200/70 relative"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e14024]" />
            <span>AI Workflow Co-Pilot</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-slate-900 leading-tight">
            Ask SyncFyre AI for Custom Business Workflows
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
            Generate tailored re-engagement SMS sequences, class schedules, or churn reduction tactics in seconds.
          </p>
        </div>

        {/* AI Box Container */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs space-y-5">
          
          {/* Preset Chips */}
          <div className="space-y-2">
            <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Strategy Presets:</div>
            <div className="flex flex-wrap gap-1.5">
              {presetPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(p);
                    handleGenerate(p);
                  }}
                  className="px-3 py-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 text-xs text-left transition-colors cursor-pointer select-none font-normal"
                >
                  "{p}"
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Input Form */}
          <div className="relative space-y-2.5">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Write a friendly SMS for a member whose credit card was declined yesterday..."
              rows={3}
              className="w-full bg-slate-50/80 rounded-xl p-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-slate-800 focus:bg-white focus:outline-none resize-none font-normal transition-all"
            />
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-medium">Powered by Gemini 3.6 Flash</span>
              <button
                onClick={() => handleGenerate()}
                disabled={loading || !prompt.trim()}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer select-none active:scale-95 border ${
                  loading || !prompt.trim()
                    ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-800 shadow-xs'
                }`}
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Generating Strategy...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3 text-[#e14024]" />
                    <span>Generate AI Content</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Output Response Display */}
          {response && (
            <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200 space-y-2.5 relative animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 text-xs">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-xs">
                  <Bot className="w-3.5 h-3.5 text-[#e14024]" />
                  <span>{aiSource || 'SyncFyre AI Output'}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-2 py-0.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs sm:text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-normal">
                {response}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
