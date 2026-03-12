const grid = document.getElementById("gridContainer");
const modal = document.getElementById("modal");
const gameFrame = document.getElementById("gameFrame");
const homeBtn = document.getElementById("homeBtn");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

function makeTile(game){
    const tile = document.createElement("div");
    tile.className = "game-tile";
    tile.dataset.title = game.title.toLowerCase();
    tile.dataset.signin = game.signIn.toLowerCase();
    tile.dataset.normal = game.normal.toLowerCase();

    tile.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <span>${game.signIn}</span>
    `;

    tile.addEventListener("click", () => {
        gameFrame.src = game.src;
        modal.style.display = "flex";
    });

    return tile;
}

function renderGames(list){
    grid.innerHTML = "";
    list.forEach(g => grid.appendChild(makeTile(g)));
}

renderGames(games);

homeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    gameFrame.src = "";
});

searchInput.addEventListener("input", ()=>{
    const q = searchInput.value.toLowerCase();
    renderGames(games.filter(g => g.title.toLowerCase().includes(q)));
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.textContent.toLowerCase();
        if(type === "all"){
            renderGames(games);
        } else {
            renderGames(games.filter(g => 
                g.signIn.toLowerCase() === type || g.normal.toLowerCase() === type
            ));
        }
    });
});
