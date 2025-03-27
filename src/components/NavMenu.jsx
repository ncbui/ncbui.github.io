import { Link } from 'react-router-dom';
import { Typography, List, ListSubheader } from '@mui/joy';
import { GitHub, LinkedIn, PhotoSizeSelectActual } from '@mui/icons-material';
import { NavHeader, NavName, NavTitleText, NavSheets, NavSocials, NavContent, NavLinkList, NavLinkListItem } from '../template/theme';

export default function NavMenu() {
  return (
    <NavSheets>
      <List>
        <NavHeader id="navHeader">
          <ListSubheader>
            <NavName level="h1" variant ='h1'>
              <Link to="/"> Cam Bui </Link>
            </NavName>
          </ListSubheader>
          <NavTitleText level="h5"> Platform DevOps Engineer </NavTitleText>
        </NavHeader>
        <NavContent>
          <NavSocials> 
            <Typography>
              <Link to="https://www.linkedin.com/in/cambui/" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{fontSize:'2.5rem', '@media (max-width: 760px)' : {fontSize:'2rem'}}}/></Link>
              <Link to="https://github.com/ncbui" target="_blank" rel="noopener noreferrer"><GitHub sx={{fontSize:'2.5rem', '@media (max-width: 760px)' : {fontSize:'2rem'}}}/></Link>
              <Link to="/art"><PhotoSizeSelectActual sx={{fontSize:'2.4rem', marginLeft:'.2rem', '@media (max-width: 760px)' : {fontSize:'2rem'}}}/></Link>
            </Typography>
          </NavSocials>
          <NavLinkList>
            <NavLinkListItem>
                <Typography level='body-lg'>
                  <Link to="/" >about</Link>
                </Typography>
            </NavLinkListItem >
            <NavLinkListItem>
              <Typography level='body-lg'>
                <Link to="/work" >  work  </Link>
              </Typography>
            </NavLinkListItem>
            <NavLinkListItem>
              <Typography level='body-lg' >
                <Link to="/resume">  resume  </Link>
              </Typography>
            </NavLinkListItem>
            <NavLinkListItem>
              <Typography level='body-lg' >
                <Link to="/game">  game  </Link>
              </Typography>
            </NavLinkListItem>
          </NavLinkList>
        </NavContent>
      </List>
    </ NavSheets>
  );
}