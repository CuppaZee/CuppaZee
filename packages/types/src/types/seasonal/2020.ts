import {
  PointsInterface,
  TypeHidden,
  TypeID,
  TypeInterface,
  TypeMeta,
  TypeState,
  TypeTags,
} from "../../munzee";

export default [
  {
    name: "20/20 Vision",
    id: "vision2020",
    starts: "2020-01-02T15:00:00-06:00",
    ends: "2020-12-31T23:59:00-06:00",
    specials: [
      {
        name: "Spectacular Spectacles",
        icon: "spectacularspectacles2020vision",
        id: 2282,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "The King's Sunglasses",
        icon: "theking'ssunglasses2020vision",
        id: 2283,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Welding Goggles",
        icon: "weldinggoggles2020vision",
        id: 2284,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Flip Glasses",
        icon: "flipglasses2020vision",
        id: 2285,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Ski Goggles",
        icon: "skigoggles2020vision",
        id: 2286, //
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Theatre Binoculars",
        icon: "theatrebinoculars2020vision",
        id: 2287,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Joke Glasses",
        icon: "jokeglasses2020vision",
        id: 2288, //
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "3D Glasses",
        icon: "3dglasses2020vision",
        id: 2289,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Viewfinder",
        icon: "viewfinder2020vision",
        id: 2290,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "VR Goggles",
        icon: "vrgoggles2020vision",
        id: 2291,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Jeweler Loupe",
        icon: "jewelerloupe2020vision",
        id: 2292,
        duration: 12,
        lands_on: ["munzee"],
        extra: {
          alt_icons: ["jewelerloupe2020glasses"],
        },
      },
      {
        name: "Aviator",
        icon: "aviator2020vision",
        id: 2293,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
        extra: {
          alt_icons: ["aviators2020vision"],
        },
      },
      {
        name: "Summer Shades",
        icon: "summershades2020vision",
        id: 2294,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Party Glasses",
        icon: "partyglasses2020vision",
        id: 2295,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Broken Glasses",
        icon: "brokenglasses2020vision",
        id: 2296,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Emerald City Glasses",
        icon: "emeraldcityglasses2020vision",
        id: 2297,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Peace Glasses",
        icon: "peaceglasses2020vision",
        id: 2298,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Hunting Glasses",
        icon: "huntingglasses2020vision",
        id: 2299,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Cat-Eye Glasses",
        icon: "cat-eyeglasses2020vision",
        id: 2300,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Disguise Glasses",
        icon: "disguiseglasses2020vision",
        id: 2301,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Microscope Glasses",
        icon: "microscopeglasses2020vision",
        id: 2302,
        duration: 12,
        lands_on: ["munzee"],
      },
      {
        name: "Meme Glasses",
        icon: "memeglasses2020vision",
        id: 2303,
        duration: 12,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Glow in the Dark Glasses",
        icon: "glowinthedarkglasses2020vision",
        id: 2304,
        duration: 12,
        lands_on: ["munzee"],
      },
    ],
  },
  {
    name: "Walla EggZ",
    id: "wallaeggz2020",
    starts: "2020-11-24T12:00:00-05:00",
    ends: "2020-12-15T23:59:00-05:00",
    specials: [
      {
        name: "Walla Joy Egg",
        icon: "wallajoyegg",
        id: "null_wallajoyegg",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          (type) =>
            type.has_tag(TypeTags.TypeGaming) &&
            type.state === TypeState.Virtual,
        ],
        hidden: [TypeHidden.Capture],
      },
      {
        name: "Walla Surprise Egg",
        icon: "wallasurpriseegg",
        id: "null_wallasurpriseegg",
        duration: 4,
        lands_on: [
          "munzee",
          "egg",
          (type) =>
            type.has_tag(TypeTags.TypeGaming) &&
            type.state === TypeState.Physical,
        ],
        hidden: [TypeHidden.Capture],
      },
      {
        name: "Chocolate Honeycombs",
        icon: "chocolatehoneycombs",
        id: "null_chocolatehoneycombs",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Green Unicorn Toy Rocker",
        icon: "greenunicorntoyrocker",
        id: "null_greenunicorntoyrocker",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Mixed Candy",
        icon: "mixedcandy",
        id: "null_mixedcandy",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Mini Bubbles",
        icon: "minibubbles",
        id: "null_minibubbles",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Popper Toy",
        icon: "poppertoy",
        id: "null_poppertoy",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Gummy WallaBees",
        icon: "gummywallabees",
        id: "null_gummywallabees",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Plastic Dinosaur",
        icon: "plasticdinosaur",
        id: "null_plasticdinosaur",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
      {
        name: "Pink Unicorn Toy Rocker",
        icon: "pinkunicorntoyrocker",
        id: "null_pinkunicorntoyrocker",
        duration: 4,
        lands_on: [],
        hidden: [TypeHidden.Bouncers],
      },
    ],
  },
  {
    name: "Deathly DeeZert",
    id: "halloween2020",
    starts: "2020-10-27T12:00:00-05:00",
    ends: "2020-11-15T23:59:00-05:00",
    specials: [
      {
        name: "Creepy Cauldron",
        icon: "creepycauldron",
        id: "null_creepycauldron",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
          "flatrob",
          "flatmatt",
          "flatlou",
          "flathammock",
        ],
      },
      {
        name: "Pumpkin Pail",
        icon: "pumpkinpail",
        id: "null_pumpkinpail",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "firemystery",
          "earthmystery",
          "watermystery",
          "icemystery",
        ],
      },
      {
        name: "Mummy Macaron",
        icon: "mummymacaron",
        id: "null_mummymacaron",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
          "flatrob",
          "flatmatt",
          "flatlou",
          "flathammock",
        ],
      },
      {
        name: "Pumpkin Pop",
        icon: "pumpkinpop",
        id: "null_pumpkinpop",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
          "flatrob",
          "flatmatt",
          "flatlou",
          "flathammock",
        ],
      },
      {
        name: "Blood Sucker",
        icon: "bloodsucker",
        id: "null_bloodsucker",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
          "flatrob",
          "flatmatt",
          "flatlou",
          "flathammock",
        ],
      },
      {
        name: "Rock",
        icon: "rock",
        id: "null_rock",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
          "flatrob",
          "flatmatt",
          "flatlou",
          "flathammock",
        ],
      },
      {
        name: "Bonbon Bat",
        icon: "bonbonbat",
        id: "null_bonbonbat",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "firemystery",
          "earthmystery",
          "watermystery",
          "icemystery",
        ],
      },
      {
        name: "Frappenstein",
        icon: "frappenstein",
        id: "null_frappenstein",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "firemystery",
          "earthmystery",
          "watermystery",
          "icemystery",
        ],
      },
      {
        name: "Boo Brownie",
        icon: "boobrownie",
        id: "null_boobrownie",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "firemystery",
          "earthmystery",
          "watermystery",
          "icemystery",
        ],
      },
      {
        name: "Toothbrush",
        icon: "toothbrush",
        id: "null_toothbrush",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "firemystery",
          "earthmystery",
          "watermystery",
          "icemystery",
        ],
      },
    ],
  },
  {
    name: "Zeecret Agents",
    id: "zeecret2020",
    starts: "2020-10-08T12:00:00-05:00",
    ends: "2020-11-08T23:59:00-05:00",
    specials: [
      {
        name: "PINE Agent",
        icon: "pineagent",
        id: "null_pineagent",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "earthmystery",
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "selfdestructcard",
          "briefcase",
          "nightvisiongoggles",
          "treehouse",
          "skyland",
        ],
      },
      {
        name: "PEAR Agent",
        icon: "pearagent",
        id: "null_pearagent",
        duration: 4,
        lands_on: [
          "munzee",
          "mystery",
          "earthmystery",
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "selfdestructcard",
          "briefcase",
          "nightvisiongoggles",
          "treehouse",
          "skyland",
        ],
      },
      {
        name: "Virtual Pineamite",
        icon: "virtualpineamite",
        id: "null_virtualpineamite",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "selfdestructcard",
          "nightvisiongoggles",
        ],
      },
      {
        name: "Physical Pineamite",
        icon: "physicalpineamite",
        id: "null_physicalpineamite",
        duration: 4,
        lands_on: ["munzee", "mystery", "earthmystery", "briefcase"],
      },
      {
        name: "Virtual Pear Bomb",
        icon: "virtualpearbomb",
        id: "null_virtualpearbomb",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "selfdestructcard",
          "nightvisiongoggles",
        ],
      },
      {
        name: "Physical Pear Bomb",
        icon: "physicalpearbomb",
        id: "null_physicalpearbomb",
        duration: 4,
        lands_on: ["munzee", "mystery", "earthmystery", "briefcase"],
      },
    ],
  },
  {
    name: "Bash from the Past",
    id: "bash2020",
    starts: "2020-09-21T14:30:00-05:00",
    ends: "2020-10-11T23:59:00-05:00",
    specials: [
      {
        name: "Beer Boot",
        icon: "oktoberfestbash-beerboot",
        id: "null_oktoberfestbash-beerboot",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
        ],
      },
      {
        name: "Paint Pallette",
        icon: "artwalkbash-paintpalette",
        id: "null_artwalkbash-paintpalette",
        duration: 6,
        lands_on: [
          "munzee",
          "firemystery",
          "mystery",
          "icemystery",
          "watermystery",
          "earthmystery",
        ],
      },
      {
        name: "Yellow Rose",
        icon: "lonestarbash-yellowrose",
        id: "null_lonestarbash-yellowrose",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
        ],
      },
      {
        name: "Playing Cards",
        icon: "all-inbash-playingcards",
        id: "null_all-inbash-playingcards",
        duration: 6,
        lands_on: [
          "munzee",
          "firemystery",
          "mystery",
          "icemystery",
          "watermystery",
          "earthmystery",
        ],
      },
      {
        name: "Ghost",
        icon: "mh-boobash-ghost",
        id: "null_mh-boobash-ghost",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
        ],
      },
      {
        name: "Unicorn Stick Horse",
        icon: "medzeevaltimesbash-unicornstickhorse",
        id: "null_medzeevaltimesbash-unicornstickhorse",
        duration: 6,
        lands_on: [
          "munzee",
          "firemystery",
          "mystery",
          "icemystery",
          "watermystery",
          "earthmystery",
        ],
      },
      {
        name: "ZeeOps Transmission",
        icon: "bashfromthepast-zeeopstransmission",
        id: "null_bashfromthepast-zeeopstransmission",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "airmystery",
          "electricmystery",
        ],
      },
    ],
  },
  {
    name: "National Waffle Day",
    id: "waffleday2020",
    starts: "2020-08-24T12:00:00-05:00",
    ends: "2020-09-14T23:59:00-05:00",
    specials: [
      {
        name: "Belgian Waffle",
        icon: "belgianwaffle",
        id: "null_belgianwaffle",
        duration: 4,
        lands_on: ["munzee", "calf", "cow", "milk", "piglet", "pig", "bacon"],
      },
      {
        name: "Stroopwafel",
        icon: "stroopwafel",
        id: "null_stroopwafel",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "chick",
          "chicken",
          "egg",
        ],
      },
    ],
  },
  {
    name: "Camp Counselors",
    id: "campcounselors2020",
    starts: "2020-07-29T12:00:00-05:00",
    ends: "2020-09-09T23:59:00-05:00",
    specials: [
      {
        name: "Counselor Cap-A-Lot",
        icon: "campcap-a-lotcounselor",
        id: "null_campcap-a-lotcounselor",
        duration: 6,
        lands_on: [
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeMystery),
          "munzee",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
      {
        name: "Counselor QRantine",
        icon: "campqrantinecounselor",
        id: "null_campqrantinecounselor",
        duration: 6,
        lands_on: [
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeMystery),
          "munzee",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
      {
        name: "Counselor FrEEZ",
        icon: "campfreezcounselor",
        id: "null_campfreezcounselor",
        duration: 6,
        lands_on: [
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeMystery),
          "munzee",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
      {
        name: "Counselor KenneZee",
        icon: "campkennezeecounselor",
        id: "null_campkennezeecounselor",
        duration: 6,
        lands_on: [
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeMystery),
          "munzee",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
    ],
  },
  {
    name: "Munzee's 9th Birthday",
    id: "munzeebirthday2020",
    starts: "2020-07-09T12:00:00-05:00",
    ends: "2020-08-09T23:59:00-05:00",
    specials: [
      {
        name: "Red Water Balloon",
        icon: "redwaterballoon",
        id: 2545,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Green Water Balloon",
        icon: "greenwaterballoon",
        id: 2546,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Blue Water Balloon",
        icon: "bluewaterballoon",
        id: 2547,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Yellow Water Balloon",
        icon: "yellowwaterballoon",
        id: 2548,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Camp Cap-A-Lot Flag",
        icon: "campcap-a-lotflag",
        id: 2549,
        duration: 2,
        lands_on: [
          "munzee",
          "earthmystery",
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
      {
        name: "Camp QRantine Flag",
        icon: "campqrantineflag",
        id: 2550,
        duration: 2,
        lands_on: [
          "munzee",
          "earthmystery",
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
      {
        name: "Camp FrEEZ Flag",
        icon: "campfreezflag",
        id: 2551,
        duration: 2,
        lands_on: [
          "munzee",
          "earthmystery",
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
      {
        name: "Camp KenneZee Flag",
        icon: "campkennezeeflag",
        id: 2552,
        duration: 2,
        lands_on: [
          "munzee",
          "earthmystery",
          "treehouse",
          "skyland",
          (type) => type.has_tag(TypeTags.TypeVirtual),
        ],
      },
    ],
  },
  {
    name: "World Sushi Day Ingredients",
    id: "worldsushiday2020",
    starts: "2020-06-18T12:00:00-05:00",
    ends: "2020-07-08T23:59:00-05:00",
    specials: [
      {
        name: "Cucumber",
        icon: "cucumber",
        id: "null_cucumber",
        duration: 3,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Fried Egg",
        icon: "friedegg",
        id: "null_friedegg",
        duration: 4,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Puffer Fish",
        icon: "pufferfish",
        id: "null_pufferfish",
        duration: 9,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Rice",
        icon: "rice",
        id: "null_rice",
        duration: 1,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Roe",
        icon: "roe",
        id: "null_roe",
        duration: 7,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Salmon",
        icon: "salmon",
        id: "null_salmon",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Nori",
        icon: "nori",
        id: "null_nori",
        duration: 2,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "longsword",
          "battleaxe",
        ],
      },
      {
        name: "Prawn",
        icon: "prawn",
        id: "null_prawn",
        duration: 5,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "longsword",
          "battleaxe",
        ],
      },
      {
        name: "Tuna",
        icon: "tuna",
        id: "null_tuna",
        duration: 8,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "longsword",
          "battleaxe",
        ],
      },
    ],
  },
  {
    name: "World Sushi Day Masters",
    id: "worldsushidaymasters2020",
    starts: "2020-06-18T12:00:00-05:00",
    ends: "2020-07-08T23:59:00-05:00",
    specials: [
      {
        name: "Neko",
        icon: "sushimasterneko",
        id: "null_sushimasterneko",
        duration: 6,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "longsword",
          "battleaxe",
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Kappa",
        icon: "sushimasterkappa",
        id: "null_sushimasterkappa",
        duration: 6,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "longsword",
          "battleaxe",
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
      {
        name: "Yurei",
        icon: "sushimasteryurei",
        id: "null_sushimasteryurei",
        duration: 6,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "longsword",
          "battleaxe",
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "eggs",
          "farmer",
          "farmerandwife",
          "family",
        ],
      },
    ],
  },
  {
    name: "Aquatic Baby Animals",
    id: "aquaticbabyanimals2020",
    starts: "2020-06-05T12:00:00-05:00",
    ends: "2020-06-21T23:59:00-05:00",
    specials: [
      {
        name: "Baby Narwhal",
        icon: "babynarwhal",
        id: "null_babynarwhal",
        duration: 6,
        lands_on: [
          (type) => type.has_tag(TypeTags.VirtualColourBlue),
          "seaweed",
          "fish",
          "shark",
          "canoe",
          "motorboat",
          "submarine",
          "planulalarva",
          "polyp",
        ],
      },
      {
        name: "Baby Penguin",
        icon: "babypenguin",
        id: "null_babypenguin",
        duration: 5,
        lands_on: [
          (type) => type.has_tag(TypeTags.VirtualColourBlue),
          "seaweed",
          "fish",
          "shark",
          "canoe",
          "motorboat",
          "submarine",
          "planulalarva",
          "polyp",
        ],
      },
      {
        name: "Baby Crab",
        icon: "babycrab",
        id: "null_babycrab",
        duration: 4,
        lands_on: [
          "watermystery",
          "mystery",
          "aquamarine",
          "turtleegg",
          "turtlehatchling",
          "juvenileturtle",
        ],
      },
      {
        name: "Seal Pup",
        icon: "sealpup",
        id: "null_sealpup",
        duration: 3,
        lands_on: [
          (type) => type.has_tag(TypeTags.VirtualColourBlue),
          "seaweed",
          "fish",
          "shark",
          "canoe",
          "motorboat",
          "submarine",
          "planulalarva",
          "polyp",
        ],
      },
      {
        name: "Baby Shark",
        icon: "babyshark",
        id: "null_babyshark",
        duration: 2,
        lands_on: [
          (type) => type.has_tag(TypeTags.VirtualColourBlue),
          "seaweed",
          "fish",
          "shark",
          "canoe",
          "motorboat",
          "submarine",
          "planulalarva",
          "polyp",
        ],
      },
    ],
  },
  {
    name: "Hometown Heroes 2020",
    id: "hometownheroes2020",
    starts: "2020-05-18T12:00:00-05:00",
    ends: "2020-06-07T23:59:00-05:00",
    specials: [
      {
        name: "Stay Safe",
        icon: "staysafe",
        id: 2482,
        duration: 2,
        lands_on: ["virtual"],
      },
      {
        name: "Grocery Hero",
        icon: "groceryhero",
        id: 2485,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "First Responder Hero",
        icon: "firstresponderhero",
        id: 2487,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Healthcare Hero",
        icon: "healthcarehero",
        id: 2486,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Education Hero",
        icon: "educationhero",
        id: 2484,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Delivery Hero",
        icon: "deliveryhero",
        id: 2483,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Grocery Hero Mask",
        icon: "groceryheromask",
        id: 2490,
        duration: 6,
        lands_on: [
          "virtual_amethyst",
          "virtual_sapphire",
          "airmystery",
          "virtual_citrine",
          "virtual_onyx",
          "electricmystery",
          "skyland",
        ],
      },
      {
        name: "First Responder Hero Mask",
        icon: "firstresponderheromask",
        id: 2492,
        duration: 6,
        lands_on: [
          "virtual_amethyst",
          "virtual_sapphire",
          "airmystery",
          "virtual_citrine",
          "virtual_onyx",
          "electricmystery",
          "skyland",
        ],
      },
      {
        name: "Health Hero Mask",
        icon: "healthheromask",
        id: 2491,
        duration: 6,
        lands_on: [
          "virtual_amethyst",
          "virtual_sapphire",
          "airmystery",
          "virtual_citrine",
          "virtual_onyx",
          "electricmystery",
          "skyland",
        ],
      },
      {
        name: "Education Hero Mask",
        icon: "educationheromask",
        id: 2489,
        duration: 6,
        lands_on: [
          "virtual_amethyst",
          "virtual_sapphire",
          "airmystery",
          "virtual_citrine",
          "virtual_onyx",
          "electricmystery",
          "skyland",
        ],
      },
      {
        name: "Delivery Hero Mask",
        icon: "deliveryheromask",
        id: 2488,
        duration: 6,
        lands_on: [
          "virtual_amethyst",
          "virtual_sapphire",
          "airmystery",
          "virtual_citrine",
          "virtual_onyx",
          "electricmystery",
          "skyland",
        ],
      },
    ],
  },
  {
    name: "World Laughter Day 2020",
    id: "worldlaughterday2020",
    starts: "2020-05-01T10:00:00-05:00",
    ends: "2020-05-17T23:59:00-05:00",
    specials: [
      {
        name: "Bison Joke",
        icon: "bisonjoke",
        id: 2437,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Chilly Joke",
        icon: "chillyjoke",
        id: 2441,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Librarian Joke",
        icon: "librarianjoke",
        id: 2436,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Cyclist Joke",
        icon: "cyclistjoke",
        id: 2442,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Pirate Joke",
        icon: "piratejoke",
        id: 2435,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Dad Joke",
        icon: "dadjoke",
        id: 2439,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Unicorn Joke",
        icon: "unicornjoke",
        id: 2444,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Grape Joke",
        icon: "grapejoke",
        id: 2440,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Ninja Joke",
        icon: "ninjajoke",
        id: 2443,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "Fishy Joke",
        icon: "fishyjoke",
        id: 2438,
        duration: 5.05,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
    ],
  },
  {
    name: "Petting Zoo 2020",
    id: "pettingzoo2020",
    starts: "2020-04-09T11:11:00-05:00",
    ends: "2020-04-30T23:59:00-05:00",
    specials: [
      {
        name: "Baby Fawn",
        icon: "babyfawn",
        id: 2417,
        duration: 1,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "electricmystery",
          "surprise",
          "virtual_onyx",
          "virtual_citrine",
        ],
      },
      {
        name: "Baby Tiger",
        icon: "babytiger",
        id: 2419,
        duration: 1,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "electricmystery",
          "surprise",
          "virtual_onyx",
          "virtual_citrine",
        ],
      },
      {
        name: "Baby Lamb",
        icon: "babylamb",
        id: 2418,
        duration: 1,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "electricmystery",
          "surprise",
          "virtual_onyx",
          "virtual_citrine",
        ],
      },
      {
        name: "Baby Chick",
        icon: "babychick",
        id: 2416,
        duration: 1,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "electricmystery",
          "surprise",
          "virtual_onyx",
          "virtual_citrine",
        ],
      },
      {
        name: "Baby Bunny",
        icon: "babybunny",
        id: 2415,
        duration: 1,
        lands_on: [
          (type) => type.has_tag(TypeTags.TypeVirtual),
          "electricmystery",
          "surprise",
          "virtual_onyx",
          "virtual_citrine",
        ],
      },
    ],
  },
  {
    name: "Lou Roll 2020",
    id: "louroll2020",
    starts: "2020-03-31T11:11:00-05:00",
    ends: "2020-04-13T23:11:00-05:00",
    specials: [
      {
        name: "Lou Roll",
        icon: "louroll",
        id: 2411,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual), "flatlou"],
      },
    ],
  },
  {
    name: "Rainbow Trail 2020",
    id: "rainbowtrail2020",
    starts: "2020-03-17T13:00:00-05:00",
    ends: "2020-03-31T23:59:00-05:00",
    specials: [
      {
        name: "Rainbow Trail",
        icon: "rainbowtrail",
        id: 2394,
        duration: 7,
        lands_on: ["munzee", "shamrock", "earthmystery"],
        scatters: {
          radius: 1000,
          types: [2395, 2396, 2397, 2398, 2399, 2400, 2401],
          min: 1,
          max: 3,
        },
      },
    ],
    types: [
      {
        name: "Red ZED",
        icon: "redzed",
        id: 2395,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
      {
        name: "Orange ZED",
        icon: "orangezed",
        id: 2396,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
      {
        name: "Yellow ZED",
        icon: "yellowzed",
        id: 2397,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
      {
        name: "Green ZED",
        icon: "greenzed",
        id: 2398,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
      {
        name: "Blue ZED",
        icon: "bluezed",
        id: 2399,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
      {
        name: "Indigo ZED",
        icon: "indigozed",
        id: 2400,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
      {
        name: "Violet ZED",
        icon: "violetzed",
        id: 2401,
        state: TypeState.Virtual,
        category: "seasonal_2020_rainbowtrail2020",
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [],
        meta: {
          scatter_duration: 1,
        },
      },
    ],
  },
  {
    name: "Flat Day the 13th pt.3 2020",
    id: "flatdaythe13thpt.32020",
    starts: "2020-03-12T13:00:00-05:00",
    ends: "2020-03-17T13:00:00-05:00",
    specials: [
      {
        name: "THE RETURN",
        icon: "thereturn",
        id: 2393,
        duration: 6,
        lands_on: ["munzee"],
      },
    ],
  },
  {
    name: "Leap Day 2020",
    id: "leapday2020",
    starts: "2020-02-28T12:00:00-06:00",
    ends: "2020-03-03T10:00:00-06:00",
    specials: [
      {
        name: "H.Zee. Wells’ Time Machine",
        icon: "h.zee.wells'timemachine",
        id: 2363,
        duration: 4,
        lands_on: ["munzee", "premium", "mace", "mystery"],
      },
      {
        name: "Zeeloreon Time Traveler",
        icon: "zeeloreontimetraveler",
        id: 2364,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
      {
        name: "TARDY Time Traveler",
        icon: "tardytimetraveler",
        id: 2365,
        duration: 4,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual)],
      },
    ],
  },
  {
    name: "Boomerangs 2020",
    id: "boomerangs2020",
    starts: "2020-01-24T10:00:00-06:00",
    ends: "2020-02-08T23:59:00-06:00",
    specials: [
      {
        name: "Coral Catcher Boomerang",
        icon: "coralcatcherboomerang",
        id: 2346,
        duration: 6,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual), "airmystery"],
      },
      {
        name: "Sunsetter Boomerang",
        icon: "sunsetterboomerang",
        id: 2345,
        duration: 6,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual), "airmystery"],
      },
      {
        name: "Parting Sea Boomerang",
        icon: "partingseaboomerang",
        id: 2344,
        duration: 6,
        lands_on: [(type) => type.has_tag(TypeTags.TypeVirtual), "airmystery"],
      },
      {
        name: "Great Dividing Boomerang",
        icon: "greatdividingboomerang",
        id: 2343,
        duration: 6,
        lands_on: ["munzee", "earthmystery"],
      },
      {
        name: "Country Crawler Boomerang",
        icon: "countrycrawlerboomerang",
        id: 2342,
        duration: 6,
        lands_on: ["munzee", "earthmystery"],
      },
      {
        name: "Root Runner Boomerang",
        icon: "rootrunnerboomerang",
        id: 2341,
        duration: 6,
        lands_on: ["munzee", "earthmystery"],
      },
    ],
  },
] as {
  name: string;
  id: string;
  starts: string;
  ends: string;
  specials?: {
    name: string;
    icon: string;
    id: TypeID;
    duration?: number;
    lands_on?: TypeID[];
    meta?: TypeMeta;
    state?: TypeState;
    alt_icons?: string[];
    points?: PointsInterface;
    tags?: TypeTags[];
    hidden?: TypeHidden[];
  }[];
  types?: Partial<TypeInterface>[];
}[];