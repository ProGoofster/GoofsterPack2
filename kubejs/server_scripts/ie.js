ServerEvents.recipes((event) => {
  event.remove({ id: 'immersiveengineering:crafting/constantan_mix' });
  event.remove({ id: 'immersiveengineering:crafting/electrum_mix' });

  event.remove({ id: /immersiveengineering:crafting\/plate_.*_hammering/ });
  event.remove({ id: /immersiveengineering:crafting\/raw_hammercrushing_/ });
  event.remove({ id: /immersiveengineering:crafting\/hammercrushing_/ });
  event.remove({ id: /immersiveengineering:crafting\/wire_.*/ });
  event.remove({ id: /immersiveposts:has_.*_rod/ });
  event.remove({ id: /immersiveengineering:crafting\/stick_.*/ });
  event.remove({ id: /create:cutting\/compat\/immersiveengineering\/wire_.*/ });


  event.remove({ output: 'immersiveengineering:crate' });
  event.remove({ output: 'immersiveengineering:reinforced_crate' });
  event.remove({ output: 'immersiveengineering:minecart_woodencrate' });
  event.remove({ output: 'immersiveengineering:minecart_reinforcedcrate' });
  event.replaceInput({}, 'immersiveengineering:crate', '#minecraft:shulker_boxes');
  event.remove({ output: 'immersiveengineering:minecart_woodenbarrel' });
  event.remove({ output: 'immersiveengineering:minecart_metalbarrel' });
  event.remove({ output: 'immersiveengineering:plate_gold' })
  event.remove({ output: 'immersiveengineering:plate_iron' })
  event.remove({ output: 'immersiveengineering:plate_copper' })

  event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [],
    energy: 51200,
    input: { tag: "forge:dusts/netherite" },
    results: [{ base_ingredient: { item: "minecraft:netherite_ingot" }, count: 1 }],
    time: 100,
  })

  event.remove({
    output: "immersiveengineering:dust_coke",
    not: { mod: "immersiveengineering" },
  });

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:netherrack" },
    result: { item: "create:cinder_flour" },
    secondaries: [{ chance: 0.5, output: { item: "create:cinder_flour" } }],
  }).id('immersiveengineering:crusher/netherrack');


  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:obsidian" },
    result: { item: "create:powdered_obsidian" },
    secondaries: [{ chance: 0.75, output: { item: "minecraft:obsidian" } }],
  }).id('immersiveengineering:crusher/obsidian');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/diamond" },
    result: { item: "mekanism:dust_diamond" },
    secondaries: [],
  }).id('immersiveengineering:crusher/diamond');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/certus_quartz" },
    result: { item: "ae2:certus_quartz_dust" },
    secondaries: [],
  }).id('immersiveengineering:crusher/certus');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/fluix" },
    result: { item: "ae2:fluix_dust" },
    secondaries: [],
  }).id('immersiveengineering:crusher/fluix');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "ae2:sky_stone" },
    result: { item: "ae2:sky_dust" },
    secondaries: [],
  }).id('immersiveengineering:crusher/sky_stone');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:ender_pearls" },
    result: { item: "ae2:ender_dust" },
    secondaries: [],
  }).id('immersiveengineering:crusher/ender_pearl');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:ingots/refined_obsidian" },
    result: { item: "mekanism:dust_refined_obsidian" },
    secondaries: [],
  }).id('immersiveengineering:crusher/refined_obsidian');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:ingots/netherite" },
    result: { item: "mekanism:dust_netherite" },
    secondaries: [],
  }).id('immersiveengineering:crusher/dust_netherite');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/emerald" },
    result: { item: "mekanism:dust_emerald" },
    secondaries: [],
  }).id('immersiveengineering:crusher/dust_emerald');

    event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/quartz" },
    result: { item: "mekanism:dust_quartz" },
    secondaries: [],
  }).id('immersiveengineering:crusher/dust_quartz');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/lapis" },
    result: { item: "mekanism:dust_lapis_lazuli" },
    secondaries: [],
  }).id('immersiveengineering:crusher/dust_lapis');

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3000,
    input: { tag: "forge:gems/fluorite" },
    result: { item: "mekanism:dust_fluorite" },
    secondaries: [],
  }).id('immersiveengineering:crusher/dust_fluorite');

  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { tag: "forge:sandstone/arid_sandstone" },
      result: { count: 2, item: "atmospheric:arid_sand" },
      secondaries: [{ chance: 0.5, output: { tag: "forge:dusts/saltpeter" } }],
    })
    .id("immersiveengineering:crusher/arid_sandstone");

  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { tag: "forge:sandstone/red_arid_sandstone" },
      result: { count: 2, item: "atmospheric:red_arid_sand" },
      secondaries: [{ chance: 0.5, output: { tag: "forge:dusts/saltpeter" } }],
    })
    .id("immersiveengineering:crusher/red_arid_sandstone");

  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { tag: "forge:sandstone/soul_sandstone" },
      result: { count: 2, item: "minecraft:soul_sand" },
      secondaries: [{ chance: 0.5, output: { tag: "forge:dusts/saltpeter" } }],
    })
    .id("immersiveengineering:crusher/soul_sandstone");
  //dripstone
  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { item: "minecraft:dripstone_block" },
      result: { count: 4, item: "minecraft:pointed_dripstone" },
      secondaries: []
    })
    .id("immersiveengineering:crusher/dripstone_block");

  //space
  let spaceCrushing = [
    ['ad_astra:moon_stone', 'ad_astra:moon_cobblestone'],
    ['ad_astra:moon_cobblestone', 'ad_astra:moon_sand'],
    ['ad_astra:mars_stone', 'ad_astra:mars_cobblestone'],
    ['ad_astra:mars_cobblestone', 'ad_astra:mars_sand'],
    ['ad_astra:venus_stone', 'ad_astra:venus_cobblestone'],
    ['ad_astra:venus_cobblestone', 'ad_astra:venus_sand'],
    ['ad_astra:mercury_stone', 'ad_astra:mercury_cobblestone'],
    ['ad_astra:glacio_stone', 'ad_astra:glacio_cobblestone'],
  ]

  spaceCrushing.forEach(i => {
    event.custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { item: i[0] },
      result: { item: i[1] },
      secondaries: []
    }).id("immersiveengineering:crusher/" + i[0].split(":")[1]);

    event.recipes.mekanism.crushing(i[1], i[0])
  })


  event.recipes.create.mixing(
    Fluid.of("immersiveengineering:redstone_acid", 250),
    [Fluid.of("minecraft:water", 250), "minecraft:redstone"]
  );


  //create to immersive
  event.remove({ id: "immersiveengineering:crafting/cokebrick" });
  event.remove({ id: "immersiveengineering:crafting/blastbrick" });
  event.remove({ id: "immersiveengineering:crafting/alloybrick" });
  event.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick", });

  //this is done in the mixer to prevent making sandstone
  event.recipes.create
    .mixing("3x immersiveengineering:cokebrick", [
      "4x minecraft:clay_ball",
      "4x minecraft:brick",
      "#forge:sandstone",
    ])
    .superheated();

  event.recipes.create
    .mixing("3x immersiveengineering:blastbrick", [
      "minecraft:nether_brick",
      "minecraft:nether_brick",
      "minecraft:nether_brick",
      "minecraft:nether_brick",
      "minecraft:brick",
      "minecraft:brick",
      "minecraft:brick",
      "minecraft:brick",
      "minecraft:magma_block",
    ])
    .superheated();

  event.recipes.create
    .mixing("immersiveengineering:alloybrick", [
      "minecraft:brick",
      ["ad_astra:venus_sandstone", "ad_astra:venus_sandstone_bricks", "ad_astra:cracked_venus_sandstone_bricks"],
    ])
    .superheated();

  event.replaceInput(
    { output: "immersiveengineering:light_engineering" },
    "#forge:ingots/copper",
    "#forge:ingots/constantan"
  );
  event.replaceInput(
    { output: "immersiveengineering:component_iron" },
    "#forge:ingots/copper",
    "#forge:ingots/constantan"
  );

  event.replaceInput(
    { output: "immersiveengineering:component_steel" },
    "#forge:ingots/copper",
    "#forge:ingots/electrum"
  );

  event.remove({ id: /immersiveengineering:.*_from_slab/ });
  event.remove({ id: 'immersivepetroleum:asphalt2' });


  //   //missing ingot to dusts


  // event.custom({
  //   type: "immersiveengineering:fermenter",
  //   energy: 6400,
  //   fluid: {
  //     amount: 80,
  //     fluid: "immersiveengineering:ethanol"
  //   },
  //   input: {
  //     tag: "forge:crops/corn"
  //   }
  // }).id('immersiveengineering:recipes/fermenter/corn')
  event.remove({ id: "immersiveengineering:crusher/raw_block_etrium" })

  event.remove({ id: "immersiveengineering:smoking/clinker_brick" })

  event.smelting('immersiveengineering:clinker_brick', 'minecraft:brick').xp(0.1)
  event.blasting('immersiveengineering:clinker_brick', 'minecraft:brick').xp(0.1)

  event.remove({ id: "mekanism:paper" })

  //villager progression
  event.shaped(
    "immersiveengineering:craftingtable",
    [
      'TTT',
      'SCS',
      'SXS'
    ],
    {
      T: "#forge:treated_wood_slab",
      S: "#forge:rods/treated_wood",
      C: 'minecraft:crafting_table',
      X: 'immersiveengineering:component_steel'
    }
  ).id("immersiveengineering:crafting/craftingtable");

  event.shaped(
    "immersiveengineering:turntable",
    [
      'ITI',
      'RCR'
    ],
    {
      I: "#forge:ingots/lead",
      T: "#forge:treated_wood",
      R: 'minecraft:redstone',
      C: 'immersiveengineering:coil_lv'
    }
  ).id("immersiveengineering:crafting/turntable");

  event.stonecutting("mekanism:block_uranium", "immersiveengineering:storage_uranium")
  event.stonecutting("immersiveengineering:storage_uranium", "mekanism:block_uranium")


});
