import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete } from "./Slice"

function Cart() {
  const selector = useSelector((state) => { return state.Data })
  const dispatch = useDispatch();
  console.log(selector.cartarr)
  return (
    <>
      
             
      {
  (selector.cartarr)?

        selector.cartarr.map((res, index) => {
          return ( 
           <div className='cartdiv' key={index}>
            <div className='cartpage'>
              <img src={selector.cartarr[index].thumbnail}></img>
              <h3>{res.title}</h3>
              <button onClick={(e) => dispatch(Delete(index))}>delete</button>

            </div>
          </div>)
        })
      :<h1>this is cart page</h1>}
    </>
  )
}

export default Cart
