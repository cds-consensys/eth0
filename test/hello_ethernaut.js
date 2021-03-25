const HelloEthernaut = artifacts.require("HelloEthernaut");

contract("HelloEthernaut", (/* accounts */) => {
  let target;
  const password = "passvvord";

  before(async () => {
    target = await HelloEthernaut.new(password);
  });

  describe("After Construction", () => {
    it("should have the correct password", async () => {
      const pw = await target.password();
      assert.equal(pw, password);
    });

    it("the level is not cleared", async () => {
      assert.isFalse(await target.getCleared());
    });

    describe("abracadabra ... exploit", () => {
      it("should authenticate", async () => {
        await target.authenticate("Open Sesame");
        assert.isTrue(await target.getCleared());
      });
    });
  });
});
