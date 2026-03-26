/* ===== DOM refs ===== */
const grid       = document.getElementById("grid");
const search     = document.getElementById("search");
const modal      = document.getElementById("modal");
const frame      = document.getElementById("gameFrame");
const homeBtn    = document.getElementById("home");
const countEl    = document.getElementById("game-count");
const filterWrap = document.getElementById("game-filters");
const filterBtns = filterWrap.querySelectorAll("button");
const utilSection = document.getElementById("utilities");
const infoP      = document.getElementById("playable-info");
const panic      = document.getElementById("panic");
const popup      = document.getElementById("redirect-popup");
const popupUrl   = document.getElementById("popup-url");
const popupGo    = document.getElementById("popup-go");
const popupCancel= document.getElementById("popup-cancel");
const tabBtns    = document.querySelectorAll(".tab-btn");

/* ===== State ===== */
let favorites     = JSON.parse(localStorage.getItem("sq_favs") || "[]");
let currentFilter = "All";
let currentTab    = "games";
let pendingRedirect = null;

/* ===== Badge class helper ===== */
function badgeClass(signIn) {
  if (signIn === "Playable")            return "badge-playable";
  if (signIn === "Slightly Unplayable") return "badge-slight";
  return "badge-hard";
}

/* ===== Image error → styled placeholder ===== */
function handleImgError(img, title) {
  const wrap = img.parentElement;
  img.remove();
  const ph = document.createElement("div");
  ph.className = "img-placeholder";
  ph.textContent = title.charAt(0);
  wrap.appendChild(ph);
}

/* ===== Build tiles ===== */
function render() {
  grid.innerHTML = "";

  games.forEach(g => {
    const isFav = favorites.includes(g.title);
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.dataset.play  = g.signIn;
    tile.dataset.title = g.title.toLowerCase();

    // Upgrade zapgames thumbnails to high-res, but keep original as fallback
    let highResThumb = g.thumbnail;
    let isZapgames = g.thumbnail.includes("zapgames.io") && g.thumbnail.includes("h196x110");
    if (isZapgames) {
      highResThumb = g.thumbnail.replace("h196x110", "f546x307");
    }

    tile.innerHTML = `
      <div class="thumb-wrap">
        <img src="${highResThumb}" alt="${g.title}" loading="lazy" data-original="${g.thumbnail}">
      </div>
      <h3>${g.title}</h3>
      <div class="gameInfo">
        <span class="playability ${badgeClass(g.signIn)}">${g.signIn}</span>
        <span class="favStar ${isFav ? "active" : ""}">⭐</span>
      </div>
    `;

    /* image error fallback (try original low-res, then letter placeholder) */
    const img = tile.querySelector("img");
    img.addEventListener("error", function() {
      if (this.src !== this.dataset.original && this.dataset.original) {
        this.src = this.dataset.original;
      } else {
        handleImgError(this, g.title);
      }
    });

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
  // Slide ads back into view to maximize profit
  document.querySelectorAll(".ad-sidebar").forEach(ad => ad.style.transform = "");
});

/* ===== Restore ads helper ===== */
function restoreAds() {
  document.querySelectorAll(".ad-sidebar").forEach(ad => ad.style.transform = "");
}

/* ===== Tab Switching ===== */
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;

    // Restore ads on every tab switch
    restoreAds();

    if (currentTab === "games") {
      grid.style.display = "";
      utilSection.style.display = "none";
      filterWrap.style.display = "";
      infoP.style.display = "";
      countEl.style.display = "";
      search.style.display = "";
    } else {
      grid.style.display = "none";
      utilSection.style.display = "";
      filterWrap.style.display = "none";
      infoP.style.display = "none";
      countEl.style.display = "none";
      search.style.display = "none";
    }
  });
});

/* ===== Utility Cards ===== */

// Embed cards — open inside the game modal iframe
document.querySelectorAll(".util-card[data-embed]").forEach(card => {
  card.addEventListener("click", () => {
    frame.src = card.dataset.embed;
    modal.style.display = "flex";
  });
});

// Redirect cards (YouTube, ChatGPT, Docs, Slides, Freefy, Xbox)
document.querySelectorAll(".util-card[data-redirect]").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.dataset.redirect;
    pendingRedirect = url;
    popupUrl.textContent = url;
    popup.classList.add("show");
  });
});

/* ===== Redirect Popup Actions ===== */
popupCancel.addEventListener("click", () => {
  popup.classList.remove("show");
  pendingRedirect = null;
});

popupGo.addEventListener("click", () => {
  if (pendingRedirect) {
    // Try window.open first, fall back to location.href if popup blocked
    const win = window.open(pendingRedirect, "_blank");
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = pendingRedirect;
    }
  }
  popup.classList.remove("show");
  pendingRedirect = null;
});

// Click outside popup card to close
popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.classList.remove("show");
    pendingRedirect = null;
  }
});

/* ===== Panic Screen (Shift+Tab) & Fake Error ===== */

// Theme definitions
const panicThemes = {
  docs:      { name: 'Google Docs',      title: 'Docs',      color: '#4285F4' },
  slides:    { name: 'Google Slides',     title: 'Slides',    color: '#FBBC04' },
  drive:     { name: 'Google Drive',      title: 'Drive',     color: '#34A853' },
  gmail:     { name: 'Gmail',             title: 'Gmail',     color: '#EA4335' },
  classroom: { name: 'Google Classroom',  title: 'Classroom', color: '#0F9D58' },
};

// Load saved settings
let currentTheme = localStorage.getItem('sq_panic_theme') || 'docs';
let savedEmail = localStorage.getItem('sq_panic_email') || '';
let savedPassword = localStorage.getItem('sq_panic_pass') || '';

