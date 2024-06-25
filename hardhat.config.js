/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "bscTestnet",
  networks: {
    bscTestnet: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      chainId: 97,
      accounts: [`0X[PRIVATE_KEY]'],
      gasPrice: 1e10
    },
  },
};
