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
// add remaining games as in your previous games.js list
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
