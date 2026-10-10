# Project Charter

## Identitas proyek

| Elemen | Keterangan |
|---|---|
| Judul | Pengembangan Digital Twin Stok Bahan Baku pada Usaha Brownies Daporbakes |
| Klien | UMKM Daporbakes |
| Lokasi | Gampong Blang, Kota Langsa |
| Pemilik/pengguna utama | Nurika Eliza |
| Project Manager | Dara Anggun Fransisca (230504030), fokus UI/UX |
| Tim | Lutfiah Naysilla Azzahra (230504042), fokus pengembangan; Raisa Nurfaiza (230504032), fokus dokumentasi/laporan/bukti survei |
| Status | Sprint 1 — dokumentasi dan perencanaan; aplikasi belum dibangun |

Sumber: DigitalTwins_Daporbakes.pdf, hlm. 1, 4–5.

## Latar belakang dan masalah

**Fakta sumber:** Daporbakes menjalankan usaha brownies kukus dan panggang dengan aneka varian selama sekitar tiga tahun saat survei. Produksi rata-rata 6–7 loyang per minggu dan penjualan dilakukan secara online serta pre-order. Pengelolaan produksi dan bahan dilakukan sendiri oleh pemilik; pencatatan stok masih menggunakan buku tulis.

Pemilik kesulitan memperkirakan jumlah bahan yang perlu dibeli, terutama menjelang lonjakan pesanan akhir pekan. Pembelian berlebih berisiko membuat bahan menumpuk dan turun kualitas; pembelian kurang dapat menghambat produksi. Wawancara menyatakan Daporbakes belum pernah kehabisan bahan, tetapi pernah mengalami bahan terbuang karena terlalu lama disimpan.

## Tujuan

Merancang sistem yang merepresentasikan kondisi persediaan secara digital, mencatat stok masuk dan keluar, menampilkan stok serta riwayat, memberikan pengingat ketika stok mendekati batas minimum, dan membantu memperkirakan belanja berdasarkan pola produksi mingguan. Keberhasilan diukur melalui tersedianya spesifikasi yang disepakati dan, pada tahap produk, fungsi yang memenuhi kriteria penerimaan yang kelak divalidasi. Tidak ditetapkan target numerik tanpa data.

## Manfaat yang diharapkan

- Pemilik lebih mudah melihat catatan stok melalui HP.
- Informasi stok dapat membantu pertimbangan waktu/jumlah pembelian.
- Tim dan evaluator mempunyai dokumentasi kebutuhan dan keputusan proyek.

Manfaat ini merupakan harapan, bukan hasil yang sudah dibuktikan.

## Pihak terkait

Pemilik/pengguna utama adalah Nurika Eliza. Tim terdiri atas Dara Anggun Fransisca, Lutfiah Naysilla Azzahra, dan Raisa Nurfaiza dengan fokus sebagaimana tabel identitas. Toko Bahan Kue Asyiba merupakan pemasok; pelanggan adalah penerima manfaat tidak langsung; dosen pengampu menjadi penilai/evaluator. Rincian ada di [Stakeholder Register](STAKEHOLDER_REGISTER.md).

## Ruang lingkup

### Rencana produk

- Login/akses aplikasi.
- Pengelolaan bahan baku dan pemasok.
- Pencatatan stok masuk dan keluar.
- Tampilan stok terkini, riwayat, dan pencarian.
- Pengingat stok menipis di dalam aplikasi.
- Rekomendasi pembelian berdasarkan pola produksi mingguan.
- Kemudahan penggunaan melalui HP.

### Di luar Sprint 1

Implementasi aplikasi, database, deployment, dan pengujian produk belum termasuk Sprint 1. Sensor IoT, sinkronisasi real-time otomatis, AI/ML, kasir, pembayaran, fitur penjualan, serta gateway WhatsApp tidak ditetapkan sumber dan tidak menjadi komitmen proyek saat ini.

## Deliverable

**Sprint 1:** Project Charter, Stakeholder Register, WBS, dokumentasi survei/observasi berbasis sumber yang tersedia, catatan Function Point, backlog usulan, tracker, pertanyaan terbuka, dan panduan GitHub.

**Target produk akhir:** sistem digital untuk pencatatan dan pemantauan stok sesuai lingkup yang tervalidasi. Bentuk platform dan detail teknis belum ditetapkan.

## Risiko awal dari sumber

| Risiko | Respons awal yang diusulkan |
|---|---|
| Kesalahan pencatatan | Rancang pencatatan sederhana dan riwayat yang dapat ditinjau; cara koreksi perlu dikonfirmasi. |
| Perubahan harga bahan baku | Jangan menganggap harga tetap; validasi kebutuhan pencatatan harga dan dampaknya pada rekomendasi. |
| Bahan terbuang karena lama disimpan | Validasi masa simpan dan cara pemantauan tanpa membuat klaim sistem sudah mencegah pemborosan. |

Dua risiko eksplisit pada Project Charter PDF adalah kesalahan pencatatan dan perubahan harga bahan baku. Bahan terbuang merupakan temuan wawancara yang relevan.

## Kriteria keberhasilan awal dan asumsi

- Dokumen perencanaan konsisten dengan sumber dan mencatat hal yang belum diketahui.
- Kebutuhan serta alur dapat ditinjau pemilik dan pengampu; persetujuannya belum ada dalam sumber.
- Batas minimum, satuan, rumus rekomendasi, platform, dan metode memperbarui saldo akan diputuskan sebelum desain rinci.
- Catatan digital mungkin perlu diperbarui pengguna; ini hipotesis desain, sebab mekanisme sinkronisasi belum ditentukan sumber.

## Persetujuan proyek

Persetujuan pemilik: **[BELUM DIKONFIRMASI]**  
Persetujuan dosen pengampu: **[BELUM DIKONFIRMASI]**  
Tanggal persetujuan: **[BELUM DIKONFIRMASI]**

## Referensi

DigitalTwins_Daporbakes.pdf, hlm. 1–4. Lihat [rencana induk](../../PLANNING.md) dan [pertanyaan terbuka](../OPEN_QUESTIONS.md).
