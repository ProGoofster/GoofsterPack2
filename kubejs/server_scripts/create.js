ServerEvents.recipes(event => {
//compatibility
    //dough compat
    event.recipes.shapeless('create:dough', ['minecraft:water_bucket', 'create:wheat_flour']);
    event.remove({output: "create:dough", type: "minecraft:crafting_shaped"});
    event.replaceInput({}, "farmersdelight:wheat_dough", "create:dough");
//renewables
    //copper


    //zinc


    //calcite
    event.recipes.createCompacting('minecraft:calcite', [
        '2x minecraft:flint',
        'minecraft:bone_block',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:compacting/calcite');

    //dripstone
    event.recipes.createCompacting('minecraft:dripstone_block', [
        '2x minecraft:flint',
        '#minecraft:terracotta',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:compacting/dripstone_block');

    //tuff
    event.recipes.createMixing('2x minecraft:tuff', [
        'minecraft:diorite',
        'minecraft:andesite',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:mixing/tuff');

    //deepslate
    event.recipes.createMixing('2x minecraft:deepslate', [
        'minecraft:cobblestone',
        'minecraft:blackstone',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:mixing/deepslate');

    //netherrack
    event.recipes.createMixing('2x minecraft:netherrack', [
        'create:cinder_flour',
        '#forge:cobblestone',
        Fluid.of('minecraft:lava', 100)
    ]).id('createaddition:mixing/netherrack');

    //basalt

    //blackstone

    //end stone

    //ae2 skystone
    event.replaceInput({id: 'create:milling/compat/ae2/sky_stone_block'}, 'ae2:sky_stone_block', '#ae2:sky_stone')

    //myalite

//extras
    //vanilla diorite recipe as mixing
    event.recipes.createMixing('minecraft:diorite', [
        'minecraft:cobblestone',
        '#forge:gems/quartz',
    ]).id('create:mixing/vanilla_diorite_recipe');

    //cobble mixing recipe
    event.recipes.createMixing('minecraft:cobblestone', [
        Fluid.of('minecraft:lava', 250),
        Fluid.of('minecraft:water', 250)
    ]).id('create:mixing/cobblestone');

    //moss washing
    event.recipes.create.splashing(['minecraft:cobblestone', Item.of('minecraft:moss_block').withChance(0.25)], 'minecraft:mossy_cobblestone').id('create:splashing/mossy_cobblestone');
    event.recipes.create.splashing(['minecraft:stone_bricks', Item.of('minecraft:moss_block').withChance(0.25)], 'minecraft:mossy_stone_bricks').id('create:splashing/mossy_stone_bricks');
    event.recipes.create.splashing(['quark:cobblestone_bricks', Item.of('minecraft:moss_block').withChance(0.25)], 'quark:mossy_cobblestone_bricks').id('create:splashing/mossy_cobblestone_bricks');

    //path shit
    event.recipes.create.pressing('minecraft:dirt_path', 'minecraft:grass_block').id('create:pressing/path')
    event.recipes.create.pressing('minecraft:dirt_path', 'biomesoplenty:origin_grass_block').id('create:pressing/path_origin')
    event.recipes.create.pressing('environmental:dirt_path', 'minecraft:coarse_dirt').id('create:pressing/dirt_path_coarse')
    event.recipes.create.pressing('environmental:dirt_path', 'minecraft:dirt').id('create:pressing/dirt_path')
    event.recipes.create.pressing('environmental:dirt_path', "minecraft:rooted_dirt").id('create:pressing/dirt_path_rooted')

    //disenchanter utility recipe
    event.shaped(
        'create_enchantment_industry:disenchanter',
        [
          'S',
          'P', 
          'C'
        ],
        {
          S: ['#forge:sand/colorless', '#forge:sand/red'],
          P: 'minecraft:paper',
          C: 'create:copper_casing'
        }
      ).id('create_enchantment_industry:crafting/disenchanter_util');

    //power loader conversion
    event.recipes.create.mechanical_crafting('create_power_loader:brass_chunk_loader', [
        'GGGGG',
        'G   G',
        'G L G',
        'BMMMB',
        'BBSBB'
      ], {
        G: '#forge:glass',
        L: 'create_power_loader:andesite_chunk_loader',
        B: 'create:brass_casing',
        M: 'create:precision_mechanism',
        S: 'create:shaft',
    }).id('create_power_loader:crafting/brass_chunk_loader');

    //scoria to scorchia
    event.smelting('create:scorchia', 'create:scoria')
    event.blasting('create:scorchia', 'create:scoria')



})