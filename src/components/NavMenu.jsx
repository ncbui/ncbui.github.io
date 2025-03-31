import { Link } from 'react-router-dom';
import { List, ListSubheader } from '@mui/joy';
import { GitHub, LinkedIn, PhotoSizeSelectActual } from '@mui/icons-material';
import { NavHeader, NavName, NavTitleText, NavSheets, NavSocials, NavContent, NavLinkList, NavLinkListItem, NavSocialsListItem } from '../template/theme';

export default function NavMenu() {
  return (
    <NavSheets>
      <List>
        <NavHeader id="navHeader">
          <ListSubheader sx={{'@media (max-width: 760px)' : {margin: 0, padding: 0}}}>
            <NavName level="h1" variant ='h1'>
              <Link to="/"> Cam Bui </Link>
            </NavName>
          </ListSubheader>
          <NavTitleText level="h5"> Platform DevOps Engineer </NavTitleText>
        </NavHeader>
        <NavContent>
          <NavSocials> 
            <NavSocialsListItem button='true' component={Link} to="https://www.linkedin.com/in/cambui/" target="_blank" rel="noopener noreferrer">
              <LinkedIn sx={{fontSize:'2.5rem', '@media (max-width: 760px)' : {fontSize:'2rem'}}}/>
            </NavSocialsListItem >
            <NavSocialsListItem button='true' component={Link} to="/https://github.com/ncbui">
              <GitHub sx={{fontSize:'2.5rem', '@media (max-width: 760px)' : {fontSize:'2rem'}}}/>
            </NavSocialsListItem>
            <NavSocialsListItem button='true' component={Link} to="/art">
              <PhotoSizeSelectActual sx={{fontSize:'2.4rem', marginLeft:'.2rem', marginRight:0, '@media (max-width: 760px)' : {fontSize:'2rem'}}}/>
            </NavSocialsListItem>
          </NavSocials>
          <NavLinkList>
            <NavLinkListItem button='true' component={Link} to="/about">
              about
            </NavLinkListItem >
            <NavLinkListItem button='true' component={Link} to="/work">
              experience
            </NavLinkListItem>
            <NavLinkListItem button='true' component={Link} to="/game">
              game
            </NavLinkListItem>
          </NavLinkList>
        </NavContent>
      </List>
    </ NavSheets>
  );
}