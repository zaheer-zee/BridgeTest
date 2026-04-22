import Link from "next/link";
import { LayoutDashboard, Users, BellRing, Settings, Component } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 border-r border-slate-200 bg-white z-40">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-slate-100">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-sm text-white font-bold text-xs">
          BL
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-800 font-headline leading-tight">BridgeLoop</span>
          <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Intelligence</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-5 px-4">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-3">Main Menu</h3>
        <nav className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className="bg-surface-container-low text-primary rounded-lg px-3 py-2 flex items-center gap-3 transition-colors"
          >
            <LayoutDashboard size={18} />
            <span className="text-sm font-semibold tracking-wide">Overview</span>
          </Link>
          <Link
            href="/competitors"
            className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg px-3 py-2 flex items-center gap-3 transition-colors"
          >
            <Users size={18} />
            <span className="text-sm font-medium tracking-wide">Competitors</span>
          </Link>
          <Link
            href="/alerts"
            className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg px-3 py-2 flex items-center gap-3 transition-colors"
          >
            <BellRing size={18} />
            <span className="text-sm font-medium tracking-wide">Alert Feed</span>
          </Link>
        </nav>

        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mt-8 mb-3">System</h3>
        <nav className="flex flex-col gap-1">
          <Link
            href="/settings"
            className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg px-3 py-2 flex items-center gap-3 transition-colors"
          >
            <Settings size={18} />
            <span className="text-sm font-medium tracking-wide">Configuration</span>
          </Link>
        </nav>
      </div>
      
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-600">Zapier Router Active</span>
        </div>
      </div>
    </aside>
  );
}
