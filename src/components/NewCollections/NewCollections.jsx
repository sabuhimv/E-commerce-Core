import React from 'react'
import new_collection from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className="flex flex-col flex-wrap my-container items-center justify-center">
        <h1 className='text-[#171717] text-[50px] font-semibold'>New Collections</h1>
        <hr className='w-[200px] h-[4px] bg-[rgb(37,37,37)] rounded-lg'/>
        <div className="collections pt-8 flex flex-wrap justify-center items-center gap-6">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections