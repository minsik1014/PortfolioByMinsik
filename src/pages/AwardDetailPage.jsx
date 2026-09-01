import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// 나중에 실제 상장 이미지 경로로 업데이트하세요.
const awardImages = {
  'ai-rookie-2026': '/playEx/ai-rookie-2026.jpg',
  'rise-2026': '/playEx/rise-2026.jpg',
  'megacity-2026': '/playEx/megacity-2026.jpg',
  'scout-startup': '/playEx/scout-startup.jpg',
  'umc-demo': '/playEx/umc-demo.jpg',
  'kes-2025': '/playEx/kes-2025.jpg',
  'ideal-2025': '/playEx/ideal-2025.jpg',
  'expo-2025': '/playEx/expo-2025.jpg',
  'g-valley': '/playEx/g-valley.jpg',
  'rise-2025': '/playEx/rise-2025.jpg',
}

const awardTitles = {
  'ai-rookie-2026': '2026 인공지능 루키(AI Rookie) 대회 – 본선 진출',
  'rise-2026': '2026 구로구 RISE 리빙랩 사업 – 최우수상',
  'megacity-2026': '2026 도전!메가시티리그전 – 우수상',
  'scout-startup': '2025 SCOUT BOOTSTUP 스타트업 경진대회 – 최우수상',
  'umc-demo': '9th UMC DEMO DAY – 우수상',
  'kes-2025': '한국전자전(KES 2025) – 산업 안전교육 플랫폼 출전',
  'ideal-2025': '전공 동아리 하계 프로젝트 IDEAL – 협업 코딩 플랫폼',
  'expo-2025': '동양미래대학교 EXPO 2025 – 우수상',
  'g-valley': '동양미래대학교 G-Valley 작품 참가',
  'rise-2025': '2025 구로구 RISE 리빙랩 사업 – 우수상',
}

const AwardDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const imageSrc = awardImages[id]
  const title = awardTitles[id] || 'Certificate'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 py-10 transition-colors">
      <div className="flex w-full max-w-4xl items-center justify-between px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-200 transition hover:text-amber-500 dark:hover:text-amber-100"
        >
          ← 뒤로 가기
        </button>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl transition-colors">{title}</h1>
        <div className="w-20"></div> {/* Spacer */}
      </div>

      <div className="group relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-2xl shadow-slate-200/50 dark:shadow-none backdrop-blur-sm transition-colors">
        {/* Decorative corner accents */}
        <div className="absolute -left-2 -top-2 h-10 w-10 rounded-br-full border-r border-t border-cyan-500/30 dark:border-cyan-500/50"></div>
        <div className="absolute -right-2 -bottom-2 h-10 w-10 rounded-tl-full border-l border-b border-cyan-500/30 dark:border-cyan-500/50"></div>
        
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900/80 transition-colors">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="hidden h-full w-full flex-col items-center justify-center space-y-4 text-slate-400 dark:text-slate-500 transition-colors">
            <svg
              className="h-20 w-20 opacity-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.587-1.587a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm font-medium">상장 이미지를 준비 중입니다.</p>
          </div>
        </div>
      </div>
      
      <p className="max-w-2xl px-6 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors">
        위 이미지는 해당 수상 및 활동의 공식 증명서입니다. 
        자세한 활동 내용은 이전 페이지의 상세 설명을 참고해 주세요.
      </p>
    </div>
  )
}

export default AwardDetailPage
