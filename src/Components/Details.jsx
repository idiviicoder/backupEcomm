import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/Context'
import axios from 'axios'
import instance from '../utils/Axios'
import Loading from './Loading'
import { toast } from 'react-toastify'

const Details = () => {
  const [products, setProducts] = useContext(productContext)
  const [product, setproduct] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate()

 

  // const getsingleProduct = async ()=>{
  //   try{
  //     const { data } =  await instance.get(`/api/products/${id}`);
  //     console.log(data.product);
  //     setproduct(data.product);
      
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{
  //   if(!product){
  //     setproduct(products.filter((p)=>p.id==id)[0])
  //   }
  //   // getsingleProduct()
  // },[])

  useEffect(() => {
    if (!product && products) {
      const matchedProduct = products.find((p) => String(p.id) === String(id));
      setproduct(matchedProduct);
    }
  }, [product, products, id]);
  

  const productDeleteHandeler = (id) => {
    const FilteredProducts = products.filter((p)=> p.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem("products",JSON.stringify(FilteredProducts));
    toast.success("Product Deleted Successfully")
    navigate("/")
  }


  return product ? (
    <div className='mr-5 flex justify-between items-center w-[85%] h-full m-auto p-[10%]'>
        <img className='object-contain h-[80%] w-[50%] pr-5' src={product.image} alt="" />
        <div className='content  w-[50%] h-[60%]'>
            <h1 className='text-4xl text-semibold'>{product.title}</h1>
            <h3 className='text-zinc-400 m-5 ml-0'>{product.category}</h3>
            <h2 className='text-green-500 text-xl text-semibold mb-3'>₹{product.price}</h2>
            <p className='mb-[5%]'>{product.description}</p>
            <Link to={`/edit/${product.id}`} className='py-3 px-5 border rounded border-blue-200 text-blue-300 mr-5 hover:bg-blue-100'>Edit</Link>
            <button onClick={()=>productDeleteHandeler(product.id)} className='py-3 px-5 border rounded border-red-200 text-red-300 hover:bg-red-100'>Delete</button>
        </div>
      
    </div>
  ):(
    <Loading />
  )
}

export default Details
