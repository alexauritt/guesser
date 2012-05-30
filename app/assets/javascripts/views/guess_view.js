Guesser.Views.GuessView = Backbone.View.extend({
  tagName: 'tr',
  class: 'guess',
  initialize: function(options) {
    this.model = options.model;
  },
  render: function() {
    $(this.el).html(JST['guess']());
    return this;
  }  
});