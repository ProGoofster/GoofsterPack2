ServerEvents.recipes(event => {
    // remove unwanted
    event.remove({output: "advancedperipherals:redstone_integrator"})
    event.remove({output: "advancedperipherals:inventory_manager"})
    event.remove({output: "advancedperipherals:memory_card"})
    event.remove({output: "advancedperipherals:chunk_controller"})
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

    event.shaped(
        'minecraft:bundle',
        [
          'S',
          'L'
        ],
        {
            S: 'minecraft:string',
            L: 'minecraft:leather'
        }
    ).id('minecraft:bundle');

    //replace culture squid with miner squid
    event.replaceInput({}, 'culturaldelights:squid','miners_delight:squid');
    event.replaceInput({}, 'culturaldelights:glow_squid','miners_delight:glow_squid');
    event.replaceInput({}, 'culturaldelights:raw_calamari','miners_delight:tentacles');
    event.remove({output: 'culturaldelights:cooked_squid'});
    event.remove({output: 'culturaldelights:raw_calamari'});
    event.remove({output: 'culturaldelights:cooked_calamari'});

    
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
    event.remove({id: 'minecraft:cake'});
    event.remove({id: 'neapolitan:cake'});
    event.remove({id: 'create:smelting/bread'});
    event.remove({id: 'create:smoking/bread'});

    //terracotta dying
    event.replaceInput({input: '#minecraft:terracotta', output: '#minecraft:terracotta'}, 'minecraft:terracotta', '#minecraft:terracotta')
    event.replaceInput({input: '#quark:shingles', output: '#quark:shingles'}, 'quark:shingles', '#quark:shingles')

    //wood variant compatibility
    event.remove({mod: "woodworks", output: "#forge:chests/wooden"})
    event.remove({mod: "woodworks", output: "#forge:bookshelves"})
    event.remove({mod: "woodworks", output: "#forge:ladders"})
    event.remove({not: { mod: "minecraft"}, output: "#blueprint:wooden_chiseled_bookshelves"})

    event.replaceOutput({output: "quark:oak_chest"}, "quark:oak_chest", "minecraft:chest")
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
            E: 'kubejs:energized_alloy',
            H: 'quark:diamond_heart'
        }
    ).id('kubejs:netherite_upgrade');

    //aquaculture
    event.remove({output: 'aquaculture:fish_fillet_raw', type: 'minecraft:shapeless'});
    event.remove({output: /aquaculture:.*_fillet_knife/});

    //choclate
    event.replaceInput({}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')
    event.remove({id: 'neapolitan:chocolate/chocolate_bar'})
    event.remove({id: 'neapolitan:chocolate/chocolate_block'})
    event.remove({id: 'neapolitan:chocolate/chocolate_bar_from_chocolate_block'})
    event.replaceOutput({}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')

    //berry sack overlap
    event.remove({input: 'berry_good:sweet_berry_basket'})
    event.remove({input: 'berry_good:glow_berry_basket'})
    event.remove({output: 'berry_good:sweet_berry_basket'})
    event.remove({output: 'berry_good:glow_berry_basket'})

    //architects pallete compat
    event.remove({id: 'architects_palette:tuff_bricks'})
    event.remove({id: 'architects_palette:calcite_bricks'})
    event.remove({id: 'architects_palette:dripstone_bricks'})

    event.replaceInput({output: 'architects_palette:hadaline_tiles'}, 'architects_palette:hadaline', 'architects_palette:hadaline_bricks')
    event.shaped(
        'architects_palette:hadaline_bricks',
        [
          'DD',
          'DD',
        ],
        {
            D: 'architects_palette:hadaline_tiles',
        }
    ).id('architects_palette:hadaline_bricks_from_tiles');

    //architects palette dupe recipe fix 
    event.remove({id: 'architects_palette:blasting/nether_brass_ingot_from_nether_brass_blend_blasting'})

    //remove leaf pile
    event.remove({output: /autumnity:.*maple_leaf_pile/})
    event.remove({output: /environmental:.*plum_leaf_pile/})
});

MoreJSEvents.villagerTrades((event) => {
    //remove computer science guy
    var proff = VillagerUtils.getProfessions();
    event.removeVanillaTrades(proff[16], [1, 5]);
    event.removeModdedTrades(proff[16], [1, 5]);
});  