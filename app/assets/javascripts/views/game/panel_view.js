Guesser.Views.PanelView = Backbone.View.extend({
  id: 'panel',
  tagName: 'section',
  events: {
    'click #play-again': 'newGame'
  },
  initialize: function(options) {
    _.bindAll(this, 'render', 'displayEndGamePanel', 'newGame');
    this.model.on("game:over", this.displayEndGamePanel);
  },
  render: function() {
    $(this.el).html(JST['game/panel']({}));
    return this;
  },
  displayEndGamePanel: function() {
    $('#end-game').show();
    $('#new-guess').hide();
  },
  newGame: function() {
    this.model.trigger('game:restart');
  }
});