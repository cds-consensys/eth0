const Fallback = artifacts.require("Fallback");

contract("Fallback", ([deployer, player]) => {
  let game;

  before(async () => {
    game = await Fallback.new();
  });

  describe("exploit", () => {
    it("starts out owned by deployer", async function () {
      const owner = await game.owner();
      assert.equal(owner, deployer, "Owner is not deployer");
    });

    it("player claims ownership", async function () {
      // Brainstorm exploit. look at contract

      const owner = await game.owner();
      assert.equal(owner, player, "the player did not claim ownership");
    });

    it("player drains account, (win condition)", async function () {
      // TODO: drain account

      const balance = (await web3.eth.getBalance(game.address)).toString();
      assert.equal(
        "0",
        balance,
        "The account is not drained. Win condition not met!",
      );
    });
  });
});
