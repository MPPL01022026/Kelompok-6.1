# Risk Register

Kami meninjau risiko proyek dan menetapkan tindakan berikut untuk mengendalikan dampaknya.

| ID | Risiko | Probabilitas | Dampak | Tindakan yang kami tetapkan | Pemilik | Status |
|---|---|---|---|---|---|---|
| R1 | Tenggat kuliah berbenturan dengan jadwal sprint | Sedang | Tinggi | Kami memakai kalender lima sprint dan review mingguan. | Dara | Terkendali |
| R2 | Pemilik tidak tersedia pada walkthrough | Sedang | Tinggi | Kami menyiapkan demo lokal dan lembar keputusan agar sesi dapat dilakukan singkat atau asinkron. | Dara | Terjadwal Sprint 4 |
| R3 | Satuan, ambang, resep, atau koreksi stok tidak konsisten | Sedang | Tinggi | Kami memakai satu satuan per bahan, ambang yang dapat diubah, pemakaian manual, dan penyesuaian fisik bercatatan. | Dara dan Lutfiah | Dikendalikan pada MVP |
| R4 | Benturan kuliah mengurangi kapasitas anggota | Sedang | Sedang | Kami membagi deliverable per peran dan mencatat effort tiap sprint. | Dara | Terkendali |
| R5 | Stack/penyimpanan tidak sesuai kebutuhan | Rendah | Tinggi | Kami memilih Next.js/React/TypeScript dan localStorage untuk demo satu perangkat; database bersama menjadi scope lanjutan. | Lutfiah | Keputusan diterapkan |
| R6 | Biaya internet/transportasi melampaui rencana | Sedang | Sedang | Kami membatasi sesi, mencatat biaya aktual, dan memakai total biaya aktual Sprint 2 sebesar Rp1.364.000 sebagai baseline. | Raisa dan Dara | Terkendali |
| R7 | Function Point tidak mewakili ukuran fitur | Sedang | Sedang | Kami mempertahankan 80 UFP/85,6 FP sebagai baseline dan mengaitkan effort ke WBS. | Lutfiah dan Raisa | Terkendali |
| R8 | Akses repository menghambat review | Rendah | Sedang | Kami memakai branch per tugas, Pull Request, dan merge ke main. | Dara | Selesai |
| R9 | Informasi pribadi masuk materi publik | Rendah | Tinggi | Kami tidak memasukkan kontak pelanggan atau data transaksi; kami memakai aset visual laporan proyek dan foto tim yang tersedia. | Raisa | Terkendali |

## Aturan respons

Kami meninjau risiko pada awal dan akhir sprint. Untuk risiko yang memengaruhi fungsi, kami mengubah aturan produk atau menempatkan pekerjaan pada sprint terjadwal. Kami mencatat keputusan produk pada [Keputusan Proyek](../DECISION_LOG.md) dan status tindakan pada [Sprint Tracker](../SPRINT_TRACKER.md).
