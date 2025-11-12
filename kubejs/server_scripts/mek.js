ServerEvents.recipes((event) => {
    //bone to skull
    //event.recipes.mekanism.dissolution() //bone + sufuric to calcium slurry
    //event.recipes.mekanism.reaction() //calcium slurry to skull

    event.remove({ id: 'mekanism:digital_miner' })

    event.shaped(
        "mekanism:teleportation_core",
        [
            'AUA',
            'PQP',
            'AUA'
        ],
        {
            A: "mekanism:alloy_atomic",
            U: "mekanism:ultimate_control_circuit",
            P: "mekanism:pellet_polonium",
            Q: "mekanism:pellet_antimatter"
        }
    ).id("mekanism:teleportation_core");

    event.shaped(
        "mekanism:quantum_entangloporter",
        [
            'AUA',
            'PQP',
            'AUA'
        ],
        {
            U: "mekanism:alloy_atomic",
            A: "mekanism:ultimate_control_circuit",
            P: "mekanism:teleportation_core",
            Q: "ae2:singularity"
        }
    ).id("mekanism:quantum_entangloporter");

    event.shaped(
        "mekanism:chemical_dissolution_chamber",
        [
            'ITI',
            'CSC',
            'ITI'
        ],
        {
            I: "#forge:ingots/osmium",
            T: "mekanism:basic_chemical_tank",
            S: "mekanism:steel_casing",
            C: "mekanism:elite_control_circuit"
        }
    ).id("mekanism:chemical_dissolution_chamber");

    event.shaped(
        "mekanism:isotopic_centrifuge",
        [
            'LLL',
            'CTC',
            'LLL'
        ],
        {
            L: "#forge:ingots/lead",
            T: "mekanism:basic_chemical_tank",
            C: "mekanism:elite_control_circuit"
        }
    ).id("mekanism:isotopic_centrifuge");

    event.replaceInput({ output: "mekanism:security_desk" }, "#forge:circuits/ultimate", "#forge:circuits/elite")


    event.recipes.mekanism.metallurgic_infusing("mekanism:dust_refined_obsidian", "#forge:dusts/obsidian", { infuse_type: "kubejs:etrium", amount: 10 })
        .id("mekanism:processing/refined_obsidian/dust/from_obsidian_dust");
    event.recipes.mekanism.metallurgic_infusing("mekanism:alloy_reinforced", "mekanism:alloy_infused", { infuse_type: "kubejs:fluorite_enriched_diamond", amount: 20 })
        .id("mekanism:metallurgic_infusing/alloy/reinforced");

    event.recipes.mekanism.enriching("kubejs:enriched_etrium", "#forge:ingots/etrium")
    event.custom({
        type: "mekanism:infusion_conversion",
        input: {
            ingredient: {
                tag: "mekanism:enriched/etrium"
            }
        },
        output: {
            amount: 80,
            infuse_type: "kubejs:etrium"
        }
    })

    event.recipes.mekanism.combining("kubejs:fluorite_enriched_diamond", "#mekanism:enriched/diamond", "#forge:gems/fluorite")
    event.custom({
        type: "mekanism:infusion_conversion",
        input: {
            ingredient: {
                tag: "mekanism:enriched/fluorite_diamond"
            }
        },
        output: {
            amount: 80,
            infuse_type: "kubejs:fluorite_enriched_diamond"
        }
    })
})