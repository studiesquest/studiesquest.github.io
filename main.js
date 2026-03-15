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

tile.innerHTML = `
<img src="${game.image}">
<h3>${game.title}</h3>
<span class="playability">${game.playability}</span>
`;

tile.onclick = () => launchGame(game.url);

grid.appendChild(tile);

});

applyFilters();
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

document.querySelectorAll(".tile").forEach(tile => {

let show = true;

if(currentFilter !== "all"){
show = tile.dataset.playability === currentFilter;
}

const searchValue = search.value.toLowerCase();

if(!tile.dataset.title.includes(searchValue)){
show = false;
}

tile.style.display = show ? "block" : "none";

});

}

function searchGames(){
applyFilters();
}

function showFavorites(){

document.querySelectorAll(".tile").forEach(tile => {

const title = tile.dataset.title;

if(favorites.includes(title)){
tile.style.display = "block";
}else{
tile.style.display = "none";
}

});

}

loadGames();
