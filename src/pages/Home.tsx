import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ArrowRight, ShieldAlert, Award, Truck, HeartHandshake, ChevronRight, HelpCircle, UserCheck, Star, Sparkles, BookOpen, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import MedicineStockChecker from '../components/MedicineStockChecker';

// Healthcare Tips Mock
const HEALTH_TIPS = [
  {
    id: 1,
    category: 'Daily Wellness',
    title: 'Understanding Vitamin D & Calcium Absorption',
    desc: 'Taking calcium alone isn\'t enough. Discover how vitamin D plays a critical role in bone development and daily immune health.',
    date: 'July 25, 2026',
    readTime: '3 min read'
  },
  {
    id: 2,
    category: 'Medicine Safety',
    title: 'Why You Must Complete Your Antibiotics Course',
    desc: 'Stopping your prescribed medication early because you "feel better" can trigger drug-resistant superbugs. Always finish the prescribed duration.',
    date: 'July 20, 2026',
    readTime: '4 min read'
  },
  {
    id: 3,
    category: 'Child Care',
    title: 'Newborn Essential Care & Safe Baby Products',
    desc: 'Select hypoallergenic and pediatrician-tested skin solutions for baby care. Avoid harsh chemicals or artificial colors.',
    date: 'July 15, 2026',
    readTime: '5 min read'
  }
];

