# Prototipe Stok Bahan Daporbakes

Kami membuat prototipe ini untuk mencatat bahan baku, perubahan stok, dan hasil hitung fisik. Nilai awal berfungsi sebagai data demo; pengguna dapat menggantinya melalui alur penyesuaian stok.

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

1. Buka Daftar bahan dan tinjau tujuh bahan demo serta satuannya.
2. Tambahkan bahan dengan nama, satuan, kelompok, stok awal, dan batas minimum. Kami memakai satu satuan yang sama untuk setiap bahan.
3. Pilih Catat perubahan untuk merekam Stok masuk, Stok keluar, atau Sesuaikan stok. Kami meminta catatan singkat untuk setiap pergerakan.
4. Saat menyesuaikan stok, masukkan jumlah hasil hitung fisik. Aplikasi menyimpan selisih dari saldo sebelumnya. Aplikasi menolak stok keluar yang melebihi saldo.
5. Buka Riwayat stok untuk mencari catatan, memilih periode, dan mengunduh baris yang sedang tampil sebagai CSV.

## Penyimpanan dan batas produk

Kami menyimpan data di localStorage browser dan perangkat yang sedang digunakan. Aplikasi ini berjalan untuk satu pengguna pada satu perangkat; data tidak disinkronkan. Sprint 3 tidak menyediakan akun, database bersama, backup cloud, master pemasok, histori harga, atau rekomendasi pembelian otomatis.

Ekspor CSV memuat perubahan stok yang tampil setelah filter. CSV tersebut bukan backup lengkap daftar bahan. Kami menggunakan prototipe sebagai demonstrasi alur stok, bukan sebagai satu-satunya catatan operasional.

Untuk mengembalikan data demo, hapus data situs untuk localhost:3000 melalui pengaturan browser. Tindakan ini menghapus data aplikasi lokal pada profil tersebut.

## Hasil QA

Kami menyelesaikan checklist penerimaan Sprint 3. Rincian skenario, lingkungan, dan hasil ada pada [QA_CHECKLIST.md](QA_CHECKLIST.md).
