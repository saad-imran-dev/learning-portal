import { Box } from '@mui/material';
import React, { useState } from 'react'
import ImageHeader from './ImageHeader';

function ImageViewer({ source, closeDoc }) {
    const [imageWidth, setImageWidth] = useState(400)
    const scale = 0.1
    const width = 600

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
                <ImageHeader
                    width={width + 50}
                    name={source.split('/').slice(-1)}
                    downloadLink={source}
                    setWidth={setImageWidth}
                    scale={scale}
                />
                <Box sx={{
                    height: '90vh',
                    width: width + 50,
                    overflow: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    <img src={source} alt={`image of ${source.split('/').slice(-1)}`} style={{ width: imageWidth }} />
                </Box>
            </Box>
        </Box>

    )
}

export default ImageViewer