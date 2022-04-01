import { configureStore } from "@reduxjs/toolkit";

import productListreducer from './productsListSlice'
import productdetailreducer from './productDetailSlice'
import paymentReducer from './paymentSlice'
export default configureStore ({
    reducer : {
        product: productListreducer ,
        productdetail : productdetailreducer,
        payment : paymentReducer
    }
})