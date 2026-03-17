import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, X, ArrowRight, HelpCircle, 
  TrendingUp, Clock, CalendarCheck
} from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Simple Pricing for <span className="text-primary-600">Clinics of All Sizes</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Flexible plans designed for independent clinics and growing healthcare organizations. No hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Annually <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Save 20%</span>
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6">For solo practitioners and small clinics.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">${isAnnual ? '39' : '49'}</span>
                <span className="text-slate-500">/mo</span>
                {isAnnual && <div className="text-sm text-slate-400 mt-1">Billed ${39 * 12} yearly</div>}
              </div>
              <Link to="/signup" className="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-xl text-center transition-colors mb-8">Start Free Trial</Link>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>1 Practitioner</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Basic Booking Website</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Email Reminders</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Basic Analytics</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-400"><X className="w-5 h-5 shrink-0" /> <span>AI Calling Assistant</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-400"><X className="w-5 h-5 shrink-0" /> <span>Custom Domain</span></li>
              </ul>
            </motion.div>

            {/* Professional */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-900 rounded-3xl p-8 border border-primary-800 shadow-xl relative transform md:-translate-y-4 flex flex-col"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Most Popular</div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-primary-200 text-sm mb-6">For growing clinics that need automation.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">${isAnnual ? '119' : '149'}</span>
                <span className="text-primary-300">/mo</span>
                {isAnnual && <div className="text-sm text-primary-300 mt-1">Billed ${119 * 12} yearly</div>}
              </div>
              <Link to="/signup" className="block w-full py-3 px-4 bg-primary-500 hover:bg-primary-400 text-white font-medium rounded-xl text-center transition-colors mb-8 shadow-md">Start Free Trial</Link>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" /> <span>Up to 5 Practitioners</span></li>
                <li className="flex items-start gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" /> <span>Premium Templates</span></li>
                <li className="flex items-start gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" /> <span>SMS & Email Reminders</span></li>
                <li className="flex items-start gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" /> <span>500 AI Call Minutes/mo</span></li>
                <li className="flex items-start gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" /> <span>Custom Domain</span></li>
                <li className="flex items-start gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" /> <span>Advanced Analytics</span></li>
              </ul>
            </motion.div>

            {/* Enterprise */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">For large medical centers and networks.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">${isAnnual ? '319' : '399'}</span>
                <span className="text-slate-500">/mo</span>
                {isAnnual && <div className="text-sm text-slate-400 mt-1">Billed ${319 * 12} yearly</div>}
              </div>
              <Link to="/contact" className="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-xl text-center transition-colors mb-8">Contact Sales</Link>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Unlimited Practitioners</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Multiple Locations</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Unlimited AI Call Minutes</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>EMR Integrations</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Dedicated Account Manager</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> <span>Custom SLA</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">Compare Plans in Detail</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 border-b-2 border-slate-200 text-slate-900 font-bold w-1/3">Features</th>
                  <th className="py-4 px-6 border-b-2 border-slate-200 text-slate-900 font-bold text-center w-1/5">Starter</th>
                  <th className="py-4 px-6 border-b-2 border-primary-500 text-primary-700 font-bold text-center w-1/5 bg-primary-50 rounded-t-xl">Professional</th>
                  <th className="py-4 px-6 border-b-2 border-slate-200 text-slate-900 font-bold text-center w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Core Features */}
                <tr><td colSpan={4} className="py-4 px-6 bg-slate-50 font-semibold text-slate-900">Core Platform</td></tr>
                {[
                  { name: "Practitioners", s: "1", p: "Up to 5", e: "Unlimited" },
                  { name: "Locations", s: "1", p: "1", e: "Unlimited" },
                  { name: "Online Booking", s: true, p: true, e: true },
                  { name: "Calendar Sync", s: true, p: true, e: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 px-6 text-slate-600">{row.name}</td>
                    <td className="py-4 px-6 text-center text-slate-700">{typeof row.s === 'boolean' ? (row.s ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.s}</td>
                    <td className="py-4 px-6 text-center text-slate-900 font-medium bg-primary-50/50">{typeof row.p === 'boolean' ? (row.p ? <CheckCircle2 className="w-5 h-5 text-primary-600 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.p}</td>
                    <td className="py-4 px-6 text-center text-slate-700">{typeof row.e === 'boolean' ? (row.e ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.e}</td>
                  </tr>
                ))}

                {/* AI & Automation */}
                <tr><td colSpan={4} className="py-4 px-6 bg-slate-50 font-semibold text-slate-900">AI & Automation</td></tr>
                {[
                  { name: "AI Call Minutes", s: "-", p: "500 / mo", e: "Unlimited" },
                  { name: "Email Reminders", s: true, p: true, e: true },
                  { name: "SMS Reminders", s: false, p: true, e: true },
                  { name: "Automated Follow-ups", s: false, p: true, e: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 px-6 text-slate-600 flex items-center gap-2">{row.name} {row.name === "AI Call Minutes" && <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />}</td>
                    <td className="py-4 px-6 text-center text-slate-700">{typeof row.s === 'boolean' ? (row.s ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.s}</td>
                    <td className="py-4 px-6 text-center text-slate-900 font-medium bg-primary-50/50">{typeof row.p === 'boolean' ? (row.p ? <CheckCircle2 className="w-5 h-5 text-primary-600 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.p}</td>
                    <td className="py-4 px-6 text-center text-slate-700">{typeof row.e === 'boolean' ? (row.e ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.e}</td>
                  </tr>
                ))}

                {/* Website & Branding */}
                <tr><td colSpan={4} className="py-4 px-6 bg-slate-50 font-semibold text-slate-900">Website & Branding</td></tr>
                {[
                  { name: "Booking Website", s: "Basic", p: "Premium", e: "Custom" },
                  { name: "Custom Domain", s: false, p: true, e: true },
                  { name: "Remove CTC Branding", s: false, p: true, e: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 px-6 text-slate-600">{row.name}</td>
                    <td className="py-4 px-6 text-center text-slate-700">{typeof row.s === 'boolean' ? (row.s ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.s}</td>
                    <td className="py-4 px-6 text-center text-slate-900 font-medium bg-primary-50/50 rounded-b-xl">{typeof row.p === 'boolean' ? (row.p ? <CheckCircle2 className="w-5 h-5 text-primary-600 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.p}</td>
                    <td className="py-4 px-6 text-center text-slate-700">{typeof row.e === 'boolean' ? (row.e ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />) : row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">An investment that pays for itself.</h2>
            <p className="text-lg text-slate-400">CTC isn't just a cost—it's a revenue driver for your clinic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
              <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">+25%</div>
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Increase in Bookings</h3>
              <p className="text-slate-400 text-sm">By capturing after-hours calls and offering seamless online booking.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
              <CalendarCheck className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">-40%</div>
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Fewer No-Shows</h3>
              <p className="text-slate-400 text-sm">Through automated, multi-channel patient reminders and easy rescheduling.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
              <Clock className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">15h</div>
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Saved Weekly</h3>
              <p className="text-slate-400 text-sm">Front desk time saved from manual phone calls and scheduling tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "Can I cancel anytime?", a: "Yes, there are no long-term contracts. You can cancel your subscription at any time from your dashboard." },
              { q: "Is the AI customizable?", a: "Absolutely. You can provide the AI with specific instructions, FAQs, and scripts tailored to your clinic's tone and policies." },
              { q: "Can I add multiple doctors?", a: "Yes, the Professional plan supports up to 5 practitioners, and the Enterprise plan supports unlimited practitioners, each with their own schedule." },
              { q: "Do you support multiple clinic locations?", a: "Yes, our Enterprise plan is designed for multi-location clinics, allowing you to manage all locations from a single dashboard." },
              { q: "Is patient data secure and HIPAA compliant?", a: "Yes, CTC is built on a HIPAA-ready architecture with end-to-end encryption to ensure all patient data is secure." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Start Automating Your Clinic Today
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Join thousands of modern clinics. Setup takes less than 10 minutes.
          </p>
          <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-900 font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
