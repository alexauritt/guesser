Guesser.Views.GuessListView = Backbone.View.extend({
  tag: 'div',
  id: 'guess-list',
  initialize: function() {
    _.bindAll(this, 'render', 'renderGuess');
    this.collection.on('add', this.render);
  },
  render: function() {
    $(this.el).html(JST['guess_list']());
    this.collection.each(this.renderGuess);
    return this;
  },
  renderGuess: function(guess) {
    var view = new Guesser.Views.GuessView({model: guess});
    this.$('table').append(view.render().el);
  }
  
});