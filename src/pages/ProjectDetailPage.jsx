import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Badge from '../components/common/Badge'
import StatBar from '../components/common/StatBar'
import { projects } from '../data/projects'

const ProjectDetailPage = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="space-y-4">
        <p className="text-xl font-bold text-slate-900 dark:text-white transition-colors">엔트리를 찾을 수 없습니다.</p>
        <Link
          to="/pokedex"
          className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/10 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:border-emerald-500/60 transition-colors"
        >
          도감으로 돌아가기
        </Link>
      </div>
    )
  }

  const commonCardStyle = "space-y-4 rounded-3xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-b from-emerald-500/5 to-slate-50 dark:from-emerald-500/10 dark:to-slate-900/80 p-6 shadow-lg shadow-emerald-500/5 dark:shadow-none backdrop-blur transition-all"

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 font-bold transition-colors">
            Entry #{project.id.toString().padStart(3, '0')}
          </p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white transition-colors">
            {project.name || '프로젝트 이름'}
          </h1>
          <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 transition-colors">
            {project.period || '기간'} · {project.role || '역할'}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {(project.types ?? []).map((type) => (
              <Badge key={type} label={type} variant={type} />
            ))}
            {(project.stacks ?? []).map((stack) => (
              <Badge key={stack} label={stack} />
            ))}
          </div>
        </div>
        <Link
          to="/pokedex"
          className="rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-sm font-bold text-slate-700 dark:text-white transition hover:border-emerald-500/60 hover:text-emerald-600 shadow-sm"
        >
          도감으로 돌아가기
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className={commonCardStyle}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Description</h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-200 transition-colors">
              {project.description || '상세 설명을 준비 중입니다.'}
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold transition-colors">
              {project.links.demo ? (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 underline-offset-4 hover:underline">Demo</a>
              ) : (
                <span className="text-slate-400 dark:text-slate-500">Demo 준비중</span>
              )}
              {project.links.repo ? (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 underline-offset-4 hover:underline">Repo</a>
              ) : (
                <span className="text-slate-400 dark:text-slate-500">Repo 준비중</span>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className={commonCardStyle}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Highlights</h2>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200 transition-colors">
              {(project.highlights ?? []).length === 0 ? (
                <li className="text-slate-400 dark:text-slate-500">주요 특징을 정리 중입니다.</li>
              ) : (
                project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 transition-colors" />
                    <span>{item}</span>
                  </li>
                ))
              )}
            </ul>
            <div className="rounded-2xl bg-white/60 dark:bg-black/20 p-4 text-sm text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-white/5 transition-colors">
              <p className="font-bold text-slate-900 dark:text-white transition-colors">맡은 역할</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300 transition-colors leading-relaxed">
                {project.responsibilities || '담당 업무 내용을 정리 중입니다.'}
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className={commonCardStyle}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">실행 영상</h2>
            {project.links?.video ? (
              <div className="space-y-6">
                {(Array.isArray(project.links.video) ? project.links.video : [project.links.video]).map((v, idx) => {
                  const videoUrl = typeof v === 'string' ? v : v.url
                  const videoTitle = typeof v === 'string' ? null : v.title
                  return (
                    <div key={idx} className="space-y-2">
                      {videoTitle && <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300 ml-1">{videoTitle}</p>}
                      <div className="overflow-hidden rounded-2xl border border-slate-900/10 dark:border-white/10 bg-black aspect-video transition-colors">
                        {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                          <iframe
                            src={videoUrl.includes('watch?v=') ? videoUrl.replace('watch?v=', 'embed/') : videoUrl.replace('youtu.be/', 'www.youtube.com/embed/')}
                            title={`${project.name} 실행 영상 ${idx + 1}`}
                            className="h-full w-full border-0"
                            allowFullScreen
                          />
                        ) : (
                          <video src={videoUrl} controls className="h-full w-full object-contain" preload="metadata">브라우저에서 비디오를 재생할 수 없습니다.</video>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 dark:border-white/5 bg-white/60 dark:bg-black/20 px-4 py-3 text-sm text-slate-400 dark:text-slate-500 transition-colors">
                실행 영상을 준비 중입니다.
              </div>
            )}
          </div>

          {/* GitHub / Demo 카드 복구 */}
          <div className="grid gap-4 rounded-3xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-b from-emerald-500/5 to-slate-50 dark:from-emerald-500/10 dark:to-slate-900/80 p-6 shadow-lg shadow-emerald-500/5 dark:shadow-none transition-colors">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">GitHub / Demo</h2>
            <div className="grid gap-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
              <div className="flex items-center justify-between rounded-2xl border border-slate-900/5 dark:border-white/10 bg-white/60 dark:bg-black/20 px-4 py-3 transition-colors">
                <span>Demo</span>
                {project.links?.demo ? (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold underline-offset-4 hover:underline">열기</a>
                ) : (
                  <span className="text-slate-400 dark:text-slate-500 text-xs">준비중</span>
                )}
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-900/5 dark:border-white/10 bg-white/60 dark:bg-black/20 px-4 py-3 transition-colors">
                <span>Repository</span>
                {project.links?.repo ? (
                  <a href={project.links.repo} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold underline-offset-4 hover:underline">열기</a>
                ) : (
                  <span className="text-slate-400 dark:text-slate-500 text-xs">준비중</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-4 rounded-3xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-b from-emerald-500/10 to-slate-50 dark:from-emerald-500/10 dark:to-slate-900/80 p-6 shadow-lg shadow-emerald-500/5 dark:shadow-none backdrop-blur transition-all">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Stats</h2>
          <div className="mt-4 grid gap-3">
            <StatBar label="Frontend" value={project.stats?.frontend ?? 0} />
            <StatBar label="Backend" value={project.stats?.backend ?? 0} />
            <StatBar label="CS" value={project.stats?.cs ?? 0} />
            <StatBar label="UX" value={project.stats?.ux ?? 0} />
          </div>
          <div className="mt-6">
            <p className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Tech Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(project.tech ?? []).length === 0 ? (
                <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">기술 스택 정보를 정리 중입니다.</span>
              ) : (
                project.tech.map((item) => <Badge key={item} label={item} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage
