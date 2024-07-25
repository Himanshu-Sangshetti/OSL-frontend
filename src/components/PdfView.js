import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import "../styles/pdfView.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfView = () => {
    const { filePath } = useParams();
    console.log("PARAMS is: ", filePath);

    const updatedPath = `https://OSL-backend.chickenkiller.com/files/${filePath}`;
    console.log("Updated path is: ", updatedPath);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    

    useEffect(() => {
        console.log("Document path or state changed. Resetting page number to 1.");
        setPageNumber(1);
    }, [updatedPath]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        console.log("Document loaded successfully. Number of pages: ", numPages);
        setNumPages(numPages);
    };

    const nextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <div className="wrap">
            <div className="controls">
                <button onClick={prevPage} disabled={pageNumber === 1}>
                    Prev
                </button>
                <button onClick={nextPage} disabled={pageNumber === numPages}>
                    Next
                </button>
            </div>
            <Document
                file={updatedPath}
                onLoadSuccess={onDocumentLoadSuccess}
                onContextMenu={(e) => e.preventDefault()}
                className="pdf-container"
                key={updatedPath}
                
            >
                <Page pageNumber={pageNumber} className="page-main"
                 renderTextLayer={false}
                 renderAnnotationLayer={false} 
                 />
            </Document>
        </div>
    );
};

export default PdfView;
