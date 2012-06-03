Guesser.Routers.GameRouter = Support.SwappingRouter.extend({
  routes: {
    '': 'index'
  },
  
  initialize: function(options) {
    this.el = $('body')
  },
  
  index: function() {
    var view = new Guesser.Views.GameView();
    this.swap(view);
  },
  
  clearScreen: function() {
    $('body').html("You are done.");
  }
});
