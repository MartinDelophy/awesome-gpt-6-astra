<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 86](https://img.shields.io/badge/Cases-86-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Una colección de juegos interesantes creados con GPT-6 Astra.**

Ideas divertidas, juegos que puedes probar e historias de desarrollo para inspirar a quienes creen el próximo proyecto.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · **Español** · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Proponer un juego](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuir](CONTRIBUTING.md)

</div>

Esta página es una traducción del [README en inglés](README.md). Consulta el original para comprobar las últimas actualizaciones; las correcciones de traducción son bienvenidas.

## Empieza aquí

Explora **86 juegos y proyectos interactivos**: estrategia territorial de los Tres Reinos, rompecabezas de madera entrelazada y de piezas deslizantes, fusión de frutas deformables, 2048 de construcción de ciudades con generación procedural, vuelo con un solo botón, combates en alfombra mágica, un shooter de lluvia de balas con cinco niveles, defensa de una isla mediante una red eléctrica, supervivencia en la naturaleza, pesca submarina, gestión de un restaurante de sushi y agricultura en una isla, carreras de karts en Bay Circuit, ciclismo costero con un pelícano, juguetes de mesa adaptados a 3D, decoración de hogares en 3D y Orbital Garden. Haz clic en un título para jugar directamente en el navegador.

