# DRA Tax Hub — Pusat Materi Pajak

Situs statis: materi perpajakan Indonesia, bank soal, kuis, mode ujian, kalkulator,
kamus aturan, dan portal berita. Tanpa proses build, tanpa dependensi — cukup HTML, CSS, dan JS biasa.

## Dua cara memperbarui situs

| | Seret & lepas | GitHub + Netlify |
|---|---|---|
| Menerbitkan | seret folder ke Netlify tiap kali berubah | commit ke GitHub, terbit sendiri |
| Berita otomatis | tidak jalan | tiap 6 jam lewat GitHub Actions |
| Persiapan | tidak ada | sekali, 20–30 menit |

Langkah pindah ke GitHub ada di **PANDUAN-GITHUB.md**. Cara seret-lepas tetap berfungsi kapan pun.

## Deploy ke Netlify

**Drag & drop:**

1. Buka https://app.netlify.com/drop
2. Seret seluruh folder ini (atau file zip-nya) ke halaman tersebut.
3. Ganti nama situs di **Site configuration → Change site name**, misalnya `dra-tax-hub`.

**Memperbarui situs yang sudah ada:** buka situsmu di Netlify → tab **Deploys** → seret folder
yang sudah diperbarui ke area "Drag and drop your site output folder here". Alamatnya tetap sama.

---

## Menambah berita baru

Ini alurnya, tidak perlu menyentuh kode:

1. Buka halaman **Berita → Tulis berita baru** (`tulis-berita.html`) di situsmu.
2. Isi judul, tanggal, tag, ringkasan, dan isi artikel. Pratinjau di sebelah kanan berubah otomatis.
   Format isi: `## Subjudul`, `- poin`, `> kutipan`, `**tebal**`, `*miring*`, `[teks](https://…)`,
   baris kosong memisahkan paragraf.
3. Klik **⬇ Unduh berita.js**. File yang diunduh sudah berisi artikel barumu di urutan teratas
   **plus seluruh artikel lama**.
4. Timpa `assets/js/berita.js` di folder situs dengan file yang baru diunduh.
5. Unggah ulang folder ke Netlify (lihat "Memperbarui situs yang sudah ada" di atas).

Kalau tombol unduh diblokir (misalnya saat membuka situs lewat tautan pratinjau Claude),
pakai tombol **Salin kode entri**, lalu tempelkan kodenya ke `assets/js/berita.js`
tepat setelah baris `window.DRA_BERITA = [`.

---

## Menambah soal

Buka `assets/js/soal.js`, salin satu baris yang ada, lalu ubah isinya:

```js
{t:"KUP", q:"Pertanyaannya…", o:["A","B","C","D"], a:2, e:"Pembahasan."}
```

`a` = indeks kunci jawaban mulai dari 0 (jadi `2` berarti opsi C). Tambahkan `bs:true` untuk soal
benar/salah. Soal otomatis muncul di bank soal, kuis, dan mode ujian; topik baru otomatis menjadi
filter baru.

## Menambah aturan atau istilah ke kamus

Buka `assets/js/referensi.js`.

```js
{id:"pmk-99-2026", n:"PMK 99/2026", j:"Judul resmi lengkap", b:"Berlaku 1 Januari 2026",
 a:["PMK 99/2026"],               // tulisan yang otomatis jadi tombol di halaman materi
 m:["ppn.html","Modul 05 — PPN"], // modul terkait
 p:["Poin isi pertama.","Poin kedua."],
 k:["Angka kunci"]}
```

Field `a` adalah daftar tulisan yang akan otomatis berubah menjadi tombol di seluruh halaman materi —
begitu ditambahkan, setiap penyebutan "PMK 99/2026" langsung bisa diklik.

## Menambah modul materi

1. Buat fragmen HTML baru di `src/content/` (salin struktur salah satu modul yang ada).
2. Daftarkan di `src/build.py` pada daftar `PAGES` dan `MATERI_ORDER`.
3. Jalankan `python3 src/build.py` — seluruh halaman, header, footer, dan indeks pencarian
   ikut diperbarui.

Kalau kamu tidak menjalankan generator, edit langsung file HTML di akar folder ini —
tapi ingat indeks pencarian (`assets/js/search-index.js`) tidak ikut berubah, dan perubahan
header/footer harus disalin ke semua halaman satu per satu.

## Umpan berita otomatis

`scripts/fetch-news.mjs` mengambil judul berita dari umpan RSS (Google News per kata kunci,
plus situs perpajakan dan sumber resmi bila tersedia), menyaringnya dengan kata kunci pajak,
membuang duplikat, lalu menulis `assets/data/feed.json`.

```bash
node scripts/fetch-news.mjs      # butuh Node 20+, tanpa paket npm
```

Di GitHub, `.github/workflows/berita.yml` menjalankannya tiap 6 jam dan mengirim hasilnya
sebagai commit — Netlify lalu menerbitkan ulang sendiri. Log tiap kali jalan menampilkan
sumber mana yang hidup dan mana yang mati, dan status itu juga tampil di halaman berita.

Yang disimpan hanya judul, tautan, penerbit, tanggal, dan cuplikan pendek dari umpan.
Isi artikel tidak disalin.

---

## Struktur

```
index.html              beranda
materi.html             daftar 9 modul
kup.html … perencanaan-pajak.html   isi materi (modul 01–09)
bank-soal.html          semua soal + pembahasan
kuis.html               kuis berskor +5 / −2 / −1
ujian.html              simulasi penyisihan bertimer
progres.html            pelacak progres (tersimpan di browser)
kalkulator.html         PPh 21, PPh Badan, PPN, DER, PKB + opsen
referensi.html          kamus aturan & istilah
berita.html             portal berita
tulis-berita.html       editor berita
lomba.html              info Amazing Tax TCUI 2026
404.html                halaman tidak ditemukan

assets/css/style.css        seluruh gaya, termasuk mode gelap
assets/js/app.js            tema, menu, pencarian (Ctrl+K)
assets/js/ref.js            tautan otomatis & popup aturan
assets/js/referensi.js      data aturan & istilah
assets/js/soal.js           bank soal
assets/js/berita.js         data berita
assets/js/mdmini.js         penyusun HTML untuk isi berita
assets/js/progres-store.js  penyimpan progres di browser
assets/js/search-index.js   indeks pencarian (dihasilkan build.py)
assets/data/feed.json       umpan berita otomatis (dihasilkan GitHub Actions)
assets/img/                 logo DRA & favicon

scripts/fetch-news.mjs      pengambil umpan berita
.github/workflows/          jadwal otomatis GitHub Actions
src/content/                fragmen isi tiap halaman (sumber)
src/build.py                generator: fragmen → halaman lengkap
```

`src/` tidak dipakai saat situs berjalan — isinya sumber untuk membangun ulang halaman.

## Catatan isi

Dasar hukum per September 2026: UU HPP, PP 55/2022, PP 58/2023 & PMK 168/2023 (TER),
PMK 131/2024 (DPP nilai lain 11/12), UU 1/2022 HKPD, UU 10/2020 bea meterai, PMK 81/2024 (Coretax),
PMK 169/2015 (DER), PMK 213/2016 & PMK 172/2023 (transfer pricing).

Ringkasan aturan di kamus disusun untuk belajar — bukan kutipan resmi. Status tax holiday setelah
31 Desember 2025 perlu diverifikasi ulang sebelum dipakai sebagai dasar jawaban.
