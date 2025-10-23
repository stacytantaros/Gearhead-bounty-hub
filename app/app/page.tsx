export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold mb-8">
        Flip Classics.
        <span className="text-emerald-400"> Smarter.</span>
      </h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
        AI valuation • Parts marketplace • Barn find alerts
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
        <a href="/rust-oracle" className="group bg-black/50 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-500/60 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Rust Oracle</h3>
          <p className="text-slate-400 mb-6">Upload photos → Get repair costs + value</p>
          <button className="bg-emerald-600 px-6 py-3 rounded-lg font-semibold text-white group-hover:bg-emerald-700">
            Analyze Now
          </button>
        </a>
        <div className="bg-black/50 border border-blue-500/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Swap Ghost</h3>
          <p className="text-slate-400 mb-6">Rare parts marketplace</p>
          <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white">Browse Parts</button>
        </div>
        <div className="bg-black/50 border border-orange-500/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Alerts</h3>
          <p className="text-slate-400 mb-6">Deal notifications</p>
          <button className="bg-orange-600 px-6 py-3 rounded-lg font-semibold text-white">Set Alerts</button>
        </div>
      </div>
    </div>
  )
}
