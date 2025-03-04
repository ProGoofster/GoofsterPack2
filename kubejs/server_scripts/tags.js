ServerEvents.tags('item', event => {

})

ServerEvents.tags('fluid', event => {
    //fix fluid
    event.removeAll('minecraft:water');

	event.add('minecraft:water', 'minecraft:water');
	event.add('minecraft:water', 'minecraft:flowing_water');
})