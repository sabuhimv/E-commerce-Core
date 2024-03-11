import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'
import all_product from '../../assets/all_product'

const CartItems = () => {
    const{getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div>
        <div className="cartitem-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1 bg-[#e2e2e2] border-none'/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div key={e.id}>
                    <div className="cartitems-format cartitem-format-main !text-base !font-medium">
                        <img src={e.image} alt="" className='h-16' />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className='w-16 h-12 border-2 border-solid border-[#ebebeb] bg-[#fff]'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id] }</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className='w-4 mx-10 cursor-pointer' />
                    </div>
                </div>
            }
            return null;
        })}
        <div className="cartitems-down flex my-16">
            <div className="cartitems-total flex-1 flex flex-col mr-40 gap-10">
                <h1 className='text-xl font-semibold'>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-40 h-14 outline-none border-none bg-redshop text-[#fff] text-base'>CHECKOUT</button>
            </div>
            <div className="promocode flex-1 text-base font-medium">
                <p className='text-[#555]'>If you have a promo code, Enter here </p>
                <div className="promobox w-[500px] mt-5 pl-5 h-[58px]">
                    <input type="text" placeholder='promo code' className='border-2 outline-none bg-transparent pl-4 text-base w-[330px] h-[50px]' />
                    <button className='w-[150px] h-[50px] text-base bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems