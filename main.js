/* ===== DOM refs ===== */
const grid    = document.getElementById("grid");
const search  = document.getElementById("search");
const modal   = document.getElementById("modal");
const frame   = document.getElementById("gameFrame");
const homeBtn = document.getElementById("home");
const countEl = document.getElementById("game-count");
const filterBtns = document.querySelectorAll(".filters button");

/* ===== State ===== */
let favorites     = JSON.parse(localStorage.getItem("sq_favs") || "[]");
let currentFilter = "All";

/* ===== Badge class helper ===== */
function badgeClass(signIn) {
  if (signIn === "Playable")            return "badge-playable";
  if (signIn === "Slightly Unplayable") return "badge-slight";
  return "badge-hard";
}

/* ===== Build tiles ===== */
function render() {
  grid.innerHTML = "";

  games.forEach((g, i) => {
    const isFav = favorites.includes(g.title);

    const tile = document.createElement("div");
    tile.className = "tile";
    tile.dataset.play  = g.signIn;
    tile.dataset.title = g.title.toLowerCase();

    tile.innerHTML = `
      <img src="${g.thumbnail}" alt="${g.title}" loading="lazy" onerror="this.style.background='#0a1e10';this.alt='No image'">
      <h3>${g.title}</h3>
      <div class="gameInfo">
        <span class="playability ${badgeClass(g.signIn)}">${g.signIn}</span>
        <span class="favStar ${isFav ? "active" : ""}">⭐</span>
      </div>
    `;

    /* fav toggle */
    tile.querySelector(".favStar").addEventListener("click", e => {
      e.stopPropagation();
      if (favorites.includes(g.title)) {
        favorites = favorites.filter(f => f !== g.title);
      } else {
        favorites.push(g.title);
      }
      localStorage.setItem("sq_favs", JSON.stringify(favorites));
      render();
    });

    /* open game */
    tile.addEventListener("click", () => {
      frame.src = g.src;
      modal.style.display = "flex";
    });

    grid.appendChild(tile);
  });

  applyFilters();
}

/* ===== Filters ===== */
function applyFilters() {
  const q = search.value.toLowerCase();
  let shown = 0;

  document.querySelectorAll(".tile").forEach(tile => {
    let visible = true;

    if (currentFilter === "Favorites") {
      visible = favorites.includes(tile.querySelector("h3").textContent);
    } else if (currentFilter !== "All") {
      visible = tile.dataset.play === currentFilter;
    }

    if (visible && q) {
      visible = tile.dataset.title.includes(q);
    }

    tile.style.display = visible ? "" : "none";
    if (visible) shown++;
  });

  if (countEl) countEl.textContent = `Showing ${shown} of ${games.length} games`;
}

/* ===== Filter buttons ===== */
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

/* ===== Search ===== */
search.addEventListener("input", applyFilters);

/* ===== Close modal ===== */
homeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  frame.src = "";
});

/* ===== ESC to close ===== */
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    frame.src = "";
  }
});

/* ===== Init ===== */
render();
