import Link from "next/link";
import { ArrowRight, Hexagon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative p-4">
      <Link href="/" className="absolute top-8 left-8 text-slate-500 font-bold flex items-center gap-2 hover:text-slate-900 transition-colors">
         <Hexagon className="text-primary fill-primary/20" size={24} /> BridgeLoop
      </Link>
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_40px_rgba(42,52,57,0.06)] border border-slate-200 p-8 sm:p-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="mb-8">
          <h1 className="text-3xl font-black font-headline text-slate-800 tracking-tight">Welcome back</h1>
          <p className="text-sm text-slate-500 mt-2">Sign in to access your intelligence dashboard.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Work Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-800"
              placeholder="you@company.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide">Password</label>
              <a href="#" className="text-xs text-primary font-bold hover:underline">Forgot password?</a>
            </div>
            <input 
              type="password" 
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-800"
              placeholder="••••••••"
            />
          </div>

          <Link href="/dashboard" className="w-full bg-primary hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-sm">
            Sign In <ArrowRight size={16} />
          </Link>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Or</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <button className="w-full mt-8 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm py-3 rounded-lg transition-all shadow-sm">
          Continue with Google
        </button>

        <p className="text-xs text-center text-slate-500 mt-8 font-medium">
          Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Request Access</Link>
        </p>
      </div>
    </div>
  );
}
