# Daporbakes · Catatan stok bahan

**Prototipe pencatatan stok bahan baku untuk usaha brownies Daporbakes.** Lihat daftar bahan, catat pembelian dan pemakaian, lalu telusuri perubahan stok.

> Aplikasi masih berupa prototipe. Angka awal hanya contoh dan perlu dicocokkan dengan stok fisik. Data tersimpan di browser ini dan belum tersambung ke perangkat lain.

## Tampilan aplikasi

### 1. Ringkasan

Ringkasan menampilkan jumlah bahan, stok yang sudah mencapai batas minimum, daftar stok, dan perubahan terbaru. Gunakan **Catat perubahan** untuk merekam pembelian, pemakaian, atau hasil hitung fisik.

![Halaman Ringkasan Daporbakes menampilkan jumlah stok dan perubahan terbaru](docs/sprint-03/screenshots/01-ringkasan.png)

### 2. Daftar bahan

Daftar bahan menampilkan satuan, stok saat ini, batas minimum, dan status setiap bahan. Cari atau saring daftar, tambahkan bahan, lalu ubah informasinya saat diperlukan.

![Halaman Daftar bahan Daporbakes menampilkan satuan, stok saat ini, dan batas minimum](docs/sprint-03/screenshots/02-bahan-baku.png)

### 3. Riwayat stok

Riwayat stok mencatat bahan masuk, pemakaian, dan penyesuaian setelah hitung fisik. Cari catatan atau pilih rentang waktu, lalu unduh hasil yang tampil sebagai CSV.

![Halaman Riwayat stok Daporbakes menampilkan bahan masuk, pemakaian, dan penyesuaian](docs/sprint-03/screenshots/03-riwayat-stok.png)

Ketiga tangkapan layar aplikasi di atas juga berukuran 1600 × 900 piksel (16:9).

## Wireframe tiap halaman

Wireframe sederhana berikut hanya menunjukkan posisi elemen, ukuran relatif kartu, tombol, dan area teks—tanpa detail visual atau data final. Masing-masing gambar berukuran 1600 × 900 piksel (16:9).

### Wireframe Ringkasan

![Wireframe 16:9 halaman Ringkasan](docs/sprint-03/wireframes/01-ringkasan.png)

### Wireframe Daftar bahan

![Wireframe 16:9 halaman Daftar bahan](docs/sprint-03/wireframes/02-daftar-bahan.png)

### Wireframe Riwayat stok

![Wireframe 16:9 halaman Riwayat stok](docs/sprint-03/wireframes/03-riwayat-stok.png)

## Fitur MVP

- Melihat ringkasan persediaan dan penanda bahan yang mencapai batas minimum.
- Menambah dan mengubah bahan, satuan, kelompok, stok awal, serta batas minimum.
- Mencatat bahan masuk, pemakaian, dan penyesuaian setelah hitung fisik.
- Mencari dan menyaring daftar bahan maupun riwayat stok.
- Mengunduh catatan yang tampil sebagai CSV.
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

Laporan Project Execution memuat pembagian tugas, bukti PR, progres prototipe, dokumentasi koordinasi, tangkapan layar, dan lampiran wireframe 16:9: [versi Markdown](docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md) atau [versi PDF](docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.pdf).

## Batasan prototipe

Data hanya tersimpan pada browser dan perangkat yang sedang digunakan. Belum ada login, database bersama, sinkronisasi antarperangkat, atau cadangan cloud. Stok awal dan batas minimum contoh perlu dicocokkan dengan hitungan fisik sebelum digunakan. Ekspor CSV hanya berisi perubahan stok yang sedang tampil, bukan cadangan lengkap seluruh data.
