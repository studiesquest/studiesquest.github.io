const games = [
  {
    title: "Slope",
    src: "https://zapgames.io/slope.embed",
    thumbnail: "https://zapgames.io/thumb/slope.png",
    description: "Dodge obstacles down the slope.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Smash Karts",
    src: "https://zapgames.io/smash-karts.embed",
    thumbnail: "https://zapgames.io/thumb/smash-karts.png",
    description: "Fast multiplayer kart battles.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Drive Mad",
    src: "https://zapgames.io/drive-mad.embed",
    thumbnail: "https://zapgames.io/thumb/drive-mad.png",
    description: "Crazy driving and destruction.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Ragdoll Archers",
    src: "https://zapgames.io/ragdoll-archers.embed",
    thumbnail: "https://zapgames.io/thumb/ragdoll-archers.png",
    description: "Aim and shoot in ragdoll combat.",
    signIn: "Slightly Unplayable",
    normal: "Playable"
  },
  {
    title: "Subway Surfers",
    src: "https://zapgames.io/subway-surfers.embed",
    thumbnail: "https://zapgames.io/thumb/subway-surfers.png",
    description: "Endless runner with swipes and jumps.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Temple Run 2",
    src: "https://zapgames.io/temple-run-2.embed",
    thumbnail: "https://zapgames.io/thumb/temple-run-2.png",
    description: "Dodge obstacles and collect coins.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Stickman Hook",
    src: "https://zapgames.io/stickman-hook.embed",
    thumbnail: "https://zapgames.io/thumb/stickman-hook.png",
    description: "Swing through tricky levels.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Moto X3M",
    src: "https://zapgames.io/moto-x3m.embed",
    thumbnail: "https://zapgames.io/thumb/moto-x3m.png",
    description: "Motorbike obstacle madness.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Moto X3M Pool Party",
    src: "https://zapgames.io/moto-x3m-pool-party.embed",
    thumbnail: "https://zapgames.io/thumb/moto-x3m-pool-party.png",
    description: "Splashy bike stunt challenges.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Moto X3M Winter",
    src: "https://zapgames.io/moto-x3m-winter.embed",
    thumbnail: "https://zapgames.io/thumb/moto-x3m-winter.png",
    description: "Winter stunt motorbike madness.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Run 3",
    src: "https://zapgames.io/run-3.embed",
    thumbnail: "https://zapgames.io/thumb/run-3.png",
    description: "Jump across endless tunnels.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Tunnel Rush",
    src: "https://zapgames.io/tunnel-rush.embed",
    thumbnail: "https://zapgames.io/thumb/tunnel-rush.png",
    description: "Fast reflex tunnel dash.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "1v1.LOL",
    src: "https://zapgames.io/1v1.lol.embed",
    thumbnail: "https://zapgames.io/thumb/1v1.lol.png",
    description: "Build and shoot arena battles.",
    signIn: "Hardly Playable",
    normal: "Playable"
  },
  {
    title: "Krunker.io",
    src: "https://zapgames.io/krunker-io.embed",
    thumbnail: "https://zapgames.io/thumb/krunker-io.png",
    description: "Fast-paced FPS online.",
    signIn: "Hardly Playable",
    normal: "Playable"
  },
  {
    title: "Basketball Stars",
    src: "https://zapgames.io/basketball-stars.embed",
    thumbnail: "https://zapgames.io/thumb/basketball-stars.png",
    description: "Arcade basketball multiplayer.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Basket Random",
    src: "https://zapgames.io/basket-random.embed",
    thumbnail: "https://zapgames.io/thumb/basket-random.png",
    description: "Fun physics basketball game.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Soccer Random",
    src: "https://zapgames.io/soccer-random.embed",
    thumbnail: "https://zapgames.io/thumb/soccer-random.png",
    description: "Score goals with random teams.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Getaway Shootout",
    src: "https://zapgames.io/getaway-shootout.embed",
    thumbnail: "https://zapgames.io/thumb/getaway-shootout.png",
    description: "Escape and shoot your opponent.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Drift Hunters",
    src: "https://zapgames.io/drift-hunters.embed",
    thumbnail: "https://zapgames.io/thumb/drift-hunters.png",
    description: "Drift and race realistic cars.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Snow Rider 3D",
    src: "https://zapgames.io/snow-rider-3d.embed",
    thumbnail: "https://zapgames.io/thumb/snow-rider-3d.png",
    description: "Snowy bike stunt action.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Crossy Road",
    src: "https://zapgames.io/crossy-road.embed",
    thumbnail: "https://zapgames.io/thumb/crossy-road.png",
    description: "Avoid traffic and obstacles endlessly.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Paper.io 2",
    src: "https://zapgames.io/paper-io-2.embed",
    thumbnail: "https://zapgames.io/thumb/paper-io-2.png",
    description: "Expand your territory online.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Hole.io",
    src: "https://zapgames.io/hole-io.embed",
    thumbnail: "https://zapgames.io/thumb/hole-io.png",
    description: "Eat everything in the city to grow.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Stack Ball",
    src: "https://zapgames.io/stack-ball.embed",
    thumbnail: "https://zapgames.io/thumb/stack-ball.png",
    description: "Smash through stacks while falling.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Helix Jump",
    src: "https://zapgames.io/helix-jump.embed",
    thumbnail: "https://zapgames.io/thumb/helix-jump.png",
    description: "Bounce down the helix tower.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Stickman Supreme Duelist",
    src: "https://zapgames.io/stickman-supreme-duelist.embed",
    thumbnail: "https://zapgames.io/thumb/stickman-supreme-duelist.png",
    description: "Physics-based stickman fights.",
    signIn: "Slightly Unplayable",
    normal: "Playable"
  },
  {
    title: "Car Rush",
    src: "https://zapgames.io/car-rush.embed",
    thumbnail: "https://zapgames.io/thumb/car-rush.png",
    description: "Top-down racing mayhem.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Madalin Stunt Cars 2",
    src: "https://zapgames.io/madalin-stunt-cars-2.embed",
    thumbnail: "https://zapgames.io/thumb/madalin-stunt-cars-2.png",
    description: "Perform insane car stunts.",
    signIn: "Playable",
    normal: "Playable"
  },
  {
    title: "Among Us",
    src: "https://zapgames.io/among-us.embed",
    thumbnail: "https://zapgames.io/thumb/among-us.png",
    description: "Social deduction multiplayer.",
    signIn: "Slightly Unplayable",
    normal: "Playable"
  },
  {
    title: "People Playground",
    src: "https://azgames.io/ragdoll-playground.embed",
    thumbnail: "https://azgames.io/thumb/ragdoll-playground.png",
    description: "Sandbox physics fun.",
    signIn: "Playable",
    normal: "Playable"
  }
];
