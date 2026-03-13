const grid = document.getElementById('game-grid');
const searchBar = document.getElementById('search-bar');
const filterButtons = document.querySelectorAll('.filter-btn');
const gameView = document.getElementById('game-view');
const homeBtn = document.getElementById('home-btn');
const gameIframe = document.getElementById('game-iframe');

function renderGames(list) {
  grid.innerHTML = '';
  list.forEach(game => {
    const tile = document.createElement('div');
    tile.classList.add('game-tile');
    tile.style.backgroundImage = `url('${game.thumbnail}')`;
    tile.title = `${game.description} | Sign-in: ${game.signIn}`;

    const title = document.createElement('div');
    title.classList.add('game-title');
    title.innerText = game.title;

    tile.appendChild(title);
    grid.appendChild(tile);

    tile.addEventListener('click', () => {
      gameIframe.src = game.src;
      gameView.classList.remove('hidden');
      document.getElementById('home-screen').style.display = 'none';
    });
  });
}

// Filter logic
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    if(filter === 'all'){
      renderGames(games);
    } else {
      renderGames(games.filter(g => g.signIn === filter));
    }
  });
});

// Search logic
searchBar.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  renderGames(games.filter(g => g.title.toLowerCase().includes(term)));
});

// Home button
homeBtn.addEventListener('click', () => {
  gameView.classList.add('hidden');
  gameIframe.src = '';
  document.getElementById('home-screen').style.display = 'block';
});

// Initial render
renderGames(games);
