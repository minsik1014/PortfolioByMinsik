# 🔴 Pokédex Portfolio (심민식의 프로젝트 도감)

포켓몬 도감(Pokédex)을 모티브로 제작된 **프런트엔드 개발자 심민식**의 인터랙티브 포트폴리오 사이트입니다.  
수집한 포켓몬을 확인하듯, 그동안 진행해온 프로젝트들을 '엔트리' 형태로 탐색할 수 있습니다.

## 🔗 배포 링크
**[https://portfolio-by-minsik.vercel.app](https://portfolio-by-minsik.vercel.app)**

---

## 🛠 주요 기능 및 사용법

### 1. 프로젝트 도감 (Pokédex)
*   **탐색:** 모든 프로젝트가 도감 엔트리 형태로 나열됩니다.
*   **필터링:** Frontend, Backend, Fullstack 등 기술 분류별로 프로젝트를 필터링하여 볼 수 있습니다.
*   **상세 보기:** 개별 카드를 클릭하면 프로젝트의 상세 설명, 하이라이트, 기술 스택, 그리고 **실행 영상**을 확인할 수 있습니다.

### 2. 트레이너 카드 (About Me)
*   **종합 능력치 (Battle Stats):** 개발 역량(Frontend, UI/UX, Collaboration 등)을 RPG 게임의 스탯처럼 한눈에 시각화하여 보여줍니다.
*   **경험 및 활동:** 수상 경력, 대외 활동, 학생회 활동 등을 타임라인 순으로 확인할 수 있으며, 클릭 시 관련 증명서나 상세 정보를 볼 수 있습니다.

### 3. 기술 스택 (Stacks)
*   **상세 역량:** 사용 가능한 언어와 프레임워크를 분류별로 정리하여 제공합니다. 단순 나열을 넘어 구체적으로 어떤 구현이 가능한지 상세 역량을 기술하고 있습니다.

---

## 💻 로컬 실행 방법

이 프로젝트는 **React + Vite** 환경에서 개발되었습니다. 로컬에서 실행하려면 아래 과정을 따라주세요.

### 환경 요구 사항
*   [Node.js](https://nodejs.org/) (v18 이상 권장)
*   npm 또는 yarn

### 설치 및 실행
1.  **저장소 클론**
    ```bash
    git clone https://github.com/minsik1014/pokedexPortfolio.git
    cd pokedexPortfolio
    ```

2.  **패키지 설치**
    ```bash
    npm install
    ```

3.  **로컬 개발 서버 실행**
    ```bash
    npm run dev
    ```
    이후 터미널에 표시된 `http://localhost:5173` 주소로 접속합니다.

---

## 🧰 기술 스택
*   **Core:** React 18, Vite
*   **Styling:** TailwindCSS
*   **Routing:** React Router DOM
*   **Context:** ThemeContext (다크모드 기본 지원)
*   **Deployment:** Vercel

---
© 2026 [심민식](https://github.com/minsik1014). Powered by Pokédex Theme.
