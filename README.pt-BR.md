<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/)

**Uma coleção de jogos interessantes feitos com GPT-6 Astra.**

Ideias divertidas, jogos para experimentar e histórias de desenvolvimento que inspiram os próximos criadores.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · **Português (Brasil)**<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Enviar um jogo](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuir](CONTRIBUTING.md)

</div>

Esta página é uma tradução do [README em inglês](README.md). Consulte o original para conferir as atualizações mais recentes; correções de tradução são bem-vindas.

## Comece por aqui

Explore **12 jogos de navegador e 1 ambiente interativo de arte com partículas**: quebra-cabeças de madeira com encaixes e peças deslizantes, fusão de frutas deformáveis, voo com um toque, combates em tapete mágico, defesa de uma ilha com uma rede elétrica, sobrevivência na natureza, corridas de kart no Bay Circuit, ciclismo pela costa com um pelicano, brinquedos de mesa adaptados para 3D e Orbital Garden. Clique em um título para abrir a demonstração ou o código-fonte com instruções de execução.

Última verificação: **2026-09-05**. Foram conferidos os relatos dos criadores, os links do código-fonte e a disponibilidade das demonstrações. O uso do modelo é informado pelos próprios autores; não foram realizados testes de jogabilidade para esta lista.

- **Procurando algo para jogar?** Explore os gêneros abaixo.
- **Criou um jogo?** [Envie seu projeto](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) com um link para jogar ou acessar o código-fonte, uma captura de tela do jogo e uma descrição de como você usou GPT-6 Astra.
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

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.hp20230404.chatgpt.site)** — Desmonte um quebra-cabeça de madeira de seis peças entrelaçadas e resolva duas configurações de Huarong Dao em uma oficina 3D, com dicas e opção de desfazer movimentos.
  - Criador: [MartinDelophy](https://github.com/MartinDelophy) (idealizador do projeto e responsável pelo envio).
  - Plataforma: Navegador moderno com WebGL 2; interface em chinês e controles de mouse, teclado e toque. Grátis, sem login ou chave de API; o progresso fica no navegador atual.
  - Participação do modelo: [Registro de criação](works/sunjing-puzzles/CREATION.md) — Trabalho iterativo no Codex sobre design do jogo, visuais 3D procedurais, regras, solucionador e testes; o uso específico de GPT-6 Astra aguarda confirmação do criador (envio preliminar).
  - Recursos: [Código-fonte e instruções de execução](works/sunjing-puzzles/README.md) · [Requisitos](works/sunjing-puzzles/PROMPTS.md) · Tecnologias: React, Vinext/Vite, Three.js.
  - Prévia: ![Quebra-cabeça de madeira de seis peças de Sunjing sobre uma bancada 3D verde, com peças numeradas e controles de extração.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

<a id="strategy-simulation"></a>

### Estratégia e simulação

Defesa de torres, cartas estratégicas, gerenciamento, construção e simulação no estilo sandbox.

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

- **[永恒荒野](https://starve.pages.dev/)** — Jogo de sobrevivência e estratégia para navegador apresentado como uma recriação de Don't Starve. A captura enviada mostra exploração da floresta, coleta de recursos, inventário e indicadores de saúde, fome e sanidade.
  - Criador: dudu
  - Plataforma: Navegador; a captura mostra interface em chinês e controles de teclado. Os requisitos de pagamento e login não foram informados; demonstração não verificada de forma independente.
  - GPT-6 Astra: [Declaração de quem enviou o jogo](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — A pessoa que enviou o jogo atribui todo o desenvolvimento a GPT-6 Astra.
  - Recursos: Não foram fornecidos código-fonte público nem um registro de desenvolvimento separado.
  - Prévia: ![Captura de 永恒荒野 fornecida na Issue #26: um personagem junto à fogueira na floresta, com inventário, indicadores de sobrevivência e minimapa.](assets/screenshots/eternal-wilderness/gameplay.jpg)

<a id="rpg-adventures"></a>

### RPG e aventura

RPG, exploração, aventuras narrativas e histórias interativas.

*Aguardando o primeiro jogo.*

<a id="platformers-racing"></a>

### Plataforma e corrida

Parkour, desafios de plataforma, corridas e jogos baseados em movimento e trajetos.

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.mauve-ibex-1793.chatgpt.site)** — Dispute três voltas no Bay Circuit, escolha entre seis karts e carregue miniturbos para a saída das curvas, buscando uma posição melhor na classificação individual ou pontos em equipes de 4 contra 4.
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

<a id="experimental-multiplayer"></a>

### Experimentais e multijogador

Mecânicas diferentes, competição online e experiências cooperativas.

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden.hp20230404.chatgpt.site)** — Um ambiente interativo de arte com partículas: transforme 48.000 pontos de luz em uma flor, um anel gravitacional ou uma galáxia, altere a escultura e exporte um momento como pôster.
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

## O que cada entrada inclui

Uma recomendação útil explica qual é a proposta do jogo, onde experimentá-lo e por que ele está nesta lista.

| Informação | O que incluir |
| --- | --- |
| Jogo e criador | O título do jogo e um link para o criador ou a equipe original |
| O que o torna interessante | Uma frase sobre a mecânica principal, sem texto promocional vazio |
| Acesso | Um link para jogar ou um repositório público de código-fonte com instruções de execução |
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
