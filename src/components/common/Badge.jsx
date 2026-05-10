const palette = {
  frontend: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-200 dark:border-cyan-500/40',
  backend: 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-200 dark:border-indigo-500/40',
  fullstack: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-200 dark:border-emerald-500/40',
  mobile: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-500/40',
  ml: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-500/20 dark:text-fuchsia-200 dark:border-fuchsia-500/40',
  tooling: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-400/20 dark:text-amber-200 dark:border-amber-500/40',
  default: 'bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:border-white/10',
}

const Badge = ({ label, variant = 'default' }) => {
  const color = palette[variant] ?? palette.default
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${color}`}
    >
      {label}
    </span>
  )
}

Badge.propTypes = {
}

export default Badge
