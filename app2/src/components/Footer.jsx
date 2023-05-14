import { FaEthereum } from "react-icons/fa";



const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer font-mono">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <a className="flex items-center xs:text-2xl xxxs:text-[1.4em]" href="#">
          <FaEthereum className="text-white"/>
          <p className="text-white font-mono font-bold">Cryptonite</p>
        </a>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Transaction</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-4">
      {/* <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p> */}
      {/* <p className="text-white text-sm text-center font-medium mt-2">info@cryptonite.com</p> */}
    </div>

    <div className="sm:w-[90%] w-full h-[0.5px] bg-gray-400 mt-5" />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-[10px] text-left sm:text-xs">@cryptonite2023</p>
      <p className="text-white text-[10px] text-right sm:text-xs">All rights reserved</p>
      <p className="text-white text-[10px] sm:text-xs text-center ">info@cryptonite.com</p>
    </div>
  </div>
);


export default Footer
