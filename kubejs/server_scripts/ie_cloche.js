ServerEvents.recipes((event) => {
  //cucumber
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "culturaldelights:cucumber",
        count: 1,
      },
      {
        item: "culturaldelights:cucumber_seeds",
        count: 1,
      },
    ],
    input: {
      item: "culturaldelights:cucumber_seeds",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "culturaldelights:cucumbers",
    },
  });

  //corn
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "culturaldelights:corn_cob",
        count: 1,
      },
    ],
    input: {
      item: "culturaldelights:corn_kernels",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "culturaldelights:corn_upper",
    },
  });

  //eggplant
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "culturaldelights:eggplant",
        count: 1,
      },
      {
        item: "culturaldelights:eggplant_seeds",
        count: 1,
      },
    ],
    input: {
      item: "culturaldelights:eggplant_seeds",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "culturaldelights:eggplants",
    },
  });

  //strawberries
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:strawberries",
        count: 2,
      },
    ],
    input: {
      item: "neapolitan:strawberry_pips",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "neapolitan:strawberry_bush",
    },
  });

  //flax
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "supplementaries:flax",
        count: 1,
      },
      {
        item: "supplementaries:flax_seeds",
        count: 1,
      },
    ],
    input: {
      item: "supplementaries:flax_seeds",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "supplementaries:flax",
    },
  });

  //adzuki beans
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:adzuki_beans",
        count: 1,
      },
    ],
    input: {
      item: "neapolitan:adzuki_beans",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "neapolitan:adzuki_sprouts",
    },
  });

  //vanilla pods
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:vanilla_pods",
        count: 1,
      },
    ],
    input: {
      item: "neapolitan:vanilla_pods",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "stacking",
      block: "neapolitan:vanilla_vine_plant",
    },
  });

  //foul berries
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "autumnity:foul_berries",
        count: 1,
      },
    ],
    input: {
      item: "autumnity:foul_berry_pips",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "autumnity:foul_berry_bush",
    },
  });

  //foul berries
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "atmospheric:aloe_leaves",
        count: 1,
      },
      {
        item: "atmospheric:aloe_kernels",
        count: 3,
      },
      {
        item: "atmospheric:yellow_blossoms",
        count: 4,
      },
    ],
    input: {
      item: "atmospheric:aloe_kernels",
    },
    soil: {
      item: "minecraft:sand",
    },
    time: 800,
    render: {
      type: "crop",
      block: "atmospheric:aloe_vera",
    },
  });

  //mint
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:mint_leaves",
        count: 1,
      },
    ],
    input: {
      item: "neapolitan:mint_sprout",
    },
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
    render: {
      type: "crop",
      block: "neapolitan:mint",
    },
  });

  //rich soil
  //cucumber
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "culturaldelights:cucumber",
        count: 2,
      },
      {
        item: "culturaldelights:cucumber_seeds",
        count: 1,
      },
    ],
    input: {
      item: "culturaldelights:cucumber_seeds",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "culturaldelights:cucumbers",
    },
  });

  //corn
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "culturaldelights:corn_cob",
        count: 2,
      },
    ],
    input: {
      item: "culturaldelights:corn_kernels",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "culturaldelights:corn_upper",
    },
  });

  //eggplant
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "culturaldelights:eggplant",
        count: 2,
      },
      {
        item: "culturaldelights:eggplant_seeds",
        count: 1,
      },
    ],
    input: {
      item: "culturaldelights:eggplant_seeds",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "culturaldelights:eggplants",
    },
  });

  //strawberries
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:strawberries",
        count: 3,
      },
    ],
    input: {
      item: "neapolitan:strawberry_pips",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "neapolitan:strawberry_bush",
    },
  });

  //flax
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "supplementaries:flax",
        count: 2,
      },
      {
        item: "supplementaries:flax_seeds",
        count: 1,
      },
    ],
    input: {
      item: "supplementaries:flax_seeds",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "supplementaries:flax",
    },
  });

  //adzuki beans
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:adzuki_beans",
        count: 2,
      },
    ],
    input: {
      item: "neapolitan:adzuki_beans",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "neapolitan:adzuki_sprouts",
    },
  });

  //vanilla pods
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:vanilla_pods",
        count: 2,
      },
    ],
    input: {
      item: "neapolitan:vanilla_pods",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "stacking",
      block: "neapolitan:vanilla_vine_plant",
    },
  });

  //foul berries
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "autumnity:foul_berries",
        count: 2,
      },
    ],
    input: {
      item: "autumnity:foul_berry_pips",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "autumnity:foul_berry_bush",
    },
  });

  //mint
  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "neapolitan:mint_leaves",
        count: 2,
      },
    ],
    input: {
      item: "neapolitan:mint_sprout",
    },
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
    render: {
      type: "crop",
      block: "neapolitan:mint",
    },
  });

  //nether wart
  event.custom({
    type: "immersiveengineering:cloche",
    input: { item: "minecraft:nether_wart" },
    render: { type: "crop", block: "minecraft:nether_wart" },
    results: [{ count: 3, item: "minecraft:nether_wart" }],
    soil: { item: "nethersdelight:rich_soul_soil" },
    time: 800,
  });

  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "nethersdelight:propelpearl",
        count: 1,
      },
    ],
    input: {
      item: "nethersdelight:propelplant_cane",
    },
    soil: {
      item: "minecraft:netherrack",
    },
    time: 800,
    render: {
      type: "generic",
      block: "nethersdelight:propelplant_berry_stem",
    },
  });

  event.custom({
    type: "immersiveengineering:cloche",
    results: [
      {
        item: "nethersdelight:propelpearl",
        count: 2,
      },
    ],
    input: {
      item: "nethersdelight:propelplant_cane",
    },
    soil: {
      item: "nethersdelight:rich_soul_soil",
    },
    time: 800,
    render: {
      type: "generic",
      block: "nethersdelight:propelplant_berry_stem",
    },
  });

  //cave carrot
  event.custom({
    type: "immersiveengineering:cloche",
    input: {
      item: "miners_delight:cave_carrot",
    },
    render: {
      type: "crop",
      block: "miners_delight:cave_carrots",
    },
    results: [
      {
        item: "miners_delight:cave_carrot",
        count: 2,
      },
    ],
    soil: {
      item: "minecraft:dirt",
    },
    time: 800,
  });

  event.custom({
    type: "immersiveengineering:cloche",
    input: {
      item: "miners_delight:cave_carrot",
    },
    render: {
      type: "crop",
      block: "miners_delight:cave_carrots",
    },
    results: [
      {
        item: "miners_delight:cave_carrot",
        count: 3,
      },
    ],
    soil: {
      item: "farmersdelight:rich_soil",
    },
    time: 800,
  });
});
