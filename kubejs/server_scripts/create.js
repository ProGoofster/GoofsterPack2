ServerEvents.recipes((event) => {
//remove unwanted recipes
  //electrum
  event.remove({ id: "createaddition:crafting/electrum_amulet" });
  event.remove({ id: "createaddition:crafting/electrum_ingot" });
  event.remove({ id: "createaddition:crafting/electrum_nugget" });
  event.remove({ id: "createaddition:crafting/electrum_block" });
  event.remove({ id: "createaddition:crafting/electrum" });
  event.remove({ id: "createaddition:crafting/electrum_sheet" });
  event.remove({ id: "createaddition:crafting/electrum_spool" });
  event.remove({ id: "createaddition:pressing/electrum_ingot" });
  event.remove({ id: "createaddition:rolling/electrum_plate" });
  event.remove({ id: "createaddition:rolling/electrum_ingot" });

  event.remove({ id: "createaddition:crafting/modular_accumulator_electrum" });
  event.remove({ id: "createaddition:crafting/large_connector_electrum" });
  event.remove({ output: "create_enchantment_industry:experience_rotor"})
  event.remove({ input: "create_enchantment_industry:experience_rotor"})

  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          tag: "create:stone_types/ochrum",
        },
      ],
      processingTime: 250,
      results: [
        {
          chance: 0.2,
          item: "create:crushed_raw_gold",
        },
        {
          chance: 0.2,
          item: "minecraft:gold_nugget",
        },
      ],
    })
    .id("create:crushing/ochrum_recycling");
  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          tag: "create:stone_types/ochrum",
        },
      ],
      processingTime: 250,
      results: [
        {
          chance: 0.2,
          item: "create:crushed_raw_gold",
        },
        {
          chance: 0.2,
          item: "minecraft:gold_nugget",
        },
      ],
    })
    .id("create:crushing/ochrum");

  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          tag: "create:stone_types/tuff",
        },
      ],
      processingTime: 350,
      results: [
        {
          chance: 0.25,
          item: "minecraft:flint",
        },
        {
          chance: 0.1,
          item: "minecraft:gold_nugget",
        },
        {
          chance: 0.1,
          item: "create:copper_nugget",
        },
        {
          chance: 0.1,
          item: "create:zinc_nugget",
        },
        {
          chance: 0.1,
          item: "minecraft:iron_nugget",
        },
      ],
    })
    .id("create:crushing/tuff_recycling");
  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          tag: "create:stone_types/tuff",
        },
      ],
      processingTime: 350,
      results: [
        {
          chance: 0.25,
          item: "minecraft:flint",
        },
        {
          chance: 0.1,
          item: "minecraft:gold_nugget",
        },
        {
          chance: 0.1,
          item: "create:copper_nugget",
        },
        {
          chance: 0.1,
          item: "create:zinc_nugget",
        },
        {
          chance: 0.1,
          item: "minecraft:iron_nugget",
        },
      ],
    })
    .id("create:crushing/tuff");
  //festive copper spool
  event.remove({ id: "createaddition:crafting/festive_spool"})
//tweak recipes for use with tags
  event.replaceInput({id: 'create:milling/granite'}, 'minecraft:granite', "#create:stone_types/granite")
  event.replaceInput({id: 'create:milling/terracotta'}, 'minecraft:terracotta', "#quark:terracotta_all")
  event.replaceInput({id: 'create:milling/granite'}, 'minecraft:granite', "#create:stone_types/granite")
  event.replaceInput({id: 'create:milling/sandstone'}, 'minecraft:sandstone', "#c:uncolored_sandstone_blocks")

//compatibility
  //dough compat
  event.recipes.shapeless("create:dough", [
    "minecraft:water_bucket",
    "create:wheat_flour",
  ]);
  event.remove({ output: "create:dough", type: "minecraft:crafting_shaped" });
  event.replaceInput({}, "farmersdelight:wheat_dough", "create:dough");
