/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "bscTestnet",
  networks: {
    bscTestnet: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      chainId: 97,
      accounts: [`0x02f1e4727b5cb16aa9c9efd25b90f2d740a46bdbceabe9a7dd5e691701c3402c`],
      gasPrice: 1e10
    },
  },
};
