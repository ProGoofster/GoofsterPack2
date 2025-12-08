ServerEvents.recipes((event) => {
    event.remove({ output: "#refurbished_furniture:food", not: { output: ["refurbished_furniture:toast"] } })
    event.remove({ type: "refurbished_furniture:cutting_board_slicing" })
    event.remove({ output: "refurbished_furniture:knife" })
    event.remove({ type: "refurbished_furniture:microwave_heating" })
    event.remove({ type: "refurbished_furniture:oven_baking" })
    event.remove({ id: "immersiveengineering:smoking/clinker_brick" })
    event.remove({ output: [/refurbished_furniture:.*_cutting_board/, /everycomp:rfm.*_cutting_board/] })

    event.smelting('refurbished_furniture:cheese_toastie', 'refurbished_furniture:cheese_sandwich')
    event.smoking('refurbished_furniture:cheese_toastie', 'refurbished_furniture:cheese_sandwich')

    // Cheese toastie microwave and oven recipes
    event.custom({
        type: "refurbished_furniture:microwave_heating",
        category: "food",
        ingredient: { "item": "refurbished_furniture:cheese_sandwich" },
        result: "refurbished_furniture:cheese_toastie",
        time: 200
    })
    event.custom({
        type: "refurbished_furniture:oven_baking",
        category: "food",
        ingredient: { "item": "refurbished_furniture:cheese_sandwich" },
        result: "refurbished_furniture:cheese_toastie",
        time: 200
    })

    // Convert all smoking recipes to microwave recipes
    event.forEachRecipe({ type: "minecraft:smoking" }, (recipe) => {
        let json = recipe.json

        let ingredient = json.get("ingredient")
        let result = json.get("result")

        if (ingredient && result) {
            event.custom({
                type: "refurbished_furniture:microwave_heating",
                category: "food",
                ingredient: JsonIO.toObject(ingredient),
                result: result.getAsString(),
                time: 200
            })
            event.custom({
                type: "refurbished_furniture:oven_baking",
                category: "food",
                ingredient: JsonIO.toObject(ingredient),
                result: result.getAsString(),
                time: 200
            })
        }
    })

    event.shaped('refurbished_furniture:cheese_sandwich', [
        'B',
        'C',
        'B'
    ], {
        B: 'some_assembly_required:bread_slice',
        C: '#forge:cheese'
    })

    event.replaceInput({}, 'refurbished_furniture:bread_slice', "some_assembly_required:bread_slice")
    event.replaceInput({}, 'refurbished_furniture:toast', "some_assembly_required:toasted_bread_slice")

    event.custom({
        "type": "refurbished_furniture:toaster_heating",
        "category": "food",
        "ingredient": {
            "item": "some_assembly_required:bread_slice"
        },
        "result": "some_assembly_required:toasted_bread_slice",
        "time": 300
    }).id("refurbished_furniture:toasting/toast")
})