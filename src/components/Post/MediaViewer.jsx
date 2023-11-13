import { Box } from '@mui/material';
import React from 'react'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import cv from '../../assets/Muhammad Saad resume.pdf'

function MediaViewer({ source, closeDoc }) {
    const docs = [
        { uri: cv }, // Local File
    ];

    function close(e) {
        e.stopPropagation();
        if (e.target.id === 'outside-doc') {
            closeDoc()
        }
    }

    return (
        <Box
            id='outside-doc'
            sx={{
                position: 'absolute',
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
            <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
                style={{ width: '75vw', height: '100vh', overflow: 'auto' }}
                config={{
                    header: {
                        disableHeader: false,
                        disableFileName: false,
                        retainURLParams: false,
                    },
                    csvDelimiter: ",", // "," as default,
                    pdfZoom: {
                        defaultZoom: 1.1, // 1 as default,
                        zoomJump: 0.2, // 0.1 as default,
                    },
                    pdfVerticalScrollByDefault: true, // false as default
                }}
            />
        </Box>
    );
}

export default MediaViewer