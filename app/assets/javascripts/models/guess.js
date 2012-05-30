Guesser.Models.Guess = Backbone.Model.extend({
  initialize: function(options) {
    _.bindAll(this, 'calculateResult');
    this.secretNumber = options.secretNumber;
    this.number = options.number;
    this.result = this.calculateResult();
  },
  calculateResult: function() {
    var msg = null;
    var secret = this.secretNumber.get('number');
    if ( this.number > secret ) {
      msg = Guesser.Models.Guess.Message.HIGH;
    }
    else if (this.number == secret) {
      msg = Guesser.Models.Guess.Message.CORRECT;
    }
    else {
      msg = Guesser.Models.Guess.Message.LOW;
    }
    return msg;
  }
});

Guesser.Models.Guess.Message = {
  HIGH: "Your guess was too high.",
  LOW: "Your guess was too low.",
  CORRECT: "You guessed my secret number"
}
