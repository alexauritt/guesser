Guesser.Views.PanelView = Backbone.View.extend({
  id: 'panel',
  tagName: 'section',
  events: {
    'click #play-again': 'newGame'
  },
  initialize: function(options) {
    _.bindAll(this, 'render', 'displayEndGamePanel', 'newGame');
    this.model.on("game:over", this.displayEndGamePanel);
    this.model.on('error:input', this.setInputError);
    this.model.on('guess:add', this.setInputValid);
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
  },
  setInputValid: function() {
    self.$('#new_guess_number.error').removeClass('error');
  },
  setInputError: function() {
    self.$('#new_guess_number').addClass('error');
  }  
});