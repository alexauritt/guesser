Guesser.Models.Guess = Backbone.Model.extend({
  initialize: function(options) {
    _.bindAll(this, 'calculateResult');
    this.set('result', this.calculateResult(options.secret_number));
  },
  validate: function(attrs) {
    if (attrs.number == '') {
      return "No blankies.";
    }
    if (isNaN(attrs.number)) {
      return "Need a number";
    }
    if (attrs.number < 1) {
      return "Needs to be positive";
    }
    if (parseFloat(attrs.number) != parseInt(attrs.number)) {
      return "Needs to be an integer.";
    }
  },
  calculateResult: function(secret_number) {
    var msg = null;
    if ( this.get('number') > secret_number ) {
      msg = Guesser.Models.Guess.Message.HIGH;
    }
    else if (this.get('number') == secret_number) {
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
