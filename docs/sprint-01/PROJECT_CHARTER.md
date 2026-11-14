# Project Charter
## Digital Twin Stok Bahan Baku Daporbakes

| Elemen | Keputusan proyek |
|---|---|
| Klien dan lokasi studi | UMKM Daporbakes, Gampong Blang, Kota Langsa |
| Product owner | Nurika Eliza |
| Project Manager dan UI/UX | Dara Anggun Fransisca |
| Pengembangan aplikasi | Lutfiah Naysilla Azzahra |
| Dokumentasi dan QA | Raisa Nurfaiza |
| Status | Sprint 3 selesai; prototipe MVP siap didemonstrasikan |
| Kalender | Lima sprint, 7 September–27 November 2026 |

## Latar belakang

Kami menyusun proyek dari temuan wawancara Daporbakes. Usaha memproduksi brownies kukus dan panggang dengan rata-rata 6–7 loyang per minggu, menerima pesanan online dan pre-order, serta mencatat stok pada buku tulis. Pemilik mengelola pembelian dan produksi sendiri. Catatan survei menyebut bahan kadang terbuang karena terlalu lama disimpan dan jumlah belanja sulit diperkirakan sebelum lonjakan pesanan akhir pekan.

## Tujuan

Kami membangun prototipe yang membantu pengguna mencatat bahan, melihat saldo, mencatat pembelian dan pemakaian, merekonsiliasi hasil hitung fisik, serta menemukan bahan pada/bawah ambang minimum. Kami menjadikan fungsi ini dasar pengelolaan stok digital Daporbakes.

## Ruang lingkup dan deliverable

| Sprint | Deliverable yang kami selesaikan |
|---|---|
| Sprint 1 | Charter, stakeholder register, WBS, survei, Function Point, dan backlog awal |
| Sprint 2 | Aturan produk, alur, wireframe, model data, jadwal, effort, biaya, dan risiko |
| Sprint 3 | MVP web lokal, UI responsif, panduan, QA, laporan, screenshot, dan wireframe |
| Sprint 4 | Validasi alur akhir, perbaikan prioritas, dan persiapan demonstrasi |
| Sprint 5 | Serah produk, laporan akhir, dan materi presentasi |

MVP Sprint 3 mencakup ringkasan, pengelolaan bahan, stok masuk/keluar, penyesuaian, pencarian, filter riwayat, dan ekspor CSV. Kami menetapkan akses akun, database bersama, backup cloud, supplier master, histori harga, dan rekomendasi otomatis sebagai pengembangan setelah MVP.

## Keputusan teknis dan aturan kerja

Kami membangun web responsif dengan Next.js 15, React 19, dan TypeScript. Untuk Sprint 3, kami menyimpan data pada localStorage browser satu perangkat dan menjalankan demo pada localhost:3000. Kami menggunakan satu satuan konsisten per bahan, batas minimum tersimpan per bahan, dan stok rendah saat saldo sama dengan atau di bawah minimum. Kami mencatat pemakaian manual, memasukkan hasil hitung fisik melalui penyesuaian, dan mewajibkan catatan pada semua transaksi.

Untuk rencana belanja lanjutan, kami menetapkan rata-rata pemakaian empat minggu, proyeksi produksi satu minggu, dan buffer satu minggu. Rumus dan hasil akan tampak bersama rekomendasi.

## Kriteria keberhasilan

Kami menerima Sprint 3 setelah:

- tiga halaman inti dapat digunakan;
- bahan dapat ditambah, dicari, disaring, dan diubah;
- stok masuk, keluar, dan koreksi memperbarui saldo dengan benar;
- transaksi yang menghasilkan stok negatif ditolak;
- penanda minimum, riwayat, filter, dan CSV berfungsi;
- lint, build, dan seluruh checklist QA lulus;
- panduan, laporan, dan bukti review tersimpan di repository.

## Risiko dan respons

| Risiko | Respons yang kami tetapkan |
|---|---|
| Salah input jumlah atau satuan | Kami menampilkan satuan pada bahan dan transaksi, mewajibkan catatan, serta menyimpan riwayat. |
| Nilai demo tidak cocok dengan stok fisik | Kami memberi tanda data demo dan menyediakan alur penyesuaian ke hasil hitung. |
| Bahan turun kualitas atau kedaluwarsa | Kami mencatatnya sebagai stok keluar dengan alasan dan meninjau stok secara mingguan. |
| Harga berubah | Kami tidak memakai harga contoh untuk rekomendasi; fitur harga berada di luar MVP. |
| Data browser hilang | Kami menjelaskan bahwa CSV bukan backup lengkap dan menetapkan database bersama/backup sebagai pekerjaan lanjutan. |
| Kebocoran data pribadi | Kami membatasi repository pada informasi proyek dan bukti visual tim; data kontak pelanggan tidak disimpan. |

## Keputusan tata kelola

Kami menyepakati charter ini sebagai dasar kerja internal Kelompok 6.1 pada awal proyek. Kami menggunakan hasil wawancara sebagai konteks produk, dosen pengampu sebagai evaluator akademik, dan review internal sebagai mekanisme penerimaan Sprint 3. Kami menyimpan seluruh keputusan operasional pada [Keputusan Proyek](../DECISION_LOG.md) dan status pada [Sprint Tracker](../SPRINT_TRACKER.md).

## Sumber

DigitalTwins_Daporbakes.pdf, hlm. 1–5; [Survei dan Observasi](SURVEI_DAN_OBSERVASI.md); [Pelaksanaan Sprint 3](../sprint-03/SPRINT_EXECUTION.md).
