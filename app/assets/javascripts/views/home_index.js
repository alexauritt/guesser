Guesser.Views.HomeIndex = Backbone.View.extend({
  id: 'main',
  initialize: function() {
    this.startNewGame();
  },
  startNewGame: function() {
    this.game = new Guesser.Models.Game();
    this.gameView = new Guesser.Views.GameView({model: this.game});        
  },
  render: function() {
    this.$el.html(JST['main']());
    this.$('#game').replaceWith(this.gameView.render().el);
    return this;    
  }
});