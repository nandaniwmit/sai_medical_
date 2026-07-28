import MedicineStockChecker from '../components/MedicineStockChecker';
import { ShieldCheck, ArrowRight, Phone, MessageSquare, Heart, CheckCircle } from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    id: 'prescription',
    icon: '📋',
    name: 'Prescription Medicines',
    desc: 'Critical clinical medications for chronic treatments, cardiac health, diabetes management, neuropathology, and respiratory care. Fully verified batch tracks.',
    items: ['Diabetes Care (Metformin, Glimer)', 'Cardiac Support (Atorvastatin, Telmisartan)', 'Anti-biotics (Amoxycillin, Clavam)', 'Inhalers & Bronchodilators'],
    ctaText: 'Upload Prescription',
    badge: 'Requires MD Prescription'
  },
  {
    id: 'devices',
    icon: '🩺',
    name: 'Healthcare Devices',
    desc: 'Authorized clinical diagnostic equipment for home-based parameter checks. High accuracy Omron, Accu-Chek, and Dr. Trust diagnostic assets.',
    items: ['Digital BP Monitors', 'Glucometers & Test Strips', 'Nebulizers & Vaporizers', 'Pulse Oximeters & Thermometers'],
    ctaText: 'Inquire Availability',
    badge: '1 Year Warranty Support'
  },
  {
    id: 'otc',
    icon: '💊',
    name: 'OTC Medicines & Pain Relief',
    desc: 'Fast-acting safe over-the-counter drugs, analgesics, digestive tablets, nasal drops, herbal cough syrups, and pain relief ointments.',
    items: ['Volini, Moov Pain Relievers', 'Vicks, Crocin Common Cold Cold', 'Digestives (Pudin Hara, Eno)', 'First Aid Kits & Antiseptics'],
    ctaText: 'Direct Order',
    badge: 'No Prescription Needed'
  },
  {
    id: 'supplements',
    icon: '🌿',
    name: 'Nutritional Supplements',
    desc: 'High-potency multivitamins, calcium complexes, joint lubricants, immune boosters, pediatric nutrition, and whey protein supplements.',
    items: ['Zincovit, Becosules Vitamins', 'Calcium & Vitamin D3 Softgels', 'Protein Powders (Protinex, Ensure)', 'Omega-3 Fish Oil Capsules'],
    ctaText: 'Order Supplements',
    badge: '100% Organic & FSSAI Approved'
  },
  {
    id: 'babycare',
    icon: '🍼',
    name: 'Baby & Pediatric Care',
    desc: 'Gentle, hypoallergenic products, organic cereals, certified milk formulas, pediatric skincare powders, premium diapers, and soft wipes.',
    items: ['Pampers, MamyPoko Pants', 'Himalaya & Johnson Baby Products', 'Infant Formulas (Lactogen, Similac)', 'Pediatric Cough & Colic Support'],
    ctaText: 'Order Baby Care',
    badge: 'Pediatrician Approved'
  },
  {
    id: 'personal',
    icon: '🛁',
    name: 'Personal Care & Hygiene',
    desc: 'Dermatologist-recommended clinical moisturizers, medicated face washes, antiseptic liquids, oral hygiene supplies, and personal sanitizers.',
    items: ['Dettol, Savlon Antiseptics', 'Medicated Shampoos & Wash Creams', 'Oral B & Sensodyne Care', 'N95 Medical Face Masks'],
    ctaText: 'Order Personal Care',
    badge: 'Clinically Tested'
  }
];

export default function Services() {
  return (
    <div className="space-y-24 pt-24 pb-16" id="services-page">
      
      {/* 1. HEADER HERO */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
            Medicine Divisions & Inventory
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Comprehensive Medicines & Healthcare Products
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Sai Medical supplies more than 5,000 distinct pharmaceutical molecules, pediatric care, diagnostic health machines, and surgical accessories.
          </p>
        </div>
      </section>

      {/* 2. EXCLUSIVE FEATURE: DYNAMIC MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="stock-checker-section">
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center space-x-1.5 text-[#0A8F6A] font-bold text-xs uppercase tracking-wider">
            <CheckCircle size={16} />
            <span>Digital Inventory Terminal</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Search Medicine Stock & Price Instantly
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Type the brand name or active chemical salt below to verify if it is in stock at our Gaya counter. Live price list included.
          </p>
        </div>
        
        {/* Render Stock Checker Component */}
        <MedicineStockChecker />
      </section>

      {/* 3. CATEGORY-WISE PHARMACEUTICAL SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="service-catalogue">
        
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Detailed Divisions</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Our Medical Store Services & Divisions
          </h2>
          <p className="text-xs text-slate-500">Each division is monitored under verified pharmacist compliance schedules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="p-6 space-y-4">
                
                {/* Icon & Badge */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800/80 rounded-xl flex items-center justify-center font-bold text-xl shadow-inner border border-slate-100 dark:border-slate-700">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {cat.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">{cat.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{cat.desc}</p>
                </div>

                {/* Popular items lists */}
                <div className="pt-2">
                  <p className="text-[10px] uppercase font-bold text-[#0A8F6A] tracking-wider mb-2">Popular In-Stock Brands</p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="text-[#0A8F6A]">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button CTA per Card */}
              <div className="p-6 pt-0 border-t border-slate-50 dark:border-slate-800/50 flex space-x-2 bg-slate-50/50 dark:bg-slate-900/50">
                <button
                  onClick={() => {
                    const btn = document.getElementById('floating-whatsapp-btn');
                    if (btn) btn.click();
                  }}
                  className="flex-1 py-2.5 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#0A8F6A] hover:text-[#077053] dark:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <MessageSquare size={14} />
                  <span>{cat.ctaText}</span>
                </button>
                <a
                  href="tel:+917091951834"
                  title="Call Sai Medical"
                  className="p-2.5 bg-[#0A8F6A] hover:bg-[#077053] text-white rounded-xl transition-colors flex items-center justify-center shadow-sm"
                >
                  <Phone size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. GUIDELINES TO UPLOAD PRESCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="prescription-guide">
        <div className="bg-slate-900 p-8 md:p-12 rounded-3xl text-white">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Legal & Compliance Notice</span>
            <h3 className="text-2xl md:text-3xl font-black">How to Secure Prescription Drugs</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              In accordance with the Drugs and Cosmetics Act of India, Scheduled drugs (including antibiotic therapies, critical psychotropics, sleeping medications, cardiac pills) can only be dispensed on presentation of a valid doctor's prescription. Follow these simple rules when sharing via WhatsApp:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/50 space-y-2">
                <p className="font-bold text-[#0A8F6A] text-sm">1. Take a Clear Photo</p>
                <p className="text-xs text-slate-400">Ensure the doctor's stamp, registration number, patient's name, and date are fully visible.</p>
              </div>
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/50 space-y-2">
                <p className="font-bold text-blue-400 text-sm">2. Check Medication List</p>
                <p className="text-xs text-slate-400">Circle the specific medicines you require if there are multiple prescriptions.</p>
              </div>
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/50 space-y-2">
                <p className="font-bold text-amber-400 text-sm">3. Keep Original Handy</p>
                <p className="text-xs text-slate-400">Please produce the physical copy of your prescription during delivery or store collection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
