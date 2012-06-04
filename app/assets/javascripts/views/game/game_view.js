Guesser.Views.GameView = Support.CompositeView.extend({
  id: 'game',
  tagName: 'section',
  events: {
    "submit #new-guess-form": "guess",
    "click #save": "saveGame"
  },
  initialize: function(options) {
    _.bindAll(this, 'render', 'guess', 'clearGuessForm', 'startNewGame', 'saveGame');

    this.model = new Guesser.Models.Game();
    
    this.model.on('game:restart', this.startNewGame);
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
    var messageView = new Guesser.Views.MessageView({model: this.model});

    self.renderChild(messageView);
    self.renderChild(guessListView);
    self.renderChild(panelView);
    self.$('#message').replaceWith(messageView.el);
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
  startNewGame: function() {
    this.model = new Guesser.Models.Game();
    this.model.on("game:restart", this.startNewGame);
    this.render();
  },
  saveGame: function() {
    this.model.save();
  }
});