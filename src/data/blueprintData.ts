export interface BusinessOpportunity {
  id: string;
  number: number;
  title: string;
  category: string;
  capitalBand: 'LOW' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'INFRASTRUCTURE';
  capitalRange: string;
  summary: string;
  revenueModel: string;
  marketPotential: string;
  keyRisk: string;
  targetTimeline: string;
  badge?: string;
}

export interface CategoryData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  opportunitiesCount: number;
  highlightedExamples: string[];
  capitalSpectrum: string;
  colorScheme: {
    bg: string;
    border: string;
    accent: string;
  };
}

export const CHECKOUT_URL = "https://superprofile.bio/vp/2027-business-opportunity";
export const PRODUCT_NAME = "2027 Business Opportunity Blueprint";
export const PRICE_ORIGINAL = 1200;
export const PRICE_CURRENT = 149;
export const DISCOUNT_PERCENTAGE = 87;
export const TOTAL_OPPORTUNITIES = 75;

export const CATEGORIES: CategoryData[] = [
  {
    id: "cat-1",
    name: "Energy & Climate",
    slug: "energy-climate",
    tagline: "India's Clean Transition",
    description: "Capitalize on national net-zero roadmaps, commercial rooftop solar mandates, and industrial power storage requirements.",
    iconName: "Zap",
    opportunitiesCount: 12,
    highlightedExamples: [
      "Solar Farm Business",
      "Solar EPC Business",
      "Solar Panel Manufacturing",
      "Solar Panel Recycling",
      "Battery Energy Storage (BESS)",
      "EV Charging Network",
      "Green Hydrogen Business",
      "Biomass Briquetting & Bio-Coal",
      "Compressed Bio-Gas (CBG) Plants"
    ],
    capitalSpectrum: "₹15 Lakh – ₹25 Crore+",
    colorScheme: {
      bg: "bg-[#123C2E]/5",
      border: "border-[#123C2E]/20",
      accent: "text-[#123C2E]"
    }
  },
  {
    id: "cat-2",
    name: "Land & Infrastructure",
    slug: "land-infrastructure",
    tagline: "Industrial Physical Backbone",
    description: "Real estate and structural logistics driven by manufacturing corridor investments and national expressways expansion.",
    iconName: "Building2",
    opportunitiesCount: 12,
    highlightedExamples: [
      "Land Banking & Strategic Aggregation",
      "Industrial Plot Development",
      "Warehouse Development (Grade A)",
      "Cold Storage Development & Multi-Temp",
      "Logistics Park Business",
      "Data-Centre Land & Power Sourcing",
      "Inland Micro-Fulfillment Nodes",
      "Prefabricated Steel Infrastructure"
    ],
    capitalSpectrum: "₹50 Lakh – ₹100 Crore+",
    colorScheme: {
      bg: "bg-[#B89B63]/10",
      border: "border-[#B89B63]/30",
      accent: "text-[#8C6D37]"
    }
  },
  {
    id: "cat-3",
    name: "Agriculture & Food",
    slug: "agriculture-food",
    tagline: "High-Yield Agritech & Value Add",
    description: "Shift from commodity cultivation to climate-resilient horticulture, contract farming, export crops, and precision cold chain.",
    iconName: "Sprout",
    opportunitiesCount: 13,
    highlightedExamples: [
      "High-Value Specialty Farm Business",
      "Contract Farming Partnerships",
      "Export-Oriented Farming (GI Spices)",
      "Greenhouse / Polyhouse Commercial Units",
      "Hydroponic Commercial Farming",
      "Agri Commodity Trading & Arbitrage",
      "Farm-Gate Processing & Sorting",
      "Freeze-Drying Food Processing"
    ],
    capitalSpectrum: "₹5 Lakh – ₹15 Crore",
    colorScheme: {
      bg: "bg-[#123C2E]/5",
      border: "border-[#123C2E]/20",
      accent: "text-[#123C2E]"
    }
  },
  {
    id: "cat-4",
    name: "Export & Global Trade",
    slug: "export-global-trade",
    tagline: "India to the World",
    description: "Take advantage of global supply chain diversification away from single-source manufacturing and Indian export duty incentives.",
    iconName: "Globe",
    opportunitiesCount: 13,
    highlightedExamples: [
      "India-to-World Export Business",
      "Export Aggregator for SME Clusters",
      "Global Sourcing & Liaison Agency",
      "Commodity Export Trading Desk",
      "International B2B Marketplace Representation",
      "Export Documentation & Compliance Agency",
      "Engineering Castings & Precision Export",
      "Ayurveda & Specialty Cosmetics Export"
    ],
    capitalSpectrum: "₹50,000 – ₹10 Crore",
    colorScheme: {
      bg: "bg-[#B89B63]/10",
      border: "border-[#B89B63]/30",
      accent: "text-[#8C6D37]"
    }
  },
  {
    id: "cat-5",
    name: "Digital & Internet Businesses",
    slug: "digital-internet",
    tagline: "High-Margin Software & Data",
    description: "Software, proprietary research data, micro-SaaS and automated workflows built with minimal capex and global leverage.",
    iconName: "Laptop",
    opportunitiesCount: 12,
    highlightedExamples: [
      "Digital Product Business & Toolkits",
      "B2B Vertical Micro-SaaS for MSMEs",
      "Micro-SaaS Portfolio & Acquisition Studio",
      "Niche Raw Material B2B Marketplace",
      "Paid Data / Industry Research Bureau",
      "Digital Licensing & Proprietary Databases",
      "Workflow Automation Agency",
      "SME Cybersecurity Audit & Compliance"
    ],
    capitalSpectrum: "₹50,000 – ₹25 Lakh",
    colorScheme: {
      bg: "bg-[#123C2E]/5",
      border: "border-[#123C2E]/20",
      accent: "text-[#123C2E]"
    }
  },
  {
    id: "cat-6",
    name: "Advanced Tech & Industrial",
    slug: "advanced-tech-industrial",
    tagline: "High-Precision Manufacturing",
    description: "Deep manufacturing integration including PLI-backed electronics, industrial automation, robotics, and aerospace component machining.",
    iconName: "Cpu",
    opportunitiesCount: 13,
    highlightedExamples: [
      "Edge Data Centre Operations",
      "Semiconductor Supply Chain Sourcing",
      "Electronics Contract Manufacturing (ESDM)",
      "Industrial Robotics & Cobots Integration",
      "Aerospace & Defense Precision Machining",
      "Waste-to-Value & Slag Reprocessing",
      "Battery Recycling & Black Mass Extraction",
      "Medical Diagnostics Consumables Unit"
    ],
    capitalSpectrum: "₹25 Lakh – ₹50 Crore+",
    colorScheme: {
      bg: "bg-[#B89B63]/10",
      border: "border-[#B89B63]/30",
      accent: "text-[#8C6D37]"
    }
  }
];

