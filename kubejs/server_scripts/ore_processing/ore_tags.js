const ORE_MINERAL_TYPES = [
    {
        mineralType: "aluminum",
        blockId: "immersiveengineering:ore_aluminum",
        toolLevel: "stone"
    },
    {
        mineralType: "lead",
        blockId: "immersiveengineering:ore_lead",
        toolLevel: "iron"
    },
    {
        mineralType: "nickel",
        blockId: "immersiveengineering:ore_nickel",
        toolLevel: "iron"
    },
    {
        mineralType: "silver",
        blockId: "immersiveengineering:ore_silver",
        toolLevel: "iron"
    },
    {
        mineralType: "uranium",
        blockId: "mekanism:uranium_ore",
        toolLevel: "iron"
    },
    {
        mineralType: "osmium",
        blockId: "mekanism:osmium_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "tin",
        blockId: "mekanism:tin_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "fluorite",
        blockId: "mekanism:fluorite_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "zinc",
        blockId: "create:zinc_ore",
        toolLevel: "iron"
    },
    {
        mineralType: "etrium",
        blockId: null,
        toolLevel: "diamond"
    },
    // Vanilla ores
    {
        mineralType: "coal",
        blockId: "minecraft:coal_ore",
        toolLevel: null
    },
    {
        mineralType: "iron",
        blockId: "minecraft:iron_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "gold",
        blockId: "minecraft:gold_ore",
        toolLevel: "iron"
    },
    {
        mineralType: "diamond",
        blockId: "minecraft:diamond_ore",
        toolLevel: "iron"
    },
    {
        mineralType: "emerald",
        blockId: "minecraft:emerald_ore",
        toolLevel: "iron"
    },
    {
        mineralType: "copper",
        blockId: "minecraft:copper_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "lapis",
        blockId: "minecraft:lapis_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "quartz",
        blockId: "minecraft:nether_quartz_ore",
        toolLevel: null
    }
];

const ORE_STONE_TYPES = [
    {
        stoneType: "andesite",
        baseBlock: "minecraft:andesite",
        blockType: "stone"
    },
    {
        stoneType: "granite",
        baseBlock: "minecraft:granite",
        blockType: "stone",
    },
    {
        stoneType: "diorite",
        baseBlock: "minecraft:diorite",
        blockType: "stone"
    },
    {
        stoneType: "tuff",
        baseBlock: "minecraft:tuff",
        blockType: "stone"
    },
    {
        stoneType: "nether",
        baseBlock: "minecraft:netherrack",
        blockType: "stone"
    },
    {
        stoneType: "soul_soil",
        baseBlock: "minecraft:soul_soil",
        blockType: "dirt"
    },
    {
        stoneType: "end",
        baseBlock: "minecraft:end_stone",
        blockType: "deepslate"
    },
    {
        stoneType: "moon",
        baseBlock: "ad_astra:moon_stone",
        blockType: "stone"
    },
    {
        stoneType: "mars",
        baseBlock: "ad_astra:mars_stone",
        blockType: "stone"
    },
    {
        stoneType: "venus",
        baseBlock: "ad_astra:venus_stone",
        blockType: "stone"
    },
    {
        stoneType: "mercury",
        baseBlock: "ad_astra:mercury_stone",
        blockType: "stone"
    },
    {
        stoneType: "glacio",
        baseBlock: "ad_astra:glacio_stone",
        blockType: "stone"
    }
];

ServerEvents.tags("item", event => {
    ORE_STONE_TYPES.forEach(stone => {
        ORE_MINERAL_TYPES.forEach(mineral => {
            event.add(`forge:ore/${mineral.mineralType}`, `kubejs:${stone.stoneType}_${mineral.mineralType}_ore`);
        })
    })
})

ServerEvents.tags("block", event => {
    ORE_STONE_TYPES.forEach(stone => {
        ORE_MINERAL_TYPES.forEach(mineral => {
            event.add("minecraft:mineable/pickaxe", `kubejs:${stone.stoneType}_${mineral.mineralType}_ore`);
            event.add("minecraft:needs_iron_tool", `kubejs:${stone.stoneType}_${mineral.mineralType}_ore`);
        })
    })
})