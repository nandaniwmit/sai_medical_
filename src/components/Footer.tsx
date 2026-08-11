import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  // === GLOBAL TRACKING HOOK INTEGRATION ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Store Intro & Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#0A8F6A] text-white p-2 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Sai Medical</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your highly trusted local pharmacy in Gaya, Bihar. Providing 100% genuine medicines, pediatric care, healthcare devices, and surgical essentials for over a decade.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-[#0A8F6A] hover:text-white rounded-full transition-colors duration-300" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-[#0A8F6A] hover:text-white rounded-full transition-colors duration-300" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-[#0A8F6A] hover:text-white rounded-full transition-colors duration-300" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 md:pl-8">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">Medicine & Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white hover:underline transition-colors">Store Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors">Contact & Map</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#0A8F6A] shrink-0 mt-0.5" size={18} />
                <span className="text-slate-400">
                  QXMJ+2XC, A P Colony, Gaya, Bihar 823001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#0A8F6A] shrink-0" size={18} />
                <a href="tel:+917091951834" className="hover:text-white transition-colors">+91 70919 51834</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#0A8F6A] shrink-0" size={18} />
                <a href="mailto:info@saimedicalgaya.com" className="hover:text-white transition-colors">info@saimedicalgaya.com</a>
              </li>
            </ul>
            <div className="pt-2">
              <a 
                href="https://maps.google.com/?q=QXMJ%2B2XC,+A+P+Colony,+Gaya,+Bihar+823001"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-[#0A8F6A] hover:text-[#0dc493] font-medium transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Column 4: Store Timings */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Working Hours</h3>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
              <div className="flex items-start space-x-3 mb-2">
                <Clock className="text-[#0A8F6A] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-sm font-medium text-white">Store Hours</p>
                  <p className="text-xs text-slate-400">Open 7 Days a week</p>
                </div>
              </div>
              <p className="text-lg font-bold text-[#0A8F6A] pl-7">08:00 AM - 10:00 PM</p>
            </div>
            <p className="text-xs text-slate-500 italic">
              *Emergency medicine requests supported. Call us directly for home delivery.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-xs text-slate-500">
            <div className="space-y-2">
              <p className="leading-relaxed">
                <strong className="text-slate-400">Disclaimer:</strong> Sai Medical provides stock checker information and digital orders via WhatsApp purely for customer convenience. Always consult a qualified medical professional before taking any medicines. Proper physician prescription is strictly required for scheduling prescription drugs.
              </p>
              <div className="flex items-center space-x-2 pt-1">
                <span className="w-2 h-2 bg-[#0A8F6A] rounded-full animate-pulse shrink-0"></span>
                <p>
                  &copy; {new Date().getFullYear()} Sai Medical Store, Gaya. {' '}
                  <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-slate-400">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-white transition-colors">Medicine Inventory</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
