import React from "react";
import { MdClose } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import Area from "../charts/Area";
import Datagrid from "../charts/Datagrid";


export default function Sidemenu() {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <>
        {/* <nav className="w-full flex md:justify-center justify-between select-none items-center bg-blue-400 ">
            <div className="p-4 flex-[1] flex items-center ">
                {!toggleMenu && <CgMenu className=" w-12 h-6 sm:hidden " onClick={()=>setToggleMenu(true)}></CgMenu>}
                <a className="flex items-center xs:text-2xl xxxs:text-[1.4em]" href="/">
                    
                    <FaEthereum className="text-white"/>
                    <p className="text-white font-mono font-bold">Cryptonite</p>
                </a>
            </div>
            <div className="">
                <ul className="text-white sm:flex hidden flex-row flex-initial justify-between list-none items-center font-mono font-bold">
                    <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full shadow-lg shadow-[#2952e3]/50 font-mono font-bold cursor-pointer hover:bg-[#2546bd]">
                        Connect wallet
                    </button>
                </ul>
            </div>
        </nav> */}
        <div className="flex bg-gray-800 h-screen z-0">
            <div className="sm:flex flex-col h-screen p-3 bg-blue-300 shadow w-60 hidden z-50">
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="z-10">
                {toggleMenu && (
                    <div className="flex fixed flex-col h-screen p-3 bg-blue-300 shadow w-60 sm:hidden z-50">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <MdClose onClick={()=>setToggleMenu(false)}/>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="container mx-4 mt-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6 grid-cols-1 md:grid-rows-2">
                    <div className="p-3 flex cols-span-1 row-span-1 ro justify-center items-center flex-col rounded-xl h-48 sm:w-full w-full eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
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
                    <div className="w-full col-span-2 row-span-2 px-4 py-5 bg-white rounded-lg shadow">
                        <Area />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                            Balance
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20ETH
                        </div>
                    </div>
                </div>
                <div className="md:grid grid-cols-3 grid-rows-1 hidden">
                    <div className="w-full h-[430px] px-4 py-5 col-span-3 bg-white text-white rounded-lg shadow">
                        <div className="text-md px-1 font-medium text-gray-500 truncate">
                            Latest Transactions
                        </div>
                        <Datagrid />
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
}
