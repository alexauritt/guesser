//= require application

describe("Guesser.Models.GameManager", function() {
  describe("getGame", function() {
    it("should return a game model", function() {
      Guesser.Models.GameManager.initialize();
      var game = Guesser.Models.GameManager.getGame();
      expect(game instanceof Guesser.Models.Game).toBe(true);
    });
  });
});