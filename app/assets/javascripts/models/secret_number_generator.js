Guesser.Models.SecretNumberGenerator = {
  getNumber: function(options) {
    var range = options.ceiling - options.floor + 1;
    var number = Math.floor(Math.random() * range) + options.floor; 
    return number;
  }
}