import React , {useState , useEffect} from 'react'
import {   Grid , Typography  , CardMedia , TextField , Button} from '@mui/material';
import { DataGrid  } from '@mui/x-data-grid';
import axios from 'axios';
import {styled} from '@mui/material/styles'
import {Link} from 'react-router-dom'
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

const columns  = [
  {field : "id" , headerName : 'ID Product' , width: 150 , headerAlign: 'center',headerClassName: 'super-app-theme--header', } ,
  {field : 'name' , headerName : 'Product Name' , width : 350  } ,
  {field : 'price' , headerName :  'Price' , width : 120 , headerAlign: 'center',},
  {field : 'qty' , headerName : 'Quantity' , width : 100 , headerAlign: 'center',} ,
  {field : 'note' , headerName : 'Note' , width : 350 , headerAlign: 'center',}
]

function Informationoder(props) {
  const [products , setProduct] = useState([])
  
  useEffect(() => {

    getProduct()
  }, [])

  const getProduct = async () => {
    try{
      const res = await axios.get("https://data-grovermade.herokuapp.com/api/order/")
      .then(res => {
        const result = res.data;
        setProduct(result)
        console.log(result)
        
      })
      
     
      
    } catch (error){
        console.log(error)
    }
   
  }


  
  return (
    
       <>
       

        {products.map(product => {
          return (
            <>
               <Grid xs = {11} sx = {{margin : 'auto' , paddingTop : '100px'}}>


                <Grid xs = {11} md = {7}>
                    <CardMedia component = 'img' src = 'https://assets-global.website-files.com/5b9831a43903e4be2b73ff15/601170601ab2ddec65e2ef10_grovemade%20logo.png' alt = 'logo'/>
                </Grid>


                <Grid xs = {9}  container item sx = {{margin : ' 60px auto'}} justifyContent = 'space-between'>
                  <Grid xs = {6} >
                    <Typography variant = 'h4' sx = {{fontWeight : '600' , fontStyle : 'italic', fontFamily: 'Noto Serif Display , serif !important' , color : 'gray'}}>PLANERGY"</Typography>
                    <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>Boston Office</Typography>
                    <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}> Once Post Office Square , Suite 3600  </Typography>
                    <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>Boston MA , 01209</Typography>
                    <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>USA</Typography>

                </Grid>


                <Grid xs = {4}  >
                  <Typography  variant = 'h4' sx = {{fontWeight : '600' , fontStyle : 'italic', fontFamily: 'Noto Serif Display , serif !important' , color : 'gray'}}>PURCHASE ORDER</Typography>
                  <br/>
                  <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}} >Oder Id : {product.id} </Typography>
                  <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>Date :</Typography>
                </Grid>

          </Grid>

          
          <Grid xs = {9}  container item sx = {{margin : ' 60px auto'}} justifyContent = 'space-between'>
            <Grid xs = {6}>
              <Typography variant = 'h4' sx = {{fontWeight : '600' , fontStyle : 'italic', fontFamily: 'Noto Serif Display , serif !important' , color : 'gray' }}>SUPLIDER"</Typography>
              <br/>
              <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>First Name : {product.firstName} </Typography>
              <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>  Last Name  : {product.lastName}  </Typography>
              <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>Email : {product.email} </Typography>

            </Grid>
            <Grid xs = {4} >
              <Typography  variant = 'h4' sx = {{fontWeight : '600' , fontStyle : 'italic', fontFamily: 'Noto Serif Display , serif !important' , color : 'gray'}}>DELIVERY ADDRESS</Typography>
              <br/>
              <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>Address : {product.address}  </Typography>
              <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>Phone : {product.phone} </Typography>
            </Grid>

          </Grid>

          <Grid xs = {9} sx = {{margin : 'auto'}}>

            <Typography variant = 'h4' sx = {{fontWeight : '600' , fontStyle : 'italic', fontFamily: 'Noto Serif Display , serif !important' , color : 'gray'}}>NOTE</Typography>
            <Typography variant = 'body1' sx = {{  fontStyle : 'italic' , color : 'gray' , padding : '10px'}}>{product.note ? product.note : 'There are no notes for this product'}</Typography>
          </Grid>
          <br/>
          <br/>
          <br/>

          <Grid xs = {9} sx = {{margin : 'auto'}}>

              <DataGrid sx = {{height: 300, width: '100%' , fontSize : '18px' , '& .super-app-theme--header': {
          backgroundColor: 'gray' , color : 'white',
        }, }} 
                columns = {columns}
                
                rows = {product?.itemincart}  
              />  

          </Grid>

          
            <ButtonCustom sx = {{margin : '120px 0px'}} fullWidth>
                <Link to = '/' style = {{color : 'white' , fontWeight : 'bold' , fontFamily: 'Arial'}}>
                
                Back to Home
                </Link>
              
              </ButtonCustom> 
           </Grid>
           

           </>
          )
        })}
         

       

</>

  )

}



export default Informationoder
