# Estimasi Function Point

Kami memakai perhitungan pada DigitalTwins_Daporbakes.pdf, hlm. 1–2 sebagai baseline ukuran fungsional. Kami mempertahankan nilai ini untuk konsistensi estimasi proyek.

| Jenis | Jumlah | Bobot | Hasil |
|---|---:|---:|---:|
| External Inputs (EI) | 5 | 4 | 20 |
| External Outputs (EO) | 3 | 5 | 15 |
| External Inquiries (EQ) | 2 | 4 | 8 |
| Internal Logical Files (ILF) | 3 | 10 | 30 |
| External Interface Files (EIF) | 1 | 7 | 7 |
| **Count Total / UFP** | | | **80** |

Kami memakai 14 faktor dengan nilai 3, sehingga ΣFi = 42.

    FP = 80 × (0,65 + 0,01 × 42)
       = 80 × 1,07
       = 85,6 FP

## Cara kami memakai hasil

Kami memperlakukan 85,6 FP sebagai estimasi ukuran awal, bukan durasi implementasi. Untuk baseline, kami mengelompokkan notifikasi stok sebagai EIF sesuai tabel sumber dan menjaga klasifikasi tetap sama agar estimasi lintas dokumen konsisten. Kami memakai 85,6 FP bersama WBS dan effort manday untuk perencanaan, bukan sebagai ukuran produktivitas aktual.

Sumber: DigitalTwins_Daporbakes.pdf, hlm. 1–2; [Estimasi Manday](../sprint-02/EFFORT_ESTIMATION_MANDAY.md).
