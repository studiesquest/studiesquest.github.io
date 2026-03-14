const games = [
{title:"Slope", src:"https://zapgames.io/slope.embed", thumbnail:"https://zapgames.io/cache/data/image/game/slope-game-h196x110.webp", description:"Dodge obstacles down the slope.", signIn:"Playable"},
{title:"Smash Karts", src:"https://zapgames.io/smash-karts.embed", thumbnail:"https://zapgames.io/cache/data/image/game/smash-karts-h196x110.webp", description:"Multiplayer kart battles.", signIn:"Playable"},
{title:"Drive Mad", src:"https://zapgames.io/drive-mad.embed", thumbnail:"https://zapgames.io/cache/data/image/game/drive-mad-h196x110.webp", description:"Crazy driving physics.", signIn:"Playable"},
{title:"Moto X3M", src:"https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?utm_source=azgames.io&utm_medium=moto-x3m-bike-race-game&utm_campaign=block-and-redirect.embed", thumbnail:"https://zapgames.io/cache/data/image/game/moto-x3m-h196x110.webp", description:"Bike obstacle course.", signIn:"Playable"},
{title:"Moto X3M Pool Party", src:"https://zapgames.io/moto-x3m-5-pool-party.embed", thumbnail:"https://zapgames.io/cache/data/image/game/moto-x3m-5-pool-party-h196x110.webp", description:"Water park bike tracks.", signIn:"Playable"},
{title:"Stickman Hook", src:"https://zapgames.io/stickman-hook.embed", thumbnail:"https://zapgames.io/cache/data/image/game/stickman-hook-h196x110.webp", description:"Swing through levels.", signIn:"Playable"},
{title:"Paper.io 2", src:"https://zapgames.io/paperio.embed", thumbnail:"https://zapgames.io/cache/data/image/game/paperio-h196x110.webp", description:"Expand territory.", signIn:"Playable"},
{title:"Basketball Stars", src:"https://zapgames.io/basketball-stars.embed", thumbnail:"https://zapgames.io/cache/data/image/game/basketball-stars-h196x110.webp", description:"Arcade basketball.", signIn:"Playable"},
{title:"Rocket Soccer", src:"https://zapgames.io/rocket-soccer.embed", thumbnail:"https://zapgames.io/cache/data/image/game/rocket-soccer-f546x307.webp", description:"Score goals.", signIn:"Playable"},
{title:"Space Waves", src:"https://zapgames.io/space-waves.embed", thumbnail:"https://zapgames.io/cache/data/image/game/space-waves-h196x110.webp", description:"Pass through the obstacles.", signIn:"Playable"},
{title:"Drift Boss", src:"https://zapgames.io/drift-boss.embed", thumbnail:"https://zapgames.io/cache/data/image/game/drift-boss-h196x110.webp", description:"Drift through tight corners.", signIn:"Playable"},

{title:"Snow Rider", src:"https://zapgames.io/snow-rider.embed", thumbnail:"https://zapgames.io/cache/data/image/game/snow-rider-h196x110.webp", description:"Ride a sled down snowy hills.", signIn:"Playable"},

{title:"Drift Hunters", src:"https://zapgames.io/drift-hunters.embed", thumbnail:"https://zapgames.io/cache/data/image/game/drift-hunters-h196x110.webp", description:"Realistic 3D drifting simulator.", signIn:"Playable"},

{title:"Jetski Race", src:"https://zapgames.io/jetski-race.embed", thumbnail:"https://zapgames.io/cache/data/image/game/jetski-race-h196x110.webp", description:"High speed water racing.", signIn:"Playable"},

{title:"Football Bros", src:"https://zapgames.io/football-bros.embed", thumbnail:"https://zapgames.io/cache/data/image/game/football-bros-h196x110.webp", description:"Arcade football battles.", signIn:"Playable"},

{title:"Retro Bowl", src:"https://zapgames.io/retro-bowl.embed", thumbnail:"https://zapgames.io/cache/data/image/game/retro-bowl-h196x110.webp", description:"Retro football team manager.", signIn:"Playable"},

{title:"Speed Stars", src:"https://zapgames.io/speed-stars.embed", thumbnail:"https://zapgames.io/cache/data/image/game/speed-stars-h196x110.webp", description:"Fast paced racing game.", signIn:"Playable"},

{title:"Soccer Bros", src:"https://zapgames.io/soccer-bros.embed", thumbnail:"https://zapgames.io/cache/data/image/game/soccer-bros-h196x110.webp", description:"2 player soccer battles.", signIn:"Playable"},

{title:"Snow Road", src:"https://azgames.io/snow-road.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/snowroad-m180x180.png", description:"Drive through snowy tracks.", signIn:"Playable"},

{title:"Wacky Flip", src:"https://azgames.io/wacky-flip.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/wackyflip-m180x180.png", description:"Perform crazy flips.", signIn:"Playable"},

{title:"Tap Road", src:"https://azgames.io/tap-road.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/taproad-m180x180.jpg", description:"Fast reflex road game.", signIn:"Playable"},

{title:"Curve Rush", src:"https://azgames.io/curve-rush.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/curverush2-m180x180.png", description:"Dodge obstacles on curves.", signIn:"Playable"},

{title:"Bike Xtreme", src:"https://azgames.io/bike-xtreme.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/bikextreme11-m180x180.png", description:"Extreme bike racing.", signIn:"Playable"},

{title:"Escape Road", src:"https://azgames.io/escape-road.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/escaperoad-m180x180.png", description:"Escape police chases.", signIn:"Playable"},

{title:"Escape Road 2", src:"https://azgames.io/escape-road-2.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/escaperoad21-m180x180.png", description:"Sequel to Escape Road.", signIn:"Playable"},

{title:"Escape Road City 2", src:"https://azgames.io/escape-road-city-2.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/escaperoadcity2-m180x180.png", description:"Escape through city roads.", signIn:"Playable"},

{title:"Slope 2", src:"https://azgames.io/slope-2.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/slope2-m180x180.png", description:"Faster version of Slope.", signIn:"Playable"},

{title:"Slope 3", src:"https://azgames.io/slope-3.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/slope1-m180x180.png", description:"Harder slope challenge.", signIn:"Playable"},

{title:"Head Soccer 2024", src:"https://azgames.io/head-soccer-2024.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/thumbnail_90x90-m180x180.jpg", description:"Arcade soccer battles.", signIn:"Playable"},

{title:"People Playground", src:"https://azgames.io/ragdoll-playground.embed", thumbnail:"https://azgames.io/upload/cache/upload/imgs/ragdollplayground-m180x180.png", description:"Physics sandbox ragdoll game.", signIn:"Playable"}
];

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filters button");
const modal = document.getElementById("modal");
const gameFrame = document.getElementById("gameFrame");
const homeButton = document.getElementById("home");

let favorites = [];

function renderGames(list) {
  grid.innerHTML = "";
  list.forEach(game => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <span class="tag ${game.signIn.toLowerCase().replace(/\s/g,'')}">${game.signIn}</span>
    `;
    tile.addEventListener("click", () => {
      gameFrame.src = game.src;
      modal.style.display = "flex";
    });
    grid.appendChild(tile);
  });
}

renderGames(games);

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  renderGames(games.filter(g => g.title.toLowerCase().includes(val)));
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    if(filter === "All") renderGames(games);
    else if(filter === "Favorites") renderGames(games.filter(g => favorites.includes(g.title)));
    else renderGames(games.filter(g => g.signIn === filter));
  });
});

homeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
