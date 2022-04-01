import { withStyles } from '@mui/styles';
import style from './style';
import {Link} from 'react-router-dom'

import { Input , Grid  , CardMedia , Typography , Button} from '@mui/material';
import FacebookIcon  from '@mui/icons-material/Facebook';
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  TwitterIcon from '@mui/icons-material/Twitter';

import ButtonCustom from '../button/button'



const Footer = (props) => {

    const {classes} = props

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }



  return <>
        <Grid item xs = {11} sx = {{margin : 'auto'}} className = {classes.backgroundColor}>
            <CardMedia component = 'img' className = {classes.img} src = 'https://siteleaf.grovemade.com/uploads/gm_logo_small.png' />
            <Typography variant = 'h3' className={classes.title1}>Design Inspires</Typography>
            <Typography variant = 'body1' className = {classes.content1}>Build your dream workspace, so you can get your best work done.</Typography>
        </Grid>




        <Grid item onClick = {scrolltoTop}  xs = {11} sx = {{textAlign : 'right' , margin : ' 30px auto' }}>
       <ButtonCustom label = 'Go up'  ></ButtonCustom>
       </Grid>




        <Grid item container xs = {11} sx = {{margin : ' 80px auto'}}>

            <Grid item xs = {11} sm = {2}>
                <Typography  variant="h5"><Link  className = {classes.title2} to = '/'>Shop</Link></Typography>
                <Typography  variant="h5"><Link className = {classes.title2} to = '/'>About</Link></Typography>
                <Typography  variant="h5"><Link className = {classes.title2} to = '/'>Journal</Link></Typography>
                <Typography  variant="h5"><Link className = {classes.title2} to = '/'>Suport</Link></Typography>
                <Typography  variant="h5"><Link className = {classes.title2} to = '/'>Covid19 - info</Link></Typography>
                <Typography  variant="h5"><Link className = {classes.title2} to = '/'>Oder Status</Link></Typography>
                <Typography  variant="h5"><Link className = {classes.title2} to = '/'>Corporate Sale</Link></Typography>

            </Grid>

            <Grid item xs = {11} sm = {3}>
                <Typography variant = 'h6' className = {classes.title1} sx = {{color : 'black' , textAlign : 'left' , letterSpacing : '2px ' , fontWeight : 'bold' , paddingBottom : '10px'}}>
                        Newsletter Signup
                </Typography>
                <Typography variant = 'body2' className = {classes.content2}>
                        Sign up to our Newsletter to hear about new product releases, learn about our design process, and everything else going on behind the scenes at Grovemade.
                </Typography>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <Input sx = {{fontStyle : 'italic' , fontFamily :'Noto Serif Display , serif '}} placeholder="Enter your Email"></Input><Button sx = {{color : 'black'}}>Submit</Button><br/>
                <br/>
                <br/>

                <label style =  {{fontStyle: 'italic' , fontFamily :'Noto Serif Display , serif '}}>Please complete this required field.</label>
            </Grid>
            
        </Grid>
        
        <Grid container item xs = {11} sx = {{margin : 'auto', justifyContent : 'space-between'}}>
            <Grid container item xs = {2} spacing = {3}> 
                <Grid item ><Link  to = '/'><FacebookIcon sx ={{color : 'black'}}/></Link></Grid>
                <Grid item ><Link  to = '/'><InstagramIcon sx ={{color : 'black'}}/></Link></Grid>
                <Grid item ><Link  to = '/'><TwitterIcon sx ={{color : 'black'}}/></Link></Grid>
            </Grid>
            <Grid container item xs ={5} className = {classes.content2} sx = {{justifyContent : 'space-between'}}>
                <Grid item>©2020 Grovemade</Grid>
                <Grid item>Terms & Conditions</Grid>
                <Grid item>Privacy Policy</Grid>
                <Grid item>Site by Department</Grid>

            </Grid>
        </Grid>
  </>
};

export default withStyles(style)(Footer);
