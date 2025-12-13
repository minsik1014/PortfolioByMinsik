const StatBar = ({ label, value }) => {
  const clamped = Math.min(Math.max(value, 0), 100)
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-300">
        <span>{label}</span>
        <span className="font-bold text-amber-200">{clamped}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-300 transition-all"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}

export default StatBar
