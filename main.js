const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");

let currentFilter = "all";

function loadGames(){

grid.innerHTML = "";

games.forEach(game => {

const tile = document.createElement("div");
tile.className = "tile";
tile.dataset.category = game.category;

tile.innerHTML = `
<img src="${game.image}">
<h3>${game.title}</h3>
<span class="playability">${game.playability}</span>
`;

tile.onclick = () => launchGame(game.url);

grid.appendChild(tile);

});

}

function launchGame(url){

const player = document.getElementById("gamePlayer");

player.innerHTML = `
<iframe src="${url}" frameborder="0" allowfullscreen></iframe>
`;

document.getElementById("playerSection").style.display = "block";

}

function filterGames(category){

currentFilter = category;

document.querySelectorAll(".tile").forEach(tile => {

if(category === "all" || tile.dataset.category === category){
tile.style.display = "block";
}else{
tile.style.display = "none";
}

});

}

function searchGames(){

const value = search.value.toLowerCase();

document.querySelectorAll(".tile").forEach(tile => {

const title = tile.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){
tile.style.display = "block";
}else{
tile.style.display = "none";
}

});

}

loadGames();
