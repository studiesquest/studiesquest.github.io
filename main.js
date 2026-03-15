const grid = document.getElementById("gameGrid");

function loadGames(){

grid.innerHTML = "";

games.forEach(game => {

const tile = document.createElement("div");
tile.className = "tile";

tile.innerHTML = `
<img src="${game.image}">
<h3>${game.title}</h3>
<span class="playability">${game.playability}</span>
`;

tile.onclick = () => {
window.location.href = game.url;
};

grid.appendChild(tile);

});

}

loadGames();
