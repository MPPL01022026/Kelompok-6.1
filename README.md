# Bag-Dapoorbakes

**Aplikasi pencatatan persediaan bahan baku untuk UMKM Daporbakes.** MVP Sprint 3 membantu pemilik melihat stok, mengelola daftar bahan, dan menelusuri perubahan persediaan.

> Aplikasi masih berupa prototipe. Angka yang tampil adalah data contoh. Data disimpan di browser pada perangkat ini dan belum tersinkron ke perangkat lain.

## Tampilan aplikasi

### 1. Ringkasan

Halaman Ringkasan memberi gambaran cepat tentang jumlah bahan yang tercatat, bahan yang perlu diperiksa, kondisi stok saat ini, dan pergerakan terbaru. Tombol **Catat pergerakan** memulai pencatatan belanja atau pemakaian.

![Halaman Ringkasan Bag-Dapoorbakes menampilkan status stok dan pergerakan terbaru](docs/sprint-03/screenshots/01-ringkasan.png)

### 2. Bahan baku

Halaman Bahan baku memuat daftar bahan beserta satuan, jumlah stok, batas minimum, dan statusnya. Pengguna dapat mencari atau menyaring bahan, menambah bahan, mengubah informasi, serta membuka pencatatan pergerakan.

![Halaman Bahan baku Bag-Dapoorbakes menampilkan daftar dan status stok](docs/sprint-03/screenshots/02-bahan-baku.png)

### 3. Buku pergerakan

Buku pergerakan menyimpan jejak stok masuk, pemakaian, dan penyesuaian. Catatan dapat dicari dan disaring berdasarkan rentang waktu, lalu hasil yang terlihat dapat diunduh sebagai CSV.

![Halaman Buku pergerakan Bag-Dapoorbakes menampilkan riwayat perubahan persediaan](docs/sprint-03/screenshots/03-buku-pergerakan.png)

## Fitur MVP

- Melihat ringkasan persediaan dan penanda bahan yang mencapai batas minimum.
- Menambah dan mengubah bahan, satuan, kelompok, saldo awal, serta batas minimum.
- Mencatat stok masuk, stok keluar, dan pencocokan dengan hasil hitung fisik.
- Mencari dan menyaring daftar bahan maupun buku pergerakan.
- Mengunduh hasil buku pergerakan yang terlihat sebagai CSV.
- Menyimpan data di `localStorage` browser.

## Menjalankan aplikasi

Perlu Node.js 20.9 atau lebih baru. Dari folder `app/` jalankan:

```bash
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Pemeriksaan build:

```bash
npm run lint
npm run build
```

Panduan lebih lengkap dan batasan penggunaan ada di [app/README.md](app/README.md). Checklist pemeriksaan manual ada di [app/QA_CHECKLIST.md](app/QA_CHECKLIST.md).

## Tim dan kontribusi Sprint 3

| Anggota | Kontribusi yang tercatat |
|---|---|
| Lutfiah Naysilla Azzahra | Implementasi MVP inventaris |
| Dara Anggun Fransisca | Penyempurnaan tampilan buku stok responsif dan tinjauan UI |
| Raisa Nurfaiza | Panduan menjalankan aplikasi dan checklist QA |

Rincian bukti pengembangan, koordinasi, dan tindak lanjut Sprint 3 ada di [dokumen eksekusi Sprint 3](docs/sprint-03/SPRINT_EXECUTION.md). Rencana sprint lain tersedia di [docs/SPRINT_TRACKER.md](docs/SPRINT_TRACKER.md) dan folder `docs/`.

## Batasan prototipe

Data hanya tersimpan pada profil browser dan perangkat yang sedang digunakan. Belum ada login, database bersama, sinkronisasi antarperangkat, atau cadangan cloud. Saldo awal dan batas minimum contoh harus dicocokkan dengan hitungan fisik sebelum dipakai untuk operasional. Ekspor CSV berisi catatan pergerakan yang sedang terlihat, bukan cadangan lengkap seluruh data.
