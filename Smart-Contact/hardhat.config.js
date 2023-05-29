require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/zYtlq26CXtT6c9fdA1DC9h74HSzS1t7G',
      accounts: [''], //metamask wallet privatekey 
    },
  },
};