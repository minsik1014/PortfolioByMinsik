const palette = {
  frontend: 'bg-cyan-500/20 text-cyan-200 border-cyan-500/40',
  backend: 'bg-indigo-500/20 text-indigo-200 border-indigo-500/40',
  fullstack: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/40',
  mobile: 'bg-orange-500/20 text-orange-200 border-orange-500/40',
  ml: 'bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/40',
  tooling: 'bg-amber-400/20 text-amber-200 border-amber-500/40',
  default: 'bg-slate-800 text-slate-100 border-white/10',
}

const Badge = ({ label, variant = 'default' }) => {
  const color = palette[variant] ?? palette.default
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${color}`}
    >
      {label}
    </span>
  )
}

Badge.propTypes = {
}

export default Badge
