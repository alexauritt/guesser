Guesser.Models.Game = Backbone.Model.extend({
  initialize: function() {
    this.set('secretNumber', new Guesser.Models.SecretNumber());
    this.set('guesses', new Guesser.Collections.Guesses());
  },
  addGuess: function(number) {
    var newGuess = new Guesser.Models.Guess({
      secretNumber: this.get('secretNumber'),
      number: number
    });

    this.get('guesses').add(newGuess);

    if (newGuess.isCorrect()) {
      this.trigger("game:over");
    }
  },
  getGuessCollection: function() {
    return this.get('guesses');
  }
});