import React, { useState } from 'react'
import { Typography, TextField, Button, Paper } from '@mui/material'

const RegisterForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [apikey, setApikey] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleRepasswordChange = (event) => {
        setRepassword(event.target.value)
    }

    const handleAPIkeyChange = (event) => {
        setApikey(event.target.value)
    }

    const handleSignUp = () => {
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
                Registration
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Re-type password"
                type="re-type password"
                variant="outlined"
                fullWidth
                value={repassword}
                onChange={handleRepasswordChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Github API key"
                type="apikey"
                variant="outlined"
                fullWidth
                value={apikey}
                onChange={handleAPIkeyChange}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                sx={{ ml: '80%' }}
            >
                Sign Up
            </Button>
        </Paper>
    )
}

export { RegisterForm }
