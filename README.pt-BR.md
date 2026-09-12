<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 86](https://img.shields.io/badge/Cases-86-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Uma coleção de jogos interessantes feitos com GPT-6 Astra.**

Ideias divertidas, jogos para experimentar e histórias de desenvolvimento que inspiram os próximos criadores.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · **Português (Brasil)**<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Enviar um jogo](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuir](CONTRIBUTING.md)

</div>

Esta página é uma tradução do [README em inglês](README.md). Consulte o original para conferir as atualizações mais recentes; correções de tradução são bem-vindas.

## Comece por aqui

Explore **86 jogos e projetos interativos**: estratégia territorial dos Três Reinos, quebra-cabeças de madeira com encaixes e peças deslizantes, fusão de frutas deformáveis, 2048 de construção de cidades com geração procedural, voo com um toque, combates em tapete mágico, um jogo de tiro com chuva de balas e cinco fases, defesa de uma ilha com uma rede elétrica, sobrevivência na natureza, pesca submarina, gestão de um restaurante de sushi e cultivo em uma ilha, corridas de kart no Bay Circuit, ciclismo pela costa com um pelicano, brinquedos de mesa adaptados para 3D, decoração de casas em 3D e Orbital Garden. Clique em um título para jogar diretamente no navegador.

Catálogo atualizado: **2026-09-12**. O uso do modelo é informado com base nas declarações dos criadores ou responsáveis pelas submissões; detalhes não confirmados são sinalizados em cada entrada. Esta data registra a manutenção do catálogo, não um novo teste de todos os jogos.

- **Procurando algo para jogar?** Explore os gêneros abaixo.
- **Criou um jogo?** [Envie seu projeto](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) com um link direto para jogar no navegador, uma captura de tela do jogo e uma descrição de como você usou GPT-6 Astra.
- **Encontrou um ótimo projeto?** Recomende trabalhos públicos de outras pessoas e dê crédito aos criadores.

Esta lista é mantida pela comunidade e não tem vínculo com a OpenAI. A inclusão é um convite para explorar, não um teste de desempenho nem uma recomendação oficial.

## Jogos

