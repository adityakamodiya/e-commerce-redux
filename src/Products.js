import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
// import { globel } from './Home'
import { Add, AddToLocalStorage } from './Slice'
import Randomfront from './Randomfront'
import { fetchapi } from './Slice'



function Products() {
  const selector = useSelector((state) => { return state.Data })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchapi())

    // console.log(selector)
  }, [])

  useEffect(() => {
    dispatch(AddToLocalStorage());
  }, [selector.cartarr]);



  return (
    <>
      <Randomfront />


      {(selector.loader == true) ?
        <div>
          <div className='products'>
            {
              (selector.arr.products) ?
                selector.arr.products.map((product, index) => {
                  return (
                    <div className='product' key={index}>
                      <img src={product.thumbnail} alt="image not found " />
                      <div className='detail'>
                        <h4>{product.title}</h4>  


                        <button href="" className='addBtn' onClick={(e) => dispatch(Add(selector.arr.products[index]))}>Add To Cart </button>
                      </div>
                    </div>
                  )
                }) : ''
            }
            {/* {(selector.playAudio) ? <audio src={selector.playAudio} autoPlay></audio> : ''} */}
          </div></div>
        : <h1>loading...</h1>
      }
    </>)
}

export default Products
