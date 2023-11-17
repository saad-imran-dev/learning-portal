import React from 'react'
import { Typography, Box, Divider, Container, Paper } from '@mui/material'
import Attachments from '../components/Post/Attachments'
import Navbar from '../components/common/Navbar'

function createPost() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ p: 3, mt: '10vh' }}>
                <Paper sx={{ my: 5, p: 3, backgroundColor: 'white', borderRadius: 2 }} elevation={1} >
                    <Typography>
                        Some Content
                    </Typography>
                </Paper>
            </Box>
        </Box>
    )
}

export default createPost