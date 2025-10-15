ServerEvents.recipes((event) => {
    //bone to skull
    //event.recipes.mekanism.dissolution() //bone + sufuric to calcium slurry
    //event.recipes.mekanism.reaction() //calcium slurry to skull

    event.remove({ id: 'mekanism:digital_miner' })
})