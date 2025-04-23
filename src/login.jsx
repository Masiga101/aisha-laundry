import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Link,
  InputAdornment,
  IconButton,
  Paper
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your authentication logic here
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Box
            component="img"
            sx={{ height: 60, mr: 1 }}
            alt="Aisha Drycleaners Logo"
            src="https://via.placeholder.com/60"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', lineHeight: 1.1 }}>
              AISHA DRYCLEANERS
            </Typography>
            <Typography variant="caption" color="primary" sx={{ fontStyle: 'italic' }}>
              SINCE 1997
            </Typography>
          </Box>
        </Box>

        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          Log in
        </Typography>
        
        <Box sx={{ width: '100%', mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Don't have an account?
            <Link href="#" color="secondary" sx={{ ml: 1, fontWeight: 'medium' }}>
              Sign up
            </Link>
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2, mt: 0 }}
          />
          
          <Typography variant="body2" sx={{ mb: 1 }}>
            Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3, mt: 0 }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ 
              mt: 2, 
              mb: 3, 
              py: 1.5,
              backgroundColor: '#800080', 
              '&:hover': {
                backgroundColor: '#660066',
              }
            }}
          >
            Log in
          </Button>
          
          <Box sx={{ textAlign: 'center' }}>
            <Link href="#" variant="body2" color="textSecondary">
              Forgot Password?
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;