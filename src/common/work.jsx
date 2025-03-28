import { Link } from 'react-router-dom';
import { NavTitleText, WorkRow, WorkDateCell, WorkDate, WorkBodyCell, HeaderCell, WorkPosition, WorkList, WorkListItem, LinkIcon, WorkFab } from '../template/theme';
import { downloadPdf } from './resume';

export const makeWorkRow=(work)=>{
    return( 
      work.map((w)=>{
        return (
        <WorkRow key={w.endDate}>
          <WorkDateCell>
            <WorkDate> {w.startDate}-{w.endDate}</WorkDate>
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
              <WorkPosition sx={{fontSize:'95%'}}>
              {a.studyType}  {a.area}. <i>{a.institution}</i>
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
              <WorkPosition sx={{fontSize:'95%'}} >
              {a.name} <i>{a.issuer}</i>
              </WorkPosition>
            </WorkBodyCell>    
        </WorkRow>
    )}))}

    export const makeSkillsRow = (skills) =>{
      return( skills.map((category)=>{
          return (
          <WorkRow key={category.name} >
              <WorkDateCell>
                <WorkDate> {category.name} </WorkDate>
              </WorkDateCell>
              <WorkBodyCell >
                <WorkPosition sx={{fontSize:'95%'}}>
                  {category.keywords.join(', ')}
                </WorkPosition>
              </WorkBodyCell>    
          </WorkRow>
      )}))}

    export const makeHeader = (section) =>{
      return(
        <WorkRow>
          <HeaderCell colSpan={4}>
            {section==="Experience" ?
            <NavTitleText>{section} <WorkFab variant="extended" onClick={downloadPdf}>Detailed PDF</WorkFab></NavTitleText> 
            :
            <NavTitleText>{section}</NavTitleText> 
            }
            </HeaderCell>
        </WorkRow>
      )
    }