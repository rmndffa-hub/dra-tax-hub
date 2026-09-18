#!/usr/bin/env node
/**
 * Pengambil umpan berita pajak untuk DRA Tax Hub.
 *
 * Dijalankan otomatis oleh GitHub Actions (lihat .github/workflows/berita.yml)
 * atau manual:  node scripts/fetch-news.mjs
 *
 * Hasilnya ditulis ke assets/data/feed.json.
 * Tanpa dependensi npm sama sekali — hanya fetch dan parser XML sederhana bawaan Node 20+.
 *
 * Yang disimpan hanya judul, tautan, nama penerbit, tanggal, dan cuplikan pendek
 * dari umpan itu sendiri. Isi artikel TIDAK disalin — pembaca diarahkan ke sumber aslinya.
 */

import { writeFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "assets", "data", "feed.json");

/* ------------------------------------------------------------------ */
/* Daftar sumber                                                       */
/* ------------------------------------------------------------------ */
/* sub: subtema lomba yang paling relevan (1–4), boleh null.
   Sumber yang mati tidak menggagalkan proses — statusnya dilaporkan di feed.json
   dan di log GitHub Actions, jadi kamu bisa mencoret atau menggantinya. */

const gnews = (q, opts = {}) => {
  const lang = opts.en ? "hl=en-US&gl=US&ceid=US:en" : "hl=id&gl=ID&ceid=ID:id";
  return `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&${lang}`;
};

const SOURCES = [
  // --- Google News: satu umpan menarik dari banyak media sekaligus ---
  { name: "Google News · PMK & aturan pajak", url: gnews("PMK pajak OR \"peraturan menteri keuangan\" pajak when:14d"), sub: null },
  { name: "Google News · Coretax", url: gnews("Coretax OR \"sistem inti administrasi perpajakan\" when:14d"), sub: 4 },
  { name: "Google News · DJP", url: gnews("\"Direktorat Jenderal Pajak\" when:7d"), sub: null },
  { name: "Google News · Insentif pajak", url: gnews("\"insentif pajak\" OR \"tax holiday\" OR \"tax allowance\" Indonesia when:14d"), sub: 1 },
  { name: "Google News · Windfall tax", url: gnews("\"windfall tax\" OR \"windfall profit\" pajak when:30d"), sub: 2 },
  { name: "Google News · Pajak karbon", url: gnews("\"pajak karbon\" OR \"carbon tax\" OR CBAM Indonesia when:30d"), sub: 3 },
  { name: "Google News · Pajak minimum global", url: gnews("\"pajak minimum global\" OR \"global minimum tax\" OR \"Pillar Two\" Indonesia when:30d"), sub: 1 },
  { name: "Google News · Transfer pricing", url: gnews("\"transfer pricing\" OR \"harga transfer\" pajak Indonesia when:30d"), sub: null },
  { name: "Google News · OECD tax (EN)", url: gnews("OECD tax \"Pillar Two\" OR \"carbon pricing\" when:30d", { en: true }), sub: 3 },

  // --- Umpan langsung dari situs perpajakan ---
  // Belum semuanya dipastikan menyediakan RSS. Yang gagal akan dilaporkan statusnya,
  // tinggal dihapus dari daftar ini kalau ternyata memang tidak ada.
  { name: "DJP — pajak.go.id", url: "https://www.pajak.go.id/rss.xml", sub: null, optional: true },
  { name: "DDTCNews", url: "https://news.ddtc.co.id/rss.xml", sub: null, optional: true },
  { name: "Pajakku", url: "https://artikel.pajakku.com/rss.xml", sub: null, optional: true },
  { name: "MUC Consulting", url: "https://muc.co.id/rss", sub: null, optional: true },
  { name: "Ortax", url: "https://ortax.org/rss", sub: null, optional: true },
  { name: "JDIH Kemenkeu", url: "https://jdih.kemenkeu.go.id/rss", sub: null, optional: true },
];

/* Kata kunci penyaring — item tanpa salah satu kata ini dibuang,
   supaya umpan tidak kemasukan berita yang tidak ada hubungannya. */
const KATA_KUNCI = [
  "pajak", "perpajakan", "pph", "ppn", "djp", "coretax", "kemenkeu", "fiskal",
  "cukai", "bea", "retribusi", "tarif", "insentif", "karbon", "carbon", "tax",
  "pmk", "wajib pajak", "penerimaan negara", "apbn", "oecd", "cbam"
];

const MAKS_ITEM = 80;         // simpan sekian item terbaru
const MAKS_UMUR_HARI = 45;    // buang yang lebih tua dari ini

/* ------------------------------------------------------------------ */
/* Parser XML sederhana (RSS 2.0 dan Atom)                             */
/* ------------------------------------------------------------------ */

function decode(s = "") {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&amp;/g, "&")
    .trim();
}

function stripTags(s = "") {
  return decode(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decode(m[1]) : "";
}

function parseFeed(xml) {
  const items = [];

  // RSS 2.0
  const rss = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  for (const b of rss) {
    items.push({
      title: stripTags(tag(b, "title")),
      link: (tag(b, "link") || "").trim(),
      date: tag(b, "pubDate") || tag(b, "dc:date"),
      snippet: stripTags(tag(b, "description")).slice(0, 260),
      origin: stripTags(tag(b, "source")),
    });
  }
  if (items.length) return items;

  // Atom
  const atom = xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  for (const b of atom) {
    const href = b.match(/<link[^>]*href="([^"]+)"/i);
    items.push({
      title: stripTags(tag(b, "title")),
      link: href ? decode(href[1]) : "",
      date: tag(b, "updated") || tag(b, "published"),
      snippet: stripTags(tag(b, "summary") || tag(b, "content")).slice(0, 260),
      origin: "",
    });
  }
  return items;
}

