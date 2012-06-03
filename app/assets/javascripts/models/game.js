Guesser.Models.Game = Backbone.Model.extend({
  initialize: function() {
    this.set('secretNumber', new Guesser.Models.SecretNumber());
    this.set('guesses', new Guesser.Collections.Guesses());
  }
});