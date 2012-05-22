window.Guesser = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new Guesser.Routers.Main({}); 
    Backbone.history.start({pushState:true});
  }
};

$(document).ready(function() {
  return Guesser.init();
});