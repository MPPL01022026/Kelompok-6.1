# Tugas 4 - Monitoring & Controlling

| Informasi | Rincian |
|---|---|
| Proyek | Prototipe pencatatan persediaan bahan baku Daporbakes |
| Kelompok | 6.1 |
| Tanggal tinjauan | 14 November 2026 |
| Periode yang dibandingkan | Sprint 2 dan Sprint 3; status proyek sampai akhir Sprint 3 |
| Basis effort | 1 MD = 8 jam kerja efektif |
| Baseline biaya | Rp150.000 per MD; biaya tenaga kerja dihitung sebagai nilai ekonomi |

## 1. Ringkasan status

Kami menyelesaikan Sprint 1, Sprint 2, dan implementasi Sprint 3. Jadwal pengerjaan aplikasi pada Sprint 2 dan Sprint 3 sesuai baseline. Kami menutup paket dokumen Sprint 3 pada 14 November, 15 hari kalender setelah tanggal penutupan implementasi yang direncanakan 30 Oktober.

Pada periode yang memiliki baseline effort dan biaya, kami merencanakan 11,00 MD dan Rp2.475.000. Realisasi sampai Sprint 3 adalah 11,80 MD dan Rp2.579.500. Varians kumulatif sebesar +0,80 MD (+7,27%) dan +Rp104.500 (+4,22%). Kami mempertahankan hasil MVP lokal sebagai baseline Sprint 4 dan mengendalikan pekerjaan lanjutan melalui backlog.

| Indikator | Baseline | Realisasi sampai 14 Nov | Varians | Status |
|---|---:|---:|---:|---|
| Jadwal implementasi Sprint 2–3 | Selesai 30 Okt | Selesai 30 Okt | 0 hari | Sesuai rencana |
| Penutupan dokumentasi Sprint 3 | 30 Okt | 14 Nov | +15 hari kalender | Ditutup; kontrol dokumen diperketat |
| Effort Sprint 2–3 | 11,00 MD | 11,80 MD | +0,80 MD (+7,27%) | Dikendalikan |
| Biaya ekonomi Sprint 2–3 | Rp2.475.000 | Rp2.579.500 | +Rp104.500 (+4,22%) | Dikendalikan |
| Cakupan MVP | Alur stok inti dan UI responsif | Alur stok inti, koreksi fisik, filter, CSV, UI responsif | Penyesuaian terkontrol | Selesai |

## 2. Perbandingan rencana dan realisasi waktu

Kami memakai kalender lima sprint pada [Project Schedule](../sprint-02/PROJECT_SCHEDULE_GANTT.md). Varians jadwal dihitung dari tanggal selesai aktual dikurangi tanggal selesai baseline. Nilai positif berarti terlambat dan nilai negatif berarti lebih awal.

| Tahap | Baseline | Realisasi | Varians | Penilaian |
|---|---|---|---:|---|
| Sprint 1 - inisiasi | 7–11 September 2026 | 7–11 September 2026 | 0 hari | Selesai sesuai rencana |
| Sprint 2 - analisis dan desain | 12–23 Oktober 2026 | 12–23 Oktober 2026 | 0 hari | Selesai sesuai rencana |
| Sprint 3 - implementasi MVP | 26–30 Oktober 2026 | 26–30 Oktober 2026 | 0 hari | PR implementasi dan UI digabung 30 Oktober |
| Sprint 3 - penutupan dokumentasi | 30 Oktober 2026 | 14 November 2026 | +15 hari kalender | Laporan final dan paket kendali ditutup 14 November |
| Sprint 4 - validasi dan persiapan demonstrasi | 16–20 November 2026 | Dijadwalkan 16–20 November | 0 hari pada baseline | Belum masuk periode realisasi per tanggal tinjauan |
| Sprint 5 - serah produk dan laporan akhir | 23–27 November 2026 | Dijadwalkan 23–27 November | 0 hari pada baseline | Baseline tetap digunakan |

Kami memisahkan penyelesaian produk dari penyelesaian administrasi Sprint 3. MVP selesai tepat waktu pada 30 Oktober; laporan finalisasi dokumen menyusul pada 14 November. Kami mempertahankan Sprint 4 dan Sprint 5 sesuai jadwal.

## 3. Perbandingan estimasi manday dan aktual

Kami memakai estimasi dan realisasi Sprint 2 pada [Estimasi Manday](../sprint-02/EFFORT_ESTIMATION_MANDAY.md) serta Sprint 3 pada [Laporan Pelaksanaan Sprint 3](../sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md). Varians effort dihitung sebagai aktual dikurangi estimasi.

### 3.1 Sprint 2

