Guesser.Models.Game = Backbone.Model.extend({
  urlRoot: '/games',
  initialize: function() {
    this.set('secret_number', Guesser.Models.SecretNumberGenerator.getNumber());
    this.set('guesses', new Guesser.Collections.Guesses());
  },
  addGuess: function(number) {
    var newGuess = new Guesser.Models.Guess({
      secret_number: this.get('secret_number'),
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