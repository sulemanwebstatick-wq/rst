export interface Service {
  serviceID: string;
  primaryCategory: string;
  subCategory: string;
  serviceName: string;
  price: number;
  priceModifier?: string;
}

export const services: Service[] = [
  // Makeup Services
  { serviceID: "mk001", primaryCategory: "Makeup", subCategory: "Day Makeup", serviceName: "Krylon", price: 3000 },
  { serviceID: "mk002", primaryCategory: "Makeup", subCategory: "Day Makeup", serviceName: "Makeup Studio", price: 4000 },
  { serviceID: "mk003", primaryCategory: "Makeup", subCategory: "Day Makeup", serviceName: "MAC", price: 4500 },
  { serviceID: "mk004", primaryCategory: "Makeup", subCategory: "Day Makeup", serviceName: "Air Brush", price: 5000 },
  { serviceID: "mk005", primaryCategory: "Makeup", subCategory: "Day Makeup", serviceName: "HD", price: 6000 },
  { serviceID: "mk006", primaryCategory: "Makeup", subCategory: "Day Makeup", serviceName: "Celebrity", price: 7000 },
  
  { serviceID: "mk007", primaryCategory: "Makeup", subCategory: "Engagement Makeup", serviceName: "Krylon", price: 5000 },
  { serviceID: "mk008", primaryCategory: "Makeup", subCategory: "Engagement Makeup", serviceName: "Makeup Studio", price: 6000 },
  { serviceID: "mk009", primaryCategory: "Makeup", subCategory: "Engagement Makeup", serviceName: "MAC", price: 7000 },
  { serviceID: "mk010", primaryCategory: "Makeup", subCategory: "Engagement Makeup", serviceName: "Air Brush", price: 10000 },
  { serviceID: "mk011", primaryCategory: "Makeup", subCategory: "Engagement Makeup", serviceName: "HD", price: 8000 },
  { serviceID: "mk012", primaryCategory: "Makeup", subCategory: "Engagement Makeup", serviceName: "Celebrity", price: 12000 },
  
  { serviceID: "mk013", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "Krylon", price: 8000 },
  { serviceID: "mk014", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "Makeup Studio", price: 10000 },
  { serviceID: "mk015", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "MAC", price: 12000 },
  { serviceID: "mk016", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "Air Brush", price: 15000 },
  { serviceID: "mk017", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "Silicon", price: 18000 },
  { serviceID: "mk018", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "HD", price: 20000 },
  { serviceID: "mk019", primaryCategory: "Makeup", subCategory: "Bridal Makeup", serviceName: "Celebrity", price: 25000 },
  
  // Hair Care Services
  { serviceID: "hc001", primaryCategory: "Hair Care", subCategory: "Styling", serviceName: "Saree Draping", price: 300 },
  { serviceID: "hc002", primaryCategory: "Hair Care", subCategory: "Styling", serviceName: "Hair Styling", price: 500, priceModifier: "Onwards" },
  
  { serviceID: "hc003", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Kid Hair Cut", price: 250 },
  { serviceID: "hc004", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Trimming", price: 350 },
  { serviceID: "hc005", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Hair Cut", price: 500 },
  { serviceID: "hc006", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Head Wash", price: 350, priceModifier: "350/500" },
  { serviceID: "hc007", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Head Massage", price: 500 },
  { serviceID: "hc008", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Splitends Removal", price: 500 },
  { serviceID: "hc009", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Blow Dryer", price: 500, priceModifier: "Onwards" },
  { serviceID: "hc010", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Ironing", price: 500, priceModifier: "Onwards" },
  { serviceID: "hc011", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Deep Conditioning", price: 500 },
  { serviceID: "hc012", primaryCategory: "Hair Care", subCategory: "Cuts & Styling", serviceName: "Spiral Curls", price: 700, priceModifier: "Onwards" },
  
  { serviceID: "hc013", primaryCategory: "Hair Care", subCategory: "Hair Spa", serviceName: "Nutri Spa", price: 1000 },
  { serviceID: "hc014", primaryCategory: "Hair Care", subCategory: "Hair Spa", serviceName: "L'Oreal", price: 1200 },
  { serviceID: "hc015", primaryCategory: "Hair Care", subCategory: "Hair Spa", serviceName: "Schwarzkopf", price: 1500 },
  { serviceID: "hc016", primaryCategory: "Hair Care", subCategory: "Hair Spa", serviceName: "Express Shine", price: 1800 },
  { serviceID: "hc017", primaryCategory: "Hair Care", subCategory: "Hair Spa", serviceName: "Natural Spa", price: 2000 },
  { serviceID: "hc018", primaryCategory: "Hair Care", subCategory: "Hair Spa", serviceName: "Oil Reflection Spa", price: 2500 },
  
  { serviceID: "hc019", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Colour Per Streak", price: 500 },
  { serviceID: "hc020", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Godrej Professional", price: 800 },
  { serviceID: "hc021", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Raaga", price: 1000 },
  { serviceID: "hc022", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "L'Oreal", price: 1200 },
  { serviceID: "hc023", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Inova", price: 1500 },
  { serviceID: "hc024", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Schwarzkopf", price: 1500 },
  { serviceID: "hc025", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Streak Crown", price: 3000, priceModifier: "Onwards" },
  { serviceID: "hc026", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Ombre Hair Colour", price: 3000, priceModifier: "Onwards" },
  { serviceID: "hc027", primaryCategory: "Hair Care", subCategory: "Root Touchup", serviceName: "Colour Application", price: 300 },
  
  { serviceID: "hc028", primaryCategory: "Hair Care", subCategory: "Global Hair Colour", serviceName: "Raaga / Godrej Pro", price: 2500, priceModifier: "Onwards" },
  { serviceID: "hc029", primaryCategory: "Hair Care", subCategory: "Global Hair Colour", serviceName: "Highlights", price: 3500, priceModifier: "Onwards" },
  { serviceID: "hc030", primaryCategory: "Hair Care", subCategory: "Global Hair Colour", serviceName: "L'Oreal", price: 4000, priceModifier: "Onwards" },
  { serviceID: "hc031", primaryCategory: "Hair Care", subCategory: "Global Hair Colour", serviceName: "Balayage", price: 4000 },
  { serviceID: "hc032", primaryCategory: "Hair Care", subCategory: "Global Hair Colour", serviceName: "Schwarzkopf / Inova", price: 5000, priceModifier: "Onwards" },
  
  // Skin Care Services
  { serviceID: "sc001", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Raaga Facial", price: 1500 },
  { serviceID: "sc002", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Anti Tan Facial", price: 1500 },
  { serviceID: "sc003", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "D-Tan Facial", price: 1500 },
  { serviceID: "sc004", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Red Wine Facial", price: 1800 },
  { serviceID: "sc005", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Hydration Facial", price: 1800 },
  { serviceID: "sc006", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Anti Pigmentation Facial", price: 2000 },
  { serviceID: "sc007", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Skin Repair Facial", price: 2000 },
  { serviceID: "sc008", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Whitening Facial", price: 2000 },
  { serviceID: "sc009", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "O3 Facial", price: 2500 },
  { serviceID: "sc010", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Skin Polishing Facial", price: 2500 },
  { serviceID: "sc011", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Atomy Facial", price: 3500 },
  { serviceID: "sc012", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Advance O3+ Facial", price: 4000 },
  { serviceID: "sc013", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Hydra Facial", price: 4500 },
  { serviceID: "sc014", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Kanpeki Facial", price: 5000 },
  { serviceID: "sc015", primaryCategory: "Skin Care", subCategory: "Facials", serviceName: "Glass Glow Facial", price: 6000 },
  
  { serviceID: "sc016", primaryCategory: "Skin Care", subCategory: "Organic Facials", serviceName: "Acne Healing", price: 1500 },
  { serviceID: "sc017", primaryCategory: "Skin Care", subCategory: "Organic Facials", serviceName: "Tan Balancing", price: 2000 },
  { serviceID: "sc018", primaryCategory: "Skin Care", subCategory: "Organic Facials", serviceName: "Complexion Brightness", price: 2000 },
  { serviceID: "sc019", primaryCategory: "Skin Care", subCategory: "Organic Facials", serviceName: "Nourishing Skin Essential", price: 3000 },
  { serviceID: "sc020", primaryCategory: "Skin Care", subCategory: "Organic Facials", serviceName: "Wrinkle Combat", price: 5000 },
  
  { serviceID: "sc021", primaryCategory: "Skin Care", subCategory: "Fruit Facials", serviceName: "Basic Cleanup", price: 500 },
  { serviceID: "sc022", primaryCategory: "Skin Care", subCategory: "Fruit Facials", serviceName: "Mix", price: 600 },
  { serviceID: "sc023", primaryCategory: "Skin Care", subCategory: "Fruit Facials", serviceName: "Kiwi/Blueberry/Banana", price: 700 },
  { serviceID: "sc024", primaryCategory: "Skin Care", subCategory: "Fruit Facials", serviceName: "Papaya/Alovera", price: 800 },
  
  { serviceID: "sc025", primaryCategory: "Skin Care", subCategory: "Gold Facials", serviceName: "Basic Cleanup", price: 600 },
  { serviceID: "sc026", primaryCategory: "Skin Care", subCategory: "Gold Facials", serviceName: "Gold Facial", price: 800 },
  
  { serviceID: "sc027", primaryCategory: "Skin Care", subCategory: "Diamond Facials", serviceName: "Basic Cleanup", price: 700 },
  { serviceID: "sc028", primaryCategory: "Skin Care", subCategory: "Diamond Facials", serviceName: "Blossom Kochar", price: 900 },
  
  { serviceID: "sc029", primaryCategory: "Skin Care", subCategory: "Lotus Facials", serviceName: "Basic Cleanup", price: 800 },
  { serviceID: "sc030", primaryCategory: "Skin Care", subCategory: "Lotus Facials", serviceName: "Lotus/Aroma Facial", price: 1000 },
  
  // Body Services
  { serviceID: "bd001", primaryCategory: "Body", subCategory: "Massage", serviceName: "Foot Massage", price: 400 },
  { serviceID: "bd002", primaryCategory: "Body", subCategory: "Massage", serviceName: "Back Massage", price: 600 },
  { serviceID: "bd003", primaryCategory: "Body", subCategory: "Massage", serviceName: "Relaxing Body Massage", price: 1200 },
  { serviceID: "bd004", primaryCategory: "Body", subCategory: "Massage", serviceName: "Deep Tissues Body Massage", price: 1800 },
  { serviceID: "bd005", primaryCategory: "Body", subCategory: "Massage", serviceName: "Swedish Massage", price: 2000 },
  { serviceID: "bd006", primaryCategory: "Body", subCategory: "Massage", serviceName: "Elbow Massage", price: 2500 },
  
  { serviceID: "bd007", primaryCategory: "Body", subCategory: "Polishing", serviceName: "Arms Polishing", price: 700 },
  { serviceID: "bd008", primaryCategory: "Body", subCategory: "Polishing", serviceName: "Back Polishing", price: 700 },
  { serviceID: "bd009", primaryCategory: "Body", subCategory: "Polishing", serviceName: "Back Scrub and Pack", price: 700 },
  { serviceID: "bd010", primaryCategory: "Body", subCategory: "Polishing", serviceName: "Full Body Polishing", price: 2000 },
  { serviceID: "bd011", primaryCategory: "Body", subCategory: "Polishing", serviceName: "Twacha Body Polishing", price: 3500 },
  { serviceID: "bd012", primaryCategory: "Body", subCategory: "Polishing", serviceName: "Ozone Body Polishing", price: 4500 },
  
  // Hands & Feet Services
  { serviceID: "hf001", primaryCategory: "Hands & Feet", subCategory: "Manicure", serviceName: "Traditional", price: 400 },
  { serviceID: "hf002", primaryCategory: "Hands & Feet", subCategory: "Manicure", serviceName: "Deluxe / Lotus", price: 600 },
  { serviceID: "hf003", primaryCategory: "Hands & Feet", subCategory: "Manicure", serviceName: "D-Tan", price: 700 },
  { serviceID: "hf004", primaryCategory: "Hands & Feet", subCategory: "Manicure", serviceName: "Crystal", price: 800 },
  { serviceID: "hf005", primaryCategory: "Hands & Feet", subCategory: "Manicure", serviceName: "Raaga", price: 1000 },
  { serviceID: "hf006", primaryCategory: "Hands & Feet", subCategory: "Manicure", serviceName: "O3 / Kiana", price: 1200 },
  
  { serviceID: "hf007", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "Traditional", price: 600 },
  { serviceID: "hf008", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "Lotus", price: 700 },
  { serviceID: "hf009", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "Deluxe", price: 800 },
  { serviceID: "hf010", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "D-Tan", price: 900 },
  { serviceID: "hf011", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "Crystal", price: 1000 },
  { serviceID: "hf012", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "Raaga", price: 1200 },
  { serviceID: "hf013", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "O3 / Kiana", price: 1500 },
  { serviceID: "hf014", primaryCategory: "Hands & Feet", subCategory: "Pedicure", serviceName: "Alga", price: 1800 },
  
  // Hair Removal Services
  { serviceID: "hr001", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Eyebrow + Upper Lips", price: 50 },
  { serviceID: "hr002", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Eyebrow", price: 50 },
  { serviceID: "hr003", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Upperlip", price: 50 },
  { serviceID: "hr004", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Forehead", price: 50 },
  { serviceID: "hr005", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Chin", price: 50 },
  { serviceID: "hr006", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Lower Lip", price: 30 },
  { serviceID: "hr007", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Full Face Threading", price: 350 },
  { serviceID: "hr008", primaryCategory: "Hair Removal", subCategory: "Threading", serviceName: "Side Locks", price: 100 },
  
  { serviceID: "hr009", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Eyebrows", price: 100 },
  { serviceID: "hr010", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Upper Lips", price: 50 },
  { serviceID: "hr011", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Chin", price: 50 },
  { serviceID: "hr012", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Nose", price: 50 },
  { serviceID: "hr013", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Lower Lip", price: 50 },
  { serviceID: "hr014", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Forehead", price: 100 },
  { serviceID: "hr015", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Ear Wax", price: 100 },
  { serviceID: "hr016", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Side Locks", price: 150 },
  { serviceID: "hr017", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Neck Wax", price: 250 },
  { serviceID: "hr018", primaryCategory: "Hair Removal", subCategory: "Face Wax", serviceName: "Full Face", price: 550 },
  
  // Men's Services
  { serviceID: "ms001", primaryCategory: "Men's Services", subCategory: "Grooming", serviceName: "Basic Hair Cut", price: 150 },
  { serviceID: "ms002", primaryCategory: "Men's Services", subCategory: "Grooming", serviceName: "Hair Cut", price: 250 },
  { serviceID: "ms003", primaryCategory: "Men's Services", subCategory: "Grooming", serviceName: "Advance Hair Cut", price: 350 },
  { serviceID: "ms004", primaryCategory: "Men's Services", subCategory: "Grooming", serviceName: "Beard Trim", price: 150 },
  { serviceID: "ms005", primaryCategory: "Men's Services", subCategory: "Grooming", serviceName: "Threading", price: 100 },
  { serviceID: "ms006", primaryCategory: "Men's Services", subCategory: "Grooming", serviceName: "Head Massage", price: 350 },
  
  { serviceID: "ms007", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Hair Colour L'Oreal", price: 800 },
  { serviceID: "ms008", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Raaga Colour", price: 600 },
  { serviceID: "ms009", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Godrej Pro Colour", price: 700 },
  { serviceID: "ms010", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Inova Colour", price: 1200 },
  { serviceID: "ms011", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Schwarzkopf Colour", price: 1000 },
  { serviceID: "ms012", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Beard Colour", price: 300, priceModifier: "300/400/500/600" },
  { serviceID: "ms013", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Colour Application", price: 250 },
  { serviceID: "ms014", primaryCategory: "Men's Services", subCategory: "Colour", serviceName: "Colour Streax", price: 1000 },
  
  { serviceID: "ms015", primaryCategory: "Men's Services", subCategory: "Skin", serviceName: "Face Scrub", price: 200 },
  { serviceID: "ms016", primaryCategory: "Men's Services", subCategory: "Skin", serviceName: "Face Massage Cream", price: 300, priceModifier: "300/400/500/600" },
  { serviceID: "ms017", primaryCategory: "Men's Services", subCategory: "Skin", serviceName: "Face Pack", price: 200 },
  
  { serviceID: "ms018", primaryCategory: "Men's Services", subCategory: "Treatments", serviceName: "Hair Rebounding", price: 2000 },
  
  { serviceID: "ms019", primaryCategory: "Men's Services", subCategory: "Waxing", serviceName: "Rica Arm Wax", price: 1000 },
  { serviceID: "ms020", primaryCategory: "Men's Services", subCategory: "Waxing", serviceName: "Rica Leg Wax", price: 1000 },
  { serviceID: "ms021", primaryCategory: "Men's Services", subCategory: "Waxing", serviceName: "Rica Chest & Back", price: 2000 },
  { serviceID: "ms022", primaryCategory: "Men's Services", subCategory: "Waxing", serviceName: "Full Body Wax", price: 4500 },
  
  { serviceID: "ms023", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "Krylon", price: 1500 },
  { serviceID: "ms024", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "Makeup Studio", price: 2000 },
  { serviceID: "ms025", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "Mac", price: 3000 },
  { serviceID: "ms026", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "Air Brush", price: 4000 },
  { serviceID: "ms027", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "HD", price: 5000 },
  { serviceID: "ms028", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "Silicon", price: 6000 },
  { serviceID: "ms029", primaryCategory: "Men's Services", subCategory: "Groom Makeup", serviceName: "Celebrity", price: 7000 },
];

export const primaryCategories = Array.from(new Set(services.map(s => s.primaryCategory)));

export function getServicesByCategory(category: string): Service[] {
  return services.filter(s => s.primaryCategory === category);
}

export function getSubCategories(primaryCategory: string): string[] {
  const categoryServices = services.filter(s => s.primaryCategory === primaryCategory);
  return Array.from(new Set(categoryServices.map(s => s.subCategory)));
}

export function getServicesBySubCategory(primaryCategory: string, subCategory: string): Service[] {
  return services.filter(s => s.primaryCategory === primaryCategory && s.subCategory === subCategory);
}
