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
const settingsBtn = document.getElementById("settings-btn");

let favorites     = JSON.parse(localStorage.getItem("sq_favs") || "[]");
let currentFilter = "All";
let currentTab    = "games";
let pendingRedirect = null;

function badgeClass(signIn) {
  if (signIn === "Playable")            return "badge-playable";
  if (signIn === "Slightly Unplayable") return "badge-slight";
  if (signIn === "Cloud Gaming")        return "badge-cloud";
  return "badge-hard";
}

function handleImgError(img, title) {
  const wrap = img.parentElement;
  img.remove();
  const ph = document.createElement("div");
  ph.className = "img-placeholder";
  ph.textContent = title.charAt(0);
  wrap.appendChild(ph);
}

function render() {
  grid.innerHTML = "";

  games.forEach(g => {
    const isFav = favorites.includes(g.title);
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.dataset.play  = g.signIn;
    tile.dataset.title = g.title.toLowerCase();

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

    const img = tile.querySelector("img");
    img.addEventListener("error", function() {
      if (!this.dataset.triedOriginal) {
        this.dataset.triedOriginal = "1";
        this.src = this.dataset.original;
      } else {
        handleImgError(this, g.title);
      }
    });

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

    tile.addEventListener("click", () => {
      if (g.signIn === "Cloud Gaming") {
        pendingRedirect = g.src;
        popupUrl.textContent = g.src;
        document.getElementById('popup-title').textContent = 'Xbox Cloud Gaming';
        document.getElementById('popup-msg').textContent = 'This opens Xbox Cloud Gaming in a new tab. Note: Fortnite and some titles may not work on sign-in page bypasses.';
        popup.classList.add('show');
        return;
      }
      frame.src = g.src;
      modal.style.display = "flex";
      settingsBtn.style.display = "none";
      if (typeof handleForcePanic === 'function') handleForcePanic(true);
    });

    grid.appendChild(tile);
  });

  applyFilters();
}

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

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

search.addEventListener("input", applyFilters);

homeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  frame.src = "";
  settingsBtn.style.display = "";
  document.querySelectorAll(".ad-sidebar").forEach(ad => ad.style.transform = "");
  if (typeof handleForcePanic === 'function') handleForcePanic(false);
});

function restoreAds() {
  document.querySelectorAll(".ad-sidebar").forEach(ad => ad.style.transform = "");
}

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;

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


document.querySelectorAll(".util-card[data-embed]").forEach(card => {
  card.addEventListener("click", () => {
    frame.src = card.dataset.embed;
    modal.style.display = "flex";
  });
});

document.querySelectorAll(".util-card[data-redirect]").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.dataset.redirect;
    pendingRedirect = url;
    popupUrl.textContent = url;
    popup.classList.add("show");
  });
});

popupCancel.addEventListener("click", () => {
  popup.classList.remove("show");
  pendingRedirect = null;
});

popupGo.addEventListener("click", () => {
  if (pendingRedirect) {
    const win = window.open(pendingRedirect, "_blank");
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = pendingRedirect;
    }
  }
  popup.classList.remove("show");
  pendingRedirect = null;
});

popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.classList.remove("show");
    pendingRedirect = null;
  }
});


const panicThemes = {
  docs:      { name: 'Google Docs',      title: 'Docs',      color: '#4285F4' },
  slides:    { name: 'Google Slides',     title: 'Slides',    color: '#FBBC04' },
  drive:     { name: 'Google Drive',      title: 'Drive',     color: '#34A853' },
  gmail:     { name: 'Gmail',             title: 'Gmail',     color: '#EA4335' },
  classroom: { name: 'Google Classroom',  title: 'Classroom', color: '#0F9D58' },
  calendar:  { name: 'Google Calendar',   title: 'Calendar',  color: '#4285F4' },
  photos:    { name: 'Google Photos',     title: 'Photos',    color: '#FBBC04' },
  keep:      { name: 'Google Keep',       title: 'Keep',      color: '#FBBC04' },
  maps:      { name: 'Google Maps',       title: 'Maps',      color: '#34A853' },
  meet:      { name: 'Google Meet',       title: 'Meet',      color: '#00897B' },
};

let currentTheme = localStorage.getItem('sq_panic_theme') || 'docs';
let savedEmail = localStorage.getItem('sq_panic_email') || '';
let savedPassword = localStorage.getItem('sq_panic_pass') || '';
let forcePanic = localStorage.getItem('sq_force_panic') === 'true';
let forcePanicInterval = null;

