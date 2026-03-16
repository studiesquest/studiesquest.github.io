const grid = document.getElementById("grid");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const frame = document.getElementById("gameFrame");
const home = document.getElementById("home");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentFilter = "All";

function loadGames(){

grid.innerHTML="";

games.forEach(game=>{

const tile=document.createElement("div");
tile.className="tile";
tile.dataset.playability=game.signIn;
tile.dataset.title=game.title.toLowerCase();

const fav=favorites.includes(game.title);

tile.innerHTML=`
<img src="${game.thumbnail}" loading="lazy">

<h3>${game.title}</h3>

<div class="gameInfo">
<span class="playability">${game.signIn}</span>
<div class="favStar ${fav?"active":""}">⭐</div>
</div>
`;

tile.querySelector(".favStar").onclick=(e)=>{
e.stopPropagation();
toggleFavorite(game.title);
};

tile.onclick=()=>{
frame.src=game.src;
modal.style.display="flex";
};

grid.appendChild(tile);

});

applyFilters();
}

function toggleFavorite(title){

if(favorites.includes(title)){
favorites=favorites.filter(f=>f!==title);
}else{
favorites.push(title);
}

localStorage.setItem("favorites",JSON.stringify(favorites));
loadGames();
}

function applyFilters(){

const value=search.value.toLowerCase();

document.querySelectorAll(".tile").forEach(tile=>{

let show=true;

if(currentFilter==="Favorites"){
show=favorites.includes(tile.querySelector("h3").innerText);
}
else if(currentFilter!=="All"){
show=tile.dataset.playability===currentFilter;
}

if(!tile.dataset.title.includes(value)){
show=false;
}

tile.style.display=show?"block":"none";

});

}

document.querySelectorAll(".filters button").forEach(btn=>{
btn.onclick=()=>{
currentFilter=btn.dataset.filter;
applyFilters();
};
});

search.addEventListener("input",applyFilters);

home.onclick=()=>{
modal.style.display="none";
frame.src="";
};

loadGames();
