Guesser.Views.MainIndex = Backbone.View.extend({
  id: 'main',
  events: {
    "submit #new_guess": "createGuess"
  },
  render: function() {
    $(this.el).html(JST['main/index']({secretNumber: this.model}));
    return this;
  },
  createGuess: function(e) {
    e.preventDefault();
    console.log('we will create a guess here');
  }
});