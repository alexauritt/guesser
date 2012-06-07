window.Guesser = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var mainRouter = new Guesser.Routers.MainRouter();
    var gameRouter = new Guesser.Routers.GameRouter();
    Backbone.history.start({pushState:true});
  }
};

$(document).ready(function() {
  return Guesser.initialize();
});