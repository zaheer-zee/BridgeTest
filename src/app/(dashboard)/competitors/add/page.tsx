"use client";

import { useState } from "react";
import { ArrowLeft, Plus, CheckCircle2, AlertCircle, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddCompetitor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    url: "",
    keywords: "",
    baselinePrice: "",
    priority: "medium",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/competitors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          keywords: formData.keywords.split(",").map(k => k.trim()).filter(Boolean),
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit to webhook");

      setComplete(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1000px] mx-auto space-y-6">
      <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
        <Link href="/" className="p-2 border border-slate-200 bg-white rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-xl font-bold font-headline text-slate-800 tracking-tight">Add Tracking Target</h1>
          <p className="text-xs text-slate-500 mt-1">Configure competitor parameters for automated Zapier ingestion.</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
        
        {complete ? (
          <div className="flex flex-col items-center justify-center p-16 text-center h-[300px]">
             <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={32} className="text-emerald-500" />
             </div>
             <h2 className="text-lg font-bold font-headline text-slate-800 mb-2">Configuration Saved</h2>
             <p className="text-sm text-slate-500 max-w-sm">Target parameters have been successfully routed to the Zapier webhook. Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            
            <div className="p-6 md:p-8">
              {error && (
                 <div className="bg-red-50 border border-red-100 text-red-600 p-3 mb-6 rounded-md flex items-center gap-2 text-sm font-medium">
                   <AlertCircle size={16} /> {error}
                 </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Core Info */}
                <div className="space-y-5">
                  <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Target Identity</h3>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Company Name <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all text-slate-800 placeholder-slate-400"
                      placeholder="e.g. Nexus AI Solutions"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Primary Web Domain <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="url" 
                      name="url"
                      value={formData.url}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all text-slate-800 placeholder-slate-400"
                      placeholder="https://nexus-ai.com"
                    />
                  </div>
                </div>

                {/* Automation Rules */}
                <div className="space-y-5">
                  <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Monitoring Rules</h3>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Baseline Pricing ($ USD) <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="number" 
                      name="baselinePrice"
                      value={formData.baselinePrice}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all text-slate-800 placeholder-slate-400"
                      placeholder="e.g. 199.00"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Target Keywords</label>
                    <input 
                      type="text" 
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all text-slate-800 placeholder-slate-400"
                      placeholder="enterprise, pro tier, api overage"
                    />
                    <p className="text-[10px] text-slate-500 mt-1.5 leading-snug">Comma separated. Used by Google Alerts and ChatGPT ingestion parsing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
              <Link href="/" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition">
                Cancel
              </Link>
              <button 
                type="submit" 
                disabled={loading}
                className="bg-primary hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-2 rounded-md transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save size={16} />
                )}
                {loading ? "Processing..." : "Save Configuration"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
