Guesser.Views.GameView = Backbone.View.extend({
  id: 'main',
  events: {
    "submit #new_guess": "createGuess"
  },
  initialize: function(options) {
    this.model = options.model;
    this.guesses = new Guesser.Collections.Guesses();
    this.guesses.add(new Guesser.Models.Guess({secretNumber: this.model.secretNumber}));
    this.guessListView = new Guesser.Views.GuessListView({collection: this.guesses});
  },
  render: function() {
    $(this.el).html(JST['main/index']({secretNumber: this.secretNumber}));
    $(this.el).append(this.guessListView.render().el);
    return this;
  },
  createGuess: function(e) {
    e.preventDefault();
    var $newGuessForm = $('#new_guess');
    var $newGuessField = $('#new_guess_number', $newGuessForm);
    this.collection.add(new Guesser.Models.Guess({secretNumber: this.secretNumber, number: $newGuessField.val()}));
    $newGuessForm[0].reset();
  }
});