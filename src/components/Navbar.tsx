import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ShieldAlert, Heart, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Watch scroll to add glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggler
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services & Products', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md border-b border-slate-100 dark:border-slate-800 py-3' 
          : 'bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 py-4.5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="bg-[#0A8F6A] text-white p-2.5 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-black font-mono leading-none flex items-center justify-center">+</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Sai Medical <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase">Gaya's Trusted Pharmacy</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 text-sm font-semibold transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'text-[#0A8F6A] border-[#0A8F6A]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* Quick Contact Layout */}
            <div className="flex items-center gap-4 pl-1">
              <div className="text-right hidden xl:block">
                <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none mb-1">Emergency Line</p>
                <a href="tel:+917091951834" className="text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:text-[#0A8F6A] transition-colors leading-none">+91 70919 51834</a>
              </div>
              <button
                onClick={() => {
                  const btn = document.getElementById('floating-whatsapp-btn');
                  if (btn) btn.click();
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-[1.02]"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Mobile Menu & Dark Mode Toggler */}
          <div className="flex lg:hidden items-center space-x-2">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 text-[#0A8F6A]'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-2">
            <a
              href="tel:+917091951834"
              className="w-full py-3 bg-[#0A8F6A] hover:bg-[#077053] text-white text-center text-sm font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Call store: 07091951834</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
