ServerEvents.recipes((event) => {

    event.remove({ mod: "goofsterpack", output: "mekanism:fluorite_gem" })
    event.remove({ type: "create:crushing", input: "#forge:ores", output: "#create:crushed_raw_materials", not: { output: ["create:crushed_raw_iron", "create:crushed_raw_gold", "create:crushed_raw_copper", "create:crushed_raw_zinc"] } })
    event.remove({ type: "create:crushing", input: "#forge:ores", output: "#forge:raw_materials" })
    let ores = [
        { ore_id: "immersiveengineering:ore_aluminum", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "immersiveengineering:ore_lead", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "immersiveengineering:ore_nickel", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "immersiveengineering:ore_silver", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "immersiveengineering:deepslate_ore_aluminum", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "immersiveengineering:deepslate_ore_lead", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "immersiveengineering:deepslate_ore_nickel", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "immersiveengineering:deepslate_ore_silver", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_silver" },

        { ore_id: "mekanism:tin_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "mekanism:osmium_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "mekanism:uranium_ore", cobble_id: "minecraft:cobblestone", crushed_id: "create:crushed_raw_uranium" },
        { ore_id: "mekanism:deepslate_tin_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "mekanism:deepslate_osmium_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "mekanism:deepslate_uranium_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "create:crushed_raw_uranium" },

        { ore_id: "mekanism:fluorite_ore", cobble_id: "minecraft:cobblestone", crushed_id: "mekanism:fluorite_gem" },
        { ore_id: "mekanism:deepslate_fluorite_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "mekanism:fluorite_gem" },
        { ore_id: "goofsterpack:glacio_fluorite_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "mekanism:fluorite_gem" },
        { ore_id: "goofsterpack:mercury_fluorite_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "mekanism:fluorite_gem" },
        { ore_id: "goofsterpack:venus_fluorite_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "mekanism:fluorite_gem" },

        { ore_id: "ad_astra:moon_desh_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "kubejs:crushed_raw_desh" },
        { ore_id: "ad_astra:mars_ostrum_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "kubejs:crushed_raw_ostrum" },
        { ore_id: "ad_astra:venus_calorite_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "kubejs:crushed_raw_calorite" },
        { ore_id: "ad_astra:deepslate_desh_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "kubejs:crushed_raw_desh" },
        { ore_id: "ad_astra:deepslate_ostrum_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "kubejs:crushed_raw_ostrum" },
        { ore_id: "ad_astra:deepslate_calorite_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "kubejs:crushed_raw_calorite" },

        { ore_id: "goofsterpack:calorite_ore", cobble_id: "minecraft:cobblestone", crushed_id: "kubejs:crushed_raw_calorite" },
        { ore_id: "goofsterpack:deepslate_etrium_ore", cobble_id: "minecraft:cobbled_deepslate", crushed_id: "kubejs:crushed_raw_etrium" },
        { ore_id: "goofsterpack:desh_ore", cobble_id: "minecraft:cobblestone", crushed_id: "kubejs:crushed_raw_desh" },
        { ore_id: "goofsterpack:etrium_ore", cobble_id: "minecraft:cobblestone", crushed_id: "kubejs:crushed_raw_etrium" },
        { ore_id: "goofsterpack:glacio_aluminum_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "goofsterpack:glacio_calorite_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "kubejs:crushed_raw_calorite" },
        { ore_id: "goofsterpack:glacio_desh_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "kubejs:crushed_raw_desh" },
        { ore_id: "goofsterpack:glacio_etrium_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "kubejs:crushed_raw_etrium" },
        { ore_id: "goofsterpack:glacio_gold_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_gold" },
        { ore_id: "goofsterpack:glacio_lead_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "goofsterpack:glacio_nickel_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "goofsterpack:glacio_osmium_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "goofsterpack:glacio_ostrum_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "kubejs:crushed_raw_ostrum" },
        { ore_id: "goofsterpack:glacio_silver_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "goofsterpack:glacio_tin_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "goofsterpack:glacio_uranium_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_uranium" },
        { ore_id: "goofsterpack:glacio_zinc_ore", cobble_id: "ad_astra:glacio_cobblestone", crushed_id: "create:crushed_raw_zinc" },
        { ore_id: "goofsterpack:mars_aluminum_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "goofsterpack:mars_lead_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "goofsterpack:mars_osmium_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "goofsterpack:mars_tin_ore", cobble_id: "ad_astra:mars_cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "goofsterpack:mercury_nickel_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "goofsterpack:mercury_silver_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "goofsterpack:mercury_uranium_ore", cobble_id: "ad_astra:mercury_cobblestone", crushed_id: "create:crushed_raw_uranium" },
        { ore_id: "goofsterpack:moon_aluminum_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_aluminum" },
        { ore_id: "goofsterpack:moon_lead_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_lead" },
        { ore_id: "goofsterpack:moon_nickel_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_nickel" },
        { ore_id: "goofsterpack:moon_silver_ore", cobble_id: "ad_astra:moon_cobblestone", crushed_id: "create:crushed_raw_silver" },
        { ore_id: "goofsterpack:ostrum_ore", cobble_id: "minecraft:cobblestone", crushed_id: "kubejs:crushed_raw_ostrum" },
        { ore_id: "goofsterpack:venus_osmium_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_osmium" },
        { ore_id: "goofsterpack:venus_tin_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_tin" },
        { ore_id: "goofsterpack:venus_uranium_ore", cobble_id: "ad_astra:venus_cobblestone", crushed_id: "create:crushed_raw_uranium" }
    ];


    ores.forEach(ore => {
        if (ore.cobble_id != "minecraft:cobbled_deepslate" && ore.crushed_id != "mekanism:fluorite_gem") {
            event.recipes
                .createCrushing(
                    [
                        ore.crushed_id,
                        Item.of(ore.crushed_id).withChance(0.75),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of(ore.cobble_id).withChance(0.125)
                    ],
                    ore.ore_id
                )
                //.id(`create:crushing/${i[0]}_ore`)
                .processingTime(350);
        } else if (ore.cobble_id != "minecraft:cobbled_deepslate" && ore.crushed_id == "mekanism:fluorite_gem") {
            event.recipes
                .createCrushing(
                    [
                        Item.of(ore.crushed_id, 5),
                        Item.of(ore.crushed_id).withChance(0.75),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of(ore.cobble_id).withChance(0.125)
                    ],
                    ore.ore_id
                )
                //.id(`create:crushing/${i[0]}_ore`)
                .processingTime(250);
        } else if (ore.cobble_id == "minecraft:cobbled_deepslate" && ore.crushed_id == "mekanism:fluorite_gem") {
            event.recipes
                .createCrushing(
                    [
                        Item.of(ore.crushed_id, 6),
                        Item.of(ore.crushed_id).withChance(0.25),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of(ore.cobble_id).withChance(0.125)
                    ],
                    ore.ore_id
                )
                //.id(`create:crushing/${i[0]}_ore`)
                .processingTime(350);
        } else {
            event.recipes
                .createCrushing(
                    [
                        Item.of(ore.crushed_id, 2),
                        Item.of(ore.crushed_id).withChance(0.25),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of(ore.cobble_id).withChance(0.125)
                    ],
                    ore.ore_id
                )
                //.id(`create:crushing/deepslate_${i[0]}_ore`)
                .processingTime(250);
        }
    })

    var rawToCrushed = [
        { raw_id: "ad_astra:raw_desh", crushed_id: "kubejs:crushed_raw_desh" },
        { raw_id: "ad_astra:raw_ostrum", crushed_id: "kubejs:crushed_raw_ostrum" },
        { raw_id: "ad_astra:raw_calorite", crushed_id: "kubejs:crushed_raw_calorite" },
        { raw_id: "goofsterpack:raw_etrium", crushed_id: "kubejs:crushed_raw_etrium" },
    ]

    rawToCrushed.forEach(ore => {
        event.recipes
            .createCrushing(
                [
                    ore.crushed_id,
                    Item.of("create:experience_nugget").withChance(0.75)
                ],
                ore.raw_id
            )
            .processingTime(400);
    })

    var blockRawToCrushed = [
        { raw_id: "ad_astra:raw_desh_block", crushed_id: "kubejs:crushed_raw_desh" },
        { raw_id: "ad_astra:raw_ostrum_block", crushed_id: "kubejs:crushed_raw_ostrum" },
        { raw_id: "ad_astra:raw_calorite_block", crushed_id: "kubejs:crushed_raw_calorite" }
    ]

    blockRawToCrushed.forEach(ore => {
        event.recipes
            .createCrushing(
                [
                    Item.of(ore.crushed_id, 9),
                    Item.of("create:experience_nugget", 9).withChance(0.75)
                ],
                ore.raw_id
            )
            .processingTime(400);
    })

    //splashing

    event.recipes.create.splashing(['9x ad_astra:desh_nugget', Item.of("minecraft:glowstone").withChance(.5)], 'kubejs:crushed_raw_desh');
    event.recipes.create.splashing(['9x ad_astra:ostrum_nugget', Item.of("create:cinder_flour").withChance(.5)], 'kubejs:crushed_raw_ostrum');
    event.recipes.create.splashing(['9x ad_astra:calorite_nugget', Item.of("minecraft:blaze_powder").withChance(.25)], 'kubejs:crushed_raw_calorite');
    event.recipes.create.splashing(['9x ad_astra:etrium_nugget', Item.of("minecraft:diamond").withChance(.125)], 'kubejs:crushed_raw_etrium');


    //fluorite, diamond, redstone, emerald, , 

    let spacemats = ["desh", "ostrum", "calorite", "etrium"];
    for (var mat of spacemats) {
        if (mat != 'etrium') {
            event
                .custom({
                    type: "immersiveengineering:crusher",
                    energy: 54000,
                    input: { tag: `forge:storage_blocks/raw_${mat}` },
                    result: { base_ingredient: { tag: `forge:dusts/${mat}` }, count: 12 },
                    secondaries: [],
                })
                .id(`immersiveengineering:crusher/raw_block_${mat}`);
        }

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
            results: [{ base_ingredient: { tag: `forge:ingots/${mat}` }, count: 1 }],
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
        if (mat != 'etrium') {
            event.custom({
                type: "immersiveengineering:arc_furnace",
                additives: [],
                energy: 230400,
                input: { tag: `forge:storage_blocks/raw_${mat}` },
                results: [{ base_ingredient: { tag: `forge:ingots/${mat}` }, count: 13 }],
                secondaries: [{ chance: 0.5, output: { count: 1, base_ingredient: { tag: `forge:ingots/${mat}` } } }],
                time: 900,
            })
                .id(`immersiveengineering:arcfurnace/raw_block_${mat}`);
        }
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            energy: 25600,
            input: { tag: `forge:raw_materials/${mat}` },
            results: [{ base_ingredient: { tag: `forge:ingots/${mat}` }, count: 1 }],
            secondaries: [{ chance: 0.5, output: { count: 1, base_ingredient: { tag: `forge:ingots/${mat}` } } }],
            time: 100,
        })
            .id(`immersiveengineering:arcfurnace/raw_ore_${mat}`);
    }
    function oresmelting(output, input, xp) {
        xp = xp || 0;
        event.smelting(output, input).xp(xp);
        event.blasting(output, input).xp(xp);
    };

    event
        .custom({
            type: "immersiveengineering:crusher",
            energy: 6000,
            input: { tag: `forge:ores/cheese` },
            result: { base_ingredient: { item: 'ad_astra:cheese' }, count: 4 },
            secondaries: [],
        })
        .id(`immersiveengineering:crusher/ore_cheese`);

    // NEED XP
    oresmelting("ad_astra:etrium_ingot", "#forge:raw_materials/etrium", .7)

    //mekanism

    let mekOreProcessing = [
        { name: "etrium", dust: "kubejs:dust_etrium" },
        { name: "desh", dust: "kubejs:dust_desh" },
        { name: "ostrum", dust: "kubejs:dust_ostrum" },
        { name: "calorite", dust: "kubejs:dust_calorite" },
        { name: "zinc", dust: "kubejs:dust_zinc" },
        { name: "nickel", dust: "immersiveengineering:dust_nickel" },
        { name: "silver", dust: "immersiveengineering:dust_silver" },
        { name: "aluminum", dust: "immersiveengineering:dust_aluminum" },
    ]

    mekOreProcessing.forEach(mat => {
        if (mat.name != 'etrium') {
            event.custom({
                type: "mekanism:dissolution",
                gasInput: { amount: 2, gas: "mekanism:sulfuric_acid" },
                itemInput: { ingredient: { tag: `forge:storage_blocks/raw_${mat.name}` } },
                output: { amount: 6000, chemicalType: "slurry", slurry: `kubejs:dirty_${mat.name}` }
            });
        }

        event.custom({
            type: "mekanism:dissolution",
            gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
            itemInput: { count: 3, ingredient: { tag: `forge:raw_materials/${mat.name}` } },
            output: { amount: 2000, chemicalType: "slurry", slurry: `kubejs:dirty_${mat.name}` }
        });

        event.custom({
            type: "mekanism:dissolution",
            gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
            itemInput: { ingredient: { tag: `forge:ores/${mat.name}` } },
            output: { amount: 1000, chemicalType: "slurry", slurry: `kubejs:dirty_${mat.name}` }
        });



        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: { amount: 200, slurry: `kubejs:clean_${mat.name}` },
            output: { item: `kubejs:${mat.name}_crystal` }
        })

        if (mat.name != 'etrium') {
            event.custom({
                type: "mekanism:injecting",
                chemicalInput: { amount: 2, gas: "mekanism:hydrogen_chloride" },
                itemInput: { ingredient: { tag: `forge:storage_blocks/raw_${mat.name}` } },
                output: { count: 24, item: `kubejs:${mat.name}_shard` }
            })
        }
        event.custom({
            type: "mekanism:injecting",
            chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" },
            itemInput: { count: 3, ingredient: { tag: `forge:raw_materials/${mat.name}` } },
            output: { count: 8, item: `kubejs:${mat.name}_shard` }
        })
        event.custom({
            type: "mekanism:injecting",
            chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" },
            itemInput: { ingredient: { tag: `forge:ores/${mat.name}` } },
            output: { count: 4, item: `kubejs:${mat.name}_shard` }
        })
        event.custom({
            type: "mekanism:injecting",
            chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" },
            itemInput: { ingredient: { item: `kubejs:${mat.name}_crystal` } },
            output: { item: `kubejs:${mat.name}_shard` }
        })

        if (mat.name != 'etrium') {
            event.custom({
                type: "mekanism:purifying",
                chemicalInput: { amount: 2, gas: "mekanism:oxygen" },
                itemInput: { ingredient: { tag: `forge:storage_blocks/raw_${mat.name}` } },
                output: { count: 18, item: `kubejs:${mat.name}_clump` }
            })
        }
        event.custom({
            type: "mekanism:purifying",
            chemicalInput: { amount: 1, gas: "mekanism:oxygen" },
            itemInput: { ingredient: { tag: `forge:raw_materials/${mat.name}` } },
            output: { count: 2, item: `kubejs:${mat.name}_clump` }
        })
        event.custom({
            type: "mekanism:purifying",
            chemicalInput: { amount: 1, gas: "mekanism:oxygen" },
            itemInput: { ingredient: { tag: `forge:ores/${mat.name}` } },
            output: { count: 3, item: `kubejs:${mat.name}_clump` }
        })
        event.custom({
            type: "mekanism:purifying",
            chemicalInput: { amount: 1, gas: "mekanism:oxygen" },
            itemInput: { ingredient: { item: `kubejs:${mat.name}_shard` } },
            output: { item: `kubejs:${mat.name}_clump` }
        })

        event.custom({
            type: "mekanism:crushing",
            input: { ingredient: { tag: `mekanism:clumps/${mat.name}` } },
            output: { item: `kubejs:${mat.name}_dirty_dust` }
        })

        event.custom({
            type: "mekanism:enriching",
            input: { ingredient: { tag: `mekanism:dirty_dusts/${mat.name}` } },
            output: { item: mat.dust }
        })

        event.custom({
            type: "mekanism:crushing",
            input: { ingredient: { tag: `forge:ingots/${mat.name}` } },
            output: { item: mat.dust }
        })

        if (mat.name != 'etrium') {
            event.custom({
                type: "mekanism:enriching",
                input: { ingredient: { tag: `forge:storage_blocks/raw_${mat.name}` } },
                output: { count: 12, item: mat.dust }
            })
        }

        event.custom({
            type: "mekanism:enriching",
            input: { count: 3, ingredient: { tag: `forge:raw_materials/${mat.name}` } },
            output: { count: 4, item: mat.dust }
        })

        event.custom({
            type: "mekanism:enriching",
            input: { ingredient: { tag: `forge:ores/${mat.name}` } },
            output: { count: 2, item: mat.dust }
        })
    });

    let customDusts = [
        { dust: "kubejs:dust_etrium", ingot: "ad_astra:etrium_ingot"},
        { dust: "kubejs:dust_desh", ingot: "ad_astra:desh_ingot"},
        { dust: "kubejs:dust_ostrum", ingot: "ad_astra:ostrum_ingot" },
        { dust: "kubejs:dust_calorite", ingot: "ad_astra:calorite_ingot" },
        { dust: "kubejs:dust_zinc", ingot: "create:zinc_ingot" },
        { dust: "kubejs:dust_brass", ingot: "create:brass_ingot" }
    ]

    customDusts.forEach(mat => {
        oresmelting(mat.ingot, mat.dust)
    });

    let dustReplace = [
        { from: "mekanism:dust_iron", to: "immersiveengineering:dust_iron" },
        { from: "mekanism:dust_gold", to: "immersiveengineering:dust_gold" },
        { from: "mekanism:dust_copper", to: "immersiveengineering:dust_copper" }
    ]

    dustReplace.forEach(replacement => {
        event.replaceOutput({}, replacement.from, replacement.to)
    });

    let dustCrush = [
        { dust: "immersiveengineering:dust_constantan", ingot: "immersiveengineering:ingot_constantan" },
        { dust: "immersiveengineering:dust_electrum", ingot: "immersiveengineering:ingot_electrum" },
        { dust: "kubejs:dust_brass", ingot: "create:brass_ingot" }
    ]

    dustCrush.forEach(mat => {
        event.recipes.mekanism.crushing(mat.dust, mat.ingot)
    });

    //mek ore combining
    let combining = [
        { ore_id: "immersiveengineering:ore_aluminum", cobble_id: "minecraft:cobblestone", raw_id: "immersiveengineering:raw_aluminum" },
        { ore_id: "immersiveengineering:ore_nickel", cobble_id: "minecraft:cobblestone", raw_id: "immersiveengineering:raw_nickel" },
        { ore_id: "immersiveengineering:ore_silver", cobble_id: "minecraft:cobblestone", raw_id: "immersiveengineering:raw_silver" },
        { ore_id: "immersiveengineering:deepslate_ore_aluminum", cobble_id: "minecraft:cobbled_deepslate", raw_id: "immersiveengineering:raw_aluminum" },
        { ore_id: "immersiveengineering:deepslate_ore_nickel", cobble_id: "minecraft:cobbled_deepslate", raw_id: "immersiveengineering:raw_nickel" },
        { ore_id: "immersiveengineering:deepslate_ore_silver", cobble_id: "minecraft:cobbled_deepslate", raw_id: "immersiveengineering:raw_silver" },

        { ore_id: "create:zinc_ore", cobble_id: "minecraft:cobblestone", raw_id: "create:raw_zinc" },
        { ore_id: "create:deepslate_zinc_ore", cobble_id: "minecraft:cobbled_deepslate", raw_id: "create:raw_zinc" },
        { ore_id: "goofsterpack:glacio_fluorite_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:dust_fluorite", count: 14 },
        { ore_id: "goofsterpack:mercury_fluorite_ore", cobble_id: "ad_astra:mercury_cobblestone", raw_id: "mekanism:dust_fluorite", count: 14 },
        { ore_id: "goofsterpack:venus_fluorite_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "mekanism:dust_fluorite", count: 14 },

        { ore_id: "ad_astra:moon_desh_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "ad_astra:raw_desh" },
        { ore_id: "ad_astra:mars_ostrum_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "ad_astra:raw_ostrum" },
        { ore_id: "ad_astra:venus_calorite_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "ad_astra:raw_calorite" },
        { ore_id: "ad_astra:deepslate_desh_ore", cobble_id: "minecraft:cobbled_deepslate", raw_id: "ad_astra:raw_desh" },
        { ore_id: "ad_astra:deepslate_ostrum_ore", cobble_id: "minecraft:cobbled_deepslate", raw_id: "ad_astra:raw_ostrum" },
        { ore_id: "ad_astra:deepslate_calorite_ore", cobble_id: "minecraft:cobbled_deepslate", raw_id: "ad_astra:raw_calorite" },

        { ore_id: "goofsterpack:calorite_ore", cobble_id: "minecraft:cobblestone", raw_id: "ad_astra:raw_calorite" },
        { ore_id: "goofsterpack:deepslate_etrium_ore", cobble_id: "minecraft:cobbled_deepslate", raw_id: "goofsterpack:raw_etrium" },
        { ore_id: "goofsterpack:desh_ore", cobble_id: "minecraft:cobblestone", raw_id: "ad_astra:raw_desh" },
        { ore_id: "goofsterpack:etrium_ore", cobble_id: "minecraft:cobblestone", raw_id: "goofsterpack:raw_etrium" },
        { ore_id: "goofsterpack:glacio_aluminum_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "immersiveengineering:raw_aluminum" },
        { ore_id: "goofsterpack:glacio_calorite_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "ad_astra:raw_calorite" },
        { ore_id: "goofsterpack:glacio_desh_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "ad_astra:raw_desh" },
        { ore_id: "goofsterpack:glacio_etrium_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "goofsterpack:raw_etrium" },
        { ore_id: "goofsterpack:glacio_gold_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "minecraft:raw_gold" },
        { ore_id: "goofsterpack:glacio_lead_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "immersiveengineering:raw_lead" },
        { ore_id: "goofsterpack:glacio_nickel_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "immersiveengineering:raw_nickel" },
        { ore_id: "goofsterpack:glacio_osmium_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:raw_osmium" },
        { ore_id: "goofsterpack:glacio_ostrum_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "ad_astra:raw_ostrum" },
        { ore_id: "goofsterpack:glacio_silver_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "immersiveengineering:raw_silver" },
        { ore_id: "goofsterpack:glacio_tin_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:raw_tin" },
        { ore_id: "goofsterpack:glacio_uranium_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "immersiveengineering:raw_uranium" },
        { ore_id: "goofsterpack:glacio_zinc_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "create:raw_zinc" },

        { ore_id: "goofsterpack:mars_aluminum_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "immersiveengineering:raw_aluminum" },
        { ore_id: "goofsterpack:mars_lead_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "immersiveengineering:raw_lead" },
        { ore_id: "goofsterpack:mars_osmium_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "mekanism:raw_osmium" },
        { ore_id: "goofsterpack:mars_tin_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "mekanism:raw_tin" },
        { ore_id: "goofsterpack:mercury_nickel_ore", cobble_id: "ad_astra:mercury_cobblestone", raw_id: "immersiveengineering:raw_nickel" },
        { ore_id: "goofsterpack:mercury_silver_ore", cobble_id: "ad_astra:mercury_cobblestone", raw_id: "immersiveengineering:raw_silver" },
        { ore_id: "goofsterpack:mercury_uranium_ore", cobble_id: "ad_astra:mercury_cobblestone", raw_id: "immersiveengineering:raw_uranium" },
        { ore_id: "goofsterpack:moon_aluminum_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "immersiveengineering:raw_aluminum" },
        { ore_id: "goofsterpack:moon_lead_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "immersiveengineering:raw_lead" },
        { ore_id: "goofsterpack:moon_nickel_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "immersiveengineering:raw_nickel" },
        { ore_id: "goofsterpack:moon_silver_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "immersiveengineering:raw_silver" },
        { ore_id: "goofsterpack:ostrum_ore", cobble_id: "minecraft:cobblestone", raw_id: "ad_astra:raw_ostrum" },
        { ore_id: "goofsterpack:venus_osmium_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "mekanism:raw_osmium" },
        { ore_id: "goofsterpack:venus_tin_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "mekanism:raw_tin" },
        { ore_id: "goofsterpack:venus_uranium_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "immersiveengineering:raw_uranium" },

        { ore_id: "ad_astra:moon_cheese_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "ad_astra:cheese" },
        { ore_id: "ad_astra:moon_ice_shard_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "ad_astra:ice_shard" },
        { ore_id: "ad_astra:mars_ice_shard_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "ad_astra:ice_shard" },
        { ore_id: "ad_astra:glacio_ice_shard_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "ad_astra:ice_shard" },
        { ore_id: "ad_astra:deepslate_ice_shard_ore", cobble_id: "minecraft:cobbled_deepslate", raw_id: "ad_astra:ice_shard" },

        { ore_id: "ad_astra:moon_iron_ore", cobble_id: "ad_astra:moon_cobblestone", raw_id: "minecraft:raw_iron" },
        { ore_id: "ad_astra:mars_iron_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "minecraft:raw_iron" },
        { ore_id: "ad_astra:mars_diamond_ore", cobble_id: "ad_astra:mars_cobblestone", raw_id: "mekanism:dust_diamond", count: 5 },
        { ore_id: "ad_astra:venus_coal_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "mekanism:dust_coal" },
        { ore_id: "ad_astra:venus_gold_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "minecraft:raw_gold" },
        { ore_id: "ad_astra:venus_diamond_ore", cobble_id: "ad_astra:venus_cobblestone", raw_id: "mekanism:dust_diamond", count: 5 },
        { ore_id: "ad_astra:mercury_iron_ore", cobble_id: "ad_astra:mercury_cobblestone", raw_id: "minecraft:raw_iron" },
        { ore_id: "ad_astra:glacio_coal_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:dust_coal" },
        { ore_id: "ad_astra:glacio_copper_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "minecraft:raw_copper", count: 20 },
        { ore_id: "ad_astra:glacio_iron_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "minecraft:raw_iron" },
        { ore_id: "ad_astra:glacio_lapis_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:dust_lapis_lazuli", count: 27 },
        { ore_id: "goofsterpack:glacio_diamond_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:dust_diamond", count: 5 },
        { ore_id: "goofsterpack:glacio_emerald_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "mekanism:dust_emerald", count: 5 },
        { ore_id: "goofsterpack:glacio_redstone_ore", cobble_id: "ad_astra:glacio_cobblestone", raw_id: "minecraft:redstone", count: 16 },
    ];

    combining.forEach(mat => {
        let count = mat.count ? mat.count : 8
        event.recipes.mekanism.combining(mat.ore_id, Item.of(mat.raw_id, count), mat.cobble_id)
    })
})