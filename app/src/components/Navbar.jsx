import React, { useContext } from "react";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionsContext";


const NavBarItem = ({ title, classprops }) => (
  <a href='#'className={`cursor-pointer mx-4`}>{title}</a>
);

const Navbar = () => {
    const { connectWallet, currentAccount } = useContext(TransactionContext);
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
    <div>
        <nav className="w-full flex md:justify-center justify-between select-none items-center">
            <div className="p-4 md:flex-[0.6] flex-initial">
                <a className="flex items-center xs:text-2xl xxxs:text-[1.4em]" href="/">
                    <FaEthereum className="text-white"/>
                    <p className="text-white font-mono font-bold">Cryptonite</p>
                </a>
            </div>
            <div className="">
                <ul className="text-white md:flex hidden flex-row flex-initial justify-between list-none items-center font-mono font-bold">
                    {['Market','Exchange','Transactions'].map((item, index) => <NavBarItem classprops={item} key= {item + index} title = {item}/>)}
                    {!currentAccount && 
                    <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full shadow-lg shadow-[#2952e3]/50 font-mono font-bold cursor-pointer hover:bg-[#2546bd]" onClick={connectWallet}>
                        Connect wallet
                    </button>}
                </ul>
            </div>
            <div className="flex relative z-20">
                {!toggleMenu && (<CgMenu className="text-white xs:text-3xl xxxs:text-[1.5em] cursor-pointer md:hidden mr-6" onClick={() => setToggleMenu(true)}/>)}
                {/* {toggleMenu && (<MdClose className="text-white text-3xl cursor-pointer md:hidden" onClick={() => setToggleMenu(false)}/>)} */}
                {toggleMenu && (
                    <ul className="text-white md:hidden fixed -top-0 -right-2 p-3 w-[50vw] h-screen flex flex-col rounded-md blue-glassmorphism  animate-slide-in" >
                        <li className="text-xl w-full my-2 cursor-pointer"><MdClose onClick={() => setToggleMenu(false)} /></li>
                        {['Market', 'Exchange', 'Transactions'].map((item, index) => <NavBarItem classprops="my-2 w-full flex justify-center font-mono text-lg" key={item + index} title={item}/>)}
                    </ul>
                )}
            </div>
        </nav>
    </div>
  )
};

export default Navbar;