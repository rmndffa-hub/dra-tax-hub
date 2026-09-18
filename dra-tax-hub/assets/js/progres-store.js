/* Penyimpan progres belajar — seluruhnya di browser pemakai (localStorage).
   Tidak ada data yang dikirim ke mana pun. */
window.DRA_STORE = (function () {
  var KEY = "dra-progres-v1";

  function blank() { return { v: 1, modul: {}, runs: [] }; }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var d = JSON.parse(raw);
      if (!d || typeof d !== "object") return blank();
      d.modul = d.modul || {};
      d.runs = d.runs || [];
      return d;
    } catch (e) { return blank(); }
  }

  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
    return d;
  }

  return {
    load: load,
    save: save,
    toggleModul: function (slug) {
      var d = load();
      if (d.modul[slug]) delete d.modul[slug]; else d.modul[slug] = Date.now();
      return save(d);
    },
    addRun: function (run) {
      var d = load();
      run.ts = Date.now();
      d.runs.push(run);
      if (d.runs.length > 100) d.runs = d.runs.slice(-100);
      return save(d);
    },
    reset: function () { return save(blank()); },
    /* akurasi per topik dari seluruh riwayat */
    perTopik: function () {
      var d = load(), out = {};
      d.runs.forEach(function (r) {
        Object.keys(r.topik || {}).forEach(function (t) {
          var s = r.topik[t];
          if (!out[t]) out[t] = { r: 0, w: 0, s: 0 };
          out[t].r += s.r || 0; out[t].w += s.w || 0; out[t].s += s.s || 0;
        });
      });
      return out;
    }
  };
})();
