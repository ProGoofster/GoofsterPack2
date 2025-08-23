ServerEvents.recipes((event) => {
    event.replaceOutput({}, Fluid.of('ad_astra:oxygen'), Fluid.of("mekanism:oxygen"));

    event.custom({
        type: "ad_astra:oxygen_loading",
        cookingtime: 6,
        energy: 30,
        input: {
            ingredient: {
            tag: "minecraft:water"
            },
            millibuckets: 100
        },
        result: {
            fluid: "mekanism:oxygen",
            millibuckets: 4
        }
    }).id("ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water")
})