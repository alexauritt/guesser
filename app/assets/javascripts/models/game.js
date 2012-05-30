Guesser.Models.Game = Backbone.Model.extend({
  initialize: function() {
    this.secretNumber = new Guesser.Models.SecretNumber();
    // this.number = options.number;
    // this.result = this.calculateResult();
  }
});