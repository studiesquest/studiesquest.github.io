const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");

let currentFilter = "all";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function loadGames(){
grid.innerHTML = "";

games.forEach(game => {

const tile = document.createElement("div");
tile.className = "tile";

tile.dataset.playability = game.playability;
tile.dataset.title = game.title.toLowerCase();

const isFav = favorites.includes(game.title);

tile.innerHTML = `
<div class="favStar ${isFav ? "active" : ""}" data-title="${game.title}">⭐</div>
<img src="${game.image}">
<h3>${game.title}</h3>
<span class="playability">${game.playability}</span>
`;

tile.querySelector(".favStar").onclick = (e) => {
e.stopPropagation();
toggleFavorite(game.title);
};

tile.onclick = () => launchGame(game.url);

grid.appendChild(tile);

});

applyFilters();
}

function toggleFavorite(title){

if(favorites.includes(title)){
favorites = favorites.filter(f => f !== title);
}else{
favorites.push(title);
}

localStorage.setItem("favorites", JSON.stringify(favorites));
loadGames();
}

function launchGame(url){

const player = document.getElementById("gamePlayer");

player.innerHTML = `
<iframe src="${url}" frameborder="0" allowfullscreen></iframe>
`;

document.getElementById("playerSection").style.display = "block";
}

function filterGames(type){
currentFilter = type;
applyFilters();
}

function applyFilters(){

const searchValue = search.value.toLowerCase();

document.querySelectorAll(".tile").forEach(tile => {

let show = true;

if(currentFilter === "favorites"){
show = favorites.includes(tile.dataset.title);
}
else if(currentFilter !== "all"){
show = tile.dataset.playability === currentFilter;
}

if(!tile.dataset.title.includes(searchValue)){
show = false;
}

tile.style.display = show ? "block" : "none";

});

}

function searchGames(){
applyFilters();
}

loadGames();
