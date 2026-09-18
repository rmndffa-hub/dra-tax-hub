#!/usr/bin/env python3
"""Generator situs statis DRA — Pusat Materi Pajak.
Membaca fragmen HTML di content/ lalu menulis halaman lengkap ke site/.
"""
import os, re, json, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # akar situs
CONTENT = os.path.join(ROOT, "src", "content")
OUT = ROOT

SITE_NAME = "DRA Tax Hub"
TAGLINE = "Tax &amp; Financial Solutions"

NAV = [
    ("link", "index.html", "Beranda"),
    ("link", "materi.html", "Materi"),
    ("group", "Latihan", [
        ("kuis.html", "Latihan Kuis"),
        ("ujian.html", "Mode Ujian"),
        ("bank-soal.html", "Bank Soal"),
        ("progres.html", "Progres Belajar"),
    ]),
    ("group", "Alat", [
        ("kalkulator.html", "Kalkulator Pajak"),
        ("referensi.html", "Aturan & Istilah"),
    ]),
    ("link", "berita.html", "Berita"),
    ("link", "lomba.html", "Info Lomba"),
]

# slug: (judul, deskripsi singkat, halaman induk untuk breadcrumb)
PAGES = [
    ("index.html", "DRA Tax Hub — Pusat Materi Perpajakan Indonesia", "Rangkuman materi pajak Indonesia: KUP, PPh, PPN, bea meterai, PDRD, akuntansi pajak — plus bank soal dan kuis interaktif.", False),
    ("materi.html", "Materi Perpajakan", "Delapan modul inti perpajakan Indonesia, disusun dari logika dasar ke perhitungan.", False),
    ("kup.html", "KUP — Ketentuan Umum & Tata Cara Perpajakan", "Tenggat, sanksi, pemeriksaan, dan upaya hukum: kerangka yang mengikat semua jenis pajak.", True),
    ("pph-badan.html", "PPh Badan", "Tarif 22%, fasilitas Pasal 31E, koreksi fiskal, penyusutan, angsuran PPh 25 dan PPh 29.", True),
    ("pph-op.html", "PPh Orang Pribadi & PPh 21", "PTKP, lapisan tarif Pasal 17, biaya jabatan, TER bulanan, dan skema UMKM 0,5%.", True),
    ("potput.html", "Pemotongan & Pemungutan PPh", "PPh 21, 22, 23, 26, dan PPh Pasal 4 ayat (2) final — siapa memotong apa, berapa tarifnya.", True),
    ("ppn.html", "PPN & PPnBM", "Mekanisme PK–PM, DPP nilai lain 11/12, faktur pajak, pengkreditan, dan PPnBM.", True),
    ("bea-meterai.html", "Bea Meterai", "Objek, tarif Rp10.000, saat terutang, dan sanksi pemeteraian kemudian.", True),
    ("pdrd.html", "Pajak Daerah & Retribusi (UU HKPD)", "Enam pajak provinsi, tujuh pajak kabupaten/kota, tarif default 10%, dan mekanisme opsen.", True),
    ("akuntansi-pajak.html", "Akuntansi Perpajakan", "Beda tetap vs beda temporer, koreksi fiskal, serta aset dan liabilitas pajak tangguhan.", True),
    ("perencanaan-pajak.html", "Perencanaan Pajak", "Tax avoidance vs evasion, Pasal 18 UU PPh, DER 4:1, TP Doc, dan empat tuas perencanaan yang sah.", True),
    ("bank-soal.html", "Bank Soal & Pembahasan", "Kumpulan soal pilihan ganda per topik, lengkap dengan kunci dan alasan jawabannya.", False),
    ("kuis.html", "Latihan Kuis", "Simulasi penyisihan: skor +5 benar, −2 salah, −1 kosong. Pilih topik dan jumlah soal.", False),
    ("ujian.html", "Mode Ujian", "Simulasi penyisihan penuh: semua soal, timer mundur, kunci baru terbuka setelah selesai.", False),
    ("progres.html", "Progres Belajar", "Centang modul yang dikuasai dan pantau akurasi per topik dari riwayat latihan.", False),
    ("kalkulator.html", "Kalkulator Pajak", "PPh 21, PPh Badan & 31E, PPN, DER, serta PKB dan opsen — lengkap dengan langkah hitungannya.", False),
    ("referensi.html", "Aturan & Istilah", "Kamus peraturan perpajakan dan glosarium istilah, bisa dibuka langsung dari halaman materi.", False),
    ("berita.html", "Berita & Isu Terkini", "Perubahan aturan dan isu kebijakan pajak, ditulis singkat dengan sumbernya.", False),
    ("tulis-berita.html", "Tulis Berita Baru", "Editor untuk menambah artikel ke portal berita, menghasilkan file berita.js siap timpa.", False),
    ("lomba.html", "Amazing Tax — Tax Competition UI 2026", "Aturan main, format tiap babak, linimasa, dan strategi skoring.", False),
    ("404.html", "Halaman tidak ditemukan — DRA Tax Hub", "Tautan yang dibuka tidak tersedia di situs ini.", False),
]

