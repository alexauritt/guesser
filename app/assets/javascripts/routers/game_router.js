Guesser.Routers.GameRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  
  initialize: function(options) {

  },
  
  index: function() {
    var view = new Guesser.Views.GameView();
    $('body').html(view.render().el);
  },
  
  clearScreen: function() {
    $('body').html("You are done.");
  }
});
