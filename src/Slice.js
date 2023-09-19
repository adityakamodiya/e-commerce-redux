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
        loader: true,
        Quantity: 1,
        QuantityArr: []

    },
    reducers: {
        Add: function (state, action) {
            //   console.log(state.cartarr=action.payload)
            state.cartarr = [...state.cartarr, action.payload]
            // return{ cartarr : [...state.cartarr,action.payload]}
            // state.cartarr({cartarr:[...cartarr,action.payload]})
            console.log(state.cartarr)
            // setPlayers({ players: [...players, name] });
            //    return state;


            //  state.playAudio = aud
            let oo = document.createElement('audio')
            oo.src = aud
            console.log(oo)
            oo.play()

        },
        IncreaseQnt: function (state, action) {
            //    console.log('incr')
               state.cartarr.filter((item,index)=>{
               if( index ==action.payload)
               {                  
                state.Quantity +=1
                console.log(state.Quantity)
           } }) 
        },
        DecreaseQnt: function (state, action) {
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
        Delete_All: function (state, action) {
            state.cartarr = ''
        },

        AddToLocalStorage: function (state) {
            let x = localStorage.setItem("cartArr", JSON.stringify(state.cartarr));
            // console.log(x)
        }

    },

    extraReducers: {
        [fetchapi.pending]: function (state, action) {
            state.loader = false

        },
        [fetchapi.fulfilled]: function (state, action) {
            state.loader = true
            state.arr = action.payload
              console.log(state.arr)
        },
        [fetchapi.rejected]: function (state, action) {


        },


    }


})

const sliceRed = Slice.reducer
export default sliceRed;
export const { Add, Delete, IncreaseQnt, DecreaseQnt, AddToLocalStorage, Delete_All } = Slice.actions