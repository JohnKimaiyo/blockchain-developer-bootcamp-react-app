require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

task("account", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ether.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.18",
  networks:{
    localhost:{}
  }
};
