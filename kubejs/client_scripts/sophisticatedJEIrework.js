let storageTypes = [["chest", ""],["barrel", ""],["shulker_box",""],["barrel_1", "limited_"],["barrel_2", "limited_"],["barrel_3", "limited_"],["barrel_4", "limited_"]]
let tiers = ["", "iron_", "gold_", "diamond_", "netherite_"]

JEIEvents.hideItems(event => {
    storageTypes.forEach(type => {
        tiers.forEach(tier => {
            event.hide(`sophisticatedstorage:${type[1]}${tier}${type[0]}`)
        })
    })
})

let barrels = [["barrel", ""],["barrel_1", "limited_"],["barrel_2", "limited_"],["barrel_3", "limited_"],["barrel_4", "limited_"]]
let colors = [
  "{accentColor:16383998,mainColor:16383998}", //white
  "{accentColor:16351261,mainColor:16351261}", //orange
  "{accentColor:13061821,mainColor:13061821}", //magenta
  "{accentColor:3847130,mainColor:3847130}",   //light blue
  "{accentColor:16701501,mainColor:16701501}", //yellow
  "{accentColor:8439583,mainColor:8439583}",   //lime
  "{accentColor:15961002,mainColor:15961002}", //pink
  "{accentColor:4673362,mainColor:4673362}",   //gray
  "{accentColor:10329495,mainColor:10329495}", //light gray
  "{accentColor:1481884,mainColor:1481884}",   //cyan
  "{accentColor:8991416,mainColor:8991416}",   //purple
  "{accentColor:3949738,mainColor:3949738}",   //blue
  "{accentColor:8606770,mainColor:8606770}",   //brown
  "{accentColor:6192150,mainColor:6192150}",   //green
  "{accentColor:11546150,mainColor:11546150}", //red
  "{accentColor:1908001,mainColor:1908001}",   //black
  "{accentColor:8439583,mainColor:16701501}",  //mutli-color
];

JEIEvents.addItems(event => {
    tiers.forEach(tier => {
        barrels.forEach(type => {
            event.add(Item.of(`sophisticatedstorage:${type[1]}${tier}${type[0]}`, '{woodType:"spruce"}'))
        })
        event.add(Item.of(`sophisticatedstorage:${tier}chest`, '{woodType:"oak"}'))
        event.add(`sophisticatedstorage:${tier}shulker_box`)
    })
    
    storageTypes.forEach(type => {
        colors.forEach(color => {
            event.add(Item.of(`sophisticatedstorage:${type[1]}${type[0]}`, color))
        })
    })
})