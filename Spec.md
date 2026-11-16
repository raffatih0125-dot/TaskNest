# Spesifikasi: TaskNest

## Tujuan
Web sederhana untuk mencatat dan memantau tugas harian.

## Teknologi
- Frontend: React + Vite
- Database: Supabase (tabel `tasks`)
- Repository: GitHub (push otomatis setiap commit)

## Tabel `tasks`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key, otomatis |
| title | text | wajib |
| description | text | opsional |
| status | text | `todo`, `in_progress`, atau `done` (default `todo`) |
| priority | text | `low`, `medium`, atau `high` (default `medium`) |
| due_date | date | opsional |
| created_at | timestamptz | otomatis |

## Fitur
1. Menampilkan daftar tugas dari Supabase, urut dari terbaru
2. Tambah tugas (judul, deskripsi, prioritas, tenggat)
3. Ubah status tugas
4. Edit dan hapus tugas (hapus dengan konfirmasi)
5. Filter berdasarkan status
6. Penanda prioritas dan tugas yang lewat tenggat

## Tampilan
- Satu halaman, responsif (HP dan laptop)
- Header bernama TaskNest
- Status `done` tampil pudar atau dicoret
- Ada tampilan loading, pesan error, dan pesan "Belum ada tugas" saat kosong

## Di luar cakupan
Login/akun pengguna dan fitur kolaborasi.
