import { Link } from 'react-router-dom'
import trainerPhoto from '../../playEx/IMG_1379.JPG'
import StatBar from '../components/common/StatBar'

const experiences = [
  {
    id: 'ai-rookie-2026',
    title: '2026 인공지능 루키(AI Rookie) 대회 – 본선 진출',
    period: '2026 - 진행 중',
    role: 'Timiroom 프런트엔드 개발 · AI 기반 연결 문서 동기화 구현',
    detail: '모두의 AI를 위한 전국민 AI 경진대회의 AI ROOKIE 본선에 진출하여, PRD·기능 명세·API 명세·ERD를 연결하고 변경 영향을 AI로 분석·반영하는 문서 기반 협업 플랫폼 Timiroom을 고도화하고 있음.',
  },
  {
    id: 'rise-2026',
    title: '2026 구로구 RISE 리빙랩 사업 – 최우수상 (Gusring)',
    period: '2026 - 진행 중',
    role: '프런트엔드 개발 · 배포 및 최적화 · 금천글로벌빌리지센터 협업 및 현장 적용',
    detail: '금천글로벌빌리지센터와 협업해 다국어 민원행정 서식 서비스 Gusring을 실제 현장에 적용·운영하고 있으며, 최우수상 수상 이후에도 사용자 피드백을 바탕으로 서비스를 지속적으로 고도화하고 있음.',
  },
  {
    id: 'megacity-2026',
    title: '2026 도전!메가시티리그전 – 우수상',
    period: '2026',
    role: '팀 프로젝트 참여 · 서비스 기획 및 구현',
    detail: '지역과 산업의 문제를 해결하는 서비스 아이디어를 구체화하고 구현하여 2026 도전!메가시티리그전에서 우수상 수상.',
  },
  {
    id: 'rise-2025',
    title: '2025 구로구 RISE 리빙랩 사업 – 우수상',
    period: '2025',
    role: '지역 문제 해결 서비스 기획 및 요구사항 정의',
    detail:
      '지역 문제 해결을 위한 디지털 서비스 방향성을 논의하고 기획 초기 단계부터 참여하여 우수상 수상.',
  },
  {
    id: 'scout-startup',
    title: '2025 SCOUT BOOTSTUP 스타트업 경진대회 – 최우수상',
    period: '2025',
    role: '팀 프로젝트 참여 및 서비스 프로토타입 구현 지원',
    detail: '4개 대학 주관 창업경진대회에 참가하여 독창적인 아이디어와 비즈니스 모델의 가능성을 인정받아 최우수상 수상.',
  },
  {
    id: 'umc-demo',
    title: '9th UMC DEMO DAY – 우수상',
    period: '2025',
    role: '팀 playproof 프론트엔드 팀장 · 프로젝트 발표',
    detail: 'UMC 9th 활동 중 팀 playproof의 프론트엔드 팀장으로서 프로젝트를 리드하고, 데모데이에서 기술력과 서비스 완성도를 인정받아 우수상 수상.',
  },
  {
    id: 'kes-2025',
    title: '한국전자전(KES 2025) – 산업 안전교육 플랫폼 출전',
    period: '2025',
    role: '산업 안전교육 대시보드 React/Vite 개발 · 엑셀 업로드/교육 일정/수강자 관리 구현',
    detail:
      '동양미래대학교 전공 동아리 팀으로 산업 안전교육 플랫폼을 기획·구현하고, 관리자용 그래프/대시보드와 엑셀 업로드 흐름을 전시용으로 완성.',
  },
  {
    id: 'ideal-2025',
    title: '전공 동아리 하계 프로젝트 IDEAL – 협업 코딩 플랫폼',
    period: '2025 하계',
    role: '서비스 기획 · 코드 에디터/채팅/세션 구조 설계 · 기술 스택 검토',
    detail:
      '협업 코딩/라이브 코딩 플랫폼의 기능 정의, 화면 흐름, 실시간 통신/에디터 라이브러리 적용 방안을 팀과 함께 설계.',
  },
  {
    id: 'expo-2025',
    title: '동양미래대학교 EXPO 2025 – 우수상',
    period: '2025',
    role: '발표 및 데모 준비 · 기획/화면/기술 정리',
    detail:
      '팀 프로젝트를 문제 정의 → 해결 방식 → 기대 효과 순으로 정리하고, 실제 동작하는 데모와 함께 발표하여 우수상 수상.',
  },
  {
    id: 'g-valley',
    title: '동양미래대학교 G-Valley 작품 참가',
    period: '2025',
    role: '서비스 구조/주요 기능/기술 스택 정리 및 전시 설명',
    detail:
      '교내 프로젝트를 기반으로 전시용 자료를 준비하고, 방문자·평가자에게 서비스 컨셉과 기능을 설명하며 피드백 수집.',
  },
]

