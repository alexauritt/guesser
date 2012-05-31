Guesser.Models.SecretNumber = Backbone.Model.extend({
  urlRoot: '/secret_numbers',
  initialize: function() {
    this.set('number', Math.floor(Math.random() * 10) + 1);
  }
});