Guesser.Views.MainIndex = Backbone.View.extend({
  render: function() {
    $(this.el).html(JST['main/index']({secretNumber: this.model}));
    return this;
  }
});