// FAQS
const FAQS = [
  {
    id: 1,
    q: 'Do you deliver medicines at home in Gaya?',
    a: 'Yes, Sai Medical provides local home delivery of prescription medicines and healthcare products throughout A P Colony and nearby areas in Gaya, Bihar. Contact us on WhatsApp with your prescription to schedule.'
  },
  {
    id: 2,
    q: 'Is a prescription required for all medicines?',
    a: 'For Scheduled H and prescription-only medicines, a valid prescription from a registered doctor is strictly required by law. However, standard Over-The-Counter (OTC) items, vitamins, health monitors, and baby products do not require prescriptions.'
  },
  {
    id: 3,
    q: 'Are the medicines genuine? How do you ensure authenticity?',
    a: 'We source 100% of our inventory directly from licensed pharmaceutical distributors and authorized corporate depots. Every medicine is fully batch-tracked with zero compromise on active ingredient quality.'
  },
  {
    id: 4,
    q: 'Can I check stock availability online before visiting?',
    a: 'Absolutely! Use our built-in digital Medicine Stock Checker on our Services page to search current availability, MRP pricing, and batch status instantly.'
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubscribed(true);
    setTimeout(() => setEmailSubscribed(false), 5000);
  };

  return (
    <div className="space-y-24 pb-12" id="home-page">
      
      {/* 1. PREMIUM HERO BANNER */}
      <section className="relative min-h-[90vh] flex items-center pt-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden animate-fade-in" id="hero-section">
        {/* Visual Background Accent (Minimalist Grid Pattern or Soft Gradients) */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0A8F6A 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-100 dark:border-emerald-900/30"
              >
                <Sparkles size={14} />
                <span>Open & Serving Gaya, Bihar Since 2014</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight"
              >
                Your Trusted Medical Store for <span className="text-[#0A8F6A]">Genuine Medicines.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
              >
                Providing healthcare products, surgical supplies, baby care, and daily medical essentials at affordable prices at A P Colony.
              </motion.p>

              {/* Specific CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button 
                  onClick={() => {
                    const btn = document.getElementById('floating-whatsapp-btn');
                    if (btn) btn.click();
                  }}
                  className="inline-flex items-center space-x-2 bg-[#0A8F6A] hover:bg-[#077053] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-200 dark:shadow-none transition-transform hover:-translate-y-0.5 text-sm md:text-base cursor-pointer"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Order</span>
                </button>

                <a 
                  href="tel:+917091951834"
                  className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold px-6 py-3.5 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 text-sm md:text-base"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                
                <a 
                  href="https://maps.google.com/?q=QXMJ%2B2XC,+A+P+Colony,+Gaya,+Bihar+823001"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold px-6 py-3.5 rounded-xl transition-all border border-slate-200 dark:border-slate-800 text-sm md:text-base"
                >
                  <MapPin size={18} className="text-[#0A8F6A]" />
                  <span>Get Directions</span>
                </a>
              </motion.div>

              {/* Mini Stats Banner */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 max-w-lg"
              >
                <div>
                  <p className="text-2xl font-black text-[#0A8F6A]">10,000+</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Patients Served</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800 dark:text-white">100%</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Authentic Drugs</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400">Serving</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Gaya Since 2014</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column Interactive Stock Checker Dashboard */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 w-full"
            >
              <div className="shadow-2xl shadow-slate-200/50 dark:shadow-none">
                <MedicineStockChecker />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-preview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-[4/3] bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
              alt="Inside Sai Medical Store" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="text-xs text-[#0A8F6A] font-bold uppercase tracking-widest">Store Overview</p>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">AP Colony, Gaya’s Premium Brick & Mortar Pharmacy</h4>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">A Decade of Dedicated Care and Authentic Pharmacy Services</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded with the mission of delivering reliable and high-quality pharmaceutical services, Sai Medical has become Gaya’s premier choice for genuine healthcare requirements. We handle premium medicine ranges, chronic treatment medicines, child health support, and critical life-saving items.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
                <p className="text-xs text-[#0A8F6A] font-bold">FOUNDED</p>
                <p className="text-lg font-black text-slate-900 dark:text-white mt-1">2014</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Serving with pristine healthcare ethics.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
                <p className="text-xs text-blue-600 font-bold">INVENTORY</p>
                <p className="text-lg font-black text-slate-900 dark:text-white mt-1">5000+ SKU</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Every healthcare asset you require.</p>
              </div>
            </div>
            <div className="pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#0A8F6A] hover:text-[#077053] transition-colors group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 PREVIEW) */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-100 dark:border-slate-800/80" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Comprehensive Pharmacy Services</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Healthcare Solutions Crafted Around Your Safety</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Browse our premier medicine divisions. We supply essential diagnostics, critical healthcare supplements, and daily essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/10 text-[#0A8F6A] rounded-xl flex items-center justify-center font-bold text-lg">💊</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Prescription Medicines</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Critical life-saving prescription medicines spanning diabetes care, cardiac medication, gastrointestinal, and neuro-care.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-1 text-xs font-bold text-[#0A8F6A] hover:underline">
                <span>View Catalogue</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">🩺</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Health Devices & Equipment</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                High-accuracy diagnostic monitors including automated BP monitors, blood glucose meters, pulse oximeters, and nebulizers.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 hover:underline">
                <span>Check Availability</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg">🍼</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Baby Care Essentials</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Complete range of baby formula, organic cereals, diapers, hypoallergenic baby washes, skin protection powders, and oils.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-1 text-xs font-bold text-amber-600 hover:underline">
                <span>Browse Products</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-600 rounded-xl flex items-center justify-center font-bold text-lg">🌿</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Herbal & OTC Medicines</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Reliable over-the-counter tablets, herbal cough syrups, pain-relief creams, skin care ointments, and immunity support.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-1 text-xs font-bold text-rose-600 hover:underline">
                <span>Explore OTC</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg">🧬</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nutritional Supplements</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Premium multi-vitamin supplements, protein boosters, calcium fortifiers, and pediatric growth formulas.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 hover:underline">
                <span>View Supplements</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">🛁</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Care Range</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Dermatologist-recommended skin creams, professional medical face washes, hand sanitizers, and clinical oral care products.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-1 text-xs font-bold text-purple-600 hover:underline">
                <span>Explore Care</span>
                <ChevronRight size={12} />
              </Link>
            </div>

          </div>

          <div className="text-center pt-4">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0A8F6A] hover:bg-[#077053] text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Explore All Medicine Divisions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="why-choose-us">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Sai Medical Standards</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Why Gaya Prefers Sai Medical</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-500/10 text-[#0A8F6A] rounded-full flex items-center justify-center mx-auto text-xl">✓</div>
            <h3 className="font-bold text-slate-900 dark:text-white">100% Genuine Brands</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              No counterfeit medications. Every drug is checked directly under rigid local compliance standards.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center space-y-3">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center mx-auto text-xl">🚚</div>
            <h3 className="font-bold text-slate-900 dark:text-white">Prompt Local Delivery</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Serving citizens across Gaya with door-to-door, secure delivery. Save travel time.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center space-y-3">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto text-xl">❄️</div>
            <h3 className="font-bold text-slate-900 dark:text-white">Cold Chain Maintenance</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Continuous refrigeration for temperature-sensitive drugs like life-saving insulins and vaccines.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center space-y-3">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center mx-auto text-xl">🤝</div>
            <h3 className="font-bold text-slate-900 dark:text-white">Generous Fair Pricing</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Get genuine healthcare at highly affordable MRP rates without arbitrary online subscription bindings.
            </p>
          </div>

        </div>
      </section>

      {/* 5. FEATURED PRODUCTS INVENTORY PREVIEW */}
      <section className="bg-[#0A8F6A]/5 dark:bg-slate-900/30 py-16 border-y border-slate-100 dark:border-slate-800/50" id="featured-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Store Highlights</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">In-Demand Healthcare Essentials</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Check our highly requested medicinal and diagnostic items in stock today.
              </p>
            </div>
            <Link 
              to="/services" 
              className="px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 text-[#0A8F6A] dark:text-emerald-400 border border-slate-200 dark:border-slate-700 text-sm font-bold rounded-xl transition-all shadow-sm"
            >
              Check All 18 Items
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Prod 1 */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold text-blue-600 px-2 py-0.5 bg-blue-50 dark:bg-blue-950/40 rounded">Devices</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Omron BP Monitor</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Automated upper-arm diagnostic monitor.</p>
                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-white">₹2,440.00</span>
                  <span className="line-through">₹2,990</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const btn = document.getElementById('floating-whatsapp-btn');
                  if (btn) btn.click();
                }}
                className="mt-4 w-full py-2 bg-[#0A8F6A]/10 hover:bg-[#0A8F6A] text-[#0A8F6A] hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
              >
                Reserve Now
              </button>
            </div>

            {/* Prod 2 */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold text-emerald-600 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 rounded">Supplements</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Zincovit Tablets</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Essential multivitamin & multimineral support.</p>
                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-white">₹105.00</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const btn = document.getElementById('floating-whatsapp-btn');
                  if (btn) btn.click();
                }}
                className="mt-4 w-full py-2 bg-[#0A8F6A]/10 hover:bg-[#0A8F6A] text-[#0A8F6A] hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
              >
                Reserve Now
              </button>
            </div>

            {/* Prod 3 */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold text-amber-600 px-2 py-0.5 bg-amber-50 dark:bg-amber-950/40 rounded">Pediatric</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Himalaya Baby Powder</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Gentle organic skin powder for babies.</p>
                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-white">₹160.00</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const btn = document.getElementById('floating-whatsapp-btn');
                  if (btn) btn.click();
                }}
                className="mt-4 w-full py-2 bg-[#0A8F6A]/10 hover:bg-[#0A8F6A] text-[#0A8F6A] hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
              >
                Reserve Now
              </button>
            </div>

            {/* Prod 4 */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold text-rose-600 px-2 py-0.5 bg-rose-50 dark:bg-rose-950/40 rounded">OTC Relief</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Volini pain Gel</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Instant muscle and joint pain relief gel.</p>
                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-white">₹145.00</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const btn = document.getElementById('floating-whatsapp-btn');
                  if (btn) btn.click();
                }}
                className="mt-4 w-full py-2 bg-[#0A8F6A]/10 hover:bg-[#0A8F6A] text-[#0A8F6A] hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
              >
                Reserve Now
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="reviews-preview">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Patient Testimonials</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">What Our Local Gaya Customers Say</h2>
          <p className="text-xs text-slate-500">Verified local business summaries collected from customer logs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
              "Sai Medical is my go-to store in AP Colony. I buy diabetic medicines for my parents every month. They always have fresh stock and offer good support."
            </p>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center space-x-3">
              <div className="w-9 h-9 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-xs text-[#0A8F6A]">
                SK
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Sanjay Kumar</p>
                <p className="text-[10px] text-slate-400">Gaya Local Citizen</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
              "Ordered customized surgical supplies. The medicines are 100% genuine and the pricing is very fair. No overcharging like some places."
            </p>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center space-x-3">
              <div className="w-9 h-9 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-xs text-[#0A8F6A]">
                NP
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Nisha Pathak</p>
                <p className="text-[10px] text-slate-400">Resident, AP Colony</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
              "Very fast delivery service on WhatsApp. I just uploaded my prescription and they brought the baby care essentials to my door within an hour!"
            </p>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center space-x-3">
              <div className="w-9 h-9 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-xs text-[#0A8F6A]">
                AK
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Abhishek K.</p>
                <p className="text-[10px] text-slate-400">Gaya Resident</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="faq-preview">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Common Inquiries</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-800 dark:text-slate-100 hover:text-[#0A8F6A] transition-colors"
                >
                  <span className="flex items-center space-x-3 text-sm md:text-base">
                    <HelpCircle size={18} className="text-[#0A8F6A] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-lg text-slate-400 pl-3">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. HIGH-CONVERTING CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-cta">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-[#0A8F6A] p-8 md:p-12 rounded-3xl text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
            <PlusIconLarge />
          </div>
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">Direct Delivery Available</span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">Need Medicines Urgently? Save Time and Order on WhatsApp Now!</h2>
            <p className="text-blue-50 text-sm leading-relaxed">
              We deliver authentic pediatric care, elderly prescription care, daily OTC pain relievers, and sanitization support to your doorstep in Gaya. Avoid queues and preserve your safety.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => {
                  const btn = document.getElementById('floating-whatsapp-btn');
                  if (btn) btn.click();
                }}
                className="px-6 py-3.5 bg-white text-blue-700 hover:bg-slate-50 text-sm font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Open Order Form
              </button>
              <a 
                href="tel:+917091951834"
                className="px-6 py-3.5 bg-blue-800 hover:bg-blue-900 text-white text-sm font-bold rounded-xl shadow-lg transition-all border border-blue-600 flex items-center space-x-1.5"
              >
                <Phone size={16} />
                <span>Call Store: +91 70919 51834</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="health-tips">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Health Education</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Medicinal Knowledge & Health Tips</h2>
            <p className="text-sm text-slate-500">Expert articles from our local pharmaceutical consulting staff.</p>
          </div>
          <Link 
            to="/services" 
            className="text-xs font-bold text-[#0A8F6A] hover:underline flex items-center space-x-1"
          >
            <span>Explore Clinical Catalogue</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_TIPS.map((tip) => (
            <div key={tip.id} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-bold text-[#0A8F6A]">{tip.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {tip.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2">{tip.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">{tip.desc}</p>
              </div>
              <div className="border-t border-slate-200/50 dark:border-slate-800/80 pt-4 mt-5 flex items-center justify-between text-[11px] text-slate-400">
                <span>{tip.date}</span>
                <span className="text-[#0A8F6A] font-bold">Medicinal Safety</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="newsletter">
        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800/80 text-center max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 bg-emerald-500/10 text-[#0A8F6A] rounded-full flex items-center justify-center mx-auto text-xl">📧</div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Subscribe for Safe Meds & Health Alerts</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Get notified of seasonal medicine stock updates, emergency medical notices, and safety clinical advice from Sai Medical.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0A8F6A] hover:bg-[#077053] text-white text-xs font-bold rounded-xl transition-all shadow cursor-pointer whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          {emailSubscribed && (
            <p className="text-xs text-[#0A8F6A] font-bold animate-pulse">
              🎉 Thank you! You have been subscribed for local health bulletins.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}

// Custom decorative large plus sign
function PlusIconLarge() {
  return (
    <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
      <path d="M12 2v20M2 12h20" strokeLinecap="round" />
    </svg>
  );
}
