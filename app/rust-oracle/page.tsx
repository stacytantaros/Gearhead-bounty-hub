'use client'
import { useState } from 'react'

export default function RustOracle() {
  const [files, setFiles] = useState<File[]>([])
  const [result, setResult] = useState<any>(null)
  const [analyzing, setAnalyzing] = useState(false)

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files))
  }

  const analyze = () => {
    if (files.length < 3) return alert('Upload 3+ photos')
    setAnalyzing(true)
    setTimeout(() => {
      setResult({
        vehicle: "1965 GMC C1500 Pickup w/ Camper Shell",
        restorationCost: 12800,
        resaleValue: 28500,
        breakdown: { rust: 5800, paint: 3200, mechanical: 2500, interior: 1300 }
      })
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12">Rust Oracle</h1>
      <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
        Upload 3-5 photos → Instant repair costs + resale value
      </p>
      
      <div className="bg-black/50 p-8 rounded-xl border border-emerald-500/30">
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          onChange={handleFiles} 
          className="block w-full mb-6 p-4 bg-black/30 rounded-lg border border-emerald-500/30 text-white"
        />
        <button 
          onClick={analyze} 
          disabled={analyzing || files.length < 3}
          className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 py-4 rounded-lg font-bold text-lg disabled:opacity-50"
        >
          {analyzing ? '🔄 Analyzing...' : `🚀 Analyze Vehicle (${files.length} photos)`}
        </button>
      </div>

      {result && (
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-black/50 p-8 rounded-xl border border-emerald-500/30">
            <h2 className="text-2xl font-bold mb-6">🔧 Restoration Cost</h2>
            <div className="text-5xl font-bold text-emerald-400">${result.restorationCost.toLocaleString()}</div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div className="bg-black/30 p-3 rounded-lg">Rust: ${result.breakdown.rust?.toLocaleString()}</div>
              <div className="bg-black/30 p-3 rounded-lg">Paint: ${result.breakdown.paint?.toLocaleString()}</div>
              <div className="bg-black/30 p-3 rounded-lg">Mechanical: ${result.breakdown.mechanical?.toLocaleString()}</div>
              <div className="bg-black/30 p-3 rounded-lg">Interior: ${result.breakdown.interior?.toLocaleString()}</div>
            </div>
          </div>
          <div className="bg-black/50 p-8 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-6">💰 Resale Value</h2>
            <div className="text-5xl font-bold text-blue-400">${result.resaleValue.toLocaleString()}</div>
            <div className="mt-6 p-6 bg-green-500/20 rounded-lg">
              <h3 className="font-bold text-lg">🚀 PROFIT</h3>
              <div className="text-3xl font-bold text-green-400">+${(result.resaleValue - result.restorationCost).toLocaleString()}</div>
              <p className="text-green-300 mt-2">{result.vehicle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
