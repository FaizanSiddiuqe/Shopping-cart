import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import ToggleNavbar from "./ToggleNavbar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen);
  
  const count = useSelector(state=>state.cart)
  return (
   <>
    <nav className="w-full h-14 shadow-lg flex justify-around bg-black items-center  text-white fixed z-50 top-0">
      <span className="bg-gradient-to-r from-blue-500 to-red-600 text-transparent bg-clip-text text-xl font-bold">
        ShoppingCart
      </span>
      <div className="">
        <ul className="hidden sm:flex gap-x-16 font-semibold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `
            ${isActive ? "text-[#007BFF]" : "text-white"}
            `
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `
                ${isActive ? "text-[#007BFF]" : "text-white"}
                `
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="text-red-600 tracking-tight font-bold text-xl">cart {`(${count.length})`}</span>
      <button
      onClick={()=> setIsOpen(!isOpen)}
       className="text-base sm:text-2xl sm:hidden">
        <RxHamburgerMenu/>
      </button>
    </nav>
    {
    isOpen && (
      <ToggleNavbar/>
    )
    }
   </>
  );
};

export default Navbar;
