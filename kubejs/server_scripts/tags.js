ServerEvents.tags('item', event => {
    event.add('ae2:cable', ['#ae2:glass_cable', '#ae2:covered_cable', '#ae2:smart_cable', '#ae2:dense_covered_cable', '#ae2:dense_smart_cable'])
    event.add("ae2:sky_stone", ["ae2:sky_stone_block", "ae2:smooth_sky_stone_block", "ae2:sky_stone_brick", "ae2:sky_stone_small_brick"])

    event.removeAllTagsFrom('neapolitan:milk_bottle')
    event.removeAllTagsFrom('farmersdelight:wheat_dough')

    event.add('quark:shingles', /quark:.*shingles$/)
    event.add('quark:terracotta_all', ['#minecraft:terracotta', '#quark:shingles'])
    event.add("create:gravel_crushable", ['minecraft:cobblestone', 'mineraft:cobbled_deepslate', 'minecraft:blackstone'])

    event.removeAllTagsFrom(['quark:jasper', 'quark:limestone', 'quark:shale', 'quark:polished_jasper', 'quark:polished_limestone', 'quark:polished_shale'])

    event.removeAll('curios:curio');
    event.add('curios:belt', ['ae2:wireless_terminal','ae2:wireless_crafting_terminal', 'ae2wtlib:wireless_pattern_encoding_terminal', 'ae2wtlib:wireless_pattern_access_terminal', 'ae2wtlib:wireless_universal_terminal'])

    event.add('c:uncolored_sandstone_blocks', 'quark:sandstone_bricks')
    event.add('c:red_sandstone_blocks', 'quark:red_sandstone_bricks')
    event.add('forge:sandstone/soul_sandstone', ['quark:soul_sandstone', 'quark:chiseled_soul_sandstone', 'quark:cut_soul_sandstone', 'quark:smooth_soul_sandstone', 'quark:soul_sandstone_bricks'])
    event.add('forge:sandstone/arid_sandstone', ['atmospheric:arid_sandstone', 'atmospheric:chiseled_arid_sandstone', 'atmospheric:cut_arid_sandstone', 'atmospheric:smooth_arid_sandstone'])
    event.add('forge:sandstone/red_arid_sandstone', ['atmospheric:red_arid_sandstone', 'atmospheric:chiseled_red_arid_sandstone', 'atmospheric:cut_red_arid_sandstone', 'atmospheric:smooth_red_arid_sandstone'])

    event.add('aquaculturedelight:non_neptunium_knives', ['farmersdelight:flint_knife', 'farmersdelight:iron_knife', 'farmersdelight:diamond_knife', 'farmersdelight:netherite_knife', 'farmersdelight:golden_knife']);
    event.removeAllTagsFrom(/aquaculture:.*_fillet_knife/)
    event.removeAllTagsFrom('abnormals_delight:necromium_knife')
    event.removeAllTagsFrom('abnormals_delight:silver_knife')
    
    event.add('kubejs:border_antiblock', 'antiblocksrechiseled:bright_black_border')
    event.add('kubejs:borderless_antiblock', 'antiblocksrechiseled:bright_black')

    for(let color of DYE_COLORS) {
        if(color == "black") continue;
        event.add('kubejs:border_antiblock', `antiblocksrechiseled:wool_${color}_border`)
        event.add('kubejs:borderless_antiblock', `antiblocksrechiseled:wool_${color}`)
    }

    event.add('ae2:can_remove_color', 'supplementaries:soap')
 
})

ServerEvents.tags('fluid', event => {
    //fix fluid
    event.removeAll('minecraft:water');

	event.add('minecraft:water', 'minecraft:water');
	event.add('minecraft:water', 'minecraft:flowing_water');

    event.add("forge:tomato_sauce", "create_central_kitchen:tomato_sauce")
})

ServerEvents.tags('block', event => {
    //fix liquid blaze burner w/fan
    event.add('create:fan_processing_catalysts/smoking', 'createaddition:liquid_blaze_burner');

    //make fire pit work w/fan
    event.add('create:fan_processing_catalysts/smoking', 'supplementaries:fire_pit');
    event.add('create:passive_boiler_heaters', 'supplementaries:fire_pit');
})

ServerEvents.tags('worldgen/structure', event => {
    event.removeAll('quark:oak_chest_structures');
    event.remove('quark:crimson_chest_structures', '#minecraft:ruined_portal')
})