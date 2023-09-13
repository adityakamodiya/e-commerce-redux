import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'

function Home() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Products/>}></Route>
          
          <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home
