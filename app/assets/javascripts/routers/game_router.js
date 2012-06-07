Guesser.Routers.GameRouter = Support.SwappingRouter.extend({
  routes: {
    'games': 'index'
  },
  
  initialize: function(options) {
    this.el = $('#main')
  },
  
  index: function() {
    var view = new Guesser.Views.GameView();
    this.swap(view);
  },  
});
