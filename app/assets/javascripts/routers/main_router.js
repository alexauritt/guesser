Guesser.Routers.Main = Backbone.Router.extend({
  routes: {
    '': 'home',
    'guess': 'guess'
  },
  
  initialize: function(options) {
    this.collection = options.collection;
    this.secretNumber = options.secretNumber;
    this.mainView = new Guesser.Views.MainIndex({collection: this.collection, secretNumber: this.secretNumber});    
  },
  
  home: function() {
    $('body').html(this.mainView.render().el);
  },
  
  guess: function() {
    console.log("you made a guess");
  }
});
