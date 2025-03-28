
import * as resume from '../../resume.json'
import { Table, TableContainer, TableBody } from '@mui/material';
import { makeWorkRow, makeEduRow, makeCertRow, makeHeader, makeSkillsRow } from '../common/work';

export default function WorkExperience () { 
    return (
      <TableContainer sx={{ width: '100%', overflowX: 'auto'}}>
        <Table aria-label="work and experience" sx={{width:'inherit'}} > 
          <TableBody>
            {makeHeader("Experience")}
            {makeWorkRow(resume.work)}
            {makeHeader("Skills")}
            {makeSkillsRow(resume.skills)}
            {makeHeader("Education and Certificates")}
            {makeCertRow(resume.certificates)}
            {makeEduRow(resume.education)}
          </TableBody>
        </Table>
    </TableContainer>
    )
}