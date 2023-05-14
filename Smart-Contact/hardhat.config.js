require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/zYtlq26CXtT6c9fdA1DC9h74HSzS1t7G',
      accounts: ['657654f7cb48574b6071dc6d1a5bf24324a0bd7b22bc81c317cd112d361ae3b1'], //metamask wallet privatekey
    },
  },
};