| Anggota | Estimasi | Aktual | Varians |
|---|---:|---:|---:|
| Dara Anggun Fransisca | 2,05 MD | 2,20 MD | +0,15 MD |
| Lutfiah Naysilla Azzahra | 1,75 MD | 1,80 MD | +0,05 MD |
| Raisa Nurfaiza | 2,20 MD | 2,30 MD | +0,10 MD |
| **Total Sprint 2** | **6,00 MD** | **6,30 MD** | **+0,30 MD (+5,00%)** |

### 3.2 Sprint 3

| Anggota | Estimasi | Aktual | Varians |
|---|---:|---:|---:|
| Lutfiah Naysilla Azzahra | 2,75 MD | 3,00 MD | +0,25 MD |
| Dara Anggun Fransisca | 1,25 MD | 1,25 MD | 0,00 MD |
| Raisa Nurfaiza | 1,00 MD | 1,25 MD | +0,25 MD |
| **Total Sprint 3** | **5,00 MD** | **5,50 MD** | **+0,50 MD (+10,00%)** |

### 3.3 Kumulatif per anggota

| Anggota | Estimasi Sprint 2–3 | Aktual Sprint 2–3 | Varians |
|---|---:|---:|---:|
| Dara Anggun Fransisca | 3,30 MD | 3,45 MD | +0,15 MD |
| Lutfiah Naysilla Azzahra | 4,50 MD | 4,80 MD | +0,30 MD |
| Raisa Nurfaiza | 3,20 MD | 3,55 MD | +0,35 MD |
| **Total** | **11,00 MD** | **11,80 MD** | **+0,80 MD (+7,27%)** |

Kami mencatat tambahan effort pada konsolidasi aturan produk, validasi state inventaris, penyempurnaan UI, dan penutupan dokumen. Total aktual Sprint 2–3 setara 94,4 jam fokus; baseline-nya 88 jam.

## 4. Perbandingan anggaran dan biaya aktual

Kami memakai tarif Rp150.000 per MD dan overhead 10% dari tenaga kerja serta biaya operasional langsung. Nilai tenaga kerja adalah shadow cost; biaya perangkat lunak dan layanan pada Sprint 2–3 tidak menambah biaya kas.

| Periode | Baseline ekonomi | Aktual ekonomi | Varians | Varians % |
|---|---:|---:|---:|---:|
| Sprint 2 | Rp1.320.000 | Rp1.364.000 | +Rp44.000 | +3,33% |
| Sprint 3 | Rp1.155.000 | Rp1.215.500 | +Rp60.500 | +5,24% |
| **Kumulatif Sprint 2–3** | **Rp2.475.000** | **Rp2.579.500** | **+Rp104.500** | **+4,22%** |

### Rincian kumulatif

| Komponen | Anggaran | Aktual | Varians |
|---|---:|---:|---:|
| Tenaga kerja | Rp1.650.000 | Rp1.770.000 | +Rp120.000 |
| Perangkat lunak/layanan | Rp0 | Rp0 | Rp0 |
| Perangkat keras, internet, dan pertemuan | Rp600.000 | Rp575.000 | -Rp25.000 |
| Overhead | Rp225.000 | Rp234.500 | +Rp9.500 |
| **Total biaya ekonomi** | **Rp2.475.000** | **Rp2.579.500** | **+Rp104.500** |

Kami mencatat biaya operasional langsung Rp575.000 dan nilai tenaga kerja Rp1.770.000 sampai penutupan Sprint 3. Kenaikan terbesar berasal dari tambahan 0,80 MD; pengeluaran internet dan koordinasi berada Rp25.000 di bawah alokasi.

## 5. Isu, perubahan ruang lingkup, dan tindakan korektif

### 5.1 Daftar isu dan risiko kendali

| ID | Isu dan dampak | Tindakan korektif | PIC | Target/status |
|---|---|---|---|---|
| I-01 | Effort kumulatif melampaui baseline 0,80 MD; Sprint 3 mencatat deviasi 10%. | Kami membekukan scope Sprint 4 sebelum mulai, memeriksa effort dua kali seminggu, dan menukar prioritas saat proyeksi melewati kapasitas. | Dara dan seluruh tim | Mulai 16 Nov; dijadwalkan |
| I-02 | Dokumen penutupan Sprint 3 selesai 15 hari kalender setelah implementasi. | Kami memakai Markdown sebagai sumber tunggal, memperbarui PDF dari sumber yang sama, dan membekukan isi laporan dua hari sebelum penyerahan berikutnya. | Raisa | Aturan kendali diterapkan pada laporan ini |
| I-03 | Biaya ekonomi kumulatif melampaui baseline Rp104.500. | Kami mencatat pengeluaran dan effort tiap pekan, mempertahankan paket layanan gratis/lokal untuk Sprint 4, dan meminta persetujuan internal sebelum belanja baru. | Dara dan Raisa | Mulai 16 Nov; dijadwalkan |
| I-04 | Data MVP berada di localStorage dan contoh awal merupakan data demo. | Kami memakai dataset demo tetap saat demonstrasi, mengekspor riwayat sebelum sesi, dan tidak menjadikan aplikasi sebagai satu-satunya catatan operasional. | Lutfiah | Sebelum demonstrasi Sprint 4 |
| I-05 | Paket akun, database bersama, master pemasok, histori harga, dan rekomendasi otomatis tidak masuk MVP. | Kami menjaga fitur tersebut pada backlog setelah paket lima sprint dan membatasi Sprint 4 pada validasi, perbaikan prioritas, dan demonstrasi. | Dara dan tim | Scope terkendali |

