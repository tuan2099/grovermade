import React , {useState , useEffect}from 'react';
import {BrowserRouter as Router ,Route, Routes, Navigate, Link } from 'react-router-dom';
import {Grid , Typography} from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/About/about';
import Product from './pages/Product/Product';
import Productdetail from './pages/Productdetail/productdetail';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/footer';
import Infomation from './components/informationCard/infomation';
import Notfound from './pages/Notfound';
import Payment from './pages/payment/payment';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Informationoder from './pages/information_order/information_oder'
function App() {

  const [infor , setInfor] = useState([]);

  const getInfor = async () => {
    try{
      const res = await fetch("https://data-grovermade.herokuapp.com/api/new?_limit=3&_page=1")
      const data = await res.json()
      setInfor(data)
      
    } catch (error){
        console.log(error)
    }
  }


  useEffect(() => {
    getInfor();
  } , [])



  return (
    <>
      <Navbar/>

        <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/Product' element = {<Product/>}></Route>
        <Route path = '/About' element = {<About/>}></Route>
        <Route path = '/Cart' element = {<Cart/>}></Route>
        <Route path = '/Payment' element = {<Payment/>} ></Route>
        <Route path = '/Productdetail/:ProductID' element = {<Productdetail/>}>

        </Route>
        <Route path = '/infomationOder' element = {<Informationoder/>}></Route>
        <Route path = '*' element = {<Notfound/>}></Route>
        <Route path = '/login' element = {<Login/>}></Route>
        <Route path = 'register' element = {<Register/>}></Route>

        </Routes>
        
        
        
        <Typography variant = 'h4' sx ={{fontFamily: 'Noto Serif Display , serif !important' , textAlign : 'center' }}>Further Reading</Typography>
        <Grid item container xs ={11}  sx = {{margin : '50px auto' , justifyContent : 'space-between'}} spacing = {1}>
            
            {infor.map(info => (

            <Infomation info = {info}/> 
            ))}
            
        </Grid>

        <Footer/>
    </>
  );
}

export default App;
