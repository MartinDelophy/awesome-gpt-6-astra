<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 86](https://img.shields.io/badge/Cases-86-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Подборка интересных игр, созданных с помощью GPT-6 Astra.**

Увлекательные идеи, игры, которые можно попробовать, и истории разработки, вдохновляющие новых авторов.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
**Русский** · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Предложить игру](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Участвовать](CONTRIBUTING.md)

</div>

Эта страница — перевод [английского README](README.md). Последние изменения можно сверить с оригиналом; исправления перевода приветствуются.

## С чего начать

Здесь собраны **86 игр и интерактивных проектов**: территориальная стратегия эпохи Троецарствия, деревянные головоломки со сцепленными деталями и сдвижными блоками, объединение мягких фруктов, 2048 с процедурным строительством городов, полёт одной кнопкой, сражения на ковре-самолёте, шутер с завесами пуль и пятью уровнями, защита острова с помощью электросети, выживание в дикой природе, подводная охота, управление суши-рестораном и фермерство на острове, гонки на картах по Bay Circuit, велопрогулка с пеликаном вдоль берега, настольные игрушки в 3D, оформление дома в 3D и Orbital Garden. Нажмите на название, чтобы играть прямо в браузере.

Каталог обновлён: **2026-09-12**. Сведения об использовании модели основаны на заявлениях авторов или отправителей; неподтверждённые данные отмечены в соответствующих записях. Эта дата означает обновление каталога, а не повторное игровое тестирование всех проектов.

- **Ищете, во что поиграть?** Посмотрите жанры ниже.
- **Создали игру?** [Предложите свой проект](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml), приложив прямую ссылку на браузерную игру, скриншот игрового процесса и описание того, как вы использовали GPT-6 Astra.
- **Нашли интересный проект?** Рекомендуйте общедоступные работы других людей с указанием их авторов.

Подборка поддерживается сообществом и не связана с OpenAI. Включение в список — приглашение познакомиться с проектом, а не оценка производительности или официальная рекомендация.

## Игры

