Guesser.Views.GuessListView = Backbone.View.extend({
  tag: 'section',
  id: 'guess-list',

  initialize: function(options) {
    _.bindAll(this, 'render', 'renderGuess', 'addGuess');
    
    this.game = this.options.game;
    this.collection = this.game.getGuessCollection();
    
    this.collection.on('add', this.addGuess);
  },
  
  render: function() {
    $(this.el).html(JST['game/guess_list']());
    this.collection.each(this.renderGuess);
    return this;
  },
  addGuess: function(guess) {
    var count = this.collection.length;
    var msg = (count > 1) ? count + " guesses" : count + " guess"  
    this.render();
    this.$('#guess-count').html(msg);

  },
  renderGuess: function(guess) {
    var view = new Guesser.Views.GuessView({model: guess});
    this.$('table').append(view.render().el);
  }  
});