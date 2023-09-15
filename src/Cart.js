import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete ,IncreaseQnt,DecreaseQnt,Delete_All} from "./Slice"

function Cart() {
  const [qunt,setqunt] = useState(1)
  const selector = useSelector((state) => { return state.Data })
  const dispatch = useDispatch();
  console.log(selector.cartarr)

function IncreaseQnt(index){
  console.log(index)
 return setqunt(qunt +1) 
}
// function DecreaseQnt(){
//   if(qunt>=2){
//   setqunt(qunt -1)
// }}


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
              <button className='QuantityIncrease' onClick={(e)=> IncreaseQnt(index)}>+</button>
              <span>{qunt}</span>
              <button className='quantityDecrease' onClick={(e)=>dispatch(DecreaseQnt(index))}>-</button></section>
             <button className='delete-all' onClick={(e)=>dispatch(Delete_All())}>Delete All</button>       
             {/* 882995545 */}
            </div>
          </div>)
        })
      :<h1>cart is empty...</h1>}
  </div>

    </>
  )
  
}

export default Cart
