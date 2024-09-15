import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/cartSlice'
const ProductDetails = () => {
    const [product, setProduct] = useState('')
    const dispatch = useDispatch()
    console.log(product);
    
    const {id} = useParams()
    useEffect(() => {
        const fetchApiProduct = async () => {
          try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response)=>{
             setProduct(response.data)
            })
            console.log(response);
          } catch (error) {
            console.log("Axios Erorr:: Fake Products Api :: Error ::", error);
          }
        };
        fetchApiProduct()
      }, []);
    

  return (
    <div className='sm:w-1/2 container w-full mt-40 mb-40 mx-auto md:flex justify-center shadow-lg'>
        <div className='sm:w-1/2 border-r content-center border'>
            <img
            className='w-48 object-center mx-auto'
             src={product.image} alt="productImage" />
        </div>
        <div className='sm:w-1/2 w-full space-y-6 bg-black text-white px-5 py-10'>
        <h1 className='font-bold sm:text-xl'>{product.title}</h1>
         <p className='overflow-hidden'>{product.description}</p>
         <p className='font-bold'>{`Price: ${product.price}$`}</p>
         <button 
         onClick={()=>dispatch(addProduct(product))}
         className='bg-[#007BFF] rounded-sm sm:font-semi-bold sm:text-xl inline-block text-white py-1 px-2 hover:bg-blue-500 cursor-pointer'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductDetails