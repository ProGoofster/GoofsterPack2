ServerEvents.recipes((event) => {
    //remove op
    event.remove({ output: "mekanism:module_gravitational_modulating_unit" })
    event.remove({ output: "mekanism:module_teleportation_unit" })
    event.remove({ output: "mekanism:cardboard_box" })
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

    event.recipes.mekanism.enriching("kubejs:enriched_etrium", "#forge:dusts/etrium")
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

    event.custom({
        type: "mekanism:infusion_conversion",
        input: {
            ingredient: {
                tag: "forge:dusts/etrium"
            }
        },
        output: {
            amount: 10,
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

    event.remove({ output: "mekanism:oredictionificator" })

    event.recipes.create.mixing("4x mekanism:ingot_bronze", ["3x #forge:ingots/copper", "#forge:ingots/tin"]).heated();

    //nucleosynth
    event.remove({ type: "mekanism:nucleosynthesizing", output: "minecraft:diamond" })
    event.remove({ type: "mekanism:nucleosynthesizing", output: "minecraft:dragon_egg" })
    event.remove({ type: "mekanism:nucleosynthesizing", output: "minecraft:enchanted_golden_apple" })

    //progress gas & fluid (rocket fuel)
    event.custom({
        type: "mekanism:rotary",
        fluidInput: {
            amount: 1,
            fluid: "kubejs:chloroethane"
        },
        fluidOutput: {
            amount: 1,
            fluid: "kubejs:chloroethane"
        },
        gasInput: {
            amount: 1,
            gas: "kubejs:chloroethane"
        },
        gasOutput: {
            amount: 1,
            gas: "kubejs:chloroethane"
        }
    })

    event.custom({
        type: "mekanism:rotary",
        fluidInput: {
            amount: 1,
            fluid: "kubejs:polonium_fusion_fuel"
        },
        fluidOutput: {
            amount: 1,
            fluid: "kubejs:polonium_fusion_fuel"
        },
        gasInput: {
            amount: 1,
            gas: "kubejs:polonium_fusion_fuel"
        },
        gasOutput: {
            amount: 1,
            gas: "kubejs:polonium_fusion_fuel"
        }
    })

    event.recipes.mekanism.chemical_infusing("kubejs:chloroethane", "mekanism:chlorine", "mekanism:ethene")
    event.recipes.mekanism.chemical_infusing("kubejs:polonium_fusion_fuel", "mekanismgenerators:fusion_fuel", "mekanism:polonium")

    event.replaceInput({
        output: ["mekanism:meka_tool", "mekanism:mekasuit_bodyarmor", "mekanism:mekasuit_boots",
            "mekanism:mekasuit_helmet", "mekanism:mekasuit_pants"]
    }, "mekanism:basic_induction_cell", "mekanism:pellet_antimatter")

    event.replaceInput({
        output: ["mekanism:basic_universal_cable", "mekanism:basic_thermodynamic_conductor", "mekanism:basic_mechanical_pipe", "mekanism:basic_pressurized_tube", "mekanism:basic_logistical_transporter"]
    }, "#forge:ingots/steel", "#forge:ingots/osmium")

    event.shaped(
        "mekanism:atomic_disassembler",
        [
            'ITI',
            'ICI',
            ' E '
        ],
        {
            I: "mekanism:alloy_infused",
            T: "mekanism:energy_tablet",
            C: 'mekanism:elite_control_circuit',
            E: 'mekanism:alloy_reinforced'
        }
    ).id("mekanism:atomic_disassembler");

    event.recipes.mekanism.crushing("2x create:cinder_flour", "minecraft:netherrack")
    event.recipes.mekanism.crushing("immersiveengineering:dust_coke", "immersiveengineering:coal_coke")
    event.recipes.mekanism.crushing("9x immersiveengineering:dust_coke", "immersiveengineering:coke")
    event.recipes.mekanism.crushing("ae2:ender_dust", "minecraft:ender_pearl")


    event.recipes.mekanism.crushing("4x ad_astra:ice_shard", "#forge:ores/ice_shard")
})