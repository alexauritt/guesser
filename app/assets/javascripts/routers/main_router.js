Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function() {},
  
  home: function() {
    var secretNumber = new Guesser.Models.SecretNumber();
    var view = new Guesser.Views.MainIndex({model: secretNumber});
    $('body').html(view.render().el);
  },
  
  guess: function() {
    console.log("you made a guess");
  }
});
