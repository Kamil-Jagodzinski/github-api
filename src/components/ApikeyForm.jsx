import React, { useState } from 'react'
import { Typography, TextField, Button, Paper } from '@mui/material'

const ApikeyForm = (props) => {
    const [key, setKey] = useState('')

    const handleKeyChange = (event) => {
        setKey(event.target.value)
    }

    const handleChange = () => {
        props.onClose()
    }

    return (
        <Paper
            sx={{
                border: '2px solid #4682b4',
                p: 2,
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Github API key change
            </Typography>
            <TextField
                label="API key"
                variant="outlined"
                fullWidth
                value={key}
                onChange={handleKeyChange}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleChange}
                sx={{ ml: '80%' }}
            >
                Set new key
            </Button>
        </Paper>
    )
}

export { ApikeyForm }
