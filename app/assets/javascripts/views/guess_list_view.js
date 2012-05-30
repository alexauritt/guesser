Guesser.Views.GuessListView = Backbone.View.extend({
  tag: 'div',
  id: 'guess-list',
  render: function() {
    $(this.el).html(JST['guess_list']());
    return this;
  }
});