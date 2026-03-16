const games = [
{title:"Slope", src:"https://zapgames.io/slope.embed", thumbnail:"https://zapgames.io/cache/data/image/game/slope-game-h196x110.webp", signIn:"Playable"},
{title:"Smash Karts", src:"https://zapgames.io/smash-karts.embed", thumbnail:"https://zapgames.io/cache/data/image/game/smash-karts-h196x110.webp", signIn:"Playable"},
{title:"Drive Mad", src:"https://zapgames.io/drive-mad.embed", thumbnail:"https://zapgames.io/cache/data/image/game/drive-mad-h196x110.webp", signIn:"Playable"},
{title:"Moto X3M", src:"https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?utm_source=azgames.io&utm_medium=moto-x3m-bike-race-game&utm_campaign=block-and-redirect.embed", thumbnail:"https://zapgames.io/cache/data/image/game/moto-x3m-h196x110.webp", signIn:"Playable"},
{title:"Moto X3M Pool Party", src:"https://zapgames.io/moto-x3m-5-pool-party.embed", thumbnail:"https://zapgames.io/cache/data/image/game/moto-x3m-5-pool-party-h196x110.webp", signIn:"Playable"},
{title:"Stickman Hook", src:"https://zapgames.io/stickman-hook.embed", thumbnail:"https://zapgames.io/cache/data/image/game/stickman-hook-h196x110.webp", signIn:"Playable"},
{title:"Paper.io 2", src:"https://zapgames.io/paperio.embed", thumbnail:"https://zapgames.io/cache/data/image/game/paperio-h196x110.webp", signIn:"Playable"},
{title:"Basketball Stars", src:"https://zapgames.io/basketball-stars.embed", thumbnail:"https://zapgames.io/cache/data/image/game/basketball-stars-h196x110.webp", signIn:"Playable"},
{title:"Rocket Soccer", src:"https://zapgames.io/rocket-soccer.embed", thumbnail:"https://zapgames.io/cache/data/image/game/rocket-soccer-f546x307.webp", signIn:"Playable"},
{title:"Space Waves", src:"https://zapgames.io/space-waves.embed", thumbnail:"https://zapgames.io/cache/data/image/game/space-waves-h196x110.webp", signIn:"Playable"},
{title:"Drift Boss", src:"https://zapgames.io/drift-boss.embed", thumbnail:"https://zapgames.io/cache/data/image/game/drift-boss-h196x110.webp", signIn:"Playable"},
{title:"Snow Rider", src:"https://zapgames.io/snow-rider.embed", thumbnail:"https://zapgames.io/cache/data/image/game/snow-rider-h196x110.webp", signIn:"Playable"},
{title:"Drift Hunters", src:"https://zapgames.io/drift-hunters.embed", thumbnail:"https://zapgames.io/cache/data/image/game/drift-hunters-h196x110.webp", signIn:"Playable"},
{title:"Jetski Race", src:"https://zapgames.io/jetski-race.embed", thumbnail:"https://zapgames.io/cache/data/image/game/jetski-race-h196x110.webp", signIn:"Playable"},
{title:"Football Bros", src:"https://zapgames.io/football-bros.embed", thumbnail:"https://zapgames.io/cache/data/image/game/football-bros-h196x110.webp", signIn:"Playable"},
{title:"Retro Bowl", src:"https://zapgames.io/retro-bowl.embed", thumbnail:"https://zapgames.io/cache/data/image/game/retro-bowl-h196x110.webp", signIn:"Playable"},
{title:"Speed Stars", src:"https://zapgames.io/speed-stars.embed", thumbnail:"https://zapgames.io/cache/data/image/game/speed-stars-h196x110.webp", signIn:"Playable"},
{title:"Soccer Bros", src:"https://zapgames.io/soccer-bros.embed", thumbnail:"https://zapgames.io/cache/data/image/game/soccer-bros-h196x110.webp", signIn:"Playable"},
{title:"Snow Road", src:"https://azgames.io/snow-road.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/snowroad-m180x180.png", signIn:"Playable"},
{title:"Wacky Flip", src:"https://azgames.io/wacky-flip.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/wackyflip-m180x180.png", signIn:"Playable"},
{title:"Tap Road", src:"https://azgames.io/tap-road.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/taproad-m180x180.jpg", signIn:"Playable"},
{title:"Curve Rush", src:"https://azgames.io/curve-rush.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/curverush2-m180x180.png", signIn:"Playable"},
{title:"Bike Xtreme", src:"https://azgames.io/bike-xtreme.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/bikextreme11-m180x180.png", signIn:"Playable"},
{title:"Escape Road", src:"https://azgames.io/escape-road.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/escaperoad-m180x180.png", signIn:"Playable"},
{title:"Escape Road 2", src:"https://azgames.io/escape-road-2.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/escaperoad21-m180x180.png", signIn:"Playable"},
{title:"Escape Road City 2", src:"https://azgames.io/escape-road-city-2.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/escaperoadcity2-m180x180.png", signIn:"Playable"},
{title:"Slope 2", src:"https://azgames.io/slope-2.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/slope2-m180x180.png", signIn:"Playable"},
{title:"Slope 3", src:"https://azgames.io/slope-3.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/slope1-m180x180.png", signIn:"Playable"},
{title:"Head Soccer 2024", src:"https://azgames.io/head-soccer-2024.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/thumbnail_90x90-m180x180.jpg", signIn:"Playable"},
{title:"People Playground", src:"https://azgames.io/ragdoll-playground.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/ragdollplayground-m180x180.png", signIn:"Playable"},
{title:"People Playground", src:"https://zapgames.io/five-nights-at-epsteins.embed", thumbnail:"https://zapgames.io/cache/data/image/game/five-nights-at-epsteins-h196x110.webp", "signIn:"Playable"}
];

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
<div class="favStar ${fav?"active":""}">⭐</div>
<img src="${game.thumbnail}">
<h3>${game.title}</h3>
<span class="playability">${game.signIn}</span>
`;

tile.querySelector(".favStar").onclick=(e)=>{
e.stopPropagation();
toggleFavorite(game.title);
};

tile.onclick=()=>{
frame.src=game.src;
modal.style.display="block";
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
