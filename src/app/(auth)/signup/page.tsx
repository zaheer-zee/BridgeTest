import Link from "next/link";
import { ArrowRight, Hexagon, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 relative p-4 lg:p-0">
      
      {/* Split layout for signup */}
      <div className="w-full max-w-[1200px] bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row animate-in fade-in zoom-in-95 duration-700 h-[800px] max-h-[90vh]">
        
        {/* Marketing Side */}
        <div className="hidden lg:flex w-5/12 bg-slate-900 flex-col p-16 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-slate-900 to-slate-950"></div>
           
           <div className="relative z-10 flex flex-col h-full">
              <Link href="/" className="text-white font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Hexagon className="text-emerald-400 fill-emerald-400/20" size={28} /> BridgeLoop
              </Link>
              
              <div className="mt-auto space-y-6">
                 <h2 className="text-4xl font-black font-headline text-white leading-tight tracking-tighter">
                   Automate your competitive data.
                 </h2>
                 <p className="text-slate-400 font-medium leading-relaxed">
                   Join leading strategic analysts who use BridgeLoop's Zapier-to-AI pipeline to automatically monitor pricing variances and sentiment shifts across entire industries.
                 </p>
                 
                 <div className="pt-8 space-y-4">
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="text-emerald-400" size={20} />
                     <span className="text-sm font-semibold text-slate-300">Unrestricted competitor tracking</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="text-emerald-400" size={20} />
                     <span className="text-sm font-semibold text-slate-300">Automated sentiment tagging</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="text-emerald-400" size={20} />
                     <span className="text-sm font-semibold text-slate-300">Immediate Zapier webhooks</span>
                   </div>
                 </div>
              </div>
           </div>
        </div>
        
        {/* Form Side */}
        <div className="w-full lg:w-7/12 p-8 sm:p-16 flex flex-col justify-center overflow-y-auto">
          
          <div className="lg:hidden mb-8">
            <Link href="/" className="text-slate-800 font-bold flex items-center gap-2">
              <Hexagon className="text-primary fill-primary/20" size={24} /> BridgeLoop
            </Link>
          </div>

          <div className="max-w-md w-full mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-black font-headline text-slate-800 tracking-tight">Create your account</h1>
              <p className="text-sm text-slate-500 mt-2">Start your 14-day free trial. No credit card required.</p>
            </div>

            <form className="space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-800"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-800"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Work Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-800"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Create Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-800"
                  placeholder="••••••••"
                />
              </div>

              <Link href="/dashboard" className="w-full bg-primary hover:bg-emerald-700 text-white font-bold text-sm py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-sm">
                Get Started Free <ArrowRight size={16} />
              </Link>
            </form>

            <p className="text-xs text-center text-slate-500 mt-10 font-medium">
              Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
