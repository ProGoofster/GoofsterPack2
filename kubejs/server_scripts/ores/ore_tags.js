ServerEvents.tags("block", (event) => {
    // event.add(tag, values)
    event.add('minecraft:needs_stone_tool', [
        //ad astra ores
    ]);

    // uranium needs iron
    event.remove('minecraft:needs_stone_tool', [
        'mekanism:uranium_ore',
        'mekanism:deepslate_uranium_ore'
    ]);
    event.add('minecraft:needs_iron_tool', [
        'mekanism:uranium_ore',
        'mekanism:deepslate_uranium_ore'
    ]);

    event.add('minecraft:needs_diamond_tool', [
        'ad_astra:moon_desh_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:mars_ostrum_ore',
        'ad_astra:deepslate_ostrum_ore',
        'ad_astra:venus_calorite_ore',
        'ad_astra:deepslate_calorite_ore'
    ]);

    event.add('minecraft:needs_stone_tool', [
        'ad_astra:moon_iron_ore',
        'ad_astra:mars_iron_ore',
        'ad_astra:mercury_iron_ore',
        'ad_astra:glacio_iron_ore',
        'ad_astra:glacio_copper_ore',
        'ad_astra:glacio_lapis_ore'
    ]);

    event.add('minecraft:needs_iron_tool', [
        'ad_astra:mars_diamond_ore',
        'ad_astra:venus_diamond_ore',
        'ad_astra:venus_gold_ore'
    ]);

    event.add('forge:ores/cheese', 'ad_astra:moon_cheese_ore');
    event.add('forge:ores', 'ad_astra:moon_cheese_ore');
});

ServerEvents.tags("item", (event) => {
    event.add('forge:ores/cheese', 'ad_astra:moon_cheese_ore');
    event.add('forge:ores', 'ad_astra:moon_cheese_ore');
    
});