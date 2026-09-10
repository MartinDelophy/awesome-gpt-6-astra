<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 46](https://img.shields.io/badge/Cases-46-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Подборка интересных игр, созданных с помощью GPT-6 Astra.**

Увлекательные идеи, игры, которые можно попробовать, и истории разработки, вдохновляющие новых авторов.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
**Русский** · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Предложить игру](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Участвовать](CONTRIBUTING.md)

</div>

Эта страница — перевод [английского README](README.md). Последние изменения можно сверить с оригиналом; исправления перевода приветствуются.

## С чего начать

Здесь собраны **46 игры и интерактивных проекта**: территориальная стратегия эпохи Троецарствия, деревянные головоломки со сцепленными деталями и сдвижными блоками, объединение мягких фруктов, полёт одной кнопкой, сражения на ковре-самолёте, защита острова с помощью электросети, выживание в дикой природе, подводная охота, управление суши-рестораном и фермерство на острове, гонки на картах по Bay Circuit, велопрогулка с пеликаном вдоль берега, настольные игрушки в 3D и Orbital Garden. Нажмите на название, чтобы играть прямо в браузере.

Каталог обновлён: **2026-09-10**. Сведения об использовании модели основаны на заявлениях авторов или отправителей; неподтверждённые данные отмечены в соответствующих записях. Эта дата означает обновление каталога, а не повторное игровое тестирование всех проектов.

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

<a id="strategy-simulation"></a>

### Стратегии и симуляторы

Защита башнями, стратегические карточные игры, управление, строительство и симуляторы-песочницы.

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

<a id="rpg-adventures"></a>

### Ролевые игры и приключения

Ролевые игры, исследование мира, сюжетные приключения и интерактивные истории.

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

<a id="platformers-racing"></a>

### Платформеры и гонки

Паркур, испытания с платформами, гонки и игры, построенные вокруг движения и выбора маршрута.

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

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Пройдите подземный мир 1-2 из Mario за Рю Хаябусу из Ninja Gaiden и танк из Battle City: прыжки, лазание по стенам и бои с видом сбоку за Рю, сражения с видом сверху за танк или эстафета от ниндзя к танку ради спасения принцессы.
  - Автор: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Платформа: Браузер на компьютере, китайский интерфейс, рекомендуется клавиатура; бесплатно, без входа в аккаунт и установки.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — По словам автора, GPT-6 Astra использовалась для последовательной разработки и отладки игрового кода и взаимодействий, а сам автор задавал направление игры и давал обратную связь; это не генерация по одному запросу.
  - Материалы: [Страница проекта](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Видео](https://www.bilibili.com/video/BV1erYt69EFP/) · [Проверка и источники изображений (английский)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Права: Неофициальная фанатская игра; права на классических персонажей, изображения и музыку остаются у соответствующих правообладателей. Источники материалов указаны на странице оригинальной игры.
  - Предпросмотр: ![Mario Mix II — предоставленная автором обложка видео, а не снимок игрового процесса.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Скриншот: ![Танк в Mario Mix II стреляет у входа в мир 1-2; запущенная версия 1.0, снимок от 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

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
