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
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 dark:text-amber-200 transition-colors">
          Stacks
        </p>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">
          사용해본 기술 스택
        </h1>
      </header>

      <div className="overflow-hidden rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-lg shadow-slate-200/50 dark:shadow-cyan-500/10 backdrop-blur transition-colors">
        <table className="min-w-full divide-y divide-slate-900/10 dark:divide-white/10 transition-colors">
          <thead className="bg-slate-50 dark:bg-white/5 transition-colors">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white transition-colors">
                분류
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white transition-colors">
                기술
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900/10 dark:divide-white/10 transition-colors">
            {stacksData.map((row) => (
              <tr key={row.category} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-amber-700 dark:text-amber-100 transition-colors">
                  {row.category}
                </td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200 transition-colors">
                  <ul className="list-disc space-y-1 pl-4">
                    {row.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4">
        <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-lg shadow-slate-200/50 dark:shadow-amber-500/10 backdrop-blur transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">웹 / 앱 개발 역량</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <li>주어진 요구사항에 맞게 기능과 UI를 구현할 수 있습니다.</li>
            <li>
              Java Servlet/JSP, React를 사용해 로그인, 마이페이지, 관리자 페이지,
              대시보드, CRUD 기능 등을 실제 프로젝트에서 구현해 본 경험이 있습니다.
            </li>
            <li>
              기획서/요구사항을 읽고 페이지 흐름·화면 구성·기능 단위를 쪼개서 구현
              계획을 세우는 것에 익숙합니다.
            </li>
            <li>
              포트폴리오용 프로젝트뿐 아니라 수업 과제·동아리(UMC) 미션·팀 프로젝트를
              통해 다양한 도메인의 요구사항을 구현해봤습니다.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-lg shadow-slate-200/50 dark:shadow-emerald-500/10 backdrop-blur transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">백엔드 & 데이터베이스</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <li>Java 기반 백엔드 개발을 할 수 있습니다.</li>
            <li>
              Servlet/JSP, JSTL, 필터, 세션/쿠키를 활용해 인증/인가, 마이페이지,
              관리자 페이지를 구현했습니다.
            </li>
            <li>
              JDBC를 통해 MySQL과 연동하여 회원, 활동, 경로, 통계 등의 데이터를 CRUD하는
              기능을 만들었습니다.
            </li>
            <li>
              환경설정 파일 분리, DAO/DTO 설계, 예외 처리 등 실무 기초에 해당하는
              부분들을 직접 다뤄본 경험이 있습니다.
            </li>
            <li>
              기본적인 ERD 설계 원리와 정규화 개념을 이해하고 있으며, 수업 및 프로젝트에서
              실제로 테이블을 설계하고 사용했습니다.
            </li>
            <li>
              JOIN, GROUP BY, 집계 함수 등을 활용해 통계용 쿼리와 조회 기능을
              구현했습니다.
            </li>
            <li>
              인덱스, 쿼리 최적화의 기본 개념을 이해하고 있으며, 단순한 쿼리 튜닝도
              시도해 본 경험이 있습니다.
            </li>
            <li>
              MVC·레이어드 아키텍처 기반으로 Controller / Service / DAO / DTO를 분리해
              구현했고, RESTful API 요청/응답 구조를 문서화해본 경험이 있습니다.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-lg shadow-slate-200/50 dark:shadow-cyan-500/10 backdrop-blur transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">프론트엔드 & UI/UX</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <li>React 기반 SPA 프론트엔드를 개발할 수 있습니다.</li>
            <li>
              React + Vite + React Router를 활용해 페이지 라우팅, 상태 관리, 폼 처리,
              리스트 렌더링 등을 구현했습니다.
            </li>
            <li>
              TailwindCSS를 사용해 넷플릭스 스타일 메인 화면, 카드형 UI, 대시보드형
              레이아웃을 구현해 본 경험이 있습니다.
            </li>
            <li>
              컴포넌트를 기능과 레이아웃 기준으로 분리하여 재사용 가능한 UI 컴포넌트
              구조를 설계할 수 있습니다.
            </li>
            <li>
              버튼 위치, 상태 표시(로딩/빈 상태/에러), 피드백 메시지 등을 포함한
              사용성/UX를 함께 고려합니다.
            </li>
            <li>
              Figma로 간단한 와이어프레임과 화면 설계를 해 본 경험이 있으며, 이를 바탕으로
              실제 페이지를 구현해봤습니다.
            </li>
            <li>
              넷플릭스, 무신사 등 실제 서비스 UI를 참고하여 카드형 리스트, 그리드 레이아웃,
              반응형 레이아웃을 구현해보았습니다.
            </li>
            <li>디자인 시스템과 일관된 UI 구성에 관심이 많습니다.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-lg shadow-slate-200/50 dark:shadow-amber-500/10 backdrop-blur transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">데이터 분석 / 스트림릿</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <li>Python + Pandas를 활용한 데이터 분석 경험이 있습니다.</li>
            <li>
              포켓몬 데이터셋 등을 활용해 전처리, 그룹 분석, 시각화(Matplotlib 등)를
              수행했습니다.
            </li>
            <li>
              Streamlit을 이용해 필터·정렬·차트·요약 통계를 보여주는 대시보드 앱을
              구현해보았습니다.
            </li>
            <li>분석 결과를 인터랙티브한 앱 형태로 공유할 수 있습니다.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-lg shadow-slate-200/50 dark:shadow-emerald-500/10 backdrop-blur transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">개발 도구 & 협업</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <li>Git & GitHub를 활용한 버전 관리에 익숙합니다.</li>
            <li>
              UMC 스터디 및 개인/팀 프로젝트를 GitHub로 관리하며, PR 기반 코드 리뷰
              흐름도 경험했습니다.
            </li>
            <li>브랜치 생성, 병합, reset/revert, stash 등 Git 명령을 능숙하게 다룹니다.</li>
            <li>
              Node.js, npm으로 React/Vite 프로젝트를 구성하고 의존성을 관리할 수 있습니다.
            </li>
            <li>
              Maven 기반 Java 프로젝트에서 의존성 관리, 빌드, 패키징(war)을 수행해
              Tomcat에 배포해본 경험이 있습니다.
            </li>
            <li>여러 프로젝트를 한 레포지토리나 서브 레포로 분리하는 구조 설계 경험이 있습니다.</li>
            <li>
              Notion을 활용해 프로젝트 개요, 요구사항, 진행상황, 회의록을 정리하고
              공유합니다.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-lg shadow-slate-200/50 dark:shadow-cyan-500/10 backdrop-blur transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">학습 태도 & 문제 해결</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <li>
              새로운 기술 스택을 빠르게 학습하고 실제 프로젝트에 적용하는 편입니다.
            </li>
            <li>
              학교 수업, UMC 스터디, 개인 프로젝트를 진행하며 다양한 언어와 프레임워크를
              직접 사용해봤습니다.
            </li>
            <li>공식 문서와 에러 로그를 참고해 환경설정·빌드/배포 문제를 해결합니다.</li>
            <li>
              C, Java, Python 등을 활용해 기본 자료구조·알고리즘 문제를 풀이하며
              시간/공간 복잡도를 고려하려 노력합니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StacksPage
