const CoinFlip = artifacts.require("CoinFlip");
const CoinFlipExploit = artifacts.require("CoinFlipExploit");

contract("CoinFlip", () => {
  let coinFlip, cheater;

  before(async () => {
    coinFlip = await CoinFlip.new();
    cheater = await CoinFlipExploit.new(coinFlip.address);
  });

  describe("exploit", () => {
    it("should start with zero consecutive wins", async function () {
      const wins = await coinFlip.consecutiveWins.call();
      assert.equal(wins, 0, "should start with zero wins");
    });

    it("by proxy...", async function () {
      for (let i = 0; i < 9; i++) await cheater.flip();

      const wins = await coinFlip.consecutiveWins.call();
      assert.equal(wins, "10", "You did not have a good win streak!");
    });
  });
});
