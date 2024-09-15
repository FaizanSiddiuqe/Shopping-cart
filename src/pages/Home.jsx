import React,{useState, useEffect} from 'react'
import { addProduct } from '../store/cartSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState([])
    const dispatch = useDispatch()
  useEffect(() => {
    const fetchApiProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
         setProducts(response.data)
        })
        console.log(response);
      } catch (error) {
        console.log("Axios Erorr:: Fake Products Api :: Error ::", error);
      }
    };

    fetchApiProduct()
  }, []);
  return (
    <div className='container mx-auto flex justify-center mt-20 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 grid-flow-row'>
        {
        products.map((product)=>
            <div key={product.id}
        className='w-56 py-5  shadow-lg flex flex-col justify-center items-center space-y-3'
            >
                   <Link to={`product/${product.id}`}>
                   <img
                   className='w-40 h-48 object-center'
                    src={product.image} alt="productImage" />
                   </Link>
                   <h3 className='font-semibold text-xl'>{product.category}</h3>
            </div>
        )
        }
    </div>
    </div>
  )
}

export default Home