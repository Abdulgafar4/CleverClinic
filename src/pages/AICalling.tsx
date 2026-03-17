import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, ArrowRight, CheckCircle2, Zap, Calendar, 
  MessageSquare, Users, ShieldCheck, Activity, Clock
} from 'lucide-react';

export default function AICalling() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-50/50 to-white -z-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-accent-100/30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 font-medium text-sm mb-6 border border-accent-200">
              <Zap className="w-4 h-4" /> AI Voice Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Your 24/7 AI Clinic <span className="text-accent-600">Receptionist</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Never miss another patient call. CTC's AI assistant answers, books appointments, and assists patients automatically in a natural human voice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-demo" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-accent-600 text-white font-medium hover:bg-accent-700 transition-all shadow-lg shadow-accent-500/30 hover:shadow-xl hover:-translate-y-0.5">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">What can the AI do?</h2>
            <p className="text-lg text-slate-600">It's like having your best receptionist working around the clock.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <PhoneCall className="w-6 h-6" />, title: "Answer Incoming Calls", desc: "Instantly answers every call with zero wait time." },
              { icon: <Calendar className="w-6 h-6" />, title: "Book Appointments", desc: "Checks real-time availability and schedules patients." },
              { icon: <Clock className="w-6 h-6" />, title: "Reschedule Visits", desc: "Handles modifications and cancellations smoothly." },
              { icon: <MessageSquare className="w-6 h-6" />, title: "Answer Clinic FAQs", desc: "Provides hours, location, and parking information." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Send Confirmations", desc: "Triggers SMS confirmations after booking." },
              { icon: <Users className="w-6 h-6" />, title: "Transfer to Staff", desc: "Intelligently routes complex or urgent calls to humans." }
            ].map((capability, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
                <p className="text-slate-600">{capability.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Call Flow */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Hear it in action.</h2>
              <p className="text-lg text-slate-400 mb-8">
                The AI speaks naturally, understands context, and guides patients through the booking process just like a human would.
              </p>
              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <div className="font-semibold">Listen to a sample call</div>
                  <div className="text-sm text-slate-400">0:45 / 1:20</div>
                </div>
                <div className="ml-auto">
                  <div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center cursor-pointer hover:bg-accent-500">
                    <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
                <div className="space-y-6 font-mono text-sm">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="bg-slate-700 rounded-2xl rounded-tl-none p-4 text-slate-300">
                      "Hi, I want to book an appointment with Dr. Lee."
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-accent-900/50 border border-accent-800 rounded-2xl rounded-tr-none p-4 text-accent-100">
                      "Sure, I can help with that. Are you a new or returning patient?"
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="bg-slate-700 rounded-2xl rounded-tl-none p-4 text-slate-300">
                      "I'm a returning patient. My name is John Doe."
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-accent-900/50 border border-accent-800 rounded-2xl rounded-tr-none p-4 text-accent-100">
                      "Thanks, John. Dr. Lee has availability this Thursday at 10 AM or Friday at 2 PM. Do either of those work for you?"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow Diagram */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-16">How the AI Workflow operates.</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center mb-4">
                <PhoneCall className="w-8 h-8 text-slate-600" />
              </div>
              <div className="font-semibold text-slate-900">Incoming Call</div>
            </div>
            <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-accent-50 shadow-md border border-accent-200 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <div className="font-semibold text-slate-900">AI Processes Request</div>
            </div>
            <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-slate-600" />
              </div>
              <div className="font-semibold text-slate-900">Books Appointment</div>
            </div>
            <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-primary-50 shadow-md border border-primary-200 flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-primary-600" />
              </div>
              <div className="font-semibold text-slate-900">Updates Dashboard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Clinics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Measurable impact on your clinic.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Stop losing patients to missed calls. The AI assistant directly impacts your bottom line while improving patient experience.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Reduce Missed Calls to Zero", desc: "Every call is answered immediately, even during peak hours." },
                  { title: "Increase Bookings", desc: "Convert after-hours calls into confirmed appointments." },
                  { title: "Less Front Desk Workload", desc: "Free up your staff to focus on patients in the waiting room." },
                  { title: "24/7 Availability", desc: "Your clinic is always open for booking." }
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-accent-500" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{benefit.title}</h4>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">Missed Calls Before AI</div>
                  <div className="flex items-end gap-4">
                    <div className="text-4xl font-bold text-slate-900">35%</div>
                    <div className="w-full h-4 bg-red-100 rounded-full overflow-hidden mb-2"><div className="w-[35%] h-full bg-red-400"></div></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">Missed Calls After AI</div>
                  <div className="flex items-end gap-4">
                    <div className="text-4xl font-bold text-accent-600">0%</div>
                    <div className="w-full h-4 bg-accent-100 rounded-full overflow-hidden mb-2"><div className="w-0 h-full bg-accent-500"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let AI Handle Your Clinic Calls
          </h2>
          <p className="text-xl text-accent-100 mb-10">
            Start your free trial today and see how our AI receptionist can transform your practice.
          </p>
          <Link to="/signup" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-accent-900 font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
