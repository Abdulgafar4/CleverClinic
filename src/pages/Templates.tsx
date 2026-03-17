import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  LayoutTemplate, ArrowRight, CheckCircle2, 
  Palette, Image as ImageIcon, Type, LayoutGrid, Globe, Server, ShieldCheck, X, Eye, MousePointerClick
} from 'lucide-react';

// --- Mock Data ---
const TEMPLATE_CATEGORIES = [
  "All Templates",
  "Medical Clinics",
  "Dental Clinics",
  "Wellness Clinics",
  "Therapy Practices",
  "Multi-Specialty Clinics"
];

const TEMPLATES = [
  { id: 1, name: "Modern Medical", category: "Medical Clinics", color: "bg-blue-500", desc: "Clean, trustworthy design for family clinics.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Bright Dental", category: "Dental Clinics", color: "bg-cyan-500", desc: "Vibrant and welcoming for dental practices.", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Calm Wellness", category: "Wellness Clinics", color: "bg-emerald-500", desc: "Soothing aesthetics for holistic health.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Mindful Therapy", category: "Therapy Practices", color: "bg-teal-500", desc: "Safe, inviting layout for mental health professionals.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Premium Spa", category: "Wellness Clinics", color: "bg-purple-500", desc: "Luxurious feel for aesthetic treatments.", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Specialist Care", category: "Multi-Specialty Clinics", color: "bg-slate-700", desc: "Authoritative design for specialized medicine.", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Pediatric Joy", category: "Medical Clinics", color: "bg-yellow-500", desc: "Friendly and colorful for children's clinics.", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Ortho Motion", category: "Medical Clinics", color: "bg-orange-500", desc: "Dynamic layout for sports and physical therapy.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Vision Clear", category: "Multi-Specialty Clinics", color: "bg-indigo-500", desc: "Sharp, focused design for optometry.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" }
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("All Templates");
  const [previewTemplate, setPreviewTemplate] = useState<typeof TEMPLATES[0] | null>(null);

  const filteredTemplates = activeCategory === "All Templates" 
    ? TEMPLATES 
    : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-600/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-primary-300 font-medium text-sm mb-6 border border-slate-700">
              <LayoutTemplate className="w-4 h-4" /> Website Builder
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Professional Clinic <span className="text-primary-400">Website Templates</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Launch a fully branded clinic booking website in minutes. Choose a template designed specifically for healthcare providers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#marketplace" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Browse Templates <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all border border-white/20">
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TEMPLATE CATEGORY FILTER & 3. TEMPLATE GALLERY */}
      <section id="marketplace" className="py-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {TEMPLATE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.map((template) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={template.id}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
                >
                  {/* Image Preview Area */}
                  <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                    <img 
                      src={template.img} 
                      alt={template.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                      <button 
                        onClick={() => setPreviewTemplate(template)}
                        className="px-6 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 w-48 justify-center"
                      >
                        <Eye className="w-4 h-4" /> Preview
                      </button>
                      <Link 
                        to="/signup"
                        className="px-6 py-3 bg-primary-600 text-white font-bold rounded-full shadow-lg hover:bg-primary-500 hover:scale-105 transition-all flex items-center gap-2 w-48 justify-center"
                      >
                        <MousePointerClick className="w-4 h-4" /> Use Template
                      </Link>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-xs font-bold text-primary-600 mb-2 uppercase tracking-wider">{template.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{template.name}</h3>
                    <p className="text-slate-600 text-sm mb-4 flex-grow">{template.desc}</p>
                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100">
                      <div className={`w-4 h-4 rounded-full ${template.color}`}></div>
                      <span className="text-xs text-slate-500 font-medium">Customizable Colors</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredTemplates.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No templates found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. TEMPLATE CUSTOMIZATION SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Make it yours.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Templates are just starting points. Our intuitive builder lets you customize every aspect of your booking site to perfectly match your clinic's brand identity.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: <ImageIcon className="w-5 h-5" />, title: "Upload Clinic Logo", desc: "Instantly brand the header and booking flow." },
                  { icon: <Palette className="w-5 h-5" />, title: "Change Colors", desc: "Select primary and secondary colors to match your brand." },
                  { icon: <LayoutGrid className="w-5 h-5" />, title: "Add Doctor Profiles", desc: "Showcase your team with photos, bios, and specialties." },
                  { icon: <Type className="w-5 h-5" />, title: "Edit Services & Info", desc: "Easily update treatments, pricing, and clinic details." }
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{feature.title}</h4>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* UI Customization Panel Visual */}
            <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-inner relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
               <div className="absolute top-0 -left-4 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
              
              <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10">
                <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
                  <span className="font-bold text-slate-700 text-sm uppercase tracking-wider">Theme Settings</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Primary Color</div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-sm cursor-pointer ring-2 ring-blue-500 ring-offset-2"></div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Button Style</div>
                    <div className="w-full py-3 bg-blue-500 text-white rounded-lg text-center font-medium shadow-md">Book Appointment</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Typography</div>
                    <div className="w-full p-3 border border-slate-200 rounded-lg font-sans text-slate-900 bg-slate-50 flex justify-between items-center">
                      <span>Inter (Sans-serif)</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MULTI-TENANT SAAS ARCHITECTURE & 7. TEMPLATE SWITCHING */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Enterprise-grade architecture.</h2>
            <p className="text-lg text-slate-600">Secure, isolated, and scalable infrastructure for every clinic. Change templates anytime without losing data.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
              <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Domains</h3>
              <p className="text-slate-600 text-sm">Host your booking site on your own domain (e.g., booking.yourclinic.com).</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
              <Server className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Isolated Data</h3>
              <p className="text-slate-600 text-sm">Your patient data, booking system, and admin dashboard are securely isolated.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
              <ShieldCheck className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">HIPAA Ready</h3>
              <p className="text-slate-600 text-sm">Built from the ground up to meet strict healthcare compliance standards.</p>
            </div>
          </div>

          {/* Template Switching Animation Concept */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h3 className="text-2xl font-bold mb-8 relative z-10">Seamless Template Switching</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl w-48">
                <div className="h-24 bg-blue-500/20 rounded mb-2 border border-blue-500/30"></div>
                <div className="text-xs text-slate-400">Template A</div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-500 rotate-90 md:rotate-0" />
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl w-48 transform scale-110 shadow-2xl ring-2 ring-primary-500">
                <div className="h-24 bg-emerald-500/20 rounded mb-2 border border-emerald-500/30"></div>
                <div className="text-xs font-bold text-white">Template B</div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-500 rotate-90 md:rotate-0" />
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl w-48">
                <div className="h-24 bg-purple-500/20 rounded mb-2 border border-purple-500/30"></div>
                <div className="text-xs text-slate-400">Template C</div>
              </div>
            </div>
            <p className="mt-8 text-slate-400 text-sm max-w-xl mx-auto relative z-10">
              Your doctors, services, and appointments stay exactly the same. Only the visual presentation changes.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-primary-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Launch Your Clinic Booking Website Today
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Choose a template, customize it, and start accepting appointments in minutes.
          </p>
          <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-900 font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 4. TEMPLATE PREVIEW MODAL */}
      <AnimatePresence>
        {previewTemplate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{previewTemplate.name}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{previewTemplate.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Link 
                    to="/signup"
                    className="px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-lg hover:bg-primary-500 transition-colors"
                  >
                    Use Template
                  </Link>
                  <button 
                    onClick={() => setPreviewTemplate(null)}
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Body - Simulated Template Preview */}
              <div className="flex-grow overflow-y-auto bg-slate-100 p-4 md:p-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-slate-200">
                  
                  {/* Simulated Hero */}
                  <div className={`h-64 ${previewTemplate.color} p-8 flex flex-col justify-center text-white relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-black/10"></div>
                     <div className="relative z-10">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our Clinic</h1>
                        <p className="text-lg opacity-90 mb-6 max-w-lg">Providing compassionate care for you and your family.</p>
                        <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg shadow-md">Book Appointment</button>
                     </div>
                  </div>

                  {/* Simulated Services */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Services</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="p-4 border border-slate-100 rounded-lg bg-slate-50 text-center">
                          <div className={`w-10 h-10 rounded-full ${previewTemplate.color} opacity-20 mx-auto mb-3`}></div>
                          <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded w-full mx-auto"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Booking Flow */}
                  <div className="p-8 bg-slate-50 border-t border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Book Online</h2>
                    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                        <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                        <div>
                          <div className="font-bold text-slate-900">Dr. Sarah Smith</div>
                          <div className="text-sm text-slate-500">General Practitioner</div>
                        </div>
                        <button className="ml-auto px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg">Select</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="p-2 text-center border border-slate-200 rounded-lg text-sm text-slate-500">9:00 AM</div>
                        <div className="p-2 text-center border-2 border-primary-500 bg-primary-50 rounded-lg text-sm font-bold text-primary-700">10:30 AM</div>
                        <div className="p-2 text-center border border-slate-200 rounded-lg text-sm text-slate-500">1:00 PM</div>
                      </div>
                      <button className={`w-full py-3 ${previewTemplate.color} text-white font-bold rounded-lg shadow-sm`}>Confirm Appointment</button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
