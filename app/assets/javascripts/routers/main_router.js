Guesser.Routers.MainRouter = Support.SwappingRouter.extend({
  routes: {
    '': 'index'
  },
  initialize: function(options) {
    this.el = $('#main')
  },
  index: function() {
    var view = new Guesser.Views.MainIndex();
    this.swap(view);
  }
});
