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

현재 **브라우저 게임 9개와 인터랙티브 파티클 아트 샌드박스 1개**를 소개합니다. 나무 결합 퍼즐과 슬라이딩 퍼즐, 부드러운 과일 합치기, 원버튼 비행, 마법 양탄자 전투, 섬의 전력망을 이용한 타워 디펜스, 야생 생존, 베이 서킷 카트 레이싱, 펠리컨과 함께하는 해안 자전거 달리기, 탁상 장난감을 옮긴 3D 게임, 그리고 Orbital Garden을 만나 보세요. 작품명을 누르면 데모 또는 실행 안내가 포함된 소스 코드가 열립니다.

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
  - 미리보기: ![Mosswing 시작 화면에 날아다니는 캐릭터와 돌기둥 사이의 틈이 보입니다.](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — 마법 양탄자를 타고 구형 세계를 탐험하며 고리를 통과하고 주문을 사용해 적과 보스를 상대합니다.
  - 제작자: [threapchills](https://github.com/threapchills)
  - 플랫폼: 마우스와 키보드를 사용하는 데스크톱 브라우저. WebGL 2가 필요합니다.
  - GPT-6 Astra: 제작자는 [저장소의 About 설명](https://github.com/threapchills/MagicCarpetWizard)에서 GPT-6 Astra로 제작했다고 밝힙니다.
  - 개발 자료: [소스 코드 및 실행 안내](https://github.com/threapchills/MagicCarpetWizard) · 사용 기술: Three.js, Vite.
  - 미리보기: ![Magic Carpet Wizard 시작 화면에 양탄자 탑승자, 도시, 빛나는 비행 링이 보입니다.](assets/screenshots/magic-carpet/gameplay.jpg)

<a id="puzzles"></a>

### 퍼즐 및 두뇌 게임

논리 퍼즐, 물리 문제, 단어 게임, 기발한 작은 장치들을 다룹니다.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — 부드러운 과일의 변형과 충돌을 이용하는 수박 합치기 게임입니다.
  - 제작자: [Ayi1337](https://github.com/Ayi1337)
  - 플랫폼: 최신 브라우저. 제작자는 내려받아 실행할 수 있는 단일 HTML 버전도 제공합니다.
  - GPT-6 Astra: [제작자의 원샷 테스트와 최초 프롬프트](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - 개발 자료: [소스 코드](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [단일 HTML 파일](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - 미리보기: ![Melon Lab 게임 화면에 합성 용기 속 부드러운 과일과 물리 설정 조작부가 보입니다.](assets/screenshots/melon-lab/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.netlify.app)** — 3D 목공 작업대에서 6개 부품이 맞물린 나무 퍼즐을 분해하고 두 가지 화용도 슬라이딩 퍼즐을 풉니다. 힌트와 이동 취소를 지원합니다.
  - 제작자: [MartinDelophy](https://github.com/MartinDelophy) (프로젝트 발안자 및 제출자).
  - 플랫폼: WebGL 2를 지원하는 최신 브라우저에서 중국어 인터페이스와 마우스·키보드·터치 조작을 제공합니다. 무료이며 로그인이나 API 키가 필요 없습니다. 진행 상황은 현재 브라우저에 저장됩니다.
  - 모델 참여: [제작 기록](works/sunjing-puzzles/CREATION.md) — Codex에서 게임 설계, 절차적 3D 그래픽, 규칙, 솔버와 테스트를 여러 차례 개발했습니다. GPT-6 Astra의 구체적인 사용 여부는 제작자 확인을 기다리고 있습니다(초안 제출).
  - 개발 자료: [소스 코드 및 실행 안내](works/sunjing-puzzles/README.md) · [요구사항 기록](works/sunjing-puzzles/PROMPTS.md) · 사용 기술: React, Vinext/Vite, Three.js.
  - 미리보기: ![초록색 3D 작업대 위에 놓인 Sunjing의 6개 부품 나무 퍼즐과 부품 번호, 빼내기 조작부.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

<a id="strategy-simulation"></a>

### 전략 및 시뮬레이션

타워 디펜스, 전략 카드 게임, 경영, 건설, 시뮬레이션 샌드박스를 다룹니다.

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — 작은 섬에 전력망을 연결하고 포탑을 건설·강화합니다. 제한된 전력을 배분해 열 차례의 적 공세와 마지막 보스로부터 등대를 지키세요.
  - 제작자: [stackloomdev](https://github.com/stackloomdev)
  - 플랫폼: 최신 데스크톱 및 모바일 브라우저. 중국어와 영어를 지원하며 무료이고 로그인이나 API 키가 필요 없습니다. 선택 기능인 사운드에는 Web Audio가 필요합니다.
  - GPT-6 Astra: [제작자의 개발 기록과 모델 기여 설명](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — 게임 설계, 코드, 절차적 그래픽, 테스트에 활용했으며 여러 차례의 개선을 거쳤습니다. 원샷 테스트가 아닙니다.
  - 개발 자료: [소스 코드 및 실행 안내](https://github.com/stackloomdev/last-beacon) · [요구 사항 및 반복 개발 기록](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · 사용 기술: JavaScript, Canvas 2D, Web Audio.
  - 미리보기: ![Last Beacon의 영어 게임 화면. 전력망에 연결된 포탑, 박격포, 냉기 타워가 해안 경로로 들어오는 적으로부터 섬을 방어합니다.](assets/screenshots/last-beacon/gameplay-en.png)

- **[永恒荒野](https://starve.pages.dev/)** — Don't Starve를 재현한 작품으로 제출된 브라우저 생존·전략 게임입니다. 제출된 화면에는 숲 탐험, 자원 수집, 인벤토리와 체력·허기·정신력 수치가 보입니다.
  - 제작자: dudu
  - 플랫폼: 브라우저. 스크린샷에서 중국어 인터페이스와 키보드 조작을 확인할 수 있습니다. 결제 및 로그인 요건은 명시되지 않았으며, 데모는 별도로 검증하지 못했습니다.
  - GPT-6 Astra: [제출자 설명](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — 제출자는 GPT-6 Astra가 전체 개발을 수행했다고 밝혔습니다.
  - 개발 자료: 공개 소스 코드나 별도의 개발 기록은 제공되지 않았습니다.
  - 미리보기: ![Issue #26에 첨부된 永恒荒野 화면. 숲속 모닥불 옆의 캐릭터와 인벤토리, 생존 상태, 미니맵이 보입니다.](assets/screenshots/eternal-wilderness/gameplay.jpg)

<a id="rpg-adventures"></a>

### RPG 및 어드벤처

롤플레잉, 탐험, 서사 중심의 모험, 인터랙티브 스토리를 다룹니다.

*첫 번째 게임을 기다리고 있습니다.*

<a id="platformers-racing"></a>

### 플랫포머 및 레이싱

파쿠르, 플랫폼 도전, 레이싱 등 이동과 경로 선택이 중심인 게임들입니다.

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.mauve-ibex-1793.chatgpt.site)** — 베이 서킷에서 3랩 카트 레이스를 펼칩니다. 6종의 카트 중 하나를 고르고 코너에서 미니 터보를 충전해 탈출할 때 가속하며, 개인 순위나 4 대 4 팀 점수를 겨룹니다.
  - 제작자: Ryan
  - 플랫폼: WebGL 2와 키보드를 사용하는 데스크톱 브라우저. 무료이며 로그인이나 API 키가 필요 없습니다. 로컬 HTTP 서버 또는 정적 호스팅에서 실행하며 Three.js가 함께 제공됩니다. 팀전은 사람 1명과 AI 7명이 참여하는 로컬 레이스입니다.
  - 모델 참여: [개발 기록](works/apex-club/CREATION.md) — Codex에서 게임 방식, 코드, 절차적 그래픽, 테스트를 여러 차례 개선했습니다. GPT-6 Astra 사용 여부는 제작자의 확인을 기다리고 있습니다.
  - 개발 자료: [소스 코드 및 실행 안내](works/apex-club/README.md) · [요구 사항 및 반복 개발 기록](works/apex-club/PROMPTS.md) · [GPT 공유 대화](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · 사용 기술: JavaScript, Three.js.
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
  - 미리보기: ![Orbital Garden의 민트색 입자 꽃과 형태 선택, 생명력 및 시간 속도 조절, 포스터 내보내기 기능.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — 탁상 장난감을 네 가지 3D 게임으로 옮겼습니다. 펭귄 아래의 얼음을 깨고, 토끼를 함정 너머로 이동시키고, 우주인을 올려 플랫폼의 균형을 지키고, 차량을 움직여 주차장 탈출 퍼즐을 풉니다.
  - 제작자: [asmoyou](https://github.com/asmoyou)
  - 플랫폼: 컴퓨터, 태블릿, 모바일 브라우저에서 무료로 로그인 없이 이용합니다. 컴퓨터 상대를 포함한 2–4개 자리가 한 화면에서 번갈아 플레이하며, 1인 퍼즐도 있습니다. 온라인 멀티플레이는 지원하지 않습니다. 데모는 별도로 검증하지 못했습니다.
  - GPT-6 Astra: [제작자 설명](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — 제작자는 장난감 설명과 기능 요구사항만 제공했으며, GPT-6 Astra가 게임 구현과 테스트를 자율적으로 수행했다고 밝혔습니다.
  - 개발 자료: [소스 코드 및 실행 안내](https://github.com/asmoyou/toy2game) · [비상업적 이용 라이선스](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — 소스 코드를 공개하며 비상업적 이용은 무료입니다. 상업적 이용은 제작자의 사전 서면 허가가 필요합니다. 사용 기술: TypeScript, React, Vite, Three.js.
  - 미리보기: ![Toy2Game의 실제 3D 게임 화면 네 가지: 펭귄 얼음 깨기, 토끼 함정, 우주인 균형 잡기, 주차장 탈출. asmoyou 제공.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

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
