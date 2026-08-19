export type VerticalCategory = 
  | 'fitness'
  | 'beauty'
  | 'health'
  | 'pet'
  | 'education'
  | 'auto'
  | 'laundry'
  | 'repair'
  | 'events';

export type BusinessTypeId = 
  // Fitness & Wellness
  | 'gym_club'
  | 'crossfit'
  | 'yoga_pilates'
  | 'boutique_studio'
  | 'personal_training'
  | 'martial_arts'
  // Beauty & Aesthetics
  | 'salon'
  | 'spa'
  | 'tattoo'
  | 'barber'
  | 'nail_studio'
  | 'beauty_clinic'
  // Healthcare & Wellness
  | 'dental_clinic'
  | 'skin_clinic'
  | 'physiotherapy'
  | 'ayurveda'
  | 'optical_store'
  | 'pharmacy'
  // Pet Care
  | 'veterinary'
  | 'pet_grooming'
  // Education
  | 'coaching_institute'
  | 'dance_academy'
  | 'music_academy'
  // Automotive
  | 'auto_garage'
  | 'car_wash'
  | 'car_detailing'
  // Domestic & Care
  | 'laundry'
  | 'dry_cleaning'
  // Tech Repairs
  | 'mobile_repair'
  | 'laptop_repair'
  // Events & Rental
  | 'photography_studio'
  | 'printing_press'
  | 'event_planner'
  | 'equipment_rental'
  // Enterprise / Multi
  | 'franchise';

export interface VerticalIndustryBlueprint {
  id: BusinessTypeId;
  name: string;
  category: VerticalCategory;
  categoryLabel: string;
  iconName: string; // Lucide icon identifier
  tagline: string;
  badge: string;
  marketSizeInr: string; // e.g. "₹24,500 Cr Market by 2026"
  digitalMaturity: 'Low' | 'Medium' | 'High' | 'Transforming';
  competitors: string[]; // e.g. ["Mindbody", "Zenoti", "Fresha"]
  painPoints: string[];
  aiOpportunities: string[];
  idealCustomers: {
    singleOutlet: string;
    growingChain: string;
    franchiseEnterprise: string;
  };
  coreModules: string[];
  specializedIndustryModules: {
    title: string;
    description: string;
    fieldsOrWorkflow: string[];
  }[];
  aiFeatures: {
    name: string;
    description: string;
    impact: string;
  }[];
  automationEngine: {
    trigger: string;
    workflowSteps: string[];
    recoveredValueInr: string;
  }[];
  roleDashboards: string[];
  reportsList: string[];
  mobileApps: {
    customerApp: string[];
    staffApp: string[];
    ownerApp: string[];
  };
  databaseSchema: {
    tableName: string;
    keyColumns: string[];
    purpose: string;
  }[];
  apiEndpoints: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
  }[];
  pricingInr: {
    starterInrMonthly: number;
    growthInrMonthly: number;
    proInrMonthly: number;
    enterpriseInrMonthly: number;
  };
  keyMetric: string;
  metricLabel: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    businessName: string;
    location: string;
    stats: { label: string; value: string }[];
    avatar: string;
  };
}

export interface BusinessTypeProfile {
  id: BusinessTypeId;
  name: string;
  badge: string;
  headline: string;
  description: string;
  keyMetric: string;
  metricLabel: string;
  sampleWorkflow: string;
  testimonialQuote: string;
  author: string;
  authorRole: string;
  gymName: string;
  avatarUrl: string;
}

export type OsTab = 'dashboard' | 'pos_billing' | 'scheduler' | 'members' | 'staff_commissions' | 'access' | 'automations' | 'architecture';

export interface Member {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: 'Active' | 'Churn Risk' | 'Overdue' | 'Frozen' | 'In Progress';
  lastCheckIn: string;
  attendanceStreak: number;
  churnRiskScore: number; // 0 - 100
  avatar: string;
  customAttribute?: string; // e.g. "Tooth #14 Crown" or "BMW 320d" or "Tattoo Sleeve Stencil"
}

export interface ClassSession {
  id: string;
  title: string;
  time: string;
  trainer: string;
  capacity: number;
  booked: number;
  room: string;
  category: string;
  specializedLabel?: string;
}

export interface AccessLog {
  id: string;
  memberName: string;
  doorName: string;
  time: string;
  status: 'Granted' | 'Denied' | 'Flagged' | 'Completed' | 'Pending Approval';
  method: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: string;
  action: string;
  active: boolean;
  timesExecuted: number;
  recoveredRevenue: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPriceInr: number;
  annualPriceInr: number;
  description: string;
  includedMembers: string;
  locationsCount: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface ComparisonItem {
  id?: string;
  category?: 'payments' | 'ai_whatsapp' | 'hardware' | 'multi_outlet' | 'operations' | 'migration';
  feature: string;
  syncFyre: string | boolean;
  syncFyreSupported?: boolean;
  spreadsheets: string | boolean;
  spreadsheetsSupported?: boolean;
  legacySoftware: string | boolean;
  legacySupported?: boolean;
  competitorsCompared?: string; // e.g. "Zenoti / Mindbody / Fresha / Square"
  valuePropTitle?: string;
  valuePropDescription?: string;
  roiImpactMetric?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  gym: string;
  location: string;
  stats: { label: string; value: string }[];
  businessType: BusinessTypeId;
  avatar: string;
}