MATERI_ORDER = ["kup.html", "pph-badan.html", "pph-op.html", "potput.html", "ppn.html",
                "bea-meterai.html", "pdrd.html", "akuntansi-pajak.html", "perencanaan-pajak.html"]

TEMPLATE = """<!doctype html>
<html lang="id" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<link rel="icon" href="assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<script>try{{var t=localStorage.getItem('dra-theme');if(t)document.documentElement.setAttribute('data-theme',t);}}catch(e){{}}</script>
</head>
<body>

<div class="announce">
  <div class="wrap">
    <span class="pill">Amazing Tax 2026</span>
    <p>Materi ini disusun untuk persiapan Tax Competition UI 2026 — penyisihan 10 Okt, final 6 Nov.</p>
    <a href="lomba.html">Lihat aturan lombanya →</a>
  </div>
</div>

<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="index.html">
      <img src="assets/img/logo-mark.png" alt="Logo DRA Consulting">
      <span class="brand-txt"><b>DRA Tax Hub</b><span>Tax &amp; Financial Solutions</span></span>
    </a>
    <nav class="nav-links" id="navLinks">{nav}</nav>
    <div class="nav-right">
      <button class="search-trigger" id="searchTrigger" aria-label="Cari materi">
        <span class="st-ico" aria-hidden="true">🔍</span><span class="st-label">Cari materi…</span><kbd>Ctrl K</kbd>
      </button>
      <button class="icon-btn" id="themeBtn" aria-label="Ganti tema">☾</button>
      <button class="icon-btn nav-toggle" id="navToggle" aria-label="Buka menu" aria-expanded="false">☰</button>
    </div>
  </div>
</header>

<main>
{body}
</main>

<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="fb-lock">
          <span class="fb-plate"><img src="assets/img/logo-mark.png" alt="Logo DRA Consulting"></span>
          <span class="fb-txt"><b>DRA Consulting</b><span>Tax &amp; Financial Solutions</span></span>
        </div>
        <p>Pusat materi perpajakan Indonesia. Disusun ulang dari catatan belajar agar bisa dibaca siapa saja, gratis.</p>
      </div>
      <div>
        <h5>Materi</h5>
        <a href="kup.html">01 · KUP</a>
        <a href="pph-badan.html">02 · PPh Badan</a>
        <a href="pph-op.html">03 · PPh OP &amp; PPh 21</a>
        <a href="potput.html">04 · Potput PPh</a>
        <a href="ppn.html">05 · PPN &amp; PPnBM</a>
        <a href="bea-meterai.html">06 · Bea Meterai</a>
        <a href="pdrd.html">07 · Pajak Daerah</a>
        <a href="akuntansi-pajak.html">08 · Akuntansi Pajak</a>
        <a href="perencanaan-pajak.html">09 · Perencanaan Pajak</a>
      </div>
      <div>
        <h5>Latihan</h5>
        <a href="kuis.html">Latihan Kuis</a>
        <a href="ujian.html">Mode Ujian</a>
        <a href="bank-soal.html">Bank Soal</a>
        <a href="progres.html">Progres Belajar</a>
      </div>
      <div>
        <h5>Alat &amp; Info</h5>
        <a href="kalkulator.html">Kalkulator Pajak</a>
        <a href="referensi.html">Aturan &amp; Istilah</a>
        <a href="berita.html">Berita</a>
        <a href="tulis-berita.html">Tulis Berita</a>
        <a href="lomba.html">Info Lomba</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 DRA Consulting. Materi untuk keperluan belajar.</span>
      <span>Dasar hukum per September 2026 — selalu cek peraturan terbaru sebelum dipakai untuk pekerjaan nyata.</span>
    </div>
  </div>
</footer>

<div class="modal" id="searchModal" hidden>
  <div class="modal-box" role="dialog" aria-label="Pencarian materi">
    <input id="searchInput" type="search" placeholder="Cari tarif, istilah, atau aturan…" autocomplete="off">
    <div class="results" id="searchResults"></div>
  </div>
</div>

<script src="assets/js/search-index.js"></script>
<script src="assets/js/referensi.js"></script>
<script src="assets/js/progres-store.js"></script>
<script src="assets/js/app.js"></script>
<script src="assets/js/ref.js"></script>
{scripts}
</body>
</html>
"""


