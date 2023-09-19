import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete, IncreaseQnt, DecreaseQnt, Delete_All } from "./Slice"
import { current } from '@reduxjs/toolkit';

function Cart() {
  let i;
  const [ind, setind] = useState()
  const [qunt, setqunt] = useState(1)
  const selector = useSelector((state) => { return state.Data })
  const dispatch = useDispatch();
  // console.log(selector.cartarr)
  let val
  let j = 1


  function IncreaseQnt(e, id,index) {
    e.preventDefault()
    // console.log(index) 
    
     selector.cartarr.map((res) => {
      if (res.id === id) {
        let span = document.querySelectorAll('.quantity')
        span[index].innerHTML = Number(span[index].innerHTML)+1
       
      }
    })


  }
  function DecreaseQnt(e, id,index){
    selector.cartarr.map((res) => {
      if (res.id === id) {
        let span = document.querySelectorAll('.quantity')
        if(span[index].innerHTML>1)
        span[index].innerHTML = Number(span[index].innerHTML)-1
       
      }
    })
}
  

  return (
    <>
      <div id='cart-wrapper'>
        {
          (selector.cartarr) ?

            selector.cartarr.map((res, index) => {
              return (
                <div className='cartdiv' key={index}>
                  <div className='cartpage'>
                    <img src={selector.cartarr[index].thumbnail}></img>

                    <button className='delete' onClick={(e) => dispatch(Delete(index))}>delete</button>
                    <section className='middle'>
                      <h3>{res.title}</h3>
                      <button className='QuantityIncrease' onClick={(e) => {IncreaseQnt(e, res.id,index) }}>+</button>

                      <span className='quantity'>1</span>

                      <button className='quantityDecrease' onClick={(e) =>DecreaseQnt(e, res.id,index)}>-</button></section>
                    <button className='delete-all' onClick={(e) => dispatch(Delete_All())}>Delete All</button>
                    {/* 882995545 */}
                  </div>
                </div>)
            })
            : <h1>cart is empty...</h1>}
      </div>

    </>
  )

}

export default Cart