export const ALL_OPPORTUNITIES: BusinessOpportunity[] = [
  // 1-12: Energy & Climate
  {
    id: "opp-01",
    number: 1,
    title: "Commercial & Industrial Solar EPC",
    category: "Energy & Climate",
    capitalBand: "SMALL",
    capitalRange: "₹10L – ₹25L entry",
    summary: "Turnkey rooftop and ground solar execution for factories, schools, and cold storages cutting commercial grid tariffs.",
    revenueModel: "Project milestone fees + 15-20% gross execution margins + O&M contracts",
    marketPotential: "Exponential growth spurred by escalating DISCOM commercial tariffs across industrial belts.",
    keyRisk: "Vendor credit terms, state DISCOM net-metering approval cycles.",
    targetTimeline: "60–90 days to first installation"
  },
  {
    id: "opp-02",
    number: 2,
    title: "Utility Scale Ground Solar Farm",
    category: "Energy & Climate",
    capitalBand: "INFRASTRUCTURE",
    capitalRange: "₹4 Cr – ₹8 Cr per MW",
    summary: "Developing open-access multi-megawatt solar parks selling power directly to energy-hungry corporate off-takers.",
    revenueModel: "Long-term Power Purchase Agreements (PPAs) at ₹3.80 – ₹4.50 / kWh",
    marketPotential: "Backed by National Solar Mission and corporate ESG net-zero mandates.",
    keyRisk: "Transmission substation interconnect connectivity and land titling clear rights.",
    targetTimeline: "12–18 months"
  },
  {
    id: "opp-03",
    number: 3,
    title: "Solar Panel Recycling & Precious Metal Recovery",
    category: "Energy & Climate",
    capitalBand: "MEDIUM",
    capitalRange: "₹35L – ₹80L",
    summary: "Early-mover recycling hubs recovering silicon, silver paste, aluminum frames, and copper from decommissioned modules.",
    revenueModel: "Disposal fees paid by solar park operators + resale of scrap commodities",
    marketPotential: "First generation of 2010–2015 solar installations reaching 10-15 year replacement curves.",
    keyRisk: "Pollution Control Board (SPCB) hazardous waste clearances.",
    targetTimeline: "6–9 months"
  },
  {
    id: "opp-04",
    number: 4,
    title: "Battery Energy Storage Systems (BESS) Integration",
    category: "Energy & Climate",
    capitalBand: "LARGE",
    capitalRange: "₹1.5 Cr – ₹5 Cr",
    summary: "Installing containerized LFP storage units for peak-tariff shaving and diesel generator replacement in manufacturing units.",
    revenueModel: "Equipment supply margin + savings-sharing performance contract",
    marketPotential: "Mandatory peak hour surcharge regulations driving industrial battery adoption.",
    keyRisk: "Battery cell price fluctuations, thermal management compliance.",
    targetTimeline: "6–12 months"
  },
  {
    id: "opp-05",
    number: 5,
    title: "Commercial EV Fast-Charging Fleet Hub",
    category: "Energy & Climate",
    capitalBand: "MEDIUM",
    capitalRange: "₹25L – ₹65L per hub",
    summary: "Dedicated charging plazas for electric 3-wheelers, delivery vans, and intra-city e-buses on city ring roads.",
    revenueModel: "Per-unit markup (₹14-18/kWh sold vs ₹7/kWh commercial input) + driver amenities",
    marketPotential: "Explosive growth in e-commerce last-mile fleet electrification.",
    keyRisk: "Local transformer load sanction capacity, utilization idle times.",
    targetTimeline: "90–120 days"
  },
  {
    id: "opp-06",
    number: 6,
    title: "Biomass Briquetting & Agricultural Residue Bio-Coal",
    category: "Energy & Climate",
    capitalBand: "SMALL",
    capitalRange: "₹15L – ₹35L",
    summary: "Converting crop stubble, sawdust, and bagasse into high-caloric cylindrical bio-coal briquettes for thermal boilers.",
    revenueModel: "B2B supply contracts to cement, chemical, and paper mills at ₹6,000–₹8,500/ton",
    marketPotential: "Government mandated 5–7% co-firing of biomass pellets in thermal plants.",
    keyRisk: "Raw material seasonality, post-monsoon storage moisture control.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-07",
    number: 7,
    title: "Compressed Bio-Gas (CBG / SATAT Scheme) Plant",
    category: "Energy & Climate",
    capitalBand: "LARGE",
    capitalRange: "₹3 Cr – ₹9 Cr",
    summary: "Anaerobic digester plants processing pressmud or cattle manure into high-purity compressed methane for retail OMCs.",
    revenueModel: "Guaranteed 10-year off-take agreements with IOCL / BPCL / HPCL under SATAT",
    marketPotential: "Massive government import-substitution priority for fossil natural gas.",
    keyRisk: "Consistent feedstock supply chains within a 25km radius.",
    targetTimeline: "12–15 months"
  },
  {
    id: "opp-08",
    number: 8,
    title: "Rooftop Solar RESCO Portfolio Aggregation",
    category: "Energy & Climate",
    capitalBand: "LARGE",
    capitalRange: "₹1 Cr – ₹4 Cr initial pool",
    summary: "Financing and owning solar arrays on institutional rooftops, selling power to clients at 20% discount to grid rates.",
    revenueModel: "Predictable annuity cash flow over 20-year operational contracts",
    marketPotential: "High institutional creditworthiness clients eager for zero upfront capex.",
    keyRisk: "Counterparty payment discipline, long-term asset security.",
    targetTimeline: "6 months"
  },
  {
    id: "opp-09",
    number: 9,
    title: "Industrial Micro-Grid & Thermal Energy Auditing",
    category: "Energy & Climate",
    capitalBand: "LOW",
    capitalRange: "₹1.5L – ₹4L",
    summary: "Consulting and automated telemetry service mapping electrical wastage, harmonics, and heat leaks for factories.",
    revenueModel: "Audit fees (₹75k–₹2.5L) + 15% success fee on first-year verified power bill savings",
    marketPotential: "Strict PAT (Perform, Achieve and Trade) energy norms in designated sectors.",
    keyRisk: "Client delays in implementing recommended capex retrofits.",
    targetTimeline: "30 days"
  },
  {
    id: "opp-10",
    number: 10,
    title: "Solar Module Cleaning Automation & Drones",
    category: "Energy & Climate",
    capitalBand: "LOW",
    capitalRange: "₹2.5L – ₹6L",
    summary: "Waterless robotic and tethered drone cleaning systems boosting solar park yield in dusty arid regions.",
    revenueModel: "Monthly per-megawatt service retainer contracts (₹12k–₹25k/MW/month)",
    marketPotential: "Soiling causes up to 20% generation losses in arid Rajasthan/Gujarat plants.",
    keyRisk: "Hardware durability in extreme desert heat.",
    targetTimeline: "45 days"
  },
  {
    id: "opp-11",
    number: 11,
    title: "Carbon Credit Aggregator for Agroforestry & MSMEs",
    category: "Energy & Climate",
    capitalBand: "LOW",
    capitalRange: "₹1L – ₹4L",
    summary: "Pooling smallholder tree plantations and factory energy efficiency improvements into verified carbon credit registries.",
    revenueModel: "20–30% brokerage fee upon international registry credit issuance and sale",
    marketPotential: "Surging demand for Article 6 compliant Voluntary Carbon Market (VCM) offsets.",
    keyRisk: "Methodology baseline approvals by Verra / Gold Standard.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-12",
    number: 12,
    title: "Small-Scale Green Hydrogen Demonstration Electrolyzers",
    category: "Energy & Climate",
    capitalBand: "LARGE",
    capitalRange: "₹2 Cr – ₹6 Cr",
    summary: "On-site PEM/Alkaline electrolyzer units producing hydrogen fuel gas for annealing furnaces and glass manufacturing.",
    revenueModel: "Hydrogen-as-a-service equipment lease + consumable stack replacement",
    marketPotential: "Hard-to-abate heavy industries seeking carbon footprint reduction.",
    keyRisk: "High initial capital cost of imported membrane electrode assemblies.",
    targetTimeline: "12–18 months"
  },

  // 13-24: Land & Infrastructure
  {
    id: "opp-13",
    number: 13,
    title: "Industrial Plot Subdivision & Gated Micro-Park",
    category: "Land & Infrastructure",
    capitalBand: "LARGE",
    capitalRange: "₹1.5 Cr – ₹6 Cr",
    summary: "Acquiring 2–5 acres of non-agricultural zoned land near highways, laying power/roads, and sub-leasing 5,000 sq ft plots.",
    revenueModel: "Plot lease/sale arbitrage + monthly common area maintenance (CAM) charges",
    marketPotential: "MSME fabricators and packaging firms priced out of state industrial authority plots.",
    keyRisk: "Title diligence, local town planning master plan conversion clearances.",
    targetTimeline: "9–15 months"
  },
  {
    id: "opp-14",
    number: 14,
    title: "Grade-A Pre-Engineered Logistics Warehouse",
    category: "Land & Infrastructure",
    capitalBand: "LARGE",
    capitalRange: "₹2 Cr – ₹8 Cr",
    summary: "12-meter clear height PEB warehouse with laser screed flooring, dock levelers, and FM Global fire safety standard.",
    revenueModel: "Long-term institutional leases at ₹22–₹34 per sq ft/month to 3PL logistics giants",
    marketPotential: "E-commerce, FMCG, and automotive giants consolidating into Grade-A hubs.",
    keyRisk: "Pre-lease anchor tenant commitments before construction capex.",
    targetTimeline: "9–12 months"
  },
  {
    id: "opp-15",
    number: 15,
    title: "Multi-Commodity Cold Storage & Controlled Atmosphere",
    category: "Land & Infrastructure",
    capitalBand: "MEDIUM",
    capitalRange: "₹75L – ₹2 Cr",
    summary: "Ammonia-chilled palletized rooms with variable humidity control for apples, potatoes, seed stock, and pharmaceuticals.",
    revenueModel: "Per-bag seasonal rental (₹180–₹260/bag/season) + commodity pledge financing facilitation",
    marketPotential: "Post-harvest loss reduction subsidies under Mission for Integrated Development of Horticulture (MIDH).",
    keyRisk: "Power grid continuity; requires automatic backup diesel / solar integration.",
    targetTimeline: "8–10 months"
  },
  {
    id: "opp-16",
    number: 16,
    title: "Data Centre Ready Land & Power Aggregation",
    category: "Land & Infrastructure",
    capitalBand: "INFRASTRUCTURE",
    capitalRange: "₹5 Cr – ₹25 Cr+",
    summary: "Pre-securing dual-substation power easements, fiber optic confluence points, and water clearances for hyperscale operators.",
    revenueModel: "Strategic premium sale or joint development with data centre REITs",
    marketPotential: "India's booming digital economy driving massive cloud and AI compute clusters.",
    keyRisk: "Long approval gestation with state electricity transmission utilities.",
    targetTimeline: "12–24 months"
  },
  {
    id: "opp-17",
    number: 17,
    title: "Highway Commercial EV Way-Station & Truck Stop",
    category: "Land & Infrastructure",
    capitalBand: "MEDIUM",
    capitalRange: "₹40L – ₹1.2 Cr",
    summary: "1-acre roadside complex combining megawatt EV chargers, branded QSR dining, clean amenities, and truck rest quarters.",
    revenueModel: "Restaurant lease rentals + EV charging revenue + convenience store sales",
    marketPotential: "Rapid expansion of Bharatmala expressway corridors requiring modern waypoints.",
    keyRisk: "Access permission (NOC) from National Highways Authority of India (NHAI).",
    targetTimeline: "6–9 months"
  },
  {
    id: "opp-18",
    number: 18,
    title: "Urban Micro-Fulfillment Dark Store Network",
    category: "Land & Infrastructure",
    capitalBand: "SMALL",
    capitalRange: "₹8L – ₹22L per store",
    summary: "Converting low-rent basement or inner-city commercial spaces into mechanized hubs leased to 10-minute delivery brands.",
    revenueModel: "Triple-net master lease markup + optional inventory racking & sorting services",
    marketPotential: "Hyperlocal grocery and quick-commerce brands expanding aggressively into Tier 1 and Tier 2 cities.",
    keyRisk: "Short lease tenures, municipal zoning challenges.",
    targetTimeline: "45 days"
  },
  {
    id: "opp-19",
    number: 19,
    title: "Prefabricated Light Gauge Steel Structure Manufacturing",
    category: "Land & Infrastructure",
    capitalBand: "MEDIUM",
    capitalRange: "₹35L – ₹90L",
    summary: "Computer-controlled roll forming machines making lightweight galvanized steel frames for rapid modular site offices and villas.",
    revenueModel: "Turnkey structural supply at ₹450–₹750/sq ft with 25% gross margins",
    marketPotential: "Speed demands in commercial construction driving pre-fab alternatives to RCC.",
    keyRisk: "Fluctuations in primary steel coils pricing (HR/GI coils).",
    targetTimeline: "90–120 days"
  },
  {
    id: "opp-20",
    number: 20,
    title: "Industrial Wastewater Zero Liquid Discharge (ZLD) Setup",
    category: "Land & Infrastructure",
    capitalBand: "LARGE",
    capitalRange: "₹80L – ₹2.5 Cr",
    summary: "Designing and operating reverse osmosis and multi-effect evaporator plants for textile dye and chemical clusters.",
    revenueModel: "Per-kilolitre effluent treatment tariff + recovered salt and mineral sales",
    marketPotential: "Strict NGT (National Green Tribunal) environmental enforcement.",
    keyRisk: "Membrane fouling costs, toxic waste sludge disposal licensing.",
    targetTimeline: "6–8 months"
  },
  {
    id: "opp-21",
    number: 21,
    title: "Container Freight Station (CFS) Logistics Node",
    category: "Land & Infrastructure",
    capitalBand: "LARGE",
    capitalRange: "₹1.8 Cr – ₹6 Cr",
    summary: "Bonded yard facility offering customs clearance, container stuffing, and temporary bonded warehousing near rail terminals.",
    revenueModel: "Ground rent, container handling equipment fees, and customs documentation charges",
    marketPotential: "Inland containerized export volume expanding rapidly under PM Gati Shakti.",
    keyRisk: "Customs commissionerate licensing hurdles.",
    targetTimeline: "12 months"
  },
  {
    id: "opp-22",
    number: 22,
    title: "Rural Agro-Logistics Collection & Pre-Cooling Centre",
    category: "Land & Infrastructure",
    capitalBand: "SMALL",
    capitalRange: "₹12L – ₹28L",
    summary: "First-mile village hubs with rapid pre-cooling chambers removing field heat from freshly picked berries and vegetables.",
    revenueModel: "Service charge per crate + consolidated freight margin to metropolitan mandis",
    marketPotential: "Farmers seeking 15–30% higher gate prices by preventing immediate spoilage.",
    keyRisk: "Seasonal crop cycles and reliance on local farmer aggregation trust.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-23",
    number: 23,
    title: "Self-Storage Facility for Urban Dwellers & MSMEs",
    category: "Land & Infrastructure",
    capitalBand: "SMALL",
    capitalRange: "₹15L – ₹40L",
    summary: "Secure, climate-controlled steel locker units for apartment owners, seasonal goods, and small e-commerce merchants.",
    revenueModel: "Monthly recurring locker subscription (₹1,500 – ₹7,500/month based on volume)",
    marketPotential: "Shrinking metropolitan residential apartment sizes in Bengaluru, Mumbai, NCR.",
    keyRisk: "Customer acquisition cost, initial real estate lease terms.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-24",
    number: 24,
    title: "Specialized Temperature-Controlled Chemical Storage",
    category: "Land & Infrastructure",
    capitalBand: "LARGE",
    capitalRange: "₹1.2 Cr – ₹3.5 Cr",
    summary: "Fire-rated, bunded storage yards with inert gas fire suppression designed for active pharmaceutical ingredients (APIs).",
    revenueModel: "Premium pallet storage rates (3x standard ambient warehouse rates)",
    marketPotential: "India's burgeoning pharma export sector requiring WHO-GMP and FDA compliance.",
    keyRisk: "Explosives and PESO (Petroleum and Explosives Safety Organisation) statutory approvals.",
    targetTimeline: "9–12 months"
  },

  // 25-37: Agriculture & Food
  {
    id: "opp-25",
    number: 25,
    title: "High-Density Exotic Fruit Cultivation (Dragon Fruit / Avocado)",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹6L – ₹18L per acre",
    summary: "RCC trellis supported orchards with drip fertigation producing high-margin premium fruits for urban retail chains.",
    revenueModel: "Direct farm sales at ₹100–₹220/kg yielding ₹5L–₹9L net profit per acre annually",
    marketPotential: "Import substitution replacing expensive imports from Vietnam and South America.",
    keyRisk: "Gestation period (18–24 months to commercial harvest).",
    targetTimeline: "18 months to break-even"
  },
  {
    id: "opp-26",
    number: 26,
    title: "Climate-Controlled Polyhouse Commercial Horticulture",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹12L – ₹30L (post 50% NHB subsidy)",
    summary: "Galvanized tubular greenhouses growing seedless cucumbers, colored bell peppers, and Dutch roses with automated micro-climate.",
    revenueModel: "Off-season premium pricing (2x to 3x normal open field market prices)",
    marketPotential: "Substantial subsidies from National Horticulture Board (NHB) reducing initial capex.",
    keyRisk: "Poly-film storm damage, fungal blight control in closed humidity.",
    targetTimeline: "4–6 months"
  },
  {
    id: "opp-27",
    number: 27,
    title: "Commercial Hydroponic Leafy Greens Facility",
    category: "Agriculture & Food",
    capitalBand: "MEDIUM",
    capitalRange: "₹25L – ₹60L",
    summary: "Nutrient Film Technique (NFT) and deep water culture growing pesticide-free kale, romaine, and basil within 40km of metros.",
    revenueModel: "B2B daily delivery to gourmet restaurants, luxury hotels, and subscription boxes",
    marketPotential: "Exploding urban consumer awareness of pesticide residue in standard produce.",
    keyRisk: "Consistent water chilling in peak summer months, nutrient balancing expertise.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-28",
    number: 28,
    title: "Corporate Contract Farming Aggregator for Seed Companies",
    category: "Agriculture & Food",
    capitalBand: "LOW",
    capitalRange: "₹2L – ₹5L",
    summary: "Organizing 200+ farmers into seed multiplication clusters for hybrid corn, mustard, and sunflower on behalf of multinational seed majors.",
    revenueModel: "Management facilitation commission (₹2,500 – ₹4,000 per acre handled)",
    marketPotential: "Seed MNCs require rigorous isolation distances and reliable cluster coordinators.",
    keyRisk: "Hailstorm / unseasonal rain crop failures impacting germination rates.",
    targetTimeline: "45 days"
  },
  {
    id: "opp-29",
    number: 29,
    title: "Export-Oriented GI-Tagged Spice Cleaning & Sterilization",
    category: "Agriculture & Food",
    capitalBand: "MEDIUM",
    capitalRange: "₹30L – ₹75L",
    summary: "Ethylene Oxide (ETO) and steam sterilization unit cleaning Wayanad pepper, Guntur chili, and Alleppey cardamom for overseas markets.",
    revenueModel: "Job-work processing charges (₹12–₹22/kg) + direct export arbitrage",
    marketPotential: "Strict EU and US FDA aflatoxin and pesticide residue tolerances driving professional processing.",
    keyRisk: "Volatile international freight container rates.",
    targetTimeline: "4–6 months"
  },
  {
    id: "opp-30",
    number: 30,
    title: "Millets & Ancient Grains Value-Addition Processing",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹8L – ₹22L",
    summary: "De-hulling, grading, and extrusion line producing gluten-free millet pasta, flours, and flakes for modern retail.",
    revenueModel: "Branded or white-label retail products selling at ₹180–₹350/kg with 40% margin",
    marketPotential: "Global Year of Millets momentum and diabetic-friendly dietary trends in India.",
    keyRisk: "Shelf-life rancidity control due to natural fat content in pearl millets.",
    targetTimeline: "60–90 days"
  },
  {
    id: "opp-31",
    number: 31,
    title: "Commercial Industrial Freeze-Drying Food Unit",
    category: "Agriculture & Food",
    capitalBand: "LARGE",
    capitalRange: "₹1.1 Cr – ₹3 Cr",
    summary: "Vacuum sublimation plant preserving texture, nutrients, and flavor of strawberries, mango chunks, and ready-to-eat meals.",
    revenueModel: "Contract freeze-drying fees (₹350–₹600/kg input) + export of freeze-dried snacks",
    marketPotential: "Astronaut, camping, and premium healthy snacking market growth.",
    keyRisk: "High continuous power consumption, vacuum chamber maintenance.",
    targetTimeline: "6–9 months"
  },
  {
    id: "opp-32",
    number: 32,
    title: "High-Protein Fermented Cattle Silage Baling Unit",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹10L – ₹25L",
    summary: "Baling chopped green corn fodder in anaerobic stretch wrap, providing 12-month green fodder security for commercial dairy farms.",
    revenueModel: "Per-bale sales (₹450–₹700 per 100kg bale) at 22% net margin",
    marketPotential: "Severe summer green fodder shortages causing dairy yields to crash 30-40%.",
    keyRisk: "Moisture monitoring to prevent toxic mold development.",
    targetTimeline: "45 days"
  },
  {
    id: "opp-33",
    number: 33,
    title: "Specialized Mycelium & Cordyceps / Shiitake Indoor Farm",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹7L – ₹18L",
    summary: "Sterile lab and climate-controlled fruiting chambers cultivating medicinal Cordyceps Militaris and gourmet oyster/shiitake mushrooms.",
    revenueModel: "Dried Cordyceps retail at ₹1.2L – ₹2.5L / kg to nutraceutical formulators",
    marketPotential: "Booming adaptogenic health drink and longevity supplement market.",
    keyRisk: "Contamination in mother culture inoculation.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-34",
    number: 34,
    title: "Organic Bio-Fertilizer & Microbial Consortia Formulation",
    category: "Agriculture & Food",
    capitalBand: "LOW",
    capitalRange: "₹3L – ₹8L",
    summary: "Bioreactor culturing Rhizobium, Azotobacter, and Mycorrhiza liquid bio-fertilizers reducing chemical urea dependence.",
    revenueModel: "Direct-to-farmer distributor packaging with 50% gross formulation margin",
    marketPotential: "National Mission on Natural Farming promoting organic input certification.",
    keyRisk: "Viable bacterial spore count maintenance during summer transport.",
    targetTimeline: "30–60 days"
  },
  {
    id: "opp-35",
    number: 35,
    title: "Mobile Reefer Transport & Fruit Ripening Chambers",
    category: "Agriculture & Food",
    capitalBand: "MEDIUM",
    capitalRange: "₹35L – ₹80L",
    summary: "Ethylene gas automated ripening chambers for bananas and papayas paired with multi-temp insulated delivery vans.",
    revenueModel: "Ripening fee per crate (₹25–₹45/crate) + haulage contracts",
    marketPotential: "FSSAI ban on carcinogenic calcium carbide ripening forcing adoption of scientific chambers.",
    keyRisk: "Seasonal gluts causing spot market crate price drops.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-36",
    number: 36,
    title: "Agri-Commodity Electronic Arbitrage & Hedging Desk",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹10L – ₹30L working capital",
    summary: "Exploiting spot-future price spreads on NCDEX and spatial mandi price variations across soy, chana, and mustard.",
    revenueModel: "Basis arbitrage spread capture (1.5%–3.5% monthly return on rotating capital)",
    marketPotential: "Increased market transparency under electronic National Agriculture Market (e-NAM).",
    keyRisk: "Storage quality degradation, government sudden export curbs / stocking limits.",
    targetTimeline: "Immediate"
  },
  {
    id: "opp-37",
    number: 37,
    title: "Cold-Pressed Indigenous Oil Extraction & Direct Retail",
    category: "Agriculture & Food",
    capitalBand: "SMALL",
    capitalRange: "₹5L – ₹14L",
    summary: "Traditional wood-pressed (Ghani / Chekku) extraction of mustard, groundnut, and sesame oil packaged in glass bottles.",
    revenueModel: "Premium retail sales at ₹350–₹600/litre with 35% margin",
    marketPotential: "Consumers actively replacing refined solvent-extracted oils with pure cold-pressed varieties.",
    keyRisk: "Oilcake (by-product) disposal pricing, seed raw material procurement quality.",
    targetTimeline: "45 days"
  },

  // 38-50: Export & Global Trade
  {
    id: "opp-38",
    number: 38,
    title: "India-to-World High-Margin Hardware & Tool Export",
    category: "Export & Global Trade",
    capitalBand: "SMALL",
    capitalRange: "₹5L – ₹18L",
    summary: "Sourcing architectural brass hardware, drop-forged hand tools from Jalandhar/Aligarh and exporting to US/Europe hardware distributors.",
    revenueModel: "Export sales margin (30–45%) + RoDTEP government duty drawback benefits",
    marketPotential: "US and European buyers actively seeking alternatives to Chinese hardware factories.",
    keyRisk: "Dimensional tolerance rejections, foreign currency exchange fluctuation.",
    targetTimeline: "60–90 days"
  },
  {
    id: "opp-39",
    number: 39,
    title: "Cluster Export Aggregator for Tier-2 Artisans & MSMEs",
    category: "Export & Global Trade",
    capitalBand: "LOW",
    capitalRange: "₹1.5L – ₹5L",
    summary: "Aggregating ceramic, brass, wooden, or textile products from small workshops, handling barcode packaging and export paperwork.",
    revenueModel: "15–25% aggregation markup on FOB export order value",
    marketPotential: "Small producers lack English fluency, export licenses (IEC), and international payment knowledge.",
    keyRisk: "Consignment production delay by unorganized village workshops.",
    targetTimeline: "45 days"
  },
  {
    id: "opp-40",
    number: 40,
    title: "Global Procurement & India Sourcing Liaison Agency",
    category: "Export & Global Trade",
    capitalBand: "LOW",
    capitalRange: "₹50,000 – ₹2L",
    summary: "Acting as on-the-ground eyes and ears for foreign importers: conducting factory audits, quality pre-shipment inspections, and negotiation.",
    revenueModel: "Monthly retainer ($1,500 – $4,000/client) + 3–5% commission on sourced shipment volume",
    marketPotential: "Global procurement managers wanting local Indian verification before releasing multimillion wire transfers.",
    keyRisk: "Client bypassing agent after first direct factory introduction.",
    targetTimeline: "30 days"
  },
  {
    id: "opp-41",
    number: 41,
    title: "Bulk Non-Basmati Rice & Grain Export Desk",
    category: "Export & Global Trade",
    capitalBand: "MEDIUM",
    capitalRange: "₹25L – ₹80L LC backed",
    summary: "Executing back-to-back Letter of Credit (LC) container and break-bulk shipments of parboiled rice to Africa and the Middle East.",
    revenueModel: "Trading spread ($12–$25 per metric ton) on high volume turnover",
    marketPotential: "India remains the world's largest rice exporter with deep cost advantages.",
    keyRisk: "Sudden export duty hikes or minimum export price (MEP) notifications by DGFT.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-42",
    number: 42,
    title: "Cross-Border B2B Marketplace Channel Representation",
    category: "Export & Global Trade",
    capitalBand: "LOW",
    capitalRange: "₹1L – ₹3L",
    summary: "Managing storefronts, RFQs, and logistics fulfillment on Alibaba, Amazon Global, and TradeKey for traditional Indian manufacturers.",
    revenueModel: "Setup fee (₹50k/catalog) + monthly retainer + 5% commission on closed export invoices",
    marketPotential: "Over 500,000 Indian MSMEs have zero international digital footprint.",
    keyRisk: "Slow decision-making culture of legacy factory owners.",
    targetTimeline: "30 days"
  },
  {
    id: "opp-43",
    number: 43,
    title: "Export Documentation, Customs & Regulatory Compliance Agency",
    category: "Export & Global Trade",
    capitalBand: "LOW",
    capitalRange: "₹50,000 – ₹1.5L",
    summary: "Filing Certificate of Origin (COO), Phyto-sanitary certificates, Bill of Lading drafts, and export drawback claims.",
    revenueModel: "Per-shipment documentation fee (₹2,500 – ₹8,000 per bill of entry/shipping bill)",
    marketPotential: "Complex new FTA documentation rules require specialized external processing.",
    keyRisk: "Document typo liabilities resulting in customs port demurrage.",
    targetTimeline: "Immediate"
  },
  {
    id: "opp-44",
    number: 44,
    title: "Private-Label Ayurveda & Herbal Extracts Export",
    category: "Export & Global Trade",
    capitalBand: "SMALL",
    capitalRange: "₹8L – ₹20L",
    summary: "Formulating standardized Ashwagandha, Curcumin, and Moringa capsules for international D2C supplement brands.",
    revenueModel: "Contract manufacturing margin (40–60%) with pre-paid export wire deposits",
    marketPotential: "Global wellness market boom with India recognized as the botanical motherland.",
    keyRisk: "Heavy metal testing and microbiological contamination thresholds in Western markets.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-45",
    number: 45,
    title: "Engineering Castings, Forgings & Precision Flange Export",
    category: "Export & Global Trade",
    capitalBand: "MEDIUM",
    capitalRange: "₹30L – ₹90L",
    summary: "Contracting ductile iron foundries in Rajkot/Coimbatore to machine oil & gas valves and automotive flanges for Germany/USA.",
    revenueModel: "30% gross margin on precision engineered parts",
    marketPotential: "European energy transition and machinery rebuilds seeking cost-effective forging suppliers.",
    keyRisk: "Strict dimensional reject penalties under ISO/TS standards.",
    targetTimeline: "4–6 months"
  },
  {
    id: "opp-46",
    number: 46,
    title: "Biodegradable Bagasse & Areca Leaf Tableware Export",
    category: "Export & Global Trade",
    capitalBand: "SMALL",
    capitalRange: "₹6L – ₹16L",
    summary: "Exporting sugarcane pulp takeaway containers and areca palm dinnerware to single-use plastic ban regions (UK, EU, Australia).",
    revenueModel: "Export margin (25–35%) on 40-foot HQ container loads",
    marketPotential: "Global plastic bans creating mandatory procurement shifts among food service packaging buyers.",
    keyRisk: "Mold prevention during 30-day ocean transit humidity.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-47",
    number: 47,
    title: "Marine & Vannamei Shrimp IQF Export Processing",
    category: "Export & Global Trade",
    capitalBand: "LARGE",
    capitalRange: "₹1.5 Cr – ₹4.5 Cr",
    summary: "Individually Quick Frozen (IQF) blast freezing of graded black tiger and vannamei shrimp for Japanese and US retail packs.",
    revenueModel: "Export sales margin ($1.20–$2.40/kg) on seasonal harvests",
    marketPotential: "India is among top seafood exporters globally with deep processing capacity.",
    keyRisk: "Antibiotic residue checks at European discharge ports.",
    targetTimeline: "6–9 months"
  },
  {
    id: "opp-48",
    number: 48,
    title: "Textile Technical Yarns & Geo-Textiles Export Desk",
    category: "Export & Global Trade",
    capitalBand: "MEDIUM",
    capitalRange: "₹20L – ₹55L",
    summary: "Supply of woven polypropylene slit-film geo-textiles used in road soil stabilization across African infrastructure projects.",
    revenueModel: "Project supply contract margin (18–25%) + export incentives",
    marketPotential: "Surging highway and civil infrastructure projects across developing nations.",
    keyRisk: "Tensile strength failure under ASTM international testing.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-49",
    number: 49,
    title: "Fine Leather Goods & Safety Work Gloves Export",
    category: "Export & Global Trade",
    capitalBand: "SMALL",
    capitalRange: "₹8L – ₹22L",
    summary: "Manufacturing industrial split-cowhide welding gloves and protective leather gear for European safety distributors.",
    revenueModel: "High volume container supply with steady 20% operating margin",
    marketPotential: "Mandatory workplace safety laws in Europe requiring certified PPE supplies.",
    keyRisk: "Tannery REACH chemical compliance certification.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-50",
    number: 50,
    title: "Precious Gemstone Cutting & Custom Jewellery Export",
    category: "Export & Global Trade",
    capitalBand: "MEDIUM",
    capitalRange: "₹15L – ₹50L",
    summary: "Precision laser lapidary cutting of emeralds, tanzanite, and lab-grown diamonds exported to independent US jewellery designers.",
    revenueModel: "Value-add cut polish fee + direct retail sales through custom B2B portals",
    marketPotential: "Jaipur and Surat are global hubs for gemstone craftsmanship with unmatched labor precision.",
    keyRisk: "Security, insurance, and high working capital locked in precious rough stone inventory.",
    targetTimeline: "45 days"
  },

  // 51-62: Digital & Internet Businesses
  {
    id: "opp-51",
    number: 51,
    title: "Specialized Digital Research & Industry Data Publishing",
    category: "Digital & Internet Businesses",
    capitalBand: "LOW",
    capitalRange: "₹50,000 – ₹1.5L",
    summary: "Publishing deep sector guides, regulatory databases, and operational playbooks sold as digital PDF and data packages.",
    revenueModel: "High-volume direct digital sales (₹149 – ₹999) + premium corporate licenses (₹10k–₹50k)",
    marketPotential: "Professionals and entrepreneurs demand structured, actionable Indian market research over generic blog posts.",
    keyRisk: "Content piracy, requiring robust digital delivery and watermarking.",
    targetTimeline: "15–30 days"
  },
  {
    id: "opp-52",
    number: 52,
    title: "Vertical B2B Micro-SaaS for Indian MSME Subcontractors",
    category: "Digital & Internet Businesses",
    capitalBand: "SMALL",
    capitalRange: "₹3L – ₹10L",
    summary: "Lightweight mobile-first web app handling job-card tracking, machine downtime logging, and GST e-invoicing for CNC machine shops.",
    revenueModel: "Monthly recurring subscription (₹999 – ₹2,999/month per factory)",
    marketPotential: "Over 2 million small manufacturing units currently manage complex job orders on paper registers.",
    keyRisk: "High initial churn if onboarding is not dead simple for non-tech shopfloor managers.",
    targetTimeline: "60–90 days"
  },
  {
    id: "opp-53",
    number: 53,
    title: "Micro-SaaS Portfolio & Acquisition Studio",
    category: "Digital & Internet Businesses",
    capitalBand: "SMALL",
    capitalRange: "₹5L – ₹20L",
    summary: "Acquiring or building 3–5 niche utility software tools (Chrome extensions, Shopify plugins, API wrappers) generating steady recurring revenue.",
    revenueModel: "Consolidated ARR cash flow + cross-selling customer lists",
    marketPotential: "High profit margins (70–85%) with remote automated operations.",
    keyRisk: "Platform dependency (e.g. Google Chrome or Shopify algorithm/policy changes).",
    targetTimeline: "90 days"
  },
  {
    id: "opp-54",
    number: 54,
    title: "Niche Industrial Surplus Material B2B Exchange",
    category: "Digital & Internet Businesses",
    capitalBand: "SMALL",
    capitalRange: "₹2L – ₹6L",
    summary: "Private digital board connecting chemical, plastic, and metal manufacturers with verified buyers for surplus off-spec raw materials.",
    revenueModel: "3–6% transaction escrow success fee on closed deals",
    marketPotential: "Billions of rupees in dead inventory sitting idle in factory warehouses across industrial corridors.",
    keyRisk: "Ensuring material quality matches buyer expectation before fund release.",
    targetTimeline: "45 days"
  },
  {
    id: "opp-55",
    number: 55,
    title: "Paid Industry Intelligence & Tender Notification Bureau",
    category: "Digital & Internet Businesses",
    capitalBand: "LOW",
    capitalRange: "₹75,000 – ₹2L",
    summary: "Automated scraper and curation service alerting infrastructure subcontractors to relevant GeM and state tender notices 48 hours early.",
    revenueModel: "Tiered annual subscription (₹5,000 – ₹25,000/year per company)",
    marketPotential: "Subcontractors miss multi-crore project bidding deadlines due to fragmented state portal interfaces.",
    keyRisk: "Portal captcha/scraping updates requiring maintenance.",
    targetTimeline: "30 days"
  },
  {
    id: "opp-56",
    number: 56,
    title: "Digital Workflow Automation Agency for Regional Businesses",
    category: "Digital & Internet Businesses",
    capitalBand: "LOW",
    capitalRange: "₹50,000 – ₹1.5L",
    summary: "Implementing WhatsApp API order confirmation, automated payment reconciliation, and CRM pipelines for traditional distributors.",
    revenueModel: "Setup fee (₹30k–₹1.2L) + monthly software maintenance retainer (₹10k–₹35k/month)",
    marketPotential: "Traditional Indian business owners eager to eliminate manual clerical paperwork errors.",
    keyRisk: "Scope creep on custom integration requests.",
    targetTimeline: "15–30 days"
  },
  {
    id: "opp-57",
    number: 57,
    title: "SME Cybersecurity Audit & Cyber Insurance Readiness",
    category: "Digital & Internet Businesses",
    capitalBand: "LOW",
    capitalRange: "₹1L – ₹3L",
    summary: "Penetration testing, employee phishing drills, and CERT-In compliance documentation for mid-sized financial intermediaries and tech vendors.",
    revenueModel: "Annual audit retainer (₹60k – ₹2.5L per client) + cyber insurance referral fee",
    marketPotential: "Mandatory CERT-In reporting rules and enterprise vendor security assessments.",
    keyRisk: "High technical skill requirement to deliver legitimate vulnerability assessments.",
    targetTimeline: "30 days"
  },
  {
    id: "opp-58",
    number: 58,
    title: "Compliance Management Platform for State Labor & Factory Laws",
    category: "Digital & Internet Businesses",
    capitalBand: "SMALL",
    capitalRange: "₹4L – ₹12L",
    summary: "Cloud register maintaining EPF, ESI, Factory Act returns, and automated calendar reminders for HR teams across multiple states.",
    revenueModel: "Per-employee per-month SaaS fee (₹15–₹35/employee/month)",
    marketPotential: "Each Indian state has distinct labor laws; multi-location firms struggle with compliance penalties.",
    keyRisk: "Keeping up with frequent state gazette notification amendments.",
    targetTimeline: "60–90 days"
  },
  {
    id: "opp-59",
    number: 59,
    title: "Proprietary Geospatial & Demographic Data Licensing",
    category: "Digital & Internet Businesses",
    capitalBand: "SMALL",
    capitalRange: "₹2.5L – ₹7L",
    summary: "Mapping footfall patterns, income clusters, and competitor retail density to license to quick-service restaurant (QSR) brands for store selection.",
    revenueModel: "Per-city license ($2,000 – $6,000) or annual enterprise API access",
    marketPotential: "Rapid retail store rollout by national retail chains requiring data-driven site selection.",
    keyRisk: "Data accuracy validation across rapidly evolving Tier 2 city suburbs.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-60",
    number: 60,
    title: "AI-Assisted Contract Redlining & Legal Due Diligence Tool",
    category: "Digital & Internet Businesses",
    capitalBand: "SMALL",
    capitalRange: "₹3L – ₹9L",
    summary: "Fine-tuned model trained on Indian Contract Act and commercial arbitration cases flagging indemnity traps in vendor agreements.",
    revenueModel: "Usage-based credit packs + law firm enterprise seats (₹5,000/seat/month)",
    marketPotential: "Founders and procurement heads needing fast preliminary contract review before legal counsel.",
    keyRisk: "Liability disclaimers and hallucinations on specialized legal clauses.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-61",
    number: 61,
    title: "Fractional CFO & Virtual Board Advisory Marketplace",
    category: "Digital & Internet Businesses",
    capitalBand: "LOW",
    capitalRange: "₹75,000 – ₹2L",
    summary: "Matching experienced chartered accountants and retired corporate treasurers with bootstrapped companies seeking investor readiness.",
    revenueModel: "15% platform commission on monthly advisory billings (₹35k–₹1.5L/month/advisor)",
    marketPotential: "Early-stage companies needing CFO rigor without paying ₹35L+ full-time salaries.",
    keyRisk: "Matching quality and advisor time commitment consistency.",
    targetTimeline: "30 days"
  },
  {
    id: "opp-62",
    number: 62,
    title: "Regional Language Technical Upskilling Video Micro-Courses",
    category: "Digital & Internet Businesses",
    capitalBand: "LOW",
    capitalRange: "₹50,000 – ₹1.5L",
    summary: "Practical training modules in Hindi, Tamil, Telugu, and Marathi covering PLC programming, AutoCAD drafting, and solar installation.",
    revenueModel: "Course sales (₹499–₹1,999) + recruitment placement bounty from industrial employers",
    marketPotential: "Huge unmet demand for practical vernacular engineering skills outside Tier 1 metros.",
    keyRisk: "Course piracy; requires watermarked video player hosting.",
    targetTimeline: "30 days"
  },

  // 63-75: Advanced Technology & Industrial
  {
    id: "opp-63",
    number: 63,
    title: "Edge Micro Data Centre Modular Co-Location Node",
    category: "Advanced Tech & Industrial",
    capitalBand: "LARGE",
    capitalRange: "₹1.5 Cr – ₹4 Cr",
    summary: "Deploying 10–20 rack pre-fabricated edge data pods in Tier 2 cities (Indore, Coimbatore, Bhubaneswar) for low-latency streaming and banking.",
    revenueModel: "Per-rack monthly colocation fee (₹45,000 – ₹85,000/rack/month) + power pass-through",
    marketPotential: "Telcos and OTT platforms need edge caching to handle Tier 2/3 5G bandwidth demands.",
    keyRisk: "High continuous power redundancy costs (dual diesel gensets + BESS).",
    targetTimeline: "6–9 months"
  },
  {
    id: "opp-64",
    number: 64,
    title: "Semiconductor Cleanroom Consumables & High-Purity Chemical Supply",
    category: "Advanced Tech & Industrial",
    capitalBand: "MEDIUM",
    capitalRange: "₹35L – ₹1 Cr",
    summary: "Supplying ultra-pure isopropyl alcohol, specialty cleanroom wipes, ESD garments, and gas filters to semiconductor fabs and ATMP units.",
    revenueModel: "B2B long-term supply contracts with 25–40% margins",
    marketPotential: "Semiconductor Mission (ISM) bringing multi-billion dollar fab and packaging investments to Gujarat and Assam.",
    keyRisk: "Extremely stringent particulate purity certifications (Part-per-billion tolerances).",
    targetTimeline: "6–8 months"
  },
  {
    id: "opp-65",
    number: 65,
    title: "Electronics Contract Manufacturing (ESDM) SMT Line",
    category: "Advanced Tech & Industrial",
    capitalBand: "LARGE",
    capitalRange: "₹80L – ₹2.5 Cr",
    summary: "Surface Mount Technology (SMT) pick-and-place lines assembling smart meters, LED driver boards, and IoT sensor PCBs.",
    revenueModel: "Job-work assembly fee per component placed + component sourcing markup",
    marketPotential: "National Smart Meter National Programme requiring 250 million smart meter installations.",
    keyRisk: "Component lead times from global chip distributors.",
    targetTimeline: "6 months"
  },
  {
    id: "opp-66",
    number: 66,
    title: "Industrial Cobots & Automated Pick-and-Place Integration",
    category: "Advanced Tech & Industrial",
    capitalBand: "MEDIUM",
    capitalRange: "₹25L – ₹70L",
    summary: "System integration deploying collaborative robotic arms for machine tending, palletizing, and spot welding in automotive tiers.",
    revenueModel: "Turnkey project price (₹18L–₹45L per robotic workcell) with 30% gross integration margin",
    marketPotential: "Labor shortages and precision demands pushing Tier 1 and 2 auto component makers toward cobots.",
    keyRisk: "Engineering commissioning delays on customer factory floors.",
    targetTimeline: "90 days"
  },
  {
    id: "opp-67",
    number: 67,
    title: "Aerospace & Defense Precision CNC 5-Axis Machining",
    category: "Advanced Tech & Industrial",
    capitalBand: "LARGE",
    capitalRange: "₹1.2 Cr – ₹3.5 Cr",
    summary: "Machining titanium and Inconel brackets, fuel nozzles, and satellite housing components under AS9100 quality standards.",
    revenueModel: "High-margin defense contracts (₹4,500 – ₹12,000 per machine hour)",
    marketPotential: "Defense indigenization mandates and expanding private aerospace supply chains.",
    keyRisk: "Lengthy vendor qualification cycles (6–18 months).",
    targetTimeline: "12 months"
  },
  {
    id: "opp-68",
    number: 68,
    title: "Fly Ash & Blast Furnace Slag Pozzolanic Value-Addition",
    category: "Advanced Tech & Industrial",
    capitalBand: "MEDIUM",
    capitalRange: "₹30L – ₹85L",
    summary: "Micro-grinding thermal power fly ash and steel slag into ultra-fine supplementary cementitious materials for green concrete.",
    revenueModel: "Bulk supply to ready-mix concrete (RMC) plants at ₹1,800–₹2,800/ton",
    marketPotential: "Mandatory fly ash utilization guidelines and rising Portland cement prices.",
    keyRisk: "Long-term thermal power station fly-ash off-take allocation agreements.",
    targetTimeline: "4–6 months"
  },
  {
    id: "opp-69",
    number: 69,
    title: "Lithium-Ion Battery Recycling & Black Mass Refining",
    category: "Advanced Tech & Industrial",
    capitalBand: "LARGE",
    capitalRange: "₹1.5 Cr – ₹4.5 Cr",
    summary: "Shredding and hydrometallurgical separation of spent phone/EV battery packs to recover battery-grade cobalt, lithium, and nickel sulfate.",
    revenueModel: "Sale of refined black mass salts back to cathode active material manufacturers",
    marketPotential: "Battery Waste Management Rules (BWMR) enforcing extended producer responsibility (EPR).",
    keyRisk: "Safe thermal discharge and nitrogen-blanketed shredder explosion prevention.",
    targetTimeline: "9–12 months"
  },
  {
    id: "opp-70",
    number: 70,
    title: "Medical Disposable Diagnostics & Blood Collection Tube Facility",
    category: "Advanced Tech & Industrial",
    capitalBand: "MEDIUM",
    capitalRange: "₹45L – ₹1.2 Cr",
    summary: "Automated injection molding and vacuum spray coating line making PET evacuated blood tubes (EDTA, Gel & Clot activator).",
    revenueModel: "Institutional supply to diagnostic laboratory chains and hospital groups (₹3.50–₹7.00/tube)",
    marketPotential: "Diagnostic testing boom across India reducing reliance on imported vacuum tubes.",
    keyRisk: "CDSCO (Central Drugs Standard Control Organisation) medical device manufacturing license.",
    targetTimeline: "6–9 months"
  },
  {
    id: "opp-71",
    number: 71,
    title: "Engineering Plastics & Recycled Polymer Compounding",
    category: "Advanced Tech & Industrial",
    capitalBand: "MEDIUM",
    capitalRange: "₹30L – ₹75L",
    summary: "Twin-screw extrusion compounding of glass-filled Nylon 66 and flame-retardant Polypropylene for automotive and appliance housings.",
    revenueModel: "Compounded polymer granule sales at ₹140–₹260/kg with 18–25% margin",
    marketPotential: "Automotive lightweighting replacing die-cast metal brackets with engineered plastics.",
    keyRisk: "Raw polymer feedstock resin volatility linked to international crude oil.",
    targetTimeline: "90–120 days"
  },
  {
    id: "opp-72",
    number: 72,
    title: "DGCA-Certified Industrial Drone Assembly & Inspection Services",
    category: "Advanced Tech & Industrial",
    capitalBand: "SMALL",
    capitalRange: "₹10L – ₹25L",
    summary: "Assembling type-certified hexacopters equipped with thermal sensors for pipeline inspection, mining volume estimation, and powerline monitoring.",
    revenueModel: "Per-kilometer inspection contracts (₹8,000–₹18,000/km) + orthomosaic 3D map data licensing",
    marketPotential: "Government PLI scheme for drones and liberalized Drone Rules 2021.",
    keyRisk: "Equipment crash liability; requires strict aviation hull insurance.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-73",
    number: 73,
    title: "Industrial IoT Telemetry Sensor & Edge Gateway Fabrication",
    category: "Advanced Tech & Industrial",
    capitalBand: "SMALL",
    capitalRange: "₹8L – ₹22L",
    summary: "Building RS485/Modbus-to-cellular gateways tracking vibration, temperature, and current in motors to predict factory breakdown.",
    revenueModel: "Hardware unit price (₹4,500–₹9,000) + annual cloud data dashboard subscription (₹1,800/device/year)",
    marketPotential: "Manufacturing plants aiming to eliminate expensive unplanned line stoppages.",
    keyRisk: "Firmware OTA update bugs in noisy electrical factory environments.",
    targetTimeline: "60 days"
  },
  {
    id: "opp-74",
    number: 74,
    title: "Specialty Dielectric Fluids & Immersion Cooling for EV Batteries",
    category: "Advanced Tech & Industrial",
    capitalBand: "MEDIUM",
    capitalRange: "₹25L – ₹65L",
    summary: "Formulating bio-based synthetic hydrocarbon fluids for direct-contact liquid immersion cooling of ultra-fast charging battery packs.",
    revenueModel: "OEM chemical formulation supply contracts at ₹400–₹750/litre",
    marketPotential: "Immersion cooling gaining preference over cold plates for fire prevention and battery longevity.",
    keyRisk: "Flashpoint and breakdown voltage certification standards.",
    targetTimeline: "6 months"
  },
  {
    id: "opp-75",
    number: 75,
    title: "Low-Carbon Geopolymer Green Cement & Non-Clinker Pavers",
    category: "Advanced Tech & Industrial",
    capitalBand: "SMALL",
    capitalRange: "₹12L – ₹30L",
    summary: "Alkali-activated fly-ash and granulated slag binders curing at ambient temperature without lime kilns to produce high-strength interlocking pavers.",
    revenueModel: "Direct municipal and infrastructure contractor sales at ₹35–₹55/sq ft",
    marketPotential: "Green rating compliance points for infrastructure developers seeking IGBC/LEED credits.",
    keyRisk: "Corrosive chemical activator handling safety protocols.",
    targetTimeline: "45–60 days"
  }
];

