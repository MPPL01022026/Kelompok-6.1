# Tinjauan UI Sprint 3

## Ruang lingkup

Tinjauan kode berfokus pada navigasi ponsel, penggunaan keyboard, fokus yang terlihat, ukuran target sentuh, dan ruang aman layar. Perubahan ini melengkapi MVP Lutfiah tanpa mengubah alur atau perhitungan inventaris.

## Temuan dan keputusan

| Temuan | Perbaikan |
|---|---|
| Drawer navigasi yang bergeser ke luar layar masih dapat menerima fokus keyboard ketika tertutup. | Sembunyikan drawer tertutup pada breakpoint ponsel agar tautannya keluar dari urutan fokus dan aksesibilitas. |
| Menu ponsel tidak melaporkan status terbuka ke teknologi bantu, dan fokus tidak dipindahkan saat menu dibuka atau ditutup dengan Escape. | Tambahkan `aria-expanded` dan `aria-controls`; pindahkan fokus ke tautan pertama saat dibuka dan kembalikan ke tombol pemicu ketika ditutup. |
| Indikator fokus sebelumnya kurang kontras di atas permukaan terang. | Gunakan outline fokus yang lebih gelap dengan offset yang jelas, termasuk untuk tautan. |
| Beberapa tombol baris terlalu kecil untuk disentuh dengan nyaman. | Tingkatkan tinggi dan lebar minimum tombol tindakan serta tinggi tombol navigasi dan aksi pada ponsel. |
| Dialog dan notifikasi dekat tepi layar pada perangkat dengan area aman. | Terapkan padding berbasis safe area untuk dialog dan posisi notifikasi. |

## Verifikasi yang dilakukan

- `git diff --check` — lulus.
- `npm run lint` — lulus.
- `npm run build` — lulus.

## Pemeriksaan lanjutan

Uji drawer dengan keyboard pada lebar ponsel: buka menu, gunakan Escape, pilih tautan, lalu pastikan fokus kembali ke tombol menu. Periksa juga target sentuh dan dialog pada perangkat ponsel nyata; pemeriksaan perangkat tersebut belum dilakukan dalam tinjauan ini.
