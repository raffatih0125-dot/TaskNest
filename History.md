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
