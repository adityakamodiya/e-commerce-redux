import React, {  useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
// import { globel } from './Home'
import { Add } from './Slice'
import { fetchapi } from './Slice'

 

function Products() {
  const selector = useSelector((state)=>{return state.Data})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchapi())
    // console.log(selector)
  }, [])
  
  // function myfunc()
  // {
    //   console.log('hello aditya')
    // }
    
    // console.log(selector.arr.products)
  return(
    <>
    <div className='products'>
        {
          (selector.arr.products) ? 
          selector.arr.products.map((product, index) => {
            return (
            <div className='product' key={index}>
              <img src={product.thumbnail} alt="image not found " /> 
              <div className='detail'>
              <h4>{product.title}</h4>
              
              
              <button href=""  className='addBtn' onClick={(e)=>dispatch(Add( selector.arr.products[index]))} >Add To Cart </button>       
                  </div>
            </div>
            )
          }) : ''
        }
      </div>
    </>
  )
  
}

export default Products