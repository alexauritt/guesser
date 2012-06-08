Guesser.Views.NewGameView = Support.CompositeView.extend({
  id: 'new-game',
  tagName: 'section',
  events: {
    "click button#start-game": "startNewGame",
  },
  initialize: function() {
    _.bindAll(this, 'render', 'startNewGame');
  },
  render: function () {
    $(this.el).html(JST['game/new_game_form']());
    return this;
  },
  startNewGame: function() {
    console.log("start new game");
  }
});