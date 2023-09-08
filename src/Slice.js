import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



export const fetchapi = createAsyncThunk('add to cart', async () => {
    const response = await axios.get("https://dummyjson.com/products")

    //   console.log(response.data.products)
    //   setProductData(response.data.products)
    return response.data
})

export const Slice = createSlice({
    name: 'ecommerce',
    initialState: {
        cartval: 0,
        arr: [],
        cartarr: [],
        loader:true
    },
    reducers: {
        Add: function (state, action) {
            console.log('add')
            state.cartarr = [...state.cartarr, action.payload]

        },
        Delete: function (state, action) {
            console.log(action.payload)
            state.cartarr = state.cartarr.filter((item,index)=>action.payload!=index)
   
            // state.cartarr.find((cartItem) => {return cartItem.id === index})
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


        }
    }


})

const sliceRed = Slice.reducer
export default sliceRed;
export const { Add, Delete } = Slice.actions