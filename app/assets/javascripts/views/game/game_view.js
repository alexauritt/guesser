Guesser.Views.GameView = Backbone.View.extend({
  id: 'main',
  events: {
    "submit #new_guess": "guess"
  },
  initialize: function(options) {
    _.bindAll(this, 'render', 'guess', 'clearGuessForm')
    this.model = this.options.model;
    this.guesses = new Guesser.Collections.Guesses();
    this.guessListView = new Guesser.Views.GuessListView({collection: this.guesses});
  },
  render: function() {
    $(this.el).html(JST['index']({secretNumber: this.secretNumber}));
    $(this.el).append(this.guessListView.render().el);
    return this;
  },
  guess: function(e) {
    e.preventDefault();

    var $newGuessForm = $('#new_guess');
    var $newGuessField = $('#new_guess_number', $newGuessForm);

    var newGuess = new Guesser.Models.Guess({secretNumber: this.model.secretNumber, number: $newGuessField.val()});

    this.clearGuessForm();
    
    this.guesses.add(newGuess);
    if (newGuess.isCorrect()) {
      this.trigger("game:over");
    }
  },
  clearGuessForm: function() {
    var $newGuessForm = $('#new_guess');
    $newGuessForm[0].reset();
  }
});