function handleForcePanic(isActive) {
  if (forcePanicInterval) clearInterval(forcePanicInterval);
  if (isActive && forcePanic) {
    forcePanicInterval = setInterval(() => {
      window.focus();
      document.body.focus();
    }, 500);
  }
}

// settingsBtn moved to top
const settingsModal = document.getElementById('settings-modal');
const settingsEmail = document.getElementById('settings-email');
const settingsPass = document.getElementById('settings-password');
const settingsSave = document.getElementById('settings-save');
const settingsClose = document.getElementById('settings-close');
const settingsForcePanic = document.getElementById('settings-force-panic');
const themeBtns = document.querySelectorAll('.theme-btn');
const panicAppName = document.getElementById('panic-app-name');
const panicDocsTitle = document.querySelector('.panic-docs-title');
const passError = document.getElementById('panic-pass-error');

function applyTheme() {
  const t = panicThemes[currentTheme];
  if (panicAppName) panicAppName.textContent = t.name;
  if (panicDocsTitle) panicDocsTitle.textContent = t.title;
  document.querySelectorAll('.panic-app-name-mirror').forEach(el => el.textContent = t.name);
}
applyTheme();

if (settingsBtn) {
  settingsBtn.addEventListener('click', () => {
    settingsEmail.value = savedEmail;
    settingsPass.value = savedPassword;
    if (settingsForcePanic) settingsForcePanic.checked = forcePanic;
    themeBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.theme === currentTheme);
    });
    settingsModal.classList.add('show');
  });
}

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    themeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTheme = btn.dataset.theme;
  });
});

if (settingsSave) {
  settingsSave.addEventListener('click', () => {
    savedEmail = settingsEmail.value.trim();
    savedPassword = settingsPass.value;
    if (settingsForcePanic) forcePanic = settingsForcePanic.checked;

    localStorage.setItem('sq_panic_theme', currentTheme);
    localStorage.setItem('sq_panic_email', savedEmail);
    localStorage.setItem('sq_panic_pass', savedPassword);
    localStorage.setItem('sq_force_panic', forcePanic);

    applyTheme();
    if (typeof handleForcePanic === 'function') handleForcePanic(modal.style.display === "flex");
    settingsModal.classList.remove('show');
  });
}

if (settingsClose) {
  settingsClose.addEventListener('click', () => {
    settingsModal.classList.remove('show');
  });
}

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
    
    const enteredEmail = emailInput ? emailInput.value.trim() : '';
    if (savedPassword && savedEmail) {
      if (enteredEmail !== savedEmail || enteredPass !== savedPassword) {
        if(passError) passError.classList.add('show');
        return;
      }
    } else if (savedPassword && enteredPass !== savedPassword) {
      if(passError) passError.classList.add('show');
      return;
    }
    
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

const showPassCb = document.getElementById('panic-show-cb');
if(showPassCb) {
  showPassCb.addEventListener('change', function() {
    const passInput = panicPassC.querySelector('input.panic-signin-input');
    if(passInput) {
      passInput.type = this.checked ? 'text' : 'password';
    }
  });
}

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
        hideAllPanicScreens();
        panicEmailC.style.display = '';
        
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
      applyTheme();
      if(emailInput) {
        emailInput.value = '';
        setTimeout(() => emailInput.focus(), 100);
      }

      if (modal.style.display === "flex") {
        modal.style.display = "none";
        frame.src = "";
        if (typeof settingsBtn !== 'undefined' && settingsBtn) settingsBtn.style.display = "";
        if (typeof handleForcePanic === 'function') handleForcePanic(false);
      }
    }
    return;
  }
}, true);

render();

const loadingOverlay = document.getElementById('game-loading-overlay');
let overlayShown = false;

window.addEventListener('blur', () => {
  if (modal.style.display === 'flex' && !overlayShown && document.activeElement === frame) {
    if (frame.src.includes('webhp?igu=1')) return;
    overlayShown = true;
    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
      setTimeout(() => {
        loadingOverlay.classList.remove('hidden');
      }, 10);
      setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => { loadingOverlay.style.display = 'none'; }, 500);
      }, 2000);
    }
  }
});

homeBtn.addEventListener('click', () => { overlayShown = false; });


