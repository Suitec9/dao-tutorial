require("dotenv").config(".env");
require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "Goerli",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      Goerli: process.env.GOERLI_PRIVATE_KEY,
    },
  },
};

// Configuration
/*
  solidity - The version of solidity compiler
  defaultNetwork - The Default network to run (Without running --network-name)
  networks - Object which contains the network information
  etherscan - Object to fill in EtherScan Information for contract verification
*/

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};