const AboutPage = () => {
  const commonCardStyle = "rounded-3xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-b from-emerald-500/5 to-slate-50 dark:from-cyan-500/10 dark:to-slate-900/80 p-6 shadow-lg shadow-emerald-500/5 dark:shadow-cyan-500/10 backdrop-blur transition-all"

  return (
    <section className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Trainer Card */}
        <div className={`${commonCardStyle} lg:col-span-2 space-y-4`}>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-cyan-400 font-bold transition-colors">
            Trainer Card
          </p>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">Elric-심민식</h1>
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 transition-colors">
            다양한 프로젝트를 진행해보며 실무능력을 키우고 있는 프런트엔드 개발자 심민식입니다.
          </p>
          <div className="mx-auto flex w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-2 dark:border-white/10 dark:bg-slate-900/50">
            <img src={trainerPhoto} alt="심민식 프로필 사진" className="w-full rounded-xl object-contain" />
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300 transition-colors">
            <li>동양미래대학교 컴퓨터소프트웨어공학과 3학년 재학중</li>
            <li>2026 컴퓨터소프트웨어공학과 학생회 소통부장</li>
            <li>동양미래대학교 컴퓨터소프트웨어공학과 전공동아리 EL 23기</li>
            <li>동양미래대학교 UMC-9th 파트원</li>
            <li>UMC 9th Demo Day PlayProof 프런트엔드 팀장</li>
            <li>동양미래대학교 UMC-10th 웹 파트장</li>
            <li>UMC 10th Demo Day Pebble 프런트엔드 팀장</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://github.com/minsik1014/minsik1014" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-white transition hover:border-emerald-500/60 dark:hover:border-cyan-400 hover:text-emerald-600 dark:hover:text-cyan-300 shadow-sm">GitHub</a>
            <a href="mailto:ms03zzang@naver.com" className="rounded-full border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-white transition hover:border-emerald-500/60 dark:hover:border-cyan-400 hover:text-emerald-600 dark:hover:text-cyan-300 shadow-sm">Email</a>
            <a href="https://www.instagram.com/sharp.sim_03" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-white transition hover:border-emerald-500/60 dark:hover:border-cyan-400 hover:text-emerald-600 dark:hover:text-cyan-300 shadow-sm">Instagram</a>
          </div>
        </div>

        {/* Battle Stats */}
        <div className={commonCardStyle}>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Battle Stats</h2>
          <div className="mt-4 grid gap-3">
            <StatBar label="Frontend" value={85} />
            <StatBar label="UI/UX" value={82} />
            <StatBar label="Collaboration" value={88} />
            <StatBar label="Architecture" value={75} />
            <StatBar label="Tooling" value={65} />
            <StatBar label="Backend" value={45} />
            <StatBar label="CS" value={58} />
          </div>
          <div className="mt-6 rounded-2xl bg-white/60 dark:bg-black/20 p-3 border border-slate-100 dark:border-cyan-500/10">
            <p className="text-[10px] uppercase tracking-tighter text-slate-500 dark:text-slate-400 leading-tight">
              * 위 스탯은 프로젝트 경험과 자기 객관화를 바탕으로 산정된 수치이며, 협업과 프런트엔드 기술 구현에 특화되어 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* About Me */}
        <div className={`${commonCardStyle} lg:col-span-2 space-y-4`}>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">About Me</h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-200 transition-colors">
            <p>저는 여러 번의 프로젝트 경험을 통해 꾸준함과 성실함으로 성장해온 웹 개발자 지망생입니다. 한국전자전에서 진행된 EXPO 프로젝트에 참여해 실제 전시 환경에서 서비스 기획·구현 과정을 경험했고, 교내 전공 동아리의 하계 프로젝트에서도 팀 단위 협업과 일정 관리, 기능 구현을 끝까지 책임지고 수행해 본 경험이 있습니다.</p>
            <p>개인 프로젝트부터 팀 프로젝트까지 다양한 주제의 서비스를 만들면서, “일단 끝까지 만들어서 돌아가게 한다”는 마음가짐을 기르려고 했습니다. 새로운 기술을 접해도 포기하지 않고 문서와 예제를 파고들며 하나씩 기능을 완성해 나가는 스타일이라, 낯선 스택이나 도메인도 시간을 들여 파고들면 결국 해낼 수 있다는 자신감과 실행력을 가지고 있습니다.</p>
            <p>최근에는 2025 SCOUT BOOTSTUP 스타트업 경진대회 최우수상, 9th UMC DEMO DAY 우수상, 2026 구로구 RISE 리빙랩 사업 최우수상, 2026 도전!메가시티리그전 우수상 등 다양한 대회와 사업에서 성과를 거두며 기획부터 구현까지의 역량을 증명하고 있습니다. 특히 RISE 리빙랩 사업은 수상에 그치지 않고, 현재 금천글로벌빌리지센터와 협업해 Gusring을 실제 현장에 적용·운영하며 사용자 피드백을 바탕으로 서비스를 지속적으로 고도화하고 있습니다. 현재는 모두의 AI를 위한 전국민 AI 경진대회의 AI ROOKIE 본선에 진출해 문서 기반 AI 협업 플랫폼 Timiroom을 개발하고 있습니다. 또한 UMC 9기 Demo Day의 PlayProof와 UMC 10기 Demo Day의 Pebble에서 프런트엔드 팀장을 맡아 팀원들을 이끌고, 구조 설계부터 핵심 기능 구현과 협업까지 주도한 경험이 있습니다. 서비스 기획–설계–구현까지 전체 흐름을 이해하고 참여하는 개발자가 되고 싶습니다. 다양한 프로젝트로 쌓은 경험과 성실함을 바탕으로, 팀에 오래 함께 가도 부담 없는, 믿고 맡길 수 있는 개발자가 되는 것이 목표입니다.</p>
          </div>
        </div>

        {/* Stacks */}
        <div className={commonCardStyle}>
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Stacks</h2>
            <Link to="/stacks" className="text-xs font-semibold text-emerald-600 dark:text-cyan-400 transition hover:text-emerald-700 dark:hover:text-cyan-300 hover:underline">더보기 →</Link>
          </div>
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200 transition-colors">
            <div><p className="font-bold text-slate-900 dark:text-white mb-1">Language</p><p>Java, JavaScript/TypeScript, Kotlin, Python, C</p></div>
            <div><p className="font-bold text-slate-900 dark:text-white mb-1">Frontend</p><p>React(SPA), Vite, TailwindCSS, React Router</p></div>
            <div><p className="font-bold text-slate-900 dark:text-white mb-1">UI / UX</p><p>Figma 설계 기반 구현, 반응형 레이아웃</p></div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Experience */}
        <div className={`${commonCardStyle} lg:col-span-2 space-y-4`}>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Experience / Activity</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <Link key={exp.id} to={`/awards/${exp.id}`} className="group block transform-gpu transition-all duration-300 hover:-translate-y-1">
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/40 p-4 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 transition-all group-hover:bg-white dark:group-hover:bg-slate-800/80 group-hover:shadow-emerald-500/10 dark:group-hover:shadow-cyan-500/20 group-hover:ring-emerald-500/20 dark:group-hover:ring-cyan-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-slate-900 dark:text-white font-bold group-hover:text-emerald-600 dark:group-hover:text-cyan-400">{exp.title}</div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">{exp.role}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">{exp.detail}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
