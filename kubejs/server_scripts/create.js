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

  event.remove({ id: "createaddition:pressing/steel_ingot" });
  event.remove({ id: "createaddition:pressing/constantan_ingot" });
  event.remove({ id: "createaddition:pressing/uranium_ingot" });
  event.remove({ id: "createaddition:pressing/nickel_ingot" });
  event.remove({ id: "createaddition:pressing/silver_ingot" });
  event.remove({ id: "createaddition:pressing/lead_ingot" });
  event.remove({ id: "createaddition:pressing/aluminum_ingot" });
  event.remove({ output: Fluid.of("createaddition:seed_oil") });
  event.remove({ output: "createaddition:biomass" });
  event.remove({ output: "createaddition:biomass_pellet_block" });
  event.remove({ output: "createaddition:biomass_pellet" });
  event.remove({ output: Fluid.of("createaddition:bioethanol") });
  event.remove({ output: "createaddition:connector" });
  event.remove({ output: "createaddition:small_light_connector" });
  event.remove({ output: "createaddition:large_connector" });
  event.remove({ output: "createaddition:redstone_relay" });
  event.remove({ output: "createaddition:redstone_relay" });
  event.remove({ output: "createaddition:iron_wire" });
  event.remove({ output: "createaddition:gold_wire" });
  event.remove({ input: "createaddition:gold_wire" });
  event.remove({ output: "createaddition:brass_rod" });
  event.replaceInput({ output: "createaddition:barbed_wire" }, "#forge:wires/iron", "#forge:wires/steel")
  event.remove({ output: /createaddition:.*spool/ });
  event.replaceInput({}, "createaddition:copper_spool", "immersiveengineering:wirecoil_copper")

  event.replaceOutput({}, "createaddition:iron_rod", "immersiveengineering:stick_iron")
  event.replaceOutput({}, "createaddition:gold_rod", "immersiveposts:stick_gold")
  event.replaceOutput({}, "createaddition:copper_rod", "immersiveposts:stick_copper")
  event.replaceOutput({}, "createaddition:electrum_rod", "immersiveposts:stick_electrum")


  event.remove({ id: "createaddition:crafting/modular_accumulator_electrum" });
  event.remove({ id: "createaddition:crafting/large_connector_electrum" });
  event.remove({ output: "create_enchantment_industry:experience_rotor" });
  event.remove({ input: "create_enchantment_industry:experience_rotor" });

  event.recipes.createMixing('2x immersiveengineering:ingot_electrum', [
    '#forge:ingots/silver',
    '#forge:ingots/gold',
  ]).heated().id('createaddition:mixing/electrum')

  event.recipes.createMixing('2x immersiveengineering:insulating_glass', [
    '2x #forge:glass',
    '#forge:dusts/iron',
  ]).heated().id('createaddition:compat/immersiveengineering/insulating_glass')

  let rodmetals = ["gold", "copper", "lead", "silver", "nickel", "constantan", "electrum", "uranium"]
  rodmetals.forEach(metal => {
    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: `forge:ingots/${metal}`,
      },
      result: {
        item: `immersiveposts:stick_${metal}`,
        count: 2,
      },
    }).id(`createaddition:rolling/${metal}_ingot`);
  })
  rodmetals = ["iron", "steel", "aluminum"]
  rodmetals.forEach(metal => {
    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: `forge:ingots/${metal}`,
      },
      result: {
        item: `immersiveengineering:stick_${metal}`,
        count: 2,
      },
    }).id(`createaddition:rolling/${metal}_ingot`);
  })

  let wiremetals = ["copper", "electrum"];
  wiremetals.forEach(metal => {
    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: `forge:plates/${metal}`,
      },
      result: {
        item: `immersiveengineering:wire_${metal}`,
        count: 2,
      },
    }).id(`createaddition:rolling/${metal}_plate`);
  })


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
  event.remove({ id: "createaddition:crafting/festive_spool" });
  //tweak recipes for use with tags
  event.replaceInput(
    { id: "create:milling/granite" },
    "minecraft:granite",
    "#create:stone_types/granite"
  );
  event.replaceInput(
    { id: "create:milling/terracotta" },
    "minecraft:terracotta",
    "#quark:terracotta_all"
  );
  event.replaceInput(
    { id: "create:milling/granite" },
    "minecraft:granite",
    "#create:stone_types/granite"
  );
  event.replaceInput(
    { id: "create:milling/sandstone" },
    "minecraft:sandstone",
    "#c:uncolored_sandstone_blocks"
  );

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
  event.recipes.create
    .milling("kubejs:scoria_aggregate", "#create:stone_types/scoria")
    .processingTime(250);
  event.recipes.create.splashing(
    [
      Item.of("minecraft:coal").withChance(0.025),
      Item.of("create:copper_nugget").withChance(0.12),
    ],
    "kubejs:scoria_aggregate"
  );
  //zinc
  event.recipes.create
    .milling("kubejs:limesand", "#create:stone_types/limestone")
    .processingTime(250);
  event.recipes.create.splashing(
    [
      Item.of("minecraft:bone_meal").withChance(0.15),
      Item.of("create:zinc_nugget").withChance(0.12),
    ],
    "kubejs:limesand"
  );
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
  event.recipes
    .createMixing("2x minecraft:basalt", [
      "minecraft:blue_ice",
      "minecraft:soul_soil",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:mixing/basalt");

  //end stone
  event.recipes
    .createCompacting("minecraft:end_stone", [
      "2x minecraft:flint",
      "minecraft:purpur_block",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:compacting/end_stone");



  event.recipes.createMixing('2x ad_astra:moon_stone', [
    'ad_astra:moon_sand',
    'minecraft:soul_soil',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/moon_stone');

  event.recipes.createMixing('2x ad_astra:mars_stone', [
    'ad_astra:mars_sand',
    'ad_astra:conglomerate',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/mars_stone');

  event.recipes.createMixing('2x ad_astra:venus_stone', [
    'ad_astra:venus_sand',
    'ad_astra:infernal_spire_block',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/venus_stone');

  event.recipes.createMixing('2x ad_astra:mercury_stone', [
    'ad_astra:mercury_cobblestone',
    'minecraft:magma_block',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/mercury_stone');

  event.recipes.createMixing('2x ad_astra:glacio_stone', [
    'ad_astra:permafrost',
    'ae2:sky_stone_block',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/galcio_stone');

  event.recipes.createMixing('2x ad_astra:conglomerate', [
    'minecraft:granite',
    'minecraft:dripstone_block',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/conglomerate');

  event.recipes.createMixing('2x ad_astra:infernal_spire_block', [
    'minecraft:basalt',
    'minecraft:magma_block',
    Fluid.of('minecraft:lava', 100)
  ]).id('create:mixing/infernal_spire_block');

  //ae2 skystone
  event.replaceInput(
    { id: "create:milling/compat/ae2/sky_stone_block" },
    "ae2:sky_stone_block",
    "#ae2:sky_stone"
  );

  event.recipes
    .createMixing("2x ae2:sky_stone_block", [
      "ae2:sky_dust",
      "#forge:cobblestone",
      Fluid.of("minecraft:lava", 100),
    ])
    .id("create:mixing/sky_stone_block");

  //crying obsidian
  event.recipes
    .createMixing("minecraft:crying_obsidian", [
      "minecraft:amethyst_shard",
      "minecraft:obsidian",
      "minecraft:ghast_tear",
      Fluid.of("minecraft:water", 250),
    ])
    .superheated()
    .id("create:mixing/crying_obsidian");


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

  event.recipes.create.milling('ad_astra:moon_cobblestone', 'ad_astra:moon_stone').id('create:milling/moon_cobblestone').processingTime(200)
  event.recipes.create.milling('ad_astra:moon_sand', 'ad_astra:moon_cobblestone').id('create:milling/moon_sand').processingTime(200)

  event.recipes.create.milling('ad_astra:mars_cobblestone', 'ad_astra:mars_stone').id('create:milling/mars_cobblestone').processingTime(200)
  event.recipes.create.milling('ad_astra:mars_sand', 'ad_astra:mars_cobblestone').id('create:milling/mars_sand').processingTime(200)

  event.recipes.create.milling('ad_astra:venus_cobblestone', 'ad_astra:venus_stone').id('create:milling/venus_cobblestone').processingTime(200)
  event.recipes.create.milling('ad_astra:venus_sand', 'ad_astra:venus_cobblestone').id('create:milling/venus_sand').processingTime(200)

  event.recipes.create.milling('ad_astra:mercury_cobblestone', 'ad_astra:mercury_stone').id('create:milling/mercury_cobblestone').processingTime(200)

  event.recipes.create.milling('ad_astra:glacio_cobblestone', 'ad_astra:glacio_stone').id('create:milling/glacio_cobblestone').processingTime(200)

  //crushing sandstone
  event.recipes.create
    .milling("minecraft:red_sand", "#c:red_sandstone_blocks")
    .id("create:milling/red_sandstone");
  event.recipes.create
    .milling("minecraft:soul_sand", "#forge:sandstone/soul_sandstone")
    .id("create:milling/soul_sandstone");
  event.recipes.create
    .milling("atmospheric:arid_sand", "#forge:sandstone/arid_sandstone")
    .id("create:milling/arid_sandstone");
  event.recipes.create
    .milling("atmospheric:red_arid_sand", "#forge:sandstone/red_arid_sandstone")
    .id("create:milling/red_arid_sandstone");

  //rework!!!
  //event.recipes.create.splashing([Item.of('ad_astra:desh_nugget').withChance(0.04), Item.of('immersiveengineering:nugget_silver').withChance(0.04), Item.of('immersiveengineering:nugget_lead').withChance(0.04)], 'ad_astra:moon_sand').id('create:splashing/moon_sand');
  //event.recipes.create.splashing([Item.of('ad_astra:ostrum_nugget').withChance(0.04), Item.of('immersiveengineering:nugget_nickel').withChance(0.04), Item.of('immersiveengineering:nugget_aluminum').withChance(0.04)], 'ad_astra:mars_sand').id('create:splashing/mars_sand');
  //event.recipes.create.splashing([Item.of('ad_astra:calorite_nugget').withChance(0.06), Item.of('thermal:tin_nugget').withChance(0.06)], 'ad_astra:venus_sand').id('create:splashing/venus_sand');

  //copycat shaft recipe
  event.remove({ output: "copycats:copycat_shaft" });
  event.stonecutting("copycats:copycat_shaft", "create:shaft");

  //draining enchanted fruit
  event.custom({
    type: "create_enchantment_industry:disenchanting",
    ingredients: [
      {
        item: "quark:ancient_fruit",
      },
    ],
    results: [
      {
        fluid: "create_enchantment_industry:experience",
        amount: 10,
      },
    ],
  });

  event.shaped(
    "createaddition:barbed_wire",
    [
      ' W ',
      'W W',
      ' W '
    ],
    {
      W: "#forge:wires/steel"
    }
  ).id("createaddition:crafting/barbed_wire");

  event.shaped(
    "createaddition:modular_accumulator",
    [
      ' R ',
      'CBC',
      ' W '
    ],
    {
      W: "#forge:wires/copper",
      R: "#forge:rods/copper",
      C: "createaddition:capacitor",
      B: "create:brass_casing"
    }
  ).id("createaddition:crafting/modular_accumulator_gold");

  event.remove({ id: "create_factory_logistics:network_link_qualification_create_factory_abstractions_empty" })

  event.recipes.create.milling("mekanism:dust_emerald", "minecraft:emerald")
  event.recipes.create.milling("mekanism:dust_quartz", "minecraft:quartz")
  event.recipes.create.milling("mekanism:dust_lapis_lazuli", "minecraft:lapis_lazuli")
  event.recipes.create.milling("mekanism:dust_fluorite", "mekanism:fluorite_gem")

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "goofsterpack:glacio_diamond_ore"
      }
    ],
    processingTime: 350,
    results: [
      {
        item: "minecraft:diamond"
      },
      {
        chance: 0.75,
        item: "minecraft:diamond"
      },
      {
        chance: 0.75,
        item: "create:experience_nugget"
      },
      {
        chance: 0.125,
        item: "ad_astra:glacio_cobblestone"
      }
    ]
  })

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "goofsterpack:glacio_emerald_ore"
      }
    ],
    processingTime: 350,
    results: [
      {
        item: "minecraft:emerald"
      },
      {
        chance: 0.75,
        item: "minecraft:emerald"
      },
      {
        chance: 0.75,
        item: "create:experience_nugget"
      },
      {
        chance: 0.125,
        item: "ad_astra:glacio_cobblestone"
      }
    ]
  })

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "goofsterpack:glacio_redstone_ore"
      }
    ],
    processingTime: 250,
    results: [
      {
        count: 6,
        item: "minecraft:redstone"
      },
      {
        chance: 0.5,
        item: "minecraft:redstone"
      },
      {
        chance: 0.75,
        item: "create:experience_nugget"
      },
      {
        chance: 0.125,
        item: "ad_astra:glacio_cobblestone"
      }
    ]
  })

  event.recipes.create.mixing(Fluid.of("kubejs:rocket_fuel_1", 4), Fluid.of("immersiveengineering:creosote", 20)).heated()

});
