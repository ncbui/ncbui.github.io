import { Typography } from '@mui/joy';
import { BodySheets } from '../template/theme';

export default function About() {
  return (
    <BodySheets>
      <Typography sx={{color:'inherit'}}> Hi, I'm Cam. I build cloud native software and pipelines.  </Typography>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography sx={{color:'inherit'}}>
        Recently, I was a software consultant at Thoughtworks.
        </Typography>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography sx={{color:'inherit'}}>
        I also
        <List>
          <ListItem>
            <ListItemText primary="can be found building soil in gardens" />
          </ListItem>
          <ListItem>
            <ListItemText primary="draw, paint, and sculpt" />
          </ListItem>
          <ListItem>
            <ListItemText primary="boulder indoors and " />
          </ListItem>
        </List>
         </Typography>
    </BodySheets>
  );
}