<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 42](https://img.shields.io/badge/Cases-42-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Kumpulan gim menarik yang dibuat dengan GPT-6 Astra.**

Ide seru, gim yang bisa dicoba, dan kisah pengembangan yang menginspirasi kreator berikutnya.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · **Bahasa Indonesia**

[Ajukan gim](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Berkontribusi](CONTRIBUTING.md)

</div>

Halaman ini merupakan terjemahan [README bahasa Inggris](README.md). Periksa versi asli untuk pembaruan terbaru; perbaikan terjemahan juga dipersilakan.

## Mulai di sini

Jelajahi **42 gim dan proyek interaktif**: strategi wilayah Tiga Kerajaan, teka-teki kayu yang saling mengunci dan teka-teki balok geser, penggabungan buah yang lentur, penerbangan satu tombol, pertempuran karpet ajaib, pertahanan pulau dengan jaringan listrik, bertahan hidup di alam liar, menangkap ikan di bawah air, mengelola restoran sushi, dan bertani di pulau, balapan kart di Bay Circuit, bersepeda di pesisir bersama pelikan, mainan meja yang diadaptasi menjadi gim 3D, serta Orbital Garden. Klik judul untuk langsung bermain di peramban.

Katalog diperbarui: **2026-09-09**. Informasi penggunaan model berdasarkan pernyataan kreator atau pengirim; detail yang belum dikonfirmasi ditandai pada setiap entri. Tanggal ini menunjukkan pemeliharaan katalog, bukan pengujian ulang seluruh gim.

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

<a id="strategy-simulation"></a>

### Strategi dan simulasi

Pertahanan menara, kartu strategi, pengelolaan, pembangunan, dan sandbox simulasi.

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

<a id="rpg-adventures"></a>

### RPG dan petualangan

Permainan peran, eksplorasi, petualangan naratif, dan cerita interaktif.

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

<a id="platformers-racing"></a>

### Platformer dan balapan

Parkour, tantangan platform, balapan, serta gim yang berfokus pada gerakan dan rute.

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
