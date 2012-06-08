Guesser.Routers.GameRouter = Support.SwappingRouter.extend({
  routes: {
    'games': 'index',
    'games/new': 'new'
  },
  
  initialize: function(options) {
    this.el = $('#main')
  },
  index: function(options) {
    var view = new Guesser.Views.GameView(options);
    this.swap(view);
  },
  new: function() {
    var view = new Guesser.Views.NewGameView();
    this.swap(view);
  }
});
