Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function(options) {
    this.game = new Guesser.Models.Game();
    this.mainView = new Guesser.Views.MainIndex({model: this.game});    
  },
  
  home: function() {
    $('body').html(this.mainView.render().el);
  },
  
  guess: function() {
    console.log("you made a guess");
  }
});
