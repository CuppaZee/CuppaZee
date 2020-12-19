import {
  PointsInterface,
  PointsType,
  TypeHidden,
  TypeID,
  TypeState,
  TypeTags,
} from "../../munzee";

export default [
  {
    name: "Greenie",
    icon: "munzee",
    id: 0,
    state: TypeState.Physical,
    alt_icons: ["greenie", "normal", "standard"],
    points: {
      deploy: 19,
      capture: 20,
      capon: 11,
    },
  },
  {
    name: "Premium",
    icon: "premium",
    id: 13,
    state: TypeState.Physical,
    points: {
      deploy: 200,
      capon: 50,
      capture: 50,
    },
  },
  {
    name: "Social",
    icon: "social",
    id: 32,
    state: "universal",
    extra: {
      social: true,
    },
  },
  {
    name: "Event Pin",
    icon: "eventpin",
    id: 60,
    state: TypeState.Physical,
    tags: [TypeTags.TypeEvent, TypeTags.TypeEventStandard],
  },
  {
    name: "Trail Munzee",
    icon: "trail",
    id: 190,
    state: TypeState.Physical,
    tags: [TypeTags.TypeTrail],
  },
  {
    name: "Personal Munzee",
    icon: "personalmunzee",
    id: 200,
    state: "personal",
    tags: [TypeTags.TypePersonal],
    points: {
      deploy: 10,
      type: "split",
      split: 50,
      min: 10,
    },
  },
  {
    name: "Event Indicator",
    icon: "eventindicator",
    id: 294,
    state: TypeState.Physical,
    tags: [TypeTags.TypeEvent, TypeTags.TypeEventStandard],
  },
  {
    name: "Virtual Trail",
    icon: "virtual_trail",
    id: 390,
    state: TypeState.Virtual,
    extra: {
      trail: true,
    },
  },
  {
    name: "Shamrock",
    icon: "shamrock",
    id: 441,
    state: TypeState.Physical,
  },
  {
    name: "Event Trail",
    icon: "eventtrail",
    id: 600,
    tags: [TypeTags.TypeEvent, TypeTags.TypeEventStandard, TypeTags.TypeTrail],
    state: TypeState.Virtual,
  },
  {
    name: "Premium Personal",
    icon: "premiumpersonal",
    id: 1107,
    state: "physical",
    tags: [TypeTags.TypePersonal],
    points: {
      deploy: 25,
      type: "split",
      split: 100,
      min: 20,
    },
  },
  {
    name: "Spring Seasonal",
    icon: "springseasonalmunzee",
    id: 1135,
    state: TypeState.Physical,
    tags: [TypeTags.TypeSeasonal],
    hidden: [TypeHidden.Inventory],
  },
  {
    name: "Summer Seasonal",
    icon: "summerseasonalmunzee",
    id: 1136,
    state: TypeState.Physical,
    tags: [TypeTags.TypeSeasonal],
    hidden: [TypeHidden.Inventory],
  },
  {
    name: "Fall Seasonal",
    icon: "fallseasonalmunzee",
    id: 1137,
    state: TypeState.Physical,
    tags: [TypeTags.TypeSeasonal],
    hidden: [TypeHidden.Inventory],
  },
  {
    name: "Winter Seasonal",
    icon: "winterseasonalmunzee",
    id: 1138,
    state: TypeState.Physical,
    tags: [TypeTags.TypeSeasonal],
    hidden: [TypeHidden.Inventory],
  },
  {
    name: "Seasonal",
    icon: "seasonal",
    id: 1139,
    state: TypeState.Physical,
    tags: [TypeTags.TypeSeasonal],
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Temporary Virtual",
    icon: "temporaryvirtual",
    id: 1245,
    state: TypeState.Virtual,
    alt_icons: ["tempvirt"],
    points: {
      deploy: 30,
      type: "split",
      split: 75,
      min: 25,
    },
  },
  {
    name: "QRewzee",
    icon: "qrewzee",
    id: 1880,
    state: TypeState.Physical,
  },
  {
    name: "Renovation",
    icon: "renovation",
    id: 2390,
    state: "other",
  },
] as {
  name: string;
  icon: string;
  id: TypeID;
  state: TypeState;
  alt_icons?: string[];
  tags?: TypeTags[];
  hidden?: TypeHidden[];
  points?: PointsInterface;
}[];