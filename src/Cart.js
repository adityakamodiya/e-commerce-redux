import React, { useState ,useEffect} from 'react'
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

  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "100", //  = INR 1
    name: "Acme shop",
    description: "some description",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function(response) {
    //   alert('hello');
    // navigate('/tasks')

    },
    prefill: {
      name: "Gaurav",
      contact: "9999999999",
      email: "demo@demo.com"
    },
    notes: {
      address: "some address"
    },
    theme: {
      color: "#F37254",
      hide_topbar: false
    }
  };

  const openPayModal = options => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);


  function IncreaseQnt(e, id, index) {
    e.preventDefault()
    // console.log(index) 

    selector.cartarr.map((res) => {
      if (res.id === id) {
        let span = document.querySelectorAll('.quantity')
        span[index].innerHTML = Number(span[index].innerHTML) + 1

      }
    })


  }
  function DecreaseQnt(e, id, index) {
    selector.cartarr.map((res) => {
      if (res.id === id) {
        let span = document.querySelectorAll('.quantity')
        if (span[index].innerHTML > 1)
          span[index].innerHTML = Number(span[index].innerHTML) - 1

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
                    {/* <><p>{selector.cartarr[index]}</p></> */}
                    <button className='delete' onClick={(e) => dispatch(Delete(index))}>delete</button>
                    <section className='middle'>
                      <h3>{res.title}</h3>
                      <button className='QuantityIncrease' onClick={(e) => { IncreaseQnt(e, res.id, index) }}>+</button>

                      <span className='quantity'>1</span>

                      <button className='quantityDecrease' onClick={(e) => DecreaseQnt(e, res.id, index)}>-</button></section>
                    <button className='delete-all' onClick={(e) => dispatch(Delete_All())}>Delete All</button>
                    <button onClick={() => openPayModal(options)}>order now</button>
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
