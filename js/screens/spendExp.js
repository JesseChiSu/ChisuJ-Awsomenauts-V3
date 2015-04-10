game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
        
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("exp-screen")), -10);
                
                me.input.bindKey(me.input.KEY.F1, "F1");
                me.input.bindKey(me.input.KEY.F2, "F2");
                me.input.bindKey(me.input.KEY.F3, "F3");
                me.input.bindKey(me.input.KEY.F4, "F4");
                me.input.bindKey(me.input.KEY.F5, "F5");
                var exp1cost = ((game.data.exp1 + 1) * 5);
                var exp2cost = ((game.data.exp2 + 2) * 3);
                var exp3cost = ((game.data.exp3 + 2) * 4);
                var exp4cost = ((game.data.exp4 + 1) * 8);

                me.game.world.addChild(new (me.Renderable.extend({
                    init: function() {
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font('Times New Roman', 26, 'white');
                    },
                    
                    draw: function(renderer) {
                        this.font.draw(renderer.getContext(), "Press F1-F4 to SELECT, and F5 to SKIP", this.pos.x, this.pos.y + 20);
                        this.font.draw(renderer.getContext(), "Current Exp: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 55);
                        this.font.draw(renderer.getContext(), "F1: Increase GOLD PRODUCTION- Current Level: " + game.data.exp1.toString() + " Cost: " + ((game.data.exp1 + 1) * 5), this.pos.x, this.pos.y + 100);
                        this.font.draw(renderer.getContext(), "F2: Add STARTING GOLD- Current Level: "  + game.data.exp2.toString() + " Cost: " + ((game.data.exp2 + 2) * 3), this.pos.x, this.pos.y + 150);
                        this.font.draw(renderer.getContext(), "F3: Increase ATTACK DAMAGE- Current Level: "  + game.data.exp3.toString() + " Cost: " + ((game.data.exp3 + 2) * 4), this.pos.x, this.pos.y + 200);
                        this.font.draw(renderer.getContext(), "F4: Increase HEALTH- Current Level: "  + game.data.exp4.toString() + " Cost: " + ((game.data.exp4 + 1) * 8), this.pos.x, this.pos.y + 250);

                    },
                    
                    update: function() {
                        return true;
                    }
                })));
                
                this.handeler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge) {
                    if(action === "F1") {
                        if(game.data.exp >= 10) {
                            game.data.exp1 += exp1cost;
                            game.data.exp -= exp1cost;
                            me.state.change(me.state.PLAY);
                        }
                    }else if(action === "F2") {
                        if(game.data.exp >= 10) {
                            game.data.exp2 += exp2cost;
                            game.data.exp -= exp2cost;
                            me.state.change(me.state.PLAY);
                        }
                    }else if(action === "F3") {
                        if(game.data.exp >= 10) {
                            game.data.exp3 += exp3cost;
                            game.data.exp -= exp3cost;
                            me.state.change(me.state.PLAY);
                        }
                    }else if(action === "F4") {
                        if(game.data.exp >= 10) {
                            game.data.exp4 += exp4cost;
                            game.data.exp -= exp4cost;
                            me.state.change(me.state.PLAY);
                        }
                    }else if(action === "F5") {
                        me.state.change(me.state.PLAY);
                    }    
                });
        },
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
                me.input.unbindKey(me.input.KEY.F1, "F1");
                me.input.unbindKey(me.input.KEY.F2, "F2");
                me.input.unbindKey(me.input.KEY.F3, "F3");
                me.input.unbindKey(me.input.KEY.F4, "F4");
                me.input.unbindKey(me.input.KEY.F5, "F5");
                me.event.unsubscribe(this.handeler);
	}
});



