import React, { useState } from 'react';
import { 
  LayoutDashboard, Calendar, Users, Lock, Zap, QrCode, Sparkles, 
  CheckCircle2, AlertTriangle, DollarSign, Send, Receipt, CreditCard,
  RefreshCw, ChevronRight, UserPlus, Layers, Wrench, Scissors, Paintbrush, 
  Activity, GraduationCap, Shirt, Smartphone, Heart, IndianRupee, ShieldCheck,
  Star, MessageSquare, Award, Plus, Trash2, Printer, X, Building2, Check, Share2
} from 'lucide-react';
import { OsTab, Member, ClassSession, AccessLog, AutomationRule, BusinessTypeId } from '../types';
import { INITIAL_MEMBERS, INITIAL_CLASSES, INITIAL_ACCESS_LOGS, INITIAL_AUTOMATIONS } from '../data/mockData';
import { ALL_VERTICAL_BLUEPRINTS } from '../data/verticalsData';

interface OsPlaygroundProps {
  selectedVerticalId?: BusinessTypeId;
  onSelectVertical?: (id: BusinessTypeId) => void;
  onOpenDemoModal: () => void;
}

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  servicesCompleted: number;
  salesVolume: number;
  commissionRatePct: number;
  avatar: string;
  status: 'Available' | 'In Session' | 'On Break';
}

