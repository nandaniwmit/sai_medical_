import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prefill whatsapp message from the form as a fallback or handle local state submission
    const businessNumber = '07091951834';
    const textMessage = `Hello Sai Medical, I submitted a contact form on your website:
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Subject:* ${formData.subject}
- *Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      // Prompt the user to optionally send this via WhatsApp for instant reply
      if (window.confirm("Would you like to send this inquiry directly to our pharmacist via WhatsApp for a 5-minute reply?")) {
        window.open(whatsappUrl, '_blank');
      }
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 1500);
  };

  return (
    <div className="space-y-24 pt-24 pb-16" id="contact-page">
      
      {/* 1. HEADER HERO */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
            Contact Sai Medical
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            We are Here to Help You Feel Better
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have questions about medicine availability, pediatric supplies, or critical healthcare devices? Contact us directly or visit our physical storefront.
          </p>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Direct Channels</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Store Contact Details</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with Mr. Santosh Kumar or our active duty pharmaceutical assistants.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              <div className="flex items-start space-x-4 bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <MapPin className="text-[#0A8F6A] shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Store Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">QXMJ+2XC, A P Colony, Gaya, Bihar 823001</p>
                  <a 
                    href="https://maps.google.com/?q=QXMJ%2B2XC,+A+P+Colony,+Gaya,+Bihar+823001"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] text-[#0A8F6A] hover:underline pt-1"
                  >
                    <span>Get Directions on Map</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <Phone className="text-blue-600 shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Call Center</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Speak directly to our Gaya pharmacist.</p>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-1">
                    <a href="tel:+917091951834" className="hover:text-blue-600 transition-colors">+91 70919 51834</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <MessageSquare className="text-emerald-600 shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">WhatsApp Orders</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">For home delivery or self-pickup reservations.</p>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-1">
                    <a href="https://wa.me/917091951834" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A8F6A] transition-colors">+91 70919 51834</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <Mail className="text-purple-600 shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">General complaints or commercial inquiries.</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white mt-1">
                    <a href="mailto:info@saimedicalgaya.com" className="hover:text-purple-600 transition-colors">info@saimedicalgaya.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <Clock className="text-amber-600 shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Store Hours</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Open Daily Monday to Sunday</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white mt-0.5">08:00 AM - 10:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
            
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Submit a Digital Inquiry</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fill in your details below and our staff will respond to you within 2-3 working hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ramesh Singh"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 7091951834"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Inquiry Category</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Medicine Availability">Medicine Availability</option>
                  <option value="Health Devices / Nebulizers">Health Devices & Monitors</option>
                  <option value="Home Delivery Service">Home Delivery Service</option>
                  <option value="Complaint / Feedback">Complaint & Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Your Message / Medicine names *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="e.g. Please let me know if Glimer-M2 tablets are in stock or if they can be ordered by tomorrow..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                />
              </div>

              {/* Form Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-[#0A8F6A] hover:bg-[#077053] disabled:bg-slate-400 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm"
                >
                  <Send size={16} />
                  <span>{isSubmitted ? 'Submitting...' : 'Submit Inquiry'}</span>
                </button>
              </div>

              {isSubmitted && (
                <div className="flex items-center space-x-2 text-[#0A8F6A] font-bold text-xs justify-center animate-pulse pt-2">
                  <CheckCircle size={16} />
                  <span>Inquiry recorded! Redirecting to WhatsApp option...</span>
                </div>
              )}

            </form>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE GOOGLE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="map-section">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Interactive Map</span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Find Us in Gaya</h2>
          <p className="text-xs text-slate-500">We are conveniently located in AP Colony, a highly accessible residential area in Gaya, Bihar.</p>
        </div>

        {/* Embedded Iframe Map targeting Gaya, AP Colony */}
        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-slate-100">
          <iframe 
            title="Sai Medical Location Map Gaya"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2sQXMJ%2B2XC!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bfd00000001%3A0xc39f28d844c8030f!2sA%20P%20Colony%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
