Guesser.Routers.SecretNumbers = Backbone.Router.extend({
  routes: {
    'secret_numbers/new': 'new'
  },
  
  initialize: function() {},
  
  new: function() {
    alert("there will be a new number")
  }
});
