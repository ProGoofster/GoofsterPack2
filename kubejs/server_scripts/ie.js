ServerEvents.recipes((event) => {
  event.remove({ id: 'immersiveengineering:crafting/constantan_mix' });
  event.remove({ id: 'immersiveengineering:crafting/electrum_mix' });

  event.remove({ id: /immersiveengineering:crafting\/plate_.*_hammering/ });
  event.remove({ id: /immersiveengineering:crafting\/raw_hammercrushing_/ });
  event.remove({ id: /immersiveengineering:crafting\/hammercrushing_/ });
  event.remove({ id: /immersiveengineering:crafting\/wire_.*/ });
  event.remove({ id: /immersiveengineering:crafting\/stick_.*/ });
  event.remove({ id: /create:cutting\/compat\/immersiveengineering\/wire_.*/ });


  event.remove({ output: 'immersiveengineering:crate' });
  event.remove({ output: 'immersiveengineering:reinforced_crate' });
  event.remove({ output: 'immersiveengineering:minecart_woodencrate' });
  event.remove({ output: 'immersiveengineering:minecart_reinforcedcrate' });
  event.replaceInput({}, 'immersiveengineering:crate', '#minecraft:shulker_boxes');
  event.remove({ output: 'immersiveengineering:minecart_woodenbarrel' });
  event.remove({ output: 'immersiveengineering:minecart_metalbarrel' });
  event.remove({ output: 'immersiveengineering:plate_gold'})
  event.remove({ output: 'immersiveengineering:plate_iron'})
  event.remove({ output: 'immersiveengineering:plate_copper'})

  //   let gritsmelting = (output, input) => {
  //     event.smelting(output, input);
  //     event.blasting(output, input);
  //   };

  //   gritsmelting("ad_astra:desh_ingot", "#forge:dusts/desh");
  //   gritsmelting("ad_astra:ostrum_ingot", "#forge:dusts/ostrum");
  //   gritsmelting("ad_astra:calorite_ingot", "#forge:dusts/calorite");
  //   gritsmelting("create:zinc_ingot", "#forge:dusts/zinc");
  //   gritsmelting("create:brass_ingot", "#forge:dusts/brass");

  //   event.custom({
  //     type: "immersiveengineering:arc_furnace",
  //     additives: [],
  //     energy: 51200,
  //     input: { tag: "forge:dusts/zinc" },
  //     results: [{ item: "create:zinc_ingot" }],
  //     time: 100,
  //   });

  //   event.custom({
  //     type: "immersiveengineering:arc_furnace",
  //     additives: [],
  //     energy: 51200,
  //     input: { tag: "forge:dusts/brass" },
  //     results: [{ item: "create:brass_ingot" }],
  //     time: 100,
  //   });

  //   event.custom({
  //     type: "immersiveengineering:arc_furnace",
  //     additives: [],
  //     energy: 51200,
  //     input: { tag: "forge:dusts/signalum" },
  //     results: [{ item: "thermal:signalum_ingot" }],
  //     time: 100,
  //   });

  //   event.custom({
  //     type: "immersiveengineering:arc_furnace",
  //     additives: [],
  //     energy: 51200,
  //     input: { tag: "forge:dusts/lumium" },
  //     results: [{ item: "thermal:lumium_ingot" }],
  //     time: 100,
  //   });

  //   event.custom({
  //     type: "immersiveengineering:arc_furnace",
  //     additives: [],
  //     energy: 51200,
  //     input: { tag: "forge:dusts/enderium" },
  //     results: [{ item: "thermal:enderium_ingot" }],
  //     time: 100,
  //   });

  event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [],
    energy: 51200,
    input: { tag: "forge:dusts/netherite" },
    results: [{ item: "minecraft:netherite_ingot" }],
    time: 100,
  });

  event.remove({
    output: "immersiveengineering:dust_coke",
    not: { mod: "immersiveengineering" },
  });

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "forge:netherrack" },
  //     result: { item: "create:cinder_flour" },
  //     secondaries: [{ chance: 0.5, output: { item: "create:cinder_flour" } }],
  //   }).id('immersiveengineering:crusher/netherrack');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "forge:obsidian" },
  //     result: { item: "create:powdered_obsidian" },
  //     secondaries: [{ chance: 0.75, output: { item: "minecraft:obsidian" } }],
  //   }).id('immersiveengineering:crusher/obsidian');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "forge:gems/diamond" },
  //     result: { item: "createaddition:diamond_grit" },
  //     secondaries: [],
  //   }).id('immersiveengineering:crusher/diamond');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "forge:gems/certus_quartz" },
  //     result: { item: "ae2:certus_quartz_dust" },
  //     secondaries: [],
  //   }).id('immersiveengineering:crusher/certus');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "forge:gems/fluix" },
  //     result: { item: "ae2:fluix_dust" },
  //     secondaries: [],
  //   }).id('immersiveengineering:crusher/fluix');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "ae2:sky_stone" },
  //     result: { item: "ae2:sky_dust" },
  //     secondaries: [],
  //   }).id('immersiveengineering:crusher/sky_stone');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 3000,
  //     input: { tag: "forge:ender_pearls" },
  //     result: { item: "thermal:ender_pearl_dust" },
  //     secondaries: [],
  //   }).id('immersiveengineering:crusher/ender_pearl');

  //   event.custom({
  //     type: "immersiveengineering:crusher",
  //     energy: 6000,
  //     input: { tag: "forge:ores/cheese" },
  //     result: { base_ingredient: { item: "ad_astra:cheese" }, count: 2 },
  //     secondaries: [],
  //   }).id('immersiveengineering:crusher/ore_cheese');

  //   //sandstone

  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { tag: "forge:sandstone/arid" },
      result: { count: 2, item: "atmospheric:arid_sand" },
      secondaries: [{ chance: 0.5, output: { tag: "forge:dusts/saltpeter" } }],
    })
    .id("immersiveengineering:crusher/arid_sandstone");

  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { tag: "forge:sandstone/red_arid" },
      result: { count: 2, item: "atmospheric:red_arid_sand" },
      secondaries: [{ chance: 0.5, output: { tag: "forge:dusts/saltpeter" } }],
    })
    .id("immersiveengineering:crusher/red_arid_sandstone");

  event
    .custom({
      type: "immersiveengineering:crusher",
      energy: 3200,
      input: { tag: "forge:sandstone/soul" },
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

  //   //space
  //   let spaceCrushing = [
  //     ['ad_astra:moon_stone', 'ad_astra:moon_cobblestone'],
  //     ['ad_astra:moon_cobblestone', 'ad_astra:moon_sand'],
  //     ['ad_astra:mars_stone', 'ad_astra:mars_cobblestone'],
  //     ['ad_astra:mars_cobblestone', 'ad_astra:mars_sand'],
  //     ['ad_astra:venus_stone', 'ad_astra:venus_cobblestone'],
  //     ['ad_astra:venus_cobblestone', 'ad_astra:venus_sand'],
  //     ['ad_astra:mercury_stone', 'ad_astra:mercury_cobblestone'],
  //     ['ad_astra:glacio_stone', 'ad_astra:glacio_cobblestone'],
  //     ['aether:holystone', 'aether_redux:holysilt']
  //   ]

  //   spaceCrushing.forEach(i => {
  //     event.custom({
  //       type: "immersiveengineering:crusher",
  //       energy: 3200,
  //       input: { item: i[0] },
  //       result: { item: i[1] },
  //       secondaries: []
  //     }).id("immersiveengineering:crusher/"+i[0].split(":")[1]);

  //     event.recipes.thermal.pulverizer(i[1], i[0])
  //   })


  event.recipes.create.mixing(
    Fluid.of("immersiveengineering:redstone_acid", 250),
    [Fluid.of("minecraft:water", 250), "minecraft:redstone"]
  );

  //   //create ore processing
  //   event.remove({
  //     output: "#create:crushed_raw_materials",
  //     input: /immersiveengineering:.*ore.*/,
  //     mod: "create",
  //   });

  //   var IEcrushType = [
  //     ["lead", "moon"],
  //     ["silver", "moon"],
  //     ["aluminum", "mars"],
  //     ["nickel", "mars"],
  //     ["uranium", "mercury"],
  //   ];

  //   for (let i of IEcrushType) {
  //     //event.remove({id: `create:crushing/${i}_ore`});

  //     event.recipes
  //       .createCrushing(
  //         [
  //           `create:crushed_raw_${i[0]}`,
  //           Item.of(`create:crushed_raw_${i[0]}`).withChance(0.75),
  //           Item.of("create:experience_nugget").withChance(0.75),
  //           Item.of(`ad_astra:${i[1]}_cobblestone`).withChance(0.12),
  //         ],
  //         `immersiveengineering:ore_${i[0]}`
  //       )
  //       .id(`create:crushing/${i[0]}_ore`)
  //       .processingTime(400);

  //     event.recipes
  //       .createCrushing(
  //         [
  //           `2x create:crushed_raw_${i[0]}`,
  //           Item.of(`create:crushed_raw_${i[0]}`).withChance(0.25),
  //           Item.of("create:experience_nugget").withChance(0.75),
  //           Item.of("minecraft:cobbled_deepslate").withChance(0.125),
  //         ],
  //         `immersiveengineering:deepslate_ore_${i[0]}`
  //       )
  //       .id(`create:crushing/deepslate_${i[0]}_ore`)
  //       .processingTime(250);
  //   }

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
      "#forge:sandstone",
    ])
    .superheated();

  //   //space gating
  //   //earth
  //   event.replaceInput(
  //     { output: "immersiveengineering:capacitor_lv" },
  //     "#forge:plates/lead",
  //     "#forge:plates/copper"
  //   );
  //   //moon (lead, silver, electrum)
  //   event.replaceInput(
  //     { output: "immersiveengineering:light_engineering" },
  //     "#forge:ingots/copper",
  //     "#forge:ingots/electrum"
  //   );
  //   event.replaceInput(
  //     { output: "immersiveengineering:component_iron" },
  //     "#forge:ingots/copper",
  //     "#forge:ingots/electrum"
  //   );
  //   event.replaceInput(
  //     { output: "immersiveengineering:dynamo" },
  //     "#forge:ingots/iron",
  //     "#forge:ingots/lead"
  //   );

  //   //mars (aluminum, nickel, constantan)
  //   event.replaceInput(
  //     { output: "immersiveengineering:heavy_engineering" },
  //     "#forge:ingots/electrum",
  //     "#forge:ingots/constantan"
  //   );

  //   event.replaceInput(
  //     { output: "immersiveengineering:component_steel" },
  //     "#forge:ingots/copper",
  //     "#forge:ingots/constantan"
  //   );

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
  event.remove({id:"immersiveengineering:crusher/raw_block_etrium"})
});
