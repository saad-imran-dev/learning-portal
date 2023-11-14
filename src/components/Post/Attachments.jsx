import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import VideoPlayer from './VideoPlayer'
import Media from './Media'
import MediaViewer from './MediaViewer'
import cat from '../../assets/stupid.cat.mp4'
import cv from '../../assets/Muhammad Saad resume.pdf'
import txt from '../../assets/lab 9.txt'

function Attachments() {
    const [doc, setDoc] = useState({
        show: false,
        uri: ''
    })

    function showDoc(source) {
        setDoc(prevState => ({
            ...prevState,
            show: true,
            uri: source,
        }))
    }

    function closeDoc() {
        setDoc(prevState => ({
            ...prevState,
            show: false,
        }))
    }

    return (
        <Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                <VideoPlayer source={cat} />
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 200px))', gap: 2 }}>
                <Media name={'Muhammad Saad Resume.pdf'} source={cv} showDoc={showDoc} />
                <Media name={'lab 9.txt'} source={txt}  showDoc={showDoc} />
            </Box>

            {doc.show && <MediaViewer source={doc.uri} closeDoc={closeDoc} />}

        </Box>
    )
}

export default Attachments