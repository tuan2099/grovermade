import React from 'react';
import {Grid  , CardMedia} from '@mui/material';
import {Link} from 'react-router-dom'
import ButtonCustom from '../components/button/button';



const Notdound = () => {
  return <>
        <Grid item xs = {11} sm = {11} sx = {{margin : 'auto'}}>
            <CardMedia component = "img" src = "https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg"/>
            <Link to = '/'><ButtonCustom label = "BACK TO HOME"></ButtonCustom></Link>
        </Grid>
  </>;
};

export default Notdound;