- [Экшен и аркады](#action-arcade)
- [Головоломки и логические игры](#puzzles)
- [Стратегии и симуляторы](#strategy-simulation)
- [Ролевые игры и приключения](#rpg-adventures)
- [Платформеры и гонки](#platformers-racing)
- [Экспериментальные и многопользовательские игры](#experimental-multiplayer)

<a id="action-arcade"></a>

### Экшен и аркады

Шутеры, файтинги, выживание, ритм-игры и всё, во что хочется сыграть ещё раз.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — Трёхмерная игра о полёте с управлением одной кнопкой: взмахивайте крыльями, пролетайте между препятствиями и набирайте очки.
  - Автор: [Ayi1337](https://github.com/Ayi1337)
  - Платформа: Браузер; игра разработана с учётом мобильных устройств.
  - GPT-6 Astra: [Тесты создания за один запрос и исходные промпты автора](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Материалы: [Исходный код](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [Автономный HTML-файл](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Предпросмотр: ![Стартовый экран Mosswing с летающим персонажем и промежутками между каменными колоннами.](assets/screenshots/mosswing/gameplay.jpg)

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — Сыграйте в футбол 11 на 11 за «Барселону» против «Реала» на 3D-стадионе: передачи, удары и переключение игроков.
  - Автор: [Mindblown / @mind](https://mindblown.ai/@mind)
  - Платформа: Настольный браузер; клавиатура и мышь, вход в аккаунт не требуется.
  - GPT-6 Astra: [Заметки о проверке](assets/screenshots/stadium-elite/SOURCE.md) — В предоставленной публикации Mindblown указаны Three.js и GPT-6 Astra.
  - Предпросмотр: ![Stadium Elite — El Clásico: Сыграйте в футбол 11 на 11 за «Барселону» против «Реала» на 3D-стадионе: передачи, удары и переключение игроков.](assets/screenshots/stadium-elite/gameplay.png)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Летайте на ковре-самолёте по сферическому миру, проходите сквозь кольца, применяйте заклинания и сражайтесь с врагами и боссами.
  - Автор: [threapchills](https://github.com/threapchills)
  - Платформа: Настольный браузер с мышью и клавиатурой; требуется WebGL 2.
  - GPT-6 Astra: В [разделе About репозитория](https://github.com/threapchills/MagicCarpetWizard) автор указывает, что игра создана с помощью GPT-6 Astra.
  - Материалы: [Исходный код и инструкция по запуску](https://github.com/threapchills/MagicCarpetWizard) · Технологии: Three.js, Vite.
  - Предпросмотр: ![Стартовый экран Magic Carpet Wizard с наездником на ковре, городом и светящимся кольцом для полёта.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Шутер с автоматической стрельбой: три истребителя, пять секторов и многофазные боссы.
  - Автор: [jackroc](https://github.com/jackroc)
  - GPT-6 Astra: [README](works/thunderfall/README.md#创作与许可) — По словам автора, создано с GPT-6 Astra ultra с итеративными улучшениями.
  - [README](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · JavaScript, Canvas 2D, Web Audio.
  - Предпросмотр: ![THUNDERFALL — Игровой скриншот](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Защищайте маяк от волн вражеских танков в шести трёхмерных секторах: разрушайте кирпичные стены, используйте рывок и электромагнитный импульс.
  - Автор: [chat01.ai](https://linux.do/u/bandaot)
  - Платформа: Браузер с WebGL 2, китайский интерфейс; в инструкции описаны клавиатура, мышь и сенсорное управление. Бой запущен без входа в аккаунт и оплаты.
  - GPT-6 Astra: Использование GPT-6 Astra и его роль ожидают подтверждения автора.
  - Предпросмотр: ![IRON BASTION / 钢铁防线 — Игровой скриншот](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — Разрабатываемый файтинг со стикменами: удары руками и ногами, апперкоты, сюрикены и парирование; тренировка с ботом и меню сетевой игры с друзьями.
  - Автор: [Dwayne](https://x.com/CtrlAltDwayne)
  - Платформа: Настольный браузер, клавиатура; тренировка доступна без входа. Сетевая игра и геймпад независимо не проверялись.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — Автор прямо сообщает об использовании GPT-6 Astra для этого многопользовательского файтинга и отмечает, что разработка продолжается.
  - Предпросмотр: ![Stick Fighter — Игровой скриншот](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — Красочный FPS в духе Ван Гога: шесть художников, особое оружие и матч до 20 очков.
  - Автор: [Peter Gostev](https://x.com/petergostev)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/gogh-strike/SOURCE.md).
  - Предпросмотр: ![Gogh Strike · Paint Clash — Игровой скриншот](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Кабина в стиле Asteroids с четырьмя камерами, радаром, парными пушками и инерционным полётом.
  - Автор: [Eyes Wide Open](https://x.com/DantesClown)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Предпросмотр: ![ASTEROIDS · Deepfield — Игровой скриншот](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — Тактический FPS в дождливом грузовом терминале: детальная винтовка, боевой интерфейс и девять противников.
  - Автор: [hiraeth](https://x.com/WoahWurdz)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/blackwater/SOURCE.md).
  - Ресурсы: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Предпросмотр: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — Фэнтезийная арена с четырьмя героями, шестью умениями класса, дуэлями против ИИ и онлайн-комнатами.
  - Автор: [JUMPERZ](https://x.com/jumperz)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/cinderfall/SOURCE.md).
  - Предпросмотр: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Перетаскивайте конечности тряпичного танцора к соответствующим целям, чтобы набирать очки и продлевать раунд брейк-данса на время.
  - Автор: [Satrio](https://x.com/satrio_d)
  - Платформа: Браузер на компьютере, управление мышью; раунд на время запустился без входа в аккаунт.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — Автор сообщает, что Astra помогла улучшить его существующую игру о брейк-дансе и её оформление. [Примечания к проверке](assets/screenshots/breakdance/SOURCE.md).
  - Предпросмотр: ![Тряпичный танцор тянется ногой к цели на арене брейк-данса с таймером.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — Браузерный шутер от первого лица в тематике Второй мировой войны с обликами солдат и зомби, наборами оружия, тренировкой с ботами и настройками лобби.
  - Автор: [Rishi](https://x.com/0xRishi)
  - Платформа: Браузер на компьютере, клавиатура и мышь; тренировка с ботами запустилась без входа в аккаунт. Мультиплеер и поддержка контроллера не проверялись.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi сообщает, что создал Astral War с помощью Astra, Three.js, Meshy и ElevenLabs. На текущем сайте также указана Vesper; подробности приведены в примечании об участии моделей. [Примечания к проверке](assets/screenshots/astral-war/SOURCE.md).
  - Предпросмотр: ![Боевой экран Astral War с оружием и элементами управления на поле боя.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Ныряйте с платформ трёх высот, делайте сальто и вращения и цельтесь в плавающее кольцо, чтобы повысить оценку за вход в воду.
  - Автор: [BubuAi](https://x.com/BubuStd)
  - Платформа: Браузер; отдельная страница игры запускается сразу, без входа в аккаунт и загрузок. Во время проверки 2026-09-09 был начат прыжок; доступны клавиатура и описанное в документации сенсорное управление.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — По словам автора, игра создана одним запросом к Astra Pro с использованием Three.js. [Примечания к проверке](assets/screenshots/flop-club/SOURCE.md).
  - Материалы: [Описание проекта](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Предпросмотр: ![Прыгун на высокой платформе над кольцом-мишенью и элементы управления приземлением в воду.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Летайте по неоновым каркасным трассам, которые ускоряются с каждым кругом, вовремя используя ускорение и фазовое перемещение, чтобы продержаться дольше.
  - Автор: [Thomas Ricouard](https://x.com/Dimillian)
  - Платформа: Браузер на компьютере; полёт с подсчётом очков запустился без входа в аккаунт. WASD — полёт, Space — ускорение, Shift — фазовое перемещение.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — Автор сообщает, что Astra создала игру и музыку по визуальному заданию в стиле неона и синтвейва и концепт-артам. [Примечания к проверке](assets/screenshots/vector-dive/SOURCE.md).
  - Предпросмотр: ![Неоновая трасса Vector Dive с кораблём игрока и игровым интерфейсом.](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — Защищайте приморский город от волн буйных кроликов, используя три вида оружия, маршруты по крышам, рывки и крюк-кошку.
  - Автор: [OpenDesign](https://x.com/OpenDesignHQ)
  - Платформа: Браузер на компьютере; клавиатура и мышь, без входа в аккаунт и загрузок.
  - GPT-6 Astra: [Заявление автора](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign указывает, что в сравнении двух моделей эта игра на Three.js представляет версию, созданную с GPT-6 Astra. [Примечания к проверке](assets/screenshots/harbor-skirmish/SOURCE.md).
  - Предпросмотр: ![Вид от первого лица с винтовкой на город Seabreeze, приближающихся кроликов, счётчик волн и управление оружием.](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — Underground Boxing](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — Проведите три раунда на время в подпольном 3D-ринге, сочетая удары, блоки, уклонения и расход выносливости.
  - Автор: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Платформа: Браузер на компьютере; WASD — движение, J/K — удары, L — блок, Space — уклонение; без входа в аккаунт и загрузок.
  - GPT-6 Astra: [Заявление автора](https://x.com/sonic0828/status/2097601232877781344) — В ветке с подборкой автор называет GPT-6 Astra инструментом создания этих мини-игр; ответ о боксе содержит ссылку на эту версию. [Примечания к проверке](assets/screenshots/underground-boxing/SOURCE.md).
  - Материалы: [Ссылка автора на релиз](https://x.com/sonic0828/status/2097601584410796401)
  - Предпросмотр: ![Два боксёра обмениваются ударами на освещённом подпольном ринге; видны таймер раунда, здоровье и выносливость.](assets/screenshots/underground-boxing/gameplay.jpg)

- **[Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — Обменивайтесь верхними и нижними ударами на улице на закате, блокируйте контратаки и загоняйте соперника в люк, избегая падающих цветочных горшков.
  - Автор: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Платформа: Браузер на компьютере; A/D — движение, J/K — удары, U/I — блоки, Space — уклонение; без входа в аккаунт.
  - GPT-6 Astra: [Заявление автора](https://x.com/sonic0828/status/2097601232877781344) — В подборке автора, посвящённой GPT-6 Astra, есть отдельный ответ о релизе со ссылкой на эту уличную драку. [Примечания к проверке](assets/screenshots/urban-champion-3d/SOURCE.md).
  - Материалы: [Ссылка автора на релиз](https://x.com/sonic0828/status/2097601861658587376)
  - Предпросмотр: ![Синий и красный бойцы обмениваются ударами у Sunset Mart; видны таймер раунда и шкалы выносливости.](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[Zero District — Shells 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — Переживите трёхминутную осаду города с автоматической стрельбой, уклонением за счёт движения, сбором опыта и выбором улучшений.
  - Автор: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Платформа: Браузер; движение через WASD или перетаскивание, автоматическое прицеливание; без входа в аккаунт и загрузок.
  - GPT-6 Astra: [Заявление автора](https://x.com/sonic0828/status/2097601232877781344) — Автор указывает GPT-6 Astra в анонсе подборки и публикует ссылку на эту 3D-игру на выживание в отдельном ответе. [Примечания к проверке](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - Материалы: [Ссылка автора на релиз](https://x.com/sonic0828/status/2097602391122264310)
  - Предпросмотр: ![Выживший автоматически стреляет по окружающим врагам на городской улице; 14 побеждённых противников и 166 секунд до конца.](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — Сражайтесь с волнами компьютерных вирусов на арене от первого лица, изображённой символами ASCII, используя бег, прыжки и скольжение.
  - Автор: [Acker Code](https://x.com/acker_code)
  - Платформа: Браузер на компьютере; клавиатура и мышь, без входа в аккаунт. Щелчок по арене захватывает указатель мыши, Esc освобождает его.
  - GPT-6 Astra: [Заявление автора](https://x.com/acker_code/status/2097542957070975286) — Автор прямо указывает Codex и GPT-6 Astra как инструменты создания этого ASCII-шутера. [Примечания к проверке](assets/screenshots/ascii-district/SOURCE.md).
  - Предпросмотр: ![Двор из ASCII-символов с приближающимися вирусами; после выстрела интерфейс винтовки показывает 29 патронов.](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — Удерживайте равновесие танцующей капибары на лодке-драконе, наклоняйтесь навстречу волнам и выполните шесть движений за 40 секунд.
  - Автор: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Платформа: Браузер на компьютере; бесплатно, без входа в аккаунт. Нажмите Play; функции аккаунта необязательны.
  - GPT-6 Astra: [Страница автора с игрой](https://www.aigameshare.com/games/aura-farming-game) — Автор указывает GPT-6 Astra и Codex наряду с Blender, Three.js, ImageGen и WebAudio как инструменты создания игры. [Примечания к проверке](assets/screenshots/aura-farming/SOURCE.md).
  - Предпросмотр: ![Капибара танцует на лодке-драконе; видны управление наклоном и упором и интерфейс испытания из шести движений.](assets/screenshots/aura-farming/gameplay.jpg)

<a id="puzzles"></a>

### Головоломки и логические игры

Логические и физические задачи, игры со словами и необычные небольшие механики.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Игра об объединении арбузов, в которой мягкие фрукты деформируются и сталкиваются друг с другом.
  - Автор: [Ayi1337](https://github.com/Ayi1337)
  - Платформа: Современный браузер; автор также предлагает автономную HTML-версию для скачивания.
  - GPT-6 Astra: [Тесты создания за один запрос и исходные промпты автора](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Материалы: [Исходный код](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [Автономный HTML-файл](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Предпросмотр: ![Игра Melon Lab с мягкими фруктами в ёмкости для слияния и настройками физики.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Удаляйте группы минимум из трёх соседних пузырьков одного цвета; большие группы создают бомбы и радуги. Есть спокойный режим, уровни и игра на время.
  - Автор: zding
  - Платформа: Браузер, китайский интерфейс; запуск проверен без входа и оплаты.
  - GPT-6 Astra: Использование GPT-6 Astra и его роль ожидают подтверждения автора.
  - Предпросмотр: ![Q弹消消乐 — Игровой скриншот](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Разберите деревянную головоломку из шести сцепленных деталей и решите две раскладки сдвижной головоломки Хуаронг Дао в 3D-мастерской, с подсказками и отменой ходов.
  - Автор: [MartinDelophy](https://github.com/MartinDelophy) (инициатор проекта и автор заявки).
  - Платформа: Современный браузер с WebGL 2; китайский интерфейс, управление мышью, клавиатурой и касаниями. Бесплатно, без входа в аккаунт и ключа API; прогресс остаётся в текущем браузере.
  - Участие модели: [История создания](works/sunjing-puzzles/CREATION.md) — Итеративная работа в Codex над дизайном игры, процедурной 3D-графикой, правилами, решателем и тестами; точное использование GPT-6 Astra ожидает подтверждения автора (черновая заявка).
  - Материалы: [Исходный код и инструкция по запуску](works/sunjing-puzzles/README.md) · [Требования](works/sunjing-puzzles/PROMPTS.md) · Технологии: React, Vinext/Vite, Three.js.
  - Предпросмотр: ![Деревянная головоломка Sunjing из шести деталей на зелёном 3D-верстаке с номерами деталей и кнопками извлечения.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker](https://citymaker.0to1app.com)** — Головоломка 2048 на городском участке 4×4: объединяйте одинаковые здания, проходя 11 архитектурных уровней в каждом из 12 городов — от традиционных домов до узнаваемого силуэта города. Вид можно поворачивать с шагом 45°.
  - Автор: [Derek Wang](https://github.com/derek-wangpch)
  - Платформа: Браузеры на компьютерах и мобильных устройствах с WebGL; английский, упрощённый и традиционный китайский. Бесплатно, без входа в аккаунт и API-ключа; прогресс сохраняется отдельно для каждого города в текущем браузере. Игру можно установить на домашний экран iOS.
  - GPT-6 Astra: [История создания](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — Автор сообщает, что использовал GPT-6 Astra для создания процедурной геометрии всех 132 моделей зданий, изучая референсы с разных ракурсов, сначала выстраивая объёмы по силуэту и проверяя результат по скриншотам; это не тест с единственным запросом.
  - Материалы: [Исходный код и настройка](https://github.com/derek-wangpch/OpenCityMaker) · [Примечания к проверке](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Технологии: React, TypeScript, Vite и Three.js; все 132 модели зданий — оригинальная процедурная геометрия.
  - Предпросмотр: ![Поле Гонконга в CityMaker: низкополигональные 3D-здания на сетке 4×4, счёт, панель выбора городов и управление поворотом.](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — Натягивайте рогатку и запускайте маленьких Bonker в деревянные опоры, чтобы обрушить сооружения и убрать цели.
  - Автор: [edmund5](https://x.com/edmund5)
  - Платформа: Браузер; тяните для прицеливания и отпускайте для выстрела. Можно играть без входа в аккаунт; вход через Google необязателен.
  - GPT-6 Astra: [Заявление автора](https://x.com/edmund5/status/2097603093819261002) — Автор указывает GPT-6 Astra и Three.js как инструменты создания игры, а Suno — для фоновой музыки. [Примечания к проверке](assets/screenshots/bonkshot/SOURCE.md).
  - Предпросмотр: ![Первая головоломка Grasslands после выстрела: частично разрушенная деревянная башня, одна оставшаяся цель и 2 200 очков.](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — Исследуйте запертую теплицу, восстановите медные водопроводные трубы, расположите растения и отражённый свет и спасите последнее семя.
  - Автор: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Платформа: Браузер; нажмите Play, затем Begin. Бесплатно, без входа в аккаунт; элементы управления на английском и китайском.
  - GPT-6 Astra: [Страница автора с игрой](https://www.aigameshare.com/games/greenhouse-escape-room) — Автор называет GPT-6 Astra и Codex инструментами разработки наряду с ImageGen и WebAudio. [Примечания к проверке](assets/screenshots/greenhouse-escape-room/SOURCE.md).
  - Предпросмотр: ![Комната Waterworks в игре о побеге из теплицы: трубный механизм из девяти плиток, таймер и инвентарь.](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

<a id="strategy-simulation"></a>

### Стратегии и симуляторы

Защита башнями, стратегические карточные игры, управление, строительство и симуляторы-песочницы.

- **[Tidehook](https://tidehook-mallow.vercel.app/)** — Управляйте маленьким буксиром Mallow в трёх прибрежных рейсах: буксируйте находки, вес которых влияет на разгон и повороты, передавайте их портовому крану и в конце поднимите линзу маяка.
  - Автор: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Платформа: Браузер на настольном компьютере или ноутбуке, английский интерфейс; бесплатно, без входа в аккаунт и установки. Управление с клавиатуры или щелчками по воде; прогресс сохраняется в текущем браузере. Игра на телефоне не проверена.
  - GPT-6 Astra: [Заявление автора](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74) — Автор использовал GPT-6 Astra в Codex для последовательной разработки и доработки игры на Canvas, физики буксировки, передачи груза крану, интерфейса, погоды и аудио, самостоятельно задавая направление и проверяя игру. Графика создавалась отдельно с помощью генерации изображений; музыка и звуковые эффекты синтезируются через Web Audio.
  - Материалы: [itch.io](https://mafuta.itch.io/tidehook) · [Видео игрового процесса](https://youtu.be/wlEh8gnDOnU) · Обычный JavaScript, Canvas 2D, Vite и Web Audio; репозиторий исходного кода закрыт. [Проверка и источник снимка (английский)](assets/screenshots/tidehook/SOURCE.md)
  - Превью: ![Снимок от автора из версии от 2026-09-11: Mallow буксирует тяжёлый груз между островами The Old Sound; видны расстояние до порта и мини-карта.](assets/screenshots/tidehook/gameplay.png)

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Обставьте три 3D-дома, настройте материалы и освещение и пройдитесь внутри; доступны локальные сохранения и импорт GLB.
  - Автор: [Ryan-fm](https://github.com/Ryan-fm)
  - Платформа: Настольный браузер с WebGL; китайский и английский интерфейс. Бесплатно, без входа. На физическом Quest не проверено.
  - Codex: [GitHub](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Есть журнал итеративной разработки с Codex; точное использование GPT-6 Astra ожидает подтверждения автора.
  - Ресурсы: [GitHub](https://github.com/Ryan-fm/Dwellcraft)
  - Предпросмотр: ![Dwellcraft](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Шахматы против компьютера на вращаемой 3D-доске с миниатюрными персонажами, историей и отменой ходов.
  - Автор: [에코_eco](https://x.com/echo3042)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Предпросмотр: ![Little Kingdom Chess / 작은 왕국 체스 — Игровой скриншот](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Соберите безмоторную машину из хлама и спуститесь с горы; игра начинается в мастерской от первого лица.
  - Автор: [TheLabGuy](https://x.com/hermesailab)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/junk-run/SOURCE.md).
  - Предпросмотр: ![JUNK RUN — Игровой скриншот](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — Стратегическая игра на шестиугольном поле против компьютера: размещайте тайных агентов, блефуйте и окружайте вражеские группы для цепных захватов.
  - Автор: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Платформа: Браузер, английский интерфейс; первый ход и ответ компьютера проверены без входа и оплаты.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — По словам автора, Astra за один проход превратила его игровой замысел в демоверсию; процесс разработки независимо не проверялся.
  - Предпросмотр: ![Spy or Lie — Игровой скриншот](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Возглавьте Вэй, Шу или У в пошаговой кампании на карте из 15 городов: управляйте золотом и зерном, командуйте 108 военачальниками с индивидуальными портретами, созданными ИИ, и боритесь с фракциями под управлением ИИ за объединение страны.
  - Автор: [MartinDelophy](https://github.com/MartinDelophy) (инициатор проекта и автор заявки).
  - Платформа: Современный браузер; китайский интерфейс, управление мышью и касаниями. Бесплатно, без входа в аккаунт и ключа API; локальные сохранения можно импортировать и экспортировать.
  - GPT-6 Astra: [История создания](works/three-kingdoms/CREATION.md) — Автор подтвердил использование: итеративная совместная работа в Codex над правилами, интерфейсом, ИИ, балансом и тестами. Рельеф и портреты военачальников созданы инструментами генерации изображений.
  - Материалы: [Исходный код и инструкция по запуску](works/three-kingdoms/README.md) · [Требования](works/three-kingdoms/PROMPTS.md) · Технологии: React, TypeScript, Vinext/Vite.
  - Предпросмотр: ![Игра Three Kingdoms: карта городов в стиле живописи тушью, управление ресурсами и портреты военачальников.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Соединяйте электросеть на миниатюрном острове, стройте и улучшайте башни, распределяйте ограниченную мощность и защищайте маяк от десяти волн врагов и финального босса.
  - Автор: [stackloomdev](https://github.com/stackloomdev)
  - Платформа: Современные настольные и мобильные браузеры; интерфейс на китайском и английском. Бесплатно, без входа в аккаунт и ключа API. Для необязательного звука требуется Web Audio.
  - GPT-6 Astra: [Дневник разработки и вклад модели](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Модель использовалась для дизайна игры, кода, процедурной графики и тестов в ходе нескольких итераций; это не тест создания за один запрос.
  - Материалы: [Исходный код и инструкция по запуску](https://github.com/stackloomdev/last-beacon) · [Требования и история доработок](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Технологии: JavaScript, Canvas 2D, Web Audio.
  - Скриншот: ![Last Beacon с английским интерфейсом: подключённые к электросети турели, мортиры и морозная башня защищают остров от врагов на прибрежной тропе.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — Симулятор выживания подземной колонии: управляйте тремя жителями, копайте и стройте, следя за кислородом, едой и электричеством.
  - Автор: dudu
  - Платформа: Браузер с Canvas, китайский интерфейс, мышь и клавиатура; запуск проверен без входа и оплаты.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — По заявлению отправителя, вся разработка велась с GPT-6 Astra; независимо не проверено.
  - Предпросмотр: ![缺氧 · 小小星球 — Игровой скриншот](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — Пиксельное приключение в пятнадцатиэтажной башне с расчётом атаки и защиты, ограниченными ресурсами и ключами трёх цветов.
  - Автор: yw
  - Платформа: Браузер, китайский интерфейс; запуск проверен без входа и оплаты.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — Отправитель привёл промпт разработки в разделе GPT-6 Astra; точный вклад модели независимо не проверен.
  - Предпросмотр: ![魔塔 · 永夜之阶 — Игровой скриншот](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — Браузерная игра на выживание с элементами стратегии, представленная как воссоздание Don't Starve. На приложенном скриншоте видны исследование леса, сбор ресурсов, инвентарь и показатели здоровья, голода и рассудка.
  - Автор: dudu
  - Платформа: Браузер; на скриншоте показаны китайский интерфейс и управление клавиатурой. Условия оплаты и входа в аккаунт не указаны; демоверсия независимо не проверена.
  - GPT-6 Astra: [Заявление подавшего проект](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — По словам подавшего заявку, вся разработка выполнена GPT-6 Astra.
  - Материалы: Публичный исходный код и отдельная история разработки не предоставлены.
  - Скриншот: ![Скриншот 永恒荒野 из Issue #26: персонаж у костра в лесу, инвентарь, показатели выживания и мини-карта.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — Браузерное воссоздание Dave the Diver, сочетающее подводную охоту с гарпуном, управление суши-рестораном и фермерство на острове.
  - Автор: dudu
  - Платформа: Браузер; китайский интерфейс, управление мышью и клавиатурой. Доступ и начало погружения проверены без входа в аккаунт и оплаты.
  - GPT-6 Astra: [Заявление подавшего проект](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — По словам подавшего заявку, вся разработка выполнена GPT-6 Astra.
  - Материалы: Публичный исходный код и отдельная история разработки не предоставлены.
  - Скриншот: ![Игровой экран воссоздания Dave the Diver: ныряльщик среди рыб, показатели кислорода и глубины, инвентарь улова.](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — Карточный рогалик о стартапах: набирайте команду и боритесь с подражателями, ошибками и счетами за облако.
  - Автор: [Peter Yang](https://x.com/petergyang)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/no-moat/SOURCE.md).
  - Предпросмотр: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Стройте детализированную средневековую 3D-деревню с дорогами, работниками и производственными цепочками.
  - Автор: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/the-free-game/SOURCE.md).
  - Ресурсы: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Предпросмотр: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Собирайте финансирование и GPU, стройте дата-центры и армии, чтобы обогнать конкурирующие ИИ-лаборатории в достижении ASI или уничтожить их штаб-квартиры.
  - Автор: [timour kosters](https://x.com/timourxyz)
  - Платформа: Браузер на компьютере; бесплатная сатирическая стратегия в реальном времени. Начальный матч против компьютера и сбор ресурсов проверены без входа в аккаунт.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — Автор сообщает, что за два дня разработал эту игру, вдохновлённую Age of Empires, с помощью Astra. [Примечания к проверке](assets/screenshots/agi-of-empires/SOURCE.md).
  - Предпросмотр: ![Поле боя AGI of Empires, счётчики ресурсов и штаб-квартира.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Играйте в го на уличных сетях и необычных графовых досках; доступны поочерёдная игра на одном устройстве и партии с друзьями.
  - Автор: [Boris Power](https://x.com/BorisMPower)
  - Платформа: Браузер; локальная доска открылась без входа в аккаунт. Онлайн-партии с друзьями не проверялись.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — Автор описывает многопользовательское го на произвольных графах как результат одного запроса к Astra. [Примечания к проверке](assets/screenshots/atlas-go/SOURCE.md).
  - Предпросмотр: ![Чёрные и белые камни на сотовой графовой доске Atlas Go.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Собирайте сырьё, снабжайте машины энергией и соединяйте конвейеры, чтобы превратить поляну в работающую фабрику.
  - Автор: [Dan](https://x.com/aidaniil)
  - Платформа: Браузер на компьютере; гостевой учебный режим открывается без входа в аккаунт, но для сохранения прогресса вход необходим. Мультиплеер независимо не проверялся.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — Автор сообщает, что вместе с братом создал игру с Astra, Blender MCP и Cloudflare Durable Objects, вдохновляясь Satisfactory и Besiege. [Примечания к проверке](assets/screenshots/ironwood/SOURCE.md).
  - Предпросмотр: ![Машины фабрики Ironwood, конвейеры и обучение управлению ресурсами.](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — Одиночная RTS со строительством базы, захватом точек и управлением наземными и воздушными силами.
  - Автор: [Mustafa Akın](https://x.com/mustafaakin)
  - Платформа: Настольный браузер; клавиатура и мышь, вход в аккаунт не требуется.
  - GPT-6 Astra: [Заметки о проверке](assets/screenshots/dust-front/SOURCE.md) — В предоставленной публикации Mustafa Akın указаны ChatGPT Astra и Blender MCP, около 40 запросов, включая создание ресурсов.
  - Предпросмотр: ![DUST FRONT: Одиночная RTS со строительством базы, захватом точек и управлением наземными и воздушными силами.](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Стройте базу, боритесь за ресурсные зоны и командуйте танками, пехотой, самолётами и дронами против армий ИИ в стратегии в реальном времени о современной войне. Шпионы и разведка помогут получить преимущество.
  - Автор: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Платформа: Браузер на компьютере, китайский интерфейс, мышь и клавиатура; одиночный матч удалось начать без входа в аккаунт, оплаты или установки.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — В указанной публикации автор сообщает, что создал эту RTS с помощью «GPT Astra»; точная версия модели и подробный процесс разработки не указаны.
  - Ссылки: [Заявка](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Заметки о проверке (английский)](assets/screenshots/frontline-command/SOURCE.md)
  - Предпросмотр: ![Frontline Command: база, три выбранных танка и размещение электростанции во время матча; v0.8, снимок от 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — Цельтесь в 3D-автомате, сталкивающем монеты, комбинируйте особые монеты и реликвии и пройдите шесть раундов с ограничением на броски и целевым количеством очков.
  - Автор: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Платформа: Браузер; нажмите Play, бесплатно и без входа в аккаунт. По желанию можно сохранять прогресс через аккаунт.
  - GPT-6 Astra: [Страница автора с игрой](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — Автор указывает GPT-6 Astra вместе с GPT-5.6 Sol и Codex; на странице игры их вклад не разделён. [Примечания к проверке](assets/screenshots/mintfall/SOURCE.md).
  - Предпросмотр: ![3D-лоток с монетами Mintfall в первом раунде: 33 очка, 44 броска и управление особыми монетами.](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — Ведите обоз на запад, распределяйте еду, занимайтесь ремонтом и охотой и принимайте решения на Орегонской тропе.
  - Автор: [Biswas](https://x.com/bis_waz)
  - Платформа: Браузер на компьютере; начните с предложенной вымышленной команды, без входа в аккаунт и установки.
  - GPT-6 Astra: [X](https://x.com/bis_waz/status/2098023593468907747) — Biswas сообщает, что с помощью GPT-6 Astra создал эту современную 3D-версию The Oregon Trail, и даёт ссылку на игру. [Примечания к проверке](assets/screenshots/westward/SOURCE.md).
  - Предпросмотр: ![Повозка и волы на пути к Kansas River; пройдено 25 миль, видна панель припасов экспедиции.](assets/screenshots/westward/gameplay.jpg)

<a id="rpg-adventures"></a>

### Ролевые игры и приключения

Ролевые игры, исследование мира, сюжетные приключения и интерактивные истории.

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — Исследуйте воксельную экшен-RPG, сражайтесь с Hollowborn с помощью Spark Bolt и Sunburst, уклоняйтесь телепортацией и пробудите солнечные врата.
  - Автор: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - Платформа: Настольный браузер; клавиатура и мышь, вход в аккаунт не требуется.
  - GPT-6 Astra: Для этой игры использование не подтверждено: предоставленный ответ автора разрешает включение, но не указывает модель и её роль. [Заметки о проверке](assets/screenshots/the-sunshard/SOURCE.md).
  - Предпросмотр: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — Ретро-приключение с общей многопользовательской картой, навыками, сбором ресурсов и боями; доступен гостевой вход.
  - Автор: [Rohan Varma](https://x.com/TheRohanVarma)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/lumbridge/SOURCE.md).
  - Предпросмотр: ![Lumbridge / Elderwood Realms — Игровой скриншот](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — Атмосферное приключение с управлением мышью или касаниями: четыре главы и тринадцать головоломок. Сопоставляйте Настоящее с его Эхом, собирайте улики и раскройте тайну обсерватории, где время застыло в 00:17.
  - Автор: [stackloomdev](https://github.com/stackloomdev)
  - Платформа: Браузеры на компьютерах и мобильных устройствах; китайский и английский языки. Бесплатная игра онлайн, без входа, установки и ключа API. Эффекты WebGL можно отключить; без их поддержки отображаются исходные иллюстрации.
  - GPT-6 Astra: [История разработки](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Итеративная работа в Codex над сюжетом, головоломками, двуязычными текстами, кодом, процедурными 3D-эффектами и тестами.
  - Ресурсы: [Исходный код и запуск](https://github.com/stackloomdev/silent-meridian) · [Происхождение графики](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Технологии: JavaScript, WebGL, Web Audio.
  - Превью: ![Silent Meridian в игре: обсерватория с латунным 3D-механизмом, метками улик, переключением Настоящее/Эхо и журналом расследования.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — Экшен-RPG в духе Legend: воин, маг и даос, снаряжение, подземелья и автоматический бой.
  - Автор: [知识猫AI实验室](https://x.com/GeekCatX)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/mir176/SOURCE.md).
  - Предпросмотр: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Неофициальная 3D-адаптация Zork с исследованием от первого лица, загадками, боями и дневником.
  - Автор: [Ethan Mollick](https://x.com/emollick)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/zork/SOURCE.md).
  - Предпросмотр: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Исследуйте Springfield пешком и на машине в неофициальной браузерной реконструкции с миссиями, дорожным движением и полицейскими погонями.
  - Автор: [Dwayne](https://x.com/CtrlAltDwayne)
  - Платформа: Браузер на компьютере; первая миссия загрузилась без входа в аккаунт после первоначальной загрузки большого объёма ресурсов. Полное прохождение кампании не проверялось.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — Автор описывает воссоздание игры для веба с GPT-6 Astra; в репозитории также указана помощь Claude с загрузкой. Права на ресурсы оригинальной игры сохраняются за их правообладателями. [Примечания к проверке](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Материалы: [Исходный код и настройка](https://github.com/Vheissu/hit-and-run-web)
  - Предпросмотр: ![Homer в Springfield; видны цель первой миссии и мини-карта.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Бродите по залитой солнцем долине в 2.5D, следуйте тропам и соберите три письма ветра в спокойном приключении об исследовании мира.
  - Автор: [Tushar](https://x.com/TusharXo)
  - Платформа: Браузер, размещение на Crayon; проверены публичная страница игры и встроенный проигрыватель.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar описывает создание путей и ресурсов с Astra; в следующей публикации он объявляет о доступной для игры версии на Astra, Three.js и Crayon. [Примечания к проверке](assets/screenshots/crayon-adventure/SOURCE.md).
  - Материалы: [Публикация автора о релизе](https://x.com/TusharXo/status/2096741535891251261)
  - Предпросмотр: ![Персонаж исследует долину, полную цветов; видна цель по сбору писем ветра.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Расследуйте убийство в Blackthorn Manor в приключении с управлением мышью: осматривайте сцены и следуйте уликам, чтобы найти убийцу.
  - Автор: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Платформа: Браузер; интерактивный вход в особняк открылся без входа в аккаунт. Последующие генерируемые сцены не проверялись полностью.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — Автор указывает GPT Astra и H3 Max как инструменты создания этой генеративной детективной игры. [Примечания к проверке](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Предпросмотр: ![Вход в особняк с кликабельной дверью и начальным текстом расследования.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Исследуйте парящие острова, прыгайте и планируйте между поселениями и выполняйте задания жителей.
  - Автор: [timour kosters](https://x.com/timourxyz)
  - Платформа: Браузер на компьютере, клавиатура и мышь; проверены страница версии с заданиями и управление.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — По словам автора, Astra создала доступную для игры 3D-игру с NPC и заданиями, вдохновлёнными местами Edge City. [Примечания к проверке](assets/screenshots/skyward-gathering/SOURCE.md).
  - Предпросмотр: ![Общий вид парящих островов Skyward и элементы управления исследованием и журналом.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Переключайтесь между музыкальной магией Anna и суперспособностями Leo, чтобы пробуждать цветы-мелодии и исследовать Wonder Garden.
  - Автор: [Dharma Utomo](https://x.com/dharmautomo)
  - Платформа: Браузер; начальное задание запустилось без входа в аккаунт. WASD — движение, Space — прыжок, E — способность, Tab — смена героя.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — Автор сообщает, что GPT-6 Astra помогла создать 3D-приключение, и делится видео, где его дети тестируют игру. [Примечания к проверке](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Предпросмотр: ![3D-мир приключений Anna и Leo и интерфейс заданий.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — Исследуйте Rainmist Haven и отправляйтесь к подземельям, используя серии ударов мечом, стихийные умения и уклонения.
  - Автор: [UModeler X PicoBerry](https://x.com/UModeler)
  - Платформа: Браузер на компьютере; клавиатура и мышь, без входа в аккаунт. Дождитесь первоначальной загрузки 3D-ресурсов.
  - GPT-6 Astra: [Заявление автора](https://x.com/UModeler/status/2097792348407099553) — Автор сообщает, что PicoBerry сгенерировала ресурсы, а GPT-6 Astra построила вокруг них экшен-RPG на Three.js. [Примечания к проверке](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - Материалы: [Ссылка автора на релиз](https://x.com/UModeler/status/2097792351129178451)
  - Предпросмотр: ![Deller уклоняется возле фонтана и рыночных прилавков Rainmist Haven; видны здоровье, мана и управление умениями.](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — Наберите отряд, спуститесь в подземелье из ста этажей и сочетайте удары мечом, огненные шары и роли спутников в забеге с необратимой смертью.
  - Автор: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - Платформа: Браузер на компьютере, Wavedash; основная игра запускается без входа в аккаунт. Доступны необязательные аккаунты и платное раннее открытие персонажей.
  - GPT-6 Astra: [Заявление автора](https://x.com/tonysurix/status/2097873333551616355) — Автор прямо сообщает, что эта игра с отрядом и исследованием подземелий создана с GPT-6 Astra. [Примечания к проверке](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - Предпросмотр: ![Герой и нанятый рыцарь на первом этаже подземелья во время атаки огненным шаром; здоровье отряда и мини-карта.](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — Исследуйте остров после кораблекрушения, ищите улики от первого лица и решайте загадки окружения на пути к маяку.
  - Автор: [Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - Платформа: Браузер на компьютере; дождитесь острова, затем нажмите Begin expedition. Бесплатно, без аккаунта и установки.
  - GPT-6 Astra: [Дневник разработки автора](https://smallweblab.com/posts/sunlandia/) — Автор начал с GPT-5.6 Sol, воспользовался помощью Fable и завершил игру с GPT-6 Astra. [Примечания к проверке](assets/screenshots/sunlandia/SOURCE.md).
  - Предпросмотр: ![Берег Sunlandia от первого лица: обломки корабля, сломанный причал и цель найти помощь.](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — Выращивайте микроскопический организм внутри затопленной раковины улитки, собирайте питательные вещества и развивайте новые части тела по мере исследования.
  - Автор: [Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - Платформа: Браузер; бесплатная бета без входа в аккаунт, пять языков интерфейса, включая китайский.
  - GPT-6 Astra: [Ветка автора](https://x.com/Preda2005/status/2097954217180921928) — Marcio сообщает, что описал GPT-6 Astra идею эволюции организма и развил её в доступную по ссылке бету. [Примечания к проверке](assets/screenshots/nacar/SOURCE.md).
  - Предпросмотр: ![Маленькая клетка среди цветных питательных частиц; биомасса, эволюция, инвентарь и элементы интерфейса исследованных вод.](assets/screenshots/nacar/gameplay.jpg)

<a id="platformers-racing"></a>

### Платформеры и гонки

Паркур, испытания с платформами, гонки и игры, построенные вокруг движения и выбора маршрута.

- **[Barrelbound: The Lost Cargo](https://barrelbound.vercel.app/)** — Выберите Rocco или Pip и пройдите три платформенных уровня в джунглях: используйте двойной прыжок, бросайте бочки, катайтесь на вагонетке и собирайте потерянный груз по пути к финальному боссу.
  - Автор: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Платформа: Браузер на настольном компьютере или ноутбуке, английский интерфейс; бесплатно, без входа в аккаунт и установки. Управление с клавиатуры; поддержка геймпада заявлена автором.
  - GPT-6 Astra: [Заявление автора](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73) — Автор использовал GPT-6 Astra в Codex для реализации кода, игровых механик, доработок и тестирования, самостоятельно задавая направление разработки и проверяя игру. Графика создавалась отдельно с помощью генерации изображений; музыка и звуковые эффекты синтезируются через Web Audio.
  - Материалы: [itch.io](https://mafuta.itch.io/barrelbound) · [Видео игрового процесса](https://youtu.be/X87UqF_n3ro) · Phaser 3, Vite и Web Audio; репозиторий исходного кода закрыт. [Проверка и источник снимка (английский)](assets/screenshots/barrelbound/SOURCE.md)
  - Превью: ![Снимок от автора из версии за сентябрь 2026 года: Rocco, бочки и дорожки из бананов на деревянных платформах Jungle Dock Dash.](assets/screenshots/barrelbound/gameplay.jpg)

- **[STORM RACE](https://storm-race.vercel.app/)** — Гонки мини-4WD с разборным видом деталей в гараже, ускорением и сухой, дождливой и штормовой трассой.
  - Автор: [BubuAi](https://x.com/BubuStd)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/storm-race/SOURCE.md).
  - Предпросмотр: ![STORM RACE — Игровой скриншот](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Волк проходит три лунных уровня, собирая монеты и осколки звёзд с помощью двойного прыжка и рывка.
  - Автор: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Предпросмотр: ![FANG STARLIGHT RUN — Игровой скриншот](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Трёхколёсный Bajaj на трассе в духе эфиопского нагорья: пять соперников с ИИ или гонка на время.
  - Автор: [Guzo Technologies](https://x.com/guzotech)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Предпросмотр: ![Blue Bajaj Rally — Игровой скриншот](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Проедьте три круга по Bay Circuit, выберите один из шести картов и заряжайте мини-турбо для выхода из поворотов, чтобы подняться в личном зачёте или набрать очки для команды в формате 4 на 4.
  - Автор: Ryan
  - Платформа: Настольный браузер с WebGL 2 и клавиатурой; бесплатно, без входа в аккаунт и ключа API. Запускается на локальном HTTP-сервере или статическом хостинге; Three.js включён в проект. Командные гонки локальные: один человек и семь гонщиков под управлением ИИ.
  - Участие модели: [История разработки](works/apex-club/CREATION.md) — Итеративная работа в Codex над игровыми механиками, кодом, процедурной графикой и тестами; использование GPT-6 Astra ещё должен подтвердить автор.
  - Материалы: [Исходный код и инструкция по запуску](works/apex-club/README.md) · [Требования и история доработок](works/apex-club/PROMPTS.md) · [Опубликованный диалог с GPT](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Технологии: JavaScript, Three.js.
  - Скриншот: ![Командная гонка APEX CLUB на Bay Circuit: соседние карты, прогресс кругов, текущие очки команд и мини-карта.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Прокатитесь с пеликаном на велосипеде по меняющемуся трёхмерному побережью: перестраивайтесь между тремя полосами, прыгайте и пригибайтесь перед препятствиями, собирайте рыбок сериями и используйте щиты, магниты и шестисекундный рывок с неуязвимостью.
  - Автор: [chat01.ai](https://chat01.ai) (указан в заявке).
  - Платформа: Браузеры на компьютерах и мобильных устройствах, управление клавиатурой или касаниями; по заявке — бесплатно и без входа в аккаунт. Демоверсия независимо не проверена.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — По словам подавшего заявку, игра создана одним промптом; история разработки по ссылке независимо не проверена.
  - Материалы: [Опубликованная история разработки](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Скриншот: ![Титульный экран PELICAN PEDAL с пеликаном на велосипеде у моря; скриншот из Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — 3D-гонки против пяти соперников с ИИ, с выбором машин и трасс, заездами на время, дрифтом и нитро.
  - Автор: zding
  - Платформа: Браузер, китайский интерфейс; запуск проверен без входа и оплаты.
  - GPT-6 Astra: Использование GPT-6 Astra и его роль ожидают подтверждения автора.
  - Предпросмотр: ![狂飙赛车 · OVERDRIVE — Игровой скриншот](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Спускайтесь по трёхмерной шахте, двигаясь только влево и вправо по подвижным, хрупким и исчезающим платформам; избегайте лазеров и пил, собирайте кристаллы и чипы выживания.
  - Автор: [chat01.ai](https://linux.do/u/bandaot)
  - Платформа: Браузер на компьютере, китайский интерфейс, A/D или стрелки. Запуск без регистрации и оплаты проверен; мобильная версия не проверялась.
  - Codex: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — В опубликованной записи указан GPT-6 Pro и показаны создание игры и последовательные доработки; GPT-6 Astra явно не указан.
  - Ресурсы: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Предпросмотр: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Три круга с дрифтом, нитро и предметами; текущее название — 疾风赛道, есть онлайн-режим на 2–4 игроков.
  - Автор: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Платформа: Браузер, бесплатно, без регистрации. По словам автора, может понадобиться VPN/прокси. Одиночный запуск проверен; мультиплеер не проверялся.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — По словам автора: Первая версия — Qwen3.8 Max, вторая полностью переработана с Astra.
  - Предпросмотр: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Дрифтуйте на тропической картинговой трассе, применяйте предметы и соревнуйтесь с семью соперниками на протяжении трёх кругов.
  - Автор: [Pietro Schirano](https://x.com/skirano)
  - Платформа: Браузер; гонка на три круга запустилась без входа в аккаунт. Клавиатурное управление ездой, дрифтом и предметами, а также сенсорные кнопки на экране.
  - GPT-6 Astra: [Подтверждение использования модели](https://openai.com/index/gpt-6-astra/) — На странице запуска Astra от OpenAI есть ссылка на эту интерактивную картинговую игру с указанием Pietro Schirano как автора. Публикация в X — это сообщение участника сообщества, а не самого автора игры. [Примечания к проверке](assets/screenshots/tidal-rush/SOURCE.md).
  - Материалы: [Публикация об игре в X](https://x.com/alexgetmancom/status/2095598460921614825)
  - Предпросмотр: ![Тропическая трасса Tidal Rush с позицией в гонке и управлением дрифтом.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Прыгайте по готическому пиксельному уровню, рубите врагов, прыгайте им на головы или призывайте атаку в коротком приключении с боковой прокруткой.
  - Автор: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Платформа: Браузер, японский интерфейс; клавиатурное управление и заявленная автором поддержка смартфонов. Доступен один уровень.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — Автор сообщает примерно о 25 минутах разработки с Astra и одной правке анимации ходьбы; музыка отдельно приписана Suno. [Примечания к проверке](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Предпросмотр: ![LUNA сражается на готической улице под красной луной; видны шкалы здоровья и призыва.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Гоняйте на велосипедах с астронавтами по кольцам планеты, собирайте звёздную пыль, используйте воздушный след соперников и ускоряйтесь в Orbital Cup.
  - Автор: [Crayon](https://x.com/usecrayon)
  - Платформа: Браузер на Crayon; клавиатура и описанное в документации сенсорное управление. Публичная страница предлагает гонку, заезд на время и бесконечное странствие.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon указывает GPT-6 Astra, Crayon Pro и Three.js как инструменты создания космической велогонки. [Примечания к проверке](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Предпросмотр: ![Астронавты-велосипедисты на кольце планеты; индикаторы круга, позиции и звёздной пыли.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Бегите, прыгайте и раскачивайтесь на лианах на четырёх уровнях джунглей, собирайте сокровища и избегайте крокодилов, улучшая время прохождения.
  - Автор: [Ben Nash](https://x.com/bennash)
  - Платформа: Браузер, клавиатура и экранное управление движением; начальный уровень и инструкции загрузились без входа в аккаунт.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — Автор прямо называет её игрой из четырёх уровней, вдохновлённой Pitfall и созданной с GPT-6 Astra. [Примечания к проверке](assets/screenshots/one-more-vine/SOURCE.md).
  - Предпросмотр: ![Уровень платформера в джунглях с висящими лианами, сокровищами, ямами и крокодилами.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Пройдите подземный мир 1-2 из Mario за Рю Хаябусу из Ninja Gaiden и танк из Battle City: прыжки, лазание по стенам и бои с видом сбоку за Рю, сражения с видом сверху за танк или эстафета от ниндзя к танку ради спасения принцессы.
  - Автор: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Платформа: Браузер на компьютере, китайский интерфейс, рекомендуется клавиатура; бесплатно, без входа в аккаунт и установки.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — По словам автора, GPT-6 Astra использовалась для последовательной разработки и отладки игрового кода и взаимодействий, а сам автор задавал направление игры и давал обратную связь; это не генерация по одному запросу.
  - Материалы: [Страница проекта](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Видео](https://www.bilibili.com/video/BV1erYt69EFP/) · [Проверка и источники изображений (английский)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Права: Неофициальная фанатская игра; права на классических персонажей, изображения и музыку остаются у соответствующих правообладателей. Источники материалов указаны на странице оригинальной игры.
  - Предпросмотр: ![Mario Mix II — предоставленная автором обложка видео, а не снимок игрового процесса.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Скриншот: ![Танк в Mario Mix II стреляет у входа в мир 1-2; запущенная версия 1.0, снимок от 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — Мчитесь сквозь трафик Bengaluru, объезжайте выбоины и мотоциклы курьеров, используя ускорение или боковой рывок, чтобы освободить себе путь.
  - Автор: [Ravi Theja](https://x.com/ravithejads)
  - Платформа: Браузер на компьютере; клавиатурное управление с необязательной автоматической подачей газа, без входа в аккаунт.
  - GPT-6 Astra: [Заявление автора](https://x.com/ravithejads/status/2097181044625887392) — Автор указывает GPT-6 Astra как инструмент создания гонки по дорогам Bengaluru. [Примечания к проверке](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - Предпросмотр: ![Синяя машина игрока в трафике Bengaluru; видны позиция, скорость, таймер и подсказки управления.](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS — Alpine Downhill](https://iamsonic.net/2026/mini-games/skicross.html)** — Соревнуйтесь с тремя лыжниками на спуске с горы, проходите ворота и препятствия и не дайте лавине вас догнать.
  - Автор: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Платформа: Браузер на компьютере; A/D — поворот, Space — прыжок, Shift — ускорение; без входа в аккаунт и загрузок.
  - GPT-6 Astra: [Заявление автора](https://x.com/sonic0828/status/2097601232877781344) — Автор связывает создание подборки мини-игр с GPT-6 Astra и публикует эту лыжную игру в отдельном ответе. [Примечания к проверке](assets/screenshots/skicross/SOURCE.md).
  - Материалы: [Ссылка автора на релиз](https://x.com/sonic0828/status/2097601732297814300)
  - Предпросмотр: ![Четыре лыжника на снежной трассе; бонус за ворота, места в гонке, скорость и расстояние до лавины.](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — Взбирайтесь по мшистой стене, ловите мух, чтобы восстановить хватку, и прячьтесь в укрытиях-отверстиях, пока дождь не смыл паука.
  - Автор: [Luiz Piccini](https://piccini.app/)
  - Платформа: Браузер; бесплатно, без входа в аккаунт. WASD или экранный джойстик.
  - GPT-6 Astra: [Game Bench автора](https://game-bench.piccini.app/) — Game Bench помечает этот опубликованный результат как GPT-6 Astra canary, high, с датой 2026-09-05; он создан по общему игровому заданию платформы. [Примечания к проверке](assets/screenshots/itsy-bitsy-spider/SOURCE.md).
  - Предпросмотр: ![Паук на высоте 2 метра на мшистой кирпичной стене; хватка, мухи, укрытие и джойстик движения.](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — Участвуйте в мотогонках среди индийского городского трафика, лавируйте между автобусами и авторикшами и используйте удары ногами, кулаками и ускорения.
  - Автор: [Kishore](https://x.com/GetKishore)
  - Платформа: Браузер на компьютере; бесплатно, без аккаунта. Перед первым заездом примите или измените сгенерированный псевдоним гонщика.
  - GPT-6 Astra: [Ветка автора о разработке](https://x.com/GetKishore/status/2097906401159102811) — Kishore описывает доработку 3D-игры, созданной с Astra, с помощью уличных референсов и повторных проверок трафика, столкновений и боёв гонщиков. [Примечания к проверке](assets/screenshots/desi-mayhem/SOURCE.md).
  - Предпросмотр: ![Мотогонка в Chennai: гонщик игрока, городской трафик, мини-карта, позиция и таймер гонки.](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — Управляйте аппаратом над галактическим океаном, следуйте через светящиеся ворота и выберите гонку на два круга или бесконечный дрейф.
  - Автор: [Aniket J](https://x.com/aniketjart)
  - Платформа: Браузер; дождитесь 3D-ресурсов, затем нажмите Ride the current. Бесплатно, без входа в аккаунт.
  - GPT-6 Astra: [X](https://x.com/aniketjart/status/2098207146647433534) — Aniket указывает GPT-6 Astra, Blender MCP и Crayon как инструменты создания игры и описывает её как эксперимент с планами дальнейшей доработки игрового процесса. [Примечания к проверке](assets/screenshots/cosmic-tides/SOURCE.md).
  - Предпросмотр: ![Идущая гонка Cosmic Tides: приближение к светящимся воротам над галактическим морем, индикаторы круга и скорости.](assets/screenshots/cosmic-tides/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### Экспериментальные и многопользовательские игры

Необычные механики, сетевые соревнования и совместное прохождение.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Шесть браузерных игр, включая горное ралли, сноуборд и антигравитационные гонки; коллекция считается одной записью.
  - Автор: [Antonio Leiva](https://x.com/antonioleivag)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/astra-arcade/SOURCE.md).
  - Предпросмотр: ![ASTRA Arcade — Игровой скриншот](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — Неофициальная многопользовательская фан-игра Chao Garden: выберите героя Sonic и взаимодействуйте с чао в саду.
  - Автор: [Hank](https://x.com/h4nkdog)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/chao-party/SOURCE.md).
  - Предпросмотр: ![Chao Party — Игровой скриншот](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — Интерактивная художественная песочница с частицами: превращайте 48 000 светящихся точек в цветок, гравитационное кольцо или галактику, воздействуйте на скульптуру и сохраняйте выбранный момент как постер.
  - Автор: [jackroc](https://github.com/jackroc)
  - Платформа: Современный браузер с WebGL; нажмите на название для запуска онлайн. Бесплатно, без входа в аккаунт и ключа API; автономный HTML-файл работает и без интернета. Для необязательного фонового звука требуется Web Audio.
  - GPT-6 Astra: [История создания и вклад модели](works/orbital-garden/README.md#模型与创作记录) — Автор использовал GPT-6 Astra ultra для концепции, кода и текстов с совместной проверкой; это не тест создания за один запрос.
  - Материалы: [Исходный код и инструкция по запуску](works/orbital-garden/README.md) · [Автономный HTML-файл](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Технологии: чистый WebGL, Web Audio, Canvas 2D.
  - Предпросмотр: ![Мятно-зелёный цветок из частиц в Orbital Garden с выбором формы, настройками жизненной силы и скорости времени, а также экспортом постера.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Четыре трёхмерные версии настольных игрушек: выбивайте лёд под пингвином, проводите кроликов через ловушки, удерживайте равновесие платформы с астронавтами и решайте головоломки с выездом из парковки.
  - Автор: [asmoyou](https://github.com/asmoyou)
  - Платформа: Браузеры на компьютерах, планшетах и телефонах; бесплатно, без входа в аккаунт. Локальная игра по очереди за одним экраном на 2–4 места, включая компьютерных соперников, а также одиночные головоломки; сетевой игры нет. Демоверсия независимо не проверена.
  - GPT-6 Astra: [Заявление автора](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — По словам автора, GPT-6 Astra самостоятельно реализовал игры и выполнил тестирование по описаниям игрушек и требованиям к функциям.
  - Материалы: [Исходный код и инструкция по запуску](https://github.com/asmoyou/toy2game) · [Некоммерческая лицензия](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Исходный код доступен; некоммерческое использование бесплатно, коммерческое требует предварительного письменного разрешения автора. Технологии: TypeScript, React, Vite, Three.js.
  - Скриншот: ![Обзор Toy2Game с четырьмя реальными 3D-сценами: лёд с пингвином, ловушки для кроликов, баланс астронавтов и выезд из парковки. Изображение предоставил asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — Физическая песочница на солнечном деревянном столе: прыгайте и растягивайте желе, играйте на качелях и батуте.
  - Автор: [Scott](https://x.com/scottstts)
  - Платформа: Настольный браузер; открыто без входа и оплаты. Мобильная версия не проверялась.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — Автор сообщает об использовании Astra при разработке проекта. [Запись проверки (английский)](assets/screenshots/jelly-baby/SOURCE.md).
  - Ресурсы: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Предпросмотр: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Защищайте радужное ядро рикошетящими снарядами и усилениями; доступны одиночный режим, локальная кооперация и онлайн-бои.
  - Автор: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Платформа: Браузер, бесплатно, без регистрации. По словам автора, может понадобиться VPN/прокси. Одиночный запуск проверен; мультиплеер не проверялся.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — По словам автора: Первая версия — GPT-6 Astra Pro, доработки — GPT-6 Astra в Codex.
  - Предпросмотр: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — Раскрасьте воздушного змея и запускайте его над городскими крышами, регулируя натяжение нити в свободном полёте или испытании со сбором небесных огней на время.
  - Автор: [Tushar / @TusharXo](https://x.com/TusharXo)
  - Платформа: Браузер; выберите персонажа, выйдите на крышу и нажмите Fly. Бесплатно, без входа в аккаунт.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2098156783181467801) — Tushar прямо указывает GPT-6 Astra и Crayon как инструменты создания этой игры о воздушном змее на Three.js и упоминает Images 2.5 для визуальных материалов. [Примечания к проверке](assets/screenshots/above-the-rooftops/SOURCE.md).
  - Предпросмотр: ![Испытание с воздушным змеем над городом; высота, натяжение нити, прогресс сбора небесных огней и управление направлением.](assets/screenshots/above-the-rooftops/gameplay.jpg)

## Что содержит запись

Полезная рекомендация объясняет, что представляет собой игра, где её попробовать и почему она включена в список.

| Сведения | Что указать |
| --- | --- |
| Игра и автор | Название игры и ссылка на её первоначального автора или команду |
| Что в ней интересного | Одно предложение о главной механике без пустых рекламных фраз |
| Доступ | Ссылка на игру в браузере без скачивания, установки, локальной настройки или входа в аккаунт |
| Скриншот игрового процесса | Хотя бы один настоящий скриншот игры с общедоступным URL изображения |
| Платформа и требования | Браузер / компьютер / мобильное устройство; укажите необходимость оплаты, входа в аккаунт или специального оборудования |
| Роль Astra | Заявление автора, дневник разработки или публичная запись, объясняющая вклад GPT-6 Astra |
| Материалы разработки | Исходный код, технологии и история создания, если они доступны |

Использование модели указывается на основании публичного описания автора; неподтверждённые утверждения не выдаются за установленные факты. Играбельные прототипы приветствуются, а открытый исходный код не обязателен.

## Помогите поддерживать список

[Предложите игру через issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) или откройте pull request. Формат записи описан в [руководстве для участников](CONTRIBUTING.md).

Пожалуйста, [сообщайте о неработающих ссылках и неточных сведениях](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), включая ошибки в авторстве и изменения условий доступа.

## Лицензия

Оригинальные тексты подборки и графические материалы этого репозитория передаются в общественное достояние по [CC0 1.0](LICENSE). Игры, код, изображения, товарные знаки и другие сторонние материалы по ссылкам сохраняют собственные лицензии и права. Включение в список не изменяет разрешения на их использование.
