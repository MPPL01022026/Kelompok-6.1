# MVP Inventaris Bag-Dapoorbakes

Aplikasi ini adalah prototipe buku stok bahan baku untuk Daporbakes, dikerjakan pada Sprint 3. Data awal di aplikasi merupakan contoh dan harus dicocokkan dengan stok fisik sebelum digunakan.

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

1. Buka **Bahan baku** dan cocokkan saldo awal serta batas minimum bahan contoh dengan hitungan fisik.
2. Tambahkan bahan dengan nama, satuan, kelompok, saldo awal, dan batas minimum. Gunakan satuan yang sama setiap kali mencatat bahan tersebut.
3. Catat perubahan stok sebagai **Masuk**, **Keluar**, atau **Cocokkan**. Setiap catatan memerlukan keterangan.
4. Untuk mencocokkan stok, masukkan jumlah yang benar-benar dihitung. Aplikasi mencatat selisih terhadap saldo berjalan. Stok keluar yang melebihi saldo ditolak.
5. Gunakan **Buku pergerakan** untuk mencari catatan, memilih rentang waktu, dan mengunduh hasil yang terlihat sebagai CSV.

## Penyimpanan dan batasan

Data disimpan di `localStorage` pada browser dan profil perangkat yang sedang digunakan. Data tidak tersinkron ke anggota tim atau perangkat lain, dan belum ada akun, database, atau cadangan cloud. Ekspor CSV hanya memuat pergerakan yang sedang terlihat; ekspor itu bukan cadangan lengkap daftar bahan. Jangan gunakan prototipe ini sebagai satu-satunya catatan stok operasional.

Untuk memulai ulang data contoh pada browser, hapus data situs untuk `localhost:3000` melalui pengaturan browser. Tindakan ini menghapus data aplikasi lokal pada profil tersebut.

## QA

Gunakan [QA_CHECKLIST.md](QA_CHECKLIST.md) untuk meninjau alur manual. Tandai butir setelah benar-benar dicoba dan catat perangkat, browser, tanggal, serta hasilnya.
