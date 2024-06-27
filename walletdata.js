const Web3 = require('web3');

// Connect to the Ethereum network
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Replace 'YOUR_WALLET_ADDRESS' with the actual wallet address
const walletAddress = 'YOUR_WALLET_ADDRESS';

// Get the transaction history of the wallet
web3.eth.getTransactionCount(walletAddress)
    .then(count => {
        for (let i = 0; i < count; i++) {
            web3.eth.getTransactionByIndex(walletAddress, i)
                .then(transaction => {
                    console.log(transaction);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    })
    .catch(error => {
        console.error(error);
    });