ServerEvents.recipes((event) => {
  //remove bullshit
  event.remove({ output: /ae2:nether_quartz_.*/ });
  event.remove({output: "ae2:sky_stone_chest"})
  event.remove({output: "ae2:smooth_sky_stone_chest"})
  event.remove({output: "ae2:sky_stone_tank"})

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
  event.remove({output: "#ae2:quartz_wrench"})
  event.replaceInput({},
    "#ae2:quartz_wrench",
    "create:wrench"
  );
});

MoreJSEvents.villagerTrades((event) => {
  var proff = VillagerUtils.getProfessions();
  event.removeVanillaTrades(proff[14], [1, 5]);
});
