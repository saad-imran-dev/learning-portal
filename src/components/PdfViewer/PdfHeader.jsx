import React from 'react'
import { Box, Typography } from '@mui/material'
import { faBackwardStep, faDownload } from '@fortawesome/free-solid-svg-icons';
import PdfBtn from './PdfBtn'

function PdfHeader({ setPageNumber, numPages, width, name, downloadLink }) {
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
            <PdfBtn icon={faBackwardStep} handleClick={
                () => setPageNumber(prevPage => {
                    if (prevPage == 1) return prevPage
                    return prevPage - 1
                })}
            />
            <PdfBtn icon={faBackwardStep} rotation={180} handleClick={
                () => setPageNumber(prevPage => {
                    if (prevPage == numPages) return prevPage
                    return prevPage + 1
                })}
            />
            <a
                href={downloadLink}
                download={name}
                target="_blank"
                rel="noreferrer"
            >
                <PdfBtn icon={faDownload} />
            </a>
        </Box>
    )
}

export default PdfHeader