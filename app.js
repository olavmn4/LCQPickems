const ELIGIBLE_RAW = `
13
nahhann
2520 elo
167 pts
14
steez
2472 elo
140 pts
15
Aquacorde
2459 elo
138 pts
16
okshey
2547 elo
128 pts
17
woofdoggo_
2509 elo
111 pts
17
Ancoboyy
2342 elo
111 pts
19
ANJOUU
2319 elo
104 pts
20
BadGamer
2465 elo
102 pts
21
pavkin
2500 elo
101 pts
22
v_strid
2350 elo
100 pts
23
nhb_
2395 elo
99 pts
24
vorbhfan3
2492 elo
81 pts
25
meebie
1993 elo
73 pts
26
Pinne
2421 elo
72 pts
26
yjako
2346 elo
72 pts
28
retropog
2405 elo
68 pts
29
Ranik_
2243 elo
66 pts
30
dinonuggieboi
2419 elo
63 pts
31
amariyy
2357 elo
62 pts
32
danterus
2309 elo
57 pts
33
romuxii
2327 elo
56 pts
34
TuCarta
2387 elo
54 pts
34
TUDORULE
2076 elo
54 pts
36
vorbhfan6
2109 elo
53 pts
37
nEmerald
2329 elo
47 pts
37
Erikfzf
2097 elo
47 pts
39
AutomattPLUS
2112 elo
46 pts
40
loodlow
2073 elo
44 pts
41
HDMICables
2288 elo
41 pts
42
MrBudgiee
2160 elo
39 pts
43
kohout135
2323 elo
38 pts
44
MYKEYBOARD
2306 elo
36 pts
45
paukll
2172 elo
34 pts
46
Brunted
2296 elo
32 pts
46
_Hypn0tic
2257 elo
32 pts
46
vorbhfan2
2218 elo
32 pts
49
vorbhfan4
2247 elo
31 pts
50
4antoo
2196 elo
29 pts
50
dandannyboy
2034 elo
29 pts
50
JustAltoid
1942 elo
29 pts
53
SocratesDisciple
2115 elo
27 pts
54
swaggersnagger
2177 elo
26 pts
55
Geegeeboy_25
2204 elo
25 pts
55
iluappi
2130 elo
25 pts
57
thecamo6
2247 elo
24 pts
57
dolqhin
2022 elo
24 pts
57
vorbh
1977 elo
24 pts
60
tookannn
2201 elo
23 pts
60
rekrap2
2121 elo
23 pts
62
darkk575
2200 elo
22 pts
62
ContraVz
2103 elo
22 pts
64
suravil
2013 elo
21 pts
64
paplerr
2013 elo
21 pts
66
JackoWacko62
2261 elo
20 pts
66
a4102545
2203 elo
20 pts
66
Oxidiot
2004 elo
20 pts
69
subdas
2178 elo
19 pts
69
skylewl
2095 elo
19 pts
69
Bloonskiller
2029 elo
19 pts
72
Koereit
2277 elo
17 pts
73
Casssual
2184 elo
16 pts
73
pigswitch
2121 elo
16 pts
73
pandaendoz
2114 elo
16 pts
73
boosterruns
2108 elo
16 pts
73
mukvl
1990 elo
16 pts
78
sevensix_
2133 elo
15 pts
78
hsbi
2131 elo
15 pts
78
21MashedPotatoes
2124 elo
15 pts
81
AstraF
2246 elo
14 pts
81
xFray_
2102 elo
14 pts
81
Frolde
1991 elo
14 pts
81
LEC666888
1798 elo
14 pts
81
cofesho
1787 elo
14 pts
86
wethr
2240 elo
13 pts
86
_KrakerS
2227 elo
13 pts
86
nonsochiamaa
2227 elo
13 pts
86
benemies
2175 elo
13 pts
86
valenmeoww
2139 elo
13 pts
86
fnhvr
2128 elo
13 pts
86
cornflakesmcsr
2008 elo
13 pts
86
Unknwonc
1941 elo
13 pts
94
Bodek
2226 elo
12 pts
94
7astrid
2174 elo
12 pts
94
Bartorino
2160 elo
12 pts
94
Thunderstorming
2158 elo
12 pts
94
Yahiamice
2141 elo
12 pts
94
tommorerow
2139 elo
12 pts
94
vorbhfan
2128 elo
12 pts
94
huhPrince
2127 elo
12 pts
94
Czelco
2109 elo
12 pts
94
yeopgihoney
2035 elo
12 pts
94
Mar1n
1967 elo
12 pts
`;

