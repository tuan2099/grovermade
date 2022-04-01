import React , {useState , useEffect } from 'react';
import {Grid , Typography , CardMedia , Button } from '@mui/material'
import ButtonCustom from '../../components/button/button';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Cart = (props) => {
 

  const [productInCart , setProductInCart] = useState([]);
  const [total , setTotal] = useState();


  let totalPrice = 0;


  useEffect(() => {
    getProduct()
} , [])


const getProduct = async () => {
  try{
    const res = await fetch("https://data-grovermade.herokuapp.com/api/cartitem")
    const data = await res.json()
    console.log(data)
    setProductInCart(data)
    data.map((priceTotal) => {
     return totalPrice += priceTotal.qty * Number(priceTotal.price.replace("$" , ""));
    });
    setTotal(totalPrice);

  } catch (error){
      console.log(error)
  }
}

if( productInCart.length === 0 ){
  return <Grid item xs = {11} sm = {6} sx = {{margin : '0px auto 200px' , textAlign : 'center ' , paddingTop : '100px'}}>
            <CardMedia  component = 'img' src = 'https://tse4.mm.bing.net/th?id=OIP.jDf0JJHgmMlOUA0iQLLtZgAAAA&pid=Api&P=0&w=288&h=161'/>  
            <br/>
            <br/>
            <br/>
 
              <Link to = '/' >
            <ButtonCustom label = "SHOW NOW"/>
              </Link>
         </Grid>
}



const deleteProduct = async (id  ) => {
  let isDelete = window.confirm('Are you sure you want to delete this product')
  if(isDelete) {
    await axios.delete(`https://data-grovermade.herokuapp.com/api/cartitem/${id}`)
  }
  getProduct()
}


const increase = async (id ) => { 
  const result = await axios.get(`https://data-grovermade.herokuapp.com/api/cartitem/${id}`)
  result.data.qty += 1
    const updateQty = {...result.data , qty : result.data.qty}
    await axios.put(`https://data-grovermade.herokuapp.com/api/cartitem/${result.data.id}` , updateQty )
  getProduct()
}


const decrease = async (id) => { 
  const result = await axios.get(`https://data-grovermade.herokuapp.com/api/cartitem/${id}`)
  result.data.qty -= 1
    const updateQty = {...result.data , qty : result.data.qty}
    if(result.data.qty <= 0 ) {
      deleteProduct(id)
    } else {
      await axios.put(`https://data-grovermade.herokuapp.com/api/cartitem/${result.data.id}` , updateQty )
    }
  getProduct()
}

  return <>
        <Grid  item xs = {11} sm = {8} sx = {{margin : 'auto' , textAlign : 'center '}}>
      <Typography variant = 'h3' sx = {{padding : '200px 0px 50px' , }}>My Cart</Typography>
      <Link to = '/Payment'>
          <ButtonCustom  label = 'CONTINUE TO CHECK OUT'></ButtonCustom>
      </Link>
    {productInCart.map((product , index) => {
      return (
          <>
      <Grid key = {index}
          item container 
          xs = {11}
          sm = {11}
          sx = {{paddingBottom  : '30px' , margin : '160px auto 30px ', alignItems : 'center',justifyContent : 'space-between' , borderBottom : '1px solid gray'}}>
          
          
          <Grid item xs = {11} sm = {3} sx = {{margin : 'auto'}}>
            <CardMedia  component = 'img' src = {product.img1}/>
          </Grid>



          <Grid item container xs = {11} sm = {8} sx = {{textAlign : 'left' ,justifyContent : 'space-between'}}>
            <Grid item xs = {11} sm = {6}>


              <Typography sx = {{lineHeight : '2'}}>
                <span style = {{fontWeight : 'bold' , fontSize : '20px' , fontStyle : 'italic'}}>Product Name :
                </span> 
                 {product.name}
              </Typography>


              <Typography sx = {{lineHeight : '2'}}>
                    <Typography> 
                      <span style = {{fontWeight : 'bold' , fontSize : '20px' , fontStyle : 'italic'}}>Color :
                      </span> 
                      {product.color}
                    </Typography>

                    <Typography>
                      <span style = {{fontWeight : 'bold' , fontSize : '20px' , fontStyle : 'italic'}}>Size :
                      </span>
                       {product.size}
                    </Typography>

              </Typography>


              <Typography sx = {{lineHeight : '2'}}>
                 <span style = {{fontWeight : 'bold' ,
                                  fontSize : '20px' ,
                                  fontStyle : 'italic'}}>Quantity :
                  </span> 
                  <Button onClick = {() => {decrease(product.id , index)}}>-</Button>
                  {product.qty}
                  <Button onClick = {() => {increase(product.id)} }>+</Button>
                  

              </Typography>
             
             
             
              <Typography sx = {{lineHeight : '2' , color : '#DC3545'}}>
                Ships by 2/18/2022
              </Typography>
            </Grid>

            <Grid item xs = {11} sm = {1.8}>     
              <Typography sx = {{lineHeight : '5' , fontWeight : 'bold' , textAlign : 'right '}}>
                Price : {product.price} $
              </Typography>


              <Button variant = 'contained' 
                color = 'error'
                onClick={() => deleteProduct(product.id)}
                label = 'Remove'
                sx ={{textAlign : 'right '}} >REMOVE
              </Button>              
              
            </Grid>
          </Grid>
      </Grid>

      
      </>


      )
    })}
    <Grid item container xs = {11} sm = {11} sx = {{justifyContent : 'space-between'}} >
          <Grid item xs = {2} sm = {3}> <Typography variant="h5" sx = {{fontWeight : 'bold'}}>TOTAL :</Typography> </Grid>
          <Grid item xs = {2} sm = {3}><Typography variant="h5">{total} $</Typography> </Grid>

      </Grid>
      <Grid item container xs = {11} sm = {11} sx = {{ padding : '100px 0px'}} >
          <Typography variant="body1" style={{color: '#DC3545'}}>INTERNATIONAL ORDERS: Customs fees are not included in the shipping costs, and must be paid fully by receiver upon import. </Typography>

      </Grid>
    </Grid>
    
  </>;
};

export default Cart;
