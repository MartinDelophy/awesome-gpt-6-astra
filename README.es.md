<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/)

**Una colección de juegos interesantes creados con GPT-6 Astra.**

Ideas divertidas, juegos que puedes probar e historias de desarrollo para inspirar a quienes creen el próximo proyecto.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · **Español** · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Proponer un juego](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuir](CONTRIBUTING.md)

</div>

Esta página es una traducción del [README en inglés](README.md). Consulta el original para comprobar las últimas actualizaciones; las correcciones de traducción son bienvenidas.

## Empieza aquí

Explora **6 juegos de navegador y 1 entorno interactivo de arte con partículas**: fusión de frutas deformables, vuelo con un solo botón, combates en alfombra mágica, defensa de una isla mediante una red eléctrica, carreras de karts en Bay Circuit, ciclismo costero con un pelícano y Orbital Garden. Haz clic en un título para abrir su demo o el código fuente con instrucciones de ejecución.

Última comprobación: **2026-09-05**. Se han revisado las declaraciones de los creadores, los enlaces al código fuente y la disponibilidad de las demos. El uso del modelo se basa en lo declarado por los autores; no se han realizado pruebas de juego para esta lista.

- **¿Buscas algo para jugar?** Explora los géneros de abajo.
- **¿Has creado un juego?** [Envía tu proyecto](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) con un enlace jugable o al código fuente, una captura del juego y una explicación de cómo utilizaste GPT-6 Astra.
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

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Pilota una alfombra mágica por un mundo esférico, atraviesa aros, lanza hechizos y combate contra enemigos y jefes.
  - Creador: [threapchills](https://github.com/threapchills)
  - Plataforma: Navegador de escritorio con ratón y teclado; requiere WebGL 2.
  - GPT-6 Astra: El creador indica en la [sección About del repositorio](https://github.com/threapchills/MagicCarpetWizard) que el juego se hizo con GPT-6 Astra.
  - Recursos: [Código fuente e instrucciones de ejecución](https://github.com/threapchills/MagicCarpetWizard) · Tecnologías: Three.js, Vite.

<a id="puzzles"></a>

### Puzles e ingenio

Acertijos de lógica, desafíos de física, juegos de palabras y pequeños mecanismos ingeniosos.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Un juego de fusión de sandías basado en la deformación y las colisiones de frutas blandas.
  - Creador: [Ayi1337](https://github.com/Ayi1337)
  - Plataforma: Navegador moderno; el creador también ofrece una versión HTML independiente para descargar.
  - GPT-6 Astra: [Pruebas en una sola generación y prompts originales del creador](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Recursos: [Código fuente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [HTML independiente](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)

<a id="strategy-simulation"></a>

### Estrategia y simulación

Defensa de torres, cartas estratégicas, gestión, construcción y simulación de tipo sandbox.

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Conecta una red eléctrica en una isla en miniatura, construye y mejora torres y administra la potencia limitada para defender un faro durante diez oleadas y un jefe final.
  - Creador: [stackloomdev](https://github.com/stackloomdev)
  - Plataforma: Navegadores modernos de escritorio y móvil, con interfaz en chino e inglés; gratis, sin iniciar sesión ni usar una clave API. El sonido opcional requiere Web Audio.
  - GPT-6 Astra: [Diario de desarrollo y contribución del modelo](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Se utilizó para el diseño del juego, el código, el arte procedural y las pruebas a lo largo de varias iteraciones; no fue una prueba en una sola generación.
  - Recursos: [Código fuente e instrucciones de ejecución](https://github.com/stackloomdev/last-beacon) · [Requisitos y notas de las iteraciones](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Tecnologías: JavaScript, Canvas 2D, Web Audio.
  - Vista previa: ![Last Beacon en inglés: torretas, morteros y una torre de hielo conectados a la red eléctrica defienden la isla de los enemigos del sendero costero.](assets/screenshots/last-beacon/gameplay-en.png)

<a id="rpg-adventures"></a>

### Rol y aventuras

Juegos de rol, exploración, aventuras narrativas e historias interactivas.

*A la espera del primer juego.*

<a id="platformers-racing"></a>

### Plataformas y carreras

Parkour, desafíos de plataformas, carreras y juegos centrados en el movimiento y los recorridos.

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.mauve-ibex-1793.chatgpt.site)** — Compite durante tres vueltas en Bay Circuit, elige entre seis karts y carga miniturbos para salir de las curvas y mejorar tu clasificación individual o sumar puntos en equipos de 4 contra 4.
  - Creador: Ryan
  - Plataforma: Navegador de escritorio con WebGL 2 y teclado; gratis, sin iniciar sesión ni usar una clave API. Requiere un servidor HTTP local y conexión a Internet para cargar Three.js. Las carreras por equipos son locales: una persona y siete pilotos de IA.
  - Participación del modelo: [Registro de desarrollo](works/apex-club/CREATION.md) — Trabajo iterativo en Codex sobre la jugabilidad, el código, los gráficos procedurales y las pruebas; la atribución a GPT-6 Astra está pendiente de confirmación por parte del creador.
  - Recursos: [Código fuente e instrucciones de ejecución](works/apex-club/README.md) · [Requisitos y notas de las iteraciones](works/apex-club/PROMPTS.md) · Tecnologías: JavaScript, Three.js.
  - Vista previa: ![Carrera por equipos de APEX CLUB en Bay Circuit con karts cercanos, progreso de las vueltas, puntos de equipo en directo y un minimapa.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Recorre una costa 3D cambiante con un pelícano en bicicleta: cambia entre tres carriles, salta o agáchate para esquivar obstáculos, encadena peces y usa escudos, imanes y un impulso invencible de seis segundos.
  - Creador: [chat01.ai](https://chat01.ai) (según la propuesta).
  - Plataforma: Navegadores de escritorio y móviles, con teclado o controles táctiles; gratis y sin iniciar sesión según la propuesta. La demo no se ha verificado de forma independiente.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — Quien presentó el juego afirma que se generó con un solo prompt; el registro de desarrollo enlazado no se ha verificado de forma independiente.
  - Recursos: [Registro de desarrollo compartido](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Vista previa: ![Pantalla de título de PELICAN PEDAL con un pelícano en bicicleta junto al mar; captura aportada en el Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

<a id="experimental-multiplayer"></a>

### Experimentales y multijugador

Mecánicas inusuales, competición en línea y experiencias cooperativas.

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden.hp20230404.chatgpt.site)** — Un entorno interactivo de arte con partículas: transforma 48.000 puntos de luz en una flor, un anillo gravitatorio o una galaxia, altera la escultura y exporta un instante como póster.
  - Creador: [jackroc](https://github.com/jackroc)
  - Plataforma: Navegador moderno con WebGL; haz clic en el título para probarlo en línea. Gratis, sin iniciar sesión ni usar una clave API; el HTML independiente también funciona sin conexión. El sonido ambiental opcional requiere Web Audio.
  - GPT-6 Astra: [Registro de creación y contribución del modelo](works/orbital-garden/README.md#模型与创作记录) — El creador utilizó GPT-6 Astra ultra para el concepto, el código y los textos, con revisión colaborativa; no fue una prueba en una sola generación.
  - Recursos: [Código fuente e instrucciones de ejecución](works/orbital-garden/README.md) · [HTML independiente](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Tecnologías: WebGL nativo, Web Audio, Canvas 2D.

## Qué incluye cada entrada

Una recomendación útil permite entender qué ofrece un juego, dónde probarlo y por qué está en esta lista.

| Información | Qué incluir |
| --- | --- |
| Juego y creador | El título del juego y un enlace a su creador o equipo original |
| Qué lo hace interesante | Una frase sobre la mecánica principal, sin relleno publicitario |
| Acceso | Un enlace jugable o un repositorio público de código fuente con instrucciones de ejecución |
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
