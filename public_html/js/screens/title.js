game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild( new me.Sprite (0, 0, me.loader.getImage('title-screen')), 3);
                me.input.bindKey(me.input.KEY.ENTER, "start");
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		; // TODO
	}
});
