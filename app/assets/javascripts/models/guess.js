Guesser.Models.Guess = Backbone.Model.extend({
  initialize: function(options) {
    _.bindAll(this, 'calculateResult');
    this.number = options.number;
    this.set('result', this.calculateResult(options.secretNumber));
  },
  calculateResult: function(secretNumber) {
    var msg = null;
    if ( this.number > secretNumber ) {
      msg = Guesser.Models.Guess.Message.HIGH;
    }
    else if (this.number == secretNumber) {
      msg = Guesser.Models.Guess.Message.CORRECT;
    }
    else {
      msg = Guesser.Models.Guess.Message.LOW;
    }
    return msg;
  },
  isCorrect: function() {
    return (this.get('result') == Guesser.Models.Guess.Message.CORRECT);
  }
});

Guesser.Models.Guess.Message = {
  HIGH: "Your guess was too high.",
  LOW: "Your guess was too low.",
  CORRECT: "You guessed my secret number"
}