Catálogo actualizado: **2026-09-12**. El uso del modelo se documenta según las declaraciones de los creadores o remitentes; los datos sin confirmar se señalan en cada entrada. Esta fecha corresponde al mantenimiento del catálogo, no a una nueva prueba de todos los juegos.

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

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — Juega un partido de fútbol de once contra once entre Barcelona y Real Madrid en un estadio 3D, con pases, tiros y cambio de jugador.
  - Creador: [Mindblown / @mind](https://mindblown.ai/@mind)
  - Plataforma: Navegador de escritorio; teclado y ratón, sin inicio de sesión obligatorio.
  - GPT-6 Astra: [Notas de verificación](assets/screenshots/stadium-elite/SOURCE.md) — La publicación de Mindblown proporcionada menciona Three.js y GPT-6 Astra.
  - Vista previa: ![Stadium Elite — El Clásico: Juega un partido de fútbol de once contra once entre Barcelona y Real Madrid en un estadio 3D, con pases, tiros y cambio de jugador.](assets/screenshots/stadium-elite/gameplay.png)

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

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Arrastra las extremidades de un bailarín con física de muñeco hasta los objetivos indicados para puntuar y prolongar una ronda cronometrada de breaking.
  - Creador: [Satrio](https://x.com/satrio_d)
  - Plataforma: Navegador de escritorio, ratón; se inició una ronda cronometrada sin iniciar sesión.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — El creador afirma que Astra mejoró su juego de breakdance existente y su presentación. [Notas de verificación](assets/screenshots/breakdance/SOURCE.md).
  - Vista previa: ![Un bailarín con física de muñeco intenta alcanzar un objetivo con el pie en la pista cronometrada.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — Un FPS de navegador ambientado en la Segunda Guerra Mundial, con apariencias de soldados y zombis, equipamiento de armas, entrenamiento con bots y opciones de sala.
  - Creador: [Rishi](https://x.com/0xRishi)
  - Plataforma: Navegador de escritorio, teclado y ratón; se inició el entrenamiento con bots sin iniciar sesión. No se probaron el multijugador ni los mandos.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi afirma haber creado Astral War con Astra, Three.js, Meshy y ElevenLabs. El sitio actual también acredita a Vesper; véase la nota de atribución. [Notas de verificación](assets/screenshots/astral-war/SOURCE.md).
  - Vista previa: ![Vista de combate de Astral War con el arma y los controles del campo de batalla.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Salta desde tres alturas, realiza volteretas y giros, y apunta a un aro flotante para mejorar la puntuación de entrada al agua.
  - Creador: [BubuAi](https://x.com/BubuStd)
  - Plataforma: Navegador; el juego independiente arranca sin iniciar sesión ni descargar nada. Se inició un salto en la comprobación del 2026-09-09; controles de teclado y táctiles documentados.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — El creador afirma que lo construyó con Astra Pro y Three.js a partir de un solo prompt. [Notas de verificación](assets/screenshots/flop-club/SOURCE.md).
  - Recursos: [Presentación del proyecto](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Vista previa: ![Un saltador en la plataforma elevada, sobre el aro objetivo y los controles de entrada al agua.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Pilota por circuitos de neón con estructura alámbrica que aceleran en cada vuelta; usa el impulso y el cambio de fase en el momento justo para sobrevivir.
  - Creador: [Thomas Ricouard](https://x.com/Dimillian)
  - Plataforma: Navegador de escritorio; se inició un vuelo con puntuación sin iniciar sesión. WASD para volar, Espacio para impulsar y Shift para cambiar de fase.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — El creador afirma que Astra hizo el juego y la música a partir de una propuesta visual neón/synthwave y arte conceptual. [Notas de verificación](assets/screenshots/vector-dive/SOURCE.md).
  - Vista previa: ![Circuito de vuelo de neón de Vector Dive con la nave y los indicadores de juego.](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — Defiende un pueblo costero de oleadas de conejos revoltosos con tres armas, rutas por los tejados, desplazamientos rápidos y un gancho.
  - Creador: [OpenDesign](https://x.com/OpenDesignHQ)
  - Plataforma: Navegador de escritorio; teclado y ratón, sin iniciar sesión ni descargar nada.
  - GPT-6 Astra: [Declaración del creador](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign identifica este juego de Three.js como la versión hecha con GPT-6 Astra en su comparación de dos modelos. [Notas de verificación](assets/screenshots/harbor-skirmish/SOURCE.md).
  - Vista previa: ![Vista de un rifle en primera persona en Seabreeze, con conejos acercándose, contador de oleadas y controles de armas.](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — Underground Boxing](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — Boxea durante tres asaltos cronometrados en un ring subterráneo 3D, equilibrando golpes, bloqueos, esquivas y resistencia.
  - Creador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador de escritorio; WASD para moverse, J/K para golpear, L para bloquear y Espacio para esquivar; sin iniciar sesión ni descargar nada.
  - GPT-6 Astra: [Declaración del creador](https://x.com/sonic0828/status/2097601232877781344) — El hilo de presentación del creador atribuye estos minijuegos a GPT-6 Astra; su respuesta sobre boxeo enlaza esta versión. [Notas de verificación](assets/screenshots/underground-boxing/SOURCE.md).
  - Recursos: [Enlace de lanzamiento del creador](https://x.com/sonic0828/status/2097601584410796401)
  - Vista previa: ![Dos boxeadores intercambian golpes en un ring subterráneo iluminado, con cronómetro, salud y resistencia.](assets/screenshots/underground-boxing/gameplay.jpg)

- **[Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — Alterna golpes altos y bajos en una calle al atardecer, bloquea contraataques y empuja al rival a una alcantarilla mientras evitas macetas que caen.
  - Creador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador de escritorio; A/D para moverse, J/K para golpear, U/I para bloquear y Espacio para esquivar; sin iniciar sesión.
  - GPT-6 Astra: [Declaración del creador](https://x.com/sonic0828/status/2097601232877781344) — La presentación de GPT-6 Astra del creador incluye una respuesta de lanzamiento específica que enlaza este juego de lucha callejera. [Notas de verificación](assets/screenshots/urban-champion-3d/SOURCE.md).
  - Recursos: [Enlace de lanzamiento del creador](https://x.com/sonic0828/status/2097601861658587376)
  - Vista previa: ![Luchadores azul y rojo ante Sunset Mart, con cronómetro del asalto y barras de resistencia.](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[Zero District — Shells 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — Sobrevive a un asedio urbano de tres minutos con disparo automático, esquivas mediante movimiento, experiencia para recoger y mejoras a elegir.
  - Creador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador; WASD o arrastrar para moverse, apuntado automático; sin iniciar sesión ni descargar nada.
  - GPT-6 Astra: [Declaración del creador](https://x.com/sonic0828/status/2097601232877781344) — El creador menciona GPT-6 Astra en el anuncio de la colección y enlaza esta versión de supervivencia 3D en una respuesta propia. [Notas de verificación](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - Recursos: [Enlace de lanzamiento del creador](https://x.com/sonic0828/status/2097602391122264310)
  - Vista previa: ![Un superviviente dispara automáticamente a enemigos en una calle, con 14 bajas y 166 segundos restantes.](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — Combate oleadas de virus informáticos en una arena en primera persona dibujada con caracteres ASCII, con carrera, salto y deslizamiento.
  - Creador: [Acker Code](https://x.com/acker_code)
  - Plataforma: Navegador de escritorio; teclado y ratón, sin iniciar sesión. Haz clic en la arena para capturar el ratón; Esc lo libera.
  - GPT-6 Astra: [Declaración del creador](https://x.com/acker_code/status/2097542957070975286) — El creador acredita explícitamente a Codex y GPT-6 Astra por este shooter de arte ASCII. [Notas de verificación](assets/screenshots/ascii-district/SOURCE.md).
  - Vista previa: ![Patio ASCII con virus acercándose e indicadores del rifle con 29 balas tras disparar.](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — Mantén en equilibrio a una capibara bailarina sobre un barco dragón, inclínate contra las olas y completa seis movimientos en 40 segundos.
  - Creador: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plataforma: Navegador de escritorio; juego gratuito sin iniciar sesión. Pulsa Play; las funciones de cuenta son opcionales.
  - GPT-6 Astra: [Ficha del creador](https://www.aigameshare.com/games/aura-farming-game) — El creador acredita a GPT-6 Astra y Codex, junto con Blender, Three.js, ImageGen y WebAudio. [Notas de verificación](assets/screenshots/aura-farming/SOURCE.md).
  - Vista previa: ![Una capibara baila sobre un barco dragón, con controles de inclinación y apoyo e indicadores del reto de seis movimientos.](assets/screenshots/aura-farming/gameplay.jpg)

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

- **[CityMaker](https://citymaker.0to1app.com)** — Un puzle 2048 sobre una manzana urbana de 4×4: fusiona edificios iguales para ascender once niveles arquitectónicos por ciudad, desde casas tradicionales hasta un skyline reconocible, en doce ciudades con vista giratoria en pasos de 45°.
  - Creador: [Derek Wang](https://github.com/derek-wangpch)
  - Plataforma: Navegadores de escritorio y móviles con WebGL; inglés, chino simplificado y tradicional. Gratis, sin login ni clave API; guarda el progreso por ciudad en el navegador actual y permite instalarse en la pantalla de inicio de iOS.
  - GPT-6 Astra: [Registro de creación](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — El creador afirma que GPT-6 Astra generó la geometría procedural de los 132 edificios mediante referencias, investigación de múltiples vistas, modelado inicial de siluetas y validación con capturas; no fue una prueba de un solo prompt.
  - Recursos: [Código e instalación](https://github.com/derek-wangpch/OpenCityMaker) · [Notas de verificación](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Tecnología: React, TypeScript, Vite y Three.js; los 132 modelos de edificios son geometría procedural original.
  - Vista previa: ![Tablero de Hong Kong de CityMaker con edificios 3D de pocos polígonos en una cuadrícula 4×4, puntuación, selector de ciudades y controles de rotación.](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — Tensa un tirachinas y lanza pequeños Bonkers contra soportes de madera para derribar estructuras y eliminar objetivos.
  - Creador: [edmund5](https://x.com/edmund5)
  - Plataforma: Navegador; arrastra para apuntar y suelta para lanzar. Se puede jugar sin iniciar sesión; el acceso con Google es opcional.
  - GPT-6 Astra: [Declaración del creador](https://x.com/edmund5/status/2097603093819261002) — El creador acredita a GPT-6 Astra y Three.js por el juego, y a Suno por la música de fondo. [Notas de verificación](assets/screenshots/bonkshot/SOURCE.md).
  - Vista previa: ![Primer puzle de Grasslands tras un lanzamiento: torre de madera parcialmente derrumbada, un objetivo restante y 2.200 puntos.](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — Explora un invernadero sellado, repara tuberías de cobre, organiza plantas y luz reflejada, y rescata su última semilla.
  - Creador: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plataforma: Navegador; pulsa Play y luego Begin. Gratis, sin iniciar sesión; controles en inglés y chino.
  - GPT-6 Astra: [Ficha del creador](https://www.aigameshare.com/games/greenhouse-escape-room) — El creador identifica GPT-6 Astra y Codex como herramientas de desarrollo, junto con ImageGen y WebAudio. [Notas de verificación](assets/screenshots/greenhouse-escape-room/SOURCE.md).
  - Vista previa: ![Sala Waterworks del juego de escape, con un mecanismo de tuberías de nueve casillas, cronómetro e inventario.](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

<a id="strategy-simulation"></a>

### Estrategia y simulación

Defensa de torres, cartas estratégicas, gestión, construcción y simulación de tipo sandbox.

- **[Tidehook](https://tidehook-mallow.vercel.app/)** — Pilota el pequeño remolcador Mallow en tres travesías costeras: remolca objetos cuyo peso cambia la aceleración y los giros, entrégalos a la grúa del puerto y recupera finalmente una lente de faro.
  - Creador: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Plataforma: Navegador de ordenador de escritorio o portátil, interfaz en inglés; gratis, sin iniciar sesión ni instalar nada. Manejo con teclado o clics en el agua; el progreso se guarda en el navegador actual. Juego en teléfonos sin verificar.
  - GPT-6 Astra: [Declaración del creador](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74) — El creador utilizó GPT-6 Astra en Codex para desarrollar y mejorar por iteraciones el juego Canvas, la física de remolque, la entrega a la grúa, la interfaz, el clima y el audio, aportando dirección y pruebas de juego. El arte se creó por separado mediante generación de imágenes; la música y los efectos se sintetizan con Web Audio.
  - Recursos: [itch.io](https://mafuta.itch.io/tidehook) · [Tráiler de jugabilidad](https://youtu.be/wlEh8gnDOnU) · JavaScript nativo, Canvas 2D, Vite y Web Audio; el repositorio de código es privado. [Verificación y fuente de la captura (inglés)](assets/screenshots/tidehook/SOURCE.md)
  - Vista previa: ![Captura facilitada por el creador, versión del 2026-09-11: Mallow remolcando una carga pesada entre las islas de The Old Sound, con distancia al puerto y minimapa.](assets/screenshots/tidehook/gameplay.png)

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

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Reúne financiación y GPU, construye centros de datos y ejércitos, y compite con laboratorios de IA por alcanzar la ASI o destruye sus cuarteles.
  - Creador: [timour kosters](https://x.com/timourxyz)
  - Plataforma: Navegador de escritorio; estrategia en tiempo real satírica y gratuita. Se verificaron el inicio contra la computadora y la recolección de recursos sin iniciar sesión.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — El creador afirma que desarrolló este juego inspirado en Age of Empires con Astra durante dos días. [Notas de verificación](assets/screenshots/agi-of-empires/SOURCE.md).
  - Vista previa: ![Campo de batalla de AGI of Empires, contadores de recursos y cuartel general.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Juega al go sobre redes de calles y tableros de grafos inusuales, con turnos locales compartiendo dispositivo y opciones de partidas con amigos.
  - Creador: [Boris Power](https://x.com/BorisMPower)
  - Plataforma: Navegador; se abrió el tablero local sin iniciar sesión. No se probaron las partidas en línea con amigos.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — El creador describe este go multijugador sobre grafos arbitrarios como una creación de Astra con un solo prompt. [Notas de verificación](assets/screenshots/atlas-go/SOURCE.md).
  - Vista previa: ![Piedras negras y blancas sobre el tablero de grafo hexagonal de Atlas Go.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Recoge materias primas, alimenta máquinas y conecta cintas transportadoras para convertir un claro en una fábrica operativa.
  - Creador: [Dan](https://x.com/aidaniil)
  - Plataforma: Navegador de escritorio; el tutorial de invitado abre sin iniciar sesión, pero guardar el progreso requiere una cuenta. El multijugador no se probó de forma independiente.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — El creador afirma que él y su hermano lo hicieron con Astra, Blender MCP y Cloudflare Durable Objects, inspirados en Satisfactory y Besiege. [Notas de verificación](assets/screenshots/ironwood/SOURCE.md).
  - Vista previa: ![Máquinas, cintas transportadoras y tutorial de gestión de recursos de Ironwood.](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — Un RTS para un jugador con construcción de bases, captura de posiciones y mando de fuerzas terrestres y aéreas.
  - Creador: [Mustafa Akın](https://x.com/mustafaakin)
  - Plataforma: Navegador de escritorio; teclado y ratón, sin inicio de sesión obligatorio.
  - GPT-6 Astra: [Notas de verificación](assets/screenshots/dust-front/SOURCE.md) — La publicación de Mustafa Akın proporcionada indica ChatGPT Astra y Blender MCP, con unos 40 prompts incluyendo la creación de recursos.
  - Vista previa: ![DUST FRONT: Un RTS para un jugador con construcción de bases, captura de posiciones y mando de fuerzas terrestres y aéreas.](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Construye una base, disputa zonas de recursos y dirige tanques, infantería, aviones y drones contra ejércitos de IA en un juego de estrategia en tiempo real de guerra moderna, con espías e inteligencia para obtener ventaja.
  - Creador: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Plataforma: Navegador de escritorio, interfaz en chino, ratón y teclado; se inició una partida individual sin iniciar sesión, pagar ni instalar nada.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — El creador afirma en la publicación enlazada que utilizó «GPT Astra» para crear este juego de estrategia en tiempo real; no especifica la versión exacta del modelo ni el proceso detallado de desarrollo.
  - Referencias: [Propuesta](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Notas de verificación (inglés)](assets/screenshots/frontline-command/SOURCE.md)
  - Vista previa: ![Frontline Command: base, tres tanques seleccionados y colocación de una central eléctrica durante una partida; v0.8, capturada el 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — Apunta en una máquina empujamonedas 3D, combina monedas especiales y reliquias, y supera seis rondas con lanzamientos limitados y metas de puntuación.
  - Creador: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plataforma: Navegador; pulsa Play, gratis y sin iniciar sesión. Guardado con cuenta opcional.
  - GPT-6 Astra: [Ficha del creador](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — El creador acredita a GPT-6 Astra junto con GPT-5.6 Sol y Codex; la ficha no distingue sus contribuciones. [Notas de verificación](assets/screenshots/mintfall/SOURCE.md).
  - Vista previa: ![Bandeja 3D de Mintfall en la ronda 1, con 33 puntos, 44 lanzamientos y controles de monedas especiales.](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — Guía una caravana hacia el oeste, raciona comida, gestiona reparaciones y caza, y toma decisiones a lo largo de la ruta de Oregón.
  - Creador: [Biswas](https://x.com/bis_waz)
  - Plataforma: Navegador de escritorio; comienza con el grupo ficticio proporcionado, sin iniciar sesión ni instalar nada.
  - GPT-6 Astra: [X](https://x.com/bis_waz/status/2098023593468907747) — Biswas afirma que usó GPT-6 Astra para crear esta versión moderna en 3D de The Oregon Trail y enlaza el juego. [Notas de verificación](assets/screenshots/westward/SOURCE.md).
  - Vista previa: ![Carreta y bueyes camino del río Kansas, con 25 millas recorridas y panel de suministros.](assets/screenshots/westward/gameplay.jpg)

<a id="rpg-adventures"></a>

### Rol y aventuras

Juegos de rol, exploración, aventuras narrativas e historias interactivas.

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — Explora un RPG de acción de estilo vóxel, combate a los Hollowborn con Spark Bolt y Sunburst, esquiva mediante teletransporte y despierta la puerta solar.
  - Creador: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - Plataforma: Navegador de escritorio; teclado y ratón, sin inicio de sesión obligatorio.
  - GPT-6 Astra: Uso no confirmado para este juego: la respuesta proporcionada del creador permite incluirlo, pero no identifica el modelo ni su función. [Notas de verificación](assets/screenshots/the-sunshard/SOURCE.md).
  - Vista previa: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

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

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Explora Springfield a pie y en coche en una recreación no oficial para navegador con misiones, tráfico y persecuciones policiales.
  - Creador: [Dwayne](https://x.com/CtrlAltDwayne)
  - Plataforma: Navegador de escritorio; la primera misión cargó sin iniciar sesión tras una descarga inicial considerable de recursos. No se comprobó la campaña completa.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — El creador describe la reconstrucción para la web con GPT-6 Astra; el repositorio también acredita ayuda de Claude con la carga. Los recursos del juego original conservan sus derechos. [Notas de verificación](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Recursos: [Código e instalación](https://github.com/Vheissu/hit-and-run-web)
  - Vista previa: ![Homer en Springfield, con el objetivo de la primera misión y el minimapa visibles.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Recorre un valle soleado en 2.5D, sigue senderos y reúne tres cartas del viento en una aventura de exploración tranquila.
  - Creador: [Tushar](https://x.com/TusharXo)
  - Plataforma: Navegador, alojado en Crayon; se comprobaron la página pública y el reproductor integrado.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar describe cómo Astra generó senderos y recursos; una publicación posterior anuncia la versión jugable con Astra, Three.js y Crayon. [Notas de verificación](assets/screenshots/crayon-adventure/SOURCE.md).
  - Recursos: [Publicación de lanzamiento del creador](https://x.com/TusharXo/status/2096741535891251261)
  - Vista previa: ![Un personaje explora un valle lleno de flores, con el objetivo de las cartas del viento visible.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Investiga Blackthorn Manor en un misterio de asesinato de apuntar y hacer clic; examina escenas y sigue pistas para identificar al culpable.
  - Creador: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Plataforma: Navegador; la entrada interactiva de la mansión abrió sin iniciar sesión. Las escenas generadas posteriores no se probaron por completo.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — El creador acredita tanto a GPT Astra como a H3 Max por este juego detectivesco generativo. [Notas de verificación](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Vista previa: ![Entrada de la mansión con una puerta interactiva y el texto inicial de la investigación.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Explora islas flotantes, salta y planea entre comunidades, y completa encargos para sus habitantes.
  - Creador: [timour kosters](https://x.com/timourxyz)
  - Plataforma: Navegador de escritorio, teclado y ratón; se comprobaron la página y los controles de la edición con misiones.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — El creador afirma que Astra construyó un juego 3D jugable con PNJ y misiones inspiradas en lugares de Edge City. [Notas de verificación](assets/screenshots/skyward-gathering/SOURCE.md).
  - Vista previa: ![Vista de las islas flotantes de Skyward con controles de exploración y diario.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Alterna entre la magia musical de Anna y los superpoderes de Leo para despertar flores melódicas y explorar Wonder Garden.
  - Creador: [Dharma Utomo](https://x.com/dharmautomo)
  - Plataforma: Navegador; se inició la primera misión sin iniciar sesión. WASD para moverse, Espacio para saltar, E para el poder y Tab para cambiar de héroe.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — El creador afirma que GPT-6 Astra le ayudó a crear la aventura 3D y comparte un vídeo de sus hijos probándola. [Notas de verificación](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Vista previa: ![Mundo de aventura 3D de Anna y Leo con la interfaz de misiones.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — Explora Rainmist Haven y avanza hacia mazmorras con combos de espada, habilidades elementales y movimientos evasivos.
  - Creador: [UModeler X PicoBerry](https://x.com/UModeler)
  - Plataforma: Navegador de escritorio; teclado y ratón, sin iniciar sesión. Espera a que terminen de cargar los recursos 3D iniciales.
  - GPT-6 Astra: [Declaración del creador](https://x.com/UModeler/status/2097792348407099553) — El creador afirma que PicoBerry generó los recursos y GPT-6 Astra construyó el RPG de acción en Three.js que los rodea. [Notas de verificación](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - Recursos: [Enlace de lanzamiento del creador](https://x.com/UModeler/status/2097792351129178451)
  - Vista previa: ![Deller esquiva junto a una fuente y puestos de mercado de Rainmist Haven, con salud, maná y habilidades.](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — Recluta un grupo, desciende una mazmorra de cien pisos y combina espadas, bolas de fuego y funciones de compañeros en una partida con muerte permanente.
  - Creador: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - Plataforma: Navegador de escritorio en Wavedash; el juego base comienza sin iniciar sesión. Hay cuentas opcionales y desbloqueos anticipados de personajes de pago.
  - GPT-6 Astra: [Declaración del creador](https://x.com/tonysurix/status/2097873333551616355) — El creador afirma explícitamente que este juego de mazmorras por grupos fue creado con GPT-6 Astra. [Notas de verificación](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - Vista previa: ![El héroe y un caballero contratado lanzan una bola de fuego en el primer piso, con salud del grupo y minimapa.](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — Explora una isla tras naufragar, investiga pistas en primera persona y resuelve puzles del entorno camino del faro.
  - Creador: [Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - Plataforma: Navegador de escritorio; espera a que cargue la isla y pulsa Begin expedition. Gratis, sin cuenta ni instalación.
  - GPT-6 Astra: [Diario del creador](https://smallweblab.com/posts/sunlandia/) — El creador comenzó con GPT-5.6 Sol, recibió ayuda de Fable y terminó el juego con GPT-6 Astra. [Notas de verificación](assets/screenshots/sunlandia/SOURCE.md).
  - Vista previa: ![Costa de Sunlandia en primera persona, con el naufragio, el muelle roto y el objetivo de buscar ayuda.](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — Haz crecer un organismo microscópico dentro de una concha de caracol inundada, reúne nutrientes y desarrolla nuevas partes del cuerpo al explorar.
  - Creador: [Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - Plataforma: Navegador; beta gratuita sin iniciar sesión, con cinco idiomas de interfaz, incluido el chino.
  - GPT-6 Astra: [Hilo del creador](https://x.com/Preda2005/status/2097954217180921928) — Marcio afirma que describió la idea de evolución del organismo a GPT-6 Astra y la desarrolló hasta la beta enlazada. [Notas de verificación](assets/screenshots/nacar/SOURCE.md).
  - Vista previa: ![Una célula entre nutrientes de colores, con biomasa, evolución, inventario y controles de agua explorada.](assets/screenshots/nacar/gameplay.jpg)

<a id="platformers-racing"></a>

### Plataformas y carreras

Parkour, desafíos de plataformas, carreras y juegos centrados en el movimiento y los recorridos.

- **[Barrelbound: The Lost Cargo](https://barrelbound.vercel.app/)** — Elige a Rocco o Pip para recorrer tres niveles de plataformas en la jungla: usa el doble salto, lanza barriles y monta en una vagoneta para recuperar la carga perdida y llegar al jefe final.
  - Creador: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Plataforma: Navegador de ordenador de escritorio o portátil, interfaz en inglés; gratis, sin iniciar sesión ni instalar nada. Controles de teclado; el creador indica compatibilidad con mando.
  - GPT-6 Astra: [Declaración del creador](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73) — El creador utilizó GPT-6 Astra en Codex para la implementación, las mecánicas, las iteraciones y las pruebas, aportando personalmente la dirección y las pruebas de juego. El arte se creó por separado mediante generación de imágenes; la música y los efectos se sintetizan con Web Audio.
  - Recursos: [itch.io](https://mafuta.itch.io/barrelbound) · [Tráiler de jugabilidad](https://youtu.be/X87UqF_n3ro) · Phaser 3, Vite y Web Audio; el repositorio de código es privado. [Verificación y fuente de la captura (inglés)](assets/screenshots/barrelbound/SOURCE.md)
  - Vista previa: ![Captura facilitada por el creador, versión de septiembre de 2026: Rocco, barriles y caminos de plátanos sobre las plataformas de madera de Jungle Dock Dash.](assets/screenshots/barrelbound/gameplay.jpg)

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

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Derrapa en un circuito tropical de karts, usa objetos y compite contra siete rivales durante tres vueltas.
  - Creador: [Pietro Schirano](https://x.com/skirano)
  - Plataforma: Navegador; se inició la carrera de tres vueltas sin iniciar sesión. Teclado para conducir, derrapar y usar objetos, además de botones táctiles en pantalla.
  - GPT-6 Astra: [Atribución del modelo](https://openai.com/index/gpt-6-astra/) — La página de lanzamiento de Astra de OpenAI enlaza este kart interactivo y acredita a Pietro Schirano. La publicación de descubrimiento en X es de la comunidad, no del creador. [Notas de verificación](assets/screenshots/tidal-rush/SOURCE.md).
  - Recursos: [Publicación de descubrimiento en X](https://x.com/alexgetmancom/status/2095598460921614825)
  - Vista previa: ![Circuito tropical de Tidal Rush, con posición de carrera y controles de derrape.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Salta por un escenario gótico de pixel art, ataca con tajos, pisa enemigos o invoca un ataque en una breve aventura lateral.
  - Creador: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Plataforma: Navegador, interfaz japonesa; teclado y soporte para smartphones indicado por el creador. Hay un escenario disponible.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — El creador informa de unos 25 minutos de desarrollo con Astra y una corrección de la animación al caminar; la música se acredita por separado a Suno. [Notas de verificación](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Vista previa: ![LUNA combate en una calle gótica bajo una luna roja, con salud y medidor de invocación.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Compite con ciclistas astronautas alrededor de anillos planetarios, recoge polvo estelar, aprovecha el rebufo y acelera en la Orbital Cup.
  - Creador: [Crayon](https://x.com/usecrayon)
  - Plataforma: Navegador en Crayon; teclado y controles táctiles documentados. La página pública ofrece carreras, contrarreloj y paseo infinito.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon acredita a GPT-6 Astra, Crayon Pro y Three.js por el juego de ciclismo espacial. [Notas de verificación](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Vista previa: ![Ciclistas astronautas en un anillo planetario, con indicadores de vueltas, posición y polvo estelar.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Corre, salta y balancéate por cuatro niveles de jungla, recoge tesoros y evita cocodrilos mientras mejoras tu tiempo.
  - Creador: [Ben Nash](https://x.com/bennash)
  - Plataforma: Navegador, teclado y controles de movimiento en pantalla; el primer nivel y las instrucciones cargaron sin iniciar sesión.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — El creador lo describe explícitamente como un juego de cuatro niveles inspirado en Pitfall y hecho con GPT-6 Astra. [Notas de verificación](assets/screenshots/one-more-vine/SOURCE.md).
  - Vista previa: ![Nivel de plataformas selvático con lianas, tesoros, fosos y cocodrilos.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Recorre el mundo subterráneo 1-2 de Mario con Ryu Hayabusa de Ninja Gaiden y el tanque de Battle City: saltos, escalada y combates de desplazamiento lateral con Ryu, batallas con vista cenital con el tanque, o un relevo de ninja a tanque para rescatar a la princesa.
  - Creador: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Plataforma: Navegador de escritorio, interfaz en chino, teclado recomendado; gratis, sin iniciar sesión ni instalar nada.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — El creador afirma haber usado GPT-6 Astra para desarrollar y depurar el código y las interacciones de forma iterativa, aportando él mismo la dirección del juego y sus comentarios; no se generó con una sola petición.
  - Recursos: [Presentación del proyecto](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Vídeo](https://www.bilibili.com/video/BV1erYt69EFP/) · [Verificación y fuentes de las imágenes (inglés)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Derechos: Juego de fans no oficial; los personajes, las imágenes y la música clásicos conservan los derechos de sus respectivos titulares. Consulta los créditos de los materiales en la página del juego original.
  - Vista previa: ![Mario Mix II — portada de vídeo facilitada por el creador, no una captura de la partida.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Captura de pantalla: ![El tanque de Mario Mix II dispara en la entrada del mundo 1-2; versión 1.0 en ejecución, capturada el 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — Compite entre el tráfico de Bengaluru, evita baches y motos de reparto, y usa el impulso o un movimiento lateral para abrirte paso.
  - Creador: [Ravi Theja](https://x.com/ravithejads)
  - Plataforma: Navegador de escritorio; teclado con acelerador automático opcional, sin iniciar sesión.
  - GPT-6 Astra: [Declaración del creador](https://x.com/ravithejads/status/2097181044625887392) — El creador atribuye el juego de carreras por Bengaluru a GPT-6 Astra. [Notas de verificación](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - Vista previa: ![Coche azul del jugador entre el tráfico de Bengaluru, con posición, velocidad, cronómetro y controles.](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS — Alpine Downhill](https://iamsonic.net/2026/mini-games/skicross.html)** — Compite contra tres esquiadores montaña abajo, supera puertas y obstáculos, y mantente por delante de la avalancha.
  - Creador: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plataforma: Navegador de escritorio; A/D para girar, Espacio para saltar y Shift para impulsar; sin iniciar sesión ni descargar nada.
  - GPT-6 Astra: [Declaración del creador](https://x.com/sonic0828/status/2097601232877781344) — El creador atribuye la colección de minijuegos a GPT-6 Astra y presenta este juego de esquí en una respuesta específica. [Notas de verificación](assets/screenshots/skicross/SOURCE.md).
  - Recursos: [Enlace de lanzamiento del creador](https://x.com/sonic0828/status/2097601732297814300)
  - Vista previa: ![Cuatro esquiadores en una pista nevada, con bonificación de puerta, clasificación, velocidad y distancia a la avalancha.](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — Trepa por una pared musgosa, atrapa moscas para recuperar el agarre y escóndete en refugios antes de que la lluvia arrastre a la araña.
  - Creador: [Luiz Piccini](https://piccini.app/)
  - Plataforma: Navegador; gratis, sin iniciar sesión. WASD o joystick en pantalla.
  - GPT-6 Astra: [Game Bench del creador](https://game-bench.piccini.app/) — Game Bench identifica este juego publicado como GPT-6 Astra canary, high, fechado 2026-09-05 y creado a partir de su propuesta compartida de juego. [Notas de verificación](assets/screenshots/itsy-bitsy-spider/SOURCE.md).
  - Vista previa: ![Araña a dos metros en una pared de ladrillo musgosa, con agarre, moscas, refugio y joystick.](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — Compite en moto entre el tráfico urbano de India, esquivando autobuses y mototaxis mientras usas patadas, puñetazos e impulsos.
  - Creador: [Kishore](https://x.com/GetKishore)
  - Plataforma: Navegador de escritorio; gratis, sin cuenta. Acepta o edita el apodo generado antes de la primera carrera.
  - GPT-6 Astra: [Hilo de desarrollo del creador](https://x.com/GetKishore/status/2097906401159102811) — Kishore describe iteraciones del juego 3D hecho con Astra mediante referencias callejeras y pruebas repetidas del tráfico, los choques y el combate entre pilotos. [Notas de verificación](assets/screenshots/desi-mayhem/SOURCE.md).
  - Vista previa: ![Carrera de motos en Chennai con el piloto, tráfico, minimapa, posición y cronómetro.](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — Pilota una nave sobre un océano galáctico, sigue puertas luminosas y elige una carrera de dos vueltas o una deriva infinita.
  - Creador: [Aniket J](https://x.com/aniketjart)
  - Plataforma: Navegador; espera a los recursos 3D y pulsa Ride the current. Gratis, sin iniciar sesión.
  - GPT-6 Astra: [X](https://x.com/aniketjart/status/2098207146647433534) — Aniket acredita a GPT-6 Astra, Blender MCP y Crayon; describe un experimento con más iteraciones de jugabilidad previstas. [Notas de verificación](assets/screenshots/cosmic-tides/SOURCE.md).
  - Vista previa: ![Carrera de Cosmic Tides acercándose a una puerta luminosa sobre un mar galáctico, con vueltas y velocidad.](assets/screenshots/cosmic-tides/gameplay.jpg)

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

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — Pinta una cometa y vuela sobre los tejados, equilibrando la tensión del hilo en vuelo libre o en un reto cronometrado de luces del cielo.
  - Creador: [Tushar / @TusharXo](https://x.com/TusharXo)
  - Plataforma: Navegador; elige un personaje, entra en la azotea y pulsa Fly. Gratis, sin iniciar sesión.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2098156783181467801) — Tushar acredita explícitamente a GPT-6 Astra y Crayon por el juego de cometas en Three.js, y menciona Images 2.5 para los gráficos. [Notas de verificación](assets/screenshots/above-the-rooftops/SOURCE.md).
  - Vista previa: ![Reto de cometa sobre la ciudad, con altura, tensión del hilo, progreso de luces y controles de dirección.](assets/screenshots/above-the-rooftops/gameplay.jpg)

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
