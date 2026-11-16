## Sesi 1 - 16/11/2026
- Fase 0 selesai: Git, Node.js, repo GitHub, Supabase + data awal, 4 file panduan, auto push.
- Langkah berikutnya: Fase 1 (setup Vite + React).

## Sesi 2 - 16/11/2026
- Fase 1 selesai: setup Vite + React, instalasi Supabase JS, konfigurasi `src/supabaseClient.js`, dan pembersihan template bawaan.
- File `.env` dibuat dan diabaikan Git; URL dan anon key masih kosong, jadi isi kredensial sebelum memakai koneksi Supabase.
- `npm run build` dan `npm run dev` berhasil.
- Langkah berikutnya: Fase 2 (menampilkan daftar tugas).

## Sesi 3 - 16/11/2026
- Fase 2 selesai: `TaskList` mengambil data tabel `tasks` dari yang terbaru; `TaskItem` menampilkan judul, deskripsi, status, prioritas, dan tenggat.
- Ditambahkan tampilan loading, error, serta pesan "Belum ada tugas"; URL Supabase dinormalisasi di klien agar query berhasil.
- Verifikasi: build dan lint berhasil; browser menampilkan 3 tugas dari Supabase.
- Langkah berikutnya: Fase 3 (tambah tugas).

## Sesi 4 - 16/11/2026
- Dikerjakan: `TaskForm` dengan validasi judul, insert Supabase, pemuatan ulang daftar, dan reset form setelah berhasil.
- Masalah: lint memperingatkan pembaruan state di effect; pola muat awal dipisahkan dan lint kembali bersih.
- Verifikasi: build dan lint berhasil; validasi judul kosong menampilkan pesan di browser tanpa membuat data uji.
- Langkah berikutnya: Fase 4 (ubah status, edit, hapus).

## Sesi 5 - 16/11/2026
- Dikerjakan: ubah status dan edit melalui Supabase, hapus dengan konfirmasi, serta gaya pudar/coret untuk tugas selesai.
- Masalah: simulasi API di browser macet saat PATCH; halaman dimuat ulang dan data asli tetap utuh.
- Verifikasi: build dan lint berhasil; form edit dapat dibuka/dibatalkan dan konfirmasi hapus dapat ditolak.
- Langkah berikutnya: Fase 5 (filter dan tampilan).

## Sesi 6 - 16/11/2026
- Dikerjakan: filter status, badge prioritas, penanda tenggat lewat, kartu responsif, dan header TaskNest.
- Masalah: build awal menemukan kurung kurawal CSS berlebih; diperbaiki sebelum verifikasi akhir.
- Verifikasi: build dan lint berhasil; filter, tampilan mobile, penanda overdue, dan gaya tugas selesai diuji di browser.
- Langkah berikutnya: Fase 6 (finalisasi).
