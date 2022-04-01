import React , {useState , useEffect}from 'react';
import { Box , Grid , Typography  , CardMedia} from '@mui/material';
import { useDispatch , useSelector} from 'react-redux';
import ProductCard from '../../components/Productcard/Product'

import {withStyles} from '@mui/styles'
import style from './style';
import {Link} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {products} from '../../redux/productsListSlice';

const Product = (props) => {

  const {classes} = props
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()
  const productList = useSelector((state) => (state.product));
  useEffect(() => {
    setLoading(true)
    async function getProduct() {
        try{
          const res = await fetch("https://data-grovermade.herokuapp.com/api/data")
          const data = await res.json()

          // setProductdetail(data)
          dispatch(products(data));
    setLoading(false)

        } catch (error){
            console.log(error)
        }
    }
    getProduct()
   
} ,[])

if(loading){
  return <div>
  <div style = {{opacity:'0.5', background: '#000',width:' 100%',height:'100%',zIndex:'10',top:  '0',left:'0',position: 'fixed' }}></div>
  <h1 style={{position : 'fixed' , top : '50%' ,left : '50%' , transform : 'translate(-50% , -50%)' , zIndex : '99'}}><CircularProgress /></h1>
</div>
}
if(!productList){
  return <h1>NO product hear</h1>
}

  return <>
    <Grid item  xs = {12} sm = {12}>
        <Grid item className={classes.background}  xs = {12} >
          <Grid  item className = {classes.titleBackground} >Design Inspires What You Do</Grid>
        </Grid>


    </Grid>
    <Grid item container xs = {11} sm = {11} sx = {{margin : 'auto'}}>
      <Grid item container xs = {11} sm = {11} sx = {{margin : ' 50px auto'}}>

      <Grid item xs = {11} sm = {2}>
        <Link to = '/'><Typography variant  =  'body1' className = {classes.title}>SHOP</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Shop all</Typography></Link>
      </Grid>
      <Grid item xs = {11} sm = {2}>
        <Link to = '/'><Typography variant  =  'body1' className = {classes.title}>MOUSE/DESK PADS</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Desk Pads</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Mouse Pads</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Coasters</Typography></Link>

      </Grid>
       <Grid item xs = {11} sm = {2}>
        <Link to = '/'><Typography variant  =  'body1' className = {classes.title}>STANDS</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Desk Shelves</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Monitor Stands</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Laptop Stands</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Headphone Stands</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>iPhone Docks</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>iPad Stands</Typography></Link>

      </Grid>
       <Grid item xs = {11} sm = {2}>
        <Link to = '/'><Typography variant  =  'body1' className = {classes.title}>TOOL</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Pens</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Stationery</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Notebooks</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Knives</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Trays</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Pen Cups & Planters</Typography></Link>

      </Grid>
       <Grid item xs = {11} sm = {2}>
        <Link to = '/'><Typography variant  =  'body1' className = {classes.title}>KEYBOARD</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Apple Keyboard Tray</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Apple Trackpad Tray</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Wrist Rests</Typography></Link>

      </Grid> 
      <Grid item xs = {11} sm = {2}>
        <Link to = '/'><Typography variant  =  'body1' className = {classes.title}>WALL MOUNTED</Typography></Link>
        <Link to = '/'><Typography className = {classes.content}>Catch-All</Typography></Link>
      </Grid>
      </Grid>
    </Grid>

    
    <Grid item container xs = {11}   sx = {{margin: 'auto' }} >

       
        
          {productList.productarr.map((product , index) => {
            
             return (<ProductCard  key = {index} product = {product} ></ProductCard>)      
          })}
      </Grid>
  </>;
};

export default withStyles(style)( Product);
