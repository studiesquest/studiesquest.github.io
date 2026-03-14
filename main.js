// =======================
// Main JS for StudiesQuest
// =======================

// Elements
const grid = document.getElementById('grid');
const utilitiesGrid = document.getElementById('utilities-grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');

// -----------------------
// Populate Games Grid
// -----------------------
function displayGames(gameList) {
    grid.innerHTML = '';
    gameList.forEach(game => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <span class="tag ${tagClass(game.signIn)}">${game.signIn}</span>
        `;
        tile.addEventListener('click', () => {
            openModal(game.src);
        });
        grid.appendChild(tile);
    });
}

// -----------------------
// Populate Home Utilities Grid
// -----------------------
function displayUtilities() {
    utilitiesGrid.innerHTML = '';

    // Example: Calculator iframe
    const calculator = document.createElement('div');
    calculator.className = 'tile';
    calculator.innerHTML = `
        <iframe width="219" height="302" src="https://calculator-1.com/outdoor/?f=666666&r=666666" scrolling="no" frameborder="0"></iframe>
        <br>
        <a href="https://calculator-1.com/" target="_blank">The Best Free Online Calculator - Calculator-1.com</a>
    `;
    utilitiesGrid.appendChild(calculator);
}

// -----------------------
// Tag styling helper
// -----------------------
function tagClass(signIn) {
    if (signIn === "Playable") return "playable";
    if (signIn === "Slightly Unplayable") return "slight";
    if (signIn === "Hardly Playable") return "hard";
    return "";
}

// -----------------------
// Modal functions
// -----------------------
const modal = document.getElementById('modal');
const gameFrame = document.getElementById('gameFrame');
const homeBtn = document.getElementById('home');

function openModal(src) {
    gameFrame.src = src;
    modal.style.display = 'flex';
}

homeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    gameFrame.src = '';
});

// -----------------------
// Search functionality
// -----------------------
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    displayGames(filteredGames);
});

// -----------------------
// Filter buttons
// -----------------------
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        if (filter === "All") {
            grid.style.display = 'grid';
            utilitiesGrid.style.display = 'none';
            displayGames(games);
        } else if (filter === "Utilities") {
            grid.style.display = 'none';
            utilitiesGrid.style.display = 'grid';
            displayUtilities();
        } else {
            const filtered = games.filter(game => game.signIn === filter);
            grid.style.display = 'grid';
            utilitiesGrid.style.display = 'none';
            displayGames(filtered);
        }
    });
});

// -----------------------
// Initial display
// -----------------------
displayGames(games);
