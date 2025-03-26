import { Box, List, ListItem, Typography } from '@mui/joy';
import { BootstrapButton, ResumeType, ResumeButton } from "../template/theme"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const makeButtons = ({tools}) =>{
    return( 
        <Typography>
        {tools.map((tool)=>{
          return (
          <BootstrapButton key={tool+tool.indexOf()}>{tool}</BootstrapButton>)})}
        </Typography> 
    )}

export const createCertData=(cert)=>{
  const dates = `${cert.date}`;
  const main = <ResumeType sx={{fontWeight: 'bold', paddingBottom:'.2rem', paddingTop: '.2rem',}}>{cert.name}. <i>{cert.issuer}</i></ResumeType>;
  return { dates, main };
}
export const createEduData=(edu)=>{
  const dates = edu.startDate=="" ?<ResumeType>{edu.endDate}</ResumeType>:<ResumeType>{edu.startDate} - {edu.endDate}</ResumeType>
  const main = <ResumeType sx={{fontWeight: 'bold', paddingBottom:'.2rem', paddingTop: '.2rem'}}>{edu.studyType}  {edu.area}<br/> <i>{edu.institution}</i></ResumeType>;
  return { dates, main };
}
export const createWorkData=(work)=>{
  const dates = `${work.startDate} - ${work.endDate}`;
  const main = createMain(work);
  return { dates, main };
}
export const createSkillsData=(skills)=>{
  const dates = skills.name;
  const main = <ResumeType sx={{ paddingBottom:'.2rem', paddingTop: '.2rem',}}>{skills.keywords.join(", ")}</ResumeType>;
  return { dates, main };
}

export const createMain=(work)=>{
  return (
    <Box>
      <ResumeType sx={{fontWeight: 'bold', paddingTop: '.2rem',}}>
        {work.position}  <i>{work.name}</i>
      </ResumeType>
      <ResumeType lineHeight={1}>
        {work.summary}
      </ResumeType>
        <List>
          { work.highlights.map((h,i)=>{
            return(<ListItem key={`work-${i}`} sx={{padding:'.1rem', lineHeight:'50%'}}> <ResumeType level='body-sm' lineHeight={1}><KeyboardArrowRightIcon sx={{fontSize:'small'}}/>{h}</ResumeType></ListItem>)
          }) }
        </List>
        <ResumeType sx={{ paddingBottom:'.75rem'}}> Skills: {work.tools.map((tool, i)=>{return(<ResumeButton key={`rb-${i}`}>{tool}</ResumeButton>)})} </ResumeType>
    </Box>)
}