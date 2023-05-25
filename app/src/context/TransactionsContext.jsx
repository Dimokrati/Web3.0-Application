import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from 'web3';
import axios from "axios";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = async () => {
  // const provider = new ethers.BrowserProvider(ethereum);
  // const signer = provider.getSigner();
  // const Contract = new ethers.Contract(contractAddress, contractABI, signer);
  const web3 = new Web3(ethereum);
  const Contract = new web3.eth.Contract(contractABI, contractAddress);
  
  return Contract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", message: "", keyword: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [fetched, setFetched] = useState([])
  const [ethData, setEthData] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const web3 = await new Web3('https://eth-sepolia.g.alchemy.com/v2/zYtlq26CXtT6c9fdA1DC9h74HSzS1t7G');
        const Contract = new web3.eth.Contract(contractABI, contractAddress,{from:currentAccount});
        const accounts = await ethereum.request({ method: "eth_accounts" });
      
        const trans = await Contract.methods.getAllTransactions().call()
        // // const tr = block.transactions[0];
        // // const  tx = await web3.eth.getTransaction(tr)
       
        setTransactions(trans);
        
        const availableTransactions = await web3.eth.getBalance(accounts[0]);
        const balanc = web3.utils.fromWei(availableTransactions, "ether")
        await setBalance(Math.round(balanc * 1000 ) / 1000);
       
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      
      setCurrentAccount(accounts[0]);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        await getAllTransactions();
       
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };



  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      
      console.log(currentAccount)
      window.location.reload();
      window.location.replace('/dashboard/balance')
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.parseUnits(amount, 'ether');
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount.toString(16),
          }],
        });

        const transactionHash = await (await transactionsContract).methods.addToBlockchain(addressTo, parsedAmount, message, keyword).send({from:currentAccount});
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.transactionHash}`);
        // await transactionHash.wait();
        // await transactionHash.once("receipt", (receipt) => {
        //   console.log(`Transaction confirmed with block number ${receipt.blockNumber}`);
        //   setIsLoading(false);
        // });
        console.log(`Success - ${transactionHash.transactionHash}`);
        setIsLoading(false);

        const transactionsCount = (await transactionsContract).methods.getTransactionCount().call();

        setTransactionCount( await transactionsCount)
        // const Count = await transactionsCount;
        // console.log(Count);
        alert('Transaction send succusfully')
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
      
      throw new Error(error);
    }
  };

  
  const disconnectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const ethereum = window.ethereum;
  
      // Check if the user is currently connected to a wallet
      if (ethereum.isConnected()) {
        // Prompt user to manually disconnect from Metamask
        alert('Please disconnect from Metamask manually: \n1) Click on the Metamask extension icon. \n2) Choose the disconnect option. \n3) Click on 3 points options then disconnect your account.');
        window.location.replace('/')
      } else {
        // User is not connected to a wallet
        console.log('Metamask is not connected.');
      }
    } else {
      // Metamask is not installed or unavailable
      console.log('Metamask is not installed or unavailable.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,BTC').then(res => setFetched(res.data)).catch(err => console.log(err));
    axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=500').then(res => setEthData(res.data.Data.Data)).catch(err => console.log(err));
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        connectWallet,
        currentAccount,
        formData,
        setformData,
        handleChange,
        sendTransaction,
        isLoading,
        transactionCount,
        balance,
        fetched,
        disconnectWallet,
        ethData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};