import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import React from 'react'

function ImageBtn({ handleClick, icon, rotation }) {
    return (
        <Button
            variant='contained'
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={icon} rotation={rotation ? rotation : 0} />
        </Button>
    )
}

export default ImageBtn