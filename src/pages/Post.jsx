import React, { useEffect } from 'react'
import { Typography, Box, Divider, Paper } from '@mui/material'
import Attachments from '../components/Post/Attachments'
import Navbar from '../components/common/Navbar'
import { useSelector } from 'react-redux'

function Post() {
    const post = useSelector(state => state.post.post)
    console.log(post)

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ p: 3, mt: '10vh' }}>
                <Typography variant='h3' >{post?.title}</Typography>
                <Divider sx={{ my: 2 }} />
                <Attachments attachments={post?.attachments} />
                <Paper sx={{ my: 5, p: 3, backgroundColor: 'white', borderRadius: 2 }} elevation={1} >
                    <Typography>{post?.content}</Typography>
                </Paper>
            </Box>
        </Box>
    )
}

export default Post