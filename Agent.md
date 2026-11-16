# Aturan Agent: TaskNest

- Sebelum bekerja, selalu baca Spec.md, Plan.md, dan History.md.
- Kerjakan hanya satu fase Plan.md per sesi. Jangan loncat fase.
- Teknologi: React (Vite) + JavaScript. Styling dengan CSS biasa.
- Database hanya lewat Supabase (@supabase/supabase-js) di src/supabaseClient.js.
- Kunci Supabase hanya dari .env (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY). Jangan hardcode.
- Jangan pernah membaca, mengubah, atau meng-commit file .env.
- Jangan menghapus atau menimpa file Agent.md, Spec.md, Plan.md, History.md kecuali untuk mengupdate isinya.
- Jangan menjalankan perintah penghapusan di luar folder src/ dan public/.
- Kode sederhana, komponen kecil di src/components/, komentar singkat dalam bahasa Indonesia.
- Semua teks yang tampil di UI memakai bahasa Indonesia.
- Setelah selesai: centang [x] langkah di Plan.md, tambah ringkasan sesi di History.md, lalu commit dengan pesan jelas.
- Jika ada yang tidak jelas, tanya dulu, jangan menebak.