// Settings modal refs
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsEmail = document.getElementById('settings-email');
const settingsPass = document.getElementById('settings-password');
const settingsSave = document.getElementById('settings-save');
const settingsClose = document.getElementById('settings-close');
const themeBtns = document.querySelectorAll('.theme-btn');
const panicAppName = document.getElementById('panic-app-name');
const panicDocsTitle = document.querySelector('.panic-docs-title');
const passError = document.getElementById('panic-pass-error');

// Apply theme on load
function applyTheme() {
  const t = panicThemes[currentTheme];
  if (panicAppName) panicAppName.textContent = t.name;
  if (panicDocsTitle) panicDocsTitle.textContent = t.title;
}
applyTheme();

// Settings modal open
if (settingsBtn) {
  settingsBtn.addEventListener('click', () => {
    settingsEmail.value = savedEmail;
    settingsPass.value = savedPassword;
    // Highlight active theme
    themeBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.theme === currentTheme);
    });
    settingsModal.classList.add('show');
  });
}

// Theme picker
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    themeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTheme = btn.dataset.theme;
  });
});

// Save settings
if (settingsSave) {
  settingsSave.addEventListener('click', () => {
    savedEmail = settingsEmail.value.trim();
    savedPassword = settingsPass.value;
    localStorage.setItem('sq_panic_theme', currentTheme);
    localStorage.setItem('sq_panic_email', savedEmail);
    localStorage.setItem('sq_panic_pass', savedPassword);
    applyTheme();
    settingsModal.classList.remove('show');
  });
}

// Close settings
if (settingsClose) {
  settingsClose.addEventListener('click', () => {
    settingsModal.classList.remove('show');
  });
}

// Click outside settings card to close
if (settingsModal) {
  settingsModal.addEventListener('click', e => {
    if (e.target === settingsModal) settingsModal.classList.remove('show');
  });
}

const panicEmailC = document.querySelector('.panic-email-container');
const panicPassC = document.querySelector('.panic-password-container');
const panicDocsC = document.querySelector('.panic-docs-bug-container');

const btnEmailNext = document.getElementById('panic-email-next');
const btnPassNext = document.getElementById('panic-pass-next');
const emailInput = document.getElementById('panic-email-input');
const emailDisplay = document.getElementById('panic-email-display');

if(btnEmailNext) {
  btnEmailNext.addEventListener('click', function() {
    this.classList.add('panic-loading');
    const oldText = this.innerText;
    this.innerText = 'Please wait...';
    
    setTimeout(() => {
      panicEmailC.style.display = 'none';
      panicPassC.style.display = 'block';
      
      if(emailInput && emailInput.value.trim() !== '') {
        emailDisplay.innerText = emailInput.value;
      } else if (savedEmail) {
        emailDisplay.innerText = savedEmail;
      } else {
        emailDisplay.innerText = 'student@school.edu';
      }
      
      // Hide any previous error
      if(passError) passError.classList.remove('show');
      
      this.classList.remove('panic-loading');
      this.innerText = oldText;
      
      const passInput = panicPassC.querySelector('input[type="password"]');
      if(passInput) setTimeout(() => passInput.focus(), 100);
    }, 800);
  });
}

if(btnPassNext) {
  btnPassNext.addEventListener('click', function() {
    const passInput = panicPassC.querySelector('input.panic-signin-input');
    const enteredPass = passInput ? passInput.value : '';
    
    // If a password is saved and the user entered the wrong one, show error
    if (savedPassword && enteredPass !== savedPassword) {
      if(passError) passError.classList.add('show');
      return; // Don't advance
    }
    
    // Correct password or no password set — advance to bug screen
    if(passError) passError.classList.remove('show');
    this.classList.add('panic-loading');
    const oldText = this.innerText;
    this.innerText = 'Please wait...';
    
    setTimeout(() => {
      panicPassC.style.display = 'none';
      panicDocsC.style.display = 'flex';
      
      this.classList.remove('panic-loading');
      this.innerText = oldText;
    }, 1200);
  });
}

// Show password checkbox sync
const showPassCb = document.getElementById('panic-show-cb');
if(showPassCb) {
  showPassCb.addEventListener('change', function() {
    const passInput = panicPassC.querySelector('input.panic-signin-input');
    if(passInput) {
      passInput.type = this.checked ? 'text' : 'password';
    }
  });
}

// pill click (just to reset to email for realism)
const userPill = document.querySelector('.panic-user-pill');
if(userPill) {
  userPill.addEventListener('click', () => {
    panicPassC.style.display = 'none';
    panicEmailC.style.display = '';
    if(emailInput) setTimeout(() => emailInput.focus(), 100);
  });
}

window.addEventListener("keydown", e => {
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();

    if (panic.classList.contains("show")) {
      panic.classList.remove("show");
      
      setTimeout(() => {
        panicEmailC.style.display = '';
        panicPassC.style.display = 'none';
        panicDocsC.style.display = 'none';
        
        const passInput = panicPassC.querySelector('input.panic-signin-input');
        if(passInput) passInput.value = '';
        if(showPassCb) {
          showPassCb.checked = false;
          if(passInput) passInput.type = 'password';
        }
        if(passError) passError.classList.remove('show');
        
        if(document.activeElement) document.activeElement.blur();
      }, 300);
    } else {
      panic.classList.add("show");
      // Apply theme and pre-fill email
      applyTheme();
      if(savedEmail && emailInput) emailInput.value = savedEmail;
      if(emailInput) {
        setTimeout(() => emailInput.focus(), 100);
      }
    }
    return;
  }
}, true);

/* ===== Init ===== */
render();
