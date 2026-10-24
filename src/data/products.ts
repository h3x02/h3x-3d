import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';
import img3DP001_3 from '../assets/images/3DP001-3.jpg';
import img3DP002_1 from '../assets/images/3DP002-1.jpg';
import img3DP002_2 from '../assets/images/3DP002-2.jpg';
import img3DP003_2 from '../assets/images/3DP003-2.jpg';

export interface Product {
  id: string;
  name: { en: string; fa: string };
  description: { en: string; fa: string };
  category: { en: string; fa: string };
  images: string[];
  featured: boolean;
  specifications?: string[];
  materials?: string[];
}

export const products: Product[] = [
  {
    id: "3DP001",
    name: {
      en: "Dragon Figurine",
      fa: "مجسمه اژدها"
    },
    description: {
      en: "Intricately detailed dragon figurine with articulated wings and realistic scales. Perfect for fantasy enthusiasts and collectors. Printed in high-quality PLA with exceptional detail resolution.",
      fa: "مجسمه اژدها با جزئیات دقیق، بال‌های متحرک و فلس‌های واقعی. مناسب علاقه‌مندان به فانتزی و کلکسیونرها. چاپ شده با PLA با کیفیت بالا و جزئیات بی‌نظیر."
    },
    category: {
      en: "Figurines",
      fa: "فیگورین"
    },
    images: [
      hero2,  // Changed from "../assets/images/hero-2.jpg"
      hero1,  // Changed from "../assets/images/hero-1.jpg"
      img3DP001_3  // Changed from "../assets/images/3DP001-3.jpg"
    ],
    featured: true,
    specifications: [
      "Height: 15cm",
      "Material: PLA+",
      "Layer Height: 0.1mm",
      "Infill: 20%"
    ],
    materials: ["PLA+", "PETG Available"]
  },
  {
    id: "3DP002",
    name: {
      en: "Custom Phone Case",
      fa: "قاب گوشی سفارشی"
    },
    description: {
      en: "Personalized phone case designed to fit your device perfectly. Available in multiple colors and patterns. Durable TPU material provides excellent protection while maintaining slim profile.",
      fa: "قاب گوشی سفارشی که کاملاً مناسب دستگاه شما طراحی شده است. در رنگ‌ها و طرح‌های مختلف موجود است. جنس TPU مقاوم، محافظت عالی و ظاهری باریک را فراهم می‌کند."
    },
    category: {
      en: "Accessories",
      fa: "لوازم جانبی"
    },
    images: [
      img3DP002_1,  // Changed from "../assets/images/3DP002-1.jpg"
      img3DP002_2   // Changed from "../assets/images/3DP002-2.jpg"
    ],
    featured: true,
    specifications: [
      "Material: TPU",
      "Thickness: 2mm",
      "Drop Protection: 2m",
      "Wireless Charging Compatible"
    ],
    materials: ["TPU", "PLA"]
  },
  {
    id: "3DP003",
    name: {
      en: "Mechanical Gear Set",
      fa: "مجموعه چرخ‌دنده مکانیکی"
    },
    description: {
      en: "Functional mechanical gear assembly demonstrating planetary gear systems. Educational and entertaining for engineering enthusiasts. All gears mesh perfectly and rotate smoothly.",
      fa: "مجموعه چرخ‌دنده مکانیکی کاربردی که سیستم‌های چرخ‌دنده سیاره‌ای را نمایش می‌دهد. آموزشی و سرگرم‌کننده برای علاقه‌مندان به مهندسی. تمام چرخ‌دنده‌ها به‌خوبی درگیر شده و روان می‌چرخند."
    },
    category: {
      en: "Educational",
      fa: "آموزشی"
    },
    images: [
      hero3,  // Changed from "../assets/images/hero-3.jpg"
      img3DP003_2  // Changed from "../assets/images/3DP003-2.jpg"
    ],
    featured: false,
    specifications: [
      "Diameter: 10cm",
      "Material: PETG",
      "Gear Ratio: 3:1",
      "Moving Parts: 12"
    ],
    materials: ["PETG", "ABS"]
  },
  {
    id: "3DP004",
    name: {
      en: "Decorative Vase",
      fa: "گلدان دکوری"
    },
    description: {
      en: "Elegant spiral vase with geometric patterns. Modern design perfect for home decoration. Watertight construction suitable for fresh flowers.",
      fa: "گلدان مارپیچی شیک با طرح‌های هندسی. طراحی مدرن مناسب دکوراسیون منزل. ساخت ضدآب مناسب گل‌های تازه."
    },
    category: {
      en: "Home Decor",
      fa: "دکوراسیون منزل"
    },
    images: [
      hero1,  // Changed from "../assets/images/hero-1.jpg"
      img3DP001_3  // Changed from "../assets/images/3DP001-3.jpg"
    ],
    featured: true,
    specifications: [
      "Height: 25cm",
      "Material: PLA",
      "Wall Thickness: 1.5mm",
      "Watertight: Yes"
    ],
    materials: ["PLA", "PETG"]
  },
  {
    id: "3DP005",
    name: {
      en: "Robot Action Figure",
      fa: "فیگور رباتیک"
    },
    description: {
      en: "Articulated robot figure with moveable joints and interchangeable parts. Inspired by classic mecha designs with modern 3D printing precision.",
      fa: "فیگور رباتیک با مفاصل متحرک و قطعات قابل تعویض. الهام گرفته از طراحی‌های کلاسیک مکانیکی با دقت چاپ سه‌بعدی مدرن."
    },
    category: {
      en: "Figurines",
      fa: "فیگورین"
    },
    images: [
      hero2,  // Changed from "../assets/images/hero-2.jpg"
      img3DP002_2  // Changed from "../assets/images/3DP002-2.jpg"
    ],
    featured: false,
    specifications: [
      "Height: 20cm",
      "Material: ABS",
      "Articulation Points: 15",
      "Assembly Required: Yes"
    ],
    materials: ["ABS", "PETG"]
  },
  {
    id: "3DP006",
    name: {
      en: "Desk Organizer",
      fa: "سازمان‌دهنده رومیزی"
    },
    description: {
      en: "Multi-compartment desk organizer with slots for pens, paper clips, and small office supplies. Clean, minimalist design that fits any workspace.",
      fa: "سازمان‌دهنده رومیزی چندبخشی با جای خودکار، گیره کاغذ و لوازم اداری کوچک. طراحی مینیمال و تمیز مناسب هر محیط کاری."
    },
    category: {
      en: "Office",
      fa: "اداری"
    },
    images: [
      img3DP003_2,  // Changed from "../assets/images/3DP003-2.jpg"
      hero3  // Changed from "../assets/images/hero-3.jpg"
    ],
    featured: false,
    specifications: [
      "Dimensions: 20x15x8cm",
      "Material: PLA",
      "Compartments: 6",
      "Non-slip Base: Yes"
    ],
    materials: ["PLA", "PETG"]
  },
  {
    id: "3DP007",
    name: {
      en: "Miniature Chess Set",
      fa: "ست شطرنج مینیاتوری"
    },
    description: {
      en: "Complete chess set with detailed pieces and folding board. Perfect for travel or display. Each piece is carefully designed with traditional chess piece aesthetics.",
      fa: "ست کامل شطرنج با مهره‌های دقیق و صفحه تاشو. مناسب برای سفر یا نمایش. هر مهره با دقت و با الهام از طرح‌های سنتی ساخته شده است."
    },
    category: {
      en: "Games",
      fa: "بازی‌ها"
    },
    images: [
      img3DP002_1,  // Changed from "../assets/images/3DP002-1.jpg"
      hero1  // Changed from "../assets/images/hero-1.jpg"
    ],
    featured: true,
    specifications: [
      "Board Size: 20x20cm",
      "Material: PLA",
      "Pieces: 32",
      "Storage: Integrated"
    ],
    materials: ["PLA", "Wood PLA"]
  },
  {
    id: "3DP008",
    name: {
      en: "LED Lamp Shade",
      fa: "کلاهک لامپ LED"
    },
    description: {
      en: "Geometric lamp shade designed for LED bulbs. Creates beautiful light patterns and shadows. Modern design complements contemporary interiors.",
      fa: "کلاهک لامپ هندسی مناسب لامپ‌های LED. ایجاد الگوهای نوری زیبا و سایه‌های جذاب. طراحی مدرن مناسب دکوراسیون معاصر."
    },
    category: {
      en: "Lighting",
      fa: "روشنایی"
    },
    images: [
      img3DP001_3,  // Changed from "../assets/images/3DP001-3.jpg"
      hero2  // Changed from "../assets/images/hero-2.jpg"
    ],
    featured: false,
    specifications: [
      "Diameter: 30cm",
      "Material: PETG",
      "Bulb Type: E27 LED",
      "Light Diffusion: Excellent"
    ],
    materials: ["PETG", "PLA"]
  },
  {
    id: "3DP009",
    name: {
      en: "Puzzle Box",
      fa: "جعبه پازل"
    },
    description: {
      en: "Intricate puzzle box with hidden mechanisms and secret compartments. Challenging brain teaser that doubles as a decorative piece.",
      fa: "جعبه پازل پیچیده با مکانیزم‌های مخفی و محفظه‌های سری. یک معمای فکری چالش‌برانگیز و در عین حال دکوری زیبا."
    },
    category: {
      en: "Games",
      fa: "بازی‌ها"
    },
    images: [
      img3DP002_2,  // Changed from "../assets/images/3DP002-2.jpg"
      img3DP003_2   // Changed from "../assets/images/3DP003-2.jpg"
    ],
    featured: false,
    specifications: [
      "Size: 10x10x10cm",
      "Material: ABS",
      "Difficulty: Advanced",
      "Moving Parts: 8"
    ],
    materials: ["ABS", "PETG"]
  },
  {
    id: "3DP010",
    name: {
      en: "Plant Pot with Drainage",
      fa: "گلدان با زهکشی"
    },
    description: {
      en: "Self-watering plant pot with integrated drainage system. Perfect for succulents and small plants. Modern design fits any home decor style.",
      fa: "گلدان خودآبیار با سیستم زهکشی یکپارچه. مناسب برای ساکولنت‌ها و گیاهان کوچک. طراحی مدرن مناسب هر سبک دکوراسیون منزل."
    },
    category: {
      en: "Home Decor",
      fa: "دکوراسیون منزل"
    },
    images: [
      hero3,  // Changed from "../assets/images/hero-3.jpg"
      img3DP002_1  // Changed from "../assets/images/3DP002-1.jpg"
    ],
    featured: false,
    specifications: [
      "Diameter: 12cm",
      "Material: PETG",
      "Drainage: Integrated",
      "Water Reservoir: 200ml"
    ],
    materials: ["PETG", "PLA"]
  },
  {
    id: "3DP011",
    name: {
      en: "Smartphone Stand",
      fa: "پایه نگهدارنده گوشی"
    },
    description: {
      en: "Adjustable smartphone stand with multiple viewing angles. Compatible with most phone sizes. Non-slip base ensures stability during use.",
      fa: "پایه نگهدارنده گوشی با قابلیت تنظیم زاویه در چند حالت. سازگار با اکثر گوشی‌ها. پایه ضد لغزش برای ثبات بیشتر هنگام استفاده."
    },
    category: {
      en: "Accessories",
      fa: "لوازم جانبی"
    },
    images: [
      hero1,  // Changed from "../assets/images/hero-1.jpg"
      img3DP001_3  // Changed from "../assets/images/3DP001-3.jpg"
    ],
    featured: false,
    specifications: [
      "Adjustable Angles: 30°-70°",
      "Material: PLA+",
      "Phone Size: 4-7 inches",
      "Cable Management: Yes"
    ],
    materials: ["PLA+", "PETG"]
  },
  {
    id: "3DP012",
    name: {
      en: "Articulated Dragon",
      fa: "اژدهای مفصلی"
    },
    description: {
      en: "Fully articulated dragon with flexible joints and detailed scales. No assembly required - prints in place with moving parts. A masterpiece of 3D printing engineering.",
      fa: "اژدهای مفصلی با مفاصل انعطاف‌پذیر و فلس‌های دقیق. بدون نیاز به مونتاژ - چاپ یک‌تکه با قطعات متحرک. شاهکاری از مهندسی چاپ سه‌بعدی."
    },
    category: {
      en: "Figurines",
      fa: "فیگورین"
    },
    images: [
      hero2,  // Changed from "../assets/images/hero-2.jpg"
      img3DP002_2  // Changed from "../assets/images/3DP002-2.jpg"
    ],
    featured: true,
    specifications: [
      "Length: 25cm",
      "Material: PLA+",
      "Articulation: Full body",
      "Print-in-place: Yes"
    ],
    materials: ["PLA+", "PETG"]
  }
];

export const categories = [
  { en: "All", fa: "همه" },
  { en: "Figurines", fa: "فیگورین" },
  { en: "Accessories", fa: "لوازم جانبی" },
  { en: "Educational", fa: "آموزشی" },
  { en: "Home Decor", fa: "دکوراسیون منزل" },
  { en: "Office", fa: "اداری" },
  { en: "Games", fa: "بازی‌ها" },
  { en: "Lighting", fa: "روشنایی" }
];