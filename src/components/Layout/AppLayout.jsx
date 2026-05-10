import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const AppLayout = ({ children }) => {
  const content = children ?? <Outlet />
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-['Space_Grotesk',_'Pretendard',_sans-serif] transition-colors duration-300">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-[120px] transition-colors" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-400/5 dark:bg-amber-400/10 blur-[120px] transition-colors" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <Navbar />
        <main className="pb-16 pt-10">{content}</main>
        <footer className="border-t border-slate-900/5 dark:border-white/5 py-8 text-sm text-slate-500 dark:text-slate-400" />
      </div>
    </div>
  )
}

export default AppLayout
