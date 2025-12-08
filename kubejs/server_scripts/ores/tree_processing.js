ServerEvents.recipes((event) => {
    event.remove({ not: { input: ["atmospheric:watchful_aspen_log", "atmospheric:crustose_log"]}, mod: "abnormals_delight", type: "farmersdelight:cutting", input: "#minecraft:logs"})

    let sawmillWoodTypes = [
        ['atmospheric:', 'rosewood'],
        ['atmospheric:', 'morado'],
        ['atmospheric:', 'yucca'],
        ['atmospheric:', 'aspen'],
        ['atmospheric:', 'laurel'],
        ['atmospheric:', 'kousa'],
        ['atmospheric:', 'grimwood'],
        ['autumnity:', 'maple'],
        ['environmental:', 'willow'],
        ['environmental:', 'pine'],
        ['environmental:', 'plum'],
        ['environmental:', 'wisteria'],
        ['quark:', 'ancient'],
        ['quark:', 'blossom'],
        ['quark:', 'azalea'],
        ['ad_astra:', 'glacian'],
        ['minecraft:', 'pale_oak']
    ]

    function SawmillInputGet(i) {
        let arr = [Item.of(i[0] + i[1] + "_log")]

        // Woods that already have "wood" in their name (rosewood, grimwood) or don't have wood blocks (cherry, glacian)
        let noWoodBlock = ["rosewood", "grimwood", "cherry", "glacian"]

        if (!noWoodBlock.includes(i[1])) {
            arr.push(Item.of(i[0] + i[1] + "_wood"))
        } else if (i[1] === "rosewood" || i[1] === "grimwood") {
            // For rosewood and grimwood, the "wood" block is just the name itself
            arr.push(Item.of(i[0] + i[1]))
        }

        return arr
    }

    function SawmillInputGetStripped(i) {
        let arr = [Item.of(i[0] + 'stripped_' + i[1] + "_log")]

        // Woods that already have "wood" in their name (rosewood, grimwood) or don't have wood blocks (cherry, glacian)
        let noWoodBlock = ["rosewood", "grimwood", "cherry", "glacian"]

        if (!noWoodBlock.includes(i[1])) {
            arr.push(Item.of(i[0] + 'stripped_' + i[1] + "_wood"))
        } else if (i[1] === "rosewood" || i[1] === "grimwood") {
            // For rosewood and grimwood, the stripped "wood" block is just stripped_{name}
            arr.push(Item.of(i[0] + 'stripped_' + i[1]))
        }

        return arr
    }

    sawmillWoodTypes.forEach(i => {
        //event.findRecipes({ type: 'thermal:sawmill', output: i[0] + i[1] + "_planks" }).empty

        event.custom({
            type: "immersiveengineering:sawmill",
            energy: 1600,
            input: [
                SawmillInputGet(i)
            ],
            result: {
                count: 6,
                item: i[0] + i[1] + "_planks"
            },
            secondaries: [
                {
                    output: {
                        tag: "forge:dusts/wood"
                    },
                    stripping: true
                },
                {
                    output: {
                        tag: "forge:dusts/wood"
                    },
                    stripping: false
                }
            ],
            stripped: {
                item: i[0] + 'stripped_' + i[1] + "_log"
            }
        }).id('immersiveengineering:sawmill/'+ i[1] + "_log")

        event.custom({
            type: "immersiveengineering:sawmill",
            energy: 1600,
            input: [
                SawmillInputGetStripped(i)
            ],
            result: {
                count: 6,
                item: i[0] + i[1] + "_planks"
            },
            secondaries: [
                {
                    output: {
                        tag: "forge:dusts/wood"
                    },
                    stripping: false
                }
            ]
        }).id('immersiveengineering:sawmill/stripped_' + i[1] + "_log")
    })

    // Mekanism Sawing Recipes
    // Logs to 6 planks + 25% chance of 1 sawdust
    sawmillWoodTypes.forEach(i => {
        let inputs = SawmillInputGet(i).concat(SawmillInputGetStripped(i))

        inputs.forEach(input => {
            let inputId = input.getId().replace(':', '_').replace('minecraft_', '')
            event.custom({
                type: "mekanism:sawing",
                input: { ingredient: { item: input.getId() } },
                mainOutput: { count: 6, item: i[0] + i[1] + "_planks" },
                secondaryChance: 0.25,
                secondaryOutput: { item: 'immersiveengineering:dust_wood' }
            }).id('kubejs:mekanism/sawing/' + inputId)
        })
    })

    // Pressure plates to 1 plank + 25% chance of 2 sawdust
    sawmillWoodTypes.forEach(i => {
        event.custom({
            type: "mekanism:sawing",
            input: { ingredient: { item: i[0] + i[1] + "_pressure_plate" } },
            mainOutput: { item: i[0] + i[1] + "_planks" },
            secondaryChance: 0.25,
            secondaryOutput: { count: 2, item: 'immersiveengineering:dust_wood' }
        }).id('kubejs:mekanism/sawing/' + i[1] + "_pressure_plate")
    })

    // Doors to 2 planks
    sawmillWoodTypes.forEach(i => {
        event.custom({
            type: "mekanism:sawing",
            input: { ingredient: { item: i[0] + i[1] + "_door" } },
            mainOutput: { count: 2, item: i[0] + i[1] + "_planks" }
        }).id('kubejs:mekanism/sawing/' + i[1] + "_door")
    })

    // Fence gates to 2 planks + 100% chance of 4 sticks
    sawmillWoodTypes.forEach(i => {
        event.custom({
            type: "mekanism:sawing",
            input: { ingredient: { item: i[0] + i[1] + "_fence_gate" } },
            mainOutput: { count: 2, item: i[0] + i[1] + "_planks" },
            secondaryChance: 1.0,
            secondaryOutput: { count: 4, item: 'minecraft:stick' }
        }).id('kubejs:mekanism/sawing/' + i[1] + "_fence_gate")
    })

    // Hanging signs to 2 planks + 50% chance of 1 sawdust
    sawmillWoodTypes.forEach(i => {
        // Skip glacian as it doesn't have a hanging sign
        if (i[1] === 'glacian') return;

        event.custom({
            type: "mekanism:sawing",
            input: { ingredient: { item: i[0] + i[1] + "_hanging_sign" } },
            mainOutput: { count: 2, item: i[0] + i[1] + "_planks" },
            secondaryChance: 0.5,
            secondaryOutput: { item: 'immersiveengineering:dust_wood' }
        }).id('kubejs:mekanism/sawing/' + i[1] + "_hanging_sign")
    })

    // Boats to 5 planks
    sawmillWoodTypes.forEach(i => {
        // Skip glacian as it doesn't have a boat
        if (i[1] === 'glacian') return;

        event.custom({
            type: "mekanism:sawing",
            input: { ingredient: { item: i[0] + i[1] + "_boat" } },
            mainOutput: { count: 5, item: i[0] + i[1] + "_planks" }
        }).id('kubejs:mekanism/sawing/' + i[1] + "_boat")
    })

    // Trapdoors to 3 planks
    sawmillWoodTypes.forEach(i => {
        event.custom({
            type: "mekanism:sawing",
            input: { ingredient: { item: i[0] + i[1] + "_trapdoor" } },
            mainOutput: { count: 3, item: i[0] + i[1] + "_planks" }
        }).id('kubejs:mekanism/sawing/' + i[1] + "_trapdoor")
    })

    let sawmillWoodTypesPlanks = sawmillWoodTypes.concat([
        ['ad_astra:', 'aeronos'],
        ['ad_astra:', 'strophar']
    ])

    function slabReturn(i) {
        if (i[0] === 'botania:' || i[0] === 'quark:') return i[0] + i[1] + "_planks_slab"
        else return i[0] + i[1] + "_slab"
    }

    function stairInput(i) {
        if (i[0] === 'botania:' || i[0] === 'quark:') return i[0] + i[1] + "_planks_stairs"
        else return i[0] + i[1] + "_stairs"
    }

    sawmillWoodTypesPlanks.forEach(i => {
        event.custom({
            type: "immersiveengineering:sawmill",
            energy: 800,
            input: [
                Item.of(i[0] + i[1] + "_planks")
            ],
            result: {
                count: 2,
                item: slabReturn(i)
            },
            secondaries: [
                {
                    output: {
                        tag: "forge:dusts/wood"
                    },
                    stripping: false
                }
            ]
        }).id('immersiveengineering:sawmill/' + i[1] + "_slab")
        event.custom({
            type: "immersiveengineering:sawmill",
            energy: 1600,
            input: [
                Item.of(stairInput(i))
            ],
            result: {
                count: 1,
                item: i[0] + i[1] + "_planks"
            },
            secondaries: [
                {
                    output: {
                        tag: "forge:dusts/wood"
                    },
                    stripping: false
                }
            ]
        }).id('immersiveengineering:sawmill/' + i[1] + "_stairs")
        if (i[0] != 'botania:') {
            event.custom({
                type: "immersiveengineering:sawmill",
                energy: 800,
                input: [
                    Item.of(i[0] + i[1] + "_door")
                ],
                result: {
                    count: 1,
                    item: i[0] + i[1] + "_planks"
                },
                secondaries: [
                    {
                        output: {
                            tag: "forge:dusts/wood"
                        },
                        stripping: false
                    }
                ]
            }).id('immersiveengineering:sawmill/' + i[1] + "_door")
        }
    })


    let sawmillWoodTypesBookshelf = sawmillWoodTypes.concat([
        ['minecraft:', 'spruce', "_log", "quark:"],
        ['minecraft:', 'birch', "_log", "quark:"],
        ['minecraft:', 'jungle', "_log", "quark:"],
        ['minecraft:', 'acacia', "_log", "quark:"],
        ['minecraft:', 'dark_oak', "_log", "quark:"],
        ['minecraft:', 'mangrove', "_log", "quark:"],
        ['minecraft:', 'crimson', "_log", "quark:"],
        ['minecraft:', 'warped', "_log", "quark:"]
    ])

    sawmillWoodTypesBookshelf.forEach(i => {
        if (!i[3]) i[3] = i[0];

        // Skip wood types that don't have bookshelves
        let noBookshelf = ["glacian", "pale_oak"]
        if (noBookshelf.includes(i[1])) return;

        event.custom({
            type: "immersiveengineering:sawmill",
            energy: 1600,
            input: [
                Item.of(i[3] + i[1] + "_bookshelf")
            ],
            result: {
                count: 4,
                item: i[0] + i[1] + "_planks"
            },
            secondaries: [
                {
                    output: {
                        tag: "forge:dusts/wood"
                    },
                    stripping: false
                },
                {
                    output: {
                        count: 3,
                        item: "minecraft:book"
                    },
                    stripping: false
                }
            ]
        }).id('immersiveengineering:sawmill/' + i[1] + "_bookshelf")
    })
})