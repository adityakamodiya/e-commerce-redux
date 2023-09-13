import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const selector = useSelector((state)=>{return state.Data})
  const dispatch = useDispatch();
  // console.log(selector.cartarr.length)
  function myfunc()
  {
   let  header = document.querySelector('.header')
     window.onscroll  =()=>{
      if(window.scrollY > 400){
        header.style.position = 'fixed';
        header.style.width = '100%'
        // header.style.transition = '2s'
    }
     else{
     header.style.position = 'relative'
      }    
    
  }
    }
    myfunc()
    
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
