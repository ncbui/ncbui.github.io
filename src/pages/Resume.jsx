import * as resume from '../../resume.json'
import generatePDF from 'react-to-pdf';
import { Box, Paper, TableBody, TableHead } from '@mui/material';
import { HeaderCell, ResumeContainer, ResumeCell, ResumeFab, ResumeName, ResumeRow , ResumeSubtitle, ResumeLink, ResumeTable, ResumeTitleText, ResumeType,  WorkSheets, ResumeDateCell } from '../template/theme';
import { createCertData, createEduData, createSkillsData, createWorkData } from '../common/resume';

const options = {
    filename: 'resume.pdf',
    page: {
      margin: 10,
      marginTop:5,
    }
  };

const getTargetElement = () => document.getElementById('container');
const buildPdf = () => generatePDF(getTargetElement, options);
const downloadPdf = () => window.open("./static/resume.pdf")


export default function Resume() {

  const MakeSectionRow = (type, details)=> {

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
      const makeSectionHeader = (header) => {
        return (
          <ResumeRow colSpan={3}>
            <HeaderCell colSpan={2}>
              <ResumeTitleText> {header} </ResumeTitleText>
            </HeaderCell>
        </ResumeRow>
        )
      }
      const makeTableHead = () => {
        return (
          <ResumeRow colSpan={3}>
          <HeaderCell colSpan={3}> 
                 <ResumeName > 
                   {resume.basics.name}
                 </ResumeName>
                 <ResumeTitleText> 
                   {resume.basics.label}
                 </ResumeTitleText>
                 <ResumeSubtitle>
                   {resume.basics.summary}
                 </ResumeSubtitle>
               <Box align='right' >
              { resume.basics.profiles.map((p) => {
                   return (
                   <ResumeTitleText key={p.network}>
                     <ResumeLink to={p.url}>
                     {p.network}: {p.username} 
                     </ResumeLink>
                     <br/>
                   </ResumeTitleText>)})
                   }
                 <ResumeTitleText>
                   <ResumeLink to={resume.basics.url}>
                   ncbui.github.io
                 </ResumeLink>
               </ResumeTitleText>
              </Box>
          </HeaderCell>
          </ResumeRow>
        )
      }

  return (
    <WorkSheets>
       <ResumeContainer component={Paper}>
        <ResumeFab variant="extended" onClick={downloadPdf}>Download</ResumeFab>
        <ResumeFab variant="extended" onClick={buildPdf} disabled>Build</ResumeFab>
        <ResumeTable 
          id='container'  
          aria-label="a dense table"
          >
          <TableHead>
            { makeTableHead() }
          </TableHead>
          <TableBody>
          { makeSectionHeader('Skills & Tooling') }
          { MakeSectionRow('skills', resume.skills) }
          { makeSectionHeader('Work') }
          { MakeSectionRow('work', resume.work) }
          { makeSectionHeader('Certificates') }
          { MakeSectionRow('certs', resume.certificates) }
          { makeSectionHeader('Education') }
          { MakeSectionRow('edu', resume.education) }
      </TableBody>
    </ResumeTable>
  </ResumeContainer>
</WorkSheets>
  );
}
