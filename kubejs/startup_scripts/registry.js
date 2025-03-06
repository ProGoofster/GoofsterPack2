StartupEvents.registry("item", event => {
    event.create("incomplete_logic_processor", "create:sequenced_assembly");
    event.create("incomplete_calculation_processor", "create:sequenced_assembly");
    event.create("incomplete_engineering_processor", "create:sequenced_assembly");

    event.create("netherite_fluix_compound").displayName("Netherite-Fluix Compound");
    event.create("energized_alloy").glow(true);

    event.create("incomplete_unfused_panel", "create:sequenced_assembly").displayName("Incomplete Mysterious Panel");

    event.create("unfused_calculaton_panel").displayName("Mysterious Panel (Calculation)");
    event.create("unfused_engineering_panel").displayName("Mysterious Panel (Engineering)");
    event.create("unfused_logic_panel").displayName("Mysterious Panel (Logic)");
    event.create("unfused_silicon_panel").displayName("Mysterious Panel (Silicon)");
})

ItemEvents.modification(event => {
    event.modify("waterframes:remote", item => {
      item.maxStackSize = 64
    })
})