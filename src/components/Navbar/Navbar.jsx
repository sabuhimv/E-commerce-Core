import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  
  const location = useLocation();
  // console.log(location);

  const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className="navbar flex justify-between p-4 my-container">
      <div className="nav-logo flex items-center">
        <img src={logo} alt="" />
        <p className="text-primary text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul className="nav-menu flex items-center gap-[50px] text-[#626262] text-xl font-medium">
        <li><Link to={"/"} className={location.pathname == "/" ? "active" : ""}>Home</Link></li>
        <li><Link to={"/men"} className={location.pathname == "/men" ? "active" : ""}>Men</Link></li>
        <li><Link to={"/women"} className={location.pathname == "/women" ? "active" : ""}>Women</Link></li>
        <li><Link to={"/kids"} className={location.pathname == "/kids" ? "active" : ""}>Kids</Link></li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11 relative">
        <Link to={"/login"}>
          <button className="w-[157px] h-[58px] outline-none border-solid border-2 border-[#7a7a7a] rounded-3xl text-xl font-medium bg-white cursor-pointer">Login</button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full text-sm absolute top-2 -right-2">{getTotalCartItems()}</div>
      </div>
      
    </div>
  );
};

export default Navbar;
