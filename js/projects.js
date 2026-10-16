/**
 * Projects Portfolio Logic
 * Filterable showcase, modal view, and detailed project data
 */

const projectsData = [
  {
    id: 'smart-campus',
    title: 'Smart Campus Bhinneka',
    category: 'fullstack',
    categoryLabel: 'Fullstack App',
    image: 'assets/images/project-academic.jpg',
    shortDesc: 'Sistem Informasi Akademik dan Portal Mahasiswa terintegrasi dengan visualisasi kehadiran dan performa nilai berbasis web.',
    fullDesc: 'Smart Campus Bhinneka adalah platform sistem informasi akademik generasi baru yang dirancang untuk mempermudah civitas akademika Universitas Bhinneka PGRI dalam mengakses jadwal kuliah, kartu rencana studi (KRS), transkrip nilai, serta monitoring absensi perkuliahan secara real-time dengan visualisasi data interaktif.',
    features: [
      'Dashboard analitik performa IPK mahasiswa dengan grafik interaktif',
      'Manajemen KRS online dengan validasi kuota kelas otomatis',
      'Presensi perkuliahan berbasis QR Code dan verifikasi lokasi',
      'Portal pengumuman terintegrasi notifikasi email dan Telegram bot'
    ],
    techs: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'REST API', 'Chart.js'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/smart-campus'
  },
  {
    id: 'kasirku-pro',
    title: 'KasirKu Pro - Cloud POS',
    category: 'webapp',
    categoryLabel: 'Web Application',
    image: 'assets/images/project-pos.jpg',
    shortDesc: 'Aplikasi kasir berbasis cloud dengan manajemen inventaris barang real-time, laporan laba rugi, dan cetak struk thermal.',
    fullDesc: 'KasirKu Pro dirancang khusus untuk membantu pelaku UMKM di wilayah Tulungagung dan sekitarnya mendigitalkan pembukuan transaksi kasir. Sistem ini dilengkapi dengan barcode scanning via webcam, sinkronisasi stok otomatis, dan rekapitulasi omzet harian/bulanan secara akurat.',
    features: [
      'Pencatatan transaksi kasir cepat (Point of Sale) responsif tablet & desktop',
      'Katalog produk visual dengan filter barcode, stok tipis, dan kategori',
      'Ekspor laporan keuangan berkala ke format Excel dan PDF siap cetak',
      'Dukungan cetak struk via printer thermal Bluetooth / USB'
    ],
    techs: ['JavaScript (ES6+)', 'Tailwind CSS', 'IndexedDB', 'HTML5 Canvas', 'REST API'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/kasirku-pos'
  },
  {
    id: 'desa-digital',
    title: 'Desa Digital Rejotangan',
    category: 'webapp',
    categoryLabel: 'Public Service Portal',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Portal pelayanan publik dan administrasi surat menyurat online warga Desa Rejotangan, Tulungagung Jawa Timur.',
    fullDesc: 'Inisiatif proyek web pelayanan masyarakat yang memungkinkan warga desa mengajukan surat pengantar (SKCK, KTP, Domisili) secara daring tanpa perlu antre di kantor kelurahan, lengkap dengan tracking status pengajuan dan direktori UMKM lokal.',
    features: [
      'Pengajuan berkas administrasi kependudukan online dengan tanda tangan digital',
      'Sistem tracking progres berkas permohonan via nomor tiket SMS/WA',
      'Etalase produk unggulan UMKM khas Rejotangan Tulungagung',
      'Peta interaktif sebaran fasilitas desa dan info tanggap darurat'
    ],
    techs: ['HTML5 Semantic', 'Modern CSS', 'Vanilla JavaScript', 'OpenStreetMap API'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/desa-rejotangan'
  },
  {
    id: 'nusantara-mart',
    title: 'Nusantara Mart E-Commerce',
    category: 'fullstack',
    categoryLabel: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Platform toko online modern dengan keranjang belanja interaktif, checkout multipayment, dan ongkir otomatis.',
    fullDesc: 'Solusi marketplace lokal yang mengintegrasikan kalkulasi tarif ekspedisi otomatis (JNE, SiCepat, POS) ke seluruh Indonesia serta simulasi pembayaran QRIS dan Virtual Account perbankan.',
    features: [
      'Katalog interaktif dengan filter multi-kategori dan live search',
      'Shopping cart state management dengan persistent localStorage',
      'Integrasi kalkulator tarif pengiriman otomatis',
      'Checkout flow ramah pengguna dengan konfirmasi pesanan otomatis'
    ],
    techs: ['HTML5', 'CSS Grid/Flexbox', 'JavaScript', 'Fetch API', 'Payment Gateway API'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/nusantara-mart'
  },
  {
    id: 'devnote-studio',
    title: 'DevNote Code & Markdown Studio',
    category: 'frontend',
    categoryLabel: 'Frontend Tool',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Aplikasi editor Markdown & Code Snippet real-time dengan syntax highlighting, export PDF, dan auto-save.',
    fullDesc: 'Aplikasi produktivitas berbasis web untuk developer mencatat dokumentasi, menyimpan potongan kode penting (snippets), dan mengekspor dokumen ke berbagai format dengan render Markdown yang instan dan bebas lag.',
    features: [
      'Split-screen live Markdown preview dengan MathJax & KaTeX math rendering',
      'Syntax highlighter untuk 30+ bahasa pemrograman',
      'Mode offline tanpa koneksi internet (PWA Ready)',
      'Ekspor instan ke HTML, Markdown, dan file PDF'
    ],
    techs: ['Vanilla JS', 'CSS3 Variables', 'Highlight.js', 'Marked.js', 'LocalStorage'],
    demoUrl: 'https://github.com/alfinprayoga',
    githubUrl: 'https://github.com/alfinprayoga/devnote-studio'
  },
  {
    id: 'personal-portfolio',
    title: 'Alfin Prayoga Portfolio v1',
    category: 'frontend',
    categoryLabel: 'Web Portfolio',
    image: 'assets/images/project-academic.jpg',
    shortDesc: 'Website portofolio profesional ultra-fast, 100% vanilla stack tanpa dependency berat, siap hosting di GitHub Pages.',
    fullDesc: 'Website personal branding yang sedang Anda kunjungi saat ini! Dirancang dengan standar industri internasional: arsitektur semantic HTML5, glassmorphism design tokens, micro-animations, sistem dark/light theme, dan optimasi Lighthouse 95+.',
    features: [
      '100% Pure HTML, CSS, dan Vanilla JavaScript tanpa bloatware',
      'Dukungan Dark Mode dan Light Mode instan dengan local storage sync',
      'Interactive Canvas Particle Constellation background',
      'Fully responsive di semua layar (Smartphone, Tablet, Laptop, Ultrawide)'
    ],
    techs: ['HTML5 Semantic', 'Modern CSS Glassmorphism', 'Vanilla JS (ES6+)', 'GitHub Pages'],
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

    // Attach click listeners to open modal
    document.querySelectorAll('.btn-open-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openModal(id);
      });
    });
  }

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
