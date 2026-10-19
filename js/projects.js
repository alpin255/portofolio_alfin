/**
 * Projects Portfolio Logic
 * Filterable showcase, modal view, and detailed project data
 */

const projectsData = [
  {
    id: 'e-pelanggaran-smk',
    title: 'E-Pelanggaran SMKN 1 Rejotangan',
    category: 'fullstack',
    categoryLabel: 'Magang & Fullstack Web',
    image: 'assets/images/project-epelanggaran-real.jpg',
    shortDesc: 'Sistem manajemen kedisiplinan dan rekam jejak poin pelanggaran siswa berbasis web yang dibangun selama masa magang di SMKN 1 Rejotangan.',
    fullDesc: 'Sistem Informasi E-Pelanggaran SMKN 1 Rejotangan dikembangkan untuk mendigitalkan proses pencatatan tata tertib siswa yang sebelumnya dilakukan secara konvensional. Dibangun dengan backend Laravel yang tangguh dan antarmuka reaktif Vue 3, sistem ini memungkinkan Guru BK, Tim Kesiswaan, dan Wali Kelas mencatat dan memonitor akumulasi poin pelanggaran siswa secara real-time, serta mencetak Surat Panggilan Orang Tua secara otomatis.',
    features: [
      'Dibangun dan diimplementasikan secara langsung untuk kebutuhan magang di SMKN 1 Rejotangan',
      'Arsitektur RESTful API dengan backend Laravel dan antarmuka Single Page Application Vue 3',
      'Manajemen hak akses role-based (Kesiswaan, Guru BK, Wali Kelas, dan Siswa)',
      'Perhitungan bobot poin pelanggaran otomatis serta ambang batas Surat Peringatan (SP 1, 2, 3)',
      'Ekspor rekapitulasi kedisiplinan siswa ke format PDF resmi dan spreadsheet Excel'
    ],
    techs: ['Laravel', 'Vue 3', 'MySQL', 'RESTful API', 'Tailwind CSS', 'Pinia'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/e-pelanggaran-smkn1rejotangan'
  },
  {
    id: 'kasir-toko-kelontong',
    title: 'Sistem Kasir POS Toko Kelontong',
    category: 'webapp',
    categoryLabel: 'Java Desktop & Production',
    image: 'assets/images/project-poskasir-real.jpg',
    shortDesc: 'Aplikasi kasir Point of Sale (POS) berbasis Java dan MySQL yang telah diimplementasikan dan digunakan aktif di beberapa toko kelontong di Rejotangan.',
    fullDesc: 'Aplikasi kasir desktop yang dibangun menggunakan Java dan database relasional MySQL untuk membantu para pemilik toko kelontong di daerah Rejotangan dan sekitarnya. Sistem ini dirancang untuk operasional harian yang cepat, stabil, tanpa ketergantungan koneksi internet, serta mendukung pemindaian barcode barang dan pencetakan struk thermal.',
    features: [
      'Telah diimplementasikan dan aktif beroperasi di beberapa toko kelontong daerah Rejotangan',
      'Pencatatan transaksi kasir kilat dengan dukungan Barcode Scanner & Shortcut Keyboard',
      'Manajemen stok barang masuk-keluar serta sistem peringatan saat persediaan menipis',
      'Dukungan penetapan harga eceran dan grosir bertingkat secara fleksibel',
      'Integrasi cetak struk belanja otomatis via Printer Thermal (ESC/POS) dan rekap omzet harian'
    ],
    techs: ['Java', 'MySQL', 'Desktop POS', 'JDBC', 'Thermal Printer API', 'Report Generator'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/java-pos-tokokelontong'
  },
  {
    id: 'desa-digital',
    title: 'Desa Digital Rejotangan',
    category: 'webapp',
    categoryLabel: 'Portal Layanan Publik',
    image: 'assets/images/project-desa.jpg',
    shortDesc: 'Portal pelayanan publik dan administrasi surat-menyurat online warga Desa Rejotangan, Tulungagung.',
    fullDesc: 'Inisiatif proyek web pelayanan masyarakat yang memungkinkan warga desa mengajukan permohonan surat pengantar kependudukan (SKCK, KTP, Domisili) secara daring tanpa perlu antre di kantor kelurahan, dilengkapi tracking nomor tiket permohonan dan direktori UMKM warga.',
    features: [
      'Pengajuan berkas permohonan administrasi kependudukan online dengan verifikasi data',
      'Pelacakan status pemrosesan berkas secara real-time via nomor tiket identifikasi',
      'Direktori UMKM dan potensi ekonomi warga Desa Rejotangan',
      'Peta geospasial sebaran fasilitas pelayanan umum dan tanggap darurat'
    ],
    techs: ['HTML5 Semantic', 'Modern CSS', 'Vanilla JavaScript', 'OpenStreetMap API'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/desa-rejotangan'
  },
  {
    id: 'nusantara-mart',
    title: 'Nusantara Mart Platform',
    category: 'fullstack',
    categoryLabel: 'E-Commerce Engine',
    image: 'assets/images/project-ecommerce.jpg',
    shortDesc: 'Platform toko online dengan keranjang belanja persisten, checkout multi-kurir, dan kalkulasi ongkir otomatis.',
    fullDesc: 'Arsitektur e-commerce yang mengintegrasikan pengecekan tarif ongkir ekspedisi domestik secara otomatis ke seluruh kota di Indonesia, manajemen state keranjang belanja persisten di peramban, serta alur checkout yang terstandarisasi.',
    features: [
      'Katalog interaktif dengan live filtering multi-kategori tanpa keterlambatan re-render',
      'Manajemen status keranjang belanja persisten memanfaatkan localStorage',
      'Integrasi endpoint kalkulator tarif kurir pengiriman (JNE, SiCepat, POS)',
      'Alur checkout dengan kalkulasi total biaya dan verifikasi data transaksi'
    ],
    techs: ['HTML5', 'CSS Grid/Flexbox', 'JavaScript ES6+', 'Fetch API', 'Local Storage'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/nusantara-mart'
  },
  {
    id: 'devnote-studio',
    title: 'DevNote Code & Markdown Studio',
    category: 'frontend',
    categoryLabel: 'Perangkat Rekayasa Web',
    image: 'assets/images/project-devnote.jpg',
    shortDesc: 'Aplikasi editor Markdown & Code Snippet real-time dengan syntax highlighting, ekspor PDF, dan penyimpanan offline.',
    fullDesc: 'Alat produktivitas berbasis peramban untuk mencatat dokumentasi teknis, menyimpan potongan kode penting (snippets), dan mengekspor catatan ke berbagai format dokumen secara instan tanpa lag.',
    features: [
      'Split-screen live Markdown preview dengan render token kilat',
      'Syntax highlighter untuk 30+ bahasa pemrograman',
      'Mode offline tanpa dependensi internet (PWA Ready)',
      'Ekspor instan dokumen ke format HTML, Markdown, dan berkas PDF'
    ],
    techs: ['Vanilla JS', 'CSS3 Variables', 'Highlight.js', 'Marked.js', 'LocalStorage'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/devnote-studio'
  },
  {
    id: 'personal-portfolio',
    title: 'Portofolio Muhammad Alfin Prayoga',
    category: 'frontend',
    categoryLabel: 'Portofolio & Rekayasa Web',
    image: 'assets/images/project-portfolio.jpg',
    shortDesc: 'Website portofolio rekayasa mandiri ultra-cepat, 100% stack vanilla tanpa dependensi tambun.',
    fullDesc: 'Website personal yang sedang Anda telaah saat ini. Dirancang dengan disiplin rekayasa front-end tingkat tinggi: arsitektur semantic HTML5, token sistem DevSync, micro-interactions berbasis hardware transform, dan audit Lighthouse 95+ di semua indikator.',
    features: [
      '100% Pure HTML, CSS3 Tokens, dan JavaScript ES6+ tanpa pustaka eksternal berat',
      'Sinkronisasi tema Gelap dan Terang instan dengan persistensi preferensi sistem',
      'Tata letak asimetris terukur terinspirasi arsitektur studio DevSync',
      'Desain responsif tanpa kompromi mulai dari viewport 360px hingga ultrawide'
    ],
    techs: ['HTML5 Semantic', 'DevSync CSS Tokens', 'Vanilla JS (ES6+)', 'GitHub Pages'],
    demoUrl: '#',
    githubUrl: 'https://github.com/alfinprayoga/portofolio'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!gridContainer) return;

  // Render Projects Grid
  function renderProjects(category = 'all') {
    gridContainer.innerHTML = '';

    const filtered = category === 'all'
      ? projectsData
      : projectsData.filter(item => item.category === category);

    filtered.forEach((project, index) => {
      const card = document.createElement('article');
      card.className = `project-card reveal reveal-delay-${(index % 3) + 1}`;
      card.setAttribute('data-id', project.id);

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <span class="project-tag-badge">${project.categoryLabel}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">
            <span>${project.title}</span>
          </h3>
          <p class="project-desc">${project.shortDesc}</p>
          <div class="project-techs">
            ${project.techs.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${project.techs.length > 4 ? `<span class="tech-tag">+${project.techs.length - 4}</span>` : ''}
          </div>
          <div class="project-actions">
            <button class="btn btn-secondary btn-sm btn-open-modal" data-id="${project.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
              Detail Proyek
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Lihat source code ${project.title}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    // Trigger reveal animation
    setTimeout(() => {
      document.querySelectorAll('.project-card.reveal').forEach(el => el.classList.add('active'));
    }, 50);
  }

  // Event delegation for opening modal from any project button (including flagship showcases)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-open-modal');
    if (btn) {
      const id = btn.getAttribute('data-id');
      if (id) openModal(id);
    }
  });

  // Filter Button Clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // Modal Functionality
  function openModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !modalOverlay) return;

    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-img').alt = project.title;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').textContent = project.fullDesc;

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.techs.map(t => `<span class="tech-tag">${t}</span>`).join('');

    // Features
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = project.features.map(f => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');

    // Links
    const githubLink = document.getElementById('modal-github');
    githubLink.href = project.githubUrl;

    const demoLink = document.getElementById('modal-demo');
    if (project.demoUrl && project.demoUrl !== '#') {
      demoLink.href = project.demoUrl;
      demoLink.style.display = 'inline-flex';
    } else {
      demoLink.style.display = 'none';
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.openProjectModal = openModal;
  window.closeProjectModal = closeModal;

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Initial render
  renderProjects('all');
});
