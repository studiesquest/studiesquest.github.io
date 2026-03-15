// ==========================
// Variables
// ==========================
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');
const modal = document.getElementById('modal');
const gameFrame = document.getElementById('gameFrame');
const homeBtn = document.getElementById('home');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// ==========================
// Render Games
// ==========================
function renderGames(gamesArray) {
    grid.innerHTML = '';

    gamesArray.forEach(game => {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        const img = document.createElement('img');
        img.src = game.thumbnail;
        img.alt = game.title;

        const title = document.createElement('h3');
        title.textContent = game.title;

        const desc = document.createElement('p');
        desc.textContent = game.description;

        const tag = document.createElement('span');
        tag.classList.add('tag');
        if (game.signIn === 'Playable') tag.classList.add('playable');
        else if (game.signIn === 'Slightly Unplayable') tag.classList.add('slight');
        else if (game.signIn === 'Hardly Playable') tag.classList.add('hard');

        tag.textContent = game.signIn;

        // Favorite toggle
        const favBtn = document.createElement('button');
        favBtn.textContent = favorites.includes(game.title) ? '★' : '☆';
        favBtn.style.marginLeft = '8px';
        favBtn.style.cursor = 'pointer';
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(game.title, favBtn);
        });

        tile.appendChild(img);
        tile.appendChild(title);
        tile.appendChild(desc);
        tile.appendChild(tag);
        tile.appendChild(favBtn);

        tile.addEventListener('click', () => openGame(game.src));

        grid.appendChild(tile);
    });
}

// ==========================
// Open Game in Modal
// ==========================
function openGame(src) {
    // Show modal
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => modal.style.opacity = '1', 50);

    // Set iframe attributes
    gameFrame.setAttribute('src', src);
    gameFrame.setAttribute('allowfullscreen', '');
    gameFrame.setAttribute('allow', 'fullscreen; autoplay; pointer-lock');

    // Attempt pointer lock after a short delay (fixes Slope on ChromeOS)
    setTimeout(() => {
        try {
            if(gameFrame.contentWindow && gameFrame.contentWindow.document.body.requestPointerLock){
                gameFrame.contentWindow.document.body.requestPointerLock();
            }
        } catch(e) {
            // fail silently if not allowed
        }
    }, 300);
}

// ==========================
// Close Game
// ==========================
homeBtn.addEventListener('click', () => {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        gameFrame.setAttribute('src', '');
    }, 300);
});

// ==========================
// Favorites Handling
// ==========================
function toggleFavorite(title, btn) {
    if (favorites.includes(title)) {
        favorites = favorites.filter(f => f !== title);
        btn.textContent = '☆';
    } else {
        favorites.push(title);
        btn.textContent = '★';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ==========================
// Search Functionality
// ==========================
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = games.filter(game => game.title.toLowerCase().includes(query));
    renderGames(filtered);
});

// ==========================
// Filter Buttons
// ==========================
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        if (filter === 'All') renderGames(games);
        else if (filter === 'Favorites') {
            const favGames = games.filter(g => favorites.includes(g.title));
            renderGames(favGames);
        } else {
            const filtered = games.filter(g => g.signIn === filter);
            renderGames(filtered);
        }
    });
});

// ==========================
// Initial Render
// ==========================
renderGames(games);
