Guesser.Views.MainIndex = Backbone.View.extend({
  template: JST['main/index'],
  render: function() {
    $(this.el).html(this.template);
    return this;
  }
});