def nav_html(current):
    out = []
    for item in NAV:
        if item[0] == "link":
            _, href, label = item
            cls = ' class="active"' if href == current else ""
            out.append(f'<a href="{href}"{cls}>{label}</a>')
        else:
            _, label, kids = item
            active = any(h == current for h, _ in kids)
            kid_html = "".join(
                '<a href="%s"%s>%s</a>' % (h, ' class="active"' if h == current else "", l)
                for h, l in kids
            )
            out.append(
                '<div class="nav-drop">'
                '<button type="button" class="nav-drop-btn%s" aria-expanded="false">%s<span class="caret">▾</span></button>'
                '<div class="nav-drop-menu">%s</div></div>'
                % (" active" if active else "", label, kid_html)
            )
    return "".join(out)


def strip_tags(s):
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def build():
    index = []
    for slug, title, desc, is_materi in PAGES:
        frag_path = os.path.join(CONTENT, slug)
        if not os.path.exists(frag_path):
            print("  ! lewati (belum ada):", slug)
            continue
        with open(frag_path, encoding="utf-8") as f:
            raw = f.read()

        scripts = ""
        m = re.search(r"<!--SCRIPTS-->(.*)$", raw, flags=re.S)
        if m:
            scripts = m.group(1).strip()
            raw = raw[: m.start()]

        nav_hrefs = []
        for item in NAV:
            if item[0] == "link":
                nav_hrefs.append(item[1])
            else:
                nav_hrefs.extend(h for h, _ in item[2])
        if slug in nav_hrefs:
            current = slug
        elif slug == "tulis-berita.html":
            current = "berita.html"
        elif is_materi:
            current = "materi.html"
        else:
            current = ""
        page = TEMPLATE.format(
            title=title, desc=desc, nav=nav_html(current), body=raw.strip(), scripts=scripts
        )
        with open(os.path.join(OUT, slug), "w", encoding="utf-8") as f:
            f.write(page)

        # --- indeks pencarian: halaman + tiap h2/h3 ---
        if slug == "404.html":
            print("  ✓", slug)
            continue
        page_label = title.split("—")[0].strip()
        index.append({"t": title.split("—")[0].strip(), "p": "Halaman", "u": slug, "b": desc})
        for hm in re.finditer(r'<h([23])[^>]*id="([^"]+)"[^>]*>(.*?)</h\1>', raw, flags=re.S | re.I):
            hid, htitle = hm.group(2), strip_tags(hm.group(3))
            after = strip_tags(raw[hm.end(): hm.end() + 1400])
            index.append({"t": htitle, "p": page_label, "u": f"{slug}#{hid}", "b": after[:600]})
        print("  ✓", slug)

    with open(os.path.join(OUT, "assets/js/search-index.js"), "w", encoding="utf-8") as f:
        f.write("window.DRA_INDEX=" + json.dumps(index, ensure_ascii=False) + ";")
    print(f"  ✓ indeks pencarian: {len(index)} entri")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    build()
