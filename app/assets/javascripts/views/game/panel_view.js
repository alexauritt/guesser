Guesser.Views.PanelView = Backbone.View.extend({
  id: 'panel',
  tagName: 'section',
  initialize: function(options) {
    _.bindAll(this, 'render', 'displayEndGamePanel');
    this.model.on("game:over", this.displayEndGamePanel);
  },
  render: function() {
    $(this.el).html(JST['game/panel']({}));
    return this;
  },
  displayEndGamePanel: function() {
    $('#end-game').show();
    $('#new-guess').hide();
  }
  
});