export const INVESTMENT_BANDS = [
  {
    id: "low",
    level: "LOW",
    range: "₹50,000 – ₹5 lakh",
    title: "Accessible Entry Models",
    idealFor: "First-time founders, solo researchers, consultants, service agencies",
    description: "Low-overhead businesses with minimal fixed capex, relying on intellectual capital, agency aggregation, or rapid digital distribution.",
    examples: [
      "Export Documentation Agency",
      "Digital Product & Research Publishing",
      "Sourcing & Procurement Liaison",
      "Industrial Waste Audit Consultancy",
      "Tender Curation & Intelligence Bureau"
    ],
    riskProfile: "Low financial risk, high operational sweat-equity",
    typicalTimeline: "15 to 45 days"
  },
  {
    id: "small",
    level: "SMALL",
    range: "₹5 lakh – ₹25 lakh",
    title: "Specialized Small Business Units",
    idealFor: "Young professionals, skilled operators, tech entrepreneurs",
    description: "Capital-efficient setups with targeted equipment or working capital. Good for specialized farming, regional service hubs, and micro-SaaS.",
    examples: [
      "Polyhouse Commercial Horticulture",
      "Vertical B2B Micro-SaaS for MSMEs",
      "Biomass Pellet & Briquetting Unit",
      "Cold-Pressed Indigenous Oil Unit",
      "Industrial Drone Inspection Services"
    ],
    riskProfile: "Moderate capital risk, focused niche markets",
    typicalTimeline: "45 to 90 days"
  },
  {
    id: "medium",
    level: "MEDIUM",
    range: "₹25 lakh – ₹1 crore",
    title: "Semi-Industrial & Regional Hubs",
    idealFor: "Established business owners, expanding traders, family enterprises",
    description: "Substantial operational facilities including multi-temp cold nodes, precision foundries, and automated processing lines.",
    examples: [
      "Multi-Commodity Cold Storage Node",
      "Commercial Hydroponic Facility",
      "Battery Recycling Separation Node",
      "Highway Commercial Way-Station",
      "Precision Castings & Forgings Export"
    ],
    riskProfile: "Structured project financing, working capital buffer required",
    typicalTimeline: "3 to 8 months"
  },
  {
    id: "large",
    level: "LARGE",
    range: "₹1 crore – ₹10 crore",
    title: "Full-Scale Manufacturing & Logistics",
    idealFor: "Mid-market corporations, serial entrepreneurs, investor consortiums",
    description: "Heavy manufacturing lines, Grade-A warehouse parks, solar installations, and defense machining centers with multi-tiered teams.",
    examples: [
      "Grade-A PEB Logistics Warehouse",
      "Electronics SMT Line (ESDM)",
      "Lithium-Ion Black Mass Refining",
      "Aerospace 5-Axis Precision Machining",
      "Industrial Plot Subdivision Park"
    ],
    riskProfile: "High regulatory scrutiny, institutional lease covenants",
    typicalTimeline: "6 to 15 months"
  },
  {
    id: "infrastructure",
    level: "INFRASTRUCTURE",
    range: "₹10 crore+",
    title: "Capital-Intensive Infrastructure",
    idealFor: "Infrastructure funds, industrial families, institutional consortiums",
    description: "Utility scale open-access solar farms, green hydrogen plants, data centre land aggregations, and multi-modal logistics parks.",
    examples: [
      "Utility Scale Ground Solar Farm (MW+)",
      "Data Centre Campus Power & Land",
      "Compressed Bio-Gas SATAT Plants",
      "Multi-Modal Rail Logistics Yard",
      "Integrated Green Hydrogen Project"
    ],
    riskProfile: "High financial scale, long-term multi-decade off-take agreements",
    typicalTimeline: "12 to 24+ months"
  }
];

