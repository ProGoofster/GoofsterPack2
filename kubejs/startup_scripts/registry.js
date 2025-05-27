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