export const OsPlayground: React.FC<OsPlaygroundProps> = ({ 
  selectedVerticalId = 'gym_club',
  onSelectVertical,
  onOpenDemoModal 
}) => {
  const [activeTab, setActiveTab] = useState<OsTab>('dashboard');
  
  // Branch / Location State (Dingg Multi-outlet feature)
  const [selectedBranch, setSelectedBranch] = useState<'bandra' | 'indiranagar' | 'cp'>('bandra');

  // Interactive State
  const [members, setMembers] = useState<Member[]>(INITIAL_MEMBERS);
  const [classes, setClasses] = useState<ClassSession[]>(INITIAL_CLASSES);
  const [accessLogs, setAccessLogs] = useState<AccessLog[]>(INITIAL_ACCESS_LOGS);
  
  // POS Billing Cart State (Dingg 1-Click POS)
  const [selectedClient, setSelectedClient] = useState('Ananya Sharma');
  const [selectedStylist, setSelectedStylist] = useState('Rohan Verma (Stylist)');
  const [discountPct, setDiscountPct] = useState(10);
  const [includeGst, setIncludeGst] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Hair Cut & Keratin Styling', category: 'Service', price: 1899, quantity: 1 },
    { id: '2', name: 'HydraGlow Express Facial', category: 'Service', price: 2499, quantity: 1 },
    { id: '3', name: 'Argan Hair Repair Serum 100ml', category: 'Product', price: 799, quantity: 1 },
  ]);
  const [showUpiQrModal, setShowUpiQrModal] = useState(false);
  const [upiPaymentDone, setUpiPaymentDone] = useState(false);

  // Staff Members State
  const [staffList, setStaffList] = useState<StaffMember[]>([
    { id: 's1', name: 'Rohan Verma', role: 'Senior Hair Stylist', servicesCompleted: 14, salesVolume: 22400, commissionRatePct: 12, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', status: 'In Session' },
    { id: 's2', name: 'Priya Patel', role: 'Skin & Aesthetic Specialist', servicesCompleted: 11, salesVolume: 31500, commissionRatePct: 15, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80', status: 'Available' },
    { id: 's3', name: 'Vikram Singh', role: 'Head Fitness & PT Coach', servicesCompleted: 9, salesVolume: 18000, commissionRatePct: 15, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', status: 'In Session' },
    { id: 's4', name: 'Neha Sharma', role: 'Nail & Spa Therapist', servicesCompleted: 16, salesVolume: 19800, commissionRatePct: 10, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', status: 'On Break' },
  ]);

  // WhatsApp Review Campaign State
  const [campaignProgress, setCampaignProgress] = useState(0);
  const [campaignRunning, setCampaignRunning] = useState(false);

  // Toast Alert state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [unlockingDoor, setUnlockingDoor] = useState(false);

  const currentBlueprint = ALL_VERTICAL_BLUEPRINTS[selectedVerticalId] || ALL_VERTICAL_BLUEPRINTS.gym_club;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Branch Multiplier for Dingg Multi-outlet
  const branchMultiplier = selectedBranch === 'bandra' ? 1 : selectedBranch === 'indiranagar' ? 0.88 : 1.15;

  // POS Subtotal Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPct) / 100);
  const taxableSubtotal = subtotal - discountAmount;
  const gstAmount = includeGst ? Math.round(taxableSubtotal * 0.18) : 0;
  const grandTotal = taxableSubtotal + gstAmount;

  const handleAddServiceToCart = (name: string, price: number, category: string) => {
    const newItem: CartItem = {
      id: `cart-${Date.now()}`,
      name,
      category,
      price,
      quantity: 1,
    };
    setCartItems(prev => [...prev, newItem]);
    showToast(`Added "${name}" (₹${price}) to POS Cart!`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSimulateUpiPayment = () => {
    setShowUpiQrModal(true);
    setUpiPaymentDone(false);
    setTimeout(() => {
      setUpiPaymentDone(true);
      showToast(`₹${grandTotal.toLocaleString('en-IN')} Received via Razorpay UPI! GST Invoice Sent via WhatsApp.`);
    }, 2000);
  };

  // Trigger Hardware or Industry Engine Action
  const handleSimulateEngineAction = () => {
    setUnlockingDoor(true);
    setTimeout(() => {
      setUnlockingDoor(false);
      const newLog: AccessLog = {
        id: `log-${Date.now()}`,
        memberName: `Client Scan (${currentBlueprint.name})`,
        doorName: `${currentBlueprint.specializedIndustryModules[0]?.title || 'Hardware Kiosk'}`,
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
        status: 'Granted',
        method: 'WhatsApp / Hardware QR',
      };
      setAccessLogs([newLog, ...accessLogs.slice(0, 5)]);
      showToast(`${currentBlueprint.name} Engine Executed! Verified in 210ms.`);
    }, 800);
  };

  // Trigger AI Re-Engagement WhatsApp
  const handleSendAiSms = (memberId: string) => {
    setMembers(prev => prev.map(m => {
      if (m.id === memberId) {
        return {
          ...m,
          status: 'Active',
          churnRiskScore: 18,
        };
      }
      return m;
    }));
    showToast(`AI WhatsApp Sent! Customer re-engaged for ${currentBlueprint.name}.`);
  };

  // Book Class / Slot
  const handleBookClass = (classId: string) => {
    setClasses(prev => prev.map(c => {
      if (c.id === classId && c.booked < c.capacity) {
        return { ...c, booked: c.booked + 1 };
      }
      return c;
    }));
    showToast(`Slot reserved in ${currentBlueprint.name}! WhatsApp 1-Click Confirmation Sent.`);
  };

  // Run WhatsApp Review Campaign Simulator
  const handleRunReviewCampaign = () => {
    setCampaignRunning(true);
    setCampaignProgress(10);
    const interval = setInterval(() => {
      setCampaignProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCampaignRunning(false);
          showToast(`WhatsApp Campaign Complete! 184 Feedback Requests Sent, +28 Google 5-Star Reviews Collected!`);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <section id="os-playground" className="py-16 md:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Accent Blurs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#e14024]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef2f1] border border-[#fee5e2] text-[#e14024] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#e14024]" />
            <span>Dingg-Grade All-In-One Business OS Simulator</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live OS Command Center Simulator
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Experience 1-click POS billing, 24/7 appointments, staff commissions, WhatsApp Google review automation, and multi-branch management in real time.
          </p>
        </div>

        {/* Multi-Branch Franchise HQ Bar (Dingg Franchise Feature) */}
        <div className="mt-8 bg-slate-100 p-2 rounded-2xl max-w-xl mx-auto flex items-center justify-between gap-1 border border-slate-200">
          <div className="flex items-center gap-2 px-3 text-xs font-extrabold text-slate-600 shrink-0">
            <Building2 className="w-4 h-4 text-[#e14024]" />
            <span className="hidden sm:inline">Outlet / Branch:</span>
          </div>
          <div className="flex items-center gap-1 w-full">
            {[
              { id: 'bandra', label: 'Bandra West (Mumbai)', mrr: '₹4.2L/mo' },
              { id: 'indiranagar', label: 'Indiranagar (BLR)', mrr: '₹3.8L/mo' },
              { id: 'cp', label: 'Connaught Place (Delhi)', mrr: '₹5.1L/mo' },
            ].map(b => (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(b.id as any)}
                className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  selectedBranch === b.id
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <div>{b.label}</div>
                <div className="text-[10px] text-emerald-600 font-semibold">{b.mrr}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Industry Switcher Bar */}
        {onSelectVertical && (
          <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-4xl mx-auto">
            {[
              { id: 'salon', label: 'Salon & Spa OS', icon: 'Scissors' },
              { id: 'gym_club', label: 'Gym & Fitness OS', icon: 'Dumbbell' },
              { id: 'dental_clinic', label: 'Clinic & Health OS', icon: 'Activity' },
              { id: 'auto_garage', label: 'Garage & Auto OS', icon: 'Wrench' },
              { id: 'tattoo', label: 'Tattoo & Beauty OS', icon: 'Paintbrush' },
              { id: 'laundry', label: 'Laundry OS', icon: 'Shirt' },
              { id: 'coaching_institute', label: 'Academy OS', icon: 'GraduationCap' },
            ].map((v) => {
              const isSel = selectedVerticalId === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => onSelectVertical(v.id as BusinessTypeId)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isSel 
                      ? 'bg-[#e14024] text-white shadow-lg shadow-[#e14024]/25'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{v.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Toast Alert Banner */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-[#e14024] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* Playground Container Frame */}
        <div className="mt-8 bg-slate-50 rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          
          {/* OS Navigation Tabs */}
          <div className="bg-white border-b border-slate-200/90 px-4 sm:px-6 pt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 overflow-x-auto pb-3 scrollbar-none">
              {[
                { id: 'dashboard', label: 'Command Center', icon: LayoutDashboard },
                { id: 'pos_billing', label: '⚡ 1-Click POS Billing', icon: Receipt },
                { id: 'scheduler', label: '24/7 Smart Appointments', icon: Calendar },
                { id: 'members', label: 'CRM & Retention', icon: Users },
                { id: 'staff_commissions', label: 'Staff & Commissions', icon: Award },
                { id: 'automations', label: 'WhatsApp & Google Reviews', icon: MessageSquare },
                { id: 'access', label: `${currentBlueprint.name} Kiosk`, icon: Lock },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as OsTab)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white shadow-md shadow-[#e14024]/15'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pb-3 flex items-center gap-2">
              <button 
                onClick={onOpenDemoModal}
                className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs border border-emerald-200 font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5 text-emerald-600" />
                <span>Deploy {currentBlueprint.name}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: COMMAND CENTER */}
          {activeTab === 'dashboard' && (
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Top Banner metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-1">
                  <div className="text-slate-500 text-xs font-bold">Outlet Revenue (MRR)</div>
                  <div className="text-2xl font-extrabold text-slate-900">₹{Math.round(currentBlueprint.pricingInr.proInrMonthly * 38 * branchMultiplier).toLocaleString('en-IN')}</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">+22.4% vs last month</div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-1">
                  <div className="text-slate-500 text-xs font-bold">Active Clients / Accounts</div>
                  <div className="text-2xl font-extrabold text-slate-900">{Math.round(842 * branchMultiplier)} Clients</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">98.2% Retention Rate</div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-1">
                  <div className="text-slate-500 text-xs font-bold">Today's POS Invoices</div>
                  <div className="text-2xl font-extrabold text-slate-900">{Math.round(42 * branchMultiplier)} Completed</div>
                  <div className="text-[11px] text-cyan-600 font-semibold">₹1,48,200 UPI Billing</div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-1">
                  <div className="text-slate-500 text-xs font-bold">Google 5-Star Reviews</div>
                  <div className="text-2xl font-extrabold text-emerald-600">4.9 ★ (384 Reviews)</div>
                  <div className="text-[11px] text-slate-500">Automated WhatsApp feedback</div>
                </div>
              </div>

              {/* Live Interactive Revenue Stream & Activity Matrix */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Visual Revenue Stream Graph Simulator */}
                <div className="lg:col-span-8 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">{currentBlueprint.name} POS & Billing Stream</h3>
                      <p className="text-xs text-slate-500">Real-time payment collection stream via Razorpay UPI & POS</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-[#fef2f1] text-[#e14024] border border-[#fee5e2] font-bold">
                      Live GST Feed
                    </span>
                  </div>

                  {/* Simulated Bar Chart */}
                  <div className="h-44 flex items-end gap-2 pt-6 pb-2 px-2 border-b border-slate-200">
                    {[
                      { day: 'Mon', h: '65%', mrr: '₹28.8k' },
                      { day: 'Tue', h: '82%', mrr: '₹39.2k' },
                      { day: 'Wed', h: '74%', mrr: '₹34.4k' },
                      { day: 'Thu', h: '95%', mrr: '₹48.1k' },
                      { day: 'Fri', h: '88%', mrr: '₹42.5k' },
                      { day: 'Sat', h: '100%', mrr: '₹64.0k' },
                      { day: 'Sun', h: '84%', mrr: '₹38.8k' },
                    ].map((col, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                        <div className="text-[10px] text-[#e14024] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-5">
                          {col.mrr}
                        </div>
                        <div 
                          style={{ height: col.h }} 
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#e14024] via-[#f15236] to-[#f78875] group-hover:brightness-110 transition-all" 
                        />
                        <span className="text-[11px] text-slate-500">{col.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <span>Average POS Billing Time: <strong className="text-slate-900 font-mono">1.4 Seconds</strong></span>
                    <span className="text-emerald-600 font-bold">100% GST & Tally / Busy Compliant</span>
                  </div>
                </div>

                {/* Right Side: Quick POS Launch Callout */}
                <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#e14024] uppercase tracking-wider">
                      <Receipt className="w-4 h-4" />
                      <span>Dingg-Style 1-Click POS</span>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900">
                      Instant Billing & UPI Checkout
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Select client, add services/products, assign staff commission, and collect UPI payment in 1 click.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setActiveTab('pos_billing')}
                      className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Open 1-Click POS Counter</span>
                    </button>

                    <div className="text-[11px] text-center text-slate-500">
                      Configured for {currentBlueprint.name}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: DINGG-STYLE 1-CLICK POS BILLING COUNTER */}
          {activeTab === 'pos_billing' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#e14024] text-white">
                      <Receipt className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">1-Click POS & GST Billing Counter</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Select client, services, staff stylist, and generate UPI QR code with instant GST invoice.</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl">
                    Outlet: <span className="text-[#e14024] font-extrabold uppercase">{selectedBranch}</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Side: Service & Product Selector */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Catalog Items (Click to Add to Cart)</span>
                    <span className="text-[11px] text-slate-500">Instant Cart Sync</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: 'Hair Cut & Keratin Styling', price: 1899, category: 'Hair Care' },
                      { name: 'HydraGlow Express Facial', price: 2499, category: 'Skin Spa' },
                      { name: 'Argan Hair Repair Serum', price: 799, category: 'Retail Product' },
                      { name: 'Full Body Ayurvedic Massage', price: 2999, category: 'Wellness' },
                      { name: 'Annual VIP Gym Pass', price: 14999, category: 'Membership' },
                      { name: 'Dental Scaling & Polish', price: 1499, category: 'Clinic Care' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAddServiceToCart(item.name, item.price, item.category)}
                        className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#e14024] transition-all text-left group cursor-pointer shadow-2xs hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#e14024] bg-[#fef2f1] px-2 py-0.5 rounded-md border border-[#fee5e2]">
                            {item.category}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">₹{item.price.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-2 group-hover:text-[#e14024] transition-colors">{item.name}</div>
                        <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                          <Plus className="w-3 h-3 text-[#e14024]" />
                          <span>Click to add</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Client & Stylist Selectors */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Select Client:</label>
                        <select
                          value={selectedClient}
                          onChange={e => setSelectedClient(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold text-slate-900 focus:outline-none focus:border-[#e14024]"
                        >
                          <option value="Ananya Sharma">Ananya Sharma (+91 98765 43210)</option>
                          <option value="Rahul Verma">Rahul Verma (+91 91234 56789)</option>
                          <option value="Priya Kapoor">Priya Kapoor (+91 99887 76655)</option>
                          <option value="Vikram Malhotra">Vikram Malhotra (+91 94433 22110)</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Assign Stylist / Staff:</label>
                        <select
                          value={selectedStylist}
                          onChange={e => setSelectedStylist(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold text-slate-900 focus:outline-none focus:border-[#e14024]"
                        >
                          <option value="Rohan Verma (Stylist)">Rohan Verma (Senior Stylist - 12%)</option>
                          <option value="Priya Patel (Skin)">Priya Patel (Skin Specialist - 15%)</option>
                          <option value="Vikram Singh (Coach)">Vikram Singh (PT Coach - 15%)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Invoice & Checkout Summary */}
                <div className="lg:col-span-5 bg-white p-5 rounded-3xl border border-slate-200/90 shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-[#e14024]" />
                      <span className="text-sm font-extrabold text-slate-900">Current POS Invoice</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500">INV-#8421</span>
                  </div>

                  {/* Cart Items Table */}
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {cartItems.length === 0 ? (
                      <div className="text-center py-8 text-slate-400 text-xs italic">No items in cart. Click items on the left to add.</div>
                    ) : (
                      cartItems.map(item => (
                        <div key={item.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-[10px] text-slate-500">{item.category}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-extrabold text-slate-900">₹{item.price.toLocaleString('en-IN')}</span>
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Pricing Controls */}
                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-bold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Discount ({discountPct}%)</span>
                      <span className="font-bold text-rose-600">-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 text-slate-700 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeGst}
                          onChange={e => setIncludeGst(e.target.checked)}
                          className="rounded text-[#e14024] focus:ring-[#e14024]"
                        />
                        <span>Apply GST (18%)</span>
                      </label>
                      <span className="font-bold text-slate-900">₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-sm">
                      <span className="font-extrabold text-slate-900">Grand Total</span>
                      <span className="text-xl font-extrabold text-[#e14024]">₹{grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Checkout Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleSimulateUpiPayment}
                      disabled={cartItems.length === 0}
                      className={`w-full py-3.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        cartItems.length === 0
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          : 'bg-[#e14024] hover:bg-[#c83218] text-white shadow-[#e14024]/20'
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Collect ₹{grandTotal.toLocaleString('en-IN')} via Razorpay UPI QR</span>
                    </button>

                    <button
                      onClick={() => showToast(`Printed GST Tax Invoice & Sent PDF to ${selectedClient} via WhatsApp!`)}
                      disabled={cartItems.length === 0}
                      className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Thermal Invoice & Send WhatsApp PDF</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* UPI QR Payment Modal Simulation */}
              {showUpiQrModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                    <button
                      onClick={() => setShowUpiQrModal(false)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Razorpay Dynamic UPI QR
                      </span>
                      <h4 className="text-lg font-extrabold text-slate-900 mt-2">Scan & Pay ₹{grandTotal.toLocaleString('en-IN')}</h4>
                      <p className="text-xs text-slate-500">Supports GPay, PhonePe, Paytm, BHIM UPI</p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl inline-block relative">
                      <QrCode className="w-44 h-44 text-slate-900 mx-auto" />
                      {upiPaymentDone && (
                        <div className="absolute inset-0 bg-emerald-600/95 text-white rounded-2xl flex flex-col items-center justify-center space-y-2 animate-in fade-in">
                          <CheckCircle2 className="w-12 h-12 text-white animate-bounce" />
                          <div className="font-extrabold text-sm">Payment Successful!</div>
                          <div className="text-[10px] text-emerald-100">Txn ID: UPI_8429104</div>
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-slate-500 font-medium">
                      {upiPaymentDone ? (
                        <span className="text-emerald-600 font-extrabold flex items-center justify-center gap-1">
                          <Check className="w-4 h-4" /> GST Invoice sent via WhatsApp to {selectedClient}!
                        </span>
                      ) : (
                        <span>Simulating live UPI payment detection...</span>
                      )}
                    </div>

                    {upiPaymentDone && (
                      <button
                        onClick={() => setShowUpiQrModal(false)}
                        className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                      >
                        Close POS Window
                      </button>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: 24/7 SMART APPOINTMENT SCHEDULER */}
          {activeTab === 'scheduler' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{currentBlueprint.name} 24/7 Appointment & Slot Matrix</h3>
                  <p className="text-xs text-slate-500">Click "Reserve Slot" to test real-time booking, WhatsApp confirmations, and calendar sync.</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Capacity Utilization: <strong className="text-emerald-600">94.2% Full Today</strong></span>
                </div>
              </div>

              {/* Class Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classes.map((cls) => {
                  const isFull = cls.booked >= cls.capacity;
                  const percentFilled = Math.round((cls.booked / cls.capacity) * 100);

                  return (
                    <div key={cls.id} className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4 hover:border-slate-300 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#fef2f1] text-[#e14024] border border-[#fee5e2]">
                            {cls.specializedLabel || cls.category}
                          </span>
                          <h4 className="text-base font-extrabold text-slate-900 mt-2">{cls.title}</h4>
                          <div className="text-xs text-slate-500 mt-0.5">{cls.time} • {cls.room}</div>
                        </div>

                        <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                          {cls.trainer}
                        </span>
                      </div>

                      {/* Capacity Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Slots Reserved</span>
                          <span className="font-mono font-bold text-slate-900">{cls.booked} / {cls.capacity} ({percentFilled}%)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div 
                            style={{ width: `${percentFilled}%` }} 
                            className={`h-full ${isFull ? 'bg-rose-500' : 'bg-gradient-to-r from-[#e14024] to-[#f15236]'}`} 
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-1 flex items-center justify-between gap-3">
                        <div className="text-[11px] text-slate-500">
                          {isFull ? 'Auto-Waitlist Active' : 'WhatsApp 1-Click Confirmation'}
                        </div>

                        <button
                          onClick={() => handleBookClass(cls.id)}
                          disabled={isFull}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isFull
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-[#e14024] hover:bg-[#c83218] text-white shadow-sm'
                          }`}
                        >
                          {isFull ? 'Waitlist Full' : '+ Reserve Slot'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: MEMBER MATRIX & AI CHURN RISK */}
          {activeTab === 'members' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{currentBlueprint.name} Customer CRM & AI Retention Matrix</h3>
                  <p className="text-xs text-slate-500">AI monitors customer activity and triggers automated WhatsApp re-engagement offers before churn happens.</p>
                </div>
              </div>

              {/* Member Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 uppercase font-mono text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Active Package / Service</th>
                      <th className="py-3 px-4">Custom Attribute</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">AI Churn Score</th>
                      <th className="py-3 px-4 text-right">Automated AI Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {members.map((m) => (
                      <tr key={m.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-semibold flex items-center gap-3">
                          <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                          <div>
                            <div className="text-slate-900 font-bold">{m.name}</div>
                            <div className="text-[11px] text-slate-500">{m.email}</div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 font-medium text-slate-700">
                          {m.plan}
                        </td>

                        <td className="py-3.5 px-4 font-medium text-slate-600">
                          <span className="bg-slate-100 px-2 py-1 rounded text-[11px] font-semibold">
                            {m.customAttribute || 'Active Profile'}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                            m.status === 'Active' 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                              : m.status === 'Churn Risk' 
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}>
                            {m.status}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <span className={`font-mono font-bold ${m.churnRiskScore > 50 ? 'text-rose-600' : 'text-emerald-600'}`}>
                              {m.churnRiskScore}%
                            </span>
                            <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div 
                                style={{ width: `${m.churnRiskScore}%` }} 
                                className={`h-full ${m.churnRiskScore > 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                              />
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          {m.churnRiskScore > 50 ? (
                            <button
                              onClick={() => handleSendAiSms(m.id)}
                              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white font-bold text-[11px] hover:brightness-110 transition-all flex items-center gap-1.5 ml-auto cursor-pointer shadow-sm"
                            >
                              <Send className="w-3 h-3" />
                              <span>Trigger AI WhatsApp Re-Engagement</span>
                            </button>
                          ) : (
                            <span className="text-slate-400 text-[11px] italic">Satisfied Client</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: DINGG-STYLE STAFF & COMMISSION MANAGER */}
          {activeTab === 'staff_commissions' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#e14024]" />
                    <h3 className="text-lg font-extrabold text-slate-900">Staff & Stylist Commission Engine</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Automated service commission calculation, daily tip tracking, and 1-click Razorpay UPI payouts.</p>
                </div>

                <button
                  onClick={() => showToast('All staff daily commissions approved & paid out via Razorpay UPI!')}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <IndianRupee className="w-4 h-4" />
                  <span>1-Click Payout Daily Commissions</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {staffList.map((st) => {
                  const commInr = Math.round((st.salesVolume * st.commissionRatePct) / 100);
                  return (
                    <div key={st.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={st.avatar} alt={st.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                          <div>
                            <div className="font-extrabold text-slate-900 text-sm">{st.name}</div>
                            <div className="text-xs text-slate-500">{st.role}</div>
                          </div>
                        </div>

                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                          st.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                          st.status === 'In Session' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                          'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {st.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl text-center text-xs border border-slate-200">
                        <div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase">Services Today</div>
                          <div className="font-extrabold text-slate-900 text-sm mt-0.5">{st.servicesCompleted} Services</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase">Total Sales</div>
                          <div className="font-extrabold text-slate-900 text-sm mt-0.5">₹{st.salesVolume.toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-emerald-700 font-bold uppercase">Earned Comm ({st.commissionRatePct}%)</div>
                          <div className="font-extrabold text-emerald-600 text-sm mt-0.5">₹{commInr.toLocaleString('en-IN')}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-500">Attendance: <strong className="text-slate-900">Checked In @ 09:15 AM</strong></span>
                        <button
                          onClick={() => showToast(`Sent Commission Breakdown statement to ${st.name} via WhatsApp!`)}
                          className="text-[#e14024] font-bold hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <Share2 className="w-3 h-3" /> Send Statement
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 6: WHATSAPP MARKETING & GOOGLE REVIEW AUTOMATION */}
          {activeTab === 'automations' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#e14024]" />
                    <h3 className="text-lg font-extrabold text-slate-900">WhatsApp Marketing & Google Review Generator</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Automatically send post-service feedback requests and route 5-star reviews to your Google Business Profile.</p>
                </div>

                <button
                  onClick={handleRunReviewCampaign}
                  disabled={campaignRunning}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{campaignRunning ? 'Sending WhatsApp Campaign...' : 'Launch WhatsApp Review Campaign'}</span>
                </button>
              </div>

              {/* Progress Bar for Campaign */}
              {campaignRunning && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <div className="flex justify-between text-xs font-bold text-emerald-900">
                    <span>Sending Post-Service Feedback via WhatsApp Cloud API...</span>
                    <span>{campaignProgress}%</span>
                  </div>
                  <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
                    <div style={{ width: `${campaignProgress}%` }} className="h-full bg-emerald-600 transition-all duration-300" />
                  </div>
                </div>
              )}

              {/* WhatsApp Message Template Preview Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                <div className="md:col-span-6 bg-slate-900 text-white p-5 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-slate-300">WhatsApp Template Preview</span>
                    </div>
                    <span className="text-[10px] bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded font-mono">Meta Approved</span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 font-sans text-xs">
                    <div className="text-slate-400 text-[10px]">TO: Ananya Sharma (+91 98765 43210)</div>
                    <p className="text-slate-200 leading-relaxed">
                      Hi Ananya! 👋 Thank you for visiting <strong className="text-white">{currentBlueprint.name} Bandra</strong> today. We hope you loved your Hair Cut & Keratin Styling!
                    </p>
                    <p className="text-slate-300">
                      How was your experience with Stylist Rohan? Please rate us in 1 click:
                    </p>

                    <div className="pt-2 flex flex-col gap-2">
                      <button className="py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        <Star className="w-3.5 h-3.5 fill-white" /> 5 Stars - Post on Google Reviews
                      </button>
                      <button className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold text-xs">
                        1-4 Stars - Direct Feedback to Owner
                      </button>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Average Conversion Rate: <strong className="text-emerald-400 font-bold">24.8%</strong></span>
                    <span>Zero Spam • WhatsApp Opt-in</span>
                  </div>
                </div>

                {/* Campaign Analytics List */}
                <div className="md:col-span-6 space-y-3">
                  {[
                    { title: 'Post-Service 5-Star Review Campaign', desc: 'Triggers 2 hours after checkout. Increases Google 5-Star reviews by 4.2x.', stat: '+384 Google Reviews', active: true },
                    { title: 'Inactive Client Win-Back Offer', desc: 'Targets clients with no visit in 45 days. Sends personalized 20% discount coupon.', stat: '₹1,42,000 Recovered', active: true },
                    { title: 'Birthday & Anniversary Auto-Greetings', desc: 'Sends birthday wishes with complimentary add-on treatment pass.', stat: '88% Claim Rate', active: true },
                  ].map((cmp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-extrabold text-slate-900">{cmp.title}</h4>
                        <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                          {cmp.stat}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{cmp.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* TAB 7: HARDWARE & INDUSTRY ENGINE */}
          {activeTab === 'access' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Industry Engine Visual Box */}
                <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-4 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#fef2f1] border-2 border-[#fee5e2] flex items-center justify-center text-[#e14024] relative group">
                    <QrCode className="w-10 h-10 animate-pulse" />
                    <div className="absolute inset-0 bg-[#fee5e2] rounded-2xl animate-ping opacity-25" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">{currentBlueprint.name} Hardware & API Engine</h4>
                    <p className="text-xs text-slate-500">{currentBlueprint.specializedIndustryModules[0]?.description || 'Direct hardware & digital workflow sync.'}</p>
                  </div>

                  <button
                    onClick={handleSimulateEngineAction}
                    disabled={unlockingDoor}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#c83218] hover:brightness-110 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    {unlockingDoor ? 'Processing Workflow...' : `Execute ${currentBlueprint.name} Action`}
                  </button>
                </div>

                {/* Real-Time Access & Action Log Stream */}
                <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Live OS Event Stream</h4>
                    <span className="text-[11px] text-emerald-600 font-bold">Latency: 210ms</span>
                  </div>

                  <div className="space-y-2">
                    {accessLogs.map((log) => (
                      <div key={log.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${log.status === 'Granted' || log.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                          <div>
                            <div className="font-bold text-slate-900">{log.memberName}</div>
                            <div className="text-[11px] text-slate-500">{log.doorName} • {log.method}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            log.status === 'Granted' || log.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {log.status}
                          </span>
                          <div className="text-[10px] text-slate-400 mt-0.5">{log.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
