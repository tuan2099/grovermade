import React from 'react';
import {Button , Stack } from '@mui/material'

import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
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

const ButtonCustom = (props) => {

  const { label} = props;
  return <>
    <BootstrapButton variant="contained"  sx ={{ color: 'white' , backgroundColor : 'black' , fontWeight : 'bold' , borderRadius : '0px'}} >{label}</BootstrapButton>
  </>;
};

export default  ButtonCustom;
