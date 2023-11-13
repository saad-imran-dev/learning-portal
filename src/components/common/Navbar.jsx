import React from 'react'
import { Avatar, Box, Button, Paper, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <Paper sx={{
            height: '10vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            px: 3,
            position: 'fixed',
            zIndex: 10
        }} >
            <Typography sx={{ mr: 'auto' }}>Navbar</Typography>
            <Button color='primary' variant='contained' >
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                create
            </Button>
            <Avatar />
        </Paper>
    )
}

export default Navbar