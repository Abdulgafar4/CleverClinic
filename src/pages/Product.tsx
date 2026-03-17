import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Calendar, PhoneCall, LayoutTemplate, ArrowRight, CheckCircle2, 
  Users, Activity, Clock, MessageSquare, BarChart3, Settings,
  Smartphone, Globe, ShieldCheck, Zap
} from 'lucide-react';

export default function Product() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
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
              <Activity className="w-4 h-4" /> Platform Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              The Operating System for <span className="text-primary-400">Modern Clinics</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              CTC combines online booking, AI phone reception, and customizable clinic websites into one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/book-demo" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white font-medium border border-slate-700 hover:bg-slate-700 transition-all">
                Book Demo
              </Link>
            </div>
          </motion.div>

          {/* Abstract Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative max-w-5xl mx-auto"
          >
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-12 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex h-[400px]">
                <div className="w-48 border-r border-slate-700 p-4 hidden md:block">
                  <div className="space-y-3">
                    <div className="h-8 bg-primary-600/20 rounded border border-primary-500/30"></div>
                    <div className="h-8 bg-slate-700/50 rounded"></div>
                    <div className="h-8 bg-slate-700/50 rounded"></div>
                    <div className="h-8 bg-slate-700/50 rounded"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 flex gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="h-24 bg-slate-700/30 rounded-xl border border-slate-700 flex items-center p-4 gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="h-4 w-32 bg-slate-600 rounded mb-2"></div>
                        <div className="h-3 w-24 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-slate-700/30 rounded-xl border border-slate-700 flex items-center p-4 gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                        <PhoneCall className="w-6 h-6 text-accent-400" />
                      </div>
                      <div>
                        <div className="h-4 w-40 bg-slate-600 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 bg-slate-700/20 rounded-xl border border-slate-700 p-4 hidden lg:block">
                    <div className="h-4 w-24 bg-slate-600 rounded mb-6"></div>
                    <div className="space-y-3">
                      <div className="h-12 bg-slate-700/50 rounded-lg"></div>
                      <div className="h-12 bg-slate-700/50 rounded-lg"></div>
                      <div className="h-12 bg-slate-700/50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Three pillars of a modern clinic.</h2>
            <p className="text-lg text-slate-600">Everything works together seamlessly to provide the best experience for your patients and staff.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8 text-primary-600" />,
                title: "Smart Booking System",
                desc: "Intelligent scheduling that prevents double-bookings and optimizes your calendar.",
                color: "bg-primary-50 border-primary-100"
              },
              {
                icon: <PhoneCall className="w-8 h-8 text-accent-600" />,
                title: "AI Calling Assistant",
                desc: "A conversational AI that answers calls, books appointments, and handles FAQs 24/7.",
                color: "bg-accent-50 border-accent-100"
              },
              {
                icon: <LayoutTemplate className="w-8 h-8 text-indigo-600" />,
                title: "Custom Clinic Websites",
                desc: "Beautiful, branded booking sites that convert visitors into patients.",
                color: "bg-indigo-50 border-indigo-100"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border ${pillar.color} transition-all`}
              >
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Platform Walkthrough */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">How it all works together.</h2>
            <p className="text-lg text-slate-600">A unified workflow from the first touchpoint to the final appointment.</p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <div className="space-y-4">
                    <div className="h-8 w-1/2 bg-slate-100 rounded"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-primary-50 border border-primary-200 rounded-lg flex items-center justify-center text-primary-700 font-medium text-sm">9:00 AM</div>
                      <div className="h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 font-medium text-sm">10:00 AM</div>
                      <div className="h-10 bg-primary-50 border border-primary-200 rounded-lg flex items-center justify-center text-primary-700 font-medium text-sm">11:30 AM</div>
                    </div>
                    <div className="h-12 bg-primary-600 rounded-lg mt-4"></div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl mb-6">1</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Patient books online</h3>
                <p className="text-slate-600 text-lg">Patients visit your branded website and select an available time slot. The system automatically syncs with your real-time availability.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xl mb-6">2</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI answers clinic calls</h3>
                <p className="text-slate-600 text-lg">If a patient prefers to call, your AI receptionist answers immediately, understands their needs, and books the appointment directly into the same calendar.</p>
              </div>
              <div>
                <div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                      <PhoneCall className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">AI Receptionist</div>
                      <div className="text-xs text-accent-400">Active Call • 0:45</div>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 text-sm text-slate-300">
                    "I've found an opening for tomorrow at 10:00 AM with Dr. Smith. Shall I book that for you?"
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-semibold text-slate-900">Dashboard</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-slate-100"></div>
                      <div className="w-8 h-8 rounded bg-slate-100"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm font-medium">New Web Booking</span>
                      </div>
                      <span className="text-xs text-slate-500">Just now</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                        <span className="text-sm font-medium">New AI Booking</span>
                      </div>
                      <span className="text-xs text-slate-500">2 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl mb-6">3</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Staff manages from dashboard</h3>
                <p className="text-slate-600 text-lg">Your front desk sees all bookings in one unified dashboard, regardless of whether they came from the website or the AI phone assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Platform Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Everything you need to scale.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Online Booking System", desc: "24/7 self-service booking for your patients." },
              { icon: <Users className="w-6 h-6" />, title: "Doctor Schedules", desc: "Manage multiple practitioners and locations easily." },
              { icon: <Clock className="w-6 h-6" />, title: "Patient Reminders", desc: "Automated SMS and email to reduce no-shows." },
              { icon: <Zap className="w-6 h-6" />, title: "AI Receptionist", desc: "Never miss a call, even after hours." },
              { icon: <LayoutTemplate className="w-6 h-6" />, title: "Clinic Branding Tools", desc: "Customize your booking site to match your brand." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics Dashboard", desc: "Track bookings, revenue, and AI performance." }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary-600">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Engine */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Automation Engine</h2>
              <p className="text-lg text-slate-400 mb-8">
                Set it and forget it. Our automation engine handles the repetitive communication tasks so your staff doesn't have to.
              </p>
              <ul className="space-y-4">
                {[
                  "Instant appointment confirmations",
                  "Automated SMS & Email reminders",
                  "Post-appointment follow-up notifications",
                  "Two-way calendar syncing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400"><Calendar className="w-5 h-5" /></div>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden"><div className="w-full h-full bg-primary-500"></div></div>
                    <div className="text-sm font-medium">Booked</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400"><MessageSquare className="w-5 h-5" /></div>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden"><div className="w-2/3 h-full bg-accent-500"></div></div>
                    <div className="text-sm font-medium">Reminder</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><CheckCircle2 className="w-5 h-5" /></div>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-emerald-500"></div></div>
                    <div className="text-sm font-medium">Follow-up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Upgrade Your Clinic's Scheduling Experience
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Join the modern clinics using CTC to streamline their operations.
          </p>
          <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
