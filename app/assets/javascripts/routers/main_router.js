Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home'
  },
  
  initialize: function() {},
  
  home: function() {
    console.log("you are home")
  }
});
