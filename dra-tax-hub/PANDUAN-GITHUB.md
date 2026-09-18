# Panduan: GitHub + Netlify + berita otomatis

Setelah langkah-langkah ini selesai, situsmu punya dua hal baru:

1. **Umpan berita otomatis** — tiap 6 jam, GitHub mengambil judul terbaru dari belasan sumber
   dan menyimpannya ke `assets/data/feed.json`, lalu Netlify menerbitkan ulang situs sendiri.
2. **Perbarui tanpa seret-lepas** — mengubah satu file di GitHub sudah cukup; situs ikut berubah
   satu menit kemudian.

Perkiraan waktu: 20–30 menit, sekali saja.

---

## 1. Siapkan akun dan repositori

1. Buat akun di [github.com](https://github.com) kalau belum punya.
2. Klik **+** di pojok kanan atas → **New repository**.
3. Isi:
   - **Repository name**: `dra-tax-hub`
   - **Public** atau **Private** — dua-duanya bisa. Public membuat menit GitHub Actions tidak
     terbatas; private memakai kuota gratis 2.000 menit/bulan, sementara pekerjaan kita cuma
     sekitar 60 menit/bulan. Kalau materinya tidak rahasia, pilih Public.
   - **Jangan** centang "Add a README file" — foldermu sudah punya.
4. Klik **Create repository**.

## 2. Unggah isi folder situs

**Cara paling mudah (lewat browser, tanpa memasang apa pun):**

1. Di halaman repo yang baru dibuat, klik **uploading an existing file**.
2. Seret **seluruh isi** folder `dra-tax-hub` ke sana — file dan foldernya, bukan folder induknya.
3. Tulis pesan commit, misalnya `Situs awal`, lalu **Commit changes**.

> **Penting:** folder `.github` sering tidak ikut terseret karena namanya diawali titik
> dan disembunyikan sistem. Kalau setelah unggah tidak ada folder `.github` di repo,
> buat manual: klik **Add file → Create new file**, tulis nama berkas
> `.github/workflows/berita.yml`, lalu tempelkan isi file itu dari foldermu.
> Tanpa file ini, berita otomatis tidak akan pernah jalan.

**Cara lewat terminal** (kalau kamu sudah terbiasa dengan git):

```bash
cd dra-tax-hub
git init
git add .
git commit -m "Situs awal"
git branch -M main
git remote add origin https://github.com/NAMA-AKUNMU/dra-tax-hub.git
git push -u origin main
```

## 3. Beri izin tulis kepada GitHub Actions

Langkah ini sering terlewat dan membuat berita tidak pernah tersimpan.

1. Di repo: **Settings** → **Actions** → **General**.
2. Gulir ke **Workflow permissions**.
3. Pilih **Read and write permissions** → **Save**.

## 4. Jalankan sekali secara manual

1. Buka tab **Actions** di repo.
2. Kalau muncul tombol hijau "I understand my workflows, go ahead and enable them", klik.
3. Pilih **Perbarui umpan berita** di sisi kiri → **Run workflow** → **Run workflow**.
4. Tunggu sekitar satu menit, lalu buka log langkah **Ambil berita**.

Di log itu kamu akan melihat daftar seperti ini:

```
  ✓ Google News · Coretax               12 item dipakai dari 20
  ✗ Ortax                               GAGAL: HTTP 404
```

Sumber bertanda ✗ berarti situsnya tidak menyediakan RSS di alamat itu. Buka
`scripts/fetch-news.mjs`, hapus barisnya dari daftar `SOURCES`, commit. Sumber yang ✓ biarkan.
Daftar sumber langsung (DDTCNews, Pajakku, MUC, Ortax, JDIH) memang belum bisa dipastikan
sampai kamu menjalankan ini pertama kali — umpan Google News adalah jaring pengamannya,
dan itu yang menarik dari banyak media sekaligus.

## 5. Hubungkan ke Netlify

1. Masuk ke [app.netlify.com](https://app.netlify.com).
2. **Add new site** → **Import an existing project** → **GitHub** → pilih repo `dra-tax-hub`.
3. Isian build:
   - **Build command**: kosongkan
   - **Publish directory**: `.` (satu titik)
4. **Deploy site**. Ganti nama situs di **Site configuration → Change site name**.

Mulai sekarang, setiap commit ke `main` — termasuk commit otomatis dari GitHub Actions —
menerbitkan ulang situs dengan sendirinya.

> Kalau sebelumnya kamu sudah punya situs Netlify hasil seret-lepas, buat situs baru dari repo ini
> lalu hapus yang lama, supaya tidak bingung mana yang hidup.

---

## Setelah semuanya jalan

### Menambah berita

1. Buka halaman **Tulis Berita** di situsmu, isi formulirnya, klik **Unduh berita.js**.
2. Di GitHub, buka `assets/js/berita.js` → ikon pensil (**Edit this file**) → hapus semua isinya →
   tempel isi file yang baru diunduh → **Commit changes**.
3. Satu menit kemudian situs sudah terbarui. Tidak perlu menyentuh Netlify sama sekali.

Alternatif lebih cepat: di halaman berita, kanal **Umpan otomatis**, klik
**Jadikan bahan debat** pada judul yang menarik — judul dan sumbernya langsung terisi di editor.

### Mengubah jadwal pengambilan

Buka `.github/workflows/berita.yml`, baris `cron: "0 */6 * * *"`. Waktunya UTC:

| Yang diinginkan | Tulis |
|---|---|
| Tiap 6 jam (sekarang) | `0 */6 * * *` |
| Sekali sehari, 07.00 WIB | `0 0 * * *` |
| Dua kali sehari, 07.00 & 19.00 WIB | `0 0,12 * * *` |

### Menambah atau mengganti sumber

Buka `scripts/fetch-news.mjs`, bagian `SOURCES`. Untuk menambah pencarian Google News baru,
cukup tiru barisnya:

```js
{ name: "Google News · Cukai", url: gnews("cukai rokok OR \"cukai plastik\" when:30d"), sub: null },
```

`sub` diisi angka subtema lomba (1–4) kalau umpan itu khusus untuk satu subtema, atau `null`.

### Menjalankan di komputer sendiri

```bash
node scripts/fetch-news.mjs
```

Butuh Node 20 ke atas. Tidak ada paket npm yang perlu dipasang.

---

## Hal-hal yang perlu diketahui

- **Jadwal GitHub bisa telat.** Cron di GitHub Actions sering meleset 5–30 menit saat sedang
  ramai. Untuk berita pajak, ini tidak masalah.
- **Repo yang menganggur 60 hari membuat cron dinonaktifkan.** GitHub akan mengirim surel
  peringatan; cukup klik **Enable workflow** di tab Actions.
- **Yang disimpan hanya judul, tautan, nama penerbit, dan cuplikan pendek dari umpan itu sendiri.**
  Isi artikel tidak disalin — pembaca diarahkan ke situs aslinya. Tetap begitu kalau kamu
  menambah sumber baru: mengambil judul dan menautkan itu wajar, menyalin isi artikel tidak.
- **Tulis ringkasan dan bahan debat dengan kalimatmu sendiri.** Selain soal etika, juri menilai
  pemahaman — dan kalimat hasil salin-tempel selalu terdengar berbeda dari penjelasanmu sendiri.
- **Cara lama tetap bisa.** Seret-lepas folder ke Netlify masih berfungsi; bedanya umpan otomatis
  akan kosong karena tidak ada yang mengisinya.