function hideAllPanicScreens() {
  const screens = [
    '.panic-email-container',
    '.panic-password-container',
    '.panic-docs-bug-container',
    '.panic-create-container',
    '.panic-forgot-email-container',
    '.panic-forgot-pass-container'
  ];
  screens.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.style.display = 'none';
  });
  const tooltip = document.getElementById('panic-learn-more-tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

const btnCreate = document.getElementById('panic-create');
if (btnCreate) {
  btnCreate.addEventListener('click', () => {
    hideAllPanicScreens();
    const createC = document.querySelector('.panic-create-container');
    if (createC) createC.style.display = 'flex';
  });
}

const btnCreateBack = document.getElementById('panic-create-back');
if (btnCreateBack) {
  btnCreateBack.addEventListener('click', () => {
    hideAllPanicScreens();
    if (panicEmailC) panicEmailC.style.display = 'flex';
    if (emailInput) setTimeout(() => emailInput.focus(), 100);
  });
}

const btnCreateNext = document.getElementById('panic-create-next');
if (btnCreateNext) {
  btnCreateNext.addEventListener('click', function() {
    this.classList.add('panic-loading');
    this.innerText = 'Please wait...';
    setTimeout(() => {
      hideAllPanicScreens();
      if (panicDocsC) panicDocsC.style.display = 'flex';
      this.classList.remove('panic-loading');
      this.innerText = 'Next';
    }, 1200);
  });
}

const btnForgot = document.getElementById('panic-forgot');
if (btnForgot) {
  btnForgot.addEventListener('click', () => {
    hideAllPanicScreens();
    const forgotEmailC = document.querySelector('.panic-forgot-email-container');
    if (forgotEmailC) forgotEmailC.style.display = 'flex';
  });
}

const btnForgotEmailBack = document.getElementById('panic-forgot-email-back');
if (btnForgotEmailBack) {
  btnForgotEmailBack.addEventListener('click', () => {
    hideAllPanicScreens();
    if (panicEmailC) panicEmailC.style.display = 'flex';
    if (emailInput) setTimeout(() => emailInput.focus(), 100);
  });
}

const btnForgotEmailNext = document.getElementById('panic-forgot-email-next');
if (btnForgotEmailNext) {
  btnForgotEmailNext.addEventListener('click', function() {
    this.classList.add('panic-loading');
    this.innerText = 'Please wait...';
    setTimeout(() => {
      hideAllPanicScreens();
      if (panicDocsC) panicDocsC.style.display = 'flex';
      this.classList.remove('panic-loading');
      this.innerText = 'Next';
    }, 1200);
  });
}

const btnPassForgot = document.getElementById('panic-pass-forgot');
if (btnPassForgot) {
  btnPassForgot.addEventListener('click', () => {
    hideAllPanicScreens();
    const forgotPassC = document.querySelector('.panic-forgot-pass-container');
    if (forgotPassC) forgotPassC.style.display = 'flex';
    const recoveryShow = document.getElementById('panic-recovery-email-show');
    if (recoveryShow && emailInput) recoveryShow.textContent = emailInput.value.trim() || '';
  });
}

const btnForgotPassTry = document.getElementById('panic-forgot-pass-try');
if (btnForgotPassTry) {
  btnForgotPassTry.addEventListener('click', () => {
    hideAllPanicScreens();
    if (panicDocsC) panicDocsC.style.display = 'flex';
  });
}

const btnForgotPassNext = document.getElementById('panic-forgot-pass-next');
if (btnForgotPassNext) {
  btnForgotPassNext.addEventListener('click', function() {
    this.classList.add('panic-loading');
    this.innerText = 'Please wait...';
    setTimeout(() => {
      hideAllPanicScreens();
      if (panicDocsC) panicDocsC.style.display = 'flex';
      this.classList.remove('panic-loading');
      this.innerText = 'Next';
    }, 1200);
  });
}

const btnLearnMore = document.getElementById('panic-learn-more');
if (btnLearnMore) {
  btnLearnMore.addEventListener('click', (e) => {
    e.preventDefault();
    const tooltip = document.getElementById('panic-learn-more-tooltip');
    if (tooltip) tooltip.style.display = 'block';
  });
}

const btnTooltipClose = document.getElementById('panic-tooltip-close');
if (btnTooltipClose) {
  btnTooltipClose.addEventListener('click', () => {
    const tooltip = document.getElementById('panic-learn-more-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
}

const retryBtns = document.querySelectorAll('.panic-retry-btn');
retryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerText = 'Retrying...';
    setTimeout(() => {
      btn.innerText = 'Retry';
    }, 1500);
  });
});
