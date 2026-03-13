const grid = document.getElementById("gridContainer");
const modal = document.getElementById("modal");
const gameFrame = document.getElementById("gameFrame");
const homeBtn = document.getElementById("homeBtn");
const searchBar = document.getElementById("searchBar");
const filterBtns = document.querySelectorAll(".filterBtn");

function renderGames(gameList) {
    grid.innerHTML = "";
    gameList.forEach(game => {
        const tile = document.createElement("div");
        tile.classList.add("game-tile");
        tile.style.backgroundImage = `url('${game.thumbnail || genericThumb}')`;
        tile.innerHTML = `
            <div class="tile-overlay">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <span>${game.signIn}</span>
            </div>
        `;
        tile.addEventListener("click", () => {
            gameFrame.src = game.src;
            modal.style.display = "flex";
        });
        grid.appendChild(tile);
    });
}

homeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    gameFrame.src = "";
});

searchBar.addEventListener("input", () => {
    const val = searchBar.value.toLowerCase();
    const filtered = games.filter(g => g.title.toLowerCase().includes(val));
    renderGames(filtered);
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        if(filter === "all") renderGames(games);
        else renderGames(games.filter(g => g.signIn === filter));
    });
});

renderGames(games);
