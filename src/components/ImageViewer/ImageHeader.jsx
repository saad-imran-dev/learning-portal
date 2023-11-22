import React from 'react'
import { Box, Typography } from '@mui/material'
import { faDownload, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import ImageBtn from './ImageBtn'

function ImageHeader({ width, name, downloadLink, setWidth, scale }) {
    return (
        <Box sx={{
            height: '10vh',
            width: width,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 2,
            backgroundColor: 'rgba(255,255,255,0.9)'
        }}>
            <Typography variant={'h6'} sx={{ mr: 'auto' }}>{name}</Typography>
            <ImageBtn icon={faPlus} handleClick={() => setWidth(prevWidth => prevWidth * (1 + scale))}
            />
            <ImageBtn icon={faMinus} rotation={180} handleClick={() => setWidth(prevWidth => prevWidth * (1 - scale))}
            />
            <a
                href={downloadLink}
                download={name}
                target="_blank"
                rel="noreferrer"
            >
                <ImageBtn icon={faDownload} />
            </a>
        </Box>
    )
}

export default ImageHeader