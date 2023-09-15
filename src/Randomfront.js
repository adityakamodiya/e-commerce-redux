import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Randomfront() {
    const [imglink, setImgLink] = useState('')
    const selector = useSelector((state) => { return state.Data })
    let randomImg;

    useEffect(() => {
        randomImg = randomFunc()
    }, [selector])
    

    
        async function randomFunc() {
            console.log(selector.arr.products);
            const random = await selector.arr.products[Math.floor(Math.random() * selector.arr.products.length)]
            // setImgLink(random.thumbnail)
            return random.thumbnail
        }
    

    return (
        <>
            <div className='front' style={{ backgroundImage: 'url(' + randomImg + ')' }}>
                <div className='random-front-details'>
                    <h1></h1>
                </div>
            </div>

        </>
    )
}

export default Randomfront
