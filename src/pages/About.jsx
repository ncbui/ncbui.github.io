import { Typography } from '@mui/joy';
import { BodySheets } from '../template/theme';

export default function About() {
  return (
    <BodySheets>
      <Typography sx={{color:'inherit'}}>Experienced software engineer with expertise in GitOps and cloud native software development. Passionate about understand developer friction to make room for communication and collaboration.  </Typography>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography sx={{color:'inherit'}}>
        Recently, I was a software consultant at Thoughtworks, working with cross-functional teams to add new data and platform capabilities to existing systems to enhance patient care. 
        I implemented GitOps best practices to enable dev teams to reliably test, deploy, and maintain components of cloud-native data pipelines.
        </Typography>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography sx={{color:'inherit'}}>In the past, I have had opportunity to work as peer health educator in volunteer and internship roles, 
        as IT support in primary schools and startups, as a research assistant in psychology lab, 
        and with processing patient data for a biotech company.</Typography>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography sx={{color:'inherit'}}>In my spare time, I enjoy painting, gardening, and taking pictures of toast.  </Typography>
    </BodySheets>
  );
}