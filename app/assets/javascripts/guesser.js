window.Guesser = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    this.guesses = new Guesser.Collections.Guesses();
    this.secretNumber = new Guesser.Models.SecretNumber();
    new Guesser.Routers.Main({collection: this.guesses, secretNumber: this.secretNumber}); 
    Backbone.history.start({pushState:true});
  }
};

$(document).ready(function() {
  return Guesser.init();
});