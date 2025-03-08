ServerEvents.tags('item', event => {
    event.add('ae2:cable', ['#ae2:glass_cable', '#ae2:covered_cable', '#ae2:smart_cable', '#ae2:dense_covered_cable', '#ae2:dense_smart_cable'])
    event.add("ae2:sky_stone", ["ae2:sky_stone_block", "ae2:smooth_sky_stone_block", "ae2:sky_stone_brick", "ae2:sky_stone_small_brick"])
})

ServerEvents.tags('fluid', event => {
    //fix fluid
    event.removeAll('minecraft:water');

	event.add('minecraft:water', 'minecraft:water');
	event.add('minecraft:water', 'minecraft:flowing_water');
})

ServerEvents.tags('block', event => {
    //fix liquid blaze burner w/fan
    event.add('create:fan_processing_catalysts/smoking', 'createaddition:liquid_blaze_burner');

    //make fire pit work w/fan
    event.add('create:fan_processing_catalysts/smoking', 'supplementaries:fire_pit');
    event.add('create:passive_boiler_heaters', 'supplementaries:fire_pit');
})