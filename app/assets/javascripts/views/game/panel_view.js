Guesser.Views.PanelView = Backbone.View.extend({
  id: 'panel',
  tagName: 'section',
  initialize: function(options) {
    _.bindAll(this, 'render');
  },
  render: function() {
    $(this.el).html(JST['game/panel']({}));
    return this;
  }
  
});