import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const selector = useSelector((state)=>{return state.Data})
  const dispatch = useDispatch();
  // console.log(selector.cartarr.length)
  return (
    <>
    <nav className='header'>
      <h1>Site Logo</h1>
      <ul>
      {/* <li><Link to="/"></Link></li> */}
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About Us </Link></li> */}
        {/* <li><Link to="/form">form</Link></li> */}
        <li><Link to="/cart">cart<span>{selector.cartarr.length}</span></Link></li>
        
      </ul>
    </nav>
    </>
  )
}

export default Header
