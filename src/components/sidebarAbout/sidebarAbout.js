import React from 'react';
import {Typography, Box , Grid  , CardMedia} from '@mui/material';
import {Link} from 'react-router-dom';

import { withStyles  } from '@mui/styles';
import style from './style';


const SidebarAbout = (props) => {

    const {classes , hoverCloseNav} = props
  return <>
    <Grid onMouseLeave={hoverCloseNav} className =  'navbar1' container xs = {11} sx = {{margin : 'auto' , justifyContent : 'space-between'  }}>
       <Grid item xs = {5} container sx = {{ justifyContent : 'space-between'}}>
        <Grid item xs = {2} className = 'navbar2'>
            <Link to = '/'><Typography className = {classes.textTitle} variant = 'h4'>About</Typography></Link>
            <Link to =  '/'><Typography  className={classes.textContent}>Out Story</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Origin</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Ours Home</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Visit us</Typography></Link>
        </Grid>
        <Grid item xs = {3}>
            <Link to = '/' ><Typography className = {classes.textTitle} variant = 'h4'>Journal</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Customer Stories</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Design Stories</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Product Highlights</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Behind the Scenes</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Material Focus</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>View All</Typography></Link>

        </Grid>
        <Grid item xs = {2}>
        <Link to = '/'><Typography className = {classes.textTitle} variant = 'h4'> Connect</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Support</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Instagram</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Facebook</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>Pinterest</Typography></Link>
            <Link to = '/'><Typography className={classes.textContent}>LinkedIn</Typography></Link>
            
        </Grid>
        </Grid>
        <Grid item xs = {4}  sx ={{padding : '90px 0px'}}>
            <CardMedia component = 'img' src = "https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-about2017-I1.jpg?auto=format&ixlib=python-1.1.2&w=700&s=b51e131ac3ad9ccc842f2df6b0c563cc"/>
        </Grid>

    </Grid>
  
  </>;
};

export default withStyles(style) (SidebarAbout) ;