/* Google News membungkus judul sebagai "Judul - Nama Media" */
function pisahPenerbit(item, namaSumber) {
  if (item.origin) return { title: item.title, publisher: item.origin };
  const m = item.title.match(/^(.*) - ([^-]{2,40})$/);
  if (m && namaSumber.startsWith("Google News")) return { title: m[1].trim(), publisher: m[2].trim() };
  return { title: item.title, publisher: namaSumber.replace(/^Google News · /, "") };
}

/* ------------------------------------------------------------------ */
/* Pengambilan                                                         */
/* ------------------------------------------------------------------ */

async function ambil(src) {
  const mulai = Date.now();
  try {
    const res = await fetch(src.url, {
      headers: {
        "user-agent": "DRA-Tax-Hub/1.0 (+situs belajar pajak; pengumpul judul berita)",
        accept: "application/rss+xml, application/atom+xml, application/xml, text/xml, */*",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const xml = await res.text();
    const items = parseFeed(xml);
    if (!items.length) throw new Error("tidak ada item (mungkin bukan umpan RSS)");
    return { ok: true, items, ms: Date.now() - mulai };
  } catch (e) {
    return { ok: false, items: [], error: String(e.message || e), ms: Date.now() - mulai };
  }
}

function tanggalISO(s) {
  const d = new Date(s);
  return isNaN(d) ? null : d.toISOString();
}

function relevan(item) {
  const t = (item.title + " " + item.snippet).toLowerCase();
  return KATA_KUNCI.some((k) => t.includes(k));
}

function kunciDedupe(item) {
  return (item.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 70);
}

async function main() {
  console.log("Mengambil " + SOURCES.length + " sumber…\n");

  const hasil = await Promise.all(SOURCES.map(ambil));
  const laporan = [];
  let semua = [];

  SOURCES.forEach((src, i) => {
    const r = hasil[i];
    const dipakai = [];
    if (r.ok) {
      for (const it of r.items) {
        if (!it.title || !it.link) continue;
        if (!relevan(it)) continue;
        const iso = tanggalISO(it.date);
        if (iso && (Date.now() - new Date(iso)) / 86400000 > MAKS_UMUR_HARI) continue;
        const { title, publisher } = pisahPenerbit(it, src.name);
        dipakai.push({
          t: title,
          u: it.link,
          p: publisher,
          d: iso,
          r: it.snippet && it.snippet !== title ? it.snippet : "",
          sub: src.sub || null,
          src: src.name,
        });
      }
      semua = semua.concat(dipakai);
    }
    laporan.push({
      nama: src.name,
      ok: r.ok,
      jumlah: dipakai.length,
      error: r.error || null,
      ms: r.ms,
    });
    console.log(
      (r.ok ? "  ✓ " : "  ✗ ") + src.name.padEnd(36) +
      (r.ok ? dipakai.length + " item dipakai dari " + r.items.length : "GAGAL: " + r.error)
    );
  });

  // dedupe + urutkan
  const terlihat = new Set();
  const bersih = [];
  for (const it of semua) {
    const k = kunciDedupe(it);
    if (!k || terlihat.has(k)) continue;
    terlihat.add(k);
    bersih.push(it);
  }
  bersih.sort((a, b) => (b.d || "").localeCompare(a.d || ""));
  const akhir = bersih.slice(0, MAKS_ITEM);

  const hidup = laporan.filter((l) => l.ok).length;
  console.log("\n" + hidup + " dari " + SOURCES.length + " sumber hidup · " + akhir.length + " item tersimpan");

  await mkdir(dirname(OUT), { recursive: true });

  let lama = null;
  try { lama = JSON.parse(await readFile(OUT, "utf8")); } catch {}

  if (!akhir.length) {
    // Jangan pernah menimpa data bagus dengan yang kosong.
    if (lama && lama.items && lama.items.length) {
      console.error("\nTidak ada item terkumpul — feed.json lama DIPERTAHANKAN. Periksa daftar sumber di atas.");
      process.exit(1);
    }
    // Belum ada data sama sekali: tulis laporan kosong supaya halaman berita
    // bisa menampilkan status sumber, bukan sekadar error.
    await writeFile(OUT, JSON.stringify({
      diperbarui: new Date().toISOString(), jumlah: 0, sumber: laporan, items: []
    }, null, 1) + "\n", "utf8");
    console.error("\nBelum ada item. Laporan status sumber tetap ditulis.");
    process.exit(1);
  }

  const data = {
    diperbarui: new Date().toISOString(),
    jumlah: akhir.length,
    sumber: laporan,
    items: akhir,
  };

  const samaSaja = lama && JSON.stringify(lama.items) === JSON.stringify(akhir);
  await writeFile(OUT, JSON.stringify(data, null, 1) + "\n", "utf8");
  console.log(samaSaja ? "Isi tidak berubah (hanya stempel waktu)." : "feed.json diperbarui.");
}

main().catch((e) => { console.error(e); process.exit(1); });