const STORAGE_KEYS = {
  stats: "mcsr-lcq-s10-stats",
  picks: "mcsr-lcq-s10-current-picks",
  order: "mcsr-lcq-s10-board-order",
  entries: "mcsr-lcq-s10-entries",
  results: "mcsr-lcq-s10-results",
  authorToken: "mcsr-lcq-s10-author-token"
};

const SUBMISSION_DEADLINE = new Date("2026-05-02T16:00:00Z");

const API_ROOT = "https://api.mcsrranked.com/users";
const PHASE_POINT_CUTOFF = 12;
const PICK_LIMIT = 10;
const TOP4_BONUS = 5;
const SUPABASE_URL = "https://vdkvlvnryyntdggfpvmp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZka3Zsdm5yeXludGRnZ2Zwdm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MTk5MTEsImV4cCI6MjA5MzI5NTkxMX0.wgxRB1VcVX32dziZxuJrZ2l3EFF1sD8TLjp9D72B88g";
const SUPABASE_TABLES = {
  entries: "lcq_pickem_entries",
  results: "lcq_pickem_results"
};
const IS_ADMIN = new URLSearchParams(location.search).has("admin");
const ALLOW_PUBLIC_RESULT_UPDATES = IS_ADMIN;
const supabaseClient = SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const state = {
  players: parseEligiblePlayers(),
  picks: loadJson(STORAGE_KEYS.picks, []),
  entries: loadJson(STORAGE_KEYS.entries, []),
  results: loadJson(STORAGE_KEYS.results, []),
  sort: "headstart",
  sortDir: "desc",
  query: ""
};

const els = {
  pickList: document.querySelector("#pickList"),
  entryName: document.querySelector("#entryName"),
  saveEntry: document.querySelector("#saveEntry"),
  clearPicks: document.querySelector("#clearPicks"),
  saveStatus: document.querySelector("#saveStatus"),
  playersTable: document.querySelector("#playersTable"),
  actualResults: document.querySelector("#actualResults"),
  saveResults: document.querySelector("#saveResults"),
  leaderboard: document.querySelector("#leaderboard")
};

if (IS_ADMIN) document.body.classList.add("admin");
hydrateCachedStats();
loadSharedPicks();
wireEvents();
wireTabs();
render();
initRemoteData();
fetchStatsForAll(false);
enforceDeadline();

function parseEligiblePlayers() {
  const lines = ELIGIBLE_RAW.split("\n").map((line) => line.trim()).filter(Boolean);
  const players = [];

  for (let i = 0; i < lines.length; i += 4) {
    players.push({
      seed: Number(lines[i]),
      username: lines[i + 1],
      listedElo: Number(lines[i + 2].split(" ")[0]),
      phasePoints: Number(lines[i + 3].split(" ")[0]),
      headstart: headstartFromPhasePoints(Number(lines[i + 3].split(" ")[0]))
    });
  }

  return players;
}

function hydrateCachedStats() {
  const cached = loadJson(STORAGE_KEYS.stats, {});
  state.players = state.players.map((player) => ({ ...player, ...cached[player.username.toLowerCase()] }));
  state.picks = state.picks.filter((name) => findPlayer(name)).slice(0, PICK_LIMIT);
}

function loadSharedPicks() {
  if (!location.hash.startsWith("#picks=")) return;
  try {
    const payload = JSON.parse(atob(decodeURIComponent(location.hash.replace("#picks=", ""))));
    if (Array.isArray(payload.picks)) {
      state.picks = payload.picks.filter((name) => findPlayer(name)).slice(0, PICK_LIMIT);
      els.entryName.value = payload.name || "";
      saveJson(STORAGE_KEYS.picks, state.picks);
      setStatus("Loaded shared picks.", "toast");
    }
  } catch {
    setStatus("Share link could not be loaded.", "warn");
  }
}

