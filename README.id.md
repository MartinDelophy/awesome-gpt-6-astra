<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 86](https://img.shields.io/badge/Cases-86-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Kumpulan gim menarik yang dibuat dengan GPT-6 Astra.**

Ide seru, gim yang bisa dicoba, dan kisah pengembangan yang menginspirasi kreator berikutnya.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · **Bahasa Indonesia**

[Ajukan gim](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Berkontribusi](CONTRIBUTING.md)

</div>

Halaman ini merupakan terjemahan [README bahasa Inggris](README.md). Periksa versi asli untuk pembaruan terbaru; perbaikan terjemahan juga dipersilakan.

## Mulai di sini

Jelajahi **86 gim dan proyek interaktif**: strategi wilayah Tiga Kerajaan, teka-teki kayu yang saling mengunci dan teka-teki balok geser, penggabungan buah yang lentur, 2048 pembangunan kota dengan generasi prosedural, penerbangan satu tombol, pertempuran karpet ajaib, gim tembak-menembak dengan hujan peluru dalam lima level, pertahanan pulau dengan jaringan listrik, bertahan hidup di alam liar, menangkap ikan di bawah air, mengelola restoran sushi, dan bertani di pulau, balapan kart di Bay Circuit, bersepeda di pesisir bersama pelikan, mainan meja yang diadaptasi menjadi gim 3D, dekorasi rumah 3D, serta Orbital Garden. Klik judul untuk langsung bermain di peramban.

Katalog diperbarui: **2026-09-12**. Informasi penggunaan model berdasarkan pernyataan kreator atau pengirim; detail yang belum dikonfirmasi ditandai pada setiap entri. Tanggal ini menunjukkan pemeliharaan katalog, bukan pengujian ulang seluruh gim.

- **Mencari gim untuk dimainkan?** Jelajahi genre di bawah ini.
- **Sudah membuat gim?** [Ajukan proyek Anda](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) dengan tautan langsung ke gim di peramban, tangkapan layar permainan, dan penjelasan tentang penggunaan GPT-6 Astra.
- **Menemukan proyek yang menarik?** Rekomendasikan karya publik orang lain dengan mencantumkan kreator aslinya.

Daftar ini dikelola komunitas dan tidak berafiliasi dengan OpenAI. Pencantuman merupakan ajakan untuk menjelajah, bukan tolok ukur kinerja atau rekomendasi resmi.

## Gim

- [Aksi dan arkade](#action-arcade)
- [Teka-teki dan asah otak](#puzzles)
- [Strategi dan simulasi](#strategy-simulation)
- [RPG dan petualangan](#rpg-adventures)
- [Platformer dan balapan](#platformers-racing)
- [Eksperimental dan multipemain](#experimental-multiplayer)

<a id="action-arcade"></a>

### Aksi dan arkade

Gim tembak-menembak, pertarungan, bertahan hidup, ritme, dan apa pun yang membuat Anda ingin bermain sekali lagi.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — Gim terbang 3D dengan satu tombol: kepakkan sayap untuk melewati celah dan menambah skor.
  - Kreator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Peramban, dirancang untuk perangkat seluler.
  - GPT-6 Astra: [Pengujian sekali generasi dan prompt asli kreator](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Materi pengembangan: [Kode sumber](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [HTML mandiri](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Pratinjau: ![Layar awal Mosswing menampilkan karakter terbang dan celah di antara pilar batu.](assets/screenshots/mosswing/gameplay.jpg)

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — Mainkan sepak bola sebelas lawan sebelas antara Barcelona dan Real Madrid di stadion 3D, dengan operan, tembakan dan pergantian pemain.
  - Pembuat: [Mindblown / @mind](https://mindblown.ai/@mind)
  - Platform: Browser desktop; keyboard dan mouse, tanpa login wajib.
  - GPT-6 Astra: [Catatan verifikasi](assets/screenshots/stadium-elite/SOURCE.md) — Kiriman Mindblown yang diberikan menyebut Three.js dan GPT-6 Astra.
  - Pratinjau: ![Stadium Elite — El Clásico: Mainkan sepak bola sebelas lawan sebelas antara Barcelona dan Real Madrid di stadion 3D, dengan operan, tembakan dan pergantian pemain.](assets/screenshots/stadium-elite/gameplay.png)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Terbangkan karpet ajaib melintasi dunia berbentuk bola, lewati cincin, keluarkan mantra, dan lawan musuh serta bos.
  - Kreator: [threapchills](https://github.com/threapchills)
  - Platform: Peramban desktop dengan tetikus dan papan ketik; memerlukan WebGL 2.
  - GPT-6 Astra: Kreator menyatakan bahwa gim ini dibuat dengan GPT-6 Astra di [bagian About repositori](https://github.com/threapchills/MagicCarpetWizard).
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](https://github.com/threapchills/MagicCarpetWizard) · Teknologi: Three.js, Vite.
  - Pratinjau: ![Layar awal Magic Carpet Wizard menampilkan pengendara karpet, kota, dan cincin terbang bercahaya.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Gim tembak otomatis dengan tiga pesawat, lima sektor, dan bos dengan beberapa fase.
  - Kreator: [jackroc](https://github.com/jackroc)
  - GPT-6 Astra: [README](works/thunderfall/README.md#创作与许可) — Menurut kreator, dikembangkan dengan GPT-6 Astra ultra melalui perbaikan berulang.
  - [README](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · JavaScript, Canvas 2D, Web Audio.
  - Pratinjau: ![THUNDERFALL — Tangkapan permainan](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Lindungi suar dari gelombang tank musuh di enam sektor 3D, dengan dinding bata yang dapat dihancurkan, gerakan melesat, dan pulsa elektromagnetik.
  - Kreator: [chat01.ai](https://linux.do/u/bandaot)
  - Platform: Peramban dengan WebGL 2, antarmuka bahasa Mandarin; panduan menjelaskan kontrol papan ketik, tetikus, dan sentuh. Pertempuran dimulai tanpa login atau pembayaran.
  - GPT-6 Astra: Penggunaan GPT-6 Astra dan perannya menunggu konfirmasi kreator.
  - Pratinjau: ![IRON BASTION / 钢铁防线 — Tangkapan permainan](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — Gim pertarungan manusia stik yang masih dikembangkan, dengan pukulan, tendangan, uppercut, bintang ninja, dan tangkisan; tersedia latihan bot serta menu daring/teman.
  - Kreator: [Dwayne](https://x.com/CtrlAltDwayne)
  - Platform: Peramban desktop, papan ketik; latihan bot tanpa login. Multipemain daring dan pengontrol belum diuji secara independen.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — Kreator secara eksplisit menyatakan bahwa gim pertarungan multipemain ini dibuat dengan GPT-6 Astra dan masih dalam pengembangan.
  - Pratinjau: ![Stick Fighter — Tangkapan permainan](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — FPS perang cat terinspirasi Van Gogh dengan enam seniman, senjata khas dan target 20 poin.
  - Kreator: [Peter Gostev](https://x.com/petergostev)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/gogh-strike/SOURCE.md).
  - Pratinjau: ![Gogh Strike · Paint Clash — Tangkapan permainan](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Kokpit bergaya Asteroids dengan empat kamera, radar, meriam ganda dan penerbangan inersial.
  - Kreator: [Eyes Wide Open](https://x.com/DantesClown)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Pratinjau: ![ASTEROIDS · Deepfield — Tangkapan permainan](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — FPS taktis di terminal kargo berhujan dengan senapan rinci, HUD tempur dan sembilan musuh.
  - Kreator: [hiraeth](https://x.com/WoahWurdz)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/blackwater/SOURCE.md).
  - Sumber daya: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Pratinjau: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — Arena duel fantasi dengan empat pahlawan, enam kemampuan per kelas, lawan AI serta ruang daring.
  - Kreator: [JUMPERZ](https://x.com/jumperz)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/cinderfall/SOURCE.md).
  - Pratinjau: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Seret anggota tubuh penari ragdoll ke sasaran yang sesuai untuk meraih poin dan memperpanjang ronde breakdance berbatas waktu.
  - Kreator: [Satrio](https://x.com/satrio_d)
  - Platform: Browser desktop, kontrol mouse; ronde berbatas waktu berhasil dimulai tanpa login.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — Kreator menyatakan bahwa Astra menyempurnakan game breakdance yang sudah ia buat beserta tampilannya. [Catatan verifikasi](assets/screenshots/breakdance/SOURCE.md).
  - Pratinjau: ![Penari ragdoll membidik sasaran kaki di arena breakdance dengan batas waktu.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — FPS browser bertema Perang Dunia II dengan penampilan prajurit dan zombi, pilihan perlengkapan senjata, latihan melawan bot, dan opsi lobi.
  - Kreator: [Rishi](https://x.com/0xRishi)
  - Platform: Browser desktop, keyboard dan mouse; latihan bot berhasil dimulai tanpa login. Multipemain dan dukungan kontroler belum diuji.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi menyatakan bahwa Astral War dibuat dengan Astra, Three.js, Meshy, dan ElevenLabs. Situs saat ini juga mencantumkan Vesper; lihat catatan atribusi. [Catatan verifikasi](assets/screenshots/astral-war/SOURCE.md).
  - Pratinjau: ![Tampilan pertempuran Astral War yang sedang berjalan, dengan senjata dan kontrol medan perang.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Terjun dari tiga ketinggian platform, lakukan salto dan putaran, lalu bidik cincin yang mengapung untuk meningkatkan skor masuk ke air.
  - Kreator: [BubuAi](https://x.com/BubuStd)
  - Platform: Browser; halaman game mandiri langsung berjalan tanpa login atau unduhan. Lompatan terjun berhasil dimulai pada pemeriksaan 2026-09-09; tersedia kontrol keyboard dan kontrol sentuh yang dijelaskan dalam dokumentasi.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — Kreator melaporkan pembuatan dengan satu prompt Astra Pro menggunakan Three.js. [Catatan verifikasi](assets/screenshots/flop-club/SOURCE.md).
  - Referensi: [Pengenalan proyek](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Pratinjau: ![Penerjun di platform tinggi di atas cincin sasaran dan kontrol pendaratan di air.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Terbang melintasi sirkuit kerangka neon yang makin cepat setiap putaran, atur waktu dorongan dan perpindahan fase untuk bertahan lebih lama.
  - Kreator: [Thomas Ricouard](https://x.com/Dimillian)
  - Platform: Browser desktop; penerbangan dengan perhitungan skor berhasil dimulai tanpa login. WASD untuk terbang, Space untuk dorongan, dan Shift untuk perpindahan fase.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — Kreator menyatakan bahwa Astra membuat game dan musiknya berdasarkan arahan visual neon/synthwave serta seni konsep. [Catatan verifikasi](assets/screenshots/vector-dive/SOURCE.md).
  - Pratinjau: ![Lintasan terbang neon Vector Dive dengan pesawat pemain dan HUD permainan.](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — Lindungi kota pesisir dari gelombang kelinci liar dengan tiga senjata, rute di atas atap, gerakan melesat, dan kait penarik.
  - Kreator: [OpenDesign](https://x.com/OpenDesignHQ)
  - Platform: Browser desktop; keyboard dan mouse, tanpa login atau unduhan.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign menyebut game Three.js ini sebagai versi buatan GPT-6 Astra dalam perbandingan dua modelnya. [Catatan verifikasi](assets/screenshots/harbor-skirmish/SOURCE.md).
  - Pratinjau: ![Pandangan senapan orang pertama ke kota Seabreeze, kelinci yang mendekat, penghitung gelombang, dan kontrol senjata.](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — Underground Boxing](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — Bertinju selama tiga ronde berbatas waktu di ring bawah tanah 3D, sambil menyeimbangkan pukulan, tangkisan, penghindaran, dan stamina.
  - Kreator: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Platform: Browser desktop; WASD untuk bergerak, J/K untuk memukul, L untuk menangkis, dan Space untuk menghindar; tanpa login atau unduhan.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/sonic0828/status/2097601232877781344) — Utas pameran kreator menyebut GPT-6 Astra sebagai alat untuk menghasilkan kumpulan mini-game ini; balasan tentang tinju menautkan versi ini. [Catatan verifikasi](assets/screenshots/underground-boxing/SOURCE.md).
  - Referensi: [Tautan rilis dari kreator](https://x.com/sonic0828/status/2097601584410796401)
  - Pratinjau: ![Dua petinju saling memukul di ring bawah tanah yang diterangi lampu, dengan penghitung waktu ronde, bilah kesehatan, dan stamina.](assets/screenshots/underground-boxing/gameplay.jpg)

- **[Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — Saling melancarkan pukulan atas dan bawah di jalan saat senja, tangkis serangan balasan, dan desak lawan ke lubang saluran sambil menghindari pot bunga yang jatuh.
  - Kreator: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Platform: Browser desktop; A/D untuk bergerak, J/K untuk memukul, U/I untuk menangkis, dan Space untuk menghindar; tanpa login.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/sonic0828/status/2097601232877781344) — Pameran karya GPT-6 Astra dari kreator mencakup balasan rilis terpisah yang menautkan game pertarungan jalanan ini. [Catatan verifikasi](assets/screenshots/urban-champion-3d/SOURCE.md).
  - Referensi: [Tautan rilis dari kreator](https://x.com/sonic0828/status/2097601861658587376)
  - Pratinjau: ![Petarung biru dan merah saling memukul di depan Sunset Mart, dengan penghitung waktu ronde dan bilah stamina.](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[Zero District — Shells 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — Bertahan dari pengepungan kota selama tiga menit dengan tembakan otomatis, menghindar melalui gerakan, mengumpulkan pengalaman, dan memilih peningkatan.
  - Kreator: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Platform: Browser; bergerak dengan WASD atau menyeret, bidikan otomatis; tanpa login atau unduhan.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/sonic0828/status/2097601232877781344) — Kreator menyebut GPT-6 Astra dalam pengumuman koleksi dan menautkan versi bertahan hidup 3D ini dalam balasan tersendiri. [Catatan verifikasi](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - Referensi: [Tautan rilis dari kreator](https://x.com/sonic0828/status/2097602391122264310)
  - Pratinjau: ![Penyintas menembak otomatis ke arah musuh di sekelilingnya di jalan kota, dengan 14 musuh dikalahkan dan sisa waktu 166 detik.](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — Lawan gelombang musuh virus komputer di arena orang pertama yang digambar dengan karakter ASCII, dengan kemampuan berlari cepat, melompat, dan meluncur.
  - Kreator: [Acker Code](https://x.com/acker_code)
  - Platform: Browser desktop; keyboard dan mouse, tanpa login. Klik arena untuk mengunci mouse; Esc untuk melepasnya.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/acker_code/status/2097542957070975286) — Kreator secara eksplisit menyebut Codex dan GPT-6 Astra sebagai alat pembuatan game tembak-menembak bergaya ASCII ini. [Catatan verifikasi](assets/screenshots/ascii-district/SOURCE.md).
  - Pratinjau: ![Halaman berkarakter ASCII dengan musuh virus yang mendekat dan HUD senapan menunjukkan 29 peluru setelah menembak.](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — Jaga keseimbangan kapibara yang menari di perahu naga, miringkan tubuh melawan ombak, dan selesaikan enam gerakan sebelum waktu 40 detik habis.
  - Kreator: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Platform: Browser desktop; gratis tanpa login. Klik Play; fitur akun bersifat opsional.
  - GPT-6 Astra: [Halaman game dari kreator](https://www.aigameshare.com/games/aura-farming-game) — Kreator mencantumkan GPT-6 Astra dan Codex untuk game ini, bersama Blender, Three.js, ImageGen, dan WebAudio. [Catatan verifikasi](assets/screenshots/aura-farming/SOURCE.md).
  - Pratinjau: ![Kapibara menari di perahu naga, dengan kontrol memiringkan tubuh dan menahan posisi serta HUD tantangan enam gerakan.](assets/screenshots/aura-farming/gameplay.jpg)

<a id="puzzles"></a>

### Teka-teki dan asah otak

Teka-teki logika, tantangan fisika, permainan kata, dan mekanisme kecil yang kreatif.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Gim penggabungan semangka yang menggunakan perubahan bentuk dan tumbukan buah yang lentur.
  - Kreator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Peramban modern; kreator juga menyediakan versi HTML mandiri yang dapat diunduh.
  - GPT-6 Astra: [Pengujian sekali generasi dan prompt asli kreator](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Materi pengembangan: [Kode sumber](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [HTML mandiri](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Pratinjau: ![Permainan Melon Lab dengan buah lentur di dalam wadah penggabungan dan pengaturan fisika.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Hapus setidaknya tiga gelembung terhubung dengan warna sama; kelompok besar menghasilkan bom dan pelangi. Tersedia mode santai, level, dan berbatas waktu.
  - Kreator: zding
  - Platform: Browser, antarmuka Mandarin; berhasil dibuka tanpa login atau pembayaran.
  - GPT-6 Astra: Penggunaan GPT-6 Astra dan perannya menunggu konfirmasi kreator.
  - Pratinjau: ![Q弹消消乐 — Tangkapan permainan](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Bongkar teka-teki kayu enam bagian yang saling mengunci dan selesaikan dua susunan balok geser Huarong Dao di bengkel 3D, dengan petunjuk dan pembatalan langkah.
  - Kreator: [MartinDelophy](https://github.com/MartinDelophy) (penggagas proyek dan pengaju).
  - Platform: Peramban modern dengan WebGL 2; antarmuka berbahasa Mandarin, kontrol tetikus, papan ketik, dan sentuh. Gratis, tanpa login atau kunci API; progres tersimpan di peramban saat ini.
  - Keterlibatan model: [Catatan pembuatan](works/sunjing-puzzles/CREATION.md) — Pengembangan berulang melalui Codex untuk desain gim, visual 3D prosedural, aturan, pemecah teka-teki, dan pengujian; penggunaan spesifik GPT-6 Astra masih menunggu konfirmasi kreator (pengajuan draf).
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](works/sunjing-puzzles/README.md) · [Kebutuhan](works/sunjing-puzzles/PROMPTS.md) · Teknologi: React, Vinext/Vite, Three.js.
  - Pratinjau: ![Teka-teki kayu enam bagian Sunjing di meja kerja 3D hijau dengan nomor bagian dan kontrol penarikan.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker](https://citymaker.0to1app.com)** — Puzzle 2048 di blok kota 4×4: gabungkan bangunan sejenis untuk menapaki sebelas tingkat arsitektur di tiap kota, dari rumah tradisional hingga cakrawala kota yang khas. Tersedia dua belas kota dengan sudut pandang yang dapat diputar 45° sekali putar.
  - Kreator: [Derek Wang](https://github.com/derek-wangpch)
  - Platform: Browser desktop dan seluler dengan WebGL; bahasa Inggris, Mandarin Sederhana, dan Mandarin Tradisional. Gratis, tanpa login atau kunci API; progres tiap kota tersimpan di browser yang digunakan. Dapat dipasang ke Layar Utama iOS.
  - GPT-6 Astra: [Catatan pembuatan](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — Kreator melaporkan penggunaan GPT-6 Astra untuk menghasilkan geometri prosedural seluruh 132 model bangunan, melalui alur berbasis referensi: riset dari berbagai sudut, pembentukan massa bangunan yang mendahulukan siluet, dan validasi tangkapan layar; bukan percobaan satu kali prompt.
  - Referensi: [Kode sumber dan penyiapan](https://github.com/derek-wangpch/OpenCityMaker) · [Catatan verifikasi](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Dibuat dengan: React, TypeScript, Vite, dan Three.js; seluruh 132 model bangunan merupakan geometri prosedural orisinal.
  - Pratinjau: ![Papan Hong Kong di CityMaker dengan bangunan 3D low-poly pada kisi 4×4, skor, deretan pilihan kota, dan kontrol rotasi.](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — Tarik ketapel dan lontarkan Bonker kecil ke penyangga kayu untuk merobohkan bangunan dan menyingkirkan sasaran.
  - Kreator: [edmund5](https://x.com/edmund5)
  - Platform: Browser; seret untuk membidik dan lepaskan untuk menembak. Bisa dimainkan tanpa login; login Google opsional.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/edmund5/status/2097603093819261002) — Kreator menyebut GPT-6 Astra dan Three.js untuk game ini, dengan musik latar yang dibuat menggunakan Suno. [Catatan verifikasi](assets/screenshots/bonkshot/SOURCE.md).
  - Pratinjau: ![Puzzle Grasslands pertama setelah tembakan, menampilkan menara kayu yang sebagian runtuh, satu sasaran tersisa, dan 2.200 poin.](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — Jelajahi rumah kaca yang terkunci, pulihkan pipa air tembaga, atur tanaman dan pantulan cahaya, lalu selamatkan benih terakhirnya.
  - Kreator: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Platform: Browser; klik Play, lalu Begin. Gratis, tanpa login; kontrol dalam bahasa Inggris dan Mandarin.
  - GPT-6 Astra: [Halaman game dari kreator](https://www.aigameshare.com/games/greenhouse-escape-room) — Kreator menyebut GPT-6 Astra dan Codex sebagai alat pengembangan, bersama ImageGen dan WebAudio. [Catatan verifikasi](assets/screenshots/greenhouse-escape-room/SOURCE.md).
  - Pratinjau: ![Ruang Waterworks dalam game pelarian rumah kaca, dengan perangkat pipa sembilan petak, penghitung waktu, dan inventaris.](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

<a id="strategy-simulation"></a>

### Strategi dan simulasi

Pertahanan menara, kartu strategi, pengelolaan, pembangunan, dan sandbox simulasi.

- **[Tidehook](https://tidehook-mallow.vercel.app/)** — Kemudikan kapal tunda kecil Mallow dalam tiga pelayaran pesisir: tarik barang temuan yang bobotnya memengaruhi akselerasi dan belokan, serahkan ke derek pelabuhan, lalu pulihkan lensa mercusuar.
  - Kreator: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Platform: Browser komputer desktop atau laptop, antarmuka bahasa Inggris; gratis, tanpa login atau instalasi. Kendali dengan keyboard atau klik pada air; progres disimpan di browser saat ini. Permainan pada ponsel belum diverifikasi.
  - GPT-6 Astra: [Pernyataan kreator](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74) — Kreator menggunakan GPT-6 Astra di Codex untuk membangun dan menyempurnakan game Canvas, fisika penarikan, penyerahan ke derek, antarmuka, cuaca dan audio secara bertahap, sambil menentukan arah desain dan mencoba permainan sendiri. Grafis dibuat terpisah melalui generasi gambar; musik dan efek suara disintesis dengan Web Audio.
  - Sumber: [itch.io](https://mafuta.itch.io/tidehook) · [Cuplikan permainan](https://youtu.be/wlEh8gnDOnU) · JavaScript murni, Canvas 2D, Vite dan Web Audio; repositori kode sumber bersifat privat. [Verifikasi dan sumber tangkapan layar (bahasa Inggris)](assets/screenshots/tidehook/SOURCE.md)
  - Pratinjau: ![Tangkapan layar dari kreator untuk rilis 2026-09-11: Mallow menarik muatan berat di antara pulau-pulau The Old Sound, dengan jarak ke pelabuhan dan peta mini.](assets/screenshots/tidehook/gameplay.png)

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Tata tiga rumah 3D, ubah material dan pencahayaan lalu jelajahi dari sudut pandang mata; dengan penyimpanan lokal dan impor GLB.
  - Kreator: [Ryan-fm](https://github.com/Ryan-fm)
  - Platform: Peramban desktop WebGL; UI Tionghoa dan Inggris. Gratis, tanpa login. Perangkat Quest fisik belum diuji.
  - Codex: [GitHub](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Pengembangan berulang dengan Codex tercatat; atribusi tepat kepada GPT-6 Astra menunggu konfirmasi kreator.
  - Sumber daya: [GitHub](https://github.com/Ryan-fm/Dwellcraft)
  - Pratinjau: ![Dwellcraft](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Catur melawan komputer di papan 3D yang dapat diputar, dengan karakter mini, riwayat langkah dan pembatalan.
  - Kreator: [에코_eco](https://x.com/echo3042)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Pratinjau: ![Little Kingdom Chess / 작은 왕국 체스 — Tangkapan permainan](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Rakit kendaraan tanpa mesin dari barang bekas lalu meluncur menuruni bukit; dimulai di bengkel orang pertama.
  - Kreator: [TheLabGuy](https://x.com/hermesailab)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/junk-run/SOURCE.md).
  - Pratinjau: ![JUNK RUN — Tangkapan permainan](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — Gim strategi papan heksagonal melawan komputer: tempatkan agen tersembunyi, lakukan gertakan, dan kepung kelompok musuh untuk memicu rangkaian penangkapan.
  - Kreator: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Platform: Peramban, antarmuka Inggris; langkah pertama dan balasan komputer diverifikasi tanpa login atau pembayaran.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — Menurut kreator, Astra mengubah desain gimnya menjadi demo yang dapat dimainkan dalam satu percobaan; proses pengembangannya belum diaudit secara independen.
  - Pratinjau: ![Spy or Lie — Tangkapan permainan](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Pimpin Wei, Shu, atau Wu dalam kampanye berbasis giliran di 15 kota: kelola emas dan gandum, komandoi jajaran 108 perwira dengan potret unik buatan AI, dan bersaing dengan faksi AI untuk menyatukan negeri.
  - Kreator: [MartinDelophy](https://github.com/MartinDelophy) (penggagas proyek dan pengaju).
  - Platform: Peramban modern; antarmuka berbahasa Mandarin, kontrol tetikus dan sentuh. Gratis, tanpa login atau kunci API; simpanan lokal dapat diimpor dan diekspor.
  - GPT-6 Astra: [Catatan pembuatan](works/three-kingdoms/CREATION.md) — Penggunaan dikonfirmasi kreator: kolaborasi berulang melalui Codex untuk aturan, antarmuka, AI, keseimbangan, dan pengujian; medan dan potret perwira dibuat dengan alat pembuat gambar.
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](works/three-kingdoms/README.md) · [Kebutuhan](works/three-kingdoms/PROMPTS.md) · Teknologi: React, TypeScript, Vinext/Vite.
  - Pratinjau: ![Permainan Three Kingdoms yang menampilkan peta kota bergaya lukisan tinta, kontrol sumber daya, dan potret perwira.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Hubungkan jaringan listrik di pulau mini, bangun dan tingkatkan menara, lalu kelola daya yang terbatas untuk mempertahankan mercusuar dari sepuluh gelombang musuh dan bos terakhir.
  - Kreator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Peramban desktop dan seluler modern, dengan dukungan bahasa Mandarin dan Inggris; gratis, tanpa login atau kunci API. Suara opsional memerlukan Web Audio.
  - GPT-6 Astra: [Catatan pengembangan dan kontribusi model](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Digunakan untuk desain permainan, kode, grafis prosedural, dan pengujian melalui beberapa iterasi; bukan pengujian sekali generasi.
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](https://github.com/stackloomdev/last-beacon) · [Kebutuhan dan catatan iterasi](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Teknologi: JavaScript, Canvas 2D, Web Audio.
  - Pratinjau: ![Last Beacon dalam bahasa Inggris: menara, mortir, dan menara es yang terhubung ke jaringan listrik mempertahankan pulau dari musuh di jalur pesisir.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — Simulasi bertahan hidup di koloni bawah tanah: arahkan tiga penghuni untuk menggali dan membangun sambil mengelola oksigen, makanan, dan listrik.
  - Kreator: dudu
  - Platform: Browser dengan Canvas, antarmuka Mandarin, mouse dan keyboard; berhasil dibuka tanpa login atau pembayaran.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — Pengirim menyatakan seluruh pengembangan menggunakan GPT-6 Astra; belum diverifikasi secara independen.
  - Pratinjau: ![缺氧 · 小小星球 — Tangkapan permainan](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — Petualangan menara piksel lima belas lantai dengan perhitungan serangan/pertahanan, sumber daya terbatas, dan kunci tiga warna.
  - Kreator: yw
  - Platform: Browser, antarmuka Mandarin; berhasil dibuka tanpa login atau pembayaran.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — Pengirim menyediakan prompt pengembangan pada bagian GPT-6 Astra; kontribusi tepat model belum diverifikasi secara independen.
  - Pratinjau: ![魔塔 · 永夜之阶 — Tangkapan permainan](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — Gim bertahan hidup dan strategi untuk peramban yang diajukan sebagai pembuatan ulang Don't Starve. Tangkapan layar menampilkan penjelajahan hutan, pengumpulan sumber daya, inventaris, serta indikator kesehatan, rasa lapar, dan kewarasan.
  - Kreator: dudu
  - Platform: Peramban; tangkapan layar menunjukkan antarmuka berbahasa Mandarin dan kontrol papan ketik. Ketentuan pembayaran dan login tidak disebutkan; demo belum diverifikasi secara independen.
  - GPT-6 Astra: [Pernyataan pengaju](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — Menurut pengaju, seluruh pengembangan dilakukan oleh GPT-6 Astra.
  - Materi pengembangan: Kode sumber publik maupun catatan pengembangan terpisah tidak disediakan.
  - Pratinjau: ![Tangkapan layar 永恒荒野 dari Issue #26: karakter di samping api unggun di hutan, dengan inventaris, indikator bertahan hidup, dan peta mini.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — Rekreasi Dave the Diver untuk peramban yang memadukan penangkapan ikan bawah air dengan harpun, pengelolaan restoran sushi, dan pertanian di pulau.
  - Kreator: dudu
  - Platform: Peramban; antarmuka berbahasa Mandarin dengan kontrol mouse dan papan ketik. Akses dan dimulainya penyelaman telah diperiksa tanpa login atau pembayaran.
  - GPT-6 Astra: [Pernyataan pengaju](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — Menurut pengaju, seluruh pengembangan dilakukan oleh GPT-6 Astra.
  - Materi pengembangan: Kode sumber publik maupun catatan pengembangan terpisah tidak disediakan.
  - Pratinjau: ![Permainan rekreasi Dave the Diver: penyelam di antara ikan, dengan indikator oksigen dan kedalaman serta inventaris hasil tangkapan.](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — Roguelike kartu bertema startup: rekrut tim dan lawan peniru, bug serta tagihan cloud.
  - Kreator: [Peter Yang](https://x.com/petergyang)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/no-moat/SOURCE.md).
  - Pratinjau: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Bangun desa abad pertengahan 3D yang rinci dengan jalan, pekerja dan rantai produksi.
  - Kreator: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/the-free-game/SOURCE.md).
  - Sumber daya: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Pratinjau: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Kumpulkan pendanaan dan GPU, bangun pusat data dan pasukan, lalu dahului laboratorium AI pesaing dalam mencapai ASI atau hancurkan markas mereka.
  - Kreator: [timour kosters](https://x.com/timourxyz)
  - Platform: Browser desktop; game strategi waktu nyata satiris yang gratis. Pertandingan awal melawan komputer dan pengumpulan sumber daya telah diverifikasi tanpa login.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — Kreator menyatakan bahwa ia mengembangkan game yang terinspirasi Age of Empires ini dengan Astra selama dua hari. [Catatan verifikasi](assets/screenshots/agi-of-empires/SOURCE.md).
  - Pratinjau: ![Medan perang AGI of Empires, penghitung sumber daya, dan markas.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Mainkan Go pada jaringan jalan dan papan graf yang tidak biasa, dengan opsi bergantian pada satu perangkat dan bermain bersama teman.
  - Kreator: [Boris Power](https://x.com/BorisMPower)
  - Platform: Browser; papan lokal terbuka tanpa login. Pertandingan daring bersama teman belum diuji.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — Kreator menyebut game Go multipemain pada graf sembarang ini sebagai hasil satu prompt Astra. [Catatan verifikasi](assets/screenshots/atlas-go/SOURCE.md).
  - Pratinjau: ![Batu hitam dan putih pada papan graf sarang lebah Atlas Go.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Kumpulkan bahan mentah, alirkan daya ke mesin, dan sambungkan ban berjalan untuk mengubah lahan kosong menjadi pabrik yang beroperasi.
  - Kreator: [Dan](https://x.com/aidaniil)
  - Platform: Browser desktop; tutorial tamu terbuka tanpa login, tetapi penyimpanan progres memerlukan login. Multipemain belum diuji secara independen.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — Kreator menyatakan bahwa ia dan saudaranya membuat game ini dengan Astra, Blender MCP, dan Cloudflare Durable Objects, terinspirasi oleh Satisfactory dan Besiege. [Catatan verifikasi](assets/screenshots/ironwood/SOURCE.md).
  - Pratinjau: ![Mesin pabrik Ironwood, ban berjalan, dan tutorial pengelolaan sumber daya.](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — RTS pemain tunggal dengan pembangunan markas, perebutan lokasi serta komando pasukan darat dan udara.
  - Pembuat: [Mustafa Akın](https://x.com/mustafaakin)
  - Platform: Browser desktop; keyboard dan mouse, tanpa login wajib.
  - GPT-6 Astra: [Catatan verifikasi](assets/screenshots/dust-front/SOURCE.md) — Kiriman Mustafa Akın yang diberikan menyebut ChatGPT Astra dan Blender MCP, dengan sekitar 40 prompt termasuk pembuatan aset.
  - Pratinjau: ![DUST FRONT: RTS pemain tunggal dengan pembangunan markas, perebutan lokasi serta komando pasukan darat dan udara.](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Bangun pangkalan, perebutkan wilayah sumber daya, dan pimpin tank, infanteri, pesawat, serta drone melawan pasukan AI dalam gim strategi waktu nyata bertema perang modern, dengan mata-mata dan intelijen untuk memperoleh keunggulan.
  - Kreator: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Platform: Peramban desktop, antarmuka bahasa Mandarin, mouse dan papan ketik; pertandingan pemain tunggal berhasil dimulai tanpa login, pembayaran, atau instalasi.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — Dalam unggahan yang ditautkan, kreator menyatakan menggunakan “GPT Astra” untuk membuat RTS ini; versi model yang tepat dan alur pengembangan terperinci tidak disebutkan.
  - Referensi: [Kiriman](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Catatan verifikasi (bahasa Inggris)](assets/screenshots/frontline-command/SOURCE.md)
  - Pratinjau: ![Frontline Command: pangkalan, tiga tank terpilih, dan penempatan pembangkit listrik dalam pertandingan yang sedang berjalan; v0.8, diambil pada 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — Bidik mesin pendorong koin 3D, padukan koin khusus dan relik, lalu selesaikan enam ronde dengan jumlah jatuhan terbatas dan target skor.
  - Kreator: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Platform: Browser; klik Play, gratis tanpa login. Penyimpanan melalui akun bersifat opsional.
  - GPT-6 Astra: [Halaman game dari kreator](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — Kreator mencantumkan GPT-6 Astra bersama GPT-5.6 Sol dan Codex; halaman game tidak memisahkan kontribusi masing-masing. [Catatan verifikasi](assets/screenshots/mintfall/SOURCE.md).
  - Pratinjau: ![Baki koin 3D Mintfall pada ronde pertama, menampilkan 33 poin, 44 jatuhan, dan kontrol koin khusus.](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — Pimpin rombongan kereta ke barat, atur jatah makanan, perbaikan, dan perburuan, lalu buat keputusan sepanjang Oregon Trail.
  - Kreator: [Biswas](https://x.com/bis_waz)
  - Platform: Browser desktop; mulai dengan rombongan fiktif yang disediakan, tanpa login atau instalasi.
  - GPT-6 Astra: [X](https://x.com/bis_waz/status/2098023593468907747) — Biswas menyatakan bahwa ia memakai GPT-6 Astra untuk membuat versi 3D modern The Oregon Trail ini dan menautkan game yang bisa dimainkan. [Catatan verifikasi](assets/screenshots/westward/SOURCE.md).
  - Pratinjau: ![Kereta dan lembu di jalan menuju Kansas River, dengan jarak tempuh 25 mil dan panel perbekalan ekspedisi.](assets/screenshots/westward/gameplay.jpg)

<a id="rpg-adventures"></a>

### RPG dan petualangan

Permainan peran, eksplorasi, petualangan naratif, dan cerita interaktif.

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — Jelajahi RPG aksi bergaya voxel, lawan Hollowborn dengan Spark Bolt dan Sunburst, hindari bahaya lewat teleportasi dan bangunkan gerbang matahari.
  - Pembuat: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - Platform: Browser desktop; keyboard dan mouse, tanpa login wajib.
  - GPT-6 Astra: Penggunaan model untuk game ini belum terkonfirmasi; balasan kreator yang diberikan mengizinkan pencantuman, tetapi tidak menyebut model atau perannya. [Catatan verifikasi](assets/screenshots/the-sunshard/SOURCE.md).
  - Pratinjau: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — Petualangan multipemain retro dengan dunia bersama, keterampilan, pengumpulan sumber daya dan pertarungan; tersedia akses tamu.
  - Kreator: [Rohan Varma](https://x.com/TheRohanVarma)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/lumbridge/SOURCE.md).
  - Pratinjau: ![Lumbridge / Elderwood Realms — Tangkapan permainan](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — Petualangan tunjuk-dan-klik bernuansa misterius dengan empat bab dan tiga belas teka-teki: bandingkan Masa Kini dengan Gemanya, kumpulkan bukti, dan ungkap misteri observatorium yang waktunya berhenti pada 00:17.
  - Kreator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Peramban komputer dan ponsel; bahasa Mandarin dan Inggris. Mainkan langsung secara daring dan gratis, tanpa login, instalasi, atau kunci API. Efek WebGL opsional, dengan ilustrasi asli sebagai pengganti jika tidak didukung.
  - GPT-6 Astra: [Catatan pengembangan](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Kolaborasi bertahap di Codex untuk cerita, teka-teki, teks dwibahasa, kode, efek 3D prosedural, dan pengujian.
  - Sumber daya: [Kode sumber dan petunjuk menjalankan](https://github.com/stackloomdev/silent-meridian) · [Asal karya visual](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Teknologi: JavaScript, WebGL, Web Audio.
  - Pratinjau: ![Silent Meridian saat dimainkan: observatorium dengan mekanisme kuningan 3D, penanda petunjuk, kontrol Masa Kini/Gema, dan jurnal penyelidikan.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — RPG aksi terinspirasi Legend dengan prajurit, penyihir dan tao, perlengkapan, dungeon serta pertarungan otomatis.
  - Kreator: [知识猫AI实验室](https://x.com/GeekCatX)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/mir176/SOURCE.md).
  - Pratinjau: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Adaptasi 3D Zork tidak resmi dengan penjelajahan orang pertama, teka-teki, pertempuran dan jurnal.
  - Kreator: [Ethan Mollick](https://x.com/emollick)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/zork/SOURCE.md).
  - Pratinjau: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Jelajahi Springfield dengan berjalan kaki dan mengendarai mobil dalam versi buatan ulang tidak resmi untuk browser yang memiliki misi, lalu lintas, dan kejaran polisi.
  - Kreator: [Dwayne](https://x.com/CtrlAltDwayne)
  - Platform: Browser desktop; misi pertama berhasil dimuat tanpa login setelah pemuatan awal aset berukuran besar. Penyelesaian seluruh kampanye belum diuji.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — Kreator menjelaskan pembangunan ulang game untuk web dengan GPT-6 Astra; repositori juga mencantumkan bantuan Claude dalam pemuatan. Hak atas aset game asli tetap milik pemegang haknya. [Catatan verifikasi](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Referensi: [Kode sumber dan penyiapan](https://github.com/Vheissu/hit-and-run-web)
  - Pratinjau: ![Homer di Springfield dengan tujuan misi pertama dan peta mini yang terlihat.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Susuri lembah 2.5D bermandikan sinar matahari, ikuti jalur, dan kumpulkan tiga surat angin dalam petualangan eksplorasi yang tenang.
  - Kreator: [Tushar](https://x.com/TusharXo)
  - Platform: Browser, dihosting di Crayon; halaman game publik dan pemutar tersemat telah diperiksa.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar menjelaskan penggunaan Astra untuk menghasilkan jalur dan aset; unggahan lanjutan mengumumkan rilis yang bisa dimainkan dengan Astra, Three.js, dan Crayon. [Catatan verifikasi](assets/screenshots/crayon-adventure/SOURCE.md).
  - Referensi: [Pengumuman rilis kreator](https://x.com/TusharXo/status/2096741535891251261)
  - Pratinjau: ![Karakter menjelajahi lembah penuh bunga dengan tujuan pengumpulan surat angin yang terlihat.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Selidiki Blackthorn Manor dalam misteri pembunuhan tunjuk-dan-klik, periksa lokasi dan ikuti petunjuk untuk menemukan pembunuhnya.
  - Kreator: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Platform: Browser; pintu masuk manor yang interaktif terbuka tanpa login. Adegan lanjutan yang dihasilkan belum diuji sepenuhnya.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — Kreator mencantumkan GPT Astra dan H3 Max untuk game detektif generatif ini. [Catatan verifikasi](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Pratinjau: ![Pintu masuk manor dengan pintu yang dapat diklik dan teks pembuka penyelidikan.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Jelajahi pulau-pulau terapung, melompat dan melayang antarkomunitas, serta selesaikan misi untuk para penghuninya.
  - Kreator: [timour kosters](https://x.com/timourxyz)
  - Platform: Browser desktop, keyboard dan mouse; halaman edisi misi dan kontrolnya telah diperiksa.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — Kreator menyatakan bahwa Astra membuat game 3D yang bisa dimainkan dengan NPC dan misi yang terinspirasi lokasi-lokasi Edge City. [Catatan verifikasi](assets/screenshots/skyward-gathering/SOURCE.md).
  - Pratinjau: ![Gambaran pulau terapung Skyward dengan kontrol eksplorasi dan jurnal.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Beralih antara sihir musik Anna dan kekuatan super Leo untuk membangunkan bunga melodi dan menjelajahi Wonder Garden.
  - Kreator: [Dharma Utomo](https://x.com/dharmautomo)
  - Platform: Browser; misi pembuka berhasil dimulai tanpa login. WASD untuk bergerak, Space untuk melompat, E untuk kekuatan, dan Tab untuk berganti pahlawan.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — Kreator menyatakan bahwa GPT-6 Astra membantunya membuat petualangan 3D ini dan membagikan video anak-anaknya menguji game tersebut. [Catatan verifikasi](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Pratinjau: ![Dunia petualangan 3D Anna dan Leo beserta antarmuka misinya.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — Jelajahi Rainmist Haven dan menuju ruang bawah tanah dengan kombo pedang, keterampilan elemen, dan gerakan menghindar.
  - Kreator: [UModeler X PicoBerry](https://x.com/UModeler)
  - Platform: Browser desktop; keyboard dan mouse, tanpa login. Tunggu pemuatan awal aset 3D hingga selesai.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/UModeler/status/2097792348407099553) — Kreator menyatakan bahwa PicoBerry menghasilkan aset, sementara GPT-6 Astra membangun RPG aksi berbasis Three.js yang menggunakan aset tersebut. [Catatan verifikasi](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - Referensi: [Tautan rilis dari kreator](https://x.com/UModeler/status/2097792351129178451)
  - Pratinjau: ![Deller menghindar di Rainmist Haven dekat air mancur dan kios pasar, dengan kesehatan, mana, dan kontrol keterampilan.](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — Rekrut kelompok, turuni ruang bawah tanah seratus lantai, dan gabungkan serangan pedang, bola api, serta peran rekan dalam petualangan dengan kematian permanen.
  - Kreator: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - Platform: Browser desktop di Wavedash; game dasar dimulai tanpa login. Tersedia akun opsional dan pembukaan karakter lebih awal yang berbayar.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/tonysurix/status/2097873333551616355) — Kreator secara eksplisit menyatakan bahwa game penjelajahan dungeon berkelompok ini dibuat dengan GPT-6 Astra. [Catatan verifikasi](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - Pratinjau: ![Pahlawan dan kesatria sewaan menggunakan bola api di lantai dungeon pertama, dengan kesehatan kelompok dan peta mini.](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — Jelajahi pulau setelah kapal karam, telusuri petunjuk dari sudut pandang orang pertama, dan pecahkan teka-teki lingkungan dalam perjalanan menuju mercusuar.
  - Kreator: [Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - Platform: Browser desktop; tunggu pulau dimuat, lalu pilih Begin expedition. Gratis, tanpa akun atau instalasi.
  - GPT-6 Astra: [Catatan pengembangan kreator](https://smallweblab.com/posts/sunlandia/) — Kreator memulai dengan GPT-5.6 Sol, mendapat bantuan dari Fable, dan menyelesaikan game dengan GPT-6 Astra. [Catatan verifikasi](assets/screenshots/sunlandia/SOURCE.md).
  - Pratinjau: ![Pantai Sunlandia dari sudut pandang orang pertama, dengan bangkai kapal, dermaga rusak, dan tujuan mencari bantuan.](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — Tumbuhkan organisme mikroskopis di dalam cangkang siput yang terendam, kumpulkan nutrisi, dan kembangkan bagian tubuh baru saat menjelajah.
  - Kreator: [Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - Platform: Browser; beta gratis tanpa login, dengan lima bahasa antarmuka termasuk Mandarin.
  - GPT-6 Astra: [Utas kreator](https://x.com/Preda2005/status/2097954217180921928) — Marcio menyatakan bahwa ia menjelaskan gagasan evolusi organisme ini kepada GPT-6 Astra dan mengembangkannya menjadi beta yang ditautkan. [Catatan verifikasi](assets/screenshots/nacar/SOURCE.md).
  - Pratinjau: ![Sel kecil di antara nutrisi berwarna, dengan biomassa, evolusi, inventaris, dan kontrol wilayah air yang telah dijelajahi.](assets/screenshots/nacar/gameplay.jpg)

<a id="platformers-racing"></a>

### Platformer dan balapan

Parkour, tantangan platform, balapan, serta gim yang berfokus pada gerakan dan rute.

- **[Barrelbound: The Lost Cargo](https://barrelbound.vercel.app/)** — Pilih Rocco atau Pip untuk tiga lintasan platformer di hutan: lakukan lompatan ganda, lempar tong, naik gerobak tambang, dan kumpulkan muatan yang hilang menuju pertarungan bos terakhir.
  - Kreator: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Platform: Browser komputer desktop atau laptop, antarmuka bahasa Inggris; gratis, tanpa login atau instalasi. Kontrol keyboard; dukungan kontroler berdasarkan keterangan kreator.
  - GPT-6 Astra: [Pernyataan kreator](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73) — Kreator menggunakan GPT-6 Astra di Codex untuk implementasi, mekanik permainan, penyempurnaan bertahap dan pengujian, sambil menentukan arah desain dan mencoba permainan sendiri. Grafis dibuat terpisah melalui generasi gambar; musik dan efek suara disintesis dengan Web Audio.
  - Sumber: [itch.io](https://mafuta.itch.io/barrelbound) · [Cuplikan permainan](https://youtu.be/X87UqF_n3ro) · Phaser 3, Vite dan Web Audio; repositori kode sumber bersifat privat. [Verifikasi dan sumber tangkapan layar (bahasa Inggris)](assets/screenshots/barrelbound/SOURCE.md)
  - Pratinjau: ![Tangkapan layar dari kreator untuk rilis September 2026: Rocco, tong dan jalur pisang di platform kayu Jungle Dock Dash.](assets/screenshots/barrelbound/gameplay.jpg)

- **[STORM RACE](https://storm-race.vercel.app/)** — Balapan mini 4WD dengan tampilan komponen terurai di garasi, boost serta lintasan kering, hujan dan badai.
  - Kreator: [BubuAi](https://x.com/BubuStd)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/storm-race/SOURCE.md).
  - Pratinjau: ![STORM RACE — Tangkapan permainan](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Pandu serigala melewati tiga level malam, mengumpulkan koin dan pecahan bintang dengan lompatan ganda serta dash.
  - Kreator: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Pratinjau: ![FANG STARLIGHT RUN — Tangkapan permainan](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Kendarai Bajaj roda tiga di sirkuit dataran tinggi terinspirasi Ethiopia melawan lima AI atau catatan waktu.
  - Kreator: [Guzo Technologies](https://x.com/guzotech)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Pratinjau: ![Blue Bajaj Rally — Tangkapan permainan](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Balapan tiga putaran di Bay Circuit, pilih satu dari enam kart, dan isi tenaga mini turbo untuk keluar dari tikungan agar naik peringkat individu atau meraih poin dalam tim 4 lawan 4.
  - Kreator: Ryan
  - Platform: Peramban desktop dengan WebGL 2 dan papan ketik; gratis, tanpa login atau kunci API. Berjalan melalui server HTTP lokal atau hosting statis; Three.js disertakan secara lokal. Balapan tim bersifat lokal: satu manusia dan tujuh pembalap AI.
  - Keterlibatan model: [Catatan pengembangan](works/apex-club/CREATION.md) — Pengembangan berulang melalui Codex untuk mekanisme permainan, kode, visual prosedural, dan pengujian; atribusi kepada GPT-6 Astra masih menunggu konfirmasi kreator.
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](works/apex-club/README.md) · [Kebutuhan dan catatan iterasi](works/apex-club/PROMPTS.md) · [Percakapan GPT yang dibagikan](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Teknologi: JavaScript, Three.js.
  - Pratinjau: ![Balapan tim APEX CLUB di Bay Circuit dengan kart di sekitar, progres putaran, poin tim terkini, dan peta mini.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Kayuh sepeda bersama pelikan di pesisir 3D yang berubah: berpindah di antara tiga lajur, melompat atau menunduk untuk menghindari rintangan, kumpulkan kombo ikan, serta gunakan perisai, magnet, dan lesatan kebal selama enam detik.
  - Kreator: [chat01.ai](https://chat01.ai) (sebagaimana dicantumkan dalam pengajuan).
  - Platform: Peramban komputer dan ponsel dengan kontrol papan ketik atau sentuh; menurut pengajuan, gratis dan tanpa login. Demo belum diverifikasi secara independen.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — Pengaju menyatakan gim dibuat dengan satu prompt; catatan pengembangan yang ditautkan belum diverifikasi secara independen.
  - Materi pengembangan: [Catatan pengembangan yang dibagikan](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Pratinjau: ![Layar judul PELICAN PEDAL dengan pelikan bersepeda di tepi laut; tangkapan layar disertakan dalam Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — Balapan 3D melawan lima rival AI, dengan pilihan mobil dan lintasan, uji waktu, drift, dan nitro.
  - Kreator: zding
  - Platform: Browser, antarmuka Mandarin; berhasil dibuka tanpa login atau pembayaran.
  - GPT-6 Astra: Penggunaan GPT-6 Astra dan perannya menunggu konfirmasi kreator.
  - Pratinjau: ![狂飙赛车 · OVERDRIVE — Tangkapan permainan](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Turun melalui sumur 3D dengan bergerak ke kiri dan kanan di platform bergerak, rapuh, dan menghilang berkala; hindari laser dan gergaji sambil mengumpulkan kristal dan cip bertahan hidup.
  - Kreator: [chat01.ai](https://linux.do/u/bandaot)
  - Platform: Peramban desktop, antarmuka Mandarin, tombol A/D atau panah. Berhasil dimulai tanpa akun atau pembayaran; seluler belum diuji.
  - Codex: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — Catatan bersama berlabel GPT-6 Pro dan mendokumentasikan pembuatan gim serta revisi bertahap; GPT-6 Astra tidak disebut secara eksplisit.
  - Sumber daya: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Pratinjau: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Balapan tiga putaran dengan drift, nitro, dan item; judul saat ini 疾风赛道 dan tersedia mode daring untuk 2–4 pemain.
  - Kreator: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Platform: Peramban, gratis, tanpa akun. Pembuat menyebut VPN/proksi mungkin diperlukan. Awal solo diuji; multipemain belum diuji.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — Menurut pembuat: Versi pertama dengan Qwen3.8 Max; versi kedua dibangun ulang sepenuhnya dengan Astra.
  - Pratinjau: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Lakukan drift di sirkuit kart tropis, gunakan item, dan hadapi tujuh pesaing selama tiga putaran.
  - Kreator: [Pietro Schirano](https://x.com/skirano)
  - Platform: Browser; balapan tiga putaran berhasil dimulai tanpa login. Kontrol keyboard untuk mengemudi, drift, dan item, ditambah tombol sentuh di layar.
  - GPT-6 Astra: [Bukti penggunaan model](https://openai.com/index/gpt-6-astra/) — Halaman peluncuran Astra dari OpenAI menautkan game kart interaktif ini dan mencantumkan Pietro Schirano sebagai kreatornya. Unggahan penemuan di X merupakan kiriman komunitas, bukan unggahan kreator sendiri. [Catatan verifikasi](assets/screenshots/tidal-rush/SOURCE.md).
  - Referensi: [Temuan di X](https://x.com/alexgetmancom/status/2095598460921614825)
  - Pratinjau: ![Lintasan kart tropis Tidal Rush dengan posisi balapan dan kontrol drift.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Lompati level seni piksel gotik, tebas atau injak musuh, atau panggil serangan dalam petualangan singkat dengan gulir samping.
  - Kreator: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Platform: Browser, antarmuka Jepang; kontrol keyboard dan dukungan ponsel yang dilaporkan kreator. Tersedia satu level.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — Kreator melaporkan sekitar 25 menit pengembangan dengan Astra dan satu perbaikan animasi berjalan; musik dikreditkan secara terpisah kepada Suno. [Catatan verifikasi](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Pratinjau: ![LUNA bertarung di jalan gotik di bawah bulan merah, dengan meter kesehatan dan pemanggilan.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Balapkan pesepeda astronaut di cincin planet, kumpulkan debu bintang, manfaatkan aliran udara di belakang pesaing, dan melaju dengan dorongan dalam Orbital Cup.
  - Kreator: [Crayon](https://x.com/usecrayon)
  - Platform: Browser di Crayon; kontrol keyboard dan kontrol sentuh yang dijelaskan dalam dokumentasi. Halaman publik menawarkan mode balapan, uji waktu, dan penjelajahan tanpa akhir.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon mencantumkan GPT-6 Astra, Crayon Pro, dan Three.js untuk game bersepeda luar angkasa ini. [Catatan verifikasi](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Pratinjau: ![Pesepeda astronaut berlomba di cincin planet, dengan indikator putaran, posisi, dan debu bintang.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Berlari, melompat, dan berayun melintasi empat level hutan, kumpulkan harta, dan hindari buaya sambil memperbaiki catatan waktu.
  - Kreator: [Ben Nash](https://x.com/bennash)
  - Platform: Browser, keyboard dan kontrol gerakan di layar; level pembuka dan petunjuk dimuat tanpa login.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — Kreator secara eksplisit menyebutnya game empat level yang terinspirasi Pitfall dan dibuat dengan GPT-6 Astra. [Catatan verifikasi](assets/screenshots/one-more-vine/SOURCE.md).
  - Pratinjau: ![Level platformer hutan dengan sulur menggantung, harta, lubang, dan buaya.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Jelajahi dunia bawah tanah 1-2 dari Mario bersama Ryu Hayabusa dari Ninja Gaiden dan tank Battle City: melompat, memanjat dinding, dan bertarung dengan tampilan samping sebagai Ryu, bertempur dari sudut pandang atas sebagai tank, atau menyelamatkan putri lewat estafet ninja lalu tank.
  - Kreator: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Platform: Peramban desktop, antarmuka bahasa Mandarin, papan ketik disarankan; gratis, tanpa login atau instalasi.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — Kreator menyatakan bahwa GPT-6 Astra digunakan untuk mengembangkan dan memperbaiki kode gim serta interaksi secara bertahap, sementara ia memberikan arah permainan dan masukan; bukan hasil satu prompt saja.
  - Sumber daya: [Halaman proyek](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Video](https://www.bilibili.com/video/BV1erYt69EFP/) · [Verifikasi dan sumber gambar (bahasa Inggris)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Hak: Gim penggemar tidak resmi; hak atas karakter, gambar, dan musik klasik tetap milik pemegang hak masing-masing. Kredit materi tersedia di halaman gim asli.
  - Pratinjau: ![Mario Mix II — sampul video yang diberikan kreator, bukan tangkapan permainan.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Tangkapan layar: ![Tank Mario Mix II menembak di pintu masuk dunia 1-2; versi 1.0 sedang berjalan, diambil pada 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — Balapan di tengah lalu lintas Bengaluru, hindari jalan berlubang dan motor pengantar, lalu gunakan dorongan atau ayunan ke samping untuk membuka ruang.
  - Kreator: [Ravi Theja](https://x.com/ravithejads)
  - Platform: Browser desktop; kontrol keyboard dengan gas otomatis opsional, tanpa login.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/ravithejads/status/2097181044625887392) — Kreator mengaitkan pembuatan game balap jalanan Bengaluru ini dengan GPT-6 Astra. [Catatan verifikasi](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - Pratinjau: ![Mobil biru pemain di lalu lintas Bengaluru, dengan posisi balapan, kecepatan, penghitung waktu, dan petunjuk kontrol.](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS — Alpine Downhill](https://iamsonic.net/2026/mini-games/skicross.html)** — Balapan menuruni gunung melawan tiga pemain ski, lewati gerbang dan rintangan, serta tetap mendahului longsoran salju.
  - Kreator: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Platform: Browser desktop; A/D untuk mengarahkan, Space untuk melompat, dan Shift untuk dorongan; tanpa login atau unduhan.
  - GPT-6 Astra: [Pernyataan kreator](https://x.com/sonic0828/status/2097601232877781344) — Kreator menyebut GPT-6 Astra untuk koleksi mini-game ini dan membagikan game ski tersebut dalam balasan khusus. [Catatan verifikasi](assets/screenshots/skicross/SOURCE.md).
  - Referensi: [Tautan rilis dari kreator](https://x.com/sonic0828/status/2097601732297814300)
  - Pratinjau: ![Empat pemain ski di lintasan bersalju, dengan bonus gerbang, peringkat, kecepatan, dan indikator jarak longsoran.](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — Panjat dinding berlumut, tangkap lalat untuk memulihkan daya cengkeram, dan bersembunyilah di lubang perlindungan sebelum hujan menghanyutkan laba-laba.
  - Kreator: [Luiz Piccini](https://piccini.app/)
  - Platform: Browser; gratis tanpa login. WASD atau joystick di layar.
  - GPT-6 Astra: [Game Bench milik kreator](https://game-bench.piccini.app/) — Game Bench memberi label karya terbit ini sebagai GPT-6 Astra canary, high, bertanggal 2026-09-05, dibuat dari arahan game bersama milik platform tersebut. [Catatan verifikasi](assets/screenshots/itsy-bitsy-spider/SOURCE.md).
  - Pratinjau: ![Laba-laba memanjat dinding bata berlumut pada ketinggian 2 meter, dengan daya cengkeram, lalat, tempat berlindung, dan joystick gerakan.](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — Balapkan sepeda motor di tengah lalu lintas kota India, selip di antara bus dan bajaj sambil memakai tendangan, pukulan, dan dorongan.
  - Kreator: [Kishore](https://x.com/GetKishore)
  - Platform: Browser desktop; gratis tanpa akun. Terima atau edit nama panggilan pengendara yang dihasilkan sebelum perjalanan pertama.
  - GPT-6 Astra: [Utas pengembangan kreator](https://x.com/GetKishore/status/2097906401159102811) — Kishore menjelaskan penyempurnaan game 3D buatan Astra dengan referensi jalanan serta pengujian berulang terhadap lalu lintas, tabrakan, dan pertarungan pengendara. [Catatan verifikasi](assets/screenshots/desi-mayhem/SOURCE.md).
  - Pratinjau: ![Balapan motor di Chennai dengan pengendara pemain, lalu lintas kota, peta mini, posisi, dan penghitung waktu balapan.](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — Kendarai wahana melintasi samudra galaktik, ikuti gerbang bercahaya, dan pilih balapan dua putaran atau hanyut tanpa akhir.
  - Kreator: [Aniket J](https://x.com/aniketjart)
  - Platform: Browser; tunggu aset 3D, lalu pilih Ride the current. Gratis tanpa login.
  - GPT-6 Astra: [X](https://x.com/aniketjart/status/2098207146647433534) — Aniket mencantumkan GPT-6 Astra, Blender MCP, dan Crayon untuk game ini; ia menyebutnya eksperimen dengan rencana penyempurnaan gameplay lebih lanjut. [Catatan verifikasi](assets/screenshots/cosmic-tides/SOURCE.md).
  - Pratinjau: ![Balapan Cosmic Tides yang sedang berlangsung, mendekati gerbang bercahaya di atas laut galaktik dengan indikator putaran dan kecepatan.](assets/screenshots/cosmic-tides/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### Eksperimental dan multipemain

Mekanisme tidak biasa, kompetisi daring, dan pengalaman bermain kooperatif.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Enam gim peramban, termasuk reli gunung, snowboard dan balapan antigravitasi; dihitung sebagai satu koleksi.
  - Kreator: [Antonio Leiva](https://x.com/antonioleivag)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/astra-arcade/SOURCE.md).
  - Pratinjau: ![ASTRA Arcade — Tangkapan permainan](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — Gim penggemar Chao Garden multipemain tidak resmi: pilih karakter Sonic dan berinteraksi dengan Chao di taman.
  - Kreator: [Hank](https://x.com/h4nkdog)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/chao-party/SOURCE.md).
  - Pratinjau: ![Chao Party — Tangkapan permainan](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — Sandbox seni partikel interaktif: ubah 48.000 titik cahaya menjadi bunga, cincin gravitasi, atau galaksi, ganggu bentuk patungnya, dan ekspor suatu momen sebagai poster.
  - Kreator: [jackroc](https://github.com/jackroc)
  - Platform: Peramban modern dengan WebGL; klik judul untuk mencobanya secara daring. Gratis, tanpa login atau kunci API; HTML mandiri juga dapat dijalankan luring. Suara latar opsional memerlukan Web Audio.
  - GPT-6 Astra: [Catatan pembuatan dan kontribusi model](works/orbital-garden/README.md#模型与创作记录) — Kreator menggunakan GPT-6 Astra ultra untuk konsep, kode, dan teks, dengan peninjauan bersama; bukan pengujian sekali generasi.
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](works/orbital-garden/README.md) · [HTML mandiri](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Teknologi: WebGL murni, Web Audio, Canvas 2D.
  - Pratinjau: ![Bunga partikel hijau mint Orbital Garden dengan pilihan bentuk, pengaturan vitalitas dan kecepatan waktu, serta ekspor poster.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Empat adaptasi 3D mainan meja: pecahkan es di bawah penguin, tuntun kelinci melewati perangkap, seimbangkan astronaut di atas platform, dan pecahkan teka-teki keluar dari tempat parkir.
  - Kreator: [asmoyou](https://github.com/asmoyou)
  - Platform: Peramban komputer, tablet, dan ponsel; gratis, tanpa login. Permainan lokal bergiliran pada satu layar untuk 2–4 posisi pemain, termasuk lawan komputer, serta teka-teki pemain tunggal; tanpa multipemain daring. Demo belum diverifikasi secara independen.
  - GPT-6 Astra: [Pernyataan kreator](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — Menurut kreator, GPT-6 Astra mengimplementasikan gim dan menjalankan pengujian secara mandiri berdasarkan deskripsi mainan dan kebutuhan fitur.
  - Materi pengembangan: [Kode sumber dan petunjuk menjalankan](https://github.com/asmoyou/toy2game) · [Lisensi nonkomersial](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Kode sumber tersedia; penggunaan nonkomersial gratis, penggunaan komersial memerlukan izin tertulis terlebih dahulu dari penulis. Teknologi: TypeScript, React, Vite, Three.js.
  - Pratinjau: ![Ikhtisar Toy2Game dengan empat adegan 3D gim yang sebenarnya: es penguin, perangkap kelinci, keseimbangan astronaut, dan keluar dari parkiran. Gambar disediakan oleh asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — Taman bermain fisika di meja kayu yang cerah: lompatkan dan regangkan jeli, dengan ayunan serta trampolin.
  - Kreator: [Scott](https://x.com/scottstts)
  - Platform: Peramban desktop; dibuka tanpa login atau pembayaran. Seluler belum diuji.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — Kreator menyatakan menggunakan Astra dalam pengembangan proyek ini. [Catatan verifikasi (Inggris)](assets/screenshots/jelly-baby/SOURCE.md).
  - Sumber daya: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Pratinjau: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Lindungi inti pelangi dengan peluru memantul dan peningkatan, melalui mode solo, kerja sama lokal, atau pertempuran daring.
  - Kreator: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Platform: Peramban, gratis, tanpa akun. Pembuat menyebut VPN/proksi mungkin diperlukan. Awal solo diuji; multipemain belum diuji.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — Menurut pembuat: Versi pertama dengan GPT-6 Astra Pro; perbaikan berikutnya dengan GPT-6 Astra di Codex.
  - Pratinjau: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — Warnai layang-layang dan terbangkan di atas atap kota, atur ketegangan benang dalam penerbangan bebas atau tantangan mengumpulkan cahaya langit berbatas waktu.
  - Kreator: [Tushar / @TusharXo](https://x.com/TusharXo)
  - Platform: Browser; pilih karakter, masuk ke atap, lalu pilih Fly. Gratis tanpa login.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2098156783181467801) — Tushar secara eksplisit menyebut GPT-6 Astra dan Crayon untuk game layang-layang Three.js ini serta Images 2.5 untuk visualnya. [Catatan verifikasi](assets/screenshots/above-the-rooftops/SOURCE.md).
  - Pratinjau: ![Tantangan layang-layang di atas kota, dengan ketinggian, ketegangan benang, progres cahaya langit, dan kontrol arah.](assets/screenshots/above-the-rooftops/gameplay.jpg)

## Isi setiap entri

Rekomendasi yang berguna menjelaskan seperti apa gimnya, di mana mencobanya, dan mengapa gim itu masuk daftar ini.

| Informasi | Yang perlu dicantumkan |
| --- | --- |
| Gim dan kreator | Judul gim dan tautan ke kreator atau tim aslinya |
| Hal yang menarik | Satu kalimat tentang mekanisme utama tanpa promosi kosong |
| Akses | Tautan untuk langsung bermain di peramban tanpa unduhan, instalasi, penyiapan lokal, atau login |
| Tangkapan layar permainan | Setidaknya satu tangkapan layar permainan asli dengan URL gambar yang dapat diakses publik |
| Platform dan persyaratan | Peramban / desktop / seluler; jelaskan jika perlu membayar, login, atau memakai perangkat keras khusus |
| Peran Astra | Pernyataan kreator, catatan pengembangan, atau catatan publik yang menjelaskan kontribusi GPT-6 Astra |
| Materi pengembangan | Kode sumber, teknologi, dan kisah pembuatan, jika tersedia |

Penggunaan model dicatat berdasarkan penjelasan publik kreator; klaim tanpa bukti tidak disajikan sebagai fakta yang telah dikonfirmasi. Prototipe yang dapat dimainkan juga diterima, dan membuka kode sumber tidak diwajibkan.

## Bantu kelola daftar ini

[Ajukan gim melalui issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) atau buka pull request. Lihat format entri dalam [panduan kontribusi](CONTRIBUTING.md).

Silakan [laporkan tautan rusak atau informasi yang keliru](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), termasuk kesalahan atribusi dan perubahan persyaratan akses.

## Lisensi

Teks kurasi dan karya visual asli dalam repositori ini didedikasikan ke domain publik berdasarkan [CC0 1.0](LICENSE). Gim, kode, gambar, merek dagang, dan konten pihak ketiga yang ditautkan tetap mengikuti lisensi dan hak masing-masing. Pencantuman tidak mengubah izin penggunaannya.
