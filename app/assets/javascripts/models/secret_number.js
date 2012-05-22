var SecretNumber = Backbone.Model.extend({
  urlRoot: '/secret_numbers',
  value: 3,
  initialize: function() {
    console.log("my num will be 3");
  }
});