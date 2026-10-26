/* ==========================================================================
   DiffPsy Lernapp – App-Logik (vanilla JS, keine Abhängigkeiten, kein Build-Schritt)
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.APP_DATA;
  var STORAGE_KEY = "diffpsy_state_v1";

  /* ---------------- Storage (robust, mit Fallback) ---------------- */
  var memoryFallback = null;

  function safeLocalStorageAvailable() {
    try {
      var k = "__diffpsy_test__";
      window.localStorage.setItem(k, "1");
      window.localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  }
  var HAS_LS = safeLocalStorageAvailable();

  function defaultState() {
    return {
      xp: 0,
      streak: 0,
      lastActiveDate: null,
      cardBoxes: {},      // termKey -> 0..3
      examHistory: [],    // {date, score, total, pct}
      examSeen: {}        // questionId -> last self-assessment
    };
  }

  function loadState() {
    var raw = null;
    if (HAS_LS) {
      try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (e) { raw = null; }
    } else if (memoryFallback) {
      raw = memoryFallback;
    }
    if (!raw) return defaultState();
    try {
      var parsed = JSON.parse(raw);
      var base = defaultState();
      for (var k in base) { if (!(k in parsed)) parsed[k] = base[k]; }
      return parsed;
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    var raw = JSON.stringify(STATE);
    if (HAS_LS) {
      try { window.localStorage.setItem(STORAGE_KEY, raw); } catch (e) { memoryFallback = raw; }
    } else {
      memoryFallback = raw;
    }
  }

  var STATE = loadState();

  /* ---------------- Streak-Logik ---------------- */
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function daysBetween(a, b) {
    var ta = new Date(a).getTime();
    var tb = new Date(b).getTime();
    return Math.round((tb - ta) / 86400000);
  }
  function touchStreak() {
    var today = todayStr();
    if (STATE.lastActiveDate === today) return;
    if (STATE.lastActiveDate) {
      var diff = daysBetween(STATE.lastActiveDate, today);
      STATE.streak = (diff === 1) ? (STATE.streak + 1) : 1;
    } else {
      STATE.streak = 1;
    }
    STATE.lastActiveDate = today;
    saveState();
  }
  touchStreak();

  /* ---------------- XP / Toast ---------------- */
  function addXp(amount) {
    STATE.xp += amount;
    saveState();
    renderTopbar();
    showToast("+" + amount + " XP");
  }
  var toastTimer = null;
  function showToast(msg) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1400);
  }

  function renderTopbar() {
    var pill = document.getElementById("streakPill");
    if (pill) pill.textContent = "🔥 " + STATE.streak + "  ·  ⭐ " + STATE.xp;
  }

  /* ---------------- Helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function chapterById(id) {
    for (var i = 0; i < DATA.chapters.length; i++) if (DATA.chapters[i].id === id) return DATA.chapters[i];
    return null;
  }
  function cardKey(chapterId, idx) { return chapterId + "#" + idx; }
  function levelPillClass(level) {
    if (level === "Wissen") return "wissen";
    if (level === "Verstehen") return "verstehen";
    return "transfer";
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function allFlashcards(filterChapter) {
    var out = [];
    DATA.chapters.forEach(function (ch) {
      if (filterChapter && filterChapter !== "all" && ch.id !== filterChapter) return;
      ch.terms.forEach(function (t, idx) {
        out.push({ key: cardKey(ch.id, idx), chapter: ch, term: t.term, def: t.def });
      });
    });
    return out;
  }

  function chapterMastery(ch) {
    var total = ch.terms.length;
    if (total === 0) return 0;
    var known = 0;
    ch.terms.forEach(function (t, idx) {
      var box = STATE.cardBoxes[cardKey(ch.id, idx)] || 0;
      if (box >= 2) known++;
    });
    return Math.round((known / total) * 100);
  }

  /* ---------------- Routing ---------------- */
  function currentRoute() {
    var h = window.location.hash.replace(/^#\/?/, "");
    if (!h) return { name: "dashboard" };
    var parts = h.split("/");
    return { name: parts[0], arg: parts[1] };
  }
  function go(route) {
    window.location.hash = "#/" + route;
  }
  window.addEventListener("hashchange", render);

  document.getElementById("bottomnav").addEventListener("click", function (e) {
    var btn = e.target.closest(".navbtn");
    if (!btn) return;
    go(btn.getAttribute("data-route"));
  });

  function setActiveNav(name) {
    var buttons = document.querySelectorAll(".navbtn");
    buttons.forEach(function (b) {
      var isActive = b.getAttribute("data-route") === name ||
        (name === "lernen-detail" && b.getAttribute("data-route") === "lernen") ||
        (name === "klausur-run" && b.getAttribute("data-route") === "klausur") ||
        (name === "klausur-result" && b.getAttribute("data-route") === "klausur");
      b.classList.toggle("active", isActive);
    });
  }

  /* ================= VIEW: Dashboard ================= */
  function viewDashboard() {
    var totalTerms = 0, knownTerms = 0;
    DATA.chapters.forEach(function (ch) {
      totalTerms += ch.terms.length;
      ch.terms.forEach(function (t, idx) {
        if ((STATE.cardBoxes[cardKey(ch.id, idx)] || 0) >= 2) knownTerms++;
      });
    });
    var overallPct = totalTerms ? Math.round((knownTerms / totalTerms) * 100) : 0;
    var examCount = STATE.examHistory.length;
    var lastExamPct = examCount ? STATE.examHistory[examCount - 1].pct : null;

    var html = "";
    html += '<div class="section-title">Dein Stand</div>';
    html += '<div class="stat-grid">';
    html += statBox(STATE.streak, "Tage-Streak 🔥");
    html += statBox(STATE.xp, "XP ⭐");
    html += statBox(overallPct + "%", "Begriffe gemeistert");
    html += statBox(lastExamPct !== null ? lastExamPct + "%" : "–", "letzte Probeklausur");
    html += '</div>';

    html += '<div class="card">';
    html += '<div class="section-title" style="font-size:1.05rem;margin-bottom:8px;">Kapitel-Fortschritt</div>';
    DATA.chapters.forEach(function (ch) {
      var pct = chapterMastery(ch);
      html += '<div class="chapter-row">';
      html += '<span class="chapter-dot" style="background:' + ch.color + '"></span>';
      html += '<div class="chapter-row-text"><div class="title">' + esc(ch.nr) + ' · ' + esc(ch.title) + '</div><div class="pages">' + esc(ch.pages) + '</div></div>';
      html += '<div class="chapter-pct">' + pct + '%</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '<div class="card coverage-note">';
    html += '<strong>Abdeckung (Stand ' + esc(DATA.meta.lastUpdate) + '):</strong> ' + esc(DATA.meta.coverage) + '<br>';
    html += '<em>' + esc(DATA.meta.notCovered) + '</em>';
    html += '</div>';

    html += '<div class="btn-row">';
    html += '<button class="btn" data-go="karteikarten">🃏 Karteikarten üben</button>';
    html += '<button class="btn secondary" data-go="klausur">📝 Probeklausur starten</button>';
    html += '</div>';

    app().innerHTML = html;
    app().querySelectorAll("[data-go]").forEach(function (b) {
      b.addEventListener("click", function () { go(b.getAttribute("data-go")); });
    });
  }
  function statBox(num, label) {
    return '<div class="stat-box"><div class="num">' + esc(num) + '</div><div class="label">' + esc(label) + '</div></div>';
  }

  /* ================= VIEW: Lernen (Liste) ================= */
  function viewLernenList() {
    var html = '<div class="section-title">Lernen – nach Kapitel</div>';
    DATA.chapters.forEach(function (ch) {
      var pct = chapterMastery(ch);
      html += '<div class="card chapter-card" data-ch="' + esc(ch.id) + '">';
      html += '<div class="chapter-badge" style="background:' + ch.color + '">' + esc(ch.nr) + '</div>';
      html += '<div class="chapter-card-text"><div class="title">' + esc(ch.title) + '</div><div class="pages">' + esc(ch.pages) + ' · ' + pct + '% gemeistert</div></div>';
      html += '<div class="chev">›</div>';
      html += '</div>';
    });
    app().innerHTML = html;
    app().querySelectorAll("[data-ch]").forEach(function (c) {
      c.addEventListener("click", function () { go("lernen/" + c.getAttribute("data-ch")); });
    });
  }

  /* ================= VIEW: Lernen (Detail) ================= */
  function renderKernmodell(km) {
    if (!km) return "";
    var html = '<div class="card"><div class="section-title" style="font-size:1.05rem;">' + esc(km.titel) + '</div>';
    if (km.typ === "tabelle") {
      html += '<table class="model-table"><thead><tr>';
      km.spalten.forEach(function (s) { html += "<th>" + esc(s) + "</th>"; });
      html += "</tr></thead><tbody>";
      km.zeilen.forEach(function (row) {
        html += "<tr>";
        row.forEach(function (c) { html += "<td>" + esc(c) + "</td>"; });
        html += "</tr>";
      });
      html += "</tbody></table>";
    } else if (km.typ === "hierarchie") {
      km.ebenen.forEach(function (e, i) {
        html += '<div class="hierarchy-step">' + esc(e) + '</div>';
        if (i < km.ebenen.length - 1) html += '<div class="hierarchy-arrow">↓</div>';
      });
      if (km.hinweis) html += '<p class="sub">' + esc(km.hinweis) + '</p>';
    } else if (km.typ === "kette") {
      html += '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">';
      km.schritte.forEach(function (s, i) {
        html += '<span class="pill wissen" style="font-size:0.85rem;padding:8px 14px;">' + esc(s) + '</span>';
        if (i < km.schritte.length - 1) html += '<span class="sub">→</span>';
      });
      html += '</div>';
      if (km.hinweis) html += '<p class="sub" style="margin-top:10px;">' + esc(km.hinweis) + '</p>';
    } else if (km.typ === "timeline") {
      km.events.forEach(function (ev) {
        html += '<div class="timeline-item"><div class="timeline-year">' + esc(ev[0]) + '</div><div class="timeline-body"><span class="who">' + esc(ev[1]) + '</span> — ' + esc(ev[2]) + '</div></div>';
      });
    } else if (km.typ === "formeln") {
      km.formeln.forEach(function (f) {
        html += '<div class="hierarchy-step"><strong>' + esc(f[0]) + ':</strong> ' + esc(f[1]) + '</div>';
      });
    }
    html += "</div>";
    return html;
  }

  function viewLernenDetail(chId) {
    var ch = chapterById(chId);
    if (!ch) { go("lernen"); return; }
    var html = "";
    html += '<div class="back-link" id="backBtn">‹ Alle Kapitel</div>';
    html += '<div class="section-title" style="color:' + ch.color + '">' + esc(ch.nr) + ' · ' + esc(ch.title) + '</div>';
    html += '<p class="sub">' + esc(ch.pages) + '</p>';

    html += renderKernmodell(ch.kernmodell);

    html += '<div class="card"><div class="section-title" style="font-size:1.05rem;">Kernbegriffe</div>';
    ch.terms.forEach(function (t) {
      html += '<div class="term-item"><div class="term">' + esc(t.term) + '</div><div class="def">' + esc(t.def) + '</div></div>';
    });
    html += "</div>";

    html += '<div class="card"><div class="section-title" style="font-size:1.05rem;">Leitfragen für die Vorlesung</div>';
    ch.leitfragen.forEach(function (lf) {
      html += '<div class="leitfrage">' + esc(lf) + '</div>';
    });
    html += "</div>";

    html += '<button class="btn" id="toCardsBtn">🃏 Karteikarten zu diesem Kapitel</button>';

    app().innerHTML = html;
    document.getElementById("backBtn").addEventListener("click", function () { go("lernen"); });
    document.getElementById("toCardsBtn").addEventListener("click", function () { go("karteikarten/" + ch.id); });
  }

  /* ================= VIEW: Karteikarten ================= */
  var fcSession = null; // {queue:[], idx:0, chapterId, correct:0}

  function startFcSession(chapterId) {
    var cards = shuffle(allFlashcards(chapterId || "all"));
    fcSession = { queue: cards, idx: 0, chapterId: chapterId || "all", correct: 0, flipped: false };
  }

  function viewKarteikarten(chapterId) {
    if (!fcSession || fcSession.chapterId !== (chapterId || "all")) {
      startFcSession(chapterId);
    }
    renderFcSession();
  }

  function renderFcSession() {
    var html = "";
    html += '<div class="section-title">Karteikarten</div>';

    if (!fcSession.chapterId || fcSession.chapterId === "all") {
      html += '<div class="btn-row" style="margin-bottom:10px;">';
      DATA.chapters.forEach(function (ch) {
        html += '<button class="btn secondary" data-filter="' + esc(ch.id) + '" style="flex:0 0 auto;width:auto;padding:8px 14px;font-size:0.8rem;">' + esc(ch.nr) + '</button>';
      });
      html += '</div>';
    } else {
      var ch = chapterById(fcSession.chapterId);
      html += '<div class="back-link" id="fcAllBtn">‹ Alle Karten (' + (ch ? esc(ch.nr) : "") + ' zurücksetzen)</div>';
    }

    if (fcSession.queue.length === 0) {
      html += '<div class="empty-state">Keine Karten für diese Auswahl verfügbar.</div>';
      app().innerHTML = html;
      bindFcFilterButtons();
      return;
    }

    if (fcSession.idx >= fcSession.queue.length) {
      html += '<div class="card result-hero">';
      html += '<div class="big">🎉</div>';
      html += '<p>Runde geschafft! ' + fcSession.correct + ' / ' + fcSession.queue.length + ' gewusst.</p>';
      html += '<button class="btn" id="fcRestart">Neue Runde mischen</button>';
      html += '</div>';
      app().innerHTML = html;
      document.getElementById("fcRestart").addEventListener("click", function () {
        startFcSession(fcSession.chapterId);
        renderFcSession();
      });
      bindFcFilterButtons();
      return;
    }

    var card = fcSession.queue[fcSession.idx];
    html += '<div class="fc-progress">Karte ' + (fcSession.idx + 1) + ' / ' + fcSession.queue.length + ' · ' + esc(card.chapter.nr) + '</div>';
    html += '<div class="flashcard-wrap">';
    html += '<div class="flashcard' + (fcSession.flipped ? " flipped" : "") + '" id="fcCard">';
    html += '<div class="fc-label">' + (fcSession.flipped ? "Antwort" : "Begriff") + '</div>';
    html += '<div class="fc-content">' + esc(fcSession.flipped ? card.def : card.term) + '</div>';
    if (!fcSession.flipped) html += '<div class="fc-hint">Tippen zum Umdrehen</div>';
    html += '</div>';
    html += '</div>';

    if (fcSession.flipped) {
      html += '<div class="btn-row">';
      html += '<button class="btn bad" id="fcAgain">🔁 Nochmal</button>';
      html += '<button class="btn good" id="fcKnow">✅ Gewusst</button>';
      html += '</div>';
    }

    app().innerHTML = html;
    bindFcFilterButtons();

    var cardEl = document.getElementById("fcCard");
    if (cardEl) cardEl.addEventListener("click", function () {
      fcSession.flipped = !fcSession.flipped;
      renderFcSession();
    });
    var again = document.getElementById("fcAgain");
    if (again) again.addEventListener("click", function () { answerCard(card, false); });
    var know = document.getElementById("fcKnow");
    if (know) know.addEventListener("click", function () { answerCard(card, true); });
    var allBtn = document.getElementById("fcAllBtn");
    if (allBtn) allBtn.addEventListener("click", function () { go("karteikarten"); });
  }

  function bindFcFilterButtons() {
    app().querySelectorAll("[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () { go("karteikarten/" + b.getAttribute("data-filter")); });
    });
  }

  function answerCard(card, known) {
    var box = STATE.cardBoxes[card.key] || 0;
    box = known ? Math.min(3, box + 1) : 0;
    STATE.cardBoxes[card.key] = box;
    saveState();
    if (known) { fcSession.correct++; addXp(2); }
    touchStreak();
    fcSession.idx++;
    fcSession.flipped = false;
    renderFcSession();
  }

  /* ================= VIEW: Probeklausur ================= */
  var examSession = null; // {queue:[], idx:0, revealed:false, results:[{q, verdict}]}

  function viewKlausurSetup() {
    var html = "";
    html += '<div class="section-title">Probeklausur</div>';
    html += '<p class="sub">Die echte Klausur ist reine Freitext-Prüfung (90 Min., ~30 Fragen, keine Multiple-Choice, Bestehensgrenze 45/90 Punkte). Diese Simulation funktioniert genauso: Antwort selbst aufschreiben, dann mit der Musterantwort vergleichen.</p>';

    html += '<div class="card">';
    html += '<div class="section-title" style="font-size:1rem;">Umfang wählen</div>';
    html += '<div class="btn-row">';
    html += '<button class="btn secondary" data-n="10">10 Fragen</button>';
    html += '<button class="btn secondary" data-n="20">20 Fragen</button>';
    html += '<button class="btn secondary" data-n="all">Alle (' + DATA.questions.length + ')</button>';
    html += '</div>';
    html += '</div>';

    if (STATE.examHistory.length) {
      html += '<div class="card"><div class="section-title" style="font-size:1rem;">Letzte Ergebnisse</div>';
      STATE.examHistory.slice(-5).reverse().forEach(function (h) {
        html += '<div class="chapter-row"><div class="chapter-row-text"><div class="title">' + esc(h.date) + '</div><div class="pages">' + h.score + ' / ' + h.total + ' Punkte</div></div><div class="chapter-pct">' + h.pct + '%</div></div>';
      });
      html += '</div>';
    }

    app().innerHTML = html;
    app().querySelectorAll("[data-n]").forEach(function (b) {
      b.addEventListener("click", function () { startExam(b.getAttribute("data-n")); });
    });
  }

  function startExam(n) {
    var pool = shuffle(DATA.questions);
    var count = (n === "all") ? pool.length : Math.min(parseInt(n, 10), pool.length);
    examSession = { queue: pool.slice(0, count), idx: 0, revealed: false, results: [] };
    go("klausur-run");
  }

  function viewKlausurRun() {
    if (!examSession) { go("klausur"); return; }
    if (examSession.idx >= examSession.queue.length) {
      finishExam();
      return;
    }
    var q = examSession.queue[examSession.idx];
    var html = "";
    html += '<div class="fc-progress">Frage ' + (examSession.idx + 1) + ' / ' + examSession.queue.length + '</div>';
    html += '<div class="card exam-q-card">';
    html += '<div class="qmeta"><span class="pill ' + levelPillClass(q.level) + '">' + esc(q.level) + '</span><span class="sub">' + esc(chapterById(q.chapter) ? chapterById(q.chapter).nr : "") + '</span></div>';
    html += '<p style="font-weight:600;">' + esc(q.q) + '</p>';
    html += '<textarea id="examAnswer" placeholder="Deine Antwort (Freitext) …"></textarea>';

    if (!examSession.revealed) {
      html += '<button class="btn secondary" id="revealBtn" style="margin-top:12px;">Musterantwort anzeigen</button>';
    } else {
      html += '<div class="model-answer"><div class="lbl">Musterantwort</div>' + esc(q.a) + '</div>';
      html += '<div class="btn-row" style="margin-top:12px;">';
      html += '<button class="btn bad" data-verdict="falsch">❌ Falsch</button>';
      html += '<button class="btn secondary" data-verdict="teilweise" style="background:var(--warn);color:#2a1d00;">➗ Teilweise</button>';
      html += '<button class="btn good" data-verdict="richtig">✅ Richtig</button>';
      html += '</div>';
    }
    html += '</div>';

    app().innerHTML = html;

    var reveal = document.getElementById("revealBtn");
    if (reveal) reveal.addEventListener("click", function () {
      examSession.revealed = true;
      renderCurrentApp();
    });
    app().querySelectorAll("[data-verdict]").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.getAttribute("data-verdict");
        var score = v === "richtig" ? 1 : (v === "teilweise" ? 0.5 : 0);
        examSession.results.push({ id: q.id, verdict: v, score: score });
        examSession.idx++;
        examSession.revealed = false;
        renderCurrentApp();
      });
    });
  }

  function finishExam() {
    var total = examSession.results.length;
    var scoreSum = examSession.results.reduce(function (s, r) { return s + r.score; }, 0);
    var pct = total ? Math.round((scoreSum / total) * 100) : 0;
    var scaled90 = Math.round((scoreSum / total) * 90);

    var d = new Date();
    var dateStr = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    STATE.examHistory.push({ date: dateStr, score: Math.round(scoreSum * 10) / 10, total: total, pct: pct });
    saveState();
    addXp(Math.round(scoreSum * 3));
    touchStreak();

    var passed = scaled90 >= 45;
    var html = '<div class="card result-hero">';
    html += '<div class="big">' + (passed ? "🏆" : "📈") + '</div>';
    html += '<p style="font-size:1.4rem;font-weight:700;">' + pct + '%</p>';
    html += '<p class="sub">entspricht ca. ' + scaled90 + ' / 90 Punkten – ' + (passed ? "bestanden (≥45)" : "noch unter 45 – weiter dranbleiben!") + '</p>';
    html += '</div>';
    html += '<button class="btn" id="examAgain">Neue Probeklausur</button>';
    app().innerHTML = html;
    document.getElementById("examAgain").addEventListener("click", function () {
      examSession = null;
      go("klausur");
    });
  }

  /* ================= Render-Dispatcher ================= */
  function app() { return document.getElementById("app"); }

  function renderCurrentApp() {
    var r = currentRoute();
    if (r.name === "dashboard") { setActiveNav("dashboard"); viewDashboard(); }
    else if (r.name === "lernen") {
      if (r.arg) { setActiveNav("lernen-detail"); viewLernenDetail(r.arg); }
      else { setActiveNav("lernen"); viewLernenList(); }
    } else if (r.name === "karteikarten") { setActiveNav("karteikarten"); viewKarteikarten(r.arg); }
    else if (r.name === "klausur") { setActiveNav("klausur"); examSession = null; viewKlausurSetup(); }
    else if (r.name === "klausur-run") { setActiveNav("klausur-run"); viewKlausurRun(); }
    else { setActiveNav("dashboard"); viewDashboard(); }
    window.scrollTo(0, 0);
  }
  function render() { renderCurrentApp(); }

  renderTopbar();
  render();
})();
