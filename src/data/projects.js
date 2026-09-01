export const projectTypes = [
  'frontend',
  'backend',
  'fullstack',
  'mobile',
  'ml',
  'tooling',
]

export const projects = [
  {
    id: 1,
    slug: 'playproof',
    name: 'PlayProof (게임 팀워크 관리 플랫폼)',
    summary:
      '단순 매칭을 넘어 지속 가능한 게임 팀워크를 관리하는 신뢰 기반 게이밍 커뮤니티 플랫폼',
    types: ['frontend'],
    stacks: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'TailwindCSS'],
    status: 'completed',
    stats: { frontend: 88, backend: 45, cs: 75, ux: 82 },
    period: '2025.09 - 2025.11 (완료)',
    role: '프론트엔드 팀장 · 전체 구조 설계 및 주요 기능 구현',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'Zustand',
      'TailwindCSS 4.0',
      'Axios',
      'React Router DOM',
      'React Day Picker',
    ],
    highlights: [
      'UMC 9th 데모데이 우수상 수상 (73팀 중 선정)',
      'Feature-based 아키텍처 도입으로 대규모 기능의 유지보수성 및 확장성 확보',
      '파티 찾기, 아지트(실시간 채팅/스케줄), 커뮤니티, 상점 등 핵심 도메인 단독/주도 구현',
      'TanStack Query와 Zustand를 활용해 서버 상태와 클라이언트 상태를 명확히 분리',
      '게임별 동적 UI 로직 및 사용자 권한 기반의 조건부 렌더링/인터랙션 설계',
    ],
    responsibilities:
      '프론트엔드 팀장으로서 전체 아키텍처 설계, 프로젝트 초기 환경 구성, 배포 파이프라인 구축을 담당했습니다. 또한 홈, 매칭 시스템, 팀 아지트, 커뮤니티, 상점 등 서비스의 핵심이 되는 대다수의 기능을 직접 구현하고 협업을 리드했습니다.',
    description:
      'PlayProof는 일회성 매칭의 한계를 넘어 게이머들이 지속적으로 신뢰하며 활동할 수 있는 환경을 제공하는 플랫폼입니다. 팀 전용 공간인 "아지트"를 통해 실시간 소통과 일정 관리를 지원하며, 매너 점수와 전적 연동으로 신뢰도를 높였습니다. 팀장으로서 복잡한 사용자 흐름을 Seamless하게 연결하고, 고도화된 상태 관리와 인터랙션 로직을 통해 팀워크 관리의 효율성을 극대화했습니다.',
    links: {
      demo: 'https://playproof-frontend.vercel.app/',
      repo: 'https://github.com/Playproof-Umc/Playproof-Frontend',
      video: 'https://www.youtube.com/watch?v=ZmZQbqu7PIU',
    },
  },
  {
    id: 2,
    slug: 'pebble',
    name: 'Pebble (계층형 여정 관리 투두리스트)',
    summary:
      'Category → Milestone → Task의 3단계 구조로 목표의 맥락과 핵심 마감을 함께 관리하는 일정 서비스',
    types: ['frontend'],
    stacks: ['React', 'TypeScript', 'Zustand', 'TailwindCSS', 'Axios'],
    status: 'completed',
    stats: { frontend: 90, backend: 35, cs: 80, ux: 88 },
    period: '2026.06 - 2026.08 (완료)',
    role: '프런트엔드 팀장 · 초기 구조 설계 · 홈·메인 캘린더 구현',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Zustand',
      'TailwindCSS',
      'Axios',
      'React Router DOM',
      'Vitest',
      'GitHub Actions',
      'react-easy-crop',
    ],
    highlights: [
      'UMC 10th Demo Day 프로젝트 프런트엔드 팀장으로 개발 및 협업 리드',
      '기능 중심 아키텍처와 도메인별 API 계층을 설계해 유지보수성과 확장성 확보',
      '내·친구 캘린더 전환 홈과 Category·Milestone·Task 기반 메인 캘린더 구현',
      '디자인 토큰 기반 반응형 UI와 공용 이미지 크롭 흐름 구축',
      '타입 검사·린트·테스트·빌드를 수행하는 GitHub Actions 품질 검증 및 Vercel 배포 흐름 구축',
    ],
    responsibilities:
      '프런트엔드 팀장으로서 저장소 초기 설정과 구조 설계를 맡고, 홈 및 메인 캘린더의 화면·상태·API 흐름을 구현했습니다. 이후 기능 중심 구조로 리팩터링하고 반응형 레이아웃, 핵심 로직 테스트, CI/CD 품질 검증을 정비하며 팀의 개발 기준과 협업 흐름을 이끌었습니다.',
    description:
      'Pebble은 복잡한 할 일을 단순히 나열하는 대신 Category → Milestone → Task의 계층으로 구조화해, 지금 하는 일이 어떤 상위 목표를 위한 과정인지 한눈에 보여주는 일정 관리 서비스입니다. 개인 일정 관리를 중심으로 필요한 카테고리를 친구와 공유하고, 활동 기록과 월말 리포트로 목표 달성 과정을 돌아볼 수 있도록 설계했습니다.',
    links: {
      demo: 'https://pebble-frontend-six.vercel.app/',
      repo: 'https://github.com/umc-pebble/Pebble-Frontend',
      video: 'https://www.youtube.com/watch?v=9-TA3egFrHE',
    },
  },
  {
    id: 3,
    slug: 'gusring',
    name: 'Gusring (다국어 민원행정 서비스)',
    summary:
      '금천글로벌빌리지센터와 협업해 외국인 거주자에게 다국어 민원행정 서식을 제공하고 실제 현장에서 운영 중인 서비스',
    types: ['frontend'],
    stacks: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
    status: '진행 중',
    stats: { frontend: 88, backend: 12, cs: 50, ux: 85 },
    period: '2026.03 - 진행 중',
    role: '프런트엔드 배포 및 최적화 · 다국어 서식 분류',
    tech: [
      'React',
      'Vite',
      'TailwindCSS',
      'Vercel',
      'Performance Optimization',
    ],
    highlights: [
      '2026 구로구 RISE 리빙랩 사업 최우수상 수상',
      '금천글로벌빌리지센터와 협업해 실제 현장에서 서비스를 운영하며 고도화 진행',
      'Vercel을 통한 프런트엔드 배포 환경 구축 및 운영',
      '다양한 언어로 구성된 민원 서식을 체계적으로 분류하고 관리하는 로직 설계',
      'Lighthouse 기반 성능 분석을 통한 프런트엔드 로딩 속도 최적화 기여',
    ],
    responsibilities:
      '금천글로벌빌리지센터와 협업하는 프로젝트에서 Vercel을 이용한 서비스 배포와 성능 최적화를 담당했으며, 여러 언어로 구성된 민원 서식을 효율적으로 분류하고 관리하는 구조를 구현했습니다. 현재 실제 현장 사용 과정에서 수집되는 피드백을 반영해 서비스를 지속적으로 고도화하고 있습니다.',
    description:
      '구스링(Gusring)은 한국 내 외국인 거주자들이 행정 서식을 쉽게 작성할 수 있도록 돕는 서비스입니다. 2026 구로구 RISE 리빙랩 사업에서 최우수상을 수상했으며, 수상에 그치지 않고 금천글로벌빌리지센터와 협업해 실제 현장에 적용·운영하고 있습니다. 사용자 피드백을 바탕으로 서비스를 지속적으로 고도화하면서 안정적인 배포, 빠른 응답 속도와 다국어 서식 분류 체계 개선에 집중하고 있습니다.',
    links: {
      demo: 'https://gusring-web.vercel.app/',
      repo: 'https://github.com/gusring/gusring-web',
      video: '',
    },
  },
  {
    id: 4,
    slug: 'glife-safety-dashboard',
    name: 'GLife (산업안전교육 플랫폼)',
    summary:
      '산업 안전 교육 일정·수강 현황·직원 정보를 한눈에 관리하고 더미 데이터로 전체 플로우를 검증하는 대시보드',
    types: ['frontend'],
    stacks: ['React', 'Vite', 'React Router', 'Tailwind', 'Mock API'],
    status: 'completed',
    stats: { frontend: 68, backend: 40, cs: 55, ux: 62 },
    period: '2025.08 - 2025.10 (완료)',
    role: '프론트엔드 개발 · 대시보드 UI/기능 구현',
    tech: [
      'React',
      'Vite',
      'React Router',
      'TailwindCSS',
      'JWT Auth Flow',
      'Mock API',
      'Env Flags',
    ],
    highlights: [
      '로그인/JWT/refresh 플로우와 보호 라우트 설계(VITE_USE_LOCAL_AUTH 플래그)',
      '대시보드 홈: 과정 카드·수강 현황·이수율·AI 평가 상태 조회',
      '교육 일정 관리(연도 필터, 일정 추가/모달), 수강 현황/상세 모달',
      '수강자 일괄 등록, 직원 엑셀 업로드(헤더 검증/미리보기)',
      'Mock API + VITE_USE_DUMMY_DATA로 백엔드 없이 전체 플로우 테스트',
    ],
    responsibilities:
      '프런트 구조/라우팅, JWT 인증 흐름, Mock API 기반 데이터 플로우, 대시보드/일정/수강/업로드 화면 구현 및 상태 관리.',
    description:
      '산업 안전 교육 과정/일정/수강 현황과 직원 정보를 관리하는 관리자 대시보드입니다. JWT 인증과 보호 라우트를 설계하고, VITE 플래그와 Mock API로 실 서버 없이도 로그인부터 일정 등록, 수강 현황 조회, 엑셀 업로드까지 전체 플로우를 검증할 수 있게 구성했습니다.',
    links: {
      demo: '',
      repo: 'https://github.com/minsik1014/GLife_EXPO_React',
      video: '/playEx/GLife.mov',
    },
  },
  {
    id: 5,
    slug: 'child-of-weather',
    name: 'ChildOfWeather',
    summary:
      '개인 맞춤형 날씨 기반 활동/경로 관리 웹 서비스. 실제 동작하는 화면과 백엔드 로직 구현.',
    types: ['fullstack', 'frontend', 'backend'],
    stacks: ['Java', 'Servlet/JSP', 'JDBC', 'MySQL', 'Tailwind'],
    status: 'completed',
    stats: { frontend: 60, backend: 75, cs: 60, ux: 55 },
    period: '2025.10 - 2025.12 (완료)',
    role: '기획 · 프런트 · 백엔드(서블릿/JSP)',
    tech: [
      'Java',
      'Servlet/JSP',
      'JSTL',
      'JDBC',
      'MySQL',
      'Maven',
      'Tailwind (CDN)',
      'Tomcat',
      'Naver Map',
      'Naver Search API',
    ],
    highlights: [
      '로그인/회원가입/세션 + 마이페이지/관리자 페이지 엔드 투 엔드 구현',
      '기상청 날씨 API + 위치 기반 실시간 날씨 조회',
      '활동 카드 CRUD(빨래, 조깅 등)와 경로 등록/관리 설계',
      'MVC 패턴(Servlet/JSP/JSTL) + JDBC/MySQL 기반 서버 렌더링',
    ],
    responsibilities:
      '로그인/세션, 마이페이지, 활동 CRUD, 경로 관리, 관리자 페이지를 Servlet/JSP + JDBC로 구현. 화면/기능이 실제 동작하도록 서버 렌더링과 DB 흐름을 연결.',
    description:
      '사용자의 날씨·위치 정보를 기반으로 활동과 경로를 관리하는 웹 서비스입니다. 로그인/세션, 마이페이지, 활동/경로 관리, 관리자 페이지까지 MVC 패턴으로 구현했고, 기상청 날씨 API로 실시간 날씨를 조회하며 Naver Map/검색 API를 활용해 위치 기반 경험을 확장하고 있습니다.',
    links: {
      demo: '',
      repo: 'https://github.com/JeongGyul/child-of-weather',
      video: '/playEx/childOfWeather.mov',
    },
  },
  {
    id: 6,
    slug: 'heyum',
    name: '헤윰 (Heyum) - AI 프롬프트 번역',
    summary:
      'AI 프롬프트의 의도를 정확하게 반영하는 번역 서비스 및 브라우저 확장 프로그램',
    types: ['frontend', 'tooling'],
    stacks: ['React', 'Vite', 'TailwindCSS', 'Chrome Extension API'],
    status: 'paused',
    stats: { frontend: 85, backend: 8, cs: 45, ux: 90 },
    period: '2026.05 - 2026.05 (중단)',
    role: '랜딩 페이지 구성 및 브라우저 확장 프로그램 개발',
    tech: [
      'React',
      'Vite',
      'TailwindCSS',
      'Chrome Extension API',
      'JavaScript/TypeScript',
    ],
    highlights: [
      'AI 프롬프트 번역에 최적화된 랜딩 페이지 기획 및 개발',
      '브라우저 어디서나 프롬프트를 번역할 수 있는 크롬 확장 프로그램 구현',
      '사용자 친화적인 UI/UX 설계를 통해 번역 접근성 향상',
    ],
    responsibilities:
      '서비스의 첫인상을 결정하는 랜딩 페이지를 직접 구성하고 개발했으며, 실질적인 도구로서 사용될 브라우저 확장 프로그램을 Chrome Extension API를 활용해 구현했습니다.',
    description:
      '헤윰(Heyum)은 AI와 소통할 때 가장 중요한 "프롬프트"의 의미가 번역 과정에서 왜곡되지 않도록 돕는 서비스입니다. 웹 페이지 형태의 랜딩 서비스와 더불어, 사용자가 ChatGPT나 Claude 등을 사용할 때 즉시 번역 기능을 활용할 수 있도록 브라우저 확장 프로그램을 함께 개발하여 편의성을 극대화했습니다.',
    links: {
      demo: '',
      repo: 'https://github.com/minsik1014/Heyum',
      video: [
        { title: 'Web', url: '/playEx/heyum_web.mov' },
        { title: '프로그램', url: '/playEx/heyum_program.mov' },
      ],
    },
  },
  {
    id: 7,
    slug: 'sign-language-translator',
    name: '수어(수화) 번역 웹 앱',
    summary: '수어 번역 UI 프로토타입 (기획/프론트 단계, 중단)',
    types: ['frontend'],
    stacks: ['React', 'CSS', 'TTS'],
    status: 'paused',
    stats: { frontend: 55, backend: 20, cs: 40, ux: 60 },
    period: '2025.07 - 2025.08 (중단)',
    role: '프런트엔드 설계/구현',
    tech: ['React', 'React Router', 'JavaScript', 'TTS API', 'CSS'],
    highlights: [
      '번역 문장 리스트와 행 단위 제어(UI) 설계',
      '문장별 언어 선택, 복사, TTS(음성 출력) 제어 UI',
      '기기 연결(장갑) 플로우: 기기 선택 → 요청 → 연결/해제 UI 설계',
    ],
    responsibilities:
      'React 라우팅/구조 설계, 번역 리스트/TTS/복사 UI 설계, 기기 연결 플로우 설계. 중단 전까지 프론트 전반 단독 담당.',
    description:
      '모션 장갑에서 들어오는 수화를 문자로 번역해 여러 언어로 변환·복사·음성 출력하는 웹앱 프로토타입입니다. 실시간 통신 없이 번역 리스트와 행 단위 제어 UI, 기기 연결/해제 플로우를 설계했으나 Expo 주제 변경으로 기획·프론트 프로토타입 단계에서 중단되었습니다.',
    links: {
      demo: '',
      repo: 'https://github.com/minsik1014/SignGlove_EXPO_React',
      video: '/playEx/signGlove.mov',
    },
  },
  {
    id: 8,
    slug: 'livecoder',
    name: 'LiveCoder (실시간 코딩 협업 플랫폼)',
    summary:
      '실시간 코드 에디터·문제 패널·채팅을 한 화면에 묶는 페어프로그래밍/스터디용 협업 플랫폼 기획',
    types: ['frontend'],
    stacks: ['React', 'Tailwind', 'WebSocket(기획)', 'Node(기획)'],
    status: 'planning',
    stats: { frontend: 55, backend: 35, cs: 45, ux: 65 },
    period: '기획 단계',
    role: '서비스 기획 · UX 플로우 · 기술 구조 초안',
    tech: [
      'React',
      'Vite',
      'React Router',
      'TailwindCSS',
      'WebSocket/Socket.IO(기획)',
      'OT/CRDT 검토',
      'Node.js 서버(기획)',
    ],
    highlights: [
      '방 생성/입장, Host/Participant 권한, 타이머/세션 관리 기획',
      '실시간 코드 에디터 + 문제 패널 + 채팅/보이스 모듈 레이아웃 구상',
      '세션 기록(코드/메모) 저장과 회고용 자료화 플로우 설계',
    ],
    responsibilities:
      '컨셉 정의, 사용자 시나리오 작성, 대시보드/방 UI 와이어프레임, 실시간 동기화·서버 구조 초안 수립.',
    description:
      '알고리즘 스터디·코테 연습에서 문제/코드/커뮤니케이션을 한 화면에 다루기 위한 실시간 협업 플랫폼을 기획했습니다. 닉네임+방코드로 입장, Host/Participant 역할, 문제 패널과 실시간 코드 에디터, 채팅/보이스(확장), 타이머/세션 요약 등 MVP 범위를 정의하고 WebSocket+React 기반 기술 구조를 설계한 상태입니다.',
    links: {
      demo: '',
      repo: 'https://github.com/simminsik/Ideal',
      video: '/playEx/liveCoder.mov',
    },
  },
  {
    id: 9,
    slug: 'pokemon-data-dashboard',
    name: '포켓몬 데이터 분석 대시보드 (Streamlit)',
    summary:
      '포켓몬 공개 데이터셋을 타입·세대·전설 여부로 필터링/시각화한 스트림릿 대시보드',
    types: ['tooling', 'ml'],
    stacks: ['Python', 'Streamlit', 'pandas', 'numpy', 'matplotlib/seaborn'],
    status: 'completed',
    stats: { frontend: 45, backend: 40, cs: 50, ux: 55 },
    period: '2025.09 - 2025.10 (완료)',
    role: '데이터 수집·전처리 · 시각화 설계 · Streamlit UI 단독',
    tech: ['Python', 'Streamlit', 'pandas', 'numpy', 'matplotlib', 'seaborn'],
    highlights: [
      '타입/세대/전설 여부 필터 + 능력치 범위 슬라이더 조합',
      '타입별 평균 능력치, 능력치 관계 산점도, 세대별 전설 비율 시각화',
      '요약 카드(포켓몬 수, 평균 Total, 전설 비율)와 상세 정보 화면 구성',
    ],
    responsibilities:
      'EDA/전처리, 파생 컬럼 계산, 필터/그래프/요약 지표 UI 설계, 그래프 텍스트 영문 처리로 한글 깨짐 회피.',
    description:
      '공개된 포켓몬 데이터셋을 기반으로 타입, 세대, 전설 여부에 따라 능력치 분포를 탐색하는 Streamlit 대시보드입니다. 필터 + 그래프 + 요약 카드 조합으로 인사이트를 드러내며, 데이터 전처리부터 인터랙티브 UI까지 end-to-end로 구현했습니다.',
    links: {
      demo: 'https://bigdatapokemon.streamlit.app/',
      repo: 'https://github.com/minsik1014/bigData_Pokemon',
      video: '/playEx/streamlit.mov',
    },
  },
  {
    id: 10,
    slug: 'lifecontrol',
    name: 'LifeControl',
    summary:
      '넷플릭스 스타일 카드 UI로 책/영화 리뷰, 운동 기록, 캘린더, 일기를 관리하는 라이프 매니지먼트 SPA',
    types: ['frontend'],
    stacks: ['React', 'React Router', 'TailwindCSS'],
    status: 'completed',
    stats: { frontend: 65, backend: 20, cs: 45, ux: 70 },
    period: '개인 · 프론트엔드 SPA',
    role: '기획 · 디자인 · 프런트엔드 전체 구현',
    tech: ['React', 'React Router', 'TailwindCSS', 'Git', 'VSCode'],
    highlights: [
      '넷플릭스 메인 허브처럼 카드/그리드 UI로 기능 페이지 라우팅',
      '책/영화 리뷰 CRUD와 공통 ReviewCard/Form 컴포넌트 설계',
      '운동 기록, 캘린더, 일기 페이지를 단일 SPA로 구성',
    ],
    responsibilities:
      '컨셉 기획, UX 플로우 설계, 라우팅/컴포넌트 분리, Tailwind로 넷플릭스 느낌 카드/그리드 UI 구현.',
    description:
      '넷플릭스 계정 선택 화면처럼 카드형 허브에서 책/영화 리뷰, 운동 기록, 캘린더, 일기 페이지로 이동하는 React SPA입니다. 리뷰 공통 컴포넌트와 카드 인터랙션을 설계해 프론트 상태 기반 CRUD를 구현했습니다.',
    links: {
      demo: '',
      repo: 'https://github.com/minsik1014/LifeControlApp_Study_React',
      video: '/playEx/lifeControl.mov',
    },
  },
  {
    id: 11,
    slug: 'namtang-mypage-demo',
    name: 'NAMTANG 마이페이지 데모',
    summary:
      '쇼핑몰 NAMTANG의 마이페이지 → 후기 작성 → 배송 조회 흐름을 정적 HTML/CSS/JS로 구현한 소규모 프런트엔드 데모',
    types: ['frontend'],
    stacks: ['HTML', 'CSS', 'JavaScript'],
    status: 'completed',
    stats: { frontend: 55, backend: 10, cs: 20, ux: 60 },
    period: '작성 예정',
    role: '개인 · 프런트엔드 100%',
    tech: ['HTML', 'CSS', 'JavaScript', 'Static pages'],
    highlights: [
      '마이페이지 카드/사이드바/네비 구성과 쿠폰·적립금·주문·후기·최근 본 상품 섹션',
      '후기 작성 페이지(상품명, 별점 라디오, 후기 폼)와 마이페이지 복귀 링크',
      '배송 조회 페이지: 4단계 타임라인(주문 접수 → 준비중 → 배송 중 → 완료) 시각화',
      '정적 링크로 myPage → review-write → tracking → myPage 흐름 구현',
    ],
    responsibilities:
      '마이페이지/후기/배송 페이지 기획 및 UI 마크업, 카드/타임라인 레이아웃 설계, 페이지 간 흐름 구성.',
    description:
      'NAMTANG 쇼핑몰의 마이페이지 플로우를 정적 HTML/CSS/JS로 만든 데모입니다. 서버 연동 없이 myPage.html → review-write.html → tracking.html 순서의 사용자 여정을 UI 중심으로 설계했으며, 쿠폰·적립금·주문/배송·후기·최근 본 상품을 한 화면에 배치해 실제 쇼핑몰 마이페이지 구조를 재현했습니다. 추후 React + Router로 리팩토링하기 좋은 밑그림 역할을 합니다.',
    links: {
      demo: '/playEx/myPage.html',
      repo: 'https://github.com/minsik1014/htmlTeamProject_Study_html',
      video: '/playEx/Namtang.mov',
    },
  },
]
