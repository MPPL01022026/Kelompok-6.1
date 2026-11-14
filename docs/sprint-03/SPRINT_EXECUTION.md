# Pelaksanaan Sprint 3 - Project Execution

Kami menutup Sprint 3 pada 30 Oktober 2026. Sprint ini menghasilkan MVP inventaris Daporbakes, penyempurnaan UI responsif, panduan penggunaan, dan paket pemeriksaan QA. Kami menyelesaikan dokumentasi penutupan pada 14 November 2026.

## Sasaran dan hasil

| Sasaran | Hasil Sprint 3 | Status |
|---|---|---|
| Mencatat bahan dan saldo awal | Kami menyediakan tujuh bahan contoh dengan satuan, kategori, saldo awal, dan batas minimum | Selesai |
| Mencatat pergerakan stok | Kami menyediakan stok masuk, stok keluar, dan penyesuaian berdasarkan hitung fisik | Selesai |
| Meninjau persediaan | Kami menyediakan ringkasan, penanda stok minimum, daftar bahan, dan riwayat | Selesai |
| Mencari dan mengekspor | Kami menyediakan pencarian, filter periode, dan ekspor CSV dari hasil yang tampil | Selesai |
| Menyempurnakan akses pada layar kecil | Kami memperbaiki navigasi ponsel, fokus keyboard, target sentuh, dan safe area dialog/notifikasi | Selesai |
| Menutup dokumentasi | Kami menyiapkan panduan, laporan, dan checklist QA beserta hasil sesi | Selesai |

## Pembagian tugas dan bukti

| Anggota | Hasil kerja | Bukti |
|---|---|---|
| Lutfiah Naysilla Azzahra | Fondasi aplikasi dan MVP inventaris | [Commit a62bd1e](https://github.com/MPPL01022026/Kelompok-6.1/commit/a62bd1e), [PR #11](https://github.com/MPPL01022026/Kelompok-6.1/pull/11) |
| Dara Anggun Fransisca | UI responsif, navigasi, fokus keyboard, target sentuh, dan review UI | [Commit 1671b14](https://github.com/MPPL01022026/Kelompok-6.1/commit/1671b14), [PR #12](https://github.com/MPPL01022026/Kelompok-6.1/pull/12) |
| Raisa Nurfaiza | Panduan aplikasi, checklist QA, dan laporan pelaksanaan | [Commit 07f6f39](https://github.com/MPPL01022026/Kelompok-6.1/commit/07f6f39), [PR #13](https://github.com/MPPL01022026/Kelompok-6.1/pull/13) |

Kami menggabungkan ketiga PR ke main melalui alur branch dan review. Riwayat kontribusi dan tangkapan layar tersedia pada [laporan Sprint 3](LAPORAN_PELAKSANAAN_SPRINT_3.md).

## Estimasi dan realisasi usaha

Kami memakai 1 manday (MD) = 8 jam kerja efektif. Kami membagi usaha Sprint 3 menurut pekerjaan yang diselesaikan dan peran anggota.

| Anggota | Estimasi | Realisasi | Jam realisasi | Fokus |
|---|---:|---:|---:|---|
| Lutfiah Naysilla Azzahra | 2,75 MD | 3,00 MD | 24 jam | Fondasi aplikasi, model data lokal, bahan, pergerakan stok, riwayat, dan ekspor |
| Dara Anggun Fransisca | 1,25 MD | 1,25 MD | 10 jam | Alur, UI responsif, navigasi ponsel, aksesibilitas, dan review |
| Raisa Nurfaiza | 1,00 MD | 1,25 MD | 10 jam | Panduan, checklist QA, bukti, dan laporan sprint |
| **Total** | **5,00 MD** | **5,50 MD** | **44 jam** | |

Kami menyelesaikan pekerjaan dengan realisasi 0,50 MD di atas estimasi, terutama pada penyelesaian state inventaris dan dokumentasi penerimaan.

## Keputusan kerja Sprint 3

Kami menetapkan aplikasi sebagai web responsif berbasis Next.js, React, dan TypeScript. Kami menyimpan data pada localStorage browser untuk satu pengguna pada satu perangkat. Kami menggunakan satu satuan konsisten per bahan. Kami menandai stok perlu dicek ketika saldo sama dengan atau di bawah batas minimum. Kami mencatat koreksi sebagai penyesuaian terhadap jumlah hasil hitung fisik dan mewajibkan catatan pada setiap pergerakan.

Kami memilih pemasok sebagai teks catatan transaksi, tidak sebagai master data. Kami mencatat bahan rusak atau kedaluwarsa sebagai stok keluar dengan keterangan. Kami menunda harga dan rekomendasi belanja otomatis ke backlog lanjutan karena MVP hanya menyimpan saldo dan pergerakan, tanpa data harga, resep, atau kebutuhan produksi.

## Pemeriksaan dan penerimaan

| Pemeriksaan | Hasil |
|---|---|
| Lint dan build produksi | Lulus |
| Bahan: tambah, cari, filter, ubah, dan persistensi setelah muat ulang | Lulus |
| Stok masuk, stok keluar, dan penolakan stok negatif | Lulus |
| Penyesuaian ke hitung fisik lebih tinggi, lebih rendah, dan sama | Lulus |
| Status minimum, pencarian riwayat, dan filter 7/30 hari | Lulus |
| Ekspor CSV, tanda kuantitas, satuan, dan pengamanan formula | Lulus |
| Tampilan desktop, layar 390 px, navigasi keyboard, dialog, dan fokus | Lulus |

Kami mencatat hasil skenario pada [checklist QA](../../app/QA_CHECKLIST.md) dan keputusan UI pada [tinjauan UI](../../app/UI_REVIEW.md).

## Catatan koordinasi dan penerimaan internal

| Tanggal | Peserta | Agenda | Keputusan | PIC |
|---|---|---|---|---|
| 29 Oktober 2026 | Dara, Lutfiah, Raisa | Menetapkan alur MVP, data contoh, aturan minimum, dan pembagian implementasi | Kami memilih web responsif lokal; tujuh bahan contoh; stok rendah saat saldo <= minimum; koreksi memakai jumlah fisik | Dara mengoordinasikan; Lutfiah menerapkan; Raisa mencatat |
| 30 Oktober 2026 | Dara, Lutfiah, Raisa | Review aplikasi, hasil lint/build, dan paket dokumentasi | Kami menerima MVP Sprint 3; PR #11–#13 digabung; dokumentasi ditutup dengan QA checklist dan laporan | Raisa menutup laporan; seluruh tim menyetujui penutupan internal |

## Batas produk yang kami tetapkan

Kami menyelesaikan Sprint 3 sebagai prototipe lokal. Data awal di layar adalah data demo. Aplikasi tidak menyediakan akun, database bersama, sinkronisasi perangkat, backup cloud, master pemasok, atau rekomendasi pembelian otomatis. Ekspor CSV mencakup baris riwayat yang sedang tampil dan bukan backup lengkap aplikasi.

## Referensi

- [Laporan Pelaksanaan Sprint 3](LAPORAN_PELAKSANAAN_SPRINT_3.md)
- [Panduan aplikasi](../../app/README.md)
- [Checklist QA](../../app/QA_CHECKLIST.md)
- [Sprint Tracker](../SPRINT_TRACKER.md)
