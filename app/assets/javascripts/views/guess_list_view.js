Guesser.Views.GuessListView = Backbone.View.extend({
  tag: 'div',
  id: 'guess-list',
  initialize: function() {
    _.bindAll(this, 'render', 'renderGuess');
  },
  render: function() {
    $(this.el).html(JST['guess_list']());
    this.collection.each(this.renderGuess);
    return this;
  },
  renderGuess: function() {
    console.log("rendering a guess");
  }
});