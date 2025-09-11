// priority: 0

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
    }, //xp
    {
        mineralType: "zinc",
        blockId: "create:zinc_ore",
        toolLevel: "iron"
    },
    {
        mineralType: "certus",
        blockId: null,
        toolLevel: "stone"
    }, //xp
    {
        mineralType: "charged_certus",
        blockId: null,
        toolLevel: "stone"
    }, //xp
    {
        mineralType: "etrium",
        blockId: null,
        toolLevel: "diamond"
    }, //xp
    // Vanilla ores
    {
        mineralType: "coal",
        blockId: "minecraft:coal_ore",
        toolLevel: null
    }, //xp
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
    }, //xp
    {
        mineralType: "emerald",
        blockId: "minecraft:emerald_ore",
        toolLevel: "iron"
    }, //xp
    {
        mineralType: "copper",
        blockId: "minecraft:copper_ore",
        toolLevel: "stone"
    },
    {
        mineralType: "lapis",
        blockId: "minecraft:lapis_ore",
        toolLevel: "stone"
    }, //xp
    {
        mineralType: "quartz",
        blockId: null,
        toolLevel: null
    } //xp
];

const ORE_STONE_TYPES = [
    {
        stoneType: "andesite",
        blockType: "stone",
        mapColor: $MapColor.STONE
    },
    {
        stoneType: "granite",
        blockType: "stone",
        mapColor: $MapColor.DIRT
    },
    {
        stoneType: "diorite",
        blockType: "stone",
        mapColor: $MapColor.QUARTZ
    },
    //limestone
    //calcite
    //scoria
    {
        stoneType: "tuff",
        blockType: "stone",
        mapColor: $MapColor.TERRACOTTA_GRAY
    },
    {
        stoneType: "nether",
        blockType: "stone",
        mapColor: $MapColor.NETHER
    },
    //blackstone
    //basalt
    //scorchia
    //gravel
    {
        stoneType: "soul_soil",
        blockType: "dirt",
        mapColor: $MapColor.COLOR_BROWN
    },
    {
        stoneType: "end",
        blockType: "deepslate",
        mapColor: $MapColor.SAND
    },
    {
        stoneType: "moon",
        blockType: "stone",
        mapColor: $MapColor.TERRACOTTA_LIGHT_GRAY
    },
    {
        stoneType: "mars",
        blockType: "stone",
        mapColor: $MapColor.TERRACOTTA_RED
    },
    {
        stoneType: "venus",
        blockType: "stone",
        mapColor: $MapColor.TERRACOTTA_ORANGE
    },
    {
        stoneType: "mercury",
        blockType: "stone",
        mapColor: $MapColor.TERRACOTTA_PURPLE
    },
    {
        stoneType: "glacio",
        blockType: "stone",
        mapColor: $MapColor.ICE
    }
];
const $BlockBehaviour$Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties');
const $DropExperienceBlock = Java.loadClass("net.minecraft.world.level.block.DropExperienceBlock")
const $RedStoneOreBlock = Java.loadClass("net.minecraft.world.level.block.RedStoneOreBlock")
const $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")

const $MapColor = Java.loadClass("net.minecraft.world.level.material.MapColor")




// Store block references
const OreBlocks = []

StartupEvents.registry("block", (event) => {

    ORE_MINERAL_TYPES.forEach(mineral => {
        if (!mineral.blockId) {
            let newStoneOre = event.createCustom(`${mineral.mineralType}_ore`, () =>
                new $DropExperienceBlock($BlockBehaviour$Properties.copy(Blocks.IRON_ORE).mapColor($MapColor.STONE).requiresCorrectToolForDrops())
            )
            let newDeepslateOre = event.createCustom(`deepslate_${mineral.mineralType}_ore`, () =>
                new $DropExperienceBlock($BlockBehaviour$Properties.copy(Blocks.DEEPSLATE_IRON_ORE).mapColor($MapColor.DEEPSLATE).requiresCorrectToolForDrops())
            )
            OreBlocks.push([newOre, 'stone', mineral.mineralType])
            OreBlocks.push([newOre, 'deepslate', mineral.mineralType])
        }

        ORE_STONE_TYPES.forEach(stone => {
            if(stone.stoneType == "nether" && (mineral.mineralType == "gold" || mineral.mineralType == "quartz")) return;
            let hardness, resistance, toolType;
            switch (stone.blockType) {
                case "deepslate":
                    hardness = 4.5;
                    resistance = 3;
                    toolType = "minecraft:mineable/pickaxe";
                    break;
                case "dirt":
                    hardness = 2;
                    resistance = .5;
                    toolType = "minecraft:mineable/shovel";
                    break;
                default:
                    hardness = 3;
                    resistance = 3;
                    toolType = "minecraft:mineable/pickaxe"
            }

            let newOre = event.createCustom(`${stone.stoneType}_${mineral.mineralType}_ore`, () =>
                new $DropExperienceBlock($BlockBehaviour$Properties.copy(Blocks.IRON_ORE).strength(hardness, resistance).mapColor(stone.mapColor).requiresCorrectToolForDrops())
            )

            OreBlocks.push([newOre, stone.stoneType, mineral.mineralType])
        })
    })


    ORE_STONE_TYPES.forEach(stone => {
        let hardness, resistance;
        switch (stone.blockType) {
                case "deepslate":
                    hardness = 4.5;
                    resistance = 3;
                    break;
                case "dirt":
                    hardness = 2;
                    resistance = .5;
                    break;
                default:
                    hardness = 3;
                    resistance = 3;
            }

        let redstoneOre = event.createCustom(`${stone.stoneType}_redstone_ore`, () =>
            new $RedStoneOreBlock($BlockBehaviour$Properties.copy(Blocks.REDSTONE_ORE).strength(hardness, resistance).mapColor(stone.mapColor).requiresCorrectToolForDrops())
        )

        OreBlocks.push([redstoneOre, stone.stoneType, 'redstone'])
    })
})

StartupEvents.registry("item", (event) => {
    let i = 0;
    OreBlocks.forEach(ore => {
        let newOreId = `${ore[1]}_${ore[2]}_ore`
        if (ore[1] == "stone" || ore[1] == "") {
            newOreId = `${ore[2]}_ore`
        }
        event.createCustom(newOreId, () => new $BlockItem(ore[0].get(), new $Item$Properties()));
    })
})

BlockEvents.modification((event) => {
    ORE_STONE_TYPES.forEach(stone => {
        let hardness, resistance;
        switch (stone.blockType) {
            case "deepslate":
                hardness = 4.5;
                resistance = 3;
                break;
            case "dirt":
                hardness = 2;
                resistance = .5;
                break;
            default:
                hardness = 3;
                resistance = 3;
        }

        event.modify(`kubejs:${stone.stoneType}_redstone_ore`, (block) => {
            block.destroySpeed = hardness;
            block.explosionResistance = resistance;
        });
    })
});