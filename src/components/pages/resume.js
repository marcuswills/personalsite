import React from 'react';
import SinglePagePDF from "../pdf/singlepage";
import resumePDF from "../pdf/files/ResumeMWills.pdf";
import PdfWorker from './elements/pdfWorker';

const resume = () => {
  return (
    <div className='resume-container'>
      <PdfWorker className='single-page-pdf' pdfDir={resumePDF} />
    </div>
  );
};
  
export default resume;