ServerEvents.recipes(event => {
    // remove unwanted
    event.remove({ output: "advancedperipherals:redstone_integrator" })
    event.remove({ output: "advancedperipherals:inventory_manager" })
    event.remove({ output: "advancedperipherals:memory_card" })
    event.remove({ output: "advancedperipherals:chunk_controller" })
    // ladder
    event.shaped(
        '3x minecraft:ladder',
        [
            'S S',
            'SSS',
            'S S'
        ],
        {
            S: '#forge:rods/wooden'
        }
    ).id('minecraft:ladder');

    //replace culture squid with miner squid
    event.replaceInput({}, 'culturaldelights:squid', 'miners_delight:squid');
    event.replaceInput({}, 'culturaldelights:glow_squid', 'miners_delight:glow_squid');
    event.replaceInput({}, 'culturaldelights:raw_calamari', 'miners_delight:tentacles');
    event.remove({ output: 'culturaldelights:cooked_squid' });
    event.remove({ output: 'culturaldelights:raw_calamari' });
    event.remove({ output: 'culturaldelights:cooked_calamari' });


    //remove dupe recipes
    event.shaped(
        '2x quark:mud_pillar',
        [
            'M',
            'M'
        ],
        {
            M: 'minecraft:mud_bricks'
        }
    ).id('quark:building/crafting/mud_pillar');
    event.remove({ id: 'minecraft:cake' });
    event.remove({ id: 'neapolitan:cake' });
    event.remove({ id: 'create:smelting/bread' });
    event.remove({ id: 'create:smoking/bread' });

    // Remove duplicate recipes (same output, different mods)
    event.remove({ id: 'immersiveengineering:crafting/copper_ingot_to_nugget_copper' });
    event.remove({ id: 'vanillabackport:cake' });

    // Remove duplicate smelting recipes
    event.remove({ id: 'goofsterpack:ingot_tin_from_smelting_glacio_tin_ore' });
    event.remove({ id: 'goofsterpack:ingot_osmium_from_smelting_glacio_osmium_ore' });
    event.remove({ id: 'goofsterpack:ingot_uranium_from_smelting_mercury_uranium_ore' });
    event.remove({ id: 'goofsterpack:ingot_lead_from_smelting_mars_lead_ore' });
    event.remove({ id: 'immersiveengineering:smelting/copper_ingot_from_dust' });
    event.remove({ id: 'goofsterpack:zinc_ingot_from_smelting_glacio_zinc_ore' });
    event.remove({ id: 'immersiveengineering:smelting/gold_ingot_from_dust' });
    event.remove({ id: 'immersiveengineering:smelting/iron_ingot_from_dust' });

    // Remove duplicate blasting recipes
    event.remove({ id: 'goofsterpack:ingot_tin_from_blasting_glacio_tin_ore' });
    event.remove({ id: 'goofsterpack:ingot_osmium_from_blasting_glacio_osmium_ore' });
    event.remove({ id: 'goofsterpack:ingot_uranium_from_blasting_mercury_uranium_ore' });
    event.remove({ id: 'goofsterpack:ingot_lead_from_blasting_mars_lead_ore' });
    event.remove({ id: 'immersiveengineering:smelting/copper_ingot_from_dust_from_blasting' });
    event.remove({ id: 'goofsterpack:zinc_ingot_from_blasting_glacio_zinc_ore' });
    event.remove({ id: 'immersiveengineering:smelting/gold_ingot_from_dust_from_blasting' });
    event.remove({ id: 'immersiveengineering:smelting/iron_ingot_from_dust_from_blasting' });

    // Add recipe for miners_delight:copper_cup
    event.replaceInput({output: "pipeorgans:copper_boot"}, "#forge:ingots/copper", "#forge:plates/copper")
    event.replaceInput({output: "pipeorgans:brass_boot"}, "#forge:ingots/brass", "#forge:plates/brass")


    //terracotta dying
    event.replaceInput({ input: '#minecraft:terracotta', output: '#minecraft:terracotta' }, 'minecraft:terracotta', '#minecraft:terracotta')
    event.replaceInput({ input: '#quark:shingles', output: '#quark:shingles' }, 'quark:shingles', '#quark:shingles')

    //wood variant compatibility
    event.remove({ mod: "woodworks", output: "#forge:chests/wooden" })
    event.remove({ mod: "woodworks", output: "#forge:bookshelves" })
    event.remove({ mod: "woodworks", output: "#forge:ladders" })
    event.remove({ not: { mod: "minecraft" }, output: "#blueprint:wooden_chiseled_bookshelves" })

    event.replaceOutput({ output: "quark:oak_chest" }, "quark:oak_chest", "minecraft:chest")
    event.shapeless('minecraft:bookshelf', '#forge:bookshelves')

    //recipe for netherite upgrade
    event.shaped(
        'minecraft:netherite_upgrade_smithing_template',
        [
            'DED',
            'DHD',
            'DDD'
        ],
        {
            D: 'minecraft:diamond',
            E: '#forge:ingots/etrium',
            H: 'quark:diamond_heart'
        }
    ).id('kubejs:netherite_upgrade');

    //choclate
    event.replaceInput({}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')
    event.remove({ id: 'neapolitan:chocolate/chocolate_bar' })
    event.remove({ id: 'neapolitan:chocolate/chocolate_block' })
    event.remove({ id: 'neapolitan:chocolate/chocolate_bar_from_chocolate_block' })
    event.replaceOutput({}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')

    //berry sack overlap
    event.remove({ input: 'berry_good:sweet_berry_basket' })
    event.remove({ input: 'berry_good:glow_berry_basket' })
    event.remove({ output: 'berry_good:sweet_berry_basket' })
    event.remove({ output: 'berry_good:glow_berry_basket' })

    //remove leaf pile
    event.remove({ output: /autumnity:.*maple_leaf_pile/ })
    event.remove({ output: /environmental:.*plum_leaf_pile/ })

    //classic pipe extractor tweak
    event.replaceInput({ output: "classicpipes:advanced_copper_pipe" }, "minecraft:netherite_ingot", "#forge:ingots/lead");

    //chisel cc:tweak overlap fix
    event.replaceInput({ output: "chisel_chipped_integration:futura_gray_screen" }, "minecraft:redstone", "minecraft:lapis_lazuli")

    event.remove({ mod: "ftbquests", not: { output: "ftbquests:book" } })

    //egg compat
    //needs to not do tags, only recipes that take just the vanilla egg
    event.replaceInput({}, "minecraft:egg", "#forge:eggs")

    event.shaped(
        'hyperbox:hyperbox',
        [
            'ASA',
            'SCS',
            'ADA'
        ],
        {
            D: 'mekanism:elite_control_circuit',
            C: "minecraft:crying_obsidian",
            A: "mekanism:alloy_infused",
            S: 'ae2:spatial_cell_component_2'

        }
    ).id('hyperbox:hyperbox');

    event.replaceInput({ output: "chunkloaders:basic_chunk_loader" }, "#forge:ingots/iron", "#forge:ingots/desh")
    event.replaceInput({ output: "chunkloaders:advanced_chunk_loader" }, "minecraft:blaze_powder", "#forge:ingots/ostrum")
    event.replaceInput({ output: "chunkloaders:ultimate_chunk_loader" }, "minecraft:redstone", "#forge:ingots/calorite")

    event.shaped(
        'kubejs:pipe_frame',
        [
            'P',
            'I',
            'P'
        ],
        {
            P: "#forge:plates/steel",
            I: "#forge:ingots/steel",

        }
    )
    event.shaped(
        'kubejs:pipe_frame',
        [
            'PIP'
        ],
        {
            P: "#forge:plates/steel",
            I: "#forge:ingots/steel",

        }
    )

    event.replaceInput({ mod: "classicpipes" }, "#forge:glass", "kubejs:pipe_frame");

    event.remove({ id: "neapolitan:milk/milk_bottles_from_bucket" })

    event.remove({ id: /chisel_chipped_integration:stonecutter\/metals\/invar\/metal_invar.*/ })

    // Fix pipeorgans tracker_bar recipe
    event.shaped(
        'pipeorgans:tracker_bar',
        [
            ' S ',
            'BPB',
            ' S '
        ],
        {
            B: 'create:brass_casing',
            S: 'create:shaft',
            P: 'create:precision_mechanism'
        }
    ).id('pipeorgans:crafting/tracker_bar');

    event.remove({id: "minecraft:lodestone"})

    
});

MoreJSEvents.villagerTrades((event) => {
    //remove computer science guy
    var proff = VillagerUtils.getProfessions();
    event.removeVanillaTrades(proff[16], [1, 5]);
    event.removeModdedTrades(proff[16], [1, 5]);
});  