Guesser.Views.MainIndex = Backbone.View.extend({
  id: 'main',
  events: {
    "submit #new_guess": "createGuess"
  },
  initialize: function (options) {
    this.guessesView = new Guesser.Views.GuessesView({collection: this.collection});
    this.guesses = options.collection;
    this.secretNumber = options.secretNumber; 
  },
  render: function() {
    $(this.el).html(JST['main/index']({secretNumber: this.secretNumber}));
    return this;
  },
  createGuess: function(e) {
    e.preventDefault();
    var $newGuessForm = $('#new_guess');
    var $newGuessField = $('#new_guess_value', $newGuessForm);
    this.collection.add(new Guesser.Models.Guess({secretNumber: this.secretNumber, value: $newGuessField.val()}));
    $newGuessForm[0].reset();
  }
});