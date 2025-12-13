import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="flex h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
        404 Not Found
      </p>
      <h1 className="text-4xl font-black text-white">엔트리가 없습니다.</h1>
      <p className="text-slate-300">
        트레이너가 찾는 페이지가 도감에 없네요. 홈 또는 도감으로 돌아가세요.
      </p>
      <div className="flex gap-3">
        <Link
          to="/"
          className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200"
        >
          홈으로
        </Link>
        <Link
          to="/pokedex"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-cyan-300/60"
        >
          도감 보기
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
