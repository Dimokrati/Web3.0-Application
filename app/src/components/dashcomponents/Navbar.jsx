import React from 'react'
import { FaEthereum } from "react-icons/fa";



const NavBarItem = ({ title, classprops }) => (
    <a href={`/${classprops}`} className={`cursor-pointer mx-4`}>{title}</a>
  );

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between select-none items-center bg-blue-400">
            <div className="p-4 md:flex-[0.8] flex-initial">
                <a className="flex items-center xs:text-2xl xxxs:text-[1.4em]" href="/">
                    <FaEthereum className="text-white"/>
                    <p className="text-white font-mono font-bold">Cryptonite</p>
                </a>
            </div>
            <div className="">
                <ul className="text-white md:flex hidden flex-row flex-initial justify-between list-none items-center font-mono font-bold">
                     
                    <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full shadow-lg shadow-[#2952e3]/50 font-mono font-bold cursor-pointer hover:bg-[#2546bd]">
                        Connect wallet
                    </button>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar;