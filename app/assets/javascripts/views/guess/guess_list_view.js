Guesser.Views.GuessListView = Backbone.View.extend({
  tag: 'section',
  id: 'guess-list',

  initialize: function(options) {
    _.bindAll(this, 'render', 'renderGuess');
    
    this.game = this.options.game;
    this.collection = this.game.getGuessCollection();
    
    this.collection.on('add', this.render);
  },

  render: function() {
    $(this.el).html(JST['game/guess_list']());
    this.collection.each(this.renderGuess);
    return this;
  },

  renderGuess: function(guess) {
    var view = new Guesser.Views.GuessView({model: guess});
    this.$('table').append(view.render().el);
  }  
});