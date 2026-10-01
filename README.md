# Website Profil & Pemesanan Online Surah Kopi ☕

Website resmi kedai **Surah Kopi** (@surahkopi - Tangerang Selatan).
Dibuat dengan HTML5, Tailwind CSS modern, Vanilla JS, dan Leaflet Map yang ringan, responsif, dan siap diakses secara online.

---

## 📱 Kontak & Informasi Resmi Kedai
- **Nomor WhatsApp**: `08118143532` (Direct link: `https://wa.me/628118143532`)
- **Alamat Asal Kedai (Origin)**: Surah Kopi, Tangerang Selatan (Ciputat)
- **Jam Operasional**: 09.00 - 21.00 WIB
- **Layanan**: Delivery (GoSend & GrabExpress), ShopeeFood, dan Pick-up (Ambil Sendiri). *Tidak melayani dine-in*.
- **Semua Menu**: Serba **Rp 18.000 (18K)** (Surah Ayat 1 s/d Ayat 8).

---

## 🚀 Pembaruan Fitur Terkini

### 1. Rute & Alamat Tujuan Dinamis Google Maps & OSM (Tanpa Hardcode)
- **Pencarian Alamat Cerdas**: Pembeli dapat mengetik nama jalan, komplek perumahan, kelurahan, ataupun gedung langsung di kolom pencarian yang dilengkapi fitur *live autocomplete*.
- **Pin Peta Interaktif**: Marker tujuan dapat digeser (drag & drop) secara leluasa ke titik rumah pembeli untuk akurasi maksimal.
- **Tombol GPS Otomatis**: Pembeli dapat menggunakan tombol *"📍 Gunakan GPS Saya"* untuk mendeteksi koordinat lokasi saat ini secara instan.
- **Kalkulasi Jarak Rute Jalan Raya Nyata**: Menghitung jarak mengemudi sebenarnya melalui Open Source Routing Machine (OSRM) jalan raya dari Surah Kopi ke titik tujuan pembeli.
- **Link Langsung ke Google Maps**: Terdapat tombol *"🗺️ Buka di Google Maps"* yang secara dinamis membuka navigasi rute mengemudi dari titik toko Surah Kopi ke lokasi tujuan pembeli. Link ini juga disertakan otomatis di pesan WhatsApp saat checkout.

### 2. Tarif Otomatis GoSend & GrabExpress
- **GoSend Instant (Gojek)**: Min 0–4 km = Rp 15.000, selanjutnya +Rp 2.800/km.
- **GrabExpress Instant (Grab)**: Min 0–4 km = Rp 14.000, selanjutnya +Rp 2.600/km.
- **Ambil Sendiri di Kedai (Pick-up)**: Rp 0 (Gratis).

### 3. Kemasan Botol "Ready to Go" & Logika Es Otomatis
- Jika memilih **Kemasan Botol Ready to Go**: Opsi pilihan es batu **otomatis disembunyikan**, karena minuman botol disajikan dingin segar (*chilled*) tersimpan rapat tanpa es batu agar rasa tidak tawar/mencair selama perjalanan kurir.
- Jika memilih **Cup Standar**: Pilihan es tetap lengkap (*Normal Ice*, *Less Ice*, atau *Es Dipisah di Plastik*).
- Setiap cangkir juga memiliki pilihan tingkat kemanisan (*Normal Sugar*, *Less Sugar 50%*, *No Sugar*) dan catatan kustom per item.

### 4. Modal QRIS Resmi yang Fleksibel & Mudah Ditutup
- QRIS resmi: **SURAH KOPI - BEVERAGES** (NMID: `ID1026576702777`).
- Modal pembayaran QRIS dapat ditutup dengan:
  - Tombol silang (✕) di bagian atas kartu.
  - Tombol *"✕ Tutup Jendela QRIS"* di bagian bawah.
  - Mengklik area luar jendela (backdrop).
  - Menekan tombol **Escape (Esc)** di keyboard.
- Modal dapat dibuka kapan saja melalui navbar atau tombol *"Scan QRIS"* tanpa harus mengisi keranjang terlebih dahulu.

### 5. Tampilan Elegan Hitam Putih (Black & White Layout)
- Layout mengusung nuansa hitam-putih monokrom minimalis modern dengan tipografi *Space Grotesk*.
- Foto minuman tetap berwarna asli, segar, tajam, dan menggugah selera (tidak dibuat grayscale) dengan animasi hover yang halus.

---

## 🌐 Cara Menaikkan ke Web Online (Gratis & Cepat)

File website ini bersifat **pure static** (HTML, CSS, JS, Gambar), sehingga bisa dihosting secara gratis dalam waktu kurang dari 1 menit:

### Cara 1: Netlify Drop (Paling Mudah - 30 Detik)
1. Buka browser dan kunjungi: **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag & drop folder `d:\Makaira\surah\` atau file `d:\Makaira\surah-website.zip` ke halaman tersebut.
3. Website Anda langsung tayang dan mendapatkan URL publik (misal: `surahkopi.netlify.app`).

### Cara 2: Vercel
1. Kunjungi **[vercel.com](https://vercel.com)** lalu buat proyek baru.
2. Unggah folder proyek `surah` atau hubungkan ke repositori GitHub.
3. Deploy langsung selesai tanpa konfigurasi server.

### Cara 3: GitHub Pages
1. Buat repository baru di GitHub (misal: `surahkopi`).
2. Push repositori lokal ini (`d:\Makaira\surah`) ke GitHub:
   ```bash
   git remote add origin https://github.com/USERNAME/surahkopi.git
   git branch -M main
   git push -u origin main
   ```
3. Di tab **Settings** > **Pages** di repository GitHub Anda, pilih sumber branch `main` dan folder `/ (root)`. Website Anda akan aktif di `https://USERNAME.github.io/surahkopi/`.

---

## 📦 File Paket Siap Deploy
File zip terbaru telah diperbarui dan siap digunakan:
- **Lokasi ZIP**: `d:\Makaira\surah-website.zip`
