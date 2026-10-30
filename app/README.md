# Prototipe stok bahan Daporbakes

Prototipe ini membantu mencatat bahan baku, perubahan stok, dan hasil hitung fisik. Data awal hanya contoh; cocokkan dengan stok sebenarnya sebelum digunakan.

## Menjalankan aplikasi

Persyaratan: Node.js 20.9 atau lebih baru.

Dari folder `app/`, jalankan:

```bash
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Untuk memeriksa build produksi:

```bash
npm run lint
npm run build
npm start
```

Hentikan server lokal dengan `Ctrl+C`.

## Alur penggunaan

1. Buka **Daftar bahan**, lalu cocokkan stok awal dan batas minimum bahan contoh dengan hasil hitung fisik.
2. Tambahkan bahan dengan nama, satuan, kelompok, stok awal, dan batas minimum. Gunakan satuan yang sama setiap kali mencatat bahan tersebut.
3. Pilih **Catat perubahan** untuk merekam **Stok masuk**, **Stok keluar**, atau **Sesuaikan stok**. Tambahkan catatan untuk menjelaskan setiap perubahan.
4. Saat menyesuaikan stok, masukkan jumlah hasil hitung fisik. Aplikasi mencatat selisih dari stok sebelumnya. Jumlah pemakaian yang melebihi stok akan ditolak.
5. Buka **Riwayat stok** untuk mencari catatan, memilih rentang waktu, dan mengunduh hasil yang tampil sebagai CSV.

## Penyimpanan dan batasan

Data disimpan di `localStorage` pada browser dan perangkat yang sedang digunakan. Data tidak tersinkron ke perangkat lain; prototipe ini belum memiliki akun, database bersama, atau cadangan cloud. Ekspor CSV hanya memuat perubahan stok yang sedang tampil, bukan cadangan lengkap daftar bahan. Jangan gunakan prototipe ini sebagai satu-satunya catatan stok operasional.

Untuk memulai ulang data contoh pada browser, hapus data situs untuk `localhost:3000` melalui pengaturan browser. Tindakan ini menghapus data aplikasi lokal pada profil tersebut.

## QA

Gunakan [QA_CHECKLIST.md](QA_CHECKLIST.md) untuk meninjau alur manual. Tandai butir setelah benar-benar dicoba dan catat perangkat, browser, tanggal, serta hasilnya.