- [Ação e arcade](#action-arcade)
- [Quebra-cabeças e raciocínio](#puzzles)
- [Estratégia e simulação](#strategy-simulation)
- [RPG e aventura](#rpg-adventures)
- [Plataforma e corrida](#platformers-racing)
- [Experimentais e multijogador](#experimental-multiplayer)

<a id="action-arcade"></a>

### Ação e arcade

Jogos de tiro, luta, sobrevivência, ritmo e qualquer experiência que dê vontade de jogar mais uma partida.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — Um jogo de voo em 3D com um único botão: bata as asas para passar pelos espaços entre obstáculos e aumentar sua pontuação.
  - Criador: [Ayi1337](https://github.com/Ayi1337)
  - Plataforma: Navegador, projetado para dispositivos móveis.
  - GPT-6 Astra: [Testes em uma única geração e prompts originais do criador](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Recursos: [Código-fonte](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [HTML independente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Prévia: ![Tela inicial de Mosswing com o personagem voador e os espaços entre pilares de pedra.](assets/screenshots/mosswing/gameplay.jpg)

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — Jogue uma partida de futebol de onze contra onze entre Barcelona e Real Madrid em um estádio 3D, com passes, chutes e troca de jogadores.
  - Criador: [Mindblown / @mind](https://mindblown.ai/@mind)
  - Plataforma: Navegador desktop; teclado e mouse, sem login obrigatório.
  - GPT-6 Astra: [Notas de verificação](assets/screenshots/stadium-elite/SOURCE.md) — A publicação fornecida de Mindblown menciona Three.js e GPT-6 Astra.
  - Prévia: ![Stadium Elite — El Clásico: Jogue uma partida de futebol de onze contra onze entre Barcelona e Real Madrid em um estádio 3D, com passes, chutes e troca de jogadores.](assets/screenshots/stadium-elite/gameplay.png)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Voe em um tapete mágico por um mundo esférico, atravesse anéis, lance feitiços e enfrente inimigos e chefes.
  - Criador: [threapchills](https://github.com/threapchills)
  - Plataforma: Navegador de computador com mouse e teclado; exige WebGL 2.
  - GPT-6 Astra: O criador informa na [seção About do repositório](https://github.com/threapchills/MagicCarpetWizard) que o jogo foi feito com GPT-6 Astra.
  - Recursos: [Código-fonte e instruções de execução](https://github.com/threapchills/MagicCarpetWizard) · Tecnologias: Three.js, Vite.
  - Prévia: ![Tela inicial de Magic Carpet Wizard com o piloto do tapete, a cidade e um anel de voo brilhante.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Um jogo de tiro com três caças, cinco setores, chefes com várias fases e disparo automático.
  - Criador: [jackroc](https://github.com/jackroc)
  - GPT-6 Astra: [README](works/thunderfall/README.md#创作与许可) — Segundo o criador, desenvolvido com GPT-6 Astra ultra por meio de várias iterações.
  - [README](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · JavaScript, Canvas 2D, Web Audio.
  - Prévia: ![THUNDERFALL — Captura do jogo](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Defenda um sinalizador contra ondas de tanques inimigos em seis setores 3D, com paredes de tijolos destrutíveis, um avanço rápido e um pulso eletromagnético.
  - Criador: [chat01.ai](https://linux.do/u/bandaot)
  - Plataforma: Navegador com WebGL 2 e interface em chinês; o manual descreve controles por teclado, mouse e toque. Combate iniciado sem login ou pagamento.
  - GPT-6 Astra: O uso de GPT-6 Astra e seu papel aguardam confirmação do criador.
  - Prévia: ![IRON BASTION / 钢铁防线 — Captura do jogo](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — Jogo de luta de bonecos de palito em desenvolvimento, com socos, chutes, uppercuts, estrelas ninja e aparadas; treino contra bot e menus online/com amigos.
  - Criador: [Dwayne](https://x.com/CtrlAltDwayne)
  - Plataforma: Navegador de desktop, teclado; treino sem login. Multijogador online e controle não foram testados de forma independente.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — O autor declara que criou este jogo de luta multijogador com GPT-6 Astra e que ele ainda está em desenvolvimento.
  - Prévia: ![Stick Fighter — Captura do jogo](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — FPS de tinta inspirado em Van Gogh, com seis artistas, armas próprias e partidas até 20 pontos.
  - Criador: [Peter Gostev](https://x.com/petergostev)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/gogh-strike/SOURCE.md).
  - Prévia: ![Gogh Strike · Paint Clash — Captura do jogo](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Cabine de tiro estilo Asteroids com quatro câmeras, radar, canhões duplos e voo inercial.
  - Criador: [Eyes Wide Open](https://x.com/DantesClown)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Prévia: ![ASTEROIDS · Deepfield — Captura do jogo](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — FPS tático em um terminal de carga chuvoso, com rifle detalhado, HUD de combate e nove inimigos.
  - Criador: [hiraeth](https://x.com/WoahWurdz)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/blackwater/SOURCE.md).
  - Recursos: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Prévia: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — Arena de duelos de fantasia com quatro heróis, seis habilidades por classe, batalhas contra IA e salas online.
  - Criador: [JUMPERZ](https://x.com/jumperz)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/cinderfall/SOURCE.md).
  - Prévia: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Arraste os membros de um dançarino com física ragdoll até os alvos correspondentes para marcar pontos e prolongar uma rodada cronometrada de breaking.
  - Criador: [Satrio](https://x.com/satrio_d)
  - Plataforma: Navegador de computador, controle pelo mouse; uma rodada cronometrada foi iniciada sem login.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — O criador afirma que Astra melhorou seu jogo de breakdance existente e sua apresentação. [Notas de verificação](assets/screenshots/breakdance/SOURCE.md).
  - Prévia: ![Um dançarino ragdoll tenta alcançar um alvo com o pé na arena de breakdance cronometrada.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — FPS de navegador com tema da Segunda Guerra Mundial, visuais de soldados e zumbis, conjuntos de armas, treino contra bots e opções de sala.
  - Criador: [Rishi](https://x.com/0xRishi)
  - Plataforma: Navegador de computador, teclado e mouse; treino contra bots iniciado sem login. Multijogador e controle não foram testados.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi relata ter criado Astral War com Astra, Three.js, Meshy e ElevenLabs. O site atual também credita Vesper; veja a nota de atribuição. [Notas de verificação](assets/screenshots/astral-war/SOURCE.md).
  - Prévia: ![Combate de Astral War com arma e controles do campo de batalha.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Mergulhe de três alturas, faça mortais e giros e mire em um aro flutuante para melhorar a pontuação de entrada na água.
  - Criador: [BubuAi](https://x.com/BubuStd)
  - Plataforma: Navegador; o jogo independente inicia sem login nem download. Um mergulho foi iniciado na verificação de 2026-09-09; teclado e controles de toque documentados.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — O criador relata uma implementação com Astra Pro e Three.js a partir de um único prompt. [Notas de verificação](assets/screenshots/flop-club/SOURCE.md).
  - Recursos: [Apresentação do projeto](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Prévia: ![Um mergulhador na plataforma alta sobre o aro-alvo e os controles de entrada na água.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Pilote por circuitos de neon em aramado que aceleram a cada volta, usando impulsos e mudanças de fase no momento certo para sobreviver.
  - Criador: [Thomas Ricouard](https://x.com/Dimillian)
  - Plataforma: Navegador de computador; voo com pontuação iniciado sem login. WASD para voar, Espaço para impulsionar e Shift para mudar de fase.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — O criador afirma que Astra fez o jogo e a música a partir de uma proposta visual neon/synthwave e arte conceitual. [Notas de verificação](assets/screenshots/vector-dive/SOURCE.md).
  - Prévia: ![Percurso de neon de Vector Dive com nave e indicadores de jogo.](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — Defenda uma cidade litorânea de ondas de coelhos bagunceiros com três armas, rotas pelos telhados, arrancadas e um gancho.
  - Criador: [OpenDesign](https://x.com/OpenDesignHQ)
  - Plataforma: Navegador de computador; teclado e mouse, sem login nem download.
  - GPT-6 Astra: [Declaração do criador](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign identifica este jogo de Three.js como a versão GPT-6 Astra em sua comparação de dois modelos. [Notas de verificação](assets/screenshots/harbor-skirmish/SOURCE.md).
  - Prévia: ![Visão de rifle em primeira pessoa em Seabreeze, coelhos se aproximando, contador de ondas e controles de armas.](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — Underground Boxing](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — Lute boxe em três rounds cronometrados num ringue subterrâneo 3D, equilibrando socos, bloqueios, esquivas e resistência.
  - Criador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador de computador; WASD para mover, J/K para socar, L para bloquear e Espaço para esquivar; sem login nem download.
  - GPT-6 Astra: [Declaração do criador](https://x.com/sonic0828/status/2097601232877781344) — A apresentação do criador cita GPT-6 Astra como ferramenta de geração dos minijogos; a resposta sobre boxe inclui o link desta versão. [Notas de verificação](assets/screenshots/underground-boxing/SOURCE.md).
  - Recursos: [Link de lançamento do criador](https://x.com/sonic0828/status/2097601584410796401)
  - Prévia: ![Dois boxeadores trocando golpes em um ringue subterrâneo iluminado, com tempo, vida e resistência.](assets/screenshots/underground-boxing/gameplay.jpg)

- **[Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — Troque socos altos e baixos numa rua ao pôr do sol, bloqueie contra-ataques e empurre o rival para um bueiro enquanto desvia de vasos que caem.
  - Criador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador de computador; A/D para mover, J/K para socar, U/I para bloquear e Espaço para esquivar; sem login.
  - GPT-6 Astra: [Declaração do criador](https://x.com/sonic0828/status/2097601232877781344) — A apresentação de GPT-6 Astra do criador inclui uma resposta de lançamento separada com o link deste jogo de luta de rua. [Notas de verificação](assets/screenshots/urban-champion-3d/SOURCE.md).
  - Recursos: [Link de lançamento do criador](https://x.com/sonic0828/status/2097601861658587376)
  - Prévia: ![Lutadores azul e vermelho diante da Sunset Mart, com cronômetro do round e barras de resistência.](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[Zero District — Shells 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — Sobreviva a um cerco urbano de três minutos com disparo automático, esquivas por movimento, coleta de experiência e escolha de melhorias.
  - Criador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador; WASD ou arrastar para mover, mira automática; sem login nem download.
  - GPT-6 Astra: [Declaração do criador](https://x.com/sonic0828/status/2097601232877781344) — O criador cita GPT-6 Astra no anúncio da coleção e publica esta versão de sobrevivência 3D em uma resposta dedicada. [Notas de verificação](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - Recursos: [Link de lançamento do criador](https://x.com/sonic0828/status/2097602391122264310)
  - Prévia: ![Sobrevivente atirando automaticamente nos inimigos da rua, com 14 derrotados e 166 segundos restantes.](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — Enfrente ondas de vírus de computador numa arena em primeira pessoa desenhada com caracteres ASCII, correndo, pulando e deslizando.
  - Criador: [Acker Code](https://x.com/acker_code)
  - Plataforma: Navegador de computador; teclado e mouse, sem login. Clique na arena para capturar o mouse; Esc o libera.
  - GPT-6 Astra: [Declaração do criador](https://x.com/acker_code/status/2097542957070975286) — O criador credita explicitamente Codex e GPT-6 Astra pelo jogo de tiro em arte ASCII. [Notas de verificação](assets/screenshots/ascii-district/SOURCE.md).
  - Prévia: ![Pátio ASCII com vírus se aproximando e indicador do rifle com 29 balas após um disparo.](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — Equilibre uma capivara dançarina num barco-dragão, incline-se contra as ondas e complete seis movimentos antes de acabar o tempo de 40 segundos.
  - Criador: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plataforma: Navegador de computador; jogo grátis sem login. Clique em Play; recursos de conta são opcionais.
  - GPT-6 Astra: [Página do criador](https://www.aigameshare.com/games/aura-farming-game) — O criador credita GPT-6 Astra e Codex, além de Blender, Three.js, ImageGen e WebAudio. [Notas de verificação](assets/screenshots/aura-farming/SOURCE.md).
  - Prévia: ![Capivara dançando num barco-dragão, com controles de inclinação e apoio e desafio de seis movimentos.](assets/screenshots/aura-farming/gameplay.jpg)

<a id="puzzles"></a>

### Quebra-cabeças e raciocínio

Desafios de lógica e física, jogos de palavras e pequenos mecanismos engenhosos.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Um jogo de juntar melancias baseado na deformação e nas colisões de frutas macias.
  - Criador: [Ayi1337](https://github.com/Ayi1337)
  - Plataforma: Navegador moderno; o criador também disponibiliza uma versão HTML independente para download.
  - GPT-6 Astra: [Testes em uma única geração e prompts originais do criador](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Recursos: [Código-fonte](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [HTML independente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Prévia: ![Partida de Melon Lab com frutas macias no recipiente de fusão e controles de física.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Elimine grupos de pelo menos três bolhas conectadas da mesma cor; grupos grandes criam bombas e arco-íris. Modos relaxante, fases e cronometrado.
  - Criador: zding
  - Plataforma: Navegador, interface em chinês; início verificado sem login ou pagamento.
  - GPT-6 Astra: O uso de GPT-6 Astra e seu papel aguardam confirmação do criador.
  - Prévia: ![Q弹消消乐 — Captura do jogo](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Desmonte um quebra-cabeça de madeira de seis peças entrelaçadas e resolva duas configurações de Huarong Dao em uma oficina 3D, com dicas e opção de desfazer movimentos.
  - Criador: [MartinDelophy](https://github.com/MartinDelophy) (idealizador do projeto e responsável pelo envio).
  - Plataforma: Navegador moderno com WebGL 2; interface em chinês e controles de mouse, teclado e toque. Grátis, sem login ou chave de API; o progresso fica no navegador atual.
  - Participação do modelo: [Registro de criação](works/sunjing-puzzles/CREATION.md) — Trabalho iterativo no Codex sobre design do jogo, visuais 3D procedurais, regras, solucionador e testes; o uso específico de GPT-6 Astra aguarda confirmação do criador (envio preliminar).
  - Recursos: [Código-fonte e instruções de execução](works/sunjing-puzzles/README.md) · [Requisitos](works/sunjing-puzzles/PROMPTS.md) · Tecnologias: React, Vinext/Vite, Three.js.
  - Prévia: ![Quebra-cabeça de madeira de seis peças de Sunjing sobre uma bancada 3D verde, com peças numeradas e controles de extração.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker](https://citymaker.0to1app.com)** — Um quebra-cabeça 2048 num quarteirão 4×4: una prédios iguais para avançar por onze níveis arquitetônicos em cada cidade, de casas tradicionais a um horizonte reconhecível, em doze cidades com câmera girando em passos de 45°.
  - Criador: [Derek Wang](https://github.com/derek-wangpch)
  - Plataforma: Navegadores de computador e celular com WebGL; inglês, chinês simplificado e tradicional. Grátis, sem login ou chave API; progresso por cidade salvo no navegador atual e instalação na tela inicial do iOS disponível.
  - GPT-6 Astra: [Registro de criação](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — O criador relata usar GPT-6 Astra para gerar a geometria procedural dos 132 prédios, com referências, pesquisa de múltiplas vistas, volumes baseados na silhueta e validação por capturas; não foi um teste de prompt único.
  - Recursos: [Código e configuração](https://github.com/derek-wangpch/OpenCityMaker) · [Notas de verificação](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Tecnologias: React, TypeScript, Vite e Three.js; os 132 modelos de prédios são geometria procedural original.
  - Prévia: ![Tabuleiro de Hong Kong de CityMaker com prédios 3D low-poly em uma grade 4×4, pontuação, seleção de cidades e rotação.](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — Puxe um estilingue e lance pequenos Bonkers contra suportes de madeira para derrubar estruturas e eliminar alvos.
  - Criador: [edmund5](https://x.com/edmund5)
  - Plataforma: Navegador; arraste para mirar e solte para lançar. Jogável sem login; entrar com Google é opcional.
  - GPT-6 Astra: [Declaração do criador](https://x.com/edmund5/status/2097603093819261002) — O criador credita GPT-6 Astra e Three.js pelo jogo e Suno pela música de fundo. [Notas de verificação](assets/screenshots/bonkshot/SOURCE.md).
  - Prévia: ![Primeiro quebra-cabeça de Grasslands após um lançamento: torre parcialmente caída, um alvo restante e 2.200 pontos.](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — Explore uma estufa fechada, restaure canos de cobre, organize plantas e luz refletida e resgate a última semente.
  - Criador: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plataforma: Navegador; clique em Play e depois Begin. Grátis, sem login; controles em inglês e chinês.
  - GPT-6 Astra: [Página do criador](https://www.aigameshare.com/games/greenhouse-escape-room) — O criador identifica GPT-6 Astra e Codex como ferramentas de desenvolvimento, com ImageGen e WebAudio. [Notas de verificação](assets/screenshots/greenhouse-escape-room/SOURCE.md).
  - Prévia: ![Sala Waterworks da estufa, com mecanismo de canos de nove peças, cronômetro e inventário.](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

<a id="strategy-simulation"></a>

### Estratégia e simulação

Defesa de torres, cartas estratégicas, gerenciamento, construção e simulação no estilo sandbox.

- **[Tidehook](https://tidehook-mallow.vercel.app/)** — Pilote o pequeno rebocador Mallow em três viagens costeiras: reboque objetos cujo peso altera a aceleração e as curvas, entregue-os ao guindaste do porto e, por fim, recupere uma lente de farol.
  - Criador: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Plataforma: Navegador de computador ou notebook, interface em inglês; grátis, sem login ou instalação. Pilotagem por teclado ou cliques na água, com progresso salvo no navegador atual. Uso em celulares não verificado.
  - GPT-6 Astra: [Declaração do criador](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74) — O criador usou GPT-6 Astra no Codex para desenvolver e aperfeiçoar em várias iterações o jogo Canvas, a física do reboque, a entrega ao guindaste, a interface, o clima e o áudio, assumindo a direção e os testes de jogabilidade. A arte foi produzida separadamente por geração de imagens; música e efeitos sonoros são sintetizados com Web Audio.
  - Recursos: [itch.io](https://mafuta.itch.io/tidehook) · [Trailer de jogabilidade](https://youtu.be/wlEh8gnDOnU) · JavaScript nativo, Canvas 2D, Vite e Web Audio; repositório de código privado. [Verificação e fonte da captura (inglês)](assets/screenshots/tidehook/SOURCE.md)
  - Prévia: ![Captura fornecida pelo criador, versão de 2026-09-11: Mallow rebocando uma carga pesada entre as ilhas de The Old Sound, com distância até o porto e minimapa.](assets/screenshots/tidehook/gameplay.png)

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Decore três casas em 3D, ajuste materiais e iluminação e caminhe por elas; com salvamento local e importação GLB.
  - Criador: [Ryan-fm](https://github.com/Ryan-fm)
  - Plataforma: Navegador de desktop com WebGL; interface em chinês e inglês. Grátis, sem login. Quest físico não testado.
  - Codex: [GitHub](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Desenvolvimento iterativo com Codex documentado; a atribuição exata ao GPT-6 Astra aguarda confirmação do autor.
  - Recursos: [GitHub](https://github.com/Ryan-fm/Dwellcraft)
  - Prévia: ![Dwellcraft](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Xadrez contra o computador em tabuleiro 3D giratório, com personagens em miniatura, histórico e desfazer.
  - Criador: [에코_eco](https://x.com/echo3042)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Prévia: ![Little Kingdom Chess / 작은 왕국 체스 — Captura do jogo](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Monte um veículo sem motor com sucata e desça a ladeira; começa numa oficina em primeira pessoa.
  - Criador: [TheLabGuy](https://x.com/hermesailab)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/junk-run/SOURCE.md).
  - Prévia: ![JUNK RUN — Captura do jogo](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — Jogo de estratégia em tabuleiro hexagonal contra o computador: posicione agentes ocultos, blefe e cerque grupos inimigos para encadear capturas.
  - Criador: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Plataforma: Navegador, interface em inglês; primeira jogada e resposta do computador verificadas sem login ou pagamento.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — O autor afirma que Astra transformou seu projeto em uma demo jogável de uma só vez; o desenvolvimento não foi auditado de forma independente.
  - Prévia: ![Spy or Lie — Captura do jogo](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Lidere Wei, Shu ou Wu em uma campanha por turnos por 15 cidades: administre ouro e grãos, comande um elenco de 108 oficiais com retratos individuais gerados por IA e dispute a unificação do território contra facções controladas pela IA.
  - Criador: [MartinDelophy](https://github.com/MartinDelophy) (idealizador do projeto e responsável pelo envio).
  - Plataforma: Navegador moderno; interface em chinês e controles de mouse e toque. Grátis, sem login ou chave de API; os jogos salvos localmente podem ser importados e exportados.
  - GPT-6 Astra: [Registro de criação](works/three-kingdoms/CREATION.md) — Uso confirmado pelo criador: colaboração iterativa no Codex para regras, interface, IA, balanceamento e testes; o terreno e os retratos dos oficiais foram criados com ferramentas de geração de imagens.
  - Recursos: [Código-fonte e instruções de execução](works/three-kingdoms/README.md) · [Requisitos](works/three-kingdoms/PROMPTS.md) · Tecnologias: React, TypeScript, Vinext/Vite.
  - Prévia: ![Partida de Three Kingdoms com mapa de cidades em estilo de pintura a tinta, controles de recursos e retratos de oficiais.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Conecte uma rede elétrica em uma ilha em miniatura, construa e melhore torres e administre a potência limitada para defender um farol contra dez ondas e um chefe final.
  - Criador: [stackloomdev](https://github.com/stackloomdev)
  - Plataforma: Navegadores modernos de computador e celular, com suporte a chinês e inglês; grátis, sem login ou chave de API. O som opcional exige Web Audio.
  - GPT-6 Astra: [Diário de desenvolvimento e contribuição do modelo](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Usado no design do jogo, no código, na arte procedural e nos testes ao longo de várias iterações; não foi um teste de geração única.
  - Recursos: [Código-fonte e instruções de execução](https://github.com/stackloomdev/last-beacon) · [Requisitos e notas das iterações](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Tecnologias: JavaScript, Canvas 2D, Web Audio.
  - Prévia: ![Last Beacon em inglês: torres, morteiros e uma torre de gelo conectados à rede elétrica defendem a ilha de inimigos no caminho costeiro.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — Simulação de sobrevivência numa colônia subterrânea: comande três habitantes, escave e construa enquanto gerencia oxigênio, comida e energia.
  - Criador: dudu
  - Plataforma: Navegador com Canvas, interface em chinês, mouse e teclado; início verificado sem login ou pagamento.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — O responsável pela submissão relata desenvolvimento integral com GPT-6 Astra; não verificado de forma independente.
  - Prévia: ![缺氧 · 小小星球 — Captura do jogo](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — Aventura numa torre em pixel art de quinze andares, com cálculos de ataque e defesa, recursos limitados e chaves de três cores.
  - Criador: yw
  - Plataforma: Navegador, interface em chinês; início verificado sem login ou pagamento.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — O responsável pela submissão fornece o prompt na seção GPT-6 Astra; a contribuição exata do modelo não foi verificada independentemente.
  - Prévia: ![魔塔 · 永夜之阶 — Captura do jogo](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — Jogo de sobrevivência e estratégia para navegador apresentado como uma recriação de Don't Starve. A captura enviada mostra exploração da floresta, coleta de recursos, inventário e indicadores de saúde, fome e sanidade.
  - Criador: dudu
  - Plataforma: Navegador; a captura mostra interface em chinês e controles de teclado. Os requisitos de pagamento e login não foram informados; demonstração não verificada de forma independente.
  - GPT-6 Astra: [Declaração de quem enviou o jogo](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — A pessoa que enviou o jogo atribui todo o desenvolvimento a GPT-6 Astra.
  - Recursos: Não foram fornecidos código-fonte público nem um registro de desenvolvimento separado.
  - Prévia: ![Captura de 永恒荒野 fornecida na Issue #26: um personagem junto à fogueira na floresta, com inventário, indicadores de sobrevivência e minimapa.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — Uma recriação de Dave the Diver para navegador que combina pesca submarina com arpão, gestão de um restaurante de sushi e cultivo em uma ilha.
  - Criador: dudu
  - Plataforma: Navegador; interface em chinês e controles por mouse e teclado. O acesso e o início de um mergulho foram verificados sem login ou pagamento.
  - GPT-6 Astra: [Declaração de quem enviou o jogo](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — A pessoa que enviou o jogo atribui todo o desenvolvimento a GPT-6 Astra.
  - Recursos: Não foram fornecidos código-fonte público nem um registro de desenvolvimento separado.
  - Prévia: ![Recriação de Dave the Diver em ação: um mergulhador entre peixes, com indicadores de oxigênio e profundidade e inventário de capturas.](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — Roguelike de cartas sobre startups: recrute uma equipe e enfrente imitadores, bugs e contas de nuvem.
  - Criador: [Peter Yang](https://x.com/petergyang)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/no-moat/SOURCE.md).
  - Prévia: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Construa uma vila medieval em 3D detalhada com estradas, trabalhadores e cadeias de produção.
  - Criador: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/the-free-game/SOURCE.md).
  - Recursos: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Prévia: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Reúna financiamento e GPUs, construa centros de dados e exércitos e vença laboratórios rivais na corrida à ASI ou destrua suas sedes.
  - Criador: [timour kosters](https://x.com/timourxyz)
  - Plataforma: Navegador de computador; estratégia em tempo real satírica e gratuita. Início contra o computador e coleta de recursos verificados sem login.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — O criador afirma ter desenvolvido este jogo inspirado em Age of Empires com Astra em dois dias. [Notas de verificação](assets/screenshots/agi-of-empires/SOURCE.md).
  - Prévia: ![Campo de batalha de AGI of Empires, contadores de recursos e sede.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Jogue go em redes de ruas e tabuleiros de grafos incomuns, com turnos locais no mesmo aparelho e opções de partidas com amigos.
  - Criador: [Boris Power](https://x.com/BorisMPower)
  - Plataforma: Navegador; tabuleiro local aberto sem login. Partidas online com amigos não foram testadas.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — O criador descreve este go multijogador em grafos arbitrários como uma criação do Astra com um único prompt. [Notas de verificação](assets/screenshots/atlas-go/SOURCE.md).
  - Prévia: ![Pedras pretas e brancas no grafo em colmeia de Atlas Go.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Colete matérias-primas, alimente máquinas e conecte esteiras para transformar uma clareira em uma fábrica em funcionamento.
  - Criador: [Dan](https://x.com/aidaniil)
  - Plataforma: Navegador de computador; tutorial de visitante sem login, mas salvar o progresso exige login. Multijogador não testado de forma independente.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — O criador afirma que ele e o irmão construíram o jogo com Astra, Blender MCP e Cloudflare Durable Objects, inspirados em Satisfactory e Besiege. [Notas de verificação](assets/screenshots/ironwood/SOURCE.md).
  - Prévia: ![Máquinas, esteiras e tutorial de gestão de recursos de Ironwood.](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — RTS para um jogador com construção de base, captura de pontos e comando de forças terrestres e aéreas.
  - Criador: [Mustafa Akın](https://x.com/mustafaakin)
  - Plataforma: Navegador desktop; teclado e mouse, sem login obrigatório.
  - GPT-6 Astra: [Notas de verificação](assets/screenshots/dust-front/SOURCE.md) — A publicação fornecida de Mustafa Akın informa ChatGPT Astra e Blender MCP, com cerca de 40 prompts incluindo a criação dos recursos.
  - Prévia: ![DUST FRONT: RTS para um jogador com construção de base, captura de pontos e comando de forças terrestres e aéreas.](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Construa uma base, dispute áreas de recursos e comande tanques, infantaria, aviões e drones contra exércitos de IA em um jogo de estratégia em tempo real de guerra moderna, usando espiões e inteligência para obter vantagem.
  - Criador: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Plataforma: Navegador de computador, interface em chinês, mouse e teclado; uma partida solo foi iniciada sem login, pagamento ou instalação.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — Na publicação vinculada, o criador afirma ter usado “GPT Astra” para criar este jogo de estratégia em tempo real; a versão exata do modelo e o processo detalhado de desenvolvimento não são especificados.
  - Referências: [Submissão](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Notas de verificação (inglês)](assets/screenshots/frontline-command/SOURCE.md)
  - Prévia: ![Frontline Command: base, três tanques selecionados e posicionamento de uma usina durante uma partida; v0.8, capturada em 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — Mire num empurrador de moedas 3D, combine moedas especiais e relíquias e vença seis rodadas com lançamentos limitados e metas de pontuação.
  - Criador: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plataforma: Navegador; clique em Play, grátis e sem login. Salvamento com conta opcional.
  - GPT-6 Astra: [Página do criador](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — O criador credita GPT-6 Astra junto com GPT-5.6 Sol e Codex; a página não separa suas contribuições. [Notas de verificação](assets/screenshots/mintfall/SOURCE.md).
  - Prévia: ![Bandeja 3D de Mintfall na rodada 1, com 33 pontos, 44 lançamentos e controles de moedas especiais.](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — Guie uma caravana para o oeste, racione comida, cuide de reparos e caça e tome decisões ao longo da Trilha do Oregon.
  - Criador: [Biswas](https://x.com/bis_waz)
  - Plataforma: Navegador de computador; comece com o grupo fictício fornecido, sem login ou instalação.
  - GPT-6 Astra: [X](https://x.com/bis_waz/status/2098023593468907747) — Biswas afirma ter usado GPT-6 Astra para esta versão moderna 3D de The Oregon Trail e fornece o link jogável. [Notas de verificação](assets/screenshots/westward/SOURCE.md).
  - Prévia: ![Carroça e bois a caminho do rio Kansas, com 25 milhas percorridas e painel de suprimentos.](assets/screenshots/westward/gameplay.jpg)

<a id="rpg-adventures"></a>

### RPG e aventura

RPG, exploração, aventuras narrativas e histórias interativas.

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — Explore um RPG de ação com visual voxel, enfrente Hollowborn com Spark Bolt e Sunburst, escape com teletransporte e desperte o portal solar.
  - Criador: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - Plataforma: Navegador desktop; teclado e mouse, sem login obrigatório.
  - GPT-6 Astra: Uso não confirmado neste jogo: a resposta fornecida do criador permite a inclusão, mas não identifica o modelo nem sua função. [Notas de verificação](assets/screenshots/the-sunshard/SOURCE.md).
  - Prévia: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — Aventura multijogador retrô com mundo compartilhado, habilidades, coleta e combate; permite entrar como visitante.
  - Criador: [Rohan Varma](https://x.com/TheRohanVarma)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/lumbridge/SOURCE.md).
  - Prévia: ![Lumbridge / Elderwood Realms — Captura do jogo](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — Uma aventura atmosférica de apontar e clicar, com quatro capítulos e treze quebra-cabeças: compare o Presente com seu Eco, reúna evidências e desvende o mistério de um observatório parado às 00:17.
  - Criador: [stackloomdev](https://github.com/stackloomdev)
  - Plataforma: Navegadores de computador e celular; chinês e inglês. Jogue gratuitamente online, sem login, instalação ou chave de API. Efeitos WebGL opcionais, com as ilustrações originais como alternativa.
  - GPT-6 Astra: [Registro de desenvolvimento](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Trabalho iterativo no Codex na história, nos quebra-cabeças, nos textos bilíngues, no código, nos efeitos 3D procedurais e nos testes.
  - Recursos: [Código e instruções de execução](https://github.com/stackloomdev/silent-meridian) · [Origem da arte](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Tecnologias: JavaScript, WebGL, Web Audio.
  - Prévia: ![Silent Meridian em execução: observatório com mecanismo 3D de latão, marcadores de pistas, controles Presente/Eco e diário de investigação.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — RPG de ação inspirado em Legend, com guerreiro, mago e taoísta, equipamentos, masmorras e combate automático.
  - Criador: [知识猫AI实验室](https://x.com/GeekCatX)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/mir176/SOURCE.md).
  - Prévia: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Adaptação 3D não oficial de Zork com exploração em primeira pessoa, enigmas, combate e diário.
  - Criador: [Ethan Mollick](https://x.com/emollick)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/zork/SOURCE.md).
  - Prévia: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Explore Springfield a pé e de carro numa recriação não oficial para navegador, com missões, trânsito e perseguições policiais.
  - Criador: [Dwayne](https://x.com/CtrlAltDwayne)
  - Plataforma: Navegador de computador; primeira missão carregada sem login após uma carga inicial grande de recursos. A campanha completa não foi testada.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — O criador descreve a reconstrução para a web com GPT-6 Astra; o repositório também credita ajuda do Claude no carregamento. Os recursos do jogo original mantêm seus próprios direitos. [Notas de verificação](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Recursos: [Código e configuração](https://github.com/Vheissu/hit-and-run-web)
  - Prévia: ![Homer em Springfield, com objetivo da primeira missão e minimapa.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Passeie por um vale ensolarado em 2.5D, siga trilhas e encontre três cartas do vento numa aventura tranquila de exploração.
  - Criador: [Tushar](https://x.com/TusharXo)
  - Plataforma: Navegador, hospedado no Crayon; página pública e player incorporado verificados.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar descreve Astra gerando caminhos e recursos; uma publicação posterior anuncia a versão jogável com Astra, Three.js e Crayon. [Notas de verificação](assets/screenshots/crayon-adventure/SOURCE.md).
  - Recursos: [Anúncio de lançamento do criador](https://x.com/TusharXo/status/2096741535891251261)
  - Prévia: ![Personagem explorando um vale florido, com objetivo das cartas do vento visível.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Investigue Blackthorn Manor num mistério de assassinato point-and-click, examinando cenas e seguindo pistas para identificar o culpado.
  - Criador: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Plataforma: Navegador; entrada interativa da mansão aberta sem login. Cenas geradas posteriores não foram testadas por completo.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — O criador credita GPT Astra e H3 Max pelo jogo de investigação generativo. [Notas de verificação](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Prévia: ![Entrada da mansão com porta clicável e texto inicial da investigação.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Explore ilhas flutuantes, pule e plane entre comunidades e cumpra missões para os moradores.
  - Criador: [timour kosters](https://x.com/timourxyz)
  - Plataforma: Navegador de computador, teclado e mouse; página e controles da edição com missões verificados.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — O criador afirma que Astra construiu um jogo 3D jogável com NPCs e missões inspirados em locais de Edge City. [Notas de verificação](assets/screenshots/skyward-gathering/SOURCE.md).
  - Prévia: ![Visão das ilhas flutuantes de Skyward com exploração e diário.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Alterne entre a magia musical de Anna e os superpoderes de Leo para despertar flores melódicas e explorar Wonder Garden.
  - Criador: [Dharma Utomo](https://x.com/dharmautomo)
  - Plataforma: Navegador; missão inicial iniciada sem login. WASD para mover, Espaço para pular, E para poder e Tab para trocar de herói.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — O criador afirma que GPT-6 Astra ajudou a construir a aventura 3D e compartilha um vídeo dos filhos testando o jogo. [Notas de verificação](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Prévia: ![Mundo de aventura 3D de Anna e Leo com interface de missões.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — Explore Rainmist Haven e avance rumo às masmorras com combos de espada, habilidades elementais e movimentos evasivos.
  - Criador: [UModeler X PicoBerry](https://x.com/UModeler)
  - Plataforma: Navegador de computador; teclado e mouse, sem login. Aguarde o carregamento inicial dos recursos 3D.
  - GPT-6 Astra: [Declaração do criador](https://x.com/UModeler/status/2097792348407099553) — O criador afirma que PicoBerry gerou os recursos e GPT-6 Astra construiu o RPG de ação em Three.js ao redor deles. [Notas de verificação](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - Recursos: [Link de lançamento do criador](https://x.com/UModeler/status/2097792351129178451)
  - Prévia: ![Deller esquivando perto de uma fonte e barracas em Rainmist Haven, com vida, mana e habilidades.](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — Recrute um grupo, desça uma masmorra de cem andares e combine golpes de espada, bolas de fogo e funções dos companheiros numa partida com morte permanente.
  - Criador: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - Plataforma: Navegador de computador no Wavedash; jogo base inicia sem login. Há contas opcionais e desbloqueios antecipados pagos de personagens.
  - GPT-6 Astra: [Declaração do criador](https://x.com/tonysurix/status/2097873333551616355) — O criador afirma explicitamente que este explorador de masmorras em grupo foi criado com GPT-6 Astra. [Notas de verificação](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - Prévia: ![Herói e cavaleiro contratado lançando uma bola de fogo no primeiro andar, com vida do grupo e minimapa.](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — Explore uma ilha após um naufrágio, investigue pistas em primeira pessoa e resolva enigmas ambientais no caminho até o farol.
  - Criador: [Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - Plataforma: Navegador de computador; aguarde a ilha e clique em Begin expedition. Grátis, sem conta ou instalação.
  - GPT-6 Astra: [Diário de desenvolvimento do criador](https://smallweblab.com/posts/sunlandia/) — O criador começou com GPT-5.6 Sol, contou com ajuda de Fable e terminou o jogo com GPT-6 Astra. [Notas de verificação](assets/screenshots/sunlandia/SOURCE.md).
  - Prévia: ![Costa de Sunlandia em primeira pessoa, com naufrágio, cais quebrado e objetivo de procurar ajuda.](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — Faça um organismo microscópico crescer dentro de uma concha de caracol inundada, reúna nutrientes e desenvolva novas partes do corpo ao explorar.
  - Criador: [Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - Plataforma: Navegador; beta gratuita sem login, com cinco idiomas de interface, incluindo chinês.
  - GPT-6 Astra: [Publicação do criador](https://x.com/Preda2005/status/2097954217180921928) — Marcio afirma que descreveu a ideia de evolução do organismo ao GPT-6 Astra e a desenvolveu até a beta vinculada. [Notas de verificação](assets/screenshots/nacar/SOURCE.md).
  - Prévia: ![Pequena célula entre nutrientes coloridos, com biomassa, evolução, inventário e acompanhamento das águas exploradas.](assets/screenshots/nacar/gameplay.jpg)

<a id="platformers-racing"></a>

### Plataforma e corrida

Parkour, desafios de plataforma, corridas e jogos baseados em movimento e trajetos.

- **[Barrelbound: The Lost Cargo](https://barrelbound.vercel.app/)** — Escolha Rocco ou Pip para três fases de plataforma na selva: use salto duplo, arremesse barris e ande de vagoneta para recuperar a carga perdida e chegar ao chefe final.
  - Criador: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Plataforma: Navegador de computador ou notebook, interface em inglês; grátis, sem login ou instalação. Comandos de teclado; suporte a controle informado pelo criador.
  - GPT-6 Astra: [Declaração do criador](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73) — O criador usou GPT-6 Astra no Codex para implementação, mecânicas, iterações e testes, assumindo pessoalmente a direção e os testes de jogabilidade. A arte foi produzida separadamente por geração de imagens; música e efeitos sonoros são sintetizados com Web Audio.
  - Recursos: [itch.io](https://mafuta.itch.io/barrelbound) · [Trailer de jogabilidade](https://youtu.be/X87UqF_n3ro) · Phaser 3, Vite e Web Audio; repositório de código privado. [Verificação e fonte da captura (inglês)](assets/screenshots/barrelbound/SOURCE.md)
  - Prévia: ![Captura fornecida pelo criador, versão de setembro de 2026: Rocco, barris e trilhas de bananas nas plataformas de madeira de Jungle Dock Dash.](assets/screenshots/barrelbound/gameplay.jpg)

- **[STORM RACE](https://storm-race.vercel.app/)** — Corridas de mini 4×4 com garagem de peças em vista explodida, turbo e pistas com sol, chuva e tempestade.
  - Criador: [BubuAi](https://x.com/BubuStd)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/storm-race/SOURCE.md).
  - Prévia: ![STORM RACE — Captura do jogo](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Um lobo atravessa três fases ao luar, coletando moedas e fragmentos de estrelas com salto duplo e arrancada.
  - Criador: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Prévia: ![FANG STARLIGHT RUN — Captura do jogo](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Pilote um Bajaj de três rodas em um circuito inspirado nos planaltos etíopes contra cinco rivais de IA ou o relógio.
  - Criador: [Guzo Technologies](https://x.com/guzotech)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Prévia: ![Blue Bajaj Rally — Captura do jogo](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Dispute três voltas no Bay Circuit, escolha entre seis karts e carregue miniturbos para a saída das curvas, buscando uma posição melhor na classificação individual ou pontos em equipes de 4 contra 4.
  - Criador: Ryan
  - Plataforma: Navegador de computador com WebGL 2 e teclado; grátis, sem login ou chave de API. Executado em servidor HTTP local ou hospedagem estática; Three.js está incluído localmente. As corridas em equipe são locais: uma pessoa e sete pilotos de IA.
  - Participação do modelo: [Registro de desenvolvimento](works/apex-club/CREATION.md) — Trabalho iterativo no Codex sobre jogabilidade, código, visuais procedurais e testes; a atribuição a GPT-6 Astra aguarda confirmação do criador.
  - Recursos: [Código-fonte e instruções de execução](works/apex-club/README.md) · [Requisitos e notas das iterações](works/apex-club/PROMPTS.md) · [Conversa GPT compartilhada](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Tecnologias: JavaScript, Three.js.
  - Prévia: ![Corrida em equipe de APEX CLUB no Bay Circuit com karts próximos, progresso das voltas, pontos das equipes em tempo real e um minimapa.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Pedale com um pelicano por uma costa 3D em transformação: alterne entre três faixas, pule ou se abaixe para desviar de obstáculos, faça combos de peixes e use escudos, ímãs e uma arrancada invencível de seis segundos.
  - Criador: [chat01.ai](https://chat01.ai) (conforme informado no envio).
  - Plataforma: Navegadores de computador e celular, com teclado ou controles por toque; gratuito e sem login segundo o envio. A demonstração não foi verificada de forma independente.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — A pessoa que enviou o jogo afirma que ele foi gerado com um único prompt; o registro de desenvolvimento vinculado não foi verificado de forma independente.
  - Recursos: [Registro de desenvolvimento compartilhado](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Prévia: ![Tela de título de PELICAN PEDAL com um pelicano de bicicleta à beira-mar; captura fornecida na Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — Corridas 3D contra cinco rivais de IA, com seleção de carros e pistas, provas de tempo, drift e nitro.
  - Criador: zding
  - Plataforma: Navegador, interface em chinês; início verificado sem login ou pagamento.
  - GPT-6 Astra: O uso de GPT-6 Astra e seu papel aguardam confirmação do criador.
  - Prévia: ![狂飙赛车 · OVERDRIVE — Captura do jogo](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Desça por um poço em 3D movendo-se para os lados entre plataformas móveis, frágeis e intermitentes; desvie de lasers e serras e colete cristais e chips de sobrevivência.
  - Criador: [chat01.ai](https://linux.do/u/bandaot)
  - Plataforma: Navegador de computador, interface chinesa, A/D ou setas. Início verificado sem conta ou pagamento; celular não testado.
  - Codex: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — O registro compartilhado indica GPT-6 Pro e documenta a geração do jogo e revisões sucessivas; não identifica explicitamente GPT-6 Astra.
  - Recursos: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Prévia: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Dispute três voltas com derrapagens, nitro e itens; o título atual é 疾风赛道 e oferece modo online para 2–4 jogadores.
  - Criador: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Plataforma: Navegador, gratuito, sem conta. O criador informa que VPN/proxy pode ser necessário. Início solo verificado; multijogador não testado.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — Segundo o criador: Primeira versão com Qwen3.8 Max; segunda totalmente reconstruída com Astra.
  - Prévia: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Derrape num circuito tropical de kart, use itens e dispute três voltas contra sete rivais.
  - Criador: [Pietro Schirano](https://x.com/skirano)
  - Plataforma: Navegador; corrida de três voltas iniciada sem login. Teclado para dirigir, derrapar e usar itens, além de botões de toque na tela.
  - GPT-6 Astra: [Atribuição do modelo](https://openai.com/index/gpt-6-astra/) — A página de lançamento do Astra da OpenAI vincula este kart interativo e credita Pietro Schirano. A publicação de descoberta no X é da comunidade, não do criador. [Notas de verificação](assets/screenshots/tidal-rush/SOURCE.md).
  - Recursos: [Descoberta no X](https://x.com/alexgetmancom/status/2095598460921614825)
  - Prévia: ![Pista tropical de Tidal Rush, com posição na corrida e controles de derrapagem.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Pule por um cenário gótico em pixel art, corte ou pise nos inimigos ou invoque um ataque numa curta aventura de rolagem lateral.
  - Criador: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Plataforma: Navegador, interface japonesa; teclado e suporte a smartphones informado pelo criador. Uma fase disponível.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — O criador relata cerca de 25 minutos de desenvolvimento com Astra e uma correção da animação de caminhada; a música é creditada separadamente ao Suno. [Notas de verificação](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Prévia: ![LUNA lutando numa rua gótica sob uma lua vermelha, com vida e medidor de invocação.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Corra com ciclistas astronautas pelos anéis de um planeta, colete poeira estelar, pegue o vácuo dos rivais e use impulso na Orbital Cup.
  - Criador: [Crayon](https://x.com/usecrayon)
  - Plataforma: Navegador no Crayon; teclado e controles de toque documentados. A página pública oferece corrida, contrarrelógio e passeio infinito.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon credita GPT-6 Astra, Crayon Pro e Three.js pelo jogo de ciclismo espacial. [Notas de verificação](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Prévia: ![Ciclistas astronautas num anel planetário, com voltas, posição e poeira estelar.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Corra, pule e balance por quatro fases de selva, colete tesouros e evite crocodilos enquanto melhora seu tempo.
  - Criador: [Ben Nash](https://x.com/bennash)
  - Plataforma: Navegador, teclado e controles na tela; fase inicial e instruções carregadas sem login.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — O criador o descreve explicitamente como um jogo de quatro fases inspirado em Pitfall e feito com GPT-6 Astra. [Notas de verificação](assets/screenshots/one-more-vine/SOURCE.md).
  - Prévia: ![Fase de plataforma na selva com cipós, tesouros, buracos e crocodilos.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Explore o mundo subterrâneo 1-2 de Mario com Ryu Hayabusa de Ninja Gaiden e o tanque de Battle City: saltos, escalada de paredes e combates em visão lateral com Ryu, batalhas em visão superior com o tanque ou um revezamento de ninja para tanque para resgatar a princesa.
  - Criador: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Plataforma: Navegador de computador, interface em chinês, teclado recomendado; grátis, sem login ou instalação.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — O criador relata ter usado GPT-6 Astra para desenvolver e depurar o código e as interações de forma iterativa, fornecendo a direção do jogo e comentários ao longo do processo; não foi uma geração com um único prompt.
  - Recursos: [Apresentação do projeto](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Vídeo](https://www.bilibili.com/video/BV1erYt69EFP/) · [Verificação e fontes das imagens (inglês)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Direitos: Jogo de fã não oficial; os personagens, imagens e músicas clássicos mantêm os direitos de seus respectivos titulares. Veja os créditos dos materiais na página do jogo original.
  - Prévia: ![Mario Mix II — capa de vídeo fornecida pelo criador, não uma captura de uma partida.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Captura de tela: ![O tanque de Mario Mix II dispara na entrada do mundo 1-2; versão 1.0 em execução, capturada em 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — Corra no trânsito de Bengaluru, desvie de buracos e motos de entrega e use impulso ou uma manobra lateral para abrir espaço.
  - Criador: [Ravi Theja](https://x.com/ravithejads)
  - Plataforma: Navegador de computador; teclado com aceleração automática opcional, sem login.
  - GPT-6 Astra: [Declaração do criador](https://x.com/ravithejads/status/2097181044625887392) — O criador atribui o jogo de corrida nas ruas de Bengaluru ao GPT-6 Astra. [Notas de verificação](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - Prévia: ![Carro azul do jogador no trânsito de Bengaluru, com posição, velocidade, cronômetro e controles.](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS — Alpine Downhill](https://iamsonic.net/2026/mini-games/skicross.html)** — Dispute uma descida de montanha contra três esquiadores, passe por portões e obstáculos e fique à frente da avalanche.
  - Criador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador de computador; A/D para virar, Espaço para pular e Shift para impulsionar; sem login nem download.
  - GPT-6 Astra: [Declaração do criador](https://x.com/sonic0828/status/2097601232877781344) — O criador atribui a coleção de minijogos ao GPT-6 Astra e apresenta este jogo de esqui em uma resposta dedicada. [Notas de verificação](assets/screenshots/skicross/SOURCE.md).
  - Recursos: [Link de lançamento do criador](https://x.com/sonic0828/status/2097601732297814300)
  - Prévia: ![Quatro esquiadores na neve, com bônus de portão, classificação, velocidade e distância da avalanche.](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — Suba uma parede coberta de musgo, capture moscas para recuperar a aderência e esconda-se em buracos de abrigo antes que a chuva carregue a aranha.
  - Criador: [Luiz Piccini](https://piccini.app/)
  - Plataforma: Navegador; grátis, sem login. WASD ou joystick na tela.
  - GPT-6 Astra: [Game Bench do criador](https://game-bench.piccini.app/) — Game Bench identifica esta criação publicada como GPT-6 Astra canary, high, datada de 2026-09-05 e feita a partir de sua proposta compartilhada de jogo. [Notas de verificação](assets/screenshots/itsy-bitsy-spider/SOURCE.md).
  - Prévia: ![Aranha a dois metros numa parede de tijolos com musgo, com aderência, moscas, abrigo e joystick.](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — Corra de moto pelo trânsito urbano da Índia, costure entre ônibus e riquixás e use chutes, socos e impulsos.
  - Criador: [Kishore](https://x.com/GetKishore)
  - Plataforma: Navegador de computador; grátis, sem conta. Aceite ou edite o apelido gerado antes da primeira corrida.
  - GPT-6 Astra: [Relato de desenvolvimento do criador](https://x.com/GetKishore/status/2097906401159102811) — Kishore descreve iterações do jogo 3D feito com Astra usando referências de ruas e testes repetidos de trânsito, colisões e combate entre pilotos. [Notas de verificação](assets/screenshots/desi-mayhem/SOURCE.md).
  - Prévia: ![Corrida de motos em Chennai com piloto, trânsito, minimapa, posição e cronômetro.](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — Pilote uma nave por um oceano galáctico, siga portões luminosos e escolha uma corrida de duas voltas ou uma deriva infinita.
  - Criador: [Aniket J](https://x.com/aniketjart)
  - Plataforma: Navegador; aguarde os recursos 3D e clique em Ride the current. Grátis, sem login.
  - GPT-6 Astra: [X](https://x.com/aniketjart/status/2098207146647433534) — Aniket credita GPT-6 Astra, Blender MCP e Crayon; descreve um experimento com novas iterações de jogabilidade planejadas. [Notas de verificação](assets/screenshots/cosmic-tides/SOURCE.md).
  - Prévia: ![Corrida de Cosmic Tides rumo a um portão luminoso sobre um mar galáctico, com voltas e velocidade.](assets/screenshots/cosmic-tides/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### Experimentais e multijogador

Mecânicas diferentes, competição online e experiências cooperativas.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Seis jogos de navegador, incluindo rali de montanha, snowboard e corrida antigravidade; contabilizados como uma coleção.
  - Criador: [Antonio Leiva](https://x.com/antonioleivag)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/astra-arcade/SOURCE.md).
  - Prévia: ![ASTRA Arcade — Captura do jogo](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — Jogo de fãs multijogador não oficial de Chao Garden: escolha um personagem Sonic e interaja com os Chao no jardim.
  - Criador: [Hank](https://x.com/h4nkdog)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/chao-party/SOURCE.md).
  - Prévia: ![Chao Party — Captura do jogo](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — Um ambiente interativo de arte com partículas: transforme 48.000 pontos de luz em uma flor, um anel gravitacional ou uma galáxia, altere a escultura e exporte um momento como pôster.
  - Criador: [jackroc](https://github.com/jackroc)
  - Plataforma: Navegador moderno com WebGL; clique no título para experimentar online. Grátis, sem login ou chave de API; o HTML independente também funciona offline. O som ambiente opcional exige Web Audio.
  - GPT-6 Astra: [Registro de criação e contribuição do modelo](works/orbital-garden/README.md#模型与创作记录) — O criador usou GPT-6 Astra ultra para o conceito, o código e os textos, com revisão colaborativa; não foi um teste de geração única.
  - Recursos: [Código-fonte e instruções de execução](works/orbital-garden/README.md) · [HTML independente](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Tecnologias: WebGL nativo, Web Audio, Canvas 2D.
  - Prévia: ![Flor de partículas verde-menta de Orbital Garden, com seleção de forma, ajustes de vitalidade e velocidade do tempo, e exportação como pôster.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Quatro adaptações 3D de brinquedos de mesa: quebre o gelo sob um pinguim, guie coelhos por armadilhas, equilibre astronautas em uma plataforma e resolva quebra-cabeças de estacionamento.
  - Criador: [asmoyou](https://github.com/asmoyou)
  - Plataforma: Navegadores de computador, tablet e celular; gratuito, sem login. Jogo local por turnos na mesma tela para 2–4 participantes, incluindo adversários controlados pelo computador, além de desafios individuais; sem multijogador on-line. Demonstração não verificada de forma independente.
  - GPT-6 Astra: [Relato do criador](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — O criador afirma que GPT-6 Astra implementou os jogos e realizou os testes de forma autônoma a partir de descrições dos brinquedos e requisitos de funcionalidades.
  - Recursos: [Código-fonte e instruções de execução](https://github.com/asmoyou/toy2game) · [Licença não comercial](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Código disponível; uso não comercial gratuito e uso comercial sujeito à autorização prévia por escrito do autor. Tecnologias: TypeScript, React, Vite, Three.js.
  - Prévia: ![Visão geral do Toy2Game com quatro cenas 3D reais: gelo do pinguim, armadilhas dos coelhos, equilíbrio dos astronautas e saída do estacionamento. Imagem fornecida por asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — Um playground de física sobre uma mesa ensolarada: faça uma gelatina pular e esticar, com balanço e trampolim.
  - Criador: [Scott](https://x.com/scottstts)
  - Plataforma: Navegador de desktop; aberto sem login ou pagamento. Celular não testado.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — O autor informa ter usado Astra no desenvolvimento deste projeto. [Notas de verificação (inglês)](assets/screenshots/jelly-baby/SOURCE.md).
  - Recursos: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Prévia: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Defenda um núcleo arco-íris com projéteis que ricocheteiam e melhorias, em modo solo, cooperativo local ou combate online.
  - Criador: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Plataforma: Navegador, gratuito, sem conta. O criador informa que VPN/proxy pode ser necessário. Início solo verificado; multijogador não testado.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — Segundo o criador: Primeira versão com GPT-6 Astra Pro; melhorias com GPT-6 Astra no Codex.
  - Prévia: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — Pinte uma pipa e voe sobre os telhados, equilibrando a tensão da linha em voo livre ou num desafio cronometrado de luzes no céu.
  - Criador: [Tushar / @TusharXo](https://x.com/TusharXo)
  - Plataforma: Navegador; escolha um personagem, entre no terraço e selecione Fly. Grátis, sem login.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2098156783181467801) — Tushar credita explicitamente GPT-6 Astra e Crayon pelo jogo de pipas em Three.js e cita Images 2.5 para os visuais. [Notas de verificação](assets/screenshots/above-the-rooftops/SOURCE.md).
  - Prévia: ![Desafio de pipa sobre a cidade, com altura, tensão da linha, progresso das luzes e direção.](assets/screenshots/above-the-rooftops/gameplay.jpg)

## O que cada entrada inclui

Uma recomendação útil explica qual é a proposta do jogo, onde experimentá-lo e por que ele está nesta lista.

| Informação | O que incluir |
| --- | --- |
| Jogo e criador | O título do jogo e um link para o criador ou a equipe original |
| O que o torna interessante | Uma frase sobre a mecânica principal, sem texto promocional vazio |
| Acesso | Um link para jogar no navegador sem download, instalação, configuração local ou login |
| Captura de tela do jogo | Pelo menos uma captura real do jogo com uma URL de imagem acessível publicamente |
| Plataforma e requisitos | Navegador / computador / celular; informe exigências de pagamento, login ou hardware especial |
| Papel do Astra | Relato do criador, diário de desenvolvimento ou registro público explicando a contribuição de GPT-6 Astra |
| Recursos de desenvolvimento | Código-fonte, tecnologias e história da criação, quando disponíveis |

O uso do modelo é atribuído conforme o relato público do criador; alegações sem respaldo não são apresentadas como fatos confirmados. Protótipos jogáveis são bem-vindos e abrir o código é opcional.

## Ajude a manter a lista

[Envie um jogo por uma issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) ou abra uma pull request. Veja o formato das entradas no [guia de contribuição](CONTRIBUTING.md).

[Informe links quebrados ou informações incorretas](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), incluindo erros de autoria ou mudanças nas condições de acesso.

## Licença

Os textos originais da lista e os materiais visuais originais deste repositório são dedicados ao domínio público sob [CC0 1.0](LICENSE). Jogos, códigos, imagens, marcas e outros conteúdos de terceiros vinculados mantêm suas próprias licenças e direitos. A inclusão na lista não altera suas permissões de uso.
