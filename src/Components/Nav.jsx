import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  const [products] = useContext(productContext)
  let distinct_category = products && products.reduce((acc,cv)=>[...acc, cv.category],[])
  distinct_category = [...new Set(distinct_category)];
  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
    <a className='py-3 px-5 border rounded border-emrald-900 text-emrald-500 hover:bg-blue-200' href="/create">Add New Product</a>
    <hr className='w-[80%] my-3' />
    <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
    <div className='w-[80%]'>
      {distinct_category.map((c,i)=>(
        <Link key={i} to={`/?category=${c}`} className=' flex items-center  mb-3'><span className='rounded-full mr-2 h-[10px] w-[10px]  bg-blue-200'></span>{" "}{c}</Link>
        
      ))}
      
      {/* <li className=' flex items-center  mb-3'><span className='rounded-full mr-2 h-[10px] w-[10px]  bg-red-200'></span>{" "}Cat2</li>
      <li className=' flex items-center  mb-3'><span className='rounded-full mr-2 h-[10px] w-[10px]  bg-green-200'></span>{" "}Cat3</li>
       */}
    </div>
  </nav>
 
  )
}

export default Nav
