import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function Media({ name, type, source, showDoc }) {
    return (
        <Card sx={{ display: 'flex', width: 200, p: 3, pl: 0, cursor: 'pointer' }} elevation={2} onClick={() => showDoc(source)} >
            <Box sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ borderRadius: '100%', backgroundColor: '#dddddd' }}>
                    <FontAwesomeIcon icon={faFile} size='2xl' />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="div" variant="body1">
                    {name}
                </Typography>
            </Box>
        </Card>
    )
}

export default Media