import { Settings2, Webhook, Key, Zap } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black font-headline text-slate-900 tracking-tighter">System Configuration</h1>
        <p className="text-sm font-semibold text-slate-500 tracking-widest uppercase mt-1">Integrations & Hooks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <aside className="space-y-2">
          <button className="w-full text-left px-5 py-4 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-sm flex items-center gap-3">
            <Webhook size={18} /> Zapier Integrations
          </button>
          <button className="w-full text-left px-5 py-4 hover:bg-surface-container-high text-slate-500 rounded-xl font-bold text-sm flex items-center gap-3 transition-colors">
            <Key size={18} /> API Keys
          </button>
          <button className="w-full text-left px-5 py-4 hover:bg-surface-container-high text-slate-500 rounded-xl font-bold text-sm flex items-center gap-3 transition-colors">
            <Settings2 size={18} /> Preferences
          </button>
        </aside>

        <section className="md:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest shadow-[0_20px_40px_rgba(42,52,57,0.06)] rounded-[2.5rem] p-8 border-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center">
                <Webhook size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline text-slate-800">n8n Local Webhook</h3>
                <p className="text-sm text-slate-500">Manage the destination URL for automated tracking events.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Endpoint URL</label>
                <div className="flex gap-2">
                  <input 
                    type="url" 
                    readOnly
                    value={process.env.ZAPIER_WEBHOOK_URL || ""}
                    className="w-full bg-surface-container-high border-[1.5px] border-emerald-500/30 rounded-xl px-4 py-3 text-slate-800 font-medium text-sm focus:outline-none"
                    placeholder="http://localhost:5678/webhook-test/..."
                  />
                  <a href="http://localhost:5678" target="_blank" rel="noreferrer" className="px-6 bg-slate-900 flex items-center justify-center text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap">Open n8n UI</a>
                </div>
                <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active integration. Routing payloads to local n8n instance.
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
