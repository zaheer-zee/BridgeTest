import { Search, Bell, HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex justify-between items-center px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-base font-bold text-slate-800 font-headline hidden md:block">
          Global Dashboard
        </h1>
        <div className="h-4 w-px bg-slate-300 hidden md:block"></div>
        <div className="flex items-center max-w-sm w-full relative">
           <Search size={16} className="absolute left-3 text-slate-400" />
           <input 
             type="text" 
             placeholder="Search metrics, reports, or competitors..." 
             className="bg-slate-50 border border-slate-200 rounded-md pl-9 pr-4 py-1.5 text-sm w-full focus:ring-1 focus:ring-primary focus:border-primary transition-all text-slate-600"
           />
        </div>
      </div>

      <div className="flex items-center gap-4 text-slate-500">
        <button className="hover:text-primary transition-colors">
          <HelpCircle size={18} />
        </button>
        <button className="hover:text-primary transition-colors relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="h-8 w-8 rounded bg-gradient-to-tr from-slate-200 to-slate-300 border border-slate-300 flex items-center justify-center shadow-inner ml-2">
           <span className="text-xs font-bold text-slate-600">ADM</span>
        </div>
      </div>
    </header>
  );
}
