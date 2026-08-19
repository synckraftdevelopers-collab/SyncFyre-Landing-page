import { VerticalIndustryBlueprint, VerticalCategory, BusinessTypeId } from '../types';

export const VERTICAL_CATEGORIES: { id: VerticalCategory; label: string; count: string }[] = [
  { id: 'fitness', label: 'Fitness & Athletics', count: '6 Vertical OS' },
  { id: 'beauty', label: 'Beauty, Hair & Aesthetics', count: '6 Vertical OS' },
  { id: 'health', label: 'Healthcare & Wellness Clinics', count: '6 Vertical OS' },
  { id: 'pet', label: 'Pet Care & Veterinary', count: '3 Vertical OS' },
  { id: 'education', label: 'Education & Skill Academies', count: '4 Vertical OS' },
  { id: 'auto', label: 'Automotive, Detailing & Garages', count: '3 Vertical OS' },
  { id: 'laundry', label: 'Laundry & Garment Care', count: '2 Vertical OS' },
  { id: 'repair', label: 'Tech Repairs & Electronics', count: '2 Vertical OS' },
  { id: 'events', label: 'Events, Creative & Rental Services', count: '4 Vertical OS' },
];

export const ALL_VERTICAL_BLUEPRINTS: Record<BusinessTypeId, VerticalIndustryBlueprint> = {
  // 1. Gyms & Health Clubs
  gym_club: {
    id: 'gym_club',
    name: 'SyncFyre Gym',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'Dumbbell',
    tagline: 'The Operating System for Modern Gyms & Commercial Health Clubs',
    badge: 'High-Volume Membership OS',
    marketSizeInr: '₹18,500 Cr Market (2026)',
    digitalMaturity: 'Transforming',
    competitors: ['Mindbody', 'Gymdesk', 'Zen Planner', 'Wodify', 'Excel Spreadsheets'],
    painPoints: [
      'Uncollected recurring dues & failed card/UPI AutoPay bounces (15-20% leakage)',
      'Unauthorized member entry & turnstile access sharing',
      'Fragmented member check-in vs class scheduling',
      'High member churn after 60 days without early warning alerts',
    ],
    aiOpportunities: [
      'AI Attendance Churn Predictor (Detects members who stop attending before cancellation)',
      'AI WhatsApp Dunning Recovery (Sends 1-click UPI AutoPay links with 94% success rate)',
      'AI Trainer Roster & Class Capacity Optimizer',
    ],
    idealCustomers: {
      singleOutlet: 'Independent Gyms (200 - 1,500 Active Members)',
      growingChain: 'Regional Chains (3 - 10 Locations with Roaming Pass)',
      franchiseEnterprise: 'National Franchise Networks (50+ Locations, Central HQ Control)',
    },
    coreModules: [
      'Recurring Billing & UPI AutoPay Engine',
      '24/7 Turnstile & Door Hardware Access API',
      'Member App & Digital QR Pass',
      'Trainer Commission & Attendance Payroll',
      'POS Barcode Locker & Supplement Counter',
      'WhatsApp Multi-Channel Marketing',
    ],
    specializedIndustryModules: [
      {
        title: '24/7 Turnstile & Door Controller Sync',
        description: 'Direct millisecond hardware integration via Kisi, Verkada, Brivo, or magnetic relays.',
        fieldsOrWorkflow: ['Turnstile ID', 'Member Status Filter', 'Face ID / QR Scan Log', 'Anti-Tailgating Sensor'],
      },
      {
        title: 'InBody & Biometric Progress Tracker',
        description: 'Sync body fat %, muscle mass, and photo progress directly into member timeline.',
        fieldsOrWorkflow: ['Scan Date', 'Visceral Fat Level', 'Skeletal Muscle Mass', 'Coach Notes'],
      },
    ],
    aiFeatures: [
      {
        name: 'AI Ghost Member Detection',
        description: 'Identifies members with 0 check-ins over 12 days and fires a personalized re-engagement WhatsApp offer.',
        impact: '+34% Retention Rate',
      },
      {
        name: 'AI Smart Retries for Failed UPI AutoPay',
        description: 'Schedules retry attempts during peak salary credit cycles (1st - 5th of month).',
        impact: '94% Dunning Recovery',
      },
    ],
    automationEngine: [
      {
        trigger: 'UPI Payment Bounce',
        workflowSteps: ['Wait 24h', 'Auto-Retry via Razorpay', 'Send WhatsApp UPI Link', 'Temporarily Restrict Turnstile'],
        recoveredValueInr: '₹1,85,000 / mo per branch',
      },
    ],
    roleDashboards: ['Owner Master Command', 'Branch Manager', 'Front-Desk Reception', 'Head Coach / Trainer', 'Member Mobile App'],
    reportsList: ['Monthly Recurring Revenue (MRR) Ledger', 'Check-In Heatmap by Hour', 'Trainer Session Payroll', 'Churn Risk Breakdown'],
    mobileApps: {
      customerApp: ['QR Entrance Pass', 'Book Workout Slot', 'InBody Progress Cards', 'Renew Membership in 1-Click'],
      staffApp: ['Class Attendance Roster', 'Member Profile Scan', 'Commission Earned Today'],
      ownerApp: ['Real-Time Live Check-Ins', 'Today’s Cash & UPI Revenue', 'Turnstile Gate Override'],
    },
    databaseSchema: [
      { tableName: 'gym_memberships', keyColumns: ['id', 'tenant_id', 'member_id', 'plan_type', 'upi_vpa', 'status'], purpose: 'Tracks active subscriptions & UPI AutoPay tokens' },
      { tableName: 'turnstile_access_logs', keyColumns: ['id', 'tenant_id', 'door_id', 'scanned_at', 'status_granted'], purpose: 'Logs hardware turnstile entries' },
    ],
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/gym/members/checkin-status', description: 'Checks if member is eligible for turnstile unlock' },
      { method: 'POST', path: '/api/v1/gym/dunning/trigger-whatsapp', description: 'Triggers instant UPI recovery message' },
    ],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 11999, enterpriseInrMonthly: 24999 },
    keyMetric: '+38% MRR Recovery',
    metricLabel: 'Average revenue lift in first 90 days',
    testimonial: {
      quote: 'SyncFyre replaced 4 different software tools and saved us ₹2,40,000/month in lost membership dues.',
      author: 'Anuj Thakare',
      role: 'Founder & Owner',
      businessName: 'Fitness Club Studio',
      location: 'Navi Mumbai, MH',
      stats: [{ label: 'MRR Growth', value: '+42%' }, { label: 'Admin Saved', value: '18 hrs/wk' }],
      avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=250&auto=format&fit=crop&q=80',
    },
  },

  // 2. Salon
  salon: {
    id: 'salon',
    name: 'SyncFyre Salon',
    category: 'beauty',
    categoryLabel: 'Beauty, Hair & Aesthetics',
    iconName: 'Scissors',
    tagline: 'The Operating System for Premium Hair Salons & Beauty Chains',
    badge: 'Hair & Styling OS',
    marketSizeInr: '₹22,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Zenoti', 'Fresha', 'Vagaro', 'GlossGenius', 'Paper Appointment Registers'],
    painPoints: [
      'Stylist chair idle time and double bookings',
      'Manual commission calculation for multi-tiered stylists',
      'Uncontrolled consumption of costly chemical dyes, keratin & treatments',
      'Client no-shows destroying daily revenue targets',
    ],
    aiOpportunities: [
      'AI Smart Chair & Stylist Schedule Matcher',
      'AI Chemical Dye & Shampoo Usage Predictor',
      'AI Automated WhatsApp Booking & Photo Consultation Assistant',
    ],
    idealCustomers: {
      singleOutlet: 'Boutique Salons (4 - 12 Chairs)',
      growingChain: 'Multi-Branch Salon Chains (3 - 15 Locations)',
      franchiseEnterprise: 'National Luxury Hair Chains & Franchises',
    },
    coreModules: [
      'Visual Chair & Stylist Grid Calendar',
      'Tiered Stylist Commission Engine',
      'Chemical Product Consumption & Barcode Inventory',
      'WhatsApp 1-Click Appointment Confirmation & Deposit Hold',
      'Client Hair & Color Treatment History Log',
    ],
    specializedIndustryModules: [
      {
        title: 'Chemical Dye & Keratin Inventory Tracker',
        description: 'Track dye tube grams used per client to prevent backbar leakage.',
        fieldsOrWorkflow: ['Formula ID', 'Stylist Name', 'Grams Used', 'Cost per Application'],
      },
      {
        title: 'Chair & Station Allocation Grid',
        description: 'Visual drag-and-drop chair matrix showing live status (Shampoo, Cut, Color, Blowdry).',
        fieldsOrWorkflow: ['Chair #', 'Client Name', 'Service Stage', 'Elapsed Time'],
      },
    ],
    aiFeatures: [
      {
        name: 'AI Re-Booking Nudge Engine',
        description: 'Calculates exact hair growth/root touch-up dates (e.g., 28 days after color) and sends WhatsApp reminders.',
        impact: '+41% Repeat Salon Visits',
      },
      {
        name: 'AI No-Show Deposit Guard',
        description: 'Dynamically requires deposits for clients with past no-show records.',
        impact: '89% Reduction in No-Shows',
      },
    ],
    automationEngine: [
      {
        trigger: 'Hair Color Service Completed',
        workflowSteps: ['Deduct Dye Inventory', 'Log Formula to Client Profile', 'Schedule WhatsApp Re-Booking in 28 Days'],
        recoveredValueInr: '₹1,20,000 / mo per branch',
      },
    ],
    roleDashboards: ['Salon Owner Command', 'Branch Manager', 'Front-Desk Coordinator', 'Senior Stylist / Colorist', 'Customer Web Portal'],
    reportsList: ['Stylist Revenue & Commission Payout', 'Chemical Stock Consumption vs Revenue', 'Peak Hour Chair Utilization Rate', 'Client Lifetime Value'],
    mobileApps: {
      customerApp: ['Book Favorite Stylist', 'Select Hair Care Package', 'View Hair Color History Photos', 'UPI Advance Booking'],
      staffApp: ['My Daily Appointment Grid', 'Log Formula Used', 'Today’s Commission Breakdown'],
      ownerApp: ['Real-Time Chair Occupancy %', 'Total Cash & UPI Billing Today', 'Stock Reorder Alerts'],
    },
    databaseSchema: [
      { tableName: 'salon_chairs', keyColumns: ['id', 'tenant_id', 'chair_name', 'current_status', 'assigned_stylist_id'], purpose: 'Tracks physical salon station status' },
      { tableName: 'chemical_inventory_logs', keyColumns: ['id', 'tenant_id', 'product_id', 'grams_dispensed', 'stylist_id'], purpose: 'Prevents backbar hair dye leakage' },
    ],
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/salon/chairs/occupancy', description: 'Returns real-time occupancy across salon chairs' },
      { method: 'POST', path: '/api/v1/salon/formula/log', description: 'Logs hair color formula to customer profile' },
    ],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 9999, enterpriseInrMonthly: 19999 },
    keyMetric: '92% Chair Utilization',
    metricLabel: 'Optimized booking density across peak hours',
    testimonial: {
      quote: 'Managing 14 hair stylists and chemical inventory was a nightmare on paper. SyncFyre cut our stock wastage by 35%!',
      author: 'Rohan Shrestha',
      role: 'Master Stylist & Owner',
      businessName: 'Vogue Hair & Aesthetics',
      location: 'Bandra West, Mumbai',
      stats: [{ label: 'Stock Wastage', value: '-35%' }, { label: 'Repeat Bookings', value: '+41%' }],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
  },

  // 3. Spa
  spa: {
    id: 'spa',
    name: 'SyncFyre Spa',
    category: 'beauty',
    categoryLabel: 'Beauty, Hair & Aesthetics',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Wellness Spas & Ayurveda Retreats',
    badge: 'Spa & Wellness OS',
    marketSizeInr: '₹14,000 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Zenoti', 'Booker', 'Mindbody', 'Fresha'],
    painPoints: ['Therapist shift scheduling & room conflict management', 'Essential oil & therapy pack inventory loss', 'Lack of automated package renewal reminders'],
    aiOpportunities: ['AI Room & Therapist Schedule Balancer', 'AI Personal Therapy Recommendation Engine'],
    idealCustomers: { singleOutlet: 'Urban Day Spas (4 - 10 Therapy Rooms)', growingChain: 'Boutique Spa Chains (3 - 8 Outlets)', franchiseEnterprise: 'Luxury Hotel & Resort Spa Networks' },
    coreModules: ['Room Allocation Grid', 'Therapist Rotation & Skill Matrix', 'Therapy Package & Membership Subscriptions', 'Oil & Product Usage Tracker'],
    specializedIndustryModules: [
      { title: 'Therapy Room & Ambiance Preset Manager', description: 'Assign rooms with specific temperature, aroma, and therapy equipment.', fieldsOrWorkflow: ['Room #', 'Therapy Type', 'Therapist Assigned', 'Sanitization Status'] }
    ],
    aiFeatures: [
      { name: 'AI Client Preference Memory', description: 'Remembers client oil preferences, pressure levels, and room temperature choices.', impact: '98% Customer Satisfaction' }
    ],
    automationEngine: [
      { trigger: 'Package 1 Session Left', workflowSteps: ['Send WhatsApp Thank You', 'Offer 15% Renewal Upgrade Discount', 'Assign Preferred Therapist'], recoveredValueInr: '₹95,000 / mo per branch' }
    ],
    roleDashboards: ['Spa Director Command', 'Receptionist', 'Therapist Portal', 'Inventory Manager'],
    reportsList: ['Room Turnover Efficiency', 'Therapist Utilization Hours', 'Therapy Package Renewal Ratio'],
    mobileApps: { customerApp: ['Select Therapy & Room', 'Pick Therapist Gender Preference', 'UPI Advance Deposit'], staffApp: ['Daily Therapy Roster', 'Client Preference Alerts'], ownerApp: ['Live Room Occupancy', 'Today’s Gross Billing'] },
    databaseSchema: [{ tableName: 'spa_rooms', keyColumns: ['id', 'tenant_id', 'room_name', 'status'], purpose: 'Tracks therapy room occupancy' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/spa/rooms/availability', description: 'Returns available therapy rooms' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 11999, enterpriseInrMonthly: 22999 },
    keyMetric: '+32% Package Renewals',
    metricLabel: 'Increased multi-session therapy packages sold',
    testimonial: { quote: 'SyncFyre solved our room double-booking issue permanently.', author: 'Meera Rajput', role: 'Spa Director', businessName: 'Sattva Luxury Spa', location: 'Bengaluru', stats: [{ label: 'Room Occupancy', value: '88%' }], avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
  },

  // 4. Tattoo
  tattoo: {
    id: 'tattoo',
    name: 'SyncFyre Tattoo',
    category: 'beauty',
    categoryLabel: 'Beauty, Hair & Aesthetics',
    iconName: 'Paintbrush',
    tagline: 'The Operating System for Tattoo Studios & Piercing Parlors',
    badge: 'Tattoo & Body Art OS',
    marketSizeInr: '₹3,500 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Rev23', 'Booksy', 'Square', 'Paper Consent Sheets'],
    painPoints: ['Manual paper legal consent forms lost or unorganized', 'Hourly artist rate & custom design deposit tracking', 'No automated aftercare healing follow-ups'],
    aiOpportunities: ['AI Digital Consent Form Verification', 'AI Aftercare WhatsApp Healing Assistant'],
    idealCustomers: { singleOutlet: 'Independent Tattoo Studios (2 - 8 Artists)', growingChain: 'Multi-City Tattoo Collectives', franchiseEnterprise: 'National Body Art Franchises' },
    coreModules: ['Digital Legal Consent & ID Scan', 'Design Stencil & Portfolio Storage', 'Artist Hourly Rate Calculator', 'Non-Refundable Deposit Lock', 'Automated Aftercare Reminders'],
    specializedIndustryModules: [
      { title: 'Digital Waiver & Government ID Scanner', description: 'Clients fill age waiver and upload ID on a tablet before ink session.', fieldsOrWorkflow: ['Client Name', 'ID Document Scan', 'Medical Conditions Check', 'Digital Signature'] },
      { title: 'Ink & Needle Lot Barcode Tracker', description: 'Log ink batch numbers and sterilized needle lots for health compliance.', fieldsOrWorkflow: ['Batch #', 'Expiration Date', 'Artist Name', 'Autoclave Cycle ID'] }
    ],
    aiFeatures: [
      { name: 'AI Aftercare WhatsApp Companion', description: 'Sends Day 1, Day 3, and Day 7 ink healing check-ins asking for photos to ensure no infection.', impact: '0 Infection Claims + 5★ Reviews' }
    ],
    automationEngine: [
      { trigger: 'Deposit Paid via UPI', workflowSteps: ['Lock Calendar Slot', 'Send Stencil Guidelines PDF', 'Request Reference Photo Upload'], recoveredValueInr: '₹85,000 / mo per studio' }
    ],
    roleDashboards: ['Studio Lead Command', 'Tattoo Artist Portal', 'Receptionist', 'Client Tablet Waiver App'],
    reportsList: ['Artist Hourly Revenue Output', 'Deposit Collection & No-Show Ratio', 'Sterilization & Ink Log Compliance'],
    mobileApps: { customerApp: ['Sign Legal Consent', 'Upload Tattoo Reference Design', 'Track Ink Healing'], staffApp: ['My Artist Booking Calendar', 'Upload Finished Tattoo Portfolio Photo'], ownerApp: ['Today’s Deposit Cashflow', 'Artist Payout Split'] },
    databaseSchema: [{ tableName: 'tattoo_consents', keyColumns: ['id', 'tenant_id', 'client_id', 'id_proof_url', 'signature_blob'], purpose: 'Stores legally binding client consent waivers' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/tattoo/consent/submit', description: 'Saves signed client waiver' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '100% Paperless Waiver',
    metricLabel: 'Instant digital compliance & ID storage',
    testimonial: { quote: 'SyncFyre digitized our consent forms and transformed aftercare. Clients love the WhatsApp healing check-in!', author: 'Sameer Kazi', role: 'Lead Artist & Founder', businessName: 'InkCraft Tattoo Studio', location: 'Goa', stats: [{ label: 'Waiver Speed', value: '30 sec' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 5. Barber
  barber: {
    id: 'barber',
    name: 'SyncFyre Barber',
    category: 'beauty',
    categoryLabel: 'Beauty, Hair & Aesthetics',
    iconName: 'Flame',
    tagline: 'The Operating System for Modern Barber Shops & Grooming Lounges',
    badge: 'Grooming & Barber OS',
    marketSizeInr: '₹9,800 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Squire', 'Booksy', 'Vagaro', 'Fresha'],
    painPoints: ['Long weekend queues and walk-in chaos', 'Barber chair commission splits', 'No automated beard & haircut retention reminders'],
    aiOpportunities: ['AI Walk-in Queue Time Predictor', 'AI Barber Tip & Commission Calculator'],
    idealCustomers: { singleOutlet: 'Urban Barber Shops (3 - 10 Chairs)', growingChain: 'Grooming Lounge Chains', franchiseEnterprise: 'Franchise Barber Networks' },
    coreModules: ['Visual Queue Kiosk', 'Barber Commission & Tip Splitter', 'Beard & Haircut Subscription Packs', 'WhatsApp Booking Kiosk'],
    specializedIndustryModules: [
      { title: 'Live Queue TV Display & QR Kiosk', description: 'Displays estimated wait times on shop TV and sends WhatsApp live queue updates.', fieldsOrWorkflow: ['Ticket #', 'Barber Name', 'Est Wait Time', 'WhatsApp Alert Status'] }
    ],
    aiFeatures: [
      { name: 'AI Haircut Cycle Nudge', description: 'Reminds gentlemen exactly 18 days after their last fade or beard trim.', impact: '+36% Repeat Grooming Revenue' }
    ],
    automationEngine: [
      { trigger: 'Walk-In QR Scan', workflowSteps: ['Assign Queue Number', 'Send WhatsApp Wait Estimate', 'Alert Barber 5m Before'], recoveredValueInr: '₹65,000 / mo per shop' }
    ],
    roleDashboards: ['Owner Command', 'Barber Chair Screen', 'Queue TV Kiosk Display'],
    reportsList: ['Barber Cut Speed & Daily Billing', 'Walk-In vs Appointment Ratio', 'Beard Care Product Sales'],
    mobileApps: { customerApp: ['Join Live Barber Queue', 'Book Preferred Barber', 'Buy Grooming Pass'], staffApp: ['My Chair Roster', 'Mark Cut Complete'], ownerApp: ['Real-Time Daily Takings'] },
    databaseSchema: [{ tableName: 'barber_queue', keyColumns: ['id', 'tenant_id', 'client_phone', 'assigned_barber_id', 'status'], purpose: 'Manages walk-in & appointment queue' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/barber/queue/status', description: 'Returns current queue length' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3499, proInrMonthly: 6999, enterpriseInrMonthly: 12999 },
    keyMetric: '-65% Wait Frustration',
    metricLabel: 'Customers wait comfortably with live WhatsApp queue tracking',
    testimonial: { quote: 'No more weekend queue fights. SyncFyre runs our shop like clockwork.', author: 'Vikramjit Singh', role: 'Founder', businessName: 'The Gentleman Cut Lounge', location: 'Delhi NCR', stats: [{ label: 'Daily Cuts', value: '+28%' }], avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80' },
  },

  // 6. Nail Studio
  nail_studio: {
    id: 'nail_studio',
    name: 'SyncFyre Nail Studio',
    category: 'beauty',
    categoryLabel: 'Beauty, Hair & Aesthetics',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Nail Art Studios & Manicure Bars',
    badge: 'Nail Art & Beauty OS',
    marketSizeInr: '₹2,800 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Fresha', 'Vagaro', 'GlossGenius'],
    painPoints: ['Gel extension removal time underestimations', 'Nail art add-on pricing confusion', 'Low repeat refill compliance'],
    aiOpportunities: ['AI Nail Art Pricing Estimator', 'AI Gel Refill Reminders'],
    idealCustomers: { singleOutlet: 'Boutique Nail Bars (2 - 8 Stations)', growingChain: 'Studio Chains', franchiseEnterprise: 'Franchise Networks' },
    coreModules: ['Nail Art Catalog & Add-On Selector', 'Technician Table Roster', 'Refill Subscription Packs', 'Gel Inventory'],
    specializedIndustryModules: [
      { title: 'Nail Art Design & Service Time Matrix', description: 'Calculates price and time based on nail length, gel removal, and complex art level.', fieldsOrWorkflow: ['Art Level', 'Removal Needed', 'Price Addition', 'Time Duration'] }
    ],
    aiFeatures: [
      { name: 'AI Refill Re-Engagement', description: 'Triggers WhatsApp refill alerts at Day 21 before gel lifts or chips.', impact: '+48% Refill Retention' }
    ],
    automationEngine: [
      { trigger: 'Full Set Gel Service Done', workflowSteps: ['Log Design Photo', 'Schedule Refill Reminder in 21 Days', 'Request Instagram Review'], recoveredValueInr: '₹55,000 / mo' }
    ],
    roleDashboards: ['Owner Command', 'Nail Tech Portal', 'Receptionist'],
    reportsList: ['Nail Tech Efficiency', 'Gel Inventory Usage', 'Add-On Revenue %'],
    mobileApps: { customerApp: ['Browse Art Catalog', 'Book Nail Slot'], staffApp: ['My Station Schedule'], ownerApp: ['Today Revenue'] },
    databaseSchema: [{ tableName: 'nail_services', keyColumns: ['id', 'tenant_id', 'art_type', 'duration_mins'], purpose: 'Tracks service times & pricing' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/nail/catalog', description: 'Returns nail art catalog' }],
    pricingInr: { starterInrMonthly: 1799, growthInrMonthly: 3199, proInrMonthly: 5999, enterpriseInrMonthly: 11999 },
    keyMetric: '+48% Refill Rate',
    metricLabel: 'Increased 21-day gel refill appointments',
    testimonial: { quote: 'SyncFyre helped us price custom nail art accurately and doubled our refill bookings!', author: 'Priya Sharma', role: 'Owner', businessName: 'Glamour Nails Bar', location: 'Pune', stats: [{ label: 'Refill Rate', value: '84%' }], avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
  },

  // 7. Beauty Clinic
  beauty_clinic: {
    id: 'beauty_clinic',
    name: 'SyncFyre Beauty Clinic',
    category: 'beauty',
    categoryLabel: 'Beauty, Hair & Aesthetics',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Cosmetology & Laser Aesthetics Clinics',
    badge: 'Aesthetics & Laser OS',
    marketSizeInr: '₹7,200 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Zenoti', 'Aesthetic Record', 'Klinik Engine'],
    painPoints: ['Multi-session laser package tracking', 'Client patch test compliance', 'Medical history photo records'],
    aiOpportunities: ['AI Skin Progress Photo Comparison', 'AI Treatment Session Interval Reminder'],
    idealCustomers: { singleOutlet: 'Cosmetology Clinics', growingChain: 'Multi-Location Aesthetic Chains', franchiseEnterprise: 'National Laser Franchises' },
    coreModules: ['Laser & Botox Package Counter', 'Patch Test Compliance Tracker', 'Before/After Photo Vault', 'Doctor & Aesthetician Split'],
    specializedIndustryModules: [
      { title: 'Patch Test & Informed Consent System', description: 'Ensures laser patch tests are logged 24h prior to full treatment.', fieldsOrWorkflow: ['Patch Test Date', 'Skin Type Fitzpatrick Scale', 'Reaction Result', 'Sign-off'] }
    ],
    aiFeatures: [
      { name: 'AI Before/After Photo Alignment', description: 'Aligns facial angles across sessions to show dramatic skin improvements to clients.', impact: '+52% Package Upsells' }
    ],
    automationEngine: [
      { trigger: 'Laser Session 1 Completed', workflowSteps: ['Schedule Session 2 in 4 Weeks', 'Send Post-Treatment Care Tips', 'Log Machine Pulses Used'], recoveredValueInr: '₹1,40,000 / mo' }
    ],
    roleDashboards: ['Clinic Director', 'Cosmetologist Doctor', 'Aesthetician', 'Front Desk'],
    reportsList: ['Package Completion Ratio', 'Laser Machine Shot/Pulse Consumption', 'Consultation to Service Conversion'],
    mobileApps: { customerApp: ['View Treatment Timeline', 'Book Next Session'], staffApp: ['Log Patch Test & Shots'], ownerApp: ['High-Ticket Package Revenue'] },
    databaseSchema: [{ tableName: 'aesthetic_packages', keyColumns: ['id', 'tenant_id', 'client_id', 'total_sessions', 'used_sessions'], purpose: 'Tracks multi-session laser packages' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/beauty/packages/status', description: 'Returns client package balance' }],
    pricingInr: { starterInrMonthly: 3499, growthInrMonthly: 6999, proInrMonthly: 12999, enterpriseInrMonthly: 24999 },
    keyMetric: '100% Patch Test Safety',
    metricLabel: 'Zero legal or reaction claims with strict digital logs',
    testimonial: { quote: 'SyncFyre is essential for any serious laser & skin clinic.', author: 'Dr. Neha Kapoor', role: 'Chief Dermatologist', businessName: 'Aura Skin & Aesthetics', location: 'Mumbai', stats: [{ label: 'Package Sales', value: '+45%' }], avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
  },

  // 8. Dental Clinic
  dental_clinic: {
    id: 'dental_clinic',
    name: 'SyncFyre Dental',
    category: 'health',
    categoryLabel: 'Healthcare & Wellness Clinics',
    iconName: 'Activity',
    tagline: 'The Operating System for Modern Dental Practices & Polyclinics',
    badge: 'Dental EHR & Practice OS',
    marketSizeInr: '₹32,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Practo', 'Dentally', 'Curify', 'Open Dental'],
    painPoints: ['Tooth chart history stored on physical paper cards', 'Lab crown/bridge order status tracking failures', 'Missed 6-month cleaning & check-up recalls'],
    aiOpportunities: ['AI Interactive Tooth Map Charting', 'AI Automated Dental Cleaning Recall Engine'],
    idealCustomers: { singleOutlet: 'Independent Dental Clinics (1 - 3 Dental Chairs)', growingChain: 'Polyclinics & Group Practices (4 - 15 Locations)', franchiseEnterprise: 'National Dental Franchise Networks' },
    coreModules: ['Interactive Digital Tooth Map (FDI Standard)', 'Dental Lab Work Order Tracker', 'E-Prescriptions & Clinical Notes', 'WhatsApp Recall Automation', 'Installment Payment Plans'],
    specializedIndustryModules: [
      { title: 'FDI Standard Interactive Tooth Chart', description: 'Click any tooth (#11 - #48) to log cavity, RCT, crown, implant, or extraction.', fieldsOrWorkflow: ['Tooth #', 'Condition', 'Treatment Cost', 'Procedure Status'] },
      { title: 'Dental Lab Order Tracker', description: 'Tracks crowns, bridges, aligners sent to external dental labs.', fieldsOrWorkflow: ['Lab Name', 'Impression Date', 'Expected Return', 'Patient Fit Status'] }
    ],
    aiFeatures: [
      { name: 'AI 6-Month Dental Recall Bot', description: 'Predicts exact due dates for scaling, checkups, and aligner swaps.', impact: '87% Patient Recall Rate' }
    ],
    automationEngine: [
      { trigger: 'RCT Completed', workflowSteps: ['Generate Digital Invoice', 'Send WhatsApp Prescription PDF', 'Log Lab Order for Crown'], recoveredValueInr: '₹2,10,000 / mo per branch' }
    ],
    roleDashboards: ['Chief Dentist Command', 'Associate Dentist', 'Dental Assistant', 'Front Desk Reception'],
    reportsList: ['Treatment Plan Acceptance Rate', 'Dental Lab Expense Ledger', 'Patient Recall Conversion', 'Revenue per Dental Chair'],
    mobileApps: { customerApp: ['View Tooth Chart & X-Rays', 'Pay Treatment Installment', 'Book Dental Slot'], staffApp: ['Update Tooth Status', 'E-Prescribe'], ownerApp: ['Today Patient Billing & Outstanding'] },
    databaseSchema: [{ tableName: 'tooth_records', keyColumns: ['id', 'tenant_id', 'patient_id', 'tooth_number', 'diagnosis', 'treatment_done'], purpose: 'FDI digital dental chart records' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/dental/tooth-chart/update', description: 'Updates tooth condition on FDI map' }],
    pricingInr: { starterInrMonthly: 3499, growthInrMonthly: 6999, proInrMonthly: 12999, enterpriseInrMonthly: 24999 },
    keyMetric: '+42% Treatment Acceptance',
    metricLabel: 'Higher RCT and Implant consent with visual tooth charts',
    testimonial: { quote: 'The interactive tooth chart and lab order tracker transformed our practice. SyncFyre is lightyears ahead of old dental software.', author: 'Dr. Siddharth Mehta', role: 'BDS, MDS Orthodontist', businessName: 'SmileCraft Dental Studio', location: 'Ahmedabad', stats: [{ label: 'Patient Recall', value: '87%' }], avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80' },
  },

  // 9. Skin Clinic
  skin_clinic: {
    id: 'skin_clinic',
    name: 'SyncFyre Skin Clinic',
    category: 'health',
    categoryLabel: 'Healthcare & Wellness Clinics',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Dermatology & Skin Care Practices',
    badge: 'Dermatology & Skin OS',
    marketSizeInr: '₹12,500 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Practo', 'Zenoti', 'Klinik'],
    painPoints: ['Dermogram record tracking', 'Cosmetic procedure package drops', 'Prescription compounding errors'],
    aiOpportunities: ['AI Dermogram Skin Analysis', 'AI Prescription WhatsApp Bot'],
    idealCustomers: { singleOutlet: 'Dermatology Clinics', growingChain: 'Skin Care Chains', franchiseEnterprise: 'Franchise Dermatology Groups' },
    coreModules: ['Visual Dermogram Skin Map', 'Pharmacy E-Prescriptions', 'Laser & Chemical Peel Bundles', 'Appointment Reminders'],
    specializedIndustryModules: [
      { title: 'Dermogram Face & Body Mapping', description: 'Mark acne severity, hyperpigmentation, and lesion zones on 3D skin map.', fieldsOrWorkflow: ['Zone ID', 'Lesion Severity', 'Treatment Recommended'] }
    ],
    aiFeatures: [
      { name: 'AI Acne & Skin Progress Tracking', description: 'Compares skin clarity across 30, 60, and 90 days.', impact: '+55% Product Retainer Sales' }
    ],
    automationEngine: [
      { trigger: 'Peel Session Completed', workflowSteps: ['Send Sunscreen & Care Guide PDF', 'Schedule Session 2 in 14 Days'], recoveredValueInr: '₹1,15,000 / mo' }
    ],
    roleDashboards: ['Dermatologist Doctor', 'Clinic Manager', 'Pharmacy Counter'],
    reportsList: ['Cosmetic vs Clinical Revenue Split', 'Patient Retainer Repeat %'],
    mobileApps: { customerApp: ['View Skin History Photos', 'Order Prescribed Creams'], staffApp: ['Update Dermogram'], ownerApp: ['Total Clinic Revenue'] },
    databaseSchema: [{ tableName: 'dermogram_records', keyColumns: ['id', 'patient_id', 'skin_type', 'zone_notes'], purpose: 'Stores skin condition maps' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/skin/dermogram/save', description: 'Saves skin map data' }],
    pricingInr: { starterInrMonthly: 3499, growthInrMonthly: 6999, proInrMonthly: 12999, enterpriseInrMonthly: 24999 },
    keyMetric: '+55% Skin Product Repeat',
    metricLabel: 'Automated prescription refills for creams & serums',
    testimonial: { quote: 'Patients love seeing their skin progress on SyncFyre. It builds immense trust.', author: 'Dr. Ritu Malhotra', role: 'Dermatologist', businessName: 'DermaGlow Skin Clinic', location: 'Chandigarh', stats: [{ label: 'Patient Trust', value: '99%' }], avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80' },
  },

  // 10. Physiotherapy
  physiotherapy: {
    id: 'physiotherapy',
    name: 'SyncFyre Physio',
    category: 'health',
    categoryLabel: 'Healthcare & Wellness Clinics',
    iconName: 'Activity',
    tagline: 'The Operating System for Physiotherapy & Rehabilitation Centers',
    badge: 'Physio & Rehab OS',
    marketSizeInr: '₹8,500 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Practo', 'Cliniko', 'WebPT'],
    painPoints: ['Patient session drop-offs mid-rehab', 'Home exercise plan tracking', 'Therapist session logs'],
    aiOpportunities: ['AI Home Exercise Plan Video Bot', 'AI Recovery Progress Predictor'],
    idealCustomers: { singleOutlet: 'Physio Clinics', growingChain: 'Rehab Centers', franchiseEnterprise: 'Sports Rehab Networks' },
    coreModules: ['Joint & Spine Pain Assessment Map', 'Home Exercise Video Library', 'Multi-Session Rehab Packages', 'WhatsApp Video Nudges'],
    specializedIndustryModules: [
      { title: 'Interactive Musculoskeletal Pain Map', description: 'Pinpoint lumbar, cervical, knee, or shoulder pain degrees and ROM (Range of Motion).', fieldsOrWorkflow: ['Joint ID', 'Pain Score (1-10)', 'ROM Angles', 'Modalities Used'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Home Exercise Coach', description: 'Sends daily 30-second exercise reminder videos to patients to ensure recovery compliance.', impact: '+62% Rehab Completion' }
    ],
    automationEngine: [
      { trigger: 'Package 3/10 Completed', workflowSteps: ['Send ROM Progress Graph to Patient', 'Schedule Next 2 Sessions'], recoveredValueInr: '₹90,000 / mo' }
    ],
    roleDashboards: ['Lead Physiotherapist', 'Associate Therapist', 'Reception Desk'],
    reportsList: ['Patient Rehab Completion Ratio', 'Therapist Daily Modality Usage'],
    mobileApps: { customerApp: ['Watch Home Exercise Videos', 'Log Daily Pain Score'], staffApp: ['Update ROM Metrics'], ownerApp: ['Clinic Session Billing'] },
    databaseSchema: [{ tableName: 'physio_assessments', keyColumns: ['id', 'patient_id', 'joint_affected', 'rom_degrees'], purpose: 'Stores joint ROM & pain history' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/physio/rom/update', description: 'Logs ROM degree improvements' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 9999, enterpriseInrMonthly: 18999 },
    keyMetric: '+62% Rehab Completion',
    metricLabel: 'Patients finish full 10-session rehab programs without dropping out',
    testimonial: { quote: 'Patients stick to their rehab plans because SyncFyre sends video reminders on WhatsApp every morning!', author: 'Dr. Tarun Verma', role: 'Head Physio', businessName: 'MotionPulse Physio', location: 'Gurugram', stats: [{ label: 'Rehab Rate', value: '89%' }], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  },

  // 11. Ayurveda
  ayurveda: {
    id: 'ayurveda',
    name: 'SyncFyre Ayurveda',
    category: 'health',
    categoryLabel: 'Healthcare & Wellness Clinics',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Panchakarma & Ayurvedic Wellness Clinics',
    badge: 'Ayurveda & Panchakarma OS',
    marketSizeInr: '₹11,000 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Practo', 'Custom Spreadsheets'],
    painPoints: ['Panchakarma multi-day therapy tracking', 'Herbal decoction formulation inventory', 'Dosha assessment logs'],
    aiOpportunities: ['AI Prakriti/Dosha Diagnostic Wizard', 'AI Panchakarma Diet Companion'],
    idealCustomers: { singleOutlet: 'Ayurvedic Clinics', growingChain: 'Panchakarma Centers', franchiseEnterprise: 'Heritage Ayurveda Resorts' },
    coreModules: ['Dosha & Prakriti Evaluation Sheet', 'Panchakarma 7-Day / 14-Day Schedule', 'Kashayam & Taila Pharmacy Log', 'Diet & Lifestyle Guidelines Generator'],
    specializedIndustryModules: [
      { title: 'Vata-Pitta-Kapha Prakriti Evaluator', description: 'Interactive quiz & Nadi assessment sheet that generates customized diet and oil advice.', fieldsOrWorkflow: ['Dosha Ratio', 'Dominant Element', 'Recommended Kashayam', 'Panchakarma Phase'] }
    ],
    aiFeatures: [
      { name: 'AI Panchakarma Daily Protocol Nudge', description: 'Guides patients on pre-therapy fasting, oil baths, and post-therapy diet rules via WhatsApp.', impact: '96% Protocol Adherence' }
    ],
    automationEngine: [
      { trigger: 'Panchakarma Day 1 Start', workflowSteps: ['Send Daily Diet Schedule PDF', 'Notify Panchakarma Room Technician'], recoveredValueInr: '₹1,05,000 / mo' }
    ],
    roleDashboards: ['Vaidya Doctor Command', 'Panchakarma Therapist', 'Herbal Pharmacy Desk'],
    reportsList: ['Panchakarma Package Turnover', 'Kashayam & Herb Inventory Stock'],
    mobileApps: { customerApp: ['View Dosha Chart & Diet Plan', 'Order Herbal Refills'], staffApp: ['Panchakarma Daily Routine Log'], ownerApp: ['Ayurveda Center Takings'] },
    databaseSchema: [{ tableName: 'dosha_profiles', keyColumns: ['id', 'patient_id', 'prakriti_type', 'prescribed_therapies'], purpose: 'Stores Ayurvedic Vata/Pitta/Kapha profiles' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/ayurveda/dosha/save', description: 'Saves patient Prakriti assessment' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 9999, enterpriseInrMonthly: 18999 },
    keyMetric: '96% Protocol Compliance',
    metricLabel: 'Patients follow strict Panchakarma dietary rules effortlessly',
    testimonial: { quote: 'SyncFyre modernized our traditional Panchakarma practice while respecting Ayurvedic principles.', author: 'Vaidya Anand Nambiar', role: 'Chief Physician', businessName: 'Sanjeevani Ayurveda', location: 'Kochi, Kerala', stats: [{ label: 'Panchakarma Growth', value: '+50%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 12. Veterinary
  veterinary: {
    id: 'veterinary',
    name: 'SyncFyre Vet',
    category: 'pet',
    categoryLabel: 'Pet Care & Veterinary',
    iconName: 'Heart',
    tagline: 'The Operating System for Veterinary Clinics & Pet Hospitals',
    badge: 'Veterinary EHR & Care OS',
    marketSizeInr: '₹6,200 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Digitail', 'Vetport', 'Practo Pets'],
    painPoints: ['Pet vaccination due date tracking failures', 'Breed-specific medical history logs', 'Pet parent appointment no-shows'],
    aiOpportunities: ['AI Pet Vaccine Reminder WhatsApp Engine', 'AI Pet Weight & Dosage Calculator'],
    idealCustomers: { singleOutlet: 'Pet Clinics', growingChain: 'Multi-Specialty Pet Hospitals', franchiseEnterprise: 'Pet Care Chains' },
    coreModules: ['Pet Patient EHR (Species, Breed, Microchip)', 'Vaccine Passport & Due Alerts', 'Surgery & Deworming Tracker', 'Pet Parent Portal'],
    specializedIndustryModules: [
      { title: 'Pet Vaccine Passport & Auto-Reminder Engine', description: 'Logs Rabies, DHPP, Anti-Tick vaccines with automated WhatsApp alerts 7 days prior.', fieldsOrWorkflow: ['Pet Name', 'Species/Breed', 'Vaccine Type', 'Next Due Date', 'Microchip ID'] }
    ],
    aiFeatures: [
      { name: 'AI Pet Health Companion', description: 'Sends friendly WhatsApp reminders addressed to the pet (e.g. "Hi Rahul, Bruno is due for his Rabies shot this Friday!").', impact: '92% Vaccination Compliance' }
    ],
    automationEngine: [
      { trigger: 'Vaccine Due in 7 Days', workflowSteps: ['Send WhatsApp Alert with 1-Click Booking', 'Reserve Vaccine Vial in Stock'], recoveredValueInr: '₹80,000 / mo' }
    ],
    roleDashboards: ['Veterinary Doctor Command', 'Vet Assistant', 'Pet Parent App'],
    reportsList: ['Vaccination Revenue', 'Pet Parent Retention Rate', 'Medicine Stock Expiry Tracker'],
    mobileApps: { customerApp: ['Pet Vaccine Passport', 'Book Vet Visit', 'Order Pet Food & Meds'], staffApp: ['Log Pet Weight & Shot'], ownerApp: ['Clinic Takings'] },
    databaseSchema: [{ tableName: 'pet_records', keyColumns: ['id', 'tenant_id', 'pet_name', 'species', 'breed', 'microchip_id', 'parent_phone'], purpose: 'Stores pet health & vaccine records' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/vet/vaccines/due', description: 'Returns upcoming vaccine due list' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 8999, enterpriseInrMonthly: 16999 },
    keyMetric: '92% Vaccine Compliance',
    metricLabel: 'Pet parents never miss critical annual rabies & core shots',
    testimonial: { quote: 'Pet parents love receiving vaccine reminders on WhatsApp with Bruno or Bella’s photo. Our clinic appointments doubled!', author: 'Dr. Devika Rao', role: 'Chief Veterinarian', businessName: 'Paws & Claws Pet Hospital', location: 'Bengaluru', stats: [{ label: 'Vaccines Given', value: '+70%' }], avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
  },

  // 13. Pet Grooming
  pet_grooming: {
    id: 'pet_grooming',
    name: 'SyncFyre Pet Grooming',
    category: 'pet',
    categoryLabel: 'Pet Care & Veterinary',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Pet Salons & Mobile Grooming Vans',
    badge: 'Pet Grooming & Spa OS',
    marketSizeInr: '₹2,400 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['MoeGo', 'GroomerIQ', 'Fresha'],
    painPoints: ['Aggressive dog handling warnings lost', 'Coat matting surcharge disputes', 'Mobile van route inefficiency'],
    aiOpportunities: ['AI Grooming Style Photo Log', 'AI Mobile Grooming Route Optimizer'],
    idealCustomers: { singleOutlet: 'Pet Spas', growingChain: 'Mobile Grooming Van Fleets', franchiseEnterprise: 'Pet Resort Chains' },
    coreModules: ['Coat & Cut Style Preferences', 'Aggression & Temperament Alerts', 'Mobile Van Route Dispatch', 'Spa Package Counter'],
    specializedIndustryModules: [
      { title: 'Pet Temperament & Coat Risk Tagging', description: 'Flags pets needing double handlers, muzzles, or dematting care.', fieldsOrWorkflow: ['Temperament Rating', 'Special Instructions', 'Coat Condition', 'Weight Bracket'] }
    ],
    aiFeatures: [
      { name: 'AI 30-Day Grooming Nudge', description: 'Calculates fur growth cycles for breeds like Poodles, Shih Tzus, and Golden Retrievers.', impact: '+44% Repeat Grooming' }
    ],
    automationEngine: [
      { trigger: 'Grooming Complete', workflowSteps: ['Send "Your Pup is Fluffy & Ready!" WhatsApp Photo', 'Collect UPI Payment'], recoveredValueInr: '₹60,000 / mo' }
    ],
    roleDashboards: ['Spa Owner Command', 'Pet Groomer Station', 'Mobile Van Driver App'],
    reportsList: ['Groomer Daily Output', 'Mobile Van Fuel vs Revenue', 'Add-On Flea Bath Sales'],
    mobileApps: { customerApp: ['Book Bath & Haircut', 'Track Grooming Van GPS'], staffApp: ['View Pet Notes & Cut Photo'], ownerApp: ['Daily Spa Takings'] },
    databaseSchema: [{ tableName: 'pet_grooming_jobs', keyColumns: ['id', 'pet_id', 'coat_condition', 'groomer_id'], purpose: 'Logs grooming cuts & temperament' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/pet-grooming/complete', description: 'Marks bath & haircut complete' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '+44% Repeat Grooming',
    metricLabel: 'Regular bath & haircut schedules every 4 weeks',
    testimonial: { quote: 'Sending pup photos on WhatsApp when grooming is done makes pet parents melt and pay instantly!', author: 'Karan Mehra', role: 'Owner', businessName: 'Fluffy Paws Pet Spa', location: 'Mumbai', stats: [{ label: 'Repeat Clients', value: '88%' }], avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80' },
  },

  // 14. Coaching Institute
  coaching_institute: {
    id: 'coaching_institute',
    name: 'SyncFyre Academy',
    category: 'education',
    categoryLabel: 'Education & Skill Academies',
    iconName: 'GraduationCap',
    tagline: 'The Operating System for Coaching Institutes & Test Prep Centers',
    badge: 'Coaching & Academy OS',
    marketSizeInr: '₹45,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Classplus', 'Teachmint', 'Proctur', 'Excel Fee Registers'],
    painPoints: ['Manual fee installment collection & parent follow-up', 'Student QR attendance tracking leakage', 'Parent communication gaps on test scores'],
    aiOpportunities: ['AI Student Progress Report Generator', 'AI Automatic Fee Installment Follow-Up Bot'],
    idealCustomers: { singleOutlet: 'Local Tuition & Test Prep Centers (100 - 500 Students)', growingChain: 'Regional Coaching Institutes (3 - 10 Branches)', franchiseEnterprise: 'National Competitive Exam Franchises (JEE/NEET/UPSC)' },
    coreModules: ['Batch & Subject Roster Management', 'Student QR Attendance Gate', 'Fee Installment & EMI Tracker', 'Parent WhatsApp Scorecard Engine', 'Study Material Inventory'],
    specializedIndustryModules: [
      { title: 'Fee Installment & WhatsApp EMI Reminder Engine', description: 'Automatically tracks 3-step or 6-step course fee installments with direct Razorpay payment links.', fieldsOrWorkflow: ['Student ID', 'Batch Name', 'Installment #', 'Due Date', 'Late Fee Calculator'] },
      { title: 'Student QR Attendance Kiosk', description: 'Students scan QR on entrance tablet; instantly triggers SMS/WhatsApp to parents ("Your child Rohan entered physics class at 04:02 PM").', fieldsOrWorkflow: ['Scan Time', 'Student Roll #', 'Parent WhatsApp Status'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Parent Scorecard Companion', description: 'Generates beautiful test performance graphics sent directly to parents after mock exams.', impact: '99% Parent Satisfaction' }
    ],
    automationEngine: [
      { trigger: 'Fee Overdue by 3 Days', workflowSteps: ['Send WhatsApp Reminder with Razorpay Link', 'Alert Branch Accounts Manager', 'Flag Attendance Tablet'], recoveredValueInr: '₹3,20,000 / mo per branch' }
    ],
    roleDashboards: ['Institute Director Command', 'Branch Manager', 'Faculty / Teacher Portal', 'Accounts Manager', 'Parent App'],
    reportsList: ['Fee Collection vs Pending Dues', 'Batch-Wise Attendance %', 'Faculty Hours & Student Rating', 'Enrollment Pipeline'],
    mobileApps: { customerApp: ['View Timetable & Test Scores', 'Pay Next Installment', 'Download Study Material PDF'], staffApp: ['Take Batch Attendance', 'Upload Test Marks'], ownerApp: ['Total Admission Cashflow & Pending Fees'] },
    databaseSchema: [{ tableName: 'student_installments', keyColumns: ['id', 'student_id', 'installment_no', 'amount', 'due_date', 'status'], purpose: 'Tracks tuition fee installment payments' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/coaching/fees/overdue', description: 'Returns list of students with overdue fees' }],
    pricingInr: { starterInrMonthly: 3999, growthInrMonthly: 7999, proInrMonthly: 14999, enterpriseInrMonthly: 29999 },
    keyMetric: '98% On-Time Fee Collection',
    metricLabel: 'Eliminated pending tuition fees with automated WhatsApp payment links',
    testimonial: { quote: 'SyncFyre eliminated fee default in our coaching institute. Parents pay installments on WhatsApp before the due date!', author: 'Rajesh Agrawal', role: 'Managing Director', businessName: 'Target JEE & NEET Academy', location: 'Kota, Rajasthan', stats: [{ label: 'Fee Collection', value: '98%' }], avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80' },
  },

  // 15. Dance Academy
  dance_academy: {
    id: 'dance_academy',
    name: 'SyncFyre Dance',
    category: 'education',
    categoryLabel: 'Education & Skill Academies',
    iconName: 'GraduationCap',
    tagline: 'The Operating System for Dance Studios & Performing Arts Academies',
    badge: 'Dance & Performing Arts OS',
    marketSizeInr: '₹3,800 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Classplus', 'Mindbody', 'Fresha'],
    painPoints: ['Monthly batch fee renewals dropped', 'Showcase performance ticket sales', 'Choreographer payout calculations'],
    aiOpportunities: ['AI Recital Ticket & Seat Booking', 'AI Batch Attendance Tracker'],
    idealCustomers: { singleOutlet: 'Dance Studios', growingChain: 'Multi-Location Academies', franchiseEnterprise: 'National Dance Chains' },
    coreModules: ['Batch Scheduling (Bollywood, Hip-Hop, Contemporary, Kathak)', 'Annual Recital & Ticket Sales', 'Choreographer Revenue Share', 'WhatsApp Batch Reminders'],
    specializedIndustryModules: [
      { title: 'Annual Showcase & Recital Ticket System', description: 'Sells seat numbers and passes for annual stage performances to student families.', fieldsOrWorkflow: ['Show Name', 'Seat #', 'Ticket Price', 'QR Pass'] }
    ],
    aiFeatures: [
      { name: 'AI Monthly Batch Renewal Nudge', description: 'Sends WhatsApp renewal alerts on the 25th of every month for next month’s batch.', impact: '+42% Batch Retention' }
    ],
    automationEngine: [
      { trigger: 'Batch Fee Due', workflowSteps: ['Send WhatsApp UPI Link', 'Generate Student QR Pass for Next Month'], recoveredValueInr: '₹75,000 / mo' }
    ],
    roleDashboards: ['Academy Founder Command', 'Choreographer Studio Screen', 'Parent Portal'],
    reportsList: ['Batch Capacity Utilization', 'Choreographer Payouts', 'Recital Ticket Revenue'],
    mobileApps: { customerApp: ['Renew Monthly Dance Batch', 'View Choreography Videos', 'Buy Showcase Tickets'], staffApp: ['Take Batch Attendance'], ownerApp: ['Studio Monthly Takings'] },
    databaseSchema: [{ tableName: 'dance_batches', keyColumns: ['id', 'batch_name', 'style', 'instructor_id', 'monthly_fee'], purpose: 'Stores dance batch schedules & fees' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/dance/batch/renew', description: 'Renews student monthly batch membership' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '+42% Batch Retention',
    metricLabel: 'Students seamlessly renew monthly dance packages',
    testimonial: { quote: 'SyncFyre made our dance academy super organized. Recital ticket sales ran smoothly on WhatsApp!', author: 'Bhavika Patel', role: 'Founder & Master Choreographer', businessName: 'Bhavika Dance Academy', location: 'Mumbai', stats: [{ label: 'Students', value: '450+' }], avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=250&auto=format&fit=crop&q=80' },
  },

  // 16. Music Academy
  music_academy: {
    id: 'music_academy',
    name: 'SyncFyre Music',
    category: 'education',
    categoryLabel: 'Education & Skill Academies',
    iconName: 'GraduationCap',
    tagline: 'The Operating System for Music Schools & Instrument Training Centers',
    badge: 'Music & Sound OS',
    marketSizeInr: '₹2,900 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Classplus', 'MyMusicStaff'],
    painPoints: ['1-on-1 instrument slot conflicts', 'Sheet music distribution', 'Instrument rental tracking'],
    aiOpportunities: ['AI Slot Rescheduling Engine', 'AI Student Practice Log Companion'],
    idealCustomers: { singleOutlet: 'Music Schools (Guitar, Piano, Drums, Vocals)', growingChain: 'Multi-Branch Schools', franchiseEnterprise: 'Franchise Music Networks' },
    coreModules: ['Instrument Room Scheduler', 'Sheet Music & Audio Practice Vault', 'Instrument Rental Tracker', 'Faculty Slot Management'],
    specializedIndustryModules: [
      { title: '1-on-1 Instrument Room Matrix', description: 'Manages Piano, Guitar, Drum kit, and Vocal booths without double-booking.', fieldsOrWorkflow: ['Instrument Type', 'Room #', 'Teacher Name', 'Student Slot'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Practice Buddy', description: 'Reminds students to practice 15 mins daily with audio accompaniment links.', impact: '+38% Grade Exam Pass Rate' }
    ],
    automationEngine: [
      { trigger: 'Student Misses Slot', workflowSteps: ['Send WhatsApp Auto-Reschedule Options', 'Notify Teacher'], recoveredValueInr: '₹50,000 / mo' }
    ],
    roleDashboards: ['Music Director Command', 'Instrument Teacher', 'Student Portal'],
    reportsList: ['Room Capacity Efficiency', 'Teacher Lesson Hours', 'Instrument Rental Dues'],
    mobileApps: { customerApp: ['Book Instrument Slot', 'Access Sheet Music PDFs'], staffApp: ['Mark Lesson Done'], ownerApp: ['Academy Takings'] },
    databaseSchema: [{ tableName: 'music_lessons', keyColumns: ['id', 'student_id', 'instrument', 'teacher_id', 'slot_time'], purpose: 'Tracks instrument lessons' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/music/slots/available', description: 'Returns open instrument practice slots' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: 'Zero Slot Conflicts',
    metricLabel: 'Seamless piano & drum booth utilization',
    testimonial: { quote: 'SyncFyre handled our 300 piano & guitar students without a single scheduling glitch.', author: 'David D’Souza', role: 'Principal', businessName: 'Harmony School of Music', location: 'Goa', stats: [{ label: 'Slot Accuracy', value: '100%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 17. Auto Garage
  auto_garage: {
    id: 'auto_garage',
    name: 'SyncFyre Garage',
    category: 'auto',
    categoryLabel: 'Automotive, Detailing & Garages',
    iconName: 'Wrench',
    tagline: 'The Operating System for Multi-Brand Auto Garages & Mechanic Workshops',
    badge: 'Auto Repair & Job Card OS',
    marketSizeInr: '₹68,000 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['GoMechanic Partner', 'GaragePlug', 'AutoAuth', 'Paper Job Cards'],
    painPoints: ['Lost or greasy paper job cards causing customer disputes', 'Spare parts inventory leakage and incorrect markup', 'Delayed insurance claim estimations', 'Zero automated vehicle service reminders'],
    aiOpportunities: ['AI Vehicle Number Plate OCR Job Card Generator', 'AI Spare Parts Barcode & Reorder Predictor', 'AI Vehicle Kilometers Service Reminder Engine'],
    idealCustomers: { singleOutlet: 'Multi-Brand Auto Workshops (3 - 10 Service Bays)', growingChain: 'Car Workshop Chains (3 - 12 Locations)', franchiseEnterprise: 'National Automotive Service Franchises' },
    coreModules: ['Vehicle License Plate OCR & VIN Decoder', 'Digital Job Card & Inspection Photo Checklist', 'Spare Parts Barcode Inventory & OEM Pricing', 'Mechanic Bay Allocation & Labor Hours', 'Insurance Claim & Estimate Approval via WhatsApp'],
    specializedIndustryModules: [
      { title: 'Digital Vehicle Inspection & WhatsApp Estimate Approval', description: 'Mechanic snaps photos of worn brake pads/scratches on tablet; generates 1-click WhatsApp estimate link for owner approval.', fieldsOrWorkflow: ['Vehicle Reg # (e.g. MH-02-CZ-9912)', 'Make & Model', 'Inspection Photos', 'Part Cost + Labor', 'Customer Digital Sign-Off'] },
      { title: 'Spare Parts OEM Barcode Inventory', description: 'Scans brake oil, filters, spark plugs; auto-deducts stock upon job card completion.', fieldsOrWorkflow: ['Part SKU', 'OEM Part #', 'Buying Cost', 'MRP Selling Price', 'Rack Location'] }
    ],
    aiFeatures: [
      { name: 'AI Vehicle Odometer Service Predictor', description: 'Calculates average daily km driven and fires WhatsApp service alerts every 10,000 km or 6 months.', impact: '+47% Repeat Service Visits' }
    ],
    automationEngine: [
      { trigger: 'Job Card Estimate Created', workflowSteps: ['Send WhatsApp Estimate PDF with "Approve" Button', 'Upon Approval → Dispatch Spare Parts from Store', 'Assign Bay & Mechanic'], recoveredValueInr: '₹2,80,000 / mo per workshop' }
    ],
    roleDashboards: ['Workshop Owner Command', 'Service Manager', 'Mechanic Bay Tablet', 'Spare Parts Storekeeper', 'Customer Web Vehicle Tracker'],
    reportsList: ['Job Card Margin & Labor Revenue', 'Spare Parts Stock Turnover vs Leakage', 'Mechanic Efficiency & Bay Utilization', 'Insurance Claims Pending'],
    mobileApps: { customerApp: ['Track Live Vehicle Repair Status', 'Approve Additional Parts Estimate', 'Pay Service Invoice via UPI'], staffApp: ['Scan Number Plate for Job Card', 'Attach Damage Photos', 'Mark Bay Complete'], ownerApp: ['Live Bays Occupied', 'Today Parts Sales & Labor Profit'] },
    databaseSchema: [
      { tableName: 'job_cards', keyColumns: ['id', 'tenant_id', 'vehicle_reg_no', 'customer_id', 'status', 'total_estimate'], purpose: 'Tracks vehicle repair job cards' },
      { tableName: 'spare_parts', keyColumns: ['id', 'tenant_id', 'part_number', 'oem_name', 'qty_in_stock', 'rack_no'], purpose: 'Barcode inventory for auto spare parts' }
    ],
    apiEndpoints: [
      { method: 'POST', path: '/api/v1/garage/jobcard/create', description: 'Creates vehicle job card with damage photos' },
      { method: 'POST', path: '/api/v1/garage/estimate/approve', description: 'Approves repair estimate via customer WhatsApp token' }
    ],
    pricingInr: { starterInrMonthly: 3499, growthInrMonthly: 6999, proInrMonthly: 12999, enterpriseInrMonthly: 24999 },
    keyMetric: '+47% Repeat Service',
    metricLabel: 'Vehicle owners return for scheduled 10,000 km oil changes',
    testimonial: { quote: 'Paper job cards and missing spare parts destroyed our margins. SyncFyre digitized our garage in 2 days and boosted our monthly profits by 38%!', author: 'Gurminder Singh', role: 'Founder & Chief Engineer', businessName: 'Speedline Multi-Brand Motors', location: 'Ludhiana, Punjab', stats: [{ label: 'Job Card Speed', value: '2 mins' }, { label: 'Profit Lift', value: '+38%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 18. Car Wash
  car_wash: {
    id: 'car_wash',
    name: 'SyncFyre Wash',
    category: 'auto',
    categoryLabel: 'Automotive, Detailing & Garages',
    iconName: 'Wrench',
    tagline: 'The Operating System for Express Car Wash Outlets & Detailing Bays',
    badge: 'Express Car Wash OS',
    marketSizeInr: '₹8,200 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Square', 'GoMechanic', 'Custom Registers'],
    painPoints: ['Slow POS queue at entrance', 'Monthly unlimited wash pass abuse', 'Washer staff tip disputes'],
    aiOpportunities: ['AI License Plate Recognition Fast-Pass', 'AI Wash Shampoo Consumption Monitor'],
    idealCustomers: { singleOutlet: 'Express Car Wash Centers', growingChain: 'Multi-Location Wash Chains', franchiseEnterprise: 'Franchise Car Wash Networks' },
    coreModules: ['Automatic License Plate Reader (ALPR) Scanner', 'Unlimited Monthly Wash Pass Subscriptions', 'Foam Shampoo Inventory', 'Bay Queue Display'],
    specializedIndustryModules: [
      { title: 'ALPR Fast-Pass Gate Scanner', description: 'Scans plate as car enters; opens gate instantly for Monthly Unlimited Wash members.', fieldsOrWorkflow: ['Plate Scan', 'Member Status', 'Gate Trigger', 'Wash Type Selected'] }
    ],
    aiFeatures: [
      { name: 'AI Monsoon & Rain Weather Nudge', description: 'Sends "Post-Rain Mud Cleaning 20% Off" WhatsApp message after heavy rains.', impact: '+58% Rainy Season Revenue' }
    ],
    automationEngine: [
      { trigger: 'Plate Scanned at Gate', workflowSteps: ['Verify Wash Subscription', 'Open Automated Bay Barrier', 'Log Wash Attempt'], recoveredValueInr: '₹95,000 / mo' }
    ],
    roleDashboards: ['Outlet Owner Command', 'Bay Operator Screen', 'Customer App'],
    reportsList: ['Car Wash Throughput / Hour', 'Subscription Pass MRR', 'Foam & Wax Chemical Usage'],
    mobileApps: { customerApp: ['Buy Unlimited Wash Pass', 'Check Live Wash Queue'], staffApp: ['Scan Plate / Select Wash Type'], ownerApp: ['Daily Cars Washed & Revenue'] },
    databaseSchema: [{ tableName: 'wash_passes', keyColumns: ['id', 'vehicle_reg_no', 'pass_type', 'expiry_date'], purpose: 'Tracks unlimited monthly car wash passes' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/carwash/gate/verify', description: 'Verifies plate for automated gate unlock' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '< 10 Sec Entry',
    metricLabel: 'Fast-Pass members drive straight into the wash bay without stopping',
    testimonial: { quote: 'The ALPR Fast-Pass system doubled our monthly wash pass subscriptions!', author: 'Rohit Kulkarni', role: 'Owner', businessName: 'HydroShine Car Wash', location: 'Pune', stats: [{ label: 'Pass Members', value: '620+' }], avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80' },
  },

  // 19. Car Detailing
  car_detailing: {
    id: 'car_detailing',
    name: 'SyncFyre Detailing',
    category: 'auto',
    categoryLabel: 'Automotive, Detailing & Garages',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Ceramic Coating, PPF & Auto Detailing Studios',
    badge: 'PPF & Ceramic Detailing OS',
    marketSizeInr: '₹5,400 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Detailing Software', 'Square', 'GaragePlug'],
    painPoints: ['High-ticket Ceramic/PPF warranty certificate management', 'Multi-day detailing bay scheduling', 'Paint defect inspection record loss'],
    aiOpportunities: ['AI Paint Gloss & Scratch Inspection Scanner', 'AI Annual Ceramic Recoating Reminder'],
    idealCustomers: { singleOutlet: 'Ceramic & PPF Detailing Studios', growingChain: 'Studio Chains', franchiseEnterprise: 'National Detailing Brands' },
    coreModules: ['Paint Inspection 360 Diagram', 'Digital Warranty Certificate Generator', 'PPF Film Roll Barcode Tracker', 'Multi-Day Bay Booking'],
    specializedIndustryModules: [
      { title: 'Digital Ceramic & PPF Warranty Certificate', description: 'Generates branded QR warranty card with 3-year or 5-year free maintenance checkups.', fieldsOrWorkflow: ['Vehicle VIN', 'Coating Batch #', 'Warranty Expiry', 'Inspection Due Dates'] }
    ],
    aiFeatures: [
      { name: 'AI Ceramic Top-Up Checkup Nudge', description: 'Alerts car owner at Month 6 and Month 12 for free gloss maintenance inspection.', impact: '94% Warranty Compliance' }
    ],
    automationEngine: [
      { trigger: 'Ceramic Job Complete', workflowSteps: ['Generate Digital Warranty PDF', 'Send WhatsApp Delivery Video', 'Schedule 6-Month Inspection'], recoveredValueInr: '₹1,50,000 / mo' }
    ],
    roleDashboards: ['Studio Director', 'Master Detailer', 'Customer Portal'],
    reportsList: ['High-Ticket PPF Revenue', 'Film Roll Wastage %', 'Warranty Inspection Compliance'],
    mobileApps: { customerApp: ['View Warranty Certificate', 'Book Maintenance Checkup'], staffApp: ['Log Paint Microns & Photos'], ownerApp: ['High-Ticket Studio Takings'] },
    databaseSchema: [{ tableName: 'detailing_warranties', keyColumns: ['id', 'vin_no', 'coating_type', 'warranty_expiry'], purpose: 'Stores ceramic & PPF warranty records' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/detailing/warranty/issue', description: 'Issues digital warranty certificate' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 11999, enterpriseInrMonthly: 22999 },
    keyMetric: '100% Digital Warranty',
    metricLabel: 'Tamper-proof digital QR ceramic & PPF warranty certificates',
    testimonial: { quote: 'Clients are amazed when they get a branded digital warranty certificate on WhatsApp right after ceramic coating.', author: 'Karan Kapadia', role: 'Owner', businessName: 'Precision Detailing Studio', location: 'Surat', stats: [{ label: 'High Ticket Sales', value: '+52%' }], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  },

  // 20. Laundry
  laundry: {
    id: 'laundry',
    name: 'SyncFyre Laundry',
    category: 'laundry',
    categoryLabel: 'Laundry & Garment Care',
    iconName: 'Shirt',
    tagline: 'The Operating System for Retail Laundry Outlets & Pickup Outlets',
    badge: 'Garment Tagging & Laundry OS',
    marketSizeInr: '₹28,000 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['CleanCloud', 'LaundryMaster', 'Paper Tags'],
    painPoints: ['Lost or mixed garments causing heavy customer compensation', 'Uncollected orders cluttering storage racks', 'No driver tracking for doorstep pickup/delivery'],
    aiOpportunities: ['AI Garment Barcode / RFID Tag Scanner', 'AI Wash Stage Machine Optimizer', 'AI Automated WhatsApp Ready-For-Pickup Alert'],
    idealCustomers: { singleOutlet: 'Neighborhood Laundry Stores', growingChain: 'Multi-Outlet Laundry & Dry Cleaners (3 - 15 Outlets)', franchiseEnterprise: 'Commercial Central Processing Plant Networks' },
    coreModules: ['Waterproof Garment Barcode & QR Tag Generator', 'Wash-Dry-Fold 5-Stage Machine Tracker', 'Express vs Normal Processing Pricing Engine', 'Doorstep Pickup & Delivery Driver App', 'Automated WhatsApp "Ready for Pickup" Alert'],
    specializedIndustryModules: [
      { title: 'Waterproof Heat-Seal Barcode Tagging System', description: 'Prints heat-seal barcode stickers attached to shirt collars & trousers to ensure 0 lost garments.', fieldsOrWorkflow: ['Garment ID', 'Fabric Type (Cotton, Silk, Wool)', 'Stain Risk Note', 'Customer Name', 'Rack Location'] },
      { title: '5-Stage Processing Tracker', description: 'Track order state across Intake → Tagging → Washing → Pressing → Rack Ready.', fieldsOrWorkflow: ['Order #', 'Total Garments Count', 'Current Stage', 'Assigned Washer'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp "Order Ready" Collection Bot', description: 'Sends WhatsApp alert with rack number and UPI payment link as soon as ironing is complete.', impact: '-70% Storage Rack Clutter' }
    ],
    automationEngine: [
      { trigger: 'Garment Tag Scanned "Ready"', workflowSteps: ['Send WhatsApp "Your Clean Clothes are Ready!" Alert', 'Include UPI Payment Link', 'Log Rack Location #42'], recoveredValueInr: '₹1,10,000 / mo per store' }
    ],
    roleDashboards: ['Laundry Store Owner', 'Processing Plant Manager', 'Front-Counter Operator', 'Pickup Driver App'],
    reportsList: ['Garment Volume Processed (Kg & Pieces)', 'Unclaimed Order Aging Report', 'Doorstep Delivery Route Efficiency', 'Express Service Revenue'],
    mobileApps: { customerApp: ['Schedule Free Home Pickup', 'Track Garment Wash Status', 'Pay Delivery Invoice'], staffApp: ['Scan Garment Barcode', 'Mark Stage Complete', 'Assign Rack #'], ownerApp: ['Today Intake Weight & Cashflow'] },
    databaseSchema: [
      { tableName: 'laundry_orders', keyColumns: ['id', 'tenant_id', 'customer_id', 'total_pieces', 'weight_kg', 'stage', 'rack_no'], purpose: 'Tracks laundry orders & wash stage' },
      { tableName: 'garment_items', keyColumns: ['id', 'order_id', 'barcode_tag', 'item_type', 'stain_notes'], purpose: 'Individual garment barcode records' }
    ],
    apiEndpoints: [
      { method: 'POST', path: '/api/v1/laundry/garment/scan', description: 'Updates garment processing stage' },
      { method: 'GET', path: '/api/v1/laundry/orders/ready', description: 'Returns orders ready for pickup or delivery' }
    ],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 8999, enterpriseInrMonthly: 16999 },
    keyMetric: '0 Lost Garments',
    metricLabel: 'Total peace of mind with heat-seal barcode tagging',
    testimonial: { quote: 'We used to lose 3-4 shirts a month and pay upset clients. With SyncFyre’s garment barcode system, we have had 0 lost items in 12 months!', author: 'Suresh Kumar', role: 'Owner', businessName: 'SuperClean Laundry', location: 'Bengaluru', stats: [{ label: 'Lost Garments', value: '0' }, { label: 'Pickup Speed', value: '15 sec' }], avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80' },
  },

  // 21. Dry Cleaning
  dry_cleaning: {
    id: 'dry_cleaning',
    name: 'SyncFyre DryClean',
    category: 'laundry',
    categoryLabel: 'Laundry & Garment Care',
    iconName: 'Shirt',
    tagline: 'The Operating System for Eco Dry Cleaners & Premium Suit Care',
    badge: 'Dry Cleaning & Fabric Care OS',
    marketSizeInr: '₹12,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['CleanCloud', 'SPOT POS', 'SMRT Systems'],
    painPoints: ['High-value designer garment damage liability', 'Solvent consumption tracking', 'Unclaimed suit storage'],
    aiOpportunities: ['AI Fabric Risk & Stain Inspection Photo Log', 'AI Urgent Express Order Dispatch'],
    idealCustomers: { singleOutlet: 'Boutique Dry Cleaners', growingChain: 'Dry Cleaning Chains', franchiseEnterprise: 'Franchise Plant Networks' },
    coreModules: ['Designer Garment Inspection Photo Log', 'Solvent & Chemical Consumption Tracker', 'Express 24-Hour Surcharge', 'Automated Storage Conveyor Sync'],
    specializedIndustryModules: [
      { title: 'High-Value Designer Garment Inspection Log', description: 'Snaps pre-existing torn threads, missing buttons, or stubborn stains on luxury sarees/suits.', fieldsOrWorkflow: ['Brand/Item Name', 'Pre-Existing Defect Photo', 'Customer Sign-off', 'Declared Item Value'] }
    ],
    aiFeatures: [
      { name: 'AI Garment Stain Removal Success Predictor', description: 'Analyzes stain type (Wine, Oil, Ink, Grease) and recommends ideal eco-solvent protocol.', impact: '99% Fabric Safety' }
    ],
    automationEngine: [
      { trigger: 'Designer Suit Tagged Ready', workflowSteps: ['Send WhatsApp Video Inspection', 'Include UPI Link', 'Move Conveyor to Slot #18'], recoveredValueInr: '₹1,30,000 / mo' }
    ],
    roleDashboards: ['Store Owner Command', 'Dry Clean Plant Supervisor', 'Front Desk Counter'],
    reportsList: ['Dry Cleaning vs Wash Revenue Split', 'Unclaimed Garment Liability', 'Solvent Cost per Piece'],
    mobileApps: { customerApp: ['Schedule Designer Suit Pickup', 'View Pre-Wash Photos'], staffApp: ['Scan Barcode / Attach Photo'], ownerApp: ['High-Ticket Order Takings'] },
    databaseSchema: [{ tableName: 'dryclean_items', keyColumns: ['id', 'order_id', 'designer_brand', 'declared_value', 'pre_wash_condition'], purpose: 'Stores designer garment condition photos' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/dryclean/inspection/save', description: 'Saves pre-wash damage photo' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 9999, enterpriseInrMonthly: 18999 },
    keyMetric: '0 Damage Claims',
    metricLabel: 'Zero dispute claims with pre-wash digital photo proof',
    testimonial: { quote: 'Handling ₹50,000 designer sarees was nerve-wracking. SyncFyre’s inspection photos protect our business completely.', author: 'Vikram Merchant', role: 'Managing Partner', businessName: 'Royal Silk Eco Drycleaners', location: 'Mumbai', stats: [{ label: 'Disputes', value: '0%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 22. Mobile Repair
  mobile_repair: {
    id: 'mobile_repair',
    name: 'SyncFyre Mobile',
    category: 'repair',
    categoryLabel: 'Tech Repairs & Electronics',
    iconName: 'Smartphone',
    tagline: 'The Operating System for Mobile Phone Repair Shops & Service Centers',
    badge: 'Mobile Repair & IMEI OS',
    marketSizeInr: '₹16,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['RepairDesk', 'RepairShopper', 'Paper Slips'],
    painPoints: ['Unrecorded screen/battery inventory swaps', 'IMEI/Serial number matching disputes', 'Unclaimed repaired phones lying for months'],
    aiOpportunities: ['AI IMEI Barcode Job Sheet Generator', 'AI Spare Screen Quality & Warranty Tracker', 'AI WhatsApp Unclaimed Device Liquidation Nudge'],
    idealCustomers: { singleOutlet: 'Local Phone Repair Stores', growingChain: 'Multi-Location Service Chains', franchiseEnterprise: 'Authorized Brand Service Networks' },
    coreModules: ['IMEI / Serial Number Barcode Job Sheet', 'Pre-Repair Fault Checklist (Touch, Mic, Camera, FaceID)', 'OEM Screen & Battery Spare Parts Tracker', 'Technician Repair Commission Engine', 'Automated WhatsApp Status Tracker'],
    specializedIndustryModules: [
      { title: 'Digital Fault Checklist & IMEI Job Sheet', description: 'Tests 12 phone functions (Touch, Speaker, Wi-Fi, Charging, FaceID) before taking device in.', fieldsOrWorkflow: ['IMEI 1 & 2', 'Passcode/Pattern Lock', 'Pre-Repair Fault Photos', 'Estimated Cost', 'Customer Sign-off'] },
      { title: 'Spare Screen & Battery Stock Barcode Ledger', description: 'Tracks Original vs Compatible display screens with 90-day warranty sticker codes.', fieldsOrWorkflow: ['Screen Model', 'Quality Grade (OLED / Incell)', 'Serial #', 'Warranty Expire Date'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Device Status Companion', description: 'Auto-sends "Screen Replaced Successfully!" photo with payment link when technician finishes.', impact: '+54% Faster Pickup' }
    ],
    automationEngine: [
      { trigger: 'Technician Marks "Repaired"', workflowSteps: ['Send WhatsApp Notification with Phone Photo', 'Attach 90-Day Warranty PDF', 'Include UPI Link'], recoveredValueInr: '₹90,000 / mo per shop' }
    ],
    roleDashboards: ['Store Owner Command', 'Technician Workbench Screen', 'Counter Executive', 'Customer Web IMEI Tracker'],
    reportsList: ['Repair Ticket Profit Margins', 'Screen / Battery Parts Wastage', 'Unclaimed Device Aging (>30 Days)', 'Technician Daily Output'],
    mobileApps: { customerApp: ['Track IMEI Repair Status', 'View Pre-Repair Fault Sheet', 'Pay via UPI'], staffApp: ['Scan IMEI', 'Tick Fault Checklist', 'Attach Repair Photo'], ownerApp: ['Today Repair Profit & Cashflow'] },
    databaseSchema: [
      { tableName: 'repair_tickets', keyColumns: ['id', 'tenant_id', 'imei_number', 'brand_model', 'fault_description', 'status', 'cost'], purpose: 'Tracks mobile phone repair tickets' },
      { tableName: 'screen_parts', keyColumns: ['id', 'tenant_id', 'model_compat', 'part_quality', 'warranty_days'], purpose: 'Display & battery spare inventory' }
    ],
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/mobile/ticket/imei-status', description: 'Returns live repair status by IMEI' },
      { method: 'POST', path: '/api/v1/mobile/ticket/create', description: 'Creates phone repair job sheet' }
    ],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '54% Faster Device Pickup',
    metricLabel: 'Customers collect repaired phones swiftly upon WhatsApp alert',
    testimonial: { quote: 'SyncFyre eliminated IMEI mix-ups and pre-repair condition disputes. Our repair shop runs like an Apple Store!', author: 'Imran Khan', role: 'Owner', businessName: 'iFixit Mobile Care', location: 'Hyderabad', stats: [{ label: 'Repair Speed', value: '+40%' }, { label: 'Disputes', value: '0' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 23. Laptop Repair
  laptop_repair: {
    id: 'laptop_repair',
    name: 'SyncFyre Laptop',
    category: 'repair',
    categoryLabel: 'Tech Repairs & Electronics',
    iconName: 'Smartphone',
    tagline: 'The Operating System for Computer & Laptop Repair Centers',
    badge: 'Laptop & Mac Repair OS',
    marketSizeInr: '₹11,500 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['RepairDesk', 'RepairShopper'],
    painPoints: ['Motherboard chip-level repair estimation delays', 'Missing charger/RAM component disputes', 'Part replacement verification'],
    aiOpportunities: ['AI Serial Number Accessory Intake Log', 'AI Chip-Level Repair Cost Estimator'],
    idealCustomers: { singleOutlet: 'Computer Service Centers', growingChain: 'Multi-Branch Repair Stores', franchiseEnterprise: 'Enterprise IT Service Networks' },
    coreModules: ['Accessory Intake Log (Charger, Bag, RAM, SSD)', 'Chip-Level Motherboard Diagnostic Tracker', 'SSD & RAM Upgrade Estimator', 'WhatsApp Status Bot'],
    specializedIndustryModules: [
      { title: 'Accessory & Component Verification Sheet', description: 'Logs serial numbers of RAM, SSD, Charger, and Battery to guarantee zero component swap claims.', fieldsOrWorkflow: ['Laptop Serial #', 'RAM Capacity & Brand', 'SSD Serial #', 'Charger Included (Yes/No)'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Diagnostic Video Assistant', description: 'Sends short video of motherboard diagnostic or replaced fan to customer for instant approval.', impact: '98% Customer Trust Score' }
    ],
    automationEngine: [
      { trigger: 'Diagnostic Complete', workflowSteps: ['Send WhatsApp Video + Estimate', 'Upon Approval → Allocate Spare Chip/Screen'], recoveredValueInr: '₹1,10,000 / mo' }
    ],
    roleDashboards: ['Store Lead Command', 'Chip-Level Engineer Workbench', 'Counter Desk'],
    reportsList: ['Chip-Level vs Component Replacement Profit', 'Unclaimed Laptop Inventory (>45 Days)'],
    mobileApps: { customerApp: ['Track Laptop Repair Stage', 'Approve SSD Upgrade'], staffApp: ['Scan Laptop Serial / Log RAM'], ownerApp: ['Today Repair Takings'] },
    databaseSchema: [{ tableName: 'laptop_repairs', keyColumns: ['id', 'serial_no', 'brand_model', 'ram_ssd_details', 'status'], purpose: 'Stores laptop repair tickets & serial numbers' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/laptop/ticket/status', description: 'Returns laptop repair status' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 8999, enterpriseInrMonthly: 16999 },
    keyMetric: '0 Component Disputes',
    metricLabel: 'Complete trust with recorded RAM, SSD, and battery serials',
    testimonial: { quote: 'Customers trust us completely because we log all RAM & SSD serial numbers in SyncFyre before opening the laptop.', author: 'Nitin Sawant', role: 'Chief Engineer', businessName: 'TechCare Laptop Solutions', location: 'Pune', stats: [{ label: 'Trust Score', value: '98%' }], avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80' },
  },

  // 24. Optical Store
  optical_store: {
    id: 'optical_store',
    name: 'SyncFyre Optical',
    category: 'health',
    categoryLabel: 'Healthcare & Wellness Clinics',
    iconName: 'Activity',
    tagline: 'The Operating System for Optical Stores & Eyewear Showrooms',
    badge: 'Optical & Prescription OS',
    marketSizeInr: '₹18,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['LensKart Partner', 'Custom POS', 'Excel Registers'],
    painPoints: ['Eye prescription power card loss', 'Lens lab cutting order delays', 'Frame inventory barcode tracking'],
    aiOpportunities: ['AI WhatsApp Eye Prescription Storage', 'AI Annual Eye Checkup Recall Bot'],
    idealCustomers: { singleOutlet: 'Optical Stores', growingChain: 'Eyewear Showroom Chains', franchiseEnterprise: 'National Optical Franchises' },
    coreModules: ['Optometrist Eye Power Prescription Ledger (SPH, CYL, AXIS)', 'Lens Fitting Lab Order Tracker', 'Frame Barcode Inventory & Brand Catalog', 'WhatsApp Ready Alert'],
    specializedIndustryModules: [
      { title: 'Digital Eye Power Prescription Vault', description: 'Logs SPH, CYL, AXIS, ADD, and Pupillary Distance (PD) for left & right eye with 1-click PDF.', fieldsOrWorkflow: ['RE Power (SPH/CYL/AXIS)', 'LE Power (SPH/CYL/AXIS)', 'Lens Type (Progressive/Bifocal)', 'Optometrist Sign'] }
    ],
    aiFeatures: [
      { name: 'AI 1-Year Eye Checkup Recall Bot', description: 'Alerts customer exactly 12 months after last power check for a free vision test.', impact: '+46% Repeat Frame Sales' }
    ],
    automationEngine: [
      { trigger: 'Glasses Ready from Fitting Lab', workflowSteps: ['Send WhatsApp "Your Spectacles are Ready!" Alert', 'Attach Eye Power Card PDF'], recoveredValueInr: '₹1,25,000 / mo' }
    ],
    roleDashboards: ['Showroom Manager', 'Optometrist Screen', 'Lens Lab Technician'],
    reportsList: ['Frame vs Lens Margin Split', 'Lens Lab Order Turnaround Time', 'Optometrist Conversion %'],
    mobileApps: { customerApp: ['Digital Eye Power Card', 'Order Prescription Contact Lenses'], staffApp: ['Scan Frame Barcode / Log Power'], ownerApp: ['Daily Showroom Revenue'] },
    databaseSchema: [{ tableName: 'eye_prescriptions', keyColumns: ['id', 'customer_id', 're_sph', 're_cyl', 'le_sph', 'le_cyl'], purpose: 'Stores digital eye power records' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/optical/prescription/get', description: 'Retrieves customer eye prescription' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 8999, enterpriseInrMonthly: 16999 },
    keyMetric: '+46% Annual Repeat',
    metricLabel: 'Customers return annually for vision checkups & new frames',
    testimonial: { quote: 'Customers love having their eye power card on WhatsApp. No paper cards to carry or lose!', author: 'Manish Shah', role: 'Owner', businessName: 'VisionCraft Opticals', location: 'Vadodara', stats: [{ label: 'Repeat Sales', value: '+46%' }], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  },

  // 25. Pharmacy
  pharmacy: {
    id: 'pharmacy',
    name: 'SyncFyre Pharmacy',
    category: 'health',
    categoryLabel: 'Healthcare & Wellness Clinics',
    iconName: 'Activity',
    tagline: 'The Operating System for Retail Pharmacies & Chemist Outlets',
    badge: 'Pharmacy & Medicine OS',
    marketSizeInr: '₹85,000 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Marg ERP', 'Pharmarack', 'Custom POS'],
    painPoints: ['Medicine batch expiry wastage', 'Schedule H drug compliance logs', 'Manual chronic medicine refill reminders'],
    aiOpportunities: ['AI Medicine Expiry Date Alert Engine', 'AI Monthly Chronic Refill WhatsApp Bot'],
    idealCustomers: { singleOutlet: 'Chemist Outlets', growingChain: 'Pharmacy Chains', franchiseEnterprise: 'Hospital Pharmacy Networks' },
    coreModules: ['Medicine Batch & Expiry Barcode Ledger', 'Schedule H & H1 Drug Audit Register', 'Monthly Chronic Refill Engine', 'GST Billing & Distributor PO'],
    specializedIndustryModules: [
      { title: 'Medicine Batch # & Expiry Date Barcode Billing', description: 'Scans medicine strip; alerts cashier instantly if batch expires within 30 days.', fieldsOrWorkflow: ['Medicine Name', 'Batch #', 'Expiry Date', 'MRP / PTR', 'Schedule H Flag'] }
    ],
    aiFeatures: [
      { name: 'AI Monthly Chronic Refill WhatsApp Bot', description: 'Sends 1-click refill reminder for Diabetes, BP, and Cardiac medicines every 28 days.', impact: '+68% Chronic Refill Revenue' }
    ],
    automationEngine: [
      { trigger: '28 Days Since Last Refill', workflowSteps: ['Send WhatsApp "Refill Your Monthly Medicines" Alert', '1-Click Doorstep Delivery Option'], recoveredValueInr: '₹2,50,000 / mo' }
    ],
    roleDashboards: ['Pharmacy Owner', 'Pharmacist Counter', 'Inventory Manager'],
    reportsList: ['Medicine Near-Expiry Alert Report', 'Schedule H Drug Audit Log', 'Monthly Chronic Refill Rate'],
    mobileApps: { customerApp: ['Order Monthly Prescription Refill', 'Upload Doctor Prescription PDF'], staffApp: ['Scan Medicine Barcode'], ownerApp: ['Today Sales & Stock Expiry Alert'] },
    databaseSchema: [{ tableName: 'medicine_batches', keyColumns: ['id', 'medicine_name', 'batch_no', 'expiry_date', 'qty'], purpose: 'Tracks medicine batches & expiration' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/pharmacy/expiry/alerts', description: 'Returns near-expiry medicine batches' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 11999, enterpriseInrMonthly: 22999 },
    keyMetric: '+68% Chronic Refills',
    metricLabel: 'Higher retention for monthly diabetes & BP prescription refills',
    testimonial: { quote: 'SyncFyre stopped medicine expiry losses in our pharmacy and automated our monthly chronic refills!', author: 'Pharma. Rakesh Verma', role: 'Owner', businessName: 'Sanjeevani Chemist & Druggists', location: 'Jaipur', stats: [{ label: 'Expiry Loss', value: '0%' }], avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80' },
  },

  // 26. Photography Studio
  photography_studio: {
    id: 'photography_studio',
    name: 'SyncFyre Photo',
    category: 'events',
    categoryLabel: 'Events, Creative & Rental Services',
    iconName: 'Camera',
    tagline: 'The Operating System for Photography Studios & Event Photographers',
    badge: 'Photography & Shoot OS',
    marketSizeInr: '₹9,500 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Pixieset', 'HoneyBook', 'StudioBinder'],
    painPoints: ['Wedding shoot milestone payment delays', 'Raw photo selection delays from clients', 'Camera gear rental tracking'],
    aiOpportunities: ['AI Client Photo Selection Gallery', 'AI Event Date Calendar Lock'],
    idealCustomers: { singleOutlet: 'Photo Studios', growingChain: 'Wedding & Commercial Photo Agencies', franchiseEnterprise: 'National Media Houses' },
    coreModules: ['Event Date & Shoot Location Calendar', 'Milestone Invoice Tracker (Booking, Shoot, Album)', 'AI Photo Proofing & Selection Gallery', 'Gear Inventory Tracker'],
    specializedIndustryModules: [
      { title: 'AI Proofing Photo Selection Gallery', description: 'Clients heart favorite photos on web link; auto-syncs selected RAW files for photo editor.', fieldsOrWorkflow: ['Gallery Link', 'Selected Photos Count', 'Album Design Status', 'Print Approval'] }
    ],
    aiFeatures: [
      { name: 'AI Milestone Payment Nudge', description: 'Reminds client for 40% payment before shoot day and 20% before album delivery.', impact: '100% On-Time Payment' }
    ],
    automationEngine: [
      { trigger: 'Photos Uploaded to Proofing', workflowSteps: ['Send WhatsApp Gallery Link', 'Set 7-Day Selection Timer'], recoveredValueInr: '₹85,000 / mo' }
    ],
    roleDashboards: ['Studio Lead Command', 'Photographer / Editor Screen', 'Client Proofing Portal'],
    reportsList: ['Shoot Profit Margin', 'Uncollected Milestone Dues', 'Gear Utilization'],
    mobileApps: { customerApp: ['Select Album Photos', 'Approve Album Layout', 'Pay Milestone Invoice'], staffApp: ['View Shoot Location & Time'], ownerApp: ['Studio Cashflow & Bookings'] },
    databaseSchema: [{ tableName: 'photo_shoots', keyColumns: ['id', 'client_id', 'event_type', 'shoot_date', 'total_package', 'paid_amount'], purpose: 'Tracks photo shoots & milestone payments' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/photo/gallery/create', description: 'Creates proofing gallery link' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '3x Faster Selections',
    metricLabel: 'Clients select favorite album photos quickly online',
    testimonial: { quote: 'SyncFyre eliminated client payment delays and made photo selection super fast.', author: 'Rohan Deshmukh', role: 'Lead Photographer', businessName: 'Framed Moments Weddings', location: 'Pune', stats: [{ label: 'On-Time Pay', value: '100%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  // 27. Printing Press
  printing_press: {
    id: 'printing_press',
    name: 'SyncFyre Print',
    category: 'events',
    categoryLabel: 'Events, Creative & Rental Services',
    iconName: 'Printer',
    tagline: 'The Operating System for Commercial Printing Presses & Signage Hubs',
    badge: 'Printing & Signage OS',
    marketSizeInr: '₹35,000 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['PrintIQ', 'Custom Spreadsheets'],
    painPoints: ['Paper GSM & dimensions estimation errors', 'Print job stage delays', 'Design proof approval disputes'],
    aiOpportunities: ['AI Print Job Estimator (GSM, Ink, Size)', 'AI WhatsApp Proofing Approval Bot'],
    idealCustomers: { singleOutlet: 'Printing Presses', growingChain: 'Signage & Banner Hubs', franchiseEnterprise: 'Commercial Packaging Plants' },
    coreModules: ['Paper GSM & Square Feet Price Calculator', 'WhatsApp PDF Proofing Approval', '5-Stage Print Job Tracker (Prepress, Print, Lamination, Cut, Pack)', 'Paper Stock Barcode Inventory'],
    specializedIndustryModules: [
      { title: 'Paper GSM, Size & Lamination Cost Matrix', description: 'Calculates exact job quote based on quantity, paper GSM (130, 250, 350 GSM), size (A4, Flex, Banner), and lamination type.', fieldsOrWorkflow: ['Paper GSM', 'Sq Ft / Qty', 'Inking Type', 'Lamination (Gloss/Matte)', 'Estimated Quote'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Proof Approval Bot', description: 'Sends high-res PDF proof to client; requires digital sign-off before printing press runs.', impact: '0 Print Misprint Losses' }
    ],
    automationEngine: [
      { trigger: 'Client Approves PDF Proof', workflowSteps: ['Move Job to Press Queue', 'Deduct Paper GSM Stock', 'Notify Press Operator'], recoveredValueInr: '₹1,60,000 / mo' }
    ],
    roleDashboards: ['Press Director Command', 'Prepress Designer Screen', 'Press Operator', 'Customer Proof Portal'],
    reportsList: ['Paper Stock Inventory Ledger', 'Job Stage Efficiency', 'Misprint / Scrap Losses %'],
    mobileApps: { customerApp: ['Approve Print Proof PDF', 'Pay Deposit via UPI'], staffApp: ['Scan Job Ticket / Mark Stage Done'], ownerApp: ['Press Revenue & Stock'] },
    databaseSchema: [{ tableName: 'print_jobs', keyColumns: ['id', 'paper_gsm', 'qty', 'proof_status', 'total_quote'], purpose: 'Tracks commercial printing jobs' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/print/proof/approve', description: 'Approves print proof PDF' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 11999, enterpriseInrMonthly: 22999 },
    keyMetric: '0 Misprint Scrap',
    metricLabel: 'Zero wasted paper runs with digital proof approvals',
    testimonial: { quote: 'SyncFyre saved us lakhs in paper misprints by getting digital proof approvals on WhatsApp before starting the press.', author: 'Gautam Jain', role: 'Owner', businessName: 'Printech Offset & Signage', location: 'Indore', stats: [{ label: 'Wastage', value: '0%' }], avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80' },
  },

  // 28. Event Planner
  event_planner: {
    id: 'event_planner',
    name: 'SyncFyre Events',
    category: 'events',
    categoryLabel: 'Events, Creative & Rental Services',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Event Planners & Wedding Management Agencies',
    badge: 'Event & Wedding OS',
    marketSizeInr: '₹50,000 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['HoneyBook', 'Aventri', 'Custom Excel'],
    painPoints: ['Vendor PO payout untracked costs', 'Event run-of-show timing mishaps', 'Client budget overrun disputes'],
    aiOpportunities: ['AI Event Run-of-Show Timeline Generator', 'AI Vendor PO & Budget Tracker'],
    idealCustomers: { singleOutlet: 'Event Planning Agencies', growingChain: 'Destination Wedding Planners', franchiseEnterprise: 'Corporate Event Management Networks' },
    coreModules: ['Event Master Budget & Vendor PO Tracker', 'Run-of-Show Minute-by-Minute Timeline', 'Guest RSVP & Table Seating Manager', 'Client Payment Milestone Engine'],
    specializedIndustryModules: [
      { title: 'Vendor PO & Budget Variance Engine', description: 'Tracks Catering, Decor, DJ, Sound PO contracts against overall client budget.', fieldsOrWorkflow: ['Vendor Category', 'Contracted PO Amount', 'Advance Paid', 'Balance Due'] }
    ],
    aiFeatures: [
      { name: 'AI WhatsApp Guest RSVP Companion', description: 'Sends event invitations to guest list; tracks dietary preferences and arrival times automatically.', impact: '98% RSVP Accuracy' }
    ],
    automationEngine: [
      { trigger: 'Vendor PO Signed', workflowSteps: ['Schedule Advance Payout Alert', 'Add Vendor to Minute-by-Minute Run Sheet'], recoveredValueInr: '₹2,20,000 / mo' }
    ],
    roleDashboards: ['Event Director Command', 'On-Site Coordinator App', 'Vendor Desk', 'Client Budget App'],
    reportsList: ['Event Net Profit Margin', 'Vendor PO Outstandings', 'Guest RSVP Summary'],
    mobileApps: { customerApp: ['View Event Budget & Run Sheet', 'Pay Milestones'], staffApp: ['Check Minute-by-Minute Timeline'], ownerApp: ['Agency Portfolio Profits'] },
    databaseSchema: [{ tableName: 'event_budgets', keyColumns: ['id', 'client_id', 'total_budget', 'vendor_pos_sum', 'agency_fee'], purpose: 'Tracks event budgets & vendor POs' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/event/rsvp/update', description: 'Updates guest RSVP status' }],
    pricingInr: { starterInrMonthly: 3999, growthInrMonthly: 7999, proInrMonthly: 14999, enterpriseInrMonthly: 29999 },
    keyMetric: '100% Budget Accuracy',
    metricLabel: 'Zero budget overrun disputes with real-time vendor PO tracking',
    testimonial: { quote: 'Managing a 3-day destination wedding with 40 vendors was flawless on SyncFyre.', author: 'Ananya Roy', role: 'Founder & Event Director', businessName: 'Royale Events & Weddings', location: 'Udaipur', stats: [{ label: 'Budget Control', value: '100%' }], avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
  },

  // 29. Equipment Rental
  equipment_rental: {
    id: 'equipment_rental',
    name: 'SyncFyre Rental',
    category: 'events',
    categoryLabel: 'Events, Creative & Rental Services',
    iconName: 'Wrench',
    tagline: 'The Operating System for Equipment, Camera & Event Gear Rental Companies',
    badge: 'Equipment & Serial Rental OS',
    marketSizeInr: '₹14,500 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Booqable', 'EZRentOut', 'ShareGrid'],
    painPoints: ['Overdue gear returns untracked', 'Serial number asset damaged without security deposit hold', 'Maintenance calibration schedule failures'],
    aiOpportunities: ['AI Serialized Barcode Check-In/Check-Out', 'AI Dynamic Late Return Penalty Auto-Calculator'],
    idealCustomers: { singleOutlet: 'Camera & Sound Rental Stores', growingChain: 'Construction Equipment Rental Outlets', franchiseEnterprise: 'Commercial Scaffolding & Power Networks' },
    coreModules: ['Serialized Asset Barcode Tracker', 'Security Deposit Hold & Refund Engine', 'Check-In Inspection Damage Checklist', 'Dynamic Daily / Weekly Rental Pricing', 'Overdue WhatsApp Return Alert'],
    specializedIndustryModules: [
      { title: 'Serialized Gear Check-In & Damage Log', description: 'Scans barcode on Sony FX6, Lens, Generator, or Scaffolding; checks for scratches before releasing deposit.', fieldsOrWorkflow: ['Asset Barcode / Serial #', 'Daily Rate', 'Security Deposit Held', 'Return Inspection Status'] }
    ],
    aiFeatures: [
      { name: 'AI Late Return WhatsApp Penalty Bot', description: 'Triggers automatically 2 hours after return deadline; calculates per-hour late fees.', impact: '+91% On-Time Gear Returns' }
    ],
    automationEngine: [
      { trigger: 'Rental Overdue by 1 Hour', workflowSteps: ['Send WhatsApp "Return Gear Today" Reminder', 'Auto-Calculate Late Fee', 'Hold Security Deposit'], recoveredValueInr: '₹1,40,000 / mo' }
    ],
    roleDashboards: ['Rental Store Owner Command', 'Warehouse Dispatch Operator', 'Customer Web Portal'],
    reportsList: ['Asset Utilization Rate %', 'Late Fee Revenue Collected', 'Damaged Gear Maintenance Expenses'],
    mobileApps: { customerApp: ['Browse Gear Inventory', 'Reserve Camera / Gear', 'Track Deposit Refund'], staffApp: ['Scan Barcode Out / In', 'Log Damage Photo'], ownerApp: ['Asset ROI & Cashflow'] },
    databaseSchema: [{ tableName: 'rental_assets', keyColumns: ['id', 'serial_no', 'asset_name', 'status_rented', 'daily_rate'], purpose: 'Tracks serialized rental equipment assets' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/rental/checkout', description: 'Checks out serialized equipment asset' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 11999, enterpriseInrMonthly: 22999 },
    keyMetric: '+91% On-Time Returns',
    metricLabel: 'Gear returns on schedule with automated WhatsApp reminders',
    testimonial: { quote: 'SyncFyre stopped gear theft and late returns in our camera rental business completely!', author: 'Devendra Joshi', role: 'Owner', businessName: 'CineGear Camera Rentals', location: 'Mumbai', stats: [{ label: 'On-Time Return', value: '96%' }], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  },

  // 30. Franchise
  franchise: {
    id: 'franchise',
    name: 'SyncFyre Enterprise',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'Building',
    tagline: 'Multi-Tenant Master Command Operating System for Franchise Networks',
    badge: 'Multi-Location Enterprise OS',
    marketSizeInr: '₹1,20,000 Cr Enterprise Market (2026)',
    digitalMaturity: 'Transforming',
    competitors: ['Zenoti Enterprise', 'Toast Enterprise', 'Mindbody Enterprise', 'Oracle MICROS'],
    painPoints: ['Fragmented branch visibility across 20+ cities', 'Unsynchronized royalty calculations', 'Cross-location customer roaming access failure'],
    aiOpportunities: ['AI Franchise Revenue Leakage Audit Bot', 'AI Global Network Performance Dashboard'],
    idealCustomers: { singleOutlet: 'Multi-Site Business Group (3+ Outlets)', growingChain: 'Regional Chain (10 - 50 Locations)', franchiseEnterprise: 'National Franchise Network (100+ Outlets)' },
    coreModules: ['Multi-Tenant Master HQ Dashboard', 'Automated Franchise Royalty Splitter', 'Cross-Location Customer Roaming Access', 'Central Supply Chain & Menu/Catalog Push', 'Role-Based Branch Permissions'],
    specializedIndustryModules: [
      { title: 'Franchise Royalty & Revenue Split Engine', description: 'Calculates 6% or 8% franchise royalty fee automatically on gross monthly billing across all branches.', fieldsOrWorkflow: ['Branch ID', 'Gross Revenue', 'Royalty %', 'HQ Payout Auto-Split'] }
    ],
    aiFeatures: [
      { name: 'AI Global Franchise Advisor', description: 'Compares top 10% performing branches against bottom 10% to surface operational improvements.', impact: '+28% Network-Wide Profitability' }
    ],
    automationEngine: [
      { trigger: '1st of Month 00:01 AM', workflowSteps: ['Consolidate Network Revenue', 'Calculate Franchise Royalty Invoices', 'Push Updated Service Catalog to All Branches'], recoveredValueInr: '₹12,50,000 / mo HQ Value' }
    ],
    roleDashboards: ['HQ Executive Command', 'Regional Franchise Director', 'Branch Manager', 'Audit & Finance Desk'],
    reportsList: ['Network-Wide Consolidated P&L', 'Branch Benchmarking Matrix', 'Royalty Collection Status'],
    mobileApps: { customerApp: ['Multi-City Access Pass', 'Book Any Location'], staffApp: ['Branch Staff Roster'], ownerApp: ['Master HQ Real-Time Revenue Feed'] },
    databaseSchema: [{ tableName: 'franchise_branches', keyColumns: ['id', 'network_id', 'branch_name', 'royalty_percentage'], purpose: 'Stores enterprise franchise multi-location structures' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/enterprise/network/consolidated-revenue', description: 'Returns real-time multi-location revenue' }],
    pricingInr: { starterInrMonthly: 9999, growthInrMonthly: 19999, proInrMonthly: 39999, enterpriseInrMonthly: 79999 },
    keyMetric: '100% HQ Visibility',
    metricLabel: 'Real-time master control across 50+ franchise outlets',
    testimonial: { quote: 'SyncFyre allowed us to scale from 8 to 45 franchise locations without hiring extra HQ accountants.', author: 'Camilla Torres', role: 'Chief Operating Officer', businessName: 'Titan Multi-Brand Franchise Network', location: 'Pan-India', stats: [{ label: 'Locations', value: '45 Outlets' }], avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
  },

  // Fallbacks for remaining types
  crossfit: {
    id: 'crossfit',
    name: 'SyncFyre CrossFit',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'Dumbbell',
    tagline: 'The Operating System for CrossFit Boxes & Functional Fitness Rig Gyms',
    badge: 'Class & Community Heavy OS',
    marketSizeInr: '₹6,500 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Wodify', 'SugarWOD', 'Zen Planner', 'PushPress'],
    painPoints: ['WOD benchmark score tracking', 'Drop-in athlete waiver delays', 'Waitlist management'],
    aiOpportunities: ['AI WOD Leaderboard & Benchmark Tracking', 'AI Waitlist Auto-Drop Bot'],
    idealCustomers: { singleOutlet: 'CrossFit Boxes', growingChain: 'Functional Gym Chains', franchiseEnterprise: 'National Box Affiliates' },
    coreModules: ['WOD Scoreboard & PR Tracking', 'Drop-In Athlete Digital Waiver', 'Waitlist Auto-Fill Engine', 'Coach Payroll'],
    specializedIndustryModules: [{ title: 'WOD & PR Scoreboard', description: 'Athletes log Hero WOD scores and track 1RM Personal Records.', fieldsOrWorkflow: ['WOD Title', 'Time/Reps', 'Rx/Scaled', 'PR Alert'] }],
    aiFeatures: [{ name: 'AI Waitlist Auto-Fill', description: 'Notifies #1 waitlist athlete when a slot opens up with 15m hold.', impact: '99.4% Class Capacity' }],
    automationEngine: [{ trigger: 'Class Cancelled >2h', workflowSteps: ['Notify Waitlist #1 via Push', 'Auto-Reserve Spot'], recoveredValueInr: '₹85,000 / mo' }],
    roleDashboards: ['Head Coach Command', 'Box Owner', 'Athlete App'],
    reportsList: ['Class Utilization %', 'Athlete Retention', 'Coach Hours'],
    mobileApps: { customerApp: ['Log PRs & WOD Scores', 'Reserve Class Spot'], staffApp: ['Coach Roster'], ownerApp: ['Box Revenue'] },
    databaseSchema: [{ tableName: 'crossfit_pr_logs', keyColumns: ['id', 'athlete_id', 'exercise', 'weight_kg'], purpose: 'Tracks athlete personal records' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/crossfit/pr/log', description: 'Logs benchmark PR score' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 8999, enterpriseInrMonthly: 16999 },
    keyMetric: '99.4% Capacity',
    metricLabel: 'WOD classes full with waitlist automation',
    testimonial: { quote: 'Athletes love logging PRs on SyncFyre. Coaches spend zero minutes on manual check-in!', author: 'Elena Rostova', role: 'Head Coach', businessName: 'Iron Vault CrossFit', location: 'Hyderabad', stats: [{ label: 'Capacity', value: '99.4%' }], avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80' },
  },

  yoga_pilates: {
    id: 'yoga_pilates',
    name: 'SyncFyre Pilates',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'Sparkles',
    tagline: 'The Operating System for Reformer Pilates & Yoga Studios',
    badge: 'Boutique Mindful Studio OS',
    marketSizeInr: '₹8,200 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Mindbody', 'Mariana Tek', 'Momence'],
    painPoints: ['Reformer spot booking conflicts', 'Class pack credit expiration disputes', 'Instructor sub request chaos'],
    aiOpportunities: ['AI Reformer Spot Booking Matrix', 'AI Class Pack Auto-Upsell Bot'],
    idealCustomers: { singleOutlet: 'Pilates & Yoga Studios', growingChain: 'Boutique Studio Chains', franchiseEnterprise: 'Franchise Yoga Brands' },
    coreModules: ['Reformer & Mat Spot Picker', 'Class Pack & Credit Expiry Engine', 'Instructor Sub Request Board', 'WhatsApp Booking'],
    specializedIndustryModules: [{ title: 'Reformer Spot Selection Grid', description: 'Clients choose exact Reformer machine #1 - #12.', fieldsOrWorkflow: ['Reformer #', 'Client Name', 'Class Pack Balance'] }],
    aiFeatures: [{ name: 'AI Credit Expiry Auto-Upsell', description: 'Nudges client when 2 credits remain to upgrade to Unlimited.', impact: '+55% Recurring Packs' }],
    automationEngine: [{ trigger: '2 Credits Left', workflowSteps: ['Send WhatsApp Upsell Offer', '1-Tap Upgrade Link'], recoveredValueInr: '₹95,000 / mo' }],
    roleDashboards: ['Studio Director', 'Yoga Instructor', 'Client Portal'],
    reportsList: ['Class Pack Expiration Yield', 'Reformer Occupancy %'],
    mobileApps: { customerApp: ['Select Reformer Spot', 'Book Mat Class'], staffApp: ['Class Roster'], ownerApp: ['Studio MRR'] },
    databaseSchema: [{ tableName: 'class_packs', keyColumns: ['id', 'client_id', 'total_credits', 'remaining_credits'], purpose: 'Tracks boutique class pack credits' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/pilates/spot/reserve', description: 'Reserves specific reformer machine' }],
    pricingInr: { starterInrMonthly: 2999, growthInrMonthly: 5999, proInrMonthly: 9999, enterpriseInrMonthly: 18999 },
    keyMetric: '4.9★ Client Rating',
    metricLabel: 'Sleek Vercel-like booking experience for premium clients',
    testimonial: { quote: 'SyncFyre gives our studio an ultra-sleek experience that our premium reformer clients love.', author: 'Sophia Chen', role: 'Studio Director', businessName: 'Sora Reformer Pilates', location: 'Bengaluru', stats: [{ label: 'App Rating', value: '4.9/5★' }], avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
  },

  boutique_studio: {
    id: 'boutique_studio',
    name: 'SyncFyre HIIT Studio',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'Flame',
    tagline: 'The Operating System for High-Energy HIIT, Boxing & Spin Studios',
    badge: 'High Energy Fitness OS',
    marketSizeInr: '₹7,400 Cr Market (2026)',
    digitalMaturity: 'High',
    competitors: ['Mariana Tek', 'Mindbody', 'ClassPass'],
    painPoints: ['Bike/Treadmill spot booking', 'Heart rate monitor telemetry sync', 'No-shows on peak evening slots'],
    aiOpportunities: ['AI Dynamic Peak Slot Pricing', 'AI Heart Rate Telemetry Sync'],
    idealCustomers: { singleOutlet: 'HIIT & Boxing Studios', growingChain: 'Boutique Fitness Chains', franchiseEnterprise: 'Franchise Spin Brands' },
    coreModules: ['Bike/Treadmill Spot Selection', 'Heart Rate Zone Display', 'Peak Slot Surge Pricing', 'QR Kiosk Check-In'],
    specializedIndustryModules: [{ title: 'Spot Booking Matrix', description: 'Pick specific heavy bag or spin bike.', fieldsOrWorkflow: ['Spot ID', 'Zone Name', 'Rider Name'] }],
    aiFeatures: [{ name: 'AI Dynamic Slot Pricing', description: 'Adjusts drop-in price for peak 7 PM slots.', impact: '+24% Yield per Class' }],
    automationEngine: [{ trigger: 'Peak Slot Booked', workflowSteps: ['Send Calendar Event', 'Push QR Ticket'], recoveredValueInr: '₹80,000 / mo' }],
    roleDashboards: ['Operations Lead', 'HIIT Trainer Screen', 'Client App'],
    reportsList: ['Spot Occupancy Rate', 'Heart Rate Telemetry Engagement'],
    mobileApps: { customerApp: ['Pick Bike/Tread', 'View Calorie Burn'], staffApp: ['Instructor Board'], ownerApp: ['Studio Revenue'] },
    databaseSchema: [{ tableName: 'spot_bookings', keyColumns: ['id', 'spot_number', 'class_id', 'client_id'], purpose: 'Tracks bike & tread spot bookings' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/hiit/spot/book', description: 'Books bike or tread spot' }],
    pricingInr: { starterInrMonthly: 2499, growthInrMonthly: 4999, proInrMonthly: 8999, enterpriseInrMonthly: 16999 },
    keyMetric: '-65% No-Shows',
    metricLabel: 'Spot booking ensures members show up on time',
    testimonial: { quote: 'Spot booking alone reduced our no-shows by 65%. We will never go back to legacy software.', author: 'Devon Miller', role: 'Operations Lead', businessName: 'Pulse Boxing & HIIT', location: 'Mumbai', stats: [{ label: 'No-Shows', value: '-65%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },

  personal_training: {
    id: 'personal_training',
    name: 'SyncFyre Coach',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'UserCheck',
    tagline: 'The Operating System for Personal Training Studios & Performance Facilities',
    badge: '1-on-1 Training OS',
    marketSizeInr: '₹5,800 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['PTDistinction', 'Trainerize', 'Excel Billing'],
    painPoints: ['Unbilled sessions', 'Manual billing spreadsheets', 'Client workout progression tracking'],
    aiOpportunities: ['AI Session Deduction Engine', 'AI Client Retainer Billing Bot'],
    idealCustomers: { singleOutlet: 'PT Studios', growingChain: 'Personal Training Centers', franchiseEnterprise: 'Elite Athletic Facilities' },
    coreModules: ['Retainer Package Deductions', 'Workout & Assessment Logs', 'Trainer Commission Split', 'Client WhatsApp Progress'],
    specializedIndustryModules: [{ title: 'Retainer Session Deductions', description: 'Trainer marks complete; deducts 1 credit automatically.', fieldsOrWorkflow: ['Client Name', 'Sessions Left', 'Deduction Timestamp'] }],
    aiFeatures: [{ name: 'AI Client Progress Alert', description: 'Sends weekly lift progression summary to client on WhatsApp.', impact: '100% Retainer Renewal' }],
    automationEngine: [{ trigger: 'Session Complete', workflowSteps: ['Deduct 1 Session Credit', 'Send Progress WhatsApp'], recoveredValueInr: '₹70,000 / mo' }],
    roleDashboards: ['Lead Coach Command', 'Personal Trainer Screen', 'Client App'],
    reportsList: ['Session Credit Leakage', 'Trainer Payroll'],
    mobileApps: { customerApp: ['View Workout Plan', 'Track Session Credits'], staffApp: ['Log PT Session'], ownerApp: ['PT Revenue'] },
    databaseSchema: [{ tableName: 'pt_sessions', keyColumns: ['id', 'client_id', 'trainer_id', 'status_completed'], purpose: 'Logs completed 1-on-1 sessions' }],
    apiEndpoints: [{ method: 'POST', path: '/api/v1/pt/session/deduct', description: 'Deducts session credit from client retainer' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '0 Unbilled Sessions',
    metricLabel: 'Zero session leakage with automated credit deductions',
    testimonial: { quote: 'I used to spend every Sunday evening on billing spreadsheets. SyncFyre runs it all on autopilot.', author: 'Jaxson Reed', role: 'Founder & Elite Coach', businessName: 'Forge Elite Performance', location: 'Delhi NCR', stats: [{ label: 'Leakage', value: '0' }], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  },

  martial_arts: {
    id: 'martial_arts',
    name: 'SyncFyre Dojang',
    category: 'fitness',
    categoryLabel: 'Fitness & Athletics',
    iconName: 'Shield',
    tagline: 'The Operating System for Martial Arts Academies, BJJ & Taekwondo Dojangs',
    badge: 'Martial Arts & Belt OS',
    marketSizeInr: '₹4,200 Cr Market (2026)',
    digitalMaturity: 'Medium',
    competitors: ['Kicksite', 'Zen Planner', 'PerfectMind'],
    painPoints: ['Belt promotion eligibility tracking', 'Attendance stripe requirements', 'Family membership discounts'],
    aiOpportunities: ['AI Belt Promotion Eligibility Engine', 'AI Attendance Stripe Counter'],
    idealCustomers: { singleOutlet: 'Martial Arts Dojangs', growingChain: 'Academy Chains', franchiseEnterprise: 'National Dojang Franchises' },
    coreModules: ['Belt & Rank Promotion Matrix', 'Attendance Stripe Tracker', 'Family Membership Bundles', 'Gear & Uniform POS'],
    specializedIndustryModules: [{ title: 'Belt Promotion Matrix', description: 'Tracks class attendance required for next belt exam.', fieldsOrWorkflow: ['Student Rank', 'Classes Attended', 'Exam Eligible (Yes/No)'] }],
    aiFeatures: [{ name: 'AI Belt Exam Alert', description: 'Notifies parents when student reaches required attendance for belt testing.', impact: '95% Exam Attendance' }],
    automationEngine: [{ trigger: 'Attendance Threshold Met', workflowSteps: ['Send Belt Exam Invitation WhatsApp', 'Generate Exam Fee Invoice'], recoveredValueInr: '₹60,000 / mo' }],
    roleDashboards: ['Sensei Master Command', 'Instructor Screen', 'Parent App'],
    reportsList: ['Belt Graduation Rates', 'Student Family Retention'],
    mobileApps: { customerApp: ['Track Belt Progress', 'Pay Exam Fee'], staffApp: ['Scan Attendance QR'], ownerApp: ['Dojang Revenue'] },
    databaseSchema: [{ tableName: 'belt_ranks', keyColumns: ['id', 'student_id', 'current_belt', 'classes_count'], purpose: 'Tracks martial arts belt ranks' }],
    apiEndpoints: [{ method: 'GET', path: '/api/v1/martial/belt/eligible', description: 'Returns students eligible for belt exam' }],
    pricingInr: { starterInrMonthly: 1999, growthInrMonthly: 3999, proInrMonthly: 7999, enterpriseInrMonthly: 14999 },
    keyMetric: '95% Belt Exam Rate',
    metricLabel: 'Students stay motivated with clear belt progression milestones',
    testimonial: { quote: 'SyncFyre tracks belt promotions and family plans effortlessly. Our Dojang has grown by 40%!', author: 'Master Vikram Sen', role: 'Head Instructor', businessName: 'Tiger Claw Taekwondo', location: 'Bengaluru', stats: [{ label: 'Growth', value: '+40%' }], avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  },
};
