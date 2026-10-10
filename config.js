window.QX_CONFIG = { 

  /* ---------- General ---------- */
  site: {
    title: "Quantix Labs",                      
    name: "Quantix",                        
    nameAccent: "Labs",                   
    tagline: "Engineered beyond expectations.",
    logo: "assets/qx-mark.png",               
    discord: "https://discord.gg/quantixlabs",   
    discordLabel: "discord.gg/quantixlabs",       
    copyright: "© 2026 Quantix Labs"
  },

  /* ---------- Top menu (href "#id" jumps to a section) ---------- */
  nav: [
    { label: "Services",  href: "#services" },
    { label: "Standards", href: "#standards" },
    { label: "Process",   href: "#process" },
    { label: "Team",      href: "#team" },
    { label: "Careers",   href: "#join" }
  ],
  navButton: "Join Discord",

  /* ---------- Click-to-enter screen (needed for music to play) ---------- */
  intro: {
    enabled: true,
    button: "Click to Enter Main Website",
    hint: "Sound will play on the website you can mute or change the volume if needed."
  },

  /* ---------- Background music ---------- */
  music: {
    enabled: true,
    file: "Again.mp3",     
    title: "Again by: Shiloh Dynasty",       
    volume: 15,            // starting volume, 0–100
    loop: true
  },

  /* ---------- Hero (top of the page) ---------- */
  hero: {
    pillTag: "QX",
    pill: "FiveM & Discord Development",
    title: "Engineered",
    titleHighlight: "beyond expectations.",
    text: "Quantix Labs specializes in **developing custom FiveM resources, Discord bots, permission systems, and API integrations.** We provide reliable, optimized, and high-quality development solutions to help communities grow and operate smoothly.",
    primaryButton: "Join our Discord",
    secondaryButton: { label: "Explore services", href: "#services" },
    code: {
      file: "qx_dispatch/fxmanifest.lua",
      lines: [
        "-- Quantix Labs · qx_dispatch",
        "fx_version 'cerulean'",
        "game 'gta5'",
        "lua54 'yes'",
        "",
        "author 'Quantix Labs'",
        "description 'Building systems to ensure performance, reliability, and seamless experiences for every community.'",
        "version '2.1.0'",
        "",
        "shared_scripts { '@qx_lib/init.lua', 'config.lua' }",
        "client_scripts { 'client/*.lua' }",
        "server_scripts { '@qxmysql/lib/MySQL.lua', 'server/*.lua' }",
        "ui_page 'web/index.html'"
      ],
      footLeft: "Resource Name: qx_dispatch",
      footRight: "(FXM) Systems online"
    }
  },

  /* ---------- Trusted by ---------- */
  trusted: {
    show: true,
    title: "Built Frameworks by Quantix",
    text: "Built for and compatible with the frameworks that power FiveM.",
    items: [
      { name: "Quantix Framework - QX", logo: "assets/qx-mark.png", }
    ]
  },

  /* ---------- Services (wide: true makes a card span two columns) ---------- */
  services: {
    kicker: "What we build",
    title: "Four disciplines.",
    titleHighlight: "One studio.",
    text: "From the first line of Lua to the panel your staff logs into, every piece is written in-house and built to work together.",
    items: [
      { icon: "fivem",   tag: ".lua · NUI",  wide: true,
        title: "FiveM Development",
        text: "Custom scripts, framework conversions, full server builds and NUI interfaces your players will actually use.",
        tags: ["Custom resources", "Servers", "Anti-Cheat"] },
      { icon: "discord", tag: "discord.js",
        title: "Discord Bots",
        text: "Moderation, ticket queues, whitelist applications and in-game logging.",
        tags: ["Moderation", "Tickets", "Automation", "Dashboards"] },
      { icon: "web",     tag: "REST · JSON",
        title: "Discord Intergration",
        text: "Building Custom discord APIs, Discord permissions and Discord Guarding systems for Fivem Server/Community's",
        tags: ["Websites", "Panels", "Dashboards", "APIs"] },
      { icon: "code",    tag: "systems",     wide: true,
        title: "Systems & Assets",
        text: "Performance audits, bug fixing, framework migrations and ready-made assets for servers that need a hand.",
        tags: ["Development", "Systems", "Assets", "More"] }
    ]
  },

  /* ---------- Standards ---------- */
  standards: {
    kicker: "How we work",
    title: "The Quantix standard",
    text: "Five rules every project follows, whether it's a single script or a full server build.",
    items: [
      { icon: "bolt",        title: "Performance", text: "Every resource is profiled with resmon before delivery. No busy loops, no wasted ticks." },
      { icon: "bulb",        title: "Innovation",  text: "Original ideas built for your server, not reskinned leaks or recycled code." },
      { icon: "shield",      title: "Reliability", text: "Tested on a staging server under load before it ever touches your live city." },
      { icon: "chart",       title: "Scalability", text: "Code that holds up when your player count doubles, from 32 slots to a full OneSync server." },
      { icon: "integration", title: "Integration", text: "Game server, Discord and web talk to each other through clean APIs and webhooks." }
    ]
  },

  /* ---------- Process ---------- */
  process: {
    kicker: "From idea to live server",
    title: "How a project runs",
    steps: [
      { title: "Brief",  text: "Open a ticket in our Discord with what you need, your framework and your deadline." },
      { title: "Build",  text: "We scope it, quote it and start building, with progress previews as we go." },
      { title: "Test",   text: "Every release runs on our staging server and gets a resmon pass before handoff." },
      { title: "Launch", text: "We help you deploy, then stay on hand for fixes and updates after it goes live." }
    ]
  },

// exeutive team panel

  team: {
    kicker: "Executive team",
    title: "Meet the Executive team",
    text: "Quantix Labs is run by Founders & Owners, who run the studio and sign off on every project that ships.",
    members: [
      {
        name: "Cjay",
        initials: "CJ",
        avatar: "assets/cjay.jpg",
        role: "Founder & CEO",
        bio: "Founded Quantix Labs and leads the studio's direction, client work and Discord/FiveM development team.",
        badges: ["Founder", "CEO", "Discord Bot/FiveM Intergration Developer"],
        links: []
      },
      {
        name: "Jaxtti",
        initials: "JX",
        avatar: "assets/jaxtti.jpg",
        role: "Founder & CEO",
        bio: "Founded Quantix Labs and leads the studio's direction, client work and FiveM Scripting development team.",
        badges: ["Founder", "CEO", "QX Framework Developer"],
        links: []
      },
      {
        name: "Cajunz",
        initials: "CZ",
        avatar: "assets/cz.png",
        role: "Owner & CEO",
        bio: "Owner Quantix Labs and leads the Anti-Cheat system & Team",
        badges: ["Owner", "CEO", "FiveM Anti-Cheat Developer"],
        links: []
      },
    ]
  },

  /* ---------- Careers ---------- */
  careers: {
    show: true,
    kicker: "Careers",
    title: "Join our",
    titleHighlight: "development team",
    text: "We're growing. Whether you've built dozens of resources or you're writing your first script, there's a seat for you here.",
    checks: [
      "Experienced developers welcome",
      "No experience? No problem",
      "Learn, improve and be part of the team",
      "Pay, Developers get paid when they start learning more and grow as a developer",
    ],
    button: "Apply on Discord",
    tasks: [
      { icon: "code",    title: "Create scripts",        text: "Build new resources from scratch." },
      { icon: "file",    title: "Add & remove scripts",  text: "Install and clean up resources on live servers." },
      { icon: "sliders", title: "Edit & customize",      text: "Tailor features to each client's server." },
      { icon: "bug",     title: "Fix bugs & improve",    text: "Track down errors and make good code better." },
      { icon: "chart",   title: "Learn & grow",          text: "Get code reviews and mentoring from the team as you level up." }
    ]
  },

  /* ---------- Final call to action ---------- */
  cta: {
    title: "Ready to build your server?",
    text: "Open a ticket in our Discord and the Team will get back to you.",
    button: "Join Discord"
  }
};
