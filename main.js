// =======================
// Main JS for StudiesQuest
// =======================

const grid = document.getElementById('grid');

// -----------------------
// Utilities grid
// -----------------------
const utilitiesGrid = document.createElement('div');
utilitiesGrid.id = 'utilities-grid';
utilitiesGrid.style.display = 'none';
utilitiesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(220px, 1fr))';
utilitiesGrid.style.gap = '15px';
grid.parentNode.insertBefore(utilitiesGrid, grid.nextSibling);

const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');

// -----------------------
// Utilities display
// -----------------------
function displayUtilities() {
    utilitiesGrid.innerHTML = '';

    const utilities = [
        {
            title: "Calculator",
            content: `<div class="calculator-tile">
                        <iframe width="219" height="302" src="https://calculator-1.com/outdoor/?f=666666&r=666666" scrolling="no" frameborder="0"></iframe>
                        <button class="maximize-btn">Maximize</button>
                      </div>`
        },
        {
            title: "ChatGPT",
            content: `<div class="chatgpt-tile">
                        <img src="data:image/png;base64,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" alt="ChatGPT" width="220">
                      </div>`
        }
    ];

    utilities.forEach(util => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.innerHTML = `<h3>${util.title}</h3>${util.content}`;
        utilitiesGrid.appendChild(tile);

        // Calculator maximize
        if (util.title === "Calculator") {
            const maximizeBtn = tile.querySelector('.maximize-btn');
            const iframe = tile.querySelector('iframe');
            maximizeBtn.addEventListener('click', () => {
                iframe.style.width = '500px';
                iframe.style.height = '700px';
            });
        }

        // ChatGPT popup
        if (util.title === "ChatGPT") {
            tile.querySelector('.chatgpt-tile').addEventListener('click', () => {
                showRayfieldPopup(
                    "This link leads outside of StudiesQuest. Are you sure you want to continue?",
                    "https://chat.openai.com/"
                );
            });
        }
    });
}

// -----------------------
// Filter buttons (including utilities)
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
// Rayfield popup
// -----------------------
function showRayfieldPopup(message, link) {
    const popup = document.createElement('div');
    popup.id = 'rayfield-popup';
    popup.style.cssText = `
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: #0b1a0d; color: #32ff7e;
        padding: 30px; border-radius: 12px;
        box-shadow: 0 0 25px #32ff7e;
        z-index: 9999; text-align: center;
    `;
    popup.innerHTML = `<p style="margin-bottom:20px;">${message}</p>
                       <button id="cancel-btn" style="margin-right:10px;padding:8px 16px;border:none;border-radius:6px;background:#222;color:#32ff7e;cursor:pointer;">Cancel</button>
                       <button id="continue-btn" style="padding:8px 16px;border:none;border-radius:6px;background:#32ff7e;color:#000;cursor:pointer;">Continue</button>`;
    document.body.appendChild(popup);

    document.getElementById('cancel-btn').addEventListener('click', () => popup.remove());
    document.getElementById('continue-btn').addEventListener('click', () => { window.open(link,"_blank"); popup.remove(); });
}

// -----------------------
// Initial display
// -----------------------
displayGames(games);