//renewables
  //copper
    event.recipes.create.milling("kubejs:scoria_aggregate", '#create:stone_types/scoria')
    event.recipes.create.splashing([Item.of('minecraft:coal').withChance(0.25), Item.of('create:copper_nugget').withChance(0.42)], 'kubejs:scoria_aggregate')
  //zinc
    event.recipes.create.milling("kubejs:limesand", '#create:stone_types/limestone')
    event.recipes.create.splashing([Item.of('minecraft:bone_meal').withChance(0.25), Item.of('create:zinc_nugget').withChance(0.12)], 'kubejs:limesand')
  //calcite
  event.recipes
    .createCompacting("minecraft:calcite", [
      "2x minecraft:flint",
      "minecraft:bone_block",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:compacting/calcite");

  //dripstone
  event.recipes
    .createCompacting("minecraft:dripstone_block", [
      "2x minecraft:flint",
      "#minecraft:terracotta",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:compacting/dripstone_block");

  //tuff
  event.recipes
    .createMixing("2x minecraft:tuff", [
      "minecraft:diorite",
      "minecraft:andesite",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:mixing/tuff");

  //deepslate
  event.recipes
    .createMixing("2x minecraft:deepslate", [
      "minecraft:cobblestone",
      "minecraft:blackstone",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:mixing/deepslate");

  //netherrack
  event.recipes
    .createMixing("2x minecraft:netherrack", [
      "create:cinder_flour",
      "#forge:cobblestone",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("createaddition:mixing/netherrack");

  //basalt
  event.recipes.createMixing("2x minecraft:basalt", [
    "minecraft:blue_ice",
    "minecraft:soul_soil",
    Fluid.of("minecraft:lava", 100),
  ]).id("create:mixing/basalt");

  //end stone
  event.recipes.createCompacting("minecraft:end_stone", [
    "2x minecraft:flint",
    "minecraft:purpur_block",
    Fluid.of("minecraft:lava", 100),
  ]).id("create:compacting/end_stone");

  //ae2 skystone
  event.replaceInput(
    { id: "create:milling/compat/ae2/sky_stone_block" },
    "ae2:sky_stone_block",
    "#ae2:sky_stone"
  );
  event.recipes.createMixing("2x ae2:sky_stone_block", [
    "ae2:sky_dust",
    "#forge:cobblestone",
    Fluid.of("minecraft:lava", 100),
  ]).id("create:mixing/sky_stone_block");

//extras
  //vanilla diorite recipe as mixing
  event.recipes
    .createMixing("minecraft:diorite", [
      "minecraft:cobblestone",
      "#forge:gems/quartz",
    ])
    .id("create:mixing/vanilla_diorite_recipe");

  //cobble mixing recipe
  event.recipes
    .createMixing("minecraft:cobblestone", [
      Fluid.of("minecraft:lava", 250),
      Fluid.of("minecraft:water", 250),
    ])
    .id("create:mixing/cobblestone");

  //moss washing
  event.recipes.create
    .splashing(
      [
        "minecraft:cobblestone",
        Item.of("minecraft:moss_block").withChance(0.25),
      ],
      "minecraft:mossy_cobblestone"
    )
    .id("create:splashing/mossy_cobblestone");
  event.recipes.create
    .splashing(
      [
        "minecraft:stone_bricks",
        Item.of("minecraft:moss_block").withChance(0.25),
      ],
      "minecraft:mossy_stone_bricks"
    )
    .id("create:splashing/mossy_stone_bricks");
  event.recipes.create
    .splashing(
      [
        "quark:cobblestone_bricks",
        Item.of("minecraft:moss_block").withChance(0.25),
      ],
      "quark:mossy_cobblestone_bricks"
    )
    .id("create:splashing/mossy_cobblestone_bricks");

  //path shit
  event.recipes.create
    .pressing("minecraft:dirt_path", "minecraft:grass_block")
    .id("create:pressing/path");
  event.recipes.create
    .pressing("environmental:dirt_path", "minecraft:coarse_dirt")
    .id("create:pressing/dirt_path_coarse");
  event.recipes.create
    .pressing("minecraft:dirt_path", "minecraft:dirt")
    .id("create:pressing/dirt_path");
  event.recipes.create
    .pressing("environmental:dirt_path", "minecraft:rooted_dirt")
    .id("create:pressing/dirt_path_rooted");

  //disenchanter utility recipe
  event
    .shaped("create_enchantment_industry:disenchanter", ["S", "P", "C"], {
      S: ["#forge:sand/colorless", "#forge:sand/red"],
      P: "minecraft:paper",
      C: "create:copper_casing",
    })
    .id("create_enchantment_industry:crafting/disenchanter_util");

  //power loader conversion
  event.recipes.create
    .mechanical_crafting(
      "create_power_loader:brass_chunk_loader",
      ["GGGGG", "G   G", "G L G", "BMMMB", "BBSBB"],
      {
        G: "#forge:glass",
        L: "create_power_loader:andesite_chunk_loader",
        B: "create:brass_casing",
        M: "create:precision_mechanism",
        S: "create:shaft",
      }
    )
    .id("create_power_loader:crafting/brass_chunk_loader");

  //scoria to scorchia
  event.smelting("create:scorchia", "create:scoria");
  event.blasting("create:scorchia", "create:scoria");

  //crushing sandstone
  event.recipes.create.milling("minecraft:red_sand", '#c:red_sandstone_blocks').id('create:milling/red_sandstone');
  event.recipes.create.milling("minecraft:soul_sand", '#forge:sandstone/soul_sandstone').id('create:milling/soul_sandstone');
  event.recipes.create.milling("atmospheric:arid_sand", '#forge:sandstone/arid_sandstone').id('create:milling/arid_sandstone');
  event.recipes.create.milling("atmospheric:red_arid_sand", '#forge:sandstone/red_arid_sandstone').id('create:milling/red_arid_sandstone');

  event.replaceOutput({}, 'createaddition:zinc_sheet', 'createdeco:zinc_sheet')
});
