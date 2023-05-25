import React, {useContext} from 'react'
import { MdClose } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import Area from "../charts/Area";
import { shortenAddressexp } from '../../utils/shortenaddress';
import Datagrid from "../charts/Datagrid";
import { TransactionContext } from '../../context/TransactionsContext';
import {AiFillDollarCircle} from 'react-icons/ai';
import {FaBitcoin} from 'react-icons/fa';
import { InfinitySpin } from 'react-loader-spinner';

const Balance = () => {
    const { balance, currentAccount, fetched } = useContext(TransactionContext);
    return (
    <div>
       <div className="bg-[#121726] sm:ml-64">
                <div className="p-4  ">
                    <p className="text-xl text-white font-bold">Dashboard / Balance</p>
                </div>
            </div>
            <div className="bg-[#121726]  sm:ml-64 h-screen">
                
                <div className="p-4 grid lg:grid-cols-3 grid-rows-3 grid-cols-1 gap-3 h-full" >
                        
                        <div className="  grid-cols-1">
                            <div className="p-3 flex cols-span-1 row-span-1 ro justify-center items-center flex-col rounded-xl h-full eth-card .white-glassmorphism ">
                                <div className="flex justify-between lg:flex-col w-full h-full">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                            <SiEthereum fontSize={21} color="#fff" />
                                        </div>
                                        <BsInfoCircle fontSize={17} color="#fff" />
                                    </div>
                                    <div>
                                        <p className="text-white font-light text-xl">
                                            {currentAccount ? shortenAddressexp( currentAccount) : "Address"}
                                        </p>
                                        <p className="text-white font-semibold text-[22px] mt-1">
                                            Ethereum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-1">
                            <div className="w-full  h-full px-4 py-5 bg-white rounded-lg ">
                                <div className="text-sm font-medium text-gray-500 truncate leading-normal ">
                                        Balance
                                    </div>
                                {balance ? (
                                    <div className='flex justify-center h-5/6 mt-3 items-center gap-4'>
                                    <div className="flex flex-col rounded-full shadow-2xl w-48 justify-center text-gray-700 items-center h-48 text-[50px] font-mono font-semibold ">
                                        <div className='leading-9 tracking-tighter '>
                                            {balance}
                                        </div>
                                        <div className='leading-none tracking-tighter '>
                                        ETH
                                        </div>
                                    </div>
                                    <div className="w-48 h-48 rounded-full border-2 border-gray-700 flex justify-center items-center">
                                        <SiEthereum fontSize={60} className="text-gray-700" />
                                    </div>
                                    </div>
                                ) : (<div className='h-full w-full flex justify-center items-center'><InfinitySpin width='200' color="#3771fa"/></div>)}
                            </div>
                        </div>
                        <div className=" grid-cols-1"> 
                            <div className="w-full  h-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-500 truncate">
                                    Equivalence
                                </div>
                                <div className="flex gap-4 justify-center items-center flex-col h-full ">
                                    {balance ? (
                                        <>
                                        <div className='  bg-white w-full h-2/6 flex items-center justify-start p-4 rounded-2xl drop-shadow-2xl'>
                                        <AiFillDollarCircle className='text-5xl text-green-400'/>
                                        <div className='ml-2 flex justify-between w-full'>
                                            <div>
                                                <p className='text-gray-700 mt-1'>
                                                    US Dollar
                                                </p>
                                                <p className='text-xs text-gray-500'>
                                                    (Usd)
                                                </p>
                                            </div>
                                            <div className='mr-3 flex flex-col items-end'>
                                                <p className='text-gray-700 text-2xl font-semibold'>
                                                    {Math.round(fetched['USD'] * balance * 10000) / 10000} Usd
                                                </p>
                                                <p className='text-xs text-gray-500'>
                                                    1Eth == { fetched['USD']}Usd
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white   w-full h-2/6 flex items-center justify-start p-4 rounded-2xl drop-shadow-2xl '>
                                        <FaBitcoin  className='text-5xl text-yellow-300 '/>
                                        <div className='ml-2 p-1 flex justify-between w-full'>
                                            <div>
                                                <p className='text-gray-700 mt-1'>
                                                    Bitcoin
                                                </p>
                                                <p className='text-xs text-gray-500'>
                                                    (Btc)
                                                </p>
                                            </div>
                                            <div className='mr-3  flex flex-col items-end'>
                                                <p className='text-gray-700 text-2xl font-semibold'>
                                                    {Math.round(fetched['BTC'] * balance * 10000) / 10000} Btc
                                                </p>
                                                <p className='text-xs text-gray-500'>
                                                    1Eth == { fetched['BTC']}Btc
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                    ) : (<InfinitySpin 
                                        width='200'
                                        color="#3771fa"
                                      />)}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white h-[555px] lg:col-span-3 col-span-1 rounded-lg row-span-2"><Area /></div>
                    
                    
                </div>
            </div>
    </div>
  )
}

export default Balance
