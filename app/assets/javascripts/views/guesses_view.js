Guesser.Views.GuessesView = Backbone.View.extend({
  tagName: 'ul',
  id: 'guesses',
  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.on('add', this.render);
  },
  render: function() {
    this.collection.each(function(guess) {
      $(this.el).html("a guess");
    });
  }
});