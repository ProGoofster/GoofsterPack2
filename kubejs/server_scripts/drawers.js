ServerEvents.recipes((event) => {
  event.remove({ output: "storagedrawers:conversion_upgrade" });
  event.remove({ output: "storagedrawers:personal_key_cofh" });
  event.remove({ output: "storagedrawers:conversion_upgrade" });

  let storageUpgrades = [
    ["obsidian", "#forge:ingots/copper"],
    ["copper", "#forge:ingots/iron"],
    ["iron", "#forge:ingots/gold"],
    ["gold", "#forge:gems/diamond"],
    ["emerald", "#forge:ingots/desh"],
    ["diamond", "#forge:ingots/ostrum"],
    ["netherite", "#forge:ingots/calorite"],
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
});
