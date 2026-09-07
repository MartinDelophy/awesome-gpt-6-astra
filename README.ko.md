<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/)

**GPT-6 Astra로 만든 흥미로운 게임을 모았습니다.**

재미있는 아이디어, 직접 해 볼 수 있는 게임, 다음 창작자에게 영감을 주는 개발 이야기.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어**<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[게임 제출](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [기여하기](CONTRIBUTING.md)

</div>

이 페이지는 [영문 README](README.md)의 번역입니다. 최신 변경 사항은 원문에서 확인할 수 있으며, 번역 수정도 환영합니다.

## 여기서 시작하기

현재 **브라우저 게임 6개와 인터랙티브 파티클 아트 샌드박스 1개**를 소개합니다. 부드러운 과일 합치기, 원버튼 비행, 마법 양탄자 전투, 섬의 전력망을 이용한 타워 디펜스, 베이 서킷 카트 레이싱, 펠리컨과 함께하는 해안 자전거 달리기, 그리고 Orbital Garden을 만나 보세요. 작품명을 누르면 데모 또는 실행 안내가 포함된 소스 코드가 열립니다.

마지막 확인: **2026-09-05**. 제작자의 모델 사용 설명, 소스 코드 링크, 데모 접속 가능 여부를 확인했습니다. 모델 사용 여부는 제작자의 공개 설명에 근거하며, 이 목록을 위해 각 게임의 플레이 테스트를 수행한 것은 아닙니다.

- **할 게임을 찾고 있나요?** 아래 장르에서 마음에 드는 작품을 찾아보세요.
- **게임을 만들었나요?** [프로젝트를 제출](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)할 때 플레이 링크 또는 소스 코드, 실제 게임 화면, GPT-6 Astra를 어떻게 활용했는지에 대한 설명을 첨부해 주세요.
- **좋은 프로젝트를 발견했나요?** 다른 사람이 공개한 작품도 원작자를 밝히고 추천할 수 있습니다.

이 목록은 커뮤니티가 관리하며 OpenAI와 제휴 관계가 없습니다. 등재는 직접 살펴볼 만한 작품이라는 뜻이며, 성능 평가나 공식 추천을 의미하지 않습니다.

## 게임 목록

- [액션 및 아케이드](#action-arcade)
- [퍼즐 및 두뇌 게임](#puzzles)
- [전략 및 시뮬레이션](#strategy-simulation)
- [RPG 및 어드벤처](#rpg-adventures)
- [플랫포머 및 레이싱](#platformers-racing)
- [실험적 게임 및 멀티플레이](#experimental-multiplayer)

<a id="action-arcade"></a>

### 액션 및 아케이드

슈팅, 격투, 생존, 리듬 게임 등 한 판 더 하고 싶어지는 작품들입니다.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — 버튼 하나로 날갯짓하는 3D 비행 게임입니다. 장애물 사이를 통과하며 점수를 쌓습니다.
  - 제작자: [Ayi1337](https://github.com/Ayi1337)
  - 플랫폼: 브라우저. 모바일 기기를 고려해 설계되었습니다.
  - GPT-6 Astra: [제작자의 원샷 테스트와 최초 프롬프트](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - 개발 자료: [소스 코드](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [단일 HTML 파일](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — 마법 양탄자를 타고 구형 세계를 탐험하며 고리를 통과하고 주문을 사용해 적과 보스를 상대합니다.
  - 제작자: [threapchills](https://github.com/threapchills)
  - 플랫폼: 마우스와 키보드를 사용하는 데스크톱 브라우저. WebGL 2가 필요합니다.
  - GPT-6 Astra: 제작자는 [저장소의 About 설명](https://github.com/threapchills/MagicCarpetWizard)에서 GPT-6 Astra로 제작했다고 밝힙니다.
  - 개발 자료: [소스 코드 및 실행 안내](https://github.com/threapchills/MagicCarpetWizard) · 사용 기술: Three.js, Vite.

<a id="puzzles"></a>

### 퍼즐 및 두뇌 게임

논리 퍼즐, 물리 문제, 단어 게임, 기발한 작은 장치들을 다룹니다.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — 부드러운 과일의 변형과 충돌을 이용하는 수박 합치기 게임입니다.
  - 제작자: [Ayi1337](https://github.com/Ayi1337)
  - 플랫폼: 최신 브라우저. 제작자는 내려받아 실행할 수 있는 단일 HTML 버전도 제공합니다.
  - GPT-6 Astra: [제작자의 원샷 테스트와 최초 프롬프트](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - 개발 자료: [소스 코드](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [단일 HTML 파일](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)

<a id="strategy-simulation"></a>

### 전략 및 시뮬레이션

타워 디펜스, 전략 카드 게임, 경영, 건설, 시뮬레이션 샌드박스를 다룹니다.

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — 작은 섬에 전력망을 연결하고 포탑을 건설·강화합니다. 제한된 전력을 배분해 열 차례의 적 공세와 마지막 보스로부터 등대를 지키세요.
  - 제작자: [stackloomdev](https://github.com/stackloomdev)
  - 플랫폼: 최신 데스크톱 및 모바일 브라우저. 중국어와 영어를 지원하며 무료이고 로그인이나 API 키가 필요 없습니다. 선택 기능인 사운드에는 Web Audio가 필요합니다.
  - GPT-6 Astra: [제작자의 개발 기록과 모델 기여 설명](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — 게임 설계, 코드, 절차적 그래픽, 테스트에 활용했으며 여러 차례의 개선을 거쳤습니다. 원샷 테스트가 아닙니다.
  - 개발 자료: [소스 코드 및 실행 안내](https://github.com/stackloomdev/last-beacon) · [요구 사항 및 반복 개발 기록](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · 사용 기술: JavaScript, Canvas 2D, Web Audio.
  - 미리보기: ![Last Beacon의 영어 게임 화면. 전력망에 연결된 포탑, 박격포, 냉기 타워가 해안 경로로 들어오는 적으로부터 섬을 방어합니다.](assets/screenshots/last-beacon/gameplay-en.png)

<a id="rpg-adventures"></a>

### RPG 및 어드벤처

롤플레잉, 탐험, 서사 중심의 모험, 인터랙티브 스토리를 다룹니다.

*첫 번째 게임을 기다리고 있습니다.*

<a id="platformers-racing"></a>

### 플랫포머 및 레이싱

파쿠르, 플랫폼 도전, 레이싱 등 이동과 경로 선택이 중심인 게임들입니다.

- **[APEX CLUB — Bay Kart Grand Prix](works/apex-club/README.md)** — 베이 서킷에서 3랩 카트 레이스를 펼칩니다. 6종의 카트 중 하나를 고르고 코너에서 미니 터보를 충전해 탈출할 때 가속하며, 개인 순위나 4 대 4 팀 점수를 겨룹니다.
  - 제작자: [MartinDelophy](https://github.com/MartinDelophy) (제출 계정).
  - 플랫폼: WebGL 2를 지원하는 데스크톱 브라우저, 키보드 조작. 무료이며 로그인이나 API 키가 필요 없습니다. 로컬 HTTP 서버와 Three.js를 불러올 인터넷 연결이 필요합니다. 팀전은 플레이어 1명과 AI 7명이 참여하는 로컬 레이스입니다.
  - 모델 참여: [개발 기록](works/apex-club/CREATION.md) — Codex에서 게임 방식, 코드, 절차적 그래픽, 테스트를 여러 차례 개선했습니다. GPT-6 Astra 사용 여부는 제작자의 확인을 기다리고 있습니다.
  - 개발 자료: [소스 코드 및 실행 안내](works/apex-club/README.md) · [요구 사항 및 반복 개발 기록](works/apex-club/PROMPTS.md) · 사용 기술: JavaScript, Three.js.
  - 미리보기: ![APEX CLUB의 베이 서킷 팀 레이스. 주변 카트, 랩 진행 상황, 실시간 팀 점수와 미니맵이 표시됩니다.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — 자전거를 탄 펠리컨과 함께 변화하는 3D 해안을 달립니다. 세 차선을 오가며 점프하거나 몸을 숙여 장애물을 피하고, 물고기 수집 콤보와 보호막, 자석, 6초 무적 질주를 활용하세요.
  - 제작자: [chat01.ai](https://chat01.ai) (제보에 명시된 제작자).
  - 플랫폼: 데스크톱 및 모바일 브라우저에서 키보드나 터치로 조작합니다. 제보에 따르면 무료이며 로그인이 필요 없습니다. 데모는 별도로 검증하지 못했습니다.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — 제보자는 프롬프트 하나로 생성했다고 밝혔습니다. 링크된 개발 기록은 별도로 검증하지 못했습니다.
  - 개발 자료: [공유된 개발 기록](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - 미리보기: ![바닷가에서 자전거를 타는 펠리컨이 보이는 PELICAN PEDAL 타이틀 화면. Issue #10에 첨부된 이미지.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

<a id="experimental-multiplayer"></a>

### 실험적 게임 및 멀티플레이

독특한 게임 방식, 온라인 경쟁, 협동 플레이를 다룹니다.

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden.hp20230404.chatgpt.site)** — 인터랙티브 파티클 아트 샌드박스입니다. 48,000개의 빛 입자를 꽃, 중력 고리, 은하로 바꾸고 조형물을 흔들며 한순간을 포스터로 내보낼 수 있습니다.
  - 제작자: [jackroc](https://github.com/jackroc)
  - 플랫폼: WebGL을 지원하는 최신 브라우저. 작품명을 누르면 온라인으로 체험할 수 있습니다. 무료이며 로그인이나 API 키가 필요 없고, 단일 HTML 파일은 오프라인에서도 실행됩니다. 선택 기능인 환경음에는 Web Audio가 필요합니다.
  - GPT-6 Astra: [제작 기록과 모델 기여 설명](works/orbital-garden/README.md#模型与创作记录) — 제작자는 구상, 코드, 문구 작성에 GPT-6 Astra ultra를 사용하고 공동 검토를 거쳤습니다. 원샷 테스트가 아닙니다.
  - 개발 자료: [소스 코드 및 실행 안내](works/orbital-garden/README.md) · [단일 HTML 파일](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · 사용 기술: 순수 WebGL, Web Audio, Canvas 2D.

## 각 항목에 담는 정보

좋은 추천은 어떤 게임인지, 어디서 해 볼 수 있는지, 왜 이 목록에 포함되는지 쉽게 알려 줍니다.

| 정보 | 포함할 내용 |
| --- | --- |
| 게임 및 제작자 | 게임 이름과 원작자 또는 제작팀 링크 |
| 재미 요소 | 과장된 홍보 문구 없이 핵심 게임 방식을 한 문장으로 설명 |
| 이용 방법 | 플레이할 수 있는 링크 또는 실행 안내가 있는 공개 소스 코드 저장소 |
| 실제 게임 화면 | 공개적으로 접근 가능한 이미지 URL과 실제 플레이 화면 최소 1장 |
| 플랫폼 및 요구 사항 | 브라우저 / 데스크톱 / 모바일. 결제, 로그인, 특수 하드웨어 요구 사항을 명시 |
| Astra의 역할 | GPT-6 Astra가 어떤 작업에 기여했는지 설명하는 제작자의 발표, 개발 일지 또는 공개 기록 |
| 개발 자료 | 공개 가능한 소스 코드, 사용 기술, 제작 과정 |

모델 사용 정보는 제작자의 공개 설명을 바탕으로 기록합니다. 근거가 없는 주장을 확인된 사실로 표시하지 않습니다. 플레이 가능한 프로토타입도 환영하며, 소스 코드 공개는 필수가 아닙니다.

## 목록 관리에 참여하기

[Issue로 게임을 제출](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)하거나 Pull Request를 열어 주세요. 항목 형식은 [기여 안내](CONTRIBUTING.md)를 참고하세요.

플레이 링크 오류, 제작자 표기 오류, 이용 조건 변경 등은 [문제 신고](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml)를 통해 알려 주세요.

## 라이선스

이 저장소에서 직접 작성한 목록의 글과 직접 제작한 시각 자료는 [CC0 1.0](LICENSE)에 따라 퍼블릭 도메인에 제공됩니다. 링크된 게임, 코드, 이미지, 상표 및 기타 제3자 콘텐츠에는 각자의 라이선스와 권리가 계속 적용됩니다. 목록 등재가 해당 콘텐츠의 이용 허락을 변경하지는 않습니다.
