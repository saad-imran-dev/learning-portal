import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import PdfHeader from './PdfHeader';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

function PdfViewer({ source, closeDoc }) {
    const width = 600

    function close(e) {
        e.stopPropagation();
        if (e.target.id === 'outside-doc') {
            closeDoc()
        }
    }

    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState();
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false)
    }

    return (
        <Box
            id='outside-doc'
            sx={{
                position: 'absolute',
                zIndex: 20,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.35)',
            }}
            onClick={close}
        >
            <Box sx={{ height: '100vh' }}>
                {!loading &&
                    <PdfHeader
                        setPageNumber={setPageNumber}
                        numPages={numPages}
                        width={width + 50}
                        name={source.split('/').slice(-1)}
                        downloadLink={source}
                    />
                }
                <Box sx={{
                    height: loading ? '100vh' : '90vh',
                    width: width + 50,
                    overflow: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    {!loading &&
                        <Typography variant='body2'
                            sx={{ color: 'rgba(0,0,0,0.6)', position: 'absolute', bottom: 0, zIndex: 100, ml: 'auto', width }}
                        >
                            Page {pageNumber} of {numPages}
                        </Typography>
                    }
                    <Document file={source} onLoadSuccess={onDocumentLoadSuccess}
                        loading={<CircularProgress />}
                    >
                        <Page pageNumber={pageNumber} width={width}
                            loading={<CircularProgress />}
                        />
                    </Document>
                </Box>
            </Box>
        </Box>

    )
}

export default PdfViewer