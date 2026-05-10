import { Link } from 'react-router-dom'
import Badge from '../components/common/Badge'
import StatBar from '../components/common/StatBar'

const HomePage = () => {
  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-200 transition-colors">
          Pokédex Portfolio
        </div>
        <h1 className="text-5xl font-black leading-[1.1] text-slate-900 dark:text-white sm:text-5xl transition-colors">
          심민식의 프로젝트 도감
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base transition-colors">
          안녕하세요 프런트엔드 개발자 심민식입니다.<br />
          이 도감은 제가 진행한 다양한 프로젝트들과 포트폴리오를 모아놓은 곳입니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/pokedex"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300 shadow-lg shadow-amber-500/20"
          >
            도감 열기 (Pokedex)
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-slate-900/20 dark:border-white/20 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-100"
          >
            트레이너 정보
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge label="Frontend x 7" variant="frontend" />
          <Badge label="Backend x 1" variant="backend" />
        </div>
      </div>

      <div className="relative rounded-3xl border-4 border-red-900 bg-gradient-to-br from-[#b80f1f] via-[#c91c2f] to-[#8b0c18] p-6 shadow-2xl shadow-red-600/30">
        <div className="absolute inset-0 rounded-[24px] border-2 border-red-300/30" />
        <div className="absolute -left-4 top-6 h-16 w-16 rounded-full bg-cyan-300/40 blur-2xl" />
        <div className="absolute right-6 top-6 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#2dd4bf]" />
          <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
          <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-100">
            Pokedex Lens
          </p>
          <Link
            to="/pokedex"
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border-4 border-red-200/60 bg-[#0b0f1a] shadow-inner shadow-red-900/50 transition hover:-translate-y-1 hover:shadow-red-500/50"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,113,113,0.25),transparent_55%)]" />
            <div className="h-36 w-36 rounded-full border-[10px] border-[#f59e0b] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 shadow-lg shadow-amber-300/30 transition group-hover:scale-105" />
            <div className="absolute bottom-4 rounded-full bg-red-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 border border-red-200/40">
              Click · Pokedex
            </div>
          </Link>
          <div className="rounded-2xl border-2 border-red-200/40 bg-[#0f172a]/80 p-4 shadow-inner shadow-red-900/30">
            <div className="flex items-center justify-between text-xs text-amber-100">
              <span>현재 상태</span>
              <span className="font-semibold text-white">
                Frontend 7 · Backend 1 (도감 기준)
              </span>
            </div>
            <div className="mt-3 grid gap-2">
              <StatBar label="Frontend" value={82} />
              <StatBar label="Backend" value={60} />
              <StatBar label="Arch/Perf" value={72} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
