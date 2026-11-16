# TaskNest

TaskNest adalah aplikasi web sederhana untuk mencatat dan memantau tugas harian. Data tugas disimpan di Supabase.

## Fitur

- Melihat daftar tugas, diurutkan dari yang terbaru.
- Menambah, mengedit, mengubah status, dan menghapus tugas.
- Memfilter tugas berdasarkan status.
- Melihat prioritas dengan badge warna dan penanda tenggat yang terlewat.
- Menampilkan status loading dan pesan error saat memuat atau menyimpan data.
- Tampilan responsif untuk ponsel dan laptop.

## Teknologi

- React
- Vite
- Supabase (`@supabase/supabase-js`)
- JavaScript dan CSS

## Persiapan

Pastikan Node.js versi LTS dan npm sudah terpasang.

1. Pasang dependensi:

   ```sh
   npm install
   ```

2. Buat file `.env` di folder utama proyek dengan variabel berikut:

   ```dotenv
   VITE_SUPABASE_URL=isi_url_proyek_supabase
   VITE_SUPABASE_ANON_KEY=isi_anon_key_supabase
   ```

   Ganti teks contoh dengan URL proyek dan anon key milik proyek Supabase Anda. Jangan gunakan service role key. File `.env` diabaikan Git; jangan commit file tersebut.

## Menjalankan aplikasi

Jalankan server pengembangan:

```sh
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal. Untuk memeriksa build produksi dan lint:

```sh
npm run build
npm run lint
```

## Struktur folder

```text
TaskNest/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── supabaseClient.js
├── .env                 # lokal, tidak di-commit
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```
