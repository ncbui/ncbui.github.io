import * as resume from '../../resume.json'
import { Paper, TableBody, TableHead } from '@mui/material';
import { ResumeContainer, ResumeFab, ResumeTable, WorkSheets } from '../template/theme';
import { downloadPdf, MakeSectionRow, makeSectionHeader, makeTableHead } from '../common/resume';

export default function Resume() {
  return (
    <WorkSheets>
       <ResumeContainer component={Paper}>
        <ResumeFab variant="extended" onClick={downloadPdf}>Download</ResumeFab>
        <ResumeTable 
          id='container'  
          aria-label="a dense table"
          minWidth={380}
          >
          <TableHead>
            { makeTableHead(resume.basics) }
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
