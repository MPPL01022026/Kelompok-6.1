# Risk Register


Skala kualitatif: probabilitas dan dampak Rendah/Sedang/Tinggi.

| ID | Risiko | Probabilitas | Dampak | Respons / mitigasi | Pemilik respons (usulan) | Pemicu / status |
|---|---|---|---|---|---|---|
| R1 | Tenggat mata kuliah berbenturan dengan jadwal sprint | Sedang | Tinggi | Cek kalender dan tenggat pada kickoff; prioritaskan artefak wajib dan sesuaikan urutan kerja | Dara | Diperiksa pada kickoff 26 Okt |
| R2 | Pemilik tidak tersedia pada sesi validasi | Sedang | Tinggi | Jadwalkan sesi lebih awal, tawarkan sesi daring, dan kumpulkan jawaban tertulis untuk pertanyaan inti | Dara | Sesi direncanakan 29 Okt |
| R3 | Satuan, ambang stok, resep, atau aturan koreksi belum jelas | Tinggi | Tinggi | Validasi per bahan; gunakan satuan yang dipakai pemilik; dokumentasikan aturan minimum dan koreksi transaksi | Dara + Lutfiah | Dibahas pada validasi 29 Okt |
| R4 | Benturan kuliah mengurangi kapasitas anggota | Sedang | Sedang | Batasi pekerjaan paralel, cek progres setiap Senin dan Kamis, pindahkan tugas dokumentasi bila ada keterlambatan | Dara | Pemantauan dua kali per minggu |
| R5 | Pilihan stack/database/hosting tidak sesuai kebutuhan atau batasan tugas | Sedang | Tinggi | Nilai opsi berdasar kemudahan, biaya gratis, dukungan Next.js, dan kebutuhan data; dokumentasikan keputusan teknis | Lutfiah | Keputusan pada 9 Nov |
| R6 | Biaya konektivitas atau transportasi melampaui rencana | Sedang | Sedang | Utamakan sesi daring, catat pengeluaran, dan gunakan overhead Rp120.000 sebelum menambah biaya | Raisa + Dara | Batas operasional Rp420.000 |
| R7 | Function Point awal tidak mewakili lingkup yang disepakati | Sedang | Sedang | Tinjau kategori dan bobot bersama tim; catat versi revisi serta kaitkan estimasi dengan WBS | Lutfiah + Raisa | Tinjauan pada 11 Nov |
| R8 | Hak akses repository menghambat review perubahan | Sedang | Sedang | Uji akses semua anggota di awal sprint; gunakan branch per tugas dan PR untuk konsolidasi | Dara | Pemeriksaan akses pada 26 Okt |
| R9 | Informasi/foto klien dibagikan tanpa izin | Rendah | Tinggi | Batasi artefak ke data minimum; simpan repo private dan minta persetujuan sebelum memakai foto/nama di materi publik | Raisa | Pemeriksaan sebelum presentasi |

## Keputusan kerja Sprint 2

- Aplikasi direncanakan sebagai web responsif berbasis Next.js agar dapat digunakan melalui HP dan sesuai tech stack yang telah dipilih pada README.
- Rancangan data memakai bahan baku, pemasok, transaksi stok, dan pengguna sebagai entitas awal.
- Satuan bahan dicatat per bahan; jumlah stok berubah melalui transaksi masuk/keluar dan dapat dikoreksi melalui transaksi penyesuaian beralasan.
- Pengingat minimum menggunakan ambang yang dapat diatur untuk tiap bahan; nilai awal ditetapkan bersama pemilik saat validasi.
- Rekomendasi belanja ditampilkan sebagai estimasi sederhana dari stok tercatat dan kebutuhan produksi mingguan, dengan dasar perhitungan terlihat.
- Biaya operasional direncanakan Rp420.000, dengan Rp900.000 shadow cost tenaga kerja dan Rp120.000 overhead.
- Jawaban pemilik dan dosen dicatat pada [Open Questions](../OPEN_QUESTIONS.md) sebagai konfirmasi bisnis/tugas dan tidak mengubah paket jadwal tanpa revisi terukur.

