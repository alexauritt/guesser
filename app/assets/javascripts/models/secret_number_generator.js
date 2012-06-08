Guesser.Models.SecretNumberGenerator = {
  getNumber: function(options) {
    var range = options.ceiling - options.floor;
    var number = Math.floor(Math.random() * range) + options.floor;
    return number;
  }
}