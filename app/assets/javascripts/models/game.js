Guesser.Models.Game = Backbone.Model.extend({
  urlRoot: '/games',
  modelName: 'game',
  defaults: {
    'floor': 1,
    'ceiling': 100
  },
  initialize: function(options) {
    _.bindAll(this, 'guessSaved');
    this.set('secret_number', Guesser.Models.SecretNumberGenerator.getNumber(options));
    this.guesses = new Guesser.Collections.Guesses();
    
  },
  toJSON: function() {
    var guesses = this.guesses.map(function(guess) {
      return guess.toJSON();
    });

    var hashWithRoot = {};
    hashWithRoot[this.modelName] = this.attributes;
    hashWithRoot[this.modelName]['guesses_attributes'] = guesses;

    return _.clone(hashWithRoot);
  },
  addGuess: function(number) {
    var newGuess = new Guesser.Models.Guess({
      secret_number: this.get('secret_number'),
      number: number
    });
    newGuess.save({},{success:this.guessSaved});
  },
  getGuessCollection: function() {
    return this.guesses;
  },
  guessSaved: function(model, response) {
    var newGuess = model;
    this.guesses.add(newGuess);
    if (newGuess.isCorrect()) {
      this.trigger('game:over');
    }
  }
});