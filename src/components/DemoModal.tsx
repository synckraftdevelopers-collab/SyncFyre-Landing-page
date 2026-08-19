import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, RefreshCw, ChevronLeft, CalendarDays, DatabaseZap } from 'lucide-react';
import { SyncFyreLogo } from './SyncFyreLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DemoFormState = {
  gymName: string;
  businessType: string;
  city: string;
  locationCount: string;
  memberCount: string;
  currentSoftware: string;
  migrationUrgency: string;
  contactName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initialForm: DemoFormState = {
  gymName: '',
  businessType: 'Gym & Health Club',
  city: '',
  locationCount: '1 Location',
  memberCount: '100 - 300 Members',
  currentSoftware: 'Mindbody',
  migrationUrgency: 'Within 30 Days',
  contactName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '10:00 AM - 1:00 PM',
  notes: '',
};

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<DemoFormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submittedResult, setSubmittedResult] = useState<any>(null);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setForm(initialForm);
      setLoading(false);
      setError('');
      setSubmittedResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateField = (field: keyof DemoFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const canContinueStepOne = form.gymName.trim() && form.city.trim();
  const canContinueStepTwo = form.memberCount && form.currentSoftware && form.locationCount;
  const canSubmit =
    form.contactName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.preferredDate.trim() &&
    form.preferredTime.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to reserve demo.');
      }

      setSubmittedResult(data);
      setStep(4);
    } catch (err: any) {
      setError(err?.message || 'Failed to reserve demo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-[28px] border border-slate-200 p-5 sm:p-8 max-w-2xl w-full relative shadow-2xl space-y-6 text-slate-900 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close demo modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4 border-b border-slate-200 pb-5">
          <SyncFyreLogo height="h-16 sm:h-24" />
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">
              <DatabaseZap className="h-3.5 w-3.5" />
              <span>1-Day Data Migration Guarantee</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">Get SyncFyre OS Demo & Setup</h3>
              <p className="text-sm text-slate-500">
                Book a guided product walkthrough, migration audit, and launch plan for your fitness business.
              </p>
            </div>
          </div>
        </div>

        {step < 4 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`rounded-xl px-3 py-2 text-center transition-colors ${
                    step === stepNumber ? 'bg-white text-[#e14024] shadow-sm' : 'text-slate-500'
                  }`}
                >
                  Step {stepNumber}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <div className="text-xs font-mono text-[#e14024] font-bold uppercase">Step 1 of 3: Your Fitness Business</div>
                  <p className="mt-1 text-sm text-slate-500">Tell us what you run so the demo is tailored to your workflows.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-700">Gym / Studio Name</label>
                    <input
                      type="text"
                      required
                      value={form.gymName}
                      onChange={(e) => updateField('gymName', e.target.value)}
                      placeholder="e.g. Apex Performance Gym"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Business Model</label>
                    <select
                      value={form.businessType}
                      onChange={(e) => updateField('businessType', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    >
                      <option>Gym & Health Club</option>
                      <option>CrossFit Box</option>
                      <option>Yoga & Pilates Studio</option>
                      <option>Boutique Fitness Studio</option>
                      <option>Personal Training Facility</option>
                      <option>Franchise Network (Multi-Location)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">City / Region</label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      placeholder="e.g. Mumbai"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!canContinueStepOne}
                  onClick={() => setStep(2)}
                  className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    !canContinueStepOne
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white hover:brightness-110 shadow-md shadow-[#e14024]/20'
                  }`}
                >
                  <span>Next: Software & Scale</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <div className="text-xs font-mono text-[#e14024] font-bold uppercase">Step 2 of 3: Software & Scale</div>
                  <p className="mt-1 text-sm text-slate-500">This tells us what migration scope and setup timeline to prepare.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Number of Locations</label>
                    <select
                      value={form.locationCount}
                      onChange={(e) => updateField('locationCount', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    >
                      <option>1 Location</option>
                      <option>2 - 5 Locations</option>
                      <option>6 - 15 Locations</option>
                      <option>15+ Locations</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Active Member Count</label>
                    <select
                      value={form.memberCount}
                      onChange={(e) => updateField('memberCount', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    >
                      <option>Under 100 Members</option>
                      <option>100 - 300 Members</option>
                      <option>300 - 750 Members</option>
                      <option>750 - 2,000 Members</option>
                      <option>2,000+ Enterprise Members</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Current Software You Want to Replace</label>
                    <select
                      value={form.currentSoftware}
                      onChange={(e) => updateField('currentSoftware', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    >
                      <option>Mindbody</option>
                      <option>Zen Planner</option>
                      <option>Glofox</option>
                      <option>Wodify</option>
                      <option>Excel / Google Sheets</option>
                      <option>Other / New Gym Opening</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Migration Timeline</label>
                    <select
                      value={form.migrationUrgency}
                      onChange={(e) => updateField('migrationUrgency', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    >
                      <option>Within 30 Days</option>
                      <option>This Quarter</option>
                      <option>Evaluating Options</option>
                      <option>Opening a New Facility</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 rounded-xl text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    disabled={!canContinueStepTwo}
                    onClick={() => setStep(3)}
                    className={`w-2/3 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      !canContinueStepTwo
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white hover:brightness-110 shadow-md shadow-[#e14024]/20'
                    }`}
                  >
                    <span>Next: Contact & Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <div className="text-xs font-mono text-[#e14024] font-bold uppercase">Step 3 of 3: Contact & Schedule</div>
                  <p className="mt-1 text-sm text-slate-500">These fields are required so your onboarding team can confirm the live demo slot.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.contactName}
                      onChange={(e) => updateField('contactName', e.target.value)}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Work Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="e.g. marcus@apexfitness.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Preferred Demo Date</label>
                    <div className="relative">
                      <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        required
                        value={form.preferredDate}
                        onChange={(e) => updateField('preferredDate', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Preferred Time Window</label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) => updateField('preferredTime', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white"
                    >
                      <option>10:00 AM - 1:00 PM</option>
                      <option>1:00 PM - 4:00 PM</option>
                      <option>4:00 PM - 7:00 PM</option>
                      <option>Need weekend slot</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-700">Anything we should prepare for your demo?</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      placeholder="Tell us about failed migrations, POS issues, attendance, CRM, WhatsApp automation, or franchise rollout needs."
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#e14024] focus:bg-white resize-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {error}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3 rounded-xl text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !canSubmit}
                    className={`w-2/3 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      loading || !canSubmit
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white hover:brightness-110 shadow-md shadow-[#e14024]/20'
                    }`}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Saving Demo Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Book Demo & Save Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}

        {step === 4 && (
          <div className="text-center space-y-4 animate-fadeIn py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">Demo Request Saved</h4>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              {submittedResult?.message || `Your onboarding team will reach out to ${form.email} shortly with the confirmed demo slot and migration checklist.`}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-left">
              <div className="text-slate-600">Business: <strong className="text-slate-900">{form.gymName}</strong></div>
              <div className="text-slate-600">Current Software: <strong className="text-slate-900">{form.currentSoftware}</strong></div>
              <div className="text-slate-600">Preferred Slot: <strong className="text-slate-900">{form.preferredDate} • {form.preferredTime}</strong></div>
              <div className="text-emerald-700 font-semibold">Storage: {submittedResult?.storage === 'supabase' ? 'Saved to Supabase' : 'Saved via API response only'}</div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 cursor-pointer shadow-md shadow-[#e14024]/20"
            >
              Close Window & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
