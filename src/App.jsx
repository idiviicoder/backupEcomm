import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'

const App = () => {
  return (
    <div className='h-screen w-screen flex'>
      
     <Routes>
      <Route path='/create' element={<Create />}/>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/edit/:id' element={<Edit />} />
     </Routes>
    </div>
  )
}

export default App
