<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 43](https://img.shields.io/badge/Cases-43-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Uma coleção de jogos interessantes feitos com GPT-6 Astra.**

Ideias divertidas, jogos para experimentar e histórias de desenvolvimento que inspiram os próximos criadores.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · **Português (Brasil)**<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Enviar um jogo](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuir](CONTRIBUTING.md)

</div>

Esta página é uma tradução do [README em inglês](README.md). Consulte o original para conferir as atualizações mais recentes; correções de tradução são bem-vindas.

## Comece por aqui

Explore **43 jogos e projetos interativos**: estratégia territorial dos Três Reinos, quebra-cabeças de madeira com encaixes e peças deslizantes, fusão de frutas deformáveis, voo com um toque, combates em tapete mágico, defesa de uma ilha com uma rede elétrica, sobrevivência na natureza, pesca submarina, gestão de um restaurante de sushi e cultivo em uma ilha, corridas de kart no Bay Circuit, ciclismo pela costa com um pelicano, brinquedos de mesa adaptados para 3D e Orbital Garden. Clique em um título para jogar diretamente no navegador.

Catálogo atualizado: **2026-09-09**. O uso do modelo é informado com base nas declarações dos criadores ou responsáveis pelas submissões; detalhes não confirmados são sinalizados em cada entrada. Esta data registra a manutenção do catálogo, não um novo teste de todos os jogos.

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

<a id="strategy-simulation"></a>

### Estratégia e simulação

Defesa de torres, cartas estratégicas, gerenciamento, construção e simulação no estilo sandbox.

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

<a id="rpg-adventures"></a>

### RPG e aventura

RPG, exploração, aventuras narrativas e histórias interativas.

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

<a id="platformers-racing"></a>

### Plataforma e corrida

Parkour, desafios de plataforma, corridas e jogos baseados em movimento e trajetos.

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

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Explore o mundo subterrâneo 1-2 de Mario com Ryu Hayabusa de Ninja Gaiden e o tanque de Battle City: saltos, escalada de paredes e combates em visão lateral com Ryu, batalhas em visão superior com o tanque ou um revezamento de ninja para tanque para resgatar a princesa.
  - Criador: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Plataforma: Navegador de computador, interface em chinês, teclado recomendado; grátis, sem login ou instalação.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — O criador relata ter usado GPT-6 Astra para desenvolver e depurar o código e as interações de forma iterativa, fornecendo a direção do jogo e comentários ao longo do processo; não foi uma geração com um único prompt.
  - Recursos: [Apresentação do projeto](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Vídeo](https://www.bilibili.com/video/BV1erYt69EFP/) · [Verificação e fontes das imagens (inglês)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Direitos: Jogo de fã não oficial; os personagens, imagens e músicas clássicos mantêm os direitos de seus respectivos titulares. Veja os créditos dos materiais na página do jogo original.
  - Prévia: ![Mario Mix II — capa de vídeo fornecida pelo criador, não uma captura de uma partida.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Captura de tela: ![O tanque de Mario Mix II dispara na entrada do mundo 1-2; versão 1.0 em execução, capturada em 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

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
