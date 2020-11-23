import React, { useEffect, useState } from 'react';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { Page } from 'react-pdf';


import pdf from './react.pdf';
function PDFView() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log(numPages);
  }

  const showNext=()=>{
  if(pageNumber<numPages)
  {    
  setPageNumber(pageNumber+1);
  }
  else
  {
      setPageNumber(pageNumber);
  }
  }

  const showPrev=()=>{
    if(pageNumber>1)
    {    
    setPageNumber(pageNumber-1);
    }
    else
    {
        setPageNumber(pageNumber);
    }
    }

    

  return (
    <>
    <nav className='navbar'>
        <h3>PDF Viewer</h3>
       <button className='btn' onClick={showPrev}>
           <i className="fas fa-arrow-left"></i>Prev
       </button>
       <button className='btn'>
           Next<i className="fas fa-arrow-right" onClick={showNext}></i>
       </button>
       <div className='pdf-info'>
       Page<span id='page-no'>{pageNumber}</span> 
       Of<span id='page-count'>{numPages}</span>
       </div>
    </nav>
   <div className='pdf-container'>
   <Document 
     className='pdf-viewer'
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
      <Page className='page' pageNumber={pageNumber} 
      scale={2} />
      </Document>
   </div>
    
    </>
  );
}

export default PDFView;