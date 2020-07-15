require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const path = require('path');
const INFURA_KEY = process.env.INFURA_KEY;
const MNEMONIC = process.env.MNEMONIC;

module.exports = {
  contracts_build_directory: path.join(__dirname, './client/src/abis'),
  networks: {
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://rinkeby.infura.io/v3/${INFURA_KEY}`
        );
      },
      network_id: 4,
    },
  },
  compilers: {
    solc: {
      version: '0.6.11',
    },
  },
};
