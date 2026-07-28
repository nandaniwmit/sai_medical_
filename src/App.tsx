import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { motion, AnimatePresence } from 'motion/react';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Component to scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Route Transition Wrapper
interface AnimatedPageProps {
  children: React.ReactNode;
}

function AnimatedPage({ children }: AnimatedPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

// Medical Clinical Loading Spinner
function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-slate-100 dark:border-slate-800 border-t-emerald-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-emerald-600 text-sm font-mono">+</div>
      </div>
      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase animate-pulse">
        Sai Medical • Securing Genuine Care
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
        
        {/* Sticky Header */}
        <Navbar />

        {/* Route Content Area with Suspense for lazy loading */}
        <main className="flex-grow pt-16">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <AnimatedPage>
                      <Home />
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <AnimatedPage>
                      <About />
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/services" 
                  element={
                    <AnimatedPage>
                      <Services />
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/gallery" 
                  element={
                    <AnimatedPage>
                      <Gallery />
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <AnimatedPage>
                      <Contact />
                    </AnimatedPage>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        {/* Global Floating Actions & WhatsApp Order Panel */}
        <WhatsAppOrderForm />

        {/* Footer with integrated global tracker */}
        <Footer />

      </div>
    </Router>
  );
}