function wireEvents() {
  document.getElementById("modalClose").addEventListener("click", closePicksModal);
  document.getElementById("modalBackdrop").addEventListener("click", closePicksModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePicksModal(); });
  els.saveEntry.addEventListener("click", saveEntry);
  els.clearPicks.addEventListener("click", () => {
    state.picks = [];
    saveJson(STORAGE_KEYS.picks, state.picks);
    render();
  });
  document.querySelectorAll(".th-sort[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.sort === button.dataset.sort) {
        state.sortDir = state.sortDir === "desc" ? "asc" : "desc";
      } else {
        state.sort = button.dataset.sort;
        state.sortDir = defaultSortDir(state.sort);
      }
      renderPlayersTable();
    });
  });
  els.saveResults.addEventListener("click", () => {
    state.results = normalizeNames(els.actualResults.value);
    saveJson(STORAGE_KEYS.results, state.results);
    saveRemoteResults();
    renderLeaderboard();
  });
}

function wireTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.add("hidden"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.remove("hidden");
    });
  });
}

async function fetchStatsForAll(force) {
  const cachedAt = Number(localStorage.getItem(`${STORAGE_KEYS.stats}:time`) || 0);
  const cached = loadJson(STORAGE_KEYS.stats, {});
  if (!force && cachedAt && Object.keys(cached).length >= state.players.length) return;

  const stats = cached;
  const queue = [...state.players];
  const workers = Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const player = queue.shift();
      try {
        const live = await fetchPlayerStats(player.username);
        stats[player.username.toLowerCase()] = live;
        Object.assign(player, live);
      } catch {
        stats[player.username.toLowerCase()] = {
          ...stats[player.username.toLowerCase()],
          loadError: true
        };
      } finally {
        renderPlayersTable();
      }
    }
  });

  await Promise.all(workers);
  saveJson(STORAGE_KEYS.stats, stats);
  localStorage.setItem(`${STORAGE_KEYS.stats}:time`, String(Date.now()));
}

async function fetchPlayerStats(username) {
  const response = await fetch(`${API_ROOT}/${encodeURIComponent(username)}?season=10`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const json = await response.json();
  if (json.status !== "success") throw new Error("API status was not success");

  const data = json.data;
  const season = data.statistics?.season || {};
  const wins = rankedValue(season.wins);
  const loses = rankedValue(season.loses);
  const completions = rankedValue(season.completions);
  const played = rankedValue(season.playedMatches);
  const forfeits = rankedValue(season.forfeits);
  const completionTime = rankedValue(season.completionTime);
  const phasePoints = data.seasonResult?.last?.phasePoint;

  return {
    uuid: data.uuid,
    nickname: data.nickname || username,
    country: data.country || "",
    peakElo: data.seasonResult?.highest,
    liveElo: data.seasonResult?.last?.eloRate ?? data.eloRate,
    liveRank: data.seasonResult?.last?.eloRank ?? data.eloRank,
    seasonPhasePoints: phasePoints,
    headstart: headstartFromPhasePoints(phasePoints),
    wins,
    loses,
    played,
    completions,
    forfeits,
    bestTime: rankedValue(season.bestTime),
    averageCompletion: completions && completionTime ? completionTime / completions : null,
    winRate: typeof wins === "number" && typeof loses === "number" && wins + loses ? wins / (wins + loses) : null,
    completionRate: played && typeof completions === "number" ? completions / played : null,
    forfeitRate: played && typeof forfeits === "number" ? forfeits / played : null,
    loadError: false
  };
}

function rankedValue(metric) {
  if (!metric || typeof metric.ranked !== "number") return null;
  return metric.ranked;
}

function render() {
  els.actualResults.value = state.results.join("\n");
  renderPickList();
  renderPlayersTable();
  renderLeaderboard();
}

function renderPickList() {
  if (!els.pickList) return;
  const limit = getPickLimit();
  els.pickList.innerHTML = "";

  for (let index = 0; index < limit; index += 1) {
    const username = state.picks[index];
    const player = username ? findPlayer(username) : null;
    const row = document.createElement("div");
    row.className = "pick-slot";
    if (username) {
      row.draggable = true;
      row.dataset.player = username;
    }
    row.innerHTML = `
      <span class="slot-rank">#${index + 1}</span>
      <span class="${username ? "slot-player" : "empty-slot"}">${player ? escapeHtml(displayName(player)) : "Open slot"}</span>
      <span class="slot-actions">
        ${username ? `<button class="icon-button" data-action="up" data-index="${index}" type="button" title="Move up">↑</button>` : ""}
        ${username ? `<button class="icon-button" data-action="down" data-index="${index}" type="button" title="Move down">↓</button>` : ""}
        ${username ? `<button class="icon-button" data-action="remove" data-index="${index}" type="button" title="Remove">X</button>` : ""}
      </span>
    `;
    els.pickList.appendChild(row);
  }

  els.pickList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => updatePickOrder(button.dataset.action, Number(button.dataset.index)));
  });
  wirePickDragging();
}

