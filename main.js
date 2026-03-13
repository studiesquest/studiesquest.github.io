const gameGrid = document.getElementById('game-grid');
const gameContainer = document.getElementById('game-container');
const gameFrame = document.getElementById('game-frame');
const homeBtn = document.getElementById('home-btn');
const searchBar = document.getElementById('search-bar');
const filterBtns = document.querySelectorAll('.filter-btn');

let filteredGames = games.slice();

// Render games to grid
function renderGames(gameList) {
  gameGrid.innerHTML = '';
  gameList.forEach(game => {
    const tile = document.createElement('div');
    tile.classList.add('game-tile');
    tile.style.backgroundImage = `url(${game.thumbnail})`;

    const overlay = document.createElement('div');
    overlay.classList.add('game-overlay');
    overlay.innerHTML = `<strong>${game.title}</strong><br>${game.description}<br><em>Sign-in: ${game.signIn}</em>`;
    tile.appendChild(overlay);

    tile.addEventListener('click', () => {
      gameContainer.classList.remove('hidden');
      gameFrame.src = game.src;
    });

    gameGrid.appendChild(tile);
  });
}

// Filters
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    filteredGames = filter === 'all' ? games : games.filter(g => g.signIn === filter);
    renderGames(filteredGames);
  });
});

// Search
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  filteredGames = games.filter(g => g.title.toLowerCase().includes(query));
  renderGames(filteredGames);
});

// Home button
homeBtn.addEventListener('click', () => {
  gameContainer.classList.add('hidden');
  gameFrame.src = '';
});

// Initial render
renderGames(filteredGames);
