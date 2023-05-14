import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from 'web3';

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

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // const getAllTransactions = async () => {
  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();

  //       const availableTransactions = await transactionsContract.getAllTransactions();

  //       const structuredTransactions = availableTransactions.map((transaction) => ({
  //         addressTo: transaction.receiver,
  //         addressFrom: transaction.sender,
  //         timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
  //         message: transaction.message,
  //         keyword: transaction.keyword,
  //         amount: parseInt(transaction.amount._hex) / (10 ** 18)
  //       }));

  //       console.log(structuredTransactions);

  //       setTransactions(structuredTransactions);
  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const checkIfTransactionsExists = async () => {
  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();
  //       const currentTransactionCount = await transactionsContract.getTransactionCount();

  //       window.localStorage.setItem("transactionCount", currentTransactionCount);
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     throw new Error("No ethereum object");
  //   }
  // };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
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
        await transactionHash.wait();
        // await transactionHash.once("receipt", (receipt) => {
        //   console.log(`Transaction confirmed with block number ${receipt.blockNumber}`);
        //   setIsLoading(false);
        // });
        console.log(`Success - ${transactionHash.transactionHash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        console.log(transactionsContract);
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
      
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        
        connectWallet,
        currentAccount,
        formData,
        setformData,
        handleChange,
        sendTransaction,
        isLoading,
        transactionCount,
        
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};