ServerEvents.recipes((event) => {
//     function genSawRecipe(recipeType){
//         event.forEachRecipe({type: recipeType}, recipe => {
//             let recipeJson = recipe.json;
//             let tags = recipeJson.get("tags");
    
//             for (let i = 0; i < tags.size(); i++) {
//                 // Get the tag string value properly
//                 let tagString = tags.get(i).getAsString();
//                 // Use the tag in proper format
//                 let tagIngredient = Ingredient.of(`#${tagString}`);
                
//                 if (tagIngredient.stacks) {
//                     tagIngredient.stacks.forEach(item => {
//                         event.recipes.create.cutting(item, `#${tagString}`);
//                     });
//                 }
//             }
//         })
//     }

//     genSawRecipe('chipped:tinkering_table')
//     genSawRecipe('chipped:mason_table')
//     genSawRecipe('chipped:loom_table')
//     genSawRecipe('chipped:glassblower')
//     genSawRecipe('chipped:carpenters_table')
//     genSawRecipe('chipped:botanist_workbench')
//     genSawRecipe('chipped:alchemy_bench')

    event.replaceInput({output: "chisel_chipped_integration:futura_gray_screen"}, "minecraft:redstone", "minecraft:lapis_lazuli")
})