Guesser.Routers.GameRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  
  initialize: function(options) {
    this.mainView = new Guesser.Views.HomeIndex();
  },
  
  index: function() {
    $('body').html(this.mainView.render().el);
  },
  
  clearScreen: function() {
    $('body').html("You are done.");
  }
});
