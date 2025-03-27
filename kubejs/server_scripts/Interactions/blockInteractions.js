//prevents non vanilla chests from being upgraded to sophisticatd storage ones
//ideally I would like all chests to be upgradable but I can figure that out later
BlockEvents.rightClicked('#forge:chests/wooden', event => {
	if(event.getItem().getId().startsWith('sophisticatedstorage:basic_t') && event.block.id.startsWith('quark:')){
		event.cancel()
	} 
})

const $SHOVEL_FLATTEN  = Java.loadClass('net.minecraftforge.common.ToolAction').get('shovel_flatten')

//removes dirt paths
BlockEvents.rightClicked(['minecraft:dirt'], event => {
	if(event.getFacing() != event.block.down && event.getItem().canPerformAction($SHOVEL_FLATTEN) && !event.player.isSpectator() && event.level.isEmptyBlock(event.block.pos.above())){
		event.level.getBlock(event.block.pos).set('minecraft:dirt_path')
		event.cancel()
	} 
})