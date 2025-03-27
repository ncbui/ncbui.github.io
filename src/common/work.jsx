import { Link } from 'react-router-dom';
import { NavTitleText, WorkRow, WorkDateCell, WorkDate, WorkBodyCell, HeaderCell, WorkPosition, WorkList, WorkListItem, LinkIcon } from '../template/theme';
import { makeButtons } from '../common/resume';

export const makeWorkRow=(work)=>{
    return( 
      work.map((w)=>{
        return (
        <WorkRow key={w.endDate}>
          <WorkDateCell>
            <WorkDate> {w.startDate} - {w.endDate}</WorkDate>
          </WorkDateCell>
          <WorkBodyCell>
              <WorkPosition > 
              <Link to={w.url} target="_blank" rel="noopener noreferrer">
                {w.position}  <i>{w.name}</i>
                {w.url ? <LinkIcon/> : '' }
              </Link> 
              </WorkPosition >
            <WorkList sx={{ m:0 }}>
              { w.summary ? <WorkListItem>{w.summary}</WorkListItem> : '' }
              { w.tools ? <WorkListItem sx={{m:0}}>{makeButtons(w)}</WorkListItem> : '' }
            </WorkList>
          </WorkBodyCell>
        </WorkRow>
    )}))}

  export const makeEduRow = (exp) =>{
    return( exp.map((a)=>{
        return (
        <WorkRow key={a.endDate} >
            <WorkDateCell>
              <WorkDate> {a.endDate} </WorkDate>
            </WorkDateCell>
            <WorkBodyCell>
              <WorkPosition>
                <Link to={a.url} target="_blank" rel="noopener noreferrer">{a.studyType}  {a.area}. {a.institution}</Link> 
                <LinkIcon/>
              </WorkPosition>
            </WorkBodyCell>    
        </WorkRow>
    )}))}

  export const makeCertRow = (cert) =>{
    return( cert.map((a)=>{
        return (
        <WorkRow key={a.name} >
            <WorkDateCell>
              <WorkDate> {a.date} </WorkDate>
            </WorkDateCell>
            <WorkBodyCell >
              <WorkPosition >
                <Link to={a.url} target="_blank" rel="noopener noreferrer">{a.name} {a.issuer}</Link> 
                <LinkIcon/>
              </WorkPosition>
            </WorkBodyCell>    
        </WorkRow>
    )}))}

    export const makeHeader = (section) =>{
      return(
        <WorkRow>
          <HeaderCell colSpan={4}>
            <NavTitleText>{section} </NavTitleText>
          </HeaderCell>
        </WorkRow>
      )
    }