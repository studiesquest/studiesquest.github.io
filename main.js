const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');
const modal = document.getElementById('modal');
const gameFrame = document.getElementById('gameFrame');
const homeBtn = document.getElementById('home');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Render all games
function renderGames(gamesArray) {
    grid.innerHTML = '';

    gamesArray.forEach(game => {
        const tile = document.createElement('div');
        tile.className = 'tile';

        const img = document.createElement('img');
        img.src = game.thumbnail;
        img.alt = game.title;

        const title = document.createElement('h3');
        title.textContent = game.title;

        const desc = document.createElement('p');
        desc.textContent = game.description;

        const tag = document.createElement('span');
        tag.className = 'tag';
        if (game.signIn === 'Playable') tag.classList.add('playable');
        else if (game.signIn === 'Slightly Unplayable') tag.classList.add('slight');
        else if (game.signIn === 'Hardly Playable') tag.classList.add('hard');
        tag.textContent = game.signIn;

        const favBtn = document.createElement('button');
        favBtn.textContent = favorites.includes(game.title) ? '★' : '☆';
        favBtn.style.marginLeft = '6px';
        favBtn.style.cursor = 'pointer';
        favBtn.addEventListener('click', e => {
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

// Open modal and load game
function openGame(src) {
    gameFrame.src = src;       // just set src, no extra hacks
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => modal.style.opacity = '1', 50);
}

// Close modal
homeBtn.addEventListener('click', () => {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        gameFrame.src = '';
    }, 200);
});

// Favorites
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

// Search
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = games.filter(game => game.title.toLowerCase().includes(query));
    renderGames(filtered);
});

// Filters
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === 'All') renderGames(games);
        else if (filter === 'Favorites') {
            renderGames(games.filter(g => favorites.includes(g.title)));
        } else {
            renderGames(games.filter(g => g.signIn === filter));
        }
    });
});

// Initial render
renderGames(games);
