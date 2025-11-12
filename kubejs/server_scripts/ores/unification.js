ServerEvents.recipes((event) => {

    // event.replaceInput({}, "mekanism:dust_obsidian", "create:powdered_obsidian")
    // event.replaceInput({}, "createaddition:diamond_grit", "mekanism:dust_diamond")
    // event.replaceOutput({}, "mekanism:dust_obsidian", "create:powdered_obsidian")
    // event.replaceOutput({}, "createaddition:diamond_grit", "mekanism:dust_diamond")

    event.replaceInput({}, "mekanism:dust_obsidian", "#forge:dusts/obsidian")
    event.replaceInput({}, "createaddition:diamond_grit", "#forge:dusts/diamond")
    event.replaceOutput({}, "mekanism:dust_obsidian", "#forge:dusts/obsidian")
    event.replaceOutput({}, "createaddition:diamond_grit", "#forge:dusts/diamond")


    let replacements = [
        ["mekanism:lead_ore", "immersiveengineering:ore_lead"],
        ["mekanism:deepslate_lead_ore", "immersiveengineering:deepslate_ore_lead"],
        ["mekanism:ingot_lead", "immersiveengineering:ingot_lead"],
        ["mekanism:block_lead", "immersiveengineering:storage_lead"],
        ["mekanism:dust_lead", "immersiveengineering:dust_lead"],
        ["mekanism:raw_lead", "immersiveengineering:raw_lead"],
        ["mekanism:nugget_lead", "immersiveengineering:nugget_lead"],
        ["mekanism:block_raw_lead", "immersiveengineering:raw_block_lead"],
        ["immersiveengineering:ore_uranium", "mekanism:uranium_ore"],
        ["immersiveengineering:deepslate_ore_uranium", "mekanism:deepslate_uranium_ore"],
        ["immersiveengineering:ingot_uranium", "mekanism:ingot_uranium"],
        ["immersiveengineering:storage_uranium", "mekanism:block_uranium"],
        ["immersiveengineering:dust_uranium", "mekanism:dust_uranium"],
        ["immersiveengineering:raw_uranium", "mekanism:raw_uranium"],
        ["immersiveengineering:nugget_uranium", "mekanism:nugget_uranium"],
        ["immersiveengineering:raw_block_uranium", "mekanism:block_raw_uranium"]
    ]
    replacements.forEach(arr => {
        event.replaceOutput({}, arr[0], arr[1]);
        event.replaceInput({}, arr[0], arr[1]);
    });

    event.remove({ id: "mekanism:processing/lead/storage_blocks/from_ingots" })
    event.remove({ id: "mekanism:processing/lead/ingot/from_block" })
    event.remove({ id: "mekanism:processing/lead/ingot/from_nuggets" })
    event.remove({ id: "mekanism:processing/lead/nugget/from_ingot" })
    event.remove({ id: "mekanism:processing/lead/raw/from_raw_block" })
    event.remove({ id: "mekanism:processing/lead/raw_storage_blocks/from_raw" })
    event.remove({ id: "immersiveengineering:smelting/ingot_lead2" })
    event.remove({ id: "immersiveengineering:smelting/ingot_lead3" })
    event.remove({ id: "immersiveengineering:smelting/ingot_lead_from_dust" })
    event.remove({ id: "immersiveengineering:smelting/ingot_lead" })
    event.remove({ id: "create:smelting/ingot_lead_compat_mekanism" })
    event.remove({ id: "create:blasting/ingot_lead_compat_mekanism" })
    event.remove({ id: "create:splashing/mekanism/crushed_raw_lead" })



    event.remove({ output: "immersiveengineering:slab_storage_uranium" })
    event.remove({ input: "immersiveengineering:slab_storage_uranium" })
    event.remove({ id: "immersiveengineering:crafting/ingot_uranium_to_storage_uranium" })
    event.remove({ id: "immersiveengineering:crafting/storage_uranium_to_ingot_uranium" })
    event.remove({ id: "immersiveengineering:crafting/ingot_uranium_to_nugget_uranium" })
    event.remove({ id: "immersiveengineering:crafting/nugget_uranium_to_ingot_uranium" })
    event.remove({ id: "immersiveengineering:crafting/raw_uranium_to_raw_block_uranium" })
    event.remove({ id: "immersiveengineering:crafting/raw_block_uranium_to_raw_uranium" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium2" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium3" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_dust" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting2" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting3" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting" })
    event.remove({ id: "create:smelting/ingot_uranium_compat_immersiveengineering" })
    event.remove({ id: "create:blasting/ingot_uranium_compat_immersiveengineering" })
    event.remove({ id: "create:splashing/immersiveengineering/crushed_raw_uranium" })

    event.replaceOutput({}, 'mekanism:dust_steel', 'immersiveengineering:dust_steel');

    event.remove({ output: ["ad_astra:steel_ingot", "ad_astra:steel_nugget", "ad_astra:steel_plate", "ad_astra:steel_rod", "ad_astra:steel_block"] })
    event.remove({ output: ["mekanism:ingot_steel", "mekanism:nugget_steel", "mekanism:dust_steel", "mekanism:block_steel"] });

    
})