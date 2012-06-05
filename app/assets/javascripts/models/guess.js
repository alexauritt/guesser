Guesser.Models.Guess = Backbone.Model.extend({
  initialize: function(options) {
    _.bindAll(this, 'calculateResult');
    this.set('result', this.calculateResult(options.secretNumber));
  },
  validate: function(attrs) {
    if (attrs.number == '') {
      return "No blankies.";
    }
    if (isNaN(attrs.number)) {
      return "Need a number";
    }
  },
  calculateResult: function(secretNumber) {
    var msg = null;
    if ( this.get('number') > secretNumber ) {
      msg = Guesser.Models.Guess.Message.HIGH;
    }
    else if (this.get('number') == secretNumber) {
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
