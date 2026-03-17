import { Link, Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">CTC</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/product" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Product</Link>
            <Link to="/ai-calling" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">AI Calling</Link>
            <Link to="/templates" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Templates</Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Pricing</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Log in</Link>
            <Link to="/book-demo" className="text-sm font-medium text-primary-600 bg-primary-50 px-4 py-2 rounded-full hover:bg-primary-100 transition-colors">Book Demo</Link>
            <Link to="/signup" className="text-sm font-medium text-white bg-primary-600 px-5 py-2 rounded-full hover:bg-primary-700 transition-all shadow-sm hover:shadow-md flex items-center gap-1">
              Start Free Trial <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4"
        >
          <Link to="/product" className="block text-base font-medium text-slate-600 hover:text-primary-600" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="/ai-calling" className="block text-base font-medium text-slate-600 hover:text-primary-600" onClick={() => setIsOpen(false)}>AI Calling</Link>
          <Link to="/templates" className="block text-base font-medium text-slate-600 hover:text-primary-600" onClick={() => setIsOpen(false)}>Templates</Link>
          <Link to="/pricing" className="block text-base font-medium text-slate-600 hover:text-primary-600" onClick={() => setIsOpen(false)}>Pricing</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/login" className="w-full text-center text-base font-medium text-slate-600 py-2 border border-slate-200 rounded-lg" onClick={() => setIsOpen(false)}>Log in</Link>
            <Link to="/signup" className="w-full text-center text-base font-medium text-white bg-primary-600 py-2 rounded-lg" onClick={() => setIsOpen(false)}>Start Free Trial</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-500 p-1.5 rounded-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">CTC</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs mb-6">
              The smart booking system built for modern clinics. Automate scheduling, answer calls with AI, and create professional patient booking websites.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-slate-400 hover:text-white text-sm transition-colors">Overview</Link></li>
              <li><Link to="/ai-calling" className="text-slate-400 hover:text-white text-sm transition-colors">AI Calling Assistant</Link></li>
              <li><Link to="/templates" className="text-slate-400 hover:text-white text-sm transition-colors">Templates</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/use-cases/dental" className="text-slate-400 hover:text-white text-sm transition-colors">Dental Clinics</Link></li>
              <li><Link to="/use-cases/therapy" className="text-slate-400 hover:text-white text-sm transition-colors">Therapy Practices</Link></li>
              <li><Link to="/use-cases/medical" className="text-slate-400 hover:text-white text-sm transition-colors">Medical Centers</Link></li>
              <li><Link to="/use-cases/wellness" className="text-slate-400 hover:text-white text-sm transition-colors">Wellness Clinics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/security" className="text-slate-400 hover:text-white text-sm transition-colors">Security & HIPAA</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Clinic Technology Cloud. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
