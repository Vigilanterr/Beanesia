# ☕ BEANESIA - Premium Indonesian Coffee E-Commerce Platform

[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20VanillaJS-orange)](https://github.com/haidar-dev/Beanesia)
[![Project Type](https://img.shields.io/badge/Project-Uji%20Level%20DDP%20RPL-blue)](#)
[![Design](https://img.shields.io/badge/UI%2FUX-Figma%20Design-purple)](https://www.figma.com/)

**Beanesia** adalah platform *e-commerce* premium berbasis web yang didedikasikan untuk mengenalkan dan mendistribusikan komoditas biji kopi pilihan terbaik dari berbagai pelosok Nusantara langsung ke tangan konsumen (*end-user*). 

Aplikasi ini dirancang dengan pendekatan visual **Dark Mode & Gold Accent** untuk membangun citra produk yang mewah, estetik, dan menaikkan *perceived value* (nilai jual) kopi lokal di ranah digital. Dikembangkan secara mandiri (*Single Developer*) sebagai pemenuhan standar kompetensi praktis dalam Uji Level mata pelajaran Dasar-Dasar Pemrograman (DDP) program keahlian Rekayasa Perangkat Lunak (RPL).

---

## 👥 Karakteristik Pengguna (Aktor Sistem)

Sistem ini memetakan interaksi tiga aktor utama dengan peran dan batasan fungsional yang spesifik:
1. **Pelanggan / Pembeli (Consumer):** Menjelajahi katalog kopi Nusantara, melihat informasi karakteristik profil rasa, mengelola keranjang belanja (*cart*), serta melakukan simulasi pembelian produk.
2. **Pemilik Toko / Pengelola Bisnis (Merchant):** Mengelola ketersediaan stok, memperbarui varietas kopi daerah melalui pemeliharaan data data lokal, dan menentukan strategi harga pasar.
3. **Administrator Sistem (Developer):** Menjaga performa web, mengelola integritas komponen modular (*Navbar, Hero, Footer*), serta memantau penanganan asinkronus Fetch API agar bebas dari kegagalan muat data.

---

## 🚀 Fitur Utama & Logika Bisnis

* **Dynamic Product Catalog (Asynchronous Fetch API):** Halaman katalog utama memuat data produk secara dinamis dari file JSON menggunakan penanganan `Async/Await`. Mencegah *render-blocking* dan meningkatkan kecepatan pemuatan halaman.
* **Smart Recommendation & Filter Detail Page:** Halaman detail produk (`Detail.html`) membaca parameter ID secara dinamis untuk menampilkan *product knowledge* lengkap (tingkat *acidity, body*, dan aroma). Dilengkapi komponen rekomendasi otomatis untuk produk dalam kategori sejenis (Arabica / Robusta).
* **Modular UI Components Template:** Redundansi kode dihindari dengan memisahkan bagian *Navbar, Hero Banner,* dan *Footer* ke dalam file komponen terpisah, lalu di-injeksi menggunakan fungsi JavaScript terpusat demi efisiensi *maintenance*.
* **Tailwind CSS Responsive Utility:** Tata letak antarmuka dirancang presisi dari tingkat *breakpoint* terkecil (Mobile) hingga resolusi layar Desktop menggunakan utilitas responsif Tailwind CSS tanpa memerlukan *media queries* manual.

---

## 📋 Format Data & Kebutuhan Informasi

Sistem mengelola data statis terstruktur menggunakan objek notasi JavaScript (JSON) sebagai berikut:

```json
// Contoh format objek pada src/data/Category.json
{
  "id": "BNS-001",
  "nama": "Arabica Gayo Premium",
  "kategori": "Arabica",
  "harga": 145000,
  "karakteristik": {
    "aroma": "Spicy & Fruity",
    "acidity": "Medium",
    "body": "High"
  },
  "deskripsi": "Biji kopi pilihan dari dataran tinggi Gayo Aceh, diproses secara khusus untuk menghasilkan aroma rempah yang kuat dengan sentuhan rasa buah alami.",
  "gambar": "src/assets/Include/Picture/gayo.png"
}