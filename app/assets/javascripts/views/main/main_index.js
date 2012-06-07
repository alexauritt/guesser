Guesser.Views.MainIndex = Support.CompositeView.extend({
  id: 'main',
  render: function() {
    this.renderTemplate();
    return this;
  },
  renderTemplate: function() {
    $(this.el).html(JST['main/index']());    
  }
});
