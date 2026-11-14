# Tinjauan UI Sprint 3

Kami meninjau navigasi ponsel, penggunaan keyboard, fokus yang terlihat, ukuran target sentuh, dan ruang aman layar. Kami menyelesaikan perbaikan berikut sebelum penutupan Sprint 3.

## Temuan dan perbaikan

| Temuan | Perbaikan yang kami terapkan |
|---|---|
| Drawer tertutup masih dapat menerima fokus keyboard | Kami menyembunyikan drawer tertutup pada breakpoint ponsel agar tautannya keluar dari urutan fokus. |
| Status buka/tutup menu tidak diumumkan dan fokus tidak dipulihkan | Kami menambahkan aria-expanded dan aria-controls; saat menu dibuka fokus berpindah ke tautan pertama, dan saat ditutup dengan Escape kembali ke tombol pemicu. |
| Indikator fokus kurang kontras pada permukaan terang | Kami memperkuat outline dan offset fokus untuk kontrol serta tautan. |
| Tombol tindakan baris terlalu kecil untuk disentuh | Kami menambah ukuran minimum tombol tindakan serta tombol navigasi dan aksi di ponsel. |
| Dialog dan notifikasi terlalu dekat dengan tepi layar | Kami menerapkan padding safe area pada dialog dan posisi notifikasi. |

## Hasil pemeriksaan

Kami menjalankan lint dan build produksi pada 30 Oktober 2026; keduanya lulus. Kami juga menyelesaikan checklist manual pada Windows 11 dengan Chrome desktop dan emulasi viewport 320 px, 390 px, tablet, dan desktop. Kami memeriksa navigasi keyboard, Escape, fokus, dialog, target sentuh, keadaan kosong, validasi, dan ekspor CSV. Semua skenario lulus.

Kami memakai emulasi viewport sebagai kriteria penerimaan responsif Sprint 3 dan mencatat hasil terperinci di [Checklist QA](QA_CHECKLIST.md).
