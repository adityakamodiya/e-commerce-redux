import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete } from "./Slice"

function Cart() {
  const [qunt,setqunt] = useState(1)
  const selector = useSelector((state) => { return state.Data })
  const dispatch = useDispatch();
  console.log(selector.cartarr)

function IncreaseQnt(){
 setqunt(qunt +1) 
}
function DecreaseQnt(){
  if(qunt>=2){
  setqunt(qunt -1)
}}


  return (
    <>
    <div id='cart-wrapper'>      
             
      {
  (selector.cartarr)?

        selector.cartarr.map((res, index) => {
          return ( 
           <div className='cartdiv' key={index}>
            <div className='cartpage'>
              <img src={selector.cartarr[index].thumbnail}></img>

              <button className='delete' onClick={(e) => dispatch(Delete(index))}>delete</button>
              <section className='middle'>
              <h3>{res.title}</h3>
              <button className='QuantityIncrease' onClick={IncreaseQnt}>+</button>
              <span>{qunt}</span>
              <button className='quantityDecrease' onClick={DecreaseQnt}>-</button></section>

            </div>
          </div>)
        })
      :<h1>this is cart page</h1>}
  </div>

    </>
  )
  
}

export default Cart
