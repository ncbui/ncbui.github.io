import { Link } from 'react-router-dom';
import {Table, TableContainer, TableBody} from '@mui/material';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';
import { BootstrapButton, NavTitleText, WorkRow, WorkDateCell, WorkDate, WorkBodyCell, HeaderCell, WorkPosition, WorkList, WorkListItem } from '../template/theme';
import { useTheme } from '@mui/styles';
import * as resume from "../template/resume.json"
import { Typography } from '@mui/joy';

export default function WorkExperience () { 
    const theme = useTheme()

    const makeWorkRow=(work)=>{
      return( 
        work.map((w)=>{
          return (
          <WorkRow key={w.endDate} sx={{width:'inherit'}}>
            <WorkDateCell sx={{m:0, padding:0, width: '7rem'}}>
              <WorkDate> {w.startDate} - {w.endDate}</WorkDate>
            </WorkDateCell>
            <WorkBodyCell sx={{ m:0, p:'0 1rem', width: '90%'}} >
                <WorkPosition > 
                <Link to={w.url} target="_blank" rel="noopener noreferrer">
                  {w.position}  <i>{w.name}</i>
                  {w.url ? <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'1rem'}}/> : '' }
                </Link> 
                </WorkPosition >
              <WorkList sx={{ m:0 }}>
                { w.summary ? <WorkListItem>{w.summary}</WorkListItem> : '' }
                { w.tools ? <WorkListItem sx={{m:0}}>{makeButtons(w)}</WorkListItem> : '' }
              </WorkList>
            </WorkBodyCell>
          </WorkRow>
      )}))}

    const makeButtons = ({tools}) =>{
        return( 
            <Typography>
            {tools.map((tool)=>{
              return (
              <BootstrapButton key={tool+tool.indexOf()}>{tool}</BootstrapButton>)})}
            </Typography> 
        )}

    const makeEduRow = (exp) =>{
      return( exp.map((a)=>{
          return (
          <WorkRow key={a.endDate} >
              <WorkDateCell sx={{ m:0, padding:0, width: '7rem'}}>
                <WorkDate> {a.endDate} </WorkDate>
              </WorkDateCell>
              <WorkBodyCell sx={{m:0, p:'0 1rem', width: '90%'}}>
                <WorkPosition>
                  <Link to={a.url} target="_blank" rel="noopener noreferrer">{a.studyType}  {a.area}. {a.institution}</Link> 
                  <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'80%'}}/>
                </WorkPosition>
              </WorkBodyCell>    
          </WorkRow>
      )}))}

    const makeCertRow = (cert) =>{
      return( cert.map((a)=>{
          return (
          <WorkRow key={a.name} >
              <WorkDateCell sx={{ m:0, padding:0, width: '7rem'}}>
                <WorkDate> {a.date} </WorkDate>
              </WorkDateCell>
              <WorkBodyCell sx={{m:0, p:'0 1rem', width: '90%'}} >
                <WorkPosition >
                  <Link to={a.url} target="_blank" rel="noopener noreferrer">{a.name} {a.issuer}</Link> 
                  <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'80%'}}/>
                </WorkPosition>
              </WorkBodyCell>    
          </WorkRow>
      )}))}

      const makeHeader = (section) =>{
        return(
          <WorkRow>
            <HeaderCell colSpan={2} sx={{m:'.5rem 0', padding:0}}>
              <NavTitleText>{section} </NavTitleText>
            </HeaderCell>
          </WorkRow>
        )
      }
    
    return (
      <TableContainer sx={{  width: '100%', overflowX: 'auto'}}>
        <Table aria-label="work and experience" sx={{width:'inherit'}} > 
          <TableBody>
            {makeHeader("Experience")}
            {makeWorkRow(resume.work)}
            {makeHeader("Certificates")}
            {makeCertRow(resume.certificates)}
            {makeHeader("Education")}
            {makeEduRow(resume.education)}
          </TableBody>
        </Table>
    </TableContainer>
    )
}