# Hasil QA Manual - MVP Inventaris

Kami menyelesaikan pemeriksaan penerimaan Sprint 3 pada 30 Oktober 2026 terhadap build utama setelah PR #13. Kami memakai Windows 11, Chrome desktop, dan emulasi viewport 390 × 844 piksel. Penguji: Dara Anggun Fransisca, Lutfiah Naysilla Azzahra, dan Raisa Nurfaiza. Hasil keseluruhan: **Lulus**.

## Bahan baku

- [x] Kami menambahkan bahan dengan nama, satuan, kelompok, saldo awal, dan batas minimum.
- [x] Kami memastikan saldo awal dihitung satu kali dan satuannya tampil benar.
- [x] Kami mencari bahan yang ada dan tidak ada; hasil kosong tampil dengan pesan yang jelas.
- [x] Kami menyaring daftar berdasarkan kelompok.
- [x] Kami mengubah nama, satuan, kelompok, dan batas minimum; saldo serta catatan lama tetap konsisten.
- [x] Kami memuat ulang halaman dan memastikan bahan tersimpan di browser yang sama.

## Pergerakan dan saldo

- [x] Kami mencatat stok masuk dan memastikan saldo bertambah sesuai jumlah.
- [x] Kami mencatat stok keluar dan memastikan saldo berkurang sesuai jumlah.
- [x] Kami mencoba stok keluar melebihi saldo; aplikasi menolak transaksi dan saldo tidak berubah.
- [x] Kami menyesuaikan jumlah fisik yang lebih tinggi; saldo berubah ke jumlah fisik.
- [x] Kami menyesuaikan jumlah fisik yang lebih rendah; saldo berubah ke jumlah fisik.
- [x] Kami memasukkan jumlah fisik yang sama; aplikasi tidak mencatat perubahan kosong.
- [x] Kami memastikan catatan wajib dan jumlah tidak valid ditolak dengan pesan yang terbaca.
- [x] Kami memastikan status menipis muncul pada saldo yang sama dengan atau di bawah batas minimum.

## Riwayat dan CSV

- [x] Kami mencari riwayat berdasarkan nama bahan dan keterangan.
- [x] Kami memeriksa rentang semua waktu, 7 hari, dan 30 hari.
- [x] Kami mengekspor CSV setelah pencarian/filter; file hanya memuat hasil yang terlihat.
- [x] Kami memeriksa encoding, kolom, tanda positif/negatif, satuan, waktu, dan keterangan CSV.
- [x] Kami memeriksa catatan yang diawali =, +, -, atau @; ekspor mengawali nilai berisiko dengan apostrof agar spreadsheet tidak mengeksekusinya sebagai formula.

## Tampilan dan aksesibilitas

- [x] Kami memeriksa ringkasan, daftar bahan, riwayat, dan dialog pada desktop serta emulasi ponsel.
- [x] Kami memeriksa lebar 320 px, 390 px, tablet, dan desktop; tidak ada gulir horizontal yang menghalangi alur.
- [x] Kami membuka menu ponsel, bernavigasi dengan keyboard, menutup dengan Escape, dan memilih tautan.
- [x] Kami memastikan fokus terlihat, label kontrol dapat dikenali, dan tombol memiliki area sentuh yang memadai.
- [x] Kami menutup dialog melalui tombol tutup, klik latar, dan Escape.
- [x] Kami memeriksa keadaan kosong dan pesan validasi.

## Pemeriksaan pengembangan

| Perintah | Hasil |
|---|---|
| npm run lint | Lulus |
| npm run build | Lulus |

Kami menetapkan emulasi viewport sebagai standar penerimaan responsif Sprint 3. Kami menerima semua skenario tanpa defect penghalang. Catatan sesi dan bukti ada pada [tinjauan UI](UI_REVIEW.md) dan [laporan Sprint 3](../docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md).
