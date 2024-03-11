import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='my-container offers w-4/5 h-[60vh] flex items-center justify-between m-auto mb-[150px] mt-20'>
        <div className="offers-left flex flex-col justify-center">
            <h1 className='text-[80px] font-semibold'>Exclusive</h1>
            <h1 className='text-[80px] font-semibold'>Offers for you</h1>
            <p className='text-[22px] font-semibold text-[#171717]'>Only ON BEST SELLERS PRODUCTS</p>
            <button className='w-[280px] h-[70px] rounded-lg bg-[#ff4141] border-0 text-white font-medium text-2xl cursor-pointer mt-5'>Check Now</button>
        </div>
        <div className="offers-right flex items-center justify-end">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers