StartupEvents.registry("block", (event) => {
  event
    .create("limesand", "falling")
    .tagBlock("minecraft:mineable/shovel")
    .hardness(0.5)
    .resistance(0.5)
    .sandSoundType()
    .mapColor("quartz");
  event
    .create("scoria_aggregate", "falling")
    .tagBlock("minecraft:mineable/shovel")
    .hardness(0.6)
    .resistance(0.6)
    .gravelSoundType()
    .mapColor("terracotta_black");
});

StartupEvents.registry("item", (event) => {
  event.create("incomplete_logic_processor", "create:sequenced_assembly");
  event.create("incomplete_calculation_processor", "create:sequenced_assembly");
  event.create("incomplete_engineering_processor", "create:sequenced_assembly");

  event
    .create("netherite_fluix_compound")
    .displayName("Netherite-Fluix Compound");
  
  event.create("energized_alloy").glow(true);

  event
    .create("incomplete_unfused_panel", "create:sequenced_assembly")
    .displayName("Incomplete Mysterious Panel")
    .glow(true);

  event
    .create("unfused_calculaton_panel")
    .displayName("Mysterious Panel (Calculation)")
    .glow(true);
  event
    .create("unfused_engineering_panel")
    .displayName("Mysterious Panel (Engineering)")
    .glow(true);
  event
    .create("unfused_logic_panel")
    .displayName("Mysterious Panel (Logic)")
    .glow(true);
  event
    .create("unfused_silicon_panel")
    .displayName("Mysterious Panel (Silicon)")
    .glow(true);
});

StartupEvents.registry("fluid", (event) => {
  event
    .create("chloroethane")
    .displayName("Liquid Chloroethane")

  event
    .create("polonium_fusion_fuel")
    .displayName("Liquid Polonium-Enhanced D-T Compound")

    event
    .create("rocket_fuel_1")
    .stillTexture("kubejs:block/fuel_still")
    .flowingTexture("kubejs:block/fuel_flow")
    .displayName("Grade 1 Rocket Fuel")
    .bucketItem
    .tooltip("§7Fuel for a Tier 1 Rocket")
  event
    .create("rocket_fuel_2")
    .stillTexture("kubejs:block/fuel_still")
    .flowingTexture("kubejs:block/fuel_flow")
    .displayName("Grade 2 Rocket Fuel")
    .bucketItem
    .tooltip("§7Fuel for a Tier 2 Rocket and below")
  event
    .create("rocket_fuel_3")
    .stillTexture("kubejs:block/fuel_still")
    .flowingTexture("kubejs:block/fuel_flow")
    .displayName("Grade 3 Rocket Fuel")
    .bucketItem
    .tooltip("§7Fuel for a Tier 3 Rocket and below")
  event
    .create("rocket_fuel_4")
    .stillTexture("kubejs:block/fuel_still")
    .flowingTexture("kubejs:block/fuel_flow")
    .displayName("Grade 4 Rocket Fuel")
    .bucketItem
    .tooltip("§7Fuel for a Tier 4 Rocket and below")

  event
    .create("rocket_cryo_fuel_1")
    .stillTexture("kubejs:block/cryo_fuel_still")
    .flowingTexture("kubejs:block/cryo_fuel_flow")
    .displayName("Grade 1 Rocket Cryo Fuel")
    .bucketItem
    .tooltip("§7Efficient fuel for a Tier 1 Rocket")
  event
    .create("rocket_cryo_fuel_2")
    .stillTexture("kubejs:block/cryo_fuel_still")
    .flowingTexture("kubejs:block/cryo_fuel_flow")
    .displayName("Grade 2 Rocket Cryo Fuel")
    .bucketItem
    .tooltip("§7Efficient fuel for a Tier 2 Rocket and below")
  event
    .create("rocket_cryo_fuel_3")
    .stillTexture("kubejs:block/cryo_fuel_still")
    .flowingTexture("kubejs:block/cryo_fuel_flow")
    .displayName("Grade 3 Rocket Cryo Fuel")
    .bucketItem
    .tooltip("§7Efficient fuel for a Tier 3 Rocket and below")
  event
    .create("rocket_cryo_fuel_4")
    .stillTexture("kubejs:block/cryo_fuel_still")
    .flowingTexture("kubejs:block/cryo_fuel_flow")
    .displayName("Grade 4 Rocket Cryo Fuel")
    .bucketItem
    .tooltip("§7Efficient fuel for a Tier 4 Rocket and below")
})

// const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
// const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')

StartupEvents.registry('mekanism:gas', event => {
  event.createCustom('chloroethane', () => $Gas($GasBuilder.builder()))
  event.createCustom('polonium_fusion_fuel', () => $Gas($GasBuilder.builder())).displayName("Polonium-Enhanced D-T Compound")
})

// StartupEvents.registry('mekanism:slurry', event => {
//   global.mekStackAdditions.forEach(entry => {
//     event.createCustom(`clean_${entry.material}`, () => $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
//     event.createCustom(`dirty_${entry.material}`, () => $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
//   })
// })

ItemEvents.modification((event) => {
  event.modify("waterframes:remote", (item) => {
    item.maxStackSize = 64;
  });
});

BlockEvents.modification((event) => {
  let colors = [
    "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
    "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
  ];

  colors.forEach(color => {
    event.modify(`create:${color}_table_cloth`, (block) => {
      block.destroySpeed = 2.0;
    });
  });
});
