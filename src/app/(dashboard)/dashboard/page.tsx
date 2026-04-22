import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  MessageSquareWarning, 
  AlertTriangle,
  ArrowRight,
  MoreVertical,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-6">
      
      {/* Top Header / KPI Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-headline">Intelligence Overview</h2>
          <p className="text-sm text-slate-500 mt-1">Real-time metrics aggregated across all active trackers.</p>
        </div>
        <Link href="/competitors/add" className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-emerald-700 transition flex items-center gap-2">
          New Tracker <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
          <div className="flex justify-between items-start">
             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Trackers</span>
             <Activity size={16} className="text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
             <span className="text-2xl font-black text-slate-800 font-headline">14</span>
             <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">+2 this week</span>
          </div>
        </div>
        {/* KPI 2 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
           <div className="flex justify-between items-start">
             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pricing Variance</span>
             <TrendingDown size={16} className="text-red-500" />
          </div>
          <div className="flex items-baseline gap-2">
             <span className="text-2xl font-black text-slate-800 font-headline">-2.4%</span>
             <span className="text-xs text-slate-500 font-medium">industry avg</span>
          </div>
        </div>
        {/* KPI 3 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
           <div className="flex justify-between items-start">
             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sentiment Index</span>
             <MessageSquareWarning size={16} className="text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2">
             <span className="text-2xl font-black text-slate-800 font-headline">68/100</span>
             <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full">Neutral</span>
          </div>
        </div>
        {/* KPI 4 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
           <div className="flex justify-between items-start">
             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Actionable Alerts</span>
             <AlertTriangle size={16} className="text-indigo-500" />
          </div>
          <div className="flex items-baseline gap-2">
             <span className="text-2xl font-black text-slate-800 font-headline">6</span>
             <span className="text-xs text-slate-500 font-medium">Pending Review</span>
          </div>
        </div>
      </div>

      {/* Main Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Competitive Matrix (Table/List) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
             <h3 className="text-sm font-bold text-slate-800 font-headline">Competitive Pricing Matrix</h3>
             <button className="text-xs font-semibold text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="font-semibold p-4">Competitor</th>
                  <th className="font-semibold p-4">Baseline ($)</th>
                  <th className="font-semibold p-4">Current ($)</th>
                  <th className="font-semibold p-4">Variance</th>
                  <th className="font-semibold p-4 text-center">Status</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px]">NX</div>
                    Nexus AI
                  </td>
                  <td className="p-4 text-slate-500">120.00</td>
                  <td className="p-4 font-semibold">110.00</td>
                  <td className="p-4 text-red-600 flex items-center gap-1"><TrendingDown size={14}/> 8.3%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">REVIEW</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-slate-700"><MoreVertical size={16} /></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-700 text-[10px]">CS</div>
                    CloudSync
                  </td>
                  <td className="p-4 text-slate-500">49.00</td>
                  <td className="p-4 font-semibold">54.00</td>
                  <td className="p-4 text-emerald-600 flex items-center gap-1"><TrendingUp size={14}/> 10.2%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-[10px] font-bold rounded">CRITICAL</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-slate-700"><MoreVertical size={16} /></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-700 text-[10px]">OD</div>
                    OmniDrive
                  </td>
                  <td className="p-4 text-slate-500">89.00</td>
                  <td className="p-4 font-semibold">89.00</td>
                  <td className="p-4 text-slate-400 flex items-center gap-1">0.0%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">STABLE</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-slate-700"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Intelligence Feed */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
             <h3 className="text-sm font-bold text-slate-800 font-headline">Zapier Intelligence Feed</h3>
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <div className="p-5 flex-1 overflow-y-auto space-y-5">
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center">
                 <AlertTriangle size={14} className="text-red-500" />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-baseline mb-1">
                   <h4 className="text-xs font-bold text-slate-800">Negative PR Spike</h4>
                   <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">2m ago</span>
                 </div>
                 <p className="text-xs text-slate-600 leading-relaxed mb-2">
                   Google Alerts detected a 30% increase in negative articles for <span className="font-bold">CloudSync</span> regarding data outages.
                 </p>
                 <a href="#" className="text-[10px] text-primary font-bold inline-flex items-center gap-1 uppercase tracking-wider hover:underline">
                   View Source <ExternalLink size={10} />
                 </a>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center">
                 <TrendingUp size={14} className="text-blue-500" />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-baseline mb-1">
                   <h4 className="text-xs font-bold text-slate-800">Tier Repricing</h4>
                   <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">1h ago</span>
                 </div>
                 <p className="text-xs text-slate-600 leading-relaxed">
                   <span className="font-bold">OmniDrive</span> updated their Enterprise tier publicly, shifting from hidden pricing to transparent $199/mo standard.
                 </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex-shrink-0 flex items-center justify-center">
                 <CheckCircle2 size={14} className="text-emerald-500" />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-baseline mb-1">
                   <h4 className="text-xs font-bold text-slate-800">Daily Sync Complete</h4>
                   <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">4h ago</span>
                 </div>
                 <p className="text-xs text-slate-600 leading-relaxed">
                   Zapier successfully processed Google Sheets recalculations. 14 targets analyzed. No major deviances detected.
                 </p>
              </div>
            </div>

          </div>
          <div className="p-3 border-t border-slate-100 bg-slate-50">
             <button className="w-full py-2 bg-white border border-slate-200 text-xs font-bold text-slate-600 rounded-lg hover:bg-slate-50 transition">
               View Full Logs
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
