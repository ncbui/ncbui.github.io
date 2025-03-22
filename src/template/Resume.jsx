import { Link } from 'react-router-dom';
import * as resume from '../../resume.json'
import generatePDF from 'react-to-pdf';
import { useTheme } from '@mui/styles';
import { Box, Table,  Typography } from '@mui/joy';
import { TableBody, TableCell, Paper, TableRow, TableHead } from '@mui/material';
import { HeaderCell, NavName, NavSubtitle, NavTitleText, ResumeContainer, ResumeFab, ResumeRow , ResumeType,  WorkSheets } from './theme';
import { createCertData, createEduData, createWorkData } from '../constants/common';

const options = {
    filename: 'resume.pdf',
    page: {
      margin: 5
    }
  };

const getTargetElement = () => document.getElementById('container');
const downloadPdf = () => generatePDF(getTargetElement, options);


export default function Resume() {
  const theme = useTheme()

  const MakeSectionRow = (type, details)=> {

    const makeRowByType = () => {
      if(type=='certs' || type=='cert'){
        return(details.map((c)=>{
          const { dates, main } = createCertData(c)
          return(
          <TableRow colSpan={5} key={`cert-${dates}`} sx={{verticalAlign:'top'}} >
            <TableCell colSpan={1} scope="row" align="right"> <ResumeType sx={{padding: '0 1rem', fontWeight: 'bold', paddingTop: '.2rem',}}> {dates} </ResumeType> </TableCell>
            <TableCell colSpan={4}> {main} </TableCell>
          </TableRow>)
        }))
      }
      if(type=='edu'){
        return(details.map((e,i)=>{
          const { dates, main } = createEduData(e)
          return(
          <TableRow colSpan={5} key={`edu-${i}`} sx={{verticalAlign:'top'}} >
            <TableCell colSpan={1} align="right" padding="" scope="row" > <ResumeType sx={{padding: '0 1rem', fontWeight: 'bold', paddingTop: '.2rem',}}> {dates} </ResumeType>  </TableCell>
            <TableCell colSpan={4}> {main} </TableCell>
          </TableRow>)
        }))
      }
      if(type=='work'){
        return(details.map((w)=>{
          const { dates, main } = createWorkData(w)
          return(
          <TableRow colSpan={5} key={dates} sx={{verticalAlign:'top'}} >
            <TableCell colSpan={1} scope="row" align="right"> <ResumeType sx={{padding: '0 1rem', fontWeight: 'bold', paddingTop: '.2rem',}}> {dates} </ResumeType>  </TableCell>
            <TableCell colSpan={4}> {main} </TableCell>  
          </TableRow>)
        }))
      }}
    return ( makeRowByType() )
    }
      const makeSectionHeader = (header) => {
        return (
          <ResumeRow sx={{border: 0}}>
            <HeaderCell colSpan={5} sx={{margin:0, padding:0, border: 0,}}>
              <NavTitleText sx={{ color: theme.palette.dark1, fontSize:'1.2rem', paddingTop: '.2rem', paddingBottom: '.2rem'  }}> {header} </NavTitleText>
            </HeaderCell>
        </ResumeRow>
        )
      }
      const makeTableHead = () => {
        return (
        <TableRow >
            <TableCell colSpan={3}>
              <Box sx={{ width: '25rem', marginTop:'2rem', marginBottom:'1.5rem' }}>
              <NavTitleText sx={{ color: theme.palette.dark1, fontSize:'1.2rem',  }}>
                <NavName sx={{color:theme.palette.dark1, display:'block', lineHeight:1, fontSize:'2.5rem'}}> 
                  Cam Bui 
                </NavName>
                <NavTitleText sx={{color:theme.palette.dark1, lineHeight:1, fontSize:'1.2rem'}}> 
                  Fullstack Devops Engineer
                </NavTitleText>
                <NavSubtitle sx={{color:theme.palette.dark1, }}>
                  Experienced software engineer with <br/> expertise in GitOps and full-stack development. 
                </NavSubtitle>
              </NavTitleText>
              </Box>
            </TableCell>
            <TableCell colSpan={2} sx={{ fontSize:'1.1rem',lineHeight:1, }}>
              <Box align='right' sx={{marginBottom:'4.7rem', marginRight:'1.2rem', '& a': { color:theme.palette.dark1 }}}>
                { resume.basics.profiles.map((p) => {
                  return (<Typography key={p.network}><Link to={p.url}>{p.network}: {p.username} </Link><br/></Typography>)})
                  }
                <Link to={resume.basics.url}>ncbui.github.io</Link>
              </Box>  
            </TableCell>
          </TableRow>)
      }

  return (
    <WorkSheets component={Paper} sx={{ padding:'1rem', height:'100vh', }} >
      <ResumeFab variant="extended" onClick={downloadPdf}>Download</ResumeFab>
       <ResumeContainer id='container' component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            { makeTableHead() }
          </TableHead>
          <TableBody>
          { makeSectionHeader('Work') }
          { MakeSectionRow('work', resume.work) }
          { makeSectionHeader('Certificates') }
          { MakeSectionRow('certs', resume.certificates) }
          { makeSectionHeader('Education') }
          { MakeSectionRow('edu', resume.education) }
      </TableBody>
    </Table>
  </ResumeContainer>
</WorkSheets>
  );
}
