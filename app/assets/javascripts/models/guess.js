Guesser.Models.Guess = Backbone.Model.extend({
  initialize: function(options) {
    this.secretNumber = options.secretNumber;
    this.value = options.value;
  }
});