Guesser.Views.GameView = Support.CompositeView.extend({
  id: 'game',
  tagName: 'section',
  events: {
    "submit #new-guess-form": "guess"
  },
  initialize: function(options) {
    _.bindAll(this, 'render', 'guess', 'clearGuessForm', 'clearScreen');

    this.model = new Guesser.Models.Game();
    this.model.on("game:over", this.clearScreen);
  },
  render: function() {
    this.renderTemplate();
    this.renderChildren();
    return this;
  },  
  renderTemplate: function() {
    $(this.el).html(JST['game/main']({secretNumber: this.secretNumber}));
  },
  renderChildren: function() {
    var self = this;
    var guessListView = new Guesser.Views.GuessListView({game: this.model});
    var panelView = new Guesser.Views.PanelView({model: this.model});

    self.renderChild(guessListView);
    self.renderChild(panelView);
    console.log("pan ch", panelView.el);
    self.$('#guess-list').replaceWith(guessListView.el);
    self.$('#panel').replaceWith(panelView.el);
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
    this.leave();
  }
});