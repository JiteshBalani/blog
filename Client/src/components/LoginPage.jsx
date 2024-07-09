import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputSharpIcon from '@mui/icons-material/InputSharp';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Box className='flex justify-center items-center min-h-screen bg-gray-900'>
            <div className='bg-gray-300 rounded-lg shadow-md p-8 w-full max-w-md'>
                <div className='flex flex-col items-center space-y-6'>
                    <InputSharpIcon 
                        fontSize='large' 
                        className='text-pink-700 h-20 w-20'
                    />
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
                    <div className='self-start'>
                        <a href="#" className='text-sm text-blue-600 hover:text-blue-800 transition-colors'>
                            Forgot Password?
                        </a>
                    </div>
                    <Button 
                        variant="contained" 
                        disableElevation 
                        fullWidth 
                        size="large"
                        className='bg-pink-700 hover:bg-pink-800 transition-colors'
                    >
                        LOGIN
                    </Button>
                    <Link to ='/register'><div className='cursor-pointer'>New User? Click here to Register</div></Link>
                </div>
            </div>
        </Box>
    )
}

export default LoginPage