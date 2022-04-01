import React , {useEffect , useState}  from 'react';
import { Typography , Grid  , CardMedia, Select , Button , Snackbar , FormControl , InputLabel ,MenuItem , Alert} from '@mui/material';
import {withStyles} from '@mui/styles';
import style from './style';
import DragSlider from '../../components/dragSlider/slider';
import { useDispatch , useSelector} from 'react-redux';
import axios  from 'axios';
import {styled} from '@mui/material/styles'


const ButtonCustom = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'black',
  borderColor: 'black',
  
  '&:hover': {
    backgroundColor: 'black',
    borderColor: 'black',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'black',
    borderColor: 'black',
  },
  '&:focus': {
    boxShadow: 'black',
  },
});
const Productdetail2 = (props) => {



  const {classes , product} = props;
  const dispatch = useDispatch();
  const addprToCart = useSelector((state) =>state.addToCart);

  const  [addToCartSucess , setAddToCartSucess] = useState(false)
  const [valueSelected , setValueSelected] = useState('')
  const [valueSelected2 , setValueSelected2] = useState('')



  useEffect(() => {
    async function getProduct() {
        try{
          const res = await fetch("https://data-grovermade.herokuapp.com/api/data")
          const data = await res.json()

        } catch (error){
            console.log(error)
        }
    }
    getProduct(valueSelected , valueSelected2)
  
} ,[])


const handleChangeSize = (event ) => {
  event.preventDefault()
  setValueSelected(event.target.value);
}

const handleChangeColor = (event ) => {
  event.preventDefault()
  setValueSelected2(event.target.value);
}

  

  let qty = 1;
 
  // let isExidting  = false;
  const addItemToCart = async (a , b , c , d , e , f) => {
    
   

      const result  = await axios.get("https://data-grovermade.herokuapp.com/api/cartitem");
      let isExidting = false ;
      
      // if(result.data.length === 0) {
      //   const order = {name : a , price : b , qty : qty , img1 : c , size : d , color : e , id : f}
      //   await axios.post("https://data-grovermade.herokuapp.com/api/cartitem" , order);
  
      // } else 
      // if {
        result.data.map((oderItem , index) => {
         if(a === oderItem.name && b === oderItem.price && c === oderItem.img1  ){
               
            isExidting = true 
            if(isExidting === true){
              window.alert("Products already in the cart , we will update your quantity")
              oderItem.qty += 1
              const updateorder = { ...oderItem , qty : oderItem.qty , }
              axios.put(`https://data-grovermade.herokuapp.com/api/cartitem/${oderItem.id}`  , updateorder);
            }
  
            
          } 
         
        })
      // }
      if( isExidting === false ) {
        const neworder = {name : a , price : b , qty : qty , img1 : c , size : d , color : e}
        await axios.post("https://data-grovermade.herokuapp.com/api/cartitem" , neworder);
  
      }
      setAddToCartSucess(true)
        
    
    
    
  }
 


  
  const handleClose = (event , reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAddToCartSucess(false);
  }

  

  

  return <>

        <Snackbar open={addToCartSucess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Add Item To Cart Success , go to cart to check !
        </Alert>
      </Snackbar>


      
        <Grid item container xs = {11} sm = {11} sx = {{alignItems : 'center' , margin : 'auto' , paddingTop : '100px' , justifyContent : 'space-between'}} >
                  <Grid item xs = {11} sm = {6} sx = {{margin : ' auto',}}>
                      <CardMedia component = 'img'  src = {product?.img?.img1}/>
                  </Grid> 



                  <Grid item xs = {11} sm = {5} className = {classes.Title} sx = {{margin : ' auto',}}>
                      
                      <Typography className = {classes.Title} variant = 'h4'>{product.name}</Typography>
                      <Typography className = {classes.textcontent} variant = 'body1'>Please chose the size and color after clicking the button</Typography>

                      <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-name-label" className = {classes.textcontentSize} sx = {{   lineHeight : '1 !important' , fontSize : '20px !important'}}> Size</InputLabel>

                          <Select  onChange={handleChangeSize} label="Size" fullWidth labelId="demo-multiple-name-label" id="demo-multiple-name"  value={valueSelected} >
                                        <MenuItem value = {product?.size?.size1} className = {classes.textcontentSize}>{product?.size?.size1}</MenuItem>
                                        <MenuItem value = {product?.size?.size2} className = {classes.textcontentSize}>{product?.size?.size2}</MenuItem>
                                        <MenuItem value = {product?.size?.size3} className = {classes.textcontentSize}>{product?.size?.size3}</MenuItem>
                          </Select>
                      </FormControl>

                      <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-name-label" className = {classes.textcontentSize} sx = {{   lineHeight : '1 !important' , fontSize : '20px !important'}}> Color</InputLabel>

                          <Select  onChange={handleChangeColor} label="Color" fullWidth labelId="demo-multiple-name-label" id="demo-multiple-name"  value={valueSelected2} >
                                        <MenuItem value = {product?.color?.color1} className = {classes.textcontentSize}>{product?.color?.color1}</MenuItem>
                                        <MenuItem value = {product?.color?.color2} className = {classes.textcontentSize}>{product?.color?.color2}</MenuItem>
                                        <MenuItem value = {product?.color?.color3} className = {classes.textcontentSize}>{product?.color?.color3}</MenuItem>
                                        <MenuItem value = {product?.color?.color4} className = {classes.textcontentSize}>{product?.color?.color4}</MenuItem>
                                        
                          </Select>       
                      </FormControl>
                      <Typography variant = 'h5' sx = {{fontWeight : '800'}}>{product.price} $</Typography>

                      <ButtonCustom onClick = {() => addItemToCart( product.name , product.price , product?.img?.img1 , valueSelected , valueSelected2 , product.id)} sx = {{color : "white"}} >ADD TO CARD</ButtonCustom>

                      <Typography  variant = 'body1' className = {classes.Title} sx = {{color: '#f69368'}}>Ships In Four Weeks</Typography>
                  </Grid>
        </Grid>

        <Grid item  xs = {11} sm = {7}  sx = {{margin : '120px auto', }} >
              
              
              <Typography className = {classes.Title} variant = 'h4'>{product?.title?.title1}</Typography>
              <Typography variant = 'body1' className = {classes.textcontent}>{product?.description?.description1}</Typography>

              
              
              
        </Grid>

        <Grid item container xs = {11} sm = {9}sx = {{margin : '120px auto', alignItems : 'center', justifyContent : 'space-between'}}>
          <Grid item xs = {11} sm = {6} sx = {{margin : ' auto',}}>
                  <CardMedia component = 'img' src = {product?.img?.img3}/>
                </Grid>
          <Grid item xs = {11} sm = {4} sx = {{margin : ' auto',}}>
            <Typography className = {classes.Title} variant = 'h4' >{product?.title?.title2}</Typography>
            <Typography variant = 'body1' className = {classes.textcontent}>{product?.description?.description2}</Typography>
          </Grid>
        </Grid>

        <DragSlider/>

        <Grid item container xs = {11} sm = {9}  sx = {{margin : '120px auto', justifyContent : 'space-between' }}>
          <Grid item xs = {11} sm = {4} sx = {{margin : ' auto',}}>
              <Typography className = {classes.Title} variant = 'h4'>{product?.title?.title3}</Typography>
              <Typography variant = 'body1' className = {classes.textcontent}>{product?.description?.description3}</Typography>
          </Grid>
          <Grid item  xs = {11} sm = {7} sx = {{margin : ' auto',}}>
              <CardMedia component = 'img'  src = {product?.img?.img4}/>
          </Grid> 
        </Grid>

        <Grid item container xs = {11} sm = {11} sx = {{margin : '120px auto', alignItems : 'center', justifyContent : 'space-between' , textAlign: 'center'}}>
          <Grid item xs = {11} sm = {3.5} sx = {{margin : ' auto',}}>
            <Grid item >
              <Typography variant = 'h6'>{product?.title?.title6}</Typography>
              <Typography className = {classes.textcontentSize} variant = 'body1'>{product?.description?.description5}</Typography>
              <Typography variant = 'h6'>{product?.title?.title7}</Typography>
              <Typography className = {classes.textcontentSize} variant = 'body1'>{product?.description?.description6}</Typography>
            </Grid>

          </Grid>
          <Grid item xs = {11} sm = {3.5} sx = {{margin : ' auto',}}>
              <Typography variant = 'h6'>{product?.title?.title8}</Typography>
              <Typography className = {classes.textcontentSize} variant = 'body1'>{product?.description?.description7}</Typography>
          </Grid>
          <Grid item xs = {11} sm = {3.5} sx = {{margin : ' auto',}}>
              <Typography variant = 'h6'>{product?.title?.title9}</Typography>
              <Typography className = {classes.textcontentSize} variant = 'body1'>{product?.description?.description8}</Typography>
              <Typography variant = 'h6'>{product?.title?.title10}</Typography>
              <Typography className = {classes.textcontentSize} variant = 'body1'>{product?.description?.description10}</Typography>
          </Grid>


        </Grid>
  </>;
};

export default withStyles(style)(Productdetail2) ;
