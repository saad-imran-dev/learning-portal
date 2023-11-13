import React from 'react'
import { Typography, Box, Divider, Container, Paper } from '@mui/material'
import Attachments from '../components/Post/Attachments'
import Navbar from '../components/common/Navbar'

function Post() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ p: 3, mt: '10vh' }}>
                <Typography variant='h3' >Stupid Cats</Typography>
                <Divider sx={{ my: 2 }} />
                <Attachments />
                <Paper sx={{ my: 5, p: 3, backgroundColor: 'white', borderRadius: 2 }} elevation={1} >
                    <Typography>
                        Some Content
                    </Typography>
                </Paper>
            </Box>
        </Box>
    )
}

export default Post