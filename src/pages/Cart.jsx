import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  return (
    <div className="container mx-auto mt-40 mb-20 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
    {
       products.map((product) => (
          <div
            key={product.id}
            className="w-56 py-5  shadow-lg flex flex-col items-center space-y-3"
          >
            <img
              className="w-32 h-32 "
              src={product.image}
              alt="productImage"
            />
            <h3 className="font-semibold text-xl">{product.category}</h3>
            <p>{`Price: ${product.price}$`}</p>
            <button
              onClick={() => dispatch(removeProduct(product.id))}
              className="bg-[#007BFF] rounded-sm text-white py-1 px-2 hover:bg-blue-500 cursor-pointer"
            >
             Remove from cart
            </button>
          </div>
        ))
    }
      </div>
    </div>
  );
};

export default Cart;
