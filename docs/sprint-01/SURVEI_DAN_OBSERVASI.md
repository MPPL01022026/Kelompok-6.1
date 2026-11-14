# Survei dan Observasi

## Pelaksanaan

| Elemen | Catatan tim |
|---|---|
| Usaha | Daporbakes |
| Pemilik | Nurika Eliza |
| Tanggal | 9 September 2026 |
| Lokasi | Gampong Blang, Kota Langsa |
| Pewawancara | Dara Anggun Fransisca, Lutfiah Naysilla Azzahra, Raisa Nurfaiza |
| Metode | Wawancara dan pengamatan alur pencatatan bahan/pembelian/produksi |

Kami menggunakan ringkasan wawancara dan dokumentasi pada DigitalTwins_Daporbakes.pdf sebagai sumber kebutuhan.

## Temuan

- Daporbakes menjalankan usaha brownies kukus dan panggang dengan beberapa varian.
- Produksi rata-rata yang tercatat adalah 6–7 loyang per minggu; pesanan datang secara online dan pre-order.
- Pemilik mengelola produksi, pengemasan, dan pengantaran sendiri.
- Bahan utama terdiri dari telur, gula, tepung, cokelat batang, cokelat bubuk, minyak, dan baking powder.
- Telur dan cokelat batang cepat habis; telur dan minyak lebih cepat turun kualitasnya daripada bahan kering.
- Pembelian bahan dilakukan di Toko Bahan Kue Asyiba.
- Pencatatan saldo dilakukan dengan buku tulis.
- Pemilik menyebut belum pernah kehabisan bahan dan pernah mengalami bahan terbuang karena terlalu lama disimpan.
- Pemilik ingin lebih mudah memperkirakan belanja menjelang lonjakan pesanan akhir pekan dan terbiasa memakai HP.
- Harga bahan terutama cokelat berubah-ubah.

## Keputusan kebutuhan yang kami turunkan

| Temuan | Keputusan produk |
|---|---|
| Catatan stok manual | Kami menyediakan daftar bahan, saldo, dan riwayat transaksi. |
| Sulit memperkirakan pembelian | Kami menyimpan pemakaian sebagai dasar rekomendasi lanjutan; MVP menampilkan stok dan batas minimum. |
| Bahan dapat terbuang | Kami menyediakan stok keluar dengan catatan alasan; peninjauan stok dilakukan mingguan. |
| Kecepatan habis berbeda antar bahan | Kami memberi setiap bahan batas minimum yang dapat diubah. |
| Pemilik menggunakan HP | Kami membangun layout responsif dan memeriksa viewport ponsel. |
| Harga berubah | Kami tidak memakai harga sebagai input MVP dan menunda histori harga. |

## Aturan data yang kami pakai

Kami menetapkan satu satuan konsisten per bahan: telur dalam butir, gula/tepung/cokelat/cokelat bubuk dalam kilogram, minyak dalam liter, dan baking powder dalam gram. Kami menyediakan tujuh bahan contoh tersebut pada MVP. Kami menghitung stok dari saldo awal dan pergerakan; stok keluar tidak dapat membuat saldo negatif. Kami mencatat hasil hitung fisik sebagai penyesuaian.

Untuk rekomendasi lanjutan, kami memakai rata-rata pemakaian 4 minggu dan proyeksi produksi 1 minggu, dengan buffer 1 minggu. Pemilik tetap memutuskan jumlah belanja.

## Bukti dan etika

Kami menyimpan ringkasan sumber pada laporan ini dan tidak menyimpan kontak pribadi, catatan transaksi pelanggan, atau foto klien. Laporan Sprint 3 memakai foto kegiatan tim yang tersedia pada paket proyek. Kami menyertakan batas data prototipe pada [panduan bukti](../evidence/README.md) dan [keputusan proyek](../DECISION_LOG.md).

## Sumber

DigitalTwins_Daporbakes.pdf, hlm. 1–5; [Project Charter](PROJECT_CHARTER.md); [Pelaksanaan Sprint 3](../sprint-03/SPRINT_EXECUTION.md).
