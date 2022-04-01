import   {useState , useEffect} from 'react';
import { FormControl , RadioGroup , Radio , FormControlLabel,  Alert,Snackbar , Grid , Typography  , CardMedia , TextField , Button} from '@mui/material';
import {Link} from 'react-router-dom';
import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {postPayment} from '../../redux/paymentSlice';
import {useNavigate } from 'react-router-dom'
 import axios from 'axios';

const Payment = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [total , setTotal] = useState();
  const  [addToCartSucess , setAddToCartSucess] = useState(false)
  const [products , setProduct] = useState([])
  const [values , setValues] = useState({
    email : '' ,
    country : '' ,
    firstName : '' ,
    lastName : '' ,
    company : '' ,
    address : '' ,
    apartment : '' ,
    city :'' ,
    postalCode : '' ,
    phone : '' ,
    paymentMethod : ''
  })
  let totalPrice = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps


  const getProduct = async () => {
    try{
      const res = await fetch("https://data-grovermade.herokuapp.com/api/cartitem")
      const data = await res.json()
      setProduct(data)
      console.log(data)
      data.map((priceTotal) => {
       return totalPrice += priceTotal.qty * Number(priceTotal.price.replace("$" , ""));
      });
      setTotal(totalPrice);
  
    } catch (error){
        console.log(error)
    }
  }

  
 
  useEffect(() => {
    getProduct()
  } , [])

  const handleClose = () => {
    setAddToCartSucess(false)
  }

  
  const checkProduct = async () => {
     const res = await axios.get(`https://data-grovermade.herokuapp.com/api/order/`)
     .then(res => {
      const result = res.data;
      if(result.length > 0) {
        window.alert('you already have oder, please wait for admin to approve')
      } else {
        dispatch(postPayment({values , products , total}))
        navigation('/infomationOder')
      }
    })
   } 


  const handelPayment = (e) => {
    e.preventDefault()
    checkProduct()
  }
 
  // AXfr62TDq3VK-SoZILpXarY9JmaGlmxAeJofh8QwjUO-7lBI_l8MPMouacyeYNCGuOan2_Y0x1CY4r8L
  

  return <>
    <Snackbar open={addToCartSucess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Your request has been sent, please wait for approval !
        </Alert>
      </Snackbar>


    <Grid justifyContent = "space-between" container item xs = {11} sm = {9} sx = {{margin : 'auto' , paddingTop : '100px' }}>
        <Grid xs = {11} sm = {6} sx = {{margin : ' auto' }}>
            <Grid xs = {11} sm = {6} sx = {{margin : '50px auto' }}>
                <CardMedia component = 'img' src = "https://cdn.shopify.com/s/files/1/0041/0802/files/checkout_logo_.png?125"/>
            </Grid>
            <form style = {{lineHeight :'4'}} onSubmit = {handelPayment}>
                <Typography variant="h6">Contact information</Typography>
                <br/>
                <TextField value = {values.email} onChange = {(e) => setValues({ ...values, email : e.target.value })}  size = "small" fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <Typography variant="h6">Shipping address</Typography>
                <br/>
                <TextField value = {values.country} onChange = {(e) => setValues({ ...values, country: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Country" variant="outlined" />
                  <Grid container justifyContent = "space-between">
                    <Grid>

                    <TextField value = {values.firstName} onChange = {(e) => setValues({ ...values, firstName: e.target.value })} size = "small" fullWidth id="outlined-basic" label="First name" variant="outlined" />
                    </Grid>
                    <Grid>

                    <TextField value = {values.lastName} onChange = {(e) => setValues({ ...values, lastName: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Last name" variant="outlined" />
                    </Grid>

                  </Grid>
                <TextField value = {values.company} onChange = {(e) => setValues({ ...values, company: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Company(optional)" variant="outlined" />
                <TextField value = {values.address} onChange = {(e) => setValues({ ...values, address: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Address" variant="outlined" />
                <TextField value = {values.apartment} onChange = {(e) => setValues({ ...values, apartment: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Apartment , suite , etc(optional)" variant="outlined" />
                <Grid container justifyContent = "space-between">
                    <Grid>

                    <TextField value = {values.city} onChange = {(e) => setValues({ ...values, city: e.target.value })} size = "small" fullWidth id="outlined-basic" label="City" variant="outlined" />
                    </Grid>
                    <Grid>
                    <TextField value = {values.postalCode} onChange = {(e) => setValues({ ...values, postalCode: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Postal code" variant="outlined" />
                    </Grid>

                  </Grid>
                  <TextField value = {values.phone} onChange = {(e) => setValues({ ...values, phone: e.target.value })} size = "small" fullWidth id="outlined-basic" label="Phone" variant="outlined" />
                  <br/>
                  <Typography variant="h6">Payment method</Typography>
                 
                 

                  <FormControl component = "fieldset">
                            <RadioGroup name = "paymentMethod" 
                                        aria-label = "Payment Method"
                                        onChange = {(e) => setValues({...values ,paymentMethod : e.target.value})} 
                            >     
                                <FormControlLabel label = 'Pay on receipt' value = 'Pay on receipt' control = {<Radio/>}></FormControlLabel>
                                <FormControlLabel label = 'Spitre' value = 'Spitre' control = {<Radio/>}></FormControlLabel>
                                <FormControlLabel label = 'Cash' value = 'Cash' control = {<Radio/>}></FormControlLabel>
                                
                                </RadioGroup>
                                    
                        </FormControl>
                <Grid>
                  <Button type = "submit"  variant="contained" sx = {{backgroundColor : '#555 !important'}}>Payment now</Button>
                  <Link to = '/Cart'>
                    <Button sx={{color : 'black !important' }}>Return to Cart</Button>
                  </Link>
                </Grid>
                
            </form>
        </Grid>
        <Grid item xs = {11} sm = {5} sx = {{margin : '50px auto ', }}>
          {products.map((product) => {
            return <>
              <Grid item container justifyContent = "space-between" alignItems = 'center' xs = {11} sm = {12} textAlign = 'right'>
                <Grid xs = {3} sm = {3}><CardMedia component = 'img' src = {product.img1}/></Grid>
                <Grid xs = {3} sm = {4}><Typography>{product.name} {product.qty}</Typography></Grid>
                <Grid xs = {3} sm = {3}><Typography>$ {product.price}.00</Typography></Grid>
              </Grid>
            </>
          })}
              <Grid xs = {11} sm = {12} item container justifyContent = "space-between" sx = {{borderTop : '1px solid gray'}}>
                <Typography  sx = {{lineHeight : '4'}}>Subtotal</Typography>
                <Typography sx = {{lineHeight : '4'}}>${total}</Typography>

              </Grid>
              <Grid xs = {11} sm = {12} item container justifyContent = "space-between">
                <Typography sx = {{lineHeight : '4'}}>Shipping</Typography>
                <Typography sx = {{lineHeight : '4'}}>free shipping</Typography>

              </Grid>
              <Grid xs = {11} sm = {12} item container justifyContent = "space-between" sx = {{borderTop : '1px solid gray'}}>
                <Typography sx = {{lineHeight : '4' , fontWeight : 'bold'}}>Total</Typography>
                <Typography sx = {{lineHeight : '4'  , fontWeight : 'bold' }}>${total}</Typography>
              </Grid>
          

        </Grid>

    </Grid>
          
  </>;
};

export default Payment;
