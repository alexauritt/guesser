Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function(options) {
    this.game = new Guesser.Models.Game();
    this.gameView = new Guesser.Views.GameView({model: this.game});
    this.gameView.on("game:over", this.clearScreen)    
  },
  
  home: function() {
    $('#game-view').replaceWith(this.gameView.render().el);
  },
  
  clearScreen: function() {
    $('body').html("You are done.");
  }
});
