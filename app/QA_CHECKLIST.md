# Checklist QA Manual — MVP Inventaris

Checklist ini adalah panduan pengujian, bukan bukti bahwa skenario sudah dijalankan. Jangan menandai butir sebelum mengujinya pada build terbaru.

## Catatan sesi

- Penguji:
- Tanggal dan waktu:
- Perangkat dan ukuran layar:
- Sistem operasi dan browser:
- Versi/commit aplikasi:
- Hasil keseluruhan: Belum diuji / Lulus / Gagal
- Kendala atau tautan bukti:

## Bahan baku

- [ ] Tambahkan bahan dengan nama, satuan, kelompok, saldo awal, dan batas minimum.
- [ ] Pastikan saldo awal dihitung tepat satu kali dan satuannya tampil benar.
- [ ] Cari bahan yang ada dan bahan yang tidak ada; pastikan keadaan hasil kosong jelas.
- [ ] Saring daftar berdasarkan kelompok.
- [ ] Ubah nama, satuan, kelompok, dan batas minimum; pastikan saldo dan catatan lama tetap benar.
- [ ] Muat ulang halaman dan pastikan bahan tetap tersimpan di browser yang sama.

## Pergerakan dan saldo

- [ ] Catat stok masuk dengan keterangan dan pastikan saldo bertambah sesuai jumlah.
- [ ] Catat stok keluar dengan keterangan dan pastikan saldo berkurang sesuai jumlah.
- [ ] Coba stok keluar melebihi saldo; pastikan ditolak tanpa mengubah saldo.
- [ ] Cocokkan jumlah fisik yang lebih tinggi; pastikan penyesuaian positif menghasilkan saldo fisik tersebut.
- [ ] Cocokkan jumlah fisik yang lebih rendah; pastikan penyesuaian negatif menghasilkan saldo fisik tersebut.
- [ ] Cocokkan jumlah fisik yang sama; pastikan tidak ada perubahan yang dicatat.
- [ ] Pastikan keterangan wajib dan jumlah tidak valid ditolak dengan pesan yang terbaca.
- [ ] Pastikan status menipis muncul saat saldo sama dengan atau di bawah batas minimum.

## Riwayat dan CSV

- [ ] Cari riwayat berdasarkan nama bahan dan keterangan.
- [ ] Periksa rentang semua waktu, 7 hari, dan 30 hari.
- [ ] Ekspor CSV setelah memakai pencarian/filter; pastikan hanya hasil yang terlihat diekspor.
- [ ] Periksa encoding, kolom, tanda positif/negatif, satuan, waktu, dan keterangan CSV.
- [ ] Pastikan teks catatan yang diawali `=`, `+`, `-`, atau `@` tidak diperlakukan sebagai rumus saat dibuka di spreadsheet.

## Tampilan dan aksesibilitas

- [ ] Periksa ringkasan, daftar bahan, riwayat, dan dialog pada layar ponsel serta desktop.
- [ ] Pastikan tidak ada gulir horizontal yang tidak diperlukan pada lebar 320 px, 390 px, tablet, dan desktop.
- [ ] Buka menu ponsel; jelajahi dengan keyboard; tutup dengan Escape dan pilih tautan.
- [ ] Pastikan fokus terlihat, label kontrol dapat dibaca pembaca layar, dan tombol mudah disentuh.
- [ ] Tutup dialog dengan tombol tutup, klik latar, dan Escape.
- [ ] Periksa keadaan kosong dan pesan validasi.

## Pemeriksaan pengembangan

Jalankan dari folder `app/` dan catat hasil aktual di catatan sesi:

```bash
npm ci
npm run lint
npm run build
```

### Temuan

| Skenario | Hasil (Lulus/Gagal/Belum diuji) | Catatan atau bukti |
|---|---|---|
| — | Belum diuji | — |
