import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/pokedex', label: 'Pokedex' },
  { to: '/about', label: 'Trainer' },
]

const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-4 pt-8">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950">
          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="h-9 w-9 drop-shadow-[0_2px_6px_rgba(248,113,113,0.35)]"
          >
            <circle cx="32" cy="32" r="30" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
            <path
              d="M2 32h60"
              stroke="#0f172a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M4 32a28 28 0 0 1 56 0"
              fill="#ef4444"
              stroke="#0f172a"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="32" r="9" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
            <circle cx="32" cy="32" r="4" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
            Portfolio
          </p>
          <p className="text-lg font-semibold text-white">Pokedex Edition</p>
        </div>
      </Link>
      <nav className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-1 shadow-lg shadow-cyan-500/5 backdrop-blur">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'text-slate-900 bg-amber-300 rounded-full'
                  : 'text-slate-200 hover:text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
