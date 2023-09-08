import sliceRed from "./Slice";
const { configureStore } = require("@reduxjs/toolkit");

export const store =  configureStore({
    reducer:{
        Data:sliceRed
    },
})