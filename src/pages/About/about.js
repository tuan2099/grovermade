import React ,  {useState , useEffect} from 'react';
import {CardMedia ,Grid , Typography} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

import { withStyles } from '@mui/styles';
import style from './style';





const About = (props) => {
    const {classes } = props;

    const [loading , setLoading] = useState(false)


   

    if(loading){
      
      return <div>
              <div style = {{opacity:'0.5', background: '#000',width:' 100%',height:'100%',zIndex:'10',top:  '0',left:'0',position: 'fixed' }}></div>
              <h1 style={{position : 'fixed' , top : '50%' ,left : '50%' , transform : 'translate(-50% , -50%)' , zIndex : '99'}}><CircularProgress /></h1>
            </div>
    }


  return <>


    <Grid item xs = {12} sm = {12} >
        <Grid item className = {classes.background}></Grid>

    </Grid>
  

    <Grid item xs = {11} sm = {4} sx = {{margin: '80px auto 0px' }}  >
        <Typography className = {classes.textTitle} sx = {{margin : '50px 0px' , textAlign : 'center' ,}} variant = 'h4'>Find What Matters</Typography>
        <Typography className = {classes.textContent} sx = {{textAlign : 'center' ,}} variant = 'body1'>Now in our 10th year of existence in our hometown of Portland, Oregon, we reflected on who we are and what makes us Grovemade. Here is our story</Typography>

    </Grid>

    <Grid item  xs={11} sm = {11} sx = {{margin : 'auto'}}>
      <Grid item container xs={11} sm = {11} sx = {{justifyContent : 'space-between' , margin : '120px auto' , borderTop : '1px solid gray' ,paddingTop : '120px' }}>

        <Grid item xs={12} sm={5}>
          <CardMedia component = 'img' src= "https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-about2017-B1-01.png?auto=format&ixlib=python-1.1.2&w=700&s=c185004921f295fd816bed080af1b620" /> 
        </Grid>
        <Grid item xs = {12} sm = {5} sx = {{lineHeight : '2'}}>
          The seeds were planted a decade ago by pure chance when I moved my custom furniture business into a humble workshop backing up to the railroad tracks. Across the street in a run down home we called the “Fight Club House” lived enthusiastic entrepreneur Joe Mansfield. He was somehow running a very successful laser engraving and digital art business out of a spare bedroom. We soon became friends and would often throw a football around in the street—endlessly tossing creative ideas back and forth dreaming up the next big thing. One hot day in the summer of 2009, Grovemade was born. There was no business plan or much deliberation, only a moment where we went all in to “make cool stuff and have fun doing it”. We never expected it would turn into what it is today, with global reach and a great crew of fun-loving, hard-working trail blazers.</Grid>
        
      </Grid>
      
      <Grid item xs = {11} sm = {7} sx = {{textAlign : 'left' , margin : "auto" , lineHeight : "1.5"}}>
      Over the last eight years, we’ve been on a winding path to navigate the chaos of the human experience. Through luck, skill, and hard work we have been able to carve out our own version of happiness, with no investors breathing down our necks. It hasn’t been easy, and we have nearly gone under a few times, but we embrace the journey, learn, and get better. The challenge never ends, yet here we are, a team aligned and pushing hard to make great product on our own terms.
      </Grid>
      <Grid item xs = {2} sm = {2} sx = {{margin : " 60px auto"}}>
      <CardMedia component = "img" src = "https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fken-A1.png?auto=format&ixlib=python-1.1.2&w=200&s=8161a7782440835b56dc1fc7af139853"/>

      </Grid>
      <Grid item xs={12} sm = {5} sx = {{margin : '60px auto' , fontStyle : 'italic'}}>
        <Typography className = {classes.textTitle} variant = 'h3' > "The beginning was two friends and our spirit to create. Now we are so much more, a team."</Typography>
      </Grid>

      <Grid container item xs = {11} sm = {8} style = {{justifyContent : 'space-between' , margin : 'auto'}}>
        <Grid item xs = {12} sm = {7}>
            <Typography className = {classes.textContent}>Grovemade resides in a 5000 ft2 former auto repair shop in the Central Eastside Industrial District, nine blocks from the Willamette River. Natural light streams in through the windows and a cool breeze rolls in through the wide open garage doors. Our typical day begins with the whole team huddling up at 8AM sharp. Portland native Victor Nguyen gets us started with a round of enthusiastic applause and random noise making. He goes through his production updates and gives everyone a chance to speak. Then he motions us to put our hands in the middle and leads a loud cheer “1-2-3, TEAM!!!”. So starts the day.</Typography>
            <br/>
            <Typography className = {classes.textContent}>We hustle to our desks and workbenches. We do design, manufacturing, customer service, finance, and marketing all under one roof—there are many different kinds of work to do and so little time to do it.</Typography>  
        </Grid>
        <Grid item xs = {11} sm = {4}>
            <CardMedia component = "img" src = "https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-about2017-D1.jpg?auto=format&ixlib=python-1.1.2&w=500&s=2e4f616665217c1e3208b6995aca6750"/>
            <CardMedia component = "img" src = "https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-about2017-C1.jpg?auto=format&ixlib=python-1.1.2&w=500&s=a482a00fe6a2435ff912c705fd9fee74" />
        </Grid>
      </Grid>

     
    </Grid>
  
  
  </>;
};

export default withStyles(style) (About);
