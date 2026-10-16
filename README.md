# 🚀 Portofolio Profesional — Muhammad Alfin Prayoga

> **Software & Web Developer** | Mahasiswa Teknik Informatika di **Universitas Bhinneka PGRI**  
> 📍 Berdomisili di Rejotangan, Tulungagung, Jawa Timur, Indonesia

Website portofolio modern berkinerja tinggi yang dibangun menggunakan **100% Pure HTML5, Modern CSS3, dan Vanilla JavaScript (ES6+)**. Didesain secara khusus agar sangat ringan, bebas dependensi berat, dan dapat di-hosting secara langsung serta gratis di **GitHub Pages**.

---

## ✨ Fitur Unggulan

- 💎 **Modern Glassmorphism UI**: Antarmuka visual berstandar industri dengan aksen gradien neon (Indigo & Cyan) serta efek kaca blur modern.
- 🌓 **Dark & Light Mode Switcher**: Dukungan tema gelap dan terang instan yang otomatis tersimpan di `localStorage` peramban.
- 🌌 **Interactive Particle Network**: Latar belakang kanvas partikel konstelasi interaktif yang merespons pergerakan kursor pengguna.
- ⌨️ **Dynamic Typewriter Subtitle**: Animasi teks ketik halus pada hero section yang berganti otomatis.
- 💼 **Interactive Projects Showcase**:
  - Filter proyek berdasarkan kategori (*All, Web App, Fullstack, Frontend*).
  - Modal pop-up interaktif untuk melihat detail lengkap, arsitektur, dan tautan live demo / GitHub.
- 📊 **Animated Stats & Skill Progress**: Penghitung angka otomatis dan meteran keahlian teknis saat digulir ke viewport.
- 📜 **Education & Career Timeline**: Garis waktu akademik rapi yang menampilkan studi di Universitas Bhinneka PGRI.
- 💬 **Direct WhatsApp & Interactive Form**:
  - Tombol pintas chat WhatsApp otomatis dengan template pesan ramah klien.
  - Formulir kontak dengan validasi langsung di sisi klien dan notifikasi toast.
- 📱 **100% Fully Responsive**: Optimal di smartphone, tablet, laptop, dan monitor desktop lebar.
- ⚡ **SEO & Performance Ready**: Semantic markup, meta tags OpenGraph & Twitter Card, serta Schema.org JSON-LD terstruktur.

---

## 🛠️ Tech Stack & Spesialisasi

| Bidang | Teknologi Utama |
| :--- | :--- |
| **Backend & API** | Laravel (PHP), RESTful API, Node.js |
| **Frontend Frameworks** | Vue.js 3 (Composition API, Pinia), Tailwind CSS |
| **Desktop & Production** | Java (Desktop POS & Inventory), JDBC, ESC/POS Thermal Printing |
| **Core Web Foundation** | HTML5 Semantic, Modern CSS3 (Glassmorphism), Vanilla JavaScript (ES6+) |
| **Basis Data** | MySQL Relational Database Schema & Query Optimization |
| **Version Control & Hosting** | Git, GitHub, GitHub Pages (Zero-Config Static Hosting) |

---

## 📁 Struktur Berkas

```text
portofolio/
├── index.html              # Halaman utama portofolio
├── README.md               # Dokumentasi proyek
├── css/
│   ├── style.css           # Design tokens, variabel warna, & layout utama
│   ├── animations.css      # Keyframe animasi & efek transisi
│   └── responsive.css      # Aturan media queries untuk mobile & tablet
├── js/
│   ├── main.js             # Navigasi, toggle tema, scroll spy, & penghitung stat
│   ├── particles.js        # Efek kanvas partikel interaktif
│   ├── typing.js           # Animasi mesin tik pada hero section
│   ├── projects.js         # Data proyek, filter kategori, & popup modal
│   └── form.js             # Validasi formulir & integrasi pesan langsung
└── assets/
    ├── images/
    │   ├── profile.jpg     # Foto profil Muhammad Alfin Prayoga
    │   ├── project-academic.jpg # Mockup UI Smart Campus Bhinneka
    │   └── project-pos.jpg      # Mockup UI KasirKu Pro SaaS POS
    └── docs/               # Berkas dokumen pendukung (Resume / CV)
```

---

## 🌐 Cara Hosting di GitHub Pages (Langkah Praktis)

Anda dapat langsung meng-upload berkas proyek ini ke repositori GitHub untuk mendapatkan website aktif secara online dan gratis:

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [GitHub](https://github.com) dan masuk ke akun Anda.
2. Klik tombol **New Repository**.
3. Beri nama repositori, misalnya: `portofolio` (atau `username.github.io` jika ingin menjadi halaman root domain).
4. Pastikan visibilitas diatur ke **Public**, lalu klik **Create repository**.

### Langkah 2: Upload / Push Kode Melalui Git Terminal
Buka terminal (Git Bash / PowerShell) di folder proyek ini (`d:\mandiri\portofolio`), lalu jalankan perintah:

```bash
git init
git add .
git commit -m "feat: initial release of Muhammad Alfin Prayoga professional portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME_GITHUB_ANDA/portofolio.git
git push -u origin main
```
*(Ganti `USERNAME_GITHUB_ANDA` dengan username akun GitHub Anda)*

### Langkah 3: Aktifkan GitHub Pages
1. Di halaman repositori GitHub Anda, buka menu tab **Settings**.
2. Pada panel menu sebelah kiri, klik **Pages** (di bawah menu *Code and automation*).
3. Di bagian **Build and deployment** -> **Branch**:
   - Pilih Branch: **main**
   - Pilih Folder: **/ (root)**
4. Klik tombol **Save**.
5. Tunggu sekitar 1–2 menit, website portofolio Anda akan langsung aktif di alamat:
   ```
   https://USERNAME_GITHUB_ANDA.github.io/portofolio/
   ```

---

## ✏️ Panduan Kustomisasi

Jika Anda ingin mengubah detail kontak atau memperbarui data:
1. **Nomor WhatsApp**: Buka [js/form.js](file:///d:/mandiri/portofolio/js/form.js) dan ubah variabel `phone = '6281234567890'` dengan nomor WhatsApp aktif Anda.
2. **Akun Sosial Media**: Buka [index.html](file:///d:/mandiri/portofolio/index.html) dan cari tautan `href="https://github.com/alfinprayoga"`, `linkedin`, atau `instagram` untuk diisi URL akun Anda.
3. **Data Proyek**: Buka [js/projects.js](file:///d:/mandiri/portofolio/js/projects.js) untuk menambah, menghapus, atau mengubah daftar portofolio Anda.
4. **Foto Profil**: Ganti berkas [assets/images/profile.jpg](file:///d:/mandiri/portofolio/assets/images/profile.jpg) dengan foto terbaik Anda.

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi [MIT License](https://opensource.org/licenses/MIT). Silakan digunakan dan dikembangkan untuk personal branding Anda!

**Dibuat oleh Muhammad Alfin Prayoga**  
*Mahasiswa S1 Teknik Informatika, Universitas Bhinneka PGRI, Tulungagung, Jawa Timur.*
