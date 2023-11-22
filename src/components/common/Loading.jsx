import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Loading() {
    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <CircularProgress />
        </Box> 
  )
}

export default Loading