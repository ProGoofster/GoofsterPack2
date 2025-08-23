const METAL_CONFLICTS = ['iron', 'copper', 'gold', 'steel', 'lead', 'uranium']

ServerEvents.recipes((event) => {
    METAL_CONFLICTS.forEach(type => {
        event.replaceOutput({}, `#forge:dusts/${type}`, `immersiveengineering:dust_${type}`)
    })
    
})