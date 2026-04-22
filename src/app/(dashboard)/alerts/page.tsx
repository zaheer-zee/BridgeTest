import { BellRing, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function AlertsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black font-headline text-slate-900 tracking-tighter">Actionable Intelligence</h1>
        <p className="text-sm font-semibold text-slate-500 tracking-widest uppercase mt-1">Alerts & Notifications</p>
      </div>

      <div className="space-y-4">
        {/* Empty State / All Caught Up */}
        <div className="bg-gradient-to-br from-emerald-50 to-white shadow-[0_20px_40px_rgba(42,52,57,0.06)] rounded-[2rem] p-10 text-center border-0">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm claymorphic-icon mx-auto mb-6">
            <CheckCircle2 className="text-emerald-500" size={32} />
          </div>
          <h2 className="text-2xl font-black font-headline text-emerald-900 tracking-tighter mb-3">You're all caught up!</h2>
          <p className="text-emerald-700 font-medium max-w-sm mx-auto">No new actionable pricing shifts or critical sentiment drops detected across your monitored competitors.</p>
        </div>

        {/* Older Historical Alerts Section */}
        <div className="pt-8">
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-6 px-4">Historical Archive</h3>
          
          <div className="bg-surface-container-lowest shadow-sm rounded-[2rem] p-4 divide-y divide-slate-100">
            <div className="p-4 flex gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="text-red-500" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight text-slate-800">Critical Sentiment Drop: CloudSync</h4>
                <p className="text-xs text-slate-500 mt-1">Automated analysis detected a 30% increase in negative feedback related to "billing" keywords.</p>
                <div className="flex gap-3 mt-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3 Days Ago</span>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Resolved</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <BellRing className="text-blue-500" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight text-slate-800">Price Bump Detected: OmniDrive</h4>
                <p className="text-xs text-slate-500 mt-1">Pricing baseline shifted from $49/mo to $54/mo (+10.2%).</p>
                <div className="flex gap-3 mt-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">1 Week Ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
