import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-[300px] hover:scale-105 duration-700 border-2'>
        <Link to={`/products/${props.id}`}>
          <img src={props.image} alt="" onClick={window.scrollTo(0,0)}/>
        </Link>
        <p className='my-6 px-6'>{props.name}</p>
        <div className='item-prices flex gap-[20px] px-6'>
            <div className="item-price-new text-[#374151] text-lg font-semibold">
                ${props.new_price}
            </div>
            <div className='item-price-old text-[#8c8c8c] text-lg font-medium line-through pb-4'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item