import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-3 pt-8'>
        <h1 className='text-[#171717] text-4xl font-semibold'>Related Products</h1>
        <hr className='w-[200px] h-[6px] rounded-md bg-black'/>
        <div className='relatedproducts-item mt-10 flex gap-7'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts