Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function(options) {
    this.game = new Guesser.Models.Game();
    this.gameView = new Guesser.Views.GameView({model: this.game});    
  },
  
  home: function() {
    $('body').append(this.gameView.render().el);
  },  
});
