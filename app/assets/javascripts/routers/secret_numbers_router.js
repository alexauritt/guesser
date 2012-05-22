Guesser.Routers.SecretNumbers = Backbone.Router.extend({
  routes: {
    'secret_numbers/new': 'new'
  },
  
  initialize: function() {},
  
  new: function() {
    view = new Guesser.Views.MainIndex();
    $('#content').html(view.render().el)
  }
});
