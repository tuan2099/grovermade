import  React , {useState} from 'react';

import {Link} from 'react-router-dom';

import style from './style'
import { withStyles } from '@mui/styles'

import SidebarAbout from '../sidebarAbout/sidebarAbout'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const Navbar = (props) => {


  const {classes} = props
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [togglenav , setTogglenav] = useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
  };

  const hoverOpenNav = () => {
    setTogglenav(true)
  }

  const hoverCloseNav = () => {
    setTogglenav(false)
  }

  return (
    <AppBar position="static"sx = {{position : 'fixed' , zIndex : '999999999999'}} >
      <Container maxWidth="xl" className={classes.customnav} >
        <Toolbar disableGutters >
       
          

          {/* responsive */}
          <Box sx={{ flexGrow: 1.5, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu} sx={{ my: 2,  display: 'block' }}><Link to="/" >Home</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu} sx={{ my: 2,  display: 'block' }}><Link to="Product">Products</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu} sx={{ my: 2,  display: 'block' }}><Link to="/About">About</Link></MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1.5, display: { xs: 'flex', md: 'none' } , letterSpacing: '3.5px' }}
          >
                      <Link className = {classes.palette}  to="/">GROVERMADE</Link>

          </Typography>
          {/* responsive */}


          <Box sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex' } }}>
           
            <Button onClick={handleCloseNavMenu} sx={{ my: 2,  display: 'block' }}><Link className = {classes.palette}  to="/" >Home</Link></Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2,  display: 'block' }}><Link className = {classes.palette}  to="Product">Products</Link></Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2,  display: 'block' , }}><Link  className = {classes.palette}  to="/About">About</Link></Button>

          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1.5 , mr : 2 , display: { xs: 'none', md: 'flex' } , letterSpacing: '3.5px' }}
            
          >
            <Link className = {classes.palette}  to="/">GROVERMADE</Link>
          </Typography>
          <Box >
            <Link className = {classes.cart_icon_custom} to="/Cart">
                <Tooltip title="Go to cart">
                  <IconButton  sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/vectorlightstudio/vectorlightstudio2001/vectorlightstudio200100102/144161554-shopping-cart-icon.jpg" />
                  </IconButton>
                  
                </Tooltip>
                
            </Link>
           
               
          </Box>
        </Toolbar>
        {togglenav ? <SidebarAbout hoverCloseNav={hoverCloseNav}/> : ''}
        
      </Container>
    </AppBar>
  );
};
export default withStyles(style)(Navbar);
