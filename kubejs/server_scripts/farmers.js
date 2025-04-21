ServerEvents.recipes((event) => {
  //dough compat
  event.remove({output: "farmersdelight:wheat_dough"});
  event.remove({id: 'farmersdelight:cutting/tag_dough'});

  //remove cultural dough reipce
  event.remove({id: 'culturaldelights:cooking/raw_pasta'})

  //neapoliton milk fix
  event.remove({output: 'neapolitan:milk_bottle'});
  event.remove({input: 'neapolitan:milk_bottle', output: 'minecraft:milk_bucket'});

  //cutting board dripstone
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:dripstone_block",
      },
    ],
    result: [
      {
        item: "minecraft:pointed_dripstone",
        count: 4,
      },
    ],
    sound: "minecraft:block.dripstone_block.break",
    tool: {
      type: "farmersdelight:tool_action",
      action: "pickaxe_dig",
    },
  }).id('farmersdelight:cutting/dripstone');

  //brewin and chewin create compat
  event.remove({id: 'brewinandchewin:emptying/create/honey_bottle'})
  event.remove({id: 'brewinandchewin:emptying/create/milk_bottle'})
  event.remove({id: 'brewinandchewin:emptying/create/milk_bucket'})
  event.remove({id: 'brewinandchewin:emptying/create/potion'})
  event.remove({id: 'brewinandchewin:emptying/create/water_bucket'})

  event.remove({id: 'brewinandchewin:filling/create/honey_bottle'})
  event.remove({id: 'brewinandchewin:filling/create/milk_bottle'})
  event.remove({id: 'brewinandchewin:filling/create/milk_bucket'})
  event.remove({id: 'brewinandchewin:filling/create/potion'})
  event.remove({id: 'brewinandchewin:filling/create/water_bucket'})

  //wraps w/tortilla
  event.replaceInput({output: "miners_delight:insect_wrap"}, "minecraft:bread", "culturaldelights:tortilla")
  event.shapeless('miners_delight:vegan_wrap', ["culturaldelights:tortilla", '2x #miners_delight:baked_cave_carrot']).id('miners_delight:vegan_wrap')

  //remove overlap furnace
  event.remove({output: "nethersdelight:blackstone_furnace"})
  event.replaceInput({input: "nethersdelight:blackstone_furnace"}, "nethersdelight:blackstone_furnace", "quark:blackstone_furnace")
  event.remove({id: "quark:building/crafting/furnaces/blackstone_smoker"})
  event.remove({id: "quark:building/crafting/furnaces/blackstone_blast_furnace"})
});