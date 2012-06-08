Guesser.Views.MessageView = Backbone.View.extend({
  id: 'message',
  tagName: 'section',
  initialize: function(options) {
    _.bindAll(this, 'render', 'displayVictory');
    this.model.on("game:over", this.displayVictory);
  },
  render: function() {
    $(this.el).html(JST['game/message']({game:this.model}));
    return this;
  },
  displayVictory: function() {
    var self = this;
    self.$('h1').html(Guesser.Constants.VICTORY);
  }
})