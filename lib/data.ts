export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  itemCount: number;
  items: string[];
  amazonSearchUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  commissionRate: string;
  whyBuy: string;
  amazonUrl: string;
  badge?: string;
}

export interface PlanStep {
  phase: number;
  title: string;
  timeframe: string;
  tasks: string[];
  goal: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "smallwares",
    name: "Smallwares",
    description: "Pots, pans, knives, prep tools, and everything chefs reach for daily.",
    icon: "🍳",
    color: "bg-red-50 border-red-200 hover:border-red-400",
    itemCount: 200,
    items: ["Chef knives & knife sets", "Cutting boards", "Mixing bowls (SS & polycarbonate)", "Sheet pans & hotel pans", "Sauté & stock pots", "Ladles, tongs, & spatulas", "Thermometers & timers", "Measuring cups & spoons", "Colanders & strainers", "Mandolines & slicers"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+smallwares",
  },
  {
    id: "equipment",
    name: "Kitchen Equipment",
    description: "Commercial-grade equipment for professional kitchens of every size.",
    icon: "⚙️",
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
    itemCount: 150,
    items: ["Commercial blenders", "Food processors", "Immersion blenders", "Stand mixers", "Slicers & dicers", "Vacuum sealers", "Induction burners", "Deep fryers", "Rice cookers (commercial)", "Sous vide circulators"],
    amazonSearchUrl: "https://www.amazon.com/s?k=commercial+kitchen+equipment",
  },
  {
    id: "storage",
    name: "Storage Solutions",
    description: "Food storage containers, shelving, and organization systems.",
    icon: "📦",
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
    itemCount: 120,
    items: ["Cambro food containers (all sizes)", "NSF shelving units", "Speed racks", "Wire shelving", "Food storage bins", "Deli containers", "Squeeze bottles & dispensers", "Label & date systems", "Dry storage containers", "Walk-in organizers"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+food+storage",
  },
  {
    id: "uniforms",
    name: "Uniforms & Apparel",
    description: "Chef coats, aprons, hats, non-slip shoes, and front-of-house attire.",
    icon: "👨‍🍳",
    color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
    itemCount: 100,
    items: ["Chef coats & jackets", "Bib & bistro aprons", "Chef pants & hats", "Non-slip kitchen shoes", "Server aprons & vests", "Neck scarves", "Oven mitts & pot holders", "Kitchen gloves (nitrile)", "Hairnets & beard covers", "Kitchen clogs"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+chef+uniforms",
  },
  {
    id: "cleaning",
    name: "Cleaning Supplies",
    description: "Sanitizers, degreasers, scrubbers, and compliance essentials.",
    icon: "🧹",
    color: "bg-green-50 border-green-200 hover:border-green-400",
    itemCount: 90,
    items: ["Commercial degreasers", "Sanitizer tablets & solution", "Mop buckets & wringers", "Commercial floor scrubbers", "Dish soap & detergents", "Sanitizer dispensers", "Microfiber towels (bulk)", "Trash can systems", "Grease trap cleaner", "Hood cleaning kits"],
    amazonSearchUrl: "https://www.amazon.com/s?k=commercial+kitchen+cleaning+supplies",
  },
  {
    id: "bar",
    name: "Bar Supplies",
    description: "Everything behind the bar — shakers, glassware, tools, and dispensers.",
    icon: "🍸",
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    itemCount: 80,
    items: ["Cocktail shakers & strainers", "Bar mats & spill mats", "Speed pourers", "Ice buckets & scoops", "Bar spoons & muddlers", "Wine openers & decanters", "Draft beer equipment", "Garnish trays", "Bar towels (bulk)", "Back bar organizers"],
    amazonSearchUrl: "https://www.amazon.com/s?k=commercial+bar+supplies",
  },
  {
    id: "disposables",
    name: "Disposables & Packaging",
    description: "To-go containers, bags, straws, napkins, and eco-friendly options.",
    icon: "🥡",
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
    itemCount: 110,
    items: ["To-go containers (foam & eco)", "Kraft paper bags", "Plastic & paper cups", "Lids for cups & containers", "Wooden & bamboo utensils", "Napkins (bulk)", "Straws (paper & metal)", "Food wrap & foil (commercial)", "Deli paper & butcher paper", "Takeout bags with handles"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+disposables+packaging",
  },
  {
    id: "dinnerware",
    name: "Dinnerware & Serveware",
    description: "Plates, bowls, platters, flatware, and table service essentials.",
    icon: "🍽️",
    color: "bg-rose-50 border-rose-200 hover:border-rose-400",
    itemCount: 130,
    items: ["Commercial dinner plates", "Bowls (pasta, soup, salad)", "Serving platters & trays", "Restaurant flatware sets", "Ramekins & sauce dishes", "Salt & pepper sets", "Sugar caddies", "Table crumbers", "Bussing tubs & trays", "Pitcher sets"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+dinnerware+commercial",
  },
  {
    id: "safety",
    name: "Safety & Compliance",
    description: "First aid, fire suppression, food safety, and health code essentials.",
    icon: "🦺",
    color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
    itemCount: 60,
    items: ["Commercial first aid kits", "Fire extinguishers", "Anti-slip floor mats", "Food handler gloves (bulk)", "Allergen safety labels", "HACCP logs & forms", "Thermometer calibration tools", "Wet floor signs", "Hand wash station signs", "Sanitizer testing strips"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+kitchen+safety+equipment",
  },
  {
    id: "pos",
    name: "POS & Office Supplies",
    description: "Receipt printers, tablets, check presenters, and management tools.",
    icon: "💻",
    color: "bg-teal-50 border-teal-200 hover:border-teal-400",
    itemCount: 50,
    items: ["Receipt paper rolls (bulk)", "Check presenters", "Server books & pads", "Tip trays & bill trays", "Kitchen printer paper", "Dry erase boards (kitchen)", "Order notepads", "Pen holders & styluses", "Cash drawer inserts", "iPad/tablet stands"],
    amazonSearchUrl: "https://www.amazon.com/s?k=restaurant+pos+office+supplies",
  },
];

export const topProducts: Product[] = [
  {
    id: "1",
    name: "Victorinox Fibrox Pro Chef's Knife 8\"",
    category: "Smallwares",
    description: "The #1 rated chef knife for professional kitchens. NSF certified, dishwasher safe.",
    priceRange: "$40–$60",
    commissionRate: "~4.5%",
    whyBuy: "Every commercial kitchen needs multiple units. Replacement cycle drives repeat purchases.",
    amazonUrl: "https://www.amazon.com/s?k=victorinox+fibrox+pro+chef+knife",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Cambro 6-Piece Food Storage Container Set",
    category: "Storage",
    description: "Industry-standard polycarbonate containers used in virtually every professional kitchen.",
    priceRange: "$45–$120",
    commissionRate: "~6%",
    whyBuy: "High volume, repeat buy. Restaurants purchase dozens at a time for HACCP compliance.",
    amazonUrl: "https://www.amazon.com/s?k=cambro+food+storage+containers+restaurant",
    badge: "High Volume",
  },
  {
    id: "3",
    name: "Chef Works Unisex Cool Vent Chef Coat",
    category: "Uniforms",
    description: "Moisture-wicking, ventilated chef coat for hot kitchen environments.",
    priceRange: "$35–$65",
    commissionRate: "~7%",
    whyBuy: "Restaurants outfit entire brigades. Multi-unit buyers & replacement orders are common.",
    amazonUrl: "https://www.amazon.com/s?k=chef+works+cool+vent+chef+coat",
    badge: "Top Commission",
  },
  {
    id: "4",
    name: "Vollrath 5303 Wear-Ever 3-Qt Saucepan",
    category: "Smallwares",
    description: "Commercial-grade NSF aluminum saucepan trusted by professional cooks nationwide.",
    priceRange: "$25–$55",
    commissionRate: "~4.5%",
    whyBuy: "Long product life but high quantity per kitchen. Excellent for reviews and comparisons.",
    amazonUrl: "https://www.amazon.com/s?k=vollrath+commercial+saucepan",
  },
  {
    id: "5",
    name: "San Jamar Commercial Sanitizer Dispenser",
    category: "Cleaning",
    description: "Wall-mount sanitizer dispenser system for food service compliance.",
    priceRange: "$30–$80",
    commissionRate: "~6%",
    whyBuy: "Health code requirement for all food service. Consumable refills drive passive recurring sales.",
    amazonUrl: "https://www.amazon.com/s?k=san+jamar+sanitizer+dispenser+commercial",
    badge: "Recurring Revenue",
  },
  {
    id: "6",
    name: "PolyScience Sous Vide Professional Circulator",
    category: "Equipment",
    description: "Commercial precision sous vide circulator favored by fine dining establishments.",
    priceRange: "$300–$700",
    commissionRate: "~4.5%",
    whyBuy: "High-ticket item with excellent commission dollars per sale. Trending in fine dining.",
    amazonUrl: "https://www.amazon.com/s?k=commercial+sous+vide+circulator+professional",
    badge: "High Ticket",
  },
];

export const planSteps: PlanStep[] = [
  {
    phase: 1,
    title: "Foundation & Registration",
    timeframe: "Week 1–2",
    tasks: [
      "Register for Amazon Associates Program at affiliate-program.amazon.com",
      "Choose your website domain (e.g., restaurantprosupplyhub.com)",
      "Set up website hosting (Vercel, Netlify, or shared hosting)",
      "Deploy this site as your affiliate hub",
      "Register as an LLC or sole proprietor for tax purposes",
      "Open a dedicated business bank account for income tracking",
      "Set up Google Analytics on your site",
      "Install Google Search Console for SEO monitoring",
    ],
    goal: "Have an active Amazon Associates account and live website.",
    color: "bg-red-600",
  },
  {
    phase: 2,
    title: "Content Creation",
    timeframe: "Weeks 3–8",
    tasks: [
      "Write 10 cornerstone buying guides (e.g., 'Best Chef Knives for Commercial Kitchens')",
      "Create product comparison pages for top categories",
      "Write 'Best of' list posts for each of the 10 categories",
      "Add your real affiliate links to every Amazon product you feature",
      "Create a 'New Restaurant Startup Checklist' as a lead magnet",
      "Film or write 'Expert Tips' content leveraging your 30+ years of experience",
      "Build a resources page with your top 50 recommended Amazon products",
      "Set up email capture for newsletter subscribers",
    ],
    goal: "50+ pieces of high-quality, keyword-optimized content live.",
    color: "bg-orange-600",
  },
  {
    phase: 3,
    title: "SEO & Traffic Growth",
    timeframe: "Months 2–4",
    tasks: [
      "Research long-tail keywords: 'best commercial chef knife under $50', etc.",
      "Optimize every page with title tags, meta descriptions, and H-tags",
      "Build internal links between category and product pages",
      "Submit sitemap to Google Search Console",
      "Create a Pinterest account — restaurant supply boards get huge traffic",
      "Launch an Instagram: kitchen tips, product shots, behind-the-scenes",
      "Join Facebook restaurant owner groups and provide value (no spam)",
      "Reach out to culinary schools for backlinks",
    ],
    goal: "1,000+ monthly organic visitors to your site.",
    color: "bg-amber-600",
  },
  {
    phase: 4,
    title: "Monetization & Optimization",
    timeframe: "Months 4–6",
    tasks: [
      "Analyze which pages generate the most Amazon clicks (use Associates dashboard)",
      "Double down on content for your top-performing categories",
      "Add comparison tables with direct Amazon buy links",
      "Create seasonal content (New Year restaurant resolutions, summer patio setups)",
      "Launch a YouTube channel: product reviews, kitchen setup tours",
      "Apply for Amazon's higher-tier programs if volume qualifies",
      "Test display ads (Google AdSense) as a secondary income stream",
      "Build an email sequence promoting new product recommendations",
    ],
    goal: "First $500–$1,000/month in affiliate commissions.",
    color: "bg-green-600",
  },
  {
    phase: 5,
    title: "Scale & Passive Income",
    timeframe: "Month 6+",
    tasks: [
      "Hire a freelance writer to produce 4–8 new articles/month",
      "Set up automated email newsletters with product recommendations",
      "Expand into related niches (home chef, food truck, catering)",
      "Create a 'Start a Restaurant' resource hub — massive affiliate opportunity",
      "Explore Amazon Influencer Program for social commerce",
      "Add a shop page with curated Amazon storefront",
      "Track ROI on all content and double down on top earners",
      "Reinvest 20% of income into content creation and paid traffic",
    ],
    goal: "$2,000–$5,000+/month in semi-passive affiliate income.",
    color: "bg-blue-700",
  },
];
