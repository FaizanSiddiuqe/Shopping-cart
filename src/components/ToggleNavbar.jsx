import React from 'react'
import { NavLink } from 'react-router-dom'
const ToggleNavbar = () => {
  return (
    <div className="bg-black sm:hidden flex justify-center py-5 font-semibold fixed left-0 right-0 top-10 transition-all ease-in-out">
        <ul className="space-y-3">
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
  )
}

export default ToggleNavbar