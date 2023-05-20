import React, {useContext} from 'react'
import { MdClose } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import Area from "../charts/Area";
import Datagrid from "../charts/Datagrid";
import { TransactionContext } from '../../context/TransactionsContext';

const Balance = () => {
    const { balance } = useContext(TransactionContext);
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
                                        <p className="text-white font-light text-sm">
                                            Address
                                        </p>
                                        <p className="text-white font-semibold text-lg mt-1">
                                            Ethereum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-1">
                            <div className="w-full  h-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-300 truncate">
                                    Balance
                                </div>
                                <div className="mt-1 text-3xl font-semibold ">
                                    {balance} Eth
                                </div>
                            </div>
                        </div>
                        <div className=" grid-cols-1"> 
                            <div className="w-full  h-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-300 truncate">
                                    Balance
                                </div>
                                <div className="mt-1 text-3xl font-semibold ">
                                    20ETH
                                </div>
                            </div>
                        </div>
                        <div className="bg-white lg:col-span-3 col-span-1 rounded-lg row-span-2"><Area /></div>
                    
                    
                </div>
            </div>
    </div>
  )
}

export default Balance
