import React, { useContext, useState } from 'react'
import {nanoid} from "nanoid"
import { productContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useContext(productContext)
    const [title, settitle] = useState("")
    const [image,setimage] = useState("")
    const [category,setcategory] = useState("")
    const [price,setprice] = useState("")
    const [description,setdescription] = useState("")
    

    const AddProductHandeler = (e)=>{
        e.preventDefault();
        if(title.trim().length <5 || image.trim().length <5 || category.trim().length <5 ||description.trim().length <5 || price.trim().length <1 ){
            alert("Every Field must have atleast 4 characters");
        }
        const product = {
            id:nanoid(),
            title,
            image,
            category,
            price,
            description
        };
        setProducts([...products, product])
        localStorage.setItem("products", JSON.stringify([...products, product]));
        toast.success("New Product Added")
        navigate("/")
       
        // console.log(product)
    }
    console.log(products);
  return (
    <form onSubmit={AddProductHandeler}  className='flex flex-col items-center w-screen h-screen p-[5%]'>
        <h1 className='text-4xl w-1/2 mb-5'>Add new product</h1>
        <input type="url" placeholder='image link' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e)=> setimage(e.target.value)} value={image}/>
        <input type="text" placeholder='title' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e)=> settitle(e.target.value)} value={title}/>

        <div className='w-1/2 flex justify-between'>
        
        <input type="text" placeholder='Category' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-[45%]' onChange={(e)=> setcategory(e.target.value)} value={category}/>
        <input type="number" placeholder='Price' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-[45%]' onChange={(e)=> setprice(e.target.value)} value={price}/>
        </div>
        <textarea className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e)=> setdescription(e.target.value)} value={description} placeholder="Enter Product Description Here" rows="10"></textarea>
        <div className='w-1/2'>
        <button className=' py-2 px-5 border rounded border-blue-200 text-blue-300 hover:bg-blue-100' >Add New Product</button>
        </div>
        
    </form>
  )
}

export default Create
