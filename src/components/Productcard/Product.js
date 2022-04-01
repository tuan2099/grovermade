import React from 'react';
import { Input , Grid  , CardMedia , Typography , Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { withStyles } from '@mui/styles';
import style from './style';



const ProductCard = (props) => {
  const {classes , product} = props;
  return <>
      
    <Grid item xs = {12} sm = {3.5} sx = {{margin : 'auto'  , padding : '130px 0px' ,}}>
      <Link to = {`/Productdetail/${product.id}`}  >
      <Grid item className={classes.backgroundImage}
       sx = {{
        '&:hover' : {
          transition : '0.2s',
          
          backgroundImage : `url(${product?.img?.img2})`
      },
         backgroundImage : `url(${product?.img?.img1})`}}></Grid>
      <Typography className={classes.text} variant = 'body1'>{product.name}</Typography>
      <Typography className={classes.text} variant = 'body1'>{product.price}  $</Typography>
    </Link>
    </Grid>
  </>;
};

export default withStyles(style) (ProductCard);
