# Rencana Pengerjaan: TaskNest

Aturan: kerjakan **satu fase per sesi**, centang `[x]` kalau sudah selesai, lalu update `history.md` dan commit.

## Fase 0: Persiapan (manual, tanpa Copilot)
- [ ] 0.1 Install Git, Node.js (LTS), dan VS Code + ekstensi GitHub Copilot & Copilot Chat
- [ ] 0.2 Clone repo https://github.com/raffatih0125-dot/TaskNest.git
- [ ] 0.3 Buat project Supabase bernama TaskNest
- [ ] 0.4 Jalankan SQL di Supabase: buat tabel `tasks` + isi data awal
- [ ] 0.5 Catat Project URL dan anon public key
- [ ] 0.6 Buat Agent.md, spec.md, plan.md, history.md di root
- [ ] 0.7 Atur auto-push di settings.json VS Code

**Selesai kalau:** tabel `tasks` berisi 3 data awal dan 4 file panduan sudah ada.

## Fase 1: Setup project React
- [x] 1.1 Buat project Vite + React di root folder
- [x] 1.2 Install `@supabase/supabase-js`
- [x] 1.3 Buat file `.env` (VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY)
- [x] 1.4 Pastikan `.env` ada di `.gitignore`
- [x] 1.5 Buat `src/supabaseClient.js`
- [x] 1.6 Bersihkan template bawaan Vite (logo, counter, CSS lama)

**Selesai kalau:** `npm run dev` jalan tanpa error dan halaman kosong tampil.

## Fase 2: Menampilkan daftar tugas (Read)
- [x] 2.1 Buat komponen `TaskList` dan `TaskItem`
- [x] 2.2 Ambil data dari tabel `tasks` (urut dari terbaru)
- [x] 2.3 Tampilkan judul, deskripsi, status, prioritas, tenggat
- [x] 2.4 Tambah tampilan loading dan pesan error
- [x] 2.5 Tampilkan pesan "Belum ada tugas" kalau data kosong

**Selesai kalau:** 3 data awal dari Supabase tampil di browser.

## Fase 3: Tambah tugas (Create)
- [x] 3.1 Buat komponen `TaskForm` (judul, deskripsi, prioritas, tenggat)
- [x] 3.2 Validasi: judul wajib diisi
- [x] 3.3 Simpan ke Supabase dengan insert
- [x] 3.4 Daftar otomatis diperbarui setelah tugas ditambah
- [x] 3.5 Kosongkan form setelah berhasil

**Selesai kalau:** tugas baru muncul di daftar dan di Table Editor Supabase.

## Fase 4: Ubah status, edit, hapus (Update & Delete)
- [x] 4.1 Tombol/dropdown ubah status (todo, in_progress, done)
- [x] 4.2 Fitur edit tugas (judul, deskripsi, prioritas, tenggat)
- [x] 4.3 Tombol hapus dengan konfirmasi
- [x] 4.4 Tugas berstatus `done` diberi tampilan berbeda (coret/pudar)

**Selesai kalau:** perubahan tersimpan dan tetap ada setelah halaman di-refresh.

## Fase 5: Filter dan tampilan
- [x] 5.1 Filter berdasarkan status (Semua, Todo, Dikerjakan, Selesai)
- [x] 5.2 Badge warna untuk prioritas (low, medium, high)
- [x] 5.3 Tandai tugas yang lewat tenggat
- [x] 5.4 Rapikan layout agar responsif (HP dan laptop)
- [x] 5.5 Beri header dengan nama dan logo teks TaskNest

**Selesai kalau:** tampilan rapi di layar kecil maupun besar.

## Fase 6: Finalisasi
- [ ] 6.1 Tes semua fitur dari awal sampai akhir
- [ ] 6.2 Perbaiki bug yang ditemukan
- [ ] 6.3 Tulis `README.md` (deskripsi, cara install, cara isi .env, cara jalan)
- [ ] 6.4 Pastikan `.env` tidak ikut ter-commit
- [ ] 6.5 Update `history.md` untuk terakhir kali
- [ ] 6.6 Commit dan push final
- [ ] 6.7 Ambil screenshot: tabel Supabase, aplikasi berjalan, riwayat commit GitHub

**Selesai kalau:** repo GitHub lengkap dan siap dikumpulkan.

## Catatan
- Satu fase = satu sesi Copilot. Jangan loncat fase.
- Setiap fase selesai: tes di browser, commit, push, update `history.md`.
- Kalau ada error, catat di `history.md` bagian "Masalah".