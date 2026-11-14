# Product Backlog — Status Sprint 3

Kami menetapkan prioritas dan kriteria backlog berikut sebagai dasar produk. Sprint 3 telah menutup alur pencatatan inti; pekerjaan lanjutan memiliki keputusan ruang lingkup dan penerimaan.

| ID | User story | Prioritas | Kriteria penerimaan | Status |
|---|---|---|---|---|
| PB-01 | Sebagai pemilik, saya ingin akses terlindungi agar data tidak terbuka pada pengguna lain. | P1 | Akun dapat masuk/keluar dan data dibatasi per pengguna saat layanan bersama dibuat. | Ditunda setelah paket lima sprint; MVP memakai satu browser lokal. |
| PB-02 | Sebagai pemilik, saya ingin mengelola daftar bahan agar bahan utama tercatat. | P0 | Bahan dapat ditambah, dicari, disaring, dan diubah; satuan, stok awal, kelompok, dan batas minimum ditampilkan. | Selesai di Sprint 3. |
| PB-03 | Sebagai pemilik, saya ingin mencatat pemasok agar asal pembelian mudah ditelusuri. | P2 | Nama pemasok dicatat pada keterangan transaksi; master pemasok ditambahkan saat model database bersama dibuat. | Pencatatan teks selesai; master pemasok masuk pengembangan setelah paket lima sprint. |
| PB-04 | Sebagai pemilik, saya ingin mencatat stok masuk agar saldo bertambah. | P0 | Jumlah, bahan, tanggal, satuan, dan catatan masuk ke riwayat serta saldo bertambah. | Selesai di Sprint 3. |
| PB-05 | Sebagai pemilik, saya ingin mencatat pemakaian agar saldo berkurang dengan benar. | P0 | Transaksi keluar tersimpan; aplikasi menolak pemakaian yang melebihi saldo. | Selesai di Sprint 3. |
| PB-06 | Sebagai pemilik, saya ingin melihat saldo agar dapat meninjau jumlah bahan. | P0 | Ringkasan dan daftar bahan menampilkan saldo dan satuan hasil akumulasi transaksi. | Selesai di Sprint 3. |
| PB-07 | Sebagai pemilik, saya ingin mencari riwayat agar perubahan tertentu dapat ditemukan. | P1 | Riwayat dapat dicari berdasarkan nama/catatan dan difilter ke semua waktu, 7 hari, atau 30 hari. | Selesai di Sprint 3. |
| PB-08 | Sebagai pemilik, saya ingin melihat peringatan minimum agar bahan yang perlu diperiksa terlihat. | P0 | Aplikasi menandai bahan saat saldo sama dengan atau di bawah batas minimum yang tersimpan. | Selesai di Sprint 3. |
| PB-09 | Sebagai pemilik, saya ingin merencanakan belanja mingguan dari pemakaian dan kebutuhan produksi. | P1 | Rekomendasi menghitung proyeksi produksi 1 minggu, rata-rata pemakaian 4 minggu, dan buffer 1 minggu; rumus ditampilkan bersama hasil. | Masuk pengembangan setelah paket lima sprint, setelah pencatatan histori memadai. |
| PB-10 | Sebagai pemilik, saya ingin memakai alur stok di ponsel dengan nyaman. | P0 | Navigasi, formulir, dialog, fokus, dan tombol dapat digunakan pada lebar 390 px dan desktop. | Selesai di Sprint 3. |
| PB-11 | Sebagai pemilik dan tim, kami ingin menyelesaikan uji penerimaan agar alur inti siap untuk demonstrasi. | P1 | Seluruh skenario QA internal selesai; hasil dan lingkungan dicatat. | Selesai di Sprint 3 pada 30 Oktober 2026. |

## Keputusan penerapan backlog

Kami menutup PB-02 dan PB-04 sampai PB-08 serta PB-10 di Sprint 3. Kami menyelesaikan paket lima sprint dengan prototipe lokal, lalu menempatkan login, database bersama, master pemasok, histori harga, dan rekomendasi otomatis pada pengembangan setelahnya. Kami memakai pemakaian manual dan penyesuaian fisik sebagai alur pencatatan MVP. Kami mencatat rinciannya pada [Decision Log](DECISION_LOG.md) dan [Sprint Tracker](SPRINT_TRACKER.md).
