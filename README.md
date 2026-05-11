# ☕ BEANESIA 

**Beanesia** adalah platform e-commerce premium berbasis web yang didedikasikan untuk mendistribusikan biji kopi pilihan terbaik dari berbagai pelosok Nusantara. Proyek ini mengusung antarmuka UI/UX yang modern, elegan (Dark Mode & Gold accent), serta interaktif.

## 🚀 Fitur Utama
* **Dynamic Product Catalog**: Menampilkan daftar kopi dari file `Category.json` menggunakan Fetch API.
* **Detail Product Page**: Halaman spesifik untuk melihat detail kopi dan rekomendasi produk serupa.
* **Modular Components**: Menggunakan JavaScript untuk memanggil komponen berulang seperti Navbar dan Hero section agar kode lebih *clean*.
* **Responsive Design**: Tata letak yang optimal untuk Desktop, Tablet, dan Mobile.
* **User Pages**: Dilengkapi dengan halaman Login, Keranjang, dan Profile.

## 🛠️ Tech Stack
* **Frontend:** HTML5, Vanilla JavaScript
* **Styling:** Tailwind CSS (via PostCSS/CLI)
* **Data Source:** JSON Local (`Category.json`, `user.json`)
* **Design:** Figma

## 📂 Struktur Proyek
Berikut adalah struktur direktori utama dari aplikasi Beanesia:

```text
Beanesia/
├── src/
│   ├── Components/         # Potongan HTML yang dipanggil via JS (Home, Landing)
│   ├── assets/Include/     # File statis gambar dan ikon (LoginIcon, NavIcon, Picture)
│   ├── data/               # Database lokal berbasis JSON
│   │   ├── Category.json   # Data list produk kopi
│   │   └── user.json       # Data user login
│   ├── dist/               # File output/logic pendukung (Log, Main)
│   ├── pages/              # Halaman utama aplikasi
│   │   ├── Detail.html     # Halaman detail spesifik per produk
│   │   ├── Home.html       # Halaman utama (beranda)
│   │   ├── Keranjang.html  # Halaman cart/keranjang belanja
│   │   ├── Login.html      # Halaman otentikasi
│   │   └── Profile.html    # Halaman profil pengguna
│   ├── input.css           # Konfigurasi input Tailwind CSS
│   └── output.css          # Hasil build Tailwind CSS
├── basmiScrollBar.css      # Custom CSS tambahan
├── index.html              # Entry point aplikasi
├── package-lock.json       # Dependency tree
└── package.json            # Konfigurasi NPM & script build
