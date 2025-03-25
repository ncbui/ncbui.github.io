import { Link } from 'react-router-dom';
import { Typography, List, ListItem, ListSubheader } from '@mui/joy';
import { GitHub, LinkedIn, PhotoSizeSelectActual } from '@mui/icons-material';
import { NavSubtitle, NavName,  NavTitleText, NavSheets, NavSocials } from '../template/theme';


export default function NavMenu() {
  return (
    <NavSheets>
      <List sx={{width:'20vw', }}>
        <List sx={{display:'flex', flexDirection:'col', width:'20rem', '@media (max-width: 780px)' : {flexDirection:'row', justifyContent:'space-between'}}}>
        <ListSubheader sx={{width:'20rem', '@media (max-width: 780px)' : {width:'100vw'}}}>
          <NavName level="h1" variant ='h1'>
            <Link to="/"> Cam Bui </Link>
          </NavName>
        </ListSubheader>
        <ListItem>
          <NavTitleText level="h5"> Platform DevOps Engineer </NavTitleText>
        </ListItem>
        </List>
        <List sx={{ '@media (max-width: 780px)' : {flexDirection: 'row', justifyContent:'start', m:0, p:0}}}>
        <NavSocials >
            <Typography sx={{width:'20vw', verticalAlign:'top', '@media (max-width: 780px)': {m:0, flexDirection: 'row'} }}>
              <Link to="https://www.linkedin.com/in/cambui/" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{fontSize:'2.5rem', '@media (max-width: 780px)' : {fontSize:'2rem'}}}/></Link>
              <Link to="https://github.com/ncbui" target="_blank" rel="noopener noreferrer"><GitHub sx={{fontSize:'2.5rem', '@media (max-width: 780px)' : {fontSize:'2rem'}}}/></Link>
              <Link to="/art"><PhotoSizeSelectActual sx={{fontSize:'2.5rem', marginLeft:'.2rem', '@media (max-width: 780px)' : {fontSize:'2rem'}}}/></Link>
            </Typography>
          </NavSocials>
          <List sx={{'@media (max-width: 780px)' : {flexDirection: 'row',}}}>
          <ListItem >
              <Typography level='body-lg'>
                <Link to="/" >about</Link>
              </Typography>
          </ListItem >
          <ListItem>
            <Typography level='body-lg'>
              <Link to="/work" >  work  </Link>
            </Typography>
          </ListItem>
          <ListItem >
            <Typography level='body-lg' >
              <Link to="/resume">  resume  </Link>
            </Typography>
          </ListItem>
          </List>
        </List>
      </List>
    </ NavSheets>
  );
}