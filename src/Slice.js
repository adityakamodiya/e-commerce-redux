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
        cartarr: []
    },
    reducers: {
        Add: function (state, action) {
            console.log('add')
            state.cartarr = [...state.cartarr, action.payload]

        },
        Delete: function (state, action) {
            console.log(action.payload)
            state.cartarr = state.cartarr.filter((cartItem, index) => {
                return cartItem.id !== action.payload
            })
            // state.cartarr.find((cartItem) => {return cartItem.id === index})
        }
    },
    extraReducers: {
        [fetchapi.pending]: function (state, action) {

        },
        [fetchapi.fulfilled]: function (state, action) {
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