Guesser.Views.MainIndex = Backbone.View.extend({
  template: JST['main/index'],
  render: function() {
    $(this.el).html("oh shebang rendered somethan'!");
    return this;
  }
});