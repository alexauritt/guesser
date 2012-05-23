Guesser.Views.GuessView = Backbone.View.extend({
  tagName: 'li',
  class: 'guess',
  render: function() {
    $(this.el).html("there is a guess");
  }  
});