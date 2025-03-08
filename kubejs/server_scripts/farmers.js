ServerEvents.recipes((event) => {
  //dough compat
  event.remove({output: "farmersdelight:wheat_dough"});
  event.remove({id: 'farmersdelight:cutting/tag_dough'});

  //remove cultural dough reipce
  event.remove({id: 'culturaldelights:cooking/raw_pasta'})


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
});