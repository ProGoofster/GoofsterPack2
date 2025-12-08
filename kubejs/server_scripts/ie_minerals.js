ServerEvents.recipes((event) => {
  //moon
  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:moon"],
    fail_chance: 0.2,
    ores: [
      { chance: 0.7, output: { tag: "forge:ores/desh" } },
      { chance: 0.2, output: { tag: "forge:ores/iron" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:moon_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:moon_sand" } },
      { chance: 0.3, output: { item: "minecraft:soul_soil" } },
    ],
    weight: 10,
  }).id("kubejs:desharite");
  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:moon"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/nickel" } },
      { chance: 0.5, output: { tag: "forge:ores/aluminum" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:moon_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:moon_sand" } },
      { chance: 0.3, output: { item: "minecraft:soul_soil" } },
    ],
    weight: 5,
  }).id("kubejs:moon_ie_1");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:moon"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/silver" } },
      { chance: 0.5, output: { tag: "forge:ores/lead" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:moon_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:moon_sand" } },
      { chance: 0.3, output: { item: "minecraft:soul_soil" } },
    ],
    weight: 5,
  }).id("kubejs:moon_ie_2");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:moon"],
    fail_chance: 0.15,
    ores: [
      { chance: 0.6, output: { tag: "forge:ores/silver" } },
      { chance: 0.4, output: { tag: "forge:ores/nickel" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:moon_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:moon_sand" } },
      { chance: 0.3, output: { item: "minecraft:soul_soil" } },
    ],
    weight: 7,
  }).id("kubejs:lunar_argentite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:moon"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/cheese" } },
      { chance: 0.5, output: { tag: "forge:ores/ice_shard" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:moon_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:moon_sand" } },
      { chance: 0.3, output: { item: "minecraft:soul_soil" } },
    ],
    weight: 15,
  }).id("kubejs:daerium");

  //mars
  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mars"],
    fail_chance: 0.2,
    ores: [
      { chance: 0.7, output: { tag: "forge:ores/ostrum" } },
      { chance: 0.2, output: { tag: "forge:ores/iron" } },
    ],
    spoils: [
      { chance: 0.2, output: { item: "ad_astra:mars_cobblestone" } },
      { chance: 0.5, output: { item: "ad_astra:mars_sand" } },
      { chance: 0.3, output: { item: "ad_astra:conglomerate" } },
    ],
    weight: 10,
  }).id("kubejs:ostride");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mars"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/ostrum" } },
      { chance: 0.5, output: { tag: "forge:ores/tin" } },

    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:mars_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:mars_sand" } },
      { chance: 0.3, output: { item: "ad_astra:conglomerate" } },
    ],
    weight: 5,
  }).id("kubejs:mars_mek");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mars"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/aluminum" } },
      { chance: 0.5, output: { tag: "forge:ores/lead" } },

    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:mars_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:mars_sand" } },
      { chance: 0.3, output: { item: "ad_astra:conglomerate" } },
    ],
    weight: 5,
  }).id("kubejs:mars_ie");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mars"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.6, output: { tag: "forge:ores/osmium" } },
      { chance: 0.4, output: { tag: "forge:ores/iron" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:mars_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:mars_sand" } },
      { chance: 0.3, output: { item: "ad_astra:conglomerate" } },
    ],
    weight: 6,
  }).id("kubejs:red_osmite");

  //venus
  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:venus"],
    fail_chance: 0.2,
    ores: [
      { chance: 0.7, output: { tag: "forge:ores/calorite" } },
      { chance: 0.2, output: { tag: "forge:ores/gold" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:venus_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:venus_sand" } },
      { chance: 0.3, output: { item: "ad_astra:venus_sandstone" } },
    ],
    weight: 10,
  }).id("kubejs:caloryium");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:venus"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.6, output: { tag: "forge:ores/osmium" } },
      { chance: 0.4, output: { tag: "forge:ores/tin" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:venus_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:venus_sand" } },
      { chance: 0.3, output: { item: "ad_astra:venus_sandstone" } },
    ],
    weight: 5,
  }).id("kubejs:venus_mek_1");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:venus"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.7, output: { tag: "forge:ores/uranium" } },
      { chance: 0.3, output: { tag: "forge:ores/fluorite" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:venus_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:venus_sand" } },
      { chance: 0.3, output: { item: "ad_astra:venus_sandstone" } },
    ],
    weight: 6,
  }).id("kubejs:venusian_uranite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:venus"],
    fail_chance: 0.05,
    ores: [
      { chance: 0.7, output: { item: "minecraft:magma_block" } },
      { chance: 0.3, output: { item: "minecraft:smooth_basalt" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:venus_cobblestone" } },
      { chance: 0.2, output: { item: "ad_astra:venus_sandstone" } },
      { chance: 0.3, output: { item: "ad_astra:infernal_spire_block" } },
    ],
    weight: 20,
  }).id("kubejs:venus_lava_tube");

  //mercury
  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mercury"],
    fail_chance: 0.3,
    ores: [
      { chance: 0.7, output: { tag: "forge:ores/uranium" } },
      { chance: 0.3, output: { tag: "forge:ores/fluorite" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:mercury_cobblestone" } },
      { chance: 0.3, output: { item: "minecraft:basalt" } },
      { chance: 0.2, output: { item: "minecraft:magma_block" } },
    ],
    weight: 10,
  }).id("kubejs:mercury_uraninite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mercury"],
    fail_chance: 0.15,
    ores: [
      { chance: 0.6, output: { tag: "forge:ores/silver" } },
      { chance: 0.4, output: { tag: "forge:ores/nickel" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:mercury_cobblestone" } },
      { chance: 0.3, output: { item: "minecraft:basalt" } },
      { chance: 0.2, output: { item: "minecraft:magma_block" } },
    ],
    weight: 7,
  }).id("kubejs:mercurial_silvervein");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:mercury"],
    fail_chance: 0.05,
    ores: [
      { chance: 0.5, output: { item: "minecraft:magma_block" } },
      { chance: 0.3, output: { item: "minecraft:smooth_basalt" } },
      { chance: 0.2, output: { item: "minecraft:blackstone" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:mercury_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:gravel" } },
      { chance: 0.3, output: { item: "minecraft:basalt" } },
    ],
    weight: 15,
  }).id("kubejs:mercury_lava_tube");

  //glacio
  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.5,
    ores: [
      { chance: 0.2, output: { tag: "forge:ores/diamond" } },
      { chance: 0.5, output: { tag: "forge:ores/coal" } },
      { chance: 0.3, output: { tag: "forge:ores/ice_shard" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 5,
  }).id("kubejs:kimberlite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.05,
    ores: [
      { chance: 0.5, output: { item: "ae2:certus_quartz_dust" } },
      { chance: 0.3, output: { item: "ae2:certus_quartz_crystal" } },
      { chance: 0.2, output: { item: "ae2:sky_stone_block" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 10,
  }).id("kubejs:fluixite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.4, output: { item: "minecraft:amethyst_block" } },
      { chance: 0.3, output: { item: "minecraft:calcite" } },
      { chance: 0.3, output: { item: "minecraft:smooth_basalt" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 20,
  }).id("kubejs:glacio_amethyst_crevasse");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.15,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/zinc" } },
      { chance: 0.5, output: { tag: "forge:ores/aluminum" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 8,
  }).id("kubejs:frozen_zincalum");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.15,
    ores: [
      { chance: 0.6, output: { tag: "forge:ores/lead" } },
      { chance: 0.4, output: { tag: "forge:ores/silver" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 8,
  }).id("kubejs:cryogenic_galena");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.1,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/nickel" } },
      { chance: 0.5, output: { tag: "forge:ores/osmium" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 7,
  }).id("kubejs:permafrost_osnickel");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.2,
    ores: [
      { chance: 0.6, output: { tag: "forge:ores/tin" } },
      { chance: 0.4, output: { tag: "forge:ores/uranium" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 6,
  }).id("kubejs:glacial_tinuranite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.15,
    ores: [
      { chance: 0.7, output: { tag: "forge:ores/fluorite" } },
      { chance: 0.3, output: { tag: "forge:ores/ice_shard" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 9,
  }).id("kubejs:icebound_fluorite");

  event.custom({
    type: "immersiveengineering:mineral_mix",
    dimensions: ["ad_astra:glacio"],
    fail_chance: 0.2,
    ores: [
      { chance: 0.5, output: { tag: "forge:ores/desh" } },
      { chance: 0.3, output: { tag: "forge:ores/ostrum" } },
      { chance: 0.2, output: { tag: "forge:ores/calorite" } },
    ],
    spoils: [
      { chance: 0.5, output: { item: "ad_astra:glacio_cobblestone" } },
      { chance: 0.2, output: { item: "minecraft:packed_ice" } },
      { chance: 0.3, output: { item: "minecraft:cobbled_deepslate" } },
    ],
    weight: 5,
  }).id("kubejs:cryotrium_blend");

});
