Guesser.Views.NewGameView = Support.CompositeView.extend({
  id: 'new-game',
  tagName: 'section',
  events: {
    "click button#start-game": "startNewGame",
  },
  initialize: function() {
    _.bindAll(this, 'render', 'startNewGame', 'saved');
  },
  render: function () {
    $(this.el).html(JST['game/new_game_form']());
    return this;
  },
  startNewGame: function() {
    self.$('#start-game').attr('disabled', true);
    var low = parseInt(self.$('#floor').val());
    var high = parseInt(self.$('#ceiling').val());
    var game = new Guesser.Models.Game({floor:low,ceiling:high});
    Guesser.Models.GameManager.currentGame = game;
    game.save({},{success:this.saved, error: this.failure});
  },
  saved: function(model, response) {
    Backbone.history.navigate("/games/" + model.id, {trigger: true});    
  },
  failure: function() {
    console.log('failed');
  }
});