export const PRACTICAL_FRAMEWORKS = [
  {
    title: "Business Selection Framework",
    description: "A 4-quadrant decision matrix to filter opportunities by your capital, risk tolerance, domain knowledge, and local geography.",
    badge: "Core Framework",
    pageRef: "Section 1"
  },
  {
    title: "Market Validation Checklist",
    description: "15-point verification audit to validate actual buyer demand before signing leases or buying equipment.",
    badge: "Pre-Launch",
    pageRef: "Section 2"
  },
  {
    title: "Business Cost Calculation (Capex & Opex)",
    description: "Structured formulas to separate fixed setup capital, machinery depreciation, and 6-month buffer expenses.",
    badge: "Financial",
    pageRef: "Section 3"
  },
  {
    title: "Revenue vs Profit Explanation",
    description: "Real-world margin reality checks: gross margin vs EBITDA vs net operating cash flow after tax and loan amortizations.",
    badge: "Financial",
    pageRef: "Section 4"
  },
  {
    title: "Initial Capital Planning Worksheet",
    description: "Fillable balance-sheet worksheet mapping source of funds: own equity, collateral, machinery loans, and government subsidies.",
    badge: "Worksheet",
    pageRef: "Section 5"
  },
  {
    title: "Break-Even Calculation Matrix",
    description: "Calculate exact monthly units or billable hours required to cover fixed overheads and reach positive cash flow.",
    badge: "Financial",
    pageRef: "Section 6"
  },
  {
    title: "12-Month Cash-Flow Planning Model",
    description: "Working capital curve modeling seasonal troughs, credit payment delays, and inventory lockup.",
    badge: "Model",
    pageRef: "Section 7"
  },
  {
    title: "Funding Options & Government Subsidies",
    description: "Practical breakdown of MSME CGTMSE collateral-free loans, NHB horticulture subsidies, SATAT bio-gas incentives, and PLI schemes.",
    badge: "Government Schemes",
    pageRef: "Section 8"
  },
  {
    title: "License and Government Approval Overview",
    description: "Master compliance directory: GST, IEC, FSSAI, SPCB (Consent to Establish/Operate), Factory License, PESO, and Fire NOC.",
    badge: "Regulatory",
    pageRef: "Section 9"
  },
  {
    title: "Comprehensive Investment Checklist",
    description: "Due diligence protocol before transferring vendor advances or committing to commercial real estate agreements.",
    badge: "Due Diligence",
    pageRef: "Section 10"
  },
  {
    title: "2027 Business Opportunity Map",
    description: "Visual macroeconomic roadmap linking national megatrends (EV, green energy, export, digital) with business vectors.",
    badge: "Macro Roadmap",
    pageRef: "Section 11"
  },
  {
    title: "2027 Business Scorecard (All 75 Opportunities)",
    description: "Direct side-by-side comparison matrix evaluating complexity, scalability, capital requirement, and time-to-profit.",
    badge: "Master Matrix",
    pageRef: "Section 12"
  },
  {
    title: "Practical 30-Day Action Plan",
    description: "Day-by-day roadmap: Week 1 research, Week 2 vendor discovery, Week 3 regulatory verification, Week 4 pilot commitment.",
    badge: "Execution",
    pageRef: "Section 13"
  }
];

