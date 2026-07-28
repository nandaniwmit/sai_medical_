import React, { useState } from 'react';
import { Phone, MessageSquare, X, Send, Clock, User, Home, FileText, ShoppingBag, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppOrderForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicines: '',
    hasPrescription: 'No',
    message: '',
    deliveryTime: 'As soon as possible'
  });

  // Watch scroll to show "Back To Top"
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const businessNumber = '07091951834'; // From Prompt
    
    // Format the WhatsApp message exactly as specified
    const textMessage = `Hello Sai Medical, I want to place a Medicine Order:
------------------------------------------
👤 *Customer Name:* ${formData.customerName}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'N/A'}
📍 *Delivery Address:* ${formData.address}
💊 *Medicine(s) Required:* ${formData.medicines}
📄 *Prescription attached/available:* ${formData.hasPrescription}
🕒 *Preferred Time:* ${formData.deliveryTime}
📝 *Notes:* ${formData.message || 'None'}
------------------------------------------
Please confirm availability and the total billing amount. Thank you!`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${businessNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 items-end">
        
        {/* Back To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={scrollToTop}
              className="p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-all duration-300 group"
              aria-label="Back to Top"
              id="back-to-top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Button */}
        <a
          href="tel:+917091951834"
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base border border-blue-500/20"
          id="floating-call-btn"
        >
          <Phone size={18} className="animate-pulse" />
          <span className="hidden md:inline">Call Sai Medical</span>
        </a>

        {/* Floating WhatsApp Order Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 bg-[#0A8F6A] text-white px-5 py-4 rounded-full shadow-2xl hover:bg-[#077053] hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base border border-emerald-500/20 group"
          id="floating-whatsapp-btn"
        >
          <MessageSquare size={22} className="group-hover:rotate-12 transition-transform" />
          <span>Order via WhatsApp</span>
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-bounce">
            FREE DEL
          </span>
        </button>

      </div>

      {/* Modern WhatsApp Order Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 dark:border-slate-800"
              id="whatsapp-order-modal"
            >
              
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0A8F6A] to-emerald-700 p-6 text-white relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2.5 rounded-xl">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Fast WhatsApp Order</h3>
                    <p className="text-xs text-emerald-100 mt-0.5">Place your order directly to Sai Medical Pharmacy</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSendWhatsApp} className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
                
                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <User size={14} className="text-[#0A8F6A]" /> Customer Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    placeholder="e.g. Rajat Kumar"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                  />
                </div>

                {/* Contact Number & Email in Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Phone size={14} className="text-[#0A8F6A]" /> Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 7091951834"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      📬 Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rajat@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Medicine List */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    💊 Medicine Required & Quantity *
                  </label>
                  <textarea
                    name="medicines"
                    required
                    rows={2}
                    placeholder="e.g. Dolo 650mg (2 Strips), Zincovit (1 Strip)"
                    value={formData.medicines}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                  />
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Home size={14} className="text-[#0A8F6A]" /> Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={2}
                    placeholder="e.g. Flat 302, Sai Apartment, A P Colony, Gaya"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                  />
                </div>

                {/* Prescription Status & Delivery Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <FileText size={14} className="text-[#0A8F6A]" /> Has Prescription?
                    </label>
                    <select
                      name="hasPrescription"
                      value={formData.hasPrescription}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                    >
                      <option value="Yes">Yes (Will share photo on WhatsApp)</option>
                      <option value="No">No (Over-The-Counter Medicine)</option>
                      <option value="Will bring during collection">Will bring original copy on pickup</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Clock size={14} className="text-[#0A8F6A]" /> Preferred Delivery Time
                    </label>
                    <input
                      type="text"
                      name="deliveryTime"
                      placeholder="e.g. Evening 6 PM - 8 PM"
                      value={formData.deliveryTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    📝 Special Instructions or Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="e.g. Please send the bill first. Keep changes for 500."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-800 dark:text-white transition-all text-sm"
                  />
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#0A8F6A] hover:bg-[#077053] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg text-sm cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Send Order to WhatsApp</span>
                  </button>
                  <a
                    href="tel:+917091951834"
                    className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm border border-slate-200 dark:border-slate-700"
                  >
                    <Phone size={16} />
                    <span>Call Store Instead</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-400 text-center italic mt-2">
                  * All prescription drugs require sharing a valid prescription on WhatsApp. 100% genuine guaranteed.
                </p>

              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
