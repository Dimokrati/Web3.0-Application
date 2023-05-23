import React from 'react'
import Predchart from '../charts/Predchart'

const Prediction = () => {
  return (
    <div className='ml-64'>
        <div className="p-4 bg-[#121726]">
          <p className="text-xl text-white font-bold bg">Dashboard / Prediction</p>
        </div>
        <div className='bg-[#121726] h-screen p-5 '>
          <div className='bg-white rounded-lg p-4 '>
            <Predchart />
          </div>
          
        </div>
    </div>
  )
}

export default Prediction