export const CHAPTER_COMPONENTS = [
  {
    step: "01",
    title: "Business Model Overview",
    desc: "Clear definition of the value proposition, service or product delivered, and how the operational engine functions."
  },
  {
    step: "02",
    title: "Market & Customer Perspective",
    desc: "Target customer segments, buyer personas, B2B purchasing triggers, and addressable domestic or global market trends."
  },
  {
    step: "03",
    title: "Supply & Sourcing Considerations",
    desc: "Where equipment, raw inputs, and consumables originate, including vendor dependencies and lead times."
  },
  {
    step: "04",
    title: "Revenue Model Concepts",
    desc: "Pricing mechanisms, project contracts, recurring retainers, product margins, and transaction fee models."
  },
  {
    step: "05",
    title: "Investment Planning Ranges",
    desc: "Low-end vs standard full-scale capex breakdowns covering machinery, real estate, and utilities."
  },
  {
    step: "06",
    title: "Working Capital Considerations",
    desc: "Receivable credit terms, inventory holding cycles, and runway needed until cash flows become self-sustaining."
  },
  {
    step: "07",
    title: "Setup & Operational Direction",
    desc: "Facility space requirements, power load sanctions, layout guidelines, and required technical staff roles."
  },
  {
    step: "08",
    title: "Illustrative Profit Calculations",
    desc: "Educational unit economics showing gross margins, operating overheads, and potential return on capital benchmarks."
  },
  {
    step: "09",
    title: "Demand & Scalability Scorecards",
    desc: "Objective ratings on 5-year growth trajectory, repeat customer potential, and regional expansion viability."
  },
  {
    step: "10",
    title: "Competition & Complexity Assessment",
    desc: "Barriers to entry, competitive moats, technological learning curve, and threat from organized conglomerate players."
  },
  {
    step: "11",
    title: "Major Business Risks",
    desc: "Regulatory shifts, policy changes, supply bottlenecks, tech obsolescence, and practical downside scenarios."
  },
  {
    step: "12",
    title: "First Steps & Initial 90-Day Direction",
    desc: "Concrete action steps: preliminary vendor quotes, pilot interviews, license filing, and validation before heavy expenditure."
  }
];

