import Link from "next/link";
import { ArrowRight, Bot, Zap, LineChart, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-white to-white border-b border-slate-100"></div>
        <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-emerald-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-sky-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-[10px] font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Milestone 2 is Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-headline text-slate-900 tracking-tighter leading-[1.1] mb-8">
              Automate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Competitive Intelligence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              BridgeLoop automatically monitors your competitors across the web, uses AI to parse sentiments and pricing shifts, and delivers actionable alerts directly to your dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/signup" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 duration-300">
                Get Started Free <ArrowRight size={18} />
              </Link>
              <Link href="/login" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 font-bold px-8 py-4 rounded-full transition-all hover:bg-slate-50 flex items-center justify-center">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Features */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-black font-headline text-slate-900 tracking-tighter mb-4">The Engine behind BridgeLoop</h2>
            <p className="text-slate-500">Our architecture is completely decoupled, leveraging industry leading tooling to ensure zero data is missed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold font-headline text-slate-900 mb-3">1. Google Alerts Ingestion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Automatically scrapes the entire web for your specified competitor domains and target keywords, sending raw data payloads instantly.</p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-bold font-headline text-slate-900 mb-3">2. ChatGPT Parsing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Raw alerts are piped through custom LLM prompts. We automatically classify sentiment as Positive, Neutral, or Negative and extract pricing mentions.</p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold font-headline text-slate-900 mb-3">3. Zapier Webhooks</h3>
              <p className="text-slate-600 text-sm leading-relaxed">If a pricing variance exceeds ±5%, Zapier immediately triggers critical alerts, routing the processed data directly back to this Next.js dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-950"></div>
        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
          <h2 className="text-4xl font-black font-headline text-white tracking-tighter mb-6">Ready to outsmart your competitors?</h2>
          <p className="text-slate-400 text-lg mb-10">Join the thousands of analysts relying on BridgeLoop entirely for their market research and pricing strategies.</p>
          <Link href="/signup" className="inline-block bg-primary hover:bg-emerald-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            Start your free 14-day trial
          </Link>
        </div>
      </section>
    </>
  );
}
