import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Randomfront() {
    // const [img,setimg] = useState('')
    const selector = useSelector((state)=>{return state.Data})
    const dispatch = useDispatch();
    let random 
    let imglink
    function randomfunc(){
        
        if(selector.arr.products){
            // console.log("yes")
            random  = selector.arr.products[ Math.floor(Math.random()*selector.arr.products.length)]
            imglink = random.thumbnail
            // setimg(random.thumbnail)
            console.log(imglink);
        }
    } 
    console.log(selector.arr1)
    
    
            // useEffect(()=>{
    randomfunc()
// },[])

      return (
   <>
    {/* { */}
    {/* (selector.arr.products)?   */}
    {/* selector.arr.products.map((res,index)=>{ */}

    
   <div className='front' style={{backgroundImage:'url('+imglink+')'}}>
   {/* <h1>hello</h1> */}
   {/* <img src={random}></img> */}
   {/* {console.log('front')} */}

   </div>
   {/* }):'' */}
   {/* } */}
   </>
  )
}

export default Randomfront
