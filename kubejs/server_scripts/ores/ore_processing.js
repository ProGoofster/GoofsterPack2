ServerEvents.recipes((event) => {

    //event.remove({ mod: "goofsterpack" })
    let ores = [
        { ore_id: "goofsterpack:calorite_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_calorite" },
        { ore_id: "goofsterpack:deepslate_etrium_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_etrium" },
        { ore_id: "goofsterpack:desh_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_desh" },
        { ore_id: "goofsterpack:etrium_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_etrium" },
        { ore_id: "goofsterpack:glacio_aluminum_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "goofsterpack:glacio_calorite_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_calorite" },
        { ore_id: "goofsterpack:glacio_desh_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_desh" },
        { ore_id: "goofsterpack:glacio_diamond_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_diamond" },
        { ore_id: "goofsterpack:glacio_emerald_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_emerald" },
        { ore_id: "goofsterpack:glacio_etrium_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_etrium" },
        { ore_id: "goofsterpack:glacio_fluorite_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_fluorite" },
        { ore_id: "goofsterpack:glacio_gold_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_gold" },
        { ore_id: "goofsterpack:glacio_lead_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "goofsterpack:glacio_nickel_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "goofsterpack:glacio_osmium_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "goofsterpack:glacio_ostrum_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_ostrum" },
        { ore_id: "goofsterpack:glacio_redstone_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_redstone" },
        { ore_id: "goofsterpack:glacio_silver_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "goofsterpack:glacio_tin_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "goofsterpack:glacio_uranium_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_uranium" },
        { ore_id: "goofsterpack:glacio_zinc_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_zinc" },
        { ore_id: "goofsterpack:mars_aluminum_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "goofsterpack:mars_lead_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "goofsterpack:mars_osmium_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "goofsterpack:mars_tin_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "goofsterpack:mercury_fluorite_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_fluorite" },
        { ore_id: "goofsterpack:mercury_nickel_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "goofsterpack:mercury_silver_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "goofsterpack:mercury_uranium_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_uranium" },
        { ore_id: "goofsterpack:moon_aluminum_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "goofsterpack:moon_lead_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "goofsterpack:moon_nickel_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "goofsterpack:moon_silver_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "goofsterpack:ostrum_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_ostrum" },
        { ore_id: "goofsterpack:venus_fluorite_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_fluorite" },
        { ore_id: "goofsterpack:venus_osmium_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "goofsterpack:venus_tin_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "goofsterpack:venus_uranium_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_uranium" }
    ];


    ores.forEach(ore => {
        if (ore.cobble_id != "minecraft:cobbled_deepslate") {
            event.recipes
                .createCrushing(
                    [
                        ore.crushed_id,
                        Item.of(ore.crushed_id).withChance(0.75),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of(ore.cobble_id).withChance(0.12),
                    ],
                    ore.ore_id
                )
                //.id(`create:crushing/${i[0]}_ore`)
                .processingTime(400);
        } else {
            event.recipes
                .createCrushing(
                    [
                        ore.crushed_id,
                        Item.of(ore.crushed_id).withChance(0.25),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of(ore.cobble_id).withChance(0.125),
                    ],
                    ore.ore_id
                )
                //.id(`create:crushing/deepslate_${i[0]}_ore`)
                .processingTime(250);
        }
    })

    let spacemats = ["desh", "ostrum", "calorite", "etrium"];
    for (var mat of spacemats) {
        event
            .custom({
                type: "immersiveengineering:crusher",
                energy: 54000,
                input: { tag: `forge:storage_blocks/raw_${mat}` },
                result: { base_ingredient: { tag: `forge:dusts/${mat}` }, count: 12 },
                secondaries: [],
            })
            .id(`immersiveengineering:crusher/raw_block_${mat}`);

        event
            .custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: { tag: `forge:raw_materials/${mat}` },
                result: { tag: `forge:dusts/${mat}` },
                secondaries: [
                    { chance: 0.33333334, output: { tag: `forge:dusts/${mat}` } },
                ],
            })
            .id(`immersiveengineering:crusher/raw_ore_${mat}`);

        event
            .custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: { tag: `forge:ores/${mat}` },
                result: { base_ingredient: { tag: `forge:dusts/${mat}` }, count: 2 },
                secondaries: [],
            })
            .id(`immersiveengineering:crusher/ore_${mat}`);

        event
            .custom({
                type: "immersiveengineering:crusher",
                energy: 3000,
                input: { tag: `forge:ingots/${mat}` },
                result: { tag: `forge:dusts/${mat}` },
                secondaries: [],
            })
            .id(`immersiveengineering:crusher/ingot_${mat}`);

        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            energy: 51200,
            input: { tag: `forge:dusts/${mat}` },
            results: [{ base_ingredient: { tag: `forge:ingots/${mat}` } }],
            time: 100,
        })
            .id(`immersiveengineering:arcfurnace/dust_${mat}`);
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            energy: 102400,
            input: { tag: `forge:ores/${mat}` },
            results: [{ base_ingredient: { tag: `forge:ingots/${mat}` }, count: 2 }],
            slag: { item: "immersiveengineering:slag" },
            time: 200,
        })
            .id(`immersiveengineering:arcfurnace/ore_${mat}`);
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            energy: 230400,
            input: { tag: `forge:storage_blocks/raw_${mat}` },
            results: [{ base_ingredient: { tag: `forge:ingots/${mat}` }, count: 13 }],
            secondaries: [{ chance: 0.5, output: { tag: `forge:ingots/${mat}` } }],
            time: 900,
        })
            .id(`immersiveengineering:arcfurnace/raw_block_${mat}`);
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            energy: 25600,
            input: { tag: `forge:raw_materials/${mat}` },
            results: [{ base_ingredient: { tag: `forge:ingots/${mat}` } }],
            secondaries: [{ chance: 0.5, output: { tag: `forge:ingots/${mat}` } }],
            time: 100,
        })
            .id(`immersiveengineering:arcfurnace/raw_ore_${mat}`);
    }
    function oresmelting(output, input) {
        event.smelting(output, input);
        event.blasting(output, input);
    };

    oresmelting("ad_astra:etrium_ingot", "#forge:ores/etrium")
    oresmelting("ad_astra:etrium_ingot", "#forge:raw_materials/etrium")
})