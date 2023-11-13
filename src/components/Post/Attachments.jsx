import React from 'react'
import { Box, Typography } from '@mui/material'
import VideoPlayer from './VideoPlayer'
import cat from '../../assets/stupid.cat.mp4'
import Media from './Media'

function Attachments() {
    return (
        <Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                <VideoPlayer source={cat} />
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 200px))', gap: 2}}>
                <Media name={'document.pdf'} />
                <Media name={'document.pdf'} />
                <Media name={'document.pdf'} />
            </Box>
        </Box>
    )
}

export default Attachments