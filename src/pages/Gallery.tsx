import React, { useState } from 'react';
import { Eye, X, ZoomIn, ArrowLeft, ArrowRight, MessageSquare, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_IMAGES = [
  {
    id: 1,
    category: 'Store Exterior',
    title: 'Sai Medical Front View',
    desc: 'The clean, welcoming entrance of Sai Medical in AP Colony, Gaya. Highly accessible ground floor storefront.',
    url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'Medicine Shelves',
    title: 'Organized Prescription Bay',
    desc: 'Systematically categorized medication bays. Clean, dust-free shelves storing critical molecules for cardiac and diabetic treatments.',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'Diagnostics & Equipment',
    title: 'Advanced Diagnostic Displays',
    desc: 'Automated blood glucose meters, UPPER-arm BP cuffs, nebulizers, and medical pulse oximeters from Omron and Roche.',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'Healthcare Products',
    title: 'Pediatric & Baby Essentials',
    desc: 'Complete range of baby formulas, hypoallergenic powders, skin oils, and baby food secure and dry.',
    url: 'https://images.unsplash.com/photo-1631217818202-90f4e77aa6ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    category: 'Healthcare Products',
    title: 'Certified Supplements Range',
    desc: 'FSSAI-certified nutrition containers, plant proteins, multivitamins, and growth powders on clear showcases.',
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    category: 'Diagnostics & Equipment',
    title: 'Surgical & Dressing supplies',
    desc: 'Sterile cotton, high-elasticity bandages, orthopedic wrist/knee braces, and surgical grade dressing supplies in mint storage.',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const categories = ['All', 'Store Exterior', 'Medicine Shelves', 'Healthcare Products', 'Diagnostics & Equipment'];

  // Filter images based on category selection
  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleInquire = (title: string) => {
    const businessNumber = '07091951834';
    const textMessage = `Hello Sai Medical, I was browsing your store gallery and want to inquire about:
- Product/Section: ${title}
Please let me know if these supplies or specific brands are available for order. Thank you!`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-20 pt-24 pb-16" id="gallery-page">
      
      {/* 1. HEADER HERO */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
            Store Gallery & Tour
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            A Virtual Tour of Sai Medical Gaya
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Verify our organized medicine shelves, premium hygiene products, and high-accuracy diagnostic devices stored with impeccable cleanliness standards.
          </p>
        </div>
      </section>

      {/* 2. FILTER & GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Selector Menu */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIdx(null); // Reset active index just in case
              }}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-md shadow-emerald-500/10'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Info note */}
        <div className="flex items-start space-x-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-150 dark:border-slate-800 p-4 rounded-xl max-w-3xl mx-auto text-xs text-slate-500 leading-relaxed">
          <Info size={16} className="text-[#0A8F6A] shrink-0 mt-0.5" />
          <p>
            All pictures shown below are accurate, real-world representations of the high storage hygiene, temperature preservation, and catalog organization maintained at QXMJ+2XC, AP Colony, Gaya. Click on any picture to zoom and inspect closely.
          </p>
        </div>

        {/* Image Grid with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImageIdx(idx)}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/35 transition-colors duration-300 flex items-center justify-center">
                  <div className="p-3 bg-[#0A8F6A] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ZoomIn size={18} />
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm uppercase tracking-wider">
                  {img.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight group-hover:text-[#0A8F6A] transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {selectedImageIdx !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImageIdx(null)}
          >
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Left Side: Zoomed Image Section */}
              <div className="flex-1 bg-black/50 relative flex items-center justify-center min-h-[40vh] max-h-[60vh] lg:max-h-none">
                <img 
                  src={filteredImages[selectedImageIdx].url} 
                  alt={filteredImages[selectedImageIdx].title} 
                  className="w-full h-full object-contain max-h-[55vh] lg:max-h-[70vh]"
                  referrerPolicy="no-referrer"
                />

                {/* Close Button */}
                <button 
                  onClick={() => setSelectedImageIdx(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>

                {/* Navigation Sliders */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 p-2 bg-black/40 hover:bg-[#0A8F6A] text-white rounded-full transition-all cursor-pointer hover:scale-105"
                  aria-label="Previous Image"
                >
                  <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 p-2 bg-black/40 hover:bg-[#0A8F6A] text-white rounded-full transition-all cursor-pointer hover:scale-105"
                  aria-label="Next Image"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Side: Information Panel */}
              <div className="w-full lg:w-80 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#0A8F6A] bg-[#0A8F6A]/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">
                      {filteredImages[selectedImageIdx].category}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {filteredImages[selectedImageIdx].title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {filteredImages[selectedImageIdx].desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Store Assistance</p>
                  <p className="text-[11px] text-slate-400 italic">Interested in this division or need specific medicines stored here?</p>
                  
                  <button
                    onClick={() => handleInquire(filteredImages[selectedImageIdx!].title)}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 bg-[#0A8F6A] hover:bg-[#077053] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
