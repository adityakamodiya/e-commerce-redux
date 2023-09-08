import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete } from "./Slice"

function Cart() {
  const selector = useSelector((state)=>{return state.Data})
  const dispatch = useDispatch();
  console.log(selector.cartarr)
  return (
    <>
    <h1>this is cart page</h1>
    {
      selector.cartarr.map((res,index)=>{
    return(<div className='cartdiv' key={index}>
      <h3>{res.title}</h3>
      <button onClick={(e)=>dispatch(Delete(res.id))}>delete</button>

    </div>)
    })
    }
    </>
  )
}

export default Cart
