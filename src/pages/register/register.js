import React from 'react'
import {styled} from '@mui/material/styles'
import {Grid , Typography , TextField  , Button} from '@mui/material'
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

export default function Register() {

  return (
    <>
       <Grid xs = {12} md = {7} sx = {{margin : ' auto' , padding : '160px 0px'} }>
          <Typography variant = 'h1' sx = {{textAlign : 'center'}}>REGISTER </Typography>
          <Typography variant = 'body1'  sx = {{textAlign : 'center' , fontStyle : 'italic' , color : 'gray'}}>Hello ! Please enter your detail</Typography>
          <br/>
          <form style = {{lineHeight : '6'}}>
              <TextField id="email" label="Email" variant="outlined" placeholder = "enter your email" fullWidth/>
              
              <TextField id="password" label="Password" variant="outlined" placeholder = "your password" fullWidth/>
              <TextField id="confirmPassword" label="Confirm Password" variant="outlined" placeholder = "Confirm Password" fullWidth/>
              
          </form>
          <ButtonCustom variant="contained" fullWidth   sx ={{ color: 'white' , backgroundColor : 'black' , fontWeight : 'bold' , borderRadius : '0px'}}>Login</ButtonCustom>
          
          <Typography variant = 'body1'  sx = {{textAlign : 'center' , fontStyle : 'italic' }}>Don't have a account? <Link to = '/login' style = {{color : 'black' , fontWeight : 'bold' , fontFamily: 'Arial'}}>Sign up for free</Link></Typography>
        </Grid> 
    
    </>
  )
}
