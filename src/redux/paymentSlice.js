import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const postPayment = createAsyncThunk(
    "payment/postPayments" , 
    async ({values , products , total}) => {
        const newProduct = products.map(product => ({
            id : product.id,
            name : product.name ,
            price : product.price,
            img1 : product.img1 ,
            qty : product.qty ,
        }))
       await fetch("https://data-grovermade.herokuapp.com/api/order" , {
            method: "POST" ,
            headers : {
                Accept: "application/json" ,
                'Content-Type': 'application/json'} ,
            body: JSON.stringify({
                email : values.email ,
                country : values.country ,
                firstName : values.firstName ,
                lastName : values.lastName ,
                company : values.company ,
                address : values.address ,
                apartment : values.apartment ,
                city :values.city ,
                postalCode : values.postalCode ,
                phone : values.phone ,
                paymentmethod : values.paymentMethod ,
                itemincart :  newProduct,
                totalPrice  : total
            }),
        }).then((res) => res.json())
        
    }
)

export const paymentSlice = createSlice({
    name : 'payment' ,
    initialState :{
        value : [],
        status : null
    },
    extraReducers :  {
        update : (state , action) => {
            state.value.push(action.payload)
        },
        [postPayment.pending] : (state , action) => {
            state.status = 'loading';
        },
        [postPayment.fulfilled] : (state , action) => {
            state.posts = action.payload;
            state.status  = 'complete';
        },
        [postPayment.rejected] : (state , action) => {
            state.status = 'rejected';
        }
    }
})

export const {update} =  paymentSlice.actions;
export default paymentSlice.reducer 