import axios from "axios";
import { json } from "react-router-dom";
import aud from './click tone.wav'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");




export const fetchapi = createAsyncThunk('add to cart', async () => {
    const response = await axios.get("https://dummyjson.com/products")

    return response.data
})

export const Slice = createSlice({
    name: 'ecommerce',
    initialState: {
        cartval: 0,
        arr: [],
        playAudio: '',

        cartarr:
            localStorage.getItem("cartArr") !== null
                ? JSON.parse(localStorage.getItem("cartArr"))
                :
                [],
        loader: true
    },
    reducers: {
        Add: function (state, action) {

            state.cartarr = [...state.cartarr, action.payload]
           
            //  state.playAudio = aud
           let oo = document.createElement('audio')
           oo.src = aud
           console.log(oo) 
           oo.play()

        },
        Delete: function (state, action) {
            console.log(action.payload)
            state.cartarr = (state.cartarr.filter((item, index) => {


                return action.payload != index
            }))
            let oo = document.createElement('audio')
            oo.src = aud
            console.log(oo) 
            oo.play()
 




        },

        AddToLocalStorage: function (state) {
            let x = localStorage.setItem("cartArr", JSON.stringify(state.cartarr));
            console.log(x)
        }

    },

    extraReducers: {
        [fetchapi.pending]: function (state, action) {
            state.loader = false

        },
        [fetchapi.fulfilled]: function (state, action) {
            state.loader = true
            state.arr = action.payload
            //   console.log(state.arr)
        },
        [fetchapi.rejected]: function (state, action) {


        },


    }


})

const sliceRed = Slice.reducer
export default sliceRed;
export const { Add, Delete, AddToLocalStorage } = Slice.actions