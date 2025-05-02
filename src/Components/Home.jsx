import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading'
import instance from '../utils/Axios'
import Nav from './Nav'

const Home = () => {
  const [products] = useContext(productContext)
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]) 
  // console.log(category)
  const [filteredProducts, setfilteredProducts] = useState(null)
  

  const getProductCategory = async ()=>{
    try {
      const {data} = await instance.get(`/api/products/category?type=${category}`)
      setfilteredProducts(data.products)
      // console.log(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(!filteredProducts || category=="undefined") setfilteredProducts(products)
    if (category!="undefined"){
      setfilteredProducts(products.filter((p)=> p.category==category))
      // getProductCategory()
    } 
  }, [category, products])
  
  // console.log(filteredProducts)


  // useEffect(() => {
  //   if (category && category.length > 0) {
  //     getProductCategory();
  //   } else {
  //     setfilteredProducts(products); // Always update when products change
  //   }
  // }, [category, products]);
  
  return products ? (
    <>
    <Nav />

    <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
      {filteredProducts && filteredProducts.map((item, idx) => (
        
        <Link
          key={item.id}
          to={`/details/${item.id}`}
          className='card p-5 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center mr-3 mb-3'
        >
          <div
            className='mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110'
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <h1 className='hover:text-blue-400 text-center text-sm'>{item.title}</h1>
        </Link>
      ))}
    </div>
    </>
  ) : (
    <Loading />
  )
}

export default Home;
