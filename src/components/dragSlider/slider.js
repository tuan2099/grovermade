import React from 'react';
import Slider from 'react-touch-drag-slider';
import styled, { createGlobalStyle } from 'styled-components'

import {Grid,} from '@mui/material'
import images from './imageSlider'

const GlobalStyles = createGlobalStyle
 ` * {
    box-sizing: border-box;
  }
  html,body {
    padding: 0;
    margin: 0;

  }`

// The slider will fit any size container, lets go full screen...
const AppStyles = styled.main
 ` height: 90vh;
  width: 95vw;
  margin: 'auto'
  `

  

const DragSlider = () => {
  return <>
         <GlobalStyles />
      <AppStyles>
        <Slider>
          {images.map(({ url, title }, index) => (
            // <img src={url} key={index} alt={title} />
            <Grid key={index} item container xs = {12} sm ={10}   
            style = {{backgroundImage: `url(${url})` ,
                      backgroundRepeat: 'no-repeat' ,
                      backgroundSize : 'cover'  }}>
                <Grid item 
                      sx = {{color: 'white' ,
                       fontWeight : '600' ,
                       backgroundColor : 'black' ,
                       width : '100px !important' ,
                       height : '100px !important' ,
                       borderRadius : '50px' ,
                       fontStyle : 'italic'    }}> Drag </Grid>
            </Grid>
          ))}
        </Slider>
      </AppStyles>
  </>;
};

export default DragSlider;
