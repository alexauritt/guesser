//= require application

describe("Guesser.Models.GameManager", function() {
  describe("getGame", function() {
    it("should return something", function() {
      Guesser.Models.GameManager.initialize();
      var game = Guesser.Models.GameManager.getGame();
      expect(game).not.toBe(null);
    });
  });
});