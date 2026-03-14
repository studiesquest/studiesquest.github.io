// =======================
// Main JS for StudiesQuest
// =======================

const grid = document.getElementById('grid');

// Create utilities grid
const utilitiesGrid = document.createElement('div');
utilitiesGrid.id = 'utilities-grid';
utilitiesGrid.style.display = 'none';
grid.parentNode.insertBefore(utilitiesGrid, grid.nextSibling);

const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');

// -----------------------
// Games display (unchanged)
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
// Utilities display
// -----------------------
function displayUtilities() {
    utilitiesGrid.innerHTML = '';

    const utilities = [
        {
            title: "Calculator",
            content: `<iframe width="219" height="302" src="https://calculator-1.com/outdoor/?f=666666&r=666666" scrolling="no" frameborder="0"></iframe>`
        },
        {
            title: "Timer",
            content: `<iframe src="https://www.online-stopwatch.com/full-screen-stopwatch/" width="219" height="302" frameborder="0" scrolling="no"></iframe>`
        },
        {
            title: "Unit Converter",
            content: `<iframe src="https://www.metric-conversions.org/widget/length-converter.htm" width="219" height="302" frameborder="0" scrolling="no"></iframe>`
        },
        {
            title: "Dice Roller",
            content: `<iframe src="https://www.random.org/dice/?num=1" width="219" height="302" frameborder="0" scrolling="no"></iframe>`
        },
        {
            title: "ChatGPT",
            content: `<div class="chatgpt-tile">Click to open ChatGPT</div>`
        }
    ];

    utilities.forEach(util => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.innerHTML = `<h3>${util.title}</h3>${util.content}`;
        utilitiesGrid.appendChild(tile);

        // ChatGPT popup logic
        if (util.title === "ChatGPT") {
            tile.querySelector('.chatgpt-tile').style.cursor = 'pointer';
            tile.querySelector('.chatgpt-tile').addEventListener('click', () => {
                showRayfieldPopup("This link leads outside of StudiesQuest. Are you sure you want to continue?", "https://chat.openai.com/");
            });
        }
    });
}

// -----------------------
// Modal functions (unchanged)
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
// Tag helper
// -----------------------
function tagClass(signIn) {
    if (signIn === "Playable") return "playable";
    if (signIn === "Slightly Unplayable") return "slight";
    if (signIn === "Hardly Playable") return "hard";
    return "";
}

// -----------------------
// Search functionality
// -----------------------
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    displayGames(filteredGames);
    utilitiesGrid.style.display = 'none';
    grid.style.display = 'grid';
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

// -----------------------
// Rayfield-style popup
// -----------------------
function showRayfieldPopup(message, link) {
    const popup = document.createElement('div');
    popup.id = 'rayfield-popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = '#0b1a0d';
    popup.style.color = '#32ff7e';
    popup.style.padding = '30px';
    popup.style.borderRadius = '12px';
    popup.style.boxShadow = '0 0 25px #32ff7e';
    popup.style.zIndex = '9999';
    popup.style.textAlign = 'center';
    popup.innerHTML = `<p style="margin-bottom:20px;">${message}</p>
                       <button id="cancel-btn" style="margin-right:10px;padding:8px 16px;border:none;border-radius:6px;background:#222;color:#32ff7e;cursor:pointer;">Cancel</button>
                       <button id="continue-btn" style="padding:8px 16px;border:none;border-radius:6px;background:#32ff7e;color:#000;cursor:pointer;">Continue</button>`;

    document.body.appendChild(popup);

    document.getElementById('cancel-btn').addEventListener('click', () => {
        popup.remove();
    });

    document.getElementById('continue-btn').addEventListener('click', () => {
        window.open(link, "_blank");
        popup.remove();
    });
}
