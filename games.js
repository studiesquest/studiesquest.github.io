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
// another way of making this its lowk annoying to change them on one line heres a template
  {
    title: "Tiny Arena",
    src: "https://zapgames.io/tiny-arena.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/tinyarena-h196x110.webp",
    description: "Fast-paced arena combat.",
    signIn: "Hardly Playable"
  },

  {
    title: "FrontWars.io",
    src: "https://zapgames.io/frontwars-io.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/frontwarsio-h196x110.webp",
    description: "Multiplayer strategy shooter.",
    signIn: "Hardly Playable"
  },

  {
    title: "Orbit Beats",
    src: "https://zapgames.io/orbit-beats.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/orbitbeats-h196x110.webp",
    description: "Rhythm-based space shooting.",
    signIn: "Hardly Playable"
  },

  {
    title: "Rob Brainrot 2",
    src: "https://zapgames.io/rob-brainrot-2.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/robbrainrot2-h196x110.webp",
    description: "Chaotic zombie survival.",
    signIn: "Hardly Playable"
  },

  {
    title: "Bloxd.io",
    src: "https://zapgames.io/bloxdio.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/bloxdio-h196x110.webp",
    description: "Block-style multiplayer shooter.",
    signIn: "Hardly Playable"
  },

  {
    title: "Escape Road",
    src: "https://zapgames.io/escape-road.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/escaperoad-h196x110.webp",
    description: "High-speed escape driving.",
    signIn: "Playable"
  },

  {
    title: "Traffic Road",
    src: "https://zapgames.io/traffic-road.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/traffic-road-h196x110.webp",
    description: "Avoid traffic and survive.",
    signIn: "Playable"
  },

  {
    title: "Tiny Wings",
    src: "https://azgames.io/tiny-wings.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/tinywings-h196x110.webp",
    description: "Relaxing flying timing game.",
    signIn: "Playable"
  },

  {
    title: "Orbit Kick",
    src: "https://zapgames.io/orbit-kick.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/orbitkick-h196x110.webp",
    description: "Score trick shots in orbit.",
    signIn: "Playable"
  },

  {
    title: "Traffic Rally",
    src: "https://zapgames.io/traffic-rally.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/trafficrally-h196x110.webp",
    description: "Arcade racing challenge.",
    signIn: "Playable"
  },

  {
    title: "Cowboy Safari",
    src: "https://azgames.io/cowboy-safari.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/cowboysafari-h196x110.webp",
    description: "Ride animals and collect coins.",
    signIn: "Playable"
  },

  {
    title: "Pingo Gang",
    src: "https://azgames.io/pingo-gang.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/pingogang-h196x110.webp",
    description: "Fun arcade puzzle challenge.",
    signIn: "Playable"
  },

  {
    title: "Jet Rush",
    src: "https://zapgames.io/jet-rush.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/jetrush-h196x110.webp",
    description: "Fly fast through obstacles.",
    signIn: "Playable"
  },

  {
    title: "Basket Random",
    src: "https://zapgames.io/basket-random.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/basketrandom-h196x110.webp",
    description: "Chaotic physics basketball.",
    signIn: "Playable"
  },

  {
    title: "Stack",
    src: "https://azgames.io/stack.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/stack-h196x110.webp",
    description: "Stack blocks perfectly.",
    signIn: "Playable"
  },

  {
    title: "Drift Boss",
    src: "https://zapgames.io/drift-boss.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/driftboss-h196x110.webp",
    description: "One-button drifting game.",
    signIn: "Playable"
  },

  {
    title: "Tunnel Rush",
    src: "https://zapgames.io/tunnel-rush.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/tunnelrush-h196x110.webp",
    description: "Fast reflex tunnel racing.",
    signIn: "Playable"
  },

  {
    title: "Run 3",
    src: "https://zapgames.io/run-3.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/run3-h196x110.webp",
    description: "Run through space tunnels.",
    signIn: "Playable"
  },

  {
    title: "Temple Run 2",
    src: "https://azgames.io/temple-run-2.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/templerun2-h196x110.webp",
    description: "Escape the temple endlessly.",
    signIn: "Playable"
  },

  {
    title: "People Playground",
    src: "https://zapgames.io/ragdoll-playground.embed",
    thumbnail: "https://zapgames.io/cache/data/image/game/ragdollplayground-h196x110.webp",
    description: "Physics sandbox destruction.",
    signIn: "Playable"
  }

];
