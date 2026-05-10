const StatBar = ({ label, value }) => {
  const clamped = Math.min(Math.max(value, 0), 100)
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-600 dark:text-slate-300 transition-colors">
        <span>{label}</span>
        <span className="font-bold text-amber-600 dark:text-amber-200">{clamped}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10 transition-colors">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-300 transition-all"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}

export default StatBar
