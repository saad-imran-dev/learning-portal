import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router'

function Error() {
    const navigate = useNavigate()

    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                p: 5.5,
                backgroundColor: 'white',
                borderRadius: 2
            }}>
                <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'red' }} size='2x' />
                <Typography variant='h6'>Something Went Wrong !</Typography>
                <Box sx={{ display: 'flex', gap: 2, width: '100%' }} >
                    <Button variant='contained' sx={{ borderRadius: 2, width: '50%' }} color='grey'
                        onClick={() => navigate('/')}
                    >
                        Back
                    </Button>

                    <Button variant='contained' sx={{ borderRadius: 2, width: '50%' }} color='red'
                        onClick={() => location.reload()}
                    >
                        Reload
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Error