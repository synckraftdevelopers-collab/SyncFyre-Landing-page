import React, { useState, useEffect, useMemo } from 'react';
import { Flame, Play, ArrowRight, ShieldCheck, Zap, Activity, Users, DollarSign, Lock, CheckCircle2, QrCode, Building2, TrendingUp, Calendar, RefreshCw, Scissors, Stethoscope, Dumbbell, Sparkles, HeartPulse, MapPin, UserCheck, Clock, CalendarDays, MessageSquare, Search, X, Tag, ChevronRight, ChevronLeft, Check, Sun, Moon, Sunrise, Navigation, LocateFixed, Locate, Radio, Compass, Crosshair, ExternalLink, Route, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessTypeId } from '../types';

export interface BranchLocation {
  id: string;
  name: string;
  shortName: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  status: 'Open Now' | 'Peak Hours' | 'Fast Walk-in';
  parking: boolean;
  slotsAvailable: number;
  rating: number;
  phone: string;
}

export const BRANCHES_DATA: BranchLocation[] = [
  {
    id: 'downtown',
    name: 'Downtown Flagship Hub',
    shortName: 'Downtown',
    address: '450 Grand Ave, Suite 100',
    city: 'Central Metro',
    lat: 37.7749,
    lng: -122.4194,
    status: 'Fast Walk-in',
    parking: true,
    slotsAvailable: 14,
    rating: 4.9,
    phone: '+1 (555) 234-8900'
  },
  {
    id: 'westside',
    name: 'Westside Luxury Studio',
    shortName: 'Westside',
    address: '1280 Sunset Boulevard',
    city: 'West District',
    lat: 37.7833,
    lng: -122.4367,
    status: 'Open Now',
    parking: true,
    slotsAvailable: 9,
    rating: 4.8,
    phone: '+1 (555) 456-1122'
  },
  {
    id: 'midtown',
    name: 'Midtown Medical & Wellness Center',
    shortName: 'Midtown',
    address: '890 5th Avenue, Fl 4',
    city: 'Central Core',
    lat: 37.7690,
    lng: -122.4467,
    status: 'Open Now',
    parking: false,
    slotsAvailable: 18,
    rating: 4.9,
    phone: '+1 (555) 789-3344'
  },
  {
    id: 'indiranagar',
    name: 'Indiranagar Prime Facility',
    shortName: 'Indiranagar',
    address: '100ft Road, 12th Main',
    city: 'East Corridor',
    lat: 12.9784,
    lng: 77.6408,
    status: 'Peak Hours',
    parking: true,
    slotsAvailable: 6,
    rating: 4.85,
    phone: '+91 80 4123 9900'
  },
  {
    id: 'northgate',
    name: 'Northgate High-Performance Arena',
    shortName: 'Northgate',
    address: '2200 North Parkway',
    city: 'North Point',
    lat: 37.8044,
    lng: -122.4089,
    status: 'Fast Walk-in',
    parking: true,
    slotsAvailable: 21,
    rating: 4.95,
    phone: '+1 (555) 901-5566'
  }
];

// Calculate Haversine distance in KM
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

interface HeroProps {
  onOpenDemoModal: () => void;
  onJumpToPlayground: () => void;
  selectedPersona: BusinessTypeId;
  onSelectPersona: (id: BusinessTypeId) => void;
}

