# Estimasi Function Point

Tabel berikut mempertahankan angka yang tercantum dalam DigitalTwins_Daporbakes.pdf, hlm. 1–2. Ini adalah perhitungan dari dokumen awal, bukan hasil audit formal.

| Jenis | Jumlah | Bobot | Hasil |
|---|---:|---:|---:|
| External Inputs (EI) | 5 | 4 | 20 |
| External Outputs (EO) | 3 | 5 | 15 |
| External Inquiries (EQ) | 2 | 4 | 8 |
| Internal Logical Files (ILF) | 3 | 10 | 30 |
| External Interface Files (EIF) | 1 | 7 | 7 |
| **Count Total / UFP** |  |  | **80** |

Dokumen awal mencatat `ΣFi = 14 × 3 = 42`, lalu:

```text
FP = 80 × (0,65 + 0,01 × 42)
   = 80 × 1,07
   = 85,6 FP
```

## Catatan validasi

- Pertahankan hasil **80 UFP, ΣFi 42, FP 85,6** sebagai angka sumber.
- Klasifikasi dan jumlah EI, EO, EQ, ILF, serta bobot perlu ditinjau terhadap definisi/metode yang digunakan mata kuliah.
- Penjelasan EIF pada PDF mengaitkannya dengan notifikasi stok melalui in-app. Klasifikasi ini perlu ditinjau karena notifikasi internal belum tentu merupakan external interface file.
- Dasar penetapan 14 faktor dan nilai 3 untuk masing-masing faktor belum diperinci dalam sumber.
- Estimasi tidak otomatis menyatakan ukuran implementasi atau durasi yang terverifikasi.

Jangan mengoreksi nilai secara diam-diam; catat revisi hanya setelah tim/pengampu memvalidasi. Lihat [pertanyaan terbuka](../OPEN_QUESTIONS.md).
