Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function(options) {
    this.mainView = new Guesser.Views.MainView();
  },
  
  home: function() {
    $('body').html(this.mainView.render().el);
  },
  
  clearScreen: function() {
    $('body').html("You are done.");
  }
});
