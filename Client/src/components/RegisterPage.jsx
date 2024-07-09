import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <Box className='flex justify-center items-center min-h-screen bg-gray-900'>
            <div className='bg-gray-300 rounded-lg shadow-md p-8 w-full max-w-md'>
                <div className='flex flex-col items-center space-y-6'>
                    <AppRegistrationSharpIcon 
                        fontSize='large' 
                        className='text-pink-700 h-20 w-20'
                    />
                    <TextField required fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        type='email'
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    
                    <Button 
                        variant="contained" 
                        disableElevation 
                        fullWidth 
                        size="large"
                        className='bg-pink-700 hover:bg-pink-800 transition-colors'
                    >
                        REGISTER
                    </Button>
                    <Link to ='/login'><div className='cursor-pointer'>Existing User? Click here to Login</div></Link>
                </div>
            </div>
        </Box>
  )
}

export default RegisterPage