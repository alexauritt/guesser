Guesser.Views.GameView = Backbone.View.extend({
  id: 'game',
  tagName: 'section',
  events: {
    "submit #new-guess-form": "guess"
  },
  initialize: function(options) {
    _.bindAll(this, 'render', 'guess', 'clearGuessForm', 'clearScreen')
    this.model = new Guesser.Models.Game();
    this.guessListView = new Guesser.Views.GuessListView({game: this.model});
    this.model.on("game:over", this.clearScreen);
  },
  render: function() {
    $(this.el).html(JST['game']({secretNumber: this.secretNumber}));
    $(this.el).append(this.guessListView.render().el);
    return this;
  },
  guess: function(e) {
    e.preventDefault();

    var $newGuessForm = $('#new-guess-form');
    var $newGuessField = $('#new_guess_number', $newGuessForm);

    var guessValue = $newGuessField.val();

    this.clearGuessForm();
    this.model.addGuess(guessValue);    
  },
  clearGuessForm: function() {
    var $newGuessForm = $('#new-guess-form');
    $newGuessForm[0].reset();
  },
  clearScreen: function() {
    console.log('game is over');
  }
});