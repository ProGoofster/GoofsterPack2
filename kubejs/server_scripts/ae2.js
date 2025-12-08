ServerEvents.recipes((event) => {
  //remove bullshit
  event.remove({ output: /ae2:nether_quartz_.*/ });
  event.remove({ output: "ae2:sky_stone_chest" })
  event.remove({ output: "ae2:smooth_sky_stone_chest" })
  event.remove({ output: "ae2:sky_stone_tank" })

  event.recipes.create.mixing('ae2:fluix_crystal', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:fluix_dust']);
  event.recipes.create.mixing('ae2:certus_quartz_crystal', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:certus_quartz_dust']);

  event.recipes.create.mixing('ae2:damaged_budding_quartz', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:quartz_block']);
  event.recipes.create.mixing('ae2:chipped_budding_quartz', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:damaged_budding_quartz']);
  event.recipes.create.mixing('ae2:flawed_budding_quartz', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:chipped_budding_quartz']);

  event.recipes.create.deploying("ae2:printed_silicon", [
    "ae2:silicon",
    "ae2:silicon_press",
  ]).keepHeldItem();
  event.recipes.create.deploying("ae2:printed_logic_processor", [
    "minecraft:gold_ingot",
    "ae2:logic_processor_press",
  ]).keepHeldItem();
  event.recipes.create.deploying("ae2:printed_calculation_processor", [
    "ae2:certus_quartz_crystal",
    "ae2:calculation_processor_press",
  ]).keepHeldItem();
  event.recipes.create.deploying("ae2:printed_engineering_processor", [
    "minecraft:diamond",
    "ae2:engineering_processor_press",
  ]).keepHeldItem();

  event.recipes.create.deploying("ae2:silicon_press", ["minecraft:netherite_ingot", "ae2:silicon_press"]).keepHeldItem();
  event.recipes.create.deploying("ae2:logic_processor_press", ["minecraft:netherite_ingot", "ae2:logic_processor_press"]).keepHeldItem();
  event.recipes.create.deploying("ae2:calculation_processor_press", ["minecraft:netherite_ingot", "ae2:calculation_processor_press"]).keepHeldItem();
  event.recipes.create.deploying("ae2:engineering_processor_press", ["minecraft:netherite_ingot", "ae2:engineering_processor_press"]).keepHeldItem();

  var ip = "kubejs:incomplete_logic_processor";
    event.recipes.createSequencedAssembly(
        "ae2:logic_processor",
        "ae2:printed_logic_processor",
        [
            event.recipes.createDeploying(ip, [ip, "minecraft:redstone"]),
            event.recipes.createDeploying(ip, [ip, "ae2:printed_silicon"]),
            event.recipes.createPressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);
    
    ip = "kubejs:incomplete_calculation_processor";
    event.recipes.createSequencedAssembly(
        "ae2:calculation_processor",
        "ae2:printed_calculation_processor",
        [
            event.recipes.createDeploying(ip, [ip, "minecraft:redstone"]),
            event.recipes.createDeploying(ip, [ip, "ae2:printed_silicon"]),
            event.recipes.createPressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);
    
    ip = "kubejs:incomplete_engineering_processor";
    event.recipes.createSequencedAssembly(
        "ae2:engineering_processor",
        "ae2:printed_engineering_processor",
        [
            event.recipes.createDeploying(ip, [ip, "minecraft:redstone"]),
            event.recipes.createDeploying(ip, [ip, "ae2:printed_silicon"]),
            event.recipes.createPressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);
        
  event.remove({ output: "#forge:dusts", type: "ae2:inscriber" });
  event.remove({ id: "ae2:inscriber/ender_dust" });

  var p2p = [
    "ae2:me_p2p_tunnel",
    "ae2:redstone_p2p_tunnel",
    "ae2:item_p2p_tunnel",
    "ae2:fluid_p2p_tunnel",
    "ae2:fe_p2p_tunnel",
    "ae2:light_p2p_tunnel",
    "appmek:chemical_p2p_tunnel"
  ];
  for (var i of p2p) event.stonecutting(i, p2p);

  //cable recipes
  event.remove({ id: /ae2:network\/cables\/glass_(?!fluix)/ });
  event.remove({ id: /ae2:network\/cables\/covered_(?!fluix)/ });
  event.remove({ id: /ae2:network\/cables\/smart_(?!fluix)/ });
  event.remove({ id: /ae2:network\/cables\/smart_(?!fluix)/ });
  event.remove({ id: /ae2:network\/cables\/dense_covered_(?!fluix)/ });
  event.remove({
    id: /ae2:network\/cables\/dense_smart_(?!fluix)(?!from_smart)/,
  });

  event.replaceInput(
    { output: "ae2:inscriber" },
    "minecraft:copper_ingot",
    "ae2:fluix_crystal"
  );
  event.replaceInput(
    { output: "ae2:charger" },
    "minecraft:copper_ingot",
    "ae2:fluix_crystal"
  );

  //matter compressor pre-ae2
  event.replaceInput(
    { output: "ae2:condenser" },
    "ae2:fluix_dust",
    "ae2:ender_dust"
  );

  //replace wrenches
  event.remove({ output: "#ae2:quartz_wrench" })
  event.replaceInput({},
    "#ae2:quartz_wrench",
    "create:wrench"
  );

  event.remove({
    output: ["expatternprovider:wireless_connect", "expatternprovider:wireless_hub", "expatternprovider:ingredient_buffer",
      "expatternprovider:ex_drive", "expatternprovider:ex_molecular_assembler", "expatternprovider:ex_inscriber", "expatternprovider:ex_charger",
      "expatternprovider:crystal_fixer", "expatternprovider:caner", 'expatternprovider:drive_upgrade', 'expatternprovider:wireless_tool',
      "expatternprovider:circuit_cutter", "expatternprovider:fishbig"
    ]
  })
  event.remove({type: "expatternprovider:circuit_cutter"})

  event.replaceInput({ ouput: "expatternprovider:oversize_interface" }, "expatternprovider:ingredient_buffer", 'ae2:cell_component_16k')
  event.replaceInput({ ouput: "expatternprovider:assembler_matrix_crafter" }, "expatternprovider:ex_molecular_assembler", 'ae2:molecular_assembler');
  event.remove({ mod: "appflux", not: { output: ['appflux:induction_card', 'appflux:fe_cell_housing', 'appflux:flux_accessor', 'appflux:part_flux_accessor'] } })
  event.replaceInput({ output: 'appflux:fe_cell_housing' }, 'appflux:harden_insulating_resin', '#forge:ingots/uranium')
  event.replaceInput({ output: 'appflux:flux_accessor' }, 'appflux:energy_processor', 'ae2:logic_processor')
  event.replaceInput({ output: 'appflux:flux_accessor' }, '#forge:ingots/copper', '#forge:ingots/uranium')

  let cells = ["1k", "4k", "16k", "64k", "256k"]
  cells.forEach(cell => {
    event.shaped(
      `appflux:fe_${cell}_cell`,
      [
        'GRG',
        'RCR',
        'UUU'
      ],
      {
        G: "ae2:quartz_glass",
        R: "#forge:dusts/redstone",
        U: "#forge:ingots/uranium",
        C: "ae2:cell_component_" + cell
      }
    );
    event.shapeless(`appflux:fe_${cell}_cell`, [`ae2:cell_component_${cell}`, 'appflux:fe_cell_housing'])
    event.shapeless(`appflux:fe_${cell}_portable_cell`, [`ae2:cell_component_${cell}`, 'appflux:fe_cell_housing', 'ae2:chest', 'ae2:energy_cell'])
  });


  event.remove({output: "expatternprovider:infinity_cell"})
});

MoreJSEvents.villagerTrades((event) => {
  var proff = VillagerUtils.getProfessions();
  event.removeVanillaTrades(proff[14], [1, 5]);
});