### 5.2 Perubahan ruang lingkup

| Area | Rencana produk awal | Realisasi sampai Sprint 3 | Keputusan kendali |
|---|---|---|---|
| Bahan dan saldo | Mengelola bahan serta melihat stok | Tambah, cari, filter, ubah, saldo dan batas minimum | Selesai |
| Pergerakan stok | Mencatat stok masuk dan keluar | Stok masuk, stok keluar, dan penyesuaian hitung fisik | Selesai; penyesuaian menjadi perluasan terkontrol |
| Peringatan minimum | Mengingatkan bahan menipis | Penanda saat saldo sama dengan atau di bawah minimum | Selesai |
| Riwayat dan keluaran | Riwayat dan pencarian stok | Pencarian, filter periode, dan ekspor CSV | Selesai; CSV menjadi tambahan MVP |
| Akses | Login/akses aplikasi direncanakan pada charter awal | MVP lokal satu pengguna pada satu browser | Ditunda setelah paket lima sprint |
| Pemasok dan belanja | Pemasok serta rekomendasi pembelian tercantum di tujuan awal | Pemasok berupa catatan; rekomendasi otomatis tidak tersedia | Master pemasok, histori harga, dan rekomendasi tetap pada backlog lanjutan |
| Penyimpanan | Sistem digital untuk pemantauan stok | localStorage pada browser/perangkat | Ditetapkan sebagai batas MVP; database bersama dan backup berada di luar MVP |

Kami mengendalikan scope dengan menyelesaikan alur pencatatan utama lebih dulu. Kami menambahkan penyesuaian stok fisik dan ekspor CSV karena keduanya mendukung rekonsiliasi dan peninjauan catatan; kami menunda autentikasi, penyimpanan bersama, dan rekomendasi pembelian agar Sprint 3 tetap selesai pada tanggal baseline.

## 6. Rencana pengendalian Sprint 4–5

| Tanggal | Tindakan | PIC | Ukuran selesai |
|---|---|---|---|
| 16 November 2026 | Review kickoff dan scope Sprint 4 | Dara, seluruh tim | Prioritas Sprint 4 disepakati; tidak ada fitur baru di luar backlog |
| 17 November 2026 | Siapkan dataset demo dan salinan CSV | Lutfiah | Dataset dapat dipulihkan dan ringkasan stok tampil konsisten |
| 18 November 2026 | Review effort dan pengeluaran Sprint 4 | Dara dan Raisa | Actual MD, pengeluaran, dan varians diperbarui |
| 19 November 2026 | Review QA, aksesibilitas, dan materi demo | Lutfiah, Dara, Raisa | Checklist dan materi demonstrasi lengkap |
| 20 November 2026 | Review dan penutupan Sprint 4 | Seluruh tim | Hasil, keputusan, dan daftar kerja Sprint 5 dicatat |
| 23–27 November 2026 | Serah produk dan laporan akhir | Seluruh tim | Paket produk dan laporan akhir diserahkan |

## 7. Metode perhitungan

- Varians jadwal = tanggal aktual − tanggal baseline. Nilai positif menunjukkan terlambat.
- Varians manday = MD aktual − MD estimasi. Nilai positif menunjukkan effort melebihi baseline.
- Varians biaya = biaya aktual − anggaran. Nilai positif menunjukkan biaya melebihi baseline.
- Varians persentase = varians ÷ baseline × 100%.
- Kami membandingkan effort dan biaya Sprint 2–3, yaitu periode dengan baseline dan realisasi terperinci di repository.

## Referensi

- [Sprint Tracker](../SPRINT_TRACKER.md)
- [Project Schedule](../sprint-02/PROJECT_SCHEDULE_GANTT.md)
- [Estimasi Manday Sprint 2](../sprint-02/EFFORT_ESTIMATION_MANDAY.md)
- [Estimasi dan Realisasi Biaya Sprint 2–3](../sprint-02/PROJECT_COST_ESTIMATION.md)
- [Project Backlog](../PROJECT_BACKLOG.md)
- [Decision Log](../DECISION_LOG.md)
- [Risk Register](../sprint-02/RISK_REGISTER.md)
- [Laporan Pelaksanaan Sprint 3](../sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md)
- [Sprint 3 execution notes](../sprint-03/SPRINT_EXECUTION.md)
