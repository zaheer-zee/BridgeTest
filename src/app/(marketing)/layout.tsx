import Link from "next/link";
import { Hexagon } from "lucide-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Marketing Header / Navbar */}
      <header className="absolute top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="text-slate-900 font-bold flex items-center gap-2 group">
           <Hexagon className="text-primary fill-primary/20 group-hover:rotate-12 transition-transform duration-300" size={28} /> 
           <span className="text-xl font-black font-headline tracking-tight">BridgeLoop</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href="#how-it-works" className="hover:text-primary transition-colors">Platform</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="bg-slate-900 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 duration-300">
            Start Free Trial
          </Link>
        </div>
      </header>

      {/* Main Marketing Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-8 md:px-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
           <div className="col-span-1 md:col-span-1">
              <Link href="/" className="text-white font-bold flex items-center gap-2 mb-4">
                 <Hexagon className="text-emerald-500 fill-emerald-500/20" size={24} /> 
                 <span className="text-lg font-black font-headline tracking-tight">BridgeLoop</span>
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                The intelligence layer for aggressive growth teams. Monitor competitors automatically through AI-driven tracking.
              </p>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-4 font-headline tracking-widest text-xs uppercase">Product</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Zapier Integrations</a></li>
               <li><a href="#" className="hover:text-white transition-colors">ChatGPT Parsing</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Pricing Intelligence</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-4 font-headline tracking-widest text-xs uppercase">Company</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-4 font-headline tracking-widest text-xs uppercase">Legal</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Security Details</a></li>
             </ul>
           </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
           <p>© {new Date().getFullYear()} BridgeLoop Inc. All rights reserved.</p>
           <div className="mt-4 md:mt-0 flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
           </div>
        </div>
      </footer>
      
    </div>
  );
}
