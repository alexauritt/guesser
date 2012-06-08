Guesser.Views.MainIndex = Support.CompositeView.extend({
  id: 'main',
  events: {
    "click #start-game":"startGame"
  },
  render: function() {
    this.renderTemplate();
    return this;
  },
  renderTemplate: function() {
    $(this.el).html(JST['main/index']());    
  },
  startGame: function() {
    Backbone.history.navigate("/games/new", {trigger: true});
  }
});
