import React , {useState , useEffect} from 'react'
import {styled} from '@mui/material/styles'
import {Grid , Typography , TextField , CardMedia , Button} from '@mui/material'
import {Link} from 'react-router-dom'
import axios from 'axios';

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

export default function Login() {
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")
  const [error , setError] = useState("")

  const handelLogin = (e) => {
    e.preventDefault()
    axios.post("https://data-grovermade.herokuapp.com/api/auth/login", {
      email,
      password
    })
    .then((response) => {
      localStorage.setItem("login" , JSON.stringify({
        userLogin:true,
        token : response.data.access_token,
      }))

    }).catch((err) => {console.log(err)});


  }
  return (
    <>
       <Grid item xs = {12} md = {7} sx = {{margin : ' auto' , padding : '160px 0px'} }>
          <Typography variant = 'h1' sx = {{textAlign : 'center'}}>WELCOME BACK </Typography>
          <Typography variant = 'body1'  sx = {{textAlign : 'center' , fontStyle : 'italic' , color : 'gray'}}>welcome back ! Please enter your detail</Typography>
          <br/>
          <form onSubmit = {handelLogin} style = {{lineHeight : '6'}}>
              <TextField onChange = {(e) => setEmail(e.target.value)} value = {email} id="email" label="Email" variant="outlined" placeholder = "enter your email" fullWidth/>
              
              <TextField onChange = {(e) => setPassword(e.target.value)} value = {password} id="password" label="Password" variant="outlined" placeholder = "your password" fullWidth/>
              
          <ButtonCustom type = "submit" variant="contained" fullWidth   sx ={{ color: 'white' , backgroundColor : 'black' , fontWeight : 'bold' , borderRadius : '0px'}}>Login</ButtonCustom>
          </form>
          
          <Typography variant = 'body1'  sx = {{textAlign : 'center' , fontStyle : 'italic' }}>Don't have a account? <Link to = '/register' style = {{color : 'black' , fontWeight : 'bold' , fontFamily: 'Arial'}}>Sign up for free</Link></Typography>
        </Grid> 
    
    </>
  )
}
