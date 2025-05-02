// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// import { productContext } from '../utils/Context';

// const Edit = () => {
//     const [products, setProducts] = useContext(productContext)
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [product, setproduct] = useState(null)
//     const [title, settitle] = useState("")
//     const [image,setimage] = useState("")
//     const [category,setcategory] = useState("")
//     const [price,setprice] = useState("")
//     const [description,setdescription] = useState("")
    
//     // useEffect(() => {
//     //     setproduct(products.filter((p)=> p.id==id)[0]);
//     // }, [id]);
//     useEffect(() => {
//         const existingProduct = products.find((p) => String(p.id) === String(id));
//         if (existingProduct) {
//             settitle(existingProduct.title);
//             setimage(existingProduct.image);
//             setcategory(existingProduct.category);
//             setprice(existingProduct.price);
//             setdescription(existingProduct.description);
//         }
//     }, [id, products]);

//     const EditProductHandeler = (e)=>{
//         e.preventDefault();
//         if(title.trim().length <5 || image.trim().length <5 || category.trim().length <5 ||description.trim().length <5 || String(price).trim().length <1 ){
//             alert("Every Field must have atleast 4 characters");
//         }
//         console.log(product)
//         // setProducts([...products, product])
//         // localStorage.setItem("products", JSON.stringify([...products, product]));
//         // navigate("/")
//         // toast.success("New Product Added")
//         // console.log(product)
//     }
//     // console.log(products);

//   return (
//     <form onSubmit={EditProductHandeler}  className='flex flex-col items-center w-screen h-screen p-[5%]'>
//         <h1 className='text-4xl w-1/2 mb-5'>Edit Product</h1>
//         <input type="url" placeholder='image link' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e)=> setimage(e.target.value)} value={image}/>
//         <input type="text" placeholder='title' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e)=> settitle(e.target.value)} value={title}/>

//         <div className='w-1/2 flex justify-between'>
        
//         <input type="text" placeholder='Category' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-[45%]' onChange={(e)=> setcategory(e.target.value)} value={category}/>
//         <input type="number" placeholder='Price' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-[45%]' onChange={(e)=> setprice(e.target.value)} value={price}/>
//         </div>
//         <textarea className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e)=> setdescription(e.target.value)} value={description} placeholder="Enter Product Description Here" rows="10"></textarea>
//         <div className='w-1/2'>
//         <button className=' py-2 px-5 border rounded border-blue-200 text-blue-300 hover:bg-blue-100' >Edit Product</button>
//         </div>
        
//     </form>
//   )
// }

// export default Edit



import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {
    const [products, setProducts] = useContext(productContext)
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    useEffect(() => {
        const existingProduct = products.find((p) => String(p.id) === String(id));
        if (existingProduct) {
            settitle(existingProduct.title);
            setimage(existingProduct.image);
            setcategory(existingProduct.category);
            setprice(existingProduct.price);
            setdescription(existingProduct.description);
        }
    }, [id, products]);

    const EditProductHandler = (e) => {
        e.preventDefault();

        if (
            title.trim().length < 5 ||
            image.trim().length < 5 ||
            category.trim().length < 5 ||
            description.trim().length < 5 ||
            String(price).trim().length < 1
        ) {
            alert("Every field must have at least 4 characters");
            return;
        }

        const updatedProduct = {
            id,
            title,
            image,
            category,
            price,
            description,
        };

        const updatedProducts = products.map((p) =>
            String(p.id) === String(id) ? updatedProduct : p
        );

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        toast.success("New Product Added")
        navigate(-1);
    };

    return (
        <form onSubmit={EditProductHandler} className='flex flex-col items-center w-screen h-screen p-[5%]'>
            <h1 className='text-4xl w-1/2 mb-5'>Edit Product</h1>
            <input type="url" placeholder='Image link' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e) => setimage(e.target.value)} value={image} />
            <input type="text" placeholder='Title' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e) => settitle(e.target.value)} value={title} />

            <div className='w-1/2 flex justify-between'>
                <input type="text" placeholder='Category' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-[45%]' onChange={(e) => setcategory(e.target.value)} value={category} />
                <input type="number" placeholder='Price' className='mb-3 text-xl bg-zinc-100 rounded p-3 w-[45%]' onChange={(e) => setprice(e.target.value)} value={price} />
            </div>

            <textarea className='mb-3 text-xl bg-zinc-100 rounded p-3 w-1/2' onChange={(e) => setdescription(e.target.value)} value={description} placeholder="Enter Product Description Here" rows="10"></textarea>

            <div className='w-1/2'>
                <button className='py-2 px-5 border rounded border-blue-200 text-blue-300 hover:bg-blue-100'>Edit Product</button>
            </div>
        </form>
    );
};

export default Edit;
