const $BlockBehaviour$Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties');
const $DropExperienceBlock = Java.loadClass("net.minecraft.world.level.block.DropExperienceBlock")
const $RedStoneOreBlock = Java.loadClass("net.minecraft.world.level.block.RedStoneOreBlock")
const $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")
const $MapColor = Java.loadClass("net.minecraft.world.level.material.MapColor")

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

StartupEvents.registry("block", (event) => {

})