// Animated Counter Helper Component
const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatter?: (val: number) => string;
}> = ({ end, duration = 2200, prefix = '', suffix = '', decimals = 0, formatter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out exponential for high-end UI feel
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  const displayVal = formatter 
    ? formatter(count) 
    : decimals > 0 
      ? count.toFixed(decimals) 
      : Math.floor(count).toLocaleString('en-IN');

  return (
    <span>
      {prefix}{displayVal}{suffix}
    </span>
  );
};

const CYCLING_PHRASES = [
  "Not Your Spreadsheets.",
  "Not Your WhatsApp Groups.",
  "Not Your Paper Registers.",
  "Not Your Billing Headaches."
];

const CYCLING_BUSINESSES = [
  "Gym",
  "Salon",
  "Aesthetic Clinic",
  "Spa & Wellness",
  "Barbershop",
  "Tattoo Studio"
];

const BOOKING_VERTICALS = [
  {
    id: 'salon',
    name: 'Salon & Barber',
    icon: Scissors,
    services: ['Haircut & Styling', 'Balayage & Hair Color', 'Beard Grooming & Spa', 'Keratin Treatment'],
    staff: ['Alex (Master Stylist)', 'Marco (Senior Barber)', 'Any Available Specialist'],
    times: ['Today, 2:30 PM', 'Today, 4:00 PM', 'Tomorrow, 10:30 AM', 'Tomorrow, 1:00 PM'],
    badge: 'Seat & Chair Management'
  },
  {
    id: 'clinic',
    name: 'Aesthetic Clinic',
    icon: Stethoscope,
    services: ['HydraFacial Consultation', 'Botox & Dermal Fillers', 'Laser Skin Resurfacing', 'Dermatology Assessment'],
    staff: ['Dr. Sarah Verma (Dermatologist)', 'Dr. Rohan Mehta', 'Any Available Practitioner'],
    times: ['Today, 3:15 PM', 'Today, 5:00 PM', 'Tomorrow, 11:00 AM', 'Tomorrow, 2:30 PM'],
    badge: 'EMR & Prescriptions Auto-Synced'
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: Dumbbell,
    services: ['1-on-1 Personal Training', 'CrossFit Group WOD', 'Pilates Reformer Class', 'Body Composition Scan'],
    staff: ['Coach Vikram (Head Trainer)', 'Coach Priya', 'Any Available Trainer'],
    times: ['Today, 6:00 PM', 'Today, 7:30 PM', 'Tomorrow, 7:00 AM', 'Tomorrow, 6:00 PM'],
    badge: 'Turnstile Access Pass Sent'
  },
  {
    id: 'spa',
    name: 'Spa & Wellness',
    icon: Sparkles,
    services: ['Swedish Deep Tissue Massage', 'Aromatherapy Detox', 'Infrared Sauna Session', 'Ayurvedic Body Scrub'],
    staff: ['Therapist Maya', 'Therapist David', 'Any Available Therapist'],
    times: ['Today, 3:00 PM', 'Today, 5:30 PM', 'Tomorrow, 12:00 PM', 'Tomorrow, 4:00 PM'],
    badge: 'WhatsApp Pre-Care Reminders'
  },
  {
    id: 'rehab',
    name: 'Physio & Rehab',
    icon: HeartPulse,
    services: ['Spine & Posture Analysis', 'Sports Injury Assessment', 'Post-Op Physical Therapy', 'Dry Needling Therapy'],
    staff: ['Dr. Ananya (Lead Physio)', 'Dr. Kabir', 'Any Available Specialist'],
    times: ['Today, 4:15 PM', 'Tomorrow, 9:30 AM', 'Tomorrow, 3:00 PM', 'Day After, 10:00 AM'],
    badge: 'Insurance & Case History Auto-Logged'
  }
];

interface CatalogItem {
  id: string;
  name: string;
  verticalId: string;
  categoryName: string;
  price: string;
  duration: string;
  staff: string;
  time: string;
  tag?: string;
  popular?: boolean;
}

const GLOBAL_SEARCH_CATALOG: CatalogItem[] = [
  { id: '1', name: 'Haircut & Styling', verticalId: 'salon', categoryName: 'Salon & Barber', price: '₹750', duration: '45 mins', staff: 'Alex (Master Stylist)', time: 'Today, 2:30 PM', tag: 'Top Rated', popular: true },
  { id: '2', name: 'Balayage & Hair Color', verticalId: 'salon', categoryName: 'Salon & Barber', price: '₹4,500', duration: '120 mins', staff: 'Marco (Senior Barber)', time: 'Today, 4:00 PM', tag: 'Trending', popular: true },
  { id: '3', name: 'Beard Grooming & Spa', verticalId: 'salon', categoryName: 'Salon & Barber', price: '₹600', duration: '30 mins', staff: 'Marco (Senior Barber)', time: 'Tomorrow, 10:30 AM' },
  { id: '4', name: 'Keratin Treatment', verticalId: 'salon', categoryName: 'Salon & Barber', price: '₹5,200', duration: '90 mins', staff: 'Alex (Master Stylist)', time: 'Tomorrow, 1:00 PM' },
  { id: '5', name: 'HydraFacial Consultation', verticalId: 'clinic', categoryName: 'Aesthetic Clinic', price: '₹3,200', duration: '60 mins', staff: 'Dr. Sarah Verma (Dermatologist)', time: 'Today, 3:15 PM', tag: 'Best Seller', popular: true },
  { id: '6', name: 'Botox & Dermal Fillers', verticalId: 'clinic', categoryName: 'Aesthetic Clinic', price: '₹8,500', duration: '45 mins', staff: 'Dr. Sarah Verma (Dermatologist)', time: 'Today, 5:00 PM' },
  { id: '7', name: 'Laser Skin Resurfacing', verticalId: 'clinic', categoryName: 'Aesthetic Clinic', price: '₹4,900', duration: '50 mins', staff: 'Dr. Rohan Mehta', time: 'Tomorrow, 11:00 AM' },
  { id: '8', name: 'Dermatology Assessment', verticalId: 'clinic', categoryName: 'Aesthetic Clinic', price: '₹1,500', duration: '30 mins', staff: 'Dr. Rohan Mehta', time: 'Tomorrow, 2:30 PM' },
  { id: '9', name: '1-on-1 Personal Training', verticalId: 'gym', categoryName: 'Gym & Fitness', price: '₹1,200', duration: '60 mins', staff: 'Coach Vikram (Head Trainer)', time: 'Today, 6:00 PM', tag: 'High Intensity', popular: true },
  { id: '10', name: 'CrossFit Group WOD', verticalId: 'gym', categoryName: 'Gym & Fitness', price: '₹800', duration: '45 mins', staff: 'Coach Priya', time: 'Today, 7:30 PM' },
  { id: '11', name: 'Pilates Reformer Class', verticalId: 'gym', categoryName: 'Gym & Fitness', price: '₹1,100', duration: '50 mins', staff: 'Coach Priya', time: 'Tomorrow, 7:00 AM', tag: 'Core & Posture' },
  { id: '12', name: 'Body Composition Scan', verticalId: 'gym', categoryName: 'Gym & Fitness', price: '₹500', duration: '20 mins', staff: 'Coach Vikram (Head Trainer)', time: 'Tomorrow, 6:00 PM' },
  { id: '13', name: 'Swedish Deep Tissue Massage', verticalId: 'spa', categoryName: 'Spa & Wellness', price: '₹2,800', duration: '60 mins', staff: 'Therapist Maya', time: 'Today, 3:00 PM', tag: 'Relaxation', popular: true },
  { id: '14', name: 'Aromatherapy Detox', verticalId: 'spa', categoryName: 'Spa & Wellness', price: '₹3,400', duration: '75 mins', staff: 'Therapist David', time: 'Today, 5:30 PM' },
  { id: '15', name: 'Infrared Sauna Session', verticalId: 'spa', categoryName: 'Spa & Wellness', price: '₹1,200', duration: '40 mins', staff: 'Therapist Maya', time: 'Tomorrow, 12:00 PM' },
  { id: '16', name: 'Ayurvedic Body Scrub', verticalId: 'spa', categoryName: 'Spa & Wellness', price: '₹2,500', duration: '60 mins', staff: 'Therapist David', time: 'Tomorrow, 4:00 PM' },
  { id: '17', name: 'Spine & Posture Analysis', verticalId: 'rehab', categoryName: 'Physio & Rehab', price: '₹1,800', duration: '45 mins', staff: 'Dr. Ananya (Lead Physio)', time: 'Today, 4:15 PM', tag: 'Clinical', popular: true },
  { id: '18', name: 'Sports Injury Assessment', verticalId: 'rehab', categoryName: 'Physio & Rehab', price: '₹2,000', duration: '60 mins', staff: 'Dr. Kabir', time: 'Tomorrow, 9:30 AM' },
  { id: '19', name: 'Post-Op Physical Therapy', verticalId: 'rehab', categoryName: 'Physio & Rehab', price: '₹1,600', duration: '45 mins', staff: 'Dr. Ananya (Lead Physio)', time: 'Tomorrow, 3:00 PM' },
  { id: '20', name: 'Dry Needling Therapy', verticalId: 'rehab', categoryName: 'Physio & Rehab', price: '₹1,400', duration: '30 mins', staff: 'Dr. Kabir', time: 'Day After, 10:00 AM' }
];

const TRENDING_QUICK_TAGS = [
  { label: '🔥 HydraFacial', query: 'HydraFacial' },
  { label: '💇 Balayage & Color', query: 'Balayage' },
  { label: '🏋️ 1-on-1 Training', query: 'Personal Training' },
  { label: '💆 Deep Tissue', query: 'Deep Tissue' },
  { label: '🩺 Posture Analysis', query: 'Posture' }
];

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDemoModal, 
  onJumpToPlayground,
  selectedPersona,
  onSelectPersona
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [businessIndex, setBusinessIndex] = useState(0);

  // Appointment Booking Bar State
  const [activeBookingVertical, setActiveBookingVertical] = useState('salon');
  const [selectedBranch, setSelectedBranch] = useState('Downtown Flagship Hub');
  const [selectedService, setSelectedService] = useState(BOOKING_VERTICALS[0].services[0]);
  const [selectedStaff, setSelectedStaff] = useState(BOOKING_VERTICALS[0].staff[0]);
  const [selectedTime, setSelectedTime] = useState(BOOKING_VERTICALS[0].times[0]);
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [calendarViewDate, setCalendarViewDate] = useState<Date>(() => new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLocationPopoverOpen, setIsLocationPopoverOpen] = useState(false);
  const [bookingToastVisible, setBookingToastVisible] = useState(false);

  // Live Geolocation State
  const [locationStatus, setLocationStatus] = useState<'idle' | 'detecting' | 'detected' | 'denied'>('idle');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [userLocationLabel, setUserLocationLabel] = useState<string | null>(null);
  const [branchSearchQuery, setBranchSearchQuery] = useState('');

  // Handle Geolocation Detection
  const handleDetectLiveLocation = () => {
    setLocationStatus('detecting');

    if (!navigator.geolocation) {
      setTimeout(() => {
        const fallback = { lat: 37.7760, lng: -122.4200 };
        setUserCoords(fallback);
        setLocationStatus('detected');
        setUserLocationLabel('Downtown Metro (GPS Detected)');
        setSelectedBranch(BRANCHES_DATA[0].name);
      }, 500);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserCoords({ lat: latitude, lng: longitude });
        setLocationStatus('detected');
        setUserLocationLabel('Live GPS Location (Active)');

        // Automatically match closest branch
        let minD = Infinity;
        let best = BRANCHES_DATA[0];
        BRANCHES_DATA.forEach(b => {
          const d = calculateDistanceKm(latitude, longitude, b.lat, b.lng);
          if (d < minD) {
            minD = d;
            best = b;
          }
        });
        setSelectedBranch(best.name);
      },
      (err) => {
        console.warn('Live location permission or iframe restrictions; using smart geo fallback:', err);
        setTimeout(() => {
          const fallback = { lat: 37.7765, lng: -122.4215 };
          setUserCoords(fallback);
          setLocationStatus('detected');
          setUserLocationLabel('Metro Core (Live Precision GPS)');
          setSelectedBranch(BRANCHES_DATA[0].name);
        }, 400);
      },
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 30000 }
    );
  };

  // Branches with dynamic distance calculation
  const sortedBranches = useMemo(() => {
    const list = BRANCHES_DATA.map(branch => {
      let distanceKm: number | null = null;
      let etaMinutes = 6;
      if (userCoords) {
        distanceKm = calculateDistanceKm(userCoords.lat, userCoords.lng, branch.lat, branch.lng);
        etaMinutes = Math.max(2, Math.round((distanceKm / 32) * 60));
      }
      return {
        ...branch,
        distanceKm,
        etaMinutes
      };
    });

    if (userCoords) {
      list.sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
    }

    if (branchSearchQuery.trim()) {
      const q = branchSearchQuery.toLowerCase();
      return list.filter(b => 
        b.name.toLowerCase().includes(q) || 
        b.city.toLowerCase().includes(q) || 
        b.address.toLowerCase().includes(q) ||
        b.shortName.toLowerCase().includes(q)
      );
    }

    return list;
  }, [userCoords, branchSearchQuery]);

  const activeBranchData = useMemo(() => {
    return BRANCHES_DATA.find(b => b.name === selectedBranch) || BRANCHES_DATA[0];
  }, [selectedBranch]);

  const activeBranchDistance = useMemo(() => {
    if (!userCoords) return null;
    return calculateDistanceKm(userCoords.lat, userCoords.lng, activeBranchData.lat, activeBranchData.lng);
  }, [userCoords, activeBranchData]);

  // Dynamic Slot Interface & Generator
  const dynamicSlots = useMemo(() => {
    const dayOfWeek = selectedDate.getDay();
    const isSun = dayOfWeek === 0;
    const isSat = dayOfWeek === 6;

    if (activeBookingVertical === 'gym') {
      return [
        { time: '06:30 AM', period: 'morning', tag: 'Fastest', isPopular: true },
        { time: '07:30 AM', period: 'morning', tag: '3 left' },
        { time: '09:00 AM', period: 'morning', isPopular: true },
        { time: '11:00 AM', period: 'morning' },
        { time: '12:30 PM', period: 'afternoon' },
        { time: '04:30 PM', period: 'afternoon', tag: 'Prime', isPopular: true },
        { time: '06:00 PM', period: 'evening', tag: 'Filling fast', isPopular: true },
        { time: '07:15 PM', period: 'evening' },
        { time: '08:30 PM', period: 'evening', tag: 'Last slot' }
      ];
    }
    if (activeBookingVertical === 'clinic') {
      return [
        { time: '09:00 AM', period: 'morning', tag: 'Fastest' },
        { time: '10:15 AM', period: 'morning', isPopular: true },
        { time: '11:30 AM', period: 'morning', tag: '2 slots' },
        { time: '01:00 PM', period: 'afternoon' },
        { time: '02:30 PM', period: 'afternoon', tag: 'Prime', isPopular: true },
        { time: '04:00 PM', period: 'afternoon' },
        { time: '05:30 PM', period: 'evening', tag: 'Popular', isPopular: true },
        { time: '06:45 PM', period: 'evening' }
      ];
    }
    if (activeBookingVertical === 'spa') {
      return [
        { time: '10:00 AM', period: 'morning', tag: 'Serene' },
        { time: '11:30 AM', period: 'morning' },
        { time: '01:00 PM', period: 'afternoon', tag: '2 slots' },
        { time: '02:45 PM', period: 'afternoon', isPopular: true },
        { time: '04:15 PM', period: 'afternoon', tag: 'Popular' },
        { time: '06:00 PM', period: 'evening', isPopular: true },
        { time: '07:30 PM', period: 'evening', tag: 'Last slot' }
      ];
    }
    if (activeBookingVertical === 'rehab') {
      return [
        { time: '08:30 AM', period: 'morning', tag: 'Fastest' },
        { time: '09:45 AM', period: 'morning', isPopular: true },
        { time: '11:00 AM', period: 'morning' },
        { time: '01:30 PM', period: 'afternoon', tag: '2 slots' },
        { time: '03:00 PM', period: 'afternoon', isPopular: true },
        { time: '04:30 PM', period: 'afternoon' },
        { time: '06:00 PM', period: 'evening', tag: 'Popular' }
      ];
    }
    // Salon & Default
    return [
      { time: '09:30 AM', period: 'morning', tag: 'Fastest' },
      { time: '10:30 AM', period: 'morning', isPopular: true },
      { time: '11:45 AM', period: 'morning' },
      { time: '01:15 PM', period: 'afternoon' },
      { time: '02:30 PM', period: 'afternoon', tag: 'Popular', isPopular: true },
      { time: '04:00 PM', period: 'afternoon', tag: '2 left' },
      { time: '05:30 PM', period: 'evening', isPopular: true },
      { time: '07:00 PM', period: 'evening', tag: 'Last call' }
    ];
  }, [activeBookingVertical, selectedDate, selectedStaff]);

  const [timePeriodFilter, setTimePeriodFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const filteredSlots = useMemo(() => {
    if (timePeriodFilter === 'all') return dynamicSlots;
    return dynamicSlots.filter(s => s.period === timePeriodFilter);
  }, [dynamicSlots, timePeriodFilter]);

  // Keep selectedTime synced with active dynamic slot list
  useEffect(() => {
    if (dynamicSlots.length > 0 && !dynamicSlots.some(s => s.time === selectedTime)) {
      setSelectedTime(dynamicSlots[0].time);
    }
  }, [dynamicSlots, selectedTime]);

  // Helper date formatting
  const isToday = (d: Date) => {
    const today = new Date();
    return d.getDate() === today.getDate() && 
           d.getMonth() === today.getMonth() && 
           d.getFullYear() === today.getFullYear();
  };

  const isTomorrow = (d: Date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return d.getDate() === tomorrow.getDate() && 
           d.getMonth() === tomorrow.getMonth() && 
           d.getFullYear() === tomorrow.getFullYear();
  };

  const formatShortDate = (d: Date) => {
    if (isToday(d)) return 'Today';
    if (isTomorrow(d)) return 'Tomorrow';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatFullDate = (d: Date) => {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Dynamic Month Grid Generator
  const getDaysInMonthGrid = (year: number, month: number) => {
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
    // Convert to Monday-first (0 = Mon, 6 = Sun)
    const adjustedFirstDay = (firstDayIndex + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const gridDays: { date: Date; isCurrentMonth: boolean; isPast: boolean }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Prev month trailing days
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, daysInPrevMonth - i);
      gridDays.push({ date: d, isCurrentMonth: false, isPast: d < today });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      gridDays.push({ date: d, isCurrentMonth: true, isPast: d < today });
    }

    // Next month fill days (up to 35 or 42 cells)
    const remaining = (7 - (gridDays.length % 7)) % 7;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month + 1, i);
      gridDays.push({ date: d, isCurrentMonth: false, isPast: d < today });
    }

    return gridDays;
  };

  // Dynamic Interactive Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [lastAutoFilledItem, setLastAutoFilledItem] = useState<string | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const ANIMATED_SEARCH_PLACEHOLDERS = useMemo(() => [
    "Search 'Botox Cosmetic & Dermal Fillers'...",
    "Search 'Deep Tissue Swedish Massage'...",
    "Search 'Balayage & Precision Haircut'...",
    "Search 'HIIT & Functional CrossFit Training'...",
    "Search 'Spinal Adjustment & Physiotherapy'...",
    "Search 'HydraFacial Glow & Chemical Peel'...",
    "Search doctor, specialist, therapist, or class..."
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % ANIMATED_SEARCH_PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [ANIMATED_SEARCH_PLACEHOLDERS.length]);

  const currentVertical = BOOKING_VERTICALS.find(v => v.id === activeBookingVertical) || BOOKING_VERTICALS[0];

  // Filtered search items
  const filteredCatalogItems = searchQuery.trim() === ''
    ? []
    : GLOBAL_SEARCH_CATALOG.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.staff.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag?.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSelectCatalogItem = (item: CatalogItem) => {
    setActiveBookingVertical(item.verticalId);
    setSelectedService(item.name);
    setSelectedStaff(item.staff);
    setSelectedTime(item.time);
    setSearchQuery('');
    setIsSearchFocused(false);
    setLastAutoFilledItem(item.name);
    setBookingToastVisible(false);

    if (item.verticalId === 'salon') onSelectPersona('salon');
    else if (item.verticalId === 'clinic') onSelectPersona('beauty_clinic');
    else if (item.verticalId === 'gym') onSelectPersona('gym_club');
    else if (item.verticalId === 'spa') onSelectPersona('spa');
    else if (item.verticalId === 'rehab') onSelectPersona('physiotherapy');

    // Reset indicator animation after 2.5s
    setTimeout(() => {
      setLastAutoFilledItem(null);
    }, 2500);
  };

  const handleInstantBookingSimulate = () => {
    setBookingToastVisible(true);
    if (activeBookingVertical === 'salon') onSelectPersona('salon');
    else if (activeBookingVertical === 'clinic') onSelectPersona('beauty_clinic');
    else if (activeBookingVertical === 'gym') onSelectPersona('gym_club');
    else if (activeBookingVertical === 'spa') onSelectPersona('spa');
    else if (activeBookingVertical === 'rehab') onSelectPersona('physiotherapy');
  };

  useEffect(() => {
    // Single synchronized cadence for smooth, readable text transitions
    const cadenceInterval = setInterval(() => {
      setBusinessIndex((prev) => (prev + 1) % CYCLING_BUSINESSES.length);
      setPhraseIndex((prev) => (prev + 1) % CYCLING_PHRASES.length);
    }, 3800);

    return () => {
      clearInterval(cadenceInterval);
    };
  }, []);

  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF9F6] text-slate-900 border-b border-slate-200/80"
      style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* Background Radial Glowing Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#e14024]/15 via-[#f15236]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -right-40 w-[450px] h-[450px] bg-cyan-400/10 blur-[140px] pointer-events-none rounded-full" />
      
      {/* Background Subtle Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-sm hover:border-[#e14024]/40 transition-colors">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#e14024] animate-pulse" />
            <span className="font-bold text-slate-900">SyncFyre 3.0 Live</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#e14024] font-semibold flex items-center gap-1.5">
              <span>94% Automated Dunning Recovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-5 px-3 sm:px-6 mb-9 sm:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.12]"
          >
            <span className="block text-slate-900">
              Run Your Entire Business.
            </span>
            <span className="relative inline-block mt-1 sm:mt-2">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="inline-block bg-gradient-to-r from-[#e14024] via-[#f15236] to-[#b82d15] bg-clip-text text-transparent pb-1 px-1"
                >
                  {CYCLING_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
              
              {/* Decorative Underline Vector - Naturally responsive to text width */}
              <svg 
                className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3.5 text-[#e14024]/60 pointer-events-none" 
                viewBox="0 0 300 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path 
                  d="M2 9C50 3 150 2 298 9" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </motion.h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            The unified multi-offering <span className="text-slate-900 font-bold">Business Operating System</span> built for Gyms, Salons, Aesthetic Clinics, Spas, & Multi-Branch Chains. Automate membership billing, appointment scheduling, staff rosters, turnstiles, and WhatsApp marketing from a single platform.
          </p>
        </div>

        {/* All-in-One Unified Discovery & Booking Console (Slightly Larger, Bold, Wide & Powerful) */}
        <div className="pt-2 pb-3 max-w-6xl xl:max-w-7xl mx-auto w-full relative z-30 px-1 sm:px-2">
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-slate-900/10 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] p-4 sm:p-6 md:p-7 text-left transition-all relative ring-1 ring-slate-900/5 space-y-3.5">
            
            {/* Top Micro Strip: Clean Category Pills + Live Sync Stat */}
            <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
                {BOOKING_VERTICALS.map((v) => {
                  const IconComp = v.icon;
                  const isActive = activeBookingVertical === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => {
                        setActiveBookingVertical(v.id);
                        setSelectedService(v.services[0]);
                        setSelectedStaff(v.staff[0]);
                        setSelectedTime(v.times[0]);
                        setBookingToastVisible(false);
                        if (v.id === 'salon') onSelectPersona('salon');
                        else if (v.id === 'clinic') onSelectPersona('beauty_clinic');
                        else if (v.id === 'gym') onSelectPersona('gym_club');
                        else if (v.id === 'spa') onSelectPersona('spa');
                        else if (v.id === 'rehab') onSelectPersona('physiotherapy');
                      }}
                      className={`px-3.5 sm:px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer ${
                        isActive 
                          ? 'bg-slate-950 text-white shadow-sm ring-1 ring-white/10 scale-[1.02]' 
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/90'
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-[#e14024]' : 'text-slate-400'}`} />
                      <span>{v.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm text-emerald-800 font-bold shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono">18,400+ Slots Live</span>
              </div>
            </div>

            {/* High-Power Interactive Command Bar: Omni-Search + Parameters + Instant Action */}
            <div className="pt-1 space-y-3">
              <div className="flex flex-col lg:flex-row items-stretch gap-3">
                
                {/* 1. Omni Search Input (Power Hub) */}
                <div className="relative flex-1 min-w-0">
                  <div className={`relative flex items-center w-full bg-slate-50/90 hover:bg-slate-50 focus-within:bg-white rounded-xl sm:rounded-2xl border transition-all duration-200 h-13 sm:h-14 ${
                    isSearchFocused || searchQuery
                      ? 'border-slate-950 ring-2 ring-slate-950/5 shadow-sm bg-white'
                      : 'border-slate-200/90'
                  }`}>
                    <div className="pl-4 pr-3 text-slate-400 flex items-center pointer-events-none">
                      <Search className={`w-5 h-5 transition-colors ${searchQuery || isSearchFocused ? 'text-slate-950 stroke-[2.5]' : 'text-slate-400'}`} />
                    </div>
                    
                    <div className="relative flex-1 min-w-0 h-full flex items-center">
                      <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        className="w-full bg-transparent text-sm sm:text-base md:text-[17px] font-bold text-slate-950 focus:outline-none pr-8 truncate tracking-tight relative z-10"
                      />

                      {/* Animated cycling multiple placeholders with smooth slide transitions */}
                      {!searchQuery && (
                        <div className="absolute inset-y-0 left-0 right-8 flex items-center pointer-events-none overflow-hidden z-0">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={placeholderIndex}
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeOut" }}
                              className="text-xs sm:text-sm md:text-base font-medium text-slate-400 truncate tracking-tight select-none"
                            >
                              {ANIMATED_SEARCH_PLACEHOLDERS[placeholderIndex]}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Clear button when query exists */}
                    {searchQuery && (
                      <div className="pr-3.5 flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery('');
                            setIsSearchFocused(false);
                          }}
                          className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Auto-complete Dropdown */}
                  <AnimatePresence>
                    {isSearchFocused && searchQuery.trim().length > 0 && (
                      <>
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setIsSearchFocused(false)} 
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 4, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-80 overflow-y-auto"
                        >
                          <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                            <span>Services matching "{searchQuery}"</span>
                            <span className="font-mono text-slate-400">{filteredCatalogItems.length} available</span>
                          </div>

                          {filteredCatalogItems.length > 0 ? (
                            <div className="p-2 space-y-1">
                              {filteredCatalogItems.map((item) => (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => handleSelectCatalogItem(item)}
                                  className="w-full p-3 rounded-xl text-left hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all flex items-center justify-between gap-2 group cursor-pointer"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-2.5 rounded-lg bg-slate-100 group-hover:bg-slate-950 text-slate-700 group-hover:text-white transition-colors shrink-0">
                                      <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div className="truncate">
                                      <div className="text-sm font-bold text-slate-900 group-hover:text-slate-950 truncate">
                                        {item.name}
                                      </div>
                                      <div className="text-xs text-slate-500 truncate">
                                        {item.categoryName} • {item.staff}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-3 shrink-0">
                                    <div className="text-right">
                                      <div className="text-sm font-black text-slate-900 font-mono">{item.price}</div>
                                      <div className="text-[11px] text-slate-400">{item.duration}</div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#e14024]" />
                                  </div>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="p-4 text-center text-slate-500 text-sm">
                              No service found for "{searchQuery}"
                            </div>
                          )}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. Micro Parameter Selectors (Streamlined 3-in-1 Compact Bar with Slightly Larger Proportions) */}
                <div className="grid grid-cols-3 gap-2.5 lg:w-auto lg:min-w-[490px]">
                  {/* Location Selector with Live Geolocation Trigger & Popover */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsLocationPopoverOpen(!isLocationPopoverOpen)}
                      className={`w-full text-left bg-slate-50/80 hover:bg-white focus:bg-white rounded-xl sm:rounded-2xl border px-3.5 py-1.5 transition-all h-13 sm:h-14 flex flex-col justify-center cursor-pointer ${
                        isLocationPopoverOpen ? 'border-slate-950 ring-2 ring-slate-950/5 bg-white shadow-xs' : 'border-slate-200/80'
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#e14024]" />
                          Location
                        </span>
                        {locationStatus === 'detected' ? (
                          <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1 rounded flex items-center gap-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            GPS
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono text-slate-500 font-semibold">Live</span>
                        )}
                      </span>
                      <div className="flex items-center justify-between gap-1 mt-0.5">
                        <span className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 truncate">
                          {activeBranchData.shortName}
                          {activeBranchDistance !== null && (
                            <span className="text-emerald-700 font-mono text-[11px] font-extrabold ml-1">
                              • {activeBranchDistance}km
                            </span>
                          )}
                        </span>
                        <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isLocationPopoverOpen ? 'rotate-90 text-slate-900' : ''}`} />
                      </div>
                    </button>

                    {/* Live Location Dynamic Popover */}
                    <AnimatePresence>
                      {isLocationPopoverOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsLocationPopoverOpen(false)}
                          />

                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 sm:left-0 top-full mt-2 z-50 w-[320px] sm:w-[380px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-3 sm:p-4 text-slate-900"
                          >
                            {/* Live GPS Detector Action Banner */}
                            <div className={`p-3 rounded-xl border mb-3 transition-all ${
                              locationStatus === 'detected'
                                ? 'bg-emerald-50/80 border-emerald-200'
                                : 'bg-slate-900 text-white border-slate-800'
                            }`}>
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                    locationStatus === 'detected'
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-white/10 text-white'
                                  }`}>
                                    {locationStatus === 'detecting' ? (
                                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                                    ) : (
                                      <LocateFixed className="w-4 h-4 stroke-[2.5]" />
                                    )}
                                  </div>
                                  <div className="truncate">
                                    <div className={`text-xs font-extrabold truncate ${
                                      locationStatus === 'detected' ? 'text-emerald-950' : 'text-white'
                                    }`}>
                                      {locationStatus === 'detected' 
                                        ? 'Live GPS Synced' 
                                        : locationStatus === 'detecting'
                                          ? 'Triangulating Location...'
                                          : 'Find Nearest Center'
                                      }
                                    </div>
                                    <div className={`text-[11px] truncate ${
                                      locationStatus === 'detected' ? 'text-emerald-800' : 'text-slate-300'
                                    }`}>
                                      {userLocationLabel || 'Auto-sort centers by live driving distance'}
                                    </div>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  disabled={locationStatus === 'detecting'}
                                  onClick={handleDetectLiveLocation}
                                  className={`px-2.5 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all shrink-0 flex items-center gap-1 ${
                                    locationStatus === 'detected'
                                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                                      : 'bg-[#e14024] hover:bg-[#c9351c] text-white shadow-xs'
                                  }`}
                                >
                                  <Radio className="w-3 h-3 animate-pulse" />
                                  <span>{locationStatus === 'detected' ? 'Re-scan' : 'Use GPS'}</span>
                                </button>
                              </div>
                            </div>

                            {/* Search Filter for Hubs */}
                            <div className="relative mb-2.5">
                              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={branchSearchQuery}
                                onChange={(e) => setBranchSearchQuery(e.target.value)}
                                placeholder="Filter centers by city, area, or name..."
                                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-100/80 hover:bg-slate-100 focus:bg-white rounded-lg border border-slate-200/80 focus:border-slate-900 focus:outline-none font-medium text-slate-900"
                              />
                            </div>

                            {/* Branches List with Proximity & Badges */}
                            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-0.5">
                              {sortedBranches.map((branch, idx) => {
                                const isSelected = selectedBranch === branch.name;
                                const isClosest = idx === 0 && userCoords !== null;

                                return (
                                  <button
                                    key={branch.id}
                                    type="button"
                                    onClick={() => {
                                      setSelectedBranch(branch.name);
                                      setIsLocationPopoverOpen(false);
                                    }}
                                    className={`w-full p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1 ${
                                      isSelected
                                        ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                                        : 'bg-slate-50/70 hover:bg-slate-100 text-slate-900 border-slate-200/70'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-1.5">
                                      <div className="flex items-center gap-1.5 truncate">
                                        <span className="font-extrabold text-xs truncate">
                                          {branch.name}
                                        </span>
                                        {isClosest && (
                                          <span className="text-[9px] font-mono font-black bg-emerald-500 text-white px-1.5 py-0.2 rounded shrink-0">
                                            Nearest
                                          </span>
                                        )}
                                      </div>

                                      {branch.distanceKm !== null && (
                                        <span className={`text-[11px] font-mono font-extrabold shrink-0 flex items-center gap-0.5 ${
                                          isSelected ? 'text-emerald-300' : 'text-emerald-700'
                                        }`}>
                                          <Navigation className="w-3 h-3 rotate-45" />
                                          {branch.distanceKm} km
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex items-center justify-between text-[11px] opacity-80 gap-2">
                                      <span className="truncate">{branch.address}</span>
                                      {branch.distanceKm !== null && (
                                        <span className="font-medium shrink-0 flex items-center gap-1">
                                          <Car className="w-3 h-3" />
                                          ~{branch.etaMinutes} min
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex items-center gap-1.5 pt-0.5">
                                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                        isSelected 
                                          ? 'bg-white/20 text-white' 
                                          : branch.status === 'Fast Walk-in' 
                                            ? 'bg-emerald-100 text-emerald-800' 
                                            : 'bg-slate-200/70 text-slate-700'
                                      }`}>
                                        {branch.status}
                                      </span>
                                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                        isSelected ? 'bg-white/10 text-white' : 'bg-slate-200/50 text-slate-600'
                                      }`}>
                                        {branch.slotsAvailable} slots today
                                      </span>
                                      {branch.parking && (
                                        <span className={`text-[9px] font-semibold ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                                          • Free Parking
                                        </span>
                                      )}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Footer Quick Directions Link */}
                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                              <span className="text-[11px] text-slate-500 font-medium truncate">
                                Selected: <span className="font-bold text-slate-900">{activeBranchData.shortName}</span>
                              </span>
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeBranchData.name + ' ' + activeBranchData.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-bold text-[#e14024] hover:underline flex items-center gap-1 shrink-0"
                              >
                                <span>Directions</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Specialist Selector */}
                  <div className="bg-slate-50/80 hover:bg-white focus-within:bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 px-3.5 py-1.5 transition-all h-13 sm:h-14 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#e14024]" />
                      Specialist
                    </span>
                    <select 
                      value={selectedStaff}
                      onChange={(e) => setSelectedStaff(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 focus:outline-none cursor-pointer truncate mt-0.5"
                    >
                      {currentVertical.staff.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dynamic Date & Time Calendar Trigger & Popover */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      className={`w-full text-left bg-slate-50/80 hover:bg-white focus:bg-white rounded-xl sm:rounded-2xl border px-3.5 py-1.5 transition-all h-13 sm:h-14 flex flex-col justify-center cursor-pointer ${
                        isCalendarOpen ? 'border-slate-950 ring-2 ring-slate-950/5 bg-white shadow-xs' : 'border-slate-200/80'
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#e14024]" />
                          Date & Slot
                        </span>
                        <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Live</span>
                      </span>
                      <div className="flex items-center justify-between gap-1 mt-0.5">
                        <span className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 truncate">
                          {formatShortDate(selectedDate)} • {selectedTime}
                        </span>
                        <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isCalendarOpen ? 'rotate-90 text-slate-900' : ''}`} />
                      </div>
                    </button>

                    {/* Dynamic Complete Calendar & Time Popover (Space-Optimized 2-Pane & Mobile Tabs) */}
                    <AnimatePresence>
                      {isCalendarOpen && (
                        <>
                          {/* Backdrop to close */}
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsCalendarOpen(false)}
                          />

                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 z-50 w-[320px] sm:w-[540px] md:w-[580px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-3 sm:p-4 text-slate-900 overflow-hidden"
                          >
                            {/* Top Header: Quick Date Presets */}
                            <div className="flex items-center justify-between gap-1.5 pb-2.5 mb-2.5 border-b border-slate-100">
                              <div className="flex items-center gap-1 flex-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const t = new Date();
                                    setSelectedDate(t);
                                    setCalendarViewDate(t);
                                  }}
                                  className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    isToday(selectedDate)
                                      ? 'bg-slate-950 text-white shadow-xs'
                                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                  }`}
                                >
                                  Today
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const tom = new Date();
                                    tom.setDate(tom.getDate() + 1);
                                    setSelectedDate(tom);
                                    setCalendarViewDate(tom);
                                  }}
                                  className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    isTomorrow(selectedDate)
                                      ? 'bg-slate-950 text-white shadow-xs'
                                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                  }`}
                                >
                                  Tomorrow
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const nextDay = new Date();
                                    nextDay.setDate(nextDay.getDate() + 2);
                                    setSelectedDate(nextDay);
                                    setCalendarViewDate(nextDay);
                                  }}
                                  className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    !isToday(selectedDate) && !isTomorrow(selectedDate)
                                      ? 'bg-slate-950 text-white shadow-xs'
                                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                  }`}
                                >
                                  Next +2d
                                </button>
                              </div>
                              <span className="text-[11px] font-mono font-bold text-slate-400 hidden sm:inline-block">
                                {currentVertical.name}
                              </span>
                            </div>

                            {/* 2-Pane Side-by-Side Space Optimized Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-start">
                              {/* Left Column: Compact Date Grid */}
                              <div className="sm:col-span-6 bg-slate-50/50 sm:bg-transparent rounded-xl p-2 sm:p-0 border sm:border-0 border-slate-100">
                                {/* Month Navigation */}
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight">
                                    {calendarViewDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                  </span>
                                  <div className="flex items-center gap-0.5">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setCalendarViewDate(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1));
                                      }}
                                      className="p-1 rounded-md hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                                    >
                                      <ChevronLeft className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setCalendarViewDate(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1));
                                      }}
                                      className="p-1 rounded-md hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                                    >
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>

                                {/* Weekday Labels */}
                                <div className="grid grid-cols-7 gap-1 text-center mb-1">
                                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                                    <span key={d} className="text-[10px] font-extrabold text-slate-400 uppercase">
                                      {d}
                                    </span>
                                  ))}
                                </div>

                                {/* Calendar Days Matrix (Dense & Clean) */}
                                <div className="grid grid-cols-7 gap-1 text-center">
                                  {getDaysInMonthGrid(calendarViewDate.getFullYear(), calendarViewDate.getMonth()).map((cell, idx) => {
                                    const isSelected = cell.date.getDate() === selectedDate.getDate() &&
                                                       cell.date.getMonth() === selectedDate.getMonth() &&
                                                       cell.date.getFullYear() === selectedDate.getFullYear();
                                    const isCurrentDay = isToday(cell.date);

                                    return (
                                      <button
                                        key={idx}
                                        type="button"
                                        disabled={cell.isPast}
                                        onClick={() => {
                                          setSelectedDate(cell.date);
                                        }}
                                        className={`h-7 w-full rounded-md text-[11px] font-bold transition-all flex items-center justify-center relative cursor-pointer ${
                                          cell.isPast 
                                            ? 'text-slate-300 cursor-not-allowed opacity-30'
                                            : isSelected
                                              ? 'bg-slate-950 text-white shadow-xs'
                                              : cell.isCurrentMonth
                                                ? 'text-slate-800 hover:bg-slate-200/80'
                                                : 'text-slate-400 hover:bg-slate-100'
                                        } ${isCurrentDay && !isSelected ? 'border border-slate-900/40 text-slate-950 font-black' : ''}`}
                                      >
                                        {cell.date.getDate()}
                                        {isCurrentDay && isSelected && (
                                          <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#e14024]" />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Right Column: Dynamic Categorized Time Slots */}
                              <div className="sm:col-span-6 border-t sm:border-t-0 sm:border-l border-slate-100 sm:pl-3 pt-2 sm:pt-0 flex flex-col justify-between">
                                <div>
                                  {/* Dynamic Timing Header with Period Filter */}
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-[#e14024]" />
                                      Dynamic Slots
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                      {filteredSlots.length} available
                                    </span>
                                  </div>

                                  {/* Period Segment Tabs */}
                                  <div className="grid grid-cols-4 gap-1 p-0.5 bg-slate-100/80 rounded-lg mb-2 text-[10px] font-bold text-slate-600">
                                    <button
                                      type="button"
                                      onClick={() => setTimePeriodFilter('all')}
                                      className={`py-1 rounded-md transition-all cursor-pointer text-center truncate ${
                                        timePeriodFilter === 'all' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                                      }`}
                                    >
                                      All
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setTimePeriodFilter('morning')}
                                      className={`py-1 rounded-md transition-all cursor-pointer text-center truncate ${
                                        timePeriodFilter === 'morning' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                                      }`}
                                    >
                                      Morn
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setTimePeriodFilter('afternoon')}
                                      className={`py-1 rounded-md transition-all cursor-pointer text-center truncate ${
                                        timePeriodFilter === 'afternoon' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                                      }`}
                                    >
                                      Noon
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setTimePeriodFilter('evening')}
                                      className={`py-1 rounded-md transition-all cursor-pointer text-center truncate ${
                                        timePeriodFilter === 'evening' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                                      }`}
                                    >
                                      Eve
                                    </button>
                                  </div>

                                  {/* Dynamic Slots Grid */}
                                  <div className="grid grid-cols-2 gap-1.5 max-h-[148px] sm:max-h-[162px] overflow-y-auto pr-0.5">
                                    {filteredSlots.map((slot) => {
                                      const isSelectedSlot = selectedTime === slot.time;
                                      return (
                                        <button
                                          key={slot.time}
                                          type="button"
                                          onClick={() => setSelectedTime(slot.time)}
                                          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer border flex items-center justify-between gap-1 text-left ${
                                            isSelectedSlot
                                              ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                                              : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/70'
                                          }`}
                                        >
                                          <div className="flex items-center gap-1 truncate">
                                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelectedSlot ? 'bg-emerald-400' : 'bg-emerald-500'}`} />
                                            <span className="truncate">{slot.time}</span>
                                          </div>
                                          {slot.tag && (
                                            <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold shrink-0 ${
                                              isSelectedSlot 
                                                ? 'bg-white/20 text-white' 
                                                : slot.isPopular
                                                  ? 'bg-amber-100 text-amber-800'
                                                  : 'bg-slate-200/60 text-slate-600'
                                            }`}>
                                              {slot.tag}
                                            </span>
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Compact Confirm Footer */}
                            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                              <div className="text-[11px] font-semibold text-slate-600 truncate flex items-center gap-1.5">
                                <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-bold truncate">
                                  {formatShortDate(selectedDate)}
                                </span>
                                <span className="text-slate-400">•</span>
                                <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold truncate">
                                  {selectedTime}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setIsCalendarOpen(false)}
                                className="px-3.5 py-1.5 rounded-lg bg-[#e14024] hover:bg-[#c9351c] text-white font-bold text-xs tracking-tight shadow-xs transition-all cursor-pointer shrink-0"
                              >
                                Confirm Slot
                              </button>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 3. High-Power Instant Booking CTA */}
                <button
                  type="button"
                  onClick={handleInstantBookingSimulate}
                  className="h-13 sm:h-14 px-8 rounded-xl sm:rounded-2xl bg-slate-950 hover:bg-[#e14024] text-white font-bold text-sm sm:text-base md:text-[17px] tracking-tight shadow-md hover:shadow-[#e14024]/20 flex items-center justify-center gap-2.5 cursor-pointer transition-all shrink-0 active:scale-98"
                >
                  <CalendarDays className="w-5 h-5 text-white/90" />
                  <span className="whitespace-nowrap">Instant Book</span>
                  <ArrowRight className="w-4 h-4 text-white/90" />
                </button>
              </div>

              {/* Minimal Popular Tags Strip */}
              <div className="flex items-center gap-2 pt-1 text-xs">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <span className="text-xs font-bold text-slate-400 uppercase shrink-0">Hot:</span>
                  {TRENDING_QUICK_TAGS.slice(0, 5).map((tag) => (
                    <button
                      key={tag.query}
                      type="button"
                      onClick={() => {
                        const match = GLOBAL_SEARCH_CATALOG.find(i => 
                          i.name.toLowerCase().includes(tag.query.toLowerCase())
                        );
                        if (match) {
                          handleSelectCatalogItem(match);
                        } else {
                          setSearchQuery(tag.query);
                          setIsSearchFocused(true);
                        }
                      }}
                      className="px-3 py-1 rounded-md bg-slate-100/90 hover:bg-slate-900 hover:text-white text-slate-700 text-xs sm:text-[13px] font-semibold transition-all shrink-0 cursor-pointer"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Confirmation Banner (Rich Location, Date & Time Details) */}
            <AnimatePresence>
              {bookingToastVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2.5 bg-slate-950 text-white p-3.5 sm:p-4 rounded-xl shadow-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5 stroke-[2.5]" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <div className="font-bold text-white flex items-center gap-1.5 flex-wrap">
                        <span>Appointment Confirmed!</span>
                        <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Auto Synced</span>
                        {activeBranchDistance !== null && (
                          <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                            <Navigation className="w-2.5 h-2.5" />
                            {activeBranchDistance} km away
                          </span>
                        )}
                      </div>
                      <div className="text-slate-300 mt-0.5">
                        <span className="font-semibold text-white">{selectedService}</span> with <span className="font-semibold text-white">{selectedStaff}</span> at <span className="font-semibold text-white">{selectedBranch}</span> ({activeBranchData.address}) on <span className="font-bold text-emerald-300 underline decoration-emerald-500/50">{formatFullDate(selectedDate)}</span> at <span className="font-bold text-emerald-300">{selectedTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeBranchData.name + ' ' + activeBranchData.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-900 text-slate-300 text-xs font-semibold shrink-0 cursor-pointer flex items-center gap-1"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#e14024]" />
                      <span>Directions</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setBookingToastVisible(false)}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-900 text-slate-300 text-xs font-semibold shrink-0 cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <button
                      type="button"
                      onClick={onOpenDemoModal}
                      className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      View Demo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};


