import { Award, ShieldCheck, Heart, Users, Target, Milestone, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const VALUES = [
  {
    icon: <ShieldCheck size={20} className="text-[#0A8F6A]" />,
    title: '100% Authenticity',
    desc: 'We source exclusively from authorized manufacturers and verified distributors. No counterfeits, ever.'
  },
  {
    icon: <Heart size={20} className="text-red-500" />,
    title: 'Patient-First Compassion',
    desc: 'For us, healthcare is personal. We guide patients and families with deep empathy, providing fair prices and custom service.'
  },
  {
    icon: <Target size={20} className="text-blue-500" />,
    title: 'Clinical Excellence',
    desc: 'We follow continuous compliance training, cold-chain safety preservation, and rigorous pharmaceutical guidelines.'
  }
];

const TIMELINE = [
  {
    year: '2014',
    title: 'The Foundation',
    desc: 'Sai Medical opened its physical doors in A P Colony, Gaya, Bihar, with the core mission of introducing authenticated medicine distribution.'
  },
  {
    year: '2017',
    title: 'Expanding Healthcare SKU',
    desc: 'Expanded our inventory to over 3,000 SKUs, incorporating advanced diagnostic devices, pediatric formulas, and critical surgical supplies.'
  },
  {
    year: '2020',
    title: 'Pandemic Emergency Service',
    desc: 'Served as an essential frontline responder in Gaya, delivering oxygen accessories, immunity drugs, and critical home sanitizers safely.'
  },
  {
    year: '2023',
    title: 'Pristine Cold-Chain Integration',
    desc: 'Installed specialized medical-grade refrigerators to maintain safe cold chains for insulins, cancer drugs, and pediatric vaccines.'
  },
  {
    year: '2026',
    title: 'Digital Order Portal',
    desc: 'Launched our local digital stock checking system and fast WhatsApp order platform to minimize physical queues and enhance patient convenience.'
  }
];

export default function About() {
  return (
    <div className="space-y-24 pt-24 pb-16" id="about-page">
      
      {/* 1. HEADER HERO */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
            About Sai Medical Gaya
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Legacy of Trust and Pharmaceutical Excellence
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover how Sai Medical evolved from a small retail store to Gaya's most reliable and trusted healthcare partner for genuine medication.
          </p>
        </div>
      </section>

      {/* 2. BUSINESS STORY & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">The Sai Medical Story</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Serving Gaya, Bihar with Absolute Honesty and Sincerity
            </h2>
            <div className="text-slate-600 dark:text-slate-400 text-sm space-y-4 leading-relaxed">
              <p>
                Sai Medical was founded in 2014 in Gaya, Bihar. Witnessing the rising influx of unregulated, sub-standard medicines and the challenges local patients faced in finding genuine specialty drugs, we decided to build a state-of-the-art brick-and-mortar pharmacy committed solely to clinical transparency.
              </p>
              <p>
                Over the years, our store has served thousands of families, working closely with qualified local physicians to verify medication accuracy, prevent dosage duplication, and secure highly reliable pharmaceutical products.
              </p>
              <p>
                Whether it's a simple OTC pain relief gel, advanced orthopedic braces, or specialized life-saving cancer therapy drugs, our physical counters maintain impeccable standards that online warehouses simply cannot replicate.
              </p>
            </div>
            
            {/* Mission & Vision Mini Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 space-y-2">
                <span className="text-xs font-bold text-[#0A8F6A] uppercase">Our Mission</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  To provide absolute access to 100% genuine and safe life-saving drugs at highly ethical pricing, fostering a healthier Gaya.
                </p>
              </div>
              <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase">Our Vision</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  To expand local healthcare distribution with pristine temperature protection, digitizing inventory for convenient home support.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 border border-slate-200 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1631217818202-90f4e77aa6ad?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical Store Team" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <p className="text-xs text-[#0A8F6A] font-bold">100% QUALITY PROMISE</p>
              <p className="text-lg font-bold">Rigid physical quality checks on every batch.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-16 border-y border-slate-100 dark:border-slate-800" id="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Unwavering Commitment</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Our Core Professional Values</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The ethical guidelines driving every health interaction, storage protocol, and delivery service we fulfill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{val.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BUSINESS JOURNEY TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="timeline-section">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Our Timeline</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Sai Medical\'s Historical Journey</h2>
          <p className="text-xs text-slate-500">Over a decade of constant evolution, support, and community growth.</p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-8 ml-4 md:ml-24 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Year marker */}
              <div className="absolute -left-[45px] top-0 bg-white dark:bg-slate-950 text-slate-900 dark:text-white p-1 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-mono font-black z-10 w-9 h-9 flex items-center justify-center group-hover:bg-[#0A8F6A] group-hover:text-white group-hover:border-[#0A8F6A] transition-colors shadow-sm">
                {item.year}
              </div>

              {/* Timeline Card */}
              <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. PHARMACIST & OWNER MESSAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="owner-message">
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-[#0a8f6a]/80 p-8 md:p-12 rounded-3xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs text-[#0A8F6A] font-bold uppercase tracking-wider">A Message From The Founder</span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">"Preserving the Ethics of Local Healthcare"</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                "At Sai Medical, we believe a pharmacy is not merely a retail outlet. It is a vital local sanctuary of hope and relief. Every prescription brought to our counters holds a family's trust and a patient's expectations. That is why we refuse to treat pharmaceuticals as quick-moving commodities. We check every expiration date twice, preserve cold storage cycles religiously, and offer genuine multi-brand advice to ensure every parent, grandparent, and baby in Gaya is protected. Thank you for placing your precious trust in us since 2014."
              </p>
              <div className="pt-2">
                <p className="font-black text-white text-sm">Mr. Santosh Kumar</p>
                <p className="text-xs text-[#0A8F6A] font-semibold">Chief Pharmacist & Proprietor, Sai Medical</p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center space-y-2 w-full max-w-xs">
                <p className="text-lg font-black text-white">Need Clinical Advice?</p>
                <p className="text-xs text-slate-300">Speak directly to our verified, registered pharmacist on duty.</p>
                <a 
                  href="tel:+917091951834"
                  className="block mt-4 py-2.5 bg-[#0A8F6A] hover:bg-[#077053] text-white text-xs font-bold rounded-xl transition-all"
                >
                  Call Santosh Kumar
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. STORE INFRASTRUCTURE SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="store-overview">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Behind The Scenes</span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Impeccable Pharmacy Storage Standards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Temperature Control</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Air-conditioned facility and special pharmaceutical cooling units guarantee active medicine compounds do not lose therapeutic efficacy during Gaya’s extreme summers.
            </p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Pragmatic Storage Shelves</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Medicines are categorized alphabetically and therapeutic-wise on pristine shelves, allowing high-precision search and dispensing in under 2 minutes.
            </p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Continuous Power Backup</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Equipped with high-capacity silent inverters and generators ensuring uninterrupted vaccine and insulin refrigeration under power disruptions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
