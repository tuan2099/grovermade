import React , {useState , useEffect} from 'react';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import {withStyles} from '@mui/styles'
import styles from './style'
import { Box , Grid  , CardMedia} from '@mui/material';
import ButtonCustom from '../../components/button/button'
import ProductCard from '../../components/Productcard/Product'
import Dragslider from '../../components/dragSlider/slider'

import { useDispatch , useSelector } from 'react-redux';
import {products} from '../../redux/productsListSlice';
import CircularProgress from '@mui/material/CircularProgress';
const Home = (props) => {


  const {classes } = props;
  const dispatch = useDispatch()
  const productList = useSelector((state) => (state.product));
  const [loading , setLoading] = useState(false)

     


    

      useEffect(() => {
        setLoading(true)
        async function getProduct() {
            try{
              const res = await fetch("https://data-grovermade.herokuapp.com/api/data?_page=1&_limit=9" )
              const data = await res.json()

              // setProductdetail(data)
              dispatch(products(data));
              console.log(data)
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
      <div style = {{height: '550px' 
                    , backgroundImage: `url('https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-walnut-hardwood-desk-shelf-galB-B1.jpg?auto=format&ixlib=python-1.1.2&w=1800&s=3058ea8e1d2395b1603e5d4f81d42b2a")`
                    ,backgroundSize: 'cover',
                    backgroundPosition:'center',
                    
                    }}/>

      <Box component = 'div' >
        <Typography variant="h2" className = {classes.textTitle}>The Desk Shelf System</Typography>
        <Typography variant="subtitle1" className = {classes.textContent}>We’ve designed the Desk Shelf System to help you take your work
          , and your workspace, to the next level.</Typography>
          <Typography variant="subtitle1" className = {classes.textContent} sx = {{color: 'rgb(228, 132, 76)'}}>Now available in solid American hardwood.</Typography>
      </Box>
      
      <Grid item xs= {6} sx = {{borderBottom: '1px solid gray',margin : 'auto'}} >
          <Link to = '/Product' >
                  <CardMedia component = 'img' className = {classes.imageV1} src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-system-animation-C7.jpg?auto=format&ixlib=python-1.1.2&w=900&s=98c53868160b86eec65b33d1145c50ea" 
                  alt = 'ảnh'/>
          <Grid item xs = {4} sx={{margin : '80px auto' , textAlign : 'center' , }} >
            <ButtonCustom label = 'Shop Now'></ButtonCustom>
          </Grid>
          </Link>
      </Grid>

      <Grid item xs = {11} sm = {5}  sx ={{margin: 'auto'}} columnSpacing={{ xs: 8, sm: 8, md: 8 }}>
          <Typography variant="h3" sx = {{textAlign : 'center' , fontWeight : '300'}} className={classes.spacingtext}>A Place for Everything</Typography>
          <Typography variant = 'body1' className={classes.spacingtext}>
            Our Desk Shelf System brings clarity and intention to your workspace.
            It gives you global control of clutter, and a place for everything you need to work,
              from No. 2 pencils to dual monitors.
          </Typography>
          <Typography variant = 'body1' className={classes.spacingtext}>
          We started by elevating our screens to improve ergonomics,
           while also creating ample space for storage.
            We designed subtle organization zones to help everything on your desk live in harmony,
             from your keyboard to your knick-knacks.
          </Typography>
          <Typography variant = 'h4' className={classes.spacingtext} sx = {{textAlign : 'center' , fontStyle : 'italic'}}>
          Simply creating borders and<br/> delineating space visually<br/> organizes your space.
           Feels great,<br/> doesn't it?
          </Typography>
      </Grid>

      <Dragslider/>

      <Grid item xs = {11} sm = {8} sx ={{margin: ' 50px auto 100px'}}>
        <Typography variant="h2" className = {classes.textTitle}>Speedy Transitions</Typography>
        <Grid container item xs = {12} sx = {{margin: '50px 0px 30px 0px' , justifyContent : 'space-between'}} >

              <Grid item xs = {12} sm = {2.5}  >
                <Typography className = {classes.textContent} sx ={{textAlign : 'left', color : 'black'}}>Mouse. Pencil. Keyboard. Stylus. Notebook. Phone. Moving back and forth between your work tools shouldn’t stop your flow.</Typography>
                <br/>
                <Typography className = {classes.textContent} sx ={{textAlign : 'left', color : 'black'}}>Our Desk Shelf system is designed to allow for rapid, seamless transitions between digital and analog.</Typography>
              </Grid> 

              <Grid item xs = {12} sm = {7} sx = {{margin: '50px 0px 0px 0px'}}>
                <CardMedia component="img" src = "https://siteleaf.grovemade.com/uploads/grovemade-desk-shelf-system-animation-C4.gif"/>
              </Grid> 
        </Grid>
        <Typography variant = 'h4' className={classes.spacingtext} sx = {{textAlign : 'center' , fontStyle : 'italic'}}>You shouldn't need to bulldoze<br/> your things out of the way to get<br/> to work.</Typography>
      </Grid>
      
      <Grid container item xs = {11} sm = {10} sx = {{ margin: '50px auto 100px' , justifyContent: 'space-between' , alignItems: 'center' , borderBottom : '1px solid gray', paddingBottom : '100px'}}>
          <Grid item xs = {6}>
            <CardMedia component = 'img' src = 'https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-maple-desk-shelf-galB-F1.jpg?auto=format&ixlib=python-1.1.2&w=900&s=7b871ff1b0265767edeb2e7c9c93e51b'/>
          </Grid>
          <Grid item xs = {4}>
            <Typography className = {classes.textContent} sx ={{textAlign : 'left', color : 'black'}}>So go ahead, get lost in your sketchbook and<br/> then respond to that email without breaking<br/> stride.</Typography>
          </Grid>
      </Grid>

      <Grid item xs = {12} sx = {{borderBottom : '1px solid gray'}}>
              <Grid item xs = {11} sm = {7} sx = {{margin: 'auto'}}>
                    <Typography variant = 'h3' sx = {{textAlign : 'center' , fontWeight : '300'}} className={classes.spacingtext}>Designed For Your Best Work Yet</Typography>
                    <Typography className = {classes.textContent} sx ={{textAlign : 'left', color : 'black' , margin : '20px 0px 50px 0px'}}>We’ve spent years studying how people work—from analyzing at thousands of desks and surveys responses, to conducting in-depth interviews with dozens of hard working people.</Typography>
                    <CardMedia component = 'img' src = 'https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-tray-dark-galB-B2.jpg?auto=format&ixlib=python-1.1.2&w=900&s=ef57d1d77c545067d00c6c2a8cba0ba0'/>
                    <Typography className = {classes.textContent} sx ={{textAlign : 'left', color : 'black' , margin : '20px 0px 50px 0px'}}>Simply put, inspired work starts from an inspired workspace. We know that looks different for each person, so we designed the Desk Shelf system to provide the canvas and functionality for you to create your best work.</Typography>
                    
              </Grid>
      </Grid>

      <Grid item xs= {11} sm = {12} sx ={{margin: 'auto'}}>
          <Typography variant = 'h3' sx = {{textAlign : 'center' , fontWeight : '300'}} className={classes.spacingtext}>Meet the Players</Typography>
          <Typography className = {classes.textContent} sx ={{textAlign : 'center',  margin : '20px 0px 50px 0px'}}>Simply put, inspired work starts from an inspired workspace. We know that looks different for each person, so we designed the<br/> Desk Shelf system to provide the canvas and functionality for you to create your best work.</Typography>
          
      </Grid>
      
      <Grid item container xs = {11}   sx = {{margin: 'auto' }} >

       
        
          {productList.productarr.map((product , index) => {
            
             return (<ProductCard  key = {index} product = {product} ></ProductCard>)   
             
              
          })}
       
          
       
        

      </Grid>
  </>;  
};

export default withStyles(styles) (Home); 
