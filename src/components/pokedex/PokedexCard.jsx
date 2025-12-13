import { Link } from 'react-router-dom'
import Badge from '../common/Badge'
import StatBar from '../common/StatBar'

const PokedexCard = ({ project }) => {
  const highlights = project.highlights ?? []
  const stats = project.stats ?? {}
  const status = project.status ?? 'in-progress'
  const idLabel = project.id ? project.id.toString().padStart(3, '0') : '---'
  const detailLink = project.slug ? `/pokedex/${project.slug}` : '#'
  const statusStyles = {
    'in-progress': 'bg-amber-400/20 text-amber-100 border-amber-300/40',
    completed: 'bg-emerald-400/20 text-emerald-100 border-emerald-300/40',
    planning: 'bg-cyan-400/20 text-cyan-100 border-cyan-300/40',
    paused: 'bg-slate-500/30 text-slate-100 border-slate-300/40',
  }
  const statusLabelMap = {
    'in-progress': '진행중',
    completed: '완료',
    planning: '기획',
    paused: '중단',
  }
  const statusStyle = statusStyles[status] ?? statusStyles['in-progress']
  const statusLabel = statusLabelMap[status] ?? status
  const types = project.types ?? []
  const stacks = project.stacks ?? []
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-slate-900/60 to-slate-900/90 p-5 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-400/20">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {types.length === 0 ? (
              <Badge label="타입을 추가하세요" />
            ) : (
              types.map((type) => <Badge key={type} label={type} variant={type} />)
            )}
          </div>
          <h3 className="text-2xl font-bold text-white">
            {project.name || '프로젝트 이름'}
          </h3>
          <p className="text-sm text-slate-300">
            {project.summary || '요약을 입력하세요.'}
          </p>
          <div className="text-xs text-slate-400">
            {project.period || '기간'} · {project.role || '역할'}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
            #{idLabel}
          </span>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide whitespace-nowrap ${statusStyle}`}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {stacks.length === 0 ? (
          <Badge label="스택을 추가하세요" />
        ) : (
          stacks.map((stack) => <Badge key={stack} label={stack} />)
        )}
      </div>

      <div className="mt-4 grid gap-2">
        <StatBar label="Frontend" value={stats.frontend ?? 0} />
        <StatBar label="Backend" value={stats.backend ?? 0} />
        <StatBar label="CS" value={stats.cs ?? 0} />
        <StatBar label="UX" value={stats.ux ?? 0} />
      </div>

      <div className="mt-3 text-xs text-slate-300">
        <p className="font-semibold text-slate-200">주요 기능</p>
        <ul className="mt-1 space-y-1">
          {highlights.length === 0 ? (
            <li className="text-slate-500">하이라이트를 입력하세요.</li>
          ) : (
            highlights.slice(0, 2).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="mt-auto flex items-center justify-between pt-6">
        <div className="flex gap-3 text-sm text-amber-200">
          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition hover:text-amber-100 hover:underline"
            >
              Demo
            </a>
          ) : (
            <span className="text-slate-500">Demo 없음</span>
          )}
          {project.links?.video ? (
            <a
              href={project.links.video}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition hover:text-amber-100 hover:underline"
            >
              Video
            </a>
          ) : (
            <span className="text-slate-500">Video 준비중</span>
          )}
          {project.links?.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition hover:text-amber-100 hover:underline"
            >
              Repo
            </a>
          ) : (
            <span className="text-slate-500">Repo 없음</span>
          )}
        </div>
        <Link
          to={detailLink}
          className="rounded-full border border-amber-300/60 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-200/20"
        >
          View Entry
        </Link>
      </div>
    </article>
  )
}

PokedexCard.propTypes = {
}

export default PokedexCard
