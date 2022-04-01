import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom'
import { Input , Grid  , CardMedia , Typography , Button} from '@mui/material';
import { withStyles } from '@mui/styles';
import style from './style'
const Infomation = (props) => {
 
  const {classes} = props;
  const {  title , content , image} = props.info;
  return <>
        <Grid item xs={12} sm = {3.5} sx ={{backgroundColor : 'whitesmoke' , pading: '0px !important'}}>
          <Link to = '/'>
            <Grid  item className = {classes.backgroundImage} sx = {{backgroundImage : `url(${image})`}}></Grid>
            <Grid item sx = {{padding : '20px' }}> 
            <Typography className = {classes.content}>DESIGN STORY</Typography>
            <Typography className = {classes.content} sx = {{fontFamily: 'Noto Serif Display , serif !important',}} variant = 'h4'>{title}</Typography>
            <Typography className = {classes.content} sx = {{fontFamily: 'Noto Serif Display , serif !important',}}>{content}</Typography>
            <Typography className = {classes.content} sx ={{  textDecoration: 'underline '  }}>READ MORE</Typography>
            </Grid>
          </Link>
        </Grid>
  </>;
};

export default withStyles(style) (Infomation);
