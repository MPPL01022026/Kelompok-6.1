# Prototipe Stok Bahan Daporbakes

Kami membuat prototipe ini untuk mengelola bahan baku, mencatat perubahan stok, dan meninjau riwayat persediaan.

## Status Sprint 4

Sprint 4 berlangsung pada 16–20 November 2026 dengan fokus validasi akhir, perbaikan prioritas, dan persiapan demonstrasi. Pembaruan aplikasi mencakup panel aktivitas pada ikon lonceng, bilah navigasi bawah pada ponsel, serta penghapusan bahan melalui konfirmasi. Penghapusan bahan juga menghapus catatan stok terkait.

## Menjalankan aplikasi

Kami memakai Node.js 20.9 atau lebih baru. Dari folder app, jalankan:

~~~bash
npm ci
npm run dev
~~~

Buka http://localhost:3000. Untuk build produksi:

~~~bash
npm run lint
npm run build
npm start
~~~

Hentikan server lokal dengan Ctrl+C.

## Alur penggunaan

1. Buka Daftar bahan dan periksa bahan awal serta satuannya. Sesuaikan stok dengan hasil hitung fisik.
2. Tambahkan bahan dengan nama, satuan, kelompok, stok awal, dan batas minimum. Gunakan satu satuan yang sama setiap kali mencatat bahan tersebut.
3. Pilih Catat perubahan untuk merekam stok masuk, stok keluar, atau penyesuaian. Setiap pergerakan memerlukan catatan singkat dan akan muncul pada pemberitahuan lonceng.
4. Saat menyesuaikan stok, masukkan jumlah hasil hitung fisik. Aplikasi menyimpan selisih dari saldo sebelumnya dan menolak stok keluar yang melebihi saldo.
5. Gunakan tombol hapus pada baris bahan untuk menghapus bahan. Dialog konfirmasi menyebutkan bahwa catatan riwayat terkait juga akan dihapus.
6. Buka Riwayat stok untuk mencari catatan, memilih periode, dan mengunduh baris yang sedang tampil sebagai CSV.

## Penyimpanan dan batas produk

Kami menyimpan data di localStorage browser dan perangkat yang sedang digunakan. Aplikasi ini berjalan untuk satu pengguna pada satu perangkat; data tidak disinkronkan. Aplikasi ini tidak menyediakan akun, database bersama, backup cloud, master pemasok, histori harga, atau rekomendasi pembelian otomatis.

Ekspor CSV memuat perubahan stok yang tampil setelah filter. CSV tersebut bukan backup lengkap daftar bahan. Kami menggunakan prototipe sebagai demonstrasi alur stok, bukan sebagai satu-satunya catatan operasional.

Untuk mengembalikan data demo, hapus data situs untuk localhost:3000 melalui pengaturan browser. Tindakan ini menghapus data aplikasi lokal pada profil tersebut.

## Hasil QA

Kami menyelesaikan checklist penerimaan Sprint 3. Rincian skenario, lingkungan, dan hasil ada pada [QA_CHECKLIST.md](QA_CHECKLIST.md).
