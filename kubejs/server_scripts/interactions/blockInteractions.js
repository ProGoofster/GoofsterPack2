const $SHOVEL_FLATTEN  = Java.loadClass('net.minecraftforge.common.ToolAction').get('shovel_flatten')

//removes dirt paths
// TODO: if player shifting, make dirt path
BlockEvents.rightClicked(['minecraft:dirt'], event => {
	if(!event.player.emf$isSneaking && event.getFacing() != event.block.down && event.getItem().canPerformAction($SHOVEL_FLATTEN) && !event.player.isSpectator() && event.level.isEmptyBlock(event.block.pos.above())){
		event.level.getBlock(event.block.pos).set('minecraft:dirt_path')
		event.cancel()
	} 
})