function updatePickOrder(action, index) {
  if (action === "remove") state.picks.splice(index, 1);
  if (action === "up" && index > 0) [state.picks[index - 1], state.picks[index]] = [state.picks[index], state.picks[index - 1]];
  if (action === "down" && index < state.picks.length - 1) [state.picks[index], state.picks[index + 1]] = [state.picks[index + 1], state.picks[index]];
  saveJson(STORAGE_KEYS.picks, state.picks);
  render();
}

function renderPlayersTable() {
  const players = filteredAndSortedPlayers();
  const heat = buildHeatScales(state.players);
  document.querySelectorAll("th").forEach((th) => th.classList.toggle("sorted", th.querySelector(`[data-sort="${state.sort}"]`)));
  els.playersTable.innerHTML = players.map((player) => {
    const pickedIndex = state.picks.indexOf(player.username);
    const isPicked = pickedIndex !== -1;
    return `
    <tr data-player="${escapeHtml(player.username)}" class="${isPicked ? "picked-row" : ""}">
      <td>${isPicked ? `<span class="qual-pill">#${pickedIndex + 1}</span>` : `<button class="button secondary mini-pick" data-player="${escapeHtml(player.username)}" type="button">Pick</button>`}</td>
      <td class="number">${player.seed}</td>
      <td>
        <div class="player-cell">
          ${player.uuid ? `<img class="avatar" alt="" src="https://minotar.net/helm/${escapeHtml(player.uuid.replace(/-/g, ""))}/22">` : ""}
          ${player.country ? `<img class="flag" alt="${escapeHtml(player.country.toUpperCase())}" src="https://flagcdn.com/20x15/${escapeHtml(player.country.toLowerCase())}.png" onerror="this.style.display='none'">` : ""}
          <div class="player-name">${escapeHtml(displayName(player))}</div>
        </div>
      </td>
      <td class="number ${heatClass(player, "headstart", heat)}">${player.headstart ?? 0}</td>
      <td class="number ${heatClass(player, "peakElo", heat)}">${valueOrPending(player.peakElo ?? player.listedElo)}</td>
      <td class="number ${heatClass(player, "liveElo", heat)}">${valueOrPending(player.liveElo)}</td>
      <td class="number ${heatClass(player, "liveRank", heat)}">${valueOrPending(player.liveRank)}</td>
      <td class="number ${heatClass(player, "wins", heat)}">${valueOrPending(player.wins)}</td>
      <td class="number ${heatClass(player, "loses", heat)}">${valueOrPending(player.loses)}</td>
      <td class="number ${heatClass(player, "played", heat)}">${valueOrPending(player.played)}</td>
      <td class="number ${heatClass(player, "winRate", heat)}">${percent(player.winRate)}</td>
      <td class="number ${heatClass(player, "forfeits", heat)}">${valueOrPending(player.forfeits)}</td>
      <td class="number ${heatClass(player, "forfeitRate", heat)}">${percent(player.forfeitRate)}</td>
      <td class="number ${heatClass(player, "bestTime", heat)}">${formatTime(player.bestTime)}</td>
      <td class="number ${heatClass(player, "averageCompletion", heat)}">${formatTime(player.averageCompletion)}</td>
    </tr>
  `;
  }).join("");

  els.playersTable.querySelectorAll("button[data-player]").forEach((button) => {
    button.addEventListener("click", () => addPick(button.dataset.player));
  });
}

function buildHeatScales(players) {
  const metrics = [
    "headstart",
    "peakElo",
    "liveElo",
    "liveRank",
    "wins",
    "loses",
    "played",
    "winRate",
    "forfeits",
    "forfeitRate",
    "bestTime",
    "averageCompletion"
  ];

  return metrics.reduce((scales, metric) => {
    const values = players.map((player) => heatValue(player, metric)).filter((value) => typeof value === "number" && Number.isFinite(value));
    scales[metric] = values.length ? { min: Math.min(...values), max: Math.max(...values) } : null;
    return scales;
  }, {});
}

function heatClass(player, metric, scales) {
  const scale = scales[metric];
  const value = heatValue(player, metric);
  if (!scale || typeof value !== "number" || !Number.isFinite(value) || scale.max === scale.min) return "";

  const lowerIsBetter = ["liveRank", "loses", "forfeits", "forfeitRate", "bestTime", "averageCompletion"].includes(metric);
  const normalized = (value - scale.min) / (scale.max - scale.min);
  const quality = lowerIsBetter ? 1 - normalized : normalized;
  const bucket = Math.max(1, Math.min(5, Math.ceil(quality * 5)));
  return `heat-${bucket}`;
}

function heatValue(player, metric) {
  if (metric === "peakElo") return player.peakElo ?? player.listedElo ?? null;
  return player[metric] ?? null;
}

function filteredAndSortedPlayers() {
  return [...state.players]
    .filter((player) => displayName(player).toLowerCase().includes(state.query))
    .sort((a, b) => comparePlayers(a, b, state.sort, state.sortDir));
}

function wirePickDragging() {
  let draggedName = null;

  els.pickList.querySelectorAll(".pick-slot[draggable='true']").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      draggedName = row.dataset.player;
      row.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedName);
    });

    row.addEventListener("dragend", () => {
      row.classList.remove("dragging");
      draggedName = null;
      els.pickList.querySelectorAll(".drop-target").forEach((target) => target.classList.remove("drop-target"));
    });

    row.addEventListener("dragover", (event) => {
      if (!draggedName || row.dataset.player === draggedName) return;
      event.preventDefault();
      row.classList.add("drop-target");
    });

    row.addEventListener("dragleave", () => row.classList.remove("drop-target"));

    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("drop-target");
      movePickBefore(draggedName, row.dataset.player);
    });
  });
}

function movePickBefore(sourceName, targetName) {
  if (!sourceName || !targetName || sourceName === targetName) return;
  const nextOrder = state.picks.filter((name) => name !== sourceName);
  const targetIndex = nextOrder.indexOf(targetName);
  nextOrder.splice(targetIndex, 0, sourceName);
  state.picks = nextOrder;
  saveJson(STORAGE_KEYS.picks, state.picks);
  render();
}

function metricValue(player, metric) {
  if (metric === "phasePoints") return player.seasonPhasePoints ?? player.phasePoints ?? 0;
  if (metric === "peakElo") return player.peakElo ?? player.listedElo ?? null;
  if (metric === "bestTime") return player.bestTime ?? null;
  if (metric === "averageCompletion") return player.averageCompletion ?? null;
  if (metric === "played") return player.played ?? null;
  return player[metric] ?? null;
}

function addPick(username) {
  if (state.picks.includes(username)) {
    setStatus(`${username} is already picked.`, "warn");
    return;
  }
  if (state.picks.length >= getPickLimit()) {
    setStatus("All slots are full.", "warn");
    return;
  }
  state.picks.push(username);
  saveJson(STORAGE_KEYS.picks, state.picks);
  setStatus(`${username} added.`, "toast");
  render();
}

function getAuthorToken() {
  let token = localStorage.getItem(STORAGE_KEYS.authorToken);
  if (!token) {
    token = crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`;
    localStorage.setItem(STORAGE_KEYS.authorToken, token);
  }
  return token;
}

function isPastDeadline() {
  return Date.now() >= SUBMISSION_DEADLINE.getTime();
}

function enforceDeadline() {
  if (!isPastDeadline()) return;
  els.saveEntry.disabled = true;
  els.entryName.disabled = true;
  setStatus("Submissions closed.", "warn");
}

async function saveEntry() {
  if (isPastDeadline()) {
    setStatus("Submissions are closed.", "warn");
    return;
  }
  const name = els.entryName.value.trim() || `Entry ${state.entries.length + 1}`;
  if (!state.picks.length) {
    setStatus("Add at least one pick before saving.", "warn");
    return;
  }

  const authorToken = getAuthorToken();
  const existing = state.entries.find((e) => e.authorToken === authorToken);
  const entry = {
    id: existing?.id || crypto.randomUUID?.() || `${Date.now()}`,
    authorToken,
    name,
    picks: [...state.picks],
    createdAt: existing?.createdAt || new Date().toISOString()
  };

  state.entries = [entry, ...state.entries.filter((e) => e.authorToken !== authorToken)];
  saveJson(STORAGE_KEYS.entries, state.entries);

  if (supabaseClient) {
    const { error } = await supabaseClient.from(SUPABASE_TABLES.entries).upsert({
      id: entry.id,
      author_token: entry.authorToken,
      name: entry.name,
      picks: entry.picks,
      created_at: entry.createdAt
    }, { onConflict: "author_token" });
    setStatus(error ? `Saved locally. Supabase: ${error.message}` : `${name} saved.`, error ? "warn" : "toast");
  } else {
    setStatus(`${name} saved locally.`, "toast");
  }
  renderLeaderboard();
}

async function copyShareLink() {
  const payload = encodeURIComponent(btoa(JSON.stringify({
    name: els.entryName.value.trim(),
    picks: state.picks
  })));
  const url = `${location.origin}${location.pathname}#picks=${payload}`;

  try {
    await navigator.clipboard.writeText(url);
    setStatus("Share link copied.", "toast");
  } catch {
    location.hash = `picks=${payload}`;
    setStatus("Share link is in the address bar.", "toast");
  }
}

function renderLeaderboard() {
  const entries = [...state.entries]
    .map((entry) => ({ ...entry, score: scoreEntry(entry.picks) }))
    .sort((a, b) => b.score - a.score || a.createdAt.localeCompare(b.createdAt));

  els.leaderboard.innerHTML = entries.length
    ? entries.map((entry, index) => `
      <div class="leader-row" data-entry-id="${escapeHtml(entry.id)}">
        <span class="leader-rank">#${index + 1}</span>
        <span class="leader-name">${escapeHtml(entry.name)}</span>
        <span class="leader-score">${entry.score} pts</span>
      </div>
    `).join("")
    : `<p class="status-line">No saved entries yet.</p>`;

  els.leaderboard.querySelectorAll(".leader-row[data-entry-id]").forEach((row) => {
    row.addEventListener("click", () => {
      const entry = state.entries.find((e) => e.id === row.dataset.entryId);
      if (entry) openPicksModal(entry);
    });
  });
}

function openPicksModal(entry) {
  document.getElementById("modalTitle").textContent = entry.name;

  const hasResults = state.results.length > 0;
  document.getElementById("modalPicks").innerHTML = entry.picks.slice(0, PICK_LIMIT).map((pick, index) => {
    const player = findPlayer(pick);
    const name = escapeHtml(player ? displayName(player) : pick);
    const country = player?.country || "";
    const flagHtml = country
      ? `<img class="flag" alt="${escapeHtml(country.toUpperCase())}" src="https://flagcdn.com/20x15/${escapeHtml(country.toLowerCase())}.png" onerror="this.style.display='none'">`
      : "";
    const { pts, resultIndex } = hasResults ? scorePick(pick, index) : { pts: null, resultIndex: -1 };
    const top4Bonus = hasResults && index < 4 && resultIndex !== -1 && resultIndex < 4;
    const finishHtml = hasResults
      ? `<span class="modal-pick-finish">${resultIndex >= 0 ? `#${resultIndex + 1}` : "—"}</span>`
      : "";
    const scoreHtml = hasResults
      ? `<span class="modal-pick-score ${pts > 0 ? "has-pts" : ""}">${pts > 0 ? `+${pts}` : "0"} pts${top4Bonus ? " ★" : ""}</span>`
      : "";
    return `
      <div class="modal-pick-row">
        <span class="modal-pick-pos">#${index + 1}</span>
        <span class="modal-pick-name">${flagHtml} ${name}</span>
        ${finishHtml}
        ${scoreHtml}
      </div>`;
  }).join("");

  document.getElementById("picksModal").classList.remove("hidden");
}

function closePicksModal() {
  document.getElementById("picksModal").classList.add("hidden");
}

function scorePick(pick, index) {
  const results = state.results.map((n) => n.toLowerCase());
  const resultIndex = results.indexOf(pick.toLowerCase());
  if (resultIndex === -1) return { pts: 0, resultIndex: -1 };

  const distance = Math.abs(resultIndex - index);
  let pts = 0;
  if (distance === 0) pts = 10;
  else if (distance === 1) pts = 7;
  else if (distance === 2) pts = 5;
  else if (distance === 3) pts = 3;
  else if (resultIndex < PICK_LIMIT) pts = 1;

  if (index < 4 && resultIndex < 4) pts += TOP4_BONUS;

  return { pts, resultIndex };
}

function scoreEntry(picks) {
  if (!state.results.length) return 0;
  return picks.slice(0, PICK_LIMIT).reduce((total, pick, index) => total + scorePick(pick, index).pts, 0);
}

function getPickLimit() {
  return PICK_LIMIT;
}

function comparePlayers(a, b, sort, dir) {
  const direction = dir === "asc" ? 1 : -1;
  if (sort === "username") {
    return displayName(a).localeCompare(displayName(b)) * direction;
  }

  const left = metricValue(a, sort);
  const right = metricValue(b, sort);
  if (left == null && right == null) return a.seed - b.seed;
  if (left == null) return 1;
  if (right == null) return -1;
  if (left === right) return a.seed - b.seed;
  return (left - right) * direction;
}

function defaultSortDir(sort) {
  return ["seed", "username", "liveRank", "bestTime", "averageCompletion", "loses", "forfeitRate", "forfeits"].includes(sort) ? "asc" : "desc";
}

function findPlayer(username) {
  return state.players.find((player) => player.username.toLowerCase() === String(username).toLowerCase());
}

function displayName(player) {
  return player.nickname || player.username;
}

function record(player) {
  if (typeof player.wins !== "number" || typeof player.loses !== "number") return "pending";
  return `${player.wins}-${player.loses}`;
}

function valueOrPending(value) {
  return typeof value === "number" ? value.toLocaleString() : "<span class='subtle'>pending</span>";
}

function headstartFromPhasePoints(points) {
  return Math.max(0, Math.floor(((points || 0) - PHASE_POINT_CUTOFF) / 10));
}

function percent(value) {
  if (typeof value !== "number") return "pending";
  return `${Math.round(value * 1000) / 10}%`;
}

function formatTime(ms) {
  if (!ms) return "pending";
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function average(values) {
  const clean = values.filter((value) => typeof value === "number");
  return clean.reduce((sum, value) => sum + value, 0) / clean.length;
}

function normalizeNames(value) {
  return value.split(/\r?\n|,/).map((name) => name.trim()).filter(Boolean);
}

function setStatus(message, className) {
  els.saveStatus.textContent = message;
  els.saveStatus.className = `status-line ${className}`;
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function initRemoteData() {
  if (!supabaseClient) return;

  const [{ data: entries, error: entriesError }, { data: results, error: resultsError }] = await Promise.all([
    supabaseClient.from(SUPABASE_TABLES.entries).select("id,name,picks,created_at").order("created_at", { ascending: false }),
    supabaseClient.from(SUPABASE_TABLES.results).select("results").eq("id", "official").maybeSingle()
  ]);

  if (!entriesError && Array.isArray(entries)) {
    state.entries = entries.map((entry) => ({
      id: entry.id,
      authorToken: entry.author_token,
      name: entry.name,
      picks: entry.picks || [],
      createdAt: entry.created_at
    }));
    saveJson(STORAGE_KEYS.entries, state.entries);
  }

  if (!resultsError && results?.results) {
    state.results = results.results;
    els.actualResults.value = state.results.join("\n");
    saveJson(STORAGE_KEYS.results, state.results);
  }

  renderLeaderboard();
}

async function saveRemoteResults() {
  if (!supabaseClient || !ALLOW_PUBLIC_RESULT_UPDATES) return;
  await supabaseClient.from(SUPABASE_TABLES.results).upsert({
    id: "official",
    results: state.results,
    updated_at: new Date().toISOString()
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}
