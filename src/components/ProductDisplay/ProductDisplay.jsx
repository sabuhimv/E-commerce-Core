import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex pt-10">
      <div className="productdisplay-left flex gap-[17px] pr-12">
        <div className="pd-img-list flex flex-col gap-4">
          <img src={product.image} className="h-32" alt="" />
          <img src={product.image} className="h-32" alt="" />
          <img src={product.image} className="h-32" alt="" />
          <img src={product.image} className="h-32" alt="" />
        </div>
        <div className="pd-img w-[580px]">
          <img src={product.image} className="w-full" alt="" />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col">
        <h1 className="text-4xl font-bold text-[#3d3d3d]">{product.name}</h1>
        <div className="pd-right-stars flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="pd-right-prices flex my-10 gap-8 text-2xl font-bold">
          <div className="pd-right-price-old text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="pd-right-price-new text-redshop">
            ${product.new_price}
          </div>
        </div>
        <div className="pd-right-desc">Lorem ipsum dolor sit amet.</div>
        <div className="pd-right-size">
          <h1 className="mt-14 text-[#656565] text-xl font-semibold">
            Select Size
          </h1>
          <div className="pd-right-sizes flex my-6 gap-5">
            <div className="py-3 px-5 bg-[#fbfbfb] border-2 border-solid border-[#ebebeb] rounded-md cursor-pointer">
              S
            </div>
            <div className="py-3 px-5 bg-[#fbfbfb] border-2 border-solid border-[#ebebeb] rounded-md cursor-pointer">
              M
            </div>
            <div className="py-3 px-5 bg-[#fbfbfb] border-2 border-solid border-[#ebebeb] rounded-md cursor-pointer">
              L
            </div>
            <div className="py-3 px-5 bg-[#fbfbfb] border-2 border-solid border-[#ebebeb] rounded-md cursor-pointer">
              XL
            </div>
            <div className="py-3 px-5 bg-[#fbfbfb] border-2 border-solid border-[#ebebeb] rounded-md cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="py-5 px-10 bg-redshop text-white font-semibold text-base w-[200px] border-none outline-none">
          Add To Cart
        </button>
        <p className="pd-right-category mt-[10px]">
          <span className="font-semibold">Category: </span> Women, T-shirt, Crop
          Top
        </p>
        <p className="pd-right-category mt-[10px]">
          <span className="font-semibold">Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
