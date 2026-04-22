import Link from "next/link";
import { Users, Search, Filter, Plus } from "lucide-react";

export default function CompetitorsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black font-headline text-slate-900 tracking-tighter">Competitor Directory</h1>
          <p className="text-sm font-semibold text-slate-500 tracking-widest uppercase mt-1">Manage Tracking Profiles</p>
        </div>
        <Link 
          href="/competitors/add" 
          className="bg-primary hover:bg-primary-dim text-white font-bold tracking-widest uppercase text-xs px-6 py-3 rounded-xl shadow-sm transition-all flex items-center gap-2"
        >
          <Plus size={16} /> New Profile
        </Link>
      </div>

      <div className="bg-surface-container-lowest shadow-[0_20px_40px_rgba(42,52,57,0.06)] rounded-[2.5rem] p-8 border-0 overflow-hidden">
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search competitors..." 
              className="w-full bg-surface-container-high border-0 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm"
            />
          </div>
          <button className="px-4 py-3 bg-surface-container-high rounded-xl text-slate-500 hover:text-primary transition-colors flex items-center gap-2 font-bold text-sm">
            <Filter size={18} /> Filter
          </button>
        </div>

        <div className="text-center py-16">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="text-emerald-300" size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 font-headline mb-2">No active trackers found</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">You haven't setup any competitor profiles yet. Add a competitor to start monitoring pricing and sentiment automatically.</p>
          <Link 
            href="/competitors/add" 
            className="text-primary font-bold text-sm tracking-widest uppercase hover:underline"
          >
            Setup First Competitor
          </Link>
        </div>
      </div>
    </div>
  );
}
