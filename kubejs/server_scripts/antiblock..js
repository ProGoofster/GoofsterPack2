const DYE_COLORS = ["white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow", "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"];

ServerEvents.recipes((event) => {
    event.remove({ mod: "antiblocksrechiseled" });
    event.shaped(
        '8x antiblocksrechiseled:wool_white_border',
        [
        'SSS',
        'SGS',
        'SSS'
        ],
        {
            S: '#forge:stone',
            G: 'minecraft:glowstone_dust'
        }
    ).id('antiblocksrechiseled:white_antiblock_border');


    for(let color of DYE_COLORS) {
        if(color == "black") continue;
        event.shaped(
            `8x antiblocksrechiseled:wool_${color}_border`,
            [
            'SSS',
            'SGS',
            'SSS'
            ],
            {
                S: '#kubejs:border_antiblock',
                G: `#forge:dyes/${color}`
            }
        ).id(`antiblocksrechiseled:${color}_antiblock_border_dye`);

        event.shaped(
            `8x antiblocksrechiseled:wool_${color}`,
            [
            'SSS',
            'SGS',
            'SSS'
            ],
            {
                S: '#kubejs:borderless_antiblock',
                G: `#forge:dyes/${color}`
            }
        ).id(`antiblocksrechiseled:${color}_antiblock_dye`);

        event.shapeless(`antiblocksrechiseled:wool_${color}_border`, `antiblocksrechiseled:wool_${color}`);
        event.shapeless(`antiblocksrechiseled:wool_${color}`, `antiblocksrechiseled:wool_${color}_border`);

        event.stonecutting(`antiblocksrechiseled:wool_${color}_border`, `antiblocksrechiseled:wool_${color}`);
        event.stonecutting(`antiblocksrechiseled:wool_${color}`, `antiblocksrechiseled:wool_${color}_border`);
    }

    event.shaped(
        `8x antiblocksrechiseled:bright_black_border`,
        [
        'SSS',
        'SGS',
        'SSS'
        ],
        {
            S: '#kubejs:border_antiblock',
            G: `#forge:dyes/black`
        }
    ).id(`antiblocksrechiseled:black_antiblock_border_dye`);

    event.shaped(
        `8x antiblocksrechiseled:bright_black`,
        [
        'SSS',
        'SGS',
        'SSS'
        ],
        {
            S: '#kubejs:borderless_antiblock',
            G: `#forge:dyes/black`
        }
    ).id(`antiblocksrechiseled:black_antiblock_dye`);
});
