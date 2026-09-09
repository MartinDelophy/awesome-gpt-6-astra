<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 42](https://img.shields.io/badge/Cases-42-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Una colección de juegos interesantes creados con GPT-6 Astra.**

Ideas divertidas, juegos que puedes probar e historias de desarrollo para inspirar a quienes creen el próximo proyecto.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · **Español** · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Proponer un juego](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuir](CONTRIBUTING.md)

</div>

Esta página es una traducción del [README en inglés](README.md). Consulta el original para comprobar las últimas actualizaciones; las correcciones de traducción son bienvenidas.

## Empieza aquí

Explora **42 juegos y proyectos interactivos**: estrategia territorial de los Tres Reinos, rompecabezas de madera entrelazada y de piezas deslizantes, fusión de frutas deformables, vuelo con un solo botón, combates en alfombra mágica, defensa de una isla mediante una red eléctrica, supervivencia en la naturaleza, pesca submarina, gestión de un restaurante de sushi y agricultura en una isla, carreras de karts en Bay Circuit, ciclismo costero con un pelícano, juguetes de mesa adaptados a 3D y Orbital Garden. Haz clic en un título para jugar directamente en el navegador.

Catálogo actualizado: **2026-09-09**. El uso del modelo se documenta según las declaraciones de los creadores o remitentes; los datos sin confirmar se señalan en cada entrada. Esta fecha corresponde al mantenimiento del catálogo, no a una nueva prueba de todos los juegos.

- **¿Buscas algo para jugar?** Explora los géneros de abajo.
- **¿Has creado un juego?** [Envía tu proyecto](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) con un enlace directo al juego en el navegador, una captura del juego y una explicación de cómo utilizaste GPT-6 Astra.
- **¿Has encontrado un gran proyecto?** Recomienda obras públicas de otras personas y menciona a sus creadores.

Esta lista la mantiene la comunidad y no está afiliada a OpenAI. La inclusión es una invitación a explorar, no una prueba de rendimiento ni una recomendación oficial.

## Juegos

