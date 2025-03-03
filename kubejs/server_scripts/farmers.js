ServerEvents.recipes((event) => {
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