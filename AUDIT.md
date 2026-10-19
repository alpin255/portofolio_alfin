# Audit & Rencana Redesain Portofolio
**Klien / Profil:** Muhammad Alfin Prayoga  
**Peran:** Software & Web Developer (Alumni SMKN 1 Rejotangan TKR &rarr; Mahasiswa S1 TI Universitas Bhinneka PGRI)  
**Referensi Utama:** [DevSync by Godly / Framer](https://godly.design/templates/devsync/)  
**Tanggal Audit:** 19 Oktober 2026  
**Auditor:** Senior Front-End Engineer & Art Director  

---

## 1. Audit Codebase Saat Ini

### A. Stack & Struktur Komponen
* **Core Stack:** Pure HTML5 Semantik, Vanilla CSS3 (Custom Properties / Design Tokens), Vanilla JavaScript (ES6+ modular tanpa framework tambun).
* **Komponen Eksisting:**
  * `header.navbar`: Brand monogram (`AP`), tautan navigasi numerik (`00` - `06`), jam lokal real-time Tulungagung (WIB), indikator status ketersediaan kerja, dan tombol toggle tema (*Dark/Light*).
  * `section#home` (Hero): Layout asimetris dengan meta bar koordinat & disiplin, heading nama, teks deskriptif latar belakang TKR &rarr; Informatika, serta bingkai potret *archive plate*.
  * `section#about` (Latar Belakang): Kutipan filosofi bengkel otomotif ke software, tabel spesifikasi profil, narasi peralihan karier, dan strip metrik.
  * `section#skills` (Kemampuan Teknis): Tab filter kategori (Backend, Frontend, Desktop, Tools) dan grid kartu instrumen rekayasa.
  * `section#projects` (Studi Kasus & Portofolio): 2 karya unggulan (*Flagship Case Study* E-Pelanggaran SMK & Java Desktop POS) serta katalog sekunder dinamis yang terhubung ke modal dialog interaktif.
  * `section#education` (Jejak Pendidikan): Garis waktu kronologis Universitas Bhinneka PGRI dan SMKN 1 Rejotangan.
  * `section#principles` (Prinsip Rekayasa): 4 pilar etos kerja berbasis presisi bengkel otomotif dan performa bersih.
  * `section#contact` (Saluran Komunikasi): Surel langsung, integrasi WhatsApp `085816288915`, informasi domisili, dan formulir pengiriman pesan terstruktur.
  * `footer`: Colophon bergaya editorial arsitektural dengan metadata hak cipta dan navigasi cepat.
  * `404.html`: **Belum tersedia** (harus dibuat khusus dengan kepribadian teknis yang kuat).

---

## 2. Temuan Elemen "AI Generik" & Pelanggaran Aturan

1. **Typographic Identity yang Kurang Fokus:**
   * Sebelumnya memuat 4 jenis font sekaligus (`Syne`, `Instrument Serif`, `JetBrains Mono`, `Plus Jakarta Sans`). Ini membuat visual terasa ragu-ragu antara majalah fashion dan teknikal.
   * *Solusi DevSync:* Mengadopsi arsitektur tipografi **Space Grotesk** (display & headings tegas, geometris, modern engineering) dipadukan dengan **JetBrains Mono** (metadata teknis, label kode, status, indeks) dan sans netral berbobot seimbang.
2. **Palet Warna Terlalu Banyak Aksen:**
   * Menggunakan 4 warna aksen sekaligus (Biru `#2563eb`, Sky `#0ea5e9`, Emerald `#10b981`, Amber `#f59e0b`).
   * *Solusi DevSync:* Menertibkan palet ke **1 warna aksen fungsional utama**: *Precision Mint / Signal Green* (`#7af298` / `#10b981`) di atas latar arang monokromatik (`#111111` dan `#161616`), dengan batas garis rambut 1px (`#25282b`).
3. **Format Proyek Belum Menyerupai Studi Kasus Rekayasa Nyata:**
   * Bagian karya unggulan masih menggunakan format ringkasan biasa dan poin fitur sederhana.
   * *Wajib Diubah:* Mengikuti struktur studi kasus ketat:
     $$\text{Masalah (Konteks Lapangan)} \longrightarrow \text{Peran Saya} \longrightarrow \text{Keputusan Teknis} \longrightarrow \text{Hasil / Angka Terukur}$$
   * Setiap data angka yang belum terverifikasi wajib diberi penanda eksplisit `[ISI: ...]` tanpa mengarang klaim.
4. **Gambar Proyek Sekunder dari Unsplash:**
   * Di dalam `js/projects.js`, proyek sekunder masih memanggil URL Unsplash generik yang tampak seperti portofolio template instan.
   * *Solusi:* Ganti thumbnail sekunder dengan diagram/antarmuka teknis SVG atau kartu skematik kustom yang bersih.
5. **Ketiadaan Halaman 404 Kustom:**
   * Belum ada halaman error 404 yang memiliki kepribadian teknikal dan ramah pengguna.

---

## 3. Masalah Performa, Aksesibilitas, dan Responsivitas

* **Performa (Lighthouse):**
  * Resource font Google perlu dioptimasi dengan `preconnect` dan `display=swap`.
  * Hindari Layout Shift (CLS = 0) dengan memastikan seluruh gambar memiliki atribut `width` dan `height` yang eksplisit.
* **Aksesibilitas (WCAG AA):**
  * Rasio kontras teks sekunder `#94a3b8` pada latar gelap `#111111` harus memenuhi batas minimal 4.5:1.
  * Seluruh tombol dan tautan harus memiliki cincin fokus (`:focus-visible`) yang kontras dan jelas bagi pengguna keyboard.
  * Elemen interaktif memiliki label ARIA yang lengkap (`aria-expanded`, `aria-controls`, `aria-label`).
* **Responsivitas (360px - 1440px):**
  * Di layar ponsel 360px, padding horizontal harus dijaga agar konten teks panjang tidak terpotong dan tombol memiliki area sentuh minimal 44x44px.
  * Navigasi mobile drawer harus menutup mulus saat pengguna memilih section atau menekan tombol `Escape`.

---

## 4. Rencana Eksekusi Langkah 2 & 3

1. **Arah Desain:** *Developer Studio / Technical Atelier* (mengacu pada visual DevSync).
2. **Design Tokens:**
   * Background: Deep Obsidian Charcoal (`#111111`), Surface Card (`#161616`), Elevated Surface (`#1b1c1e`).
   * Border: Precision Hairline (`#25282b` / `rgba(255, 255, 255, 0.08)`).
   * Functional Accent: Signal Mint (`#7af298`).
   * Typography: `Space Grotesk` (Headings) + `JetBrains Mono` (Technical Specs & Numbers) + System Sans Modern.
3. **Penyempurnaan Konten & Tone of Voice:**
   * Narasi jujur orang pertama: Mengangkat cerita nyata montir mobil SMKN 1 Rejotangan (TKR) yang menemukan panggilan di bidang rekayasa perangkat lunak hingga kuliah di Universitas Bhinneka PGRI.
   * Mengganti semua frasa marketing generik menjadi suara teknis yang tenang, terukur, dan faktual.

---

## 5. Pembaruan Visual: Penghapusan Prefiks Numerik & Transisi ke Precision Azure Blue

Berdasarkan preferensi estetika lanjutan pengguna:
1. **Pembersihan Prefiks Numerik:**
   * Menghapus semua angka indeks yang berlebihan (`00` s.d. `06` di navbar & footer, `FIG. 01` di portrait plate, nomor `01` s.d. `06` di section tag strips, badge index `01` s.d. `07` di kartu keahlian, nomor langkah `01` s.d. `04` di studi kasus, dan penomoran `01` s.d. `04` di prinsip kerja).
   * Menghasilkan antarmuka yang jauh lebih bersih, tidak bising, dan berfokus pada konten arsitektural.
2. **Evolusi Aksen ke Precision Azure Blue:**
   * Menggantikan aksen mint hijau menjadi **`#38bdf8`** (*Electric Azure / Precision Sky Blue*) pada mode gelap dan **`#0284c7`** (*Deep Cobalt*) pada mode terang.
   * Rasio kontras mencapai **8.2 : 1** di atas obsidian `#111111` (memenuhi standar WCAG AAA).
   * Seluruh ilustrasi teknis SVG, cincin fokus, status pulse, dan hover effect telah diselaraskan ke tema biru presisi ini.

---

## 6. Pembaruan Kredibilitas: Logo Brand Resmi & Pratinjau Perangkat Lunak Nyata

Berdasarkan instruksi pengguna untuk memaksimalkan daya tarik di mata calon klien serta menghilangkan kesan mockup AI generik:
1. **Toolchain Showcase & Logo Resmi Teknologi:**
   * Menambahkan pita showcase interaktif `TOOLCHAIN & TEKNOLOGI PRODUKSI` di seksi Keahlian yang menampilkan vektor SVG resmi dari: **Vue.js 3**, **Laravel 11**, **Java (OOP)**, **MySQL**, **JavaScript (ES6+)**, **PHP 8.2**, **Tailwind CSS**, **Git & GitHub**, **ESC/POS & Hardware**, serta **RESTful API**.
   * Menambahkan elemen `.skill-brand-icon` di setiap kartu keahlian (`.skills-grid`), menghubungkan langsung domain rekayasa dengan logo teknologi resminya.
2. **Penggantian Total Mockup AI dengan Screenshot Antarmuka Web/Software Sungguhan:**
   * **E-Pelanggaran SMKN 1 Rejotangan:** Antarmuka nyata sistem manajemen kedisiplinan berbasis Laravel + Vue 3 SPA dengan data sekolah lokal Rejotangan (NISN, siswa TKR/RPL, poin pelanggaran, tindakan BK, dan generator SP).
   * **Sistem Kasir POS Toko Kelontong:** Antarmuka nyata aplikasi kasir desktop Java + MySQL dengan mata uang Rupiah (Rp), barcode scanner aktif, produk sembako lokal (Beras Ramos, Minyak Tropical, Telur, Indomie), serta pratinjau struk thermal EPSON TM-T82 (ESC/POS).
   * **Desa Digital Rejotangan:** Portal pelayanan administrasi warga mandiri (pengajuan SKCK, SKU, Domisili, SKTM, cek nomor tiket, dan peta fasilitas desa).
   * **Nusantara Mart:** Platform toko daring modern dengan laci keranjang aktif, kalkulasi ongkir RajaOngkir (JNE/SiCepat), dan modal pembayaran QRIS instan.
   * **DevNote Studio:** Editor kode split-screen dan markdown parser real-time.
   * **Portofolio Personal:** Pratinjau arsitektur web personal berdisiplin tinggi tanpa dependensi berat.


