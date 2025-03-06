ServerEvents.recipes(event => {
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

    //terracotta dying
    event.replaceInput({input: '#minecraft:terracotta', output: '#minecraft:terracotta'}, 'minecraft:terracotta', '#minecraft:terracotta')
    event.replaceInput({input: 'quark:shingles', output: /quark:.*shingles$/}, 'quark:shingles', /quark:.*shingles$/)

    //wood variant compatibility
    event.remove({mod: "woodworks", output: "#forge:chests/wooden"})
    event.remove({mod: "woodworks", output: "#forge:bookshelves"})
    event.remove({mod: "woodworks", output: "#forge:ladders"})
    event.remove({not: { mod: "minecraft"}, output: "#blueprint:wooden_chiseled_bookshelves"})

    event.replaceOutput({output: "quark:oak_chest"}, "quark:oak_chest", "minecraft:chest")
    event.shapeless('minecraft:bookshelf', '#forge:bookshelves')
});