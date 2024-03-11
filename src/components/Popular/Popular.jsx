import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    // <div className='my-container popular flex flex-col items-center gap-[10px] h-[90vh]'>
    //     <h1 className='text-[#171717] text-[50px] font-semibold'>Popular In Women</h1>
    //     <hr className='w-[200px] h-[6px] bg-[#252525] rounded-lg'/>
    //     <div className='popular-item mt-[50px] flex gap-6'>
    //         {data_product.map((item,i)=>{
    //             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    //         })}
    //     </div>
    // </div>

    <div className="flex flex-col my-container justify-center items-center">
        <h1 className='text-[#171717] text-[50px] font-semibold'>Exclusive</h1>
        <hr className='w-[200px] h-[4px] bg-[rgb(37,37,37)] rounded-lg'/>
        <div className="collections pt-8 flex flex-wrap justify-center items-center gap-6">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular