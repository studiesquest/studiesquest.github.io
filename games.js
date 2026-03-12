const games = [

/* REQUIRED */

{title:"Slope",src:"https://zapgames.io/slope.embed"},
{title:"Smash Karts",src:"https://zapgames.io/smash-karts.embed"},
{title:"Arrow Archers",src:"https://zapgames.io/arrow-archers.embed"},
{title:"Drive Mad",src:"https://zapgames.io/drive-mad.embed"},
{title:"People Playground (Sandbox)",src:"https://azgames.io/ragdoll-playground.embed"},
{title:"Minecraft Classic",src:"https://classic.minecraft.net"},

/* TRENDING */

{title:"Subway Surfers",src:"https://zapgames.io/subway-surfers.embed"},
{title:"Run 3",src:"https://zapgames.io/run-3.embed"},
{title:"Tunnel Rush",src:"https://zapgames.io/tunnel-rush.embed"},
{title:"Retro Bowl",src:"https://zapgames.io/retro-bowl.embed"},
{title:"1v1 LOL",src:"https://zapgames.io/1v1-lol.embed"},
{title:"Drift Hunters",src:"https://zapgames.io/drift-hunters.embed"},
{title:"Moto X3M",src:"https://zapgames.io/moto-x3m.embed"},
{title:"Snow Rider 3D",src:"https://zapgames.io/snow-rider-3d.embed"},
{title:"Temple Run 2",src:"https://zapgames.io/temple-run-2.embed"},

/* MULTIPLAYER */

{title:"Rooftop Snipers",src:"https://zapgames.io/rooftop-snipers.embed"},
{title:"Getaway Shootout",src:"https://zapgames.io/getaway-shootout.embed"},
{title:"Basket Random",src:"https://zapgames.io/basket-random.embed"},
{title:"Soccer Random",src:"https://zapgames.io/soccer-random.embed"},
{title:"Gun Mayhem",src:"https://zapgames.io/gun-mayhem.embed"},
{title:"Gun Mayhem 2",src:"https://zapgames.io/gun-mayhem-2.embed"},

/* ACTION */

{title:"Vex 6",src:"https://zapgames.io/vex-6.embed"},
{title:"Vex 7",src:"https://zapgames.io/vex-7.embed"},
{title:"Stickman Hook",src:"https://zapgames.io/stickman-hook.embed"},
{title:"Crossy Road",src:"https://zapgames.io/crossy-road.embed"},
{title:"Stack Ball",src:"https://zapgames.io/stack-ball.embed"},
{title:"Color Switch",src:"https://zapgames.io/color-switch.embed"},

/* IO GAMES */

{title:"Agar.io",src:"https://zapgames.io/agar-io.embed"},
{title:"Slither.io",src:"https://zapgames.io/slither-io.embed"},
{title:"Paper.io 2",src:"https://zapgames.io/paper-io-2.embed"},
{title:"Hole.io",src:"https://zapgames.io/hole-io.embed"},

/* HORROR */

{title:"FNAF",src:"https://zapgames.io/fnaf.embed"},
{title:"FNAF 2",src:"https://zapgames.io/fnaf-2.embed"},
{title:"FNAF 3",src:"https://zapgames.io/fnaf-3.embed"},
{title:"Granny",src:"https://zapgames.io/granny.embed"},
{title:"Granny 2",src:"https://zapgames.io/granny-2.embed"},

/* SHOOTERS */

{title:"Time Shooter",src:"https://zapgames.io/time-shooter.embed"},
{title:"Time Shooter 2",src:"https://zapgames.io/time-shooter-2.embed"},
{title:"Time Shooter 3",src:"https://zapgames.io/time-shooter-3.embed"},
{title:"Subway Clash 3D",src:"https://zapgames.io/subway-clash-3d.embed"},

/* CASUAL */

{title:"Monkey Mart",src:"https://zapgames.io/monkey-mart.embed"},
{title:"Tiny Fishing",src:"https://zapgames.io/tiny-fishing.embed"},
{title:"Idle Mining Empire",src:"https://zapgames.io/idle-mining-empire.embed"},
{title:"Helix Jump",src:"https://zapgames.io/helix-jump.embed"},
{title:"Block Blast",src:"https://zapgames.io/block-blast.embed"},

/* CLASSICS */

{title:"Bad Ice Cream",src:"https://zapgames.io/bad-ice-cream.embed"},
{title:"Bad Ice Cream 2",src:"https://zapgames.io/bad-ice-cream-2.embed"},
{title:"Bad Ice Cream 3",src:"https://zapgames.io/bad-ice-cream-3.embed"},
{title:"Among Us (Browser)",src:"https://zapgames.io/among-us.embed"}

];

const container = document.getElementById("games");

games.forEach(game => {

const div = document.createElement("div");
div.className="game";

div.innerHTML = `
<h2>${game.title}</h2>
<iframe src="${game.src}"></iframe>
`;

container.appendChild(div);

});
