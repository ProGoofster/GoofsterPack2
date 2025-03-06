ServerEvents.recipes(event => {
    event.recipes.create.mixing("kubejs:netherite_fluix_compound", ["#forge:ingots/netherite", "4x ae2:fluix_crystal"]).superheated;

    event.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:netherite_fluix_compound"
        },
        result:  {
            item: "kubejs:energized_alloy"
        },
        energy: 100000,
    })
    
    function unfusedPress (pressType, pressItem){
        var ip = "kubejs:incomplete_unfused_panel";
        event.recipes.createSequencedAssembly(
            pressType,
            "kubejs:energized_alloy",
            [
                event.recipes.create.pressing(ip, ip),
                event.recipes.create.deploying(ip, [ip, "#ae2:cable"]),
                event.recipes.create.deploying(ip, [ip, pressItem]),
                event.custom({
                    type: "create:filling",
                    ingredients: [
                      {
                        item: ip
                      },
                      {
                        amount: 1000,
                        fluid: "minecraft:lava",
                        nbt: {}
                      }
                    ],
                    results: [
                      {
                        item: ip
                      }
                    ]
                  }),
                event.recipes.create.deploying(ip, [ip, pressItem]),
                event.recipes.create.deploying(ip, [ip, "#ae2:cable"]),
                event.recipes.create.pressing(ip, ip),
            ]
            )
            .transitionalItem(ip)
            .loops(1);
    }

    unfusedPress('kubejs:unfused_calculaton_panel', '#forge:gems/certus_quartz')
    unfusedPress('kubejs:unfused_logic_panel', '#forge:ingots/gold')
    unfusedPress('kubejs:unfused_silicon_panel', '#forge:silicon')
    unfusedPress('kubejs:unfused_engineering_panel', '#forge:gems/diamond')

    event.remove({output: 'ae2:not_so_mysterious_cube'});
    event.recipes.create.mechanical_crafting('ae2:mysterious_cube', [
        ' BMB ',
        'BFCFB',
        'MEHLM',
        'BFSFB',
        ' BMB '
    ], {
        C: 'kubejs:unfused_calculaton_panel',
        L: 'kubejs:unfused_logic_panel',
        S: 'kubejs:unfused_silicon_panel',
        E: 'kubejs:unfused_engineering_panel',
        H: 'quark:diamond_heart',
        M: 'quark:myalite_crystal',
        F: 'ae2:fluix_block',
        B: 'ae2:smooth_sky_stone_block'
    }).id('ae2:mysterious_cube');

    event.recipes.create.milling(["ae2:calculation_processor_press", "ae2:engineering_processor_press", "ae2:calculation_processor_press", "ae2:silicon_press"], "ae2:mysterious_cube")

    // event.recipes.create.mixing('ae2:fluix_crystal', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:fluix_dust']);
    // event.recipes.create.mixing('ae2:certus_quartz_crystal', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:certus_quartz_dust']);

    // event.recipes.create.mixing('ae2:damaged_budding_quartz', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:quartz_block']);
    // event.recipes.create.mixing('ae2:chipped_budding_quartz', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:damaged_budding_quartz']);
    // event.recipes.create.mixing('ae2:flawed_budding_quartz', [Fluid.of('minecraft:water', 250), 'ae2:charged_certus_quartz_crystal', 'ae2:chipped_budding_quartz']);
    
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "ae2:fluix_dust"
          },
          {
            amount: 250,
            fluid: "minecraft:water"
          }
        ],
        results: [{item: "ae2:fluix_crystal"}]
    }).id('create:mixing/compat/ae2/fluix_crystal_2')
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "ae2:certus_quartz_dust"
          },
          {
            amount: 250,
            fluid: "minecraft:water"
          }
        ],
        results: [{item: "ae2:certus_quartz_crystal"}]
    }).id('create:mixing/compat/ae2/certus_crystal')

    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "ae2:charged_certus_quartz_crystal"
          },
          {
            item: "ae2:quartz_block"
          },
          {
            amount: 250,
            fluid: "minecraft:water"
          }
        ],
        results: [{item: "ae2:damaged_budding_quartz"}]
    }).id('create:mixing/compat/ae2/damaged_budding_quartz')
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "ae2:charged_certus_quartz_crystal"
          },
          {
            item: "ae2:damaged_budding_quartz"
          },
          {
            amount: 250,
            fluid: "minecraft:water"
          }
        ],
        results: [{item: "ae2:chipped_budding_quartz"}]
    }).id('create:mixing/compat/ae2/chipped_budding_quartz')
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "ae2:charged_certus_quartz_crystal"
          },
          {
            item: "ae2:chipped_budding_quartz"
          },
          {
            amount: 250,
            fluid: "minecraft:water"
          }
        ],
        results: [{item: "ae2:flawed_budding_quartz"}]
    }).id('create:mixing/compat/ae2/flawed_budding_quartz')

    event.recipes.create.deploying("ae2:printed_silicon", ["ae2:silicon", "ae2:silicon_press"]);
    event.recipes.create.deploying("ae2:printed_logic_processor", ["minecraft:gold_ingot", "ae2:logic_processor_press"]);
    event.recipes.create.deploying("ae2:printed_calculation_processor", ["ae2:certus_quartz_crystal", "ae2:calculation_processor_press"]);
    event.recipes.create.deploying("ae2:printed_engineering_processor", ["minecraft:diamond", "ae2:engineering_processor_press"]);
    
    // event.recipes.create.deploying("ae2:silicon_press", ["minecraft:netherite_ingot", "ae2:silicon_press"]);
    // event.recipes.create.deploying("ae2:logic_processor_press", ["minecraft:netherite_ingot", "ae2:logic_processor_press"]);
    // event.recipes.create.deploying("ae2:calculation_processor_press", ["minecraft:netherite_ingot", "ae2:calculation_processor_press"]);
    // event.recipes.create.deploying("ae2:engineering_processor_press", ["minecraft:netherite_ingot", "ae2:engineering_processor_press"]);
    // event.replaceInput({type: 'ae2:inscriber'}, 'minecraft:iron_block', 'minecraft:netherite_ingot')
    event.remove({input: 'minecraft:iron_block', type: 'ae2:inscriber'});

    var ip = "kubejs:incomplete_logic_processor";
    event.recipes.createSequencedAssembly(
        "ae2:logic_processor",
        "ae2:printed_logic_processor",
        [
            event.recipes.create.deploying(ip, [ip, "minecraft:redstone"]),
            event.recipes.create.deploying(ip, [ip, "ae2:printed_silicon"]),
            event.recipes.create.pressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);
    
    ip = "kubejs:incomplete_calculation_processor";
    event.recipes.createSequencedAssembly(
        "ae2:calculation_processor",
        "ae2:printed_calculation_processor",
        [
            event.recipes.create.deploying(ip, [ip, "minecraft:redstone"]),
            event.recipes.create.deploying(ip, [ip, "ae2:printed_silicon"]),
            event.recipes.create.pressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);
    
    ip = "kubejs:incomplete_engineering_processor";
    event.recipes.createSequencedAssembly(
        "ae2:engineering_processor",
        "ae2:printed_engineering_processor",
        [
            event.recipes.create.deploying(ip, [ip, "minecraft:redstone"]),
            event.recipes.create.deploying(ip, [ip, "ae2:printed_silicon"]),
            event.recipes.create.pressing(ip, ip),
        ]
        )
        .transitionalItem(ip)
        .loops(1);

    event.remove({output: '#forge:dusts', type: "ae2:inscriber"});
    event.remove({id: 'ae2:inscriber/ender_dust'})

    var p2p = ["ae2:me_p2p_tunnel", "ae2:redstone_p2p_tunnel", "ae2:item_p2p_tunnel", "ae2:fluid_p2p_tunnel", "ae2:fe_p2p_tunnel", "ae2:light_p2p_tunnel"]
    for (var i of p2p) event.stonecutting(i, p2p);

    //cable recipes
    event.remove({id: /ae2:network\/cables\/glass_(?!fluix)/});
    event.remove({id: /ae2:network\/cables\/covered_(?!fluix)/});
    event.remove({id: /ae2:network\/cables\/smart_(?!fluix)/});
    event.remove({id: /ae2:network\/cables\/smart_(?!fluix)/});
    event.remove({id: /ae2:network\/cables\/dense_covered_(?!fluix)/});
    event.remove({id: /ae2:network\/cables\/dense_smart_(?!fluix)(?!from_smart)/});

    //remove quartz tools
    event.remove({output: /ae2:nether_quartz_.*/})
})

MoreJSEvents.villagerTrades(event => {
    var proff = VillagerUtils.getProfessions();
    event.removeVanillaTrades(proff[14],1);
});

