ServerEvents.recipes((event) => {
  event.remove({ output: "storagedrawers:conversion_upgrade" });
  event.remove({ output: "storagedrawers:personal_key_cofh" });
  event.remove({ output: "storagedrawers:conversion_upgrade" });

  let storageUpgrades = [
    ["obsidian", "#forge:ingots/copper"],
    ["iron", "#forge:ingots/iron"],
    ["gold", "#forge:ingots/gold"],
    ["diamond", "#forge:gems/diamond"],
  ];

  storageUpgrades.forEach((type) => {
    event.shaped(
        `storagedrawers:${type[0]}_storage_upgrade`,
        [
            "III", 
            "IUI", 
            "III"
        ],
        {
          I: type[1],
          U: "storagedrawers:upgrade_template",
        }
      )
      .id(`storagedrawers:${type[0]}_storage_upgrade`);
  });

  event.shaped(
    'storagedrawers:upgrade_template',
    [
        " S ", 
        "SPS", 
        " S "
    ],
    {
      S: '#forge:rods/wooden',
      P: '#minecraft:planks'
    }
  ).id('storagedrawers:upgrade_template')

  event.custom({
    type: "minecraft:smithing_transform",
    template: {
      item: "minecraft:netherite_upgrade_smithing_template",
    },
    base: {
      item: "storagedrawers:diamond_storage_upgrade",
    },
    addition: {
      item: "minecraft:netherite_ingot",
    },
    result: {
      item: "storagedrawers:emerald_storage_upgrade",
    },
  }).id("storagedrawers:emerald_storage_upgrade");
});
