import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiBitcoin } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { TfiAngleDown } from "react-icons/tfi";



// const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );

const Welcome = () => {
  return (
    <>
    <div className="flex flex-col w-full justify-center items-center sm:pt-24 sm:pb-2 sm:px-4  pb-8 pt-16 px-8">
      <div className="z-10">
        <div className="flex-[0.5]  flex flex-col sm:justify-center sm:items-center justify-start ">
          <h1 className="text-white 2xl:text-[7em] xl:text-[6em] lg:text-[5em] md:text-[4em] sm:text-[4em] xs:text-[3em] xxs:text-[2.5em] text-[2.2em] leading-[1em] font-mono font-extrabold tracking-[-.110em]">
            <p className="flex sm:justify-center ">Transactions</p> Safe<p className="inline tracking-[.110em] font-serif">,</p>Fast<p className="inline tracking-[.110em] font-serif">,</p>Trusted<p className="inline tracking-[.110em] font-serif">.</p>
          </h1>
          <p className="mt-5 flex-wrap text-white text-base font-thin font-mono text-[11.6px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] ">
            Explore the crypto world. Exchange cryptocurrencies easily on cryptonite.
          </p>
        </div>
      </div>
    </div>
    <div className="sm:flex hidden z-0 relative flex-col justify-center items-center">
      <div className="mt-4 w-px sm:h-[320px] md:h-[320px] lg:h-[290px] xl:h-[260px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-70 ">
      </div>
      <TfiAngleDown className="text-white opacity-40"/>
      {/* <SiBitcoin className="bg-gradient-to-r from-black via-white to-transparent bg-clip-text text-white opacity-25 blur-sm absolute top-[-60px] left-[100px] text-[160px] transition ease-in-out hover:scale-105"/>
      <SiLitecoin className="text-white opacity-25 absolute bottom-[-50px] rotate-[-17deg] blur-sm right-[60px] text-[120px] transition ease-in-out hover:scale-105"/> */}
    </div>
    
    </>
  )
};

export default Welcome;
