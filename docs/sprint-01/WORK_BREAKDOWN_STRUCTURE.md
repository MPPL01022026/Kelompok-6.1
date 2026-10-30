# Work Breakdown Structure (WBS)

WBS mempertahankan tujuh kelompok dan aktivitas yang tercantum dalam DigitalTwins_Daporbakes.pdf, hlm. 3–4. ID dibuat berurutan sampai 7.5 agar konsisten dan dapat dirujuk. Status menggambarkan bukti yang tersedia di workspace, bukan klaim bahwa kegiatan pada sumber telah selesai. PIC utama mengikuti pembagian peran PDF; pekerjaan lintas fungsi tetap perlu disepakati tim.

| ID | Kelompok / aktivitas | Deliverable | PIC utama (dasar sumber) | Status bukti | Dependensi |
|---|---|---|---|---|---|
| 1.1 | Manajemen Proyek — Project Charter | Charter proyek | Dara Anggun Fransisca (Project Manager) | Sudah dipush di branch `docs/dara`; belum masuk `main` | Konteks proyek |
| 1.2 | Manajemen Proyek — Stakeholder Register | Daftar pihak, kepentingan, pengaruh | Dara Anggun Fransisca | Sudah dipush di branch `docs/dara`; belum masuk `main` | Konteks stakeholder |
| 1.3 | Manajemen Proyek — WBS | Rincian paket kerja | Dara Anggun Fransisca | Sudah dipush di branch `docs/dara`; belum masuk `main` | Struktur proyek |
| 1.4 | Manajemen Proyek — pembagian tugas dan koordinasi sprint | Pembagian dan catatan koordinasi | Dara Anggun Fransisca; tim | Belum dikerjakan / bukti belum tersedia | Kesepakatan tim |
| 2.1 | Survei dan Analisis Kebutuhan — wawancara pemilik | Catatan wawancara | Tim; pewawancara yang tercatat: Dara, Lutfiah, Raisa | Ringkasan tercantum pada PDF; bukti primer perlu dikonfirmasi | Ketersediaan/izin pemilik |
| 2.2 | Survei dan Analisis Kebutuhan — dokumentasi survei | Bukti dan ringkasan survei | Raisa Nurfaiza (fokus dokumentasi) | Dokumentasi awal tersedia di PDF; foto tidak disalin | Izin dan bukti sumber |
| 2.3 | Survei dan Analisis Kebutuhan — observasi tempat produksi/penyimpanan | Catatan observasi | Tim; PIC spesifik perlu disepakati | Belum ada catatan observasi rinci terverifikasi | Akses dan konfirmasi kunjungan |
| 2.4 | Survei dan Analisis Kebutuhan — analisis kebutuhan sistem | Daftar kebutuhan tervalidasi | Tim; Dara mengoordinasikan | Usulan awal tersedia; validasi belum tercatat | Wawancara dan klarifikasi |
| 3.1 | Desain Sistem — merancang alur aplikasi | Alur yang ditinjau pengguna | Dara Anggun Fransisca (fokus UI/UX) | Belum dikerjakan | Kebutuhan tervalidasi |
| 3.2 | Desain Sistem — menentukan daftar fitur | Spesifikasi fitur | Tim; Dara koordinasi | Rencana fitur tercatat; belum disetujui | Analisis kebutuhan |
| 3.3 | Desain Sistem — merancang UI | Rancangan antarmuka | Dara Anggun Fransisca | Belum dikerjakan | Kebutuhan dan alur |
| 3.4 | Desain Sistem — perhitungan Function Point | Estimasi FP yang ditinjau | Tim; PIC spesifik perlu disepakati | Angka awal PDF terdokumentasi; perlu validasi | Klasifikasi fitur dan pengampu |
| 3.5 | Desain Sistem — merancang database/struktur data | Model data | Lutfiah Naysilla Azzahra (fokus pengembangan; usulan PIC) | Belum dikerjakan | Kebutuhan, satuan, alur stok |
| 4.1 | Pengembangan Aplikasi — setup project | Kerangka proyek | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Stack dan platform diputuskan |
| 4.2 | Pengembangan Aplikasi — fitur login | Akses aplikasi | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Setup dan aturan akses |
| 4.3 | Pengembangan Aplikasi — fitur data bahan baku | Master bahan | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Model data tervalidasi |
| 4.4 | Pengembangan Aplikasi — fitur stok masuk/keluar | Transaksi stok | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Satuan dan alur transaksi |
| 4.5 | Pengembangan Aplikasi — riwayat dan pencarian stok | Tampilan riwayat/pencarian | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Transaksi tersimpan |
| 4.6 | Pengembangan Aplikasi — pengingat stok menipis | Pengingat in-app | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Ambang stok dikonfirmasi |
| 4.7 | Pengembangan Aplikasi — integrasi database | Penyimpanan terintegrasi | Lutfiah Naysilla Azzahra | Belum dikerjakan; di luar Sprint 1 | Stack dan struktur data |
| 4.8 | Pengembangan Aplikasi — testing | Bukti pemeriksaan aplikasi | Tim; PIC perlu disepakati | Belum dikerjakan; di luar Sprint 1 | Fitur tersedia dan kriteria disepakati |
| 5.1 | Version Control dan Dokumentasi — repository GitHub | Repo GitHub | Dara mengoordinasikan; tim berkontribusi | Selesai; repository GitHub private tersedia | Undangan collaborator untuk Lutfiah dan Raisa perlu diterima |
| 5.2 | Version Control dan Dokumentasi — commit dan push | Riwayat perubahan remote | Seluruh tim; setiap anggota pada branch masing-masing | Commit Dara `35dffcf` sudah dipush ke `docs/dara`; dokumen belum masuk `main` | Tinjau dan merge melalui Pull Request; anggota lain berkontribusi melalui branch masing-masing |
| 5.3 | Version Control dan Dokumentasi — dokumentasi teknis | Panduan/arsitektur yang relevan | Raisa Nurfaiza (fokus dokumentasi) | Dokumentasi perencanaan awal tersedia | Keputusan teknis dan implementasi |
| 5.4 | Version Control dan Dokumentasi — laporan setiap sprint | Laporan sprint | Raisa Nurfaiza | Tracker disiapkan; laporan siklus berikutnya belum ada | Hasil sprint dan format dosen |
| 6.1 | Sprint Review dan Evaluasi — presentasi hasil sprint | Materi dan presentasi | Tim; PIC perlu disepakati | Belum dikerjakan | Hasil sprint dan jadwal |
| 6.2 | Sprint Review dan Evaluasi — review dan feedback | Catatan umpan balik | Tim; evaluator/pemilik sesuai konteks | Belum dikerjakan | Sesi review |
| 6.3 | Sprint Review dan Evaluasi — perbaikan sistem | Daftar perubahan tindak lanjut | Tim; PIC per item ditetapkan kemudian | Belum dikerjakan | Feedback dan prioritas |
| 7.1 | Implementasi dan Finalisasi — deployment | Produk terpasang pada platform terpilih | Lutfiah (usulan berdasarkan fokus pengembangan) | Belum dikerjakan; platform belum dipilih | Produk dan hosting |
| 7.2 | Implementasi dan Finalisasi — uji coba dengan pemilik | Catatan uji coba pemilik | Tim bersama Nurika Eliza | Belum dikerjakan | Produk, izin, dan skenario |
| 7.3 | Implementasi dan Finalisasi — perbaikan akhir | Catatan perbaikan | Tim | Belum dikerjakan | Hasil uji coba/review |
| 7.4 | Implementasi dan Finalisasi — finalisasi produk | Produk dan dokumen akhir | Tim | Belum dikerjakan | Perbaikan dan kriteria akhir |
| 7.5 | Implementasi dan Finalisasi — persiapan Final Product Expo | Materi Expo | Tim; PIC perlu disepakati | Belum dikerjakan | Ketentuan/jadwal pengampu |

**Catatan status:** “Sudah dipush di branch `docs/dara`” berarti dokumen tersedia pada branch tersebut, belum digabung ke `main` dan belum menandakan persetujuan final dari pemilik atau dosen. Pemeriksaan repo `MPPL01022026/Kelompok-6.1` menunjukkan `main` masih berisi README awal dan branch Dara berisi tiga dokumen perencanaan. WBS PDF tidak menetapkan PIC per paket kerja; penetapan PIC di atas hanya menggunakan fokus peran yang tercantum atau ditandai sebagai usulan. Sumber: DigitalTwins_Daporbakes.pdf, hlm. 1–4; progres repository diperiksa 10 Oktober 2026.
