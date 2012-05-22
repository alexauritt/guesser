Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function() {
  },
  
  home: function() {
    var view = new Guesser.Views.MainIndex();
    $('#content').html(view.render().el);
  },
  
  guess: function() {
    console.log("you made a guess");
  }
});
