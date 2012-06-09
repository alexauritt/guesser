Guesser.Routers.GameRouter = Support.SwappingRouter.extend({
  routes: {
    'games/new': 'new',
    'games/:id': 'show'
  },
  
  initialize: function(options) {
    this.el = $('#main');
  },
  new: function() {
    var view = new Guesser.Views.NewGameView({model: this.currentGame});
    this.swap(view);
  },
  show: function(gameId) {
    var game;
    var currentGame = Guesser.Models.GameManager.currentGame;
    if (currentGame && currentGame.get('id') == gameId) {
      game = currentGame;
    }
    else {
      game = new Guesser.Models.Game({id: gameId});
      Guesser.Models.GameManager.currentGame = game;
    }
    var that = this;
    game.fetch({
      success: function() {
        var view = new Guesser.Views.GameView({ model: game });
        that.swap(view);
      }
    });
  }
});
