import React, { useContext } from 'react';
import Datagrid from '../charts/Datagrid';

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from '../../context/TransactionsContext';


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-3 h-12 w-full rounded-md p-2  border-none "
    />
  );

  const Textarea = ({ placeholder, name, type, value, handleChange }) => (
    <textarea
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-3 w-full h-72 rounded-md p-2  border-none "
    />
  );

const Trans = () => {
    const {formData, handleChange, sendTransaction} = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
        }

    
    return (
    <>
        <div className="bg-[#121726] sm:ml-64">
            <div className="p-4">
                <p className="text-xl text-white font-bold">Dashboard / Transactions</p>
            </div>
        </div>
            <div className='ml-64 bg-[#121726] h-screen gap-4 grid grid-cols-2'>
                <div className="p-5  w-full flex flex-col justify-start  ">
                    <p className='text-white font-extrabold mb-4 text-[30px]'>Send Transaction</p>
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                    <Textarea placeholder="Enter Message" name="message" type="textarea" handleChange={handleChange} />
                <div className="h-[1px] w-full bg-gray-400 my-2" />
                        <button type="button" onClick={handleSubmit} className="text-white w-full h-12 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                            Send now
                        </button>
                </div>
                <div>
                    <p className='text-white font-extrabold my-5 text-[30px]'>
                        List of Transactions
                    </p>
                    <div className='bg-white h-[790px] mr-5  rounded-md '>
                        <Datagrid  />
                    </div>

                </div>
            </div>
            
        
        
    </>
  )
}

export default Trans
