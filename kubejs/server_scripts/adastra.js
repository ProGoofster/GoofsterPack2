ServerEvents.recipes((event) => {
    event.remove({ type: "ad_astra:compressing" })
    event.remove({ type: "ad_astra:alloying" })
    event.replaceOutput({}, Fluid.of('ad_astra:oxygen'), Fluid.of("mekanism:oxygen"));
    event.remove({ output: "ad_astra:iron_rod" })
    event.replaceInput({}, "ad_astra:iron_rod", "#forge:rods/iron");
    event.replaceInput({}, "ad_astra:steel_rod", "#forge:rods/steel");
    event.remove({ output: "ad_astra:wrench" })

    event.remove({ output: "ad_astra:launch_pad"})
    var ip = "kubejs:incomplete_launch_pad";
    event.recipes.createSequencedAssembly(
        "ad_astra:launch_pad",
        "#forge:storage_blocks/steel",
        [
            event.recipes.createPressing(ip, ip),
            event.recipes.createDeploying(ip, [ip, "#forge:rods/steel"]),
            event.recipes.createDeploying(ip, [ip, "create:precision_mechanism"]),
            event.recipes.createDeploying(ip, [ip, "#forge:rods/steel"]),
            event.recipes.createPressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);

    event.custom({
        type: "ad_astra:oxygen_loading",
        cookingtime: 6,
        energy: 30,
        input: {
            ingredient: {
                tag: "minecraft:water"
            },
            millibuckets: 100
        },
        result: {
            fluid: "mekanism:oxygen",
            millibuckets: 4
        }
    }).id("ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water")

    event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
        '  N  ',
        ' PPP ',
        ' PDP ',
        ' BCB ',
        ' BSB ',
        ' BAB ',
        'FTPTF',
        'F E F',
    ], {
        P: '#forge:plates/steel',
        B: '#forge:storage_blocks/steel',
        D: 'create:precision_mechanism',
        C: 'create:controls',
        S: '#create:seats',
        A: 'create:electron_tube',
        E: 'ad_astra:steel_engine',
        N: 'ad_astra:rocket_nose_cone',
        T: 'ad_astra:steel_tank',
        F: 'ad_astra:rocket_fin'
    }).id('ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench')

    event.recipes.createMechanicalCrafting('ad_astra:tier_2_rocket', [
        '  N  ',
        ' PPP ',
        ' PDP ',
        ' BCB ',
        ' BSB ',
        'TBABT',
        'FTPTF',
        'F E F',
    ], {
        P: '#forge:plates/desh',
        B: '#forge:storage_blocks/desh',
        D: 'immersiveengineering:heavy_engineering',
        C: 'create:controls',
        S: '#create:seats',
        A: 'immersiveengineering:component_electronic',
        E: 'ad_astra:desh_engine',
        N: 'ad_astra:rocket_nose_cone',
        T: 'ad_astra:desh_tank',
        F: 'ad_astra:rocket_fin'
    }).id('ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench')

    event.recipes.createMechanicalCrafting('ad_astra:tier_3_rocket', [
        '  N  ',
        ' PPP ',
        ' PDP ',
        ' PGP ',
        'NBCBN',
        'TBSBT',
        'TBABT',
        'FTPTF',
        'F E F',
    ], {
        P: '#forge:plates/ostrum',
        B: '#forge:storage_blocks/ostrum',
        D: 'immersiveengineering:component_electronic_adv',
        C: 'create:controls',
        S: '#create:seats',
        A: 'mekanism:advanced_control_circuit',
        E: 'ad_astra:ostrum_engine',
        N: 'ad_astra:rocket_nose_cone',
        T: 'ad_astra:ostrum_tank',
        F: 'ad_astra:rocket_fin',
        G: 'immersiveengineering:heavy_engineering'
    }).id('ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench')

    event.recipes.createMechanicalCrafting('ad_astra:tier_4_rocket', [
        '   N   ',
        '  PPP  ',
        '  PDP  ',
        '  PGP  ',
        'N BCB N',
        'TVBSBVT',
        'TIBABIT',
        'F TPT F',
        'F  E  F'
    ], {
        P: '#forge:plates/calorite',
        B: '#forge:storage_blocks/calorite',
        D: 'ae2:calculation_processor',
        C: 'create:controls',
        S: '#create:seats',
        A: 'mekanism:elite_control_circuit',
        E: 'ad_astra:calorite_engine',
        N: 'ad_astra:rocket_nose_cone',
        T: 'ad_astra:calorite_tank',
        F: 'ad_astra:rocket_fin',
        G: 'ae2:controller',
        I: 'mekanism:pellet_polonium',
        V: 'ad_astra:photovoltaic_vesnium_cell'
    }).id('ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench')

    event.recipes.create.deploying('ad_astra:steel_tank', ['minecraft:bucket', '#forge:plates/steel']).id('ad_astra:steel_tank')
    event.recipes.create.deploying('ad_astra:desh_tank', ['minecraft:bucket', 'ad_astra:desh_plate']).id('ad_astra:desh_tank')
    event.recipes.create.deploying('ad_astra:ostrum_tank', ['minecraft:bucket', 'ad_astra:ostrum_plate']).id('ad_astra:ostrum_tank')
    event.recipes.create.deploying('ad_astra:calorite_tank', ['minecraft:bucket', 'ad_astra:calorite_plate']).id('ad_astra:calorite_tank')

    event.remove({ output: ["ad_astra:coal_generator", "ad_astra:compressor", "ad_astra:etrionic_blast_furnace", "ad_astra:nasa_workbench", "ad_astra:cryo_freezer", "ad_astra:solar_panel", "ad_astra:water_pump", "ad_astra:photovoltaic_etrium_cell"] });

    event.remove({ id: "conversion:fuel_from_oil" })

    event.recipes.immersiveengineering.arc_furnace("kubejs:rocket_fuel_catalyst", "immersiveengineering:ingot_hop_graphite", ["4x #forge:dusts/lead", "4x #forge:dusts/aluminum"])

    event.custom({
        type: "immersiveengineering:refinery",
        catalyst: {
            item: "kubejs:rocket_fuel_catalyst"
        },
        energy: 80,
        input0: {
            amount: 100,
            tag: "forge:biodiesel"
        },
        result: {
            amount: 100,
            fluid: "kubejs:infused_biodiesel"
        }
    })

    let fuelArr = [
        ["immersiveengineering:creosote", "kubejs:rocket_fuel_1", "forge:creosote"],
        ["kubejs:infused_biodiesel", "kubejs:rocket_fuel_2", "kubejs:infused_biodiesel"],
        ["kubejs:chloroethane", "kubejs:rocket_fuel_3", "kubejs:chloroethane"],
        ["kubejs:polonium_fusion_fuel", "kubejs:rocket_fuel_4", "kubejs:polonium_fusion_fuel"],
    ]
    fuelArr.forEach(arr => {
        event.custom({
            "type": "ad_astra:refining",
            "cookingtime": 1,
            "energy": 30,
            "input": {
                "ingredient": {
                    "fluid": arr[0]
                },
                "millibuckets": 5
            },
            "result": {
                "fluid": arr[1],
                "millibuckets": 1
            }
        })

        event.custom({
            type: "immersiveengineering:refinery",
            energy: 120,
            input0: {
                amount: 40,
                tag: arr[2]
            },
            result: {
                amount: 8,
                fluid: arr[1]
            }
        });
    })

    event.recipes.create.mixing(Fluid.of('kubejs:rocket_cryo_fuel_1', 250), [Fluid.of('kubejs:rocket_fuel_1', 250), Fluid.of('ad_astra:cryo_fuel', 250)]);
    event.recipes.create.mixing(Fluid.of('kubejs:rocket_cryo_fuel_2', 250), [Fluid.of('kubejs:rocket_fuel_2', 250), Fluid.of('ad_astra:cryo_fuel', 250)]);
    event.recipes.create.mixing(Fluid.of('kubejs:rocket_cryo_fuel_3', 250), [Fluid.of('kubejs:rocket_fuel_3', 250), Fluid.of('ad_astra:cryo_fuel', 250)]);
    event.recipes.create.mixing(Fluid.of('kubejs:rocket_cryo_fuel_4', 250), [Fluid.of('kubejs:rocket_fuel_4', 250), Fluid.of('ad_astra:cryo_fuel', 250)]);

    event.shaped(
        'ad_astra:photovoltaic_vesnium_cell',
        [
            'C',
            'S',
            'C'
        ],
        {
            C: "#forge:plates/calorite",
            S: 'mekanismgenerators:solar_panel'
        }
    );

    // Etrium ingot <-> nugget <-> block conversions
    event.shapeless('9x ad_astra:etrium_nugget', 'ad_astra:etrium_ingot');
    event.shapeless('9x ad_astra:etrium_ingot', 'ad_astra:etrium_block');
    event.shaped('ad_astra:etrium_block', [
        'EEE',
        'EEE',
        'EEE'
    ], {
        E: 'ad_astra:etrium_ingot'
    });
    event.shaped('ad_astra:etrium_ingot', [
        'EEE',
        'EEE',
        'EEE'
    ], {
        E: 'ad_astra:etrium_nugget'
    });

    event.remove({output: "ae2:sky_dust", input: "ad_astra:sky_stone"})
    event.remove({output: "ae2:smooth_sky_stone_block", input: "ad_astra:sky_stone"})

    event.remove({output: ["ad_astra_giselle_addon:gravity_normalizer", "ad_astra_giselle_addon:automation_nasa_workbench"]})

    event.remove({output: "ad_astra:steel_cable"})
    event.remove({output: "ad_astra:desh_cable"})
    event.remove({output: "ad_astra:cable_duct"})
    event.remove({output: "ad_astra:sky_stone"})
    
    event.remove({id: "ad_astra:refining/fuel_from_refining_oil"})
})