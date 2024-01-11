import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'
import Randomfront from './Randomfront'

function Home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Randomfront /> */}
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home
