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

});