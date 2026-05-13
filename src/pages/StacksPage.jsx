import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const stacksData = [
  {
    category: 'Language',
    items: ['Java', 'JavaScript/TypeScript', 'Kotlin', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'TailwindCSS', 'React Router'],
  },
  {
    category: 'Backend',
    items: ['Java Servlet/JSP', 'MVC 패턴', 'JDBC', 'Spring(학습 중)'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'ERD 설계', '정규화', '기본 SQL 튜닝'],
  },
  {
    category: 'DevOps / Tools',
    items: [
      'Git & GitHub(브랜치 전략·reset/revert)',
      'Maven',
      'Node.js / npm',
      'Streamlit',
      'VSCode / IntelliJ / Eclipse / Android Studio',
    ],
  },
  {
    category: 'Etc.',
    items: ['Figma/UI 설계', 'Notion 문서화/정리'],
  },
]

const StacksPage = () => {
  const navigate = useNavigate()
  const commonCardStyle = "rounded-3xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-b from-emerald-500/5 to-slate-50 dark:from-emerald-500/10 dark:to-slate-900/80 p-6 shadow-lg shadow-emerald-500/5 dark:shadow-emerald-500/10 backdrop-blur transition-all"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="space-y-6">
      <header className="space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 transition hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          ← 뒤로 가기
        </button>
        <div className="space-y-1 ml-1">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 font-bold transition-colors">
            Stacks
          </p>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">
            사용해본 기술 스택
          </h1>
        </div>
      </header>

      {/* Table Section */}
      <div className="overflow-hidden rounded-3xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-br from-slate-50 to-white dark:from-white/5 dark:to-slate-900/90 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors">
        <table className="min-w-full divide-y divide-slate-900/5 dark:divide-white/5 transition-colors">
          <thead className="bg-slate-50 dark:bg-white/5 transition-colors">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                분류
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                기술
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900/5 dark:divide-white/5">
            {stacksData.map((row) => (
              <tr key={row.category} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">
                  {row.category}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <span key={item} className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-900/5 dark:border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 mt-8">
        <div className={commonCardStyle}>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">백엔드 & 데이터베이스</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300 transition-colors list-disc pl-5">
            <li>Java 기반 백엔드 개발을 할 수 있습니다.</li>
            <li>Servlet/JSP, JSTL, 필터, 세션/쿠키를 활용해 인증/인가, 마이페이지, 관리자 페이지를 구현했습니다.</li>
            <li>JDBC를 통해 MySQL과 연동하여 회원, 활동, 경로, 통계 등의 데이터를 CRUD하는 기능을 만들었습니다.</li>
            <li>기본적인 ERD 설계 원리와 정규화 개념을 이해하고 있으며, 실제 테이블을 설계하고 사용했습니다.</li>
          </ul>
        </div>

        <div className={commonCardStyle}>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">프론트엔드 & UI/UX</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300 transition-colors list-disc pl-5">
            <li>React 기반 SPA 프론트엔드를 개발할 수 있습니다.</li>
            <li>React + Vite + React Router를 활용해 페이지 라우팅, 상태 관리, 폼 처리, 리스트 렌더링 등을 구현했습니다.</li>
            <li>TailwindCSS를 사용해 카드형 UI, 대시보드형 레이아웃 등을 구현해 본 경험이 있습니다.</li>
            <li>Figma로 간단한 와이어프레임과 화면 설계를 해 본 경험이 있으며, 이를 바탕으로 실제 페이지를 구현해봤습니다.</li>
            <li>사용성(피드백/로딩/에러)과 반응형 레이아웃을 고려한 UI 구성에 관심이 많습니다.</li>
          </ul>
        </div>

        <div className={commonCardStyle}>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">개발 도구 & 협업</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300 transition-colors list-disc pl-5">
            <li>Git & GitHub를 활용한 PR 기반 협업 흐름에 익숙합니다.</li>
            <li>브랜치 전략, reset/revert, stash 등 Git 기능을 능숙하게 다룹니다.</li>
            <li>Node.js, npm, Maven 등 패키지 및 의존성 관리 도구를 활용해 프로젝트를 구성할 수 있습니다.</li>
            <li>Notion을 활용해 프로젝트 개요, 요구사항, 회의록을 체계적으로 정리하고 공유합니다.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StacksPage
