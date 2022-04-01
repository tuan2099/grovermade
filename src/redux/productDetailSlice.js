import {createSlice} from '@reduxjs/toolkit';


export const productdetailSlice  = createSlice({
    name : 'productdetail' ,
    initialState : {
        productnewarr : []
    } , 
    reducers  : {
        productsdetail : (state , action) => {
            state.productnewarr = action.payload
        } ,
     
    }
})

export const {productsdetail } = productdetailSlice.actions;
export default  productdetailSlice.reducer;