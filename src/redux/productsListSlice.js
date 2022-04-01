import {createSlice} from '@reduxjs/toolkit';


export const productListSlice  = createSlice({
    name : 'product' ,
    initialState : {
        productarr : []
    } , 
    reducers  : {
        products : (state , action) => {
            state.productarr = action.payload
        }
    }
})

export const {products} = productListSlice.actions;
export default  productListSlice.reducer;