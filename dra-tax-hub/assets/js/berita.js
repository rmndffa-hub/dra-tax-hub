/* Portal berita DRA Tax Hub — data artikel.
   Cara menambah berita: buka halaman "Tulis Berita" di situs ini, isi formulirnya,
   lalu salin hasilnya ke file ini (atau unduh berita.js baru dan timpa file ini).

   Format satu entri:
   { id, t: judul, d: "YYYY-MM-DD", k: [tag], sub: 1..4 (subtema lomba, boleh null),
     r: ringkasan, isi: badan artikel, s: [{n,u}], rel: [halaman materi],
     deb: { pro: [], kontra: [], data: [], aturan: [], kalimat: "", warn: "" } }
   Badan artikel mendukung: "## " untuk subjudul, "- " untuk poin, "> " untuk kutipan, baris kosong memisahkan paragraf. */

window.DRA_BERITA = [

{
  id: "per-8-pj-2026-pembayaran-coretax",
  t: "PER-8/PJ/2026 terbit: kode billing 14 hari dan kode setoran baru untuk pajak minimum global",
  d: "2026-08-03",
  k: ["Coretax", "Administrasi", "Pajak Internasional"],
  sub: 4,
  r: "DJP menyempurnakan mekanisme pembayaran pajak di Coretax lewat perubahan atas PER-10/PJ/2024 — masa berlaku kode billing dipertegas, pemindahbukuan diperluas, dan muncul kode setoran untuk Global Minimum Tax.",
  isi:
"Direktorat Jenderal Pajak menerbitkan PER-8/PJ/2026 pada 3 Agustus 2026 sebagai perubahan atas PER-10/PJ/2024 tentang ketentuan pembayaran dan penyetoran pajak dalam rangka pelaksanaan Coretax. Aturan ini bersifat administratif — tidak ada kebijakan pajak substantif yang berubah.\n\n" +
"## Tiga hal yang diatur\n\n" +
"- Kode billing berlaku 14 hari (336 jam) dan dapat dibatalkan wajib pajak selama belum digunakan.\n" +
"- Jenis pembayaran yang dapat dipindahbukukan diperluas, termasuk PPh atas pengalihan tanah dan bangunan, PPJB, penyetoran bea meterai, dan deposit pajak.\n" +
"- Kode Akun Pajak dan Kode Jenis Setoran diperbarui, termasuk penambahan kode untuk Global Minimum Tax berdasarkan skema IIR, UTPR, dan DMTT.\n\n" +
"## Kenapa ini penting untuk lomba\n\n" +
"Poin ketiga adalah sinyal yang jarang dibaca peserta: Indonesia sudah menyiapkan infrastruktur administrasi untuk memungut pajak minimum global, bukan sekadar mengumumkan kebijakannya. Dalam debat tentang insentif pajak versus penerimaan negara, fakta ini berguna untuk menunjukkan bahwa ruang gerak insentif kini dibatasi oleh komitmen internasional — insentif yang menurunkan tarif efektif di bawah 15% akan dipungut kembali, entah oleh Indonesia atau oleh negara lain.\n\n" +
"Untuk babak penyisihan, yang perlu diingat cukup angkanya: kode billing 14 hari.",
  s: [
    { n: "MUC Consulting — PER-8/PJ/2026 Terbit, DJP Sempurnakan Mekanisme Pembayaran Pajak di Coretax", u: "https://muc.co.id/id/article/per-8pj2026-terbit-djp-sempurnakan-mekanisme-pembayaran-pajak-di-coretax" },
    { n: "Pajakku — Poin Perubahan Pembayaran Pajak Coretax dalam PER-8/PJ/2026", u: "https://pajakku.com/artikel/poin-perubahan-pembayaran-pajak-coretax-dalam-per-8pj2026" }
  ],
  rel: ["kup.html"],
  deb: {
    pro: [
      "Administrasi elektronik menurunkan biaya kepatuhan: kode billing, pembayaran, dan pemindahbukuan dalam satu sistem.",
      "Pemindahbukuan yang diperluas mengurangi uang wajib pajak yang menganggur karena salah kode setoran.",
      "Kode setoran untuk pajak minimum global menunjukkan kesiapan administratif, bukan sekadar komitmen di atas kertas."
    ],
    kontra: [
      "Perubahan teknis yang sering membuat wajib pajak kecil tertinggal — setiap pembaruan menuntut penyesuaian sistem dan pemahaman baru.",
      "Kode billing yang kedaluwarsa dalam 14 hari memindahkan risiko administratif ke wajib pajak.",
      "Kesiapan memungut pajak minimum global tidak otomatis berarti kesiapan menghitungnya: kapasitas pemeriksa untuk isu lintas yurisdiksi masih menjadi pertanyaan."
    ],
    data: [
      "PER-8/PJ/2026 terbit 3 Agustus 2026, mengubah PER-10/PJ/2024.",
      "Masa berlaku kode billing 14 hari (336 jam).",
      "Kode setoran baru mencakup tiga skema pajak minimum global: IIR, UTPR, dan DMTT."
    ],
    aturan: ["PER-8/PJ/2026", "PER-10/PJ/2024", "PMK 81/2024"],
    kalimat: "Agustus 2026 DJP menambahkan kode setoran untuk pajak minimum global ke dalam sistem pembayaran Coretax. Artinya perdebatan insentif pajak sudah bergeser: pertanyaannya bukan lagi berani atau tidak memberi insentif, melainkan siapa yang akan memungut selisihnya ketika tarif efektif jatuh di bawah 15 persen.",
    warn: "Ini aturan administratif setingkat Peraturan Dirjen, bukan kebijakan baru. Jangan menyebutnya sebagai dasar hukum pemungutan pajak minimum global."
  }
},

{
  id: "status-tax-holiday-2026",
  t: "Status tax holiday setelah 2025 masih menggantung — dan itu justru bahan argumen yang bagus",
  d: "2026-09-16",
  k: ["Insentif", "Perencanaan Pajak", "Pajak Internasional"],
  sub: 1,
  r: "PMK 69/2024 memperpanjang batas pengajuan tax holiday sampai 31 Desember 2025 dan menyisipkan klausul pajak minimum global 15%. Sampai September 2026 belum ada aturan pengganti yang pasti — cek ulang sebelum dipakai sebagai dasar jawaban.",
  isi:
"Fasilitas pengurangan PPh badan untuk industri pionir diatur PMK 130/2020. Perubahannya, PMK 69/2024 yang berlaku 9 Oktober 2024, melakukan dua hal sekaligus.\n\n" +
"## Yang diubah PMK 69/2024\n\n" +
"- Batas waktu pengajuan permohonan diperpanjang sampai 31 Desember 2025.\n" +
"- Ditambahkan Pasal 15A: grup perusahaan multinasional tetap dikenai pajak tambahan bila tarif pajak efektifnya turun di bawah 15% akibat insentif — penyelarasan dengan pajak minimum global OECD/G20.\n\n" +
"## Kenapa perlu hati-hati\n\n" +
"Pasal 15A itu mengubah arti tax holiday secara diam-diam. Sebelumnya insentif ini betul-betul membebaskan; sekarang pembebasan di Indonesia bisa berujung pungutan di negara lain melalui mekanisme top-up tax. Artinya, dari sisi grup multinasional, nilai insentifnya berkurang — sementara dari sisi Indonesia, penerimaan tetap hilang.\n\n" +
"> Kalau kamu memakai argumen \"insentif menarik investasi\", lawan bisa mematahkannya dengan Pasal 15A: yang kamu relakan belum tentu dinikmati investor, tapi pasti hilang dari kas negara.\n\n" +
"## Yang harus dilakukan sebelum lomba\n\n" +
"Status keberlakuan setelah 31 Desember 2025 belum bisa dipastikan dari sumber yang ada. Cek aturan terbaru sebelum menjadikannya dasar jawaban — kalau sudah terbit PMK baru, angka dan jangka waktunya berubah, dan menyebut aturan yang sudah tidak berlaku di depan juri jauh lebih merugikan daripada tidak menyebutnya sama sekali.",
  s: [
    { n: "MUC Consulting — Tax Holiday Update: Extended Registration, Global Minimum Tax Clause Regulated", u: "https://muc.co.id/en/article/tax-holiday-update-extended-registration-global-minimum-tax-clause-regulated" },
    { n: "DDTCNews — Masa Berlaku Tax Holiday PMK 130/2020 Diperpanjang hingga Akhir 2025", u: "https://news.ddtc.co.id/berita/nasional/1806057/masa-berlaku-tax-holiday-pmk-1302020-diperpanjang-hingga-akhir-2025" },
    { n: "Pajakku — Pemerintah Siapkan Revisi Aturan Tax Holiday, Berlaku Mulai 2026", u: "https://pajakku.com/artikel/pemerintah-siapkan-revisi-aturan-tax-holiday-berlaku-mulai-2026" }
  ],
  rel: ["perencanaan-pajak.html"],
  deb: {
    pro: [
      "Insentif menurunkan biaya modal dan menjadi pembeda saat investor membandingkan Indonesia dengan negara tetangga.",
      "Industri pionir menghasilkan limpahan yang tidak muncul di penerimaan pajak langsung: rantai pasok, penyerapan tenaga kerja, alih teknologi.",
      "Perpanjangan batas pengajuan memberi kepastian bagi investasi yang perencanaannya bertahun-tahun."
    ],
    kontra: [
      "Penerimaan yang dilepas bersifat pasti, sedangkan investasinya belum tentu datang karena insentif — banyak yang tetap masuk tanpa fasilitas.",
      "Dengan Pasal 15A, pembebasan di Indonesia bisa berubah menjadi pungutan di negara asal investor: penerimaan hilang tanpa manfaat berpindah ke investor.",
      "Belanja perpajakan tidak melewati pengujian seketat belanja APBN, padahal sama-sama mengurangi ruang fiskal."
    ],
    data: [
      "PMK 69/2024 berlaku 9 Oktober 2024, memperpanjang batas pengajuan permohonan sampai 31 Desember 2025.",
      "Pasal 15A: tambahan pajak berlaku bila tarif pajak efektif grup multinasional turun di bawah 15%.",
      "Status setelah 31 Desember 2025 belum dapat dipastikan per September 2026."
    ],
    aturan: ["PMK 130/2020", "PMK 69/2024", "PP 78/2019"],
    kalimat: "Sejak PMK 69/2024, tax holiday tidak lagi berarti pembebasan penuh: Pasal 15A menegaskan grup multinasional tetap membayar tambahan bila tarif efektifnya jatuh di bawah lima belas persen. Jadi yang kita relakan belum tentu dinikmati investor, tetapi pasti hilang dari kas negara — dan itulah alasan insentif harus diuji seketat belanja negara.",
    warn: "Jangan menyebut jangka waktu atau syarat tax holiday yang berlaku saat ini tanpa mengecek aturan terbaru. Kalau ditanya juri dan belum sempat mengecek, sebut PMK 69/2024 sebagai perubahan terakhir yang diketahui."
  }
},

{
  id: "djp-imbau-cek-coretax",
  t: "DJP mengimbau wajib pajak rutin membuka Coretax — beban mengetahui tagihan berpindah ke wajib pajak",
  d: "2026-09-12",
  k: ["Coretax", "KUP", "Sengketa"],
  sub: 4,
  r: "Surat Tagihan Pajak tidak lagi selalu dikirim fisik. DJP meminta wajib pajak rutin memeriksa akun Coretax dan memperbarui data kontak, sementara tenggat keberatan tetap dihitung sejak dokumen dikirim.",
  isi:
"DJP mengimbau wajib pajak rutin membuka akun Coretax untuk memantau Surat Tagihan Pajak serta memperbarui alamat surel dan data kontak. Fungsional Penyuluh Pajak Gede Suarnaya menyatakan bahwa pada era Coretax wajib pajak tidak bisa lagi hanya menunggu surat fisik. Wajib pajak diminta mencocokkan STP dengan bukti bayar dan SPT, lalu menghubungi Kring Pajak 1500200 atau KPP bila ada ketidaksesuaian.\n\n" +
"## Sisi yang mendukung\n\n" +
"- Penyampaian dokumen seketika dan murah, tidak bergantung pada pos.\n" +
"- Wajib pajak bisa mengoreksi lebih awal sebelum tagihan berbunga.\n" +
"- Seluruh dokumen terarsip di satu portal, jejaknya jelas ketika terjadi sengketa.\n\n" +
"## Sisi yang menjadi masalah\n\n" +
"- Beban pemberitahuan bergeser ke wajib pajak: tidak membuka portal berarti tidak tahu ada tagihan, sementara tenggat tetap berjalan.\n" +
"- Tenggat keberatan dihitung sejak tanggal dokumen dikirim; di era elektronik, \"dikirim\" berarti terbit di portal, bukan diterima wajib pajak.\n" +
"- Kesenjangan digital membuat UMKM dan wajib pajak di daerah dengan akses terbatas paling rentan.\n" +
"- Statusnya masih imbauan, belum aturan — standar \"dianggap diterima\" perlu dipertegas.\n\n" +
"## Kalimat siap pakai untuk debat\n\n" +
"> September 2026 DJP mengimbau wajib pajak rutin membuka Coretax, karena surat tagihan tidak lagi dikirim fisik. Artinya beban mengetahui adanya tagihan berpindah ke pundak wajib pajak, sementara tenggat keberatan tetap dihitung tiga bulan sejak dokumen dikirim. Digitalisasi tanpa penyesuaian aturan pemberitahuan justru memindahkan risiko ke pihak yang paling lemah.\n\n" +
"Peringatan pemakaian: sebut ini sebagai imbauan DJP, bukan kewajiban hukum baru. Kalau disebut sebagai aturan, lawan mudah mematahkannya.",
  s: [
    { n: "DDTCNews — Cek Tagihan Pajak, DJP Minta WP Rutin Buka Coretax", u: "https://news.ddtc.co.id/berita/nasional/1822404/cek-tagihan-pajak-djp-minta-wp-rutin-buka-coretax" }
  ],
  rel: ["kup.html"],
  deb: {
    pro: [
      "Penyampaian dokumen seketika dan murah, tidak bergantung pada pos yang bisa terlambat berminggu-minggu.",
      "Wajib pajak dapat mengoreksi lebih awal sebelum tagihan berbunga.",
      "Seluruh dokumen terarsip di satu portal — jejaknya jelas ketika terjadi sengketa."
    ],
    kontra: [
      "Beban pemberitahuan bergeser ke wajib pajak: tidak membuka portal berarti tidak tahu ada tagihan, sementara tenggat tetap berjalan.",
      "Tenggat keberatan dihitung sejak dokumen dikirim; di era elektronik \"dikirim\" berarti terbit di portal, bukan diterima wajib pajak.",
      "Kesenjangan digital membuat UMKM dan wajib pajak di daerah dengan akses terbatas paling rentan kehilangan hak.",
      "Statusnya masih imbauan, belum aturan — standar \"dianggap diterima\" perlu dipertegas."
    ],
    data: [
      "Imbauan DJP, 12 September 2026, disampaikan Fungsional Penyuluh Pajak Gede Suarnaya.",
      "Tenggat keberatan tetap 3 bulan sejak surat ketetapan dikirim (Pasal 25 UU KUP).",
      "Kanal pengaduan yang disebut: Kring Pajak 1500200 dan KPP terdaftar.",
      "Masih dicari: jumlah wajib pajak terdaftar dibanding yang aktif membuka Coretax; jumlah STP terbit per tahun (Laporan Tahunan DJP)."
    ],
    aturan: ["PMK 81/2024", "UU KUP", "UU 27/2022"],
    kalimat: "September 2026 DJP mengimbau wajib pajak rutin membuka Coretax, karena surat tagihan tidak lagi dikirim fisik. Artinya beban mengetahui adanya tagihan berpindah ke pundak wajib pajak, sementara tenggat keberatan tetap dihitung tiga bulan sejak dokumen dikirim. Digitalisasi tanpa penyesuaian aturan pemberitahuan justru memindahkan risiko ke pihak yang paling lemah.",
    warn: "Sebut sebagai imbauan DJP, bukan kewajiban hukum baru. Kalau disebut sebagai aturan, lawan mudah mematahkannya."
  }
}

];
