Guesser.Models.Game = Backbone.Model.extend({
  urlRoot: '/games',
  initialize: function() {
    this.set('secretNumber', Guesser.Models.SecretNumberGenerator.getNumber());
    this.set('guesses', new Guesser.Collections.Guesses());
  },
  addGuess: function(number) {
    var newGuess = new Guesser.Models.Guess({
      secretNumber: this.get('secretNumber'),
      number: number
    });

    if (newGuess.isValid()) {      
      this.get('guesses').add(newGuess);
      this.trigger('guess:add');
      if (newGuess.isCorrect()) {
        this.trigger('game:over');
      }
    }
    else {
      this.trigger('error:input');
    }
  },
  getGuessCollection: function() {
    return this.get('guesses');
  }
});