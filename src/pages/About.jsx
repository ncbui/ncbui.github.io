import { Typography} from '@mui/joy';
import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { BodySheets } from '../template/theme';

export default function About() {
  return (
    <BodySheets>
      <Typography sx={{color:'inherit'}}> Hi, I'm Cam. I build cloud native software and pipelines.  </Typography>
      <List dense={true}>
          <ListItem>
            <ListItemText primary="Recently, I was a software consultant at Thoughtworks." />
          </ListItem>
        </List>
      <Typography color="inherit">
        I also
      </Typography>
        <List dense={true}>
          <ListItem>
            <ListItemText primary="practice aerial arts, indoor bouldering, and taiji." />
          </ListItem>
          <ListItem>
            <ListItemText primary="can be found building soil in gardens." />
          </ListItem>
          <ListItem>
            <ListItemText primary="draw, paint, and sculpt." />
          </ListItem>
        </List>
    </BodySheets>
  );
}