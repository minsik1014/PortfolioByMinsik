import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="flex h-[60vh] flex-col items-center justify-center gap-4 text-center transition-colors">
      <p className="text-sm uppercase tracking-[0.2em] text-amber-600 dark:text-amber-200 transition-colors">
        404 Not Found
      </p>
      <h1 className="text-4xl font-black text-slate-900 dark:text-white transition-colors">엔트리가 없습니다.</h1>
      <p className="text-slate-600 dark:text-slate-300 transition-colors">
        트레이너가 찾는 페이지가 도감에 없네요. 홈 또는 도감으로 돌아가세요.
      </p>
      <div className="flex gap-3">
        <Link
          to="/"
          className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-colors"
        >
          홈으로
        </Link>
        <Link
          to="/pokedex"
          className="rounded-full border border-slate-900/10 dark:border-white/20 px-5 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:border-cyan-500/60 transition-colors"
        >
          도감 보기
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