- [Acción y arcade](#action-arcade)
- [Puzles e ingenio](#puzzles)
- [Estrategia y simulación](#strategy-simulation)
- [Rol y aventuras](#rpg-adventures)
- [Plataformas y carreras](#platformers-racing)
- [Experimentales y multijugador](#experimental-multiplayer)

<a id="action-arcade"></a>

### Acción y arcade

Juegos de disparos, lucha, supervivencia, ritmo y cualquier propuesta que invite a jugar otra partida.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — Un juego de vuelo en 3D con un solo botón: bate las alas para atravesar huecos y aumentar tu puntuación.
  - Creador: [Ayi1337](https://github.com/Ayi1337)
  - Plataforma: Navegador, diseñado para móviles.
  - GPT-6 Astra: [Pruebas en una sola generación y prompts originales del creador](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Recursos: [Código fuente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [HTML independiente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Vista previa: ![Pantalla de inicio de Mosswing con el personaje volador y los huecos entre pilares de piedra.](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Pilota una alfombra mágica por un mundo esférico, atraviesa aros, lanza hechizos y combate contra enemigos y jefes.
  - Creador: [threapchills](https://github.com/threapchills)
  - Plataforma: Navegador de escritorio con ratón y teclado; requiere WebGL 2.
  - GPT-6 Astra: El creador indica en la [sección About del repositorio](https://github.com/threapchills/MagicCarpetWizard) que el juego se hizo con GPT-6 Astra.
  - Recursos: [Código fuente e instrucciones de ejecución](https://github.com/threapchills/MagicCarpetWizard) · Tecnologías: Three.js, Vite.
  - Vista previa: ![Pantalla de inicio de Magic Carpet Wizard con el jinete de la alfombra, la ciudad y un anillo de vuelo luminoso.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Un juego de disparos con tres cazas, cinco sectores, jefes con varias fases y fuego automático.
  - Creador: [jackroc](https://github.com/jackroc)
  - GPT-6 Astra: [README](works/thunderfall/README.md#创作与许可) — Según el creador, desarrollado con GPT-6 Astra ultra mediante varias iteraciones.
  - [README](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · JavaScript, Canvas 2D, Web Audio.
  - Vista previa: ![THUNDERFALL — Captura del juego](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Defiende una baliza de oleadas de tanques enemigos en seis sectores en 3D, con muros de ladrillo destructibles, un impulso de velocidad y un pulso electromagnético.
  - Creador: [chat01.ai](https://linux.do/u/bandaot)
  - Plataforma: Navegador con WebGL 2 e interfaz en chino; el manual describe controles de teclado, ratón y pantalla táctil. Combate iniciado sin registro ni pago.
  - GPT-6 Astra: El uso de GPT-6 Astra y su papel están pendientes de confirmación del creador.
  - Vista previa: ![IRON BASTION / 钢铁防线 — Captura del juego](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — Juego de lucha de figuras de palitos en desarrollo, con puñetazos, patadas, uppercuts, estrellas ninja y paradas; práctica contra un bot y menús en línea/con amigos.
  - Creador: [Dwayne](https://x.com/CtrlAltDwayne)
  - Plataforma: Navegador de escritorio, teclado; práctica sin iniciar sesión. Multijugador en línea y mando no probados de forma independiente.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — El autor declara que creó este juego de lucha multijugador con GPT-6 Astra y que sigue en desarrollo.
  - Vista previa: ![Stick Fighter — Captura del juego](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — Un FPS de pintura inspirado en Van Gogh, con seis artistas, armas propias y partidas a 20 puntos.
  - Creador: [Peter Gostev](https://x.com/petergostev)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/gogh-strike/SOURCE.md).
  - Vista previa: ![Gogh Strike · Paint Clash — Captura del juego](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Una cabina de disparos estilo Asteroids con cuatro cámaras, radar, cañones dobles y vuelo inercial.
  - Creador: [Eyes Wide Open](https://x.com/DantesClown)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Vista previa: ![ASTEROIDS · Deepfield — Captura del juego](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — FPS táctico en una terminal de carga bajo la lluvia, con rifle detallado, HUD de combate y nueve enemigos.
  - Creador: [hiraeth](https://x.com/WoahWurdz)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/blackwater/SOURCE.md).
  - Recursos: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Vista previa: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — Arena de duelos fantásticos con cuatro héroes, seis habilidades por clase, batallas contra IA y salas en línea.
  - Creador: [JUMPERZ](https://x.com/jumperz)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/cinderfall/SOURCE.md).
  - Vista previa: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

<a id="puzzles"></a>

### Puzles e ingenio

Acertijos de lógica, desafíos de física, juegos de palabras y pequeños mecanismos ingeniosos.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Un juego de fusión de sandías basado en la deformación y las colisiones de frutas blandas.
  - Creador: [Ayi1337](https://github.com/Ayi1337)
  - Plataforma: Navegador moderno; el creador también ofrece una versión HTML independiente para descargar.
  - GPT-6 Astra: [Pruebas en una sola generación y prompts originales del creador](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Recursos: [Código fuente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [HTML independiente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Vista previa: ![Partida de Melon Lab con frutas blandas dentro del recipiente de fusión y controles de física.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Elimina grupos de al menos tres burbujas conectadas del mismo color; los grupos grandes crean bombas y arcoíris. Modos relajado, niveles y contrarreloj.
  - Creador: zding
  - Plataforma: Navegador, interfaz en chino; inicio verificado sin registro ni pago.
  - GPT-6 Astra: El uso de GPT-6 Astra y su papel están pendientes de confirmación del creador.
  - Vista previa: ![Q弹消消乐 — Captura del juego](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Desmonta un rompecabezas de madera de seis piezas entrelazadas y resuelve dos configuraciones de Huarong Dao en un taller 3D, con pistas y la opción de deshacer movimientos.
  - Creador: [MartinDelophy](https://github.com/MartinDelophy) (impulsor del proyecto y responsable de la propuesta).
  - Plataforma: Navegador moderno con WebGL 2; interfaz en chino y controles de ratón, teclado y pantalla táctil. Gratis, sin iniciar sesión ni usar una clave API; el progreso se guarda en el navegador actual.
  - Participación del modelo: [Registro de creación](works/sunjing-puzzles/CREATION.md) — Trabajo iterativo en Codex sobre diseño del juego, gráficos 3D procedurales, reglas, solucionador y pruebas; el uso concreto de GPT-6 Astra está pendiente de confirmación del creador (propuesta provisional).
  - Recursos: [Código fuente e instrucciones de ejecución](works/sunjing-puzzles/README.md) · [Requisitos](works/sunjing-puzzles/PROMPTS.md) · Tecnologías: React, Vinext/Vite, Three.js.
  - Vista previa: ![Rompecabezas de madera de seis piezas de Sunjing sobre un banco 3D verde, con piezas numeradas y controles de extracción.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

<a id="strategy-simulation"></a>

### Estrategia y simulación

Defensa de torres, cartas estratégicas, gestión, construcción y simulación de tipo sandbox.

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Decora tres casas en 3D, ajusta materiales e iluminación y recórrelas a la altura de los ojos; guardado local e importación GLB.
  - Creador: [Ryan-fm](https://github.com/Ryan-fm)
  - Plataforma: Navegador de escritorio con WebGL; interfaz china e inglesa. Gratis, sin registro. Quest físico no probado.
  - Codex: [GitHub](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Desarrollo iterativo con Codex documentado; la atribución exacta a GPT-6 Astra espera confirmación del autor.
  - Recursos: [GitHub](https://github.com/Ryan-fm/Dwellcraft)
  - Vista previa: ![Dwellcraft](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Ajedrez contra el ordenador en un tablero 3D giratorio, con personajes en miniatura, historial y deshacer.
  - Creador: [에코_eco](https://x.com/echo3042)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Vista previa: ![Little Kingdom Chess / 작은 왕국 체스 — Captura del juego](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Construye un vehículo sin motor con chatarra y lánzalo cuesta abajo; comienza en un taller en primera persona.
  - Creador: [TheLabGuy](https://x.com/hermesailab)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/junk-run/SOURCE.md).
  - Vista previa: ![JUNK RUN — Captura del juego](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — Un juego de estrategia en tablero hexagonal contra el ordenador: coloca agentes ocultos, engaña y rodea grupos enemigos para encadenar capturas.
  - Creador: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Plataforma: Navegador, interfaz en inglés; primer turno y respuesta del ordenador verificados sin registro ni pago.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — El autor afirma que Astra convirtió su diseño en una demo jugable de una sola vez; el proceso no se ha auditado de forma independiente.
  - Vista previa: ![Spy or Lie — Captura del juego](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Dirige Wei, Shu o Wu en una campaña por turnos a través de 15 ciudades: administra oro y grano, comanda un elenco de 108 oficiales con retratos individuales generados por IA y compite con las facciones de la IA por unificar el territorio.
  - Creador: [MartinDelophy](https://github.com/MartinDelophy) (impulsor del proyecto y responsable de la propuesta).
  - Plataforma: Navegador moderno; interfaz en chino y controles de ratón y pantalla táctil. Gratis, sin iniciar sesión ni usar una clave API; las partidas guardadas localmente se pueden importar y exportar.
  - GPT-6 Astra: [Registro de creación](works/three-kingdoms/CREATION.md) — Uso confirmado por el creador: colaboración iterativa en Codex para las reglas, la interfaz, la IA, el equilibrio y las pruebas; el terreno y los retratos de oficiales se crearon con herramientas de generación de imágenes.
  - Recursos: [Código fuente e instrucciones de ejecución](works/three-kingdoms/README.md) · [Requisitos](works/three-kingdoms/PROMPTS.md) · Tecnologías: React, TypeScript, Vinext/Vite.
  - Vista previa: ![Partida de Three Kingdoms con un mapa de ciudades al estilo de pintura a tinta, controles de recursos y retratos de oficiales.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Conecta una red eléctrica en una isla en miniatura, construye y mejora torres y administra la potencia limitada para defender un faro durante diez oleadas y un jefe final.
  - Creador: [stackloomdev](https://github.com/stackloomdev)
  - Plataforma: Navegadores modernos de escritorio y móvil, con interfaz en chino e inglés; gratis, sin iniciar sesión ni usar una clave API. El sonido opcional requiere Web Audio.
  - GPT-6 Astra: [Diario de desarrollo y contribución del modelo](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Se utilizó para el diseño del juego, el código, el arte procedural y las pruebas a lo largo de varias iteraciones; no fue una prueba en una sola generación.
  - Recursos: [Código fuente e instrucciones de ejecución](https://github.com/stackloomdev/last-beacon) · [Requisitos y notas de las iteraciones](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Tecnologías: JavaScript, Canvas 2D, Web Audio.
  - Vista previa: ![Last Beacon en inglés: torretas, morteros y una torre de hielo conectados a la red eléctrica defienden la isla de los enemigos del sendero costero.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — Simulación de supervivencia en una colonia subterránea: dirige a tres habitantes, excava y construye mientras gestionas oxígeno, comida y electricidad.
  - Creador: dudu
  - Plataforma: Navegador con Canvas, interfaz en chino, ratón y teclado; inicio verificado sin registro ni pago.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — El remitente afirma que todo el desarrollo se realizó con GPT-6 Astra; no se verificó de forma independiente.
  - Vista previa: ![缺氧 · 小小星球 — Captura del juego](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — Aventura en una torre de píxeles de quince pisos, con cálculos de ataque y defensa, recursos limitados y llaves de tres colores.
  - Creador: yw
  - Plataforma: Navegador, interfaz en chino; inicio verificado sin registro ni pago.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — El remitente incluye el prompt en el apartado de GPT-6 Astra; la contribución exacta del modelo no se verificó de forma independiente.
  - Vista previa: ![魔塔 · 永夜之阶 — Captura del juego](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — Juego de supervivencia y estrategia para navegador presentado como una recreación de Don't Starve. La captura aportada muestra exploración del bosque, recolección de recursos, inventario e indicadores de salud, hambre y cordura.
  - Creador: dudu
  - Plataforma: Navegador; la captura muestra una interfaz en chino y controles de teclado. No se especifican requisitos de pago ni de inicio de sesión; demo no verificada de forma independiente.
  - GPT-6 Astra: [Declaración de quien presentó el juego](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — Quien presentó el juego atribuye todo el desarrollo a GPT-6 Astra.
  - Recursos: No se proporcionó código fuente público ni un registro de desarrollo independiente.
  - Vista previa: ![Captura de 永恒荒野 aportada en el Issue #26: un personaje junto a una hoguera en el bosque, con inventario, indicadores de supervivencia y minimapa.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — Una recreación de Dave the Diver para navegador que combina pesca submarina con arpón, gestión de un restaurante de sushi y agricultura en una isla.
  - Creador: dudu
  - Plataforma: Navegador; interfaz en chino y controles de ratón y teclado. Se verificó el acceso y el inicio de una inmersión sin iniciar sesión ni pagar.
  - GPT-6 Astra: [Declaración de quien presentó el juego](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — Quien presentó el juego atribuye todo el desarrollo a GPT-6 Astra.
  - Recursos: No se proporcionó código fuente público ni un registro de desarrollo independiente.
  - Vista previa: ![Recreación de Dave the Diver en acción: un buceador entre peces, con indicadores de oxígeno y profundidad e inventario de capturas.](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — Roguelike de cartas sobre startups: recluta un equipo y combate a imitadores, errores y facturas de la nube.
  - Creador: [Peter Yang](https://x.com/petergyang)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/no-moat/SOURCE.md).
  - Vista previa: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Construye una aldea medieval en 3D detallada con caminos, trabajadores y cadenas de producción.
  - Creador: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/the-free-game/SOURCE.md).
  - Recursos: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Vista previa: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

<a id="rpg-adventures"></a>

### Rol y aventuras

Juegos de rol, exploración, aventuras narrativas e historias interactivas.

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — Aventura multijugador retro con mundo compartido, habilidades, recolección y combate; permite jugar como invitado.
  - Creador: [Rohan Varma](https://x.com/TheRohanVarma)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/lumbridge/SOURCE.md).
  - Vista previa: ![Lumbridge / Elderwood Realms — Captura del juego](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — Una aventura atmosférica de apuntar y hacer clic, con cuatro capítulos y trece puzles: compara el Presente con su Eco, reúne pruebas y desvela el misterio de un observatorio detenido a las 00:17.
  - Creador: [stackloomdev](https://github.com/stackloomdev)
  - Plataforma: Navegadores de escritorio y móviles; chino e inglés. Juega gratis en línea, sin iniciar sesión, instalar nada ni usar una clave API. Efectos WebGL opcionales, con las ilustraciones originales como alternativa.
  - GPT-6 Astra: [Registro de desarrollo](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Trabajo iterativo en Codex sobre la historia, los puzles, los textos bilingües, el código, los efectos 3D procedurales y las pruebas.
  - Recursos: [Código y puesta en marcha](https://github.com/stackloomdev/silent-meridian) · [Procedencia del arte](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Tecnologías: JavaScript, WebGL, Web Audio.
  - Vista previa: ![Silent Meridian en juego: observatorio con un mecanismo 3D de latón, marcadores de pistas, controles Presente/Eco y un diario de investigación.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — RPG de acción inspirado en Legend con guerrero, mago y taoísta, equipo, mazmorras y combate automático.
  - Creador: [知识猫AI实验室](https://x.com/GeekCatX)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/mir176/SOURCE.md).
  - Vista previa: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Adaptación 3D no oficial de Zork con exploración en primera persona, puzles, combate y diario.
  - Creador: [Ethan Mollick](https://x.com/emollick)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/zork/SOURCE.md).
  - Vista previa: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

<a id="platformers-racing"></a>

### Plataformas y carreras

Parkour, desafíos de plataformas, carreras y juegos centrados en el movimiento y los recorridos.

- **[STORM RACE](https://storm-race.vercel.app/)** — Carreras de mini 4×4 con garaje de piezas desmontadas, turbo y pista seca, lluviosa o tormentosa.
  - Creador: [BubuAi](https://x.com/BubuStd)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/storm-race/SOURCE.md).
  - Vista previa: ![STORM RACE — Captura del juego](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Un lobo recorre tres niveles nocturnos, recogiendo monedas y fragmentos de estrellas con doble salto y dash.
  - Creador: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Vista previa: ![FANG STARLIGHT RUN — Captura del juego](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Conduce un Bajaj de tres ruedas por un circuito inspirado en Etiopía contra cinco rivales de IA o el reloj.
  - Creador: [Guzo Technologies](https://x.com/guzotech)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Vista previa: ![Blue Bajaj Rally — Captura del juego](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Compite durante tres vueltas en Bay Circuit, elige entre seis karts y carga miniturbos para salir de las curvas y mejorar tu clasificación individual o sumar puntos en equipos de 4 contra 4.
  - Creador: Ryan
  - Plataforma: Navegador de escritorio con WebGL 2 y teclado; gratis, sin iniciar sesión ni usar una clave API. Funciona desde un servidor HTTP local o alojamiento estático; Three.js se incluye localmente. Las carreras por equipos son locales: una persona y siete pilotos de IA.
  - Participación del modelo: [Registro de desarrollo](works/apex-club/CREATION.md) — Trabajo iterativo en Codex sobre la jugabilidad, el código, los gráficos procedurales y las pruebas; la atribución a GPT-6 Astra está pendiente de confirmación por parte del creador.
  - Recursos: [Código fuente e instrucciones de ejecución](works/apex-club/README.md) · [Requisitos y notas de las iteraciones](works/apex-club/PROMPTS.md) · [Conversación de GPT compartida](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Tecnologías: JavaScript, Three.js.
  - Vista previa: ![Carrera por equipos de APEX CLUB en Bay Circuit con karts cercanos, progreso de las vueltas, puntos de equipo en directo y un minimapa.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Recorre una costa 3D cambiante con un pelícano en bicicleta: cambia entre tres carriles, salta o agáchate para esquivar obstáculos, encadena peces y usa escudos, imanes y un impulso invencible de seis segundos.
  - Creador: [chat01.ai](https://chat01.ai) (según la propuesta).
  - Plataforma: Navegadores de escritorio y móviles, con teclado o controles táctiles; gratis y sin iniciar sesión según la propuesta. La demo no se ha verificado de forma independiente.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — Quien presentó el juego afirma que se generó con un solo prompt; el registro de desarrollo enlazado no se ha verificado de forma independiente.
  - Recursos: [Registro de desarrollo compartido](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Vista previa: ![Pantalla de título de PELICAN PEDAL con un pelícano en bicicleta junto al mar; captura aportada en el Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — Carreras 3D contra cinco rivales de IA, con selección de coches y circuitos, contrarreloj, derrapes y nitro.
  - Creador: zding
  - Plataforma: Navegador, interfaz en chino; inicio verificado sin registro ni pago.
  - GPT-6 Astra: El uso de GPT-6 Astra y su papel están pendientes de confirmación del creador.
  - Vista previa: ![狂飙赛车 · OVERDRIVE — Captura del juego](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Desciende por un pozo en 3D moviéndote a izquierda y derecha entre plataformas móviles, frágiles e intermitentes; esquiva láseres y sierras y recoge cristales y chips de supervivencia.
  - Creador: [chat01.ai](https://linux.do/u/bandaot)
  - Plataforma: Navegador de escritorio, interfaz china, A/D o flechas. Inicio verificado sin cuenta ni pago; móvil no probado.
  - Codex: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — El registro compartido indica GPT-6 Pro y documenta la generación del juego y sus revisiones; no identifica explícitamente GPT-6 Astra.
  - Recursos: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Vista previa: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Compite durante tres vueltas con derrapes, nitro y objetos; el título actual es 疾风赛道 y ofrece modo en línea para 2–4 jugadores.
  - Creador: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Plataforma: Navegador, gratis, sin cuenta. El creador indica que puede requerir VPN/proxy. Inicio individual verificado; multijugador no probado.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — Según el creador: Primera versión con Qwen3.8 Max; segunda reconstruida por completo con Astra.
  - Vista previa: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

<a id="experimental-multiplayer"></a>

### Experimentales y multijugador

Mecánicas inusuales, competición en línea y experiencias cooperativas.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Seis juegos de navegador, incluidos rally de montaña, snowboard y carreras antigravedad; una sola entrada para la colección.
  - Creador: [Antonio Leiva](https://x.com/antonioleivag)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/astra-arcade/SOURCE.md).
  - Vista previa: ![ASTRA Arcade — Captura del juego](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — Juego multijugador de fans no oficial de Chao Garden: elige un personaje Sonic y cuida a los Chao en el jardín.
  - Creador: [Hank](https://x.com/h4nkdog)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/chao-party/SOURCE.md).
  - Vista previa: ![Chao Party — Captura del juego](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — Un entorno interactivo de arte con partículas: transforma 48.000 puntos de luz en una flor, un anillo gravitatorio o una galaxia, altera la escultura y exporta un instante como póster.
  - Creador: [jackroc](https://github.com/jackroc)
  - Plataforma: Navegador moderno con WebGL; haz clic en el título para probarlo en línea. Gratis, sin iniciar sesión ni usar una clave API; el HTML independiente también funciona sin conexión. El sonido ambiental opcional requiere Web Audio.
  - GPT-6 Astra: [Registro de creación y contribución del modelo](works/orbital-garden/README.md#模型与创作记录) — El creador utilizó GPT-6 Astra ultra para el concepto, el código y los textos, con revisión colaborativa; no fue una prueba en una sola generación.
  - Recursos: [Código fuente e instrucciones de ejecución](works/orbital-garden/README.md) · [HTML independiente](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Tecnologías: WebGL nativo, Web Audio, Canvas 2D.
  - Vista previa: ![Flor de partículas verde menta de Orbital Garden, con selección de forma, ajustes de vitalidad y velocidad del tiempo, y exportación a póster.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Cuatro adaptaciones 3D de juguetes de mesa: rompe el hielo bajo un pingüino, guía conejos entre trampas, equilibra astronautas sobre una plataforma y resuelve puzles de aparcamiento.
  - Creador: [asmoyou](https://github.com/asmoyou)
  - Plataforma: Navegadores de ordenador, tableta y móvil; gratis, sin iniciar sesión. Juego local por turnos en una misma pantalla para 2–4 participantes, incluidos rivales controlados por el ordenador, además de puzles individuales; sin multijugador en línea. Demo no verificada de forma independiente.
  - GPT-6 Astra: [Declaración del creador](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — El creador afirma que GPT-6 Astra implementó los juegos y realizó las pruebas de forma autónoma a partir de descripciones de juguetes y requisitos de funciones.
  - Recursos: [Código fuente e instrucciones de ejecución](https://github.com/asmoyou/toy2game) · [Licencia no comercial](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Código disponible; uso no comercial gratuito y uso comercial sujeto a autorización previa por escrito del autor. Tecnologías: TypeScript, React, Vite, Three.js.
  - Vista previa: ![Vista general de Toy2Game con cuatro escenas 3D reales: hielo del pingüino, trampas de conejos, equilibrio de astronautas y salida del aparcamiento. Imagen aportada por asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — Un patio de física sobre una mesa soleada: salta y estira una gelatina, con columpio y trampolín.
  - Creador: [Scott](https://x.com/scottstts)
  - Plataforma: Navegador de escritorio; abierto sin registro ni pago. Móvil no probado.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — El autor indica que utilizó Astra para desarrollar este proyecto. [Notas de verificación (inglés)](assets/screenshots/jelly-baby/SOURCE.md).
  - Recursos: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Vista previa: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Defiende un núcleo arcoíris con proyectiles que rebotan y potenciadores, en solitario, cooperativo local o combate en línea.
  - Creador: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Plataforma: Navegador, gratis, sin cuenta. El creador indica que puede requerir VPN/proxy. Inicio individual verificado; multijugador no probado.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — Según el creador: Primera versión con GPT-6 Astra Pro; mejoras posteriores con GPT-6 Astra en Codex.
  - Vista previa: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

## Qué incluye cada entrada

Una recomendación útil permite entender qué ofrece un juego, dónde probarlo y por qué está en esta lista.

| Información | Qué incluir |
| --- | --- |
| Juego y creador | El título del juego y un enlace a su creador o equipo original |
| Qué lo hace interesante | Una frase sobre la mecánica principal, sin relleno publicitario |
| Acceso | Un enlace para jugar en el navegador sin descargas, instalación, configuración local ni inicio de sesión |
| Captura del juego | Al menos una captura real del juego con una URL de imagen accesible públicamente |
| Plataforma y requisitos | Navegador / escritorio / móvil; indica si requiere pago, inicio de sesión o hardware especial |
| Papel de Astra | Declaración del creador, diario de desarrollo o registro público que explique la contribución de GPT-6 Astra |
| Recursos de desarrollo | Código fuente, tecnologías e historia del desarrollo, cuando estén disponibles |

El uso del modelo se atribuye según la descripción pública del creador; las afirmaciones sin respaldo no se presentan como hechos confirmados. Los prototipos jugables son bienvenidos y el código abierto es opcional.

## Ayuda a mantener la lista

[Propón un juego mediante una issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) o abre una pull request. Consulta el formato de las entradas en la [guía de contribución](CONTRIBUTING.md).

[Informa de enlaces rotos o datos incorrectos](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), incluidos errores de atribución o cambios en las condiciones de acceso.

## Licencia

Los textos originales de la lista y el material gráfico original de este repositorio se dedican al dominio público bajo [CC0 1.0](LICENSE). Los juegos, códigos, imágenes, marcas y demás contenidos de terceros enlazados conservan sus respectivas licencias y derechos. Su inclusión no modifica sus permisos de uso.