export const AUDIENCE_CARDS = [
  {
    id: "aud-1",
    number: "01",
    role: "Aspiring Entrepreneurs",
    headline: "Researching Your First Business",
    detail: "Move past generic internet lists. Compare 75 structured models across realistic capital bands and understand operating realities before spending your hard-earned savings."
  },
  {
    id: "aud-2",
    number: "02",
    role: "Students & Young Professionals",
    headline: "Exploring Paths Beyond Traditional Careers",
    detail: "Gain practical business literacy in emerging green energy, agritech, and micro-SaaS sectors to identify high-leverage business models early in your career."
  },
  {
    id: "aud-3",
    number: "03",
    role: "Existing Business Owners",
    headline: "Expanding Into Adjacent Sectors",
    detail: "Diversify surplus cash flow into high-growth sunrise industries like Grade-A logistics, commercial solar EPC, and advanced contract manufacturing."
  },
  {
    id: "aud-4",
    number: "04",
    role: "Traders & Export Aspirants",
    headline: "Tapping Sourcing & Global Markets",
    detail: "Discover high-demand manufactured goods, agricultural processing arbitrations, and export documentation businesses with international margin advantages."
  },
  {
    id: "aud-5",
    number: "05",
    role: "Digital & Tech Enthusiasts",
    headline: "Leveraging Software, AI & Automation",
    detail: "Evaluate B2B micro-SaaS, proprietary digital research publishing, and industrial automation agencies built with capital efficiency."
  }
];

export const FAQ_LIST = [
  {
    question: "What is the 2027 Business Opportunity Blueprint?",
    answer: "It is a digital PDF guide featuring 75 future-focused business opportunities across different industries, with structured information to help readers explore and shortlist business models."
  },
  {
    question: "What types of businesses are included?",
    answer: "The guide covers energy, infrastructure, agriculture, food, exports, digital businesses, advanced technology and additional business opportunities."
  },
  {
    question: "What information does the guide provide?",
    answer: "It covers business model overviews, market and customer perspectives, investment considerations, setup direction, revenue model concepts, risks, scorecards and first steps."
  },
  {
    question: "Is this a physical book?",
    answer: "No. This is a digital PDF that can be accessed on a compatible mobile phone, tablet or computer."
  },
  {
    question: "How will I receive the PDF?",
    answer: "After successful payment through SuperProfile, you will receive access to the purchased digital product through its delivery process."
  },
  {
    question: "Does this guide guarantee business success or profit?",
    answer: "No. This guide is for educational and business research purposes. Actual outcomes depend on investment, execution, location, competition, market conditions and other factors. No income or profit is guaranteed."
  }
];
