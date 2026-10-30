<div align="center">

# Bag-Dapoorbakes

### Digital Twin Persediaan Bahan Baku Daporbakes

[![Tentang](https://img.shields.io/badge/TENTANG-PROYEK-7C2D12?style=for-the-badge)](#-tentang-proyek)
[![Fitur](https://img.shields.io/badge/RENCANA-FITUR-C2410C?style=for-the-badge)](#-rencana-fitur)
[![Stack](https://img.shields.io/badge/TECH-STACK-2563EB?style=for-the-badge)](#%EF%B8%8F-tech-stack)
[![Tim](https://img.shields.io/badge/TIM-PENGEMBANG-EA580C?style=for-the-badge)](#-tim-pengembang)
[![Dokumen](https://img.shields.io/badge/DOKUMEN-PROYEK-B45309?style=for-the-badge)](#-dokumen-proyek)
[![Git](https://img.shields.io/badge/CARA-KONTRIBUSI-374151?style=for-the-badge&logo=git&logoColor=white)](#-alur-kontribusi-github)

<br>

![Status](https://img.shields.io/badge/Status-Perencanaan%20Sprint%201-EA580C?style=flat-square&logo=gitbook&logoColor=white)
![Next.js](https://img.shields.io/badge/Framework-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![GitHub](https://img.shields.io/badge/Collaboration-GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Mata Kuliah](https://img.shields.io/badge/MPPL-Manajemen%20Proyek%20Perangkat%20Lunak-7C2D12?style=flat-square)

**Merancang aplikasi digital twin untuk membantu UMKM Daporbakes mencatat, memantau, dan merencanakan persediaan bahan baku brownies.**

</div>

---

<a id="tentang-proyek"></a>

## Tentang Proyek

> **MISI:** Menyediakan gambaran persediaan bahan baku secara digital, mencatat pergerakan stok, dan membantu pemilik mempertimbangkan kebutuhan pembelian.
>
> **STUDI KASUS:** UMKM brownies Daporbakes, Gampong Blang, Kota Langsa.
>
> **TAHAP SAAT INI:** Sprint 1 - dokumentasi dan perencanaan. Aplikasi belum dibangun.

Daporbakes memproduksi brownies kukus dan panggang dalam beberapa varian. Berdasarkan dokumen survei proyek, produksi rata-rata sekitar 6-7 loyang per minggu; pemesanan dilakukan secara online dan pre-order. Pemilik mengelola produksi serta persediaan sendiri, sementara pencatatan stok masih menggunakan buku tulis.

| Kondisi Saat Ini | Kebutuhan | Rencana Solusi Bag-Dapoorbakes |
|---|---|---|
| Catatan persediaan masih manual | Melihat jumlah bahan yang tercatat dengan mudah | Tampilan stok bahan baku |
| Perkiraan belanja bahan sulit, terutama saat pesanan akhir pekan meningkat | Riwayat stok masuk dan keluar yang mudah ditinjau | Pencatatan transaksi dan riwayat stok |
| Pembelian berlebih berisiko membuat bahan terlalu lama disimpan | Mengetahui bahan yang mendekati batas minimum | Pengingat stok minimum di dalam aplikasi |
| Pemilik ingin terbantu merencanakan pembelian | Ringkasan kebutuhan berdasarkan pola produksi | Rekomendasi pembelian mingguan sebagai rencana fitur |

<sub>Fitur di atas masih berupa rencana dan perlu divalidasi bersama pemilik. Proyek tidak mengasumsikan sensor, sinkronisasi otomatis real-time, atau AI.</sub>

---

<a id="rencana-fitur"></a>

## Rencana Fitur

- Login atau akses pengguna.
- Pengelolaan data bahan baku dan pemasok.
- Pencatatan stok masuk dan stok keluar.
- Tampilan jumlah stok terkini.
- Riwayat transaksi dan pencarian stok.
- Pengingat stok menipis di dalam aplikasi.
- Rekomendasi pembelian berdasarkan pola produksi mingguan.
- Penggunaan yang nyaman melalui HP.

Rincian fungsi, satuan bahan, batas minimum, dan cara menghitung rekomendasi akan ditetapkan setelah kebutuhan diklarifikasi dan disepakati.

---

<a id="tech-stack"></a>

## Tech Stack

| Bagian | Teknologi | Status |
|---|---|---|
| Framework aplikasi | [Next.js](https://nextjs.org/) | Dipilih untuk pengembangan aplikasi |
| Version control | Git dan GitHub | Digunakan untuk kolaborasi tim |
| Database | Belum ditentukan | Akan dipilih setelah kebutuhan dan rancangan data dibahas |
| Bahasa, UI, dan deployment | Belum ditentukan | Diputuskan sebelum implementasi |

> Versi Next.js dan dependensi belum dicantumkan karena setup aplikasi belum dimulai. README ini akan diperbarui ketika konfigurasi proyek sudah tersedia.

---

<a id="tim-pengembang"></a>

## Tim Pengembang

| Anggota | Fokus tanggung jawab |
|---|---|
| **Dara Anggun Fransisca** | Project Manager dan UI/UX |
| **Lutfiah Naysilla Azzahra** | Pengembangan aplikasi |
| **Raisa Nurfaiza** | Dokumentasi, laporan, dan bukti survei |

Pembagian ini mengikuti fokus peran pada dokumen perencanaan. Pekerjaan lintas fungsi dan PIC khusus untuk aktivitas tertentu tetap dikoordinasikan bersama tim.

---

<a id="dokumen-proyek"></a>

## Dokumen Proyek

| Dokumen | Lokasi | Isi |
|---|---|---|
| Project Charter | [docs/sprint-01/PROJECT_CHARTER.md](docs/sprint-01/PROJECT_CHARTER.md) | Latar belakang, tujuan, ruang lingkup, risiko, dan deliverable |
| Stakeholder Register | [docs/sprint-01/STAKEHOLDER_REGISTER.md](docs/sprint-01/STAKEHOLDER_REGISTER.md) | Pihak terkait, kepentingan, pengaruh, dan usulan komunikasi |
| Work Breakdown Structure | [docs/sprint-01/WORK_BREAKDOWN_STRUCTURE.md](docs/sprint-01/WORK_BREAKDOWN_STRUCTURE.md) | Aktivitas, deliverable, PIC, status bukti, dan dependensi |
| Sprint 2 — Project Schedule / Gantt Chart | [docs/sprint-02/PROJECT_SCHEDULE_GANTT.md](docs/sprint-02/PROJECT_SCHEDULE_GANTT.md) | Aktivitas, durasi, tanggal, dependensi, Gantt, milestone |
| Sprint 2 — Resource & Responsibility Plan | [docs/sprint-02/RESOURCE_RESPONSIBILITY_PLAN.md](docs/sprint-02/RESOURCE_RESPONSIBILITY_PLAN.md) | Anggota, peran, tanggung jawab, dan kebutuhan sumber daya |
| Sprint 2 — Effort Estimation | [docs/sprint-02/EFFORT_ESTIMATION_MANDAY.md](docs/sprint-02/EFFORT_ESTIMATION_MANDAY.md) | Estimasi manday per aktivitas dan anggota |
| Sprint 2 — Project Cost Estimation | [docs/sprint-02/PROJECT_COST_ESTIMATION.md](docs/sprint-02/PROJECT_COST_ESTIMATION.md) | Biaya tenaga kerja, layanan, konektivitas, pertemuan, dan overhead |
| Sprint 2 — Risk Register | [docs/sprint-02/RISK_REGISTER.md](docs/sprint-02/RISK_REGISTER.md) | Risiko, probabilitas, dampak, mitigasi, pemilik respons |

Dokumen-dokumen ini disusun untuk perencanaan. Persetujuan pemilik dan dosen pengampu belum dikonfirmasi dalam sumber proyek.

---

<a id="tahapan-proyek"></a>

## Tahapan Proyek

- [x] **Sprint 1 - Inisiasi dan perencanaan:** menyusun Project Charter, Stakeholder Register, dan WBS.
- [ ] **Survei dan analisis kebutuhan:** melengkapi bukti survei serta memvalidasi kebutuhan bersama pemilik.
- [ ] **Desain sistem:** merancang alur aplikasi, fitur, UI, dan struktur data.
- [ ] **Pengembangan:** membangun aplikasi menggunakan Next.js setelah kebutuhan dan rancangan disepakati.
- [ ] **Review dan pengujian:** meninjau hasil bersama tim, pemilik, dan evaluator sesuai kebutuhan.
- [ ] **Finalisasi:** menyiapkan produk dan dokumen akhir mengikuti ketentuan mata kuliah.

Status daftar ini merupakan gambaran tingkat tinggi. WBS menjadi rujukan untuk rincian aktivitas dan status pekerjaan.

---

<a id="alur-kontribusi-github"></a>

## Alur Kontribusi GitHub

Setiap anggota mengerjakan tugas pada branch masing-masing agar kontribusi dan riwayat commit tetap jelas.

<details>
<summary><b> Langkah kerja dengan branch dan Pull Request</b></summary>

<br>

1. **Perbarui branch utama terlebih dahulu:**
   bash
   git switch main
   git pull origin main

2. **Buat branch untuk pekerjaanmu:**
   bash
   git switch -c docs/nama-tugas

   Sesuaikan nama branch dengan jenis tugas dan nama/fitur, misalnya docs/raisa atau feat/stock-entry.
3. **Periksa perubahan, lalu stage file yang memang dikerjakan:**
   bash
   git status
   git add path/ke/file

4. **Commit dan push branch:**
   bash
   git commit -m "docs: jelaskan perubahan"
   git push -u origin docs/nama-tugas

5. **Buat Pull Request menuju main** untuk ditinjau tim sebelum perubahan digabungkan.

</details>

<details>
<summary><b> Contekan perintah Git</b></summary>

<br>

| Perintah | Fungsi |
|---|---|
| git status | Melihat branch dan perubahan lokal |
| git switch -c nama-branch | Membuat dan berpindah ke branch baru |
| git add path/ke/file | Menambahkan file tertentu ke staging |
| git commit -m "pesan" | Menyimpan perubahan ke riwayat lokal |
| git push -u origin nama-branch | Mengirim branch ke GitHub |
| git pull origin main | Mengambil pembaruan dari branch utama |

</details>

---

## Menjalankan Aplikasi

Aplikasi belum memiliki kode implementasi maupun konfigurasi dependensi. Setelah proyek Next.js dibuat, bagian ini akan dilengkapi dengan prasyarat, langkah instalasi, konfigurasi environment, dan perintah menjalankan aplikasi.

---

<div align="center">

**BAG-DAPOORBAKES**
Proyek Manajemen Proyek Perangkat Lunak · 2026

</div>
