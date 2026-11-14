# Decision Log Proyek

Kami menetapkan keputusan berikut sebagai dasar perencanaan dan implementasi Kelompok 6.1. Keputusan ini menjadi acuan Sprint 3 dan penjadwalan pekerjaan lanjutan.

| Area | Keputusan tim |
|---|---|
| Platform | Kami membangun web responsif agar alur utama dapat ditinjau di desktop dan ponsel. |
| Stack | Kami memakai Next.js 15, React 19, TypeScript, dan ESLint. |
| Penyimpanan Sprint 3 | Kami memakai localStorage pada browser/perangkat yang menjalankan aplikasi. |
| Hosting Sprint 3 | Kami menjalankan prototipe secara lokal di localhost:3000. |
| Pengguna dan akses | Kami merancang alur untuk satu pemilik pada satu perangkat; akun dan hak akses tidak masuk MVP. |
| Rekonsiliasi fisik | Kami mencatat pembelian dan pemakaian saat terjadi serta melakukan hitung fisik mingguan. Hasil hitung dicatat sebagai penyesuaian. |
| Satuan | Kami menetapkan satu satuan konsisten per bahan. Konversi satuan tidak dilakukan otomatis. |
| Bahan contoh | Kami menggunakan tujuh bahan pada aplikasi: telur ayam, gula pasir, tepung terigu, cokelat batang, cokelat bubuk, minyak goreng, dan baking powder. |
| Batas minimum | Kami memakai nilai awal pada prototipe dan menyediakan pengubahan per bahan. Stok perlu dicek ketika saldo sama dengan atau di bawah batas. |
| Resep dan kebutuhan produksi | Kami tidak mengurangi stok otomatis berdasarkan resep; pengguna mencatat pemakaian sebagai stok keluar. |
| Rekomendasi pembelian | Untuk tahap lanjutan, kami memakai rata-rata pemakaian empat minggu terakhir, proyeksi produksi satu minggu, dan buffer satu minggu; hasil tidak masuk MVP Sprint 3. |
| Pemasok | Kami mencatat nama pemasok di catatan transaksi. Master pemasok tidak masuk MVP. |
| Bahan rusak/kedaluwarsa | Kami mencatat bahan rusak atau kedaluwarsa sebagai stok keluar dengan alasan pada kolom catatan. |
| Histori harga | Kami tidak menyimpan histori harga pada MVP. |
| Koreksi transaksi | Kami mencatat koreksi sebagai penyesuaian terhadap jumlah hasil hitung fisik dengan catatan wajib. Stok tidak boleh negatif. |
| Ekspor dan backup | Kami mengekspor baris riwayat yang sedang tampil ke CSV. CSV bukan backup lengkap; data demo tetap tersimpan di browser. |
| Materi publik | Kami memakai nama proyek, anggota tim, dan dokumentasi visual yang sudah ada di paket laporan kelas; kami tidak memasukkan kontak pribadi atau data transaksi pelanggan. |
| Format laporan | Kami menyerahkan laporan Markdown dan PDF, tracker, backlog, checklist QA, serta bukti repository. |
| Function Point | Kami mempertahankan 80 UFP dan 85,6 FP dari dokumen sumber sebagai estimasi ukuran awal. |
| Struktur proyek | Kami memakai lima sprint; Sprint 3 berfokus pada MVP dan ditutup 30 Oktober 2026. |

## Rekam persetujuan internal

Kami menyetujui keputusan kerja dan batas Sprint 3 pada review internal 29 Oktober 2026. Kami menerima MVP dan menutup Sprint 3 pada review internal 30 Oktober 2026. Kami mencatat keputusan tersebut pada [laporan pelaksanaan Sprint 3](sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md) dan [Sprint Tracker](SPRINT_TRACKER.md).
