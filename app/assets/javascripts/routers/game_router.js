Guesser.Routers.GameRouter = Support.SwappingRouter.extend({
  routes: {
    'games': 'index',
    'games/new': 'new',
    'games/:id': 'show'
  },
  
  initialize: function(options) {
    this.el = $('#main');
    this.collection = new Guesser.Collections.Games();
  },
  index: function(options) {
    var view = new Guesser.Views.GameView(_.extend({collection: this.collection}, options));
    this.swap(view);
  },
  new: function() {
    var view = new Guesser.Views.NewGameView({collection: this.collection});
    this.swap(view);
  },
  show: function(gameId) {
    var that = this;
    var game = this.collection.get(gameId) || new Guesser.Models.Game({id: gameId});
    game.fetch({
      success: function() {
        var view = new Guesser.Views.GameView({ model: game });
        that.swap(view);
      }
    });
  }
});
