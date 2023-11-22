import React from 'react'
import { Typography, Box, Divider, Paper } from '@mui/material'
import Attachments from '../components/Post/Attachments'
import Navbar from '../components/common/Navbar'
import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../features/api.slice'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm' 

const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjExIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3R1ZGVudCIsImV4cCI6MTcwMDc0NTY1OX0.b2lKJb5B0WQme1_NOasArB_8DzEa4uTX0iQjDLuzaJtcKlx48WpyLFwfXNLfVzzzw7vy23kMSiQKJK-2spT2EA'

function Post() {
    const { id } = useParams()
    const { data, refetch, isLoading, isError } = useGetPostQuery({ token: token, id })

    if (isLoading) return <div>loading...</div>
    if (isError) return <div>oh no, an error!</div>

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ p: 3, mt: '10vh' }}>
                <Typography variant='h3' >{data?.title}</Typography>
                <Divider sx={{ my: 2 }} />
                <Attachments attachments={data?.attachments} />
                <Paper sx={{ my: 5, p: 3, backgroundColor: 'white', borderRadius: 2 }} elevation={1} >
                    <Typography>
                        <Markdown remarkPlugins={[remarkGfm]}>{data?.content}</Markdown>
                    </Typography>
                </Paper>
            </Box>
        </Box>
    )
}

export default Post