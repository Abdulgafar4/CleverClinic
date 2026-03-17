import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Calendar, PhoneCall, LayoutTemplate, ArrowRight, CheckCircle2, 
  ShieldCheck, Zap, Users, Stethoscope, HeartPulse, Brain, Activity,
  Clock, MessageSquare, Globe, X
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1 - Hero */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white -z-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-100/30 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
                The Smart Booking System Built for Modern Clinics
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Your Clinic. <br/>
                <span className="text-primary-600">Smarter Scheduling.</span> <br/>
                AI Receptionist.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                CTC helps clinics automate bookings, answer calls with AI, and create professional patient booking websites in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-0.5">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/book-demo" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                  Book Demo
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500" /> No credit card required. 14-day free trial.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Abstract UI Representation */}
              <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400"></div>
                <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
                        <div className="h-3 w-16 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-24 bg-primary-600 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-slate-400" />
                          </div>
                          <div>
                            <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                            <div className="h-3 w-20 bg-slate-100 rounded"></div>
                          </div>
                        </div>
                        <div className="h-6 w-16 bg-accent-100 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating AI Call Element */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-6 -bottom-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-400 rounded-full animate-ping opacity-20"></div>
                    <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center relative z-10">
                      <PhoneCall className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">AI Receptionist</p>
                    <p className="text-xs text-slate-500">Booking appointment...</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Social Proof */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
            Trusted by modern clinics worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Placeholder Logos */}
            {['DentalCare', 'PhysioPlus', 'MindfulTherapy', 'CityMedical', 'SkinClinic'].map((name) => (
              <div key={name} className="flex items-center gap-2">
                <Activity className="w-6 h-6" />
                <span className="font-display font-bold text-xl">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              <span className="flex h-2 w-2 rounded-full bg-accent-500"></span>
              <span className="text-sm font-medium text-slate-700">10,000+ appointments booked weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Platform Overview */}
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">See how CTC works.</h2>
            <p className="text-lg text-slate-600">A seamless experience for your patients, and a powerful dashboard for your staff.</p>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 transform skew-y-2 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-slate-950 border-r border-slate-800 p-4 hidden md:block">
                <div className="flex items-center gap-2 mb-8 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  {['Dashboard', 'Calendar', 'Patients', 'AI Calls', 'Settings'].map((item, i) => (
                    <div key={i} className={`px-4 py-2 rounded-lg text-sm font-medium ${i === 1 ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Main Content Area */}
              <div className="flex-1 p-6 md:p-8 bg-slate-900">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold text-white">Today's Schedule</h3>
                  <div className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">Oct 24, 2024</div>
                </div>
                <div className="space-y-4">
                  {[
                    { time: '09:00 AM', patient: 'Sarah Jenkins', type: 'Checkup', status: 'Confirmed', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                    { time: '10:30 AM', patient: 'Michael Chen', type: 'Consultation', status: 'AI Booked', color: 'bg-accent-500/20 text-accent-400 border-accent-500/30' },
                    { time: '01:00 PM', patient: 'Emma Watson', type: 'Follow-up', status: 'Pending', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' }
                  ].map((appt, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-800 border border-slate-700">
                      <div className="flex items-center gap-4">
                        <div className="text-slate-400 font-mono text-sm">{appt.time}</div>
                        <div>
                          <div className="text-white font-medium">{appt.patient}</div>
                          <div className="text-slate-400 text-sm">{appt.type}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${appt.color}`}>
                        {appt.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Core Platform Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">One powerful platform. Three core pillars.</h2>
            <p className="text-lg text-slate-600">Everything you need to run a modern, efficient clinic without the administrative headache.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8 text-primary-600" />,
                title: "Smart Booking System",
                desc: "Automated scheduling that syncs with your calendar. Reduce no-shows with smart reminders.",
                link: "/product"
              },
              {
                icon: <PhoneCall className="w-8 h-8 text-accent-600" />,
                title: "AI Calling Assistant",
                desc: "Never miss a patient call. Our AI answers 24/7, books appointments, and answers FAQs.",
                link: "/ai-calling"
              },
              {
                icon: <LayoutTemplate className="w-8 h-8 text-indigo-600" />,
                title: "Custom Clinic Websites",
                desc: "Launch a beautiful, branded booking website in minutes with our premium templates.",
                link: "/templates"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{pillar.desc}</p>
                <Link to={pillar.link} className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - AI Calling Assistant */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-accent-100/50 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl text-white">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">Live Call Simulation</div>
                </div>
                
                <div className="space-y-6 font-mono text-sm">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-slate-300">
                      "Hi, I need to book a dental checkup for next Tuesday afternoon."
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-accent-900/50 border border-accent-800 rounded-2xl rounded-tr-none p-4 text-accent-100">
                      "I can help with that! Dr. Smith has an opening at 2:00 PM or 4:30 PM next Tuesday. Which works better for you?"
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-slate-300">
                      "4:30 PM would be perfect."
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-accent-900/50 border border-accent-800 rounded-2xl rounded-tr-none p-4 text-accent-100">
                      "Great. I've booked your checkup for Tuesday at 4:30 PM. I'll send a confirmation text shortly. See you then!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 text-accent-700 font-medium text-sm mb-6 border border-accent-100">
                <Zap className="w-4 h-4" /> AI Receptionist
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Never miss a patient call again.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our advanced AI answers incoming calls 24/7 with a natural, human-like voice. It understands context, checks your real-time availability, and books appointments directly into your calendar.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Books, reschedules, and cancels appointments",
                  "Answers common clinic FAQs (hours, location, parking)",
                  "Transfers urgent calls to human staff",
                  "Works 24/7, even on holidays"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/ai-calling" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
                Explore AI Capabilities <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7 - Clinic Website Builder & Templates */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Beautiful booking sites in minutes.</h2>
            <p className="text-lg text-slate-400">Choose from premium templates designed specifically for healthcare providers. Customize to match your brand, no coding required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Modern Dental", type: "Dentists", color: "bg-blue-500" },
              { name: "Calm Therapy", type: "Mental Health", color: "bg-emerald-500" },
              { name: "Active Physio", type: "Physiotherapy", color: "bg-orange-500" }
            ].map((template, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                <div className="aspect-[4/3] bg-slate-800 p-4">
                  {/* Abstract Template Preview */}
                  <div className="w-full h-full bg-slate-900 rounded-lg border border-slate-700 overflow-hidden flex flex-col">
                    <div className="h-12 border-b border-slate-800 flex items-center px-4 gap-4">
                      <div className={`w-6 h-6 rounded ${template.color}`}></div>
                      <div className="h-3 w-24 bg-slate-800 rounded"></div>
                      <div className="ml-auto flex gap-2">
                        <div className="h-3 w-12 bg-slate-800 rounded"></div>
                        <div className="h-3 w-12 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-grow p-6 flex flex-col items-center justify-center text-center">
                      <div className="h-6 w-3/4 bg-slate-800 rounded mb-4"></div>
                      <div className="h-4 w-1/2 bg-slate-800 rounded mb-8"></div>
                      <div className={`h-10 w-32 rounded-full ${template.color}`}></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider">{template.type}</div>
                  <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                </div>
                <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-primary-900 font-medium rounded-full">Preview Template</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/templates" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
              View All Templates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Workflow Automation */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Automate the busywork.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Reduce no-shows and keep patients informed without lifting a finger. Our smart automation engine handles the communication so your staff can focus on care.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Smart Reminders", desc: "Automated SMS and email reminders sent 24h and 1h before appointments." },
                  { title: "Instant Confirmations", desc: "Patients receive immediate booking confirmations with calendar invites." },
                  { title: "Follow-up Sequences", desc: "Automatically request reviews or schedule follow-up visits after appointments." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-1">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative z-10">
                <div className="space-y-4">
                  <div className="flex gap-4 items-end">
                    <div className="bg-slate-100 rounded-2xl rounded-bl-none p-4 text-slate-700 text-sm max-w-[80%]">
                      Hi Sarah, this is a reminder for your dental checkup tomorrow at 2:00 PM with Dr. Smith. Reply YES to confirm or NO to reschedule.
                    </div>
                  </div>
                  <div className="flex gap-4 items-end flex-row-reverse">
                    <div className="bg-primary-600 text-white rounded-2xl rounded-br-none p-4 text-sm max-w-[80%]">
                      YES
                    </div>
                  </div>
                  <div className="flex gap-4 items-end">
                    <div className="bg-slate-100 rounded-2xl rounded-bl-none p-4 text-slate-700 text-sm max-w-[80%]">
                      Great! Your appointment is confirmed. See you tomorrow at 2:00 PM.
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Built for your specialty.</h2>
            <p className="text-lg text-slate-600">CTC adapts to the unique workflows of different healthcare providers.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Stethoscope className="w-6 h-6" />, name: "Dentists", link: "/use-cases/dental" },
              { icon: <HeartPulse className="w-6 h-6" />, name: "Physiotherapists", link: "/use-cases/physio" },
              { icon: <Brain className="w-6 h-6" />, name: "Therapists", link: "/use-cases/therapy" },
              { icon: <Activity className="w-6 h-6" />, name: "Medical Spas", link: "/use-cases/medspa" }
            ].map((useCase, i) => (
              <Link key={i} to={useCase.link} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-600 group-hover:text-primary-600 group-hover:scale-110 transition-all mb-4 shadow-sm">
                  {useCase.icon}
                </div>
                <span className="font-medium text-slate-900">{useCase.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Integrations */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Plays well with others.</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
            CTC integrates seamlessly with the tools you already use, keeping your data synced and your workflows smooth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Google Calendar', 'Outlook', 'Stripe', 'Zoom', 'Epic EMR', 'Jane App'].map((integration, i) => (
              <div key={i} className="px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - Pricing */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Simple, transparent pricing.</h2>
            <p className="text-lg text-slate-600">Choose the plan that fits your clinic's growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6">For solo practitioners and small clinics.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$49</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> 1 Practitioner</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> Basic Booking Website</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> Email Reminders</li>
                <li className="flex items-center gap-3 text-sm text-slate-400"><X className="w-5 h-5" /> AI Calling Assistant</li>
              </ul>
              <Link to="/signup" className="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-xl text-center transition-colors">Start Free Trial</Link>
            </div>

            {/* Professional */}
            <div className="bg-primary-900 rounded-3xl p-8 border border-primary-800 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-primary-200 text-sm mb-6">For growing clinics that need automation.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$149</span>
                <span className="text-primary-300">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400" /> Up to 5 Practitioners</li>
                <li className="flex items-center gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400" /> Premium Templates</li>
                <li className="flex items-center gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400" /> SMS & Email Reminders</li>
                <li className="flex items-center gap-3 text-sm text-white"><CheckCircle2 className="w-5 h-5 text-accent-400" /> 500 AI Call Minutes/mo</li>
              </ul>
              <Link to="/signup" className="block w-full py-3 px-4 bg-primary-500 hover:bg-primary-400 text-white font-medium rounded-xl text-center transition-colors">Start Free Trial</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">For large medical centers and networks.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$399</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> Unlimited Practitioners</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> Custom Branding & Domain</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> EMR Integrations</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-500" /> Unlimited AI Call Minutes</li>
              </ul>
              <Link to="/contact" className="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-xl text-center transition-colors">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 - Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-accent-400 font-medium mb-6">
                  <Activity className="w-5 h-5" /> Case Study
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-tight">
                  "CTC's AI receptionist reduced our missed calls by 80% and increased new patient bookings by 35% in just two months."
                </h3>
                <p className="text-primary-200 mb-8">
                  — Dr. James Wilson, Founder of City Dental Care
                </p>
                <div>
                  <Link to="/case-studies" className="inline-flex items-center gap-2 text-white font-medium hover:text-accent-400 transition-colors">
                    Read the full story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-primary-800 p-10 md:p-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 grid grid-cols-2 gap-6 w-full">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">80%</div>
                    <div className="text-primary-200 text-sm">Reduction in missed calls</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">35%</div>
                    <div className="text-primary-200 text-sm">Increase in bookings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">15h</div>
                    <div className="text-primary-200 text-sm">Saved per week</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-primary-200 text-sm">Patient support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 - Security & Compliance */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">HIPAA Ready</h4>
                <p className="text-sm text-slate-500">Compliant architecture</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                <Globe className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">End-to-End Encryption</h4>
                <p className="text-sm text-slate-500">Bank-level security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 - Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-accent-500/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/4" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let AI Handle Your Clinic Calls and Bookings
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of clinics saving 15+ hours a week on administrative tasks. Setup takes less than 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-900 font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Start Free Trial
            </Link>
            <Link to="/book-demo" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-800 text-white font-medium hover:bg-primary-700 transition-all border border-primary-700">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
