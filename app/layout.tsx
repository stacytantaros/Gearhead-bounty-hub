export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white min-h-screen">
        <nav className="bg-black/80 backdrop-blur-lg border-b border-emerald-500/20 p-4 sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-emerald-400 max-w-7xl mx-auto">⚡ Gearhead Bounty Hub</h1>
        </nav>
        <main className="max-w-6xl mx-auto p-8 py-12">{children}</main>
      </body>
    </html>
  )
}
