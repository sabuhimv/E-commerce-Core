import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner block w-[4/5] my-[30px] mx-auto"
        src={props.banner}
        alt=""
      />

      <div className="shopcategoty-indexSort px-[100px] flex justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>

        <div className="shopcategory-sort py-2 px-5 flex items-center cursor-pointer border-2 rounded-3xl">
          Sort by <img src={dropdown_icon} className="pl-2" />
        </div>
      </div>

      <div className="shopcategory-procucts my-container flex flex-wrap justify-center gap-x-8 gap-y-6">
        {all_product?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex mx-auto justify-center items-center w-[230px] h-[69px] rounded-3xl bg-[#ededed] text-[#787878] text-lg font-medium cursor-pointer">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
