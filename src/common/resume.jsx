import { Box, List, ListItem, Typography } from '@mui/joy';
import { BootstrapButton, ResumeType, ResumeButton } from "../template/theme"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { HeaderCell, ResumeContainer, ResumeCell, ResumeFab, ResumeName, ResumeRow , ResumeSubtitle, ResumeLink, ResumeTable, ResumeTitleText,  WorkSheets, ResumeDateCell } from '../template/theme';

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
  const main = <ResumeType sx={{fontWeight: 'bold'}}>{cert.name}. <i>{cert.issuer}</i> </ResumeType>;
  return { dates, main };
}
export const createEduData=(edu)=>{
  const dates = edu.startDate=="" ?<ResumeType>{edu.endDate}</ResumeType>:<ResumeType>{edu.startDate} - {edu.endDate}</ResumeType>
  const main = <ResumeType sx={{fontWeight: 'bold' }}>{edu.studyType}  {edu.area}<br/> <i>{edu.institution}</i> </ResumeType>;
  return { dates, main };
}
export const createWorkData=(work)=>{
  const dates = `${work.startDate} - ${work.endDate}`;
  const main = createMain(work);
  return { dates, main };
}
export const createSkillsData=(skills)=>{
  const dates = skills.name;
  const main = <ResumeType >{skills.keywords.join(", ")}</ResumeType>;
  return { dates, main };
}

export const createMain=(work)=>{
  return (
    <Box>
      <ResumeType level='body-md' sx={{fontWeight: 'bold'}}>
        {work.position}  <i>{work.name}</i>
      </ResumeType>
      <ResumeType level='body-md'>
        {work.summary}
      </ResumeType>
        <List>
          { work.highlights.map((h,i)=>{
            return(
            <ListItem key={`work-${i}`} 
              sx={{padding:'.1rem'}}> 
              <ResumeType level='body-sm'>
                <KeyboardArrowRightIcon sx={{fontSize:'small'}}/>{h}
                </ResumeType>
                </ListItem>)
          }) }
        </List>
        <ResumeType sx={{ paddingBottom:'.75rem'}}> Skills: {work.tools.map((tool, i)=>{return(<ResumeButton key={`rb-${i}`}>{tool}</ResumeButton>)})} </ResumeType>
    </Box>)
}

export const MakeSectionRow = (type, details)=> {
    const makeRowByType = () => {
      if(type=='certs' || type=='cert'){
        return(details.map((c)=>{
          const { dates, main } = createCertData(c)
          return(
          <ResumeRow colSpan={3} key={`cert-${dates}`} >
            <ResumeDateCell> 
              <ResumeType > 
                {dates} 
                </ResumeType> 
              </ResumeDateCell>
            <ResumeCell colSpan={2}> {main} </ResumeCell>
          </ResumeRow>)
        }))
      }
      if(type=='edu'){
        return(details.map((e,i)=>{
          const { dates, main } = createEduData(e)
          return(
          <ResumeRow colSpan={3} key={`edu-${i}`}>
            <ResumeDateCell padding="" > 
              <ResumeType > 
                {dates} 
                </ResumeType>  </ResumeDateCell>
            <ResumeCell colSpan={2}> {main} </ResumeCell>
          </ResumeRow>)
        }))
      }
      if(type=='work'){
        return(details.map((w)=>{
          if (w.name.includes('Sabbatical')) return () => {};
          const { dates, main } = createWorkData(w)
          return(
          <ResumeRow colSpan={3} key={dates} >
            <ResumeDateCell>
              <ResumeType > 
              {dates} 
              </ResumeType>  </ResumeDateCell>
            <ResumeCell colSpan={2}> {main} </ResumeCell>  
          </ResumeRow>)
        }))
      }
      if(type=='skills'){
        return(details.map((w)=>{
          const { dates, main } = createSkillsData(w)
          return(
          <ResumeRow colSpan={3} key={dates}>
            <ResumeDateCell> 
              <ResumeType > 
                {dates} </ResumeType>  </ResumeDateCell>
            <ResumeCell colSpan={2}> {main} </ResumeCell>  
          </ResumeRow>)
        }))
      }
    }
    return ( makeRowByType() )
    }
export const makeSectionHeader = (header) => {
        return (
          <ResumeRow colSpan={3}>
            <HeaderCell colSpan={2}>
              <ResumeTitleText> {header} </ResumeTitleText>
            </HeaderCell>
        </ResumeRow>
        )
      };

      export const makeTableHead = (about) => {
        return (
          <ResumeRow colSpan={3}>
          <HeaderCell colSpan={3}> 
                 <ResumeName > 
                   {about.name}
                 </ResumeName>
                 <ResumeTitleText> 
                   {about.label}
                 </ResumeTitleText>
                 <ResumeSubtitle>
                   {about.summary}
                 </ResumeSubtitle>
               <Box align='right' >
              { about.profiles.map((p) => {
                   return (
                   <ResumeTitleText key={p.network}>
                     <ResumeLink to={p.url}>
                     {p.network}: {p.username} 
                     </ResumeLink>
                     <br/>
                   </ResumeTitleText>)})
                   }
                 <ResumeTitleText>
                   <ResumeLink to={about.url}>
                   ncbui.github.io
                 </ResumeLink>
               </ResumeTitleText>
              </Box>
          </HeaderCell>
          </ResumeRow>
        )
      }
export const downloadPdf = () => window.open("./static/resume.pdf")