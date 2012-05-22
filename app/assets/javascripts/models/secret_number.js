Guesser.Models.SecretNumber = Backbone.Model.extend({
  urlRoot: '/secret_numbers',
  initialize: function() {
    this.set('value', Math.floor(Math.random() * 100) + 1);
  }
});