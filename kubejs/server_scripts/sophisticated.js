ServerEvents.recipes(event => {
    //backpacks
    //maybe make multi_colored with loop through colors
    let backpackColors = [
      ['shulker_box', 'sophisticatedbackpacks:backpack'],
      ['white_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:16383998,clothColor:16383998}')], 
      ['orange_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:16351261,clothColor:16351261}')], 
      ['magenta_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:13061821,clothColor:13061821}')], 
      ['light_blue_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:3847130,clothColor:3847130}')], 
      ['yellow_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:16701501,clothColor:16701501}')], 
      ['lime_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:8439583,clothColor:8439583}')], 
      ['pink_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:15961002,clothColor:15961002}')], 
      ['gray_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:4673362,clothColor:4673362}')], 
      ['light_gray_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:10329495,clothColor:10329495}')], 
      ['cyan_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:1481884,clothColor:1481884}')], 
      ['purple_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:8991416,clothColor:8991416}')], 
      ['blue_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:3949738,clothColor:3949738}')], 
      ['brown_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:8606770,clothColor:8606770}')], 
      ['green_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:6192150,clothColor:6192150}')], 
      ['red_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:11546150,clothColor:11546150}')], 
      ['black_shulker_box', Item.of('sophisticatedbackpacks:backpack', '{borderColor:1908001,clothColor:1908001}')]
    ]

    event.remove({id: "sophisticatedbackpacks:backpack"})
    backpackColors.forEach(i => {
      event.shaped(
        i[1],
        [
          'SLS',
          'SBS',
          'LLL'
        ],
        {
            S: 'minecraft:string',
            L: '#forge:leather',
            B: `minecraft:${i[0]}`
        }
      ).id(`sophisticatedbackpacks:backpack_from_${i[0]}`);
    })

    //storage

    event.remove({output: 'sophisticatedstorage:chest'})
    event.shaped(
      Item.of('sophisticatedstorage:chest', '{woodType:\"oak\"}'),
      [
        'PPP',
        'PTP',
        'PPP'
      ],
      {
          T: 'minecraft:redstone_torch',
          P: '#planks'
      }
    ).id('sophisticatedstorage:chest');

    event.remove({output: 'sophisticatedstorage:barrel'})
    event.shaped(
      Item.of('sophisticatedstorage:barrel', '{woodType:\"spruce\"}'),
      [
        'PSP',
        'PTP',
        'PSP'
      ],
      {
          T: 'minecraft:redstone_torch',
          P: '#planks',
          S: '#wooden_slabs'
      }
  ).id('sophisticatedstorage:barrel');

  event.remove({output: 'sophisticatedstorage:limited_barrel_1'})
  event.shaped(
      Item.of('sophisticatedstorage:limited_barrel_1', '{woodType:\"spruce\"}'),
      [
        'PPP',
        'PSP',
        'PPP'
      ],
      {
          P: '#planks',
          S: '#wooden_slabs'
      }
  ).id('sophisticatedstorage:limited_barrel_1');

  event.remove({output: 'sophisticatedstorage:limited_barrel_2'})
  event.shaped(
    Item.of('sophisticatedstorage:limited_barrel_2', '{woodType:\"spruce\"}'),
    [
      'PPP',
      'SPS',
      'PPP'
    ],
    {
        P: '#planks',
        S: '#wooden_slabs'
    }
  ).id('sophisticatedstorage:limited_barrel_2');

  event.remove({output: 'sophisticatedstorage:limited_barrel_3'})
  event.shaped(
    Item.of('sophisticatedstorage:limited_barrel_3', '{woodType:\"spruce\"}'),
    [
      'PSP',
      'PPP',
      'SPS'
    ],
    {
        P: '#planks',
        S: '#wooden_slabs'
    }
  ).id('sophisticatedstorage:limited_barrel_3');

  event.remove({output: 'sophisticatedstorage:limited_barrel_4'})
  event.shaped(
    Item.of('sophisticatedstorage:limited_barrel_4', '{woodType:\"spruce\"}'),
    [
      'SPS',
      'PPP',
      'SPS'
    ],
    {
        P: '#planks',
        S: '#wooden_slabs'
    }
  ).id('sophisticatedstorage:limited_barrel_4');

  event.shapeless(Item.of('sophisticatedstorage:chest', '{woodType:\"oak\"}'), ['#forge:chests', 'minecraft:redstone_torch'])
  .id('sophisticatedstorage:barrel_from_vanilla_barrel');
  event.shapeless(Item.of('sophisticatedstorage:barrel', '{woodType:\"spruce\"}'),['#forge:barrels', 'minecraft:redstone_torch'])
  .id('sophisticatedstorage:chest_from_vanilla_chest');

  event.remove({output: "sophisticatedstorage:shulker_box", input: "sophisticatedstorage:chest"})
  event.remove({output: "sophisticatedstorage:copper_shulker_box", input: "sophisticatedstorage:copper_chest"})
  event.remove({output: "sophisticatedstorage:iron_shulker_box", input: "sophisticatedstorage:iron_chest"})
  event.remove({output: "sophisticatedstorage:gold_shulker_box", input: "sophisticatedstorage:gold_chest"})
  event.remove({output: "sophisticatedstorage:diamond_shulker_box", input: "sophisticatedstorage:diamond_chest"})
  event.remove({output: "sophisticatedstorage:netherite_shulker_box", input: "sophisticatedstorage:netherite_chest"})

  //need to add soph chest to shulker recipes
})