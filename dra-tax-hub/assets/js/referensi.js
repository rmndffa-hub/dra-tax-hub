/* Kamus aturan & istilah DRA Tax Hub
   ATURAN: id · n = nama pendek · j = judul resmi · b = berlaku/status · p = poin isi
           k = pasal/angka kunci · m = modul terkait · a = alias untuk auto-link
   Ringkasan disusun untuk belajar — untuk dipakai di pekerjaan nyata, buka naskah resminya. */

window.DRA_ATURAN = [
{id:"uu-kup",n:"UU KUP",j:"UU 6/1983 tentang Ketentuan Umum dan Tata Cara Perpajakan, terakhir diubah dengan UU 7/2021 (HPP)",b:"Berlaku, terakhir diubah 2021",
 a:["UU KUP","Pasal 39 UU KUP","Pasal 25 ayat (3) UU KUP"],m:["kup.html","Modul 01 — KUP"],
 p:["Menetapkan sistem self assessment: wajib pajak menghitung, menyetor, dan melapor sendiri.","Mengatur SPT, tenggat setor dan lapor, serta sanksi administrasi berupa bunga, denda, dan kenaikan.","Mengatur pemeriksaan, surat ketetapan (SKPKB, SKPKBT, SKPLB, SKPN) dan Surat Tagihan Pajak.","Mengatur upaya hukum: keberatan ke DJP, banding dan gugatan ke Pengadilan Pajak, peninjauan kembali ke Mahkamah Agung.","Mengatur ketentuan pidana perpajakan — Pasal 39 untuk perbuatan yang menimbulkan kerugian pendapatan negara."],
 k:["Keberatan: 3 bulan sejak SKP dikirim; DJP memutus 12 bulan","Denda SPT: Rp100 rb masa · Rp500 rb masa PPN · Rp100 rb tahunan OP · Rp1 jt tahunan badan","Daluwarsa penetapan 5 tahun; simpan dokumen 10 tahun"]},

{id:"uu-pph",n:"UU PPh",j:"UU 7/1983 tentang Pajak Penghasilan, terakhir diubah dengan UU 7/2021 (HPP)",b:"Berlaku, terakhir diubah 2021",
 a:["UU PPh","Pasal 18 UU PPh","Pasal 17 UU PPh"],m:["pph-badan.html","Modul 02 — PPh Badan"],
 p:["Mengatur subjek, objek, dan pengecualian objek PPh.","Pasal 6 dan Pasal 9: biaya yang boleh dan tidak boleh dikurangkan.","Pasal 17: tarif — orang pribadi lima lapisan (5%–35%), badan 22%.","Pasal 21, 22, 23, 24, 25, 26, dan 4 ayat (2): mekanisme pemotongan, pemungutan, dan angsuran.","Pasal 18: ketentuan anti-penghindaran pajak — DER, CFC, hubungan istimewa, PKKU, APA.","Pasal 31E: fasilitas pengurangan tarif 50% bagi badan dengan peredaran bruto sampai Rp50 miliar."],
 k:["Tarif badan 22%","Lapisan OP: 60 jt · 250 jt · 500 jt · 5 M → 5/15/25/30/35%","Hubungan istimewa ≥ 25%; CFC ≥ 50%"]},

{id:"uu-ppn",n:"UU PPN",j:"UU 8/1983 tentang Pajak Pertambahan Nilai Barang dan Jasa dan Pajak Penjualan atas Barang Mewah, terakhir diubah dengan UU 7/2021",b:"Berlaku, terakhir diubah 2021",
 a:["UU PPN"],m:["ppn.html","Modul 05 — PPN & PPnBM"],
 p:["Pasal 4: objek PPN — penyerahan BKP/JKP di dalam daerah pabean, impor, pemanfaatan dari luar daerah pabean, ekspor, kegiatan membangun sendiri.","Mekanisme pengkreditan: pajak keluaran dikurangi pajak masukan.","UU HPP memindahkan sebagian besar daftar bukan objek menjadi fasilitas dibebaskan.","PPnBM dikenakan satu kali pada pabrikan atau impor, dengan tarif 10%–200%."],
 k:["Tarif 12% (DPP nilai lain 11/12 untuk non-mewah)","Ekspor 0%","Batas wajib PKP Rp4,8 miliar"]},

{id:"uu-hpp",n:"UU HPP",j:"UU 7/2021 tentang Harmonisasi Peraturan Perpajakan",b:"Diundangkan 29 Oktober 2021",
 a:["UU HPP","UU 7/2021"],m:["kup.html","Modul 01 — KUP"],
 p:["Menambah lapisan tarif PPh orang pribadi kelima sebesar 35% untuk PKP di atas Rp5 miliar, dan menaikkan batas lapisan pertama menjadi Rp60 juta.","Mempertahankan tarif PPh badan 22%.","Menjadikan NIK sebagai NPWP orang pribadi.","Menjadikan natura dan kenikmatan sebagai objek pajak di sisi penerima, sekaligus boleh dibiayakan perusahaan.","Mengubah rumus sanksi bunga menjadi suku bunga acuan ditambah uplift, dibagi 12.","Menambahkan Program Pengungkapan Sukarela dan pengaturan pajak karbon."],
 k:["Lapisan kelima 35% di atas Rp5 miliar","Bunga maksimal dihitung 24 bulan"]},

{id:"uu-bea-meterai",n:"UU 10/2020",j:"UU 10 Tahun 2020 tentang Bea Meterai",b:"Berlaku 1 Januari 2021, menggantikan UU 13/1985",
 a:["UU 10/2020","UU 10 Tahun 2020"],m:["bea-meterai.html","Modul 06 — Bea Meterai"],
 p:["Menetapkan tarif tunggal Rp10.000, menggantikan dua tarif lama Rp3.000 dan Rp6.000.","Dokumen yang menyatakan jumlah uang terutang bea meterai bila nilainya lebih dari Rp5.000.000.","Mengakui meterai elektronik dan meterai dalam bentuk lain.","Saat terutang: dokumen sepihak saat diserahkan, dua pihak saat ditandatangani, dari luar negeri saat digunakan di Indonesia.","Pemeteraian kemudian dikenai sanksi administratif 100% dari bea meterai terutang."],
 k:["Tarif Rp10.000","Ambang lebih dari Rp5 juta","Sanksi pemeteraian kemudian 100%"]},

{id:"uu-hkpd",n:"UU HKPD",j:"UU 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah",b:"Berlaku, menggantikan UU 28/2009",
 a:["UU HKPD","UU 1/2022","UU 28/2009"],m:["pdrd.html","Modul 07 — Pajak Daerah"],
 p:["Melebur lima pajak kabupaten/kota (hotel, restoran, hiburan, parkir, penerangan jalan) menjadi satu: PBJT.","Mengganti mekanisme bagi hasil dengan opsen: kabupaten/kota memungut opsen PKB dan BBNKB 66%; provinsi memungut opsen Pajak MBLB 25%.","Memisahkan Pajak Alat Berat dari PKB menjadi jenis pajak provinsi tersendiri.","Menurunkan tarif maksimal PKB dari 2% menjadi 1,2% sebagai penyeimbang opsen.","Menetapkan tiga golongan retribusi: Jasa Umum, Jasa Usaha, dan Perizinan Tertentu."],
 k:["Opsen PKB & BBNKB 66% · Opsen MBLB 25%","PBJT maksimal 10%; hiburan tertentu 40%–75%","PBB-P2 0,5% · BPHTB 5%"]},

{id:"uu-pengadilan-pajak",n:"UU 14/2002",j:"UU 14 Tahun 2002 tentang Pengadilan Pajak",b:"Berlaku",
 a:["UU 14/2002"],m:["kup.html","Modul 01 — KUP"],
 p:["Mengatur kedudukan, susunan, dan kewenangan Pengadilan Pajak.","Banding: diajukan 3 bulan sejak keputusan keberatan diterima; diputus dalam 12 bulan.","Gugatan: 14 hari untuk pelaksanaan penagihan, 30 hari untuk keputusan lain; diputus dalam 6 bulan.","Putusan Pengadilan Pajak bersifat final; upaya berikutnya hanya peninjauan kembali ke Mahkamah Agung."],
 k:["Banding 3 bulan · gugatan 14/30 hari · PK 3 bulan"]},

{id:"uu-pdp",n:"UU PDP",j:"UU 27 Tahun 2022 tentang Pelindungan Data Pribadi",b:"Berlaku, masa penyesuaian 2 tahun sejak diundangkan",
 a:["UU 27/2022","UU PDP"],m:["kup.html","Modul 01 — KUP"],
 p:["Mengatur hak subjek data dan kewajiban pengendali data pribadi.","Relevan untuk perpajakan digital: data wajib pajak di Coretax adalah data pribadi yang wajib dilindungi.","Sering dipakai sebagai landasan argumen dalam debat mengenai kepatuhan berbasis prediksi digital."]},

{id:"pp-55-2022",n:"PP 55/2022",j:"PP 55 Tahun 2022 tentang Penyesuaian Pengaturan di Bidang Pajak Penghasilan",b:"Berlaku 20 Desember 2022",
 a:["PP 55/2022"],m:["pph-op.html","Modul 03 — PPh OP"],
 p:["Mengatur PPh final 0,5% atas peredaran bruto tertentu (UMKM).","Jangka waktu: orang pribadi 7 tahun pajak, koperasi/CV/firma 4 tahun, PT 3 tahun.","Peredaran bruto sampai Rp500 juta setahun tidak dikenai pajak — khusus wajib pajak orang pribadi.","Batas atas untuk memakai skema ini tetap peredaran bruto Rp4,8 miliar setahun.","Juga memuat aturan pelaksanaan natura, dividen yang dikecualikan, dan ketentuan PPh lainnya pasca-UU HPP."],
 k:["Tarif 0,5%","Bebas sampai omzet Rp500 juta (OP)","OP 7 th · CV 4 th · PT 3 th"]},

{id:"pp-58-2023",n:"PP 58/2023",j:"PP 58 Tahun 2023 tentang Tarif Pemotongan PPh Pasal 21 atas Penghasilan Sehubungan dengan Pekerjaan, Jasa, atau Kegiatan Wajib Pajak Orang Pribadi",b:"Berlaku 1 Januari 2024",
 a:["PP 58/2023"],m:["pph-op.html","Modul 03 — PPh OP"],
 p:["Memperkenalkan Tarif Efektif Rata-rata (TER) untuk pemotongan masa Januari–November.","TER bulanan dibagi tiga kategori menurut status PTKP: A (TK/0, TK/1, K/0), B (TK/2, TK/3, K/1, K/2), C (K/3).","Masa Desember tetap memakai perhitungan setahun penuh dikurangi pemotongan Januari–November.","Tersedia pula TER harian untuk pegawai tidak tetap yang dibayar harian."],
 k:["TER A/B/C untuk masa Januari–November","Desember: hitung setahun, kurangi yang sudah dipotong"]},

{id:"pmk-168-2023",n:"PMK 168/2023",j:"PMK 168 Tahun 2023 tentang Petunjuk Pelaksanaan Pemotongan Pajak atas Penghasilan Sehubungan dengan Pekerjaan, Jasa, dan Kegiatan Orang Pribadi",b:"Berlaku 1 Januari 2024",
 a:["PMK 168/2023"],m:["pph-op.html","Modul 03 — PPh OP"],
 p:["Aturan pelaksana PP 58/2023: tabel TER bulanan dan harian, serta contoh penghitungan.","Menegaskan pengurang yang berlaku: biaya jabatan 5% maksimal Rp6 juta setahun dan biaya pensiun 5% maksimal Rp2,4 juta setahun.","Mengatur perlakuan bagi pegawai tetap, pegawai tidak tetap, bukan pegawai, peserta kegiatan, dan penerima pensiun.","Dasar pengenaan bukan pegawai: 50% dari penghasilan bruto."],
 k:["Biaya jabatan maks Rp6 jt/tahun","Bukan pegawai: DPP 50% × bruto"]},

{id:"pmk-131-2024",n:"PMK 131/2024",j:"PMK 131 Tahun 2024 tentang Perlakuan PPN atas Impor Barang Kena Pajak, Penyerahan BKP, Penyerahan JKP, Pemanfaatan BKP Tidak Berwujud dan JKP dari Luar Daerah Pabean",b:"Berlaku 1 Januari 2025",
 a:["PMK 131/2024"],m:["ppn.html","Modul 05 — PPN & PPnBM"],
 p:["Menetapkan tarif PPN 12% sesuai UU HPP, namun dengan dasar pengenaan berupa nilai lain sebesar 11/12 dari harga jual untuk barang dan jasa selain barang mewah.","Akibatnya beban PPN efektif untuk barang umum tetap 11%.","Untuk barang mewah yang menjadi objek PPnBM, dasar pengenaannya harga jual penuh sehingga bebannya 12%."],
 k:["12% × 11/12 ≈ 11% untuk non-mewah","12% penuh untuk barang mewah"]},

{id:"pmk-81-2024",n:"PMK 81/2024",j:"PMK 81 Tahun 2024 tentang Ketentuan Perpajakan dalam rangka Pelaksanaan Sistem Inti Administrasi Perpajakan",b:"Berlaku 1 Januari 2025",
 a:["PMK 81/2024"],m:["kup.html","Modul 01 — KUP"],
 p:["Menjadi payung administrasi era Coretax: menyatukan puluhan peraturan menteri sebelumnya ke dalam satu aturan.","Mengatur pendaftaran, pembayaran, pelaporan, faktur pajak, bukti potong, dan layanan wajib pajak dalam sistem Coretax.","Memperkenalkan deposit pajak (taxpayer account) yang menggantikan sebagian mekanisme pemindahbukuan.","Surat dari DJP dikirim melalui portal — konsekuensinya penghitungan tenggat tetap mengacu pada tanggal dikirim."],
 k:["NPWP 16 digit / NIK","Surat dikirim lewat portal"]},

{id:"per-8-pj-2026",n:"PER-8/PJ/2026",j:"Peraturan Direktur Jenderal Pajak PER-8/PJ/2026 tentang Perubahan atas PER-10/PJ/2024 mengenai Ketentuan Pembayaran dan Penyetoran Pajak dalam rangka Pelaksanaan Coretax",b:"Terbit 3 Agustus 2026",
 a:["PER-8/PJ/2026","PER-10/PJ/2024"],m:["kup.html","Modul 01 — KUP"],
 p:["Kode billing berlaku 14 hari (336 jam) dan dapat dibatalkan wajib pajak selama belum digunakan.","Memperluas jenis pembayaran yang dapat dipindahbukukan, termasuk PPh pengalihan tanah/bangunan, PPJB, bea meterai, dan deposit pajak.","Memperbarui Kode Akun Pajak dan Kode Jenis Setoran, termasuk penambahan kode untuk Global Minimum Tax (IIR, UTPR, dan DMTT).","Bersifat administratif — tidak mengubah kebijakan pajak substantif."],
 k:["Kode billing 14 hari","Kode setoran baru untuk pajak minimum global"]},

{id:"pmk-66-2023",n:"PMK 66/2023",j:"PMK 66 Tahun 2023 tentang Perlakuan Pajak Penghasilan atas Penggantian atau Imbalan dalam Bentuk Natura dan/atau Kenikmatan",b:"Berlaku 1 Juli 2023",
 a:["PMK 66/2023"],m:["pph-badan.html","Modul 02 — PPh Badan"],
 p:["Menegaskan natura dan kenikmatan sebagai objek PPh bagi penerima, sekaligus boleh dibiayakan pemberi kerja.","Mengatur daftar pengecualian: makanan dan minuman di tempat kerja, natura di daerah tertentu, keperluan keselamatan kerja, natura dari APBN/APBD, serta jenis dan batasan tertentu.","Memberi batasan nilai untuk beberapa jenis natura, misalnya bingkisan hari raya dan fasilitas kendaraan."],
 k:["Objek di karyawan, biaya di perusahaan"]},

{id:"pmk-61-2022",n:"PMK 61/2022",j:"PMK 61 Tahun 2022 tentang PPN atas Kegiatan Membangun Sendiri",b:"Berlaku 1 April 2022",
 a:["PMK 61/2022"],m:["ppn.html","Modul 05 — PPN & PPnBM"],
 p:["Kegiatan membangun sendiri dikenai PPN bila luas bangunan paling sedikit 200 m².","Besaran tertentu 2,2% dari seluruh biaya pembangunan, tidak termasuk harga perolehan tanah.","Disetor setiap bulan selama masa pembangunan berlangsung."],
 k:["≥ 200 m² · 2,2% dari biaya"]},

{id:"pmk-141-2015",n:"PMK 141/2015",j:"PMK 141/PMK.03/2015 tentang Jenis Jasa Lain sebagaimana Dimaksud dalam Pasal 23 ayat (1) huruf c angka 2 UU PPh",b:"Berlaku",
 a:["PMK 141/PMK.03/2015","PMK 141/2015"],m:["potput.html","Modul 04 — Potput"],
 p:["Memuat daftar jasa lain yang menjadi objek pemotongan PPh Pasal 23 sebesar 2%.","Mengatur bahwa jumlah bruto tidak termasuk PPN, dan untuk jasa tertentu dapat tidak memasukkan penggantian biaya material atau gaji tenaga kerja pihak ketiga sepanjang dibuktikan kontrak dan faktur terpisah."],
 k:["Tarif 2% dari bruto tidak termasuk PPN"]},

{id:"pp-9-2022",n:"PP 9/2022",j:"PP 9 Tahun 2022 tentang Perubahan Kedua atas PP 51 Tahun 2008 tentang PPh atas Penghasilan dari Usaha Jasa Konstruksi",b:"Berlaku 21 Februari 2022",
 a:["PP 9/2022","PP 51/2008"],m:["potput.html","Modul 04 — Potput"],
 p:["Menetapkan tarif PPh final jasa konstruksi berdasarkan klasifikasi usaha penyedia jasa.","Pelaksana kualifikasi kecil atau perseorangan 1,75%; tanpa kualifikasi 4%; kualifikasi menengah dan besar 2,65%.","Perencana atau pengawas dengan kualifikasi 3,5%; tanpa kualifikasi 6%."],
 k:["1,75% · 2,65% · 3,5% · 4% · 6%"]},

{id:"pmk-169-2015",n:"PMK 169/2015",j:"PMK 169/PMK.010/2015 tentang Penentuan Besarnya Perbandingan antara Utang dan Modal Perusahaan untuk Keperluan Penghitungan Pajak Penghasilan",b:"Berlaku mulai tahun pajak 2016",
 a:["PMK 169/2015","PMK 169/PMK.010/2015"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Menetapkan perbandingan utang terhadap modal (DER) paling tinggi 4 : 1.","Biaya pinjaman atas porsi utang yang melebihi batas tidak dapat dikurangkan — koreksinya proporsional, bukan seluruhnya.","Dikecualikan antara lain bank, lembaga pembiayaan, asuransi dan reasuransi, wajib pajak yang seluruh penghasilannya dikenai PPh final, serta usaha di bidang infrastruktur.","Dalam transaksi lintas negara, selisih bunga yang dikoreksi dapat diperlakukan sebagai dividen dan terutang PPh Pasal 26."],
 k:["DER 4 : 1","Koreksi proporsional"]},

{id:"pmk-213-2016",n:"PMK 213/2016",j:"PMK 213/PMK.03/2016 tentang Jenis Dokumen dan/atau Informasi Tambahan yang Wajib Disimpan oleh Wajib Pajak yang Melakukan Transaksi dengan Para Pihak yang Mempunyai Hubungan Istimewa",b:"Berlaku 30 Desember 2016",
 a:["PMK 213/2016","PMK 213/PMK.03/2016"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Mewajibkan tiga lapis dokumentasi: Master File, Local File, dan Country-by-Country Report.","Ambang wajib Master File dan Local File (cukup satu terpenuhi): peredaran bruto tahun sebelumnya di atas Rp50 miliar; transaksi barang berwujud afiliasi di atas Rp20 miliar; transaksi jasa, bunga, royalti atau lainnya di atas Rp5 miliar per lawan transaksi; atau lawan transaksi berada di negara bertarif PPh lebih rendah.","CbCR wajib bagi induk grup dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun.","Master File dan Local File harus tersedia paling lama 4 bulan setelah akhir tahun pajak; ikhtisarnya dilampirkan dalam SPT Tahunan."],
 k:["Ambang Rp50 M / Rp20 M / Rp5 M","CbCR ≥ Rp11 triliun","Tersedia 4 bulan setelah akhir tahun pajak"]},

{id:"pmk-172-2023",n:"PMK 172/2023",j:"PMK 172 Tahun 2023 tentang Penerapan Prinsip Kewajaran dan Kelaziman Usaha dalam Transaksi yang Dipengaruhi Hubungan Istimewa",b:"Berlaku 29 Desember 2023",
 a:["PMK 172/2023"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Menyatukan aturan transfer pricing yang sebelumnya tersebar ke dalam satu peraturan.","Menegaskan penerapan PKKU secara ex-ante — kewajaran dinilai saat harga ditetapkan, bukan setelah tahun berjalan berakhir.","Menetapkan lima metode: CUP, Resale Price, Cost Plus, TNMM, dan Profit Split; metode dipilih yang paling sesuai dan alasannya dijelaskan di Local File.","Mengatur tahapan analisis kesebandingan, penentuan indikator harga transfer, serta rentang kewajaran.","Mengatur corresponding adjustment, Mutual Agreement Procedure (MAP), dan Advance Pricing Agreement (APA)."],
 k:["Lima metode: CUP · RPM · C+ · TNMM · PSM","PKKU dinilai ex-ante"]},

{id:"pmk-107-2017",n:"PMK 107/2017",j:"PMK 107/PMK.03/2017 tentang Penetapan Saat Diperolehnya Dividen dan Dasar Penghitungannya oleh Wajib Pajak Dalam Negeri atas Penyertaan Modal pada Badan Usaha di Luar Negeri selain Badan Usaha yang Menjual Sahamnya di Bursa Efek",b:"Berlaku, diubah dengan PMK 93/2019",
 a:["PMK 107/2017","PMK 93/2019"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Aturan pelaksana Controlled Foreign Company (Pasal 18 ayat 2 UU PPh).","Berlaku bila wajib pajak dalam negeri memiliki penyertaan modal paling sedikit 50%, sendiri maupun bersama-sama.","Laba setelah pajak badan usaha luar negeri dianggap sebagai dividen yang diperoleh, meski belum dibagikan.","PMK 93/2019 menyempurnakan penghitungan dan pengkreditan pajak luar negeri atas deemed dividend tersebut."],
 k:["Penyertaan ≥ 50%","Deemed dividend"]},

{id:"pp-45-2019",n:"PP 45/2019",j:"PP 45 Tahun 2019 tentang Perubahan atas PP 94 Tahun 2010 tentang Penghitungan Penghasilan Kena Pajak dan Pelunasan PPh dalam Tahun Berjalan",b:"Berlaku 25 Juni 2019",
 a:["PP 45/2019","PP 94/2010"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Memberikan super deduction untuk kegiatan praktik kerja, pemagangan, dan pembelajaran vokasi: pengurangan penghasilan bruto hingga 200% dari biaya yang dikeluarkan.","Memberikan super deduction untuk kegiatan penelitian dan pengembangan tertentu: hingga 300% dari biaya.","Memberikan fasilitas tambahan pengurangan penghasilan neto untuk penanaman modal pada industri padat karya."],
 k:["Vokasi 200% · litbang 300%"]},

{id:"pp-78-2019",n:"PP 78/2019",j:"PP 78 Tahun 2019 tentang Fasilitas Pajak Penghasilan untuk Penanaman Modal di Bidang-Bidang Usaha Tertentu dan/atau di Daerah-Daerah Tertentu",b:"Berlaku 13 November 2019",
 a:["PP 78/2019"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Dikenal sebagai tax allowance — berbeda dari tax holiday yang membebaskan PPh badan.","Fasilitas utama: pengurangan penghasilan neto 30% dari nilai penanaman modal, dibebankan selama 6 tahun (5% per tahun).","Fasilitas lain: penyusutan dan amortisasi dipercepat, tarif PPh Pasal 26 atas dividen ke luar negeri 10% atau lebih rendah sesuai P3B, serta perpanjangan kompensasi kerugian sampai 10 tahun.","Berlaku untuk bidang usaha dan daerah tertentu sesuai lampiran."],
 k:["Pengurangan neto 30%, 5% per tahun selama 6 tahun"]},

{id:"pmk-130-2020",n:"PMK 130/2020",j:"PMK 130 Tahun 2020 tentang Pemberian Fasilitas Pengurangan Pajak Penghasilan Badan",b:"Berlaku 9 Oktober 2020, diubah dengan PMK 69/2024",
 a:["PMK 130/2020"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Dikenal sebagai tax holiday untuk industri pionir.","Memberikan pengurangan PPh badan sampai 100% untuk jangka waktu 5 sampai 20 tahun, bergantung pada nilai penanaman modal, dan tambahan pengurangan 50% pada masa transisi dua tahun berikutnya.","Nilai penanaman modal yang lebih kecil dapat memperoleh pengurangan 50% (sering disebut mini tax holiday).","Status keberlakuan setelah 2025 perlu diverifikasi — lihat PMK 69/2024."],
 k:["Pengurangan hingga 100%, 5–20 tahun"]},

{id:"pmk-69-2024",n:"PMK 69/2024",j:"PMK 69 Tahun 2024 tentang Perubahan atas PMK 130 Tahun 2020 tentang Pemberian Fasilitas Pengurangan Pajak Penghasilan Badan",b:"Berlaku 9 Oktober 2024",
 a:["PMK 69/2024"],m:["perencanaan-pajak.html","Modul 09 — Perencanaan Pajak"],
 p:["Memperpanjang batas waktu pengajuan permohonan tax holiday sampai 31 Desember 2025.","Menambahkan Pasal 15A: grup perusahaan multinasional tetap dikenai pajak tambahan apabila tarif pajak efektifnya turun di bawah 15% akibat insentif — penyelarasan dengan pajak minimum global OECD/G20.","Status setelah 31 Desember 2025 perlu dicek pada aturan terbaru sebelum dipakai sebagai dasar argumen."],
 k:["Permohonan s.d. 31 Desember 2025","Pajak minimum global 15% (Pasal 15A)"]},

{id:"pmk-92-2019",n:"PMK 92/2019",j:"PMK 92/PMK.03/2019 tentang Perubahan atas PMK 253/PMK.03/2008 tentang Wajib Pajak Badan Tertentu sebagai Pemungut PPh dari Pembeli atas Penjualan Barang yang Tergolong Sangat Mewah",b:"Berlaku",
 a:["PMK 92/2019"],m:["potput.html","Modul 04 — Potput"],
 p:["Mengatur pemungutan PPh Pasal 22 atas penjualan barang yang tergolong sangat mewah dengan tarif 5% dari harga jual.","Memperluas daftar barang sangat mewah, antara lain rumah, apartemen, kendaraan bermotor, kapal pesiar, dan pesawat pribadi dengan batasan nilai tertentu."],
 k:["PPh 22 sebesar 5%"]}
];

/* ISTILAH: id · n = istilah · s = kepanjangan/arti singkat · d = penjelasan · m = modul */
window.DRA_ISTILAH = [
{id:"pkku",n:"PKKU",s:"Prinsip Kewajaran dan Kelaziman Usaha",d:"Standar yang mengharuskan transaksi antarpihak berhubungan istimewa dilakukan pada harga yang sama dengan transaksi antarpihak independen. Dasarnya Pasal 18 ayat (3) UU PPh, aturan pelaksananya PMK 172/2023.",m:"perencanaan-pajak.html"},
{id:"der",n:"DER",s:"Debt-to-Equity Ratio",d:"Perbandingan utang terhadap modal. Batas yang diperbolehkan untuk penghitungan PPh adalah 4 : 1 menurut PMK 169/2015; bunga atas kelebihannya dikoreksi secara proporsional.",m:"perencanaan-pajak.html"},
{id:"cfc",n:"CFC",s:"Controlled Foreign Company",d:"Aturan yang menganggap laba badan usaha luar negeri sebagai dividen yang telah diperoleh pemegang saham dalam negeri, meski belum dibagikan. Berlaku pada penyertaan 50% atau lebih.",m:"perencanaan-pajak.html"},
{id:"apa",n:"APA",s:"Advance Pricing Agreement",d:"Kesepakatan tertulis antara wajib pajak dan DJP mengenai penentuan harga transfer di muka, untuk periode tertentu. Dasarnya Pasal 18 ayat (3a) UU PPh.",m:"perencanaan-pajak.html"},
{id:"map",n:"MAP",s:"Mutual Agreement Procedure",d:"Prosedur persetujuan bersama antara otoritas pajak dua negara untuk menyelesaikan sengketa penerapan P3B, termasuk koreksi transfer pricing yang menimbulkan pajak berganda.",m:"perencanaan-pajak.html"},
{id:"tp-doc",n:"TP Doc",s:"Dokumen Penentuan Harga Transfer",d:"Tiga lapis dokumen — Master File, Local File, dan CbCR — yang wajib disiapkan wajib pajak dengan transaksi afiliasi. Harus tersedia paling lama 4 bulan setelah akhir tahun pajak.",m:"perencanaan-pajak.html"},
{id:"cbcr",n:"CbCR",s:"Country-by-Country Report",d:"Laporan alokasi penghasilan, pajak yang dibayar, dan aktivitas usaha per negara. Wajib bagi induk grup dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun.",m:"perencanaan-pajak.html"},
{id:"sp2",n:"SP2",s:"Surat Perintah Pemeriksaan",d:"Surat yang menandai dimulainya pemeriksaan. Setelah SP2 terbit, wajib pajak tidak lagi dapat melakukan pembetulan SPT atas kemauan sendiri.",m:"kup.html"},
{id:"sphp",n:"SPHP",s:"Surat Pemberitahuan Hasil Pemeriksaan",d:"Surat yang memuat temuan pemeriksa. Batas akhir wajib pajak dapat mengungkapkan ketidakbenaran pengisian SPT; setelahnya tinggal menunggu surat ketetapan.",m:"kup.html"},
{id:"skpkb",n:"SKPKB",s:"Surat Ketetapan Pajak Kurang Bayar",d:"Ketetapan yang menyatakan adanya kekurangan pembayaran pajak beserta sanksinya. Dapat dilawan dengan keberatan, lalu banding.",m:"kup.html"},
{id:"stp",n:"STP",s:"Surat Tagihan Pajak",d:"Surat untuk menagih pajak dan/atau sanksi administrasi. Kekuatan hukumnya sama dengan surat ketetapan untuk penagihan, tetapi dilawan dengan gugatan, bukan keberatan.",m:"kup.html"},
{id:"ter",n:"TER",s:"Tarif Efektif Rata-rata",d:"Tarif yang dikalikan langsung ke penghasilan bruto bulanan untuk memotong PPh 21 masa Januari–November. Perhitungan setahun penuh tetap dilakukan pada masa Desember.",m:"pph-op.html"},
{id:"ptkp",n:"PTKP",s:"Penghasilan Tidak Kena Pajak",d:"Pengurang penghasilan neto orang pribadi: Rp54 juta untuk diri sendiri, tambahan Rp4,5 juta bila kawin, dan Rp4,5 juta per tanggungan maksimal tiga orang.",m:"pph-op.html"},
{id:"pkp-penghasilan",n:"PKP (Penghasilan Kena Pajak)",s:"Dasar pengenaan PPh",d:"Penghasilan neto setelah dikurangi PTKP untuk orang pribadi, atau penghasilan neto fiskal setelah kompensasi kerugian untuk badan. Jangan tertukar dengan Pengusaha Kena Pajak.",m:"pph-op.html"},
{id:"pkp-pengusaha",n:"PKP (Pengusaha Kena Pajak)",s:"Status dalam PPN",d:"Pengusaha yang dikukuhkan untuk memungut PPN. Wajib bagi yang peredaran brutonya melebihi Rp4,8 miliar setahun, dilaporkan paling lambat akhir bulan berikutnya.",m:"ppn.html"},
{id:"dpp",n:"DPP",s:"Dasar Pengenaan Pajak",d:"Nilai yang dikalikan tarif. Untuk PPN barang non-mewah saat ini memakai nilai lain sebesar 11/12 dari harga jual, sehingga beban efektifnya 11%.",m:"ppn.html"},
{id:"pk-pm",n:"PK − PM",s:"Pajak Keluaran dikurangi Pajak Masukan",d:"Rumus dasar PPN yang harus disetor. PK lebih besar berarti kurang bayar; PM lebih besar berarti lebih bayar yang dapat dikompensasikan atau direstitusi.",m:"ppn.html"},
{id:"njoptkp",n:"NJOPTKP",s:"Nilai Jual Objek Pajak Tidak Kena Pajak",d:"Pengurang dalam penghitungan PBB-P2, paling sedikit Rp10 juta per wajib pajak. Sering terlewat di soal hitungan.",m:"pdrd.html"},
{id:"npoptkp",n:"NPOPTKP",s:"Nilai Perolehan Objek Pajak Tidak Kena Pajak",d:"Pengurang dalam penghitungan BPHTB, paling sedikit Rp80 juta; untuk waris dan hibah wasiat paling sedikit Rp300 juta.",m:"pdrd.html"},
{id:"pbjt",n:"PBJT",s:"Pajak Barang dan Jasa Tertentu",d:"Pajak kabupaten/kota hasil peleburan pajak hotel, restoran, hiburan, parkir, dan penerangan jalan. Tarif umum maksimal 10%; hiburan tertentu 40%–75%.",m:"pdrd.html"},
{id:"mblb",n:"MBLB",s:"Mineral Bukan Logam dan Batuan",d:"Objek pajak kabupaten/kota atas pengambilan bahan galian seperti pasir, batu, dan tanah urug. Tarif maksimal 20%, dengan opsen 25% untuk provinsi.",m:"pdrd.html"},
{id:"opsen",n:"Opsen",s:"Pungutan tambahan atas pajak daerah lain",d:"Menggantikan mekanisme bagi hasil. Kabupaten/kota memungut opsen PKB dan BBNKB 66%; provinsi memungut opsen Pajak MBLB 25%. Bukan kenaikan beban, melainkan realokasi kewenangan.",m:"pdrd.html"},
{id:"p3b",n:"P3B",s:"Persetujuan Penghindaran Pajak Berganda",d:"Perjanjian bilateral yang membagi hak pemajakan antara dua negara. Tarifnya menggantikan tarif domestik PPh 26 sebesar 20%, dengan syarat penerima menyerahkan SKD.",m:"potput.html"},
{id:"skd",n:"SKD",s:"Surat Keterangan Domisili",d:"Dokumen (form DGT) yang membuktikan penerima penghasilan adalah penduduk negara mitra P3B. Tanpa SKD, tarif kembali ke 20%.",m:"potput.html"},
{id:"beneficial-owner",n:"Beneficial owner",s:"Pemilik manfaat sebenarnya",d:"Uji untuk memastikan penerima penghasilan benar-benar menikmati manfaat ekonomisnya, bukan sekadar perantara. Dipakai untuk mencegah treaty shopping.",m:"potput.html"},
{id:"koreksi-fiskal",n:"Koreksi fiskal",s:"Penyesuaian laba komersial ke laba fiskal",d:"Koreksi positif menaikkan PKP (biaya yang ditolak); koreksi negatif menurunkan PKP (penghasilan final atau bukan objek).",m:"akuntansi-pajak.html"},
{id:"beda-temporer",n:"Beda temporer",s:"Perbedaan waktu pengakuan",d:"Perbedaan yang akan terbalik di periode berikutnya, sehingga menimbulkan aset atau liabilitas pajak tangguhan. Berbeda dengan beda tetap yang tidak pernah bertemu.",m:"akuntansi-pajak.html"},
{id:"coretax",n:"Coretax",s:"Sistem Inti Administrasi Perpajakan",d:"Portal tunggal DJP untuk pendaftaran, pembayaran, pelaporan, faktur, dan pengiriman surat. Dasar pelaksanaannya PMK 81/2024.",m:"kup.html"},
{id:"self-assessment",n:"Self assessment",s:"Menghitung sendiri",d:"Sistem di mana wajib pajak menghitung, menyetor, dan melaporkan sendiri pajaknya. DJP berperan mengawasi dan menguji kepatuhan melalui pemeriksaan.",m:"kup.html"},
{id:"gross-up",n:"Gross up",s:"Menaikkan dasar agar penerima menerima bersih",d:"Teknik menghitung tunjangan pajak sehingga penghasilan yang diterima karyawan sesudah dipotong PPh sama dengan angka yang dijanjikan. Tunjangan pajaknya menjadi objek PPh 21 dan boleh dibiayakan.",m:"pph-op.html"}
];
