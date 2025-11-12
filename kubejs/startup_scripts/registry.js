// priority: 10

const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')
const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')
const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')


const mekStackAdditions = [
  { material: "aluminum", color: "#d1ecdf" },
  { material: "silver", color: "#e2e4fa" },
  { material: "nickel", color: "#c6cbbb" },
  { material: "zinc", color: "#b9e8c0" },
  { material: "desh", color: "#c67143" },
  { material: "ostrum", color: "#765360" },
  { material: "calorite", color: "#9e1e3e" },
  { material: "etrium", color: "#87ffff" }
];

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

  event.create("kubejs:crushed_raw_desh").tag("create:crushed_raw_materials");
  event.create("kubejs:crushed_raw_ostrum").tag("create:crushed_raw_materials");
  event.create("kubejs:crushed_raw_calorite").tag("create:crushed_raw_materials");
  event.create("crushed_raw_etrium").tag("create:crushed_raw_materials");
  event.create("enriched_etrium").tag("mekanism:enriched").tag("mekanism:enriched/etrium");
  event.create("fluorite_enriched_diamond").tag("mekanism:enriched").tag("mekanism:enriched/fluorite_diamond");

  event
    .create("dust_desh")
    .displayName("Desh Grit")
    .tag(`forge:dusts`)
    .tag(`forge:dusts/desh`);
  event
    .create("dust_ostrum")
    .displayName("Ostrum Grit")
    .tag(`forge:dusts`)
    .tag(`forge:dusts/ostrum`);
  event
    .create("dust_calorite")
    .displayName("Calorite Grit")
    .tag(`forge:dusts`)
    .tag(`forge:dusts/calorite`);
  event
    .create("dust_etrium")
    .displayName("Etrium Grit")
    .tag(`forge:dusts`)
    .tag(`forge:dusts/etrium`);
  event
    .create("dust_zinc")
    .displayName("Zinc Grit")
    .tag(`forge:dusts`)
    .tag(`forge:dusts/zinc`);
  event
    .create("dust_brass")
    .displayName("Brass Grit")
    .tag(`forge:dusts`)
    .tag(`forge:dusts/brass`);

  event.create("rocket_fuel_catalyst")

  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  function mekStack(name, color) {
    mekItems.forEach(type => {
      event.create(`${name}_${type}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `kubejs:item/${type}`)
        .texture('layer2', `mekanism:item/${type}_overlay`)
        .color(1, color)
        .tag(`mekanism:${type}s`)
        .tag(`mekanism:${type}s/${name}`)
    })
  }
  mekStackAdditions.forEach(entry => {
    mekStack(entry.material, entry.color)
  })
});

StartupEvents.registry("fluid", (event) => {
  event
    .create("chloroethane")
    .displayName("Liquid Chloroethane")

  event
    .create("polonium_fusion_fuel")
    .displayName("Liquid Polonium-Enhanced D-T Compound")
  event.create("infused_biodiesel")

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

StartupEvents.registry('mekanism:gas', event => {
  event.createCustom('chloroethane', () => $Gas($GasBuilder.builder().tint(Color.of("#ffffff").getRgbJS())))
  event.createCustom('polonium_fusion_fuel', () => $Gas($GasBuilder.builder().tint(Color.of("#ffffff").getRgbJS()))).displayName("Polonium-Enhanced D-T Compound")
})

StartupEvents.registry('mekanism:infuse_type', event => {
  event.createCustom('etrium', () => $InfuseType($InfuseTypeBuilder.builder().tint(Color.of("#ffffff").getRgbJS())))
  event.createCustom('fluorite_enriched_diamond', () => $InfuseType($InfuseTypeBuilder.builder().tint(Color.of("#ffffff").getRgbJS())))
})

StartupEvents.registry('mekanism:slurry', event => {

  mekStackAdditions.forEach(entry => {
    event.createCustom(`clean_${entry.material}`, () => $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
    event.createCustom(`dirty_${entry.material}`, () => $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
  })
})

ItemEvents.modification((event) => {
  event.modify("waterframes:remote", (item) => {
    item.maxStackSize = 64;
  });
});

const colors = [
  "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
  "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
];

BlockEvents.modification((event) => {
  colors.forEach(color => {
    event.modify(`create:${color}_table_cloth`, (block) => {
      block.destroySpeed = 2.0;
    });
  });
});
